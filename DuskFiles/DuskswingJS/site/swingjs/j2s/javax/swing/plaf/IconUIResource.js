(function(){var P$=Clazz.newPackage("javax.swing.plaf"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "IconUIResource", null, null, ['javax.swing.Icon', 'javax.swing.plaf.UIResource']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['delegate','javax.swing.Icon']]]

Clazz.newMeth(C$, 'c$$javax_swing_Icon',  function (delegate) {
;C$.$init$.apply(this);
if (delegate == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["null delegate icon argument"]);
}this.delegate=delegate;
}, 1);

Clazz.newMeth(C$, 'paintIcon$java_awt_Component$java_awt_Graphics$I$I',  function (c, g, x, y) {
this.delegate.paintIcon$java_awt_Component$java_awt_Graphics$I$I(c, g, x, y);
});

Clazz.newMeth(C$, 'getIconWidth$',  function () {
return this.delegate.getIconWidth$();
});

Clazz.newMeth(C$, 'getIconHeight$',  function () {
return this.delegate.getIconHeight$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:09 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
