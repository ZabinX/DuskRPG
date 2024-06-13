(function(){var P$=Clazz.newPackage("java.util.jar"),p$1={},p$2={},I$=[[0,'java.util.jar.Attributes','java.util.HashMap','java.io.DataOutputStream','StringBuffer',['java.util.jar.Manifest','.FastInputStream']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Manifest", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'Cloneable');
C$.$classes$=[['FastInputStream',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.attr=Clazz.new_($I$(1,1));
this.entries=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['O',['attr','java.util.jar.Attributes','entries','java.util.Map']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_InputStream',  function (is) {
;C$.$init$.apply(this);
this.read$java_io_InputStream(is);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_jar_Manifest',  function (man) {
;C$.$init$.apply(this);
this.attr.putAll$java_util_Map(man.getMainAttributes$());
this.entries.putAll$java_util_Map(man.getEntries$());
}, 1);

Clazz.newMeth(C$, 'getMainAttributes$',  function () {
return this.attr;
});

Clazz.newMeth(C$, 'getEntries$',  function () {
return this.entries;
});

Clazz.newMeth(C$, 'getAttributes$S',  function (name) {
return this.getEntries$().get$O(name);
});

Clazz.newMeth(C$, 'clear$',  function () {
this.attr.clear$();
this.entries.clear$();
});

Clazz.newMeth(C$, 'write$java_io_OutputStream',  function (out) {
var dos=Clazz.new_($I$(3,1).c$$java_io_OutputStream,[out]);
this.attr.writeMain$java_io_DataOutputStream(dos);
var it=this.entries.entrySet$().iterator$();
while (it.hasNext$()){
var e=it.next$();
var buffer=Clazz.new_($I$(4,1).c$$S,["Name: "]);
var value=e.getKey$();
if (value != null ) {
var vb=value.getBytes$S("UTF8");
value= String.instantialize(vb, 0, 0, vb.length);
}buffer.append$S(value);
buffer.append$S("\r\n");
C$.make72Safe$StringBuffer(buffer);
dos.writeBytes$S(buffer.toString());
e.getValue$().write$java_io_DataOutputStream(dos);
}
dos.flush$();
});

Clazz.newMeth(C$, 'make72Safe$StringBuffer',  function (line) {
var length=line.length$();
if (length > 72) {
var index=70;
while (index < length - 2){
line.insert$I$S(index, "\r\n ");
index+=72;
length+=3;
}
}return;
}, 1);

Clazz.newMeth(C$, 'read$java_io_InputStream',  function (is) {
var fis=Clazz.new_($I$(5,1).c$$java_io_InputStream,[is]);
var lbuf=Clazz.array(Byte.TYPE, [512]);
this.attr.read$java_util_jar_Manifest_FastInputStream$BA(fis, lbuf);
var ecount=0;
var acount=0;
var asize=2;
var len;
var name=null;
var skipEmptyLines=true;
var lastline=null;
while ((len=fis.readLine$BA(lbuf)) != -1){
if (lbuf[--len] != 10 ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["manifest line too long"]);
}if (len > 0 && lbuf[len - 1] == 13  ) {
--len;
}if (len == 0 && skipEmptyLines ) {
continue;
}skipEmptyLines=false;
if (name == null ) {
name=p$2.parseName$BA$I.apply(this, [lbuf, len]);
if (name == null ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["invalid manifest format"]);
}if (fis.peek$() == 32 ) {
lastline=Clazz.array(Byte.TYPE, [len - 6]);
System.arraycopy$O$I$O$I$I(lbuf, 6, lastline, 0, len - 6);
continue;
}} else {
var buf=Clazz.array(Byte.TYPE, [lastline.length + len - 1]);
System.arraycopy$O$I$O$I$I(lastline, 0, buf, 0, lastline.length);
System.arraycopy$O$I$O$I$I(lbuf, 1, buf, lastline.length, len - 1);
if (fis.peek$() == 32 ) {
lastline=buf;
continue;
}name= String.instantialize(buf, 0, buf.length, "UTF8");
lastline=null;
}var attr=this.getAttributes$S(name);
if (attr == null ) {
attr=Clazz.new_($I$(1,1).c$$I,[asize]);
this.entries.put$O$O(name, attr);
}attr.read$java_util_jar_Manifest_FastInputStream$BA(fis, lbuf);
++ecount;
acount+=attr.size$();
asize=Math.max(2, (acount/ecount|0));
name=null;
skipEmptyLines=true;
}
});

Clazz.newMeth(C$, 'parseName$BA$I',  function (lbuf, len) {
if (p$2.toLower$I.apply(this, [lbuf[0]]) == 110  && p$2.toLower$I.apply(this, [lbuf[1]]) == 97   && p$2.toLower$I.apply(this, [lbuf[2]]) == 109   && p$2.toLower$I.apply(this, [lbuf[3]]) == 101   && lbuf[4] == 58   && lbuf[5] == 32  ) {
try {
return  String.instantialize(lbuf, 6, len - 6, "UTF8");
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}return null;
}, p$2);

Clazz.newMeth(C$, 'toLower$I',  function (c) {
return (c >= 65  && c <= 90  ) ? 97 + (c - 65) : c;
}, p$2);

Clazz.newMeth(C$, 'equals$O',  function (o) {
if (Clazz.instanceOf(o, "java.util.jar.Manifest")) {
var m=o;
return this.attr.equals$O(m.getMainAttributes$()) && this.entries.equals$O(m.getEntries$()) ;
} else {
return false;
}});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.attr.hashCode$() + this.entries.hashCode$();
});

Clazz.newMeth(C$, 'clone$',  function () {
return Clazz.new_(C$.c$$java_util_jar_Manifest,[this]);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.Manifest, "FastInputStream", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.io.FilterInputStream');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.count=0;
this.pos=0;
},1);

C$.$fields$=[['I',['count','pos'],'O',['buf','byte[]']]]

Clazz.newMeth(C$, 'c$$java_io_InputStream',  function ($in) {
C$.c$$java_io_InputStream$I.apply(this, [$in, 8192]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_InputStream$I',  function ($in, size) {
;C$.superclazz.c$$java_io_InputStream.apply(this,[$in]);C$.$init$.apply(this);
this.buf=Clazz.array(Byte.TYPE, [size]);
}, 1);

Clazz.newMeth(C$, 'read$',  function () {
if (this.pos >= this.count) {
p$1.fill.apply(this, []);
if (this.pos >= this.count) {
return -1;
}}return Byte.toUnsignedInt$B(this.buf[this.pos++]);
});

Clazz.newMeth(C$, 'read$BA$I$I',  function (b, off, len) {
var avail=this.count - this.pos;
if (avail <= 0) {
if (len >= this.buf.length) {
return this.$in.read$BA$I$I(b, off, len);
}p$1.fill.apply(this, []);
avail=this.count - this.pos;
if (avail <= 0) {
return -1;
}}if (len > avail) {
len=avail;
}System.arraycopy$O$I$O$I$I(this.buf, this.pos, b, off, len);
this.pos+=len;
return len;
});

Clazz.newMeth(C$, 'readLine$BA$I$I',  function (b, off, len) {
var tbuf=this.buf;
var total=0;
while (total < len){
var avail=this.count - this.pos;
if (avail <= 0) {
p$1.fill.apply(this, []);
avail=this.count - this.pos;
if (avail <= 0) {
return -1;
}}var n=len - total;
if (n > avail) {
n=avail;
}var tpos=this.pos;
var maxpos=tpos + n;
while (tpos < maxpos && tbuf[tpos++] != 10  );
n=tpos - this.pos;
System.arraycopy$O$I$O$I$I(tbuf, this.pos, b, off, n);
off+=n;
total+=n;
this.pos=tpos;
if (tbuf[tpos - 1] == 10 ) {
break;
}}
return total;
});

Clazz.newMeth(C$, 'peek$',  function () {
if (this.pos == this.count) p$1.fill.apply(this, []);
if (this.pos == this.count) return $b$[0] = -1, $b$[0];
return this.buf[this.pos];
});

Clazz.newMeth(C$, 'readLine$BA',  function (b) {
return this.readLine$BA$I$I(b, 0, b.length);
});

Clazz.newMeth(C$, 'skip$J',  function (n) {
if (Long.$le(n,0 )) {
return 0;
}var avail=this.count - this.pos;
if (Long.$le(avail,0 )) {
return this.$in.skip$J(n);
}if (Long.$gt(n,avail )) {
n=avail;
}this.pos=Long.$ival(Long.$add(this.pos,(n)));
return n;
});

Clazz.newMeth(C$, 'available$',  function () {
return (this.count - this.pos) + this.$in.available$();
});

Clazz.newMeth(C$, 'close$',  function () {
if (this.$in != null ) {
this.$in.close$();
this.$in=null;
this.buf=null;
}});

Clazz.newMeth(C$, 'fill',  function () {
this.count=this.pos=0;
var n=this.$in.read$BA$I$I(this.buf, 0, this.buf.length);
if (n > 0) {
this.count=n;
}}, p$1);
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:39 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
