(function(){var P$=Clazz.newPackage("gov.nist.jama"),I$=[[0,'gov.nist.jama.util.Maths','gov.nist.jama.Matrix']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SingularValueDecomposition", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['m','n'],'O',['U','double[][]','+V','s','double[]']]]

Clazz.newMeth(C$, 'c$$gov_nist_jama_Matrix',  function (Arg) {
;C$.$init$.apply(this);
var A=Arg.getArrayCopy$();
this.m=Arg.getRowDimension$();
this.n=Arg.getColumnDimension$();
var nu=Math.min(this.m, this.n);
this.s=Clazz.array(Double.TYPE, [Math.min(this.m + 1, this.n)]);
this.U=Clazz.array(Double.TYPE, [this.m, nu]);
this.V=Clazz.array(Double.TYPE, [this.n, this.n]);
var e=Clazz.array(Double.TYPE, [this.n]);
var work=Clazz.array(Double.TYPE, [this.m]);
var wantu=true;
var wantv=true;
var nct=Math.min(this.m - 1, this.n);
var nrt=Math.max(0, Math.min(this.n - 2, this.m));
for (var k=0; k < Math.max(nct, nrt); k++) {
if (k < nct) {
this.s[k]=0;
for (var i=k; i < this.m; i++) {
this.s[k]=$I$(1).hypot$D$D(this.s[k], A[i][k]);
}
if (this.s[k] != 0.0 ) {
if (A[k][k] < 0.0 ) {
this.s[k]=-this.s[k];
}for (var i=k; i < this.m; i++) {
A[i][k]/=this.s[k];
}
A[k][k]+=1.0;
}this.s[k]=-this.s[k];
}for (var j=k + 1; j < this.n; j++) {
if (!!((k < nct) & (this.s[k] != 0.0 ))) {
var t=0;
for (var i=k; i < this.m; i++) {
t+=A[i][k] * A[i][j];
}
t=-t / A[k][k];
for (var i=k; i < this.m; i++) {
A[i][j]+=t * A[i][k];
}
}e[j]=A[k][j];
}
if (!!(wantu & (k < nct))) {
for (var i=k; i < this.m; i++) {
this.U[i][k]=A[i][k];
}
}if (k < nrt) {
e[k]=0;
for (var i=k + 1; i < this.n; i++) {
e[k]=$I$(1).hypot$D$D(e[k], e[i]);
}
if (e[k] != 0.0 ) {
if (e[k + 1] < 0.0 ) {
e[k]=-e[k];
}for (var i=k + 1; i < this.n; i++) {
e[i]/=e[k];
}
e[k + 1]+=1.0;
}e[k]=-e[k];
if (!!((k + 1 < this.m) & (e[k] != 0.0 ))) {
for (var i=k + 1; i < this.m; i++) {
work[i]=0.0;
}
for (var j=k + 1; j < this.n; j++) {
for (var i=k + 1; i < this.m; i++) {
work[i]+=e[j] * A[i][j];
}
}
for (var j=k + 1; j < this.n; j++) {
var t=-e[j] / e[k + 1];
for (var i=k + 1; i < this.m; i++) {
A[i][j]+=t * work[i];
}
}
}if (wantv) {
for (var i=k + 1; i < this.n; i++) {
this.V[i][k]=e[i];
}
}}}
var p=Math.min(this.n, this.m + 1);
if (nct < this.n) {
this.s[nct]=A[nct][nct];
}if (this.m < p) {
this.s[p - 1]=0.0;
}if (nrt + 1 < p) {
e[nrt]=A[nrt][p - 1];
}e[p - 1]=0.0;
if (wantu) {
for (var j=nct; j < nu; j++) {
for (var i=0; i < this.m; i++) {
this.U[i][j]=0.0;
}
this.U[j][j]=1.0;
}
for (var k=nct - 1; k >= 0; k--) {
if (this.s[k] != 0.0 ) {
for (var j=k + 1; j < nu; j++) {
var t=0;
for (var i=k; i < this.m; i++) {
t+=this.U[i][k] * this.U[i][j];
}
t=-t / this.U[k][k];
for (var i=k; i < this.m; i++) {
this.U[i][j]+=t * this.U[i][k];
}
}
for (var i=k; i < this.m; i++) {
this.U[i][k]=-this.U[i][k];
}
this.U[k][k]=1.0 + this.U[k][k];
for (var i=0; i < k - 1; i++) {
this.U[i][k]=0.0;
}
} else {
for (var i=0; i < this.m; i++) {
this.U[i][k]=0.0;
}
this.U[k][k]=1.0;
}}
}if (wantv) {
for (var k=this.n - 1; k >= 0; k--) {
if (!!((k < nrt) & (e[k] != 0.0 ))) {
for (var j=k + 1; j < nu; j++) {
var t=0;
for (var i=k + 1; i < this.n; i++) {
t+=this.V[i][k] * this.V[i][j];
}
t=-t / this.V[k + 1][k];
for (var i=k + 1; i < this.n; i++) {
this.V[i][j]+=t * this.V[i][k];
}
}
}for (var i=0; i < this.n; i++) {
this.V[i][k]=0.0;
}
this.V[k][k]=1.0;
}
}var pp=p - 1;
var iter=0;
var eps=Math.pow(2.0, -52.0);
var tiny=Math.pow(2.0, -966.0);
while (p > 0){
var k;
var kase;
for (k=p - 2; k >= -1; k--) {
if (k == -1) {
break;
}if (Math.abs(e[k]) <= tiny + eps * (Math.abs(this.s[k]) + Math.abs(this.s[k + 1])) ) {
e[k]=0.0;
break;
}}
if (k == p - 2) {
kase=4;
} else {
var ks;
for (ks=p - 1; ks >= k; ks--) {
if (ks == k) {
break;
}var t=(ks != p ? Math.abs(e[ks]) : 0.0) + (ks != k + 1 ? Math.abs(e[ks - 1]) : 0.0);
if (Math.abs(this.s[ks]) <= tiny + eps * t ) {
this.s[ks]=0.0;
break;
}}
if (ks == k) {
kase=3;
} else if (ks == p - 1) {
kase=1;
} else {
kase=2;
k=ks;
}}++k;
switch (kase) {
case 1:
{
var f=e[p - 2];
e[p - 2]=0.0;
for (var j=p - 2; j >= k; j--) {
var t=$I$(1).hypot$D$D(this.s[j], f);
var cs=this.s[j] / t;
var sn=f / t;
this.s[j]=t;
if (j != k) {
f=-sn * e[j - 1];
e[j - 1]=cs * e[j - 1];
}if (wantv) {
for (var i=0; i < this.n; i++) {
t=cs * this.V[i][j] + sn * this.V[i][p - 1];
this.V[i][p - 1]=-sn * this.V[i][j] + cs * this.V[i][p - 1];
this.V[i][j]=t;
}
}}
}break;
case 2:
{
var f=e[k - 1];
e[k - 1]=0.0;
for (var j=k; j < p; j++) {
var t=$I$(1).hypot$D$D(this.s[j], f);
var cs=this.s[j] / t;
var sn=f / t;
this.s[j]=t;
f=-sn * e[j];
e[j]=cs * e[j];
if (wantu) {
for (var i=0; i < this.m; i++) {
t=cs * this.U[i][j] + sn * this.U[i][k - 1];
this.U[i][k - 1]=-sn * this.U[i][j] + cs * this.U[i][k - 1];
this.U[i][j]=t;
}
}}
}break;
case 3:
{
var scale=Math.max(Math.max(Math.max(Math.max(Math.abs(this.s[p - 1]), Math.abs(this.s[p - 2])), Math.abs(e[p - 2])), Math.abs(this.s[k])), Math.abs(e[k]));
var sp=this.s[p - 1] / scale;
var spm1=this.s[p - 2] / scale;
var epm1=e[p - 2] / scale;
var sk=this.s[k] / scale;
var ek=e[k] / scale;
var b=((spm1 + sp) * (spm1 - sp) + epm1 * epm1) / 2.0;
var c=(sp * epm1) * (sp * epm1);
var shift=0.0;
if (!!((b != 0.0 ) | (c != 0.0 ))) {
shift=Math.sqrt(b * b + c);
if (b < 0.0 ) {
shift=-shift;
}shift=c / (b + shift);
}var f=(sk + sp) * (sk - sp) + shift;
var g=sk * ek;
for (var j=k; j < p - 1; j++) {
var t=$I$(1).hypot$D$D(f, g);
var cs=f / t;
var sn=g / t;
if (j != k) {
e[j - 1]=t;
}f=cs * this.s[j] + sn * e[j];
e[j]=cs * e[j] - sn * this.s[j];
g=sn * this.s[j + 1];
this.s[j + 1]=cs * this.s[j + 1];
if (wantv) {
for (var i=0; i < this.n; i++) {
t=cs * this.V[i][j] + sn * this.V[i][j + 1];
this.V[i][j + 1]=-sn * this.V[i][j] + cs * this.V[i][j + 1];
this.V[i][j]=t;
}
}t=$I$(1).hypot$D$D(f, g);
cs=f / t;
sn=g / t;
this.s[j]=t;
f=cs * e[j] + sn * this.s[j + 1];
this.s[j + 1]=-sn * e[j] + cs * this.s[j + 1];
g=sn * e[j + 1];
e[j + 1]=cs * e[j + 1];
if (wantu && (j < this.m - 1) ) {
for (var i=0; i < this.m; i++) {
t=cs * this.U[i][j] + sn * this.U[i][j + 1];
this.U[i][j + 1]=-sn * this.U[i][j] + cs * this.U[i][j + 1];
this.U[i][j]=t;
}
}}
e[p - 2]=f;
iter=iter + 1;
}break;
case 4:
{
if (this.s[k] <= 0.0 ) {
this.s[k]=(this.s[k] < 0.0  ? -this.s[k] : 0.0);
if (wantv) {
for (var i=0; i <= pp; i++) {
this.V[i][k]=-this.V[i][k];
}
}}while (k < pp){
if (this.s[k] >= this.s[k + 1] ) {
break;
}var t=this.s[k];
this.s[k]=this.s[k + 1];
this.s[k + 1]=t;
if (wantv && (k < this.n - 1) ) {
for (var i=0; i < this.n; i++) {
t=this.V[i][k + 1];
this.V[i][k + 1]=this.V[i][k];
this.V[i][k]=t;
}
}if (wantu && (k < this.m - 1) ) {
for (var i=0; i < this.m; i++) {
t=this.U[i][k + 1];
this.U[i][k + 1]=this.U[i][k];
this.U[i][k]=t;
}
}++k;
}
iter=0;
--p;
}break;
}
}
}, 1);

Clazz.newMeth(C$, 'getU$',  function () {
return Clazz.new_([this.U, this.m, Math.min(this.m + 1, this.n)],$I$(2,1).c$$DAA$I$I);
});

Clazz.newMeth(C$, 'getV$',  function () {
return Clazz.new_($I$(2,1).c$$DAA$I$I,[this.V, this.n, this.n]);
});

Clazz.newMeth(C$, 'getSingularValues$',  function () {
return this.s;
});

Clazz.newMeth(C$, 'getS$',  function () {
var X=Clazz.new_($I$(2,1).c$$I$I,[this.n, this.n]);
var S=X.getArray$();
for (var i=0; i < this.n; i++) {
for (var j=0; j < this.n; j++) {
S[i][j]=0.0;
}
S[i][i]=this.s[i];
}
return X;
});

Clazz.newMeth(C$, 'norm2$',  function () {
return this.s[0];
});

Clazz.newMeth(C$, 'cond$',  function () {
return this.s[0] / this.s[Math.min(this.m, this.n) - 1];
});

Clazz.newMeth(C$, 'rank$',  function () {
var eps=Math.pow(2.0, -52.0);
var tol=Math.max(this.m, this.n) * this.s[0] * eps ;
var r=0;
for (var i=0; i < this.s.length; i++) {
if (this.s[i] > tol ) {
++r;
}}
return r;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:58 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
