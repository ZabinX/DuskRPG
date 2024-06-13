(function(){var P$=Clazz.newPackage("javajs.util"),p$1={},I$=[[0,'javajs.util.BinaryDocument','javajs.util.BC','java.util.Hashtable','javajs.util.SB']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MessagePackReader");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isHomo'],'O',['doc','javajs.api.GenericBinaryDocumentReader']]]

Clazz.newMeth(C$, 'c$$javajs_api_GenericBinaryDocumentReader$Z',  function (binaryDoc, isHomogeneousArrays) {
;C$.$init$.apply(this);
this.isHomo=isHomogeneousArrays;
this.doc=binaryDoc;
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getMapForStream$java_io_BufferedInputStream',  function (is) {
this.doc=Clazz.new_($I$(1,1)).setStream$java_io_BufferedInputStream$Z(is, true);
var map=this.readMap$();
is.close$();
return map;
});

Clazz.newMeth(C$, 'readMap$',  function () {
return this.getNext$O$I(null, 0);
});

Clazz.newMeth(C$, 'getNext$O$I',  function (array, pt) {
var b=this.doc.readByte$() & 255;
var be0=b & 224;
if ((b & 128) == 0) {
if (array != null ) {
(array)[pt]=b;
return null;
}return Integer.valueOf$I(b);
}switch (be0) {
case 224:
b=$I$(2).intToSignedInt$I(b | -256);
if (array != null ) {
(array)[pt]=b;
return null;
}return Integer.valueOf$I(b);
case 160:
{
var s=this.doc.readString$I(b & 31);
if (array != null ) {
(array)[pt]=s;
return null;
}return s;
}case 128:
return ((b & 240) == 128 ? p$1.getMap$I.apply(this, [b & 15]) : p$1.getArray$I.apply(this, [b & 15]));
case 192:
switch (b) {
case 192:
return null;
case 194:
return Boolean.FALSE;
case 195:
return Boolean.TRUE;
case 199:
return p$1.getObject$I.apply(this, [this.doc.readUInt8$()]);
case 200:
return p$1.getObject$I.apply(this, [this.doc.readUnsignedShort$()]);
case 201:
return p$1.getObject$I.apply(this, [this.doc.readInt$()]);
case 212:
return p$1.getObject$I.apply(this, [1]);
case 213:
return p$1.getObject$I.apply(this, [2]);
case 214:
return p$1.getObject$I.apply(this, [4]);
case 215:
return p$1.getObject$I.apply(this, [8]);
case 216:
return p$1.getObject$I.apply(this, [16]);
case 220:
return p$1.getArray$I.apply(this, [this.doc.readUnsignedShort$()]);
case 221:
return p$1.getArray$I.apply(this, [this.doc.readInt$()]);
case 222:
return p$1.getMap$I.apply(this, [this.doc.readUnsignedShort$()]);
case 223:
return p$1.getMap$I.apply(this, [this.doc.readInt$()]);
case 196:
return this.doc.readBytes$I(this.doc.readUInt8$());
case 197:
return this.doc.readBytes$I(this.doc.readUnsignedShort$());
case 198:
return this.doc.readBytes$I(this.doc.readInt$());
}
if (array == null ) {
switch (b) {
case 202:
return Double.valueOf$D(this.doc.readFloat$());
case 203:
return Double.valueOf$D(this.doc.readDouble$());
case 204:
return Integer.valueOf$I(this.doc.readUInt8$());
case 205:
return Integer.valueOf$I(this.doc.readUnsignedShort$());
case 206:
return Integer.valueOf$I(this.doc.readInt$());
case 207:
return Long.valueOf$J(this.doc.readLong$());
case 208:
return Integer.valueOf$I(this.doc.readByte$());
case 209:
return Integer.valueOf$I(this.doc.readShort$());
case 210:
return Integer.valueOf$I(this.doc.readInt$());
case 211:
return Long.valueOf$J(this.doc.readLong$());
case 217:
return this.doc.readString$I(this.doc.readUInt8$());
case 218:
return this.doc.readString$I(this.doc.readUnsignedShort$());
case 219:
return this.doc.readString$I(this.doc.readInt$());
}
} else {
switch (b) {
case 202:
(array)[pt]=this.doc.readFloat$();
break;
case 203:
(array)[pt]=this.doc.readDouble$();
break;
case 204:
(array)[pt]=this.doc.readUInt8$();
break;
case 205:
(array)[pt]=this.doc.readUnsignedShort$();
break;
case 206:
(array)[pt]=this.doc.readInt$();
break;
case 207:
(array)[pt]=Long.$ival(this.doc.readLong$());
break;
case 208:
(array)[pt]=this.doc.readByte$();
break;
case 209:
(array)[pt]=this.doc.readShort$();
break;
case 210:
(array)[pt]=this.doc.readInt$();
break;
case 211:
(array)[pt]=Long.$ival(this.doc.readLong$());
break;
case 217:
(array)[pt]=this.doc.readString$I(this.doc.readUInt8$());
break;
case 218:
(array)[pt]=this.doc.readString$I(this.doc.readUnsignedShort$());
break;
case 219:
(array)[pt]=this.doc.readString$I(this.doc.readInt$());
break;
}
}}
return null;
});

Clazz.newMeth(C$, 'getObject$I',  function (n) {
return Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(this.doc.readUInt8$()), this.doc.readBytes$I(n)]);
}, p$1);

Clazz.newMeth(C$, 'getArray$I',  function (n) {
if (this.isHomo) {
if (n == 0) return null;
var v=this.getNext$O$I(null, 0);
if (Clazz.instanceOf(v, "java.lang.Integer")) {
var a=Clazz.array(Integer.TYPE, [n]);
a[0]=(v).intValue$();
v=a;
} else if (Clazz.instanceOf(v, "java.lang.Number")) {
var a=Clazz.array(Double.TYPE, [n]);
a[0]=(v).doubleValue$();
v=a;
} else if (Clazz.instanceOf(v, "java.lang.String")) {
var a=Clazz.array(String, [n]);
a[0]=v;
v=a;
} else {
var o=Clazz.array(java.lang.Object, [n]);
o[0]=v;
for (var i=1; i < n; i++) o[i]=this.getNext$O$I(null, 0);

return o;
}for (var i=1; i < n; i++) this.getNext$O$I(v, i);

return v;
}var o=Clazz.array(java.lang.Object, [n]);
for (var i=0; i < n; i++) o[i]=this.getNext$O$I(null, 0);

return o;
}, p$1);

Clazz.newMeth(C$, 'getMap$I',  function (n) {
var map=Clazz.new_($I$(3,1));
for (var i=0; i < n; i++) {
var key=this.getNext$O$I(null, 0).toString();
var value=this.getNext$O$I(null, 0);
if (value == null ) {
} else {
map.put$O$O(key, value);
}}
return map;
}, p$1);

Clazz.newMeth(C$, 'decode$BA',  function (b) {
var type=$I$(2).bytesToInt$BA$I$Z(b, 0, true);
var n=$I$(2).bytesToInt$BA$I$Z(b, 4, true);
var param=$I$(2).bytesToInt$BA$I$Z(b, 8, true);
switch (type) {
case 1:
return C$.getFloats$BA$I$F(b, n, 1);
case 2:
case 3:
case 4:
return C$.getInts$BA$I(b, n);
case 5:
return C$.rldecode32ToStr$BA(b);
case 6:
return C$.rldecode32ToChar$BA$I(b, n);
case 7:
return C$.rldecode32$BA$I(b, n);
case 8:
return C$.rldecode32Delta$BA$I(b, n);
case 9:
return C$.rldecodef$BA$I$F(b, n, param);
case 10:
return C$.unpack16Deltaf$BA$I$F(b, n, param);
case 11:
return C$.getFloats$BA$I$F(b, n, param);
case 12:
case 13:
return C$.unpackf$BA$I$I$F(b, 14 - type, n, param);
case 14:
case 15:
return C$.unpack$BA$I$I(b, 16 - type, n);
default:
System.out.println$S("MMTF type " + type + " not found!" );
return null;
}
}, 1);

Clazz.newMeth(C$, 'getFloats$BA$I$F',  function (b, n, divisor) {
if (b == null ) return null;
var a=Clazz.array(Double.TYPE, [n]);
try {
switch (((b.length - 12)/n|0)) {
case 2:
for (var i=0, j=12; i < n; i++, j+=2) a[i]=$I$(2).bytesToShort$BA$I$Z(b, j, false) / divisor;

break;
case 4:
for (var i=0, j=12; i < n; i++, j+=4) a[i]=$I$(2).bytesToFloat$BA$I$Z(b, j, false);

break;
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
return a;
}, 1);

Clazz.newMeth(C$, 'getInts$BA$I',  function (b, n) {
if (b == null ) return null;
var a=Clazz.array(Integer.TYPE, [n]);
switch (((b.length - 12)/n|0)) {
case 1:
for (var i=0, j=12; i < n; i++, j++) a[i]=b[j];

break;
case 2:
for (var i=0, j=12; i < n; i++, j+=2) a[i]=$I$(2).bytesToShort$BA$I$Z(b, j, true);

break;
case 4:
for (var i=0, j=12; i < n; i++, j+=4) a[i]=$I$(2).bytesToInt$BA$I$Z(b, j, true);

break;
}
return a;
}, 1);

Clazz.newMeth(C$, 'rldecode32ToStr$BA',  function (b) {
var id=Clazz.array(String, [((b.length - 12)/4|0)]);
 out : for (var i=0, len=id.length, pt=12; i < len; i++) {
var sb=Clazz.new_($I$(4,1));
for (var j=0; j < 4; j++) {
switch (b[pt]) {
case 0:
id[i]=sb.toString();
pt+=4 - j;
continue out;
default:
sb.appendC$C(String.fromCharCode(b[pt++]));
if (j == 3) id[i]=sb.toString();
continue;
}
}
}
return id;
}, 1);

Clazz.newMeth(C$, 'rldecode32ToChar$BA$I',  function (b, n) {
if (b == null ) return null;
var ret=Clazz.array(Character.TYPE, [n]);
for (var i=0, pt=3; i < n; ) {
var val=String.fromCharCode(b[((pt++) << 2) + 3]);
for (var j=$I$(2,"bytesToInt$BA$I$Z",[b, (pt++) << 2, true]); --j >= 0; ) ret[i++]=val;

}
return ret;
}, 1);

Clazz.newMeth(C$, 'rldecode32$BA$I',  function (b, n) {
if (b == null ) return null;
var ret=Clazz.array(Integer.TYPE, [n]);
for (var i=0, pt=3; i < n; ) {
var val=$I$(2,"bytesToInt$BA$I$Z",[b, (pt++) << 2, true]);
for (var j=$I$(2,"bytesToInt$BA$I$Z",[b, (pt++) << 2, true]); --j >= 0; ) ret[i++]=val;

}
return ret;
}, 1);

Clazz.newMeth(C$, 'rldecode32Delta$BA$I',  function (b, n) {
if (b == null ) return null;
var ret=Clazz.array(Integer.TYPE, [n]);
for (var i=0, pt=3, val=0; i < n; ) {
var diff=$I$(2,"bytesToInt$BA$I$Z",[b, (pt++) << 2, true]);
for (var j=$I$(2,"bytesToInt$BA$I$Z",[b, (pt++) << 2, true]); --j >= 0; ) ret[i++]=(val=val + diff);

}
return ret;
}, 1);

Clazz.newMeth(C$, 'rldecodef$BA$I$F',  function (b, n, divisor) {
if (b == null ) return null;
var ret=Clazz.array(Double.TYPE, [n]);
for (var i=0, pt=3; i < n; ) {
var val=$I$(2,"bytesToInt$BA$I$Z",[b, (pt++) << 2, true]);
for (var j=$I$(2,"bytesToInt$BA$I$Z",[b, (pt++) << 2, true]); --j >= 0; ) ret[i++]=val / divisor;

}
return ret;
}, 1);

Clazz.newMeth(C$, 'unpack16Deltaf$BA$I$F',  function (b, n, divisor) {
if (b == null ) return null;
var ret=Clazz.array(Double.TYPE, [n]);
for (var i=0, pt=6, val=0, buf=0; i < n; ) {
var diff=$I$(2,"bytesToShort$BA$I$Z",[b, (pt++) << 1, true]);
if (diff == 32767 || diff == -32768 ) {
buf+=diff;
} else {
ret[i++]=(val=val + diff + buf ) / divisor;
buf=0;
}}
return ret;
}, 1);

Clazz.newMeth(C$, 'unpackf$BA$I$I$F',  function (b, nBytes, n, divisor) {
if (b == null ) return null;
var ret=Clazz.array(Double.TYPE, [n]);
switch (nBytes) {
case 1:
for (var i=0, pt=12, offset=0; i < n; ) {
var val=b[pt++];
if (val == 127 || val == -128 ) {
offset+=val;
} else {
ret[i++]=(val + offset) / divisor;
offset=0;
}}
break;
case 2:
for (var i=0, pt=6, offset=0; i < n; ) {
var val=$I$(2,"bytesToShort$BA$I$Z",[b, (pt++) << 1, true]);
if (val == 32767 || val == -32768 ) {
offset+=val;
} else {
ret[i++]=(val + offset) / divisor;
offset=0;
}}
break;
}
return ret;
}, 1);

Clazz.newMeth(C$, 'unpack$BA$I$I',  function (b, nBytes, n) {
if (b == null ) return null;
var ret=Clazz.array(Integer.TYPE, [n]);
switch (nBytes) {
case 1:
for (var i=0, pt=12, offset=0; i < n; ) {
var val=b[pt++];
if (val == 127 || val == -128 ) {
offset+=val;
} else {
ret[i++]=val + offset;
offset=0;
}}
break;
case 2:
for (var i=0, pt=6, offset=0; i < n; ) {
var val=$I$(2,"bytesToShort$BA$I$Z",[b, (pt++) << 1, true]);
if (val == 32767 || val == -32768 ) {
offset+=val;
} else {
ret[i++]=val + offset;
offset=0;
}}
break;
}
return ret;
}, 1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:46 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
