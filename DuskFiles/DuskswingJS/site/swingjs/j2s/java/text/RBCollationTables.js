(function(){var P$=Clazz.newPackage("java.text"),p$1={},I$=[[0,'java.text.RBTableBuilder',['java.text.RBCollationTables','.BuildAPI']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RBCollationTables", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['BuildAPI',16]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.rules=null;
this.frenchSec=false;
this.seAsianSwapping=false;
this.mapping=null;
this.contractTable=null;
this.expandTable=null;
this.contractFlags=null;
this.maxSecOrder=($s$[0] = 0, $s$[0]);
this.maxTerOrder=($s$[0] = 0, $s$[0]);
},1);

C$.$fields$=[['Z',['frenchSec','seAsianSwapping'],'H',['maxSecOrder','maxTerOrder'],'S',['rules'],'O',['mapping','sun.text.UCompactIntArray','contractTable','java.util.Vector','+expandTable','contractFlags','sun.text.IntHashtable']]]

Clazz.newMeth(C$, 'c$$S$I',  function (rules, decmp) {
;C$.$init$.apply(this);
this.rules=rules;
var builder=Clazz.new_([Clazz.new_($I$(2,1),[this, null])],$I$(1,1).c$$java_text_RBCollationTables_BuildAPI);
builder.build$S$I(rules, decmp);
}, 1);

Clazz.newMeth(C$, 'getRules$',  function () {
return this.rules;
});

Clazz.newMeth(C$, 'isFrenchSec$',  function () {
return this.frenchSec;
});

Clazz.newMeth(C$, 'isSEAsianSwapping$',  function () {
return this.seAsianSwapping;
});

Clazz.newMeth(C$, 'getContractValues$I',  function (ch) {
var index=this.mapping.elementAt$I(ch);
return p$1.getContractValuesImpl$I.apply(this, [index - 2130706432]);
});

Clazz.newMeth(C$, 'getContractValuesImpl$I',  function (index) {
if (index >= 0) {
return this.contractTable.elementAt$I(index);
} else {
return null;
}}, p$1);

Clazz.newMeth(C$, 'usedInContractSeq$I',  function (c) {
return this.contractFlags.get$I(c) == 1;
});

Clazz.newMeth(C$, 'getMaxExpansion$I',  function (order) {
var result=1;
if (this.expandTable != null ) {
for (var i=0; i < this.expandTable.size$(); i++) {
var valueList=this.expandTable.elementAt$I(i);
var length=valueList.length;
if (length > result && valueList[length - 1] == order ) {
result=length;
}}
}return result;
});

Clazz.newMeth(C$, 'getExpandValueList$I',  function (idx) {
return this.expandTable.elementAt$I(idx - 2113929216);
});

Clazz.newMeth(C$, 'getUnicodeOrder$I',  function (ch) {
return this.mapping.elementAt$I(ch);
});

Clazz.newMeth(C$, 'getMaxSecOrder$',  function () {
return this.maxSecOrder;
});

Clazz.newMeth(C$, 'getMaxTerOrder$',  function () {
return this.maxTerOrder;
});

Clazz.newMeth(C$, 'reverse$StringBuffer$I$I',  function (result, from, to) {
var i=from;
var swap;
var j=to - 1;
while (i < j){
swap=result.charAt$I(i);
result.setCharAt$I$C(i, result.charAt$I(j));
result.setCharAt$I$C(j, swap);
++i;
--j;
}
}, 1);

Clazz.newMeth(C$, 'getEntry$java_util_Vector$S$Z',  function (list, name, fwd) {
for (var i=0; i < list.size$(); i++) {
var pair=list.elementAt$I(i);
if (pair.fwd == fwd  && pair.entryName.equals$O(name) ) {
return i;
}}
return -1;
}, 1);
var $s$ = new Int16Array(1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.RBCollationTables, "BuildAPI", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'fillInTables$Z$Z$sun_text_UCompactIntArray$java_util_Vector$java_util_Vector$sun_text_IntHashtable$H$H',  function (f2ary, swap, map, cTbl, eTbl, cFlgs, mso, mto) {
this.b$['java.text.RBCollationTables'].frenchSec=f2ary;
this.b$['java.text.RBCollationTables'].seAsianSwapping=swap;
this.b$['java.text.RBCollationTables'].mapping=map;
this.b$['java.text.RBCollationTables'].contractTable=cTbl;
this.b$['java.text.RBCollationTables'].expandTable=eTbl;
this.b$['java.text.RBCollationTables'].contractFlags=cFlgs;
this.b$['java.text.RBCollationTables'].maxSecOrder=mso;
this.b$['java.text.RBCollationTables'].maxTerOrder=mto;
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:30 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
