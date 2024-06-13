(function(){var P$=Clazz.newPackage("sun.awt.geom"),p$1={},I$=[[0,'sun.awt.geom.CurveLink','sun.awt.geom.ChainEnd','java.util.Vector','sun.awt.geom.Curve','sun.awt.geom.Edge','java.util.Arrays','InternalError']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AreaOp", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['CAGOp',1033],['AddOp',9],['SubOp',9],['IntOp',9],['XorOp',9],['NZWindOp',9],['EOWindOp',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['YXTopComparator','java.util.Comparator','EmptyLinkList','sun.awt.geom.CurveLink[]','EmptyChainList','sun.awt.geom.ChainEnd[]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'calculate$java_util_Vector$java_util_Vector',  function (left, right) {
var edges=Clazz.new_($I$(3,1));
C$.addEdges$java_util_Vector$java_util_Vector$I(edges, left, 0);
C$.addEdges$java_util_Vector$java_util_Vector$I(edges, right, 1);
edges=p$1.pruneEdges$java_util_Vector.apply(this, [edges]);
if (false) {
System.out.println$S("result: ");
var numcurves=edges.size$();
var curvelist=edges.toArray$OA(Clazz.array($I$(4), [numcurves]));
for (var i=0; i < numcurves; i++) {
System.out.println$S("curvelist[" + i + "] = " + curvelist[i] );
}
}return edges;
});

Clazz.newMeth(C$, 'addEdges$java_util_Vector$java_util_Vector$I',  function (edges, curves, curvetag) {
var enum_=curves.elements$();
while (enum_.hasMoreElements$()){
var c=enum_.nextElement$();
if (c.getOrder$() > 0) {
edges.add$O(Clazz.new_($I$(5,1).c$$sun_awt_geom_Curve$I,[c, curvetag]));
}}
}, 1);

Clazz.newMeth(C$, 'pruneEdges$java_util_Vector',  function (edges) {
var numedges=edges.size$();
if (numedges < 2) {
return edges;
}var edgelist=edges.toArray$OA(Clazz.array($I$(5), [numedges]));
$I$(6).sort$OA$java_util_Comparator(edgelist, C$.YXTopComparator);
if (false) {
System.out.println$S("pruning: ");
for (var i=0; i < numedges; i++) {
System.out.println$S("edgelist[" + i + "] = " + edgelist[i] );
}
}var e;
var left=0;
var right=0;
var cur=0;
var next=0;
var yrange=Clazz.array(Double.TYPE, [2]);
var subcurves=Clazz.new_($I$(3,1));
var chains=Clazz.new_($I$(3,1));
var links=Clazz.new_($I$(3,1));
while (left < numedges){
var y=yrange[0];
for (cur=next=right - 1; cur >= left; cur--) {
e=edgelist[cur];
if (e.getCurve$().getYBot$() > y ) {
if (next > cur) {
edgelist[next]=e;
}--next;
}}
left=next + 1;
if (left >= right) {
if (right >= numedges) {
break;
}y=edgelist[right].getCurve$().getYTop$();
if (y > yrange[0] ) {
C$.finalizeSubCurves$java_util_Vector$java_util_Vector(subcurves, chains);
}yrange[0]=y;
}while (right < numedges){
e=edgelist[right];
if (e.getCurve$().getYTop$() > y ) {
break;
}++right;
}
yrange[1]=edgelist[left].getCurve$().getYBot$();
if (right < numedges) {
y=edgelist[right].getCurve$().getYTop$();
if (yrange[1] > y ) {
yrange[1]=y;
}}if (false) {
System.out.println$S("current line: y = [" + new Double(yrange[0]).toString() + ", " + new Double(yrange[1]).toString() + "]" );
for (cur=left; cur < right; cur++) {
System.out.println$S("  " + edgelist[cur]);
}
}var nexteq=1;
for (cur=left; cur < right; cur++) {
e=edgelist[cur];
e.setEquivalence$I(0);
for (next=cur; next > left; next--) {
var prevedge=edgelist[next - 1];
var ordering=e.compareTo$sun_awt_geom_Edge$DA(prevedge, yrange);
if (yrange[1] <= yrange[0] ) {
throw Clazz.new_(["backstepping to " + new Double(yrange[1]).toString() + " from " + new Double(yrange[0]).toString() ],$I$(7,1).c$$S);
}if (ordering >= 0) {
if (ordering == 0) {
var eq=prevedge.getEquivalence$();
if (eq == 0) {
eq=nexteq++;
prevedge.setEquivalence$I(eq);
}e.setEquivalence$I(eq);
}break;
}edgelist[next]=prevedge;
}
edgelist[next]=e;
}
if (false) {
System.out.println$S("current sorted line: y = [" + new Double(yrange[0]).toString() + ", " + new Double(yrange[1]).toString() + "]" );
for (cur=left; cur < right; cur++) {
System.out.println$S("  " + edgelist[cur]);
}
}this.newRow$();
var ystart=yrange[0];
var yend=yrange[1];
for (cur=left; cur < right; cur++) {
e=edgelist[cur];
var etag;
var eq=e.getEquivalence$();
if (eq != 0) {
var origstate=this.getState$();
etag=(origstate == 1 ? -1 : 1);
var activematch=null;
var longestmatch=e;
var furthesty=yend;
do {
this.classify$sun_awt_geom_Edge(e);
if (activematch == null  && e.isActiveFor$D$I(ystart, etag) ) {
activematch=e;
}y=e.getCurve$().getYBot$();
if (y > furthesty ) {
longestmatch=e;
furthesty=y;
}} while (++cur < right && (e=edgelist[cur]).getEquivalence$() == eq );
--cur;
if (this.getState$() == origstate) {
etag=0;
} else {
e=(activematch != null  ? activematch : longestmatch);
}} else {
etag=this.classify$sun_awt_geom_Edge(e);
}if (etag != 0) {
e.record$D$I(yend, etag);
links.add$O(Clazz.new_([e.getCurve$(), ystart, yend, etag],$I$(1,1).c$$sun_awt_geom_Curve$D$D$I));
}}
if (this.getState$() != -1) {
System.out.println$S("Still inside at end of active edge list!");
System.out.println$S("num curves = " + (right - left));
System.out.println$S("num links = " + links.size$());
System.out.println$S("y top = " + new Double(yrange[0]).toString());
if (right < numedges) {
System.out.println$S("y top of next curve = " + new Double(edgelist[right].getCurve$().getYTop$()).toString());
} else {
System.out.println$S("no more curves");
}for (cur=left; cur < right; cur++) {
e=edgelist[cur];
System.out.println$O(e);
var eq=e.getEquivalence$();
if (eq != 0) {
System.out.println$S("  was equal to " + eq + "..." );
}}
}if (false) {
System.out.println$S("new links:");
for (var i=0; i < links.size$(); i++) {
var link=links.elementAt$I(i);
System.out.println$S("  " + link.getSubCurve$());
}
}C$.resolveLinks$java_util_Vector$java_util_Vector$java_util_Vector(subcurves, chains, links);
links.clear$();
yrange[0]=yend;
}
C$.finalizeSubCurves$java_util_Vector$java_util_Vector(subcurves, chains);
var ret=Clazz.new_($I$(3,1));
var enum_=subcurves.elements$();
while (enum_.hasMoreElements$()){
var link=enum_.nextElement$();
ret.add$O(link.getMoveto$());
var nextlink=link;
while ((nextlink=nextlink.getNext$()) != null ){
if (!link.absorb$sun_awt_geom_CurveLink(nextlink)) {
ret.add$O(link.getSubCurve$());
link=nextlink;
}}
ret.add$O(link.getSubCurve$());
}
return ret;
}, p$1);

Clazz.newMeth(C$, 'finalizeSubCurves$java_util_Vector$java_util_Vector',  function (subcurves, chains) {
var numchains=chains.size$();
if (numchains == 0) {
return;
}if ((numchains & 1) != 0) {
throw Clazz.new_($I$(7,1).c$$S,["Odd number of chains!"]);
}var endlist=Clazz.array($I$(2), [numchains]);
chains.toArray$OA(endlist);
for (var i=1; i < numchains; i+=2) {
var open=endlist[i - 1];
var close=endlist[i];
var subcurve=open.linkTo$sun_awt_geom_ChainEnd(close);
if (subcurve != null ) {
subcurves.add$O(subcurve);
}}
chains.clear$();
}, 1);

Clazz.newMeth(C$, 'resolveLinks$java_util_Vector$java_util_Vector$java_util_Vector',  function (subcurves, chains, links) {
var numlinks=links.size$();
var linklist;
if (numlinks == 0) {
linklist=C$.EmptyLinkList;
} else {
if ((numlinks & 1) != 0) {
throw Clazz.new_($I$(7,1).c$$S,["Odd number of new curves!"]);
}linklist=Clazz.array($I$(1), [numlinks + 2]);
links.toArray$OA(linklist);
}var numchains=chains.size$();
var endlist;
if (numchains == 0) {
endlist=C$.EmptyChainList;
} else {
if ((numchains & 1) != 0) {
throw Clazz.new_($I$(7,1).c$$S,["Odd number of chains!"]);
}endlist=Clazz.array($I$(2), [numchains + 2]);
chains.toArray$OA(endlist);
}var curchain=0;
var curlink=0;
chains.clear$();
var chain=endlist[0];
var nextchain=endlist[1];
var link=linklist[0];
var nextlink=linklist[1];
while (chain != null  || link != null  ){
var connectchains=(link == null );
var connectlinks=(chain == null );
if (!connectchains && !connectlinks ) {
connectchains=((curchain & 1) == 0 && chain.getX$() == nextchain.getX$()  );
connectlinks=((curlink & 1) == 0 && link.getX$() == nextlink.getX$()  );
if (!connectchains && !connectlinks ) {
var cx=chain.getX$();
var lx=link.getX$();
connectchains=(nextchain != null  && cx < lx   && C$.obstructs$D$D$I(nextchain.getX$(), lx, curchain) );
connectlinks=(nextlink != null  && lx < cx   && C$.obstructs$D$D$I(nextlink.getX$(), cx, curlink) );
}}if (connectchains) {
var subcurve=chain.linkTo$sun_awt_geom_ChainEnd(nextchain);
if (subcurve != null ) {
subcurves.add$O(subcurve);
}curchain+=2;
chain=endlist[curchain];
nextchain=endlist[curchain + 1];
}if (connectlinks) {
var openend=Clazz.new_($I$(2,1).c$$sun_awt_geom_CurveLink$sun_awt_geom_ChainEnd,[link, null]);
var closeend=Clazz.new_($I$(2,1).c$$sun_awt_geom_CurveLink$sun_awt_geom_ChainEnd,[nextlink, openend]);
openend.setOtherEnd$sun_awt_geom_ChainEnd(closeend);
chains.add$O(openend);
chains.add$O(closeend);
curlink+=2;
link=linklist[curlink];
nextlink=linklist[curlink + 1];
}if (!connectchains && !connectlinks ) {
chain.addLink$sun_awt_geom_CurveLink(link);
chains.add$O(chain);
++curchain;
chain=nextchain;
nextchain=endlist[curchain + 1];
++curlink;
link=nextlink;
nextlink=linklist[curlink + 1];
}}
if ((chains.size$() & 1) != 0) {
System.out.println$S("Odd number of chains!");
}}, 1);

Clazz.newMeth(C$, 'obstructs$D$D$I',  function (v1, v2, phase) {
return (((phase & 1) == 0) ? (v1 <= v2 ) : (v1 < v2 ));
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.YXTopComparator=((P$.AreaOp$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AreaOp$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'compare$O$O',  function (o1, o2) {
var c1=(o1).getCurve$();
var c2=(o2).getCurve$();
var v1;
var v2;
if ((v1=c1.getYTop$()) == (v2=c2.getYTop$()) ) {
if ((v1=c1.getXTop$()) == (v2=c2.getXTop$()) ) {
return 0;
}}if (v1 < v2 ) {
return -1;
}return 1;
});
})()
), Clazz.new_(P$.AreaOp$1.$init$,[this, null]));
C$.EmptyLinkList=Clazz.array($I$(1), [2]);
C$.EmptyChainList=Clazz.array($I$(2), [2]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.AreaOp, "CAGOp", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'sun.awt.geom.AreaOp');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['inLeft','inRight','inResult']]]

Clazz.newMeth(C$, 'newRow$',  function () {
this.inLeft=false;
this.inRight=false;
this.inResult=false;
});

Clazz.newMeth(C$, 'classify$sun_awt_geom_Edge',  function (e) {
if (e.getCurveTag$() == 0) {
this.inLeft=!this.inLeft;
} else {
this.inRight=!this.inRight;
}var newClass=this.newClassification$Z$Z(this.inLeft, this.inRight);
if (this.inResult == newClass ) {
return 0;
}this.inResult=newClass;
return (newClass ? 1 : -1);
});

Clazz.newMeth(C$, 'getState$',  function () {
return (this.inResult ? 1 : -1);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AreaOp, "AddOp", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['sun.awt.geom.AreaOp','.CAGOp']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'newClassification$Z$Z',  function (inLeft, inRight) {
return (inLeft || inRight );
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AreaOp, "SubOp", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['sun.awt.geom.AreaOp','.CAGOp']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'newClassification$Z$Z',  function (inLeft, inRight) {
return (inLeft && !inRight );
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AreaOp, "IntOp", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['sun.awt.geom.AreaOp','.CAGOp']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'newClassification$Z$Z',  function (inLeft, inRight) {
return (inLeft && inRight );
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AreaOp, "XorOp", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['sun.awt.geom.AreaOp','.CAGOp']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'newClassification$Z$Z',  function (inLeft, inRight) {
return (inLeft != inRight );
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AreaOp, "NZWindOp", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'sun.awt.geom.AreaOp');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['count']]]

Clazz.newMeth(C$, 'newRow$',  function () {
this.count=0;
});

Clazz.newMeth(C$, 'classify$sun_awt_geom_Edge',  function (e) {
var newCount=this.count;
var type=(newCount == 0 ? 1 : 0);
newCount+=e.getCurve$().getDirection$();
this.count=newCount;
return (newCount == 0 ? -1 : type);
});

Clazz.newMeth(C$, 'getState$',  function () {
return ((this.count == 0) ? -1 : 1);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AreaOp, "EOWindOp", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'sun.awt.geom.AreaOp');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['inside']]]

Clazz.newMeth(C$, 'newRow$',  function () {
this.inside=false;
});

Clazz.newMeth(C$, 'classify$sun_awt_geom_Edge',  function (e) {
var newInside=!this.inside;
this.inside=newInside;
return (newInside ? 1 : -1);
});

Clazz.newMeth(C$, 'getState$',  function () {
return (this.inside ? 1 : -1);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:43 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
