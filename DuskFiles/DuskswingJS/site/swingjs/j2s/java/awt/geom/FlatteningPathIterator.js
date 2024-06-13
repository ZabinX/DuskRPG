(function(){var P$=Clazz.newPackage("java.awt.geom"),p$1={},I$=[[0,'java.awt.geom.QuadCurve2D','java.awt.geom.CubicCurve2D']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FlatteningPathIterator", null, null, 'java.awt.geom.PathIterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.hold=Clazz.array(Double.TYPE, [14]);
},1);

C$.$fields$=[['Z',['done'],'D',['squareflat','curx','cury','movx','movy'],'I',['limit','holdType','holdEnd','holdIndex','levelIndex'],'O',['src','java.awt.geom.PathIterator','hold','double[]','levels','int[]']]]

Clazz.newMeth(C$, 'c$$java_awt_geom_PathIterator$D',  function (src, flatness) {
C$.c$$java_awt_geom_PathIterator$D$I.apply(this, [src, flatness, 10]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_geom_PathIterator$D$I',  function (src, flatness, limit) {
;C$.$init$.apply(this);
if (flatness < 0.0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["flatness must be >= 0"]);
}if (limit < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["limit must be >= 0"]);
}this.src=src;
this.squareflat=flatness * flatness;
this.limit=limit;
this.levels=Clazz.array(Integer.TYPE, [limit + 1]);
p$1.next$Z.apply(this, [false]);
}, 1);

Clazz.newMeth(C$, 'getFlatness$',  function () {
return Math.sqrt(this.squareflat);
});

Clazz.newMeth(C$, 'getRecursionLimit$',  function () {
return this.limit;
});

Clazz.newMeth(C$, 'getWindingRule$',  function () {
return this.src.getWindingRule$();
});

Clazz.newMeth(C$, 'isDone$',  function () {
return this.done;
});

Clazz.newMeth(C$, 'ensureHoldCapacity$I',  function (want) {
if (this.holdIndex - want < 0) {
var have=this.hold.length - this.holdIndex;
var newsize=this.hold.length + 24;
var newhold=Clazz.array(Double.TYPE, [newsize]);
System.arraycopy$O$I$O$I$I(this.hold, this.holdIndex, newhold, this.holdIndex + 24, have);
this.hold=newhold;
this.holdIndex+=24;
this.holdEnd+=24;
}});

Clazz.newMeth(C$, 'next$',  function () {
p$1.next$Z.apply(this, [true]);
});

Clazz.newMeth(C$, 'next$Z',  function (doNext) {
var level;
if (this.holdIndex >= this.holdEnd) {
if (doNext) {
this.src.next$();
}if (this.src.isDone$()) {
this.done=true;
return;
}this.holdType=this.src.currentSegment$DA(this.hold);
this.levelIndex=0;
this.levels[0]=0;
}switch (this.holdType) {
case 0:
case 1:
this.curx=this.hold[0];
this.cury=this.hold[1];
if (this.holdType == 0) {
this.movx=this.curx;
this.movy=this.cury;
}this.holdIndex=0;
this.holdEnd=0;
break;
case 4:
this.curx=this.movx;
this.cury=this.movy;
this.holdIndex=0;
this.holdEnd=0;
break;
case 2:
if (this.holdIndex >= this.holdEnd) {
this.holdIndex=this.hold.length - 6;
this.holdEnd=this.hold.length - 2;
this.hold[this.holdIndex + 0]=this.curx;
this.hold[this.holdIndex + 1]=this.cury;
this.hold[this.holdIndex + 2]=this.hold[0];
this.hold[this.holdIndex + 3]=this.hold[1];
this.hold[this.holdIndex + 4]=this.curx=this.hold[2];
this.hold[this.holdIndex + 5]=this.cury=this.hold[3];
}level=this.levels[this.levelIndex];
while (level < this.limit){
if ($I$(1).getFlatnessSq$DA$I(this.hold, this.holdIndex) < this.squareflat ) {
break;
}this.ensureHoldCapacity$I(4);
$I$(1).subdivide$DA$I$DA$I$DA$I(this.hold, this.holdIndex, this.hold, this.holdIndex - 4, this.hold, this.holdIndex);
this.holdIndex-=4;
++level;
this.levels[this.levelIndex]=level;
++this.levelIndex;
this.levels[this.levelIndex]=level;
}
this.holdIndex+=4;
--this.levelIndex;
break;
case 3:
if (this.holdIndex >= this.holdEnd) {
this.holdIndex=this.hold.length - 8;
this.holdEnd=this.hold.length - 2;
this.hold[this.holdIndex + 0]=this.curx;
this.hold[this.holdIndex + 1]=this.cury;
this.hold[this.holdIndex + 2]=this.hold[0];
this.hold[this.holdIndex + 3]=this.hold[1];
this.hold[this.holdIndex + 4]=this.hold[2];
this.hold[this.holdIndex + 5]=this.hold[3];
this.hold[this.holdIndex + 6]=this.curx=this.hold[4];
this.hold[this.holdIndex + 7]=this.cury=this.hold[5];
}level=this.levels[this.levelIndex];
while (level < this.limit){
if ($I$(2).getFlatnessSq$DA$I(this.hold, this.holdIndex) < this.squareflat ) {
break;
}this.ensureHoldCapacity$I(6);
$I$(2).subdivide$DA$I$DA$I$DA$I(this.hold, this.holdIndex, this.hold, this.holdIndex - 6, this.hold, this.holdIndex);
this.holdIndex-=6;
++level;
this.levels[this.levelIndex]=level;
++this.levelIndex;
this.levels[this.levelIndex]=level;
}
this.holdIndex+=6;
--this.levelIndex;
break;
}
}, p$1);

Clazz.newMeth(C$, 'currentSegment$FA',  function (coords) {
if (this.isDone$()) {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException').c$$S,["flattening iterator out of bounds"]);
}var type=this.holdType;
if (type != 4) {
coords[0]=this.hold[this.holdIndex + 0];
coords[1]=this.hold[this.holdIndex + 1];
if (type != 0) {
type=1;
}}return type;
});

Clazz.newMeth(C$, 'currentSegment$DA',  function (coords) {
if (this.isDone$()) {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException').c$$S,["flattening iterator out of bounds"]);
}var type=this.holdType;
if (type != 4) {
coords[0]=this.hold[this.holdIndex + 0];
coords[1]=this.hold[this.holdIndex + 1];
if (type != 0) {
type=1;
}}return type;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:10 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
