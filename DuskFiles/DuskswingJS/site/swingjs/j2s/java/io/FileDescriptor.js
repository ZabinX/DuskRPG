(function(){var P$=java.io,I$=[[0,'java.util.Arrays','java.util.concurrent.atomic.AtomicInteger','java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FileDescriptor");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.len=-1;
this.fd=-1;
this.handle=-1;
},1);

C$.$fields$=[['Z',['isTempFile','closed'],'I',['pos','len','fd'],'J',['handle'],'O',['_file','java.io.File','useCount','java.util.concurrent.atomic.AtomicInteger','parent','java.io.Closeable','otherParents','java.util.List']]
,['O',['$in','java.io.FileDescriptor','+out','+err']]]

Clazz.newMeth(C$, '_getBytes$Z',  function (checkDisk) {
if (this._file.秘bytes == null  && checkDisk ) {
this._file.exists$();
}return this._file.秘bytes;
});

Clazz.newMeth(C$, '_setPosAndLen$I$I',  function (pos, len) {
this.pos=pos;
this.len=len;
if (this._file.秘bytes == null ) this._file.秘bytes=Clazz.array(Byte.TYPE, [len]);
 else if (len > this._file.秘bytes.length) this._file.秘bytes=$I$(1).copyOf$BA$I(this._file.秘bytes, len);
});

Clazz.newMeth(C$, '_getPos$',  function () {
return this.pos;
});

Clazz.newMeth(C$, '_getLen$',  function () {
return this.len;
});

Clazz.newMeth(C$, '_isTempFile$',  function () {
return this.isTempFile;
});

Clazz.newMeth(C$, '_setTempFile$Z',  function (b) {
this.isTempFile=b;
});

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.useCount=Clazz.new_($I$(2,1));
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (fd) {
;C$.$init$.apply(this);
this.fd=fd;
this.useCount=Clazz.new_($I$(2,1));
}, 1);

Clazz.newMeth(C$, 'set$java_io_FileDescriptor$I',  function (obj, fd) {
obj.fd=fd;
});

Clazz.newMeth(C$, 'get$java_io_FileDescriptor',  function (obj) {
return obj.fd;
});

Clazz.newMeth(C$, 'setHandle$java_io_FileDescriptor$J',  function (obj, handle) {
obj.handle=handle;
});

Clazz.newMeth(C$, 'getHandle$java_io_FileDescriptor',  function (obj) {
return obj.handle;
});

Clazz.newMeth(C$, 'valid$',  function () {
return this.fd != -1;
});

Clazz.newMeth(C$, 'sync$',  function () {
});

Clazz.newMeth(C$, 'incrementAndGetUseCount$',  function () {
return this.useCount.incrementAndGet$();
});

Clazz.newMeth(C$, 'decrementAndGetUseCount$',  function () {
return this.useCount.decrementAndGet$();
});

Clazz.newMeth(C$, 'attach$java_io_Closeable',  function (c) {
this._file=(c._file ||null);
this.isTempFile=this._file != null  && this._file.秘isTempFile ;
if (this.parent == null ) {
this.parent=c;
} else if (this.otherParents == null ) {
this.otherParents=Clazz.new_($I$(3,1));
this.otherParents.add$O(this.parent);
this.otherParents.add$O(c);
} else {
this.otherParents.add$O(c);
}});

Clazz.newMeth(C$, 'closeAll$java_io_Closeable',  function (releaser) {
if (!this.closed) {
this.closed=true;
var ioe=null;
try {
var c=releaser;
try {
if (this.otherParents != null ) {
for (var referent, $referent = this.otherParents.iterator$(); $referent.hasNext$()&&((referent=($referent.next$())),1);) {
try {
referent.close$();
} catch (x) {
if (Clazz.exceptionOf(x,"java.io.IOException")){
if (ioe == null ) {
ioe=x;
} else {
}} else {
throw x;
}
}
}
}
}finally{/*res*/c&&c.close$&&c.close$();}
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
ioe=ex;
} else {
throw ex;
}
} finally {
if (ioe != null ) throw ioe;
}
}});

C$.$static$=function(){C$.$static$=0;
C$.$in=Clazz.new_(C$.c$$I,[0]);
C$.out=Clazz.new_(C$.c$$I,[1]);
C$.err=Clazz.new_(C$.c$$I,[2]);
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:14 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
