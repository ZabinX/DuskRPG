(function(){var P$=Clazz.newPackage("javax.swing.text"),I$=[[0,['javax.swing.text.GapContent','.MarkData'],['javax.swing.text.GapContent','.MarkVector'],['javax.swing.text.GapContent','.InsertUndo'],['javax.swing.text.GapContent','.RemoveUndo'],'javax.swing.text.Segment',['javax.swing.text.GapContent','.StickyPosition'],'java.util.Vector',['javax.swing.text.GapContent','.UndoPosRef']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GapContent", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.text.GapVector', [['javax.swing.text.AbstractDocument','javax.swing.text.AbstractDocument.Content']]);
C$.$classes$=[['MarkData',16],['StickyPosition',16],['MarkVector',8],['UndoPosRef',16],['InsertUndo',0],['RemoveUndo',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['marks','javax.swing.text.GapContent.MarkVector','search','javax.swing.text.GapContent.MarkData']]
,['O',['empty','char[]']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$I.apply(this, [10]);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (initialLength) {
;C$.superclazz.c$$I.apply(this,[Math.max(initialLength, 2)]);C$.$init$.apply(this);
var implied=Clazz.array(Character.TYPE, [1]);
implied[0]="\n";
this.replace$I$I$O$I(0, 0, implied, implied.length);
this.marks=Clazz.new_($I$(2,1));
this.search=Clazz.new_($I$(1,1).c$$I,[this, null, 0]);
}, 1);

Clazz.newMeth(C$, 'allocateArray$I',  function (len) {
return Clazz.array(Character.TYPE, [len]);
});

Clazz.newMeth(C$, 'getArrayLength$',  function () {
var carray=this.getArray$();
return carray.length;
});

Clazz.newMeth(C$, 'length$',  function () {
var len=this.getArrayLength$() - (this.getGapEnd$() - this.getGapStart$());
return len;
});

Clazz.newMeth(C$, 'insertString$I$S',  function (where, str) {
if (where > this.length$() || where < 0 ) {
throw Clazz.new_(Clazz.load('javax.swing.text.BadLocationException').c$$S$I,["Invalid insert", this.length$()]);
}var chars=str.toCharArray$();
this.replace$I$I$O$I(where, 0, chars, chars.length);
return Clazz.new_([this, null, where, str.length$()],$I$(3,1).c$$I$I);
});

Clazz.newMeth(C$, 'remove$I$I',  function (where, nitems) {
if (where + nitems >= this.length$()) {
throw Clazz.new_(Clazz.load('javax.swing.text.BadLocationException').c$$S$I,["Invalid remove", this.length$() + 1]);
}var removedString=this.getString$I$I(where, nitems);
var edit=Clazz.new_($I$(4,1).c$$I$S,[this, null, where, removedString]);
this.replace$I$I$O$I(where, nitems, C$.empty, 0);
return edit;
});

Clazz.newMeth(C$, 'getString$I$I',  function (where, len) {
var s=Clazz.new_($I$(5,1));
this.getChars$I$I$javax_swing_text_Segment(where, len, s);
return  String.instantialize(s.array, s.offset, s.count);
});

Clazz.newMeth(C$, 'getChars$I$I$javax_swing_text_Segment',  function (where, len, chars) {
var end=where + len;
if (where < 0 || end < 0 ) {
throw Clazz.new_(Clazz.load('javax.swing.text.BadLocationException').c$$S$I,["Invalid location", -1]);
}if (end > this.length$() || where > this.length$() ) {
throw Clazz.new_(Clazz.load('javax.swing.text.BadLocationException').c$$S$I,["Invalid location", this.length$() + 1]);
}var g0=this.getGapStart$();
var g1=this.getGapEnd$();
var array=this.getArray$();
if ((where + len) <= g0) {
chars.array=array;
chars.offset=where;
} else if (where >= g0) {
chars.array=array;
chars.offset=g1 + where - g0;
} else {
var before=g0 - where;
if (chars.isPartialReturn$()) {
chars.array=array;
chars.offset=where;
chars.count=before;
return;
}chars.array=Clazz.array(Character.TYPE, [len]);
chars.offset=0;
System.arraycopy$O$I$O$I$I(array, where, chars.array, 0, before);
System.arraycopy$O$I$O$I$I(array, g1, chars.array, before, len - before);
}chars.count=len;
});

Clazz.newMeth(C$, 'createPosition$I',  function (offset) {
var g0=this.getGapStart$();
var g1=this.getGapEnd$();
var index=(offset < g0) ? offset : offset + (g1 - g0);
this.search.index=index;
var sortIndex=this.findSortIndex$javax_swing_text_GapContent_MarkData(this.search);
var m;
var position;
if (sortIndex < this.marks.size$() && (m=this.marks.elementAt$I(sortIndex)).index == index  && (position=m.getPosition$()) != null  ) {
} else {
position=Clazz.new_($I$(6,1),[this, null]);
m=Clazz.new_($I$(1,1).c$$I$javax_swing_text_GapContent_StickyPosition,[this, null, index, position]);
position.setMark$javax_swing_text_GapContent_MarkData(m);
this.marks.insertElementAt$javax_swing_text_GapContent_MarkData$I(m, sortIndex);
}return position;
});

Clazz.newMeth(C$, 'shiftEnd$I',  function (newSize) {
var oldGapEnd=this.getGapEnd$();
C$.superclazz.prototype.shiftEnd$I.apply(this, [newSize]);
var dg=this.getGapEnd$() - oldGapEnd;
var adjustIndex=this.findMarkAdjustIndex$I(oldGapEnd);
var n=this.marks.size$();
for (var i=adjustIndex; i < n; i++) {
var mark=this.marks.elementAt$I(i);
mark.index+=dg;
}
});

Clazz.newMeth(C$, 'getNewArraySize$I',  function (reqSize) {
if (reqSize < 524288) {
return C$.superclazz.prototype.getNewArraySize$I.apply(this, [reqSize]);
} else {
return reqSize + 524288;
}});

Clazz.newMeth(C$, 'shiftGap$I',  function (newGapStart) {
var oldGapStart=this.getGapStart$();
var dg=newGapStart - oldGapStart;
var oldGapEnd=this.getGapEnd$();
var newGapEnd=oldGapEnd + dg;
var gapSize=oldGapEnd - oldGapStart;
C$.superclazz.prototype.shiftGap$I.apply(this, [newGapStart]);
if (dg > 0) {
var adjustIndex=this.findMarkAdjustIndex$I(oldGapStart);
var n=this.marks.size$();
for (var i=adjustIndex; i < n; i++) {
var mark=this.marks.elementAt$I(i);
if (mark.index >= newGapEnd) {
break;
}mark.index-=gapSize;
}
} else if (dg < 0) {
var adjustIndex=this.findMarkAdjustIndex$I(newGapStart);
var n=this.marks.size$();
for (var i=adjustIndex; i < n; i++) {
var mark=this.marks.elementAt$I(i);
if (mark.index >= oldGapEnd) {
break;
}mark.index+=gapSize;
}
}this.resetMarksAtZero$();
});

Clazz.newMeth(C$, 'resetMarksAtZero$',  function () {
if (this.marks != null  && this.getGapStart$() == 0 ) {
var g1=this.getGapEnd$();
for (var counter=0, maxCounter=this.marks.size$(); counter < maxCounter; counter++) {
var mark=this.marks.elementAt$I(counter);
if (mark.index <= g1) {
mark.index=0;
} else {
break;
}}
}});

Clazz.newMeth(C$, 'shiftGapStartDown$I',  function (newGapStart) {
var adjustIndex=this.findMarkAdjustIndex$I(newGapStart);
var n=this.marks.size$();
var g0=this.getGapStart$();
var g1=this.getGapEnd$();
for (var i=adjustIndex; i < n; i++) {
var mark=this.marks.elementAt$I(i);
if (mark.index > g0) {
break;
}mark.index=g1;
}
C$.superclazz.prototype.shiftGapStartDown$I.apply(this, [newGapStart]);
this.resetMarksAtZero$();
});

Clazz.newMeth(C$, 'shiftGapEndUp$I',  function (newGapEnd) {
var adjustIndex=this.findMarkAdjustIndex$I(this.getGapEnd$());
var n=this.marks.size$();
for (var i=adjustIndex; i < n; i++) {
var mark=this.marks.elementAt$I(i);
if (mark.index >= newGapEnd) {
break;
}mark.index=newGapEnd;
}
C$.superclazz.prototype.shiftGapEndUp$I.apply(this, [newGapEnd]);
this.resetMarksAtZero$();
});

Clazz.newMeth(C$, 'compare$javax_swing_text_GapContent_MarkData$javax_swing_text_GapContent_MarkData',  function (o1, o2) {
if (o1.index < o2.index) {
return -1;
} else if (o1.index > o2.index) {
return 1;
} else {
return 0;
}});

Clazz.newMeth(C$, 'findMarkAdjustIndex$I',  function (searchIndex) {
this.search.index=Math.max(searchIndex, 1);
var index=this.findSortIndex$javax_swing_text_GapContent_MarkData(this.search);
for (var i=index - 1; i >= 0; i--) {
var d=this.marks.elementAt$I(i);
if (d.index != this.search.index) {
break;
}index-=1;
}
return index;
});

Clazz.newMeth(C$, 'findSortIndex$javax_swing_text_GapContent_MarkData',  function (o) {
var lower=0;
var upper=this.marks.size$() - 1;
var mid=0;
if (upper == -1) {
return 0;
}var cmp=0;
var last=this.marks.elementAt$I(upper);
cmp=this.compare$javax_swing_text_GapContent_MarkData$javax_swing_text_GapContent_MarkData(o, last);
if (cmp > 0) return upper + 1;
while (lower <= upper){
mid=lower + (((upper - lower)/2|0));
var entry=this.marks.elementAt$I(mid);
cmp=this.compare$javax_swing_text_GapContent_MarkData$javax_swing_text_GapContent_MarkData(o, entry);
if (cmp == 0) {
return mid;
} else if (cmp < 0) {
upper=mid - 1;
} else {
lower=mid + 1;
}}
return (cmp < 0) ? mid : mid + 1;
});

Clazz.newMeth(C$, 'removeUnusedMarks$',  function () {
var n=this.marks.size$();
var cleaned=Clazz.new_($I$(2,1).c$$I,[n]);
for (var i=0; i < n; i++) {
var mark=this.marks.elementAt$I(i);
if (mark != null ) {
cleaned.addElement$javax_swing_text_GapContent_MarkData(mark);
}}
this.marks=cleaned;
});

Clazz.newMeth(C$, 'getPositionsInRange$java_util_Vector$I$I',  function (v, offset, length) {
var endOffset=offset + length;
var startIndex;
var endIndex;
var g0=this.getGapStart$();
var g1=this.getGapEnd$();
if (offset < g0) {
if (offset == 0) {
startIndex=0;
} else {
startIndex=this.findMarkAdjustIndex$I(offset);
}if (endOffset >= g0) {
endIndex=this.findMarkAdjustIndex$I(endOffset + (g1 - g0) + 1 );
} else {
endIndex=this.findMarkAdjustIndex$I(endOffset + 1);
}} else {
startIndex=this.findMarkAdjustIndex$I(offset + (g1 - g0));
endIndex=this.findMarkAdjustIndex$I(endOffset + (g1 - g0) + 1 );
}var placeIn=(v == null ) ? Clazz.new_([Math.max(1, endIndex - startIndex)],$I$(7,1).c$$I) : v;
for (var counter=startIndex; counter < endIndex; counter++) {
placeIn.addElement$O(Clazz.new_([this, null, this.marks.elementAt$I(counter)],$I$(8,1).c$$javax_swing_text_GapContent_MarkData));
}
return placeIn;
});

Clazz.newMeth(C$, 'updateUndoPositions$java_util_Vector$I$I',  function (positions, offset, length) {
var endOffset=offset + length;
var g1=this.getGapEnd$();
var startIndex;
var endIndex=this.findMarkAdjustIndex$I(g1 + 1);
if (offset != 0) {
startIndex=this.findMarkAdjustIndex$I(g1);
} else {
startIndex=0;
}for (var counter=positions.size$() - 1; counter >= 0; counter--) {
var ref=positions.elementAt$I(counter);
ref.resetLocation$I$I(endOffset, g1);
}
if (startIndex < endIndex) {
var sorted=Clazz.array(java.lang.Object, [endIndex - startIndex]);
var addIndex=0;
var counter;
if (offset == 0) {
for (counter=startIndex; counter < endIndex; counter++) {
var mark=this.marks.elementAt$I(counter);
if (mark.index == 0) {
sorted[addIndex++]=mark;
}}
for (counter=startIndex; counter < endIndex; counter++) {
var mark=this.marks.elementAt$I(counter);
if (mark.index != 0) {
sorted[addIndex++]=mark;
}}
} else {
for (counter=startIndex; counter < endIndex; counter++) {
var mark=this.marks.elementAt$I(counter);
if (mark.index != g1) {
sorted[addIndex++]=mark;
}}
for (counter=startIndex; counter < endIndex; counter++) {
var mark=this.marks.elementAt$I(counter);
if (mark.index == g1) {
sorted[addIndex++]=mark;
}}
}this.marks.replaceRange$I$I$OA(startIndex, endIndex, sorted);
}});

C$.$static$=function(){C$.$static$=0;
C$.empty=Clazz.array(Character.TYPE, [0]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.GapContent, "MarkData", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['index'],'O',['ref','javax.swing.text.GapContent.StickyPosition']]]

Clazz.newMeth(C$, 'c$$I',  function (index) {
;C$.$init$.apply(this);
this.index=index;
}, 1);

Clazz.newMeth(C$, 'c$$I$javax_swing_text_GapContent_StickyPosition',  function (index, position) {
;C$.$init$.apply(this);
this.ref=position;
this.index=index;
}, 1);

Clazz.newMeth(C$, 'getOffset$',  function () {
var g0=this.b$['javax.swing.text.GapVector'].getGapStart$.apply(this.b$['javax.swing.text.GapVector'], []);
var g1=this.b$['javax.swing.text.GapVector'].getGapEnd$.apply(this.b$['javax.swing.text.GapVector'], []);
var offs=(this.index < g0) ? this.index : this.index - (g1 - g0);
return Math.max(offs, 0);
});

Clazz.newMeth(C$, 'getPosition$',  function () {
return this.ref;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.GapContent, "StickyPosition", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.text.Position');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['mark','javax.swing.text.GapContent.MarkData']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setMark$javax_swing_text_GapContent_MarkData',  function (mark) {
this.mark=mark;
});

Clazz.newMeth(C$, 'getOffset$',  function () {
return this.mark.getOffset$();
});

Clazz.newMeth(C$, 'toString',  function () {
return Integer.toString$I(this.getOffset$());
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.GapContent, "MarkVector", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.text.GapVector');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.oneMark=Clazz.array($I$(1), [1]);
},1);

C$.$fields$=[['O',['oneMark','javax.swing.text.GapContent.MarkData[]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (size) {
;C$.superclazz.c$$I.apply(this,[size]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'allocateArray$I',  function (len) {
return Clazz.array($I$(1), [len]);
});

Clazz.newMeth(C$, 'getArrayLength$',  function () {
var marks=this.getArray$();
return marks.length;
});

Clazz.newMeth(C$, 'size$',  function () {
var len=this.getArrayLength$() - (this.getGapEnd$() - this.getGapStart$());
return len;
});

Clazz.newMeth(C$, 'insertElementAt$javax_swing_text_GapContent_MarkData$I',  function (m, index) {
this.oneMark[0]=m;
this.replace$I$I$O$I(index, 0, this.oneMark, 1);
});

Clazz.newMeth(C$, 'addElement$javax_swing_text_GapContent_MarkData',  function (m) {
this.insertElementAt$javax_swing_text_GapContent_MarkData$I(m, this.size$());
});

Clazz.newMeth(C$, 'elementAt$I',  function (index) {
var g0=this.getGapStart$();
var g1=this.getGapEnd$();
var array=this.getArray$();
if (index < g0) {
return array[index];
} else {
index+=g1 - g0;
return array[index];
}});

Clazz.newMeth(C$, 'replaceRange$I$I$OA',  function (start, end, marks) {
var g0=this.getGapStart$();
var g1=this.getGapEnd$();
var index=start;
var newIndex=0;
var array=this.getArray$();
if (start >= g0) {
index+=(g1 - g0);
end+=(g1 - g0);
} else if (end >= g0) {
end+=(g1 - g0);
while (index < g0){
array[index++]=marks[newIndex++];
}
index=g1;
} else {
while (index < end){
array[index++]=marks[newIndex++];
}
}while (index < end){
array[index++]=marks[newIndex++];
}
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.GapContent, "UndoPosRef", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['undoLocation'],'O',['rec','javax.swing.text.GapContent.MarkData']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_GapContent_MarkData',  function (rec) {
;C$.$init$.apply(this);
this.rec=rec;
this.undoLocation=rec.getOffset$();
}, 1);

Clazz.newMeth(C$, 'resetLocation$I$I',  function (endOffset, g1) {
if (this.undoLocation != endOffset) {
this.rec.index=this.undoLocation;
} else {
this.rec.index=g1;
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.GapContent, "InsertUndo", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.undo.AbstractUndoableEdit');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['offset','length'],'S',['string'],'O',['posRefs','java.util.Vector']]]

Clazz.newMeth(C$, 'c$$I$I',  function (offset, length) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.offset=offset;
this.length=length;
}, 1);

Clazz.newMeth(C$, 'undo$',  function () {
C$.superclazz.prototype.undo$.apply(this, []);
try {
this.posRefs=this.b$['javax.swing.text.GapContent'].getPositionsInRange$java_util_Vector$I$I.apply(this.b$['javax.swing.text.GapContent'], [null, this.offset, this.length]);
this.string=this.b$['javax.swing.text.GapContent'].getString$I$I.apply(this.b$['javax.swing.text.GapContent'], [this.offset, this.length]);
this.b$['javax.swing.text.GapContent'].remove$I$I.apply(this.b$['javax.swing.text.GapContent'], [this.offset, this.length]);
} catch (bl) {
if (Clazz.exceptionOf(bl,"javax.swing.text.BadLocationException")){
throw Clazz.new_(Clazz.load('javax.swing.undo.CannotUndoException'));
} else {
throw bl;
}
}
});

Clazz.newMeth(C$, 'redo$',  function () {
C$.superclazz.prototype.redo$.apply(this, []);
try {
this.b$['javax.swing.text.GapContent'].insertString$I$S.apply(this.b$['javax.swing.text.GapContent'], [this.offset, this.string]);
this.string=null;
if (this.posRefs != null ) {
this.b$['javax.swing.text.GapContent'].updateUndoPositions$java_util_Vector$I$I.apply(this.b$['javax.swing.text.GapContent'], [this.posRefs, this.offset, this.length]);
this.posRefs=null;
}} catch (bl) {
if (Clazz.exceptionOf(bl,"javax.swing.text.BadLocationException")){
throw Clazz.new_(Clazz.load('javax.swing.undo.CannotRedoException'));
} else {
throw bl;
}
}
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.GapContent, "RemoveUndo", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.undo.AbstractUndoableEdit');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['offset','length'],'S',['string'],'O',['posRefs','java.util.Vector']]]

Clazz.newMeth(C$, 'c$$I$S',  function (offset, string) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.offset=offset;
this.string=string;
this.length=string.length$();
this.posRefs=this.b$['javax.swing.text.GapContent'].getPositionsInRange$java_util_Vector$I$I.apply(this.b$['javax.swing.text.GapContent'], [null, offset, this.length]);
}, 1);

Clazz.newMeth(C$, 'undo$',  function () {
C$.superclazz.prototype.undo$.apply(this, []);
try {
this.b$['javax.swing.text.GapContent'].insertString$I$S.apply(this.b$['javax.swing.text.GapContent'], [this.offset, this.string]);
if (this.posRefs != null ) {
this.b$['javax.swing.text.GapContent'].updateUndoPositions$java_util_Vector$I$I.apply(this.b$['javax.swing.text.GapContent'], [this.posRefs, this.offset, this.length]);
this.posRefs=null;
}this.string=null;
} catch (bl) {
if (Clazz.exceptionOf(bl,"javax.swing.text.BadLocationException")){
throw Clazz.new_(Clazz.load('javax.swing.undo.CannotUndoException'));
} else {
throw bl;
}
}
});

Clazz.newMeth(C$, 'redo$',  function () {
C$.superclazz.prototype.redo$.apply(this, []);
try {
this.string=this.b$['javax.swing.text.GapContent'].getString$I$I.apply(this.b$['javax.swing.text.GapContent'], [this.offset, this.length]);
this.posRefs=this.b$['javax.swing.text.GapContent'].getPositionsInRange$java_util_Vector$I$I.apply(this.b$['javax.swing.text.GapContent'], [null, this.offset, this.length]);
this.b$['javax.swing.text.GapContent'].remove$I$I.apply(this.b$['javax.swing.text.GapContent'], [this.offset, this.length]);
} catch (bl) {
if (Clazz.exceptionOf(bl,"javax.swing.text.BadLocationException")){
throw Clazz.new_(Clazz.load('javax.swing.undo.CannotRedoException'));
} else {
throw bl;
}
}
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:18 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
