(function(){var P$=Clazz.newPackage("javax.swing"),p$1={},I$=[[0,'java.util.ArrayList','javax.swing.event.EventListenerList','sun.awt.AppContext','swingjs.JSMenuManager','javax.swing.MenuElement','javax.swing.event.ChangeListener','javax.swing.event.ChangeEvent']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MenuSelectionManager");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.selection=Clazz.new_($I$(1,1));
this.changeEvent=null;
this.listenerList=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['O',['selection','java.util.List','changeEvent','javax.swing.event.ChangeEvent','listenerList','javax.swing.event.EventListenerList']]
,['O',['MENU_SELECTION_MANAGER_KEY','java.lang.Object']]]

Clazz.newMeth(C$, 'defaultManager$',  function () {
{
var context=$I$(3).getAppContext$();
var msm=context.get$O(C$.MENU_SELECTION_MANAGER_KEY);
if (msm == null ) {
msm=Clazz.new_($I$(4,1));
context.put$O$O(C$.MENU_SELECTION_MANAGER_KEY, msm);
}return msm;
}}, 1);

Clazz.newMeth(C$, 'setSelectedPath$javax_swing_MenuElementA',  function (path) {
var i;
var c;
var currentSelectionCount=this.selection.size$();
var firstDifference=0;
if (path == null ) {
path=Clazz.array($I$(5), [0]);
}for (i=0, c=path.length; i < c; i++) {
if (i < currentSelectionCount && this.selection.get$I(i) === path[i]  ) ++firstDifference;
 else break;
}
for (i=currentSelectionCount - 1; i >= firstDifference; i--) {
var me=this.selection.get$I(i);
this.selection.remove$I(i);
me.menuSelectionChanged$Z(false);
}
for (i=firstDifference, c=path.length; i < c; i++) {
if (path[i] != null ) {
this.selection.add$O(path[i]);
path[i].menuSelectionChanged$Z(true);
}}
this.fireStateChanged$();
});

Clazz.newMeth(C$, 'getSelectedPath$',  function () {
var res=Clazz.array($I$(5), [this.selection.size$()]);
var i;
var c;
for (i=0, c=this.selection.size$(); i < c; i++) res[i]=this.selection.get$I(i);

return res;
});

Clazz.newMeth(C$, 'clearSelectedPath$',  function () {
if (this.selection.size$() > 0) {
this.setSelectedPath$javax_swing_MenuElementA(null);
}});

Clazz.newMeth(C$, 'addChangeListener$javax_swing_event_ChangeListener',  function (l) {
this.listenerList.add$Class$java_util_EventListener(Clazz.getClass($I$(6),['stateChanged$javax_swing_event_ChangeEvent']), l);
});

Clazz.newMeth(C$, 'removeChangeListener$javax_swing_event_ChangeListener',  function (l) {
this.listenerList.remove$Class$java_util_EventListener(Clazz.getClass($I$(6),['stateChanged$javax_swing_event_ChangeEvent']), l);
});

Clazz.newMeth(C$, 'getChangeListeners$',  function () {
return this.listenerList.getListeners$Class(Clazz.getClass($I$(6),['stateChanged$javax_swing_event_ChangeEvent']));
});

Clazz.newMeth(C$, 'fireStateChanged$',  function () {
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(6),['stateChanged$javax_swing_event_ChangeEvent']) ) {
if (this.changeEvent == null ) this.changeEvent=Clazz.new_($I$(7,1).c$$O,[this]);
(listeners[i + 1]).stateChanged$javax_swing_event_ChangeEvent(this.changeEvent);
}}
});

Clazz.newMeth(C$, 'processMouseEvent$java_awt_event_MouseEvent',  function (event) {
});

Clazz.newMeth(C$, 'componentForPoint$java_awt_Component$java_awt_Point',  function (source, sourcePoint) {
return null;
});

Clazz.newMeth(C$, 'processKeyEvent$java_awt_event_KeyEvent',  function (e) {
});

Clazz.newMeth(C$, 'isComponentPartOfCurrentMenu$java_awt_Component',  function (c) {
if (this.selection.size$() > 0) {
var me=this.selection.get$I(0);
return p$1.isComponentPartOfCurrentMenu$javax_swing_MenuElement$java_awt_Component.apply(this, [me, c]);
} else return false;
});

Clazz.newMeth(C$, 'isComponentPartOfCurrentMenu$javax_swing_MenuElement$java_awt_Component',  function (root, c) {
var children;
var i;
var d;
if (root == null ) return false;
if (root.getComponent$() === c ) return true;
 else {
children=root.getSubElements$();
for (i=0, d=children.length; i < d; i++) {
if (p$1.isComponentPartOfCurrentMenu$javax_swing_MenuElement$java_awt_Component.apply(this, [children[i], c])) return true;
}
}return false;
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.MENU_SELECTION_MANAGER_KEY="javax.swing.MenuSelectionManager";
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:01 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
