(function(){var P$=Clazz.newPackage("sun.font"),p$1={},p$2={},I$=[[0,'Math',['sun.font.LayoutPathImpl','.EndType'],['sun.font.LayoutPathImpl','.SegmentPath'],['sun.font.LayoutPathImpl','.SegmentPath','.LineInfo'],'java.awt.geom.GeneralPath','java.util.ArrayList',['sun.font.LayoutPathImpl','.SegmentPath','.Segment'],['java.awt.geom.Point2D','.Double'],['sun.font.LayoutPathImpl','.SegmentPathBuilder'],['sun.font.LayoutPathImpl','.SegmentPath','.Mapper'],'StringBuilder']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LayoutPathImpl", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.awt.font.LayoutPath');
C$.$classes$=[['EndType',25],['SegmentPathBuilder',25],['SegmentPath',25],['EmptyPath',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'pointToPath$D$D',  function (x, y) {
var pt=Clazz.new_($I$(8,1).c$$D$D,[x, y]);
this.pointToPath$java_awt_geom_Point2D$java_awt_geom_Point2D(pt, pt);
return pt;
});

Clazz.newMeth(C$, 'pathToPoint$D$D$Z',  function (a, o, preceding) {
var pt=Clazz.new_($I$(8,1).c$$D$D,[a, o]);
this.pathToPoint$java_awt_geom_Point2D$Z$java_awt_geom_Point2D(pt, preceding, pt);
return pt;
});

Clazz.newMeth(C$, 'pointToPath$D$D$java_awt_geom_Point2D',  function (x, y, pt) {
pt.setLocation$D$D(x, y);
this.pointToPath$java_awt_geom_Point2D$java_awt_geom_Point2D(pt, pt);
});

Clazz.newMeth(C$, 'pathToPoint$D$D$Z$java_awt_geom_Point2D',  function (a, o, preceding, pt) {
pt.setLocation$D$D(a, o);
this.pathToPoint$java_awt_geom_Point2D$Z$java_awt_geom_Point2D(pt, preceding, pt);
});

Clazz.newMeth(C$, 'getPath$sun_font_LayoutPathImpl_EndType$DA',  function (etype, coords) {
if ((coords.length & 1) != 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["odd number of points not allowed"]);
}return $I$(3).get$sun_font_LayoutPathImpl_EndType$DA(etype, coords);
}, 1);
;
(function(){/*e*/var C$=Clazz.newClass(P$.LayoutPathImpl, "EndType", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'isPinned$',  function () {
return this === C$.PINNED ;
});

Clazz.newMeth(C$, 'isExtended$',  function () {
return this === C$.EXTENDED ;
});

Clazz.newMeth(C$, 'isClosed$',  function () {
return this === C$.CLOSED ;
});

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "PINNED", 0, []);
Clazz.newEnumConst($vals, C$.c$, "EXTENDED", 1, []);
Clazz.newEnumConst($vals, C$.c$, "CLOSED", 2, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LayoutPathImpl, "SegmentPathBuilder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['pconnect'],'D',['px','py','a'],'I',['w'],'O',['data','double[]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'reset$I',  function (datalen) {
if (this.data == null  || datalen > this.data.length ) {
this.data=Clazz.array(Double.TYPE, [datalen]);
} else if (datalen == 0) {
this.data=null;
}this.w=0;
this.px=this.py=0;
this.pconnect=false;
});

Clazz.newMeth(C$, 'build$sun_font_LayoutPathImpl_EndType$DA',  function (etype, pts) {
Clazz.assert(C$, this, function(){return (pts.length % 2 == 0)});
this.reset$I((pts.length/2|0) * 3);
for (var i=0; i < pts.length; i+=2) {
p$1.nextPoint$D$D$Z.apply(this, [pts[i], pts[i + 1], i != 0]);
}
return this.complete$sun_font_LayoutPathImpl_EndType(etype);
});

Clazz.newMeth(C$, 'moveTo$D$D',  function (x, y) {
p$1.nextPoint$D$D$Z.apply(this, [x, y, false]);
});

Clazz.newMeth(C$, 'lineTo$D$D',  function (x, y) {
p$1.nextPoint$D$D$Z.apply(this, [x, y, true]);
});

Clazz.newMeth(C$, 'nextPoint$D$D$Z',  function (x, y, connect) {
if (x == this.px  && y == this.py  ) {
return;
}if (this.w == 0) {
if (this.data == null ) {
this.data=Clazz.array(Double.TYPE, [6]);
}if (connect) {
this.w=3;
}}if (this.w != 0 && !connect  && !this.pconnect ) {
this.data[this.w - 3]=this.px=x;
this.data[this.w - 2]=this.py=y;
return;
}if (this.w == this.data.length) {
var t=Clazz.array(Double.TYPE, [this.w * 2]);
System.arraycopy$O$I$O$I$I(this.data, 0, t, 0, this.w);
this.data=t;
}if (connect) {
var dx=x - this.px;
var dy=y - this.py;
this.a+=$I$(1).sqrt(dx * dx + dy * dy);
}this.data[this.w++]=x;
this.data[this.w++]=y;
this.data[this.w++]=this.a;
this.px=x;
this.py=y;
this.pconnect=connect;
}, p$1);

Clazz.newMeth(C$, 'complete$',  function () {
return this.complete$sun_font_LayoutPathImpl_EndType($I$(2).EXTENDED);
});

Clazz.newMeth(C$, 'complete$sun_font_LayoutPathImpl_EndType',  function (etype) {
var result;
if (this.data == null  || this.w < 6 ) {
return null;
}if (this.w == this.data.length) {
result=Clazz.new_($I$(3,1).c$$DA$sun_font_LayoutPathImpl_EndType,[this.data, etype]);
this.reset$I(0);
} else {
var dataToAdopt=Clazz.array(Double.TYPE, [this.w]);
System.arraycopy$O$I$O$I$I(this.data, 0, dataToAdopt, 0, this.w);
result=Clazz.new_($I$(3,1).c$$DA$sun_font_LayoutPathImpl_EndType,[dataToAdopt, etype]);
this.reset$I(2);
}return result;
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LayoutPathImpl, "SegmentPath", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'sun.font.LayoutPathImpl');
C$.$classes$=[['LineInfo',0],['Segment',0],['Mapper',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['data','double[]','etype','sun.font.LayoutPathImpl.EndType']]]

Clazz.newMeth(C$, 'get$sun_font_LayoutPathImpl_EndType$DA',  function (etype, pts) {
return Clazz.new_($I$(9,1)).build$sun_font_LayoutPathImpl_EndType$DA(etype, pts);
}, 1);

Clazz.newMeth(C$, 'c$$DA$sun_font_LayoutPathImpl_EndType',  function (data, etype) {
Clazz.super_(C$, this);
this.data=data;
this.etype=etype;
}, 1);

Clazz.newMeth(C$, 'pathToPoint$java_awt_geom_Point2D$Z$java_awt_geom_Point2D',  function (location, preceding, point) {
p$2.locateAndGetIndex$java_awt_geom_Point2D$Z$java_awt_geom_Point2D.apply(this, [location, preceding, point]);
});

Clazz.newMeth(C$, 'pointToPath$java_awt_geom_Point2D$java_awt_geom_Point2D',  function (pt, result) {
var x=pt.getX$();
var y=pt.getY$();
var bx=this.data[0];
var by=this.data[1];
var bl=this.data[2];
var cd2=1.7976931348623157E308;
var cx=0;
var cy=0;
var cl=0;
var ci=0;
for (var i=3; i < this.data.length; i+=3) {
var nx=this.data[i];
var ny=this.data[i + 1];
var nl=this.data[i + 2];
var dx=nx - bx;
var dy=ny - by;
var dl=nl - bl;
var px=x - bx;
var py=y - by;
var dot=dx * px + dy * py;
var vcx;
var vcy;
var vcl;
var vi;
do {
if (dl == 0  || (dot < 0  && (!this.etype.isExtended$() || i != 3 ) ) ) {
vcx=bx;
vcy=by;
vcl=bl;
vi=i;
} else {
var l2=dl * dl;
if (dot <= l2  || (this.etype.isExtended$() && i == this.data.length - 3 ) ) {
var p=dot / l2;
vcx=bx + p * dx;
vcy=by + p * dy;
vcl=bl + p * dl;
vi=i;
} else {
if (i == this.data.length - 3) {
vcx=nx;
vcy=ny;
vcl=nl;
vi=this.data.length;
} else {
break;
}}}var tdx=x - vcx;
var tdy=y - vcy;
var td2=tdx * tdx + tdy * tdy;
if (td2 <= cd2 ) {
cd2=td2;
cx=vcx;
cy=vcy;
cl=vcl;
ci=vi;
}} while (false);
bx=nx;
by=ny;
bl=nl;
}
bx=this.data[ci - 3];
by=this.data[ci - 2];
if (cx != bx  || cy != by  ) {
var nx=this.data[ci];
var ny=this.data[ci + 1];
var co=$I$(1).sqrt(cd2);
if ((x - cx) * (ny - by) > (y - cy) * (nx - bx) ) {
co=-co;
}result.setLocation$D$D(cl, co);
return false;
} else {
var havePrev=ci != 3 && this.data[ci - 1] != this.data[ci - 4]  ;
var haveFoll=ci != this.data.length && this.data[ci - 1] != this.data[ci + 2]  ;
var doExtend=this.etype.isExtended$() && (ci == 3 || ci == this.data.length ) ;
if (havePrev && haveFoll ) {
var pp=Clazz.new_($I$(8,1).c$$D$D,[x, y]);
p$2.calcoffset$I$Z$java_awt_geom_Point2D.apply(this, [ci - 3, doExtend, pp]);
var fp=Clazz.new_($I$(8,1).c$$D$D,[x, y]);
p$2.calcoffset$I$Z$java_awt_geom_Point2D.apply(this, [ci, doExtend, fp]);
if ($I$(1).abs(pp.y) > $I$(1).abs(fp.y) ) {
result.setLocation$java_awt_geom_Point2D(pp);
return true;
} else {
result.setLocation$java_awt_geom_Point2D(fp);
return false;
}} else if (havePrev) {
result.setLocation$D$D(x, y);
p$2.calcoffset$I$Z$java_awt_geom_Point2D.apply(this, [ci - 3, doExtend, result]);
return true;
} else {
result.setLocation$D$D(x, y);
p$2.calcoffset$I$Z$java_awt_geom_Point2D.apply(this, [ci, doExtend, result]);
return false;
}}});

Clazz.newMeth(C$, 'calcoffset$I$Z$java_awt_geom_Point2D',  function (index, doExtend, result) {
var bx=this.data[index - 3];
var by=this.data[index - 2];
var px=result.getX$() - bx;
var py=result.getY$() - by;
var dx=this.data[index] - bx;
var dy=this.data[index + 1] - by;
var l=this.data[index + 2] - this.data[index - 1];
var rx=(px * dx + py * dy) / l;
var ry=(px * -dy + py * dx) / l;
if (!doExtend) {
if (rx < 0 ) rx=0;
 else if (rx > l ) rx=l;
}rx+=this.data[index - 1];
result.setLocation$D$D(rx, ry);
}, p$2);

Clazz.newMeth(C$, 'mapShape$java_awt_Shape',  function (s) {
return Clazz.new_($I$(10,1),[this, null]).mapShape$java_awt_Shape(s);
});

Clazz.newMeth(C$, 'start$',  function () {
return this.data[2];
});

Clazz.newMeth(C$, 'end$',  function () {
return this.data[this.data.length - 1];
});

Clazz.newMeth(C$, 'length$',  function () {
return this.data[this.data.length - 1] - this.data[2];
});

Clazz.newMeth(C$, 'getClosedAdvance$D$Z',  function (a, preceding) {
if (this.etype.isClosed$()) {
a-=this.data[2];
var count=((a / this.length$())|0);
a-=count * this.length$();
if (a < 0  || (a == 0  && preceding ) ) {
a+=this.length$();
}a+=this.data[2];
}return a;
}, p$2);

Clazz.newMeth(C$, 'getSegmentIndexForAdvance$D$Z',  function (a, preceding) {
a=p$2.getClosedAdvance$D$Z.apply(this, [a, preceding]);
var i;
var lim;
for (i=5, lim=this.data.length - 1; i < lim; i+=3) {
var v=this.data[i];
if (a < v  || (a == v  && preceding ) ) {
break;
}}
return i - 2;
}, p$2);

Clazz.newMeth(C$, 'map$I$D$D$java_awt_geom_Point2D',  function (seg, a, o, pt) {
var dx=this.data[seg] - this.data[seg - 3];
var dy=this.data[seg + 1] - this.data[seg - 2];
var dl=this.data[seg + 2] - this.data[seg - 1];
var ux=dx / dl;
var uy=dy / dl;
a-=this.data[seg - 1];
pt.setLocation$D$D(this.data[seg - 3] + a * ux - o * uy, this.data[seg - 2] + a * uy + o * ux);
}, p$2);

Clazz.newMeth(C$, 'locateAndGetIndex$java_awt_geom_Point2D$Z$java_awt_geom_Point2D',  function (loc, preceding, result) {
var a=loc.getX$();
var o=loc.getY$();
var seg=p$2.getSegmentIndexForAdvance$D$Z.apply(this, [a, preceding]);
p$2.map$I$D$D$java_awt_geom_Point2D.apply(this, [seg, a, o, result]);
return seg;
}, p$2);

Clazz.newMeth(C$, 'toString',  function () {
var b=Clazz.new_($I$(11,1));
b.append$S("{");
b.append$S(this.etype.toString());
b.append$S(" ");
for (var i=0; i < this.data.length; i+=3) {
if (i > 0) {
b.append$S(",");
}var x=(((this.data[i] * 100)|0)) / 100.0;
var y=(((this.data[i + 1] * 100)|0)) / 100.0;
var l=(((this.data[i + 2] * 10)|0)) / 10.0;
b.append$S("{");
b.append$F(x);
b.append$S(",");
b.append$F(y);
b.append$S(",");
b.append$F(l);
b.append$S("}");
}
b.append$S("}");
return b.toString();
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.LayoutPathImpl.SegmentPath, "LineInfo", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['sx','sy','lx','ly','m']]]

Clazz.newMeth(C$, 'set$D$D$D$D',  function (sx, sy, lx, ly) {
this.sx=sx;
this.sy=sy;
this.lx=lx;
this.ly=ly;
var dx=lx - sx;
if (dx == 0 ) {
this.m=0;
} else {
var dy=ly - sy;
this.m=dy / dx;
}});

Clazz.newMeth(C$, 'set$sun_font_LayoutPathImpl_SegmentPath_LineInfo',  function (rhs) {
this.sx=rhs.sx;
this.sy=rhs.sy;
this.lx=rhs.lx;
this.ly=rhs.ly;
this.m=rhs.m;
});

Clazz.newMeth(C$, 'pin$D$D$sun_font_LayoutPathImpl_SegmentPath_LineInfo',  function (lo, hi, result) {
result.set$sun_font_LayoutPathImpl_SegmentPath_LineInfo(this);
if (this.lx >= this.sx ) {
if (this.sx < hi  && this.lx >= lo  ) {
if (this.sx < lo ) {
if (this.m != 0 ) result.sy=this.sy + this.m * (lo - this.sx);
result.sx=lo;
}if (this.lx > hi ) {
if (this.m != 0 ) result.ly=this.ly + this.m * (hi - this.lx);
result.lx=hi;
}return true;
}} else {
if (this.lx < hi  && this.sx >= lo  ) {
if (this.lx < lo ) {
if (this.m != 0 ) result.ly=this.ly + this.m * (lo - this.lx);
result.lx=lo;
}if (this.sx > hi ) {
if (this.m != 0 ) result.sy=this.sy + this.m * (hi - this.sx);
result.sx=hi;
}return true;
}}return false;
});

Clazz.newMeth(C$, 'pin$I$sun_font_LayoutPathImpl_SegmentPath_LineInfo',  function (ix, result) {
var lo=this.b$['sun.font.LayoutPathImpl.SegmentPath'].data[ix - 1];
var hi=this.b$['sun.font.LayoutPathImpl.SegmentPath'].data[ix + 2];
switch (this.b$['sun.font.LayoutPathImpl.SegmentPath'].etype) {
case $I$(2).PINNED:
break;
case $I$(2).EXTENDED:
if (ix == 3) lo=-Infinity;
if (ix == this.b$['sun.font.LayoutPathImpl.SegmentPath'].data.length - 3) hi=Infinity;
break;
case $I$(2).CLOSED:
break;
}
return this.pin$D$D$sun_font_LayoutPathImpl_SegmentPath_LineInfo(lo, hi, result);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LayoutPathImpl.SegmentPath, "Segment", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['broken'],'D',['ux','uy','cx','cy'],'I',['ix'],'O',['temp','sun.font.LayoutPathImpl.SegmentPath.LineInfo','gp','java.awt.geom.GeneralPath']]]

Clazz.newMeth(C$, 'c$$I',  function (ix) {
;C$.$init$.apply(this);
this.ix=ix;
var len=this.b$['sun.font.LayoutPathImpl.SegmentPath'].data[ix + 2] - this.b$['sun.font.LayoutPathImpl.SegmentPath'].data[ix - 1];
this.ux=(this.b$['sun.font.LayoutPathImpl.SegmentPath'].data[ix] - this.b$['sun.font.LayoutPathImpl.SegmentPath'].data[ix - 3]) / len;
this.uy=(this.b$['sun.font.LayoutPathImpl.SegmentPath'].data[ix + 1] - this.b$['sun.font.LayoutPathImpl.SegmentPath'].data[ix - 2]) / len;
this.temp=Clazz.new_($I$(4,1),[this, null]);
}, 1);

Clazz.newMeth(C$, 'init$',  function () {
this.broken=true;
this.cx=this.cy=4.9E-324;
this.gp=Clazz.new_($I$(5,1));
});

Clazz.newMeth(C$, 'move$',  function () {
this.broken=true;
});

Clazz.newMeth(C$, 'close$',  function () {
if (!this.broken) {
this.gp.closePath$();
}});

Clazz.newMeth(C$, 'line$sun_font_LayoutPathImpl_SegmentPath_LineInfo',  function (li) {
if (li.pin$I$sun_font_LayoutPathImpl_SegmentPath_LineInfo(this.ix, this.temp)) {
this.temp.sx-=this.b$['sun.font.LayoutPathImpl.SegmentPath'].data[this.ix - 1];
var sx=this.b$['sun.font.LayoutPathImpl.SegmentPath'].data[this.ix - 3] + this.temp.sx * this.ux - this.temp.sy * this.uy;
var sy=this.b$['sun.font.LayoutPathImpl.SegmentPath'].data[this.ix - 2] + this.temp.sx * this.uy + this.temp.sy * this.ux;
this.temp.lx-=this.b$['sun.font.LayoutPathImpl.SegmentPath'].data[this.ix - 1];
var lx=this.b$['sun.font.LayoutPathImpl.SegmentPath'].data[this.ix - 3] + this.temp.lx * this.ux - this.temp.ly * this.uy;
var ly=this.b$['sun.font.LayoutPathImpl.SegmentPath'].data[this.ix - 2] + this.temp.lx * this.uy + this.temp.ly * this.ux;
if (sx != this.cx  || sy != this.cy  ) {
if (this.broken) {
this.gp.moveTo$F$F(sx, sy);
} else {
this.gp.lineTo$F$F(sx, sy);
}}this.gp.lineTo$F$F(lx, ly);
this.broken=false;
this.cx=lx;
this.cy=ly;
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LayoutPathImpl.SegmentPath, "Mapper", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['haveMT'],'O',['li','sun.font.LayoutPathImpl.SegmentPath.LineInfo','segments','java.util.ArrayList','mpt','java.awt.geom.Point2D.Double','+cpt']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.li=Clazz.new_($I$(4,1),[this, null]);
this.segments=Clazz.new_($I$(6,1));
for (var i=3; i < this.b$['sun.font.LayoutPathImpl.SegmentPath'].data.length; i+=3) {
if (this.b$['sun.font.LayoutPathImpl.SegmentPath'].data[i + 2] != this.b$['sun.font.LayoutPathImpl.SegmentPath'].data[i - 1] ) {
this.segments.add$O(Clazz.new_($I$(7,1).c$$I,[this, null, i]));
}}
this.mpt=Clazz.new_($I$(8,1));
this.cpt=Clazz.new_($I$(8,1));
}, 1);

Clazz.newMeth(C$, 'init$',  function () {
this.haveMT=false;
for (var s, $s = this.segments.iterator$(); $s.hasNext$()&&((s=($s.next$())),1);) {
s.init$();
}
});

Clazz.newMeth(C$, 'moveTo$D$D',  function (x, y) {
this.mpt.x=x;
this.mpt.y=y;
this.haveMT=true;
});

Clazz.newMeth(C$, 'lineTo$D$D',  function (x, y) {
if (this.haveMT) {
this.cpt.x=this.mpt.x;
this.cpt.y=this.mpt.y;
}if (x == this.cpt.x  && y == this.cpt.y  ) {
return;
}if (this.haveMT) {
this.haveMT=false;
for (var s, $s = this.segments.iterator$(); $s.hasNext$()&&((s=($s.next$())),1);) {
s.move$();
}
}this.li.set$D$D$D$D(this.cpt.x, this.cpt.y, x, y);
for (var s, $s = this.segments.iterator$(); $s.hasNext$()&&((s=($s.next$())),1);) {
s.line$sun_font_LayoutPathImpl_SegmentPath_LineInfo(this.li);
}
this.cpt.x=x;
this.cpt.y=y;
});

Clazz.newMeth(C$, 'close$',  function () {
this.lineTo$D$D(this.mpt.x, this.mpt.y);
for (var s, $s = this.segments.iterator$(); $s.hasNext$()&&((s=($s.next$())),1);) {
s.close$();
}
});

Clazz.newMeth(C$, 'mapShape$java_awt_Shape',  function (s) {
var pi=s.getPathIterator$java_awt_geom_AffineTransform$D(null, 1);
this.init$();
var coords=Clazz.array(Double.TYPE, [2]);
while (!pi.isDone$()){
switch (pi.currentSegment$DA(coords)) {
case 4:
this.close$();
break;
case 0:
this.moveTo$D$D(coords[0], coords[1]);
break;
case 1:
this.lineTo$D$D(coords[0], coords[1]);
break;
default:
break;
}
pi.next$();
}
var gp=Clazz.new_($I$(5,1));
for (var seg, $seg = this.segments.iterator$(); $seg.hasNext$()&&((seg=($seg.next$())),1);) {
gp.append$java_awt_Shape$Z(seg.gp, false);
}
return gp;
});
})()

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LayoutPathImpl, "EmptyPath", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'sun.font.LayoutPathImpl');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['tx','java.awt.geom.AffineTransform']]]

Clazz.newMeth(C$, 'c$$java_awt_geom_AffineTransform',  function (tx) {
Clazz.super_(C$, this);
this.tx=tx;
}, 1);

Clazz.newMeth(C$, 'pathToPoint$java_awt_geom_Point2D$Z$java_awt_geom_Point2D',  function (location, preceding, point) {
if (this.tx != null ) {
this.tx.transform$java_awt_geom_Point2D$java_awt_geom_Point2D(location, point);
} else {
point.setLocation$java_awt_geom_Point2D(location);
}});

Clazz.newMeth(C$, 'pointToPath$java_awt_geom_Point2D$java_awt_geom_Point2D',  function (pt, result) {
result.setLocation$java_awt_geom_Point2D(pt);
if (this.tx != null ) {
try {
this.tx.inverseTransform$java_awt_geom_Point2D$java_awt_geom_Point2D(pt, result);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.awt.geom.NoninvertibleTransformException")){
} else {
throw ex;
}
}
}return result.getX$() > 0 ;
});

Clazz.newMeth(C$, 'start$',  function () {
return 0;
});

Clazz.newMeth(C$, 'end$',  function () {
return 0;
});

Clazz.newMeth(C$, 'length$',  function () {
return 0;
});

Clazz.newMeth(C$, 'mapShape$java_awt_Shape',  function (s) {
if (this.tx != null ) {
return this.tx.createTransformedShape$java_awt_Shape(s);
}return s;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:45 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
