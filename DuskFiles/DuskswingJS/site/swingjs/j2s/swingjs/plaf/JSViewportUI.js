(function(){var P$=Clazz.newPackage("swingjs.plaf"),I$=[[0,'swingjs.plaf.JSComponentUI','swingjs.api.js.DOMNode']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSViewportUI", null, 'swingjs.plaf.JSLightweightUI', ['java.beans.PropertyChangeListener', 'javax.swing.event.ChangeListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['viewport','javax.swing.JViewport']]]

Clazz.newMeth(C$, 'updateDOMNode$',  function () {
if (this.domNode == null ) {
this.domNode=$I$(1,"newDOMObject$S$S$SA",["div", this.id, Clazz.array(String, -1, [])]);
$I$(2).setStyle(this.domNode, "margin", "1px");
this.ignoreAllMouseEvents$swingjs_api_js_DOMNode(this.domNode);
}return this.updateDOMNodeCUI$();
});

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent',  function (jc) {
this.viewport=jc;
});

Clazz.newMeth(C$, 'uninstallUI$javax_swing_JComponent',  function (jc) {
});

Clazz.newMeth(C$, 'getPreferredSize$javax_swing_JComponent',  function (jc) {
return null;
});

Clazz.newMeth(C$, 'setHTMLElement$',  function () {
return $I$(2,"setStyles",[this.setHTMLElementCUI$(), ["overflow", "hidden", "margin", "1px", "width", (this.width - 2) + "px", "height", (this.height - 2) + "px"]]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:11 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
