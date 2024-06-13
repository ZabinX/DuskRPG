(function(){var P$=Clazz.newPackage("gov.nist.jama"),I$=[[0,'gov.nist.jama.Matrix']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LUDecomposition", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['m','n','pivsign'],'O',['LU','double[][]','piv','int[]']]]

Clazz.newMeth(C$, 'c$$gov_nist_jama_Matrix',  function (A) {
;C$.$init$.apply(this);
this.LU=A.getArrayCopy$();
this.m=A.getRowDimension$();
this.n=A.getColumnDimension$();
this.piv=Clazz.array(Integer.TYPE, [this.m]);
for (var i=0; i < this.m; i++) {
this.piv[i]=i;
}
this.pivsign=1;
var LUrowi;
var LUcolj=Clazz.array(Double.TYPE, [this.m]);
for (var j=0; j < this.n; j++) {
for (var i=0; i < this.m; i++) {
LUcolj[i]=this.LU[i][j];
}
for (var i=0; i < this.m; i++) {
LUrowi=this.LU[i];
var kmax=Math.min(i, j);
var s=0.0;
for (var k=0; k < kmax; k++) {
s+=LUrowi[k] * LUcolj[k];
}
LUrowi[j]=LUcolj[i]-=s;
}
var p=j;
for (var i=j + 1; i < this.m; i++) {
if (Math.abs(LUcolj[i]) > Math.abs(LUcolj[p]) ) {
p=i;
}}
if (p != j) {
for (var k=0; k < this.n; k++) {
var t=this.LU[p][k];
this.LU[p][k]=this.LU[j][k];
this.LU[j][k]=t;
}
var k=this.piv[p];
this.piv[p]=this.piv[j];
this.piv[j]=k;
this.pivsign=-this.pivsign;
}if (!!(j < this.m & this.LU[j][j] != 0.0 )) {
for (var i=j + 1; i < this.m; i++) {
this.LU[i][j]/=this.LU[j][j];
}
}}
}, 1);

Clazz.newMeth(C$, 'isNonsingular$',  function () {
for (var j=0; j < this.n; j++) {
if (this.LU[j][j] == 0 ) return false;
}
return true;
});

Clazz.newMeth(C$, 'getL$',  function () {
var X=Clazz.new_($I$(1,1).c$$I$I,[this.m, this.n]);
var L=X.getArray$();
for (var i=0; i < this.m; i++) {
for (var j=0; j < this.n; j++) {
if (i > j) {
L[i][j]=this.LU[i][j];
} else if (i == j) {
L[i][j]=1.0;
} else {
L[i][j]=0.0;
}}
}
return X;
});

Clazz.newMeth(C$, 'getU$',  function () {
var X=Clazz.new_($I$(1,1).c$$I$I,[this.n, this.n]);
var U=X.getArray$();
for (var i=0; i < this.n; i++) {
for (var j=0; j < this.n; j++) {
if (i <= j) {
U[i][j]=this.LU[i][j];
} else {
U[i][j]=0.0;
}}
}
return X;
});

Clazz.newMeth(C$, 'getPivot$',  function () {
var p=Clazz.array(Integer.TYPE, [this.m]);
for (var i=0; i < this.m; i++) {
p[i]=this.piv[i];
}
return p;
});

Clazz.newMeth(C$, 'getDoublePivot$',  function () {
var vals=Clazz.array(Double.TYPE, [this.m]);
for (var i=0; i < this.m; i++) {
vals[i]=this.piv[i];
}
return vals;
});

Clazz.newMeth(C$, 'det$',  function () {
if (this.m != this.n) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Matrix must be square."]);
}var d=this.pivsign;
for (var j=0; j < this.n; j++) {
d*=this.LU[j][j];
}
return d;
});

Clazz.newMeth(C$, 'solve$gov_nist_jama_Matrix',  function (B) {
if (B.getRowDimension$() != this.m) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Matrix row dimensions must agree."]);
}if (!this.isNonsingular$()) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Matrix is singular."]);
}var nx=B.getColumnDimension$();
var Xmat=B.getMatrix$IA$I$I(this.piv, 0, nx - 1);
var X=Xmat.getArray$();
for (var k=0; k < this.n; k++) {
for (var i=k + 1; i < this.n; i++) {
for (var j=0; j < nx; j++) {
X[i][j]-=X[k][j] * this.LU[i][k];
}
}
}
for (var k=this.n - 1; k >= 0; k--) {
for (var j=0; j < nx; j++) {
X[k][j]/=this.LU[k][k];
}
for (var i=0; i < k; i++) {
for (var j=0; j < nx; j++) {
X[i][j]-=X[k][j] * this.LU[i][k];
}
}
}
return Xmat;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:58 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
