(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.common"),I$=[[0,'com.sun.imageio.plugins.common.BitFile','com.sun.imageio.plugins.common.LZWStringTable']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LZWCompressor");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['tiffFudge'],'I',['codeSize','clearCode','endOfInfo','numBits','limit'],'H',['prefix'],'O',['bf','com.sun.imageio.plugins.common.BitFile','lzss','com.sun.imageio.plugins.common.LZWStringTable']]]

Clazz.newMeth(C$, 'c$$javax_imageio_stream_ImageOutputStream$I$Z',  function (out, codeSize, TIFF) {
;C$.$init$.apply(this);
this.bf=Clazz.new_($I$(1,1).c$$javax_imageio_stream_ImageOutputStream$Z,[out, !TIFF]);
this.codeSize=codeSize;
this.tiffFudge=TIFF;
this.clearCode=1 << codeSize;
this.endOfInfo=this.clearCode + 1;
this.numBits=codeSize + 1;
this.limit=(1 << this.numBits) - 1;
if (this.tiffFudge) {
--this.limit;
}this.prefix=-1;
this.lzss=Clazz.new_($I$(2,1));
this.lzss.clearTable$I(codeSize);
this.bf.writeBits$I$I(this.clearCode, this.numBits);
}, 1);

Clazz.newMeth(C$, 'compress$BA$I$I',  function (buf, offset, length) {
var idx;
var c;
var index;
var maxOffset=offset + length;
for (idx=offset; idx < maxOffset; ++idx) {
c=buf[idx];
if ((index=this.lzss.findCharString$H$B(this.prefix, c)) != -1) {
this.prefix=index;
} else {
this.bf.writeBits$I$I(this.prefix, this.numBits);
if (this.lzss.addCharString$H$B(this.prefix, c) > this.limit) {
if (this.numBits == 12) {
this.bf.writeBits$I$I(this.clearCode, this.numBits);
this.lzss.clearTable$I(this.codeSize);
this.numBits=this.codeSize + 1;
} else {
++this.numBits;
}this.limit=(1 << this.numBits) - 1;
if (this.tiffFudge) {
--this.limit;
}}this.prefix=($s$[0] = (c & 255), $s$[0]);
}}
});

Clazz.newMeth(C$, 'flush$',  function () {
if (this.prefix != -1) {
this.bf.writeBits$I$I(this.prefix, this.numBits);
}this.bf.writeBits$I$I(this.endOfInfo, this.numBits);
this.bf.flush$();
});

Clazz.newMeth(C$, 'dump$java_io_PrintStream',  function (out) {
this.lzss.dump$java_io_PrintStream(out);
});
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:52 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
