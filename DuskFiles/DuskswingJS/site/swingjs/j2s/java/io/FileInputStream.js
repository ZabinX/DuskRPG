(function(){var P$=java.io,p$1={},I$=[[0,'java.io.File','java.io.FileDescriptor','swingjs.JSUtil','java.io.ByteArrayInputStream',['swingjs.JSFileSystem','.JSFileChannel']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FileInputStream", null, 'java.io.InputStream');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.channel=null;
this.closed=false;
},1);

C$.$fields$=[['Z',['closed'],'S',['path'],'O',['fd','java.io.FileDescriptor','秘is','java.io.ByteArrayInputStream','channel','swingjs.JSFileSystem.JSFileChannel','_file','java.io.File']]]

Clazz.newMeth(C$, 'c$$S',  function (name) {
C$.c$$java_io_File.apply(this, [(name == null  ? null : Clazz.new_($I$(1,1).c$$S,[name]))]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_File',  function (file) {
Clazz.super_(C$, this);
var name=(file != null  ? file.getPath$() : null);
if (name == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}this.fd=Clazz.new_($I$(2,1));
this._file=file;
this.fd.attach$java_io_Closeable(this);
this.path=name;
p$1.open$java_io_File.apply(this, [file]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_FileDescriptor',  function (fdObj) {
Clazz.super_(C$, this);
var security=System.getSecurityManager$();
if (fdObj == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}if (security != null ) {
security.checkRead$java_io_FileDescriptor(fdObj);
}this.fd=fdObj;
this.path=null;
this.fd.attach$java_io_Closeable(this);
}, 1);

Clazz.newMeth(C$, 'open$java_io_File',  function (file) {
var bytes=$I$(3).getFileAsBytes$O(file);
if (bytes == null ) throw Clazz.new_(Clazz.load('java.io.FileNotFoundException').c$$S,["Opening file " + file]);
file.秘bytes=bytes;
this.秘is=Clazz.new_($I$(4,1).c$$BA,[bytes]);
}, p$1);

Clazz.newMeth(C$, 'read$',  function () {
return (this.channel == null  ? this.秘is.read$() : this.channel.read$());
});

Clazz.newMeth(C$, 'readBytes$BA$I$I',  function (b, off, len) {
return this.channel == null  ? this.秘is.read$BA$I$I(b, off, len) : this.channel.readBytes$BA$I$I(b, off, len);
}, p$1);

Clazz.newMeth(C$, 'read$BA',  function (b) {
return p$1.readBytes$BA$I$I.apply(this, [b, 0, b.length]);
});

Clazz.newMeth(C$, 'read$BA$I$I',  function (b, off, len) {
return p$1.readBytes$BA$I$I.apply(this, [b, off, len]);
});

Clazz.newMeth(C$, 'skip$J',  function (n) {
return this.channel == null  ? this.秘is.skip$J(n) : this.channel.skip$J(n);
});

Clazz.newMeth(C$, 'available$',  function () {
return this.channel == null  ? this.秘is.available$() : this.channel.available$();
});

Clazz.newMeth(C$, 'close$',  function () {
if (this.closed) {
return;
}this.closed=true;
this.fd.closeAll$java_io_Closeable(((P$.FileInputStream$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "FileInputStream$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.io.Closeable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'close$',  function () {
if (this.b$['java.io.FileInputStream'].channel == null ) {
this.b$['java.io.FileInputStream'].秘is.close$();
} else {
this.b$['java.io.FileInputStream'].channel.close$();
}});
})()
), Clazz.new_(P$.FileInputStream$1.$init$,[this, null])));
});

Clazz.newMeth(C$, 'getFD$',  function () {
if (this.fd != null ) {
return this.fd;
}throw Clazz.new_(Clazz.load('java.io.IOException'));
});

Clazz.newMeth(C$, 'getChannel$',  function () {
{
if (this.channel == null ) {
try {
this.fd._setPosAndLen$I$I(this.秘is.pos, this.秘is.pos + this.秘is.available$());
this.channel=$I$(5).open$java_io_FileDescriptor$S$Z$Z$O(this.fd, this.path, true, false, this);
this.秘is=null;
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
e.printStackTrace$();
} else {
throw e;
}
}
}return this.channel;
}});

Clazz.newMeth(C$, 'finalize$',  function () {
if ((this.fd != null ) && (this.fd !== $I$(2).$in ) ) {
this.close$();
}});

Clazz.newMeth(C$, 'transferTo$java_io_OutputStream',  function (out) {
if (this.channel != null ) {
return C$.superclazz.prototype.transferTo$java_io_OutputStream.apply(this, [out]);
}var b=(this.秘is.pos == 0 ? this.秘is.buf : this.秘is.readAllBytes$());
out.write$BA(b);
return b.length;
});

Clazz.newMeth(C$, 'readAllBytes$',  function () {
if (this.channel != null ) C$.superclazz.prototype.readAllBytes$.apply(this, []);
if (this.秘is.pos == 0) return this.秘is.buf;
var b=Clazz.array(Byte.TYPE, [this.available$()]);
this.read$BA$I$I(b, 0, b.length);
return b;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:14 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
