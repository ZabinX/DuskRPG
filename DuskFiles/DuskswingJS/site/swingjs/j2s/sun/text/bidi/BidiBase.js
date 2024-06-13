(function(){var P$=Clazz.newPackage("sun.text.bidi"),p$1={},I$=[[0,['sun.text.bidi.BidiBase','.Point'],'AssertionError',['java.text.AttributedCharacterIterator','.Attribute'],['sun.text.bidi.BidiBase','.ImpTabPair'],'sun.text.bidi.BidiRun',['sun.text.bidi.BidiBase','.InsertPoints'],'sun.text.normalizer.UBiDiProps','java.lang.reflect.Array','OutOfMemoryError','sun.text.normalizer.UTF16',['sun.text.bidi.BidiBase','.LevState'],['sun.text.bidi.BidiBase','.TextAttributeConstants'],['sun.text.bidi.BidiBase','.NumericShapings'],'sun.text.bidi.BidiLine','java.util.Arrays','sun.text.normalizer.UCharacter','StringBuilder']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BidiBase", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Point',0],['InsertPoints',0],['ImpTabPair',10],['LevState',2],['TextAttributeConstants',10],['NumericShapings',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.dirPropsMemory=Clazz.array(Byte.TYPE, [1]);
this.levelsMemory=Clazz.array(Byte.TYPE, [1]);
this.parasMemory=Clazz.array(Integer.TYPE, [1]);
this.simpleParas=Clazz.array(Integer.TYPE, -1, [0]);
this.runsMemory=Clazz.array($I$(5), [0]);
this.simpleRuns=Clazz.array($I$(5), -1, [Clazz.new_($I$(5,1))]);
this.insertPoints=Clazz.new_($I$(6,1),[this, null]);
},1);

C$.$fields$=[['Z',['mayAllocateText','mayAllocateRuns','orderParagraphsLTR','isGoodLogicalToVisualRunsMap'],'B',['paraLevel','defaultParaLevel','direction'],'I',['originalLength','length','resultLength','flags','lastArabicPos','trailingWSStart','paraCount','runCount','controlCount'],'O',['paraBidi','sun.text.bidi.BidiBase','bdp','sun.text.normalizer.UBiDiProps','text','char[]','dirPropsMemory','byte[]','+levelsMemory','+dirProps','+levels','impTabPair','sun.text.bidi.BidiBase.ImpTabPair','parasMemory','int[]','+paras','+simpleParas','runsMemory','sun.text.bidi.BidiRun[]','+runs','+simpleRuns','logicalToVisualRunsMap','int[]','insertPoints','sun.text.bidi.BidiBase.InsertPoints']]
,['I',['DirPropFlagMultiRuns','MASK_LTR','MASK_RTL','MASK_LRX','MASK_RLX','MASK_EXPLICIT','MASK_BN_EXPLICIT','MASK_B_S','MASK_WS','MASK_N','MASK_POSSIBLE_N','MASK_EMBEDDING'],'O',['DirPropFlagLR','int[]','+DirPropFlagE','+DirPropFlagO','groupProp','short[]','impTabProps','short[][]','impTabL_DEFAULT','byte[][]','+impTabR_DEFAULT','impAct0','short[]','impTab_DEFAULT','sun.text.bidi.BidiBase.ImpTabPair','impTabL_NUMBERS_SPECIAL','byte[][]','impTab_NUMBERS_SPECIAL','sun.text.bidi.BidiBase.ImpTabPair','impTabL_GROUP_NUMBERS_WITH_R','byte[][]','+impTabR_GROUP_NUMBERS_WITH_R','impTab_GROUP_NUMBERS_WITH_R','sun.text.bidi.BidiBase.ImpTabPair','impTabL_INVERSE_NUMBERS_AS_L','byte[][]','+impTabR_INVERSE_NUMBERS_AS_L','impTab_INVERSE_NUMBERS_AS_L','sun.text.bidi.BidiBase.ImpTabPair','impTabR_INVERSE_LIKE_DIRECT','byte[][]','impAct1','short[]','impTab_INVERSE_LIKE_DIRECT','sun.text.bidi.BidiBase.ImpTabPair','impTabL_INVERSE_LIKE_DIRECT_WITH_MARKS','byte[][]','+impTabR_INVERSE_LIKE_DIRECT_WITH_MARKS','impAct2','short[]','impTab_INVERSE_LIKE_DIRECT_WITH_MARKS','sun.text.bidi.BidiBase.ImpTabPair','+impTab_INVERSE_FOR_NUMBERS_SPECIAL','impTabL_INVERSE_FOR_NUMBERS_SPECIAL_WITH_MARKS','byte[][]','impTab_INVERSE_FOR_NUMBERS_SPECIAL_WITH_MARKS','sun.text.bidi.BidiBase.ImpTabPair']]]

Clazz.newMeth(C$, 'DirPropFlag$B',  function (dir) {
return (1 << dir);
}, 1);

Clazz.newMeth(C$, 'NoContextRTL$B',  function (dir) {
return ($b$[0] = (dir & ~64), $b$[0]);
}, 1);

Clazz.newMeth(C$, 'DirPropFlagNC$B',  function (dir) {
return (1 << (dir & ~64));
}, 1);

Clazz.newMeth(C$, 'DirPropFlagLR$B',  function (level) {
return C$.DirPropFlagLR[level & 1];
}, 1);

Clazz.newMeth(C$, 'DirPropFlagE$B',  function (level) {
return C$.DirPropFlagE[level & 1];
}, 1);

Clazz.newMeth(C$, 'DirPropFlagO$B',  function (level) {
return C$.DirPropFlagO[level & 1];
}, 1);

Clazz.newMeth(C$, 'GetLRFromLevel$B',  function (level) {
return ($b$[0] = (level & 1), $b$[0]);
}, 1);

Clazz.newMeth(C$, 'IsDefaultLevel$B',  function (level) {
return ((level & 126) == 126);
}, 1);

Clazz.newMeth(C$, 'GetParaLevelAt$I',  function (index) {
return (this.defaultParaLevel != 0) ? ($b$[0] = (this.dirProps[index] >> 6), $b$[0]) : this.paraLevel;
});

Clazz.newMeth(C$, 'IsBidiControlChar$I',  function (c) {
return (((c & -4) == 8204) || ((c >= 8234) && (c <= 8238) ) );
}, 1);

Clazz.newMeth(C$, 'verifyValidPara$',  function () {
if (this !== this.paraBidi ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,[""]);
}});

Clazz.newMeth(C$, 'verifyValidParaOrLine$',  function () {
var para=this.paraBidi;
if (this === para ) {
return;
}if ((para == null ) || (para !== para.paraBidi ) ) {
throw Clazz.new_(Clazz.load('IllegalStateException'));
}});

Clazz.newMeth(C$, 'verifyRange$I$I$I',  function (index, start, limit) {
if (index < start || index >= limit ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Value " + index + " is out of range " + start + " to " + limit ]);
}});

Clazz.newMeth(C$, 'verifyIndex$I$I$I',  function (index, start, limit) {
if (index < start || index >= limit ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Index " + index + " is out of range " + start + " to " + limit ]);
}});

Clazz.newMeth(C$, 'c$$I$I',  function (maxLength, maxRunCount) {
;C$.$init$.apply(this);
if (maxLength < 0 || maxRunCount < 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}try {
this.bdp=$I$(7).getSingleton$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('java.util.MissingResourceException').c$$S$S$S,[e.getMessage$(), "(BidiProps)", ""]);
} else {
throw e;
}
}
if (maxLength > 0) {
p$1.getInitialDirPropsMemory$I.apply(this, [maxLength]);
p$1.getInitialLevelsMemory$I.apply(this, [maxLength]);
} else {
this.mayAllocateText=true;
}if (maxRunCount > 0) {
if (maxRunCount > 1) {
p$1.getInitialRunsMemory$I.apply(this, [maxRunCount]);
}} else {
this.mayAllocateRuns=true;
}}, 1);

Clazz.newMeth(C$, 'getMemory$S$O$Class$Z$I',  function (label, array, arrayClass, mayAllocate, sizeNeeded) {
var len=$I$(8).getLength$O(array);
if (sizeNeeded == len) {
return array;
}if (!mayAllocate) {
if (sizeNeeded <= len) {
return array;
}throw Clazz.new_($I$(9,1).c$$S,["Failed to allocate memory for " + label]);
}try {
return Clazz.array(arrayClass, sizeNeeded);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_($I$(9,1).c$$S,["Failed to allocate memory for " + label]);
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'getDirPropsMemory$Z$I',  function (mayAllocate, len) {
var array=p$1.getMemory$S$O$Class$Z$I.apply(this, ["DirProps", this.dirPropsMemory, Byte.TYPE, mayAllocate, len]);
this.dirPropsMemory=array;
}, p$1);

Clazz.newMeth(C$, 'getDirPropsMemory$I',  function (len) {
p$1.getDirPropsMemory$Z$I.apply(this, [this.mayAllocateText, len]);
});

Clazz.newMeth(C$, 'getLevelsMemory$Z$I',  function (mayAllocate, len) {
var array=p$1.getMemory$S$O$Class$Z$I.apply(this, ["Levels", this.levelsMemory, Byte.TYPE, mayAllocate, len]);
this.levelsMemory=array;
}, p$1);

Clazz.newMeth(C$, 'getLevelsMemory$I',  function (len) {
p$1.getLevelsMemory$Z$I.apply(this, [this.mayAllocateText, len]);
});

Clazz.newMeth(C$, 'getRunsMemory$Z$I',  function (mayAllocate, len) {
var array=p$1.getMemory$S$O$Class$Z$I.apply(this, ["Runs", this.runsMemory, Clazz.getClass($I$(5)), mayAllocate, len]);
this.runsMemory=array;
}, p$1);

Clazz.newMeth(C$, 'getRunsMemory$I',  function (len) {
p$1.getRunsMemory$Z$I.apply(this, [this.mayAllocateRuns, len]);
});

Clazz.newMeth(C$, 'getInitialDirPropsMemory$I',  function (len) {
p$1.getDirPropsMemory$Z$I.apply(this, [true, len]);
}, p$1);

Clazz.newMeth(C$, 'getInitialLevelsMemory$I',  function (len) {
p$1.getLevelsMemory$Z$I.apply(this, [true, len]);
}, p$1);

Clazz.newMeth(C$, 'getInitialParasMemory$I',  function (len) {
var array=p$1.getMemory$S$O$Class$Z$I.apply(this, ["Paras", this.parasMemory, Integer.TYPE, true, len]);
this.parasMemory=array;
}, p$1);

Clazz.newMeth(C$, 'getInitialRunsMemory$I',  function (len) {
p$1.getRunsMemory$Z$I.apply(this, [true, len]);
}, p$1);

Clazz.newMeth(C$, 'getDirProps',  function () {
var i=0;
var i0;
var i1;
this.flags=0;
var uchar;
var dirProp;
var paraDirDefault=($b$[0] = 0, $b$[0]);
var isDefaultLevel=C$.IsDefaultLevel$B(this.paraLevel);
this.lastArabicPos=-1;
this.controlCount=0;
var NOT_CONTEXTUAL=0;
var LOOKING_FOR_STRONG=1;
var FOUND_STRONG_CHAR=2;
var state;
var paraStart=0;
var paraDir;
var lastStrongDir=($b$[0] = 0, $b$[0]);
var lastStrongLTR=0;
if (isDefaultLevel) {
paraDirDefault=((this.paraLevel & 1) != 0) ? 64 : ($b$[0] = 0, $b$[0]);
paraDir=paraDirDefault;
lastStrongDir=paraDirDefault;
state=1;
} else {
state=0;
paraDir=($b$[0] = 0, $b$[0]);
}for (i=0; i < this.originalLength; ) {
i0=i;
uchar=$I$(10).charAt$CA$I$I$I(this.text, 0, this.originalLength, i);
i+=Character.charCount$I(uchar);
i1=i - 1;
dirProp=($b$[0] = this.bdp.getClass$I(uchar), $b$[0]);
this.flags|=C$.DirPropFlag$B(dirProp);
this.dirProps[i1]=((dirProp | paraDir)|0);
if (i1 > i0) {
this.flags|=C$.DirPropFlag$B(18);
do {
this.dirProps[--i1]=((18 | paraDir)|0);
} while (i1 > i0);
}if (state == 1) {
if (dirProp == 0) {
state=2;
if (paraDir != 0) {
paraDir=($b$[0] = 0, $b$[0]);
for (i1=paraStart; i1 < i; i1++) {
this.dirProps[i1]=(this.dirProps[i1]&(~64)|0);
}
}continue;
}if (dirProp == 1 || dirProp == 13 ) {
state=2;
if (paraDir == 0) {
paraDir=64;
for (i1=paraStart; i1 < i; i1++) {
this.dirProps[i1]|=64;
}
}continue;
}}if (dirProp == 0) {
lastStrongDir=($b$[0] = 0, $b$[0]);
lastStrongLTR=i;
} else if (dirProp == 1) {
lastStrongDir=64;
} else if (dirProp == 13) {
lastStrongDir=64;
this.lastArabicPos=i - 1;
} else if (dirProp == 7) {
if (i < this.originalLength) {
if (!((uchar == 13) && ((this.text[i]).$c() == 10 ) )) {
++this.paraCount;
}if (isDefaultLevel) {
state=1;
paraStart=i;
paraDir=paraDirDefault;
lastStrongDir=paraDirDefault;
}}}}
if (isDefaultLevel) {
this.paraLevel=this.GetParaLevelAt$I(0);
}this.flags|=C$.DirPropFlagLR$B(this.paraLevel);
if (this.orderParagraphsLTR && (this.flags & C$.DirPropFlag$B(7)) != 0 ) {
this.flags|=C$.DirPropFlag$B(0);
}}, p$1);

Clazz.newMeth(C$, 'directionFromFlags',  function () {
if (!((this.flags & C$.MASK_RTL) != 0 || ((this.flags & C$.DirPropFlag$B(5)) != 0 && (this.flags & C$.MASK_POSSIBLE_N) != 0 ) )) {
return $b$[0] = 0, $b$[0];
} else if ((this.flags & C$.MASK_LTR) == 0) {
return $b$[0] = 1, $b$[0];
} else {
return 2;
}}, p$1);

Clazz.newMeth(C$, 'resolveExplicitLevels',  function () {
var i=0;
var dirProp;
var level=this.GetParaLevelAt$I(0);
var dirct;
var paraIndex=0;
dirct=p$1.directionFromFlags.apply(this, []);
if ((dirct != 2) && (this.paraCount == 1) ) {
} else if ((this.paraCount == 1) && ((this.flags & C$.MASK_EXPLICIT) == 0) ) {
for (i=0; i < this.length; ++i) {
this.levels[i]=level;
}
} else {
var embeddingLevel=level;
var newLevel;
var stackTop=($b$[0] = 0, $b$[0]);
var stack=Clazz.array(Byte.TYPE, [61]);
var countOver60=0;
var countOver61=0;
this.flags=0;
for (i=0; i < this.length; ++i) {
dirProp=C$.NoContextRTL$B(this.dirProps[i]);
switch (dirProp) {
case 11:
case 12:
newLevel=($b$[0] = ((embeddingLevel + 2) & ~(-127)), $b$[0]);
if (newLevel <= 61) {
stack[stackTop]=embeddingLevel;
(($b$[0]=++stackTop,stackTop=$b$[0],$b$[0]));
embeddingLevel=newLevel;
if (dirProp == 12) {
embeddingLevel|=-128;
}} else if ((embeddingLevel & ~-128) == 61) {
++countOver61;
} else {
++countOver60;
}this.flags|=C$.DirPropFlag$B(18);
break;
case 14:
case 15:
newLevel=($b$[0] = (((embeddingLevel & ~-128) + 1) | 1), $b$[0]);
if (newLevel <= 61) {
stack[stackTop]=embeddingLevel;
(($b$[0]=++stackTop,stackTop=$b$[0],$b$[0]));
embeddingLevel=newLevel;
if (dirProp == 15) {
embeddingLevel|=-128;
}} else {
++countOver61;
}this.flags|=C$.DirPropFlag$B(18);
break;
case 16:
if (countOver61 > 0) {
--countOver61;
} else if (countOver60 > 0 && (embeddingLevel & ~-128) != 61 ) {
--countOver60;
} else if (stackTop > 0) {
(($b$[0]=--stackTop,stackTop=$b$[0],$b$[0]));
embeddingLevel=stack[stackTop];
}this.flags|=C$.DirPropFlag$B(18);
break;
case 7:
stackTop=($b$[0] = 0, $b$[0]);
countOver60=0;
countOver61=0;
level=this.GetParaLevelAt$I(i);
if ((i + 1) < this.length) {
embeddingLevel=this.GetParaLevelAt$I(i + 1);
if (!((this.text[i] == "\r") && (this.text[i + 1] == "\n") )) {
this.paras[paraIndex++]=i + 1;
}}this.flags|=C$.DirPropFlag$B(7);
break;
case 18:
this.flags|=C$.DirPropFlag$B(18);
break;
default:
if (level != embeddingLevel) {
level=embeddingLevel;
if ((level & -128) != 0) {
this.flags|=C$.DirPropFlagO$B(level) | C$.DirPropFlagMultiRuns;
} else {
this.flags|=C$.DirPropFlagE$B(level) | C$.DirPropFlagMultiRuns;
}}if ((level & -128) == 0) {
this.flags|=C$.DirPropFlag$B(dirProp);
}break;
}
this.levels[i]=level;
}
if ((this.flags & C$.MASK_EMBEDDING) != 0) {
this.flags|=C$.DirPropFlagLR$B(this.paraLevel);
}if (this.orderParagraphsLTR && (this.flags & C$.DirPropFlag$B(7)) != 0 ) {
this.flags|=C$.DirPropFlag$B(0);
}dirct=p$1.directionFromFlags.apply(this, []);
}return dirct;
}, p$1);

Clazz.newMeth(C$, 'checkExplicitLevels',  function () {
var dirProp;
var i;
this.flags=0;
var level;
var paraIndex=0;
for (i=0; i < this.length; ++i) {
if (this.levels[i] == 0) {
this.levels[i]=this.paraLevel;
}if (61 < (this.levels[i] & 127)) {
if ((this.levels[i] & -128) != 0) {
this.levels[i]=((this.paraLevel | -128)|0);
} else {
this.levels[i]=this.paraLevel;
}}level=this.levels[i];
dirProp=C$.NoContextRTL$B(this.dirProps[i]);
if ((level & -128) != 0) {
level=($b$[0] = level&(~-128), $b$[0]);
this.flags|=C$.DirPropFlagO$B(level);
} else {
this.flags|=C$.DirPropFlagE$B(level) | C$.DirPropFlag$B(dirProp);
}if ((level < this.GetParaLevelAt$I(i) && !((0 == level) && (dirProp == 7) ) ) || (61 < level) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["level " + level + " out of bounds at index " + i ]);
}if ((dirProp == 7) && ((i + 1) < this.length) ) {
if (!((this.text[i] == "\r") && (this.text[i + 1] == "\n") )) {
this.paras[paraIndex++]=i + 1;
}}}
if ((this.flags & C$.MASK_EMBEDDING) != 0) {
this.flags|=C$.DirPropFlagLR$B(this.paraLevel);
}return p$1.directionFromFlags.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'GetStateProps$H',  function (cell) {
return ($s$[0] = (cell & 31), $s$[0]);
}, 1);

Clazz.newMeth(C$, 'GetActionProps$H',  function (cell) {
return ($s$[0] = (cell >> 5), $s$[0]);
}, 1);

Clazz.newMeth(C$, 'GetState$B',  function (cell) {
return ($s$[0] = (cell & 15), $s$[0]);
}, 1);

Clazz.newMeth(C$, 'GetAction$B',  function (cell) {
return ($s$[0] = (cell >> 4), $s$[0]);
}, 1);

Clazz.newMeth(C$, 'addPoint$I$I',  function (pos, flag) {
var point=Clazz.new_($I$(1,1),[this, null]);
var len=this.insertPoints.points.length;
if (len == 0) {
this.insertPoints.points=Clazz.array($I$(1), [10]);
len=10;
}if (this.insertPoints.size >= len) {
var savePoints=this.insertPoints.points;
this.insertPoints.points=Clazz.array($I$(1), [len * 2]);
System.arraycopy$O$I$O$I$I(savePoints, 0, this.insertPoints.points, 0, len);
}point.pos=pos;
point.flag=flag;
this.insertPoints.points[this.insertPoints.size]=point;
++this.insertPoints.size;
}, p$1);

Clazz.newMeth(C$, 'processPropertySeq$sun_text_bidi_BidiBase_LevState$H$I$I',  function (levState, _prop, start, limit) {
var cell;
var impTab=levState.impTab;
var impAct=levState.impAct;
var oldStateSeq;
var actionSeq;
var level;
var addLevel;
var start0;
var k;
start0=start;
oldStateSeq=levState.state;
cell=impTab[oldStateSeq][_prop];
levState.state=C$.GetState$B(cell);
actionSeq=impAct[C$.GetAction$B(cell)];
addLevel=impTab[levState.state][7];
if (actionSeq != 0) {
switch (actionSeq) {
case 1:
levState.startON=start0;
break;
case 2:
start=levState.startON;
break;
case 3:
if (levState.startL2EN >= 0) {
p$1.addPoint$I$I.apply(this, [levState.startL2EN, 1]);
}levState.startL2EN=-1;
if ((this.insertPoints.points.length == 0) || (this.insertPoints.size <= this.insertPoints.confirmed) ) {
levState.lastStrongRTL=-1;
level=impTab[oldStateSeq][7];
if ((level & 1) != 0 && levState.startON > 0 ) {
start=levState.startON;
}if (_prop == 5) {
p$1.addPoint$I$I.apply(this, [start0, 1]);
this.insertPoints.confirmed=this.insertPoints.size;
}break;
}for (k=levState.lastStrongRTL + 1; k < start0; k++) {
this.levels[k]=(((this.levels[k] - 2) & ~1)|0);
}
this.insertPoints.confirmed=this.insertPoints.size;
levState.lastStrongRTL=-1;
if (_prop == 5) {
p$1.addPoint$I$I.apply(this, [start0, 1]);
this.insertPoints.confirmed=this.insertPoints.size;
}break;
case 4:
if (this.insertPoints.points.length > 0) this.insertPoints.size=this.insertPoints.confirmed;
levState.startON=-1;
levState.startL2EN=-1;
levState.lastStrongRTL=limit - 1;
break;
case 5:
if ((_prop == 3) && (C$.NoContextRTL$B(this.dirProps[start0]) == 5) ) {
if (levState.startL2EN == -1) {
levState.lastStrongRTL=limit - 1;
break;
}if (levState.startL2EN >= 0) {
p$1.addPoint$I$I.apply(this, [levState.startL2EN, 1]);
levState.startL2EN=-2;
}p$1.addPoint$I$I.apply(this, [start0, 1]);
break;
}if (levState.startL2EN == -1) {
levState.startL2EN=start0;
}break;
case 6:
levState.lastStrongRTL=limit - 1;
levState.startON=-1;
break;
case 7:
for (k=start0 - 1; k >= 0 && ((this.levels[k] & 1) == 0) ; k--) {
}
if (k >= 0) {
p$1.addPoint$I$I.apply(this, [k, 4]);
this.insertPoints.confirmed=this.insertPoints.size;
}levState.startON=start0;
break;
case 8:
p$1.addPoint$I$I.apply(this, [start0, 1]);
p$1.addPoint$I$I.apply(this, [start0, 2]);
break;
case 9:
this.insertPoints.size=this.insertPoints.confirmed;
if (_prop == 5) {
p$1.addPoint$I$I.apply(this, [start0, 4]);
this.insertPoints.confirmed=this.insertPoints.size;
}break;
case 10:
level=($b$[0] = (levState.runLevel + addLevel), $b$[0]);
for (k=levState.startON; k < start0; k++) {
if (this.levels[k] < level) {
this.levels[k]=level;
}}
this.insertPoints.confirmed=this.insertPoints.size;
levState.startON=start0;
break;
case 11:
level=levState.runLevel;
for (k=start0 - 1; k >= levState.startON; k--) {
if (this.levels[k] == level + 3) {
while (this.levels[k] == level + 3){
this.levels[$k$=k--]=(this.levels[$k$]-(2)|0);
}
while (this.levels[k] == level){
--k;
}
}if (this.levels[k] == level + 2) {
this.levels[k]=level;
continue;
}this.levels[k]=((level + 1)|0);
}
break;
case 12:
level=($b$[0] = (levState.runLevel + 1), $b$[0]);
for (k=start0 - 1; k >= levState.startON; k--) {
if (this.levels[k] > level) {
this.levels[k]=(this.levels[k]-(2)|0);
}}
break;
default:
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Internal ICU error in processPropertySeq"]);
}
}if ((addLevel) != 0 || (start < start0) ) {
level=($b$[0] = (levState.runLevel + addLevel), $b$[0]);
for (k=start; k < limit; k++) {
this.levels[k]=level;
}
}}, p$1);

Clazz.newMeth(C$, 'resolveImplicitLevels$I$I$H$H',  function (start, limit, sor, eor) {
var levState=Clazz.new_($I$(11,1),[this, null]);
var i;
var start1;
var start2;
var oldStateImp;
var stateImp;
var actionImp;
var gprop;
var resProp;
var cell;
var nextStrongProp=1;
var nextStrongPos=-1;
levState.startL2EN=-1;
levState.lastStrongRTL=-1;
levState.state=($s$[0] = 0, $s$[0]);
levState.runLevel=this.levels[start];
levState.impTab=this.impTabPair.imptab[levState.runLevel & 1];
levState.impAct=this.impTabPair.impact[levState.runLevel & 1];
p$1.processPropertySeq$sun_text_bidi_BidiBase_LevState$H$I$I.apply(this, [levState, sor, start, start]);
if (this.dirProps[start] == 17) {
stateImp=($s$[0] = (1 + sor), $s$[0]);
} else {
stateImp=($s$[0] = 0, $s$[0]);
}start1=start;
start2=0;
for (i=start; i <= limit; i++) {
if (i >= limit) {
gprop=eor;
} else {
var prop;
var prop1;
prop=C$.NoContextRTL$B(this.dirProps[i]);
gprop=C$.groupProp[prop];
}oldStateImp=stateImp;
cell=C$.impTabProps[oldStateImp][gprop];
stateImp=C$.GetStateProps$H(cell);
actionImp=C$.GetActionProps$H(cell);
if ((i == limit) && (actionImp == 0) ) {
actionImp=($s$[0] = 1, $s$[0]);
}if (actionImp != 0) {
resProp=C$.impTabProps[oldStateImp][13];
switch (actionImp) {
case 1:
p$1.processPropertySeq$sun_text_bidi_BidiBase_LevState$H$I$I.apply(this, [levState, resProp, start1, i]);
start1=i;
break;
case 2:
start2=i;
break;
case 3:
p$1.processPropertySeq$sun_text_bidi_BidiBase_LevState$H$I$I.apply(this, [levState, resProp, start1, start2]);
p$1.processPropertySeq$sun_text_bidi_BidiBase_LevState$H$I$I.apply(this, [levState, 4, start2, i]);
start1=i;
break;
case 4:
p$1.processPropertySeq$sun_text_bidi_BidiBase_LevState$H$I$I.apply(this, [levState, resProp, start1, start2]);
start1=start2;
start2=i;
break;
default:
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Internal ICU error in resolveImplicitLevels"]);
}
}}
p$1.processPropertySeq$sun_text_bidi_BidiBase_LevState$H$I$I.apply(this, [levState, eor, limit, limit]);
}, p$1);

Clazz.newMeth(C$, 'adjustWSLevels',  function () {
var i;
if ((this.flags & C$.MASK_WS) != 0) {
var flag;
i=this.trailingWSStart;
while (i > 0){
while (i > 0 && ((flag=C$.DirPropFlagNC$B(this.dirProps[--i])) & C$.MASK_WS) != 0 ){
if (this.orderParagraphsLTR && (flag & C$.DirPropFlag$B(7)) != 0 ) {
this.levels[i]=(0|0);
} else {
this.levels[i]=this.GetParaLevelAt$I(i);
}}
while (i > 0){
flag=C$.DirPropFlagNC$B(this.dirProps[--i]);
if ((flag & C$.MASK_BN_EXPLICIT) != 0) {
this.levels[i]=this.levels[i + 1];
} else if (this.orderParagraphsLTR && (flag & C$.DirPropFlag$B(7)) != 0 ) {
this.levels[i]=(0|0);
break;
} else if ((flag & C$.MASK_B_S) != 0) {
this.levels[i]=this.GetParaLevelAt$I(i);
break;
}}
}
}}, p$1);

Clazz.newMeth(C$, 'Bidi_Min$I$I',  function (x, y) {
return x < y ? x : y;
}, p$1);

Clazz.newMeth(C$, 'Bidi_Abs$I',  function (x) {
return x >= 0 ? x : -x;
}, p$1);

Clazz.newMeth(C$, 'setPara$S$B$BA',  function (text, paraLevel, embeddingLevels) {
if (text == null ) {
this.setPara$CA$B$BA(Clazz.array(Character.TYPE, [0]), paraLevel, embeddingLevels);
} else {
this.setPara$CA$B$BA(text.toCharArray$(), paraLevel, embeddingLevels);
}});

Clazz.newMeth(C$, 'setPara$CA$B$BA',  function (chars, paraLevel, embeddingLevels) {
if (paraLevel < 126) {
this.verifyRange$I$I$I(paraLevel, 0, 62);
}if (chars == null ) {
chars=Clazz.array(Character.TYPE, [0]);
}this.paraBidi=null;
this.text=chars;
this.length=this.originalLength=this.resultLength=this.text.length;
this.paraLevel=paraLevel;
this.direction=($b$[0] = 0, $b$[0]);
this.paraCount=1;
this.dirProps=Clazz.array(Byte.TYPE, [0]);
this.levels=Clazz.array(Byte.TYPE, [0]);
this.runs=Clazz.array($I$(5), [0]);
this.isGoodLogicalToVisualRunsMap=false;
this.insertPoints.size=0;
this.insertPoints.confirmed=0;
if (C$.IsDefaultLevel$B(paraLevel)) {
this.defaultParaLevel=paraLevel;
} else {
this.defaultParaLevel=($b$[0] = 0, $b$[0]);
}if (this.length == 0) {
if (C$.IsDefaultLevel$B(paraLevel)) {
this.paraLevel=($b$[0] = this.paraLevel&(1), $b$[0]);
this.defaultParaLevel=($b$[0] = 0, $b$[0]);
}if ((this.paraLevel & 1) != 0) {
this.flags=C$.DirPropFlag$B(1);
this.direction=($b$[0] = 1, $b$[0]);
} else {
this.flags=C$.DirPropFlag$B(0);
this.direction=($b$[0] = 0, $b$[0]);
}this.runCount=0;
this.paraCount=0;
this.paraBidi=this;
return;
}this.runCount=-1;
this.getDirPropsMemory$I(this.length);
this.dirProps=this.dirPropsMemory;
p$1.getDirProps.apply(this, []);
this.trailingWSStart=this.length;
if (this.paraCount > 1) {
p$1.getInitialParasMemory$I.apply(this, [this.paraCount]);
this.paras=this.parasMemory;
this.paras[this.paraCount - 1]=this.length;
} else {
this.paras=this.simpleParas;
this.simpleParas[0]=this.length;
}if (embeddingLevels == null ) {
this.getLevelsMemory$I(this.length);
this.levels=this.levelsMemory;
this.direction=p$1.resolveExplicitLevels.apply(this, []);
} else {
this.levels=embeddingLevels;
this.direction=p$1.checkExplicitLevels.apply(this, []);
}switch (this.direction) {
case 0:
paraLevel=($b$[0] = ((paraLevel + 1) & ~1), $b$[0]);
this.trailingWSStart=0;
break;
case 1:
paraLevel=($b$[0] = paraLevel|(1), $b$[0]);
this.trailingWSStart=0;
break;
default:
this.impTabPair=C$.impTab_DEFAULT;
if (embeddingLevels == null  && this.paraCount <= 1  && (this.flags & C$.DirPropFlagMultiRuns) == 0 ) {
p$1.resolveImplicitLevels$I$I$H$H.apply(this, [0, this.length, C$.GetLRFromLevel$B(this.GetParaLevelAt$I(0)), C$.GetLRFromLevel$B(this.GetParaLevelAt$I(this.length - 1))]);
} else {
var start;
var limit=0;
var level;
var nextLevel;
var sor;
var eor;
level=this.GetParaLevelAt$I(0);
nextLevel=this.levels[0];
if (level < nextLevel) {
eor=C$.GetLRFromLevel$B(nextLevel);
} else {
eor=C$.GetLRFromLevel$B(level);
}do {
start=limit;
level=nextLevel;
if ((start > 0) && (C$.NoContextRTL$B(this.dirProps[start - 1]) == 7) ) {
sor=C$.GetLRFromLevel$B(this.GetParaLevelAt$I(start));
} else {
sor=eor;
}while (++limit < this.length && this.levels[limit] == level ){
}
if (limit < this.length) {
nextLevel=this.levels[limit];
} else {
nextLevel=this.GetParaLevelAt$I(this.length - 1);
}if ((level & ~-128) < (nextLevel & ~-128)) {
eor=C$.GetLRFromLevel$B(nextLevel);
} else {
eor=C$.GetLRFromLevel$B(level);
}if ((level & -128) == 0) {
p$1.resolveImplicitLevels$I$I$H$H.apply(this, [start, limit, sor, eor]);
} else {
do {
this.levels[$k$=start++]=(this.levels[$k$]&(~-128)|0);
} while (start < limit);
}} while (limit < this.length);
}p$1.adjustWSLevels.apply(this, []);
break;
}
this.resultLength+=this.insertPoints.size;
this.paraBidi=this;
});

Clazz.newMeth(C$, 'setPara$java_text_AttributedCharacterIterator',  function (paragraph) {
var paraLvl;
var ch=paragraph.first$();
var runDirection=paragraph.getAttribute$java_text_AttributedCharacterIterator_Attribute($I$(12).RUN_DIRECTION);
var shaper=paragraph.getAttribute$java_text_AttributedCharacterIterator_Attribute($I$(12).NUMERIC_SHAPING);
if (runDirection == null ) {
paraLvl=126;
} else {
paraLvl=(runDirection.equals$O($I$(12).RUN_DIRECTION_LTR)) ? 0 : 1;
}var lvls=null;
var len=paragraph.getEndIndex$() - paragraph.getBeginIndex$();
var embeddingLevels=Clazz.array(Byte.TYPE, [len]);
var txt=Clazz.array(Character.TYPE, [len]);
var i=0;
while (ch != "\uffff"){
txt[i]=ch;
var embedding=paragraph.getAttribute$java_text_AttributedCharacterIterator_Attribute($I$(12).BIDI_EMBEDDING);
if (embedding != null ) {
var level=embedding.byteValue$();
if (level == 0) {
} else if (level < 0) {
lvls=embeddingLevels;
embeddingLevels[i]=(((0 - level) | -128)|0);
} else {
lvls=embeddingLevels;
embeddingLevels[i]=level;
}}ch=paragraph.next$();
++i;
}
if (shaper != null ) {
$I$(13).shape$O$CA$I$I(shaper, txt, 0, len);
}this.setPara$CA$B$BA(txt, paraLvl, lvls);
});

Clazz.newMeth(C$, 'orderParagraphsLTR$Z',  function (ordarParaLTR) {
this.orderParagraphsLTR=ordarParaLTR;
}, p$1);

Clazz.newMeth(C$, 'getDirection',  function () {
this.verifyValidParaOrLine$();
return this.direction;
}, p$1);

Clazz.newMeth(C$, 'getLength$',  function () {
this.verifyValidParaOrLine$();
return this.originalLength;
});

Clazz.newMeth(C$, 'getParaLevel$',  function () {
this.verifyValidParaOrLine$();
return this.paraLevel;
});

Clazz.newMeth(C$, 'getParagraphIndex$I',  function (charIndex) {
this.verifyValidParaOrLine$();
var bidi=this.paraBidi;
this.verifyRange$I$I$I(charIndex, 0, bidi.length);
var paraIndex;
for (paraIndex=0; charIndex >= bidi.paras[paraIndex]; paraIndex++) {
}
return paraIndex;
});

Clazz.newMeth(C$, 'setLine$java_text_Bidi$sun_text_bidi_BidiBase$java_text_Bidi$sun_text_bidi_BidiBase$I$I',  function (bidi, bidiBase, newBidi, newBidiBase, start, limit) {
this.verifyValidPara$();
this.verifyRange$I$I$I(start, 0, limit);
this.verifyRange$I$I$I(limit, 0, this.length + 1);
return $I$(14).setLine$java_text_Bidi$sun_text_bidi_BidiBase$java_text_Bidi$sun_text_bidi_BidiBase$I$I(bidi, this, newBidi, newBidiBase, start, limit);
});

Clazz.newMeth(C$, 'getLevelAt$I',  function (charIndex) {
if (charIndex < 0 || charIndex >= this.length ) {
return ($b$[0] = this.getBaseLevel$(), $b$[0]);
}this.verifyValidParaOrLine$();
this.verifyRange$I$I$I(charIndex, 0, this.length);
return $I$(14).getLevelAt$sun_text_bidi_BidiBase$I(this, charIndex);
});

Clazz.newMeth(C$, 'getLevels',  function () {
this.verifyValidParaOrLine$();
if (this.length <= 0) {
return Clazz.array(Byte.TYPE, [0]);
}return $I$(14).getLevels$sun_text_bidi_BidiBase(this);
}, p$1);

Clazz.newMeth(C$, 'countRuns$',  function () {
this.verifyValidParaOrLine$();
$I$(14).getRuns$sun_text_bidi_BidiBase(this);
return this.runCount;
});

Clazz.newMeth(C$, 'getVisualMap',  function () {
this.countRuns$();
if (this.resultLength <= 0) {
return Clazz.array(Integer.TYPE, [0]);
}return $I$(14).getVisualMap$sun_text_bidi_BidiBase(this);
}, p$1);

Clazz.newMeth(C$, 'reorderVisual$BA',  function (levels) {
return $I$(14).reorderVisual$BA(levels);
}, 1);

Clazz.newMeth(C$, 'c$$CA$I$BA$I$I$I',  function (text, textStart, embeddings, embStart, paragraphLength, flags) {
C$.c$$I$I.apply(this, [0, 0]);
var paraLvl;
switch (flags) {
case 0:
default:
paraLvl=($b$[0] = 0, $b$[0]);
break;
case 1:
paraLvl=($b$[0] = 1, $b$[0]);
break;
case -2:
paraLvl=126;
break;
case -1:
paraLvl=127;
break;
}
var paraEmbeddings;
if (embeddings == null ) {
paraEmbeddings=null;
} else {
paraEmbeddings=Clazz.array(Byte.TYPE, [paragraphLength]);
var lev;
for (var i=0; i < paragraphLength; i++) {
lev=embeddings[i + embStart];
if (lev < 0) {
lev=($b$[0] = (((($b$[0]=-lev,lev=$b$[0],$b$[0]))) | -128), $b$[0]);
} else if (lev == 0) {
lev=paraLvl;
if (paraLvl > 61) {
lev=($b$[0] = lev&(1), $b$[0]);
}}paraEmbeddings[i]=lev;
}
}if (textStart == 0 && embStart == 0  && paragraphLength == text.length ) {
this.setPara$CA$B$BA(text, paraLvl, paraEmbeddings);
} else {
var paraText=Clazz.array(Character.TYPE, [paragraphLength]);
System.arraycopy$O$I$O$I$I(text, textStart, paraText, 0, paragraphLength);
this.setPara$CA$B$BA(paraText, paraLvl, paraEmbeddings);
}}, 1);

Clazz.newMeth(C$, 'isMixed$',  function () {
return (!this.isLeftToRight$() && !this.isRightToLeft$() );
});

Clazz.newMeth(C$, 'isLeftToRight$',  function () {
return (p$1.getDirection.apply(this, []) == 0 && (this.paraLevel & 1) == 0 );
});

Clazz.newMeth(C$, 'isRightToLeft$',  function () {
return (p$1.getDirection.apply(this, []) == 1 && (this.paraLevel & 1) == 1 );
});

Clazz.newMeth(C$, 'baseIsLeftToRight$',  function () {
return (this.getParaLevel$() == 0);
});

Clazz.newMeth(C$, 'getBaseLevel$',  function () {
return this.getParaLevel$();
});

Clazz.newMeth(C$, 'getLogicalToVisualRunsMap',  function () {
if (this.isGoodLogicalToVisualRunsMap) {
return;
}var count=this.countRuns$();
if ((this.logicalToVisualRunsMap == null ) || (this.logicalToVisualRunsMap.length < count) ) {
this.logicalToVisualRunsMap=Clazz.array(Integer.TYPE, [count]);
}var i;
var keys=Clazz.array(Long.TYPE, [count]);
for (i=0; i < count; i++) {
keys[i]=Long.$add((Long.$sl((this.runs[i].start),32)),i);
}
$I$(15).sort$JA(keys);
for (i=0; i < count; i++) {
this.logicalToVisualRunsMap[i]=Long.$ival((Long.$and(keys[i],-1)));
}
keys=null;
this.isGoodLogicalToVisualRunsMap=true;
}, p$1);

Clazz.newMeth(C$, 'getRunLevel$I',  function (run) {
this.verifyValidParaOrLine$();
$I$(14).getRuns$sun_text_bidi_BidiBase(this);
if (run < 0 || run >= this.runCount ) {
return this.getParaLevel$();
}p$1.getLogicalToVisualRunsMap.apply(this, []);
return this.runs[this.logicalToVisualRunsMap[run]].level;
});

Clazz.newMeth(C$, 'getRunStart$I',  function (run) {
this.verifyValidParaOrLine$();
$I$(14).getRuns$sun_text_bidi_BidiBase(this);
if (this.runCount == 1) {
return 0;
} else if (run == this.runCount) {
return this.length;
}this.verifyIndex$I$I$I(run, 0, this.runCount);
p$1.getLogicalToVisualRunsMap.apply(this, []);
return this.runs[this.logicalToVisualRunsMap[run]].start;
});

Clazz.newMeth(C$, 'getRunLimit$I',  function (run) {
this.verifyValidParaOrLine$();
$I$(14).getRuns$sun_text_bidi_BidiBase(this);
if (this.runCount == 1) {
return this.length;
}this.verifyIndex$I$I$I(run, 0, this.runCount);
p$1.getLogicalToVisualRunsMap.apply(this, []);
var idx=this.logicalToVisualRunsMap[run];
var len=idx == 0 ? this.runs[idx].limit : this.runs[idx].limit - this.runs[idx - 1].limit;
return this.runs[idx].start + len;
});

Clazz.newMeth(C$, 'requiresBidi$CA$I$I',  function (text, start, limit) {
var RTLMask=(57378);
if (0 > start || start > limit  || limit > text.length ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Value start " + start + " is out of range 0 to " + limit ]);
}for (var i=start; i < limit; ++i) {
if (Character.isHighSurrogate$C(text[i]) && i < (limit - 1)  && Character.isLowSurrogate$C(text[i + 1]) ) {
if (((1 << $I$(16,"getDirection$I",[Character.codePointAt$CA$I(text, i)])) & 57378) != 0) {
return true;
}} else if (((1 << $I$(16,"getDirection$I",[text[i].$c()])) & 57378) != 0) {
return true;
}}
return false;
}, 1);

Clazz.newMeth(C$, 'reorderVisually$BA$I$OA$I$I',  function (levels, levelStart, objects, objectStart, count) {
if (0 > levelStart || levels.length <= levelStart ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Value levelStart " + levelStart + " is out of range 0 to " + (levels.length - 1) ]);
}if (0 > objectStart || objects.length <= objectStart ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Value objectStart " + levelStart + " is out of range 0 to " + (objects.length - 1) ]);
}if (0 > count || objects.length < (objectStart + count) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Value count " + levelStart + " is out of range 0 to " + (objects.length - objectStart) ]);
}var reorderLevels=Clazz.array(Byte.TYPE, [count]);
System.arraycopy$O$I$O$I$I(levels, levelStart, reorderLevels, 0, count);
var indexMap=C$.reorderVisual$BA(reorderLevels);
var temp=Clazz.array(java.lang.Object, [count]);
System.arraycopy$O$I$O$I$I(objects, objectStart, temp, 0, count);
for (var i=0; i < count; ++i) {
objects[objectStart + i]=temp[indexMap[i]];
}
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
var buf=Clazz.new_([this.getClass$().getName$()],$I$(17,1).c$$S);
buf.append$S("[dir: ");
buf.append$I(this.direction);
buf.append$S(" baselevel: ");
buf.append$I(this.paraLevel);
buf.append$S(" length: ");
buf.append$I(this.length);
buf.append$S(" runs: ");
if (this.levels == null ) {
buf.append$S("none");
} else {
buf.append$C("[");
buf.append$I(this.levels[0]);
for (var i=1; i < this.levels.length; i++) {
buf.append$C(" ");
buf.append$I(this.levels[i]);
}
buf.append$C("]");
}buf.append$S(" text: [0x");
buf.append$S(Integer.toHexString$I(this.text[0].$c()));
for (var i=1; i < this.text.length; i++) {
buf.append$S(" 0x");
buf.append$S(Integer.toHexString$I(this.text[i].$c()));
}
buf.append$S("]]");
return buf.toString();
});

C$.$static$=function(){C$.$static$=0;
C$.DirPropFlagMultiRuns=C$.DirPropFlag$B(31);
C$.DirPropFlagLR=Clazz.array(Integer.TYPE, -1, [C$.DirPropFlag$B(0), C$.DirPropFlag$B(1)]);
C$.DirPropFlagE=Clazz.array(Integer.TYPE, -1, [C$.DirPropFlag$B(11), C$.DirPropFlag$B(14)]);
C$.DirPropFlagO=Clazz.array(Integer.TYPE, -1, [C$.DirPropFlag$B(12), C$.DirPropFlag$B(15)]);
C$.MASK_LTR=C$.DirPropFlag$B(0) | C$.DirPropFlag$B(2) | C$.DirPropFlag$B(5) | C$.DirPropFlag$B(11) | C$.DirPropFlag$B(12) ;
C$.MASK_RTL=C$.DirPropFlag$B(1) | C$.DirPropFlag$B(13) | C$.DirPropFlag$B(14) | C$.DirPropFlag$B(15) ;
C$.MASK_LRX=C$.DirPropFlag$B(11) | C$.DirPropFlag$B(12);
C$.MASK_RLX=C$.DirPropFlag$B(14) | C$.DirPropFlag$B(15);
C$.MASK_EXPLICIT=C$.MASK_LRX | C$.MASK_RLX | C$.DirPropFlag$B(16) ;
C$.MASK_BN_EXPLICIT=C$.DirPropFlag$B(18) | C$.MASK_EXPLICIT;
C$.MASK_B_S=C$.DirPropFlag$B(7) | C$.DirPropFlag$B(8);
C$.MASK_WS=C$.MASK_B_S | C$.DirPropFlag$B(9) | C$.MASK_BN_EXPLICIT ;
C$.MASK_N=C$.DirPropFlag$B(10) | C$.MASK_WS;
C$.MASK_POSSIBLE_N=C$.DirPropFlag$B(6) | C$.DirPropFlag$B(3) | C$.DirPropFlag$B(4) | C$.MASK_N ;
C$.MASK_EMBEDDING=C$.DirPropFlag$B(17) | C$.MASK_POSSIBLE_N;
C$.groupProp=Clazz.array(Short.TYPE, -1, [0, 1, 2, 7, 8, 3, 9, 6, 5, 4, 4, 10, 10, 12, 10, 10, 10, 11, 10]);
C$.impTabProps=Clazz.array(Short.TYPE, -2, [Clazz.array(Short.TYPE, -1, [1, 2, 4, 5, 7, 15, 17, 7, 9, 7, 0, 7, 3, 4]), Clazz.array(Short.TYPE, -1, [1, 34, 36, 37, 39, 47, 49, 39, 41, 39, 1, 1, 35, 0]), Clazz.array(Short.TYPE, -1, [33, 2, 36, 37, 39, 47, 49, 39, 41, 39, 2, 2, 35, 1]), Clazz.array(Short.TYPE, -1, [33, 34, 38, 38, 40, 48, 49, 40, 40, 40, 3, 3, 3, 1]), Clazz.array(Short.TYPE, -1, [33, 34, 4, 37, 39, 47, 49, 74, 11, 74, 4, 4, 35, 2]), Clazz.array(Short.TYPE, -1, [33, 34, 36, 5, 39, 47, 49, 39, 41, 76, 5, 5, 35, 3]), Clazz.array(Short.TYPE, -1, [33, 34, 6, 6, 40, 48, 49, 40, 40, 77, 6, 6, 35, 3]), Clazz.array(Short.TYPE, -1, [33, 34, 36, 37, 7, 47, 49, 7, 78, 7, 7, 7, 35, 4]), Clazz.array(Short.TYPE, -1, [33, 34, 38, 38, 8, 48, 49, 8, 8, 8, 8, 8, 35, 4]), Clazz.array(Short.TYPE, -1, [33, 34, 4, 37, 7, 47, 49, 7, 9, 7, 9, 9, 35, 4]), Clazz.array(Short.TYPE, -1, [97, 98, 4, 101, 135, 111, 113, 135, 142, 135, 10, 135, 99, 2]), Clazz.array(Short.TYPE, -1, [33, 34, 4, 37, 39, 47, 49, 39, 11, 39, 11, 11, 35, 2]), Clazz.array(Short.TYPE, -1, [97, 98, 100, 5, 135, 111, 113, 135, 142, 135, 12, 135, 99, 3]), Clazz.array(Short.TYPE, -1, [97, 98, 6, 6, 136, 112, 113, 136, 136, 136, 13, 136, 99, 3]), Clazz.array(Short.TYPE, -1, [33, 34, 132, 37, 7, 47, 49, 7, 14, 7, 14, 14, 35, 4]), Clazz.array(Short.TYPE, -1, [33, 34, 36, 37, 39, 15, 49, 39, 41, 39, 15, 39, 35, 5]), Clazz.array(Short.TYPE, -1, [33, 34, 38, 38, 40, 16, 49, 40, 40, 40, 16, 40, 35, 5]), Clazz.array(Short.TYPE, -1, [33, 34, 36, 37, 39, 47, 17, 39, 41, 39, 17, 39, 35, 6])]);
C$.impTabL_DEFAULT=Clazz.array(Byte.TYPE, -2, [Clazz.array(Byte.TYPE, -1, [0, 1, 0, 2, 0, 0, 0, 0]), Clazz.array(Byte.TYPE, -1, [0, 1, 3, 3, 20, 20, 0, 1]), Clazz.array(Byte.TYPE, -1, [0, 1, 0, 2, 21, 21, 0, 2]), Clazz.array(Byte.TYPE, -1, [0, 1, 3, 3, 20, 20, 0, 2]), Clazz.array(Byte.TYPE, -1, [32, 1, 3, 3, 4, 4, 32, 1]), Clazz.array(Byte.TYPE, -1, [32, 1, 32, 2, 5, 5, 32, 1])]);
C$.impTabR_DEFAULT=Clazz.array(Byte.TYPE, -2, [Clazz.array(Byte.TYPE, -1, [1, 0, 2, 2, 0, 0, 0, 0]), Clazz.array(Byte.TYPE, -1, [1, 0, 1, 3, 20, 20, 0, 1]), Clazz.array(Byte.TYPE, -1, [1, 0, 2, 2, 0, 0, 0, 1]), Clazz.array(Byte.TYPE, -1, [1, 0, 1, 3, 5, 5, 0, 1]), Clazz.array(Byte.TYPE, -1, [33, 0, 33, 3, 4, 4, 0, 0]), Clazz.array(Byte.TYPE, -1, [1, 0, 1, 3, 5, 5, 0, 0])]);
C$.impAct0=Clazz.array(Short.TYPE, -1, [0, 1, 2, 3, 4, 5, 6]);
C$.impTab_DEFAULT=Clazz.new_($I$(4,1).c$$BAA$BAA$HA$HA,[C$.impTabL_DEFAULT, C$.impTabR_DEFAULT, C$.impAct0, C$.impAct0]);
C$.impTabL_NUMBERS_SPECIAL=Clazz.array(Byte.TYPE, -2, [Clazz.array(Byte.TYPE, -1, [0, 2, 1, 1, 0, 0, 0, 0]), Clazz.array(Byte.TYPE, -1, [0, 2, 1, 1, 0, 0, 0, 2]), Clazz.array(Byte.TYPE, -1, [0, 2, 4, 4, 19, 0, 0, 1]), Clazz.array(Byte.TYPE, -1, [32, 2, 4, 4, 3, 3, 32, 1]), Clazz.array(Byte.TYPE, -1, [0, 2, 4, 4, 19, 19, 0, 2])]);
C$.impTab_NUMBERS_SPECIAL=Clazz.new_($I$(4,1).c$$BAA$BAA$HA$HA,[C$.impTabL_NUMBERS_SPECIAL, C$.impTabR_DEFAULT, C$.impAct0, C$.impAct0]);
C$.impTabL_GROUP_NUMBERS_WITH_R=Clazz.array(Byte.TYPE, -2, [Clazz.array(Byte.TYPE, -1, [0, 3, 17, 17, 0, 0, 0, 0]), Clazz.array(Byte.TYPE, -1, [32, 3, 1, 1, 2, 32, 32, 2]), Clazz.array(Byte.TYPE, -1, [32, 3, 1, 1, 2, 32, 32, 1]), Clazz.array(Byte.TYPE, -1, [0, 3, 5, 5, 20, 0, 0, 1]), Clazz.array(Byte.TYPE, -1, [32, 3, 5, 5, 4, 32, 32, 1]), Clazz.array(Byte.TYPE, -1, [0, 3, 5, 5, 20, 0, 0, 2])]);
C$.impTabR_GROUP_NUMBERS_WITH_R=Clazz.array(Byte.TYPE, -2, [Clazz.array(Byte.TYPE, -1, [2, 0, 1, 1, 0, 0, 0, 0]), Clazz.array(Byte.TYPE, -1, [2, 0, 1, 1, 0, 0, 0, 1]), Clazz.array(Byte.TYPE, -1, [2, 0, 20, 20, 19, 0, 0, 1]), Clazz.array(Byte.TYPE, -1, [34, 0, 4, 4, 3, 0, 0, 0]), Clazz.array(Byte.TYPE, -1, [34, 0, 4, 4, 3, 0, 0, 1])]);
C$.impTab_GROUP_NUMBERS_WITH_R=Clazz.new_($I$(4,1).c$$BAA$BAA$HA$HA,[C$.impTabL_GROUP_NUMBERS_WITH_R, C$.impTabR_GROUP_NUMBERS_WITH_R, C$.impAct0, C$.impAct0]);
C$.impTabL_INVERSE_NUMBERS_AS_L=Clazz.array(Byte.TYPE, -2, [Clazz.array(Byte.TYPE, -1, [0, 1, 0, 0, 0, 0, 0, 0]), Clazz.array(Byte.TYPE, -1, [0, 1, 0, 0, 20, 20, 0, 1]), Clazz.array(Byte.TYPE, -1, [0, 1, 0, 0, 21, 21, 0, 2]), Clazz.array(Byte.TYPE, -1, [0, 1, 0, 0, 20, 20, 0, 2]), Clazz.array(Byte.TYPE, -1, [32, 1, 32, 32, 4, 4, 32, 1]), Clazz.array(Byte.TYPE, -1, [32, 1, 32, 32, 5, 5, 32, 1])]);
C$.impTabR_INVERSE_NUMBERS_AS_L=Clazz.array(Byte.TYPE, -2, [Clazz.array(Byte.TYPE, -1, [1, 0, 1, 1, 0, 0, 0, 0]), Clazz.array(Byte.TYPE, -1, [1, 0, 1, 1, 20, 20, 0, 1]), Clazz.array(Byte.TYPE, -1, [1, 0, 1, 1, 0, 0, 0, 1]), Clazz.array(Byte.TYPE, -1, [1, 0, 1, 1, 5, 5, 0, 1]), Clazz.array(Byte.TYPE, -1, [33, 0, 33, 33, 4, 4, 0, 0]), Clazz.array(Byte.TYPE, -1, [1, 0, 1, 1, 5, 5, 0, 0])]);
C$.impTab_INVERSE_NUMBERS_AS_L=Clazz.new_($I$(4,1).c$$BAA$BAA$HA$HA,[C$.impTabL_INVERSE_NUMBERS_AS_L, C$.impTabR_INVERSE_NUMBERS_AS_L, C$.impAct0, C$.impAct0]);
C$.impTabR_INVERSE_LIKE_DIRECT=Clazz.array(Byte.TYPE, -2, [Clazz.array(Byte.TYPE, -1, [1, 0, 2, 2, 0, 0, 0, 0]), Clazz.array(Byte.TYPE, -1, [1, 0, 1, 2, 19, 19, 0, 1]), Clazz.array(Byte.TYPE, -1, [1, 0, 2, 2, 0, 0, 0, 1]), Clazz.array(Byte.TYPE, -1, [33, 48, 6, 4, 3, 3, 48, 0]), Clazz.array(Byte.TYPE, -1, [33, 48, 6, 4, 5, 5, 48, 3]), Clazz.array(Byte.TYPE, -1, [33, 48, 6, 4, 5, 5, 48, 2]), Clazz.array(Byte.TYPE, -1, [33, 48, 6, 4, 3, 3, 48, 1])]);
C$.impAct1=Clazz.array(Short.TYPE, -1, [0, 1, 11, 12]);
C$.impTab_INVERSE_LIKE_DIRECT=Clazz.new_($I$(4,1).c$$BAA$BAA$HA$HA,[C$.impTabL_DEFAULT, C$.impTabR_INVERSE_LIKE_DIRECT, C$.impAct0, C$.impAct1]);
C$.impTabL_INVERSE_LIKE_DIRECT_WITH_MARKS=Clazz.array(Byte.TYPE, -2, [Clazz.array(Byte.TYPE, -1, [0, 99, 0, 1, 0, 0, 0, 0]), Clazz.array(Byte.TYPE, -1, [0, 99, 0, 1, 18, 48, 0, 4]), Clazz.array(Byte.TYPE, -1, [32, 99, 32, 1, 2, 48, 32, 3]), Clazz.array(Byte.TYPE, -1, [0, 99, 85, 86, 20, 48, 0, 3]), Clazz.array(Byte.TYPE, -1, [48, 67, 85, 86, 4, 48, 48, 3]), Clazz.array(Byte.TYPE, -1, [48, 67, 5, 86, 20, 48, 48, 4]), Clazz.array(Byte.TYPE, -1, [48, 67, 85, 6, 20, 48, 48, 4])]);
C$.impTabR_INVERSE_LIKE_DIRECT_WITH_MARKS=Clazz.array(Byte.TYPE, -2, [Clazz.array(Byte.TYPE, -1, [19, 0, 1, 1, 0, 0, 0, 0]), Clazz.array(Byte.TYPE, -1, [35, 0, 1, 1, 2, 64, 0, 1]), Clazz.array(Byte.TYPE, -1, [35, 0, 1, 1, 2, 64, 0, 0]), Clazz.array(Byte.TYPE, -1, [3, 0, 3, 54, 20, 64, 0, 1]), Clazz.array(Byte.TYPE, -1, [83, 64, 5, 54, 4, 64, 64, 0]), Clazz.array(Byte.TYPE, -1, [83, 64, 5, 54, 4, 64, 64, 1]), Clazz.array(Byte.TYPE, -1, [83, 64, 6, 6, 4, 64, 64, 3])]);
C$.impAct2=Clazz.array(Short.TYPE, -1, [0, 1, 7, 8, 9, 10]);
C$.impTab_INVERSE_LIKE_DIRECT_WITH_MARKS=Clazz.new_($I$(4,1).c$$BAA$BAA$HA$HA,[C$.impTabL_INVERSE_LIKE_DIRECT_WITH_MARKS, C$.impTabR_INVERSE_LIKE_DIRECT_WITH_MARKS, C$.impAct0, C$.impAct2]);
C$.impTab_INVERSE_FOR_NUMBERS_SPECIAL=Clazz.new_($I$(4,1).c$$BAA$BAA$HA$HA,[C$.impTabL_NUMBERS_SPECIAL, C$.impTabR_INVERSE_LIKE_DIRECT, C$.impAct0, C$.impAct1]);
C$.impTabL_INVERSE_FOR_NUMBERS_SPECIAL_WITH_MARKS=Clazz.array(Byte.TYPE, -2, [Clazz.array(Byte.TYPE, -1, [0, 98, 1, 1, 0, 0, 0, 0]), Clazz.array(Byte.TYPE, -1, [0, 98, 1, 1, 0, 48, 0, 4]), Clazz.array(Byte.TYPE, -1, [0, 98, 84, 84, 19, 48, 0, 3]), Clazz.array(Byte.TYPE, -1, [48, 66, 84, 84, 3, 48, 48, 3]), Clazz.array(Byte.TYPE, -1, [48, 66, 4, 4, 19, 48, 48, 4])]);
C$.impTab_INVERSE_FOR_NUMBERS_SPECIAL_WITH_MARKS=Clazz.new_($I$(4,1).c$$BAA$BAA$HA$HA,[C$.impTabL_INVERSE_FOR_NUMBERS_SPECIAL_WITH_MARKS, C$.impTabR_INVERSE_LIKE_DIRECT_WITH_MARKS, C$.impAct0, C$.impAct2]);
};
var $b$ = new Int8Array(1);
var $s$ = new Int16Array(1);
var $k$;
;
(function(){/*c*/var C$=Clazz.newClass(P$.BidiBase, "Point", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['pos','flag']]]

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BidiBase, "InsertPoints", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.points=Clazz.array($I$(1), [0]);
},1);

C$.$fields$=[['I',['size','confirmed'],'O',['points','sun.text.bidi.BidiBase.Point[]']]]

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BidiBase, "ImpTabPair", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['imptab','byte[][][]','impact','short[][]']]]

Clazz.newMeth(C$, 'c$$BAA$BAA$HA$HA',  function (table1, table2, act1, act2) {
;C$.$init$.apply(this);
this.imptab=Clazz.array(Byte.TYPE, -3, [table1, table2]);
this.impact=Clazz.array(Short.TYPE, -2, [act1, act2]);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BidiBase, "LevState", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['B',['runLevel'],'I',['startON','startL2EN','lastStrongRTL'],'H',['state'],'O',['impTab','byte[][]','impAct','short[]']]]

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BidiBase, "TextAttributeConstants", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['clazz','Class','RUN_DIRECTION','java.text.AttributedCharacterIterator.Attribute','+NUMERIC_SHAPING','+BIDI_EMBEDDING','RUN_DIRECTION_LTR','Boolean']]]

Clazz.newMeth(C$, 'getClass$S',  function (name) {
try {
return Clazz.forName(name, true, null);
} catch (e) {
if (Clazz.exceptionOf(e,"ClassNotFoundException")){
return null;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'getStaticField$Class$S',  function (clazz, name) {
try {
var f=clazz.getField$S(name);
return f.get$O(null);
} catch (x) {
if (Clazz.exceptionOf(x,"NoSuchFieldException") || Clazz.exceptionOf(x,"IllegalAccessException")){
throw Clazz.new_($I$(2,1).c$$O,[x]);
} else {
throw x;
}
}
}, 1);

Clazz.newMeth(C$, 'getTextAttribute$S',  function (name) {
if (C$.clazz == null ) {
return ((P$.BidiBase$TextAttributeConstants$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "BidiBase$TextAttributeConstants$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.text.AttributedCharacterIterator','.Attribute']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
})()
), Clazz.new_($I$(3,1).c$$S,[this, null, name],P$.BidiBase$TextAttributeConstants$1));
} else {
return C$.getStaticField$Class$S(C$.clazz, name);
}}, 1);

C$.$static$=function(){C$.$static$=0;
C$.clazz=C$.getClass$S("java.awt.font.TextAttribute");
C$.RUN_DIRECTION=C$.getTextAttribute$S("RUN_DIRECTION");
C$.NUMERIC_SHAPING=C$.getTextAttribute$S("NUMERIC_SHAPING");
C$.BIDI_EMBEDDING=C$.getTextAttribute$S("BIDI_EMBEDDING");
C$.RUN_DIRECTION_LTR=(C$.clazz == null ) ? Boolean.FALSE : C$.getStaticField$Class$S(C$.clazz, "RUN_DIRECTION_LTR");
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BidiBase, "NumericShapings", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['clazz','Class','shapeMethod','java.lang.reflect.Method']]]

Clazz.newMeth(C$, 'getClass$S',  function (name) {
try {
return Clazz.forName(name, true, null);
} catch (e) {
if (Clazz.exceptionOf(e,"ClassNotFoundException")){
return null;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'getMethod$Class$S$ClassA',  function (clazz, name, paramTypes) {
if (clazz != null ) {
try {
return clazz.getMethod$S$ClassA(name, paramTypes);
} catch (e) {
if (Clazz.exceptionOf(e,"NoSuchMethodException")){
throw Clazz.new_($I$(2,1).c$$O,[e]);
} else {
throw e;
}
}
} else {
return null;
}}, 1);

Clazz.newMeth(C$, 'shape$O$CA$I$I',  function (shaper, text, start, count) {
if (C$.shapeMethod == null ) throw Clazz.new_($I$(2,1).c$$O,["Should not get here"]);
try {
C$.shapeMethod.invoke$O$OA(shaper, Clazz.array(java.lang.Object, -1, [text, Integer.valueOf$I(start), Integer.valueOf$I(count)]));
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.lang.reflect.InvocationTargetException")){
var e = e$$;
{
var cause=e.getCause$();
if (Clazz.instanceOf(cause, "java.lang.RuntimeException")) throw cause;
throw Clazz.new_($I$(2,1).c$$O,[e]);
}
} else if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var iae = e$$;
{
throw Clazz.new_($I$(2,1).c$$O,[iae]);
}
} else {
throw e$$;
}
}
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.clazz=C$.getClass$S("java.awt.font.NumericShaper");
C$.shapeMethod=C$.getMethod$Class$S$ClassA(C$.clazz, "shape", Clazz.array(Class, -1, [Clazz.array(Character.TYPE, -1), Integer.TYPE, Integer.TYPE]));
};

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:50 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
