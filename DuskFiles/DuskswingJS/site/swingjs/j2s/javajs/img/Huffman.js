(function(){var P$=Clazz.newPackage("javajs.img"),p$1={},p$2={},p$3={},I$=[[0,'javajs.img.JpegObj','javajs.img.DCT','javajs.img.Huffman','javajs.util.AU']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Huffman");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['bufferPutBits','bufferPutBuffer','imageHeight','imageWidth','numOfDCTables','numOfACTables'],'O',['dc_matrix0','int[][]','+ac_matrix0','+dc_matrix1','+ac_matrix1','dc_matrix','int[][][]','+ac_matrix']]
,['O',['bitsDCluminance','int[]','+valDCluminance','+bitsDCchrominance','+valDCchrominance','+bitsACluminance','+valACluminance','+bitsACchrominance','+valACchrominance','+jpegNaturalOrder']]]

Clazz.newMeth(C$, 'c$$I$I',  function (width, height) {
;C$.$init$.apply(this);
p$3.initHuf.apply(this, []);
this.imageWidth=width;
this.imageHeight=height;
}, 1);

Clazz.newMeth(C$, 'HuffmanBlockEncoder$javajs_util_OC$IA$I$I$I',  function (out, zigzag, prec, dcCode, acCode) {
var temp;
var temp2;
var nbits;
var k;
var r;
var i;
this.numOfDCTables=2;
this.numOfACTables=2;
var matrixDC=this.dc_matrix[dcCode];
var matrixAC=this.ac_matrix[acCode];
temp=temp2=zigzag[0] - prec;
if (temp < 0) {
temp=-temp;
--temp2;
}nbits=0;
while (temp != 0){
++nbits;
temp>>=1;
}
this.bufferIt$javajs_util_OC$I$I(out, matrixDC[nbits][0], matrixDC[nbits][1]);
if (nbits != 0) {
this.bufferIt$javajs_util_OC$I$I(out, temp2, nbits);
}r=0;
for (k=1; k < 64; k++) {
if ((temp=zigzag[C$.jpegNaturalOrder[k]]) == 0) {
++r;
} else {
while (r > 15){
this.bufferIt$javajs_util_OC$I$I(out, matrixAC[240][0], matrixAC[240][1]);
r-=16;
}
temp2=temp;
if (temp < 0) {
temp=-temp;
--temp2;
}nbits=1;
while ((temp>>=1) != 0){
++nbits;
}
i=(r << 4) + nbits;
this.bufferIt$javajs_util_OC$I$I(out, matrixAC[i][0], matrixAC[i][1]);
this.bufferIt$javajs_util_OC$I$I(out, temp2, nbits);
r=0;
}}
if (r > 0) {
this.bufferIt$javajs_util_OC$I$I(out, matrixAC[0][0], matrixAC[0][1]);
}});

Clazz.newMeth(C$, 'bufferIt$javajs_util_OC$I$I',  function (out, code, size) {
var putBuffer=code;
var putBits=this.bufferPutBits;
putBuffer&=(1 << size) - 1;
putBits+=size;
putBuffer<<=24 - putBits;
putBuffer|=this.bufferPutBuffer;
while (putBits >= 8){
var c=((putBuffer >> 16) & 255);
out.writeByteAsInt$I(c);
if (c == 255) {
out.writeByteAsInt$I(0);
}putBuffer<<=8;
putBits-=8;
}
this.bufferPutBuffer=putBuffer;
this.bufferPutBits=putBits;
});

Clazz.newMeth(C$, 'flushBuffer$javajs_util_OC',  function (out) {
var putBuffer=this.bufferPutBuffer;
var putBits=this.bufferPutBits;
while (putBits >= 8){
var c=((putBuffer >> 16) & 255);
out.writeByteAsInt$I(c);
if (c == 255) {
out.writeByteAsInt$I(0);
}putBuffer<<=8;
putBits-=8;
}
if (putBits > 0) {
var c=((putBuffer >> 16) & 255);
out.writeByteAsInt$I(c);
}});

Clazz.newMeth(C$, 'initHuf',  function () {
this.dc_matrix0=Clazz.array(Integer.TYPE, [12, 2]);
this.dc_matrix1=Clazz.array(Integer.TYPE, [12, 2]);
this.ac_matrix0=Clazz.array(Integer.TYPE, [255, 2]);
this.ac_matrix1=Clazz.array(Integer.TYPE, [255, 2]);
this.dc_matrix=$I$(4).newInt3$I$I(2, -1);
this.ac_matrix=$I$(4).newInt3$I$I(2, -1);
var p;
var l;
var i;
var lastp;
var si;
var code;
var huffsize=Clazz.array(Integer.TYPE, [257]);
var huffcode=Clazz.array(Integer.TYPE, [257]);
p=0;
for (l=1; l <= 16; l++) {
for (i=C$.bitsDCchrominance[l]; --i >= 0; ) {
huffsize[p++]=l;
}
}
huffsize[p]=0;
lastp=p;
code=0;
si=huffsize[0];
p=0;
while (huffsize[p] != 0){
while (huffsize[p] == si){
huffcode[p++]=code;
++code;
}
code<<=1;
++si;
}
for (p=0; p < lastp; p++) {
this.dc_matrix1[C$.valDCchrominance[p]][0]=huffcode[p];
this.dc_matrix1[C$.valDCchrominance[p]][1]=huffsize[p];
}
p=0;
for (l=1; l <= 16; l++) {
for (i=C$.bitsACchrominance[l]; --i >= 0; ) {
huffsize[p++]=l;
}
}
huffsize[p]=0;
lastp=p;
code=0;
si=huffsize[0];
p=0;
while (huffsize[p] != 0){
while (huffsize[p] == si){
huffcode[p++]=code;
++code;
}
code<<=1;
++si;
}
for (p=0; p < lastp; p++) {
this.ac_matrix1[C$.valACchrominance[p]][0]=huffcode[p];
this.ac_matrix1[C$.valACchrominance[p]][1]=huffsize[p];
}
p=0;
for (l=1; l <= 16; l++) {
for (i=C$.bitsDCluminance[l]; --i >= 0; ) {
huffsize[p++]=l;
}
}
huffsize[p]=0;
lastp=p;
code=0;
si=huffsize[0];
p=0;
while (huffsize[p] != 0){
while (huffsize[p] == si){
huffcode[p++]=code;
++code;
}
code<<=1;
++si;
}
for (p=0; p < lastp; p++) {
this.dc_matrix0[C$.valDCluminance[p]][0]=huffcode[p];
this.dc_matrix0[C$.valDCluminance[p]][1]=huffsize[p];
}
p=0;
for (l=1; l <= 16; l++) {
for (i=C$.bitsACluminance[l]; --i >= 0; ) {
huffsize[p++]=l;
}
}
huffsize[p]=0;
lastp=p;
code=0;
si=huffsize[0];
p=0;
while (huffsize[p] != 0){
while (huffsize[p] == si){
huffcode[p++]=code;
++code;
}
code<<=1;
++si;
}
for (var q=0; q < lastp; q++) {
this.ac_matrix0[C$.valACluminance[q]][0]=huffcode[q];
this.ac_matrix0[C$.valACluminance[q]][1]=huffsize[q];
}
this.dc_matrix[0]=this.dc_matrix0;
this.dc_matrix[1]=this.dc_matrix1;
this.ac_matrix[0]=this.ac_matrix0;
this.ac_matrix[1]=this.ac_matrix1;
}, p$3);

C$.$static$=function(){C$.$static$=0;
C$.bitsDCluminance=Clazz.array(Integer.TYPE, -1, [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]);
C$.valDCluminance=Clazz.array(Integer.TYPE, -1, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
C$.bitsDCchrominance=Clazz.array(Integer.TYPE, -1, [1, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0]);
C$.valDCchrominance=Clazz.array(Integer.TYPE, -1, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
C$.bitsACluminance=Clazz.array(Integer.TYPE, -1, [16, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125]);
C$.valACluminance=Clazz.array(Integer.TYPE, -1, [1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250]);
C$.bitsACchrominance=Clazz.array(Integer.TYPE, -1, [17, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119]);
C$.valACchrominance=Clazz.array(Integer.TYPE, -1, [0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250]);
C$.jpegNaturalOrder=Clazz.array(Integer.TYPE, -1, [0, 1, 8, 16, 9, 2, 3, 10, 17, 24, 32, 25, 18, 11, 4, 5, 12, 19, 26, 33, 40, 48, 41, 34, 27, 20, 13, 6, 7, 14, 21, 28, 35, 42, 49, 56, 57, 50, 43, 36, 29, 22, 15, 23, 30, 37, 44, 51, 58, 59, 52, 45, 38, 31, 39, 46, 53, 60, 61, 54, 47, 55, 62, 63]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:45 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
