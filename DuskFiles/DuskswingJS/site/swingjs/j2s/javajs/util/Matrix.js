(function(){var P$=Clazz.newPackage("javajs.util"),I$=[[0,['javajs.util.Matrix','.LUDecomp']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Matrix", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'Cloneable');
C$.$classes$=[['LUDecomp',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['m','n'],'O',['a','double[][]']]]

Clazz.newMeth(C$, 'c$$DAA$I$I',  function (a, m, n) {
;C$.$init$.apply(this);
this.a=(a == null  ? Clazz.array(Double.TYPE, [m, n]) : a);
this.m=m;
this.n=n;
}, 1);

Clazz.newMeth(C$, 'getRowDimension$',  function () {
return this.m;
});

Clazz.newMeth(C$, 'getColumnDimension$',  function () {
return this.n;
});

Clazz.newMeth(C$, 'getArray$',  function () {
return this.a;
});

Clazz.newMeth(C$, 'getArrayCopy$',  function () {
var x=Clazz.array(Double.TYPE, [this.m, this.n]);
for (var i=this.m; --i >= 0; ) for (var j=this.n; --j >= 0; ) x[i][j]=this.a[i][j];


return x;
});

Clazz.newMeth(C$, 'copy$',  function () {
var x=Clazz.new_(C$.c$$DAA$I$I,[null, this.m, this.n]);
var c=x.a;
for (var i=this.m; --i >= 0; ) for (var j=this.n; --j >= 0; ) c[i][j]=this.a[i][j];


return x;
});

Clazz.newMeth(C$, 'clone$',  function () {
return this.copy$();
});

Clazz.newMeth(C$, 'getSubmatrix$I$I$I$I',  function (i0, j0, nrows, ncols) {
var x=Clazz.new_(C$.c$$DAA$I$I,[null, nrows, ncols]);
var xa=x.a;
for (var i=nrows; --i >= 0; ) for (var j=ncols; --j >= 0; ) xa[i][j]=this.a[i0 + i][j0 + j];


return x;
});

Clazz.newMeth(C$, 'getMatrixSelected$IA$I',  function (r, n) {
var x=Clazz.new_(C$.c$$DAA$I$I,[null, r.length, n]);
var xa=x.a;
for (var i=r.length; --i >= 0; ) {
var b=this.a[r[i]];
for (var j=n; --j >= 0; ) xa[i][j]=b[j];

}
return x;
});

Clazz.newMeth(C$, 'transpose$',  function () {
var x=Clazz.new_(C$.c$$DAA$I$I,[null, this.n, this.m]);
var c=x.a;
for (var i=this.m; --i >= 0; ) for (var j=this.n; --j >= 0; ) c[j][i]=this.a[i][j];


return x;
});

Clazz.newMeth(C$, 'add$javajs_util_Matrix',  function (b) {
return this.scaleAdd$javajs_util_Matrix$D(b, 1);
});

Clazz.newMeth(C$, 'sub$javajs_util_Matrix',  function (b) {
return this.scaleAdd$javajs_util_Matrix$D(b, -1);
});

Clazz.newMeth(C$, 'scaleAdd$javajs_util_Matrix$D',  function (b, scale) {
var x=Clazz.new_(C$.c$$DAA$I$I,[null, this.m, this.n]);
var xa=x.a;
var ba=b.a;
for (var i=this.m; --i >= 0; ) for (var j=this.n; --j >= 0; ) xa[i][j]=ba[i][j] * scale + this.a[i][j];


return x;
});

Clazz.newMeth(C$, 'mul$javajs_util_Matrix',  function (b) {
if (b.m != this.n) return null;
var x=Clazz.new_(C$.c$$DAA$I$I,[null, this.m, b.n]);
var xa=x.a;
var ba=b.a;
for (var j=b.n; --j >= 0; ) for (var i=this.m; --i >= 0; ) {
var arowi=this.a[i];
var s=0;
for (var k=this.n; --k >= 0; ) s+=arowi[k] * ba[k][j];

xa[i][j]=s;
}

return x;
});

Clazz.newMeth(C$, 'inverse$',  function () {
return Clazz.new_($I$(1,1).c$$I$I,[this, null, this.m, this.n]).solve$javajs_util_Matrix$I(C$.identity$I$I(this.m, this.m), this.n);
});

Clazz.newMeth(C$, 'trace$',  function () {
var t=0;
for (var i=Math.min(this.m, this.n); --i >= 0; ) t+=this.a[i][i];

return t;
});

Clazz.newMeth(C$, 'identity$I$I',  function (m, n) {
var x=Clazz.new_(C$.c$$DAA$I$I,[null, m, n]);
var xa=x.a;
for (var i=Math.min(m, n); --i >= 0; ) xa[i][i]=1;

return x;
}, 1);

Clazz.newMeth(C$, 'getRotation$',  function () {
return this.getSubmatrix$I$I$I$I(0, 0, this.m - 1, this.n - 1);
});

Clazz.newMeth(C$, 'getTranslation$',  function () {
return this.getSubmatrix$I$I$I$I(0, this.n - 1, this.m - 1, 1);
});

Clazz.newMeth(C$, 'newT$javajs_util_T3$Z',  function (r, asColumn) {
return (asColumn ? Clazz.new_(C$.c$$DAA$I$I,[Clazz.array(Double.TYPE, -2, [Clazz.array(Double.TYPE, -1, [r.x]), Clazz.array(Double.TYPE, -1, [r.y]), Clazz.array(Double.TYPE, -1, [r.z])]), 3, 1]) : Clazz.new_(C$.c$$DAA$I$I,[Clazz.array(Double.TYPE, -2, [Clazz.array(Double.TYPE, -1, [r.x, r.y, r.z])]), 1, 3]));
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
var s="[\n";
for (var i=0; i < this.m; i++) {
s+="  [";
for (var j=0; j < this.n; j++) s+=" " + new Double(this.a[i][j]).toString();

s+="]\n";
}
s+="]";
return s;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.Matrix, "LUDecomp", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['pivsign'],'O',['LU','double[][]','piv','int[]']]]

Clazz.newMeth(C$, 'c$$I$I',  function (m, n) {
;C$.$init$.apply(this);
this.LU=this.b$['javajs.util.Matrix'].getArrayCopy$.apply(this.b$['javajs.util.Matrix'], []);
this.piv=Clazz.array(Integer.TYPE, [m]);
for (var i=m; --i >= 0; ) this.piv[i]=i;

this.pivsign=1;
var LUrowi;
var LUcolj=Clazz.array(Double.TYPE, [m]);
for (var j=0; j < n; j++) {
for (var i=m; --i >= 0; ) LUcolj[i]=this.LU[i][j];

for (var i=m; --i >= 0; ) {
LUrowi=this.LU[i];
var kmax=Math.min(i, j);
var s=0.0;
for (var k=kmax; --k >= 0; ) s+=LUrowi[k] * LUcolj[k];

LUrowi[j]=LUcolj[i]-=s;
}
var p=j;
for (var i=m; --i > j; ) if (Math.abs(LUcolj[i]) > Math.abs(LUcolj[p]) ) p=i;

if (p != j) {
for (var k=n; --k >= 0; ) {
var t=this.LU[p][k];
this.LU[p][k]=this.LU[j][k];
this.LU[j][k]=t;
}
var k=this.piv[p];
this.piv[p]=this.piv[j];
this.piv[j]=k;
this.pivsign=-this.pivsign;
}if (!!(j < m & this.LU[j][j] != 0.0 )) for (var i=m; --i > j; ) this.LU[i][j]/=this.LU[j][j];

}
}, 1);

Clazz.newMeth(C$, 'solve$javajs_util_Matrix$I',  function (b, n) {
for (var j=0; j < n; j++) if (this.LU[j][j] == 0 ) return null;

var nx=b.n;
var x=b.getMatrixSelected$IA$I(this.piv, nx);
var a=x.a;
for (var k=0; k < n; k++) for (var i=k + 1; i < n; i++) for (var j=0; j < nx; j++) a[i][j]-=a[k][j] * this.LU[i][k];



for (var k=n; --k >= 0; ) {
for (var j=nx; --j >= 0; ) a[k][j]/=this.LU[k][k];

for (var i=k; --i >= 0; ) for (var j=nx; --j >= 0; ) a[i][j]-=a[k][j] * this.LU[i][k];


}
return x;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:46 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
