(function(){var P$=Clazz.newPackage("sun.text.normalizer"),I$=[[0,'java.io.DataInputStream','java.util.Arrays']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ICUBinary", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Authenticate',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'readHeader$java_io_InputStream$BA$sun_text_normalizer_ICUBinary_Authenticate',  function (inputStream, dataFormatIDExpected, authenticate) {
var input=Clazz.new_($I$(1,1).c$$java_io_InputStream,[inputStream]);
var headersize=input.readChar$();
var readcount=2;
var magic1=input.readByte$();
++readcount;
var magic2=input.readByte$();
++readcount;
if (magic1 != -38 || magic2 != 39 ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["ICU data file error: Not an ICU data file"]);
}input.readChar$();
readcount+=2;
input.readChar$();
readcount+=2;
var bigendian=input.readByte$();
++readcount;
var charset=input.readByte$();
++readcount;
var charsize=input.readByte$();
++readcount;
input.readByte$();
++readcount;
var dataFormatID=Clazz.array(Byte.TYPE, [4]);
input.readFully$BA(dataFormatID);
readcount+=4;
var dataVersion=Clazz.array(Byte.TYPE, [4]);
input.readFully$BA(dataVersion);
readcount+=4;
var unicodeVersion=Clazz.array(Byte.TYPE, [4]);
input.readFully$BA(unicodeVersion);
readcount+=4;
if (headersize.$c() < readcount ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Internal Error: Header size error"]);
}input.skipBytes$I(headersize.$c() - readcount);
if (bigendian != 1 || charset != 0  || charsize != 2  || !$I$(2).equals$BA$BA(dataFormatIDExpected, dataFormatID)  || (authenticate != null  && !authenticate.isDataVersionAcceptable$BA(dataVersion) ) ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["ICU data file error: Header authentication failed, please check if you have a valid ICU data file"]);
}return unicodeVersion;
}, 1);
;
(function(){/*i*/var C$=Clazz.newInterface(P$.ICUBinary, "Authenticate", function(){
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:50 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
