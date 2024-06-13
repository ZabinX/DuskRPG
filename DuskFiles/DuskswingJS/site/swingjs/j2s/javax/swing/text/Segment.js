(function(){var P$=Clazz.newPackage("javax.swing.text"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Segment", null, null, ['Cloneable', 'java.text.CharacterIterator', 'CharSequence']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['partialReturn'],'I',['offset','count','pos'],'O',['array','char[]']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$CA$I$I.apply(this, [null, 0, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$CA$I$I',  function (array, offset, count) {
;C$.$init$.apply(this);
this.array=array;
this.offset=offset;
this.count=count;
this.partialReturn=false;
}, 1);

Clazz.newMeth(C$, 'setPartialReturn$Z',  function (p) {
this.partialReturn=p;
});

Clazz.newMeth(C$, 'isPartialReturn$',  function () {
return this.partialReturn;
});

Clazz.newMeth(C$, 'toString',  function () {
if (this.array != null ) {
return  String.instantialize(this.array, this.offset, this.count);
}return  String.instantialize();
});

Clazz.newMeth(C$, 'first$',  function () {
this.pos=this.offset;
if (this.count != 0) {
return this.array[this.pos];
}return "\uffff";
});

Clazz.newMeth(C$, 'last$',  function () {
this.pos=this.offset + this.count;
if (this.count != 0) {
this.pos-=1;
return this.array[this.pos];
}return "\uffff";
});

Clazz.newMeth(C$, 'current$',  function () {
if (this.count != 0 && this.pos < this.offset + this.count ) {
return this.array[this.pos];
}return "\uffff";
});

Clazz.newMeth(C$, 'next$',  function () {
this.pos+=1;
var end=this.offset + this.count;
if (this.pos >= end) {
this.pos=end;
return "\uffff";
}return this.current$();
});

Clazz.newMeth(C$, 'previous$',  function () {
if (this.pos == this.offset) {
return "\uffff";
}this.pos-=1;
return this.current$();
});

Clazz.newMeth(C$, 'setIndex$I',  function (position) {
var end=this.offset + this.count;
if ((position < this.offset) || (position > end) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bad position: " + position]);
}this.pos=position;
if ((this.pos != end) && (this.count != 0) ) {
return this.array[this.pos];
}return "\uffff";
});

Clazz.newMeth(C$, 'getBeginIndex$',  function () {
return this.offset;
});

Clazz.newMeth(C$, 'getEndIndex$',  function () {
return this.offset + this.count;
});

Clazz.newMeth(C$, 'getIndex$',  function () {
return this.pos;
});

Clazz.newMeth(C$, 'charAt$I',  function (index) {
if (index < 0 || index >= this.count ) {
throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[index]);
}return this.array[this.offset + index];
});

Clazz.newMeth(C$, 'length$',  function () {
return this.count;
});

Clazz.newMeth(C$, 'subSequence$I$I',  function (start, end) {
if (start < 0) {
throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[start]);
}if (end > this.count) {
throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[end]);
}if (start > end) {
throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[end - start]);
}var segment=Clazz.new_(C$);
segment.array=this.array;
segment.offset=this.offset + start;
segment.count=end - start;
return segment;
});

Clazz.newMeth(C$, 'clone$',  function () {
var o;
try {
o=Clazz.clone(this);
} catch (cnse) {
if (Clazz.exceptionOf(cnse,"CloneNotSupportedException")){
o=null;
} else {
throw cnse;
}
}
return o;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:22 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
