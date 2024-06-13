(function(){var P$=Clazz.newPackage("swingjs.plaf"),I$=[[0,'swingjs.plaf.JSComponentUI','swingjs.api.js.DOMNode']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSRadioButtonUI", null, 'swingjs.plaf.JSButtonUI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'updateDOMNode$',  function () {
var b=this.jc;
var doAll=false;
if (this.domNode == null ) {
this.imagePersists=true;
doAll=true;
this.buttonNode=$I$(1,"newDOMObject$S$S$SA",["label", this.id + "btn", Clazz.array(String, -1, [])]);
if (this.isMenuItem) {
this.domNode=this.createItem$S$swingjs_api_js_DOMNode("_item", this.buttonNode);
this.bindJQueryEvents$swingjs_api_js_DOMNode$S$I(this.domNode, "mouseenter", -1);
} else {
this.domNode=$I$(1,"newDOMObject$S$S$SA",["div", this.id + "_dom", Clazz.array(String, -1, [])]);
this.domNode.appendChild(this.buttonNode);
this.focusNode=this.buttonNode;
}this.iconNode=null;
if (b.getIcon$() == null  || this.isMenuItem ) {
this.actionNode=$I$(1,"newDOMObject$S$S$SA",["input", this.id + "_inp", Clazz.array(String, -1, ["type", (this.getPropertyPrefix$() === "RadioButton"  ? "radio" : "checkbox"), "name", this.id])]);
if (!this.isMenuItem) this.iconNode=this.actionNode;
$I$(2).setAttr(this.buttonNode, "htmlFor", this.id);
} else {
if (this.actionNode != null ) $I$(2).dispose(this.actionNode);
this.actionNode=null;
}this.enableNodes=Clazz.array($I$(2), -1, [this.actionNode, this.buttonNode, (this.iconNode === this.actionNode  ? null : this.iconNode)]);
this.createButton$();
if (this.isMenuItem) this.setMenuItem$();
}this.setupButton$javax_swing_JToggleButton$Z(b, doAll);
return this.updateDOMNodeCUI$();
});

Clazz.newMeth(C$, 'updateIcon$',  function () {
if (!this.isMenuItem) {
this.setTainted$();
if (this.domNode != null ) {
this.domNode=null;
this.getDOMNode$();
}} else {
C$.superclazz.prototype.updateIcon$.apply(this, []);
}});

Clazz.newMeth(C$, 'getPropertyPrefix$',  function () {
return "RadioButton";
});

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent',  function (jc) {
this.getPropertyPrefix$();
C$.superclazz.prototype.installUI$javax_swing_JComponent.apply(this, [jc]);
});

Clazz.newMeth(C$, 'handleJSEvent$O$I$O',  function (target, eventType, jQueryEvent) {
this.checkStopPopupMenuTimer$O$I$O(target, eventType, jQueryEvent);
return C$.superclazz.prototype.handleJSEvent$O$I$O.apply(this, [target, eventType, jQueryEvent]);
});

Clazz.newMeth(C$, 'setupButton$javax_swing_JToggleButton$Z',  function (b, doAll) {
if (this.actionNode != null ) $I$(2,"setAttr",[this.actionNode, "checked", b.isSelected$() ? "\u79d8TRUE" : $I$(1).NULL]);
this.setCssFont$swingjs_api_js_DOMNode$java_awt_Font(this.textNode, this.c.getFont$());
this.setIconAndText$S$javax_swing_Icon$I$S("radio", null, this.button.getIconTextGap$(), this.button.getText$());
this.setAlignments$javax_swing_AbstractButton$Z(b, false);
if (doAll && !this.isMenuItem ) $I$(2).setPositionAbsolute(this.domNode);
});

Clazz.newMeth(C$, 'handleDOMEvent$O',  function (e) {
(this.c).doClick$I(0);
});

Clazz.newMeth(C$, 'getDefaultIconTextGap$',  function () {
return 4;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:09 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
