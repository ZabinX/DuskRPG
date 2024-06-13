(function(){var P$=java.io,p$1={},I$=[[0,'java.io.InputStream']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BufferedInputStream", null, 'java.io.FilterInputStream');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.markpos=-1;
this.秘closed=false;
},1);

C$.$fields$=[['Z',['秘closed'],'I',['count','marklimit','markpos','pos'],'O',['buf','byte[]']]]

Clazz.newMeth(C$, 'c$$java_io_InputStream',  function ($in) {
;C$.superclazz.c$$java_io_InputStream.apply(this,[$in]);C$.$init$.apply(this);
this.buf=($in == null ) ? null : Clazz.array(Byte.TYPE, [8192]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_InputStream$I',  function ($in, size) {
;C$.superclazz.c$$java_io_InputStream.apply(this,[$in]);C$.$init$.apply(this);
if (size <= 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Buffer size <= 0"]);
}this.buf=($in == null ) ? null : Clazz.array(Byte.TYPE, [size]);
}, 1);

Clazz.newMeth(C$, 'available$',  function () {
if (this.buf == null ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[("Stream closed")]);
}return this.count - this.pos + this.$in.available$();
});

Clazz.newMeth(C$, 'close$',  function () {
if (null != this.$in ) {
C$.superclazz.prototype.close$.apply(this, []);
this.$in=null;
}this.buf=null;
this.秘closed=true;
});

Clazz.newMeth(C$, 'fillbuf',  function () {
if (this.markpos == -1 || (this.pos - this.markpos >= this.marklimit) ) {
var result=this.$in.read$BA(this.buf);
if (result > 0) {
this.markpos=-1;
this.pos=0;
this.count=result == -1 ? 0 : result;
}return result;
}if (this.markpos == 0 && this.marklimit > this.buf.length ) {
var newLength=this.buf.length * 2;
if (newLength > this.marklimit) {
newLength=this.marklimit;
}var newbuf=Clazz.array(Byte.TYPE, [newLength]);
System.arraycopy$O$I$O$I$I(this.buf, 0, newbuf, 0, this.buf.length);
this.buf=newbuf;
} else if (this.markpos > 0) {
System.arraycopy$O$I$O$I$I(this.buf, this.markpos, this.buf, 0, this.buf.length - this.markpos);
}this.pos-=this.markpos;
this.count=this.markpos=0;
var bytesread=this.$in.read$BA$I$I(this.buf, this.pos, this.buf.length - this.pos);
this.count=bytesread <= 0 ? this.pos : this.pos + bytesread;
return bytesread;
}, p$1);

Clazz.newMeth(C$, 'mark$I',  function (readlimit) {
this.marklimit=readlimit;
this.markpos=this.pos;
});

Clazz.newMeth(C$, 'markSupported$',  function () {
return true;
});

Clazz.newMeth(C$, 'read$',  function () {
if (this.buf == null ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[("Stream closed")]);
}if (this.pos >= this.count && p$1.fillbuf.apply(this, []) == -1 ) {
return -1;
}if (this.count - this.pos > 0) {
return this.buf[this.pos++] & 255;
}return -1;
});

Clazz.newMeth(C$, 'read$BA$I$I',  function (buffer, offset, length) {
if (this.秘closed) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[("Stream closed")]);
}if (offset > buffer.length - length || offset < 0  || length < 0 ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
}if (length == 0) {
return 0;
}if (null == this.buf ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[("Stream closed")]);
}var required;
if (this.pos < this.count) {
var copylength=this.count - this.pos >= length ? length : this.count - this.pos;
System.arraycopy$O$I$O$I$I(this.buf, this.pos, buffer, offset, copylength);
this.pos+=copylength;
if (copylength == length || this.$in.available$() == 0 ) {
return copylength;
}offset+=copylength;
required=length - copylength;
} else {
required=length;
}while (true){
var read;
if (this.markpos == -1 && required >= this.buf.length ) {
read=this.$in.read$BA$I$I(buffer, offset, required);
if (read == -1) {
return required == length ? -1 : length - required;
}} else {
if (p$1.fillbuf.apply(this, []) == -1) {
return required == length ? -1 : length - required;
}read=this.count - this.pos >= required ? required : this.count - this.pos;
System.arraycopy$O$I$O$I$I(this.buf, this.pos, buffer, offset, read);
this.pos+=read;
}required-=read;
if (required == 0) {
return length;
}if (this.$in.available$() == 0) {
return length - required;
}offset+=read;
}
});

Clazz.newMeth(C$, 'reset$',  function () {
if (this.秘closed) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[("Stream closed")]);
}if (this.markpos < 0) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Resetting to invalid mark"]);
this.pos=this.markpos;
});

Clazz.newMeth(C$, 'skip$J',  function (amount) {
if (null == this.$in ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[("Stream closed")]);
}if (Long.$lt(amount,1 )) {
return 0;
}if (Long.$ge(this.count - this.pos,amount )) {
this.pos=Long.$ival(Long.$add(this.pos,(amount)));
return amount;
}var read=this.count - this.pos;
this.pos=this.count;
if (this.markpos != -1) {
if (Long.$le(amount,this.marklimit )) {
if (p$1.fillbuf.apply(this, []) == -1) {
return read;
}if (Long.$ge(this.count - this.pos,Long.$sub(amount,read) )) {
this.pos=Long.$ival(Long.$add(this.pos,(Long.$sub(amount,read))));
return amount;
}(read=Long.$add(read,((this.count - this.pos))));
this.pos=this.count;
return read;
}this.markpos=-1;
}return Long.$add(read,this.$in.skip$J(Long.$sub(amount,read)));
});

Clazz.newMeth(C$, 'transferTo$java_io_OutputStream',  function (out) {
var b=this.readAllBytes$();
out.write$BA(b);
return b.length;
});

Clazz.newMeth(C$, 'readAllBytes$',  function () {
var base=$I$(1).秘getByteStream$java_io_InputStream$I(this, -1);
return (base == null  ? C$.superclazz.prototype.readAllBytes$.apply(this, []) : base.readAllBytes$());
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:14 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
