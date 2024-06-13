(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.common"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "BitFile");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.blocks=false;
},1);

C$.$fields$=[['Z',['blocks'],'I',['index','bitsLeft'],'O',['output','javax.imageio.stream.ImageOutputStream','buffer','byte[]']]]

Clazz.newMeth(C$, 'c$$javax_imageio_stream_ImageOutputStream$Z',  function (output, blocks) {
;C$.$init$.apply(this);
this.output=output;
this.blocks=blocks;
this.buffer=Clazz.array(Byte.TYPE, [256]);
this.index=0;
this.bitsLeft=8;
}, 1);

Clazz.newMeth(C$, 'flush$',  function () {
var numBytes=this.index + (this.bitsLeft == 8 ? 0 : 1);
if (numBytes > 0) {
if (this.blocks) {
this.output.write$I(numBytes);
}this.output.write$BA$I$I(this.buffer, 0, numBytes);
this.buffer[0]=(0|0);
this.index=0;
this.bitsLeft=8;
}});

Clazz.newMeth(C$, 'writeBits$I$I',  function (bits, numbits) {
var bitsWritten=0;
var numBytes=255;
do {
if ((this.index == 254 && this.bitsLeft == 0 ) || this.index > 254 ) {
if (this.blocks) {
this.output.write$I(numBytes);
}this.output.write$BA$I$I(this.buffer, 0, numBytes);
this.buffer[0]=(0|0);
this.index=0;
this.bitsLeft=8;
}if (numbits <= this.bitsLeft) {
if (this.blocks) {
this.buffer[$k$=this.index]=(this.buffer[$k$]|((bits & ((1 << numbits) - 1)) << (8 - this.bitsLeft))|0);
bitsWritten+=numbits;
this.bitsLeft-=numbits;
numbits=0;
} else {
this.buffer[$k$=this.index]=(this.buffer[$k$]|((bits & ((1 << numbits) - 1)) << (this.bitsLeft - numbits))|0);
bitsWritten+=numbits;
this.bitsLeft-=numbits;
numbits=0;
}} else {
if (this.blocks) {
this.buffer[$k$=this.index]=(this.buffer[$k$]|((bits & ((1 << this.bitsLeft) - 1)) << (8 - this.bitsLeft))|0);
bitsWritten+=this.bitsLeft;
bits>>=this.bitsLeft;
numbits-=this.bitsLeft;
this.buffer[++this.index]=(0|0);
this.bitsLeft=8;
} else {
var topbits=(bits >>> (numbits - this.bitsLeft)) & ((1 << this.bitsLeft) - 1);
this.buffer[$k$=this.index]=(this.buffer[$k$]|(topbits)|0);
numbits-=this.bitsLeft;
bitsWritten+=this.bitsLeft;
this.buffer[++this.index]=(0|0);
this.bitsLeft=8;
}}} while (numbits != 0);
});
var $k$;

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:52 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
