(function(){var P$=Clazz.newPackage("javajs.util"),p$1={},I$=[[0,'javajs.util.CompoundDocHeader','javajs.util.Lst','java.io.DataInputStream','javajs.util.SB','javajs.util.CompoundDocDirEntry','javajs.util.ZipData']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CompoundDocument", null, 'javajs.util.BinaryDocument');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.header=Clazz.new_($I$(1,1).c$$javajs_util_CompoundDocument,[this]);
this.directory=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['I',['sectorSize','shortSectorSize','nShortSectorsPerStandardSector','nIntPerSector','nDirEntriesperSector'],'O',['header','javajs.util.CompoundDocHeader','directory','javajs.util.Lst','rootEntry','javajs.util.CompoundDocDirEntry','SAT','int[]','+SSAT']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.isBigEndian=true;
}, 1);

Clazz.newMeth(C$, 'setDocStream$java_io_BufferedInputStream',  function (bis) {
if (!this.isRandom) {
this.stream=Clazz.new_($I$(3,1).c$$java_io_InputStream,[bis]);
}this.stream.mark$I(2147483647);
if (!p$1.readHeader.apply(this, [])) return;
p$1.getSectorAllocationTable.apply(this, []);
p$1.getShortSectorAllocationTable.apply(this, []);
p$1.getDirectoryTable.apply(this, []);
});

Clazz.newMeth(C$, 'getDirectory$',  function () {
return this.directory;
});

Clazz.newMeth(C$, 'getDirectoryListing$S',  function (separator) {
var sb=Clazz.new_($I$(4,1));
for (var i=0; i < this.directory.size$(); i++) {
var thisEntry=this.directory.get$I(i);
if (!thisEntry.isEmpty) sb.append$S(separator).append$S(thisEntry.entryName).append$S("\tlen=").appendI$I(thisEntry.lenStream).append$S("\tSID=").appendI$I(thisEntry.SIDfirstSector).append$S(thisEntry.isStandard ? "\tfileOffset=" + Long.$s(p$1.getOffset$I.apply(this, [thisEntry.SIDfirstSector])) : "");
}
return sb.toString();
});

Clazz.newMeth(C$, 'getAllData$',  function () {
return this.getAllDataFiles$S$S(null, null);
});

Clazz.newMeth(C$, 'getAllDataMapped$S$S$java_util_Map',  function (prefix, binaryFileList, fileData) {
fileData.put$O$O("#Directory_Listing", this.getDirectoryListing$S("|"));
binaryFileList="|" + binaryFileList + "|" ;
for (var i=0; i < this.directory.size$(); i++) {
var thisEntry=this.directory.get$I(i);
if (!thisEntry.isEmpty && thisEntry.entryType != 5 ) {
var name=thisEntry.entryName;
System.out.println$S("CompoundDocument file " + name);
var isBinary=(binaryFileList.indexOf$S("|" + name + "|" ) >= 0);
if (isBinary) name+=":asBinaryString";
fileData.put$O$O(prefix + "/" + name , p$1.appendData$javajs_util_SB$S$javajs_util_CompoundDocDirEntry$Z.apply(this, [Clazz.new_($I$(4,1)), name, thisEntry, isBinary]).toString());
}}
this.close$();
});

Clazz.newMeth(C$, 'getAllDataFiles$S$S',  function (binaryFileList, firstFile) {
var data=Clazz.new_($I$(4,1));
data.append$S("Compound Document File Directory: ");
data.append$S(this.getDirectoryListing$S("|"));
data.append$S("\n");
var thisEntry;
binaryFileList="|" + binaryFileList + "|" ;
for (var i=0, n=this.directory.size$(); i < n; i++) {
thisEntry=this.directory.get$I(i);
var name=thisEntry.entryName;
switch (thisEntry.entryType) {
case 5:
break;
case 1:
data.append$S("NEW Directory ").append$S(name).append$S("\n");
break;
case 2:
if (name.endsWith$S(".gz")) name=name.substring$I$I(0, name.length$() - 3);
p$1.appendData$javajs_util_SB$S$javajs_util_CompoundDocDirEntry$Z.apply(this, [data, name, thisEntry, binaryFileList.indexOf$S("|" + thisEntry.entryName + "|" ) >= 0]);
break;
}
}
this.close$();
return data;
});

Clazz.newMeth(C$, 'appendData$javajs_util_SB$S$javajs_util_CompoundDocDirEntry$Z',  function (data, name, thisEntry, isBinary) {
data.append$S("BEGIN Directory Entry ").append$S(name).append$S("\n");
data.appendSB$javajs_util_SB(p$1.getEntryAsString$javajs_util_CompoundDocDirEntry$Z.apply(this, [thisEntry, isBinary]));
data.append$S("\nEND Directory Entry ").append$S(name).append$S("\n");
return data;
}, p$1);

Clazz.newMeth(C$, 'getFileAsString$S',  function (entryName) {
for (var i=0; i < this.directory.size$(); i++) {
var thisEntry=this.directory.get$I(i);
if (thisEntry.entryName.equals$O(entryName)) return p$1.getEntryAsString$javajs_util_CompoundDocDirEntry$Z.apply(this, [thisEntry, false]);
}
return Clazz.new_($I$(4,1));
});

Clazz.newMeth(C$, 'getOffset$I',  function (SID) {
return (SID + 1) * this.sectorSize;
}, p$1);

Clazz.newMeth(C$, 'gotoSector$I',  function (SID) {
this.seek$J(p$1.getOffset$I.apply(this, [SID]));
}, p$1);

Clazz.newMeth(C$, 'readHeader',  function () {
if (!this.header.readData$()) return false;
this.sectorSize=1 << this.header.sectorPower;
this.shortSectorSize=1 << this.header.shortSectorPower;
this.nShortSectorsPerStandardSector=(this.sectorSize/this.shortSectorSize|0);
this.nIntPerSector=(this.sectorSize/4|0);
this.nDirEntriesperSector=(this.sectorSize/128|0);
return true;
}, p$1);

Clazz.newMeth(C$, 'getSectorAllocationTable',  function () {
var nSID=0;
var thisSID;
this.SAT=Clazz.array(Integer.TYPE, [this.header.nSATsectors * this.nIntPerSector + 109]);
try {
for (var i=0; i < 109; i++) {
thisSID=this.header.MSAT0[i];
if (thisSID < 0) break;
p$1.gotoSector$I.apply(this, [thisSID]);
for (var j=0; j < this.nIntPerSector; j++) {
this.SAT[nSID++]=this.readInt$();
}
}
var nMaster=this.header.nAdditionalMATsectors;
thisSID=this.header.SID_MSAT_next;
var MSAT=Clazz.array(Integer.TYPE, [this.nIntPerSector]);
 out : while (nMaster-- > 0 && thisSID >= 0 ){
p$1.gotoSector$I.apply(this, [thisSID]);
for (var i=0; i < this.nIntPerSector; i++) MSAT[i]=this.readInt$();

for (var i=0; i < this.nIntPerSector - 1; i++) {
thisSID=MSAT[i];
if (thisSID < 0) break out;
p$1.gotoSector$I.apply(this, [thisSID]);
for (var j=this.nIntPerSector; --j >= 0; ) this.SAT[nSID++]=this.readInt$();

}
thisSID=MSAT[this.nIntPerSector - 1];
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S(e.toString());
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'getShortSectorAllocationTable',  function () {
var nSSID=0;
var thisSID=this.header.SID_SSAT_start;
var nMax=this.header.nSSATsectors * this.nIntPerSector;
this.SSAT=Clazz.array(Integer.TYPE, [nMax]);
try {
while (thisSID > 0 && nSSID < nMax ){
p$1.gotoSector$I.apply(this, [thisSID]);
for (var j=0; j < this.nIntPerSector; j++) {
this.SSAT[nSSID++]=this.readInt$();
}
thisSID=this.SAT[thisSID];
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S(e.toString());
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'getDirectoryTable',  function () {
var thisSID=this.header.SID_DIR_start;
var thisEntry;
this.rootEntry=null;
try {
while (thisSID > 0){
p$1.gotoSector$I.apply(this, [thisSID]);
for (var j=this.nDirEntriesperSector; --j >= 0; ) {
thisEntry=Clazz.new_($I$(5,1).c$$javajs_util_CompoundDocument,[this]);
thisEntry.readData$();
this.directory.addLast$O(thisEntry);
if (thisEntry.entryType == 5) this.rootEntry=thisEntry;
}
thisSID=this.SAT[thisSID];
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S(e.toString());
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'getEntryAsString$javajs_util_CompoundDocDirEntry$Z',  function (thisEntry, asBinaryString) {
if (thisEntry.isEmpty) return Clazz.new_($I$(4,1));
return (thisEntry.isStandard ? p$1.getStandardStringData$I$I$Z.apply(this, [thisEntry.SIDfirstSector, thisEntry.lenStream, asBinaryString]) : p$1.getShortStringData$I$I$Z.apply(this, [thisEntry.SIDfirstSector, thisEntry.lenStream, asBinaryString]));
}, p$1);

Clazz.newMeth(C$, 'getStandardStringData$I$I$Z',  function (thisSID, nBytes, asBinaryString) {
var data=Clazz.new_($I$(4,1));
var byteBuf=Clazz.array(Byte.TYPE, [this.sectorSize]);
var gzipData=Clazz.new_($I$(6,1).c$$I,[nBytes]);
try {
while (thisSID > 0 && nBytes > 0 ){
p$1.gotoSector$I.apply(this, [thisSID]);
nBytes=p$1.getSectorData$javajs_util_SB$BA$I$I$Z$javajs_util_ZipData.apply(this, [data, byteBuf, this.sectorSize, nBytes, asBinaryString, gzipData]);
thisSID=this.SAT[thisSID];
}
if (nBytes == -9999) return Clazz.new_($I$(4,1));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S(e.toString());
} else {
throw e;
}
}
if (gzipData.isEnabled) gzipData.addTo$javajs_util_SB(data);
return data;
}, p$1);

Clazz.newMeth(C$, 'getSectorData$javajs_util_SB$BA$I$I$Z$javajs_util_ZipData',  function (data, byteBuf, nSectorBytes, nBytes, asBinaryString, gzipData) {
this.readByteArray$BA$I$I(byteBuf, 0, byteBuf.length);
var n=gzipData.addBytes$BA$I$I(byteBuf, nSectorBytes, nBytes);
if (n >= 0) return n;
if (asBinaryString) {
for (var i=0; i < nSectorBytes; i++) {
data.append$S(Integer.toHexString$I(byteBuf[i] & 255)).appendC$C(" ");
if (--nBytes < 1) break;
}
} else {
for (var i=0; i < nSectorBytes; i++) {
if (byteBuf[i] == 0) return -9999;
data.appendC$C(String.fromCharCode(byteBuf[i]));
if (--nBytes < 1) break;
}
}return nBytes;
}, p$1);

Clazz.newMeth(C$, 'getShortStringData$I$I$Z',  function (shortSID, nBytes, asBinaryString) {
var data=Clazz.new_($I$(4,1));
if (this.rootEntry == null ) return data;
var thisSID=this.rootEntry.SIDfirstSector;
var ptShort=0;
var byteBuf=Clazz.array(Byte.TYPE, [this.shortSectorSize]);
var gzipData=Clazz.new_($I$(6,1).c$$I,[nBytes]);
try {
while (thisSID >= 0 && shortSID >= 0  && nBytes > 0 ){
while (shortSID - ptShort >= this.nShortSectorsPerStandardSector){
ptShort+=this.nShortSectorsPerStandardSector;
thisSID=this.SAT[thisSID];
}
this.seek$J(Long.$add(p$1.getOffset$I.apply(this, [thisSID]),(shortSID - ptShort) * this.shortSectorSize));
nBytes=p$1.getSectorData$javajs_util_SB$BA$I$I$Z$javajs_util_ZipData.apply(this, [data, byteBuf, this.shortSectorSize, nBytes, asBinaryString, gzipData]);
shortSID=this.SSAT[shortSID];
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S(data.toString());
System.out.println$S("reader error in CompoundDocument " + e.toString());
} else {
throw e;
}
}
if (gzipData.isEnabled) gzipData.addTo$javajs_util_SB(data);
return data;
}, p$1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:46 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
