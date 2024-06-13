(function(){var P$=Clazz.newPackage("java.text"),p$1={},I$=[[0,'sun.text.IntHashtable','sun.text.UCompactIntArray','sun.text.normalizer.NormalizerImpl','java.text.MergeCollation','sun.text.ComposedCharIter','java.util.Vector','java.text.EntryPair','java.text.RBCollationTables','StringBuffer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RBTableBuilder");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.tables=null;
this.mPattern=null;
this.isOverIgnore=false;
this.keyBuf=Clazz.array(Character.TYPE, [5]);
this.contractFlags=Clazz.new_($I$(1,1).c$$I,[100]);
this.frenchSec=false;
this.seAsianSwapping=false;
this.mapping=null;
this.contractTable=null;
this.expandTable=null;
this.maxSecOrder=($s$[0] = 0, $s$[0]);
this.maxTerOrder=($s$[0] = 0, $s$[0]);
},1);

C$.$fields$=[['Z',['isOverIgnore','frenchSec','seAsianSwapping'],'H',['maxSecOrder','maxTerOrder'],'O',['tables','java.text.RBCollationTables.BuildAPI','mPattern','java.text.MergeCollation','keyBuf','char[]','contractFlags','sun.text.IntHashtable','mapping','sun.text.UCompactIntArray','contractTable','java.util.Vector','+expandTable']]]

Clazz.newMeth(C$, 'c$$java_text_RBCollationTables_BuildAPI',  function (tables) {
;C$.$init$.apply(this);
this.tables=tables;
}, 1);

Clazz.newMeth(C$, 'build$S$I',  function (pattern, decmp) {
var isSource=true;
var i=0;
var expChars;
var groupChars;
if (pattern.length$() == 0) throw Clazz.new_(Clazz.load('java.text.ParseException').c$$S$I,["Build rules empty.", 0]);
this.mapping=Clazz.new_($I$(2,1).c$$I,[-1]);
pattern=$I$(3).canonicalDecomposeWithSingleQuotation$S(pattern);
this.mPattern=Clazz.new_($I$(4,1).c$$S,[pattern]);
var order=0;
for (i=0; i < this.mPattern.getCount$(); ++i) {
var entry=this.mPattern.getItemAt$I(i);
if (entry != null ) {
groupChars=entry.getChars$();
if (groupChars.length$() > 1) {
switch ((groupChars.charCodeAt$I(groupChars.length$() - 1))) {
case 64:
this.frenchSec=true;
groupChars=groupChars.substring$I$I(0, groupChars.length$() - 1);
break;
case 33:
this.seAsianSwapping=true;
groupChars=groupChars.substring$I$I(0, groupChars.length$() - 1);
break;
}
}order=p$1.increment$I$I.apply(this, [entry.getStrength$(), order]);
expChars=entry.getExtension$();
if (expChars.length$() != 0) {
p$1.addExpandOrder$S$S$I.apply(this, [groupChars, expChars, order]);
} else if (groupChars.length$() > 1) {
var ch=groupChars.charAt$I(0);
if (Character.isHighSurrogate$C(ch) && groupChars.length$() == 2 ) {
p$1.addOrder$I$I.apply(this, [Character.toCodePoint$C$C(ch, groupChars.charAt$I(1)), order]);
} else {
p$1.addContractOrder$S$I.apply(this, [groupChars, order]);
}} else {
var ch=groupChars.charAt$I(0);
p$1.addOrder$I$I.apply(this, [ch.$c(), order]);
}}}
p$1.addComposedChars.apply(this, []);
p$1.commit.apply(this, []);
this.mapping.compact$();
this.tables.fillInTables$Z$Z$sun_text_UCompactIntArray$java_util_Vector$java_util_Vector$sun_text_IntHashtable$H$H(this.frenchSec, this.seAsianSwapping, this.mapping, this.contractTable, this.expandTable, this.contractFlags, this.maxSecOrder, this.maxTerOrder);
});

Clazz.newMeth(C$, 'addComposedChars',  function () {
var iter=Clazz.new_($I$(5,1));
var c;
while ((c=iter.next$()) != -1){
if (p$1.getCharOrder$I.apply(this, [c]) == -1) {
var s=iter.decomposition$();
if (s.length$() == 1) {
var order=p$1.getCharOrder$I.apply(this, [s.charAt$I(0).$c()]);
if (order != -1) {
p$1.addOrder$I$I.apply(this, [c, order]);
}continue;
} else if (s.length$() == 2) {
var ch0=s.charAt$I(0);
if (Character.isHighSurrogate$C(ch0)) {
var order=p$1.getCharOrder$I.apply(this, [s.codePointAt$I(0)]);
if (order != -1) {
p$1.addOrder$I$I.apply(this, [c, order]);
}continue;
}}var contractOrder=p$1.getContractOrder$S.apply(this, [s]);
if (contractOrder != -1) {
p$1.addOrder$I$I.apply(this, [c, contractOrder]);
} else {
var allThere=true;
for (var i=0; i < s.length$(); i++) {
if (p$1.getCharOrder$I.apply(this, [s.charAt$I(i).$c()]) == -1) {
allThere=false;
break;
}}
if (allThere) {
p$1.addExpandOrder$I$S$I.apply(this, [c, s, -1]);
}}}}
}, p$1);

Clazz.newMeth(C$, 'commit',  function () {
if (this.expandTable != null ) {
for (var i=0; i < this.expandTable.size$(); i++) {
var valueList=this.expandTable.elementAt$I(i);
for (var j=0; j < valueList.length; j++) {
var order=valueList[j];
if (order < 2113929216 && order > 1879048192 ) {
var ch=order - 1879048192;
var realValue=p$1.getCharOrder$I.apply(this, [ch]);
if (realValue == -1) {
valueList[j]=65535 & ch;
} else {
valueList[j]=realValue;
}}}
}
}}, p$1);

Clazz.newMeth(C$, 'increment$I$I',  function (aStrength, lastValue) {
switch (aStrength) {
case 0:
lastValue+=65536;
lastValue&=-65536;
this.isOverIgnore=true;
break;
case 1:
lastValue+=256;
lastValue&=-256;
if (!this.isOverIgnore) (($s$[0]=++this.maxSecOrder,this.maxSecOrder=$s$[0],$s$[0]));
break;
case 2:
lastValue+=1;
if (!this.isOverIgnore) (($s$[0]=++this.maxTerOrder,this.maxTerOrder=$s$[0],$s$[0]));
break;
}
return lastValue;
}, p$1);

Clazz.newMeth(C$, 'addOrder$I$I',  function (ch, anOrder) {
var order=this.mapping.elementAt$I(ch);
if (order >= 2130706432) {
var length=1;
if (Character.isSupplementaryCodePoint$I(ch)) {
length=Character.toChars$I$CA$I(ch, this.keyBuf, 0);
} else {
this.keyBuf[0]=String.fromCharCode(ch);
}p$1.addContractOrder$S$I.apply(this, [ String.instantialize(this.keyBuf, 0, length), anOrder]);
} else {
this.mapping.setElementAt$I$I(ch, anOrder);
}}, p$1);

Clazz.newMeth(C$, 'addContractOrder$S$I',  function (groupChars, anOrder) {
p$1.addContractOrder$S$I$Z.apply(this, [groupChars, anOrder, true]);
}, p$1);

Clazz.newMeth(C$, 'addContractOrder$S$I$Z',  function (groupChars, anOrder, fwd) {
if (this.contractTable == null ) {
this.contractTable=Clazz.new_($I$(6,1).c$$I,[20]);
}var ch=groupChars.codePointAt$I(0);
var entry=this.mapping.elementAt$I(ch);
var entryTable=p$1.getContractValuesImpl$I.apply(this, [entry - 2130706432]);
if (entryTable == null ) {
var tableIndex=2130706432 + this.contractTable.size$();
entryTable=Clazz.new_($I$(6,1).c$$I,[20]);
this.contractTable.addElement$O(entryTable);
entryTable.addElement$O(Clazz.new_([groupChars.substring$I$I(0, Character.charCount$I(ch)), entry],$I$(7,1).c$$S$I));
this.mapping.setElementAt$I$I(ch, tableIndex);
}var index=$I$(8).getEntry$java_util_Vector$S$Z(entryTable, groupChars, fwd);
if (index != -1) {
var pair=entryTable.elementAt$I(index);
pair.value=anOrder;
} else {
var pair=entryTable.lastElement$();
if (groupChars.length$() > pair.entryName.length$()) {
entryTable.addElement$O(Clazz.new_($I$(7,1).c$$S$I$Z,[groupChars, anOrder, fwd]));
} else {
entryTable.insertElementAt$O$I(Clazz.new_($I$(7,1).c$$S$I$Z,[groupChars, anOrder, fwd]), entryTable.size$() - 1);
}}if (fwd && groupChars.length$() > 1 ) {
p$1.addContractFlags$S.apply(this, [groupChars]);
p$1.addContractOrder$S$I$Z.apply(this, [Clazz.new_($I$(9,1).c$$S,[groupChars]).reverse$().toString(), anOrder, false]);
}}, p$1);

Clazz.newMeth(C$, 'getContractOrder$S',  function (groupChars) {
var result=-1;
if (this.contractTable != null ) {
var ch=groupChars.codePointAt$I(0);
var entryTable=p$1.getContractValues$I.apply(this, [ch]);
if (entryTable != null ) {
var index=$I$(8).getEntry$java_util_Vector$S$Z(entryTable, groupChars, true);
if (index != -1) {
var pair=entryTable.elementAt$I(index);
result=pair.value;
}}}return result;
}, p$1);

Clazz.newMeth(C$, 'getCharOrder$I',  function (ch) {
var order=this.mapping.elementAt$I(ch);
if (order >= 2130706432) {
var groupList=p$1.getContractValuesImpl$I.apply(this, [order - 2130706432]);
var pair=groupList.firstElement$();
order=pair.value;
}return order;
}, p$1);

Clazz.newMeth(C$, 'getContractValues$I',  function (ch) {
var index=this.mapping.elementAt$I(ch);
return p$1.getContractValuesImpl$I.apply(this, [index - 2130706432]);
}, p$1);

Clazz.newMeth(C$, 'getContractValuesImpl$I',  function (index) {
if (index >= 0) {
return this.contractTable.elementAt$I(index);
} else {
return null;
}}, p$1);

Clazz.newMeth(C$, 'addExpandOrder$S$S$I',  function (contractChars, expandChars, anOrder) {
var tableIndex=p$1.addExpansion$I$S.apply(this, [anOrder, expandChars]);
if (contractChars.length$() > 1) {
var ch=contractChars.charAt$I(0);
if (Character.isHighSurrogate$C(ch) && contractChars.length$() == 2 ) {
var ch2=contractChars.charAt$I(1);
if (Character.isLowSurrogate$C(ch2)) {
p$1.addOrder$I$I.apply(this, [Character.toCodePoint$C$C(ch, ch2), tableIndex]);
}} else {
p$1.addContractOrder$S$I.apply(this, [contractChars, tableIndex]);
}} else {
p$1.addOrder$I$I.apply(this, [contractChars.charAt$I(0).$c(), tableIndex]);
}}, p$1);

Clazz.newMeth(C$, 'addExpandOrder$I$S$I',  function (ch, expandChars, anOrder) {
var tableIndex=p$1.addExpansion$I$S.apply(this, [anOrder, expandChars]);
p$1.addOrder$I$I.apply(this, [ch, tableIndex]);
}, p$1);

Clazz.newMeth(C$, 'addExpansion$I$S',  function (anOrder, expandChars) {
if (this.expandTable == null ) {
this.expandTable=Clazz.new_($I$(6,1).c$$I,[20]);
}var offset=(anOrder == -1) ? 0 : 1;
var valueList=Clazz.array(Integer.TYPE, [expandChars.length$() + offset]);
if (offset == 1) {
valueList[0]=anOrder;
}var j=offset;
for (var i=0; i < expandChars.length$(); i++) {
var ch0=expandChars.charAt$I(i);
var ch1;
var ch;
if (Character.isHighSurrogate$C(ch0)) {
if (++i == expandChars.length$() || !Character.isLowSurrogate$C(ch1=expandChars.charAt$I(i)) ) {
break;
}ch=Character.toCodePoint$C$C(ch0, ch1);
} else {
ch=ch0.$c();
}var mapValue=p$1.getCharOrder$I.apply(this, [ch]);
if (mapValue != -1) {
valueList[j++]=mapValue;
} else {
valueList[j++]=1879048192 + ch;
}}
if (j < valueList.length) {
var tmpBuf=Clazz.array(Integer.TYPE, [j]);
while (--j >= 0){
tmpBuf[j]=valueList[j];
}
valueList=tmpBuf;
}var tableIndex=2113929216 + this.expandTable.size$();
this.expandTable.addElement$O(valueList);
return tableIndex;
}, p$1);

Clazz.newMeth(C$, 'addContractFlags$S',  function (chars) {
var c0;
var c;
var len=chars.length$();
for (var i=0; i < len; i++) {
c0=chars.charAt$I(i);
c=Character.isHighSurrogate$C(c0) ? Character.toCodePoint$C$C(c0, chars.charAt$I(++i)) : c0.$c();
this.contractFlags.put$I$I(c, 1);
}
}, p$1);
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:30 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
