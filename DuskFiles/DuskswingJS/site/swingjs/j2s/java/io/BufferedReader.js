(function(){var P$=java.io,p$1={},I$=[[0,'StringBuffer','java.util.stream.StreamSupport','java.util.Spliterators']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BufferedReader", null, 'java.io.Reader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.markedChar=-1;
this.readAheadLimit=0;
this.skipLF=false;
this.markedSkipLF=false;
},1);

C$.$fields$=[['Z',['skipLF','markedSkipLF'],'I',['nChars','nextChar','markedChar','readAheadLimit'],'O',['$in','java.io.Reader','cb','char[]']]
,['I',['defaultCharBufferSize','defaultExpectedLineLength']]]

Clazz.newMeth(C$, 'c$$java_io_Reader$I',  function ($in, sz) {
;C$.superclazz.c$$O.apply(this,[$in]);C$.$init$.apply(this);
if (sz <= 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Buffer size <= 0"]);
this.$in=$in;
this.cb=Clazz.array(Character.TYPE, [sz]);
this.nextChar=this.nChars=0;
}, 1);

Clazz.newMeth(C$, 'c$$java_io_Reader',  function ($in) {
C$.c$$java_io_Reader$I.apply(this, [$in, C$.defaultCharBufferSize]);
}, 1);

Clazz.newMeth(C$, 'ensureOpen',  function () {
if (this.$in == null ) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Stream closed"]);
}, p$1);

Clazz.newMeth(C$, 'fill',  function () {
var dst;
if (this.markedChar <= -1) {
dst=0;
} else {
var delta=this.nextChar - this.markedChar;
if (delta >= this.readAheadLimit) {
this.markedChar=-2;
this.readAheadLimit=0;
dst=0;
} else {
if (this.readAheadLimit <= this.cb.length) {
System.arraycopy$O$I$O$I$I(this.cb, this.markedChar, this.cb, 0, delta);
this.markedChar=0;
dst=delta;
} else {
var ncb=Clazz.array(Character.TYPE, [this.readAheadLimit]);
System.arraycopy$O$I$O$I$I(this.cb, this.markedChar, ncb, 0, delta);
this.cb=ncb;
this.markedChar=0;
dst=delta;
}this.nextChar=this.nChars=delta;
}}var n;
do {
n=this.$in.read$CA$I$I(this.cb, dst, this.cb.length - dst);
} while (n == 0);
if (n > 0) {
this.nChars=dst + n;
this.nextChar=dst;
}}, p$1);

Clazz.newMeth(C$, 'read$',  function () {
{
p$1.ensureOpen.apply(this, []);
for (; ; ) {
if (this.nextChar >= this.nChars) {
p$1.fill.apply(this, []);
if (this.nextChar >= this.nChars) return -1;
}if (this.skipLF) {
this.skipLF=false;
if (this.cb[this.nextChar] == "\n") {
++this.nextChar;
continue;
}}return this.cb[this.nextChar++].$c();
}
}});

Clazz.newMeth(C$, 'read1$CA$I$I',  function (cbuf, off, len) {
if (this.nextChar >= this.nChars) {
if (len >= this.cb.length && this.markedChar <= -1  && !this.skipLF ) {
return this.$in.read$CA$I$I(cbuf, off, len);
}p$1.fill.apply(this, []);
}if (this.nextChar >= this.nChars) return -1;
if (this.skipLF) {
this.skipLF=false;
if (this.cb[this.nextChar] == "\n") {
++this.nextChar;
if (this.nextChar >= this.nChars) p$1.fill.apply(this, []);
if (this.nextChar >= this.nChars) return -1;
}}var n=Math.min(len, this.nChars - this.nextChar);
System.arraycopy$O$I$O$I$I(this.cb, this.nextChar, cbuf, off, n);
this.nextChar+=n;
return n;
}, p$1);

Clazz.newMeth(C$, 'read$CA$I$I',  function (cbuf, off, len) {
{
p$1.ensureOpen.apply(this, []);
if ((off < 0) || (off > cbuf.length) || (len < 0) || ((off + len) > cbuf.length) || ((off + len) < 0)  ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
} else if (len == 0) {
return 0;
}var n=p$1.read1$CA$I$I.apply(this, [cbuf, off, len]);
if (n <= 0) return n;
while ((n < len) && this.$in.ready$() ){
var n1=p$1.read1$CA$I$I.apply(this, [cbuf, off + n, len - n]);
if (n1 <= 0) break;
n+=n1;
}
return n;
}});

Clazz.newMeth(C$, 'readLine$Z',  function (ignoreLF) {
var s=null;
var startChar;
{
p$1.ensureOpen.apply(this, []);
var omitLF=ignoreLF || this.skipLF ;
 bufferLoop : for (; ; ) {
if (this.nextChar >= this.nChars) p$1.fill.apply(this, []);
if (this.nextChar >= this.nChars) {
if (s != null  && s.length$() > 0 ) return s.toString();
 else return null;
}var eol=false;
var c=String.fromCharCode(0);
var i;
if (omitLF && (this.cb[this.nextChar] == "\n") ) ++this.nextChar;
this.skipLF=false;
omitLF=false;
 charLoop : for (i=this.nextChar; i < this.nChars; i++) {
c=this.cb[i];
if ((c == "\n") || (c == "\r") ) {
eol=true;
break charLoop;
}}
startChar=this.nextChar;
this.nextChar=i;
if (eol) {
var str;
if (s == null ) {
str= String.instantialize(this.cb, startChar, i - startChar);
} else {
s.append$CA$I$I(this.cb, startChar, i - startChar);
str=s.toString();
}++this.nextChar;
if (c == "\r") {
this.skipLF=true;
}return str;
}if (s == null ) s=Clazz.new_($I$(1,1).c$$I,[C$.defaultExpectedLineLength]);
s.append$CA$I$I(this.cb, startChar, i - startChar);
}
}});

Clazz.newMeth(C$, 'readLine$',  function () {
return this.readLine$Z(false);
});

Clazz.newMeth(C$, 'skip$J',  function (n) {
if (Long.$lt(n,0 )) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["skip value is negative"]);
}{
p$1.ensureOpen.apply(this, []);
var r=n;
while (Long.$gt(r,0 )){
if (this.nextChar >= this.nChars) p$1.fill.apply(this, []);
if (this.nextChar >= this.nChars) break;
if (this.skipLF) {
this.skipLF=false;
if (this.cb[this.nextChar] == "\n") {
++this.nextChar;
}}var d=this.nChars - this.nextChar;
if (Long.$le(r,d )) {
this.nextChar=Long.$ival(Long.$add(this.nextChar,(r)));
r=0;
break;
} else {
(r=Long.$sub(r,(d)));
this.nextChar=this.nChars;
}}
return Long.$sub(n,r);
}});

Clazz.newMeth(C$, 'ready$',  function () {
{
p$1.ensureOpen.apply(this, []);
if (this.skipLF) {
if (this.nextChar >= this.nChars && this.$in.ready$() ) {
p$1.fill.apply(this, []);
}if (this.nextChar < this.nChars) {
if (this.cb[this.nextChar] == "\n") ++this.nextChar;
this.skipLF=false;
}}return (this.nextChar < this.nChars) || this.$in.ready$() ;
}});

Clazz.newMeth(C$, 'markSupported$',  function () {
return true;
});

Clazz.newMeth(C$, 'mark$I',  function (readAheadLimit) {
if (readAheadLimit < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Read-ahead limit < 0"]);
}{
p$1.ensureOpen.apply(this, []);
this.readAheadLimit=readAheadLimit;
this.markedChar=this.nextChar;
this.markedSkipLF=this.skipLF;
}});

Clazz.newMeth(C$, 'reset$',  function () {
{
p$1.ensureOpen.apply(this, []);
if (this.markedChar < 0) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[(this.markedChar == -2) ? "Mark invalid" : "Stream not marked"]);
this.nextChar=this.markedChar;
this.skipLF=this.markedSkipLF;
}});

Clazz.newMeth(C$, 'close$',  function () {
{
if (this.$in == null ) return;
try {
this.$in.close$();
} finally {
this.$in=null;
this.cb=null;
}
}});

Clazz.newMeth(C$, 'lines$',  function () {
var iter=((P$.BufferedReader$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "BufferedReader$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Iterator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.nextLine=null;
},1);

C$.$fields$=[['S',['nextLine']]]

Clazz.newMeth(C$, 'hasNext$',  function () {
if (this.nextLine != null ) {
return true;
} else {
try {
this.nextLine=this.b$['java.io.BufferedReader'].readLine$.apply(this.b$['java.io.BufferedReader'], []);
return (this.nextLine != null );
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('java.io.UncheckedIOException').c$$java_io_IOException,[e]);
} else {
throw e;
}
}
}});

Clazz.newMeth(C$, 'next$',  function () {
if (this.nextLine != null  || this.hasNext$() ) {
var line=this.nextLine;
this.nextLine=null;
return line;
} else {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
}});
})()
), Clazz.new_(P$.BufferedReader$1.$init$,[this, null]));
return $I$(2,"stream$java_util_Spliterator$Z",[$I$(3).spliteratorUnknownSize$java_util_Iterator$I(iter, 272), false]);
});

C$.$static$=function(){C$.$static$=0;
C$.defaultCharBufferSize=8192;
C$.defaultExpectedLineLength=80;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:14 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
