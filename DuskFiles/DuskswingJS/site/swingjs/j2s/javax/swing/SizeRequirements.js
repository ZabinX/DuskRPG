(function(){var P$=Clazz.newPackage("javax.swing"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "SizeRequirements");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['F',['alignment'],'I',['minimum','preferred','maximum']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.minimum=0;
this.preferred=0;
this.maximum=0;
this.alignment=0.5;
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$F',  function (min, pref, max, a) {
;C$.$init$.apply(this);
this.minimum=min;
this.preferred=pref;
this.maximum=max;
this.alignment=a > 1.0  ? 1.0 : a < 0.0  ? 0.0 : a;
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
return "[" + this.minimum + "," + this.preferred + "," + this.maximum + "]@" + new Float(this.alignment).toString() ;
});

Clazz.newMeth(C$, 'getTiledSizeRequirements$javax_swing_SizeRequirementsA',  function (children) {
var total=Clazz.new_(C$);
for (var i=0; i < children.length; i++) {
var req=children[i];
total.minimum=Long.$ival(Math.min$J$J(Long.$add(total.minimum,req.minimum), 2147483647));
total.preferred=Long.$ival(Math.min$J$J(Long.$add(total.preferred,req.preferred), 2147483647));
total.maximum=Long.$ival(Math.min$J$J(Long.$add(total.maximum,req.maximum), 2147483647));
}
return total;
}, 1);

Clazz.newMeth(C$, 'getAlignedSizeRequirements$javax_swing_SizeRequirementsA',  function (children) {
var totalAscent=Clazz.new_(C$);
var totalDescent=Clazz.new_(C$);
for (var i=0; i < children.length; i++) {
var req=children[i];
var ascent=((req.alignment * req.minimum)|0);
var descent=req.minimum - ascent;
totalAscent.minimum=Math.max(ascent, totalAscent.minimum);
totalDescent.minimum=Math.max(descent, totalDescent.minimum);
ascent=((req.alignment * req.preferred)|0);
descent=req.preferred - ascent;
totalAscent.preferred=Math.max(ascent, totalAscent.preferred);
totalDescent.preferred=Math.max(descent, totalDescent.preferred);
ascent=((req.alignment * req.maximum)|0);
descent=req.maximum - ascent;
totalAscent.maximum=Math.max(ascent, totalAscent.maximum);
totalDescent.maximum=Math.max(descent, totalDescent.maximum);
}
var min=Long.$ival(Math.min$J$J(Long.$add(totalAscent.minimum,totalDescent.minimum), 2147483647));
var pref=Long.$ival(Math.min$J$J(Long.$add(totalAscent.preferred,totalDescent.preferred), 2147483647));
var max=Long.$ival(Math.min$J$J(Long.$add(totalAscent.maximum,totalDescent.maximum), 2147483647));
var alignment=0.0;
if (min > 0) {
alignment=totalAscent.minimum / min;
alignment=alignment > 1.0  ? 1.0 : alignment < 0.0  ? 0.0 : alignment;
}return Clazz.new_(C$.c$$I$I$I$F,[min, pref, max, alignment]);
}, 1);

Clazz.newMeth(C$, 'calculateTiledPositions$I$javax_swing_SizeRequirements$javax_swing_SizeRequirementsA$IA$IA',  function (allocated, total, children, offsets, spans) {
C$.calcTiled$I$javax_swing_SizeRequirements$javax_swing_SizeRequirementsA$IA$IA$Z(allocated, total, children, offsets, spans, true);
}, 1);

Clazz.newMeth(C$, 'calculateTiledPositions$I$javax_swing_SizeRequirements$javax_swing_SizeRequirementsA$IA$IA$Z',  function (allocated, total, children, offsets, spans, forward) {
C$.calcTiled$I$javax_swing_SizeRequirements$javax_swing_SizeRequirementsA$IA$IA$Z(allocated, total, children, offsets, spans, forward);
}, 1);

Clazz.newMeth(C$, 'calcTiled$I$javax_swing_SizeRequirements$javax_swing_SizeRequirementsA$IA$IA$Z',  function (allocated, total, children, offsets, spans, forward) {
var min=0;
var pref=0;
var max=0;
for (var i=0; i < children.length; i++) {
(min=Long.$add(min,(children[i].minimum)));
(pref=Long.$add(pref,(children[i].preferred)));
(max=Long.$add(max,(children[i].maximum)));
}
if (Long.$ge(allocated,pref )) {
C$.expandedTile$I$J$J$J$javax_swing_SizeRequirementsA$IA$IA$Z(allocated, min, pref, max, children, offsets, spans, forward);
} else {
C$.compressedTile$I$J$J$J$javax_swing_SizeRequirementsA$IA$IA$Z(allocated, min, pref, max, children, offsets, spans, forward);
}}, 1);

Clazz.newMeth(C$, 'compressedTile$I$J$J$J$javax_swing_SizeRequirementsA$IA$IA$Z',  function (allocated, min, pref, max, request, offsets, spans, forward) {
var totalPlay=Long.$fval(Math.min$J$J(Long.$sub(pref,allocated), Long.$sub(pref,min)));
var factor=(Long.$eq(Long.$sub(pref,min),0 )) ? 0.0 : totalPlay / (Long.$sub(pref,min));
var totalOffset;
if (forward) {
totalOffset=0;
for (var i=0; i < spans.length; i++) {
offsets[i]=totalOffset;
var req=request[i];
var play=factor * (req.preferred - req.minimum);
spans[i]=((req.preferred - play)|0);
totalOffset=Long.$ival(Math.min$J$J(Long.$add(totalOffset,spans[i]), 2147483647));
}
} else {
totalOffset=allocated;
for (var i=0; i < spans.length; i++) {
var req=request[i];
var play=factor * (req.preferred - req.minimum);
spans[i]=((req.preferred - play)|0);
offsets[i]=totalOffset - spans[i];
totalOffset=Long.$ival(Math.max$J$J(Long.$sub(totalOffset,spans[i]), 0));
}
}}, 1);

Clazz.newMeth(C$, 'expandedTile$I$J$J$J$javax_swing_SizeRequirementsA$IA$IA$Z',  function (allocated, min, pref, max, request, offsets, spans, forward) {
var totalPlay=Long.$fval(Math.min$J$J(Long.$sub(allocated,pref), Long.$sub(max,pref)));
var factor=(Long.$eq(Long.$sub(max,pref),0 )) ? 0.0 : totalPlay / (Long.$sub(max,pref));
var totalOffset;
if (forward) {
totalOffset=0;
for (var i=0; i < spans.length; i++) {
offsets[i]=totalOffset;
var req=request[i];
var play=((factor * (req.maximum - req.preferred))|0);
spans[i]=Long.$ival(Math.min$J$J(Long.$add(req.preferred,play), 2147483647));
totalOffset=Long.$ival(Math.min$J$J(Long.$add(totalOffset,spans[i]), 2147483647));
}
} else {
totalOffset=allocated;
for (var i=0; i < spans.length; i++) {
var req=request[i];
var play=((factor * (req.maximum - req.preferred))|0);
spans[i]=Long.$ival(Math.min$J$J(Long.$add(req.preferred,play), 2147483647));
offsets[i]=totalOffset - spans[i];
totalOffset=Long.$ival(Math.max$J$J(Long.$sub(totalOffset,spans[i]), 0));
}
}}, 1);

Clazz.newMeth(C$, 'calculateAlignedPositions$I$javax_swing_SizeRequirements$javax_swing_SizeRequirementsA$IA$IA',  function (allocated, total, children, offsets, spans) {
C$.calcAligned$I$javax_swing_SizeRequirements$javax_swing_SizeRequirementsA$IA$IA$Z(allocated, total, children, offsets, spans, true);
}, 1);

Clazz.newMeth(C$, 'calcAligned$I$javax_swing_SizeRequirements$javax_swing_SizeRequirementsA$IA$IA$Z',  function (allocated, total, children, offsets, spans, normal) {
var totalAlignment=normal ? total.alignment : 1.0 - total.alignment;
var totalAscent=((allocated * totalAlignment)|0);
var totalDescent=allocated - totalAscent;
for (var i=0; i < children.length; i++) {
var req=children[i];
var alignment=normal ? req.alignment : 1.0 - req.alignment;
var maxAscent=((req.maximum * alignment)|0);
var maxDescent=req.maximum - maxAscent;
var ascent=Math.min(totalAscent, maxAscent);
var descent=Math.min(totalDescent, maxDescent);
offsets[i]=totalAscent - ascent;
spans[i]=Long.$ival(Math.min$J$J(Long.$add(ascent,descent), 2147483647));
}
}, 1);

Clazz.newMeth(C$, 'calculateAlignedPositions$I$javax_swing_SizeRequirements$javax_swing_SizeRequirementsA$IA$IA$Z',  function (allocated, total, children, offsets, spans, normal) {
C$.calcAligned$I$javax_swing_SizeRequirements$javax_swing_SizeRequirementsA$IA$IA$Z(allocated, total, children, offsets, spans, normal);
}, 1);

Clazz.newMeth(C$, 'adjustSizes$I$javax_swing_SizeRequirementsA',  function (delta, children) {
return Clazz.array(Integer.TYPE, [0]);
}, 1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:02 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
