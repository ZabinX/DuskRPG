(function(){var P$=Clazz.newPackage("org.apache.tools.bzip2"),p$1={},I$=[[0,'org.apache.tools.bzip2.CRC',['org.apache.tools.bzip2.CBZip2InputStream','.Data'],'org.apache.tools.bzip2.BZip2Constants']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CBZip2InputStream", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.io.InputStream', 'org.apache.tools.bzip2.BZip2Constants');
C$.$classes$=[['Data',26]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.crc=Clazz.new_($I$(1,1));
this.currentChar=-1;
this.currentState=1;
},1);

C$.$fields$=[['Z',['blockRandomised','decompressConcatenated'],'C',['su_z'],'I',['last','origPtr','blockSize100k','bsBuff','bsLive','nInUse','currentChar','currentState','storedBlockCRC','storedCombinedCRC','computedBlockCRC','computedCombinedCRC','su_count','su_ch2','su_chPrev','su_i2','su_j2','su_rNToGo','su_rTPos','su_tPos'],'O',['crc','org.apache.tools.bzip2.CRC','$in','java.io.InputStream','data','org.apache.tools.bzip2.CBZip2InputStream.Data']]]

Clazz.newMeth(C$, 'c$$java_io_InputStream',  function ($in) {
C$.c$$java_io_InputStream$Z.apply(this, [$in, false]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_InputStream$Z',  function ($in, decompressConcatenated) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.$in=$in;
this.decompressConcatenated=decompressConcatenated;
p$1.init$Z.apply(this, [true]);
p$1.initBlock.apply(this, []);
p$1.setupBlock.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'read$',  function () {
if (this.$in == null ) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["stream closed"]);
return p$1.read0.apply(this, []);
});

Clazz.newMeth(C$, 'read$BA$I$I',  function (dest, offs, len) {
if (offs < 0) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["offs(" + offs + ") < 0." ]);
}if (len < 0) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["len(" + len + ") < 0." ]);
}if (offs + len > dest.length) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["offs(" + offs + ") + len(" + len + ") > dest.length(" + dest.length + ")." ]);
}if (this.$in == null ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["stream closed"]);
}var hi=offs + len;
var destOffs=offs;
for (var b; (destOffs < hi) && ((b=p$1.read0.apply(this, [])) >= 0) ; ) {
dest[destOffs++]=(b|0);
}
return (destOffs == offs) ? -1 : (destOffs - offs);
});

Clazz.newMeth(C$, 'makeMaps',  function () {
var inUse=this.data.inUse;
var seqToUnseq=this.data.seqToUnseq;
var nInUseShadow=0;
for (var i=0; i < 256; i++) {
if (inUse[i]) {
seqToUnseq[nInUseShadow++]=(i|0);
}}
this.nInUse=nInUseShadow;
}, p$1);

Clazz.newMeth(C$, 'read0',  function () {
var retChar=this.currentChar;
switch (this.currentState) {
case 0:
return -1;
case 1:
throw Clazz.new_(Clazz.load('IllegalStateException'));
case 2:
throw Clazz.new_(Clazz.load('IllegalStateException'));
case 3:
p$1.setupRandPartB.apply(this, []);
break;
case 4:
p$1.setupRandPartC.apply(this, []);
break;
case 5:
throw Clazz.new_(Clazz.load('IllegalStateException'));
case 6:
p$1.setupNoRandPartB.apply(this, []);
break;
case 7:
p$1.setupNoRandPartC.apply(this, []);
break;
default:
throw Clazz.new_(Clazz.load('IllegalStateException'));
}
return retChar;
}, p$1);

Clazz.newMeth(C$, 'init$Z',  function (isFirstStream) {
if (null == this.$in ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["No InputStream"]);
}if (isFirstStream) {
if (this.$in.available$() == 0) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Empty InputStream"]);
}} else {
var magic0=this.$in.read$();
if (magic0 == -1) {
return false;
}var magic1=this.$in.read$();
if (magic0 != 66  || magic1 != 90  ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Garbage after a valid BZip2 stream"]);
}}var magic2=this.$in.read$();
if (magic2 != 104 ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[isFirstStream ? "Stream is not in the BZip2 format" : "Garbage after a valid BZip2 stream"]);
}var blockSize=this.$in.read$();
if ((blockSize < 49 ) || (blockSize > 57 ) ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Stream is not BZip2 formatted: illegal " + "blocksize " + String.fromCharCode(blockSize) ]);
}this.blockSize100k=blockSize - 48;
this.bsLive=0;
this.computedCombinedCRC=0;
return true;
}, p$1);

Clazz.newMeth(C$, 'initBlock',  function () {
var magic0;
var magic1;
var magic2;
var magic3;
var magic4;
var magic5;
while (true){
magic0=p$1.bsGetUByte.apply(this, []);
magic1=p$1.bsGetUByte.apply(this, []);
magic2=p$1.bsGetUByte.apply(this, []);
magic3=p$1.bsGetUByte.apply(this, []);
magic4=p$1.bsGetUByte.apply(this, []);
magic5=p$1.bsGetUByte.apply(this, []);
if (magic0.$c() != 23  || magic1.$c() != 114   || magic2.$c() != 69   || magic3.$c() != 56   || magic4.$c() != 80   || magic5.$c() != 144  ) {
break;
}if (p$1.complete.apply(this, [])) {
return;
}}
if (magic0.$c() != 49  || magic1.$c() != 65   || magic2.$c() != 89   || magic3.$c() != 38   || magic4.$c() != 83   || magic5.$c() != 89  ) {
this.currentState=0;
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["bad block header"]);
}this.storedBlockCRC=p$1.bsGetInt.apply(this, []);
this.blockRandomised=p$1.bsR$I.apply(this, [1]) == 1;
if (this.data == null ) {
this.data=Clazz.new_($I$(2,1).c$$I,[this.blockSize100k]);
}p$1.getAndMoveToFrontDecode.apply(this, []);
this.crc.initialiseCRC$();
this.currentState=1;
}, p$1);

Clazz.newMeth(C$, 'endBlock',  function () {
this.computedBlockCRC=this.crc.getFinalCRC$();
if (this.storedBlockCRC != this.computedBlockCRC) {
this.computedCombinedCRC=(this.storedCombinedCRC << 1) | (this.storedCombinedCRC >>> 31);
this.computedCombinedCRC^=this.storedBlockCRC;
C$.reportCRCError$();
}this.computedCombinedCRC=(this.computedCombinedCRC << 1) | (this.computedCombinedCRC >>> 31);
this.computedCombinedCRC^=this.computedBlockCRC;
}, p$1);

Clazz.newMeth(C$, 'complete',  function () {
this.storedCombinedCRC=p$1.bsGetInt.apply(this, []);
this.currentState=0;
this.data=null;
if (this.storedCombinedCRC != this.computedCombinedCRC) {
C$.reportCRCError$();
}return !this.decompressConcatenated || !p$1.init$Z.apply(this, [false]) ;
}, p$1);

Clazz.newMeth(C$, 'close$',  function () {
var inShadow=this.$in;
if (inShadow != null ) {
try {
if (inShadow !== System.$in ) {
inShadow.close$();
}} finally {
this.data=null;
this.$in=null;
}
}});

Clazz.newMeth(C$, 'bsR$I',  function (n) {
var bsLiveShadow=this.bsLive;
var bsBuffShadow=this.bsBuff;
if (bsLiveShadow < n) {
var inShadow=this.$in;
do {
var thech=this.$in.read$();
if (thech < 0) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["unexpected end of stream"]);
}bsBuffShadow=(bsBuffShadow << 8) | thech;
bsLiveShadow+=8;
} while (bsLiveShadow < n);
this.bsBuff=bsBuffShadow;
}this.bsLive=bsLiveShadow - n;
return (bsBuffShadow >> (bsLiveShadow - n)) & ((1 << n) - 1);
}, p$1);

Clazz.newMeth(C$, 'bsGetBit',  function () {
var bsLiveShadow=this.bsLive;
var bsBuffShadow=this.bsBuff;
if (bsLiveShadow < 1) {
var thech=this.$in.read$();
if (thech < 0) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["unexpected end of stream"]);
}bsBuffShadow=(bsBuffShadow << 8) | thech;
bsLiveShadow+=8;
this.bsBuff=bsBuffShadow;
}this.bsLive=bsLiveShadow - 1;
return ((bsBuffShadow >> (bsLiveShadow - 1)) & 1) != 0;
}, p$1);

Clazz.newMeth(C$, 'bsGetUByte',  function () {
return String.fromCharCode(p$1.bsR$I.apply(this, [8]));
}, p$1);

Clazz.newMeth(C$, 'bsGetInt',  function () {
return (((((p$1.bsR$I.apply(this, [8]) << 8) | p$1.bsR$I.apply(this, [8])) << 8) | p$1.bsR$I.apply(this, [8])) << 8) | p$1.bsR$I.apply(this, [8]);
}, p$1);

Clazz.newMeth(C$, 'hbCreateDecodeTables$IA$IA$IA$CA$I$I$I',  function (limit, base, perm, length, minLen, maxLen, alphaSize) {
for (var i=minLen, pp=0; i <= maxLen; i++) {
for (var j=0; j < alphaSize; j++) {
if ((length[j]).$c() == i ) {
perm[pp++]=j;
}}
}
for (var i=23; --i > 0; ) {
base[i]=0;
limit[i]=0;
}
for (var i=0; i < alphaSize; i++) {
++base[(length[i]).$c() + 1];
}
for (var i=1, b=base[0]; i < 23; i++) {
b+=base[i];
base[i]=b;
}
for (var i=minLen, vec=0, b=base[i]; i <= maxLen; i++) {
var nb=base[i + 1];
vec+=nb - b;
b=nb;
limit[i]=vec - 1;
vec<<=1;
}
for (var i=minLen + 1; i <= maxLen; i++) {
base[i]=((limit[i - 1] + 1) << 1) - base[i];
}
}, 1);

Clazz.newMeth(C$, 'recvDecodingTables',  function () {
var dataShadow=this.data;
var inUse=dataShadow.inUse;
var pos=dataShadow.recvDecodingTables_pos;
var selector=dataShadow.selector;
var selectorMtf=dataShadow.selectorMtf;
var inUse16=0;
for (var i=0; i < 16; i++) {
if (p$1.bsGetBit.apply(this, [])) {
inUse16|=1 << i;
}}
for (var i=256; --i >= 0; ) {
inUse[i]=false;
}
for (var i=0; i < 16; i++) {
if ((inUse16 & (1 << i)) != 0) {
var i16=i << 4;
for (var j=0; j < 16; j++) {
if (p$1.bsGetBit.apply(this, [])) {
inUse[i16 + j]=true;
}}
}}
p$1.makeMaps.apply(this, []);
var alphaSize=this.nInUse + 2;
var nGroups=p$1.bsR$I.apply(this, [3]);
var nSelectors=p$1.bsR$I.apply(this, [15]);
for (var i=0; i < nSelectors; i++) {
var j=0;
while (p$1.bsGetBit.apply(this, [])){
++j;
}
selectorMtf[i]=(j|0);
}
for (var v=nGroups; --v >= 0; ) {
pos[v]=(v|0);
}
for (var i=0; i < nSelectors; i++) {
var v=selectorMtf[i] & 255;
var tmp=pos[v];
while (v > 0){
pos[v]=pos[v - 1];
--v;
}
pos[0]=tmp;
selector[i]=tmp;
}
var len=dataShadow.temp_charArray2d;
for (var t=0; t < nGroups; t++) {
var curr=p$1.bsR$I.apply(this, [5]);
var len_t=len[t];
for (var i=0; i < alphaSize; i++) {
while (p$1.bsGetBit.apply(this, [])){
curr+=p$1.bsGetBit.apply(this, []) ? -1 : 1;
}
len_t[i]=String.fromCharCode(curr);
}
}
p$1.createHuffmanDecodingTables$I$I.apply(this, [alphaSize, nGroups]);
}, p$1);

Clazz.newMeth(C$, 'createHuffmanDecodingTables$I$I',  function (alphaSize, nGroups) {
var dataShadow=this.data;
var len=dataShadow.temp_charArray2d;
var minLens=dataShadow.minLens;
var limit=dataShadow.limit;
var base=dataShadow.base;
var perm=dataShadow.perm;
for (var t=0; t < nGroups; t++) {
var minLen=32;
var maxLen=0;
var len_t=len[t];
for (var i=alphaSize; --i >= 0; ) {
var lent=len_t[i];
if (lent.$c() > maxLen ) {
maxLen=lent.$c();
}if (lent.$c() < minLen ) {
minLen=lent.$c();
}}
C$.hbCreateDecodeTables$IA$IA$IA$CA$I$I$I(limit[t], base[t], perm[t], len[t], minLen, maxLen, alphaSize);
minLens[t]=minLen;
}
}, p$1);

Clazz.newMeth(C$, 'getAndMoveToFrontDecode',  function () {
this.origPtr=p$1.bsR$I.apply(this, [24]);
p$1.recvDecodingTables.apply(this, []);
var inShadow=this.$in;
var dataShadow=this.data;
var ll8=dataShadow.ll8;
var unzftab=dataShadow.unzftab;
var selector=dataShadow.selector;
var seqToUnseq=dataShadow.seqToUnseq;
var yy=dataShadow.getAndMoveToFrontDecode_yy;
var minLens=dataShadow.minLens;
var limit=dataShadow.limit;
var base=dataShadow.base;
var perm=dataShadow.perm;
var limitLast=this.blockSize100k * 100000;
for (var i=256; --i >= 0; ) {
yy[i]=String.fromCharCode(i);
unzftab[i]=0;
}
var groupNo=0;
var groupPos=49;
var eob=this.nInUse + 1;
var nextSym=p$1.getAndMoveToFrontDecode0$I.apply(this, [0]);
var bsBuffShadow=this.bsBuff;
var bsLiveShadow=this.bsLive;
var lastShadow=-1;
var zt=selector[groupNo] & 255;
var base_zt=base[zt];
var limit_zt=limit[zt];
var perm_zt=perm[zt];
var minLens_zt=minLens[zt];
while (nextSym != eob){
if ((nextSym == 0) || (nextSym == 1) ) {
var s=-1;
for (var n=1; true; n<<=1) {
if (nextSym == 0) {
s+=n;
} else if (nextSym == 1) {
s+=n << 1;
} else {
break;
}if (groupPos == 0) {
groupPos=49;
zt=selector[++groupNo] & 255;
base_zt=base[zt];
limit_zt=limit[zt];
perm_zt=perm[zt];
minLens_zt=minLens[zt];
} else {
--groupPos;
}var zn=minLens_zt;
while (bsLiveShadow < zn){
var thech=this.$in.read$();
if (thech < 0) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["unexpected end of stream"]);
bsBuffShadow=(bsBuffShadow << 8) | thech;
bsLiveShadow+=8;
continue;
}
var zvec=(bsBuffShadow >> (bsLiveShadow - zn)) & ((1 << zn) - 1);
bsLiveShadow-=zn;
while (zvec > limit_zt[zn]){
++zn;
while (bsLiveShadow < 1){
var thech=this.$in.read$();
if (thech < 0) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["unexpected end of stream"]);
bsBuffShadow=(bsBuffShadow << 8) | thech;
bsLiveShadow+=8;
continue;
}
--bsLiveShadow;
zvec=(zvec << 1) | ((bsBuffShadow >> bsLiveShadow) & 1);
}
nextSym=perm_zt[zvec - base_zt[zn]];
}
var ch=seqToUnseq[(yy[0]).$c()];
unzftab[ch & 255]+=s + 1;
while (s-- >= 0){
ll8[++lastShadow]=ch;
}
if (lastShadow >= limitLast) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["block overrun"]);
}} else {
if (++lastShadow >= limitLast) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["block overrun"]);
}var tmp=yy[nextSym - 1];
++unzftab[seqToUnseq[tmp.$c()] & 255];
ll8[lastShadow]=seqToUnseq[tmp.$c()];
if (nextSym <= 16) {
for (var j=nextSym - 1; j > 0; ) {
yy[j]=yy[--j];
}
} else {
System.arraycopy$O$I$O$I$I(yy, 0, yy, 1, nextSym - 1);
}yy[0]=tmp;
if (groupPos == 0) {
groupPos=49;
zt=selector[++groupNo] & 255;
base_zt=base[zt];
limit_zt=limit[zt];
perm_zt=perm[zt];
minLens_zt=minLens[zt];
} else {
--groupPos;
}var zn=minLens_zt;
while (bsLiveShadow < zn){
var thech=this.$in.read$();
if (thech < 0) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["unexpected end of stream"]);
bsBuffShadow=(bsBuffShadow << 8) | thech;
bsLiveShadow+=8;
continue;
}
var zvec=(bsBuffShadow >> (bsLiveShadow - zn)) & ((1 << zn) - 1);
bsLiveShadow-=zn;
while (zvec > limit_zt[zn]){
++zn;
while (bsLiveShadow < 1){
var thech=this.$in.read$();
if (thech < 0) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["unexpected end of stream"]);
bsBuffShadow=(bsBuffShadow << 8) | thech;
bsLiveShadow+=8;
continue;
}
--bsLiveShadow;
zvec=(zvec << 1) | ((bsBuffShadow >> bsLiveShadow) & 1);
}
nextSym=perm_zt[zvec - base_zt[zn]];
}}
this.last=lastShadow;
this.bsLive=bsLiveShadow;
this.bsBuff=bsBuffShadow;
}, p$1);

Clazz.newMeth(C$, 'getAndMoveToFrontDecode0$I',  function (groupNo) {
var inShadow=this.$in;
var dataShadow=this.data;
var zt=dataShadow.selector[groupNo] & 255;
var limit_zt=dataShadow.limit[zt];
var zn=dataShadow.minLens[zt];
var zvec=p$1.bsR$I.apply(this, [zn]);
var bsLiveShadow=this.bsLive;
var bsBuffShadow=this.bsBuff;
while (zvec > limit_zt[zn]){
++zn;
while (bsLiveShadow < 1){
var thech=this.$in.read$();
if (thech < 0) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["unexpected end of stream"]);
bsBuffShadow=(bsBuffShadow << 8) | thech;
bsLiveShadow+=8;
continue;
}
--bsLiveShadow;
zvec=(zvec << 1) | ((bsBuffShadow >> bsLiveShadow) & 1);
}
this.bsLive=bsLiveShadow;
this.bsBuff=bsBuffShadow;
return dataShadow.perm[zt][zvec - dataShadow.base[zt][zn]];
}, p$1);

Clazz.newMeth(C$, 'setupBlock',  function () {
if (this.data == null ) {
return;
}var cftab=this.data.cftab;
var tt=this.data.initTT$I(this.last + 1);
var ll8=this.data.ll8;
cftab[0]=0;
System.arraycopy$O$I$O$I$I(this.data.unzftab, 0, cftab, 1, 256);
for (var i=1, c=cftab[0]; i <= 256; i++) {
c+=cftab[i];
cftab[i]=c;
}
for (var i=0, lastShadow=this.last; i <= lastShadow; i++) {
tt[cftab[ll8[i] & 255]++]=i;
}
if ((this.origPtr < 0) || (this.origPtr >= tt.length) ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["stream corrupted"]);
}this.su_tPos=tt[this.origPtr];
this.su_count=0;
this.su_i2=0;
this.su_ch2=256;
if (this.blockRandomised) {
this.su_rNToGo=0;
this.su_rTPos=0;
p$1.setupRandPartA.apply(this, []);
} else {
p$1.setupNoRandPartA.apply(this, []);
}}, p$1);

Clazz.newMeth(C$, 'setupRandPartA',  function () {
if (this.su_i2 <= this.last) {
this.su_chPrev=this.su_ch2;
var su_ch2Shadow=this.data.ll8[this.su_tPos] & 255;
this.su_tPos=this.data.tt[this.su_tPos];
if (this.su_rNToGo == 0) {
this.su_rNToGo=$I$(3).rNums[this.su_rTPos] - 1;
if (++this.su_rTPos == 512) {
this.su_rTPos=0;
}} else {
--this.su_rNToGo;
}this.su_ch2=su_ch2Shadow^=(this.su_rNToGo == 1) ? 1 : 0;
++this.su_i2;
this.currentChar=su_ch2Shadow;
this.currentState=3;
this.crc.updateCRC$I(su_ch2Shadow);
} else {
p$1.endBlock.apply(this, []);
p$1.initBlock.apply(this, []);
p$1.setupBlock.apply(this, []);
}}, p$1);

Clazz.newMeth(C$, 'setupNoRandPartA',  function () {
if (this.su_i2 <= this.last) {
this.su_chPrev=this.su_ch2;
var su_ch2Shadow=this.data.ll8[this.su_tPos] & 255;
this.su_ch2=su_ch2Shadow;
this.su_tPos=this.data.tt[this.su_tPos];
++this.su_i2;
this.currentChar=su_ch2Shadow;
this.currentState=6;
this.crc.updateCRC$I(su_ch2Shadow);
} else {
this.currentState=5;
p$1.endBlock.apply(this, []);
p$1.initBlock.apply(this, []);
p$1.setupBlock.apply(this, []);
}}, p$1);

Clazz.newMeth(C$, 'setupRandPartB',  function () {
if (this.su_ch2 != this.su_chPrev) {
this.currentState=2;
this.su_count=1;
p$1.setupRandPartA.apply(this, []);
} else if (++this.su_count >= 4) {
this.su_z=String.fromCharCode((this.data.ll8[this.su_tPos] & 255));
this.su_tPos=this.data.tt[this.su_tPos];
if (this.su_rNToGo == 0) {
this.su_rNToGo=$I$(3).rNums[this.su_rTPos] - 1;
if (++this.su_rTPos == 512) {
this.su_rTPos=0;
}} else {
--this.su_rNToGo;
}this.su_j2=0;
this.currentState=4;
if (this.su_rNToGo == 1) {
this.su_z = String.fromCharCode((this.su_z).$c()^ 1);
}p$1.setupRandPartC.apply(this, []);
} else {
this.currentState=2;
p$1.setupRandPartA.apply(this, []);
}}, p$1);

Clazz.newMeth(C$, 'setupRandPartC',  function () {
if (this.su_j2 < (this.su_z).$c() ) {
this.currentChar=this.su_ch2;
this.crc.updateCRC$I(this.su_ch2);
++this.su_j2;
} else {
this.currentState=2;
++this.su_i2;
this.su_count=0;
p$1.setupRandPartA.apply(this, []);
}}, p$1);

Clazz.newMeth(C$, 'setupNoRandPartB',  function () {
if (this.su_ch2 != this.su_chPrev) {
this.su_count=1;
p$1.setupNoRandPartA.apply(this, []);
} else if (++this.su_count >= 4) {
this.su_z=String.fromCharCode((this.data.ll8[this.su_tPos] & 255));
this.su_tPos=this.data.tt[this.su_tPos];
this.su_j2=0;
p$1.setupNoRandPartC.apply(this, []);
} else {
p$1.setupNoRandPartA.apply(this, []);
}}, p$1);

Clazz.newMeth(C$, 'setupNoRandPartC',  function () {
if (this.su_j2 < (this.su_z).$c() ) {
var su_ch2Shadow=this.su_ch2;
this.currentChar=su_ch2Shadow;
this.crc.updateCRC$I(su_ch2Shadow);
++this.su_j2;
this.currentState=7;
} else {
++this.su_i2;
this.su_count=0;
p$1.setupNoRandPartA.apply(this, []);
}}, p$1);

Clazz.newMeth(C$, 'reportCRCError$',  function () {
System.err.println$S("BZip2 CRC error");
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.CBZip2InputStream, "Data", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.inUse=Clazz.array(Boolean.TYPE, [256]);
this.seqToUnseq=Clazz.array(Byte.TYPE, [256]);
this.selector=Clazz.array(Byte.TYPE, [18002]);
this.selectorMtf=Clazz.array(Byte.TYPE, [18002]);
this.unzftab=Clazz.array(Integer.TYPE, [256]);
this.limit=Clazz.array(Integer.TYPE, [6, 258]);
this.base=Clazz.array(Integer.TYPE, [6, 258]);
this.perm=Clazz.array(Integer.TYPE, [6, 258]);
this.minLens=Clazz.array(Integer.TYPE, [6]);
this.cftab=Clazz.array(Integer.TYPE, [257]);
this.getAndMoveToFrontDecode_yy=Clazz.array(Character.TYPE, [256]);
this.temp_charArray2d=Clazz.array(Character.TYPE, [6, 258]);
this.recvDecodingTables_pos=Clazz.array(Byte.TYPE, [6]);
},1);

C$.$fields$=[['O',['inUse','boolean[]','seqToUnseq','byte[]','+selector','+selectorMtf','unzftab','int[]','limit','int[][]','+base','+perm','minLens','int[]','+cftab','getAndMoveToFrontDecode_yy','char[]','temp_charArray2d','char[][]','recvDecodingTables_pos','byte[]','tt','int[]','ll8','byte[]']]]

Clazz.newMeth(C$, 'c$$I',  function (blockSize100k) {
;C$.$init$.apply(this);
this.ll8=Clazz.array(Byte.TYPE, [blockSize100k * 100000]);
}, 1);

Clazz.newMeth(C$, 'initTT$I',  function (length) {
var ttShadow=this.tt;
if ((ttShadow == null ) || (ttShadow.length < length) ) {
this.tt=ttShadow=Clazz.array(Integer.TYPE, [length]);
}return ttShadow;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:38 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
