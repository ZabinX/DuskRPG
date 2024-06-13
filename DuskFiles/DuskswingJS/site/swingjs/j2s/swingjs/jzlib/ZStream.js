(function(){var P$=Clazz.newPackage("swingjs.jzlib"),I$=[[0,'swingjs.jzlib.Adler32']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ZStream");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['in_index','avail_in','next_out_index','avail_out','data_type'],'J',['total_in','total_out'],'S',['msg'],'O',['$in','byte[]','+next_out','dstate','swingjs.jzlib.Deflate','istate','swingjs.jzlib.Inflate','checksum','swingjs.jzlib.Checksum']]]

Clazz.newMeth(C$, 'setAdler32$',  function () {
this.checksum=Clazz.new_($I$(1,1));
});

Clazz.newMeth(C$, 'inflate$I',  function (f) {
if (this.istate == null ) return -2;
return this.istate.inflate$I(f);
});

Clazz.newMeth(C$, 'deflateSetDictionary$BA$I$I',  function (dictionary, off, len) {
if (this.dstate == null ) return -2;
return this.dstate.deflateSetDictionary$BA$I$I(dictionary, off, len);
});

Clazz.newMeth(C$, 'deflate$I',  function (flush) {
if (this.dstate == null ) {
return -2;
}return this.dstate.deflate$I(flush);
});

Clazz.newMeth(C$, 'flush_pending$',  function () {
var len=this.dstate.pending;
if (len > this.avail_out) len=this.avail_out;
if (len == 0) return;
System.arraycopy$O$I$O$I$I(this.dstate.pending_buf, this.dstate.pending_out, this.next_out, this.next_out_index, len);
this.next_out_index+=len;
this.dstate.pending_out+=len;
(this.total_out=Long.$add(this.total_out,(len)));
this.avail_out-=len;
this.dstate.pending-=len;
if (this.dstate.pending == 0) {
this.dstate.pending_out=0;
}});

Clazz.newMeth(C$, 'read_buf$BA$I$I',  function (out, start, size) {
var len=this.avail_in;
if (len > size) len=size;
if (len == 0) return 0;
this.avail_in-=len;
if (this.dstate.wrap != 0) {
this.checksum.update$BA$I$I(this.$in, this.in_index, len);
}System.arraycopy$O$I$O$I$I(this.$in, this.in_index, out, start, len);
this.in_index+=len;
(this.total_in=Long.$add(this.total_in,(len)));
return len;
});

Clazz.newMeth(C$, 'getAdlerL$',  function () {
return this.checksum.getValue$();
});

Clazz.newMeth(C$, 'free$',  function () {
this.$in=null;
this.next_out=null;
this.msg=null;
});

Clazz.newMeth(C$, 'setOutput$BA$I$I',  function (buf, off, len) {
this.next_out=buf;
this.next_out_index=off;
this.avail_out=len;
});

Clazz.newMeth(C$, 'setInput$BA$I$I$Z',  function ($in, off, len, append) {
if (len <= 0 && append  && this.$in != null  ) return;
if (this.avail_in > 0 && append ) {
var tmp=Clazz.array(Byte.TYPE, [this.avail_in + len]);
System.arraycopy$O$I$O$I$I(this.$in, this.in_index, tmp, 0, this.avail_in);
System.arraycopy$O$I$O$I$I($in, off, tmp, this.avail_in, len);
this.$in=tmp;
this.in_index=0;
this.avail_in+=len;
} else {
this.$in=$in;
this.in_index=off;
this.avail_in=len;
}});

Clazz.newMeth(C$, 'getAvailIn$',  function () {
return this.avail_in;
});

Clazz.newMeth(C$, 'getTotalOutL$',  function () {
return this.total_out;
});

Clazz.newMeth(C$, 'getTotalInL$',  function () {
return this.total_in;
});

Clazz.newMeth(C$, 'getBytes$S',  function (s) {
try {
return s.getBytes$S("UTF-8");
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.UnsupportedEncodingException")){
return null;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:04 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
