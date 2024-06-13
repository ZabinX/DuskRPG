(function(){var P$=Clazz.newPackage("swingjs.plaf"),I$=[[0,'swingjs.api.js.DOMNode','java.awt.Dimension','swingjs.plaf.JSComponentUI','swingjs.plaf.JSPopupMenuUI']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSMenuItemUI", null, 'swingjs.plaf.JSButtonUI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['menuKeyListener','javax.swing.event.MenuKeyListener']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.isMenuItem=true;
this.allowPaintedBackground=false;
}, 1);

Clazz.newMeth(C$, 'updateDOMNode$',  function () {
if (this.domNode == null ) {
this.domNode=this.createItem$S$swingjs_api_js_DOMNode("_item", null);
this.bindJQueryEvents$swingjs_api_js_DOMNode$S$I(this.domNode, "mouseenter", -1);
}$I$(1,"setVisible",[this.domNode, this.jc.isVisible$()]);
this.setupButton$();
return this.domNode;
});

Clazz.newMeth(C$, 'handleJSEvent$O$I$O',  function (target, eventType, jQueryEvent) {
this.checkStopPopupMenuTimer$O$I$O(target, eventType, jQueryEvent);
return C$.superclazz.prototype.handleJSEvent$O$I$O.apply(this, [target, eventType, jQueryEvent]);
});

Clazz.newMeth(C$, 'getContainerHeight$',  function () {
return this.height=25;
});

Clazz.newMeth(C$, 'getCSSAdjustment$Z$Z',  function (addingCSS, mutable) {
return mutable || !this.isMenu || this.containerNode != null    ? Clazz.new_([this.isMenu && this.containerNode == null   ? 0 : 5, 0],$I$(2,1).c$$I$I) : $I$(3).ZERO_SIZE;
});

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent',  function (jc) {
this.menuItem=jc;
C$.superclazz.prototype.installUI$javax_swing_JComponent.apply(this, [jc]);
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
var prop=e.getPropertyName$();
if (!this.jc.isVisible$() && prop !== "ancestor"   && this.jc.getParent$() == null  ) return;
switch (prop) {
case "focusPainted":
case "focusable":
case "borderPainted":
case "opaque":
return;
}
C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
if (prop === "ancestor" ) {
if (this.jc.getParent$() != null ) {
this.jc.getParent$().秘getUI$().setHTMLElement$();
}}});

Clazz.newMeth(C$, 'getPropertyPrefix$',  function () {
return "MenuItem";
});

Clazz.newMeth(C$, 'processJ2SMenuCmd$OA',  function (data) {
$I$(4).processJ2SMenuCmd$OA(data);
});

Clazz.newMeth(C$, 'isFocusable$',  function () {
return false;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:08 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
