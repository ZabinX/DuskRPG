(function(){var P$=Clazz.newPackage("sun.swing"),p$1={},I$=[[0,'java.awt.Color']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SwingLazyValue", null, null, [['javax.swing.UIDefaults','javax.swing.UIDefaults.LazyValue']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['className','methodName'],'O',['args','Object[]']]]

Clazz.newMeth(C$, 'c$$S',  function (c) {
C$.c$$S$S$OA.apply(this, [c, null, null]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S',  function (c, m) {
C$.c$$S$S$OA.apply(this, [c, m, null]);
}, 1);

Clazz.newMeth(C$, 'c$$S$OA',  function (c, o) {
C$.c$$S$S$OA.apply(this, [c, null, o]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$OA',  function (c, m, o) {
;C$.$init$.apply(this);
this.className=c;
this.methodName=m;
if (o != null ) {
this.args=o.clone$();
}}, 1);

Clazz.newMeth(C$, 'createValue$javax_swing_UIDefaults',  function (table) {
try {
if (this.className.indexOf$S("$") > 0) {
var cname=this.className;

Clazz.load(cname.replace("$","$.").split("$"));
}var c=Clazz.forName(this.className, true, null);
if (this.methodName != null ) {
var types=p$1.getClassArray$OA.apply(this, [this.args]);
var m=c.getMethod$S$ClassA(this.methodName, types);
return m.invoke$O$OA(c, this.args);
} else {
var types=p$1.getClassArray$OA.apply(this, [this.args]);
var constructor=c.getConstructor$ClassA(types);
return constructor.newInstance$OA(this.args);
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S("Error in sun.swing.SwingLazyValue.createValue for " + this.className);
} else {
throw e;
}
}
return null;
});

Clazz.newMeth(C$, 'getClassArray$OA',  function (args) {
var types=null;
if (args != null ) {
types=Clazz.array(Class, [args.length]);
for (var i=0; i < args.length; i++) {
if (Clazz.instanceOf(args[i], "java.lang.Integer")) {
types[i]=Integer.TYPE;
} else if (Clazz.instanceOf(args[i], "java.lang.Boolean")) {
types[i]=Boolean.TYPE;
} else if (Clazz.instanceOf(args[i], "javax.swing.plaf.ColorUIResource")) {
types[i]=Clazz.getClass($I$(1));
} else {
types[i]=args[i].getClass$();
}}
}return types;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:50 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
