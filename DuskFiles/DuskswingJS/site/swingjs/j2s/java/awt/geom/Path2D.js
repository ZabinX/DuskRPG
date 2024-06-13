(function(){var P$=Clazz.newPackage("java.awt.geom"),p$1={},I$=[[0,['java.awt.geom.Path2D','.Iterator'],'java.util.Arrays',['java.awt.geom.Point2D','.Float'],'sun.awt.geom.Curve',['java.awt.geom.Rectangle2D','.Float'],['java.awt.geom.Path2D','.Float','.CopyIterator'],['java.awt.geom.Path2D','.Float','.TxIterator'],['java.awt.geom.Point2D','.Double'],['java.awt.geom.Rectangle2D','.Double'],['java.awt.geom.Path2D','.Double','.CopyIterator'],['java.awt.geom.Path2D','.Double','.TxIterator'],'java.awt.geom.FlatteningPathIterator']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Path2D", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['java.awt.Shape', 'Cloneable']);
C$.$classes$=[['Iterator',1032],['Float',9],['Double',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['numTypes','numCoords','windingRule'],'O',['pointTypes','byte[]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I$I',  function (rule, initialTypes) {
;C$.$init$.apply(this);
this.setWindingRule$I(rule);
this.pointTypes=Clazz.array(Byte.TYPE, [initialTypes]);
}, 1);

Clazz.newMeth(C$, 'closePath$',  function () {
if (this.numTypes == 0 || this.pointTypes[this.numTypes - 1] != 4 ) {
this.needRoom$Z$I(true, 0);
this.pointTypes[this.numTypes++]=4;
}});

Clazz.newMeth(C$, 'append$java_awt_Shape$Z',  function (s, connect) {
this.append$java_awt_geom_PathIterator$Z(s.getPathIterator$java_awt_geom_AffineTransform(null), connect);
});

Clazz.newMeth(C$, 'getWindingRule$',  function () {
return this.windingRule;
});

Clazz.newMeth(C$, 'setWindingRule$I',  function (rule) {
if (rule != 0 && rule != 1 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["winding rule must be WIND_EVEN_ODD or WIND_NON_ZERO"]);
}this.windingRule=rule;
});

Clazz.newMeth(C$, 'getCurrentPoint$',  function () {
var index=this.numCoords;
if (this.numTypes < 1 || index < 1 ) {
return null;
}if (this.pointTypes[this.numTypes - 1] == 4) {
 loop : for (var i=this.numTypes - 2; i > 0; i--) {
switch (this.pointTypes[i]) {
case 0:
break loop;
case 1:
index-=2;
break;
case 2:
index-=4;
break;
case 3:
index-=6;
break;
case 4:
break;
}
}
}return this.getPoint$I(index - 2);
});

Clazz.newMeth(C$, 'reset$',  function () {
this.numTypes=this.numCoords=0;
});

Clazz.newMeth(C$, 'createTransformedShape$java_awt_geom_AffineTransform',  function (at) {
var p2d=this.clone$();
if (at != null ) {
p2d.transform$java_awt_geom_AffineTransform(at);
}return p2d;
});

Clazz.newMeth(C$, 'getBounds$',  function () {
return this.getBounds2D$().getBounds$();
});

Clazz.newMeth(C$, 'contains$java_awt_geom_PathIterator$D$D',  function (pi, x, y) {
if (x * 0.0 + y * 0.0 == 0.0 ) {
var mask=(pi.getWindingRule$() == 1 ? -1 : 1);
var cross=$I$(4).pointCrossingsForPath$java_awt_geom_PathIterator$D$D(pi, x, y);
return ((cross & mask) != 0);
} else {
return false;
}}, 1);

Clazz.newMeth(C$, 'contains$java_awt_geom_PathIterator$java_awt_geom_Point2D',  function (pi, p) {
return C$.contains$java_awt_geom_PathIterator$D$D(pi, p.getX$(), p.getY$());
}, 1);

Clazz.newMeth(C$, 'contains$D$D',  function (x, y) {
if (x * 0.0 + y * 0.0 == 0.0 ) {
if (this.numTypes < 2) {
return false;
}var mask=(this.windingRule == 1 ? -1 : 1);
return ((this.pointCrossings$D$D(x, y) & mask) != 0);
} else {
return false;
}});

Clazz.newMeth(C$, 'contains$java_awt_geom_Point2D',  function (p) {
return this.contains$D$D(p.getX$(), p.getY$());
});

Clazz.newMeth(C$, 'contains$java_awt_geom_PathIterator$D$D$D$D',  function (pi, x, y, w, h) {
if (java.lang.Double.isNaN$D(x + w) || java.lang.Double.isNaN$D(y + h) ) {
return false;
}if (w <= 0  || h <= 0  ) {
return false;
}var mask=(pi.getWindingRule$() == 1 ? -1 : 2);
var crossings=$I$(4).rectCrossingsForPath$java_awt_geom_PathIterator$D$D$D$D(pi, x, y, x + w, y + h);
return (crossings != -2147483648 && (crossings & mask) != 0 );
}, 1);

Clazz.newMeth(C$, 'contains$java_awt_geom_PathIterator$java_awt_geom_Rectangle2D',  function (pi, r) {
return C$.contains$java_awt_geom_PathIterator$D$D$D$D(pi, r.getX$(), r.getY$(), r.getWidth$(), r.getHeight$());
}, 1);

Clazz.newMeth(C$, 'contains$D$D$D$D',  function (x, y, w, h) {
if (java.lang.Double.isNaN$D(x + w) || java.lang.Double.isNaN$D(y + h) ) {
return false;
}if (w <= 0  || h <= 0  ) {
return false;
}var mask=(this.windingRule == 1 ? -1 : 2);
var crossings=this.rectCrossings$D$D$D$D(x, y, x + w, y + h);
return (crossings != -2147483648 && (crossings & mask) != 0 );
});

Clazz.newMeth(C$, 'contains$java_awt_geom_Rectangle2D',  function (r) {
return this.contains$D$D$D$D(r.getX$(), r.getY$(), r.getWidth$(), r.getHeight$());
});

Clazz.newMeth(C$, 'intersects$java_awt_geom_PathIterator$D$D$D$D',  function (pi, x, y, w, h) {
if (java.lang.Double.isNaN$D(x + w) || java.lang.Double.isNaN$D(y + h) ) {
return false;
}if (w <= 0  || h <= 0  ) {
return false;
}var mask=(pi.getWindingRule$() == 1 ? -1 : 2);
var crossings=$I$(4).rectCrossingsForPath$java_awt_geom_PathIterator$D$D$D$D(pi, x, y, x + w, y + h);
return (crossings == -2147483648 || (crossings & mask) != 0 );
}, 1);

Clazz.newMeth(C$, 'intersects$java_awt_geom_PathIterator$java_awt_geom_Rectangle2D',  function (pi, r) {
return C$.intersects$java_awt_geom_PathIterator$D$D$D$D(pi, r.getX$(), r.getY$(), r.getWidth$(), r.getHeight$());
}, 1);

Clazz.newMeth(C$, 'intersects$D$D$D$D',  function (x, y, w, h) {
if (java.lang.Double.isNaN$D(x + w) || java.lang.Double.isNaN$D(y + h) ) {
return false;
}if (w <= 0  || h <= 0  ) {
return false;
}var mask=(this.windingRule == 1 ? -1 : 2);
var crossings=this.rectCrossings$D$D$D$D(x, y, x + w, y + h);
return (crossings == -2147483648 || (crossings & mask) != 0 );
});

Clazz.newMeth(C$, 'intersects$java_awt_geom_Rectangle2D',  function (r) {
return this.intersects$D$D$D$D(r.getX$(), r.getY$(), r.getWidth$(), r.getHeight$());
});

Clazz.newMeth(C$, 'getPathIterator$java_awt_geom_AffineTransform$D',  function (at, flatness) {
return Clazz.new_([this.getPathIterator$java_awt_geom_AffineTransform(at), flatness],$I$(12,1).c$$java_awt_geom_PathIterator$D);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.Path2D, "Iterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.awt.geom.PathIterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['typeIdx','pointIdx'],'O',['path','java.awt.geom.Path2D']]
,['O',['curvecoords','int[]']]]

Clazz.newMeth(C$, 'c$$java_awt_geom_Path2D',  function (path) {
;C$.$init$.apply(this);
this.path=path;
}, 1);

Clazz.newMeth(C$, 'getWindingRule$',  function () {
return this.path.getWindingRule$();
});

Clazz.newMeth(C$, 'isDone$',  function () {
return (this.typeIdx >= this.path.numTypes);
});

Clazz.newMeth(C$, 'next$',  function () {
var type=this.path.pointTypes[this.typeIdx++];
this.pointIdx+=C$.curvecoords[type];
});

C$.$static$=function(){C$.$static$=0;
C$.curvecoords=Clazz.array(Integer.TYPE, -1, [2, 2, 4, 6, 0]);
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Path2D, "Float", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.awt.geom.Path2D');
C$.$classes$=[['CopyIterator',8],['TxIterator',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['floatCoords','float[]']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$I$I.apply(this, [1, 20]);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (rule) {
C$.c$$I$I.apply(this, [rule, 20]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I',  function (rule, initialCapacity) {
Clazz.super_(C$, this);
this.setWindingRule$I(rule);
this.pointTypes=Clazz.array(Byte.TYPE, [initialCapacity]);
this.floatCoords=Clazz.array(Float.TYPE, [initialCapacity * 2]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Shape',  function (s) {
C$.c$$java_awt_Shape$java_awt_geom_AffineTransform.apply(this, [s, null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Shape$java_awt_geom_AffineTransform',  function (s, at) {
Clazz.super_(C$, this);
p$1.setPath$java_awt_Shape$java_awt_geom_AffineTransform.apply(this, [s, at]);
}, 1);

Clazz.newMeth(C$, 'setPath$java_awt_Shape$java_awt_geom_AffineTransform',  function (s, at) {
if (Clazz.instanceOf(s, "java.awt.geom.Path2D")) {
var p2d=s;
this.setWindingRule$I(p2d.windingRule);
this.numTypes=p2d.numTypes;
this.pointTypes=$I$(2).copyOf$BA$I(p2d.pointTypes, p2d.pointTypes.length);
this.numCoords=p2d.numCoords;
this.floatCoords=p2d.cloneCoordsFloat$java_awt_geom_AffineTransform(at);
} else {
var pi=s.getPathIterator$java_awt_geom_AffineTransform(at);
this.setWindingRule$I(pi.getWindingRule$());
this.pointTypes=Clazz.array(Byte.TYPE, [20]);
this.floatCoords=Clazz.array(Float.TYPE, [40]);
this.append$java_awt_geom_PathIterator$Z(pi, false);
}}, p$1);

Clazz.newMeth(C$, 'cloneCoordsFloat$java_awt_geom_AffineTransform',  function (at) {
var ret;
if (at == null ) {
ret=$I$(2).copyOf$FA$I(this.floatCoords, this.floatCoords.length);
} else {
ret=Clazz.array(Float.TYPE, [this.floatCoords.length]);
at.transform$FA$I$FA$I$I(this.floatCoords, 0, ret, 0, (this.numCoords/2|0));
}return ret;
});

Clazz.newMeth(C$, 'cloneCoordsDouble$java_awt_geom_AffineTransform',  function (at) {
var ret=Clazz.array(Double.TYPE, [this.floatCoords.length]);
if (at == null ) {
for (var i=0; i < this.numCoords; i++) {
ret[i]=this.floatCoords[i];
}
} else {
at.transform$FA$I$DA$I$I(this.floatCoords, 0, ret, 0, (this.numCoords/2|0));
}return ret;
});

Clazz.newMeth(C$, 'append$F$F',  function (x, y) {
this.floatCoords[this.numCoords++]=x;
this.floatCoords[this.numCoords++]=y;
});

Clazz.newMeth(C$, 'append$D$D',  function (x, y) {
this.floatCoords[this.numCoords++]=x;
this.floatCoords[this.numCoords++]=y;
});

Clazz.newMeth(C$, 'clear$',  function () {
this.numCoords=0;
});

Clazz.newMeth(C$, 'append$java_awt_geom_PathIterator$Z',  function (pi, connect) {
var coords=Clazz.array(Float.TYPE, [6]);
while (!pi.isDone$()){
switch (pi.currentSegment$FA(coords)) {
case 0:
if (!connect || this.numTypes < 1  || this.numCoords < 1 ) {
this.moveTo$F$F(coords[0], coords[1]);
break;
}if (this.pointTypes[this.numTypes - 1] != 4 && this.floatCoords[this.numCoords - 2] == coords[0]   && this.floatCoords[this.numCoords - 1] == coords[1]  ) {
break;
}case 1:
this.lineTo$F$F(coords[0], coords[1]);
break;
case 2:
this.quadTo$F$F$F$F(coords[0], coords[1], coords[2], coords[3]);
break;
case 3:
this.curveTo$F$F$F$F$F$F(coords[0], coords[1], coords[2], coords[3], coords[4], coords[5]);
break;
case 4:
this.closePath$();
break;
}
pi.next$();
connect=false;
}
});

Clazz.newMeth(C$, 'getPoint$I',  function (coordindex) {
return Clazz.new_($I$(3,1).c$$F$F,[this.floatCoords[coordindex], this.floatCoords[coordindex + 1]]);
});

Clazz.newMeth(C$, 'needRoom$Z$I',  function (needMove, newCoords) {
if (needMove && this.numTypes == 0 ) {
throw Clazz.new_(Clazz.load('java.awt.geom.IllegalPathStateException').c$$S,["missing initial moveto in path definition"]);
}var size=this.pointTypes.length;
if (this.numTypes >= size) {
var grow=size;
if (grow > 500) {
grow=500;
}this.pointTypes=$I$(2).copyOf$BA$I(this.pointTypes, size + grow);
}size=this.floatCoords.length;
if (this.numCoords + newCoords > size) {
var grow=size;
if (grow > 1000) {
grow=1000;
}if (grow < newCoords) {
grow=newCoords;
}this.floatCoords=$I$(2).copyOf$FA$I(this.floatCoords, size + grow);
}});

Clazz.newMeth(C$, 'moveTo$D$D',  function (x, y) {
if (this.numTypes > 0 && this.pointTypes[this.numTypes - 1] == 0 ) {
this.floatCoords[this.numCoords - 2]=x;
this.floatCoords[this.numCoords - 1]=y;
} else {
this.needRoom$Z$I(false, 2);
this.pointTypes[this.numTypes++]=0;
this.floatCoords[this.numCoords++]=x;
this.floatCoords[this.numCoords++]=y;
}});

Clazz.newMeth(C$, 'moveTo$F$F',  function (x, y) {
if (this.numTypes > 0 && this.pointTypes[this.numTypes - 1] == 0 ) {
this.floatCoords[this.numCoords - 2]=x;
this.floatCoords[this.numCoords - 1]=y;
} else {
this.needRoom$Z$I(false, 2);
this.pointTypes[this.numTypes++]=0;
this.floatCoords[this.numCoords++]=x;
this.floatCoords[this.numCoords++]=y;
}});

Clazz.newMeth(C$, 'lineTo$D$D',  function (x, y) {
this.needRoom$Z$I(true, 2);
this.pointTypes[this.numTypes++]=1;
this.floatCoords[this.numCoords++]=x;
this.floatCoords[this.numCoords++]=y;
});

Clazz.newMeth(C$, 'lineTo$F$F',  function (x, y) {
this.needRoom$Z$I(true, 2);
this.pointTypes[this.numTypes++]=1;
this.floatCoords[this.numCoords++]=x;
this.floatCoords[this.numCoords++]=y;
});

Clazz.newMeth(C$, 'quadTo$D$D$D$D',  function (x1, y1, x2, y2) {
this.needRoom$Z$I(true, 4);
this.pointTypes[this.numTypes++]=2;
this.floatCoords[this.numCoords++]=x1;
this.floatCoords[this.numCoords++]=y1;
this.floatCoords[this.numCoords++]=x2;
this.floatCoords[this.numCoords++]=y2;
});

Clazz.newMeth(C$, 'quadTo$F$F$F$F',  function (x1, y1, x2, y2) {
this.needRoom$Z$I(true, 4);
this.pointTypes[this.numTypes++]=2;
this.floatCoords[this.numCoords++]=x1;
this.floatCoords[this.numCoords++]=y1;
this.floatCoords[this.numCoords++]=x2;
this.floatCoords[this.numCoords++]=y2;
});

Clazz.newMeth(C$, 'curveTo$D$D$D$D$D$D',  function (x1, y1, x2, y2, x3, y3) {
this.needRoom$Z$I(true, 6);
this.pointTypes[this.numTypes++]=3;
this.floatCoords[this.numCoords++]=x1;
this.floatCoords[this.numCoords++]=y1;
this.floatCoords[this.numCoords++]=x2;
this.floatCoords[this.numCoords++]=y2;
this.floatCoords[this.numCoords++]=x3;
this.floatCoords[this.numCoords++]=y3;
});

Clazz.newMeth(C$, 'curveTo$F$F$F$F$F$F',  function (x1, y1, x2, y2, x3, y3) {
this.needRoom$Z$I(true, 6);
this.pointTypes[this.numTypes++]=3;
this.floatCoords[this.numCoords++]=x1;
this.floatCoords[this.numCoords++]=y1;
this.floatCoords[this.numCoords++]=x2;
this.floatCoords[this.numCoords++]=y2;
this.floatCoords[this.numCoords++]=x3;
this.floatCoords[this.numCoords++]=y3;
});

Clazz.newMeth(C$, 'pointCrossings$D$D',  function (px, py) {
var movx;
var movy;
var curx;
var cury;
var endx;
var endy;
var coords=this.floatCoords;
curx=movx=coords[0];
cury=movy=coords[1];
var crossings=0;
var ci=2;
for (var i=1; i < this.numTypes; i++) {
switch (this.pointTypes[i]) {
case 0:
if (cury != movy ) {
crossings+=$I$(4).pointCrossingsForLine$D$D$D$D$D$D(px, py, curx, cury, movx, movy);
}movx=curx=coords[ci++];
movy=cury=coords[ci++];
break;
case 1:
crossings+=$I$(4,"pointCrossingsForLine$D$D$D$D$D$D",[px, py, curx, cury, endx=coords[ci++], endy=coords[ci++]]);
curx=endx;
cury=endy;
break;
case 2:
crossings+=$I$(4,"pointCrossingsForQuad$D$D$D$D$D$D$D$D$I",[px, py, curx, cury, coords[ci++], coords[ci++], endx=coords[ci++], endy=coords[ci++], 0]);
curx=endx;
cury=endy;
break;
case 3:
crossings+=$I$(4,"pointCrossingsForCubic$D$D$D$D$D$D$D$D$D$D$I",[px, py, curx, cury, coords[ci++], coords[ci++], coords[ci++], coords[ci++], endx=coords[ci++], endy=coords[ci++], 0]);
curx=endx;
cury=endy;
break;
case 4:
if (cury != movy ) {
crossings+=$I$(4).pointCrossingsForLine$D$D$D$D$D$D(px, py, curx, cury, movx, movy);
}curx=movx;
cury=movy;
break;
}
}
if (cury != movy ) {
crossings+=$I$(4).pointCrossingsForLine$D$D$D$D$D$D(px, py, curx, cury, movx, movy);
}return crossings;
});

Clazz.newMeth(C$, 'rectCrossings$D$D$D$D',  function (rxmin, rymin, rxmax, rymax) {
var coords=this.floatCoords;
var curx;
var cury;
var movx;
var movy;
var endx;
var endy;
curx=movx=coords[0];
cury=movy=coords[1];
var crossings=0;
var ci=2;
for (var i=1; crossings != -2147483648 && i < this.numTypes ; i++) {
switch (this.pointTypes[i]) {
case 0:
if (curx != movx  || cury != movy  ) {
crossings=$I$(4).rectCrossingsForLine$I$D$D$D$D$D$D$D$D(crossings, rxmin, rymin, rxmax, rymax, curx, cury, movx, movy);
}movx=curx=coords[ci++];
movy=cury=coords[ci++];
break;
case 1:
crossings=$I$(4,"rectCrossingsForLine$I$D$D$D$D$D$D$D$D",[crossings, rxmin, rymin, rxmax, rymax, curx, cury, endx=coords[ci++], endy=coords[ci++]]);
curx=endx;
cury=endy;
break;
case 2:
crossings=$I$(4,"rectCrossingsForQuad$I$D$D$D$D$D$D$D$D$D$D$I",[crossings, rxmin, rymin, rxmax, rymax, curx, cury, coords[ci++], coords[ci++], endx=coords[ci++], endy=coords[ci++], 0]);
curx=endx;
cury=endy;
break;
case 3:
crossings=$I$(4,"rectCrossingsForCubic$I$D$D$D$D$D$D$D$D$D$D$D$D$I",[crossings, rxmin, rymin, rxmax, rymax, curx, cury, coords[ci++], coords[ci++], coords[ci++], coords[ci++], endx=coords[ci++], endy=coords[ci++], 0]);
curx=endx;
cury=endy;
break;
case 4:
if (curx != movx  || cury != movy  ) {
crossings=$I$(4).rectCrossingsForLine$I$D$D$D$D$D$D$D$D(crossings, rxmin, rymin, rxmax, rymax, curx, cury, movx, movy);
}curx=movx;
cury=movy;
break;
}
}
if (crossings != -2147483648 && (curx != movx  || cury != movy  ) ) {
crossings=$I$(4).rectCrossingsForLine$I$D$D$D$D$D$D$D$D(crossings, rxmin, rymin, rxmax, rymax, curx, cury, movx, movy);
}return crossings;
});

Clazz.newMeth(C$, 'transform$java_awt_geom_AffineTransform',  function (at) {
at.transform$FA$I$FA$I$I(this.floatCoords, 0, this.floatCoords, 0, (this.numCoords/2|0));
});

Clazz.newMeth(C$, 'getBounds2D$',  function () {
var x1;
var y1;
var x2;
var y2;
var i=this.numCoords;
if (i > 0) {
y1=y2=this.floatCoords[--i];
x1=x2=this.floatCoords[--i];
while (i > 0){
var y=this.floatCoords[--i];
var x=this.floatCoords[--i];
if (x < x1 ) x1=x;
if (y < y1 ) y1=y;
if (x > x2 ) x2=x;
if (y > y2 ) y2=y;
}
} else {
x1=y1=x2=y2=0.0;
}return Clazz.new_($I$(5,1).c$$F$F$F$F,[x1, y1, x2 - x1, y2 - y1]);
});

Clazz.newMeth(C$, 'getPathIterator$java_awt_geom_AffineTransform',  function (at) {
if (at == null ) {
return Clazz.new_($I$(6,1).c$$java_awt_geom_Path2D_Float,[this]);
} else {
return Clazz.new_($I$(7,1).c$$java_awt_geom_Path2D_Float$java_awt_geom_AffineTransform,[this, at]);
}});

Clazz.newMeth(C$, 'clone$',  function () {
return Clazz.new_(C$.c$$java_awt_Shape,[this]);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.Path2D.Float, "CopyIterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.awt.geom.Path2D','.Iterator']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['floatCoords','float[]']]]

Clazz.newMeth(C$, 'c$$java_awt_geom_Path2D_Float',  function (p2df) {
;C$.superclazz.c$$java_awt_geom_Path2D.apply(this,[p2df]);C$.$init$.apply(this);
this.floatCoords=p2df.floatCoords;
}, 1);

Clazz.newMeth(C$, 'currentSegment$FA',  function (coords) {
var type=this.path.pointTypes[this.typeIdx];
var numCoords=$I$(1).curvecoords[type];
if (numCoords > 0) {
System.arraycopy$O$I$O$I$I(this.floatCoords, this.pointIdx, coords, 0, numCoords);
}return type;
});

Clazz.newMeth(C$, 'currentSegment$DA',  function (coords) {
var type=this.path.pointTypes[this.typeIdx];
var numCoords=$I$(1).curvecoords[type];
if (numCoords > 0) {
for (var i=0; i < numCoords; i++) {
coords[i]=this.floatCoords[this.pointIdx + i];
}
}return type;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Path2D.Float, "TxIterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.awt.geom.Path2D','.Iterator']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['floatCoords','float[]','affine','java.awt.geom.AffineTransform']]]

Clazz.newMeth(C$, 'c$$java_awt_geom_Path2D_Float$java_awt_geom_AffineTransform',  function (p2df, at) {
;C$.superclazz.c$$java_awt_geom_Path2D.apply(this,[p2df]);C$.$init$.apply(this);
this.floatCoords=p2df.floatCoords;
this.affine=at;
}, 1);

Clazz.newMeth(C$, 'currentSegment$FA',  function (coords) {
var type=this.path.pointTypes[this.typeIdx];
var numCoords=$I$(1).curvecoords[type];
if (numCoords > 0) {
this.affine.transform$FA$I$FA$I$I(this.floatCoords, this.pointIdx, coords, 0, (numCoords/2|0));
}return type;
});

Clazz.newMeth(C$, 'currentSegment$DA',  function (coords) {
var type=this.path.pointTypes[this.typeIdx];
var numCoords=$I$(1).curvecoords[type];
if (numCoords > 0) {
this.affine.transform$FA$I$DA$I$I(this.floatCoords, this.pointIdx, coords, 0, (numCoords/2|0));
}return type;
});

Clazz.newMeth(C$);
})()
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Path2D, "Double", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.awt.geom.Path2D');
C$.$classes$=[['CopyIterator',8],['TxIterator',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['doubleCoords','double[]']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$I$I.apply(this, [1, 20]);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (rule) {
C$.c$$I$I.apply(this, [rule, 20]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I',  function (rule, initialCapacity) {
;C$.superclazz.c$$I$I.apply(this,[rule, initialCapacity]);C$.$init$.apply(this);
this.doubleCoords=Clazz.array(Double.TYPE, [initialCapacity * 2]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Shape',  function (s) {
C$.c$$java_awt_Shape$java_awt_geom_AffineTransform.apply(this, [s, null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Shape$java_awt_geom_AffineTransform',  function (s, at) {
Clazz.super_(C$, this);
if (Clazz.instanceOf(s, "java.awt.geom.Path2D")) {
var p2d=s;
this.setWindingRule$I(p2d.windingRule);
this.numTypes=p2d.numTypes;
this.pointTypes=$I$(2).copyOf$BA$I(p2d.pointTypes, p2d.pointTypes.length);
this.numCoords=p2d.numCoords;
this.doubleCoords=p2d.cloneCoordsDouble$java_awt_geom_AffineTransform(at);
} else {
var pi=s.getPathIterator$java_awt_geom_AffineTransform(at);
this.setWindingRule$I(pi.getWindingRule$());
this.pointTypes=Clazz.array(Byte.TYPE, [20]);
this.doubleCoords=Clazz.array(Double.TYPE, [40]);
this.append$java_awt_geom_PathIterator$Z(pi, false);
}}, 1);

Clazz.newMeth(C$, 'cloneCoordsFloat$java_awt_geom_AffineTransform',  function (at) {
var ret=Clazz.array(Float.TYPE, [this.doubleCoords.length]);
if (at == null ) {
for (var i=0; i < this.numCoords; i++) {
ret[i]=this.doubleCoords[i];
}
} else {
at.transform$DA$I$FA$I$I(this.doubleCoords, 0, ret, 0, (this.numCoords/2|0));
}return ret;
});

Clazz.newMeth(C$, 'cloneCoordsDouble$java_awt_geom_AffineTransform',  function (at) {
var ret;
if (at == null ) {
ret=$I$(2).copyOf$DA$I(this.doubleCoords, this.doubleCoords.length);
} else {
ret=Clazz.array(Double.TYPE, [this.doubleCoords.length]);
at.transform$DA$I$DA$I$I(this.doubleCoords, 0, ret, 0, (this.numCoords/2|0));
}return ret;
});

Clazz.newMeth(C$, 'append$F$F',  function (x, y) {
this.doubleCoords[this.numCoords++]=x;
this.doubleCoords[this.numCoords++]=y;
});

Clazz.newMeth(C$, 'append$D$D',  function (x, y) {
this.doubleCoords[this.numCoords++]=x;
this.doubleCoords[this.numCoords++]=y;
});

Clazz.newMeth(C$, 'append$java_awt_geom_PathIterator$Z',  function (pi, connect) {
var coords=Clazz.array(Double.TYPE, [6]);
while (!pi.isDone$()){
switch (pi.currentSegment$DA(coords)) {
case 0:
if (!connect || this.numTypes < 1  || this.numCoords < 1 ) {
this.moveTo$D$D(coords[0], coords[1]);
break;
}if (this.pointTypes[this.numTypes - 1] != 4 && this.doubleCoords[this.numCoords - 2] == coords[0]   && this.doubleCoords[this.numCoords - 1] == coords[1]  ) {
break;
}case 1:
this.lineTo$D$D(coords[0], coords[1]);
break;
case 2:
this.quadTo$D$D$D$D(coords[0], coords[1], coords[2], coords[3]);
break;
case 3:
this.curveTo$D$D$D$D$D$D(coords[0], coords[1], coords[2], coords[3], coords[4], coords[5]);
break;
case 4:
this.closePath$();
break;
}
pi.next$();
connect=false;
}
});

Clazz.newMeth(C$, 'getPoint$I',  function (coordindex) {
return Clazz.new_($I$(8,1).c$$D$D,[this.doubleCoords[coordindex], this.doubleCoords[coordindex + 1]]);
});

Clazz.newMeth(C$, 'needRoom$Z$I',  function (needMove, newCoords) {
if (needMove && this.numTypes == 0 ) {
throw Clazz.new_(Clazz.load('java.awt.geom.IllegalPathStateException').c$$S,["missing initial moveto in path definition"]);
}var size=this.pointTypes.length;
if (this.numTypes >= size) {
var grow=size;
if (grow > 500) {
grow=500;
}this.pointTypes=$I$(2).copyOf$BA$I(this.pointTypes, size + grow);
}size=this.doubleCoords.length;
if (this.numCoords + newCoords > size) {
var grow=size;
if (grow > 1000) {
grow=1000;
}if (grow < newCoords) {
grow=newCoords;
}this.doubleCoords=$I$(2).copyOf$DA$I(this.doubleCoords, size + grow);
}});

Clazz.newMeth(C$, 'moveTo$D$D',  function (x, y) {
if (this.numTypes > 0 && this.pointTypes[this.numTypes - 1] == 0 ) {
this.doubleCoords[this.numCoords - 2]=x;
this.doubleCoords[this.numCoords - 1]=y;
} else {
this.needRoom$Z$I(false, 2);
this.pointTypes[this.numTypes++]=0;
this.doubleCoords[this.numCoords++]=x;
this.doubleCoords[this.numCoords++]=y;
}});

Clazz.newMeth(C$, 'lineTo$D$D',  function (x, y) {
this.needRoom$Z$I(true, 2);
this.pointTypes[this.numTypes++]=1;
this.doubleCoords[this.numCoords++]=x;
this.doubleCoords[this.numCoords++]=y;
});

Clazz.newMeth(C$, 'quadTo$D$D$D$D',  function (x1, y1, x2, y2) {
this.needRoom$Z$I(true, 4);
this.pointTypes[this.numTypes++]=2;
this.doubleCoords[this.numCoords++]=x1;
this.doubleCoords[this.numCoords++]=y1;
this.doubleCoords[this.numCoords++]=x2;
this.doubleCoords[this.numCoords++]=y2;
});

Clazz.newMeth(C$, 'curveTo$D$D$D$D$D$D',  function (x1, y1, x2, y2, x3, y3) {
this.needRoom$Z$I(true, 6);
this.pointTypes[this.numTypes++]=3;
this.doubleCoords[this.numCoords++]=x1;
this.doubleCoords[this.numCoords++]=y1;
this.doubleCoords[this.numCoords++]=x2;
this.doubleCoords[this.numCoords++]=y2;
this.doubleCoords[this.numCoords++]=x3;
this.doubleCoords[this.numCoords++]=y3;
});

Clazz.newMeth(C$, 'pointCrossings$D$D',  function (px, py) {
var movx;
var movy;
var curx;
var cury;
var endx;
var endy;
var coords=this.doubleCoords;
curx=movx=coords[0];
cury=movy=coords[1];
var crossings=0;
var ci=2;
for (var i=1; i < this.numTypes; i++) {
switch (this.pointTypes[i]) {
case 0:
if (cury != movy ) {
crossings+=$I$(4).pointCrossingsForLine$D$D$D$D$D$D(px, py, curx, cury, movx, movy);
}movx=curx=coords[ci++];
movy=cury=coords[ci++];
break;
case 1:
crossings+=$I$(4,"pointCrossingsForLine$D$D$D$D$D$D",[px, py, curx, cury, endx=coords[ci++], endy=coords[ci++]]);
curx=endx;
cury=endy;
break;
case 2:
crossings+=$I$(4,"pointCrossingsForQuad$D$D$D$D$D$D$D$D$I",[px, py, curx, cury, coords[ci++], coords[ci++], endx=coords[ci++], endy=coords[ci++], 0]);
curx=endx;
cury=endy;
break;
case 3:
crossings+=$I$(4,"pointCrossingsForCubic$D$D$D$D$D$D$D$D$D$D$I",[px, py, curx, cury, coords[ci++], coords[ci++], coords[ci++], coords[ci++], endx=coords[ci++], endy=coords[ci++], 0]);
curx=endx;
cury=endy;
break;
case 4:
if (cury != movy ) {
crossings+=$I$(4).pointCrossingsForLine$D$D$D$D$D$D(px, py, curx, cury, movx, movy);
}curx=movx;
cury=movy;
break;
}
}
if (cury != movy ) {
crossings+=$I$(4).pointCrossingsForLine$D$D$D$D$D$D(px, py, curx, cury, movx, movy);
}return crossings;
});

Clazz.newMeth(C$, 'rectCrossings$D$D$D$D',  function (rxmin, rymin, rxmax, rymax) {
var coords=this.doubleCoords;
var curx;
var cury;
var movx;
var movy;
var endx;
var endy;
curx=movx=coords[0];
cury=movy=coords[1];
var crossings=0;
var ci=2;
for (var i=1; crossings != -2147483648 && i < this.numTypes ; i++) {
switch (this.pointTypes[i]) {
case 0:
if (curx != movx  || cury != movy  ) {
crossings=$I$(4).rectCrossingsForLine$I$D$D$D$D$D$D$D$D(crossings, rxmin, rymin, rxmax, rymax, curx, cury, movx, movy);
}movx=curx=coords[ci++];
movy=cury=coords[ci++];
break;
case 1:
endx=coords[ci++];
endy=coords[ci++];
crossings=$I$(4).rectCrossingsForLine$I$D$D$D$D$D$D$D$D(crossings, rxmin, rymin, rxmax, rymax, curx, cury, endx, endy);
curx=endx;
cury=endy;
break;
case 2:
crossings=$I$(4,"rectCrossingsForQuad$I$D$D$D$D$D$D$D$D$D$D$I",[crossings, rxmin, rymin, rxmax, rymax, curx, cury, coords[ci++], coords[ci++], endx=coords[ci++], endy=coords[ci++], 0]);
curx=endx;
cury=endy;
break;
case 3:
crossings=$I$(4,"rectCrossingsForCubic$I$D$D$D$D$D$D$D$D$D$D$D$D$I",[crossings, rxmin, rymin, rxmax, rymax, curx, cury, coords[ci++], coords[ci++], coords[ci++], coords[ci++], endx=coords[ci++], endy=coords[ci++], 0]);
curx=endx;
cury=endy;
break;
case 4:
if (curx != movx  || cury != movy  ) {
crossings=$I$(4).rectCrossingsForLine$I$D$D$D$D$D$D$D$D(crossings, rxmin, rymin, rxmax, rymax, curx, cury, movx, movy);
}curx=movx;
cury=movy;
break;
}
}
if (crossings != -2147483648 && (curx != movx  || cury != movy  ) ) {
crossings=$I$(4).rectCrossingsForLine$I$D$D$D$D$D$D$D$D(crossings, rxmin, rymin, rxmax, rymax, curx, cury, movx, movy);
}return crossings;
});

Clazz.newMeth(C$, 'transform$java_awt_geom_AffineTransform',  function (at) {
at.transform$DA$I$DA$I$I(this.doubleCoords, 0, this.doubleCoords, 0, (this.numCoords/2|0));
});

Clazz.newMeth(C$, 'getBounds2D$',  function () {
var x1;
var y1;
var x2;
var y2;
var i=this.numCoords;
if (i > 0) {
y1=y2=this.doubleCoords[--i];
x1=x2=this.doubleCoords[--i];
while (i > 0){
var y=this.doubleCoords[--i];
var x=this.doubleCoords[--i];
if (x < x1 ) x1=x;
if (y < y1 ) y1=y;
if (x > x2 ) x2=x;
if (y > y2 ) y2=y;
}
} else {
x1=y1=x2=y2=0.0;
}return Clazz.new_($I$(9,1).c$$D$D$D$D,[x1, y1, x2 - x1, y2 - y1]);
});

Clazz.newMeth(C$, 'getPathIterator$java_awt_geom_AffineTransform',  function (at) {
if (at == null ) {
return Clazz.new_($I$(10,1).c$$java_awt_geom_Path2D_Double,[this]);
} else {
return Clazz.new_($I$(11,1).c$$java_awt_geom_Path2D_Double$java_awt_geom_AffineTransform,[this, at]);
}});

Clazz.newMeth(C$, 'clone$',  function () {
return Clazz.new_(C$.c$$java_awt_Shape,[this]);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.Path2D.Double, "CopyIterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.awt.geom.Path2D','.Iterator']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['doubleCoords','double[]']]]

Clazz.newMeth(C$, 'c$$java_awt_geom_Path2D_Double',  function (p2dd) {
;C$.superclazz.c$$java_awt_geom_Path2D.apply(this,[p2dd]);C$.$init$.apply(this);
this.doubleCoords=p2dd.doubleCoords;
}, 1);

Clazz.newMeth(C$, 'currentSegment$FA',  function (coords) {
var type=this.path.pointTypes[this.typeIdx];
var numCoords=$I$(1).curvecoords[type];
if (numCoords > 0) {
for (var i=0; i < numCoords; i++) {
coords[i]=this.doubleCoords[this.pointIdx + i];
}
}return type;
});

Clazz.newMeth(C$, 'currentSegment$DA',  function (coords) {
var type=this.path.pointTypes[this.typeIdx];
var numCoords=$I$(1).curvecoords[type];
if (numCoords > 0) {
System.arraycopy$O$I$O$I$I(this.doubleCoords, this.pointIdx, coords, 0, numCoords);
}return type;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Path2D.Double, "TxIterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.awt.geom.Path2D','.Iterator']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['doubleCoords','double[]','affine','java.awt.geom.AffineTransform']]]

Clazz.newMeth(C$, 'c$$java_awt_geom_Path2D_Double$java_awt_geom_AffineTransform',  function (p2dd, at) {
;C$.superclazz.c$$java_awt_geom_Path2D.apply(this,[p2dd]);C$.$init$.apply(this);
this.doubleCoords=p2dd.doubleCoords;
this.affine=at;
}, 1);

Clazz.newMeth(C$, 'currentSegment$FA',  function (coords) {
var type=this.path.pointTypes[this.typeIdx];
var numCoords=$I$(1).curvecoords[type];
if (numCoords > 0) {
this.affine.transform$DA$I$FA$I$I(this.doubleCoords, this.pointIdx, coords, 0, (numCoords/2|0));
}return type;
});

Clazz.newMeth(C$, 'currentSegment$DA',  function (coords) {
var type=this.path.pointTypes[this.typeIdx];
var numCoords=$I$(1).curvecoords[type];
if (numCoords > 0) {
this.affine.transform$DA$I$DA$I$I(this.doubleCoords, this.pointIdx, coords, 0, (numCoords/2|0));
}return type;
});

Clazz.newMeth(C$);
})()
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:10 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
