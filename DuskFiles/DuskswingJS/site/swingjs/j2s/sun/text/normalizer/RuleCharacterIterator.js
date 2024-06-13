(function(){var P$=Clazz.newPackage("sun.text.normalizer"),p$1={},I$=[[0,'sun.text.normalizer.UTF16','sun.text.normalizer.UCharacterProperty','sun.text.normalizer.Utility']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RuleCharacterIterator");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isEscaped'],'I',['bufPos'],'S',['text'],'O',['pos','java.text.ParsePosition','sym','sun.text.normalizer.SymbolTable','buf','char[]']]]

Clazz.newMeth(C$, 'c$$S$sun_text_normalizer_SymbolTable$java_text_ParsePosition',  function (text, sym, pos) {
;C$.$init$.apply(this);
if (text == null  || pos.getIndex$() > text.length$() ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}this.text=text;
this.sym=sym;
this.pos=pos;
this.buf=null;
}, 1);

Clazz.newMeth(C$, 'atEnd$',  function () {
return this.buf == null  && this.pos.getIndex$() == this.text.length$() ;
});

Clazz.newMeth(C$, 'next$I',  function (options) {
var c=-1;
this.isEscaped=false;
for (; ; ) {
c=p$1._current.apply(this, []);
p$1._advance$I.apply(this, [$I$(1).getCharCount$I(c)]);
if (c == 36  && this.buf == null   && (options & 1) != 0  && this.sym != null  ) {
var name=this.sym.parseReference$S$java_text_ParsePosition$I(this.text, this.pos, this.text.length$());
if (name == null ) {
break;
}this.bufPos=0;
this.buf=this.sym.lookup$S(name);
if (this.buf == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Undefined variable: " + name]);
}if (this.buf.length == 0) {
this.buf=null;
}continue;
}if ((options & 4) != 0 && $I$(2).isRuleWhiteSpace$I(c) ) {
continue;
}if (c == 92  && (options & 2) != 0 ) {
var offset=Clazz.array(Integer.TYPE, -1, [0]);
c=$I$(3,"unescapeAt$S$IA",[this.lookahead$(), offset]);
this.jumpahead$I(offset[0]);
this.isEscaped=true;
if (c < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid escape"]);
}}break;
}
return c;
});

Clazz.newMeth(C$, 'isEscaped$',  function () {
return this.isEscaped;
});

Clazz.newMeth(C$, 'inVariable$',  function () {
return this.buf != null ;
});

Clazz.newMeth(C$, 'getPos$O',  function (p) {
if (p == null ) {
return Clazz.array(java.lang.Object, -1, [this.buf, Clazz.array(Integer.TYPE, -1, [this.pos.getIndex$(), this.bufPos])]);
}var a=p;
a[0]=this.buf;
var v=a[1];
v[0]=this.pos.getIndex$();
v[1]=this.bufPos;
return p;
});

Clazz.newMeth(C$, 'setPos$O',  function (p) {
var a=p;
this.buf=a[0];
var v=a[1];
this.pos.setIndex$I(v[0]);
this.bufPos=v[1];
});

Clazz.newMeth(C$, 'skipIgnored$I',  function (options) {
if ((options & 4) != 0) {
for (; ; ) {
var a=p$1._current.apply(this, []);
if (!$I$(2).isRuleWhiteSpace$I(a)) break;
p$1._advance$I.apply(this, [$I$(1).getCharCount$I(a)]);
}
}});

Clazz.newMeth(C$, 'lookahead$',  function () {
if (this.buf != null ) {
return  String.instantialize(this.buf, this.bufPos, this.buf.length - this.bufPos);
} else {
return this.text.substring$I(this.pos.getIndex$());
}});

Clazz.newMeth(C$, 'jumpahead$I',  function (count) {
if (count < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}if (this.buf != null ) {
this.bufPos+=count;
if (this.bufPos > this.buf.length) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}if (this.bufPos == this.buf.length) {
this.buf=null;
}} else {
var i=this.pos.getIndex$() + count;
this.pos.setIndex$I(i);
if (i > this.text.length$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}}});

Clazz.newMeth(C$, '_current',  function () {
if (this.buf != null ) {
return $I$(1).charAt$CA$I$I$I(this.buf, 0, this.buf.length, this.bufPos);
} else {
var i=this.pos.getIndex$();
return (i < this.text.length$()) ? $I$(1).charAt$S$I(this.text, i) : -1;
}}, p$1);

Clazz.newMeth(C$, '_advance$I',  function (count) {
if (this.buf != null ) {
this.bufPos+=count;
if (this.bufPos == this.buf.length) {
this.buf=null;
}} else {
this.pos.setIndex$I(this.pos.getIndex$() + count);
if (this.pos.getIndex$() > this.text.length$()) {
this.pos.setIndex$I(this.text.length$());
}}}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:50 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
