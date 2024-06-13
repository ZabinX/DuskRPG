(function(){var P$=Clazz.newPackage("sun.misc"),I$=[[0,'sun.misc.CEStreamExhausted']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BASE64Decoder", null, 'sun.misc.CharacterDecoder');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.decode_buffer=Clazz.array(Byte.TYPE, [4]);
},1);

C$.$fields$=[['O',['+decode_buffer']]
,['O',['pem_array','char[]','pem_convert_array','byte[]']]]

Clazz.newMeth(C$, 'bytesPerAtom$',  function () {
return (4);
});

Clazz.newMeth(C$, 'bytesPerLine$',  function () {
return (72);
});

Clazz.newMeth(C$, 'decodeAtom$java_io_PushbackInputStream$java_io_OutputStream$I',  function (inStream, outStream, rem) {
var i;
var a=($b$[0] = -1, $b$[0]);
var b=($b$[0] = -1, $b$[0]);
var c=($b$[0] = -1, $b$[0]);
var d=($b$[0] = -1, $b$[0]);
if (rem < 2) {
throw Clazz.new_(Clazz.load('sun.misc.CEFormatException').c$$S,["BASE64Decoder: Not enough bytes for an atom."]);
}do {
i=inStream.read$();
if (i == -1) {
throw Clazz.new_($I$(1,1));
}} while (i == 10  || i == 13  );
this.decode_buffer[0]=(i|0);
i=this.readFully$java_io_InputStream$BA$I$I(inStream, this.decode_buffer, 1, rem - 1);
if (i == -1) {
throw Clazz.new_($I$(1,1));
}if (rem > 3 && this.decode_buffer[3] == 61  ) {
rem=3;
}if (rem > 2 && this.decode_buffer[2] == 61  ) {
rem=2;
}switch (rem) {
case 4:
d=C$.pem_convert_array[this.decode_buffer[3] & 255];
case 3:
c=C$.pem_convert_array[this.decode_buffer[2] & 255];
case 2:
b=C$.pem_convert_array[this.decode_buffer[1] & 255];
a=C$.pem_convert_array[this.decode_buffer[0] & 255];
break;
}
switch (rem) {
case 2:
outStream.write$I(($b$[0] = (((a << 2) & 252) | ((b >>> 4) & 3)), $b$[0]));
break;
case 3:
outStream.write$I(($b$[0] = (((a << 2) & 252) | ((b >>> 4) & 3)), $b$[0]));
outStream.write$I(($b$[0] = (((b << 4) & 240) | ((c >>> 2) & 15)), $b$[0]));
break;
case 4:
outStream.write$I(($b$[0] = (((a << 2) & 252) | ((b >>> 4) & 3)), $b$[0]));
outStream.write$I(($b$[0] = (((b << 4) & 240) | ((c >>> 2) & 15)), $b$[0]));
outStream.write$I(($b$[0] = (((c << 6) & 192) | (d & 63)), $b$[0]));
break;
}
return;
});

C$.$static$=function(){C$.$static$=0;
C$.pem_array=Clazz.array(Character.TYPE, -1, ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/"]);
C$.pem_convert_array=Clazz.array(Byte.TYPE, [256]);
{
for (var i=0; i < 255; i++) {
C$.pem_convert_array[i]=(-1|0);
}
for (var i=0; i < C$.pem_array.length; i++) {
C$.pem_convert_array[(C$.pem_array[i]).$c()]=(i|0);
}
};
};
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:45 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
