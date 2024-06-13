(function(){var P$=Clazz.newPackage("com.jcraft.jzlib"),I$=[];
var C$=Clazz.newClass(P$, "ZStream");

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.next_in=null;
this.next_in_index=0;
this.avail_in=0;
this.total_in=0;
this.next_out=null;
this.next_out_index=0;
this.avail_out=0;
this.total_out=0;
this.msg=null;
this.dstate=null;
this.istate=null;
this.data_type=0;
this.checksum=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'setAdler32$', function () {
this.checksum=Clazz.new_(Clazz.load('com.jcraft.jzlib.Adler32'));
});

Clazz.newMeth(C$, 'inflate$I', function (f) {
if (this.istate == null ) return -2;
return this.istate.inflate$I(f);
});

Clazz.newMeth(C$, 'deflate$I', function (flush) {
if (this.dstate == null ) {
return -2;
}return this.dstate.deflate$I(flush);
});

Clazz.newMeth(C$, 'flush_pending$', function () {
var len=this.dstate.pending;
if (len > this.avail_out) len=this.avail_out;
if (len == 0) return;
System.arraycopy$O$I$O$I$I(this.dstate.pending_buf, this.dstate.pending_out, this.next_out, this.next_out_index, len);
this.next_out_index+=len;
this.dstate.pending_out+=len;
this.total_out+=len;
this.avail_out-=len;
this.dstate.pending-=len;
if (this.dstate.pending == 0) {
this.dstate.pending_out=0;
}});

Clazz.newMeth(C$, 'read_buf$BA$I$I', function (buf, start, size) {
var len=this.avail_in;
if (len > size) len=size;
if (len == 0) return 0;
this.avail_in-=len;
if (this.dstate.wrap != 0) {
this.checksum.update$BA$I$I(this.next_in, this.next_in_index, len);
}System.arraycopy$O$I$O$I$I(this.next_in, this.next_in_index, buf, start, len);
this.next_in_index+=len;
this.total_in+=len;
return len;
});

Clazz.newMeth(C$, 'getAdler$', function () {
return this.checksum.getValue$();
});

Clazz.newMeth(C$, 'free$', function () {
this.next_in=null;
this.next_out=null;
this.msg=null;
});

Clazz.newMeth(C$, 'setOutput$BA$I$I', function (buf, off, len) {
this.next_out=buf;
this.next_out_index=off;
this.avail_out=len;
});

Clazz.newMeth(C$, 'setInput$BA$I$I$Z', function (buf, off, len, append) {
if (len <= 0 && append  && this.next_in != null  ) return;
if (this.avail_in > 0 && append ) {
var tmp=Clazz.array(Byte.TYPE, [this.avail_in + len]);
System.arraycopy$O$I$O$I$I(this.next_in, this.next_in_index, tmp, 0, this.avail_in);
System.arraycopy$O$I$O$I$I(buf, off, tmp, this.avail_in, len);
this.next_in=tmp;
this.next_in_index=0;
this.avail_in+=len;
} else {
this.next_in=buf;
this.next_in_index=off;
this.avail_in=len;
}});

Clazz.newMeth(C$, 'getAvailIn$', function () {
return this.avail_in;
});

Clazz.newMeth(C$, 'getTotalOut$', function () {
return this.total_out;
});

Clazz.newMeth(C$, 'getTotalIn$', function () {
return this.total_in;
});

Clazz.newMeth(C$, 'getBytes$S', function (s) {
{
var x = [];
for (var i = 0; i < s.length;i++) { var pt = s.charCodeAt(i);
if (pt <= 0x7F) { x.push(pt);
} else if (pt <= 0x7FF) { x.push(0xC0|((pt>>6)&0x1F));
x.push(0x80|(pt&0x3F));
} else if (pt <= 0xFFFF) { x.push(0xE0|((pt>>12)&0xF));
x.push(0x80|((pt>>6)&0x3F));
x.push(0x80|(pt&0x3F));
} else { x.push(0x3F); // '?'
} } return (Int32Array != Array ? new Int32Array(x) : x);
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.3.00');//Created 2023-11-12 14:15:55 Java2ScriptVisitor version 3.2.3.00 net.sf.j2s.core.jar version 3.2.3.00
