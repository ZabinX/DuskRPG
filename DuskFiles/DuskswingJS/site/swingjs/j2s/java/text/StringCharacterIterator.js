(function(){var P$=Clazz.newPackage("java.text"),I$=[[0,'InternalError']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StringCharacterIterator", null, null, 'java.text.CharacterIterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['begin','end','pos'],'S',['text']]]

Clazz.newMeth(C$, 'c$$S',  function (text) {
C$.c$$S$I.apply(this, [text, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$S$I',  function (text, pos) {
C$.c$$S$I$I$I.apply(this, [text, 0, text.length$(), pos]);
}, 1);

Clazz.newMeth(C$, 'c$$S$I$I$I',  function (text, begin, end, pos) {
;C$.$init$.apply(this);
if (text == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
this.text=text;
if (begin < 0 || begin > end  || end > text.length$() ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid substring range"]);
if (pos < begin || pos > end ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid position"]);
this.begin=begin;
this.end=end;
this.pos=pos;
}, 1);

Clazz.newMeth(C$, 'setText$S',  function (text) {
if (text == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
this.text=text;
this.begin=0;
this.end=text.length$();
this.pos=0;
});

Clazz.newMeth(C$, 'first$',  function () {
this.pos=this.begin;
return this.current$();
});

Clazz.newMeth(C$, 'last$',  function () {
if (this.end != this.begin) {
this.pos=this.end - 1;
} else {
this.pos=this.end;
}return this.current$();
});

Clazz.newMeth(C$, 'setIndex$I',  function (p) {
if (p < this.begin || p > this.end ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid index"]);
this.pos=p;
return this.current$();
});

Clazz.newMeth(C$, 'current$',  function () {
if (this.pos >= this.begin && this.pos < this.end ) {
return this.text.charAt$I(this.pos);
} else {
return "\uffff";
}});

Clazz.newMeth(C$, 'next$',  function () {
if (this.pos < this.end - 1) {
++this.pos;
return this.text.charAt$I(this.pos);
} else {
this.pos=this.end;
return "\uffff";
}});

Clazz.newMeth(C$, 'previous$',  function () {
if (this.pos > this.begin) {
--this.pos;
return this.text.charAt$I(this.pos);
} else {
return "\uffff";
}});

Clazz.newMeth(C$, 'getBeginIndex$',  function () {
return this.begin;
});

Clazz.newMeth(C$, 'getEndIndex$',  function () {
return this.end;
});

Clazz.newMeth(C$, 'getIndex$',  function () {
return this.pos;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (this === obj ) return true;
if (!(Clazz.instanceOf(obj, "java.text.StringCharacterIterator"))) return false;
var that=obj;
if (this.hashCode$() != that.hashCode$()) return false;
if (!this.text.equals$O(that.text)) return false;
if (this.pos != that.pos || this.begin != that.begin  || this.end != that.end ) return false;
return true;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.text.hashCode$() ^ this.pos ^ this.begin ^ this.end ;
});

Clazz.newMeth(C$, 'clone$',  function () {
try {
var other=Clazz.clone(this);
return other;
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(1,1).c$$Throwable,[e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:30 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
