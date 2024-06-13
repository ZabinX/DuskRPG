(function(){var P$=Clazz.newPackage("sun.awt.geom"),I$=[[0,'java.util.Vector',['sun.awt.geom.Crossings','.EvenOdd'],'sun.awt.geom.Curve']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Crossings", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['EvenOdd',25],['NonZero',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.limit=0;
this.yranges=Clazz.array(Double.TYPE, [10]);
this.tmp=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['D',['xlo','ylo','xhi','yhi'],'I',['limit'],'O',['yranges','double[]','tmp','java.util.Vector']]]

Clazz.newMeth(C$, 'c$$D$D$D$D',  function (xlo, ylo, xhi, yhi) {
;C$.$init$.apply(this);
this.xlo=xlo;
this.ylo=ylo;
this.xhi=xhi;
this.yhi=yhi;
}, 1);

Clazz.newMeth(C$, 'getXLo$',  function () {
return this.xlo;
});

Clazz.newMeth(C$, 'getYLo$',  function () {
return this.ylo;
});

Clazz.newMeth(C$, 'getXHi$',  function () {
return this.xhi;
});

Clazz.newMeth(C$, 'getYHi$',  function () {
return this.yhi;
});

Clazz.newMeth(C$, 'print$',  function () {
System.out.println$S("Crossings [");
System.out.println$S("  bounds = [" + new Double(this.ylo).toString() + ", " + new Double(this.yhi).toString() + "]" );
for (var i=0; i < this.limit; i+=2) {
System.out.println$S("  [" + new Double(this.yranges[i]).toString() + ", " + new Double(this.yranges[i + 1]).toString() + "]" );
}
System.out.println$S("]");
});

Clazz.newMeth(C$, 'isEmpty$',  function () {
return (this.limit == 0);
});

Clazz.newMeth(C$, 'findCrossings$java_util_Vector$D$D$D$D',  function (curves, xlo, ylo, xhi, yhi) {
var cross=Clazz.new_($I$(2,1).c$$D$D$D$D,[xlo, ylo, xhi, yhi]);
var enum_=curves.elements$();
while (enum_.hasMoreElements$()){
var c=enum_.nextElement$();
if (c.accumulateCrossings$sun_awt_geom_Crossings(cross)) {
return null;
}}
return cross;
}, 1);

Clazz.newMeth(C$, 'accumulateLine$D$D$D$D',  function (x0, y0, x1, y1) {
if (y0 <= y1 ) {
return this.accumulateLine$D$D$D$D$I(x0, y0, x1, y1, 1);
} else {
return this.accumulateLine$D$D$D$D$I(x1, y1, x0, y0, -1);
}});

Clazz.newMeth(C$, 'accumulateLine$D$D$D$D$I',  function (x0, y0, x1, y1, direction) {
if (this.yhi <= y0  || this.ylo >= y1  ) {
return false;
}if (x0 >= this.xhi  && x1 >= this.xhi  ) {
return false;
}if (y0 == y1 ) {
return (x0 >= this.xlo  || x1 >= this.xlo  );
}var xstart;
var ystart;
var xend;
var yend;
var dx=(x1 - x0);
var dy=(y1 - y0);
if (y0 < this.ylo ) {
xstart=x0 + (this.ylo - y0) * dx / dy;
ystart=this.ylo;
} else {
xstart=x0;
ystart=y0;
}if (this.yhi < y1 ) {
xend=x0 + (this.yhi - y0) * dx / dy;
yend=this.yhi;
} else {
xend=x1;
yend=y1;
}if (xstart >= this.xhi  && xend >= this.xhi  ) {
return false;
}if (xstart > this.xlo  || xend > this.xlo  ) {
return true;
}this.record$D$D$I(ystart, yend, direction);
return false;
});

Clazz.newMeth(C$, 'accumulateQuad$D$D$DA',  function (x0, y0, coords) {
if (y0 < this.ylo  && coords[1] < this.ylo   && coords[3] < this.ylo  ) {
return false;
}if (y0 > this.yhi  && coords[1] > this.yhi   && coords[3] > this.yhi  ) {
return false;
}if (x0 > this.xhi  && coords[0] > this.xhi   && coords[2] > this.xhi  ) {
return false;
}if (x0 < this.xlo  && coords[0] < this.xlo   && coords[2] < this.xlo  ) {
if (y0 < coords[3] ) {
this.record$D$D$I(Math.max(y0, this.ylo), Math.min(coords[3], this.yhi), 1);
} else if (y0 > coords[3] ) {
this.record$D$D$I(Math.max(coords[3], this.ylo), Math.min(y0, this.yhi), -1);
}return false;
}$I$(3).insertQuad$java_util_Vector$D$D$DA(this.tmp, x0, y0, coords);
var enum_=this.tmp.elements$();
while (enum_.hasMoreElements$()){
var c=enum_.nextElement$();
if (c.accumulateCrossings$sun_awt_geom_Crossings(this)) {
return true;
}}
this.tmp.clear$();
return false;
});

Clazz.newMeth(C$, 'accumulateCubic$D$D$DA',  function (x0, y0, coords) {
if (y0 < this.ylo  && coords[1] < this.ylo   && coords[3] < this.ylo   && coords[5] < this.ylo  ) {
return false;
}if (y0 > this.yhi  && coords[1] > this.yhi   && coords[3] > this.yhi   && coords[5] > this.yhi  ) {
return false;
}if (x0 > this.xhi  && coords[0] > this.xhi   && coords[2] > this.xhi   && coords[4] > this.xhi  ) {
return false;
}if (x0 < this.xlo  && coords[0] < this.xlo   && coords[2] < this.xlo   && coords[4] < this.xlo  ) {
if (y0 <= coords[5] ) {
this.record$D$D$I(Math.max(y0, this.ylo), Math.min(coords[5], this.yhi), 1);
} else {
this.record$D$D$I(Math.max(coords[5], this.ylo), Math.min(y0, this.yhi), -1);
}return false;
}$I$(3).insertCubic$java_util_Vector$D$D$DA(this.tmp, x0, y0, coords);
var enum_=this.tmp.elements$();
while (enum_.hasMoreElements$()){
var c=enum_.nextElement$();
if (c.accumulateCrossings$sun_awt_geom_Crossings(this)) {
return true;
}}
this.tmp.clear$();
return false;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.Crossings, "EvenOdd", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'sun.awt.geom.Crossings');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$D$D$D$D',  function (xlo, ylo, xhi, yhi) {
;C$.superclazz.c$$D$D$D$D.apply(this,[xlo, ylo, xhi, yhi]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'covers$D$D',  function (ystart, yend) {
return (this.limit == 2 && this.yranges[0] <= ystart   && this.yranges[1] >= yend  );
});

Clazz.newMeth(C$, 'record$D$D$I',  function (ystart, yend, direction) {
if (ystart >= yend ) {
return;
}var from=0;
while (from < this.limit && ystart > this.yranges[from + 1]  ){
from+=2;
}
var to=from;
while (from < this.limit){
var yrlo=this.yranges[from++];
var yrhi=this.yranges[from++];
if (yend < yrlo ) {
this.yranges[to++]=ystart;
this.yranges[to++]=yend;
ystart=yrlo;
yend=yrhi;
continue;
}var yll;
var ylh;
var yhl;
var yhh;
if (ystart < yrlo ) {
yll=ystart;
ylh=yrlo;
} else {
yll=yrlo;
ylh=ystart;
}if (yend < yrhi ) {
yhl=yend;
yhh=yrhi;
} else {
yhl=yrhi;
yhh=yend;
}if (ylh == yhl ) {
ystart=yll;
yend=yhh;
} else {
if (ylh > yhl ) {
ystart=yhl;
yhl=ylh;
ylh=ystart;
}if (yll != ylh ) {
this.yranges[to++]=yll;
this.yranges[to++]=ylh;
}ystart=yhl;
yend=yhh;
}if (ystart >= yend ) {
break;
}}
if (to < from && from < this.limit ) {
System.arraycopy$O$I$O$I$I(this.yranges, from, this.yranges, to, this.limit - from);
}to+=(this.limit - from);
if (ystart < yend ) {
if (to >= this.yranges.length) {
var newranges=Clazz.array(Double.TYPE, [to + 10]);
System.arraycopy$O$I$O$I$I(this.yranges, 0, newranges, 0, to);
this.yranges=newranges;
}this.yranges[to++]=ystart;
this.yranges[to++]=yend;
}this.limit=to;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Crossings, "NonZero", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'sun.awt.geom.Crossings');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['crosscounts','int[]']]]

Clazz.newMeth(C$, 'c$$D$D$D$D',  function (xlo, ylo, xhi, yhi) {
;C$.superclazz.c$$D$D$D$D.apply(this,[xlo, ylo, xhi, yhi]);C$.$init$.apply(this);
this.crosscounts=Clazz.array(Integer.TYPE, [(this.yranges.length/2|0)]);
}, 1);

Clazz.newMeth(C$, 'covers$D$D',  function (ystart, yend) {
var i=0;
while (i < this.limit){
var ylo=this.yranges[i++];
var yhi=this.yranges[i++];
if (ystart >= yhi ) {
continue;
}if (ystart < ylo ) {
return false;
}if (yend <= yhi ) {
return true;
}ystart=yhi;
}
return (ystart >= yend );
});

Clazz.newMeth(C$, 'remove$I',  function (cur) {
this.limit-=2;
var rem=this.limit - cur;
if (rem > 0) {
System.arraycopy$O$I$O$I$I(this.yranges, cur + 2, this.yranges, cur, rem);
System.arraycopy$O$I$O$I$I(this.crosscounts, (cur/2|0) + 1, this.crosscounts, (cur/2|0), (rem/2|0));
}});

Clazz.newMeth(C$, 'insert$I$D$D$I',  function (cur, lo, hi, dir) {
var rem=this.limit - cur;
var oldranges=this.yranges;
var oldcounts=this.crosscounts;
if (this.limit >= this.yranges.length) {
this.yranges=Clazz.array(Double.TYPE, [this.limit + 10]);
System.arraycopy$O$I$O$I$I(oldranges, 0, this.yranges, 0, cur);
this.crosscounts=Clazz.array(Integer.TYPE, [((this.limit + 10)/2|0)]);
System.arraycopy$O$I$O$I$I(oldcounts, 0, this.crosscounts, 0, (cur/2|0));
}if (rem > 0) {
System.arraycopy$O$I$O$I$I(oldranges, cur, this.yranges, cur + 2, rem);
System.arraycopy$O$I$O$I$I(oldcounts, (cur/2|0), this.crosscounts, (cur/2|0) + 1, (rem/2|0));
}this.yranges[cur + 0]=lo;
this.yranges[cur + 1]=hi;
this.crosscounts[(cur/2|0)]=dir;
this.limit+=2;
});

Clazz.newMeth(C$, 'record$D$D$I',  function (ystart, yend, direction) {
if (ystart >= yend ) {
return;
}var cur=0;
while (cur < this.limit && ystart > this.yranges[cur + 1]  ){
cur+=2;
}
if (cur < this.limit) {
var rdir=this.crosscounts[(cur/2|0)];
var yrlo=this.yranges[cur + 0];
var yrhi=this.yranges[cur + 1];
if (yrhi == ystart  && rdir == direction ) {
if (cur + 2 == this.limit) {
this.yranges[cur + 1]=yend;
return;
}this.remove$I(cur);
ystart=yrlo;
rdir=this.crosscounts[(cur/2|0)];
yrlo=this.yranges[cur + 0];
yrhi=this.yranges[cur + 1];
}if (yend < yrlo ) {
this.insert$I$D$D$I(cur, ystart, yend, direction);
return;
}if (yend == yrlo  && rdir == direction ) {
this.yranges[cur]=ystart;
return;
}if (ystart < yrlo ) {
this.insert$I$D$D$I(cur, ystart, yrlo, direction);
cur+=2;
ystart=yrlo;
} else if (yrlo < ystart ) {
this.insert$I$D$D$I(cur, yrlo, ystart, rdir);
cur+=2;
yrlo=ystart;
}var newdir=rdir + direction;
var newend=Math.min(yend, yrhi);
if (newdir == 0) {
this.remove$I(cur);
} else {
this.crosscounts[(cur/2|0)]=newdir;
this.yranges[cur++]=ystart;
this.yranges[cur++]=newend;
}ystart=yrlo=newend;
if (yrlo < yrhi ) {
this.insert$I$D$D$I(cur, yrlo, yrhi, rdir);
}}if (ystart < yend ) {
this.insert$I$D$D$I(cur, ystart, yend, direction);
}});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:43 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
