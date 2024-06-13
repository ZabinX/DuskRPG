(function(){var P$=Clazz.newPackage("java.awt.font"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "TextJustifier");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['start','limit'],'O',['info','java.awt.font.GlyphJustificationInfo[]']]
,['Z',['DEBUG']]]

Clazz.newMeth(C$, 'c$$java_awt_font_GlyphJustificationInfoA$I$I',  function (info, start, limit) {
;C$.$init$.apply(this);
this.info=info;
this.start=start;
this.limit=limit;
if (C$.DEBUG) {
System.out.println$S("start: " + start + ", limit: " + limit );
for (var i=start; i < limit; i++) {
var gji=info[i];
System.out.println$S("w: " + new Float(gji.weight).toString() + ", gp: " + gji.growPriority + ", gll: " + new Float(gji.growLeftLimit).toString() + ", grl: " + new Float(gji.growRightLimit).toString() );
}
}}, 1);

Clazz.newMeth(C$, 'justify$F',  function (delta) {
var deltas=Clazz.array(Float.TYPE, [this.info.length * 2]);
var grow=delta > 0 ;
if (C$.DEBUG) System.out.println$S("delta: " + new Float(delta).toString());
var fallbackPriority=-1;
for (var p=0; delta != 0 ; p++) {
var lastPass=p > 3;
if (lastPass) p=fallbackPriority;
var weight=0;
var gslimit=0;
var absorbweight=0;
for (var i=this.start; i < this.limit; i++) {
var gi=this.info[i];
if ((grow ? gi.growPriority : gi.shrinkPriority) == p) {
if (fallbackPriority == -1) {
fallbackPriority=p;
}if (i != this.start) {
weight+=gi.weight;
if (grow) {
gslimit+=gi.growLeftLimit;
if (gi.growAbsorb) {
absorbweight+=gi.weight;
}} else {
gslimit+=gi.shrinkLeftLimit;
if (gi.shrinkAbsorb) {
absorbweight+=gi.weight;
}}}if (i + 1 != this.limit) {
weight+=gi.weight;
if (grow) {
gslimit+=gi.growRightLimit;
if (gi.growAbsorb) {
absorbweight+=gi.weight;
}} else {
gslimit+=gi.shrinkRightLimit;
if (gi.shrinkAbsorb) {
absorbweight+=gi.weight;
}}}}}
if (!grow) {
gslimit=-gslimit;
}var hitLimit=(weight == 0 ) || (!lastPass && ((delta < 0 ) == (delta < gslimit ) ) ) ;
var absorbing=hitLimit && absorbweight > 0  ;
var weightedDelta=delta / weight;
var weightedAbsorb=0;
if (hitLimit && absorbweight > 0  ) {
weightedAbsorb=(delta - gslimit) / absorbweight;
}if (C$.DEBUG) {
System.out.println$S("pass: " + p + ", d: " + new Float(delta).toString() + ", l: " + new Float(gslimit).toString() + ", w: " + new Float(weight).toString() + ", aw: " + new Float(absorbweight).toString() + ", wd: " + new Float(weightedDelta).toString() + ", wa: " + new Float(weightedAbsorb).toString() + ", hit: " + (hitLimit ? "y" : "n") );
}var n=this.start * 2;
for (var i=this.start; i < this.limit; i++) {
var gi=this.info[i];
if ((grow ? gi.growPriority : gi.shrinkPriority) == p) {
if (i != this.start) {
var d;
if (hitLimit) {
d=grow ? gi.growLeftLimit : -gi.shrinkLeftLimit;
if (absorbing) {
d+=gi.weight * weightedAbsorb;
}} else {
d=gi.weight * weightedDelta;
}deltas[n]+=d;
}++n;
if (i + 1 != this.limit) {
var d;
if (hitLimit) {
d=grow ? gi.growRightLimit : -gi.shrinkRightLimit;
if (absorbing) {
d+=gi.weight * weightedAbsorb;
}} else {
d=gi.weight * weightedDelta;
}deltas[n]+=d;
}++n;
} else {
n+=2;
}}
if (!lastPass && hitLimit && !absorbing  ) {
delta-=gslimit;
} else {
delta=0;
}}
if (C$.DEBUG) {
var total=0;
for (var i=0; i < deltas.length; i++) {
total+=deltas[i];
System.out.print$S(new Float(deltas[i]).toString() + ", ");
if (i % 20 == 9) {
System.out.println$();
}}
System.out.println$S("\ntotal: " + new Float(total).toString());
System.out.println$();
}return deltas;
});

C$.$static$=function(){C$.$static$=0;
C$.DEBUG=false;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:09 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
