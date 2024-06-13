(function(){var P$=java.io,p$1={};
/*c*/var C$=Clazz.newClass(P$, "StringReader", null, 'java.io.Reader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.next=0;
this.mark=0;
},1);

C$.$fields$=[['I',['length','next','mark'],'S',['str']]]

Clazz.newMeth(C$, 'c$$S',  function (s) {
Clazz.super_(C$, this);
this.str=s;
this.length=s.length$();
}, 1);

Clazz.newMeth(C$, 'ensureOpen',  function () {
if (this.str == null ) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Stream closed"]);
}, p$1);

Clazz.newMeth(C$, 'read$',  function () {
{
p$1.ensureOpen.apply(this, []);
if (this.next >= this.length) return -1;
return this.str.charAt$I(this.next++).$c();
}});

Clazz.newMeth(C$, 'read$CA$I$I',  function (cbuf, off, len) {
{
p$1.ensureOpen.apply(this, []);
if ((off < 0) || (off > cbuf.length) || (len < 0) || ((off + len) > cbuf.length) || ((off + len) < 0)  ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
} else if (len == 0) {
return 0;
}if (this.next >= this.length) return -1;
var n=Math.min(this.length - this.next, len);
this.str.getChars$I$I$CA$I(this.next, this.next + n, cbuf, off);
this.next+=n;
return n;
}});

Clazz.newMeth(C$, 'skip$J',  function (ns) {
{
p$1.ensureOpen.apply(this, []);
if (this.next >= this.length) return 0;
var n=Math.min$J$J(this.length - this.next, ns);
n=Math.max$J$J(-this.next, n);
this.next=Long.$ival(Long.$add(this.next,(n)));
return n;
}});

Clazz.newMeth(C$, 'ready$',  function () {
{
p$1.ensureOpen.apply(this, []);
return true;
}});

Clazz.newMeth(C$, 'markSupported$',  function () {
return true;
});

Clazz.newMeth(C$, 'mark$I',  function (readAheadLimit) {
if (readAheadLimit < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Read-ahead limit < 0"]);
}{
p$1.ensureOpen.apply(this, []);
this.mark=this.next;
}});

Clazz.newMeth(C$, 'reset$',  function () {
{
p$1.ensureOpen.apply(this, []);
this.next=this.mark;
}});

Clazz.newMeth(C$, 'close$',  function () {
this.str=null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:15 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
