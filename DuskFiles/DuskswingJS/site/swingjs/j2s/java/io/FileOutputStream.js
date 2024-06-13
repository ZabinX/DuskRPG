(function(){var P$=java.io,p$1={},I$=[[0,'java.io.File','java.io.FileDescriptor','java.io.ByteArrayOutputStream','swingjs.JSUtil',['swingjs.JSFileSystem','.JSFileChannel']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FileOutputStream", null, 'java.io.OutputStream');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.closeLock= Clazz.new_();
this.closed=false;
this.bos=null;
},1);

C$.$fields$=[['Z',['append','closed'],'S',['path'],'O',['fd','java.io.FileDescriptor','channel','swingjs.JSFileSystem.JSFileChannel','closeLock','java.lang.Object','_file','java.io.File','秘bytes','byte[]','bos','java.io.ByteArrayOutputStream']]]

Clazz.newMeth(C$, '_getFile$',  function () {
return this._file;
});

Clazz.newMeth(C$, '_getBytes$',  function () {
return this.秘bytes;
});

Clazz.newMeth(C$, 'c$$S',  function (name) {
C$.c$$S$Z.apply(this, [name, false]);
}, 1);

Clazz.newMeth(C$, 'c$$S$Z',  function (name, append) {
C$.c$$java_io_File$Z.apply(this, [name == null  ? null : Clazz.new_($I$(1,1).c$$S,[name]), append]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_File',  function (file) {
C$.c$$java_io_File$Z.apply(this, [file, false]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_File$Z',  function (file, append) {
Clazz.super_(C$, this);
this._file=file;
var name=(file != null  ? file.getPath$() : null);
if (name == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}this.fd=Clazz.new_($I$(2,1));
this.fd.attach$java_io_Closeable(this);
this.append=append;
this.path=name;
p$1.open$S$Z.apply(this, [name, append]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_FileDescriptor',  function (fdObj) {
Clazz.super_(C$, this);
if (fdObj == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}this.fd=fdObj;
this.append=false;
this.path=null;
this.fd.attach$java_io_Closeable(this);
}, 1);

Clazz.newMeth(C$, 'open0$S$Z',  function (name, append) {
this.bos=Clazz.new_($I$(3,1));
if (append && this._file != null   && this._file.秘bytes != null  ) {
this.bos.write$BA$I$I(this._file.秘bytes, 0, this._file.秘bytes.length);
}}, p$1);

Clazz.newMeth(C$, 'open$S$Z',  function (name, append) {
p$1.open0$S$Z.apply(this, [name, append]);
}, p$1);

Clazz.newMeth(C$, 'write$I',  function (b) {
if (this.channel == null ) this.bos.write$I(b);
 else this.channel.write$I(b);
});

Clazz.newMeth(C$, '秘setBytes$BA',  function (b) {
this.bos.buf=b;
this.bos.count=b.length;
return true;
});

Clazz.newMeth(C$, 'write$BA',  function (b) {
this.write$BA$I$I(b, 0, b.length);
});

Clazz.newMeth(C$, 'write$BA$I$I',  function (b, off, len) {
if (this.channel == null ) this.bos.write$BA$I$I(b, off, len);
 else this.channel.writeBytes$BA$I$I(b, off, len);
});

Clazz.newMeth(C$, 'close$',  function () {
this.closed=true;
this.fd.closeAll$java_io_Closeable(((P$.FileOutputStream$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "FileOutputStream$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.io.Closeable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'close$',  function () {
if (this.b$['java.io.FileOutputStream'].channel == null ) {
this.b$['java.io.FileOutputStream'].bos.close$();
this.b$['java.io.FileOutputStream'].fd._file.秘bytes=this.b$['java.io.FileOutputStream'].秘bytes=this.b$['java.io.FileOutputStream'].bos.toByteArray$();
$I$(4).saveFile$S$O$S$S(this.b$['java.io.FileOutputStream'].path, this.b$['java.io.FileOutputStream'].秘bytes, null, null);
} else {
this.b$['java.io.FileOutputStream'].channel.close$();
}});
})()
), Clazz.new_(P$.FileOutputStream$1.$init$,[this, null])));
});

Clazz.newMeth(C$, 'getFD$',  function () {
if (this.fd != null ) {
return this.fd;
}throw Clazz.new_(Clazz.load('java.io.IOException'));
});

Clazz.newMeth(C$, 'getChannel$',  function () {
if (this.channel == null ) {
try {
this.channel=$I$(5).open$java_io_FileDescriptor$S$Z$Z$Z$O(this.fd, this.path, false, true, this.append, null);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
e.printStackTrace$();
} else {
throw e;
}
}
}return this.channel;
});

Clazz.newMeth(C$, 'finalize$',  function () {
if (this.fd != null ) {
if (this.fd === $I$(2).out  || this.fd === $I$(2).err  ) {
this.flush$();
} else {
this.close$();
}}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:14 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
