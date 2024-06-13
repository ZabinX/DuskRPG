(function(){var P$=Clazz.newPackage("java.util.prefs"),I$=[[0,'StringBuffer','java.util.Random','java.util.Arrays']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Base64");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['intToBase64','char[]','+intToAltBase64','base64ToInt','byte[]','+altBase64ToInt']]]

Clazz.newMeth(C$, 'byteArrayToBase64$BA',  function (a) {
return C$.byteArrayToBase64$BA$Z(a, false);
}, 1);

Clazz.newMeth(C$, 'byteArrayToAltBase64$BA',  function (a) {
return C$.byteArrayToBase64$BA$Z(a, true);
}, 1);

Clazz.newMeth(C$, 'byteArrayToBase64$BA$Z',  function (a, alternate) {
var aLen=a.length;
var numFullGroups=(aLen/3|0);
var numBytesInPartialGroup=aLen - 3 * numFullGroups;
var resultLen=4 * (((aLen + 2)/3|0));
var result=Clazz.new_($I$(1,1).c$$I,[resultLen]);
var intToAlpha=(alternate ? C$.intToAltBase64 : C$.intToBase64);
var inCursor=0;
for (var i=0; i < numFullGroups; i++) {
var byte0=a[inCursor++] & 255;
var byte1=a[inCursor++] & 255;
var byte2=a[inCursor++] & 255;
result.append$C(intToAlpha[byte0 >> 2]);
result.append$C(intToAlpha[(byte0 << 4) & 63 | (byte1 >> 4)]);
result.append$C(intToAlpha[(byte1 << 2) & 63 | (byte2 >> 6)]);
result.append$C(intToAlpha[byte2 & 63]);
}
if (numBytesInPartialGroup != 0) {
var byte0=a[inCursor++] & 255;
result.append$C(intToAlpha[byte0 >> 2]);
if (numBytesInPartialGroup == 1) {
result.append$C(intToAlpha[(byte0 << 4) & 63]);
result.append$S("==");
} else {
var byte1=a[inCursor++] & 255;
result.append$C(intToAlpha[(byte0 << 4) & 63 | (byte1 >> 4)]);
result.append$C(intToAlpha[(byte1 << 2) & 63]);
result.append$C("=");
}}return result.toString();
}, 1);

Clazz.newMeth(C$, 'base64ToByteArray$S',  function (s) {
return C$.base64ToByteArray$S$Z(s, false);
}, 1);

Clazz.newMeth(C$, 'altBase64ToByteArray$S',  function (s) {
return C$.base64ToByteArray$S$Z(s, true);
}, 1);

Clazz.newMeth(C$, 'base64ToByteArray$S$Z',  function (s, alternate) {
var alphaToInt=(alternate ? C$.altBase64ToInt : C$.base64ToInt);
var sLen=s.length$();
var numGroups=(sLen/4|0);
if (4 * numGroups != sLen) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["String length must be a multiple of four."]);
var missingBytesInLastGroup=0;
var numFullGroups=numGroups;
if (sLen != 0) {
if (s.charAt$I(sLen - 1) == "=") {
++missingBytesInLastGroup;
--numFullGroups;
}if (s.charAt$I(sLen - 2) == "=") ++missingBytesInLastGroup;
}var result=Clazz.array(Byte.TYPE, [3 * numGroups - missingBytesInLastGroup]);
var inCursor=0;
var outCursor=0;
for (var i=0; i < numFullGroups; i++) {
var ch0=C$.base64toInt$C$BA(s.charAt$I(inCursor++), alphaToInt);
var ch1=C$.base64toInt$C$BA(s.charAt$I(inCursor++), alphaToInt);
var ch2=C$.base64toInt$C$BA(s.charAt$I(inCursor++), alphaToInt);
var ch3=C$.base64toInt$C$BA(s.charAt$I(inCursor++), alphaToInt);
result[outCursor++]=(((ch0 << 2) | (ch1 >> 4))|0);
result[outCursor++]=(((ch1 << 4) | (ch2 >> 2))|0);
result[outCursor++]=(((ch2 << 6) | ch3)|0);
}
if (missingBytesInLastGroup != 0) {
var ch0=C$.base64toInt$C$BA(s.charAt$I(inCursor++), alphaToInt);
var ch1=C$.base64toInt$C$BA(s.charAt$I(inCursor++), alphaToInt);
result[outCursor++]=(((ch0 << 2) | (ch1 >> 4))|0);
if (missingBytesInLastGroup == 1) {
var ch2=C$.base64toInt$C$BA(s.charAt$I(inCursor++), alphaToInt);
result[outCursor++]=(((ch1 << 4) | (ch2 >> 2))|0);
}}return result;
}, 1);

Clazz.newMeth(C$, 'base64toInt$C$BA',  function (c, alphaToInt) {
var result=alphaToInt[c.$c()];
if (result < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal character " + c]);
return result;
}, 1);

Clazz.newMeth(C$, 'main$SA',  function (args) {
var numRuns=Integer.parseInt$S(args[0]);
var numBytes=Integer.parseInt$S(args[1]);
var rnd=Clazz.new_($I$(2,1));
for (var i=0; i < numRuns; i++) {
for (var j=0; j < numBytes; j++) {
var arr=Clazz.array(Byte.TYPE, [j]);
for (var k=0; k < j; k++) arr[k]=(rnd.nextInt$()|0);

var s=C$.byteArrayToBase64$BA(arr);
var b=C$.base64ToByteArray$S(s);
if (!$I$(3).equals$BA$BA(arr, b)) System.out.println$S("Dismal failure!");
s=C$.byteArrayToAltBase64$BA(arr);
b=C$.altBase64ToByteArray$S(s);
if (!$I$(3).equals$BA$BA(arr, b)) System.out.println$S("Alternate dismal failure!");
}
}
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.intToBase64=Clazz.array(Character.TYPE, -1, ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/"]);
C$.intToAltBase64=Clazz.array(Character.TYPE, -1, ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", ",", "-", ".", ":", ";", "<", ">", "@", "[", "]", "^", "`", "_", "{", "|", "}", "~", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "?"]);
C$.base64ToInt=Clazz.array(Byte.TYPE, -1, [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51]);
C$.altBase64ToInt=Clazz.array(Byte.TYPE, -1, [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, -1, 62, 9, 10, 11, -1, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 12, 13, 14, -1, 15, 63, 16, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 17, -1, 18, 19, 21, 20, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 22, 23, 24, 25]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:40 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
