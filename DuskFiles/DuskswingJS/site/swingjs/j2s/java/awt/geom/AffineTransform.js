(function(){var P$=Clazz.newPackage("java.awt.geom"),p$1={},I$=[[0,'InternalError',['java.awt.geom.Point2D','.Double'],['java.awt.geom.Point2D','.Float'],'javajs.util.AU',['java.awt.geom.Path2D','.Double']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AffineTransform", null, null, ['Cloneable', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['m00','m10','m01','m11','m02','m12'],'I',['state','type']]
,['O',['rot90conversion','int[]']]]

Clazz.newMeth(C$, 'c$$D$D$D$D$D$D$I',  function (m00, m10, m01, m11, m02, m12, state) {
;C$.$init$.apply(this);
this.m00=m00;
this.m10=m10;
this.m01=m01;
this.m11=m11;
this.m02=m02;
this.m12=m12;
this.state=state;
this.type=-1;
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.m00=this.m11=1.0;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_geom_AffineTransform',  function (Tx) {
;C$.$init$.apply(this);
this.m00=Tx.m00;
this.m10=Tx.m10;
this.m01=Tx.m01;
this.m11=Tx.m11;
this.m02=Tx.m02;
this.m12=Tx.m12;
this.state=Tx.state;
this.type=Tx.type;
}, 1);

Clazz.newMeth(C$, 'c$$F$F$F$F$F$F',  function (m00, m10, m01, m11, m02, m12) {
;C$.$init$.apply(this);
this.m00=m00;
this.m10=m10;
this.m01=m01;
this.m11=m11;
this.m02=m02;
this.m12=m12;
this.updateState$();
}, 1);

Clazz.newMeth(C$, 'c$$FA',  function (flatmatrix) {
;C$.$init$.apply(this);
this.m00=flatmatrix[0];
this.m10=flatmatrix[1];
this.m01=flatmatrix[2];
this.m11=flatmatrix[3];
if (flatmatrix.length > 5) {
this.m02=flatmatrix[4];
this.m12=flatmatrix[5];
}this.updateState$();
}, 1);

Clazz.newMeth(C$, 'c$$D$D$D$D$D$D',  function (m00, m10, m01, m11, m02, m12) {
;C$.$init$.apply(this);
this.m00=m00;
this.m10=m10;
this.m01=m01;
this.m11=m11;
this.m02=m02;
this.m12=m12;
this.updateState$();
}, 1);

Clazz.newMeth(C$, 'c$$DA',  function (flatmatrix) {
;C$.$init$.apply(this);
this.m00=flatmatrix[0];
this.m10=flatmatrix[1];
this.m01=flatmatrix[2];
this.m11=flatmatrix[3];
if (flatmatrix.length > 5) {
this.m02=flatmatrix[4];
this.m12=flatmatrix[5];
}this.updateState$();
}, 1);

Clazz.newMeth(C$, 'getTranslateInstance$D$D',  function (tx, ty) {
var Tx=Clazz.new_(C$);
Tx.setToTranslation$D$D(tx, ty);
return Tx;
}, 1);

Clazz.newMeth(C$, 'getRotateInstance$D',  function (theta) {
var Tx=Clazz.new_(C$);
p$1.setToRotationTheta$D.apply(Tx, [theta]);
return Tx;
}, 1);

Clazz.newMeth(C$, 'getRotateInstance$D$D$D',  function (theta, anchorx, anchory) {
var Tx=Clazz.new_(C$);
p$1.setToRotationThetaXY$D$D$D.apply(Tx, [theta, anchorx, anchory]);
return Tx;
}, 1);

Clazz.newMeth(C$, 'getRotateInstance$D$D',  function (vecx, vecy) {
var Tx=Clazz.new_(C$);
p$1.setToRotationXY$D$D.apply(Tx, [vecx, vecy]);
return Tx;
}, 1);

Clazz.newMeth(C$, 'getRotateInstance$D$D$D$D',  function (vecx, vecy, anchorx, anchory) {
var Tx=Clazz.new_(C$);
p$1.setToRotationV2XY$D$D$D$D.apply(Tx, [vecx, vecy, anchorx, anchory]);
return Tx;
}, 1);

Clazz.newMeth(C$, 'getQuadrantRotateInstance$I',  function (numquadrants) {
var Tx=Clazz.new_(C$);
Tx.setToQuadrantRotation$I(numquadrants);
return Tx;
}, 1);

Clazz.newMeth(C$, 'getQuadrantRotateInstance$I$D$D',  function (numquadrants, anchorx, anchory) {
var Tx=Clazz.new_(C$);
Tx.setToQuadrantRotation$I$D$D(numquadrants, anchorx, anchory);
return Tx;
}, 1);

Clazz.newMeth(C$, 'getScaleInstance$D$D',  function (sx, sy) {
var Tx=Clazz.new_(C$);
Tx.setToScale$D$D(sx, sy);
return Tx;
}, 1);

Clazz.newMeth(C$, 'getShearInstance$D$D',  function (shx, shy) {
var Tx=Clazz.new_(C$);
Tx.setToShear$D$D(shx, shy);
return Tx;
}, 1);

Clazz.newMeth(C$, 'getType$',  function () {
if (this.type == -1) {
p$1.calculateType.apply(this, []);
}return this.type;
});

Clazz.newMeth(C$, 'calculateType',  function () {
var ret=0;
var sgn0;
var sgn1;
var M0;
var M1;
var M2;
var M3;
this.updateState$();
switch (this.state) {
default:
p$1.stateError.apply(this, []);
case (7):
ret=1;
case (6):
if ((M0=this.m00) * (M2=this.m01) + (M3=this.m10) * (M1=this.m11) != 0 ) {
this.type=32;
return;
}sgn0=(M0 >= 0.0 );
sgn1=(M1 >= 0.0 );
if (sgn0 == sgn1 ) {
if (M0 != M1  || M2 != -M3  ) {
ret|=(20);
} else if (M0 * M1 - M2 * M3 != 1.0 ) {
ret|=(18);
} else {
ret|=16;
}} else {
if (M0 != -M1  || M2 != M3  ) {
ret|=(84);
} else if (M0 * M1 - M2 * M3 != 1.0 ) {
ret|=(82);
} else {
ret|=(80);
}}break;
case (5):
ret=1;
case (4):
sgn0=((M0=this.m01) >= 0.0 );
sgn1=((M1=this.m10) >= 0.0 );
if (sgn0 != sgn1 ) {
if (M0 != -M1 ) {
ret|=(12);
} else if (M0 != 1.0  && M0 != -1.0  ) {
ret|=(10);
} else {
ret|=8;
}} else {
if (M0 == M1 ) {
ret|=(74);
} else {
ret|=(76);
}}break;
case (3):
ret=1;
case (2):
sgn0=((M0=this.m00) >= 0.0 );
sgn1=((M1=this.m11) >= 0.0 );
if (sgn0 == sgn1 ) {
if (sgn0) {
if (M0 == M1 ) {
ret|=2;
} else {
ret|=4;
}} else {
if (M0 != M1 ) {
ret|=(12);
} else if (M0 != -1.0 ) {
ret|=(10);
} else {
ret|=8;
}}} else {
if (M0 == -M1 ) {
if (M0 == 1.0  || M0 == -1.0  ) {
ret|=64;
} else {
ret|=(66);
}} else {
ret|=(68);
}}break;
case (1):
ret=1;
break;
case (0):
break;
}
this.type=ret;
}, p$1);

Clazz.newMeth(C$, 'getDeterminant$',  function () {
switch (this.state) {
default:
p$1.stateError.apply(this, []);
case (7):
case (6):
return this.m00 * this.m11 - this.m01 * this.m10;
case (5):
case (4):
return -(this.m01 * this.m10);
case (3):
case (2):
return this.m00 * this.m11;
case (1):
case (0):
return 1.0;
}
});

Clazz.newMeth(C$, 'updateState$',  function () {
if (this.m01 == 0.0  && this.m10 == 0.0  ) {
if (this.m00 == 1.0  && this.m11 == 1.0  ) {
if (this.m02 == 0.0  && this.m12 == 0.0  ) {
this.state=0;
this.type=0;
} else {
this.state=1;
this.type=1;
}} else {
if (this.m02 == 0.0  && this.m12 == 0.0  ) {
this.state=2;
this.type=-1;
} else {
this.state=(3);
this.type=-1;
}}} else {
if (this.m00 == 0.0  && this.m11 == 0.0  ) {
if (this.m02 == 0.0  && this.m12 == 0.0  ) {
this.state=4;
this.type=-1;
} else {
this.state=(5);
this.type=-1;
}} else {
if (this.m02 == 0.0  && this.m12 == 0.0  ) {
this.state=(6);
this.type=-1;
} else {
this.state=(7);
this.type=-1;
}}}});

Clazz.newMeth(C$, 'stateError',  function () {
throw Clazz.new_($I$(1,1).c$$S,["missing case in transform state switch"]);
}, p$1);

Clazz.newMeth(C$, 'getMatrix$DA',  function (flatmatrix) {
flatmatrix[0]=this.m00;
flatmatrix[1]=this.m10;
flatmatrix[2]=this.m01;
flatmatrix[3]=this.m11;
if (flatmatrix.length > 5) {
flatmatrix[4]=this.m02;
flatmatrix[5]=this.m12;
}});

Clazz.newMeth(C$, 'getScaleX$',  function () {
return this.m00;
});

Clazz.newMeth(C$, 'getScaleY$',  function () {
return this.m11;
});

Clazz.newMeth(C$, 'getShearX$',  function () {
return this.m01;
});

Clazz.newMeth(C$, 'getShearY$',  function () {
return this.m10;
});

Clazz.newMeth(C$, 'getTranslateX$',  function () {
return this.m02;
});

Clazz.newMeth(C$, 'getTranslateY$',  function () {
return this.m12;
});

Clazz.newMeth(C$, 'translate$D$D',  function (tx, ty) {
switch (this.state) {
default:
p$1.stateError.apply(this, []);
case (7):
this.m02=tx * this.m00 + ty * this.m01 + this.m02;
this.m12=tx * this.m10 + ty * this.m11 + this.m12;
if (this.m02 == 0.0  && this.m12 == 0.0  ) {
this.state=6;
if (this.type != -1) {
this.type-=1;
}}return;
case (6):
this.m02=tx * this.m00 + ty * this.m01;
this.m12=tx * this.m10 + ty * this.m11;
if (this.m02 != 0.0  || this.m12 != 0.0  ) {
this.state=7;
this.type|=1;
}return;
case (5):
this.m02=ty * this.m01 + this.m02;
this.m12=tx * this.m10 + this.m12;
if (this.m02 == 0.0  && this.m12 == 0.0  ) {
this.state=4;
if (this.type != -1) {
this.type-=1;
}}return;
case (4):
this.m02=ty * this.m01;
this.m12=tx * this.m10;
if (this.m02 != 0.0  || this.m12 != 0.0  ) {
this.state=5;
this.type|=1;
}return;
case (3):
this.m02=tx * this.m00 + this.m02;
this.m12=ty * this.m11 + this.m12;
if (this.m02 == 0.0  && this.m12 == 0.0  ) {
this.state=2;
if (this.type != -1) {
this.type-=1;
}}return;
case (2):
this.m02=tx * this.m00;
this.m12=ty * this.m11;
if (this.m02 != 0.0  || this.m12 != 0.0  ) {
this.state=3;
this.type|=1;
}return;
case (1):
this.m02=tx + this.m02;
this.m12=ty + this.m12;
if (this.m02 == 0.0  && this.m12 == 0.0  ) {
this.state=0;
this.type=0;
}return;
case (0):
this.m02=tx;
this.m12=ty;
if (tx != 0.0  || ty != 0.0  ) {
this.state=1;
this.type=1;
}return;
}
});

Clazz.newMeth(C$, 'rotate90',  function () {
var M0=this.m00;
this.m00=this.m01;
this.m01=-M0;
M0=this.m10;
this.m10=this.m11;
this.m11=-M0;
var state=C$.rot90conversion[this.state];
if ((state & (6)) == 2 && this.m00 == 1.0   && this.m11 == 1.0  ) {
state-=2;
}this.state=state;
this.type=-1;
}, p$1);

Clazz.newMeth(C$, 'rotate180',  function () {
this.m00=-this.m00;
this.m11=-this.m11;
var state=this.state;
if ((state & (4)) != 0) {
this.m01=-this.m01;
this.m10=-this.m10;
} else {
if (this.m00 == 1.0  && this.m11 == 1.0  ) {
this.state=state & ~2;
} else {
this.state=state | 2;
}}this.type=-1;
}, p$1);

Clazz.newMeth(C$, 'rotate270',  function () {
var M0=this.m00;
this.m00=-this.m01;
this.m01=M0;
M0=this.m10;
this.m10=-this.m11;
this.m11=M0;
var state=C$.rot90conversion[this.state];
if ((state & (6)) == 2 && this.m00 == 1.0   && this.m11 == 1.0  ) {
state-=2;
}this.state=state;
this.type=-1;
}, p$1);

Clazz.newMeth(C$, 'rotate$D',  function (theta) {
var sin=Math.sin(theta);
if (sin == 1.0 ) {
p$1.rotate90.apply(this, []);
} else if (sin == -1.0 ) {
p$1.rotate270.apply(this, []);
} else {
var cos=Math.cos(theta);
if (cos == -1.0 ) {
p$1.rotate180.apply(this, []);
} else if (cos != 1.0 ) {
var M0;
var M1;
M0=this.m00;
M1=this.m01;
this.m00=cos * M0 + sin * M1;
this.m01=-sin * M0 + cos * M1;
M0=this.m10;
M1=this.m11;
this.m10=cos * M0 + sin * M1;
this.m11=-sin * M0 + cos * M1;
this.updateState$();
}}});

Clazz.newMeth(C$, 'rotate$D$D$D',  function (theta, anchorx, anchory) {
this.translate$D$D(anchorx, anchory);
this.rotate$D(theta);
this.translate$D$D(-anchorx, -anchory);
});

Clazz.newMeth(C$, 'rotate$D$D',  function (vecx, vecy) {
if (vecy == 0.0 ) {
if (vecx < 0.0 ) {
p$1.rotate180.apply(this, []);
}} else if (vecx == 0.0 ) {
if (vecy > 0.0 ) {
p$1.rotate90.apply(this, []);
} else {
p$1.rotate270.apply(this, []);
}} else {
var len=Math.sqrt(vecx * vecx + vecy * vecy);
var sin=vecy / len;
var cos=vecx / len;
var M0;
var M1;
M0=this.m00;
M1=this.m01;
this.m00=cos * M0 + sin * M1;
this.m01=-sin * M0 + cos * M1;
M0=this.m10;
M1=this.m11;
this.m10=cos * M0 + sin * M1;
this.m11=-sin * M0 + cos * M1;
this.updateState$();
}});

Clazz.newMeth(C$, 'rotate$D$D$D$D',  function (vecx, vecy, anchorx, anchory) {
this.translate$D$D(anchorx, anchory);
this.rotate$D$D(vecx, vecy);
this.translate$D$D(-anchorx, -anchory);
});

Clazz.newMeth(C$, 'quadrantRotate$I',  function (numquadrants) {
switch (numquadrants & 3) {
case 0:
break;
case 1:
p$1.rotate90.apply(this, []);
break;
case 2:
p$1.rotate180.apply(this, []);
break;
case 3:
p$1.rotate270.apply(this, []);
break;
}
});

Clazz.newMeth(C$, 'quadrantRotate$I$D$D',  function (numquadrants, anchorx, anchory) {
switch (numquadrants & 3) {
case 0:
return;
case 1:
this.m02+=anchorx * (this.m00 - this.m01) + anchory * (this.m01 + this.m00);
this.m12+=anchorx * (this.m10 - this.m11) + anchory * (this.m11 + this.m10);
p$1.rotate90.apply(this, []);
break;
case 2:
this.m02+=anchorx * (this.m00 + this.m00) + anchory * (this.m01 + this.m01);
this.m12+=anchorx * (this.m10 + this.m10) + anchory * (this.m11 + this.m11);
p$1.rotate180.apply(this, []);
break;
case 3:
this.m02+=anchorx * (this.m00 + this.m01) + anchory * (this.m01 - this.m00);
this.m12+=anchorx * (this.m10 + this.m11) + anchory * (this.m11 - this.m10);
p$1.rotate270.apply(this, []);
break;
}
if (this.m02 == 0.0  && this.m12 == 0.0  ) {
this.state&=~1;
} else {
this.state|=1;
}});

Clazz.newMeth(C$, 'scale$D$D',  function (sx, sy) {
var state=this.state;
switch (state) {
default:
p$1.stateError.apply(this, []);
case (7):
case (6):
this.m00*=sx;
this.m11*=sy;
case (5):
case (4):
this.m01*=sy;
this.m10*=sx;
if (this.m01 == 0  && this.m10 == 0  ) {
state&=1;
if (this.m00 == 1.0  && this.m11 == 1.0  ) {
this.type=(state == 0 ? 0 : 1);
} else {
state|=2;
this.type=-1;
}this.state=state;
}return;
case (3):
case (2):
this.m00*=sx;
this.m11*=sy;
if (this.m00 == 1.0  && this.m11 == 1.0  ) {
this.state=(state&=1);
this.type=(state == 0 ? 0 : 1);
} else {
this.type=-1;
}return;
case (1):
case (0):
this.m00=sx;
this.m11=sy;
if (sx != 1.0  || sy != 1.0  ) {
this.state=state | 2;
this.type=-1;
}return;
}
});

Clazz.newMeth(C$, 'shear$D$D',  function (shx, shy) {
var state=this.state;
switch (state) {
default:
p$1.stateError.apply(this, []);
case (7):
case (6):
var M0;
var M1;
M0=this.m00;
M1=this.m01;
this.m00=M0 + M1 * shy;
this.m01=M0 * shx + M1;
M0=this.m10;
M1=this.m11;
this.m10=M0 + M1 * shy;
this.m11=M0 * shx + M1;
this.updateState$();
return;
case (5):
case (4):
this.m00=this.m01 * shy;
this.m11=this.m10 * shx;
if (this.m00 != 0.0  || this.m11 != 0.0  ) {
this.state=state | 2;
}this.type=-1;
return;
case (3):
case (2):
this.m01=this.m00 * shx;
this.m10=this.m11 * shy;
if (this.m01 != 0.0  || this.m10 != 0.0  ) {
this.state=state | 4;
}this.type=-1;
return;
case (1):
case (0):
this.m01=shx;
this.m10=shy;
if (this.m01 != 0.0  || this.m10 != 0.0  ) {
this.state=state | 2 | 4 ;
this.type=-1;
}return;
}
});

Clazz.newMeth(C$, 'setToIdentity$',  function () {
this.m00=this.m11=1.0;
this.m10=this.m01=this.m02=this.m12=0.0;
this.state=0;
this.type=0;
});

Clazz.newMeth(C$, 'setToTranslation$D$D',  function (tx, ty) {
this.m00=1.0;
this.m10=0.0;
this.m01=0.0;
this.m11=1.0;
this.m02=tx;
this.m12=ty;
if (tx != 0.0  || ty != 0.0  ) {
this.state=1;
this.type=1;
} else {
this.state=0;
this.type=0;
}});

Clazz.newMeth(C$, 'setToRotation$D',  function (theta) {
p$1.setToRotationTheta$D.apply(this, [theta]);
});

Clazz.newMeth(C$, 'setToRotationTheta$D',  function (theta) {
var sin=Math.sin(theta);
var cos;
if (sin == 1.0  || sin == -1.0  ) {
cos=0.0;
this.state=4;
this.type=8;
} else {
cos=Math.cos(theta);
if (cos == -1.0 ) {
sin=0.0;
this.state=2;
this.type=8;
} else if (cos == 1.0 ) {
sin=0.0;
this.state=0;
this.type=0;
} else {
this.state=6;
this.type=16;
}}this.m00=cos;
this.m10=sin;
this.m01=-sin;
this.m11=cos;
this.m02=0.0;
this.m12=0.0;
}, p$1);

Clazz.newMeth(C$, 'setToRotation$D$D$D',  function (theta, anchorx, anchory) {
p$1.setToRotationThetaXY$D$D$D.apply(this, [theta, anchorx, anchory]);
});

Clazz.newMeth(C$, 'setToRotationThetaXY$D$D$D',  function (theta, anchorx, anchory) {
p$1.setToRotationTheta$D.apply(this, [theta]);
var sin=this.m10;
var oneMinusCos=1.0 - this.m00;
this.m02=anchorx * oneMinusCos + anchory * sin;
this.m12=anchory * oneMinusCos - anchorx * sin;
if (this.m02 != 0.0  || this.m12 != 0.0  ) {
this.state|=1;
this.type|=1;
}}, p$1);

Clazz.newMeth(C$, 'setToRotation$D$D',  function (vecx, vecy) {
p$1.setToRotationXY$D$D.apply(this, [vecx, vecy]);
});

Clazz.newMeth(C$, 'setToRotationXY$D$D',  function (vecx, vecy) {
var sin;
var cos;
if (vecy == 0 ) {
sin=0.0;
if (vecx < 0.0 ) {
cos=-1.0;
this.state=2;
this.type=8;
} else {
cos=1.0;
this.state=0;
this.type=0;
}} else if (vecx == 0 ) {
cos=0.0;
sin=(vecy > 0.0 ) ? 1.0 : -1.0;
this.state=4;
this.type=8;
} else {
var len=Math.sqrt(vecx * vecx + vecy * vecy);
cos=vecx / len;
sin=vecy / len;
this.state=6;
this.type=16;
}this.m00=cos;
this.m10=sin;
this.m01=-sin;
this.m11=cos;
this.m02=0.0;
this.m12=0.0;
}, p$1);

Clazz.newMeth(C$, 'setToRotation$D$D$D$D',  function (vecx, vecy, anchorx, anchory) {
p$1.setToRotationV2XY$D$D$D$D.apply(this, [vecx, vecy, anchorx, anchory]);
});

Clazz.newMeth(C$, 'setToRotationV2XY$D$D$D$D',  function (vecx, vecy, anchorx, anchory) {
p$1.setToRotationXY$D$D.apply(this, [vecx, vecy]);
var sin=this.m10;
var oneMinusCos=1.0 - this.m00;
this.m02=anchorx * oneMinusCos + anchory * sin;
this.m12=anchory * oneMinusCos - anchorx * sin;
if (this.m02 != 0.0  || this.m12 != 0.0  ) {
this.state|=1;
this.type|=1;
}}, p$1);

Clazz.newMeth(C$, 'setToQuadrantRotation$I',  function (numquadrants) {
switch (numquadrants & 3) {
case 0:
this.m00=1.0;
this.m10=0.0;
this.m01=0.0;
this.m11=1.0;
this.m02=0.0;
this.m12=0.0;
this.state=0;
this.type=0;
break;
case 1:
this.m00=0.0;
this.m10=1.0;
this.m01=-1.0;
this.m11=0.0;
this.m02=0.0;
this.m12=0.0;
this.state=4;
this.type=8;
break;
case 2:
this.m00=-1.0;
this.m10=0.0;
this.m01=0.0;
this.m11=-1.0;
this.m02=0.0;
this.m12=0.0;
this.state=2;
this.type=8;
break;
case 3:
this.m00=0.0;
this.m10=-1.0;
this.m01=1.0;
this.m11=0.0;
this.m02=0.0;
this.m12=0.0;
this.state=4;
this.type=8;
break;
}
});

Clazz.newMeth(C$, 'setToQuadrantRotation$I$D$D',  function (numquadrants, anchorx, anchory) {
switch (numquadrants & 3) {
case 0:
this.m00=1.0;
this.m10=0.0;
this.m01=0.0;
this.m11=1.0;
this.m02=0.0;
this.m12=0.0;
this.state=0;
this.type=0;
break;
case 1:
this.m00=0.0;
this.m10=1.0;
this.m01=-1.0;
this.m11=0.0;
this.m02=anchorx + anchory;
this.m12=anchory - anchorx;
if (this.m02 == 0.0  && this.m12 == 0.0  ) {
this.state=4;
this.type=8;
} else {
this.state=5;
this.type=9;
}break;
case 2:
this.m00=-1.0;
this.m10=0.0;
this.m01=0.0;
this.m11=-1.0;
this.m02=anchorx + anchorx;
this.m12=anchory + anchory;
if (this.m02 == 0.0  && this.m12 == 0.0  ) {
this.state=2;
this.type=8;
} else {
this.state=3;
this.type=9;
}break;
case 3:
this.m00=0.0;
this.m10=-1.0;
this.m01=1.0;
this.m11=0.0;
this.m02=anchorx - anchory;
this.m12=anchory + anchorx;
if (this.m02 == 0.0  && this.m12 == 0.0  ) {
this.state=4;
this.type=8;
} else {
this.state=5;
this.type=9;
}break;
}
});

Clazz.newMeth(C$, 'setToScale$D$D',  function (sx, sy) {
this.m00=sx;
this.m10=0.0;
this.m01=0.0;
this.m11=sy;
this.m02=0.0;
this.m12=0.0;
if (sx != 1.0  || sy != 1.0  ) {
this.state=2;
this.type=-1;
} else {
this.state=0;
this.type=0;
}});

Clazz.newMeth(C$, 'setToShear$D$D',  function (shx, shy) {
this.m00=1.0;
this.m01=shx;
this.m10=shy;
this.m11=1.0;
this.m02=0.0;
this.m12=0.0;
if (shx != 0.0  || shy != 0.0  ) {
this.state=(6);
this.type=-1;
} else {
this.state=0;
this.type=0;
}});

Clazz.newMeth(C$, 'setTransform$java_awt_geom_AffineTransform',  function (t) {
this.m00=t.m00;
this.m10=t.m10;
this.m01=t.m01;
this.m11=t.m11;
this.m02=t.m02;
this.m12=t.m12;
this.state=t.state;
this.type=t.type;
});

Clazz.newMeth(C$, 'setTransform$D$D$D$D$D$D',  function (m00, m10, m01, m11, m02, m12) {
this.m00=m00;
this.m10=m10;
this.m01=m01;
this.m11=m11;
this.m02=m02;
this.m12=m12;
this.updateState$();
});

Clazz.newMeth(C$, 'concatenate$java_awt_geom_AffineTransform',  function (Tx) {
var M0;
var M1;
var T00;
var T01;
var T10;
var T11;
var T02;
var T12;
var mystate=this.state;
var txstate=Tx.state;
switch ((txstate << 3) | mystate) {
case (0):
case (1):
case (2):
case (3):
case (4):
case (5):
case (6):
case (7):
return;
case (56):
this.m01=Tx.m01;
this.m10=Tx.m10;
case (24):
this.m00=Tx.m00;
this.m11=Tx.m11;
case (8):
this.m02=Tx.m02;
this.m12=Tx.m12;
this.state=txstate;
this.type=Tx.type;
return;
case (48):
this.m01=Tx.m01;
this.m10=Tx.m10;
case (16):
this.m00=Tx.m00;
this.m11=Tx.m11;
this.state=txstate;
this.type=Tx.type;
return;
case (40):
this.m02=Tx.m02;
this.m12=Tx.m12;
case (32):
this.m01=Tx.m01;
this.m10=Tx.m10;
this.m00=this.m11=0.0;
this.state=txstate;
this.type=Tx.type;
return;
case (15):
case (14):
case (13):
case (12):
case (11):
case (10):
case (9):
this.translate$D$D(Tx.m02, Tx.m12);
return;
case (23):
case (22):
case (21):
case (20):
case (19):
case (18):
case (17):
this.scale$D$D(Tx.m00, Tx.m11);
return;
case (39):
case (38):
T01=Tx.m01;
T10=Tx.m10;
M0=this.m00;
this.m00=this.m01 * T10;
this.m01=M0 * T01;
M0=this.m10;
this.m10=this.m11 * T10;
this.m11=M0 * T01;
this.type=-1;
return;
case (37):
case (36):
this.m00=this.m01 * Tx.m10;
this.m01=0.0;
this.m11=this.m10 * Tx.m01;
this.m10=0.0;
this.state=mystate ^ (6);
this.type=-1;
return;
case (35):
case (34):
this.m01=this.m00 * Tx.m01;
this.m00=0.0;
this.m10=this.m11 * Tx.m10;
this.m11=0.0;
this.state=mystate ^ (6);
this.type=-1;
return;
case (33):
this.m00=0.0;
this.m01=Tx.m01;
this.m10=Tx.m10;
this.m11=0.0;
this.state=5;
this.type=-1;
return;
}
T00=Tx.m00;
T01=Tx.m01;
T02=Tx.m02;
T10=Tx.m10;
T11=Tx.m11;
T12=Tx.m12;
switch (mystate) {
default:
p$1.stateError.apply(this, []);
case (6):
this.state=mystate | txstate;
case (7):
M0=this.m00;
M1=this.m01;
this.m00=T00 * M0 + T10 * M1;
this.m01=T01 * M0 + T11 * M1;
this.m02+=T02 * M0 + T12 * M1;
M0=this.m10;
M1=this.m11;
this.m10=T00 * M0 + T10 * M1;
this.m11=T01 * M0 + T11 * M1;
this.m12+=T02 * M0 + T12 * M1;
this.type=-1;
return;
case (5):
case (4):
M0=this.m01;
this.m00=T10 * M0;
this.m01=T11 * M0;
this.m02+=T12 * M0;
M0=this.m10;
this.m10=T00 * M0;
this.m11=T01 * M0;
this.m12+=T02 * M0;
break;
case (3):
case (2):
M0=this.m00;
this.m00=T00 * M0;
this.m01=T01 * M0;
this.m02+=T02 * M0;
M0=this.m11;
this.m10=T10 * M0;
this.m11=T11 * M0;
this.m12+=T12 * M0;
break;
case (1):
this.m00=T00;
this.m01=T01;
this.m02+=T02;
this.m10=T10;
this.m11=T11;
this.m12+=T12;
this.state=txstate | 1;
this.type=-1;
return;
}
this.updateState$();
});

Clazz.newMeth(C$, 'preConcatenate$java_awt_geom_AffineTransform',  function (Tx) {
var M0;
var M1;
var T00;
var T01;
var T10;
var T11;
var T02;
var T12;
var mystate=this.state;
var txstate=Tx.state;
switch ((txstate << 3) | mystate) {
case (0):
case (1):
case (2):
case (3):
case (4):
case (5):
case (6):
case (7):
return;
case (8):
case (10):
case (12):
case (14):
this.m02=Tx.m02;
this.m12=Tx.m12;
this.state=mystate | 1;
this.type|=1;
return;
case (9):
case (11):
case (13):
case (15):
this.m02=this.m02 + Tx.m02;
this.m12=this.m12 + Tx.m12;
return;
case (17):
case (16):
this.state=mystate | 2;
case (23):
case (22):
case (21):
case (20):
case (19):
case (18):
T00=Tx.m00;
T11=Tx.m11;
if ((mystate & 4) != 0) {
this.m01=this.m01 * T00;
this.m10=this.m10 * T11;
if ((mystate & 2) != 0) {
this.m00=this.m00 * T00;
this.m11=this.m11 * T11;
}} else {
this.m00=this.m00 * T00;
this.m11=this.m11 * T11;
}if ((mystate & 1) != 0) {
this.m02=this.m02 * T00;
this.m12=this.m12 * T11;
}this.type=-1;
return;
case (37):
case (36):
mystate=mystate | 2;
case (33):
case (32):
case (35):
case (34):
this.state=mystate ^ 4;
case (39):
case (38):
T01=Tx.m01;
T10=Tx.m10;
M0=this.m00;
this.m00=this.m10 * T01;
this.m10=M0 * T10;
M0=this.m01;
this.m01=this.m11 * T01;
this.m11=M0 * T10;
M0=this.m02;
this.m02=this.m12 * T01;
this.m12=M0 * T10;
this.type=-1;
return;
}
T00=Tx.m00;
T01=Tx.m01;
T02=Tx.m02;
T10=Tx.m10;
T11=Tx.m11;
T12=Tx.m12;
switch (mystate) {
default:
p$1.stateError.apply(this, []);
case (7):
M0=this.m02;
M1=this.m12;
T02+=M0 * T00 + M1 * T01;
T12+=M0 * T10 + M1 * T11;
case (6):
this.m02=T02;
this.m12=T12;
M0=this.m00;
M1=this.m10;
this.m00=M0 * T00 + M1 * T01;
this.m10=M0 * T10 + M1 * T11;
M0=this.m01;
M1=this.m11;
this.m01=M0 * T00 + M1 * T01;
this.m11=M0 * T10 + M1 * T11;
break;
case (5):
M0=this.m02;
M1=this.m12;
T02+=M0 * T00 + M1 * T01;
T12+=M0 * T10 + M1 * T11;
case (4):
this.m02=T02;
this.m12=T12;
M0=this.m10;
this.m00=M0 * T01;
this.m10=M0 * T11;
M0=this.m01;
this.m01=M0 * T00;
this.m11=M0 * T10;
break;
case (3):
M0=this.m02;
M1=this.m12;
T02+=M0 * T00 + M1 * T01;
T12+=M0 * T10 + M1 * T11;
case (2):
this.m02=T02;
this.m12=T12;
M0=this.m00;
this.m00=M0 * T00;
this.m10=M0 * T10;
M0=this.m11;
this.m01=M0 * T01;
this.m11=M0 * T11;
break;
case (1):
M0=this.m02;
M1=this.m12;
T02+=M0 * T00 + M1 * T01;
T12+=M0 * T10 + M1 * T11;
case (0):
this.m02=T02;
this.m12=T12;
this.m00=T00;
this.m10=T10;
this.m01=T01;
this.m11=T11;
this.state=mystate | txstate;
this.type=-1;
return;
}
this.updateState$();
});

Clazz.newMeth(C$, 'createInverse$',  function () {
var det;
switch (this.state) {
default:
p$1.stateError.apply(this, []);
case (7):
det=this.m00 * this.m11 - this.m01 * this.m10;
if (Math.abs(det) <= 4.9E-324 ) {
throw Clazz.new_(Clazz.load('java.awt.geom.NoninvertibleTransformException').c$$S,["Determinant is " + new Double(det).toString()]);
}return Clazz.new_(C$.c$$D$D$D$D$D$D$I,[this.m11 / det, -this.m10 / det, -this.m01 / det, this.m00 / det, (this.m01 * this.m12 - this.m11 * this.m02) / det, (this.m10 * this.m02 - this.m00 * this.m12) / det, (7)]);
case (6):
det=this.m00 * this.m11 - this.m01 * this.m10;
if (Math.abs(det) <= 4.9E-324 ) {
throw Clazz.new_(Clazz.load('java.awt.geom.NoninvertibleTransformException').c$$S,["Determinant is " + new Double(det).toString()]);
}return Clazz.new_(C$.c$$D$D$D$D$D$D$I,[this.m11 / det, -this.m10 / det, -this.m01 / det, this.m00 / det, 0.0, 0.0, (6)]);
case (5):
if (this.m01 == 0.0  || this.m10 == 0.0  ) {
throw Clazz.new_(Clazz.load('java.awt.geom.NoninvertibleTransformException').c$$S,["Determinant is 0"]);
}return Clazz.new_(C$.c$$D$D$D$D$D$D$I,[0.0, 1.0 / this.m01, 1.0 / this.m10, 0.0, -this.m12 / this.m10, -this.m02 / this.m01, (5)]);
case (4):
if (this.m01 == 0.0  || this.m10 == 0.0  ) {
throw Clazz.new_(Clazz.load('java.awt.geom.NoninvertibleTransformException').c$$S,["Determinant is 0"]);
}return Clazz.new_(C$.c$$D$D$D$D$D$D$I,[0.0, 1.0 / this.m01, 1.0 / this.m10, 0.0, 0.0, 0.0, (4)]);
case (3):
if (this.m00 == 0.0  || this.m11 == 0.0  ) {
throw Clazz.new_(Clazz.load('java.awt.geom.NoninvertibleTransformException').c$$S,["Determinant is 0"]);
}return Clazz.new_(C$.c$$D$D$D$D$D$D$I,[1.0 / this.m00, 0.0, 0.0, 1.0 / this.m11, -this.m02 / this.m00, -this.m12 / this.m11, (3)]);
case (2):
if (this.m00 == 0.0  || this.m11 == 0.0  ) {
throw Clazz.new_(Clazz.load('java.awt.geom.NoninvertibleTransformException').c$$S,["Determinant is 0"]);
}return Clazz.new_(C$.c$$D$D$D$D$D$D$I,[1.0 / this.m00, 0.0, 0.0, 1.0 / this.m11, 0.0, 0.0, (2)]);
case (1):
return Clazz.new_(C$.c$$D$D$D$D$D$D$I,[1.0, 0.0, 0.0, 1.0, -this.m02, -this.m12, (1)]);
case (0):
return Clazz.new_(C$);
}
});

Clazz.newMeth(C$, 'invert$',  function () {
var M00;
var M01;
var M02;
var M10;
var M11;
var M12;
var det;
switch (this.state) {
default:
p$1.stateError.apply(this, []);
case (7):
M00=this.m00;
M01=this.m01;
M02=this.m02;
M10=this.m10;
M11=this.m11;
M12=this.m12;
det=M00 * M11 - M01 * M10;
if (Math.abs(det) <= 4.9E-324 ) {
throw Clazz.new_(Clazz.load('java.awt.geom.NoninvertibleTransformException').c$$S,["Determinant is " + new Double(det).toString()]);
}this.m00=M11 / det;
this.m10=-M10 / det;
this.m01=-M01 / det;
this.m11=M00 / det;
this.m02=(M01 * M12 - M11 * M02) / det;
this.m12=(M10 * M02 - M00 * M12) / det;
break;
case (6):
M00=this.m00;
M01=this.m01;
M10=this.m10;
M11=this.m11;
det=M00 * M11 - M01 * M10;
if (Math.abs(det) <= 4.9E-324 ) {
throw Clazz.new_(Clazz.load('java.awt.geom.NoninvertibleTransformException').c$$S,["Determinant is " + new Double(det).toString()]);
}this.m00=M11 / det;
this.m10=-M10 / det;
this.m01=-M01 / det;
this.m11=M00 / det;
break;
case (5):
M01=this.m01;
M02=this.m02;
M10=this.m10;
M12=this.m12;
if (M01 == 0.0  || M10 == 0.0  ) {
throw Clazz.new_(Clazz.load('java.awt.geom.NoninvertibleTransformException').c$$S,["Determinant is 0"]);
}this.m10=1.0 / M01;
this.m01=1.0 / M10;
this.m02=-M12 / M10;
this.m12=-M02 / M01;
break;
case (4):
M01=this.m01;
M10=this.m10;
if (M01 == 0.0  || M10 == 0.0  ) {
throw Clazz.new_(Clazz.load('java.awt.geom.NoninvertibleTransformException').c$$S,["Determinant is 0"]);
}this.m10=1.0 / M01;
this.m01=1.0 / M10;
break;
case (3):
M00=this.m00;
M02=this.m02;
M11=this.m11;
M12=this.m12;
if (M00 == 0.0  || M11 == 0.0  ) {
throw Clazz.new_(Clazz.load('java.awt.geom.NoninvertibleTransformException').c$$S,["Determinant is 0"]);
}this.m00=1.0 / M00;
this.m11=1.0 / M11;
this.m02=-M02 / M00;
this.m12=-M12 / M11;
break;
case (2):
M00=this.m00;
M11=this.m11;
if (M00 == 0.0  || M11 == 0.0  ) {
throw Clazz.new_(Clazz.load('java.awt.geom.NoninvertibleTransformException').c$$S,["Determinant is 0"]);
}this.m00=1.0 / M00;
this.m11=1.0 / M11;
break;
case (1):
this.m02=-this.m02;
this.m12=-this.m12;
break;
case (0):
break;
}
});

Clazz.newMeth(C$, 'transform$java_awt_geom_Point2D$java_awt_geom_Point2D',  function (ptSrc, ptDst) {
if (ptDst == null ) {
if (Clazz.instanceOf(ptSrc, "java.awt.geom.Point2D.Double")) {
ptDst=Clazz.new_($I$(2,1));
} else {
ptDst=Clazz.new_($I$(3,1));
}}var x=ptSrc.getX$();
var y=ptSrc.getY$();
switch (this.state) {
default:
p$1.stateError.apply(this, []);
case (7):
ptDst.setLocation$D$D(x * this.m00 + y * this.m01 + this.m02, x * this.m10 + y * this.m11 + this.m12);
return ptDst;
case (6):
ptDst.setLocation$D$D(x * this.m00 + y * this.m01, x * this.m10 + y * this.m11);
return ptDst;
case (5):
ptDst.setLocation$D$D(y * this.m01 + this.m02, x * this.m10 + this.m12);
return ptDst;
case (4):
ptDst.setLocation$D$D(y * this.m01, x * this.m10);
return ptDst;
case (3):
ptDst.setLocation$D$D(x * this.m00 + this.m02, y * this.m11 + this.m12);
return ptDst;
case (2):
ptDst.setLocation$D$D(x * this.m00, y * this.m11);
return ptDst;
case (1):
ptDst.setLocation$D$D(x + this.m02, y + this.m12);
return ptDst;
case (0):
ptDst.setLocation$D$D(x, y);
return ptDst;
}
});

Clazz.newMeth(C$, 'transform$java_awt_geom_Point2DA$I$java_awt_geom_Point2DA$I$I',  function (ptSrc, srcOff, ptDst, dstOff, numPts) {
p$1.transformPts$java_awt_geom_Point2DA$I$java_awt_geom_Point2DA$I$I.apply(this, [ptSrc, srcOff, ptDst, dstOff, numPts]);
});

Clazz.newMeth(C$, 'transformPts$java_awt_geom_Point2DA$I$java_awt_geom_Point2DA$I$I',  function (ptSrc, srcOff, ptDst, dstOff, numPts) {
var state=this.state;
while (--numPts >= 0){
var src=ptSrc[srcOff++];
var x=src.getX$();
var y=src.getY$();
var dst=ptDst[dstOff++];
if (dst == null ) {
if (Clazz.instanceOf(src, "java.awt.geom.Point2D.Double")) {
dst=Clazz.new_($I$(2,1));
} else {
dst=Clazz.new_($I$(3,1));
}ptDst[dstOff - 1]=dst;
}switch (state) {
default:
p$1.stateError.apply(this, []);
case (7):
dst.setLocation$D$D(x * this.m00 + y * this.m01 + this.m02, x * this.m10 + y * this.m11 + this.m12);
break;
case (6):
dst.setLocation$D$D(x * this.m00 + y * this.m01, x * this.m10 + y * this.m11);
break;
case (5):
dst.setLocation$D$D(y * this.m01 + this.m02, x * this.m10 + this.m12);
break;
case (4):
dst.setLocation$D$D(y * this.m01, x * this.m10);
break;
case (3):
dst.setLocation$D$D(x * this.m00 + this.m02, y * this.m11 + this.m12);
break;
case (2):
dst.setLocation$D$D(x * this.m00, y * this.m11);
break;
case (1):
dst.setLocation$D$D(x + this.m02, y + this.m12);
break;
case (0):
dst.setLocation$D$D(x, y);
break;
}
}
}, p$1);

Clazz.newMeth(C$, 'transform$FA$I$FA$I$I',  function (srcPts, srcOff, dstPts, dstOff, numPts) {
var M00;
var M01;
var M02;
var M10;
var M11;
var M12;
if (dstPts === srcPts  && dstOff > srcOff  && dstOff < srcOff + numPts * 2 ) {
System.arraycopy$O$I$O$I$I(srcPts, srcOff, dstPts, dstOff, numPts * 2);
srcOff=dstOff;
}switch (this.state) {
default:
p$1.stateError.apply(this, []);
case (7):
M00=this.m00;
M01=this.m01;
M02=this.m02;
M10=this.m10;
M11=this.m11;
M12=this.m12;
while (--numPts >= 0){
var x=srcPts[srcOff++];
var y=srcPts[srcOff++];
dstPts[dstOff++]=(M00 * x + M01 * y + M02);
dstPts[dstOff++]=(M10 * x + M11 * y + M12);
}
return;
case (6):
M00=this.m00;
M01=this.m01;
M10=this.m10;
M11=this.m11;
while (--numPts >= 0){
var x=srcPts[srcOff++];
var y=srcPts[srcOff++];
dstPts[dstOff++]=(M00 * x + M01 * y);
dstPts[dstOff++]=(M10 * x + M11 * y);
}
return;
case (5):
M01=this.m01;
M02=this.m02;
M10=this.m10;
M12=this.m12;
while (--numPts >= 0){
var x=srcPts[srcOff++];
dstPts[dstOff++]=(M01 * srcPts[srcOff++] + M02);
dstPts[dstOff++]=(M10 * x + M12);
}
return;
case (4):
M01=this.m01;
M10=this.m10;
while (--numPts >= 0){
var x=srcPts[srcOff++];
dstPts[dstOff++]=(M01 * srcPts[srcOff++]);
dstPts[dstOff++]=(M10 * x);
}
return;
case (3):
M00=this.m00;
M02=this.m02;
M11=this.m11;
M12=this.m12;
while (--numPts >= 0){
dstPts[dstOff++]=(M00 * srcPts[srcOff++] + M02);
dstPts[dstOff++]=(M11 * srcPts[srcOff++] + M12);
}
return;
case (2):
M00=this.m00;
M11=this.m11;
while (--numPts >= 0){
dstPts[dstOff++]=(M00 * srcPts[srcOff++]);
dstPts[dstOff++]=(M11 * srcPts[srcOff++]);
}
return;
case (1):
M02=this.m02;
M12=this.m12;
while (--numPts >= 0){
dstPts[dstOff++]=(srcPts[srcOff++] + M02);
dstPts[dstOff++]=(srcPts[srcOff++] + M12);
}
return;
case (0):
if (srcPts !== dstPts  || srcOff != dstOff ) {
System.arraycopy$O$I$O$I$I(srcPts, srcOff, dstPts, dstOff, numPts * 2);
}return;
}
});

Clazz.newMeth(C$, 'transform$DA$I$DA$I$I',  function (srcPts, srcOff, dstPts, dstOff, numPts) {
if (numPts == 0) return;
if (!$I$(4).isAD$O(srcPts)) {
var src=srcPts;
var dst=dstPts;
this.transform$java_awt_geom_Point2DA$I$java_awt_geom_Point2DA$I$I(src, srcOff, dst, dstOff, numPts);
return;
}var M00;
var M01;
var M02;
var M10;
var M11;
var M12;
if (dstPts === srcPts  && dstOff > srcOff  && dstOff < srcOff + numPts * 2 ) {
System.arraycopy$O$I$O$I$I(srcPts, srcOff, dstPts, dstOff, numPts * 2);
srcOff=dstOff;
}switch (this.state) {
default:
p$1.stateError.apply(this, []);
case (7):
M00=this.m00;
M01=this.m01;
M02=this.m02;
M10=this.m10;
M11=this.m11;
M12=this.m12;
while (--numPts >= 0){
var x=srcPts[srcOff++];
var y=srcPts[srcOff++];
dstPts[dstOff++]=M00 * x + M01 * y + M02;
dstPts[dstOff++]=M10 * x + M11 * y + M12;
}
return;
case (6):
M00=this.m00;
M01=this.m01;
M10=this.m10;
M11=this.m11;
while (--numPts >= 0){
var x=srcPts[srcOff++];
var y=srcPts[srcOff++];
dstPts[dstOff++]=M00 * x + M01 * y;
dstPts[dstOff++]=M10 * x + M11 * y;
}
return;
case (5):
M01=this.m01;
M02=this.m02;
M10=this.m10;
M12=this.m12;
while (--numPts >= 0){
var x=srcPts[srcOff++];
dstPts[dstOff++]=M01 * srcPts[srcOff++] + M02;
dstPts[dstOff++]=M10 * x + M12;
}
return;
case (4):
M01=this.m01;
M10=this.m10;
while (--numPts >= 0){
var x=srcPts[srcOff++];
dstPts[dstOff++]=M01 * srcPts[srcOff++];
dstPts[dstOff++]=M10 * x;
}
return;
case (3):
M00=this.m00;
M02=this.m02;
M11=this.m11;
M12=this.m12;
while (--numPts >= 0){
dstPts[dstOff++]=M00 * srcPts[srcOff++] + M02;
dstPts[dstOff++]=M11 * srcPts[srcOff++] + M12;
}
return;
case (2):
M00=this.m00;
M11=this.m11;
while (--numPts >= 0){
dstPts[dstOff++]=M00 * srcPts[srcOff++];
dstPts[dstOff++]=M11 * srcPts[srcOff++];
}
return;
case (1):
M02=this.m02;
M12=this.m12;
while (--numPts >= 0){
dstPts[dstOff++]=srcPts[srcOff++] + M02;
dstPts[dstOff++]=srcPts[srcOff++] + M12;
}
return;
case (0):
if (srcPts !== dstPts  || srcOff != dstOff ) {
System.arraycopy$O$I$O$I$I(srcPts, srcOff, dstPts, dstOff, numPts * 2);
}return;
}
});

Clazz.newMeth(C$, 'transform$FA$I$DA$I$I',  function (srcPts, srcOff, dstPts, dstOff, numPts) {
var M00;
var M01;
var M02;
var M10;
var M11;
var M12;
switch (this.state) {
default:
p$1.stateError.apply(this, []);
case (7):
M00=this.m00;
M01=this.m01;
M02=this.m02;
M10=this.m10;
M11=this.m11;
M12=this.m12;
while (--numPts >= 0){
var x=srcPts[srcOff++];
var y=srcPts[srcOff++];
dstPts[dstOff++]=M00 * x + M01 * y + M02;
dstPts[dstOff++]=M10 * x + M11 * y + M12;
}
return;
case (6):
M00=this.m00;
M01=this.m01;
M10=this.m10;
M11=this.m11;
while (--numPts >= 0){
var x=srcPts[srcOff++];
var y=srcPts[srcOff++];
dstPts[dstOff++]=M00 * x + M01 * y;
dstPts[dstOff++]=M10 * x + M11 * y;
}
return;
case (5):
M01=this.m01;
M02=this.m02;
M10=this.m10;
M12=this.m12;
while (--numPts >= 0){
var x=srcPts[srcOff++];
dstPts[dstOff++]=M01 * srcPts[srcOff++] + M02;
dstPts[dstOff++]=M10 * x + M12;
}
return;
case (4):
M01=this.m01;
M10=this.m10;
while (--numPts >= 0){
var x=srcPts[srcOff++];
dstPts[dstOff++]=M01 * srcPts[srcOff++];
dstPts[dstOff++]=M10 * x;
}
return;
case (3):
M00=this.m00;
M02=this.m02;
M11=this.m11;
M12=this.m12;
while (--numPts >= 0){
dstPts[dstOff++]=M00 * srcPts[srcOff++] + M02;
dstPts[dstOff++]=M11 * srcPts[srcOff++] + M12;
}
return;
case (2):
M00=this.m00;
M11=this.m11;
while (--numPts >= 0){
dstPts[dstOff++]=M00 * srcPts[srcOff++];
dstPts[dstOff++]=M11 * srcPts[srcOff++];
}
return;
case (1):
M02=this.m02;
M12=this.m12;
while (--numPts >= 0){
dstPts[dstOff++]=srcPts[srcOff++] + M02;
dstPts[dstOff++]=srcPts[srcOff++] + M12;
}
return;
case (0):
while (--numPts >= 0){
dstPts[dstOff++]=srcPts[srcOff++];
dstPts[dstOff++]=srcPts[srcOff++];
}
return;
}
});

Clazz.newMeth(C$, 'transform$DA$I$FA$I$I',  function (srcPts, srcOff, dstPts, dstOff, numPts) {
var M00;
var M01;
var M02;
var M10;
var M11;
var M12;
switch (this.state) {
default:
p$1.stateError.apply(this, []);
case (7):
M00=this.m00;
M01=this.m01;
M02=this.m02;
M10=this.m10;
M11=this.m11;
M12=this.m12;
while (--numPts >= 0){
var x=srcPts[srcOff++];
var y=srcPts[srcOff++];
dstPts[dstOff++]=(M00 * x + M01 * y + M02);
dstPts[dstOff++]=(M10 * x + M11 * y + M12);
}
return;
case (6):
M00=this.m00;
M01=this.m01;
M10=this.m10;
M11=this.m11;
while (--numPts >= 0){
var x=srcPts[srcOff++];
var y=srcPts[srcOff++];
dstPts[dstOff++]=(M00 * x + M01 * y);
dstPts[dstOff++]=(M10 * x + M11 * y);
}
return;
case (5):
M01=this.m01;
M02=this.m02;
M10=this.m10;
M12=this.m12;
while (--numPts >= 0){
var x=srcPts[srcOff++];
dstPts[dstOff++]=(M01 * srcPts[srcOff++] + M02);
dstPts[dstOff++]=(M10 * x + M12);
}
return;
case (4):
M01=this.m01;
M10=this.m10;
while (--numPts >= 0){
var x=srcPts[srcOff++];
dstPts[dstOff++]=(M01 * srcPts[srcOff++]);
dstPts[dstOff++]=(M10 * x);
}
return;
case (3):
M00=this.m00;
M02=this.m02;
M11=this.m11;
M12=this.m12;
while (--numPts >= 0){
dstPts[dstOff++]=(M00 * srcPts[srcOff++] + M02);
dstPts[dstOff++]=(M11 * srcPts[srcOff++] + M12);
}
return;
case (2):
M00=this.m00;
M11=this.m11;
while (--numPts >= 0){
dstPts[dstOff++]=(M00 * srcPts[srcOff++]);
dstPts[dstOff++]=(M11 * srcPts[srcOff++]);
}
return;
case (1):
M02=this.m02;
M12=this.m12;
while (--numPts >= 0){
dstPts[dstOff++]=(srcPts[srcOff++] + M02);
dstPts[dstOff++]=(srcPts[srcOff++] + M12);
}
return;
case (0):
while (--numPts >= 0){
dstPts[dstOff++]=(srcPts[srcOff++]);
dstPts[dstOff++]=(srcPts[srcOff++]);
}
return;
}
});

Clazz.newMeth(C$, 'inverseTransform$java_awt_geom_Point2D$java_awt_geom_Point2D',  function (ptSrc, ptDst) {
if (ptDst == null ) {
if (Clazz.instanceOf(ptSrc, "java.awt.geom.Point2D.Double")) {
ptDst=Clazz.new_($I$(2,1));
} else {
ptDst=Clazz.new_($I$(3,1));
}}var x=ptSrc.getX$();
var y=ptSrc.getY$();
switch (this.state) {
default:
p$1.stateError.apply(this, []);
case (7):
x-=this.m02;
y-=this.m12;
case (6):
var det=this.m00 * this.m11 - this.m01 * this.m10;
if (Math.abs(det) <= 4.9E-324 ) {
throw Clazz.new_(Clazz.load('java.awt.geom.NoninvertibleTransformException').c$$S,["Determinant is " + new Double(det).toString()]);
}ptDst.setLocation$D$D((x * this.m11 - y * this.m01) / det, (y * this.m00 - x * this.m10) / det);
return ptDst;
case (5):
x-=this.m02;
y-=this.m12;
case (4):
if (this.m01 == 0.0  || this.m10 == 0.0  ) {
throw Clazz.new_(Clazz.load('java.awt.geom.NoninvertibleTransformException').c$$S,["Determinant is 0"]);
}ptDst.setLocation$D$D(y / this.m10, x / this.m01);
return ptDst;
case (3):
x-=this.m02;
y-=this.m12;
case (2):
if (this.m00 == 0.0  || this.m11 == 0.0  ) {
throw Clazz.new_(Clazz.load('java.awt.geom.NoninvertibleTransformException').c$$S,["Determinant is 0"]);
}ptDst.setLocation$D$D(x / this.m00, y / this.m11);
return ptDst;
case (1):
ptDst.setLocation$D$D(x - this.m02, y - this.m12);
return ptDst;
case (0):
ptDst.setLocation$D$D(x, y);
return ptDst;
}
});

Clazz.newMeth(C$, 'inverseTransform$DA$I$DA$I$I',  function (srcPts, srcOff, dstPts, dstOff, numPts) {
var M00;
var M01;
var M02;
var M10;
var M11;
var M12;
var det;
if (dstPts === srcPts  && dstOff > srcOff  && dstOff < srcOff + numPts * 2 ) {
System.arraycopy$O$I$O$I$I(srcPts, srcOff, dstPts, dstOff, numPts * 2);
srcOff=dstOff;
}switch (this.state) {
default:
p$1.stateError.apply(this, []);
case (7):
M00=this.m00;
M01=this.m01;
M02=this.m02;
M10=this.m10;
M11=this.m11;
M12=this.m12;
det=M00 * M11 - M01 * M10;
if (Math.abs(det) <= 4.9E-324 ) {
throw Clazz.new_(Clazz.load('java.awt.geom.NoninvertibleTransformException').c$$S,["Determinant is " + new Double(det).toString()]);
}while (--numPts >= 0){
var x=srcPts[srcOff++] - M02;
var y=srcPts[srcOff++] - M12;
dstPts[dstOff++]=(x * M11 - y * M01) / det;
dstPts[dstOff++]=(y * M00 - x * M10) / det;
}
return;
case (6):
M00=this.m00;
M01=this.m01;
M10=this.m10;
M11=this.m11;
det=M00 * M11 - M01 * M10;
if (Math.abs(det) <= 4.9E-324 ) {
throw Clazz.new_(Clazz.load('java.awt.geom.NoninvertibleTransformException').c$$S,["Determinant is " + new Double(det).toString()]);
}while (--numPts >= 0){
var x=srcPts[srcOff++];
var y=srcPts[srcOff++];
dstPts[dstOff++]=(x * M11 - y * M01) / det;
dstPts[dstOff++]=(y * M00 - x * M10) / det;
}
return;
case (5):
M01=this.m01;
M02=this.m02;
M10=this.m10;
M12=this.m12;
if (M01 == 0.0  || M10 == 0.0  ) {
throw Clazz.new_(Clazz.load('java.awt.geom.NoninvertibleTransformException').c$$S,["Determinant is 0"]);
}while (--numPts >= 0){
var x=srcPts[srcOff++] - M02;
dstPts[dstOff++]=(srcPts[srcOff++] - M12) / M10;
dstPts[dstOff++]=x / M01;
}
return;
case (4):
M01=this.m01;
M10=this.m10;
if (M01 == 0.0  || M10 == 0.0  ) {
throw Clazz.new_(Clazz.load('java.awt.geom.NoninvertibleTransformException').c$$S,["Determinant is 0"]);
}while (--numPts >= 0){
var x=srcPts[srcOff++];
dstPts[dstOff++]=srcPts[srcOff++] / M10;
dstPts[dstOff++]=x / M01;
}
return;
case (3):
M00=this.m00;
M02=this.m02;
M11=this.m11;
M12=this.m12;
if (M00 == 0.0  || M11 == 0.0  ) {
throw Clazz.new_(Clazz.load('java.awt.geom.NoninvertibleTransformException').c$$S,["Determinant is 0"]);
}while (--numPts >= 0){
dstPts[dstOff++]=(srcPts[srcOff++] - M02) / M00;
dstPts[dstOff++]=(srcPts[srcOff++] - M12) / M11;
}
return;
case (2):
M00=this.m00;
M11=this.m11;
if (M00 == 0.0  || M11 == 0.0  ) {
throw Clazz.new_(Clazz.load('java.awt.geom.NoninvertibleTransformException').c$$S,["Determinant is 0"]);
}while (--numPts >= 0){
dstPts[dstOff++]=srcPts[srcOff++] / M00;
dstPts[dstOff++]=srcPts[srcOff++] / M11;
}
return;
case (1):
M02=this.m02;
M12=this.m12;
while (--numPts >= 0){
dstPts[dstOff++]=srcPts[srcOff++] - M02;
dstPts[dstOff++]=srcPts[srcOff++] - M12;
}
return;
case (0):
if (srcPts !== dstPts  || srcOff != dstOff ) {
System.arraycopy$O$I$O$I$I(srcPts, srcOff, dstPts, dstOff, numPts * 2);
}return;
}
});

Clazz.newMeth(C$, 'deltaTransform$java_awt_geom_Point2D$java_awt_geom_Point2D',  function (ptSrc, ptDst) {
if (ptDst == null ) {
if (Clazz.instanceOf(ptSrc, "java.awt.geom.Point2D.Double")) {
ptDst=Clazz.new_($I$(2,1));
} else {
ptDst=Clazz.new_($I$(3,1));
}}var x=ptSrc.getX$();
var y=ptSrc.getY$();
switch (this.state) {
default:
p$1.stateError.apply(this, []);
case (7):
case (6):
ptDst.setLocation$D$D(x * this.m00 + y * this.m01, x * this.m10 + y * this.m11);
return ptDst;
case (5):
case (4):
ptDst.setLocation$D$D(y * this.m01, x * this.m10);
return ptDst;
case (3):
case (2):
ptDst.setLocation$D$D(x * this.m00, y * this.m11);
return ptDst;
case (1):
case (0):
ptDst.setLocation$D$D(x, y);
return ptDst;
}
});

Clazz.newMeth(C$, 'deltaTransform$DA$I$DA$I$I',  function (srcPts, srcOff, dstPts, dstOff, numPts) {
var M00;
var M01;
var M10;
var M11;
if (dstPts === srcPts  && dstOff > srcOff  && dstOff < srcOff + numPts * 2 ) {
System.arraycopy$O$I$O$I$I(srcPts, srcOff, dstPts, dstOff, numPts * 2);
srcOff=dstOff;
}switch (this.state) {
default:
p$1.stateError.apply(this, []);
case (7):
case (6):
M00=this.m00;
M01=this.m01;
M10=this.m10;
M11=this.m11;
while (--numPts >= 0){
var x=srcPts[srcOff++];
var y=srcPts[srcOff++];
dstPts[dstOff++]=x * M00 + y * M01;
dstPts[dstOff++]=x * M10 + y * M11;
}
return;
case (5):
case (4):
M01=this.m01;
M10=this.m10;
while (--numPts >= 0){
var x=srcPts[srcOff++];
dstPts[dstOff++]=srcPts[srcOff++] * M01;
dstPts[dstOff++]=x * M10;
}
return;
case (3):
case (2):
M00=this.m00;
M11=this.m11;
while (--numPts >= 0){
dstPts[dstOff++]=srcPts[srcOff++] * M00;
dstPts[dstOff++]=srcPts[srcOff++] * M11;
}
return;
case (1):
case (0):
if (srcPts !== dstPts  || srcOff != dstOff ) {
System.arraycopy$O$I$O$I$I(srcPts, srcOff, dstPts, dstOff, numPts * 2);
}return;
}
});

Clazz.newMeth(C$, 'createTransformedShape$java_awt_Shape',  function (pSrc) {
if (pSrc == null ) {
return null;
}return Clazz.new_($I$(5,1).c$$java_awt_Shape$java_awt_geom_AffineTransform,[pSrc, this]);
});

Clazz.newMeth(C$, '_matround$D',  function (matval) {
return Math.rint(matval * 1.0E15) / 1.0E15;
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
return ("AffineTransform[[" + new Double(C$._matround$D(this.m00)).toString() + ", " + new Double(C$._matround$D(this.m01)).toString() + ", " + new Double(C$._matround$D(this.m02)).toString() + "], [" + new Double(C$._matround$D(this.m10)).toString() + ", " + new Double(C$._matround$D(this.m11)).toString() + ", " + new Double(C$._matround$D(this.m12)).toString() + "]]" );
});

Clazz.newMeth(C$, 'isIdentity$',  function () {
return (this.state == 0 || (this.getType$() == 0) );
});

Clazz.newMeth(C$, 'clone$',  function () {
try {
return Clazz.clone(this);
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(1,1));
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'hashCode$',  function () {
var bits=Double.doubleToLongBits$D(this.m00);
bits=Long.$add(Long.$mul(bits,31),Double.doubleToLongBits$D(this.m01));
bits=Long.$add(Long.$mul(bits,31),Double.doubleToLongBits$D(this.m02));
bits=Long.$add(Long.$mul(bits,31),Double.doubleToLongBits$D(this.m10));
bits=Long.$add(Long.$mul(bits,31),Double.doubleToLongBits$D(this.m11));
bits=Long.$add(Long.$mul(bits,31),Double.doubleToLongBits$D(this.m12));
return ((Long.$ival(bits)) ^ (Long.$ival((Long.$sr(bits,32)))));
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (!(Clazz.instanceOf(obj, "java.awt.geom.AffineTransform"))) {
return false;
}var a=obj;
return ((this.m00 == a.m00 ) && (this.m01 == a.m01 ) && (this.m02 == a.m02 ) && (this.m10 == a.m10 ) && (this.m11 == a.m11 ) && (this.m12 == a.m12 )  );
});

Clazz.newMeth(C$, '秘toArray$',  function () {
return Clazz.array(Double.TYPE, -1, [this.m00, this.m01, this.m02, this.m10, this.m11, this.m12, this.state, this.type]);
});

Clazz.newMeth(C$, '秘fromArray$DA',  function (a) {
this.m00=a[0];
this.m01=a[1];
this.m02=a[2];
this.m10=a[3];
this.m11=a[4];
this.m12=a[5];
this.state=(a[6]|0);
this.type=(a[7]|0);
return this;
});

C$.$static$=function(){C$.$static$=0;
C$.rot90conversion=Clazz.array(Integer.TYPE, -1, [4, 5, 4, 5, 2, 3, 6, 7]);
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:10 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
