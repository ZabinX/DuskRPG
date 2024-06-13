(function(){var P$=Clazz.newPackage("sun.nio.cs"),p$1={},I$=[[0,'java.util.Arrays','java.security.AccessController','sun.nio.cs.CharsetMapping',['sun.nio.cs.CharsetMapping','.Entry']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CharsetMapping", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Entry',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.off=0;
},1);

C$.$fields$=[['I',['b2Min','b2Max','b1MinDB1','b1MaxDB1','b1MinDB2','b1MaxDB2','dbSegSize','off'],'O',['b2cSB','char[]','+b2cDB1','+b2cDB2','+c2b','+c2bIndex','+b2cSupp','+c2bSupp','b2cComp','sun.nio.cs.CharsetMapping.Entry[]','+c2bComp','bb','byte[]']]
,['O',['comparatorBytes','java.util.Comparator','+comparatorCP','+comparatorComp']]]

Clazz.newMeth(C$, 'decodeSingle$I',  function (b) {
return this.b2cSB[b];
});

Clazz.newMeth(C$, 'decodeDouble$I$I',  function (b1, b2) {
if (b2 >= this.b2Min && b2 < this.b2Max ) {
b2-=this.b2Min;
if (b1 >= this.b1MinDB1 && b1 <= this.b1MaxDB1 ) {
b1-=this.b1MinDB1;
return this.b2cDB1[b1 * this.dbSegSize + b2];
}if (b1 >= this.b1MinDB2 && b1 <= this.b1MaxDB2 ) {
b1-=this.b1MinDB2;
return this.b2cDB2[b1 * this.dbSegSize + b2];
}}return "\ufffd";
});

Clazz.newMeth(C$, 'decodeSurrogate$I$CA',  function (db, cc) {
var end=(this.b2cSupp.length/2|0);
var i=$I$(1,"binarySearch$CA$I$I$C",[this.b2cSupp, 0, end, String.fromCharCode(db)]);
if (i >= 0) {
Character.toChars$I$CA$I((this.b2cSupp[end + i]).$c() + 131072, cc, 0);
return cc;
}return null;
});

Clazz.newMeth(C$, 'decodeComposite$sun_nio_cs_CharsetMapping_Entry$CA',  function (comp, cc) {
var i=C$.findBytes$sun_nio_cs_CharsetMapping_EntryA$sun_nio_cs_CharsetMapping_Entry(this.b2cComp, comp);
if (i >= 0) {
cc[0]=String.fromCharCode(this.b2cComp[i].cp);
cc[1]=String.fromCharCode(this.b2cComp[i].cp2);
return cc;
}return null;
});

Clazz.newMeth(C$, 'encodeChar$C',  function (ch) {
var index=this.c2bIndex[ch.$c() >> 8].$c();
if (index == 65535) return 65533;
return this.c2b[index + (ch.$c() & 255)].$c();
});

Clazz.newMeth(C$, 'encodeSurrogate$C$C',  function (hi, lo) {
var cp=Character.toCodePoint$C$C(hi, lo);
if (cp < 131072 || cp >= 196608 ) return 65533;
var end=(this.c2bSupp.length/2|0);
var i=$I$(1,"binarySearch$CA$I$I$C",[this.c2bSupp, 0, end, String.fromCharCode(cp)]);
if (i >= 0) return this.c2bSupp[end + i].$c();
return 65533;
});

Clazz.newMeth(C$, 'isCompositeBase$sun_nio_cs_CharsetMapping_Entry',  function (comp) {
if (comp.cp <= 12791 && comp.cp >= 230 ) {
return (C$.findCP$sun_nio_cs_CharsetMapping_EntryA$sun_nio_cs_CharsetMapping_Entry(this.c2bComp, comp) >= 0);
}return false;
});

Clazz.newMeth(C$, 'encodeComposite$sun_nio_cs_CharsetMapping_Entry',  function (comp) {
var i=C$.findComp$sun_nio_cs_CharsetMapping_EntryA$sun_nio_cs_CharsetMapping_Entry(this.c2bComp, comp);
if (i >= 0) return this.c2bComp[i].bs;
return 65533;
});

Clazz.newMeth(C$, 'get$java_io_InputStream',  function (is) {
return $I$(2,"doPrivileged$java_security_PrivilegedAction",[((P$.CharsetMapping$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "CharsetMapping$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
return Clazz.new_($I$(3,1)).load$java_io_InputStream(this.$finals$.is);
});
})()
), Clazz.new_(P$.CharsetMapping$4.$init$,[this, {is:is}]))]);
}, 1);

Clazz.newMeth(C$, 'findBytes$sun_nio_cs_CharsetMapping_EntryA$sun_nio_cs_CharsetMapping_Entry',  function (a, k) {
return $I$(1).binarySearch$OA$I$I$O$java_util_Comparator(a, 0, a.length, k, C$.comparatorBytes);
}, 1);

Clazz.newMeth(C$, 'findCP$sun_nio_cs_CharsetMapping_EntryA$sun_nio_cs_CharsetMapping_Entry',  function (a, k) {
return $I$(1).binarySearch$OA$I$I$O$java_util_Comparator(a, 0, a.length, k, C$.comparatorCP);
}, 1);

Clazz.newMeth(C$, 'findComp$sun_nio_cs_CharsetMapping_EntryA$sun_nio_cs_CharsetMapping_Entry',  function (a, k) {
return $I$(1).binarySearch$OA$I$I$O$java_util_Comparator(a, 0, a.length, k, C$.comparatorComp);
}, 1);

Clazz.newMeth(C$, 'readNBytes$java_io_InputStream$BA$I',  function ($in, bb, N) {
var off=0;
while (N > 0){
var n=$in.read$BA$I$I(bb, off, N);
if (n == -1) return false;
N=N - n;
off+=n;
}
return true;
}, 1);

Clazz.newMeth(C$, 'readCharArray',  function () {
var size=((this.bb[this.off++] & 255) << 8) | (this.bb[this.off++] & 255);
var cc=Clazz.array(Character.TYPE, [size]);
for (var i=0; i < size; i++) {
cc[i]=String.fromCharCode((((this.bb[this.off++] & 255) << 8) | (this.bb[this.off++] & 255)));
}
return cc;
}, p$1);

Clazz.newMeth(C$, 'readSINGLEBYTE$',  function () {
var map=p$1.readCharArray.apply(this, []);
for (var i=0; i < map.length; i++) {
var c=map[i];
if (c != "\ufffd") {
this.c2b[(this.c2bIndex[c.$c() >> 8]).$c() + (c.$c() & 255)]=String.fromCharCode(i);
}}
this.b2cSB=map;
});

Clazz.newMeth(C$, 'readINDEXC2B$',  function () {
var map=p$1.readCharArray.apply(this, []);
for (var i=map.length - 1; i >= 0; i--) {
if (this.c2b == null  && (map[i]).$c() != -1  ) {
this.c2b=Clazz.array(Character.TYPE, [(map[i]).$c() + 256]);
$I$(1).fill$CA$C(this.c2b, "\ufffd");
break;
}}
this.c2bIndex=map;
});

Clazz.newMeth(C$, 'readDB$I$I$I',  function (b1Min, b2Min, segSize) {
var map=p$1.readCharArray.apply(this, []);
for (var i=0; i < map.length; i++) {
var c=map[i];
if (c != "\ufffd") {
var b1=(i/segSize|0);
var b2=i % segSize;
var b=(b1 + b1Min) * 256 + (b2 + b2Min);
this.c2b[(this.c2bIndex[c.$c() >> 8]).$c() + (c.$c() & 255)]=String.fromCharCode((b));
}}
return map;
});

Clazz.newMeth(C$, 'readDOUBLEBYTE1$',  function () {
this.b1MinDB1=((this.bb[this.off++] & 255) << 8) | (this.bb[this.off++] & 255);
this.b1MaxDB1=((this.bb[this.off++] & 255) << 8) | (this.bb[this.off++] & 255);
this.b2Min=((this.bb[this.off++] & 255) << 8) | (this.bb[this.off++] & 255);
this.b2Max=((this.bb[this.off++] & 255) << 8) | (this.bb[this.off++] & 255);
this.dbSegSize=this.b2Max - this.b2Min + 1;
this.b2cDB1=this.readDB$I$I$I(this.b1MinDB1, this.b2Min, this.dbSegSize);
});

Clazz.newMeth(C$, 'readDOUBLEBYTE2$',  function () {
this.b1MinDB2=((this.bb[this.off++] & 255) << 8) | (this.bb[this.off++] & 255);
this.b1MaxDB2=((this.bb[this.off++] & 255) << 8) | (this.bb[this.off++] & 255);
this.b2Min=((this.bb[this.off++] & 255) << 8) | (this.bb[this.off++] & 255);
this.b2Max=((this.bb[this.off++] & 255) << 8) | (this.bb[this.off++] & 255);
this.dbSegSize=this.b2Max - this.b2Min + 1;
this.b2cDB2=this.readDB$I$I$I(this.b1MinDB2, this.b2Min, this.dbSegSize);
});

Clazz.newMeth(C$, 'readCOMPOSITE$',  function () {
var map=p$1.readCharArray.apply(this, []);
var mLen=(map.length/3|0);
this.b2cComp=Clazz.array($I$(4), [mLen]);
this.c2bComp=Clazz.array($I$(4), [mLen]);
for (var i=0, j=0; i < mLen; i++) {
var m=Clazz.new_($I$(4,1));
m.bs=map[j++].$c();
m.cp=map[j++].$c();
m.cp2=map[j++].$c();
this.b2cComp[i]=m;
this.c2bComp[i]=m;
}
$I$(1).sort$OA$I$I$java_util_Comparator(this.c2bComp, 0, this.c2bComp.length, C$.comparatorComp);
});

Clazz.newMeth(C$, 'load$java_io_InputStream',  function ($in) {
try {
var len=(($in.read$() & 255) << 24) | (($in.read$() & 255) << 16) | (($in.read$() & 255) << 8) | ($in.read$() & 255) ;
this.bb=Clazz.array(Byte.TYPE, [len]);
this.off=0;
if (!C$.readNBytes$java_io_InputStream$BA$I($in, this.bb, len)) throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Corrupted data file"]);
$in.close$();
while (this.off < len){
var type=((this.bb[this.off++] & 255) << 8) | (this.bb[this.off++] & 255);
switch (type) {
case 8:
this.readINDEXC2B$();
break;
case 1:
this.readSINGLEBYTE$();
break;
case 2:
this.readDOUBLEBYTE1$();
break;
case 3:
this.readDOUBLEBYTE2$();
break;
case 5:
this.b2cSupp=p$1.readCharArray.apply(this, []);
break;
case 6:
this.c2bSupp=p$1.readCharArray.apply(this, []);
break;
case 7:
this.readCOMPOSITE$();
break;
default:
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Corrupted data file"]);
}
}
this.bb=null;
return this;
} catch (x) {
if (Clazz.exceptionOf(x,"java.io.IOException")){
x.printStackTrace$();
return null;
} else {
throw x;
}
}
});

C$.$static$=function(){C$.$static$=0;
C$.comparatorBytes=((P$.CharsetMapping$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "CharsetMapping$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['compare$sun_nio_cs_CharsetMapping_Entry$sun_nio_cs_CharsetMapping_Entry','compare$O$O'],  function (m1, m2) {
return m1.bs - m2.bs;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
return this === obj ;
});
})()
), Clazz.new_(P$.CharsetMapping$1.$init$,[this, null]));
C$.comparatorCP=((P$.CharsetMapping$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "CharsetMapping$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, ['compare$sun_nio_cs_CharsetMapping_Entry$sun_nio_cs_CharsetMapping_Entry','compare$O$O'],  function (m1, m2) {
return m1.cp - m2.cp;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
return this === obj ;
});
})()
), Clazz.new_(P$.CharsetMapping$2.$init$,[this, null]));
C$.comparatorComp=((P$.CharsetMapping$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "CharsetMapping$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, ['compare$sun_nio_cs_CharsetMapping_Entry$sun_nio_cs_CharsetMapping_Entry','compare$O$O'],  function (m1, m2) {
var v=m1.cp - m2.cp;
if (v == 0) v=m1.cp2 - m2.cp2;
return v;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
return this === obj ;
});
})()
), Clazz.new_(P$.CharsetMapping$3.$init$,[this, null]));
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.CharsetMapping, "Entry", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['bs','cp','cp2']]]

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:47 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
