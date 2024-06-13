(function(){var P$=java.io,p$1={},I$=[[0,'java.util.Arrays']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StreamTokenizer");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.reader=null;
this.input=null;
this.buf=Clazz.array(Character.TYPE, [20]);
this.peekc=2147483647;
this.LINENO=1;
this.eolIsSignificantP=false;
this.slashSlashCommentsP=false;
this.slashStarCommentsP=false;
this.ctype=Clazz.array(Byte.TYPE, [256]);
this.ttype=-4;
},1);

C$.$fields$=[['Z',['pushedBack','forceLower','eolIsSignificantP','slashSlashCommentsP','slashStarCommentsP'],'D',['nval'],'I',['peekc','LINENO','ttype'],'S',['sval'],'O',['reader','java.io.Reader','input','java.io.InputStream','buf','char[]','ctype','byte[]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.wordChars$I$I("a".$c(), "z".$c());
this.wordChars$I$I("A".$c(), "Z".$c());
this.wordChars$I$I(160, 255);
this.whitespaceChars$I$I(0, " ".$c());
this.commentChar$I("/".$c());
this.quoteChar$I("\"".$c());
this.quoteChar$I("\'".$c());
this.parseNumbers$();
}, 1);

Clazz.newMeth(C$, 'c$$java_io_InputStream',  function (is) {
C$.c$.apply(this, []);
if (is == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}this.input=is;
}, 1);

Clazz.newMeth(C$, 'c$$java_io_Reader',  function (r) {
C$.c$.apply(this, []);
if (r == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}this.reader=r;
}, 1);

Clazz.newMeth(C$, 'resetSyntax$',  function () {
for (var i=this.ctype.length; --i >= 0; ) this.ctype[i]=(0|0);

});

Clazz.newMeth(C$, 'wordChars$I$I',  function (low, hi) {
if (low < 0) low=0;
if (hi >= this.ctype.length) hi=this.ctype.length - 1;
while (low <= hi)this.ctype[low++]|=4;

});

Clazz.newMeth(C$, 'whitespaceChars$I$I',  function (low, hi) {
if (low < 0) low=0;
if (hi >= this.ctype.length) hi=this.ctype.length - 1;
while (low <= hi)this.ctype[low++]=1;

});

Clazz.newMeth(C$, 'ordinaryChars$I$I',  function (low, hi) {
if (low < 0) low=0;
if (hi >= this.ctype.length) hi=this.ctype.length - 1;
while (low <= hi)this.ctype[low++]=(0|0);

});

Clazz.newMeth(C$, 'ordinaryChar$I',  function (ch) {
if (ch >= 0 && ch < this.ctype.length ) this.ctype[ch]=(0|0);
});

Clazz.newMeth(C$, 'commentChar$I',  function (ch) {
if (ch >= 0 && ch < this.ctype.length ) this.ctype[ch]=16;
});

Clazz.newMeth(C$, 'quoteChar$I',  function (ch) {
if (ch >= 0 && ch < this.ctype.length ) this.ctype[ch]=8;
});

Clazz.newMeth(C$, 'parseNumbers$',  function () {
for (var i="0".$c(); i <= 57 ; i++) this.ctype[i]|=2;

this.ctype[46]|=2;
this.ctype[45]|=2;
});

Clazz.newMeth(C$, 'eolIsSignificant$Z',  function (flag) {
this.eolIsSignificantP=flag;
});

Clazz.newMeth(C$, 'slashStarComments$Z',  function (flag) {
this.slashStarCommentsP=flag;
});

Clazz.newMeth(C$, 'slashSlashComments$Z',  function (flag) {
this.slashSlashCommentsP=flag;
});

Clazz.newMeth(C$, 'lowerCaseMode$Z',  function (fl) {
this.forceLower=fl;
});

Clazz.newMeth(C$, 'read',  function () {
if (this.reader != null ) return this.reader.read$();
 else if (this.input != null ) return this.input.read$();
 else throw Clazz.new_(Clazz.load('IllegalStateException'));
}, p$1);

Clazz.newMeth(C$, 'nextToken$',  function () {
if (this.pushedBack) {
this.pushedBack=false;
return this.ttype;
}var ct=this.ctype;
this.sval=null;
var c=this.peekc;
if (c < 0) c=2147483647;
if (c == 2147483646) {
c=p$1.read.apply(this, []);
if (c < 0) return this.ttype=-1;
if (c == 10 ) c=2147483647;
}if (c == 2147483647) {
c=p$1.read.apply(this, []);
if (c < 0) return this.ttype=-1;
}this.ttype=c;
this.peekc=2147483647;
var ctype=c < 256 ? ct[c] : 4;
while ((ctype & 1) != 0){
if (c == 13 ) {
++this.LINENO;
if (this.eolIsSignificantP) {
this.peekc=2147483646;
return this.ttype=10;
}c=p$1.read.apply(this, []);
if (c == 10 ) c=p$1.read.apply(this, []);
} else {
if (c == 10 ) {
++this.LINENO;
if (this.eolIsSignificantP) {
return this.ttype=10;
}}c=p$1.read.apply(this, []);
}if (c < 0) return this.ttype=-1;
ctype=c < 256 ? ct[c] : 4;
}
if ((ctype & 2) != 0) {
var neg=false;
if (c == 45 ) {
c=p$1.read.apply(this, []);
if (c != 46  && (c < 48  || c > 57  ) ) {
this.peekc=c;
return this.ttype="-".$c();
}neg=true;
}var v=0;
var decexp=0;
var seendot=0;
while (true){
if (c == 46  && seendot == 0 ) seendot=1;
 else if (48 <= c  && c <= 57  ) {
v=v * 10 + (c - 48);
decexp+=seendot;
} else break;
c=p$1.read.apply(this, []);
}
this.peekc=c;
if (decexp != 0) {
var denom=10;
--decexp;
while (decexp > 0){
denom*=10;
--decexp;
}
v=v / denom;
}this.nval=neg ? -v : v;
return this.ttype=-2;
}if ((ctype & 4) != 0) {
var i=0;
do {
if (i >= this.buf.length) {
this.buf=$I$(1).copyOf$CA$I(this.buf, this.buf.length * 2);
}this.buf[i++]=String.fromCharCode(c);
c=p$1.read.apply(this, []);
ctype=c < 0 ? 1 : c < 256 ? ct[c] : 4;
} while ((ctype & (6)) != 0);
this.peekc=c;
this.sval=String.copyValueOf$CA$I$I(this.buf, 0, i);
if (this.forceLower) this.sval=this.sval.toLowerCase$();
return this.ttype=-3;
}if ((ctype & 8) != 0) {
this.ttype=c;
var i=0;
var d=p$1.read.apply(this, []);
while (d >= 0 && d != this.ttype  && d != 10   && d != 13  ){
if (d == 92 ) {
c=p$1.read.apply(this, []);
var first=c;
if (c >= 48  && c <= 55  ) {
c=c - 48;
var c2=p$1.read.apply(this, []);
if (48 <= c2  && c2 <= 55  ) {
c=(c << 3) + (c2 - 48);
c2=p$1.read.apply(this, []);
if (48 <= c2  && c2 <= 55   && first <= 51  ) {
c=(c << 3) + (c2 - 48);
d=p$1.read.apply(this, []);
} else d=c2;
} else d=c2;
} else {
switch (c) {
case 97:
c=7;
break;
case 98:
c="\u0008".$c();
break;
case 102:
c=12;
break;
case 110:
c="\n".$c();
break;
case 114:
c="\r".$c();
break;
case 116:
c="\t".$c();
break;
case 118:
c=11;
break;
}
d=p$1.read.apply(this, []);
}} else {
c=d;
d=p$1.read.apply(this, []);
}if (i >= this.buf.length) {
this.buf=$I$(1).copyOf$CA$I(this.buf, this.buf.length * 2);
}this.buf[i++]=String.fromCharCode(c);
}
this.peekc=(d == this.ttype) ? 2147483647 : d;
this.sval=String.copyValueOf$CA$I$I(this.buf, 0, i);
return this.ttype;
}if (c == 47  && (this.slashSlashCommentsP || this.slashStarCommentsP ) ) {
c=p$1.read.apply(this, []);
if (c == 42  && this.slashStarCommentsP ) {
var prevc=0;
while ((c=p$1.read.apply(this, [])) != 47  || prevc != 42  ){
if (c == 13 ) {
++this.LINENO;
c=p$1.read.apply(this, []);
if (c == 10 ) {
c=p$1.read.apply(this, []);
}} else {
if (c == 10 ) {
++this.LINENO;
c=p$1.read.apply(this, []);
}}if (c < 0) return this.ttype=-1;
prevc=c;
}
return this.nextToken$();
} else if (c == 47  && this.slashSlashCommentsP ) {
while ((c=p$1.read.apply(this, [])) != 10  && c != 13   && c >= 0 );
this.peekc=c;
return this.nextToken$();
} else {
if ((ct[47] & 16) != 0) {
while ((c=p$1.read.apply(this, [])) != 10  && c != 13   && c >= 0 );
this.peekc=c;
return this.nextToken$();
} else {
this.peekc=c;
return this.ttype="/".$c();
}}}if ((ctype & 16) != 0) {
while ((c=p$1.read.apply(this, [])) != 10  && c != 13   && c >= 0 );
this.peekc=c;
return this.nextToken$();
}return this.ttype=c;
});

Clazz.newMeth(C$, 'pushBack$',  function () {
if (this.ttype != -4) this.pushedBack=true;
});

Clazz.newMeth(C$, 'lineno$',  function () {
return this.LINENO;
});

Clazz.newMeth(C$, 'toString',  function () {
var ret;
switch (this.ttype) {
case -1:
ret="EOF";
break;
case 10:
ret="EOL";
break;
case -3:
ret=this.sval;
break;
case -2:
ret="n=" + new Double(this.nval).toString();
break;
case -4:
ret="NOTHING";
break;
default:
{
if (this.ttype < 256 && ((this.ctype[this.ttype] & 8) != 0) ) {
ret=this.sval;
break;
}var s=Clazz.array(Character.TYPE, [3]);
s[0]=s[2]="\'";
s[1]=String.fromCharCode(this.ttype);
ret= String.instantialize(s);
break;
}}
return "Token[" + ret + "], line " + this.LINENO ;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:15 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
