(function(){var P$=Clazz.newPackage("sun.text.bidi"),I$=[[0,'sun.text.bidi.BidiBase','sun.text.bidi.BidiRun','java.util.Arrays']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BidiLine");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'setTrailingWSStart$sun_text_bidi_BidiBase',  function (bidiBase) {
var dirProps=bidiBase.dirProps;
var levels=bidiBase.levels;
var start=bidiBase.length;
var paraLevel=bidiBase.paraLevel;
if ($I$(1).NoContextRTL$B(dirProps[start - 1]) == 7) {
bidiBase.trailingWSStart=start;
return;
}while (start > 0 && ($I$(1).DirPropFlagNC$B(dirProps[start - 1]) & $I$(1).MASK_WS) != 0 ){
--start;
}
while (start > 0 && levels[start - 1] == paraLevel ){
--start;
}
bidiBase.trailingWSStart=start;
}, 1);

Clazz.newMeth(C$, 'setLine$java_text_Bidi$sun_text_bidi_BidiBase$java_text_Bidi$sun_text_bidi_BidiBase$I$I',  function (bidi, paraBidi, newBidi, newBidiBase, start, limit) {
var length;
var lineBidi=newBidiBase;
length=lineBidi.length=lineBidi.originalLength=lineBidi.resultLength=limit - start;
lineBidi.text=Clazz.array(Character.TYPE, [length]);
System.arraycopy$O$I$O$I$I(paraBidi.text, start, lineBidi.text, 0, length);
lineBidi.paraLevel=paraBidi.GetParaLevelAt$I(start);
lineBidi.paraCount=paraBidi.paraCount;
lineBidi.runs=Clazz.array($I$(2), [0]);
if (paraBidi.controlCount > 0) {
var j;
for (j=start; j < limit; j++) {
if ($I$(1,"IsBidiControlChar$I",[paraBidi.text[j].$c()])) {
++lineBidi.controlCount;
}}
lineBidi.resultLength-=lineBidi.controlCount;
}lineBidi.getDirPropsMemory$I(length);
lineBidi.dirProps=lineBidi.dirPropsMemory;
System.arraycopy$O$I$O$I$I(paraBidi.dirProps, start, lineBidi.dirProps, 0, length);
lineBidi.getLevelsMemory$I(length);
lineBidi.levels=lineBidi.levelsMemory;
System.arraycopy$O$I$O$I$I(paraBidi.levels, start, lineBidi.levels, 0, length);
lineBidi.runCount=-1;
if (paraBidi.direction != 2) {
lineBidi.direction=paraBidi.direction;
if (paraBidi.trailingWSStart <= start) {
lineBidi.trailingWSStart=0;
} else if (paraBidi.trailingWSStart < limit) {
lineBidi.trailingWSStart=paraBidi.trailingWSStart - start;
} else {
lineBidi.trailingWSStart=length;
}} else {
var levels=lineBidi.levels;
var i;
var trailingWSStart;
var level;
C$.setTrailingWSStart$sun_text_bidi_BidiBase(lineBidi);
trailingWSStart=lineBidi.trailingWSStart;
if (trailingWSStart == 0) {
lineBidi.direction=($b$[0] = (lineBidi.paraLevel & 1), $b$[0]);
} else {
level=($b$[0] = (levels[0] & 1), $b$[0]);
if (trailingWSStart < length && (lineBidi.paraLevel & 1) != level ) {
lineBidi.direction=2;
} else {
for (i=1; ; i++) {
if (i == trailingWSStart) {
lineBidi.direction=level;
break;
} else if ((levels[i] & 1) != level) {
lineBidi.direction=2;
break;
}}
}}switch (lineBidi.direction) {
case 0:
lineBidi.paraLevel=($b$[0] = ((lineBidi.paraLevel + 1) & ~1), $b$[0]);
lineBidi.trailingWSStart=0;
break;
case 1:
lineBidi.paraLevel=($b$[0] = lineBidi.paraLevel|(1), $b$[0]);
lineBidi.trailingWSStart=0;
break;
default:
break;
}
}newBidiBase.paraBidi=paraBidi;
return newBidi;
}, 1);

Clazz.newMeth(C$, 'getLevelAt$sun_text_bidi_BidiBase$I',  function (bidiBase, charIndex) {
if (bidiBase.direction != 2 || charIndex >= bidiBase.trailingWSStart ) {
return bidiBase.GetParaLevelAt$I(charIndex);
} else {
return bidiBase.levels[charIndex];
}}, 1);

Clazz.newMeth(C$, 'getLevels$sun_text_bidi_BidiBase',  function (bidiBase) {
var start=bidiBase.trailingWSStart;
var length=bidiBase.length;
if (start != length) {
$I$(3).fill$BA$I$I$B(bidiBase.levels, start, length, bidiBase.paraLevel);
bidiBase.trailingWSStart=length;
}if (length < bidiBase.levels.length) {
var levels=Clazz.array(Byte.TYPE, [length]);
System.arraycopy$O$I$O$I$I(bidiBase.levels, 0, levels, 0, length);
return levels;
}return bidiBase.levels;
}, 1);

Clazz.newMeth(C$, 'getLogicalRun$sun_text_bidi_BidiBase$I',  function (bidiBase, logicalPosition) {
var newRun=Clazz.new_($I$(2,1));
var iRun;
C$.getRuns$sun_text_bidi_BidiBase(bidiBase);
var runCount=bidiBase.runCount;
var visualStart=0;
var logicalLimit=0;
iRun=bidiBase.runs[0];
for (var i=0; i < runCount; i++) {
iRun=bidiBase.runs[i];
logicalLimit=iRun.start + iRun.limit - visualStart;
if ((logicalPosition >= iRun.start) && (logicalPosition < logicalLimit) ) {
break;
}visualStart=iRun.limit;
}
newRun.start=iRun.start;
newRun.limit=logicalLimit;
newRun.level=iRun.level;
return newRun;
}, 1);

Clazz.newMeth(C$, 'getSingleRun$sun_text_bidi_BidiBase$B',  function (bidiBase, level) {
bidiBase.runs=bidiBase.simpleRuns;
bidiBase.runCount=1;
bidiBase.runs[0]=Clazz.new_($I$(2,1).c$$I$I$B,[0, bidiBase.length, level]);
}, 1);

Clazz.newMeth(C$, 'reorderLine$sun_text_bidi_BidiBase$B$B',  function (bidiBase, minLevel, maxLevel) {
if (maxLevel <= (minLevel | 1)) {
return;
}var runs;
var tempRun;
var levels;
var firstRun;
var endRun;
var limitRun;
var runCount;
(($b$[0]=++minLevel,minLevel=$b$[0],$b$[0]));
runs=bidiBase.runs;
levels=bidiBase.levels;
runCount=bidiBase.runCount;
if (bidiBase.trailingWSStart < bidiBase.length) {
--runCount;
}while ((($b$[0]=--maxLevel,maxLevel=$b$[0],$b$[0])) >= minLevel){
firstRun=0;
for (; ; ) {
while (firstRun < runCount && levels[runs[firstRun].start] < maxLevel ){
++firstRun;
}
if (firstRun >= runCount) {
break;
}for (limitRun=firstRun; ++limitRun < runCount && levels[runs[limitRun].start] >= maxLevel ; ) {
}
endRun=limitRun - 1;
while (firstRun < endRun){
tempRun=runs[firstRun];
runs[firstRun]=runs[endRun];
runs[endRun]=tempRun;
++firstRun;
--endRun;
}
if (limitRun == runCount) {
break;
} else {
firstRun=limitRun + 1;
}}
}
if ((minLevel & 1) == 0) {
firstRun=0;
if (bidiBase.trailingWSStart == bidiBase.length) {
--runCount;
}while (firstRun < runCount){
tempRun=runs[firstRun];
runs[firstRun]=runs[runCount];
runs[runCount]=tempRun;
++firstRun;
--runCount;
}
}}, 1);

Clazz.newMeth(C$, 'getRunFromLogicalIndex$sun_text_bidi_BidiBase$I',  function (bidiBase, logicalIndex) {
var runs=bidiBase.runs;
var runCount=bidiBase.runCount;
var visualStart=0;
var i;
var length;
var logicalStart;
for (i=0; i < runCount; i++) {
length=runs[i].limit - visualStart;
logicalStart=runs[i].start;
if ((logicalIndex >= logicalStart) && (logicalIndex < (logicalStart + length)) ) {
return i;
}visualStart+=length;
}
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Internal ICU error in getRunFromLogicalIndex"]);
}, 1);

Clazz.newMeth(C$, 'getRuns$sun_text_bidi_BidiBase',  function (bidiBase) {
if (bidiBase.runCount >= 0) {
return;
}if (bidiBase.direction != 2) {
C$.getSingleRun$sun_text_bidi_BidiBase$B(bidiBase, bidiBase.paraLevel);
} else {
var length=bidiBase.length;
var limit;
var levels=bidiBase.levels;
var i;
var runCount;
var level=126;
limit=bidiBase.trailingWSStart;
runCount=0;
for (i=0; i < limit; ++i) {
if (levels[i] != level) {
++runCount;
level=levels[i];
}}
if (runCount == 1 && limit == length ) {
C$.getSingleRun$sun_text_bidi_BidiBase$B(bidiBase, levels[0]);
} else {
var runs;
var runIndex;
var start;
var minLevel=($b$[0] = 62, $b$[0]);
var maxLevel=($b$[0] = 0, $b$[0]);
if (limit < length) {
++runCount;
}bidiBase.getRunsMemory$I(runCount);
runs=bidiBase.runsMemory;
runIndex=0;
i=0;
do {
start=i;
level=levels[i];
if (level < minLevel) {
minLevel=level;
}if (level > maxLevel) {
maxLevel=level;
}while (++i < limit && levels[i] == level ){
}
runs[runIndex]=Clazz.new_($I$(2,1).c$$I$I$B,[start, i - start, level]);
++runIndex;
} while (i < limit);
if (limit < length) {
runs[runIndex]=Clazz.new_($I$(2,1).c$$I$I$B,[limit, length - limit, bidiBase.paraLevel]);
if (bidiBase.paraLevel < minLevel) {
minLevel=bidiBase.paraLevel;
}}bidiBase.runs=runs;
bidiBase.runCount=runCount;
C$.reorderLine$sun_text_bidi_BidiBase$B$B(bidiBase, minLevel, maxLevel);
limit=0;
for (i=0; i < runCount; ++i) {
runs[i].level=levels[runs[i].start];
limit=(runs[i].limit+=limit);
}
if (runIndex < runCount) {
var trailingRun=((bidiBase.paraLevel & 1) != 0) ? 0 : runIndex;
runs[trailingRun].level=bidiBase.paraLevel;
}}}if (bidiBase.insertPoints.size > 0) {
var point;
var runIndex;
var ip;
for (ip=0; ip < bidiBase.insertPoints.size; ip++) {
point=bidiBase.insertPoints.points[ip];
runIndex=C$.getRunFromLogicalIndex$sun_text_bidi_BidiBase$I(bidiBase, point.pos);
bidiBase.runs[runIndex].insertRemove|=point.flag;
}
}if (bidiBase.controlCount > 0) {
var runIndex;
var ic;
var c;
for (ic=0; ic < bidiBase.length; ic++) {
c=bidiBase.text[ic];
if ($I$(1,"IsBidiControlChar$I",[c.$c()])) {
runIndex=C$.getRunFromLogicalIndex$sun_text_bidi_BidiBase$I(bidiBase, ic);
--bidiBase.runs[runIndex].insertRemove;
}}
}}, 1);

Clazz.newMeth(C$, 'prepareReorder$BA$BA$BA',  function (levels, pMinLevel, pMaxLevel) {
var start;
var level;
var minLevel;
var maxLevel;
if (levels == null  || levels.length <= 0 ) {
return null;
}minLevel=($b$[0] = 62, $b$[0]);
maxLevel=($b$[0] = 0, $b$[0]);
for (start=levels.length; start > 0; ) {
level=levels[--start];
if (level > 62) {
return null;
}if (level < minLevel) {
minLevel=level;
}if (level > maxLevel) {
maxLevel=level;
}}
pMinLevel[0]=minLevel;
pMaxLevel[0]=maxLevel;
var indexMap=Clazz.array(Integer.TYPE, [levels.length]);
for (start=levels.length; start > 0; ) {
--start;
indexMap[start]=start;
}
return indexMap;
}, 1);

Clazz.newMeth(C$, 'reorderVisual$BA',  function (levels) {
var aMinLevel=Clazz.array(Byte.TYPE, [1]);
var aMaxLevel=Clazz.array(Byte.TYPE, [1]);
var start;
var end;
var limit;
var temp;
var minLevel;
var maxLevel;
var indexMap=C$.prepareReorder$BA$BA$BA(levels, aMinLevel, aMaxLevel);
if (indexMap == null ) {
return null;
}minLevel=aMinLevel[0];
maxLevel=aMaxLevel[0];
if (minLevel == maxLevel && (minLevel & 1) == 0 ) {
return indexMap;
}minLevel=($b$[0] = minLevel|(1), $b$[0]);
do {
start=0;
for (; ; ) {
while (start < levels.length && levels[start] < maxLevel ){
++start;
}
if (start >= levels.length) {
break;
}for (limit=start; ++limit < levels.length && levels[limit] >= maxLevel ; ) {
}
end=limit - 1;
while (start < end){
temp=indexMap[start];
indexMap[start]=indexMap[end];
indexMap[end]=temp;
++start;
--end;
}
if (limit == levels.length) {
break;
} else {
start=limit + 1;
}}
} while ((($b$[0]=--maxLevel,maxLevel=$b$[0],$b$[0])) >= minLevel);
return indexMap;
}, 1);

Clazz.newMeth(C$, 'getVisualMap$sun_text_bidi_BidiBase',  function (bidiBase) {
var runs=bidiBase.runs;
var logicalStart;
var visualStart;
var visualLimit;
var allocLength=bidiBase.length > bidiBase.resultLength ? bidiBase.length : bidiBase.resultLength;
var indexMap=Clazz.array(Integer.TYPE, [allocLength]);
visualStart=0;
var idx=0;
for (var j=0; j < bidiBase.runCount; ++j) {
logicalStart=runs[j].start;
visualLimit=runs[j].limit;
if (runs[j].isEvenRun$()) {
do {
indexMap[idx++]=logicalStart++;
} while (++visualStart < visualLimit);
} else {
logicalStart+=visualLimit - visualStart;
do {
indexMap[idx++]=--logicalStart;
} while (++visualStart < visualLimit);
}}
if (bidiBase.insertPoints.size > 0) {
var markFound=0;
var runCount=bidiBase.runCount;
var insertRemove;
var i;
var j;
var k;
runs=bidiBase.runs;
for (i=0; i < runCount; i++) {
insertRemove=runs[i].insertRemove;
if ((insertRemove & (5)) > 0) {
++markFound;
}if ((insertRemove & (10)) > 0) {
++markFound;
}}
k=bidiBase.resultLength;
for (i=runCount - 1; i >= 0 && markFound > 0 ; i--) {
insertRemove=runs[i].insertRemove;
if ((insertRemove & (10)) > 0) {
indexMap[--k]=-1;
--markFound;
}visualStart=i > 0 ? runs[i - 1].limit : 0;
for (j=runs[i].limit - 1; j >= visualStart && markFound > 0 ; j--) {
indexMap[--k]=indexMap[j];
}
if ((insertRemove & (5)) > 0) {
indexMap[--k]=-1;
--markFound;
}}
} else if (bidiBase.controlCount > 0) {
var runCount=bidiBase.runCount;
var logicalEnd;
var insertRemove;
var length;
var i;
var j;
var k;
var m;
var uchar;
var evenRun;
runs=bidiBase.runs;
visualStart=0;
k=0;
for (i=0; i < runCount; i++, visualStart+=length) {
length=runs[i].limit - visualStart;
insertRemove=runs[i].insertRemove;
if ((insertRemove == 0) && (k == visualStart) ) {
k+=length;
continue;
}if (insertRemove == 0) {
visualLimit=runs[i].limit;
for (j=visualStart; j < visualLimit; j++) {
indexMap[k++]=indexMap[j];
}
continue;
}logicalStart=runs[i].start;
evenRun=runs[i].isEvenRun$();
logicalEnd=logicalStart + length - 1;
for (j=0; j < length; j++) {
m=evenRun ? logicalStart + j : logicalEnd - j;
uchar=bidiBase.text[m];
if (!$I$(1,"IsBidiControlChar$I",[uchar.$c()])) {
indexMap[k++]=m;
}}
}
}if (allocLength == bidiBase.resultLength) {
return indexMap;
}var newMap=Clazz.array(Integer.TYPE, [bidiBase.resultLength]);
System.arraycopy$O$I$O$I$I(indexMap, 0, newMap, 0, bidiBase.resultLength);
return newMap;
}, 1);
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:50 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
