(function(){var P$=Clazz.newPackage("sun.applet"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AppletEvent", null, 'java.util.EventObject');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['id'],'O',['arg','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$O$I$O',  function (source, id, argument) {
;C$.superclazz.c$$O.apply(this,[source]);C$.$init$.apply(this);
this.arg=argument;
this.id=id;
}, 1);

Clazz.newMeth(C$, 'getID$',  function () {
return this.id;
});

Clazz.newMeth(C$, 'getArgument$',  function () {
return this.arg;
});

Clazz.newMeth(C$, 'toString',  function () {
var str=this.getClass$().getName$() + "[source=" + this.source + " + id=" + this.id ;
if (this.arg != null ) {
str+=" + arg=" + this.arg;
}str+=" ]";
return str;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:42 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
