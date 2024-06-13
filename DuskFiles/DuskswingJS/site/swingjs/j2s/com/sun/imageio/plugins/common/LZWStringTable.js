(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.common");
/*c*/var C$=Clazz.newClass(P$, "LZWStringTable");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['H',['numStrings'],'O',['strChr','byte[]','strNxt','short[]','+strHsh','strLen','int[]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.strChr=Clazz.array(Byte.TYPE, [4096]);
this.strNxt=Clazz.array(Short.TYPE, [4096]);
this.strLen=Clazz.array(Integer.TYPE, [4096]);
this.strHsh=Clazz.array(Short.TYPE, [9973]);
}, 1);

Clazz.newMeth(C$, 'addCharString$H$B',  function (index, b) {
var hshidx;
if (this.numStrings >= 4096) {
return 65535;
}hshidx=C$.hash$H$B(index, b);
while (this.strHsh[hshidx] != -1){
hshidx=(hshidx + 2039) % 9973;
}
this.strHsh[hshidx]=this.numStrings;
this.strChr[this.numStrings]=b;
if (index == -1) {
this.strNxt[this.numStrings]=-1;
this.strLen[this.numStrings]=1;
} else {
this.strNxt[this.numStrings]=index;
this.strLen[this.numStrings]=this.strLen[index] + 1;
}return ($s$[0]=this.numStrings,this.numStrings=(++$s$[0],$s$[0]),--$s$[0],$s$[0]);
});

Clazz.newMeth(C$, 'findCharString$H$B',  function (index, b) {
var hshidx;
var nxtidx;
if (index == -1) {
return ($s$[0] = (b & 255), $s$[0]);
}hshidx=C$.hash$H$B(index, b);
while ((nxtidx=this.strHsh[hshidx]) != -1){
if (this.strNxt[nxtidx] == index && this.strChr[nxtidx] == b ) {
return ($s$[0] = nxtidx, $s$[0]);
}hshidx=(hshidx + 2039) % 9973;
}
return -1;
});

Clazz.newMeth(C$, 'clearTable$I',  function (codesize) {
this.numStrings=($s$[0] = 0, $s$[0]);
for (var q=0; q < 9973; q++) {
this.strHsh[q]=-1;
}
var w=(1 << codesize) + 2;
for (var q=0; q < w; q++) {
this.addCharString$H$B(-1, ($b$[0] = q, $b$[0]));
}
});

Clazz.newMeth(C$, 'hash$H$B',  function (index, lastbyte) {
return ((($s$[0] = (lastbyte << 8), $s$[0]) ^ index) & 65535) % 9973;
}, 1);

Clazz.newMeth(C$, 'expandCode$BA$I$H$I',  function (buf, offset, code, skipHead) {
if (offset == -2) {
if (skipHead == 1) {
skipHead=0;
}}if (code == -1 || skipHead == this.strLen[code] ) {
return 0;
}var expandLen;
var codeLen=this.strLen[code] - skipHead;
var bufSpace=buf.length - offset;
if (bufSpace > codeLen) {
expandLen=codeLen;
} else {
expandLen=bufSpace;
}var skipTail=codeLen - expandLen;
var idx=offset + expandLen;
while ((idx > offset) && (code != -1) ){
if (--skipTail < 0) {
buf[--idx]=this.strChr[code];
}code=this.strNxt[code];
}
if (codeLen > expandLen) {
return -expandLen;
} else {
return expandLen;
}});

Clazz.newMeth(C$, 'dump$java_io_PrintStream',  function (out) {
var i;
for (i=258; i < this.numStrings; ++i) {
out.println$S(" strNxt[" + i + "] = " + this.strNxt[i] + " strChr " + Integer.toHexString$I(this.strChr[i] & 255) + " strLen " + Integer.toHexString$I(this.strLen[i]) );
}
});
var $s$ = new Int16Array(1);
var $b$ = new Int8Array(1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:52 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
