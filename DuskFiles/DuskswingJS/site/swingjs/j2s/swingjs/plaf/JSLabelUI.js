(function(){var P$=Clazz.newPackage("swingjs.plaf"),I$=[[0,'swingjs.plaf.JSComponentUI','swingjs.api.js.DOMNode','javax.swing.LookAndFeel','swingjs.plaf.JSGraphicsUtils','java.awt.Dimension']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSLabelUI", null, 'swingjs.plaf.JSLightweightUI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['gap'],'S',['text']]
,['O',['htAdj','int[]']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.setDoc$();
this.isLabel=true;
}, 1);

Clazz.newMeth(C$, 'updateDOMNode$',  function () {
this.isMenuItem=Clazz.instanceOf(this.jc.getParent$(), "javax.swing.JPopupMenu");
this.isMenuBarLabel=Clazz.instanceOf(this.jc.getParent$(), "javax.swing.JMenuBar");
if (this.domNode == null ) {
if (this.isMenuItem) {
this.createItemNode$S$javax_swing_Icon$I$S$swingjs_api_js_DOMNode("_item", this.icon, 4, this.label.getText$(), null);
this.domNode=this.itemNode;
} else {
this.enableNode=this.domNode=$I$(1,"newDOMObject$S$S$SA",["label", this.id, Clazz.array(String, -1, [])]);
this.textNode=this.iconNode=null;
this.addCentering$swingjs_api_js_DOMNode(this.domNode);
}}this.getIconAndText$();
this.setIconAndText$S$javax_swing_Icon$I$S("label", this.icon, this.gap, this.text);
if (this.isMenuItem) {
} else {
$I$(2,"setStyles",[this.domNode, ["position", "absolute", "width", this.c.getWidth$() + "px", "height", this.c.getHeight$() + "px"]]);
}this.updateCenteringNode$();
if (this.allowTextAlignment) {
this.setAlignments$javax_swing_AbstractButton$Z(this.label, false);
}if (this.jc.isEnabled$()) this.setBackgroundImpl$java_awt_Color(this.jc.isOpaque$() ? this.getBackground$() : null);
return this.updateDOMNodeCUI$();
});

Clazz.newMeth(C$, 'getIconAndText$',  function () {
this.label=this.jc;
this.icon=this.label.getIcon$();
this.gap=this.label.getIconTextGap$();
this.text=this.label.getText$();
});

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent',  function (jc) {
this.label=jc;
$I$(3).installColorsAndFont$javax_swing_JComponent$S$S$S(jc, "Label.background", "Label.foreground", "Label.font");
});

Clazz.newMeth(C$, 'uninstallUI$javax_swing_JComponent',  function (jc) {
});

Clazz.newMeth(C$, 'getMaximumSize$javax_swing_JComponent',  function (jc) {
return this.getPreferredSize$javax_swing_JComponent(jc);
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics$javax_swing_JComponent',  function (g, c) {
if (this.jc.秘paintsSelfEntirely$()) $I$(2).setStyle(this.centeringNode, "visibility", "visible");
C$.superclazz.prototype.paint$java_awt_Graphics$javax_swing_JComponent.apply(this, [g, c]);
if (this.isHTML) $I$(2).setStyles(this.textNode, ["overflow", null, "white-space", null]);
 else $I$(2).setStyles(this.textNode, ["overflow", "hidden", "white-space", "nowrap"]);
if (this.icon != null  && this.imageNode != null   && !this.isVideoIcon ) {
$I$(2).setStyle(this.imageNode, "visibility", null);
var r=this.imageNode.getBoundingClientRect();
var parent=null;
var isHidden=(r.width == 0);
if (isHidden) {
parent=$I$(2).getParent(this.domNode);
this.$$O("body").append(this.domNode);
r=this.imageNode.getBoundingClientRect();
}var r0=this.domNode.getBoundingClientRect();
if (isHidden) $I$(2).transferTo(this.domNode, parent);
$I$(2).setStyle(this.imageNode, "visibility", "hidden");
this.icon.paintIcon$java_awt_Component$java_awt_Graphics$I$I(c, g, (r.x - r0.x), (r.y - r0.y));
}});

Clazz.newMeth(C$, 'getPreferredSize$javax_swing_JComponent',  function (jc) {
this.c=this.jc=jc;
this.updateDOMNode$();
return (this.isAWT ? C$.getMinimumSizePeer$javax_swing_JComponent$O(jc, this.label) : this.label == null  ? C$.superclazz.prototype.getPreferredSize$javax_swing_JComponent.apply(this, [jc]) : $I$(4,"getPreferredButtonSize$javax_swing_AbstractButton$I",[(jc), (jc).getIconTextGap$()]));
});

Clazz.newMeth(C$, 'getMinimumSizePeer$javax_swing_JComponent$O',  function (jc, label) {
var f=jc.getFont$();
var s=null;
if (f == null ) return Clazz.new_($I$(5,1).c$$I$I,[14, 8]);
var fm=f.getFontMetrics$();
s=(label).getText$();
if (s == null ) s="";
var sz=f.getSize$();
var adj=(sz <= 40 ? C$.htAdj[sz] : 0);
return Clazz.new_([fm.stringWidth$S(s) + 14, fm.getHeight$() + adj],$I$(5,1).c$$I$I);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.htAdj=Clazz.array(Integer.TYPE, -1, [0, 7, 6, 7, 6, 6, 5, 5, 6, 7, 7, 7, 6, 6, 5, 5, 5, 5, 6, 6, 4, 4, 4, 4, 3, 3, 5, 5, 3, 3, 4, 3, 2, 3, 3, 3, 2, 2, 2, 2, 0]);
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:07 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
