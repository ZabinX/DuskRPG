(function(){var P$=java.lang,I$=[[0,'Shutdown','ApplicationShutdownHooks','java.util.IdentityHashMap']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ApplicationShutdownHooks");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['hooks','java.util.IdentityHashMap']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'add$Thread',  function (hook) {
if (C$.hooks == null ) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Shutdown in progress"]);
if (hook.isAlive$()) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Hook already running"]);
if (C$.hooks.containsKey$O(hook)) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Hook previously registered"]);
C$.hooks.put$O$O(hook, hook);
}, 1);

Clazz.newMeth(C$, 'remove$Thread',  function (hook) {
if (C$.hooks == null ) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Shutdown in progress"]);
if (hook == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
return C$.hooks.remove$O(hook) != null ;
}, 1);

Clazz.newMeth(C$, 'runHooks$',  function () {
var threads;
{
threads=C$.hooks.keySet$();
C$.hooks=null;
}for (var hook, $hook = threads.iterator$(); $hook.hasNext$()&&((hook=($hook.next$())),1);) {
try {
hook.run$();
} catch (t) {
System.err.println$S("ApplicationShutdownHooks exception:\n" + t);
}
}
}, 1);

C$.$static$=function(){C$.$static$=0;
{
try {
$I$(1,"add$I$Z$Runnable",[1, false, ((P$.ApplicationShutdownHooks$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ApplicationShutdownHooks$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'run$',  function () {
$I$(2).runHooks$();
});
})()
), Clazz.new_(ApplicationShutdownHooks$1.$init$,[this, null]))]);
C$.hooks=Clazz.new_($I$(3,1));
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalStateException")){
C$.hooks=null;
} else {
throw e;
}
}
};
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:16 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
