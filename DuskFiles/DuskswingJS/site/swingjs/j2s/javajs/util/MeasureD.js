(function(){var P$=Clazz.newPackage("javajs.util"),I$=[[0,'javajs.util.V3d','javajs.util.P3d','javajs.util.T3d','javajs.util.Lst','javajs.util.Qd','javajs.api.Interface','javajs.util.P4d','javajs.util.M3d']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MeasureD");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['axisY','javajs.util.V3d']]]

Clazz.newMeth(C$, 'computeAngle$javajs_util_T3d$javajs_util_T3d$javajs_util_T3d$javajs_util_V3d$javajs_util_V3d$Z',  function (pointA, pointB, pointC, vectorBA, vectorBC, asDegrees) {
vectorBA.sub2$javajs_util_T3d$javajs_util_T3d(pointA, pointB);
vectorBC.sub2$javajs_util_T3d$javajs_util_T3d(pointC, pointB);
var angle=vectorBA.angle$javajs_util_V3d(vectorBC);
return (asDegrees ? angle / 0.017453292519943295 : angle);
}, 1);

Clazz.newMeth(C$, 'computeAngleABC$javajs_util_T3d$javajs_util_T3d$javajs_util_T3d$Z',  function (pointA, pointB, pointC, asDegrees) {
var vectorBA=Clazz.new_($I$(1,1));
var vectorBC=Clazz.new_($I$(1,1));
return C$.computeAngle$javajs_util_T3d$javajs_util_T3d$javajs_util_T3d$javajs_util_V3d$javajs_util_V3d$Z(pointA, pointB, pointC, vectorBA, vectorBC, asDegrees);
}, 1);

Clazz.newMeth(C$, 'computeTorsion$javajs_util_T3d$javajs_util_T3d$javajs_util_T3d$javajs_util_T3d$Z',  function (p1, p2, p3, p4, asDegrees) {
var ijx=p1.x - p2.x;
var ijy=p1.y - p2.y;
var ijz=p1.z - p2.z;
var kjx=p3.x - p2.x;
var kjy=p3.y - p2.y;
var kjz=p3.z - p2.z;
var klx=p3.x - p4.x;
var kly=p3.y - p4.y;
var klz=p3.z - p4.z;
var ax=ijy * kjz - ijz * kjy;
var ay=ijz * kjx - ijx * kjz;
var az=ijx * kjy - ijy * kjx;
var cx=kjy * klz - kjz * kly;
var cy=kjz * klx - kjx * klz;
var cz=kjx * kly - kjy * klx;
var ai2=1.0 / (ax * ax + ay * ay + az * az);
var ci2=1.0 / (cx * cx + cy * cy + cz * cz);
var ai=Math.sqrt(ai2);
var ci=Math.sqrt(ci2);
var denom=ai * ci;
var cross=ax * cx + ay * cy + az * cz;
var cosang=cross * denom;
if (cosang > 1 ) {
cosang=1;
}if (cosang < -1 ) {
cosang=-1;
}var torsion=Math.acos(cosang);
var dot=ijx * cx + ijy * cy + ijz * cz;
var absDot=Math.abs(dot);
torsion=(dot / absDot > 0 ) ? torsion : -torsion;
return (asDegrees ? torsion / 0.017453292519943295 : torsion);
}, 1);

Clazz.newMeth(C$, 'computeHelicalAxis$javajs_util_P3d$javajs_util_P3d$javajs_util_Qd',  function (a, b, dq) {
var vab=$I$(1).newVsub$javajs_util_T3d$javajs_util_T3d(b, a);
var theta=dq.getTheta$();
var n=dq.getNormal$();
var v_dot_n=vab.dot$javajs_util_T3d(n);
if (Math.abs(v_dot_n) < 1.0E-4 ) v_dot_n=0;
var va_prime_d=Clazz.new_($I$(1,1));
va_prime_d.cross$javajs_util_T3d$javajs_util_T3d(vab, n);
if (va_prime_d.dot$javajs_util_T3d(va_prime_d) != 0 ) va_prime_d.normalize$();
var vda=Clazz.new_($I$(1,1));
var vcb=$I$(1).newV$javajs_util_T3d(n);
if (v_dot_n == 0 ) v_dot_n=2.0E-45;
vcb.scale$D(v_dot_n);
vda.sub2$javajs_util_T3d$javajs_util_T3d(vcb, vab);
vda.scale$D(0.5);
va_prime_d.scale$D(theta == 0  ? 0 : (vda.length$() / Math.tan(theta / 2 / 180  * 3.141592653589793)));
var r=$I$(1).newV$javajs_util_T3d(va_prime_d);
if (theta != 0 ) r.add$javajs_util_T3d(vda);
var pt_a_prime=$I$(2).newP$javajs_util_T3d(a);
pt_a_prime.sub$javajs_util_T3d(r);
if (v_dot_n != 2.0E-45 ) n.scale$D(v_dot_n);
var pt_b_prime=$I$(2).newP$javajs_util_T3d(pt_a_prime);
pt_b_prime.add$javajs_util_T3d(n);
theta=C$.computeTorsion$javajs_util_T3d$javajs_util_T3d$javajs_util_T3d$javajs_util_T3d$Z(a, pt_a_prime, pt_b_prime, b, true);
if (Double.isNaN$D(theta) || r.length$() < 1.0E-4  ) theta=dq.getThetaDirectedV$javajs_util_V3d(n);
var residuesPerTurn=Math.abs(theta == 0  ? 0 : 360.0 / theta);
var pitch=Math.abs(v_dot_n == 2.0E-45  ? 0 : n.length$() * (theta == 0  ? 1 : 360.0 / theta));
return Clazz.array($I$(3), -1, [pt_a_prime, n, r, $I$(2).new3$D$D$D(theta, pitch, residuesPerTurn), pt_b_prime]);
}, 1);

Clazz.newMeth(C$, 'getPlaneThroughPoints$javajs_util_T3d$javajs_util_T3d$javajs_util_T3d$javajs_util_V3d$javajs_util_V3d$javajs_util_P4d',  function (pointA, pointB, pointC, vNorm, vAB, plane) {
if (vNorm == null ) vNorm=Clazz.new_($I$(1,1));
if (vAB == null ) vAB=Clazz.new_($I$(1,1));
var w=C$.getNormalThroughPoints$javajs_util_T3d$javajs_util_T3d$javajs_util_T3d$javajs_util_T3d$javajs_util_T3d(pointA, pointB, pointC, vNorm, vAB);
plane.set4$D$D$D$D(vNorm.x, vNorm.y, vNorm.z, w);
return plane;
}, 1);

Clazz.newMeth(C$, 'getPlaneThroughPoint$javajs_util_T3d$javajs_util_V3d$javajs_util_P4d',  function (pt, normal, plane) {
plane.set4$D$D$D$D(normal.x, normal.y, normal.z, -normal.dot$javajs_util_T3d(pt));
}, 1);

Clazz.newMeth(C$, 'distanceToPlane$javajs_util_P4d$javajs_util_T3d',  function (plane, pt) {
return (plane == null  ? NaN : (plane.dot$javajs_util_T3d(pt) + plane.w) / Math.sqrt(plane.dot$javajs_util_T3d(plane)));
}, 1);

Clazz.newMeth(C$, 'directedDistanceToPlane$javajs_util_P3d$javajs_util_P4d$javajs_util_P3d',  function (pt, plane, ptref) {
var f=plane.dot$javajs_util_T3d(pt) + plane.w;
var f1=plane.dot$javajs_util_T3d(ptref) + plane.w;
return Math.signum(f1) * f / Math.sqrt(plane.dot$javajs_util_T3d(plane));
}, 1);

Clazz.newMeth(C$, 'distanceToPlaneD$javajs_util_P4d$D$javajs_util_P3d',  function (plane, d, pt) {
return (plane == null  ? NaN : (plane.dot$javajs_util_T3d(pt) + plane.w) / d);
}, 1);

Clazz.newMeth(C$, 'distanceToPlaneV$javajs_util_V3d$D$javajs_util_P3d',  function (norm, w, pt) {
return (norm == null  ? NaN : (norm.dot$javajs_util_T3d(pt) + w) / Math.sqrt(norm.dot$javajs_util_T3d(norm)));
}, 1);

Clazz.newMeth(C$, 'calcNormalizedNormal$javajs_util_T3d$javajs_util_T3d$javajs_util_T3d$javajs_util_T3d$javajs_util_T3d',  function (pointA, pointB, pointC, vNormNorm, vAB) {
vAB.sub2$javajs_util_T3d$javajs_util_T3d(pointB, pointA);
vNormNorm.sub2$javajs_util_T3d$javajs_util_T3d(pointC, pointA);
vNormNorm.cross$javajs_util_T3d$javajs_util_T3d(vAB, vNormNorm);
vNormNorm.normalize$();
}, 1);

Clazz.newMeth(C$, 'getDirectedNormalThroughPoints$javajs_util_T3d$javajs_util_T3d$javajs_util_T3d$javajs_util_T3d$javajs_util_V3d$javajs_util_V3d',  function (pointA, pointB, pointC, ptRef, vNorm, vAB) {
var nd=C$.getNormalThroughPoints$javajs_util_T3d$javajs_util_T3d$javajs_util_T3d$javajs_util_T3d$javajs_util_T3d(pointA, pointB, pointC, vNorm, vAB);
if (ptRef != null ) {
var pt0=$I$(2).newP$javajs_util_T3d(pointA);
pt0.add$javajs_util_T3d(vNorm);
var d=pt0.distance$javajs_util_T3d(ptRef);
pt0.sub2$javajs_util_T3d$javajs_util_T3d(pointA, vNorm);
if (d > pt0.distance$javajs_util_T3d(ptRef) ) {
vNorm.scale$D(-1);
nd=-nd;
}}return nd;
}, 1);

Clazz.newMeth(C$, 'getNormalThroughPoints$javajs_util_T3d$javajs_util_T3d$javajs_util_T3d$javajs_util_T3d$javajs_util_T3d',  function (pointA, pointB, pointC, vNorm, vTemp) {
C$.calcNormalizedNormal$javajs_util_T3d$javajs_util_T3d$javajs_util_T3d$javajs_util_T3d$javajs_util_T3d(pointA, pointB, pointC, vNorm, vTemp);
vTemp.setT$javajs_util_T3d(pointA);
return -vTemp.dot$javajs_util_T3d(vNorm);
}, 1);

Clazz.newMeth(C$, 'getPlaneProjection$javajs_util_T3d$javajs_util_P4d$javajs_util_T3d$javajs_util_V3d',  function (pt, plane, retPtProj, retNorm) {
var dist=C$.distanceToPlane$javajs_util_P4d$javajs_util_T3d(plane, pt);
retNorm.set$D$D$D(plane.x, plane.y, plane.z);
retNorm.normalize$();
if (dist > 0 ) retNorm.scale$D(-1);
retPtProj.scaleAdd2$D$javajs_util_T3d$javajs_util_T3d(Math.abs(dist), retNorm, pt);
return dist;
}, 1);

Clazz.newMeth(C$, 'getNormalFromCenter$javajs_util_P3d$javajs_util_P3d$javajs_util_P3d$javajs_util_P3d$Z$javajs_util_V3d$javajs_util_V3d',  function (ptCenter, ptA, ptB, ptC, isOutward, normal, vTemp) {
var d=C$.getNormalThroughPoints$javajs_util_T3d$javajs_util_T3d$javajs_util_T3d$javajs_util_T3d$javajs_util_T3d(ptA, ptB, ptC, normal, vTemp);
var isReversed=(C$.distanceToPlaneV$javajs_util_V3d$D$javajs_util_P3d(normal, d, ptCenter) > 0 );
if (isReversed == isOutward ) normal.scale$D(-1.0);
return !isReversed;
}, 1);

Clazz.newMeth(C$, 'getNormalToLine$javajs_util_P3d$javajs_util_P3d$javajs_util_V3d',  function (pointA, pointB, vNormNorm) {
vNormNorm.sub2$javajs_util_T3d$javajs_util_T3d(pointA, pointB);
vNormNorm.cross$javajs_util_T3d$javajs_util_T3d(vNormNorm, C$.axisY);
vNormNorm.normalize$();
if (Double.isNaN$D(vNormNorm.x)) vNormNorm.set$D$D$D(1, 0, 0);
}, 1);

Clazz.newMeth(C$, 'getBisectingPlane$javajs_util_P3d$javajs_util_V3d$javajs_util_T3d$javajs_util_V3d$javajs_util_P4d',  function (pointA, vAB, ptTemp, vTemp, plane) {
ptTemp.scaleAdd2$D$javajs_util_T3d$javajs_util_T3d(0.5, vAB, pointA);
vTemp.setT$javajs_util_T3d(vAB);
vTemp.normalize$();
C$.getPlaneThroughPoint$javajs_util_T3d$javajs_util_V3d$javajs_util_P4d(ptTemp, vTemp, plane);
}, 1);

Clazz.newMeth(C$, 'projectOntoAxis$javajs_util_P3d$javajs_util_P3d$javajs_util_V3d$javajs_util_V3d',  function (pt, ptA, axisUnitVector, vectorProjection) {
vectorProjection.sub2$javajs_util_T3d$javajs_util_T3d(pt, ptA);
var projectedLength=vectorProjection.dot$javajs_util_T3d(axisUnitVector);
pt.scaleAdd2$D$javajs_util_T3d$javajs_util_T3d(projectedLength, axisUnitVector, ptA);
vectorProjection.sub2$javajs_util_T3d$javajs_util_T3d(pt, ptA);
return projectedLength;
}, 1);

Clazz.newMeth(C$, 'calcBestAxisThroughPoints$javajs_util_P3dA$I$javajs_util_P3d$javajs_util_V3d$javajs_util_V3d$I',  function (points, nPoints, axisA, axisUnitVector, vectorProjection, nTriesMax) {
axisA.setT$javajs_util_T3d(points[0]);
axisUnitVector.sub2$javajs_util_T3d$javajs_util_T3d(points[nPoints - 1], axisA);
axisUnitVector.normalize$();
C$.calcAveragePointN$javajs_util_P3dA$I$javajs_util_P3d(points, nPoints, axisA);
var nTries=0;
while (nTries++ < nTriesMax && C$.findAxis$javajs_util_P3dA$I$javajs_util_P3d$javajs_util_V3d$javajs_util_V3d(points, nPoints, axisA, axisUnitVector, vectorProjection) > 0.001  ){
}
var tempA=$I$(2).newP$javajs_util_T3d(points[0]);
C$.projectOntoAxis$javajs_util_P3d$javajs_util_P3d$javajs_util_V3d$javajs_util_V3d(tempA, axisA, axisUnitVector, vectorProjection);
axisA.setT$javajs_util_T3d(tempA);
}, 1);

Clazz.newMeth(C$, 'findAxis$javajs_util_P3dA$I$javajs_util_P3d$javajs_util_V3d$javajs_util_V3d',  function (points, nPoints, axisA, axisUnitVector, vectorProjection) {
var sumXiYi=Clazz.new_($I$(1,1));
var vTemp=Clazz.new_($I$(1,1));
var pt=Clazz.new_($I$(2,1));
var ptProj=Clazz.new_($I$(2,1));
var a=$I$(1).newV$javajs_util_T3d(axisUnitVector);
var sum_Xi2=0;
for (var i=nPoints; --i >= 0; ) {
pt.setT$javajs_util_T3d(points[i]);
ptProj.setT$javajs_util_T3d(pt);
C$.projectOntoAxis$javajs_util_P3d$javajs_util_P3d$javajs_util_V3d$javajs_util_V3d(ptProj, axisA, axisUnitVector, vectorProjection);
vTemp.sub2$javajs_util_T3d$javajs_util_T3d(pt, ptProj);
vTemp.cross$javajs_util_T3d$javajs_util_T3d(vectorProjection, vTemp);
sumXiYi.add$javajs_util_T3d(vTemp);
sum_Xi2+=vectorProjection.lengthSquared$();
}
var m=$I$(1).newV$javajs_util_T3d(sumXiYi);
m.scale$D(1 / sum_Xi2);
vTemp.cross$javajs_util_T3d$javajs_util_T3d(m, axisUnitVector);
axisUnitVector.add$javajs_util_T3d(vTemp);
axisUnitVector.normalize$();
vTemp.sub2$javajs_util_T3d$javajs_util_T3d(axisUnitVector, a);
return vTemp.length$();
}, 1);

Clazz.newMeth(C$, 'calcAveragePoint$javajs_util_P3d$javajs_util_P3d$javajs_util_P3d',  function (pointA, pointB, pointC) {
pointC.set$D$D$D((pointA.x + pointB.x) / 2, (pointA.y + pointB.y) / 2, (pointA.z + pointB.z) / 2);
}, 1);

Clazz.newMeth(C$, 'calcAveragePointN$javajs_util_P3dA$I$javajs_util_P3d',  function (points, nPoints, averagePoint) {
averagePoint.setT$javajs_util_T3d(points[0]);
for (var i=1; i < nPoints; i++) averagePoint.add$javajs_util_T3d(points[i]);

averagePoint.scale$D(1.0 / nPoints);
}, 1);

Clazz.newMeth(C$, 'isInTetrahedron$javajs_util_P3d$javajs_util_P3d$javajs_util_P3d$javajs_util_P3d$javajs_util_P3d$javajs_util_P4d$javajs_util_V3d$javajs_util_V3d$Z',  function (pt, ptA, ptB, ptC, ptD, plane, vTemp, vTemp2, fullyEnclosed) {
var b=(C$.distanceToPlane$javajs_util_P4d$javajs_util_T3d(C$.getPlaneThroughPoints$javajs_util_T3d$javajs_util_T3d$javajs_util_T3d$javajs_util_V3d$javajs_util_V3d$javajs_util_P4d(ptC, ptD, ptA, vTemp, vTemp2, plane), pt) >= 0 );
if (b != (C$.distanceToPlane$javajs_util_P4d$javajs_util_T3d(C$.getPlaneThroughPoints$javajs_util_T3d$javajs_util_T3d$javajs_util_T3d$javajs_util_V3d$javajs_util_V3d$javajs_util_P4d(ptA, ptD, ptB, vTemp, vTemp2, plane), pt) >= 0 ) ) return false;
if (b != (C$.distanceToPlane$javajs_util_P4d$javajs_util_T3d(C$.getPlaneThroughPoints$javajs_util_T3d$javajs_util_T3d$javajs_util_T3d$javajs_util_V3d$javajs_util_V3d$javajs_util_P4d(ptB, ptD, ptC, vTemp, vTemp2, plane), pt) >= 0 ) ) return false;
var d=C$.distanceToPlane$javajs_util_P4d$javajs_util_T3d(C$.getPlaneThroughPoints$javajs_util_T3d$javajs_util_T3d$javajs_util_T3d$javajs_util_V3d$javajs_util_V3d$javajs_util_P4d(ptA, ptB, ptC, vTemp, vTemp2, plane), pt);
if (fullyEnclosed) return (b == (d >= 0 ) );
var d1=C$.distanceToPlane$javajs_util_P4d$javajs_util_T3d(plane, ptD);
return d1 * d <= 0  || Math.abs(d1) > Math.abs(d)  ;
}, 1);

Clazz.newMeth(C$, 'getIntersectionPP$javajs_util_P4d$javajs_util_P4d',  function (plane1, plane2) {
var a1=plane1.x;
var b1=plane1.y;
var c1=plane1.z;
var d1=plane1.w;
var a2=plane2.x;
var b2=plane2.y;
var c2=plane2.z;
var d2=plane2.w;
var norm1=$I$(1).new3$D$D$D(a1, b1, c1);
var norm2=$I$(1).new3$D$D$D(a2, b2, c2);
var nxn=Clazz.new_($I$(1,1));
nxn.cross$javajs_util_T3d$javajs_util_T3d(norm1, norm2);
var ax=Math.abs(nxn.x);
var ay=Math.abs(nxn.y);
var az=Math.abs(nxn.z);
var x;
var y;
var z;
var diff;
var type=(ax > ay  ? (ax > az  ? 1 : 3) : ay > az  ? 2 : 3);
switch (type) {
case 1:
x=0;
diff=(b1 * c2 - b2 * c1);
if (Math.abs(diff) < 0.01 ) return null;
y=(c1 * d2 - c2 * d1) / diff;
z=(b2 * d1 - d2 * b1) / diff;
break;
case 2:
diff=(a1 * c2 - a2 * c1);
if (Math.abs(diff) < 0.01 ) return null;
x=(c1 * d2 - c2 * d1) / diff;
y=0;
z=(a2 * d1 - d2 * a1) / diff;
break;
case 3:
default:
diff=(a1 * b2 - a2 * b1);
if (Math.abs(diff) < 0.01 ) return null;
x=(b1 * d2 - b2 * d1) / diff;
y=(a2 * d1 - d2 * a1) / diff;
z=0;
}
var list=Clazz.new_($I$(4,1));
list.addLast$O($I$(2).new3$D$D$D(x, y, z));
nxn.normalize$();
list.addLast$O(nxn);
return list;
}, 1);

Clazz.newMeth(C$, 'getIntersection$javajs_util_P3d$javajs_util_V3d$javajs_util_P4d$javajs_util_P3d$javajs_util_V3d$javajs_util_V3d',  function (pt1, v, plane, ptRet, tempNorm, vTemp) {
C$.getPlaneProjection$javajs_util_T3d$javajs_util_P4d$javajs_util_T3d$javajs_util_V3d(pt1, plane, ptRet, tempNorm);
tempNorm.set$D$D$D(plane.x, plane.y, plane.z);
tempNorm.normalize$();
if (v == null ) v=$I$(1).newV$javajs_util_T3d(tempNorm);
var l_dot_n=v.dot$javajs_util_T3d(tempNorm);
if (Math.abs(l_dot_n) < 0.01 ) return null;
vTemp.sub2$javajs_util_T3d$javajs_util_T3d(ptRet, pt1);
ptRet.scaleAdd2$D$javajs_util_T3d$javajs_util_T3d(vTemp.dot$javajs_util_T3d(tempNorm) / l_dot_n, v, pt1);
return ptRet;
}, 1);

Clazz.newMeth(C$, 'calculateQuaternionRotation$javajs_util_P3dAA$DA',  function (centerAndPoints, retStddev) {
retStddev[1]=NaN;
var q=Clazz.new_($I$(5,1));
var ptsA=centerAndPoints[0];
var ptsB=centerAndPoints[1];
var nPts=ptsA.length - 1;
if (nPts < 2 || ptsA.length != ptsB.length ) return q;
var Sxx=0;
var Sxy=0;
var Sxz=0;
var Syx=0;
var Syy=0;
var Syz=0;
var Szx=0;
var Szy=0;
var Szz=0;
var ptA=Clazz.new_($I$(2,1));
var ptB=Clazz.new_($I$(2,1));
var ptA0=ptsA[0];
var ptB0=ptsB[0];
for (var i=nPts + 1; --i >= 1; ) {
ptA.sub2$javajs_util_T3d$javajs_util_T3d(ptsA[i], ptA0);
ptB.sub2$javajs_util_T3d$javajs_util_T3d(ptsB[i], ptB0);
Sxx+=ptA.x * ptB.x;
Sxy+=ptA.x * ptB.y;
Sxz+=ptA.x * ptB.z;
Syx+=ptA.y * ptB.x;
Syy+=ptA.y * ptB.y;
Syz+=ptA.y * ptB.z;
Szx+=ptA.z * ptB.x;
Szy+=ptA.z * ptB.y;
Szz+=ptA.z * ptB.z;
}
retStddev[0]=C$.getRmsd$javajs_util_P3dAA$javajs_util_Qd(centerAndPoints, q);
var N=Clazz.array(Double.TYPE, [4, 4]);
N[0][0]=Sxx + Syy + Szz ;
N[0][1]=N[1][0]=Syz - Szy;
N[0][2]=N[2][0]=Szx - Sxz;
N[0][3]=N[3][0]=Sxy - Syx;
N[1][1]=Sxx - Syy - Szz ;
N[1][2]=N[2][1]=Sxy + Syx;
N[1][3]=N[3][1]=Szx + Sxz;
N[2][2]=-Sxx + Syy - Szz;
N[2][3]=N[3][2]=Syz + Szy;
N[3][3]=-Sxx - Syy + Szz;
var v=($I$(6).getInterface$S("javajs.util.Eigen")).setM$DAA(N).getEigenvectorsDoubleTransposed$()[3];
q=$I$(5,"newP4$javajs_util_P4d",[$I$(7).new4$D$D$D$D(v[1], v[2], v[3], v[0])]);
retStddev[1]=C$.getRmsd$javajs_util_P3dAA$javajs_util_Qd(centerAndPoints, q);
return q;
}, 1);

Clazz.newMeth(C$, 'getCenterAndPoints$javajs_util_Lst',  function (vPts) {
var n=vPts.size$();
var pts=Clazz.array($I$(2), [n + 1]);
pts[0]=Clazz.new_($I$(2,1));
if (n > 0) {
for (var i=0; i < n; i++) {
pts[0].add$javajs_util_T3d(pts[i + 1]=vPts.get$I(i));
}
pts[0].scale$D(1.0 / n);
}return pts;
}, 1);

Clazz.newMeth(C$, 'getRmsd$javajs_util_P3dAA$javajs_util_Qd',  function (centerAndPoints, q) {
var sum2=0;
var ptsA=centerAndPoints[0];
var ptsB=centerAndPoints[1];
var cA=ptsA[0];
var cB=ptsB[0];
var n=ptsA.length - 1;
var ptAnew=Clazz.new_($I$(2,1));
for (var i=n + 1; --i >= 1; ) {
ptAnew.sub2$javajs_util_T3d$javajs_util_T3d(ptsA[i], cA);
q.transform2$javajs_util_T3d$javajs_util_T3d(ptAnew, ptAnew).add$javajs_util_T3d(cB);
sum2+=ptAnew.distanceSquared$javajs_util_T3d(ptsB[i]);
}
return Math.sqrt(sum2 / n);
}, 1);

Clazz.newMeth(C$, 'getBestLineThroughPoints$javajs_util_P3dA$I',  function (points, nPoints) {
if (nPoints <= 0) nPoints=points.length;
if (nPoints <= 2) {
return points;
}var ptA=Clazz.new_($I$(2,1));
var unitVector=Clazz.new_($I$(1,1));
var vTemp=Clazz.new_($I$(1,1));
C$.calcBestAxisThroughPoints$javajs_util_P3dA$I$javajs_util_P3d$javajs_util_V3d$javajs_util_V3d$I(points, nPoints, ptA, unitVector, vTemp, 8);
return C$.getProjectedLineSegment$javajs_util_P3dA$I$javajs_util_P3d$javajs_util_V3d$javajs_util_V3d(points, nPoints, ptA, unitVector, vTemp);
}, 1);

Clazz.newMeth(C$, 'getProjectedLineSegment$javajs_util_P3dA$I$javajs_util_P3d$javajs_util_V3d$javajs_util_V3d',  function (points, nPoints, ptA, unitVector, vTemp) {
if (nPoints < 0) nPoints=points.length;
if (vTemp == null ) vTemp=Clazz.new_($I$(1,1));
var pmin=null;
var pmax=null;
var p;
var dmin=1.7976931348623157E308;
var dmax=-1.7976931348623157E308;
for (var i=0; i < points.length; i++) {
C$.projectOntoAxis$javajs_util_P3d$javajs_util_P3d$javajs_util_V3d$javajs_util_V3d(p=$I$(2).newP$javajs_util_T3d(points[i]), ptA, unitVector, vTemp);
var d=unitVector.dot$javajs_util_T3d(vTemp);
if (d < dmin ) {
dmin=d;
pmin=p;
}if (d > dmax ) {
dmax=d;
pmax=p;
}}
return Clazz.array($I$(2), -1, [pmin, pmax]);
}, 1);

Clazz.newMeth(C$, 'isInTriangle$javajs_util_P3d$javajs_util_P3d$javajs_util_P3d$javajs_util_P3d$javajs_util_V3d$javajs_util_V3d$javajs_util_V3d',  function (p, a, b, c, v0, v1, v2) {
v0.sub2$javajs_util_T3d$javajs_util_T3d(c, a);
v1.sub2$javajs_util_T3d$javajs_util_T3d(b, a);
v2.sub2$javajs_util_T3d$javajs_util_T3d(p, a);
var dot00=v0.dot$javajs_util_T3d(v0);
var dot01=v0.dot$javajs_util_T3d(v1);
var dot02=v0.dot$javajs_util_T3d(v2);
var dot11=v1.dot$javajs_util_T3d(v1);
var dot12=v1.dot$javajs_util_T3d(v2);
var invDenom=1 / (dot00 * dot11 - dot01 * dot01);
var u=(dot11 * dot02 - dot01 * dot12) * invDenom;
var v=(dot00 * dot12 - dot01 * dot02) * invDenom;
return (u >= 0  && v >= 0   && u + v <= 1  );
}, 1);

Clazz.newMeth(C$, 'calcBestPlaneThroughPoints$javajs_util_P3dA$I$javajs_util_P4d',  function (points, nPoints, plane) {
if (nPoints <= 0) {
nPoints=points.length;
}if (nPoints == 3) {
C$.getPlaneThroughPoints$javajs_util_T3d$javajs_util_T3d$javajs_util_T3d$javajs_util_V3d$javajs_util_V3d$javajs_util_P4d(points[0], points[1], points[2], null, null, plane);
return 0;
}var pmin=plane;
var plane2=Clazz.new_($I$(7,1));
var plane3;
var rmsd=C$.calcPlaneForMode$javajs_util_P3dA$I$javajs_util_P4d$C(points, nPoints, plane, "z");
if (rmsd < 1.0E-6 ) return rmsd;
var f2=C$.calcPlaneForMode$javajs_util_P3dA$I$javajs_util_P4d$C(points, nPoints, plane2, "y");
if (f2 < rmsd ) {
rmsd=f2;
pmin=plane2;
plane3=plane;
} else {
plane3=plane2;
}if (rmsd >= 1.0E-6 ) {
f2=C$.calcPlaneForMode$javajs_util_P3dA$I$javajs_util_P4d$C(points, nPoints, plane3, "x");
if (f2 < rmsd ) {
rmsd=f2;
pmin=plane3;
}}if (pmin !== plane ) {
plane.setT$javajs_util_T3d(pmin);
plane.w=pmin.w;
}return rmsd;
}, 1);

Clazz.newMeth(C$, 'calcPlaneForMode$javajs_util_P3dA$I$javajs_util_P4d$C',  function (points, nPoints, plane, mode) {
var A=Clazz.array(Double.TYPE, [nPoints, 3]);
var AT=Clazz.array(Double.TYPE, [3, nPoints]);
var ATAT=Clazz.array(Double.TYPE, [3, nPoints]);
var ATA1=Clazz.array(Double.TYPE, [3, 3]);
var B=Clazz.array(Double.TYPE, [nPoints]);
for (var i=nPoints; --i >= 0; ) {
var p=points[i];
A[i][0]=AT[0][i]=(mode == "x" ? p.z : p.x);
A[i][1]=AT[1][i]=(mode == "y" ? p.z : p.y);
A[i][2]=AT[2][i]=1;
B[i]=-(mode == "y" ? p.y : mode == "x" ? p.x : p.z);
}
var m=Clazz.new_($I$(8,1));
for (var i=3; --i >= 0; ) {
for (var j=3; --j >= 0; ) {
var d=0;
for (var k=nPoints; --k >= 0; ) {
d+=AT[i][k] * A[k][j];
}
m.set33$I$I$D(i, j, d);
}
}
m.invert$();
for (var i=3; --i >= 0; ) {
for (var j=3; --j >= 0; ) {
ATA1[i][j]=m.get33$I$I(i, j);
}
}
for (var i=3; --i >= 0; ) {
for (var k=nPoints; --k >= 0; ) {
var d=0;
for (var j=3; --j >= 0; ) {
d+=ATA1[i][j] * AT[j][k];
}
ATAT[i][k]=d;
}
}
switch (mode.$c()) {
case 120:
plane.x=1;
break;
case 121:
plane.y=1;
break;
case 122:
plane.z=1;
break;
}
var len2=1;
for (var j=3; --j >= 0; ) {
var v=0;
for (var k=nPoints; --k >= 0; ) {
v+=ATAT[j][k] * B[k];
}
switch (j) {
case 0:
len2+=v * v;
if (mode == "x") plane.z=v;
 else plane.x=v;
break;
case 1:
len2+=v * v;
if (mode == "y") plane.z=v;
 else plane.y=v;
break;
case 2:
plane.w=v;
}
}
var f=Math.sqrt(len2);
plane.scale4$D((1 / plane.w > 0  ? 1 : -1) / f);
var sum2=0;
for (var i=0; i < nPoints; i++) {
var d=C$.distanceToPlane$javajs_util_P4d$javajs_util_T3d(plane, points[i]);
sum2+=d * d;
}
var ret=Math.sqrt(sum2 / nPoints);
return ret;
}, 1);

Clazz.newMeth(C$, 'rndPt$',  function () {
return $I$(2,"new3$D$D$D",[Math.random() * 20, (Math.random() * 20), (Math.random() * 20)]);
}, 1);

Clazz.newMeth(C$, 'testRnd$',  function () {
var plane=$I$(7,"new4$D$D$D$D",[Math.random() * 20, Math.random() * 20, Math.random() * 20, Math.random() * 20]);
plane.scale4$D(1 / plane.length$());
System.out.println$S("\n==========\n ");
System.out.println$S("plane is " + plane);
var ptProj=Clazz.new_($I$(2,1));
var vNorm=Clazz.new_($I$(1,1));
var pts=Clazz.array($I$(2), [4]);
for (var i=0; i < pts.length; i++) {
pts[i]=Clazz.new_($I$(2,1));
var p=C$.rndPt$();
C$.getPlaneProjection$javajs_util_T3d$javajs_util_P4d$javajs_util_T3d$javajs_util_V3d(p, plane, ptProj, vNorm);
pts[i].setT$javajs_util_T3d(ptProj);
var d=Math.random() * 0.1;
pts[i].scaleAdd2$D$javajs_util_T3d$javajs_util_T3d(d, vNorm, ptProj);
System.out.println$S(pts[i] + " d=" + new Double(d).toString() );
}
var p2=Clazz.new_($I$(7,1));
var f=C$.calcBestPlaneThroughPoints$javajs_util_P3dA$I$javajs_util_P4d(pts, -1, p2);
System.out.println$S("found " + p2 + " rmsd = " + new Double(f).toString() );
}, 1);

Clazz.newMeth(C$, 'test$',  function () {
for (var i=0; i < 10; i++) C$.testRnd$();

System.exit$I(0);
}, 1);

Clazz.newMeth(C$, 'getPointsOnPlane$javajs_util_P3dA$javajs_util_P4d',  function (pts, plane) {
var ret=Clazz.new_($I$(4,1));
for (var i=pts.length; --i >= 0; ) {
var d=Math.abs(C$.distanceToPlane$javajs_util_P4d$javajs_util_T3d(plane, pts[i]));
if (d < 0.001 ) {
ret.addLast$O(pts[i]);
}}
return ret;
}, 1);

Clazz.newMeth(C$, 'getLatticePoints$javajs_util_Lst$I$I$I',  function (cpts, h, k, l) {
cpts.addLast$O(Clazz.new_($I$(2,1)));
h=(h == 0 ? 1 : Math.abs(h));
k=(k == 0 ? 1 : Math.abs(k));
l=(l == 0 ? 1 : Math.abs(l));
var n=cpts.size$();
for (var ih=-h; ih <= h; ih++) {
for (var ik=-k; ik <= k; ik++) {
for (var il=-l; il <= l; il++) {
for (var i=0; i < n; i++) {
var pt=$I$(2).new3$D$D$D(ih, ik, il);
pt.add$javajs_util_T3d(cpts.get$I(i));
cpts.addLast$O(pt);
}
}
}
}
for (var i=n; --i >= 0; ) cpts.removeItemAt$I(0);

return cpts;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.axisY=$I$(1).new3$D$D$D(0, 1, 0);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:46 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
