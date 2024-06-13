(function(){var P$=Clazz.newPackage("javax.swing.text"),I$=[[0,'javajs.util.Lst',['javax.swing.text.SegmentCache','.CachedSegment']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SegmentCache", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['CachedSegment',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['segments','javajs.util.Lst']]
,['O',['sharedCache','javax.swing.text.SegmentCache']]]

Clazz.newMeth(C$, 'getSharedInstance$',  function () {
if (C$.sharedCache == null ) C$.sharedCache=Clazz.new_(C$);
return C$.sharedCache;
}, 1);

Clazz.newMeth(C$, 'getSharedSegment$',  function () {
return C$.getSharedInstance$().getSegment$();
}, 1);

Clazz.newMeth(C$, 'releaseSharedSegment$javax_swing_text_Segment',  function (segment) {
C$.getSharedInstance$().releaseSegment$javax_swing_text_Segment(segment);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.segments=Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'getSegment$',  function () {
{
var size=this.segments.size$();
if (size > 0) {
return this.segments.removeItemAt$I(size - 1);
}}return Clazz.new_($I$(2,1));
});

Clazz.newMeth(C$, 'releaseSegment$javax_swing_text_Segment',  function (segment) {
if (Clazz.instanceOf(segment, "javax.swing.text.SegmentCache.CachedSegment")) {
{
segment.array=null;
segment.count=0;
this.segments.add$O(segment);
}}});
;
(function(){/*c*/var C$=Clazz.newClass(P$.SegmentCache, "CachedSegment", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.text.Segment');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:22 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
