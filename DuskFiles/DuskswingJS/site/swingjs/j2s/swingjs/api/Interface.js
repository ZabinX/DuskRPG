(function(){var P$=Clazz.newPackage("swingjs.api"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Interface");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['S',['instances']]]

Clazz.newMeth(C$, 'getInstanceWithParams$S$ClassA$OA',  function (name, classes, params) {
try {
var cl=Clazz.forName(name);
return cl.getConstructor$ClassA(classes).newInstance$OA(params);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return null;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'getInstance$S$Z',  function (name, isQuiet) {
var x=null;
{
Clazz._isQuietLoad = isQuiet;
}
try {
if (!isQuiet && C$.instances.indexOf$S(name + ";") <= 0 ) {
System.out.println$S("swingjs.api.Interface creating instance of " + name);
C$.instances+=name + ";";
}var y=Clazz.forName(name);
if (y != null ) x=y.newInstance$();
} catch (e) {
System.out.println$S("Swingjs.api.Interface Error creating instance for " + name + ": \n" + e );
{
if (e.stack)System.out.println(e.stack);
}
} finally {
{
Clazz._isQuietLoad = false;
}
}
return x;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.instances="";
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:03 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
