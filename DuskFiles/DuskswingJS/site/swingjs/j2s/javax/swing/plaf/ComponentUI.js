(function(){var P$=Clazz.newPackage("javax.swing.plaf"),I$=[[0,'Error',['java.awt.Component','.BaselineResizeBehavior']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ComponentUI", null, null, 'java.awt.peer.ComponentPeer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent',  function (component) {
});

Clazz.newMeth(C$, 'uninstallUI$javax_swing_JComponent',  function (c) {
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics$javax_swing_JComponent',  function (g, c) {
});

Clazz.newMeth(C$, 'update$java_awt_Graphics$javax_swing_JComponent',  function (g, c) {
});

Clazz.newMeth(C$, 'getPreferredSize$javax_swing_JComponent',  function (c) {
return null;
});

Clazz.newMeth(C$, 'getMinimumSize$javax_swing_JComponent',  function (c) {
return this.getPreferredSize$javax_swing_JComponent(c);
});

Clazz.newMeth(C$, 'getMaximumSize$javax_swing_JComponent',  function (c) {
return this.getPreferredSize$javax_swing_JComponent(c);
});

Clazz.newMeth(C$, 'contains$javax_swing_JComponent$I$I',  function (c, x, y) {
return c.inside$I$I(x, y);
});

Clazz.newMeth(C$, 'createUI$javax_swing_JComponent',  function (c) {
throw Clazz.new_($I$(1,1).c$$S,["ComponentUI.createUI not implemented."]);
}, 1);

Clazz.newMeth(C$, 'getBaseline$javax_swing_JComponent$I$I',  function (c, width, height) {
return -1;
});

Clazz.newMeth(C$, 'getBaselineResizeBehavior$javax_swing_JComponent',  function (c) {
return $I$(2).OTHER;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:08 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
