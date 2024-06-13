(function(){var P$=java.io,I$=[[0,'java.util.Objects']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Reader", null, null, ['Readable', 'java.io.Closeable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['lock','java.lang.Object']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.lock=this;
}, 1);

Clazz.newMeth(C$, 'c$$O',  function (lock) {
;C$.$init$.apply(this);
if (lock != null ) this.lock="";
 else throw Clazz.new_(Clazz.load('NullPointerException'));
}, 1);

Clazz.newMeth(C$, 'transferTo$java_io_Writer',  function (out) {
$I$(1).requireNonNull$O$S(out, "out");
var transferred=0;
var buffer=Clazz.array(Character.TYPE, [8192]);
var nRead;
while ((nRead=this.read$CA$I$I(buffer, 0, 8192)) >= 0){
out.write$CA$I$I(buffer, 0, nRead);
(transferred=Long.$add(transferred,(nRead)));
}
return transferred;
});

Clazz.newMeth(C$, 'mark$I',  function (readLimit) {
throw Clazz.new_(Clazz.load('java.io.IOException'));
});

Clazz.newMeth(C$, 'markSupported$',  function () {
return false;
});

Clazz.newMeth(C$, 'read$',  function () {
{
var charArray=Clazz.array(Character.TYPE, [1]);
if (this.read$CA$I$I(charArray, 0, 1) != -1) return charArray[0].$c();
return -1;
}});

Clazz.newMeth(C$, 'read$CA',  function (buf) {
return this.read$CA$I$I(buf, 0, buf.length);
});

Clazz.newMeth(C$, 'ready$',  function () {
return false;
});

Clazz.newMeth(C$, 'reset$',  function () {
throw Clazz.new_(Clazz.load('java.io.IOException'));
});

Clazz.newMeth(C$, 'skip$J',  function (count) {
if (Long.$ge(count,0 )) {
{
var skipped=0;
var toRead=Long.$lt(count,512 ) ? Long.$ival(count) : 512;
var charsSkipped=Clazz.array(Character.TYPE, [toRead]);
while (Long.$lt(skipped,count )){
var read=this.read$CA$I$I(charsSkipped, 0, toRead);
if (read == -1) {
return skipped;
}(skipped=Long.$add(skipped,(read)));
if (read < toRead) {
return skipped;
}if (Long.$lt(Long.$sub(count,skipped),toRead )) {
toRead=Long.$ival((Long.$sub(count,skipped)));
}}
return skipped;
}}throw Clazz.new_(Clazz.load('IllegalArgumentException'));
});

Clazz.newMeth(C$, 'read$java_nio_CharBuffer',  function (target) {
if (null == target ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}var length=target.length$();
var buf=Clazz.array(Character.TYPE, [length]);
length=Math.min(length, this.read$CA(buf));
if (length > 0) {
target.put$CA$I$I(buf, 0, length);
}return length;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:15 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
