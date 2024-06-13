(function(){var P$=Clazz.newPackage("javajs.util"),p$1={},I$=[[0,['javajs.util.CBZip2InputStream','.Data']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CBZip2InputStream", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.io.InputStream');
C$.$classes$=[['Data',26]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.currentChar=-1;
this.currentState=1;
this.globalCrc=-1;
},1);

C$.$fields$=[['Z',['blockRandomised','decompressConcatenated'],'C',['su_z'],'I',['last','origPtr','blockSize100k','bsBuff','bsLive','nInUse','currentChar','currentState','storedBlockCRC','storedCombinedCRC','computedBlockCRC','computedCombinedCRC','su_count','su_ch2','su_chPrev','su_i2','su_j2','su_rNToGo','su_rTPos','su_tPos','globalCrc'],'O',['$in','java.io.InputStream','data','javajs.util.CBZip2InputStream.Data']]
,['O',['rNums','int[]','+crc32Table']]]

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
this.data=Clazz.new_($I$(1,1).c$$I,[this.blockSize100k]);
}p$1.getAndMoveToFrontDecode.apply(this, []);
this.currentState=1;
}, p$1);

Clazz.newMeth(C$, 'endBlock',  function () {
this.computedBlockCRC=this.getFinalCRC$();
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
this.su_rNToGo=C$.rNums[this.su_rTPos] - 1;
if (++this.su_rTPos == 512) {
this.su_rTPos=0;
}} else {
--this.su_rNToGo;
}this.su_ch2=su_ch2Shadow^=(this.su_rNToGo == 1) ? 1 : 0;
++this.su_i2;
this.currentChar=su_ch2Shadow;
this.currentState=3;
this.updateCRC$I(su_ch2Shadow);
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
this.updateCRC$I(su_ch2Shadow);
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
this.su_rNToGo=C$.rNums[this.su_rTPos] - 1;
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
this.updateCRC$I(this.su_ch2);
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
this.updateCRC$I(su_ch2Shadow);
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

Clazz.newMeth(C$, 'getFinalCRC$',  function () {
return ~this.globalCrc;
});

Clazz.newMeth(C$, 'getGlobalCRC$',  function () {
return this.globalCrc;
});

Clazz.newMeth(C$, 'setGlobalCRC$I',  function (newCrc) {
this.globalCrc=newCrc;
});

Clazz.newMeth(C$, 'updateCRC$I',  function (inCh) {
var temp=(this.globalCrc >> 24) ^ inCh;
if (temp < 0) {
temp=256 + temp;
}this.globalCrc=(this.globalCrc << 8) ^ C$.crc32Table[temp];
});

Clazz.newMeth(C$, 'updateCRC$I$I',  function (inCh, repeat) {
var globalCrcShadow=this.globalCrc;
while (repeat-- > 0){
var temp=(globalCrcShadow >> 24) ^ inCh;
globalCrcShadow=(globalCrcShadow << 8) ^ C$.crc32Table[(temp >= 0) ? temp : (temp + 256)];
}
this.globalCrc=globalCrcShadow;
});

C$.$static$=function(){C$.$static$=0;
C$.rNums=Clazz.array(Integer.TYPE, -1, [619, 720, 127, 481, 931, 816, 813, 233, 566, 247, 985, 724, 205, 454, 863, 491, 741, 242, 949, 214, 733, 859, 335, 708, 621, 574, 73, 654, 730, 472, 419, 436, 278, 496, 867, 210, 399, 680, 480, 51, 878, 465, 811, 169, 869, 675, 611, 697, 867, 561, 862, 687, 507, 283, 482, 129, 807, 591, 733, 623, 170, 607, 520, 932, 727, 476, 693, 425, 174, 647, 150, 238, 59, 379, 684, 877, 625, 169, 643, 105, 73, 122, 335, 530, 442, 853, 695, 249, 445, 515, 909, 545, 703, 919, 874, 474, 882, 500, 594, 612, 641, 801, 220, 162, 819, 984, 589, 513, 495, 799, 161, 604, 958, 533, 221, 400, 386, 867, 600, 782, 382, 596, 414, 171, 516, 375, 682, 485, 911, 276, 98, 553, 163, 354, 666, 933, 424, 341, 533, 870, 227, 730, 475, 186, 263, 647, 537, 686, 600, 224, 469, 68, 770, 919, 190, 373, 294, 822, 808, 206, 184, 943, 795, 384, 383, 461, 404, 758, 839, 887, 715, 67, 618, 276, 204, 918, 873, 777, 604, 560, 951, 160, 578, 722, 79, 804, 96, 409, 713, 940, 652, 934, 970, 447, 318, 353, 859, 672, 112, 785, 645, 863, 803, 350, 139, 93, 354, 99, 820, 908, 609, 772, 154, 274, 580, 184, 79, 626, 630, 742, 653, 282, 762, 623, 680, 81, 927, 626, 789, 125, 411, 521, 938, 300, 821, 78, 343, 175, 128, 250, 170, 774, 972, 275, 999, 639, 495, 78, 352, 126, 857, 956, 358, 619, 580, 124, 737, 594, 701, 612, 669, 112, 134, 694, 363, 992, 809, 743, 168, 974, 944, 375, 748, 52, 600, 747, 642, 182, 862, 81, 344, 805, 988, 739, 511, 655, 814, 334, 249, 515, 897, 955, 664, 981, 649, 113, 974, 459, 893, 228, 433, 837, 553, 268, 926, 240, 102, 654, 459, 51, 686, 754, 806, 760, 493, 403, 415, 394, 687, 700, 946, 670, 656, 610, 738, 392, 760, 799, 887, 653, 978, 321, 576, 617, 626, 502, 894, 679, 243, 440, 680, 879, 194, 572, 640, 724, 926, 56, 204, 700, 707, 151, 457, 449, 797, 195, 791, 558, 945, 679, 297, 59, 87, 824, 713, 663, 412, 693, 342, 606, 134, 108, 571, 364, 631, 212, 174, 643, 304, 329, 343, 97, 430, 751, 497, 314, 983, 374, 822, 928, 140, 206, 73, 263, 980, 736, 876, 478, 430, 305, 170, 514, 364, 692, 829, 82, 855, 953, 676, 246, 369, 970, 294, 750, 807, 827, 150, 790, 288, 923, 804, 378, 215, 828, 592, 281, 565, 555, 710, 82, 896, 831, 547, 261, 524, 462, 293, 465, 502, 56, 661, 821, 976, 991, 658, 869, 905, 758, 745, 193, 768, 550, 608, 933, 378, 286, 215, 979, 792, 961, 61, 688, 793, 644, 986, 403, 106, 366, 905, 644, 372, 567, 466, 434, 645, 210, 389, 550, 919, 135, 780, 773, 635, 389, 707, 100, 626, 958, 165, 504, 920, 176, 193, 713, 857, 265, 203, 50, 668, 108, 645, 990, 626, 197, 510, 357, 358, 850, 858, 364, 936, 638]);
C$.crc32Table=Clazz.array(Integer.TYPE, -1, [0, 79764919, 159529838, 222504665, 319059676, 398814059, 445009330, 507990021, 638119352, 583659535, 797628118, 726387553, 890018660, 835552979, 1015980042, 944750013, 1276238704, 1221641927, 1167319070, 1095957929, 1595256236, 1540665371, 1452775106, 1381403509, 1780037320, 1859660671, 1671105958, 1733955601, 2031960084, 2111593891, 1889500026, 1952343757, -1742489888, -1662866601, -1851683442, -1788833735, -1960329156, -1880695413, -2103051438, -2040207643, -1104454824, -1159051537, -1213636554, -1284997759, -1389417084, -1444007885, -1532160278, -1603531939, -734892656, -789352409, -575645954, -646886583, -952755380, -1007220997, -827056094, -898286187, -231047128, -151282273, -71779514, -8804623, -515967244, -436212925, -390279782, -327299027, 881225847, 809987520, 1023691545, 969234094, 662832811, 591600412, 771767749, 717299826, 311336399, 374308984, 453813921, 533576470, 25881363, 88864420, 134795389, 214552010, 2023205639, 2086057648, 1897238633, 1976864222, 1804852699, 1867694188, 1645340341, 1724971778, 1587496639, 1516133128, 1461550545, 1406951526, 1302016099, 1230646740, 1142491917, 1087903418, -1398421865, -1469785312, -1524105735, -1578704818, -1079922613, -1151291908, -1239184603, -1293773166, -1968362705, -1905510760, -2094067647, -2014441994, -1716953613, -1654112188, -1876203875, -1796572374, -525066777, -462094256, -382327159, -302564546, -206542021, -143559028, -97365931, -17609246, -960696225, -1031934488, -817968335, -872425850, -709327229, -780559564, -600130067, -654598054, 1762451694, 1842216281, 1619975040, 1682949687, 2047383090, 2127137669, 1938468188, 2001449195, 1325665622, 1271206113, 1183200824, 1111960463, 1543535498, 1489069629, 1434599652, 1363369299, 622672798, 568075817, 748617968, 677256519, 907627842, 853037301, 1067152940, 995781531, 51762726, 131386257, 177728840, 240578815, 269590778, 349224269, 429104020, 491947555, -248556018, -168932423, -122852000, -60002089, -500490030, -420856475, -341238852, -278395381, -685261898, -739858943, -559578920, -630940305, -1004286614, -1058877219, -845023740, -916395085, -1119974018, -1174433591, -1262701040, -1333941337, -1371866206, -1426332139, -1481064244, -1552294533, -1690935098, -1611170447, -1833673816, -1770699233, -2009983462, -1930228819, -2119160460, -2056179517, 1569362073, 1498123566, 1409854455, 1355396672, 1317987909, 1246755826, 1192025387, 1137557660, 2072149281, 2135122070, 1912620623, 1992383480, 1753615357, 1816598090, 1627664531, 1707420964, 295390185, 358241886, 404320391, 483945776, 43990325, 106832002, 186451547, 266083308, 932423249, 861060070, 1041341759, 986742920, 613929101, 542559546, 756411363, 701822548, -978770311, -1050133554, -869589737, -924188512, -693284699, -764654318, -550540341, -605129092, -475935807, -413084042, -366743377, -287118056, -257573603, -194731862, -114850189, -35218492, -1984365303, -1921392450, -2143631769, -2063868976, -1698919467, -1635936670, -1824608069, -1744851700, -1347415887, -1418654458, -1506661409, -1561119128, -1129027987, -1200260134, -1254728445, -1309196108]);
};
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
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:45 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
