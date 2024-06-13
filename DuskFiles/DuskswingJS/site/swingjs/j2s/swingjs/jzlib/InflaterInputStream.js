(function(){var P$=Clazz.newPackage("swingjs.jzlib");
/*c*/var C$=Clazz.newClass(P$, "InflaterInputStream", null, 'java.io.FilterInputStream');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.closed=false;
this.eof=false;
this.close_in=false;
this.myinflater=false;
this.byte1=Clazz.array(Byte.TYPE, [1]);
this.b=Clazz.array(Byte.TYPE, [512]);
},1);

C$.$fields$=[['Z',['closed','eof','close_in','myinflater'],'I',['len'],'O',['inflater','swingjs.jzlib.Inflater','buf','byte[]','+byte1','+b']]]

Clazz.newMeth(C$, 'c$$java_io_InputStream$swingjs_jzlib_Inflater$I$Z',  function ($in, inflater, size, close_in) {
;C$.superclazz.c$$java_io_InputStream.apply(this,[$in]);C$.$init$.apply(this);
this.inflater=inflater;
this.buf=Clazz.array(Byte.TYPE, [size]);
this.close_in=close_in;
}, 1);

Clazz.newMeth(C$, 'read$',  function () {
if (this.closed) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Stream closed"]);
}return this.read$BA$I$I(this.byte1, 0, 1) == -1 ? -1 : this.byte1[0] & 255;
});

Clazz.newMeth(C$, 'read$BA$I$I',  function (b, off, len) {
return this.readInf$BA$I$I(b, off, len);
});

Clazz.newMeth(C$, 'readInf$BA$I$I',  function (b, off, len) {
if (this.closed) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Stream closed"]);
}if (b == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
} else if (off < 0 || len < 0  || len > b.length - off ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
} else if (len == 0) {
return 0;
} else if (this.eof) {
return -1;
}var n=0;
this.inflater.setOutput$BA$I$I(b, off, len);
while (!this.eof){
if (this.inflater.avail_in == 0) this.fill$();
var err=this.inflater.inflate$I(0);
n+=this.inflater.next_out_index - off;
off=this.inflater.next_out_index;
switch (err) {
case -3:
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[this.inflater.msg]);
case 1:
case 2:
this.eof=true;
if (err == 2) return -1;
break;
default:
}
if (this.inflater.avail_out == 0) break;
}
return n;
});

Clazz.newMeth(C$, 'available$',  function () {
if (this.closed) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Stream closed"]);
}return (this.eof ? 0 : 1);
});

Clazz.newMeth(C$, 'skip$J',  function (n) {
if (Long.$lt(n,0 )) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["negative skip length"]);
}if (this.closed) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Stream closed"]);
}var max=Long.$ival(Math.min$J$J(n, 2147483647));
var total=0;
while (total < max){
var len=max - total;
if (len > this.b.length) {
len=this.b.length;
}len=this.read$BA$I$I(this.b, 0, len);
if (len == -1) {
this.eof=true;
break;
}total+=len;
}
return total;
});

Clazz.newMeth(C$, 'close$',  function () {
if (!this.closed) {
if (this.myinflater) this.inflater.end$();
if (this.close_in) this.$in.close$();
this.closed=true;
}});

Clazz.newMeth(C$, 'fill$',  function () {
if (this.closed) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Stream closed"]);
}this.len=this.$in.read$BA$I$I(this.buf, 0, this.buf.length);
if (this.len == -1) {
if (this.inflater.istate.wrap == 0 && !this.inflater.finished$() ) {
this.buf[0]=(0|0);
this.len=1;
} else if (Long.$ne(this.inflater.istate.was,-1 )) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["footer is not found"]);
} else {
throw Clazz.new_(Clazz.load('java.io.EOFException').c$$S,["Unexpected end of ZLIB input stream"]);
}}this.inflater.setInput$BA$I$I$Z(this.buf, 0, this.len, true);
});

Clazz.newMeth(C$, 'markSupported$',  function () {
return false;
});

Clazz.newMeth(C$, 'mark$I',  function (readlimit) {
});

Clazz.newMeth(C$, 'reset$',  function () {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["mark/reset not supported"]);
});

Clazz.newMeth(C$, 'getTotalIn$',  function () {
return this.inflater.getTotalInL$();
});

Clazz.newMeth(C$, 'getTotalOut$',  function () {
return this.inflater.getTotalOutL$();
});

Clazz.newMeth(C$, 'getAvailIn$',  function () {
if (this.inflater.avail_in <= 0) return null;
var tmp=Clazz.array(Byte.TYPE, [this.inflater.avail_in]);
System.arraycopy$O$I$O$I$I(this.inflater.$in, this.inflater.in_index, tmp, 0, this.inflater.avail_in);
return tmp;
});

Clazz.newMeth(C$, 'readHeader$',  function () {
var empty="".getBytes$();
this.inflater.setInput$BA$I$I$Z(empty, 0, 0, false);
this.inflater.setOutput$BA$I$I(empty, 0, 0);
var err=this.inflater.inflate$I(0);
if (!this.inflater.istate.inParsingHeader$()) {
return;
}var b1=Clazz.array(Byte.TYPE, [1]);
do {
var i=this.$in.read$BA$I$I(b1, 0, 1);
if (i <= 0) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["no input"]);
this.inflater.setInput$BA$I$I$Z(b1, 0, b1.length, false);
err=this.inflater.inflate$I(0);
if (err != 0) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[this.inflater.msg]);
} while (this.inflater.istate.inParsingHeader$());
});

Clazz.newMeth(C$, 'getInflater$',  function () {
return this.inflater;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:04 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
