(function(){var P$=Clazz.newPackage("javax.swing.undo"),I$=[[0,'java.util.Vector','javax.swing.event.UndoableEditListener','javax.swing.event.UndoableEditEvent','javax.swing.undo.CompoundEdit']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UndoableEditSupport");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['updateLevel'],'O',['compoundEdit','javax.swing.undo.CompoundEdit','listeners','java.util.Vector','realSource','java.lang.Object']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$O.apply(this, [null]);
}, 1);

Clazz.newMeth(C$, 'c$$O',  function (r) {
;C$.$init$.apply(this);
this.realSource=r == null  ? this : r;
this.updateLevel=0;
this.compoundEdit=null;
this.listeners=Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'addUndoableEditListener$javax_swing_event_UndoableEditListener',  function (l) {
this.listeners.addElement$O(l);
});

Clazz.newMeth(C$, 'removeUndoableEditListener$javax_swing_event_UndoableEditListener',  function (l) {
this.listeners.removeElement$O(l);
});

Clazz.newMeth(C$, 'getUndoableEditListeners$',  function () {
return (this.listeners.toArray$OA(Clazz.array($I$(2), [0])));
});

Clazz.newMeth(C$, '_postEdit$javax_swing_undo_UndoableEdit',  function (e) {
var ev=Clazz.new_($I$(3,1).c$$O$javax_swing_undo_UndoableEdit,[this.realSource, e]);
var cursor=(this.listeners.clone$()).elements$();
while (cursor.hasMoreElements$()){
(cursor.nextElement$()).undoableEditHappened$javax_swing_event_UndoableEditEvent(ev);
}
});

Clazz.newMeth(C$, 'postEdit$javax_swing_undo_UndoableEdit',  function (e) {
if (this.updateLevel == 0) {
this._postEdit$javax_swing_undo_UndoableEdit(e);
} else {
this.compoundEdit.addEdit$javax_swing_undo_UndoableEdit(e);
}});

Clazz.newMeth(C$, 'getUpdateLevel$',  function () {
return this.updateLevel;
});

Clazz.newMeth(C$, 'beginUpdate$',  function () {
if (this.updateLevel == 0) {
this.compoundEdit=this.createCompoundEdit$();
}++this.updateLevel;
});

Clazz.newMeth(C$, 'createCompoundEdit$',  function () {
return Clazz.new_($I$(4,1));
});

Clazz.newMeth(C$, 'endUpdate$',  function () {
--this.updateLevel;
if (this.updateLevel == 0) {
this.compoundEdit.end$();
this._postEdit$javax_swing_undo_UndoableEdit(this.compoundEdit);
this.compoundEdit=null;
}});

Clazz.newMeth(C$, 'toString',  function () {
return C$.superclazz.prototype.toString.apply(this, []) + " updateLevel: " + this.updateLevel + " listeners: " + this.listeners + " compoundEdit: " + this.compoundEdit ;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:32 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
