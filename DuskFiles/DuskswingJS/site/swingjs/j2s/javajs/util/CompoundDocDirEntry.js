(function(){var P$=Clazz.newPackage("javajs.util"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "CompoundDocDirEntry");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.unicodeName64=Clazz.array(Byte.TYPE, [64]);
this.uniqueID16=Clazz.array(Byte.TYPE, [16]);
this.userflags4=Clazz.array(Byte.TYPE, [4]);
this.unused=Clazz.array(Byte.TYPE, [8]);
},1);

C$.$fields$=[['Z',['isStandard','isEmpty'],'B',['entryType'],'I',['SIDfirstSector','lenStream'],'H',['nBytesUnicodeName'],'S',['entryName'],'O',['cd','javajs.util.CompoundDocument','unicodeName64','byte[]','+uniqueID16','+userflags4','+unused']]]

Clazz.newMeth(C$, 'c$$javajs_util_CompoundDocument',  function (compoundDocument) {
;C$.$init$.apply(this);
this.cd=compoundDocument;
}, 1);

Clazz.newMeth(C$, 'readData$',  function () {
try {
this.cd.readByteArray$BA$I$I(this.unicodeName64, 0, 64);
this.nBytesUnicodeName=this.cd.readShort$();
this.entryType=this.cd.readByte$();
this.cd.readByte$();
this.cd.readInt$();
this.cd.readInt$();
this.cd.readInt$();
this.cd.readByteArray$BA$I$I(this.uniqueID16, 0, 16);
this.cd.readByteArray$BA$I$I(this.userflags4, 0, 4);
this.cd.readByteArray$BA$I$I(this.unused, 0, 8);
this.cd.readByteArray$BA$I$I(this.unused, 0, 8);
this.SIDfirstSector=this.cd.readInt$();
this.lenStream=this.cd.readInt$();
this.cd.readByteArray$BA$I$I(this.unused, 0, 4);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S(e.toString());
return false;
} else {
throw e;
}
}
this.entryName="";
for (var i=0; i < this.nBytesUnicodeName - 2; i+=2) this.entryName+=String.fromCharCode(this.unicodeName64[i]);

this.isStandard=(this.entryType == 5 || this.lenStream >= this.cd.header.minBytesStandardStream );
this.isEmpty=(this.entryType == 0 || this.lenStream <= 0 );
return true;
});

Clazz.newMeth(C$, 'toString',  function () {
return this.entryName + " " + this.lenStream ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:46 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
