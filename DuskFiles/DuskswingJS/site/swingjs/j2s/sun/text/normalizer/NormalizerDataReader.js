(function(){var P$=Clazz.newPackage("sun.text.normalizer"),I$=[[0,'sun.text.normalizer.ICUBinary','java.io.DataInputStream']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "NormalizerDataReader", null, null, [['sun.text.normalizer.ICUBinary','sun.text.normalizer.ICUBinary.Authenticate']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['dataInputStream','java.io.DataInputStream','unicodeVersion','byte[]']]
,['O',['DATA_FORMAT_ID','byte[]','+DATA_FORMAT_VERSION']]]

Clazz.newMeth(C$, 'c$$java_io_InputStream',  function (inputStream) {
;C$.$init$.apply(this);
this.unicodeVersion=$I$(1).readHeader$java_io_InputStream$BA$sun_text_normalizer_ICUBinary_Authenticate(inputStream, C$.DATA_FORMAT_ID, this);
this.dataInputStream=Clazz.new_($I$(2,1).c$$java_io_InputStream,[inputStream]);
}, 1);

Clazz.newMeth(C$, 'readIndexes$I',  function (length) {
var indexes=Clazz.array(Integer.TYPE, [length]);
for (var i=0; i < length; i++) {
indexes[i]=this.dataInputStream.readInt$();
}
return indexes;
});

Clazz.newMeth(C$, 'read$BA$BA$BA$CA$CA',  function (normBytes, fcdBytes, auxBytes, extraData, combiningTable) {
this.dataInputStream.readFully$BA(normBytes);
for (var i=0; i < extraData.length; i++) {
extraData[i]=this.dataInputStream.readChar$();
}
for (var i=0; i < combiningTable.length; i++) {
combiningTable[i]=this.dataInputStream.readChar$();
}
this.dataInputStream.readFully$BA(fcdBytes);
this.dataInputStream.readFully$BA(auxBytes);
});

Clazz.newMeth(C$, 'getDataFormatVersion$',  function () {
return C$.DATA_FORMAT_VERSION;
});

Clazz.newMeth(C$, 'isDataVersionAcceptable$BA',  function (version) {
return version[0] == C$.DATA_FORMAT_VERSION[0] && version[2] == C$.DATA_FORMAT_VERSION[2]  && version[3] == C$.DATA_FORMAT_VERSION[3] ;
});

Clazz.newMeth(C$, 'getUnicodeVersion$',  function () {
return this.unicodeVersion;
});

C$.$static$=function(){C$.$static$=0;
C$.DATA_FORMAT_ID=Clazz.array(Byte.TYPE, -1, [78, 111, 114, 109]);
C$.DATA_FORMAT_VERSION=Clazz.array(Byte.TYPE, -1, [2, 2, 5, 2]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:50 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
