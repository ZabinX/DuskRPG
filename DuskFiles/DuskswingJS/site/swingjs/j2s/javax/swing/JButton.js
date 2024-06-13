(function(){var P$=Clazz.newPackage("javax.swing"),I$=[[0,'javax.swing.DefaultButtonModel','javax.swing.SwingUtilities']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JButton", null, 'javax.swing.AbstractButton');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$S$javax_swing_Icon.apply(this, [null, null]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_Icon',  function (icon) {
C$.c$$S$javax_swing_Icon.apply(this, [null, icon]);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (text) {
C$.c$$S$javax_swing_Icon.apply(this, [text, null]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_Action',  function (a) {
C$.c$.apply(this, []);
this.setAction$javax_swing_Action(a);
}, 1);

Clazz.newMeth(C$, 'c$$S$javax_swing_Icon',  function (text, icon) {
Clazz.super_(C$, this);
this.setModel$();
this.init$S$javax_swing_Icon(text, icon);
this.setOpaque$Z(true);
}, 1);

Clazz.newMeth(C$, 'setModel$',  function () {
this.setModel$javax_swing_ButtonModel(Clazz.new_($I$(1,1)));
});

Clazz.newMeth(C$, 'getUIClassID$',  function () {
return "ButtonUI";
});

Clazz.newMeth(C$, 'isDefaultButton$',  function () {
var root=$I$(2).getRootPane$java_awt_Component(this);
if (root != null ) {
return root.getDefaultButton$() === this ;
}return false;
});

Clazz.newMeth(C$, 'isDefaultCapable$',  function () {
return this.defaultCapable;
});

Clazz.newMeth(C$, 'setDefaultCapable$Z',  function (defaultCapable) {
var oldDefaultCapable=this.defaultCapable;
this.defaultCapable=defaultCapable;
this.firePropertyChange$S$Z$Z("defaultCapable", oldDefaultCapable, defaultCapable);
});

Clazz.newMeth(C$, 'removeNotify$',  function () {
var root=$I$(2).getRootPane$java_awt_Component(this);
if (root != null  && root.getDefaultButton$() === this  ) {
root.setDefaultButton$javax_swing_JButton(null);
}C$.superclazz.prototype.removeNotify$.apply(this, []);
});

Clazz.newMeth(C$, 'paramString$',  function () {
var defaultCapableString=(this.defaultCapable ? "true" : "false");
return C$.superclazz.prototype.paramString$.apply(this, []) + ",defaultCapable=" + defaultCapableString ;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:52 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
