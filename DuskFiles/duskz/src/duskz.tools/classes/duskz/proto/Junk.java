/*
 * Jus test code, public domain
 */
package duskz.proto;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FilePermission;
import java.io.IOException;
import java.lang.reflect.ReflectPermission;
import java.net.NetPermission;
import java.security.AccessControlContext;
import java.security.AccessControlException;
import java.security.AccessController;
import java.security.CodeSource;
import java.security.Permission;
import java.security.Permissions;
import java.security.PrivilegedAction;
import java.security.ProtectionDomain;
import java.security.cert.Certificate;
import java.util.Map.Entry;
import java.util.PropertyPermission;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.script.Bindings;
import javax.script.Compilable;
import javax.script.CompiledScript;
import javax.script.Invocable;
import javax.script.ScriptContext;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import javax.script.SimpleScriptContext;

/**
 * This is just a place holder to test stuff in the ide
 *
 *
 * for security test: java -Djava.security.manager -Djava.security.policy=dusk.policy -classpath dist/DuskCommon.jar au.dusk.Junk
 *
 * @author notzed
 */
public class Junk {

	int MapColumns = 64;
	int MapRows = 64;
	int viewrange = 7;
	int mapsize = 1 + (2 * viewrange);

	public void chatMessage(String inMessage, int intLocX, int intLocY, String strFrom) {

		System.out.printf("look at %d,%d\n", intLocX, intLocY);


		int mx, y0, my;
		mx = 0;
		if (intLocX - viewrange < 0) {
			mx = -1 * (intLocX - viewrange);
		}
		y0 = 0;
		if (intLocY - viewrange < 0) {
			y0 = -1 * (intLocY - viewrange);
		}
		for (; mx < mapsize; mx++) {
			if (intLocX + mx - viewrange < MapColumns) {
				for (my = y0; my < mapsize; my++) {
					if (intLocY + my - viewrange < MapRows) {
						int x = intLocX + mx - viewrange;
						int y = intLocY + my - viewrange;

						System.out.printf("visit %d,%d\n", x, y);
					}
				}
			}
		}
	}

	public static class Hidden {

		void none() {
			System.out.println("none done");
		}

		public void tryPublic() {
			System.out.println("public done");
		}

		private void tryPrivate() {
			System.out.println("private done");
		}
	}

	public static class Thing {

		FileOutputStream fos;

		public Thing() {
			try {
				fos = new FileOutputStream("foo.txt");
			} catch (FileNotFoundException ex) {
				Logger.getLogger(Junk.class.getName()).log(Level.SEVERE, null, ex);
			}
		}

		public Hidden getHidden() {
			return new Hidden();
		}

		public boolean isPet() {
			return false;
		}

		public boolean hasCondition(String name) {
			System.out.println("has trigger " + name);
			return true;
		}

		public void removeCondition(String name) {
			System.out.println("remove trigger " + name);
		}

		public void moveTo(int x, int y) {
			System.out.println("move to " + x + "," + y);
		}

		public void chat(String what) {
			try {
				//fos = new FileOutputStream("foo.txt");
				fos.write(what.getBytes());
				//fos.close();
			} catch (IOException ex) {
				Logger.getLogger(Junk.class.getName()).log(Level.SEVERE, null, ex);
			}
		}
	}

	static class ScriptManager extends SecurityManager {

		@Override
		public void checkSecurityAccess(String target) {
			System.out.println("check security access: " + target);
			super.checkSecurityAccess(target);
		}

		@Override
		public void checkAccess(Thread t) {
			System.out.println("Check access thread: " + t);
			super.checkAccess(t);
		}

		@Override
		public void checkAccess(ThreadGroup g) {
			System.out.println("Check access threadgroup: " + g);
			super.checkAccess(g);
		}

		@Override
		public void checkDelete(String file) {
			System.out.println("check delete");
			super.checkDelete(file);
		}

		@Override
		public void checkCreateClassLoader() {
			System.out.println("checkcreateclassloader");
			super.checkCreateClassLoader();
		}

		@Override
		public void checkExec(String cmd) {
			System.out.println("check exec: " + cmd);
			super.checkExec(cmd);
		}

		@Override
		public void checkExit(int status) {
			System.out.println("check exit");
			super.checkExit(status);
		}

		@Override
		public void checkLink(String lib) {
			System.out.println("checklink: " + lib);
			super.checkLink(lib);
		}

		@Override
		public void checkPackageDefinition(String pkg) {
			System.out.println("check package deifnition: " + pkg);
			super.checkPackageDefinition(pkg);
		}

		@Override
		public void checkPackageAccess(String pkg) {
			System.out.println("check package: " + pkg);
			super.checkPackageAccess(pkg);

		}

		@Override
		public void checkPermission(Permission perm) {
			System.out.println("check permission: " + perm);

			if (perm instanceof FilePermission) {
				FilePermission fp = (FilePermission) perm;
				String path = fp.getName();

				// Check whitelist
				if (path.startsWith("/usr/java"))
					return;
			} else if (perm instanceof NetPermission) {
				NetPermission np = (NetPermission) perm;
				String name = np.getName();

				if (name.equals("specifyStreamHandler")) {
					return;
				}
			} else if (perm instanceof PropertyPermission) {
				PropertyPermission pp = (PropertyPermission) perm;
				String name = pp.getName();

				if (name.startsWith(("rhino."))) {
					return;
				}
				return;
			} else if (perm instanceof ReflectPermission) {
				ReflectPermission rp = (ReflectPermission) perm;
				int depth = 0;
				System.out.println("bt\n");
				for (StackTraceElement elem : Thread.currentThread().getStackTrace()) {
					//System.out.println(" " + elem);
					//if (elem.getClassName().equals("com.sun.script.javascript.RhinoScriptEngine");
					System.out.println(" " + elem.getClassName() + " " + elem.getMethodName());

					String cl = elem.getClassName();
					String m = elem.getMethodName();
					if (cl.equals("com.sun.script.javascript.RhinoScriptEngine")
							&& m.equals("getRuntimeScope")) {
						depth++;
					} else if (cl.equals("sun.org.mozilla.javascript.internal.NativeJavaMethod")
							&& m.equals("call")) {
						depth++;
					}
				}
				System.out.println("match depth = " + depth);
				if (depth == 1)
					return;
				super.checkPermission(perm);
				return;
			}

			//super.checkPermission(perm);
		}

		@Override
		public void checkPermission(Permission perm, Object context) {
			System.out.println("check permission: " + perm + " ctx: " + context);
			super.checkPermission(perm, context);
		}
	}

	static class ScriptLoader extends ClassLoader {

		@Override
		protected Package getPackage(String name) {
			System.out.println("get package: " + name);
			return super.getPackage(name);
		}

		@Override
		protected Package[] getPackages() {
			System.out.println("get packages");
			return super.getPackages();
		}

		@Override
		public Class<?> loadClass(String name) throws ClassNotFoundException {
			System.out.println("load class: " + name);
			return super.loadClass(name);
		}

		@Override
		protected Class<?> findClass(String name) throws ClassNotFoundException {
			System.out.println("find class: " + name);
			return super.findClass(name);
		}
	}
	static ScriptEngine engine;

	interface MobScript {
		void onBattle(Thing thing);
		//int getCost();
	};

	public static void main(String[] args) throws ScriptException, InterruptedException {
		if (true) {
			Thing thing = new Thing();
			final ScriptEngineManager factory = new ScriptEngineManager();
			engine = factory.getEngineByName("JavaScript");


			engine.eval("a=1;");
			engine.eval("println(a);");

			String bob = ("var bob = {"
					+ " cost:1,\n"
					+ " description:'evil bob',\n"
					+ " onBattle: function(thing) {\n"
					+ "println('on battle!');\n"
					+ " }\n"
					+ "};\n"
					+ "");

			Compilable comp = ((Compilable)engine);
			CompiledScript cbob = comp.compile(bob);


			engine.eval(bob);

			engine.eval("var bob = {\n"
					+ "cost:1,\n"
					+ "description:'kind bob',\n"
					+ "onBattle: function(thing) {\n"
					+ " println('im a pacifist!');\n"
					+ "},"
					+ "onFlee: function(thing) {"
					+ "}"
					+ "}\n");


			engine.eval(""
					+ "onBattle= function(thing) {"
					+ "println('on battle!');"
					+ " };"
					+ ""
					+ "");

			//MobScript m = ((Invocable)engine).getInterface(MobScript.class);
			//System.out.println("by interface");
			//m.onBattle(thing);

			engine.eval("var vars = { name: 'a', type: 'shit' };");

			engine.eval("function a() { println('first a'); }");
			engine.eval("a();");
			engine.eval("function a() { println('second a'); }");
			engine.eval("a();onBattle();");

			System.out.println("bob.cost = " + engine.eval("bob.cost"));
			System.out.println("bob.desc = " + engine.eval("bob.description"));

			try {
			Invocable iv = (Invocable)engine;
				iv.invokeMethod(engine.get("bob"), "onBattle", thing);

				MobScript a = ((Invocable)engine).getInterface(engine.get("bob"), MobScript.class);
				System.out.print("foo - ");
				a.onBattle(thing);
			//	System.out.println("cost? = " + a.getCost());
			} catch (NoSuchMethodException ex) {
				Logger.getLogger(Junk.class.getName()).log(Level.SEVERE, null, ex);
			}

			for (Entry<String, Object> e : engine.getBindings(ScriptContext.ENGINE_SCOPE).entrySet()) {
				System.out.println("`" + e.getKey() + "'= " + e.getValue() + " " + e.getValue().getClass().getName());
			}

			System.out.println("vars = " + engine.eval("bob.toSource();"));

			//engine.setContext(null);
			return;
		}
		if (true) {
			final ScriptLoader loader = new ScriptLoader();
			final ScriptEngineManager factory = new ScriptEngineManager(loader);
			engine = factory.getEngineByName("JavaScript");

			System.setSecurityManager(new ScriptManager());

			Permissions perms = new Permissions();
			//perms.add(new RuntimePermission("accessClassInPackage.sun.util.resources"));
			//perms.add(new AllPermission());
			//perms.add(new FilePermission("hack.txt", "read,write"));
			//	perms.add(new NetPermission("*"));
			//perms.add(new RuntimePermission("accessDeclaredMembers"));
			//perms.add(new RuntimePermission("accessClassInPackage"));
			// Cast to Certificate[] required because of ambiguity:
			ProtectionDomain domain = new ProtectionDomain(new CodeSource(null, (Certificate[]) null), perms);
			AccessControlContext ac = new AccessControlContext(new ProtectionDomain[]{domain});

			// This doesn't work: security permissions are lost in the next thing.
			// bloody odd if you ask me
			AccessController.doPrivileged(new PrivilegedAction<ScriptEngine>() {
				void eval(String what) throws ScriptException {
					System.out.println("\n\n****************\neval: " + what);
					System.out.println();
					engine.eval(what);
				}

				@Override
				public ScriptEngine run() {
					try {
						System.out.println("start script\n");
						engine.put("thing", new Thing());
						//		engine.eval("java.lang.System.out.println('system.out.println');");
						//eval("thing.moveTo(1,1);");
						eval("thing.getHidden().tryPublic();");
						//		eval("thing.getHidden().none();");
						eval("thing.getHidden().tryPrivate();");

						try (FileOutputStream fos = new FileOutputStream("hack-a")) {
							fos.write(1);
							System.out.println("wrote hack-a");
						} catch (IOException x) {
							x.printStackTrace();
						} catch (AccessControlException x) {
							x.printStackTrace(System.out);
						}

						return null;
					} catch (SecurityException ex) {
						ex.printStackTrace();
					} catch (ScriptException ex) {
						ex.printStackTrace();
					}
					return null;
				}
			}, ac);
			return;
		}
		if (true) {
			Thing thing = new Thing();

			//System.setSecurityManager(new ScriptManager());

			ScriptEngineManager factory = new ScriptEngineManager(new ScriptLoader());
			engine = factory.getEngineByName("JavaScript");
			engine.eval("java.lang.System.out.println('system.out.println');");

			return;
		}
		//new Junk().chatMessage(null, 16, 16, null);
		//new Junk().chatMessage(null, 2, 2, null);
		// create a script engine manager
		// evaluate JavaScript code from given file - specified by first argument


		try (FileOutputStream fos = new FileOutputStream("not-hack-a")) {
			fos.write(1);
			System.out.println("wrote not-hack-a");
		} catch (IOException x) {
			x.printStackTrace();
		} catch (AccessControlException x) {
			x.printStackTrace();
		}


		/*
		 SecurityManager sm = new SecurityManager() {
		 @Override
		 public void checkPermission(Permission perm, Object context) {
		 System.out.println("check perm ctx " + perm);
		 super.checkPermission(perm, context);

		 }

		 @Override
		 public void checkPermission(Permission perm) {
		 System.out.println("check perm " + perm);
		 super.checkPermission(perm);
		 }
		 };*/
		//System.setSecurityManager(sm);


		//System.setSecurityManager(new SecurityManager());

		final Thing thing = new Thing();


		Permissions perms = new Permissions();
		//perms.add(new AllPermission());
		//perms.add(new FilePermission("hack.txt", "read,write"));
		//	perms.add(new NetPermission("*"));
		//perms.add(new RuntimePermission("accessDeclaredMembers"));
		// Cast to Certificate[] required because of ambiguity:
		ProtectionDomain domain = new ProtectionDomain(new CodeSource(null, (Certificate[]) null), perms);
		AccessControlContext ac = new AccessControlContext(
				new ProtectionDomain[]{domain});

		// This doesn't work: security permissions are lost in the next thing.
		// bloody odd if you ask me
		AccessController.doPrivileged(new PrivilegedAction<ScriptEngine>() {
			@Override
			public ScriptEngine run() {
				ScriptEngineManager factory = new ScriptEngineManager();
				engine = factory.getEngineByName("JavaScript");
				return null;
			}
		});


		AccessController.doPrivileged(new PrivilegedAction<Object>() {
			@Override
			public Object run() {
				ScriptEngineManager factory = new ScriptEngineManager();
				engine = factory.getEngineByName("JavaScript");

				ScriptContext ctx = new SimpleScriptContext();
				ctx.getBindings(ScriptContext.ENGINE_SCOPE);

				System.out.println("threaded = " + engine.getFactory().getParameter("THREADING"));

				engine.put("trigger", thing);

				Runnable r = new Runnable() {
					@Override
					public void run() {
						try {
							String s = "var out = new java.io.FileOutputStream('hack-thread.txt');"
									+ " out.write(65);"
									+ "out.close();"
									+ " println('write hack.txt');";
							engine.eval(s);
						} catch (ScriptException ex) {
							ex.printStackTrace(System.out);
						} catch (AccessControlException x) {
							x.printStackTrace(System.out);
						}
					}
				};
				Thread t = new Thread(r);
				t.start();

				try {
					engine.eval("println(\"hello world\");");
					engine.eval("trigger.chat('this is a chat message from sandbox?');");
				} catch (ScriptException ex) {
					ex.printStackTrace(System.out);
				} catch (AccessControlException x) {
					x.printStackTrace(System.out);
				}
				try {
					String s = "if (!trigger.isPet() &&"
							+ "trigger.hasCondition(\"walk\")) {"
							+ " trigger.removeCondition(\"walk\");"
							+ "trigger.moveTo(177,195);"
							+ "}";

					engine.eval(s);
				} catch (ScriptException ex) {
					ex.printStackTrace(System.out);
				} catch (AccessControlException x) {
					x.printStackTrace(System.out);
				}
				try {
					String s = "var out = java.lang.System.out;"
							+ " out.println('system out');";
					engine.eval(s);
				} catch (ScriptException ex) {
					ex.printStackTrace(System.out);
				} catch (AccessControlException x) {
					x.printStackTrace(System.out);
				}
				try {
					String s = "var out = new java.io.FileOutputStream('hack.txt');"
							+ " out.write(65);"
							+ "out.close();"
							+ " println('write hack.txt');";
					engine.eval(s);
				} catch (ScriptException ex) {
					ex.printStackTrace(System.out);
				} catch (AccessControlException x) {
					x.printStackTrace(System.out);
				}

				try {
					String s = "var out = new java.net.Socket('localhost', 7475);;"
							+ " println(out);";
					engine.eval(s);
				} catch (ScriptException ex) {
					ex.printStackTrace(System.out);
				} catch (AccessControlException x) {
					x.printStackTrace(System.out);
				}
				try {
					String s = "var out = new java.lang.Thread();"
							+ " println(out);";
					engine.eval(s);
				} catch (ScriptException ex) {
					ex.printStackTrace(System.out);
				} catch (AccessControlException x) {
					x.printStackTrace(System.out);
				}
				return null;
			}
		}, ac);

		try (FileOutputStream fos = new FileOutputStream("not-hack-b")) {
			fos.write(1);
			System.out.println("wrote not-hack-b");
		} catch (IOException x) {
			x.printStackTrace();
		} catch (AccessControlException x) {
			x.printStackTrace(System.out);
		}

	}
}
