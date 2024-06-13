(function(){var P$=Clazz.newPackage("java.security.spec"),I$=[[0,'java.math.BigInteger','java.util.Arrays']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ECFieldF2m", null, null, 'java.security.spec.ECField');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['m'],'O',['ks','int[]','rp','java.math.BigInteger']]]

Clazz.newMeth(C$, 'c$$I',  function (m) {
;C$.$init$.apply(this);
if (m <= 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["m is not positive"]);
}this.m=m;
this.ks=null;
this.rp=null;
}, 1);

Clazz.newMeth(C$, 'c$$I$java_math_BigInteger',  function (m, rp) {
;C$.$init$.apply(this);
this.m=m;
this.rp=rp;
if (m <= 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["m is not positive"]);
}var bitCount=this.rp.bitCount$();
if (!this.rp.testBit$I(0) || !this.rp.testBit$I(m) || ((bitCount != 3) && (bitCount != 5) )  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["rp does not represent a valid reduction polynomial"]);
}var temp=this.rp.clearBit$I(0).clearBit$I(m);
this.ks=Clazz.array(Integer.TYPE, [bitCount - 2]);
for (var i=this.ks.length - 1; i >= 0; i--) {
var index=temp.getLowestSetBit$();
this.ks[i]=index;
temp=temp.clearBit$I(index);
}
}, 1);

Clazz.newMeth(C$, 'c$$I$IA',  function (m, ks) {
;C$.$init$.apply(this);
this.m=m;
this.ks=ks.clone$();
if (m <= 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["m is not positive"]);
}if ((this.ks.length != 1) && (this.ks.length != 3) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["length of ks is neither 1 nor 3"]);
}for (var i=0; i < this.ks.length; i++) {
if ((this.ks[i] < 1) || (this.ks[i] > m - 1) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["ks[" + i + "] is out of range" ]);
}if ((i != 0) && (this.ks[i] >= this.ks[i - 1]) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["values in ks are not in descending order"]);
}}
this.rp=$I$(1).ONE;
this.rp=this.rp.setBit$I(m);
for (var j=0; j < this.ks.length; j++) {
this.rp=this.rp.setBit$I(this.ks[j]);
}
}, 1);

Clazz.newMeth(C$, 'getFieldSize$',  function () {
return this.m;
});

Clazz.newMeth(C$, 'getM$',  function () {
return this.m;
});

Clazz.newMeth(C$, 'getReductionPolynomial$',  function () {
return this.rp;
});

Clazz.newMeth(C$, 'getMidTermsOfReductionPolynomial$',  function () {
if (this.ks == null ) {
return null;
} else {
return this.ks.clone$();
}});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (this === obj ) return true;
if (Clazz.instanceOf(obj, "java.security.spec.ECFieldF2m")) {
return ((this.m == (obj).m) && ($I$(2,"equals$IA$IA",[this.ks, (obj).ks])) );
}return false;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
var value=this.m << 5;
value+=(this.rp == null  ? 0 : this.rp.hashCode$());
return value;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:28 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
