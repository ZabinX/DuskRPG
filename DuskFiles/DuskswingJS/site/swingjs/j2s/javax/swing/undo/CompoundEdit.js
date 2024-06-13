(function(){var P$=Clazz.newPackage("javax.swing.undo"),I$=[[0,'java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CompoundEdit", null, 'javax.swing.undo.AbstractUndoableEdit');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['inProgress'],'O',['edits','java.util.List']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.inProgress=true;
this.edits=Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'undo$',  function () {
C$.superclazz.prototype.undo$.apply(this, []);
for (var i=this.edits.size$(); --i >= 0; ) {
var e=this.edits.get$I(i);
e.undo$();
}
});

Clazz.newMeth(C$, 'redo$',  function () {
C$.superclazz.prototype.redo$.apply(this, []);
for (var i=this.edits.size$(); --i >= 0; ) {
this.edits.get$I(i).redo$();
}
});

Clazz.newMeth(C$, 'lastEdit$',  function () {
var count=this.edits.size$();
return (count > 0 ? this.edits.get$I(count - 1) : null);
});

Clazz.newMeth(C$, 'die$',  function () {
for (var i=this.edits.size$(); --i >= 0; ) {
var e=this.edits.get$I(i);
e.die$();
}
C$.superclazz.prototype.die$.apply(this, []);
});

Clazz.newMeth(C$, 'addEdit$javax_swing_undo_UndoableEdit',  function (anEdit) {
if (!this.inProgress) {
return false;
} else {
var last=this.lastEdit$();
if (last == null ) {
this.edits.add$O(anEdit);
} else if (!last.addEdit$javax_swing_undo_UndoableEdit(anEdit)) {
if (anEdit.replaceEdit$javax_swing_undo_UndoableEdit(last)) {
this.edits.remove$I(this.edits.size$() - 1);
}this.edits.add$O(anEdit);
}return true;
}});

Clazz.newMeth(C$, 'end$',  function () {
this.inProgress=false;
});

Clazz.newMeth(C$, 'canUndo$',  function () {
return !this.isInProgress$() && C$.superclazz.prototype.canUndo$.apply(this, []) ;
});

Clazz.newMeth(C$, 'canRedo$',  function () {
return !this.isInProgress$() && C$.superclazz.prototype.canRedo$.apply(this, []) ;
});

Clazz.newMeth(C$, 'isInProgress$',  function () {
return this.inProgress;
});

Clazz.newMeth(C$, 'isSignificant$',  function () {
for (var i=this.edits.size$(); --i >= 0; ) {
if (this.edits.get$I(i).isSignificant$()) {
return true;
}}
return false;
});

Clazz.newMeth(C$, 'getPresentationName$',  function () {
var last=this.lastEdit$();
if (last != null ) {
return last.getPresentationName$();
} else {
return C$.superclazz.prototype.getPresentationName$.apply(this, []);
}});

Clazz.newMeth(C$, 'getUndoPresentationName$',  function () {
var last=this.lastEdit$();
if (last != null ) {
return last.getUndoPresentationName$();
} else {
return C$.superclazz.prototype.getUndoPresentationName$.apply(this, []);
}});

Clazz.newMeth(C$, 'getRedoPresentationName$',  function () {
var last=this.lastEdit$();
if (last != null ) {
return last.getRedoPresentationName$();
} else {
return C$.superclazz.prototype.getRedoPresentationName$.apply(this, []);
}});

Clazz.newMeth(C$, 'toString',  function () {
return C$.superclazz.prototype.toString.apply(this, []) + " inProgress: " + this.inProgress + " edits: " + this.edits ;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:32 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
