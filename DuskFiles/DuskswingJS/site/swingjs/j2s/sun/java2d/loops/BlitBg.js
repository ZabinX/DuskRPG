(function(){var P$=Clazz.newPackage("sun.java2d.loops"),I$=[[0,'java.awt.Font','sun.java2d.loops.GraphicsPrimitive','sun.java2d.loops.RenderCache','sun.java2d.loops.GraphicsPrimitiveMgr',['sun.java2d.loops.BlitBg','.General'],['sun.java2d.loops.BlitBg','.TraceBlitBg']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BlitBg", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'sun.java2d.loops.GraphicsPrimitive');
C$.$classes$=[['General',10],['TraceBlitBg',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['I',['primTypeID'],'S',['$methodSignature'],'O',['blitcache','sun.java2d.loops.RenderCache']]]

Clazz.newMeth(C$, 'locate$sun_java2d_loops_SurfaceType$sun_java2d_loops_CompositeType$sun_java2d_loops_SurfaceType',  function (srctype, comptype, dsttype) {
return $I$(4).locate$I$sun_java2d_loops_SurfaceType$sun_java2d_loops_CompositeType$sun_java2d_loops_SurfaceType(C$.primTypeID, srctype, comptype, dsttype);
}, 1);

Clazz.newMeth(C$, 'getFromCache$sun_java2d_loops_SurfaceType$sun_java2d_loops_CompositeType$sun_java2d_loops_SurfaceType',  function (src, comp, dst) {
var o=C$.blitcache.get$sun_java2d_loops_SurfaceType$sun_java2d_loops_CompositeType$sun_java2d_loops_SurfaceType(src, comp, dst);
if (o != null ) {
return o;
}var blit=C$.locate$sun_java2d_loops_SurfaceType$sun_java2d_loops_CompositeType$sun_java2d_loops_SurfaceType(src, comp, dst);
if (blit == null ) {
System.out.println$S("blitbg loop not found for:");
System.out.println$S("src:  " + src);
System.out.println$S("comp: " + comp);
System.out.println$S("dst:  " + dst);
} else {
C$.blitcache.put$sun_java2d_loops_SurfaceType$sun_java2d_loops_CompositeType$sun_java2d_loops_SurfaceType$O(src, comp, dst, blit);
}return blit;
}, 1);

Clazz.newMeth(C$, 'c$$sun_java2d_loops_SurfaceType$sun_java2d_loops_CompositeType$sun_java2d_loops_SurfaceType',  function (srctype, comptype, dsttype) {
;C$.superclazz.c$$S$I$sun_java2d_loops_SurfaceType$sun_java2d_loops_CompositeType$sun_java2d_loops_SurfaceType.apply(this,[C$.$methodSignature, C$.primTypeID, srctype, comptype, dsttype]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$J$sun_java2d_loops_SurfaceType$sun_java2d_loops_CompositeType$sun_java2d_loops_SurfaceType',  function (pNativePrim, srctype, comptype, dsttype) {
;C$.superclazz.c$$J$S$I$sun_java2d_loops_SurfaceType$sun_java2d_loops_CompositeType$sun_java2d_loops_SurfaceType.apply(this,[pNativePrim, C$.$methodSignature, C$.primTypeID, srctype, comptype, dsttype]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'BlitBg$sun_java2d_SurfaceData$sun_java2d_SurfaceData$java_awt_Composite$sun_java2d_pipe_Region$java_awt_Color$I$I$I$I$I$I',  function (src, dst, comp, clip, bgColor, srcx, srcy, dstx, dsty, width, height) {
alert('native method must be replaced! BlitBg');
}
);

Clazz.newMeth(C$, 'makePrimitive$sun_java2d_loops_SurfaceType$sun_java2d_loops_CompositeType$sun_java2d_loops_SurfaceType',  function (srctype, comptype, dsttype) {
return Clazz.new_($I$(5,1).c$$sun_java2d_loops_SurfaceType$sun_java2d_loops_CompositeType$sun_java2d_loops_SurfaceType,[srctype, comptype, dsttype]);
});

Clazz.newMeth(C$, 'traceWrap$',  function () {
return Clazz.new_($I$(6,1).c$$sun_java2d_loops_BlitBg,[this]);
});

C$.$static$=function(){C$.$static$=0;
C$.$methodSignature="BlitBg(...)".toString();
C$.primTypeID=$I$(2).makePrimTypeID$();
C$.blitcache=Clazz.new_($I$(3,1).c$$I,[20]);
{
$I$(4,"registerGeneral$sun_java2d_loops_GraphicsPrimitive",[Clazz.new_(C$.c$$sun_java2d_loops_SurfaceType$sun_java2d_loops_CompositeType$sun_java2d_loops_SurfaceType,[null, null, null])]);
};
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.BlitBg, "General", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'sun.java2d.loops.BlitBg');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['$compositeType','sun.java2d.loops.CompositeType']]
,['O',['defaultFont','java.awt.Font']]]

Clazz.newMeth(C$, 'c$$sun_java2d_loops_SurfaceType$sun_java2d_loops_CompositeType$sun_java2d_loops_SurfaceType',  function (srctype, comptype, dsttype) {
;C$.superclazz.c$$sun_java2d_loops_SurfaceType$sun_java2d_loops_CompositeType$sun_java2d_loops_SurfaceType.apply(this,[srctype, comptype, dsttype]);C$.$init$.apply(this);
this.$compositeType=comptype;
}, 1);

Clazz.newMeth(C$, 'BlitBg$sun_java2d_SurfaceData$sun_java2d_SurfaceData$java_awt_Composite$sun_java2d_pipe_Region$java_awt_Color$I$I$I$I$I$I',  function (srcData, dstData, comp, clip, bgColor, srcx, srcy, dstx, dsty, width, height) {
});

C$.$static$=function(){C$.$static$=0;
C$.defaultFont=Clazz.new_($I$(1,1).c$$S$I$I,["Dialog", 0, 12]);
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BlitBg, "TraceBlitBg", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'sun.java2d.loops.BlitBg');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['target','sun.java2d.loops.BlitBg']]]

Clazz.newMeth(C$, 'c$$sun_java2d_loops_BlitBg',  function (target) {
;C$.superclazz.c$$sun_java2d_loops_SurfaceType$sun_java2d_loops_CompositeType$sun_java2d_loops_SurfaceType.apply(this,[target.getSourceType$(), target.getCompositeType$(), target.getDestType$()]);C$.$init$.apply(this);
this.target=target;
}, 1);

Clazz.newMeth(C$, 'traceWrap$',  function () {
return this;
});

Clazz.newMeth(C$, 'BlitBg$sun_java2d_SurfaceData$sun_java2d_SurfaceData$java_awt_Composite$sun_java2d_pipe_Region$java_awt_Color$I$I$I$I$I$I',  function (src, dst, comp, clip, bgColor, srcx, srcy, dstx, dsty, width, height) {
$I$(2).tracePrimitive$O(this.target);
this.target.BlitBg$sun_java2d_SurfaceData$sun_java2d_SurfaceData$java_awt_Composite$sun_java2d_pipe_Region$java_awt_Color$I$I$I$I$I$I(src, dst, comp, clip, bgColor, srcx, srcy, dstx, dsty, width, height);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:45 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
