(function(){var P$=Clazz.newPackage("sun.font");
/*c*/var C$=Clazz.newClass(P$, "BidiUtils");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getLevels$java_text_Bidi$BA$I',  function (bidi, levels, start) {
var limit=start + bidi.getLength$();
if (start < 0 || limit > levels.length ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["levels.length = " + levels.length + " start: " + start + " limit: " + limit ]);
}var runCount=bidi.getRunCount$();
var p=start;
for (var i=0; i < runCount; ++i) {
var rlimit=start + bidi.getRunLimit$I(i);
var rlevel=($b$[0] = bidi.getRunLevel$I(i), $b$[0]);
while (p < rlimit){
levels[p++]=rlevel;
}
}
}, 1);

Clazz.newMeth(C$, 'getLevels$java_text_Bidi',  function (bidi) {
var levels=Clazz.array(Byte.TYPE, [bidi.getLength$()]);
C$.getLevels$java_text_Bidi$BA$I(bidi, levels, 0);
return levels;
}, 1);

Clazz.newMeth(C$, 'createVisualToLogicalMap$BA',  function (levels) {
var len=levels.length;
var mapping=Clazz.array(Integer.TYPE, [len]);
var lowestOddLevel=63;
var highestLevel=($b$[0] = 0, $b$[0]);
for (var i=0; i < len; i++) {
mapping[i]=i;
var level=levels[i];
if (level > highestLevel) {
highestLevel=level;
}if ((level & 1) != 0 && level < lowestOddLevel ) {
lowestOddLevel=level;
}}
while (highestLevel >= lowestOddLevel){
var i=0;
for (; ; ) {
while (i < len && levels[i] < highestLevel ){
++i;
}
var begin=i++;
if (begin == levels.length) {
break;
}while (i < len && levels[i] >= highestLevel ){
++i;
}
var end=i - 1;
while (begin < end){
var temp=mapping[begin];
mapping[begin]=mapping[end];
mapping[end]=temp;
++begin;
--end;
}
}
(($b$[0]=--highestLevel,highestLevel=$b$[0],$b$[0]));
}
return mapping;
}, 1);

Clazz.newMeth(C$, 'createInverseMap$IA',  function (values) {
if (values == null ) {
return null;
}var result=Clazz.array(Integer.TYPE, [values.length]);
for (var i=0; i < values.length; i++) {
result[values[i]]=i;
}
return result;
}, 1);

Clazz.newMeth(C$, 'createContiguousOrder$IA',  function (values) {
if (values != null ) {
return C$.computeContiguousOrder$IA$I$I(values, 0, values.length);
}return null;
}, 1);

Clazz.newMeth(C$, 'computeContiguousOrder$IA$I$I',  function (values, start, limit) {
var result=Clazz.array(Integer.TYPE, [limit - start]);
for (var i=0; i < result.length; i++) {
result[i]=i + start;
}
for (var i=0; i < result.length - 1; i++) {
var minIndex=i;
var currentValue=values[result[minIndex]];
for (var j=i; j < result.length; j++) {
if (values[result[j]] < currentValue) {
minIndex=j;
currentValue=values[result[minIndex]];
}}
var temp=result[i];
result[i]=result[minIndex];
result[minIndex]=temp;
}
if (start != 0) {
for (var i=0; i < result.length; i++) {
result[i]-=start;
}
}var k;
for (k=0; k < result.length; k++) {
if (result[k] != k) {
break;
}}
if (k == result.length) {
return null;
}return C$.createInverseMap$IA(result);
}, 1);

Clazz.newMeth(C$, 'createNormalizedMap$IA$BA$I$I',  function (values, levels, start, limit) {
if (values != null ) {
if (start != 0 || limit != values.length ) {
var copyRange;
var canonical;
var primaryLevel;
if (levels == null ) {
primaryLevel=0;
copyRange=true;
canonical=true;
} else {
if (levels[start] == levels[limit - 1]) {
primaryLevel=levels[start];
canonical=(primaryLevel & 1) == 0;
var i;
for (i=start; i < limit; i++) {
if (levels[i] < primaryLevel) {
break;
}if (canonical) {
canonical=levels[i] == primaryLevel;
}}
copyRange=(i == limit);
} else {
copyRange=false;
primaryLevel=0;
canonical=false;
}}if (copyRange) {
if (canonical) {
return null;
}var result=Clazz.array(Integer.TYPE, [limit - start]);
var baseValue;
if ((primaryLevel & 1) != 0) {
baseValue=values[limit - 1];
} else {
baseValue=values[start];
}if (baseValue == 0) {
System.arraycopy$O$I$O$I$I(values, start, result, 0, limit - start);
} else {
for (var j=0; j < result.length; j++) {
result[j]=values[j + start] - baseValue;
}
}return result;
} else {
return C$.computeContiguousOrder$IA$I$I(values, start, limit);
}} else {
return values;
}}return null;
}, 1);

Clazz.newMeth(C$, 'reorderVisually$BA$OA',  function (levels, objects) {
var len=levels.length;
var lowestOddLevel=63;
var highestLevel=($b$[0] = 0, $b$[0]);
for (var i=0; i < len; i++) {
var level=levels[i];
if (level > highestLevel) {
highestLevel=level;
}if ((level & 1) != 0 && level < lowestOddLevel ) {
lowestOddLevel=level;
}}
while (highestLevel >= lowestOddLevel){
var i=0;
for (; ; ) {
while (i < len && levels[i] < highestLevel ){
++i;
}
var begin=i++;
if (begin == levels.length) {
break;
}while (i < len && levels[i] >= highestLevel ){
++i;
}
var end=i - 1;
while (begin < end){
var temp=objects[begin];
objects[begin]=objects[end];
objects[end]=temp;
++begin;
--end;
}
}
(($b$[0]=--highestLevel,highestLevel=$b$[0],$b$[0]));
}
}, 1);
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:44 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
