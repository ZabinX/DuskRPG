(function(){var P$=Clazz.newPackage("swingjs.plaf"),p$1={},I$=[[0,'swingjs.plaf.JSComponentUI','swingjs.api.js.DOMNode','java.awt.Insets']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSPopupUI", null, 'swingjs.plaf.JSWindowUI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['hasBeenVisible'],'O',['isToolTip','Boolean','toolTip','java.awt.Component']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.isPopup=true;
}, 1);

Clazz.newMeth(C$, 'updateDOMNode$',  function () {
if (this.domNode == null ) {
this.hasBeenVisible=false;
}C$.superclazz.prototype.updateDOMNode$.apply(this, []);
return this.domNode;
});

Clazz.newMeth(C$, 'setVisible$Z',  function (b) {
C$.superclazz.prototype.setVisible$Z.apply(this, [b]);
if (b && !this.hasBeenVisible && (p$1.isToolTip.apply(this, [])).$c()  ) {
var col=this.toolTip.getBackground$();
if (col != null ) {
this.jc.setOpaque$Z(true);
this.allowPaintedBackground=false;
this.jc.setBackground$java_awt_Color(col);
var cc=$I$(1).toCSSString$java_awt_Color(col);
$I$(2).setStyle(this.outerNode, "background", cc);
}this.$$O("body > .swingjs-tooltip").remove();
this.$$O(this.outerNode).addClass("swingjs-tooltip");
this.jc.setOpaque$Z(true);
this.setZ$I(2147483647);
}this.hasBeenVisible=true;
});

Clazz.newMeth(C$, 'toFront$',  function () {
if ((p$1.isToolTip.apply(this, [])).valueOf()) {
this.setZ$I(2147483647);
} else {
C$.superclazz.prototype.toFront$.apply(this, []);
}});

Clazz.newMeth(C$, 'isToolTip',  function () {
if (this.isToolTip == null ) {
var c=(this.window).getRootPane$().getContentPane$().getComponent$I(0);
this.isToolTip=Boolean.valueOf$Z((Clazz.instanceOf(c, "javax.swing.JToolTip")));
if ((this.isToolTip).valueOf()) this.toolTip=c;
}return this.isToolTip;
}, p$1);

Clazz.newMeth(C$, 'getInsets$',  function () {
return (p$1.isToolTip.apply(this, []).booleanValue$() ? Clazz.new_($I$(3,1).c$$I$I$I$I,[2, 2, 2, 2]) : $I$(1).zeroInsets);
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:09 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
