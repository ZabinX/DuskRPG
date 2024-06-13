(function(){var P$=Clazz.newPackage("gov.nist.jama"),I$=[[0,'gov.nist.jama.util.Maths','gov.nist.jama.Matrix']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "QRDecomposition", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['m','n'],'O',['QR','double[][]','Rdiag','double[]']]]

Clazz.newMeth(C$, 'c$$gov_nist_jama_Matrix',  function (A) {
;C$.$init$.apply(this);
this.QR=A.getArrayCopy$();
this.m=A.getRowDimension$();
this.n=A.getColumnDimension$();
this.Rdiag=Clazz.array(Double.TYPE, [this.n]);
for (var k=0; k < this.n; k++) {
var nrm=0;
for (var i=k; i < this.m; i++) {
nrm=$I$(1).hypot$D$D(nrm, this.QR[i][k]);
}
if (nrm != 0.0 ) {
if (this.QR[k][k] < 0 ) {
nrm=-nrm;
}for (var i=k; i < this.m; i++) {
this.QR[i][k]/=nrm;
}
this.QR[k][k]+=1.0;
for (var j=k + 1; j < this.n; j++) {
var s=0.0;
for (var i=k; i < this.m; i++) {
s+=this.QR[i][k] * this.QR[i][j];
}
s=-s / this.QR[k][k];
for (var i=k; i < this.m; i++) {
this.QR[i][j]+=s * this.QR[i][k];
}
}
}this.Rdiag[k]=-nrm;
}
}, 1);

Clazz.newMeth(C$, 'isFullRank$',  function () {
for (var j=0; j < this.n; j++) {
if (this.Rdiag[j] == 0 ) return false;
}
return true;
});

Clazz.newMeth(C$, 'getH$',  function () {
var X=Clazz.new_($I$(2,1).c$$I$I,[this.m, this.n]);
var H=X.getArray$();
for (var i=0; i < this.m; i++) {
for (var j=0; j < this.n; j++) {
if (i >= j) {
H[i][j]=this.QR[i][j];
} else {
H[i][j]=0.0;
}}
}
return X;
});

Clazz.newMeth(C$, 'getR$',  function () {
var X=Clazz.new_($I$(2,1).c$$I$I,[this.n, this.n]);
var R=X.getArray$();
for (var i=0; i < this.n; i++) {
for (var j=0; j < this.n; j++) {
if (i < j) {
R[i][j]=this.QR[i][j];
} else if (i == j) {
R[i][j]=this.Rdiag[i];
} else {
R[i][j]=0.0;
}}
}
return X;
});

Clazz.newMeth(C$, 'getQ$',  function () {
var X=Clazz.new_($I$(2,1).c$$I$I,[this.m, this.n]);
var Q=X.getArray$();
for (var k=this.n - 1; k >= 0; k--) {
for (var i=0; i < this.m; i++) {
Q[i][k]=0.0;
}
Q[k][k]=1.0;
for (var j=k; j < this.n; j++) {
if (this.QR[k][k] != 0 ) {
var s=0.0;
for (var i=k; i < this.m; i++) {
s+=this.QR[i][k] * Q[i][j];
}
s=-s / this.QR[k][k];
for (var i=k; i < this.m; i++) {
Q[i][j]+=s * this.QR[i][k];
}
}}
}
return X;
});

Clazz.newMeth(C$, 'solve$gov_nist_jama_Matrix',  function (B) {
if (B.getRowDimension$() != this.m) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Matrix row dimensions must agree."]);
}if (!this.isFullRank$()) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Matrix is rank deficient."]);
}var nx=B.getColumnDimension$();
var X=B.getArrayCopy$();
for (var k=0; k < this.n; k++) {
for (var j=0; j < nx; j++) {
var s=0.0;
for (var i=k; i < this.m; i++) {
s+=this.QR[i][k] * X[i][j];
}
s=-s / this.QR[k][k];
for (var i=k; i < this.m; i++) {
X[i][j]+=s * this.QR[i][k];
}
}
}
for (var k=this.n - 1; k >= 0; k--) {
for (var j=0; j < nx; j++) {
X[k][j]/=this.Rdiag[k];
}
for (var i=0; i < k; i++) {
for (var j=0; j < nx; j++) {
X[i][j]-=X[k][j] * this.QR[i][k];
}
}
}
return (Clazz.new_($I$(2,1).c$$DAA$I$I,[X, this.n, nx]).getMatrix$I$I$I$I(0, this.n - 1, 0, nx - 1));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:58 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
