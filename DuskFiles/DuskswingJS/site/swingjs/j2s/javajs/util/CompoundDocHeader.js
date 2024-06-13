(function(){var P$=Clazz.newPackage("javajs.util"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "CompoundDocHeader");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.magicNumbers=Clazz.array(Byte.TYPE, [8]);
this.uniqueID16=Clazz.array(Byte.TYPE, [16]);
this.unused=Clazz.array(Byte.TYPE, [10]);
this.MSAT0=Clazz.array(Integer.TYPE, [109]);
},1);

C$.$fields$=[['B',['revNumber','verNumber'],'I',['nSATsectors','SID_DIR_start','minBytesStandardStream','SID_SSAT_start','nSSATsectors','SID_MSAT_next','nAdditionalMATsectors'],'H',['sectorPower','shortSectorPower'],'O',['cd','javajs.util.CompoundDocument','magicNumbers','byte[]','+uniqueID16','+unused','MSAT0','int[]']]]

Clazz.newMeth(C$, 'c$$javajs_util_CompoundDocument',  function (compoundDocument) {
;C$.$init$.apply(this);
this.cd=compoundDocument;
}, 1);

Clazz.newMeth(C$, 'readData$',  function () {
try {
this.cd.readByteArray$BA$I$I(this.magicNumbers, 0, 8);
if ((this.magicNumbers[0] & 255) != 208 || (this.magicNumbers[1] & 255) != 207  || (this.magicNumbers[2] & 255) != 17  || (this.magicNumbers[3] & 255) != 224  || (this.magicNumbers[4] & 255) != 161  || (this.magicNumbers[5] & 255) != 177  || (this.magicNumbers[6] & 255) != 26  || (this.magicNumbers[7] & 255) != 225 ) return false;
this.cd.readByteArray$BA$I$I(this.uniqueID16, 0, 16);
this.revNumber=this.cd.readByte$();
this.cd.readByte$();
this.verNumber=this.cd.readByte$();
this.cd.readByte$();
var b1=this.cd.readByte$();
var b2=this.cd.readByte$();
this.cd.isBigEndian=(b1 == -1 && b2 == -2 );
this.sectorPower=this.cd.readShort$();
this.shortSectorPower=this.cd.readShort$();
this.cd.readByteArray$BA$I$I(this.unused, 0, 10);
this.nSATsectors=this.cd.readInt$();
this.SID_DIR_start=this.cd.readInt$();
this.cd.readByteArray$BA$I$I(this.unused, 0, 4);
this.minBytesStandardStream=this.cd.readInt$();
this.SID_SSAT_start=this.cd.readInt$();
this.nSSATsectors=this.cd.readInt$();
this.SID_MSAT_next=this.cd.readInt$();
this.nAdditionalMATsectors=this.cd.readInt$();
for (var i=0; i < 109; i++) this.MSAT0[i]=this.cd.readInt$();

} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S(e.toString());
return false;
} else {
throw e;
}
}
return true;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:46 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
