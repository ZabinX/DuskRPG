(function(){var P$=Clazz.newPackage("swingjs.plaf"),p$1={},I$=[[0,'swingjs.plaf.JSComponentUI','swingjs.api.js.DOMNode','swingjs.JSKeyEvent','swingjs.JSMouse','swingjs.JSToolkit']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSComboPopupList", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JList');
C$.$classes$=[['api',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['cbui','swingjs.plaf.JSComboBoxUI','j2scb','swingjs.plaf.JSComboPopupList.api.js','popupNode','swingjs.api.js.DOMNode']]]

Clazz.newMeth(C$, 'c$$swingjs_plaf_JSComboBoxUI',  function (ui) {
;C$.superclazz.c$$javax_swing_ListModel.apply(this,[ui.comboBox.getModel$()]);C$.$init$.apply(this);
this.cbui=ui;
}, 1);

Clazz.newMeth(C$, '秘processUIEvent$java_awt_event_MouseEvent',  function (e) {
switch (e.getID$()) {
case 503:
case 504:
case 505:
var i=p$1.getJ2SCBInt$S.apply(this, ["hoveredIndex"]);
if (i >= 0) this.cbui.comboBox.getRenderer$().getListCellRendererComponent$javax_swing_JList$O$I$Z$Z(this, this.getModel$().getElementAt$I(i), i, true, false);
this.updateZIndex$();
break;
}
return true;
});

Clazz.newMeth(C$, 'getJ2SCBInt$S',  function (name) {
if (this.j2scb == null ) return -2147483648;
var widget=p$1.getWidget.apply(this, []);
return widget.options[name] ||0;
}, p$1);

Clazz.newMeth(C$, 'createJ2SCB$',  function () {
this.uninstallingUI$();
this.j2scb=this.cbui.$$O(this.cbui.domNode);
var me=this;
var fChange=function(){p$1.fChange$O$O$S$O.apply(me,arguments)} ||null;
var name=this.cbui.jc.getName$();
this.j2scb.j2sCB({change:fChange, name:name} ||"");
this.updateCSS$();
this.updateList$();
this.updateSelectedIndex$();
var widget=p$1.getWidget.apply(this, []);
this.popupNode=widget.popup[0] ||null;
});

Clazz.newMeth(C$, 'getWidget',  function () {
if (this.j2scb == null ) return null;
var obj=this.cbui.$$O(this.j2scb);
return obj.data("j2sCB") ||null;
}, p$1);

Clazz.newMeth(C$, 'setComboVisible$Z',  function (b) {
this.setVisible$Z$Z(b, false);
});

Clazz.newMeth(C$, 'setPopupVisible$Z',  function (vis) {
this.setVisible$Z$Z(vis, true);
});

Clazz.newMeth(C$, 'setVisible$Z$Z',  function (vis, andPopup) {
if (!vis) {
try {
if (this.j2scb != null ) this.j2scb.j2sCB("hidePopup");
} catch (t) {
}
$I$(1).hideMenusAndToolTip$();
return;
}if (this.j2scb == null ) this.createJ2SCB$();
if (this.cbui.isTainted) this.updateList$();
$I$(1).containerToFront$javax_swing_JComponent(this.cbui.comboBox);
this.updateZIndex$();
if (andPopup) this.j2scb.j2sCB("showPopup");
this.updateSelectedIndex$();
});

Clazz.newMeth(C$, 'updateZIndex$',  function () {
if (this.j2scb == null ) return;
this.j2scb.j2sCB("setZIndex", $I$(1).getInheritedZ$javax_swing_JComponent(this.cbui.comboBox) + 1);
this.updateCSS$();
});

Clazz.newMeth(C$, 'updateText$',  function () {
});

Clazz.newMeth(C$, 'updateCSS$',  function () {
this.秘getUI$().allowPaintedBackground=false;
$I$(2).setSize(this.cbui.domNode, this.cbui.width, this.cbui.height);
if (this.j2scb != null ) {
this.j2scb.j2sCB("updateCSS");
}});

Clazz.newMeth(C$, 'updateList$',  function () {
if (this.j2scb == null ) return;
var n=this.cbui.comboBox.getItemCount$();
var opts=Clazz.array($I$(2), [n * 2]);
var l=this;
var d=l.getPreferredSize$();
var h=d.height;
var w=d.width;
var ui=l.getUI$();
for (var i=0, p=0; i < n; i++) {
opts[p++]=p$1.renderItem$I$I$swingjs_plaf_JSListUI.apply(this, [i, w, ui]);
opts[p++]=p$1.renderItem$I$I$swingjs_plaf_JSListUI.apply(this, [i, w, ui]);
}
this.j2scb.j2sCB("updateList2", opts);
this.j2scb.j2sCB("setHeight", (h > 300 ? 300 : 0));
this.updateCSS$();
});

Clazz.newMeth(C$, 'renderItem$I$I$swingjs_plaf_JSListUI',  function (i, w, ui) {
var j=this.cbui.comboBox.getRenderer$().getListCellRendererComponent$javax_swing_JList$O$I$Z$Z(this, this.getModel$().getElementAt$I(i), i, true, false);
j.setSize$I$I(w, ui.getRowHeight$I(i));
var jui=j.秘getUI$();
jui.c=jui.jc=j;
return jui.getListNode$();
}, p$1);

Clazz.newMeth(C$, 'updateSelectedIndex$',  function () {
if (this.j2scb != null ) this.j2scb.j2sCB("setSelectedIndex", this.cbui.comboBox.getSelectedIndex$());
});

Clazz.newMeth(C$, 'updateHoverIndex$',  function () {
if (this.j2scb == null ) return;
if (!this.cbui.isPopupVisible$javax_swing_JComboBox(this.cbui.comboBox)) this.setPopupVisible$Z(true);
var index=this.getSelectedIndex$();
this.j2scb.j2sCB("hoverOver", index);
this.cbui.comboBox.setSelectedIndex$I(index);
});

Clazz.newMeth(C$, 'updateEnabled$',  function () {
if (this.j2scb != null ) this.j2scb.j2sCB(this.cbui.comboBox.isEnabled$() ? "enable" : "disable");
});

Clazz.newMeth(C$, 'updateState$java_util_EventObject$S',  function (e, name) {
if (this.j2scb == null ) return;
if (name == null ) {
this.updateSelectedIndex$();
}});

Clazz.newMeth(C$, 'show$',  function () {
this.setPopupVisible$Z(true);
});

Clazz.newMeth(C$, 'hide$',  function () {
this.hidePopup$();
});

Clazz.newMeth(C$, 'hidePopup$',  function () {
this.setPopupVisible$Z(false);
});

Clazz.newMeth(C$, 'isVisible$',  function () {
if (this.j2scb == null ) return false;
var ret=this.j2scb.j2sCB("popupVisible");
return !!ret ||false;
});

Clazz.newMeth(C$, 'getList$',  function () {
return this;
});

Clazz.newMeth(C$, 'getMouseListener$',  function () {
return null;
});

Clazz.newMeth(C$, 'getMouseMotionListener$',  function () {
return null;
});

Clazz.newMeth(C$, 'getKeyListener$',  function () {
return null;
});

Clazz.newMeth(C$, 'dispose$',  function () {
this.uninstallingUI$();
});

Clazz.newMeth(C$, 'uninstallingUI$',  function () {
if (this.j2scb != null ) this.j2scb.j2sCB("destroy");
this.j2scb=null;
});

Clazz.newMeth(C$, 'fChange$O$O$S$O',  function (event, cb, type, data) {
var i=data ||0;
switch (type) {
case "refreshed":
return;
case "destroyed":
this.j2scb=null;
return;
case "opening":
this.updateZIndex$();
return;
case "keyevent":
this.cbui.comboBox.dispatchEvent$java_awt_AWTEvent($I$(3).newJSKeyEvent$javax_swing_JComponent$O$I$Z(this.cbui.comboBox, event, 0, true));
return;
case "selected":
this.cbui.comboBox.秘setTrigger$Z(true);
this.cbui.comboBox.setSelectedIndex$I(i);
this.cbui.comboBox.秘setTrigger$Z(false);
return;
case "pointerover":
case "mouseover":
return;
case "mouse":
var jqEvent=event.originalEvent ||null;
switch (jqEvent.type ||"") {
case "pointermove":
case "mousemove":
$I$(4).retargetMouseEvent$O$swingjs_api_js_DOMNode$javax_swing_JComponent$javax_swing_JComponent$I(jqEvent, null, this.cbui.comboBox, this, 0);
break;
case "pointerup":
case "mouseup":
$I$(5,"dispatch$O$I$I",[((P$.JSComboPopupList$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "JSComboPopupList$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
$I$(4).retargetMouseEvent$O$swingjs_api_js_DOMNode$javax_swing_JComponent$javax_swing_JComponent$I(this.$finals$.jqEvent, null, this.b$['swingjs.plaf.JSComboPopupList'].cbui.comboBox, this.b$['swingjs.plaf.JSComboPopupList'], 0);
this.b$['swingjs.plaf.JSComboPopupList'].setVisible$Z$Z.apply(this.b$['swingjs.plaf.JSComboPopupList'], [false, false]);
});
})()
), Clazz.new_(P$.JSComboPopupList$1.$init$,[this, {jqEvent:jqEvent}])), 10, 0]);
break;
}
return;
}
}, p$1);
;
(function(){/*i*/var C$=Clazz.newInterface(P$.JSComboPopupList, "api", function(){
});
C$.$classes$=[['js',9]];
;
(function(){/*i*/var C$=Clazz.newInterface(P$.JSComboPopupList.api, "js", function(){
}, null, 'swingjs.api.js.JQueryObject');

C$.$clinit$=2;
})()
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:06 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
