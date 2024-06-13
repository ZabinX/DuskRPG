(function(){var P$=Clazz.newPackage("gov.nist.jama"),p$1={},I$=[[0,'gov.nist.jama.SingularValueDecomposition','gov.nist.jama.util.Maths','gov.nist.jama.LUDecomposition','gov.nist.jama.EigenvalueDecomposition','gov.nist.jama.QRDecomposition']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Matrix", null, null, ['Cloneable', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['m','n'],'O',['A','double[][]']]]

Clazz.newMeth(C$, 'c$$I$I',  function (m, n) {
;C$.$init$.apply(this);
this.m=m;
this.n=n;
this.A=Clazz.array(Double.TYPE, [m, n]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$D',  function (m, n, s) {
;C$.$init$.apply(this);
this.m=m;
this.n=n;
this.A=Clazz.array(Double.TYPE, [m, n]);
for (var i=0; i < m; i++) {
for (var j=0; j < n; j++) {
this.A[i][j]=s;
}
}
}, 1);

Clazz.newMeth(C$, 'c$$DAA',  function (A) {
;C$.$init$.apply(this);
this.m=A.length;
this.n=A[0].length;
for (var i=0; i < this.m; i++) {
if (A[i].length != this.n) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["All rows must have the same length."]);
}}
this.A=A;
}, 1);

Clazz.newMeth(C$, 'c$$DAA$I$I',  function (A, m, n) {
;C$.$init$.apply(this);
this.A=A;
this.m=m;
this.n=n;
}, 1);

Clazz.newMeth(C$, 'c$$DA$I',  function (vals, m) {
;C$.$init$.apply(this);
this.m=m;
this.n=(m != 0 ? (vals.length/m|0) : 0);
if (m * this.n != vals.length) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Array length must be a multiple of m."]);
}this.A=Clazz.array(Double.TYPE, [m, this.n]);
for (var i=0; i < m; i++) {
for (var j=0; j < this.n; j++) {
this.A[i][j]=vals[i + j * m];
}
}
}, 1);

Clazz.newMeth(C$, 'constructWithCopy$DAA',  function (A) {
var m=A.length;
var n=A[0].length;
var X=Clazz.new_(C$.c$$I$I,[m, n]);
var C=X.getArray$();
for (var i=0; i < m; i++) {
if (A[i].length != n) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["All rows must have the same length."]);
}for (var j=0; j < n; j++) {
C[i][j]=A[i][j];
}
}
return X;
}, 1);

Clazz.newMeth(C$, 'copy$',  function () {
var X=Clazz.new_(C$.c$$I$I,[this.m, this.n]);
var C=X.getArray$();
for (var i=0; i < this.m; i++) {
for (var j=0; j < this.n; j++) {
C[i][j]=this.A[i][j];
}
}
return X;
});

Clazz.newMeth(C$, 'clone$',  function () {
return this.copy$();
});

Clazz.newMeth(C$, 'getArray$',  function () {
return this.A;
});

Clazz.newMeth(C$, 'getArrayCopy$',  function () {
var C=Clazz.array(Double.TYPE, [this.m, this.n]);
for (var i=0; i < this.m; i++) {
for (var j=0; j < this.n; j++) {
C[i][j]=this.A[i][j];
}
}
return C;
});

Clazz.newMeth(C$, 'getColumnPackedCopy$',  function () {
var vals=Clazz.array(Double.TYPE, [this.m * this.n]);
for (var i=0; i < this.m; i++) {
for (var j=0; j < this.n; j++) {
vals[i + j * this.m]=this.A[i][j];
}
}
return vals;
});

Clazz.newMeth(C$, 'getRowPackedCopy$',  function () {
var vals=Clazz.array(Double.TYPE, [this.m * this.n]);
for (var i=0; i < this.m; i++) {
for (var j=0; j < this.n; j++) {
vals[i * this.n + j]=this.A[i][j];
}
}
return vals;
});

Clazz.newMeth(C$, 'getRowDimension$',  function () {
return this.m;
});

Clazz.newMeth(C$, 'getColumnDimension$',  function () {
return this.n;
});

Clazz.newMeth(C$, 'get$I$I',  function (i, j) {
return this.A[i][j];
});

Clazz.newMeth(C$, 'getMatrix$I$I$I$I',  function (i0, i1, j0, j1) {
var X=Clazz.new_(C$.c$$I$I,[i1 - i0 + 1, j1 - j0 + 1]);
var B=X.getArray$();
try {
for (var i=i0; i <= i1; i++) {
for (var j=j0; j <= j1; j++) {
B[i - i0][j - j0]=this.A[i][j];
}
}
} catch (e) {
if (Clazz.exceptionOf(e,"ArrayIndexOutOfBoundsException")){
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Submatrix indices"]);
} else {
throw e;
}
}
return X;
});

Clazz.newMeth(C$, 'getMatrix$IA$IA',  function (r, c) {
var X=Clazz.new_(C$.c$$I$I,[r.length, c.length]);
var B=X.getArray$();
try {
for (var i=0; i < r.length; i++) {
for (var j=0; j < c.length; j++) {
B[i][j]=this.A[r[i]][c[j]];
}
}
} catch (e) {
if (Clazz.exceptionOf(e,"ArrayIndexOutOfBoundsException")){
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Submatrix indices"]);
} else {
throw e;
}
}
return X;
});

Clazz.newMeth(C$, 'getMatrix$I$I$IA',  function (i0, i1, c) {
var X=Clazz.new_(C$.c$$I$I,[i1 - i0 + 1, c.length]);
var B=X.getArray$();
try {
for (var i=i0; i <= i1; i++) {
for (var j=0; j < c.length; j++) {
B[i - i0][j]=this.A[i][c[j]];
}
}
} catch (e) {
if (Clazz.exceptionOf(e,"ArrayIndexOutOfBoundsException")){
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Submatrix indices"]);
} else {
throw e;
}
}
return X;
});

Clazz.newMeth(C$, 'getMatrix$IA$I$I',  function (r, j0, j1) {
var X=Clazz.new_(C$.c$$I$I,[r.length, j1 - j0 + 1]);
var B=X.getArray$();
try {
for (var i=0; i < r.length; i++) {
for (var j=j0; j <= j1; j++) {
B[i][j - j0]=this.A[r[i]][j];
}
}
} catch (e) {
if (Clazz.exceptionOf(e,"ArrayIndexOutOfBoundsException")){
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Submatrix indices"]);
} else {
throw e;
}
}
return X;
});

Clazz.newMeth(C$, 'set$I$I$D',  function (i, j, s) {
this.A[i][j]=s;
});

Clazz.newMeth(C$, 'setMatrix$I$I$I$I$gov_nist_jama_Matrix',  function (i0, i1, j0, j1, X) {
try {
for (var i=i0; i <= i1; i++) {
for (var j=j0; j <= j1; j++) {
this.A[i][j]=X.get$I$I(i - i0, j - j0);
}
}
} catch (e) {
if (Clazz.exceptionOf(e,"ArrayIndexOutOfBoundsException")){
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Submatrix indices"]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'setMatrix$IA$IA$gov_nist_jama_Matrix',  function (r, c, X) {
try {
for (var i=0; i < r.length; i++) {
for (var j=0; j < c.length; j++) {
this.A[r[i]][c[j]]=X.get$I$I(i, j);
}
}
} catch (e) {
if (Clazz.exceptionOf(e,"ArrayIndexOutOfBoundsException")){
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Submatrix indices"]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'setMatrix$IA$I$I$gov_nist_jama_Matrix',  function (r, j0, j1, X) {
try {
for (var i=0; i < r.length; i++) {
for (var j=j0; j <= j1; j++) {
this.A[r[i]][j]=X.get$I$I(i, j - j0);
}
}
} catch (e) {
if (Clazz.exceptionOf(e,"ArrayIndexOutOfBoundsException")){
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Submatrix indices"]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'setMatrix$I$I$IA$gov_nist_jama_Matrix',  function (i0, i1, c, X) {
try {
for (var i=i0; i <= i1; i++) {
for (var j=0; j < c.length; j++) {
this.A[i][c[j]]=X.get$I$I(i - i0, j);
}
}
} catch (e) {
if (Clazz.exceptionOf(e,"ArrayIndexOutOfBoundsException")){
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Submatrix indices"]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'transpose$',  function () {
var X=Clazz.new_(C$.c$$I$I,[this.n, this.m]);
var C=X.getArray$();
for (var i=0; i < this.m; i++) {
for (var j=0; j < this.n; j++) {
C[j][i]=this.A[i][j];
}
}
return X;
});

Clazz.newMeth(C$, 'norm1$',  function () {
var f=0;
for (var j=0; j < this.n; j++) {
var s=0;
for (var i=0; i < this.m; i++) {
s+=Math.abs(this.A[i][j]);
}
f=Math.max(f, s);
}
return f;
});

Clazz.newMeth(C$, 'norm2$',  function () {
return (Clazz.new_($I$(1,1).c$$gov_nist_jama_Matrix,[this]).norm2$());
});

Clazz.newMeth(C$, 'normInf$',  function () {
var f=0;
for (var i=0; i < this.m; i++) {
var s=0;
for (var j=0; j < this.n; j++) {
s+=Math.abs(this.A[i][j]);
}
f=Math.max(f, s);
}
return f;
});

Clazz.newMeth(C$, 'normF$',  function () {
var f=0;
for (var i=0; i < this.m; i++) {
for (var j=0; j < this.n; j++) {
f=$I$(2).hypot$D$D(f, this.A[i][j]);
}
}
return f;
});

Clazz.newMeth(C$, 'uminus$',  function () {
var X=Clazz.new_(C$.c$$I$I,[this.m, this.n]);
var C=X.getArray$();
for (var i=0; i < this.m; i++) {
for (var j=0; j < this.n; j++) {
C[i][j]=-this.A[i][j];
}
}
return X;
});

Clazz.newMeth(C$, 'plus$gov_nist_jama_Matrix',  function (B) {
p$1.checkMatrixDimensions$gov_nist_jama_Matrix.apply(this, [B]);
var X=Clazz.new_(C$.c$$I$I,[this.m, this.n]);
var C=X.getArray$();
for (var i=0; i < this.m; i++) {
for (var j=0; j < this.n; j++) {
C[i][j]=this.A[i][j] + B.A[i][j];
}
}
return X;
});

Clazz.newMeth(C$, 'plusEquals$gov_nist_jama_Matrix',  function (B) {
p$1.checkMatrixDimensions$gov_nist_jama_Matrix.apply(this, [B]);
for (var i=0; i < this.m; i++) {
for (var j=0; j < this.n; j++) {
this.A[i][j]=this.A[i][j] + B.A[i][j];
}
}
return this;
});

Clazz.newMeth(C$, 'minus$gov_nist_jama_Matrix',  function (B) {
p$1.checkMatrixDimensions$gov_nist_jama_Matrix.apply(this, [B]);
var X=Clazz.new_(C$.c$$I$I,[this.m, this.n]);
var C=X.getArray$();
for (var i=0; i < this.m; i++) {
for (var j=0; j < this.n; j++) {
C[i][j]=this.A[i][j] - B.A[i][j];
}
}
return X;
});

Clazz.newMeth(C$, 'minusEquals$gov_nist_jama_Matrix',  function (B) {
p$1.checkMatrixDimensions$gov_nist_jama_Matrix.apply(this, [B]);
for (var i=0; i < this.m; i++) {
for (var j=0; j < this.n; j++) {
this.A[i][j]=this.A[i][j] - B.A[i][j];
}
}
return this;
});

Clazz.newMeth(C$, 'arrayTimes$gov_nist_jama_Matrix',  function (B) {
p$1.checkMatrixDimensions$gov_nist_jama_Matrix.apply(this, [B]);
var X=Clazz.new_(C$.c$$I$I,[this.m, this.n]);
var C=X.getArray$();
for (var i=0; i < this.m; i++) {
for (var j=0; j < this.n; j++) {
C[i][j]=this.A[i][j] * B.A[i][j];
}
}
return X;
});

Clazz.newMeth(C$, 'arrayTimesEquals$gov_nist_jama_Matrix',  function (B) {
p$1.checkMatrixDimensions$gov_nist_jama_Matrix.apply(this, [B]);
for (var i=0; i < this.m; i++) {
for (var j=0; j < this.n; j++) {
this.A[i][j]=this.A[i][j] * B.A[i][j];
}
}
return this;
});

Clazz.newMeth(C$, 'arrayRightDivide$gov_nist_jama_Matrix',  function (B) {
p$1.checkMatrixDimensions$gov_nist_jama_Matrix.apply(this, [B]);
var X=Clazz.new_(C$.c$$I$I,[this.m, this.n]);
var C=X.getArray$();
for (var i=0; i < this.m; i++) {
for (var j=0; j < this.n; j++) {
C[i][j]=this.A[i][j] / B.A[i][j];
}
}
return X;
});

Clazz.newMeth(C$, 'arrayRightDivideEquals$gov_nist_jama_Matrix',  function (B) {
p$1.checkMatrixDimensions$gov_nist_jama_Matrix.apply(this, [B]);
for (var i=0; i < this.m; i++) {
for (var j=0; j < this.n; j++) {
this.A[i][j]=this.A[i][j] / B.A[i][j];
}
}
return this;
});

Clazz.newMeth(C$, 'arrayLeftDivide$gov_nist_jama_Matrix',  function (B) {
p$1.checkMatrixDimensions$gov_nist_jama_Matrix.apply(this, [B]);
var X=Clazz.new_(C$.c$$I$I,[this.m, this.n]);
var C=X.getArray$();
for (var i=0; i < this.m; i++) {
for (var j=0; j < this.n; j++) {
C[i][j]=B.A[i][j] / this.A[i][j];
}
}
return X;
});

Clazz.newMeth(C$, 'arrayLeftDivideEquals$gov_nist_jama_Matrix',  function (B) {
p$1.checkMatrixDimensions$gov_nist_jama_Matrix.apply(this, [B]);
for (var i=0; i < this.m; i++) {
for (var j=0; j < this.n; j++) {
this.A[i][j]=B.A[i][j] / this.A[i][j];
}
}
return this;
});

Clazz.newMeth(C$, 'times$D',  function (s) {
var X=Clazz.new_(C$.c$$I$I,[this.m, this.n]);
var C=X.getArray$();
for (var i=0; i < this.m; i++) {
for (var j=0; j < this.n; j++) {
C[i][j]=s * this.A[i][j];
}
}
return X;
});

Clazz.newMeth(C$, 'timesEquals$D',  function (s) {
for (var i=0; i < this.m; i++) {
for (var j=0; j < this.n; j++) {
this.A[i][j]=s * this.A[i][j];
}
}
return this;
});

Clazz.newMeth(C$, 'times$gov_nist_jama_Matrix',  function (B) {
if (B.m != this.n) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Matrix inner dimensions must agree."]);
}var X=Clazz.new_(C$.c$$I$I,[this.m, B.n]);
var C=X.getArray$();
var Bcolj=Clazz.array(Double.TYPE, [this.n]);
for (var j=0; j < B.n; j++) {
for (var k=0; k < this.n; k++) {
Bcolj[k]=B.A[k][j];
}
for (var i=0; i < this.m; i++) {
var Arowi=this.A[i];
var s=0;
for (var k=0; k < this.n; k++) {
s+=Arowi[k] * Bcolj[k];
}
C[i][j]=s;
}
}
return X;
});

Clazz.newMeth(C$, 'lu$',  function () {
return Clazz.new_($I$(3,1).c$$gov_nist_jama_Matrix,[this]);
});

Clazz.newMeth(C$, 'eig$Z',  function (needVectors) {
return Clazz.new_($I$(4,1).c$$gov_nist_jama_Matrix$Z,[this, needVectors]);
});

Clazz.newMeth(C$, 'solve$gov_nist_jama_Matrix',  function (B) {
return (this.m == this.n ? (Clazz.new_($I$(3,1).c$$gov_nist_jama_Matrix,[this])).solve$gov_nist_jama_Matrix(B) : (Clazz.new_($I$(5,1).c$$gov_nist_jama_Matrix,[this])).solve$gov_nist_jama_Matrix(B));
});

Clazz.newMeth(C$, 'solveTranspose$gov_nist_jama_Matrix',  function (B) {
return this.transpose$().solve$gov_nist_jama_Matrix(B.transpose$());
});

Clazz.newMeth(C$, 'inverse$',  function () {
return this.solve$gov_nist_jama_Matrix(C$.identity$I$I(this.m, this.m));
});

Clazz.newMeth(C$, 'det$',  function () {
return Clazz.new_($I$(3,1).c$$gov_nist_jama_Matrix,[this]).det$();
});

Clazz.newMeth(C$, 'cond$',  function () {
return 0;
});

Clazz.newMeth(C$, 'trace$',  function () {
var t=0;
for (var i=0; i < Math.min(this.m, this.n); i++) {
t+=this.A[i][i];
}
return t;
});

Clazz.newMeth(C$, 'random$I$I',  function (m, n) {
var A=Clazz.new_(C$.c$$I$I,[m, n]);
var X=A.getArray$();
for (var i=0; i < m; i++) {
for (var j=0; j < n; j++) {
X[i][j]=Math.random();
}
}
return A;
}, 1);

Clazz.newMeth(C$, 'identity$I$I',  function (m, n) {
var A=Clazz.new_(C$.c$$I$I,[m, n]);
var X=A.getArray$();
for (var i=0; i < m; i++) {
for (var j=0; j < n; j++) {
X[i][j]=(i == j ? 1.0 : 0.0);
}
}
return A;
}, 1);

Clazz.newMeth(C$, 'checkMatrixDimensions$gov_nist_jama_Matrix',  function (B) {
if (B.m != this.m || B.n != this.n ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Matrix dimensions must agree."]);
}}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:58 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
