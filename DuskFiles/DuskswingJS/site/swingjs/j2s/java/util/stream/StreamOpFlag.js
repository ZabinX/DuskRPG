(function(){var P$=Clazz.newPackage("java.util.stream"),I$=[[0,['java.util.stream.StreamOpFlag','.Type'],['java.util.stream.StreamOpFlag','.MaskBuilder'],'java.util.EnumMap']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*e*/var C$=Clazz.newClass(P$, "StreamOpFlag", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'Enum');
C$.$classes$=[['Type',24],['MaskBuilder',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['bitPosition','set','clear','preserve'],'O',['maskTable','java.util.Map']]
,['I',['SPLITERATOR_CHARACTERISTICS_MASK','STREAM_MASK','OP_MASK','TERMINAL_OP_MASK','UPSTREAM_TERMINAL_OP_MASK','FLAG_MASK','FLAG_MASK_IS','FLAG_MASK_NOT','INITIAL_OPS_VALUE','IS_DISTINCT','NOT_DISTINCT','IS_SORTED','NOT_SORTED','IS_ORDERED','NOT_ORDERED','IS_SIZED','NOT_SIZED','IS_SHORT_CIRCUIT']]]

Clazz.newMeth(C$, 'set$java_util_stream_StreamOpFlag_Type',  function (t) {
return Clazz.new_([Clazz.new_([Clazz.getClass($I$(1))],$I$(3,1).c$$Class)],$I$(2,1).c$$java_util_Map).set$java_util_stream_StreamOpFlag_Type(t);
}, 1);

Clazz.newMeth(C$, 'c$$I$java_util_stream_StreamOpFlag_MaskBuilder',  function (position, maskBuilder) {
;C$.$init$.apply(this);
this.maskTable=maskBuilder.build$();
position*=2;
this.bitPosition=position;
this.set=1 << position;
this.clear=2 << position;
this.preserve=3 << position;
}, 1);

Clazz.newMeth(C$, 'set$',  function () {
return this.set;
});

Clazz.newMeth(C$, 'clear$',  function () {
return this.clear;
});

Clazz.newMeth(C$, 'isStreamFlag$',  function () {
return (this.maskTable.get$O($I$(1).STREAM)).$c() > 0 ;
});

Clazz.newMeth(C$, 'isKnown$I',  function (flags) {
return (flags & this.preserve) == this.set;
});

Clazz.newMeth(C$, 'isCleared$I',  function (flags) {
return (flags & this.preserve) == this.clear;
});

Clazz.newMeth(C$, 'isPreserved$I',  function (flags) {
return (flags & this.preserve) == this.preserve;
});

Clazz.newMeth(C$, 'canSet$java_util_stream_StreamOpFlag_Type',  function (t) {
return (((this.maskTable.get$O(t)).$c() & 1)|0) > 0;
});

Clazz.newMeth(C$, 'createMask$java_util_stream_StreamOpFlag_Type',  function (t) {
var mask=0;
for (var flag, $flag = 0, $$flag = C$.values$(); $flag<$$flag.length&&((flag=($$flag[$flag])),1);$flag++) {
mask|=((flag.maskTable.get$O(t)).$c() << flag.bitPosition)|0;
}
return mask;
}, 1);

Clazz.newMeth(C$, 'createFlagMask$',  function () {
var mask=0;
for (var flag, $flag = 0, $$flag = C$.values$(); $flag<$$flag.length&&((flag=($$flag[$flag])),1);$flag++) {
mask|=flag.preserve;
}
return mask;
}, 1);

Clazz.newMeth(C$, 'getMask$I',  function (flags) {
return (flags == 0) ? C$.FLAG_MASK : ~(flags | ((C$.FLAG_MASK_IS & flags) << 1) | ((C$.FLAG_MASK_NOT & flags) >> 1) );
}, 1);

Clazz.newMeth(C$, 'combineOpFlags$I$I',  function (newStreamOrOpFlags, prevCombOpFlags) {
return (prevCombOpFlags & C$.getMask$I(newStreamOrOpFlags)) | newStreamOrOpFlags;
}, 1);

Clazz.newMeth(C$, 'toStreamFlags$I',  function (combOpFlags) {
return ((~combOpFlags) >> 1) & C$.FLAG_MASK_IS & combOpFlags ;
}, 1);

Clazz.newMeth(C$, 'toCharacteristics$I',  function (streamFlags) {
return streamFlags & C$.SPLITERATOR_CHARACTERISTICS_MASK;
}, 1);

Clazz.newMeth(C$, 'fromCharacteristics$java_util_Spliterator',  function (spliterator) {
var characteristics=spliterator.characteristics$();
if ((characteristics & 4) != 0 && spliterator.getComparator$() != null  ) {
return characteristics & C$.SPLITERATOR_CHARACTERISTICS_MASK & ~4 ;
} else {
return characteristics & C$.SPLITERATOR_CHARACTERISTICS_MASK;
}}, 1);

Clazz.newMeth(C$, 'fromCharacteristics$I',  function (characteristics) {
return characteristics & C$.SPLITERATOR_CHARACTERISTICS_MASK;
}, 1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$I$java_util_stream_StreamOpFlag_MaskBuilder, "DISTINCT", 0, [0, C$.set$java_util_stream_StreamOpFlag_Type($I$(1).SPLITERATOR).set$java_util_stream_StreamOpFlag_Type($I$(1).STREAM).setAndClear$java_util_stream_StreamOpFlag_Type($I$(1).OP)]);
Clazz.newEnumConst($vals, C$.c$$I$java_util_stream_StreamOpFlag_MaskBuilder, "SORTED", 1, [1, C$.set$java_util_stream_StreamOpFlag_Type($I$(1).SPLITERATOR).set$java_util_stream_StreamOpFlag_Type($I$(1).STREAM).setAndClear$java_util_stream_StreamOpFlag_Type($I$(1).OP)]);
Clazz.newEnumConst($vals, C$.c$$I$java_util_stream_StreamOpFlag_MaskBuilder, "ORDERED", 2, [2, C$.set$java_util_stream_StreamOpFlag_Type($I$(1).SPLITERATOR).set$java_util_stream_StreamOpFlag_Type($I$(1).STREAM).setAndClear$java_util_stream_StreamOpFlag_Type($I$(1).OP).clear$java_util_stream_StreamOpFlag_Type($I$(1).TERMINAL_OP).clear$java_util_stream_StreamOpFlag_Type($I$(1).UPSTREAM_TERMINAL_OP)]);
Clazz.newEnumConst($vals, C$.c$$I$java_util_stream_StreamOpFlag_MaskBuilder, "SIZED", 3, [3, C$.set$java_util_stream_StreamOpFlag_Type($I$(1).SPLITERATOR).set$java_util_stream_StreamOpFlag_Type($I$(1).STREAM).clear$java_util_stream_StreamOpFlag_Type($I$(1).OP)]);
Clazz.newEnumConst($vals, C$.c$$I$java_util_stream_StreamOpFlag_MaskBuilder, "SHORT_CIRCUIT", 4, [12, C$.set$java_util_stream_StreamOpFlag_Type($I$(1).OP).set$java_util_stream_StreamOpFlag_Type($I$(1).TERMINAL_OP)]);
C$.SPLITERATOR_CHARACTERISTICS_MASK=C$.createMask$java_util_stream_StreamOpFlag_Type($I$(1).SPLITERATOR);
C$.STREAM_MASK=C$.createMask$java_util_stream_StreamOpFlag_Type($I$(1).STREAM);
C$.OP_MASK=C$.createMask$java_util_stream_StreamOpFlag_Type($I$(1).OP);
C$.TERMINAL_OP_MASK=C$.createMask$java_util_stream_StreamOpFlag_Type($I$(1).TERMINAL_OP);
C$.UPSTREAM_TERMINAL_OP_MASK=C$.createMask$java_util_stream_StreamOpFlag_Type($I$(1).UPSTREAM_TERMINAL_OP);
C$.FLAG_MASK=C$.createFlagMask$();
C$.FLAG_MASK_IS=C$.STREAM_MASK;
C$.FLAG_MASK_NOT=C$.STREAM_MASK << 1;
C$.INITIAL_OPS_VALUE=C$.FLAG_MASK_IS | C$.FLAG_MASK_NOT;
C$.IS_DISTINCT=C$.DISTINCT.set;
C$.NOT_DISTINCT=C$.DISTINCT.clear;
C$.IS_SORTED=C$.SORTED.set;
C$.NOT_SORTED=C$.SORTED.clear;
C$.IS_ORDERED=C$.ORDERED.set;
C$.NOT_ORDERED=C$.ORDERED.clear;
C$.IS_SIZED=C$.SIZED.set;
C$.NOT_SIZED=C$.SIZED.clear;
C$.IS_SHORT_CIRCUIT=C$.SHORT_CIRCUIT.set;
};
;
(function(){/*e*/var C$=Clazz.newClass(P$.StreamOpFlag, "Type", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "SPLITERATOR", 0, []);
Clazz.newEnumConst($vals, C$.c$, "STREAM", 1, []);
Clazz.newEnumConst($vals, C$.c$, "OP", 2, []);
Clazz.newEnumConst($vals, C$.c$, "TERMINAL_OP", 3, []);
Clazz.newEnumConst($vals, C$.c$, "UPSTREAM_TERMINAL_OP", 4, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StreamOpFlag, "MaskBuilder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['map','java.util.Map']]]

Clazz.newMeth(C$, 'c$$java_util_Map',  function (map) {
;C$.$init$.apply(this);
this.map=map;
}, 1);

Clazz.newMeth(C$, 'mask$java_util_stream_StreamOpFlag_Type$Integer',  function (t, i) {
this.map.put$O$O(t, i);
return this;
});

Clazz.newMeth(C$, 'set$java_util_stream_StreamOpFlag_Type',  function (t) {
return this.mask$java_util_stream_StreamOpFlag_Type$Integer(t, Integer.valueOf$I(1));
});

Clazz.newMeth(C$, 'clear$java_util_stream_StreamOpFlag_Type',  function (t) {
return this.mask$java_util_stream_StreamOpFlag_Type$Integer(t, Integer.valueOf$I(2));
});

Clazz.newMeth(C$, 'setAndClear$java_util_stream_StreamOpFlag_Type',  function (t) {
return this.mask$java_util_stream_StreamOpFlag_Type$Integer(t, Integer.valueOf$I(3));
});

Clazz.newMeth(C$, 'build$',  function () {
for (var t, $t = 0, $$t = $I$(1).values$(); $t<$$t.length&&((t=($$t[$t])),1);$t++) {
this.map.putIfAbsent$O$O(t, Integer.valueOf$I(0));
}
return this.map;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:43 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
