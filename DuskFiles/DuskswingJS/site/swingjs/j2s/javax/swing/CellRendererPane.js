(function(){var P$=Clazz.newPackage("javax.swing"),I$=[[0,'swingjs.api.js.DOMNode']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CellRendererPane", null, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.秘isCRP=true;
this.秘paintClass=this.秘updateClass=C$ ||null;
this.setLayout$java_awt_LayoutManager(null);
this.setVisible$Z(false);
}, 1);

Clazz.newMeth(C$, 'invalidate$',  function () {
});

Clazz.newMeth(C$, 'repaint$',  function () {
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics',  function (g) {
});

Clazz.newMeth(C$, 'update$java_awt_Graphics',  function (g) {
});

Clazz.newMeth(C$, 'addImpl$java_awt_Component$O$I',  function (x, constraints, index) {
if (x.getParent$() !== this ) this.addImplCont$java_awt_Component$O$I(x, constraints, index);
});

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics$java_awt_Component$java_awt_Container$I$I$I$I$Z',  function (g, c, p, x, y, w, h, shouldValidate) {
if (c == null ) {
if (p != null ) {
var oldColor=g.getColor$();
g.setColor$java_awt_Color(p.getBackground$());
g.fillRect$I$I$I$I(x, y, w, h);
g.setColor$java_awt_Color(oldColor);
}return;
}if (c.getParent$() !== this ) {
this.add$java_awt_Component(c);
}c.秘reshape$I$I$I$I$Z(-w, -h, 0, 0, false);
var ui=(c).秘getUI$();
c.秘reshape$I$I$I$I$Z(0, 0, w, h, false);
(c).validateTree$();
ui.updateDOMNode$();
if (Clazz.instanceOf(p, "javax.swing.JTable")) $I$(1,"setTopLeftAbsolute",[ui.domNode, ((p).getRowMargin$()/2|0), ((p).getColumnModel$().getColumnMargin$()/2|0)]);
if (Clazz.instanceOf(c, "javax.swing.JLabel")) $I$(1).setStyle(ui.domNode, "overflow", "hidden");
var cg=g.create$I$I$I$I(x, y, w, h);
try {
c.paint$java_awt_Graphics(cg);
} finally {
cg.dispose$();
}
c.秘reshape$I$I$I$I$Z(-w, -h, 0, 0, false);
});

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics$java_awt_Component$java_awt_Container$I$I$I$I',  function (g, c, p, x, y, w, h) {
this.paintComponent$java_awt_Graphics$java_awt_Component$java_awt_Container$I$I$I$I$Z(g, c, p, x, y, w, h, false);
});

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics$java_awt_Component$java_awt_Container$java_awt_Rectangle',  function (g, c, p, r) {
this.paintComponent$java_awt_Graphics$java_awt_Component$java_awt_Container$I$I$I$I$Z(g, c, p, r.x, r.y, r.width, r.height, false);
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:51 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
