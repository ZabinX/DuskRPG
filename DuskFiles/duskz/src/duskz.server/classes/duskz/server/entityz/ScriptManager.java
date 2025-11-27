/*/*
 * This file is part of DuskZ, a graphical mud engine.
 *
 * Copyright (C) 2013 Michael Zucchi <notzed@gmail.com>
 *
 * DuskZ is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * DuskZ is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with DuskZ; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
 */
/**
 * Changes
 */
package duskz.server.entityz;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FilePermission;
import java.io.FileReader;
import java.security.AccessControlContext;
import java.security.AccessController;
import java.security.CodeSource;
import java.security.Permissions;
import java.security.PrivilegedAction;
import java.security.ProtectionDomain;
import java.security.cert.Certificate;
import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.concurrent.LinkedBlockingDeque;
import java.util.concurrent.ThreadFactory;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.script.Bindings;
import javax.script.Invocable;
import javax.script.ScriptContext;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.SimpleScriptContext;

/**
 * Manages the (javascript) engine
 * <p>
 * Doing this securely is complicated, so is likely to be buggy and not really
 * secure ...
 * <p>
 * I found I had to create the script engine itself from the same doPrivileged()
 * invocation or it simply broke the sanboxing. Hence all script execution is
 * performed from a pool of threads created from the same sandbox.
 * <p>
 * Another thread monitors the pool checking for out of control scripts (i.e.
 * they take too long to run).
 *
 * @author notzed
 */
public class ScriptManager {

	AccessControlContext ac;
	ScriptEngine engine;
	LinkedBlockingDeque<ScriptData> queue = new LinkedBlockingDeque<>();
	int nthreads = 2;
	ExecutorService pool;
	static ThreadLocal<ScriptContext> contexts;
	// some sort of shit here for monitoring threads
	HashMap<Thread, Long> active = new HashMap<>();

	public ScriptManager() {
		Permissions perms = new Permissions();

		// FIXME: fix security manager for the actual paths used
		//perms.add(new AllPermission());
		perms.add(new FilePermission("scripts/*", "read,write"));
		//	perms.add(new NetPermission("*"));
		//perms.add(new RuntimePermission("accessDeclaredMembers"));
		// Cast to Certificate[] required because of ambiguity:
		ProtectionDomain domain = new ProtectionDomain(new CodeSource(null, (Certificate[])null), perms);
		ac = new AccessControlContext(new ProtectionDomain[]{domain});
	}

	public void start() {
		AccessController.doPrivileged(new PrivilegedAction<Object>() {
			@Override
			public Object run() {
				// If the engine is created here it needs to be used here too.
				ScriptEngineManager factory = new ScriptEngineManager();
				engine = factory.getEngineByName("JavaScript");
				contexts = new ThreadLocal<>();
				pool = Executors.newFixedThreadPool(2, new ThreadFactory() {
					@Override
					public Thread newThread(Runnable r) {
						Thread t = new Thread(r);

						t.setDaemon(true);
						return t;
					}
				});

				// TOOD: anything else I want to do here?  A management/monitoring thread?
				return null;
			}
		}, ac);

		new WatchThread().start();
	}

	public <T> Future<T> runScript(String script, Object... args) throws ClassCastException {
		return pool.submit(new ScriptData(script, args));
	}

	public <T> Future<T> runScript(File script, Object... args) throws FileNotFoundException, ClassCastException {
		return pool.submit(new ScriptData(script, args));
	}

	synchronized void startJob(Thread t) {
		active.put(t, System.currentTimeMillis());
	}

	synchronized void endJob(Thread t) {
		active.remove(t);
	}

	synchronized void watchdog() {
		// So there is no way to interrupt the executing thread!
		// Well it mozilla code after-all ...

		// So i'm forced to use stop with all its apparent dangers.
		long now = System.currentTimeMillis();
		for (Entry<Thread, Long> e: active.entrySet()) {
			if ((now - e.getValue()) > 1000) {
				System.out.println("Job taking too long, interrupting it!");
				//e.getKey().interrupt();
				e.getKey().stop();
			}
		}
	}

	class WatchThread extends Thread {

		public WatchThread() {
			setDaemon(true);
		}

		@Override
		public void run() {
			while (true) {
				try {
					sleep(1000);

					watchdog();
				} catch (InterruptedException ex) {
					Logger.getLogger(ScriptManager.class.getName()).log(Level.SEVERE, null, ex);
				}
			}
		}
	};

	class ScriptData<T> implements Callable<T> {

		FileReader scriptReader;
		String script;
		Map<String, Object> args = new HashMap<>();

		public ScriptData(String script, Object... args) {
			for (int i = 0; i < args.length; i += 2) {
				this.args.put((String)args[i], args[i + 1]);
			}
			this.script = script;
		}

		public ScriptData(File scriptFile, Object... args) throws FileNotFoundException, ClassCastException {
			for (int i = 0; i < args.length; i += 2) {
				this.args.put((String)args[i], args[i + 1]);
			}
			this.scriptReader = new FileReader(scriptFile);
		}

		@Override
		public T call() throws Exception {
			T res = null;
			try {
				ScriptContext ctx = contexts.get();
				if (ctx == null) {
					ctx = new SimpleScriptContext();
					contexts.set(ctx);
				}
				Bindings b = ctx.getBindings(ScriptContext.ENGINE_SCOPE);

				b.clear();
				b.putAll(args);

				System.out.println("invoke [");
				for (String s: b.keySet()) {
					System.out.printf("arg %s: %s\n", s, b.get(s));
				}
				System.out.println("]\n");

				startJob(Thread.currentThread());
				if (scriptReader != null)
					res = (T)engine.eval(scriptReader, b);
				else
					res = (T)engine.eval(script, b);
				//			lastStart = -1;
				b.clear();
			} finally {
				endJob(Thread.currentThread());
				if (scriptReader != null)
					scriptReader.close();
			}
			return res;
		}
	};

	public static class Bob {
		public String bob() {
			System.out.println("bob called\n");
			return "3";
		}
	}
	public static void main(String[] args) {

		if (true) {
			try {
				ScriptEngine engine = new ScriptEngineManager().getEngineByName("JavaScript");
				System.out.println(engine);
				engine.eval("""
                function foo(trigger) {
                print(trigger.hashCode());
                                print(typeof trigger);
                print(typeof trigger.bob);
                print(typeof trigger['bob']);
				print(trigger.bob());
                }
                """);
				Invocable invocable = (Invocable)engine;

				Bob b = new Bob();
				Object x = invocable.invokeFunction("foo", b);
				System.out.println(x);
			} catch (Exception ex) {
				ex.printStackTrace(System.out);
			}
			return;
		}

		// Lets see if it the security shit works
		ScriptManager sm = new ScriptManager();

		sm.start();

		Future f;

		try {
			f = sm.runScript("1;");
			System.out.println("result = " + f.get());
		} catch (Exception ex) {
			ex.printStackTrace(System.out);
		}
		try {
			f = sm.runScript("if (true) 0; else 1;");
			System.out.println("result = " + f.get());
		} catch (Exception ex) {
			System.out.println(ex);
		}

		try {
			String s = "var out = new java.io.FileOutputStream('hack-thread.txt');"
				+ " out.write(65);"
				+ "out.close();"
				+ " println('wrote hack.txt ok');";

			f = sm.runScript(s);
			System.out.println("result = " + f.get());
		} catch (Exception ex) {
			System.out.println(ex);
		}
		try {
			f = sm.runScript(new File("hack.script"));
			System.out.println("result = " + f.get());
		} catch (Exception ex) {
			System.out.println(ex);
		}
		try {
			String s = "var out = new java.io.FileInputStream('hack.script');"
				+ "out.close();"
				+ " println('read hack.script ok');";

			f = sm.runScript(s);
			System.out.println("result = " + f.get());
		} catch (Exception ex) {
			System.out.println(ex);
		}
		try {
			String s = "while (true);";
			f = sm.runScript(s);
			System.out.println("result = " + f.get());
		} catch (Exception ex) {
			System.out.println(ex);
		}
		try {
			String s = "while (true);";
			f = sm.runScript(s);
			System.out.println("result = " + f.get());
		} catch (Exception ex) {
			System.out.println(ex);
		}
		try {
			String s = "var out = new java.io.FileOutputStream('scripts/newscript');"
				+ " out.write(65);"
				+ "out.close();"
				+ " println('wrote scripts/newscript ok');";

			f = sm.runScript(s);
			System.out.println("result = " + f.get());
		} catch (Exception ex) {
			System.out.println(ex);
		}
		try {
			String s = "while (true);";
			f = sm.runScript(s);
			System.out.println("result = " + f.get());
		} catch (Exception ex) {
			System.out.println(ex);
		}
	}
}
