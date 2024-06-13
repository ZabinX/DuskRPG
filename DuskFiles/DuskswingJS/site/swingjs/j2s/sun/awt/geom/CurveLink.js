(function(){var P$=Clazz.newPackage("sun.awt.geom"),I$=[[0,'InternalError','sun.awt.geom.Order0']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CurveLink");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['ytop','ybot'],'I',['etag'],'O',['curve','sun.awt.geom.Curve','next','sun.awt.geom.CurveLink']]]

Clazz.newMeth(C$, 'c$$sun_awt_geom_Curve$D$D$I',  function (curve, ystart, yend, etag) {
;C$.$init$.apply(this);
this.curve=curve;
this.ytop=ystart;
this.ybot=yend;
this.etag=etag;
if (this.ytop < curve.getYTop$()  || this.ybot > curve.getYBot$()  ) {
throw Clazz.new_(["bad curvelink [" + new Double(this.ytop).toString() + "=>" + new Double(this.ybot).toString() + "] for " + curve ],$I$(1,1).c$$S);
}}, 1);

Clazz.newMeth(C$, 'absorb$sun_awt_geom_CurveLink',  function (link) {
return this.absorb$sun_awt_geom_Curve$D$D$I(link.curve, link.ytop, link.ybot, link.etag);
});

Clazz.newMeth(C$, 'absorb$sun_awt_geom_Curve$D$D$I',  function (curve, ystart, yend, etag) {
if (this.curve !== curve  || this.etag != etag  || this.ybot < ystart   || this.ytop > yend  ) {
return false;
}if (ystart < curve.getYTop$()  || yend > curve.getYBot$()  ) {
throw Clazz.new_(["bad curvelink [" + new Double(ystart).toString() + "=>" + new Double(yend).toString() + "] for " + curve ],$I$(1,1).c$$S);
}this.ytop=Math.min(this.ytop, ystart);
this.ybot=Math.max(this.ybot, yend);
return true;
});

Clazz.newMeth(C$, 'isEmpty$',  function () {
return (this.ytop == this.ybot );
});

Clazz.newMeth(C$, 'getCurve$',  function () {
return this.curve;
});

Clazz.newMeth(C$, 'getSubCurve$',  function () {
if (this.ytop == this.curve.getYTop$()  && this.ybot == this.curve.getYBot$()  ) {
return this.curve.getWithDirection$I(this.etag);
}return this.curve.getSubCurve$D$D$I(this.ytop, this.ybot, this.etag);
});

Clazz.newMeth(C$, 'getMoveto$',  function () {
return Clazz.new_([this.getXTop$(), this.getYTop$()],$I$(2,1).c$$D$D);
});

Clazz.newMeth(C$, 'getXTop$',  function () {
return this.curve.XforY$D(this.ytop);
});

Clazz.newMeth(C$, 'getYTop$',  function () {
return this.ytop;
});

Clazz.newMeth(C$, 'getXBot$',  function () {
return this.curve.XforY$D(this.ybot);
});

Clazz.newMeth(C$, 'getYBot$',  function () {
return this.ybot;
});

Clazz.newMeth(C$, 'getX$',  function () {
return this.curve.XforY$D(this.ytop);
});

Clazz.newMeth(C$, 'getEdgeTag$',  function () {
return this.etag;
});

Clazz.newMeth(C$, 'setNext$sun_awt_geom_CurveLink',  function (link) {
this.next=link;
});

Clazz.newMeth(C$, 'getNext$',  function () {
return this.next;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:43 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
