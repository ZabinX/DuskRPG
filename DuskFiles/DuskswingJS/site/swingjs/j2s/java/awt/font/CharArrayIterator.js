(function(){var P$=Clazz.newPackage("java.awt.font"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "CharArrayIterator", null, null, 'java.text.CharacterIterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['pos','begin'],'O',['chars','char[]']]]

Clazz.newMeth(C$, 'c$$CA',  function (chars) {
;C$.$init$.apply(this);
this.reset$CA$I(chars, 0);
}, 1);

Clazz.newMeth(C$, 'c$$CA$I',  function (chars, begin) {
;C$.$init$.apply(this);
this.reset$CA$I(chars, begin);
}, 1);

Clazz.newMeth(C$, 'first$',  function () {
this.pos=0;
return this.current$();
});

Clazz.newMeth(C$, 'last$',  function () {
if (this.chars.length > 0) {
this.pos=this.chars.length - 1;
} else {
this.pos=0;
}return this.current$();
});

Clazz.newMeth(C$, 'current$',  function () {
if (this.pos >= 0 && this.pos < this.chars.length ) {
return this.chars[this.pos];
} else {
return "\uffff";
}});

Clazz.newMeth(C$, 'next$',  function () {
if (this.pos < this.chars.length - 1) {
++this.pos;
return this.chars[this.pos];
} else {
this.pos=this.chars.length;
return "\uffff";
}});

Clazz.newMeth(C$, 'previous$',  function () {
if (this.pos > 0) {
--this.pos;
return this.chars[this.pos];
} else {
this.pos=0;
return "\uffff";
}});

Clazz.newMeth(C$, 'setIndex$I',  function (position) {
position-=this.begin;
if (position < 0 || position > this.chars.length ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid index"]);
}this.pos=position;
return this.current$();
});

Clazz.newMeth(C$, 'getBeginIndex$',  function () {
return this.begin;
});

Clazz.newMeth(C$, 'getEndIndex$',  function () {
return this.begin + this.chars.length;
});

Clazz.newMeth(C$, 'getIndex$',  function () {
return this.begin + this.pos;
});

Clazz.newMeth(C$, 'clone$',  function () {
var c=Clazz.new_(C$.c$$CA$I,[this.chars, this.begin]);
c.pos=this.pos;
return c;
});

Clazz.newMeth(C$, 'reset$CA',  function (chars) {
this.reset$CA$I(chars, 0);
});

Clazz.newMeth(C$, 'reset$CA$I',  function (chars, begin) {
this.chars=chars;
this.begin=begin;
this.pos=0;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:09 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
