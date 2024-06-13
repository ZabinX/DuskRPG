(function(){var P$=Clazz.newPackage("sun.applet"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AppletEventMulticaster", null, null, 'sun.applet.AppletListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['a','sun.applet.AppletListener','+b']]]

Clazz.newMeth(C$, 'c$$sun_applet_AppletListener$sun_applet_AppletListener',  function (a, b) {
;C$.$init$.apply(this);
this.a=a;
this.b=b;
}, 1);

Clazz.newMeth(C$, 'appletStateChanged$sun_applet_AppletEvent',  function (e) {
this.a.appletStateChanged$sun_applet_AppletEvent(e);
this.b.appletStateChanged$sun_applet_AppletEvent(e);
});

Clazz.newMeth(C$, 'add$sun_applet_AppletListener$sun_applet_AppletListener',  function (a, b) {
return C$.addInternal$sun_applet_AppletListener$sun_applet_AppletListener(a, b);
}, 1);

Clazz.newMeth(C$, 'remove$sun_applet_AppletListener$sun_applet_AppletListener',  function (l, oldl) {
return C$.removeInternal$sun_applet_AppletListener$sun_applet_AppletListener(l, oldl);
}, 1);

Clazz.newMeth(C$, 'addInternal$sun_applet_AppletListener$sun_applet_AppletListener',  function (a, b) {
if (a == null ) return b;
if (b == null ) return a;
return Clazz.new_(C$.c$$sun_applet_AppletListener$sun_applet_AppletListener,[a, b]);
}, 1);

Clazz.newMeth(C$, 'remove$sun_applet_AppletListener',  function (oldl) {
if (oldl === this.a ) return this.b;
if (oldl === this.b ) return this.a;
var a2=C$.removeInternal$sun_applet_AppletListener$sun_applet_AppletListener(this.a, oldl);
var b2=C$.removeInternal$sun_applet_AppletListener$sun_applet_AppletListener(this.b, oldl);
if (a2 === this.a  && b2 === this.b  ) {
return this;
}return C$.addInternal$sun_applet_AppletListener$sun_applet_AppletListener(a2, b2);
});

Clazz.newMeth(C$, 'removeInternal$sun_applet_AppletListener$sun_applet_AppletListener',  function (l, oldl) {
if (l === oldl  || l == null  ) {
return null;
} else if (Clazz.instanceOf(l, "sun.applet.AppletEventMulticaster")) {
return (l).remove$sun_applet_AppletListener(oldl);
} else {
return l;
}}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:42 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
