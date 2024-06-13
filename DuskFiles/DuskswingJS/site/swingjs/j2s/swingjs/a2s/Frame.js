(function(){var P$=Clazz.newPackage("swingjs.a2s"),I$=[[0,'swingjs.a2s.A2SListener','swingjs.a2s.Util','java.awt.event.WindowAdapter','java.awt.Font']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Frame", null, 'javax.swing.JFrame', 'swingjs.a2s.A2SContainer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['listener','swingjs.a2s.A2SListener']]]

Clazz.newMeth(C$, 'getA2SListener$',  function () {
return this.listener;
});

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$S$java_awt_GraphicsConfiguration.apply(this, [null, null]);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (title) {
C$.c$$S$java_awt_GraphicsConfiguration.apply(this, [title, null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_GraphicsConfiguration',  function (gc) {
C$.c$$S$java_awt_GraphicsConfiguration.apply(this, [null, gc]);
}, 1);

Clazz.newMeth(C$, 'c$$S$java_awt_GraphicsConfiguration',  function (title, gc) {
;C$.superclazz.c$$S$java_awt_GraphicsConfiguration.apply(this,[title, gc]);C$.$init$.apply(this);
this.listener=Clazz.new_($I$(1,1));
this.setDefaultCloseOperation$I(0);
$I$(2).setAWTWindowDefaults$java_awt_Component(this);
this.addWindowListener$java_awt_event_WindowListener(((P$.Frame$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Frame$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowOpened$java_awt_event_WindowEvent',  function (e) {
this.b$['java.awt.JSComponent'].秘repaint$.apply(this.b$['java.awt.JSComponent'], []);
});
})()
), Clazz.new_($I$(3,1),[this, null],P$.Frame$1)));
}, 1);

Clazz.newMeth(C$, 'getFont$',  function () {
if (this.font == null  && this.parent == null  ) this.font=Clazz.new_($I$(4,1).c$$S$I$I,["Dialog", 0, 12]);
return C$.superclazz.prototype.getFont$.apply(this, []);
});

Clazz.newMeth(C$, 'remove$I',  function (i) {
C$.superclazz.prototype.remove$I.apply(this, [i]);
});

Clazz.newMeth(C$, 'setMenuBar$java_awt_MenuBar',  function (m) {
C$.superclazz.prototype.setJMenuBar$javax_swing_JMenuBar.apply(this, [m]);
});

Clazz.newMeth(C$, 'remove$java_awt_MenuComponent',  function (m) {
var mb=C$.superclazz.prototype.getJMenuBar$.apply(this, []);
if (mb != null ) mb.remove$java_awt_Component(m);
});

Clazz.newMeth(C$, 'unsetMenuBar$',  function () {
C$.superclazz.prototype.setJMenuBar$javax_swing_JMenuBar.apply(this, [null]);
});

Clazz.newMeth(C$, 'getMenubar$',  function () {
return C$.superclazz.prototype.getJMenuBar$.apply(this, []);
});

Clazz.newMeth(C$, 'addNotify$',  function () {
/*sync org.eclipse.jdt.core.dom.SuperMethodInvocation*/(C$.superclazz.prototype.getTreeLock$.apply(this, []));
{
C$.superclazz.prototype.getOrCreatePeer$.apply(this, []);
if (this.getMenubar$() != null ) {
this.getMenubar$().addNotify$();
}C$.superclazz.prototype.addNotify$.apply(this, []);
}});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:02 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
