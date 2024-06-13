(function(){var P$=Clazz.newPackage("gov.nist.jama"),p$1={},I$=[[0,'gov.nist.jama.util.Maths','gov.nist.jama.Matrix']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EigenvalueDecomposition", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['issymmetric','needVectors'],'D',['cdivr','cdivi'],'I',['n'],'O',['d','double[]','+e','V','double[][]','+H','ort','double[]']]
,['D',['tqleps']]]

Clazz.newMeth(C$, 'tred2',  function () {
for (var j=0; j < this.n; j++) {
this.d[j]=this.V[this.n - 1][j];
}
for (var i=this.n - 1; i > 0; i--) {
var scale=0.0;
var h=0.0;
for (var k=0; k < i; k++) {
scale=scale + Math.abs(this.d[k]);
}
if (scale == 0.0 ) {
this.e[i]=this.d[i - 1];
for (var j=0; j < i; j++) {
this.d[j]=this.V[i - 1][j];
this.V[i][j]=0.0;
this.V[j][i]=0.0;
}
} else {
for (var k=0; k < i; k++) {
this.d[k]/=scale;
h+=this.d[k] * this.d[k];
}
var f=this.d[i - 1];
var g=Math.sqrt(h);
if (f > 0 ) {
g=-g;
}this.e[i]=scale * g;
h=h - f * g;
this.d[i - 1]=f - g;
for (var j=0; j < i; j++) {
this.e[j]=0.0;
}
for (var j=0; j < i; j++) {
f=this.d[j];
this.V[j][i]=f;
g=this.e[j] + this.V[j][j] * f;
for (var k=j + 1; k <= i - 1; k++) {
g+=this.V[k][j] * this.d[k];
this.e[k]+=this.V[k][j] * f;
}
this.e[j]=g;
}
f=0.0;
for (var j=0; j < i; j++) {
this.e[j]/=h;
f+=this.e[j] * this.d[j];
}
var hh=f / (h + h);
for (var j=0; j < i; j++) {
this.e[j]-=hh * this.d[j];
}
for (var j=0; j < i; j++) {
f=this.d[j];
g=this.e[j];
for (var k=j; k <= i - 1; k++) {
this.V[k][j]-=(f * this.e[k] + g * this.d[k]);
}
this.d[j]=this.V[i - 1][j];
this.V[i][j]=0.0;
}
}this.d[i]=h;
}
for (var i=0; i < this.n - 1; i++) {
this.V[this.n - 1][i]=this.V[i][i];
this.V[i][i]=1.0;
var h=this.d[i + 1];
if (h != 0.0 ) {
for (var k=0; k <= i; k++) {
this.d[k]=this.V[k][i + 1] / h;
}
for (var j=0; j <= i; j++) {
var g=0.0;
for (var k=0; k <= i; k++) {
g+=this.V[k][i + 1] * this.V[k][j];
}
for (var k=0; k <= i; k++) {
this.V[k][j]-=g * this.d[k];
}
}
}for (var k=0; k <= i; k++) {
this.V[k][i + 1]=0.0;
}
}
for (var j=0; j < this.n; j++) {
this.d[j]=this.V[this.n - 1][j];
this.V[this.n - 1][j]=0.0;
}
this.V[this.n - 1][this.n - 1]=1.0;
this.e[0]=0.0;
}, p$1);

Clazz.newMeth(C$, 'tql2',  function () {
for (var i=1; i < this.n; i++) {
this.e[i - 1]=this.e[i];
}
this.e[this.n - 1]=0.0;
var f=0.0;
var tst1=0.0;
if (C$.tqleps == 0 ) C$.tqleps=Math.pow(2.0, -52.0);
var eps=C$.tqleps;
for (var l=0; l < this.n; l++) {
tst1=Math.max(tst1, Math.abs(this.d[l]) + Math.abs(this.e[l]));
var m=l;
while (m < this.n){
if (Math.abs(this.e[m]) <= eps * tst1 ) {
break;
}++m;
}
if (m > l) {
var iter=0;
do {
iter=iter + 1;
var g=this.d[l];
var p=(this.d[l + 1] - g) / (2.0 * this.e[l]);
var r=$I$(1).hypot$D$D(p, 1.0);
if (p < 0 ) {
r=-r;
}this.d[l]=this.e[l] / (p + r);
this.d[l + 1]=this.e[l] * (p + r);
var dl1=this.d[l + 1];
var h=g - this.d[l];
for (var i=l + 2; i < this.n; i++) {
this.d[i]-=h;
}
f=f + h;
p=this.d[m];
var c=1.0;
var c2=c;
var c3=c;
var el1=this.e[l + 1];
var s=0.0;
var s2=0.0;
for (var i=m - 1; i >= l; i--) {
c3=c2;
c2=c;
s2=s;
g=c * this.e[i];
h=c * p;
r=$I$(1).hypot$D$D(p, this.e[i]);
this.e[i + 1]=s * r;
s=this.e[i] / r;
c=p / r;
p=c * this.d[i] - s * g;
this.d[i + 1]=h + s * (c * g + s * this.d[i]);
for (var k=0; k < this.n; k++) {
h=this.V[k][i + 1];
this.V[k][i + 1]=s * this.V[k][i] + c * h;
this.V[k][i]=c * this.V[k][i] - s * h;
}
}
p=-s * s2 * c3 * el1 * this.e[l]  / dl1;
this.e[l]=s * p;
this.d[l]=c * p;
} while (Math.abs(this.e[l]) > eps * tst1 );
}this.d[l]=this.d[l] + f;
this.e[l]=0.0;
}
for (var i=0; i < this.n - 1; i++) {
var k=i;
var p=this.d[i];
for (var j=i + 1; j < this.n; j++) {
if (this.d[j] < p ) {
k=j;
p=this.d[j];
}}
if (k != i) {
this.d[k]=this.d[i];
this.d[i]=p;
for (var j=0; j < this.n; j++) {
p=this.V[j][i];
this.V[j][i]=this.V[j][k];
this.V[j][k]=p;
}
}}
}, p$1);

Clazz.newMeth(C$, 'orthes',  function () {
var low=0;
var high=this.n - 1;
for (var m=low + 1; m <= high - 1; m++) {
var scale=0.0;
for (var i=m; i <= high; i++) {
scale=scale + Math.abs(this.H[i][m - 1]);
}
if (scale != 0.0 ) {
var h=0.0;
for (var i=high; i >= m; i--) {
this.ort[i]=this.H[i][m - 1] / scale;
h+=this.ort[i] * this.ort[i];
}
var g=Math.sqrt(h);
if (this.ort[m] > 0 ) {
g=-g;
}h=h - this.ort[m] * g;
this.ort[m]=this.ort[m] - g;
for (var j=m; j < this.n; j++) {
var f=0.0;
for (var i=high; i >= m; i--) {
f+=this.ort[i] * this.H[i][j];
}
f=f / h;
for (var i=m; i <= high; i++) {
this.H[i][j]-=f * this.ort[i];
}
}
for (var i=0; i <= high; i++) {
var f=0.0;
for (var j=high; j >= m; j--) {
f+=this.ort[j] * this.H[i][j];
}
f=f / h;
for (var j=m; j <= high; j++) {
this.H[i][j]-=f * this.ort[j];
}
}
this.ort[m]=scale * this.ort[m];
this.H[m][m - 1]=scale * g;
}}
if (!this.needVectors) return;
for (var i=0; i < this.n; i++) {
for (var j=0; j < this.n; j++) {
this.V[i][j]=(i == j ? 1.0 : 0.0);
}
}
for (var m=high - 1; m >= low + 1; m--) {
if (this.H[m][m - 1] != 0.0 ) {
for (var i=m + 1; i <= high; i++) {
this.ort[i]=this.H[i][m - 1];
}
for (var j=m; j <= high; j++) {
var g=0.0;
for (var i=m; i <= high; i++) {
g+=this.ort[i] * this.V[i][j];
}
g=(g / this.ort[m]) / this.H[m][m - 1];
for (var i=m; i <= high; i++) {
this.V[i][j]+=g * this.ort[i];
}
}
}}
}, p$1);

Clazz.newMeth(C$, 'cdiv$D$D$D$D',  function (xr, xi, yr, yi) {
var r;
var d;
if (Math.abs(yr) > Math.abs(yi) ) {
r=yi / yr;
d=yr + r * yi;
this.cdivr=(xr + r * xi) / d;
this.cdivi=(xi - r * xr) / d;
} else {
r=yr / yi;
d=yi + r * yr;
this.cdivr=(r * xr + xi) / d;
this.cdivi=(r * xi - xr) / d;
}}, p$1);

Clazz.newMeth(C$, 'hqr2',  function () {
var nn=this.n;
var n=nn - 1;
var low=0;
var high=nn - 1;
if (C$.tqleps == 0 ) C$.tqleps=Math.pow(2.0, -52.0);
var eps=C$.tqleps;
var exshift=0.0;
var p=0;
var q=0;
var r=0;
var s=0;
var z=0;
var t;
var w;
var x;
var y;
var norm=0.0;
for (var i=0; i < nn; i++) {
if (!!(i < low | i > high)) {
this.d[i]=this.H[i][i];
this.e[i]=0.0;
}for (var j=Math.max(i - 1, 0); j < nn; j++) {
norm=norm + Math.abs(this.H[i][j]);
}
}
var iter=0;
while (n >= low){
var l=n;
while (l > low){
s=Math.abs(this.H[l - 1][l - 1]) + Math.abs(this.H[l][l]);
if (s == 0.0 ) {
s=norm;
}if (Math.abs(this.H[l][l - 1]) < eps * s ) {
break;
}--l;
}
if (l == n) {
this.H[n][n]=this.H[n][n] + exshift;
this.d[n]=this.H[n][n];
this.e[n]=0.0;
--n;
iter=0;
} else if (l == n - 1) {
w=this.H[n][n - 1] * this.H[n - 1][n];
p=(this.H[n - 1][n - 1] - this.H[n][n]) / 2.0;
q=p * p + w;
z=Math.sqrt(Math.abs(q));
this.H[n][n]=this.H[n][n] + exshift;
this.H[n - 1][n - 1]=this.H[n - 1][n - 1] + exshift;
x=this.H[n][n];
if (q >= 0 ) {
if (p >= 0 ) {
z=p + z;
} else {
z=p - z;
}this.d[n - 1]=x + z;
this.d[n]=this.d[n - 1];
if (z != 0.0 ) {
this.d[n]=x - w / z;
}this.e[n - 1]=0.0;
this.e[n]=0.0;
x=this.H[n][n - 1];
s=Math.abs(x) + Math.abs(z);
p=x / s;
q=z / s;
r=Math.sqrt(p * p + q * q);
p=p / r;
q=q / r;
for (var j=n - 1; j < nn; j++) {
z=this.H[n - 1][j];
this.H[n - 1][j]=q * z + p * this.H[n][j];
this.H[n][j]=q * this.H[n][j] - p * z;
}
for (var i=0; i <= n; i++) {
z=this.H[i][n - 1];
this.H[i][n - 1]=q * z + p * this.H[i][n];
this.H[i][n]=q * this.H[i][n] - p * z;
}
if (this.needVectors) for (var i=low; i <= high; i++) {
z=this.V[i][n - 1];
this.V[i][n - 1]=q * z + p * this.V[i][n];
this.V[i][n]=q * this.V[i][n] - p * z;
}
} else {
this.d[n - 1]=x + p;
this.d[n]=x + p;
this.e[n - 1]=z;
this.e[n]=-z;
}n=n - 2;
iter=0;
} else {
x=this.H[n][n];
y=0.0;
w=0.0;
if (l < n) {
y=this.H[n - 1][n - 1];
w=this.H[n][n - 1] * this.H[n - 1][n];
}if (iter == 10) {
exshift+=x;
for (var i=low; i <= n; i++) {
this.H[i][i]-=x;
}
s=Math.abs(this.H[n][n - 1]) + Math.abs(this.H[n - 1][n - 2]);
x=y=0.75 * s;
w=-0.4375 * s * s ;
}if (iter == 30) {
s=(y - x) / 2.0;
s=s * s + w;
if (s > 0 ) {
s=Math.sqrt(s);
if (y < x ) {
s=-s;
}s=x - w / ((y - x) / 2.0 + s);
for (var i=low; i <= n; i++) {
this.H[i][i]-=s;
}
exshift+=s;
x=y=w=0.964;
}}iter=iter + 1;
var m=n - 2;
while (m >= l){
z=this.H[m][m];
r=x - z;
s=y - z;
p=(r * s - w) / this.H[m + 1][m] + this.H[m][m + 1];
q=this.H[m + 1][m + 1] - z - r - s ;
r=this.H[m + 2][m + 1];
s=Math.abs(p) + Math.abs(q) + Math.abs(r) ;
p=p / s;
q=q / s;
r=r / s;
if (m == l) {
break;
}if (Math.abs(this.H[m][m - 1]) * (Math.abs(q) + Math.abs(r)) < eps * (Math.abs(p) * (Math.abs(this.H[m - 1][m - 1]) + Math.abs(z) + Math.abs(this.H[m + 1][m + 1]) )) ) {
break;
}--m;
}
for (var i=m + 2; i <= n; i++) {
this.H[i][i - 2]=0.0;
if (i > m + 2) {
this.H[i][i - 3]=0.0;
}}
for (var k=m; k <= n - 1; k++) {
var notlast=(k != n - 1);
if (k != m) {
p=this.H[k][k - 1];
q=this.H[k + 1][k - 1];
r=(notlast ? this.H[k + 2][k - 1] : 0.0);
x=Math.abs(p) + Math.abs(q) + Math.abs(r) ;
if (x == 0.0 ) {
continue;
}p=p / x;
q=q / x;
r=r / x;
}s=Math.sqrt(p * p + q * q + r * r);
if (p < 0 ) {
s=-s;
}if (s != 0 ) {
if (k != m) {
this.H[k][k - 1]=-s * x;
} else if (l != m) {
this.H[k][k - 1]=-this.H[k][k - 1];
}p=p + s;
x=p / s;
y=q / s;
z=r / s;
q=q / p;
r=r / p;
for (var j=k; j < nn; j++) {
p=this.H[k][j] + q * this.H[k + 1][j];
if (notlast) {
p=p + r * this.H[k + 2][j];
this.H[k + 2][j]=this.H[k + 2][j] - p * z;
}this.H[k][j]=this.H[k][j] - p * x;
this.H[k + 1][j]=this.H[k + 1][j] - p * y;
}
for (var i=0; i <= Math.min(n, k + 3); i++) {
p=x * this.H[i][k] + y * this.H[i][k + 1];
if (notlast) {
p=p + z * this.H[i][k + 2];
this.H[i][k + 2]=this.H[i][k + 2] - p * r;
}this.H[i][k]=this.H[i][k] - p;
this.H[i][k + 1]=this.H[i][k + 1] - p * q;
}
if (this.needVectors) for (var i=low; i <= high; i++) {
p=x * this.V[i][k] + y * this.V[i][k + 1];
if (notlast) {
p=p + z * this.V[i][k + 2];
this.V[i][k + 2]=this.V[i][k + 2] - p * r;
}this.V[i][k]=this.V[i][k] - p;
this.V[i][k + 1]=this.V[i][k + 1] - p * q;
}
}}
}}
if (norm == 0.0  || !this.needVectors ) {
return;
}for (n=nn - 1; n >= 0; n--) {
p=this.d[n];
q=this.e[n];
if (q == 0 ) {
var l=n;
this.H[n][n]=1.0;
for (var i=n - 1; i >= 0; i--) {
w=this.H[i][i] - p;
r=0.0;
for (var j=l; j <= n; j++) {
r=r + this.H[i][j] * this.H[j][n];
}
if (this.e[i] < 0.0 ) {
z=w;
s=r;
} else {
l=i;
if (this.e[i] == 0.0 ) {
if (w != 0.0 ) {
this.H[i][n]=-r / w;
} else {
this.H[i][n]=-r / (eps * norm);
}} else {
x=this.H[i][i + 1];
y=this.H[i + 1][i];
q=(this.d[i] - p) * (this.d[i] - p) + this.e[i] * this.e[i];
t=(x * s - z * r) / q;
this.H[i][n]=t;
if (Math.abs(x) > Math.abs(z) ) {
this.H[i + 1][n]=(-r - w * t) / x;
} else {
this.H[i + 1][n]=(-s - y * t) / z;
}}t=Math.abs(this.H[i][n]);
if ((eps * t) * t > 1 ) {
for (var j=i; j <= n; j++) {
this.H[j][n]=this.H[j][n] / t;
}
}}}
} else if (q < 0 ) {
var l=n - 1;
if (Math.abs(this.H[n][n - 1]) > Math.abs(this.H[n - 1][n]) ) {
this.H[n - 1][n - 1]=q / this.H[n][n - 1];
this.H[n - 1][n]=-(this.H[n][n] - p) / this.H[n][n - 1];
} else {
p$1.cdiv$D$D$D$D.apply(this, [0.0, -this.H[n - 1][n], this.H[n - 1][n - 1] - p, q]);
this.H[n - 1][n - 1]=this.cdivr;
this.H[n - 1][n]=this.cdivi;
}this.H[n][n - 1]=0.0;
this.H[n][n]=1.0;
for (var i=n - 2; i >= 0; i--) {
var ra;
var sa;
var vr;
var vi;
ra=0.0;
sa=0.0;
for (var j=l; j <= n; j++) {
ra=ra + this.H[i][j] * this.H[j][n - 1];
sa=sa + this.H[i][j] * this.H[j][n];
}
w=this.H[i][i] - p;
if (this.e[i] < 0.0 ) {
z=w;
r=ra;
s=sa;
} else {
l=i;
if (this.e[i] == 0 ) {
p$1.cdiv$D$D$D$D.apply(this, [-ra, -sa, w, q]);
this.H[i][n - 1]=this.cdivr;
this.H[i][n]=this.cdivi;
} else {
x=this.H[i][i + 1];
y=this.H[i + 1][i];
vr=(this.d[i] - p) * (this.d[i] - p) + this.e[i] * this.e[i] - q * q;
vi=(this.d[i] - p) * 2.0 * q ;
if (!!(vr == 0.0  & vi == 0.0 )) {
vr=eps * norm * (Math.abs(w) + Math.abs(q) + Math.abs(x) + Math.abs(y) + Math.abs(z) ) ;
}p$1.cdiv$D$D$D$D.apply(this, [x * r - z * ra + q * sa, x * s - z * sa - q * ra, vr, vi]);
this.H[i][n - 1]=this.cdivr;
this.H[i][n]=this.cdivi;
if (Math.abs(x) > (Math.abs(z) + Math.abs(q)) ) {
this.H[i + 1][n - 1]=(-ra - w * this.H[i][n - 1] + q * this.H[i][n]) / x;
this.H[i + 1][n]=(-sa - w * this.H[i][n] - q * this.H[i][n - 1]) / x;
} else {
p$1.cdiv$D$D$D$D.apply(this, [-r - y * this.H[i][n - 1], -s - y * this.H[i][n], z, q]);
this.H[i + 1][n - 1]=this.cdivr;
this.H[i + 1][n]=this.cdivi;
}}t=Math.max(Math.abs(this.H[i][n - 1]), Math.abs(this.H[i][n]));
if ((eps * t) * t > 1 ) {
for (var j=i; j <= n; j++) {
this.H[j][n - 1]=this.H[j][n - 1] / t;
this.H[j][n]=this.H[j][n] / t;
}
}}}
}}
for (var i=0; i < nn; i++) {
if (!!(i < low | i > high)) {
for (var j=i; j < nn; j++) {
this.V[i][j]=this.H[i][j];
}
}}
for (var j=nn - 1; j >= low; j--) {
for (var i=low; i <= high; i++) {
z=0.0;
for (var k=low; k <= Math.min(j, high); k++) {
z=z + this.V[i][k] * this.H[k][j];
}
this.V[i][j]=z;
}
}
}, p$1);

Clazz.newMeth(C$, 'c$$gov_nist_jama_Matrix$Z',  function (Arg, nv) {
;C$.$init$.apply(this);
var A=Arg.getArray$();
this.n=Arg.getColumnDimension$();
this.V=Clazz.array(Double.TYPE, [this.n, this.n]);
this.d=Clazz.array(Double.TYPE, [this.n]);
this.e=Clazz.array(Double.TYPE, [this.n]);
this.needVectors=nv;
this.issymmetric=true;
for (var j=0; !!((j < this.n) & this.issymmetric); j++) {
for (var i=0; !!((i < this.n) & this.issymmetric); i++) {
this.issymmetric=(A[i][j] == A[j][i] );
}
}
if (this.issymmetric) {
for (var i=0; i < this.n; i++) {
for (var j=0; j < this.n; j++) {
this.V[i][j]=A[i][j];
}
}
p$1.tred2.apply(this, []);
p$1.tql2.apply(this, []);
} else {
this.H=Clazz.array(Double.TYPE, [this.n, this.n]);
this.ort=Clazz.array(Double.TYPE, [this.n]);
for (var j=0; j < this.n; j++) {
for (var i=0; i < this.n; i++) {
this.H[i][j]=A[i][j];
}
}
p$1.orthes.apply(this, []);
p$1.hqr2.apply(this, []);
}}, 1);

Clazz.newMeth(C$, 'getV$',  function () {
return Clazz.new_($I$(2,1).c$$DAA$I$I,[this.V, this.n, this.n]);
});

Clazz.newMeth(C$, 'getRealEigenvalues$',  function () {
return this.d;
});

Clazz.newMeth(C$, 'getImagEigenvalues$',  function () {
return this.e;
});

Clazz.newMeth(C$, 'getD$',  function () {
var X=Clazz.new_($I$(2,1).c$$I$I,[this.n, this.n]);
var D=X.getArray$();
for (var i=0; i < this.n; i++) {
for (var j=0; j < this.n; j++) {
D[i][j]=0.0;
}
D[i][i]=this.d[i];
if (this.e[i] > 0 ) {
D[i][i + 1]=this.e[i];
} else if (this.e[i] < 0 ) {
D[i][i - 1]=this.e[i];
}}
return X;
});

C$.$static$=function(){C$.$static$=0;
C$.tqleps=0;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:58 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
