(function(){var P$=Clazz.newPackage("java.nio");
/*c*/var C$=Clazz.newClass(P$, "Buffer");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.mark=-1;
this.position=0;
},1);

C$.$fields$=[['I',['mark','position','limit','capacity'],'J',['address']]]

Clazz.newMeth(C$, 'c$$I$I$I$I',  function (mark, pos, lim, cap) {
;C$.$init$.apply(this);
if (cap < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Negative capacity: " + cap]);
this.capacity=cap;
this.limit$I(lim);
this.position$I(pos);
if (mark >= 0) {
if (mark > pos) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["mark > position: (" + mark + " > " + pos + ")" ]);
this.mark=mark;
}}, 1);

Clazz.newMeth(C$, 'capacity$',  function () {
return this.capacity;
});

Clazz.newMeth(C$, 'position$',  function () {
return this.position;
});

Clazz.newMeth(C$, 'position$I',  function (newPosition) {
if ((newPosition > this.limit) || (newPosition < 0) ) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
this.position=newPosition;
if (this.mark > this.position) this.mark=-1;
return this;
});

Clazz.newMeth(C$, 'limit$',  function () {
return this.limit;
});

Clazz.newMeth(C$, 'limit$I',  function (newLimit) {
if ((newLimit > this.capacity) || (newLimit < 0) ) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
this.limit=newLimit;
if (this.position > this.limit) this.position=this.limit;
if (this.mark > this.limit) this.mark=-1;
return this;
});

Clazz.newMeth(C$, 'mark$',  function () {
this.mark=this.position;
return this;
});

Clazz.newMeth(C$, 'reset$',  function () {
var m=this.mark;
if (m < 0) throw Clazz.new_(Clazz.load('java.nio.InvalidMarkException'));
this.position=m;
return this;
});

Clazz.newMeth(C$, 'clear$',  function () {
this.position=0;
this.limit=this.capacity;
this.mark=-1;
return this;
});

Clazz.newMeth(C$, 'flip$',  function () {
this.limit=this.position;
this.position=0;
this.mark=-1;
return this;
});

Clazz.newMeth(C$, 'rewind$',  function () {
this.position=0;
this.mark=-1;
return this;
});

Clazz.newMeth(C$, 'remaining$',  function () {
return this.limit - this.position;
});

Clazz.newMeth(C$, 'hasRemaining$',  function () {
return this.position < this.limit;
});

Clazz.newMeth(C$, 'nextGetIndex$',  function () {
if (this.position >= this.limit) throw Clazz.new_(Clazz.load('java.nio.BufferUnderflowException'));
return this.position++;
});

Clazz.newMeth(C$, 'nextGetIndex$I',  function (nb) {
if (this.limit - this.position < nb) throw Clazz.new_(Clazz.load('java.nio.BufferUnderflowException'));
var p=this.position;
this.position+=nb;
return p;
});

Clazz.newMeth(C$, 'nextPutIndex$',  function () {
if (this.position >= this.limit) throw Clazz.new_(Clazz.load('java.nio.BufferOverflowException'));
return this.position++;
});

Clazz.newMeth(C$, 'nextPutIndex$I',  function (nb) {
if (this.limit - this.position < nb) throw Clazz.new_(Clazz.load('java.nio.BufferOverflowException'));
var p=this.position;
this.position+=nb;
return p;
});

Clazz.newMeth(C$, 'checkIndex$I',  function (i) {
if ((i < 0) || (i >= this.limit) ) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
return i;
});

Clazz.newMeth(C$, 'checkIndex$I$I',  function (i, nb) {
if ((i < 0) || (nb > this.limit - i) ) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
return i;
});

Clazz.newMeth(C$, 'markValue$',  function () {
return this.mark;
});

Clazz.newMeth(C$, 'truncate$',  function () {
this.mark=-1;
this.position=0;
this.limit=0;
this.capacity=0;
});

Clazz.newMeth(C$, 'discardMark$',  function () {
this.mark=-1;
});

Clazz.newMeth(C$, 'checkBounds$I$I$I',  function (off, len, size) {
if ((off | len | (off + len) | (size - (off + len)) ) < 0) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:19 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
