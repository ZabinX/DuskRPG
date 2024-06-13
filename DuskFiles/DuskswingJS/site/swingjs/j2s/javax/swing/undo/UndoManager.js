(function(){var P$=Clazz.newPackage("javax.swing.undo"),I$=[[0,'java.util.ArrayList','javax.swing.UIManager']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UndoManager", null, 'javax.swing.undo.CompoundEdit', 'javax.swing.event.UndoableEditListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['indexOfNextAdd','limit']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.indexOfNextAdd=0;
this.limit=100;
}, 1);

Clazz.newMeth(C$, 'getLimit$',  function () {
return this.limit;
});

Clazz.newMeth(C$, 'discardAllEdits$',  function () {
for (var i=this.edits.size$(); --i >= 0; ) {
this.edits.get$I(i).die$();
}
this.edits=Clazz.new_($I$(1,1));
this.indexOfNextAdd=0;
});

Clazz.newMeth(C$, 'trimForLimit$',  function () {
if (this.limit >= 0) {
var size=this.edits.size$();
if (size > this.limit) {
var halfLimit=(this.limit/2|0);
var keepFrom=this.indexOfNextAdd - 1 - halfLimit ;
var keepTo=this.indexOfNextAdd - 1 + halfLimit;
if (keepTo - keepFrom + 1 > this.limit) {
++keepFrom;
}if (keepFrom < 0) {
keepTo-=keepFrom;
keepFrom=0;
}if (keepTo >= size) {
var delta=size - keepTo - 1 ;
keepTo+=delta;
keepFrom+=delta;
}this.trimEdits$I$I(keepTo + 1, size - 1);
this.trimEdits$I$I(0, keepFrom - 1);
}}});

Clazz.newMeth(C$, 'trimEdits$I$I',  function (from, to) {
if (from <= to) {
for (var i=to; from <= i; i--) {
var e=this.edits.get$I(i);
e.die$();
this.edits.remove$I(i);
}
if (this.indexOfNextAdd > to) {
this.indexOfNextAdd-=to - from + 1;
} else if (this.indexOfNextAdd >= from) {
this.indexOfNextAdd=from;
}}});

Clazz.newMeth(C$, 'setLimit$I',  function (l) {
if (!this.inProgress) throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Attempt to call UndoManager.setLimit() after UndoManager.end() has been called"]);
this.limit=l;
this.trimForLimit$();
});

Clazz.newMeth(C$, 'editToBeUndone$',  function () {
var i=this.indexOfNextAdd;
while (i > 0){
var edit=this.edits.get$I(--i);
if (edit.isSignificant$()) {
return edit;
}}
return null;
});

Clazz.newMeth(C$, 'editToBeRedone$',  function () {
var count=this.edits.size$();
var i=this.indexOfNextAdd;
while (i < count){
var edit=this.edits.get$I(i++);
if (edit.isSignificant$()) {
return edit;
}}
return null;
});

Clazz.newMeth(C$, 'undoTo$javax_swing_undo_UndoableEdit',  function (edit) {
var done=false;
while (!done){
var next=this.edits.get$I(--this.indexOfNextAdd);
next.undo$();
done=next === edit ;
}
});

Clazz.newMeth(C$, 'redoTo$javax_swing_undo_UndoableEdit',  function (edit) {
var done=false;
while (!done){
var next=this.edits.get$I(this.indexOfNextAdd++);
next.redo$();
done=next === edit ;
}
});

Clazz.newMeth(C$, 'undoOrRedo$',  function () {
if (this.indexOfNextAdd == this.edits.size$()) {
this.undo$();
} else {
this.redo$();
}});

Clazz.newMeth(C$, 'canUndoOrRedo$',  function () {
if (this.indexOfNextAdd == this.edits.size$()) {
return this.canUndo$();
} else {
return this.canRedo$();
}});

Clazz.newMeth(C$, 'undo$',  function () {
if (this.inProgress) {
var edit=this.editToBeUndone$();
if (edit == null ) {
throw Clazz.new_(Clazz.load('javax.swing.undo.CannotUndoException'));
}this.undoTo$javax_swing_undo_UndoableEdit(edit);
} else {
C$.superclazz.prototype.undo$.apply(this, []);
}});

Clazz.newMeth(C$, 'canUndo$',  function () {
if (this.inProgress) {
var edit=this.editToBeUndone$();
return edit != null  && edit.canUndo$() ;
} else {
return C$.superclazz.prototype.canUndo$.apply(this, []);
}});

Clazz.newMeth(C$, 'redo$',  function () {
if (this.inProgress) {
var edit=this.editToBeRedone$();
if (edit == null ) {
throw Clazz.new_(Clazz.load('javax.swing.undo.CannotRedoException'));
}this.redoTo$javax_swing_undo_UndoableEdit(edit);
} else {
C$.superclazz.prototype.redo$.apply(this, []);
}});

Clazz.newMeth(C$, 'canRedo$',  function () {
if (this.inProgress) {
var edit=this.editToBeRedone$();
return edit != null  && edit.canRedo$() ;
} else {
return C$.superclazz.prototype.canRedo$.apply(this, []);
}});

Clazz.newMeth(C$, 'addEdit$javax_swing_undo_UndoableEdit',  function (anEdit) {
var retVal;
this.trimEdits$I$I(this.indexOfNextAdd, this.edits.size$() - 1);
retVal=C$.superclazz.prototype.addEdit$javax_swing_undo_UndoableEdit.apply(this, [anEdit]);
if (this.inProgress) {
retVal=true;
}this.indexOfNextAdd=this.edits.size$();
this.trimForLimit$();
return retVal;
});

Clazz.newMeth(C$, 'end$',  function () {
C$.superclazz.prototype.end$.apply(this, []);
this.trimEdits$I$I(this.indexOfNextAdd, this.edits.size$() - 1);
});

Clazz.newMeth(C$, 'getUndoOrRedoPresentationName$',  function () {
if (this.indexOfNextAdd == this.edits.size$()) {
return this.getUndoPresentationName$();
} else {
return this.getRedoPresentationName$();
}});

Clazz.newMeth(C$, 'getUndoPresentationName$',  function () {
if (this.inProgress) {
if (this.canUndo$()) {
return this.editToBeUndone$().getUndoPresentationName$();
} else {
return $I$(2).getString$O("AbstractUndoableEdit.undoText");
}} else {
return C$.superclazz.prototype.getUndoPresentationName$.apply(this, []);
}});

Clazz.newMeth(C$, 'getRedoPresentationName$',  function () {
if (this.inProgress) {
if (this.canRedo$()) {
return this.editToBeRedone$().getRedoPresentationName$();
} else {
return $I$(2).getString$O("AbstractUndoableEdit.redoText");
}} else {
return C$.superclazz.prototype.getRedoPresentationName$.apply(this, []);
}});

Clazz.newMeth(C$, 'undoableEditHappened$javax_swing_event_UndoableEditEvent',  function (e) {
this.addEdit$javax_swing_undo_UndoableEdit(e.getEdit$());
});

Clazz.newMeth(C$, 'toString',  function () {
return C$.superclazz.prototype.toString.apply(this, []) + " limit: " + this.limit + " indexOfNextAdd: " + this.indexOfNextAdd ;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:32 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
