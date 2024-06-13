(function(){var P$=Clazz.newPackage("java.text"),I$=[[0,'java.text.RBCollationTables','java.text.CollationElementIterator',['java.text.Normalizer','.Form'],'java.text.Normalizer','StringBuffer','java.text.RuleBasedCollationKey']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RuleBasedCollator", null, 'java.text.Collator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.tables=null;
this.primResult=null;
this.secResult=null;
this.terResult=null;
this.sourceCursor=null;
this.targetCursor=null;
},1);

C$.$fields$=[['O',['tables','java.text.RBCollationTables','primResult','StringBuffer','+secResult','+terResult','sourceCursor','java.text.CollationElementIterator','+targetCursor']]]

Clazz.newMeth(C$, 'c$$S',  function (rules) {
C$.c$$S$I.apply(this, [rules, 1]);
}, 1);

Clazz.newMeth(C$, 'c$$S$I',  function (rules, decomp) {
Clazz.super_(C$, this);
this.setStrength$I(2);
this.setDecomposition$I(decomp);
this.tables=Clazz.new_($I$(1,1).c$$S$I,[rules, decomp]);
}, 1);

Clazz.newMeth(C$, 'c$$java_text_RuleBasedCollator',  function (that) {
Clazz.super_(C$, this);
this.setStrength$I(that.getStrength$());
this.setDecomposition$I(that.getDecomposition$());
this.tables=that.tables;
}, 1);

Clazz.newMeth(C$, 'getRules$',  function () {
return this.tables.getRules$();
});

Clazz.newMeth(C$, 'getCollationElementIterator$S',  function (source) {
return Clazz.new_($I$(2,1).c$$S$java_text_RuleBasedCollator,[source, this]);
});

Clazz.newMeth(C$, 'getCollationElementIterator$java_text_CharacterIterator',  function (source) {
return Clazz.new_($I$(2,1).c$$java_text_CharacterIterator$java_text_RuleBasedCollator,[source, this]);
});

Clazz.newMeth(C$, 'compare$S$S',  function (source, target) {
if (source == null  || target == null  ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}var result=0;
if (this.sourceCursor == null ) {
this.sourceCursor=this.getCollationElementIterator$S(source);
} else {
this.sourceCursor.setText$S(source);
}if (this.targetCursor == null ) {
this.targetCursor=this.getCollationElementIterator$S(target);
} else {
this.targetCursor.setText$S(target);
}var sOrder=0;
var tOrder=0;
var initialCheckSecTer=this.getStrength$() >= 1;
var checkSecTer=initialCheckSecTer;
var checkTertiary=this.getStrength$() >= 2;
var gets=true;
var gett=true;
while (true){
if (gets) sOrder=this.sourceCursor.next$();
 else gets=true;
if (gett) tOrder=this.targetCursor.next$();
 else gett=true;
if ((sOrder == -1) || (tOrder == -1) ) break;
var pSOrder=$I$(2).primaryOrder$I(sOrder);
var pTOrder=$I$(2).primaryOrder$I(tOrder);
if (sOrder == tOrder) {
if (this.tables.isFrenchSec$() && pSOrder != 0 ) {
if (!checkSecTer) {
checkSecTer=initialCheckSecTer;
checkTertiary=false;
}}continue;
}if (pSOrder != pTOrder) {
if (sOrder == 0) {
gett=false;
continue;
}if (tOrder == 0) {
gets=false;
continue;
}if (pSOrder == 0) {
if (checkSecTer) {
result=1;
checkSecTer=false;
}gett=false;
} else if (pTOrder == 0) {
if (checkSecTer) {
result=-1;
checkSecTer=false;
}gets=false;
} else {
if (pSOrder < pTOrder) {
return -1;
} else {
return 1;
}}} else {
if (checkSecTer) {
var secSOrder=$I$(2).secondaryOrder$I(sOrder);
var secTOrder=$I$(2).secondaryOrder$I(tOrder);
if (secSOrder != secTOrder) {
result=(secSOrder < secTOrder) ? -1 : 1;
checkSecTer=false;
} else {
if (checkTertiary) {
var terSOrder=$I$(2).tertiaryOrder$I(sOrder);
var terTOrder=$I$(2).tertiaryOrder$I(tOrder);
if (terSOrder != terTOrder) {
result=(terSOrder < terTOrder) ? -1 : 1;
checkTertiary=false;
}}}}}}
if (sOrder != -1) {
do {
if ($I$(2).primaryOrder$I(sOrder) != 0) {
return 1;
} else if ($I$(2).secondaryOrder$I(sOrder) != 0) {
if (checkSecTer) {
result=1;
checkSecTer=false;
}}} while ((sOrder=this.sourceCursor.next$()) != -1);
} else if (tOrder != -1) {
do {
if ($I$(2).primaryOrder$I(tOrder) != 0) return -1;
 else if ($I$(2).secondaryOrder$I(tOrder) != 0) {
if (checkSecTer) {
result=-1;
checkSecTer=false;
}}} while ((tOrder=this.targetCursor.next$()) != -1);
}if (result == 0 && this.getStrength$() == 3 ) {
var mode=this.getDecomposition$();
var form;
if (mode == 1) {
form=$I$(3).NFD;
} else if (mode == 2) {
form=$I$(3).NFKD;
} else {
return source.compareTo$S(target);
}var sourceDecomposition=$I$(4).normalize$CharSequence$java_text_Normalizer_Form(source, form);
var targetDecomposition=$I$(4).normalize$CharSequence$java_text_Normalizer_Form(target, form);
return sourceDecomposition.compareTo$S(targetDecomposition);
}return result;
});

Clazz.newMeth(C$, 'getCollationKey$S',  function (source) {
if (source == null ) return null;
if (this.primResult == null ) {
this.primResult=Clazz.new_($I$(5,1));
this.secResult=Clazz.new_($I$(5,1));
this.terResult=Clazz.new_($I$(5,1));
} else {
this.primResult.setLength$I(0);
this.secResult.setLength$I(0);
this.terResult.setLength$I(0);
}var order=0;
var compareSec=(this.getStrength$() >= 1);
var compareTer=(this.getStrength$() >= 2);
var secOrder=-1;
var terOrder=-1;
var preSecIgnore=0;
if (this.sourceCursor == null ) {
this.sourceCursor=this.getCollationElementIterator$S(source);
} else {
this.sourceCursor.setText$S(source);
}while ((order=this.sourceCursor.next$()) != -1){
secOrder=$I$(2).secondaryOrder$I(order);
terOrder=$I$(2).tertiaryOrder$I(order);
if (!$I$(2).isIgnorable$I(order)) {
this.primResult.append$C(String.fromCharCode(($I$(2).primaryOrder$I(order) + 1)));
if (compareSec) {
if (this.tables.isFrenchSec$() && preSecIgnore < this.secResult.length$() ) {
$I$(1,"reverse$StringBuffer$I$I",[this.secResult, preSecIgnore, this.secResult.length$()]);
}this.secResult.append$C(String.fromCharCode((secOrder + 1)));
preSecIgnore=this.secResult.length$();
}if (compareTer) {
this.terResult.append$C(String.fromCharCode((terOrder + 1)));
}} else {
if (compareSec && secOrder != 0 ) this.secResult.append$C(String.fromCharCode((secOrder + this.tables.getMaxSecOrder$() + 1 )));
if (compareTer && terOrder != 0 ) this.terResult.append$C(String.fromCharCode((terOrder + this.tables.getMaxTerOrder$() + 1 )));
}}
if (this.tables.isFrenchSec$()) {
if (preSecIgnore < this.secResult.length$()) {
$I$(1,"reverse$StringBuffer$I$I",[this.secResult, preSecIgnore, this.secResult.length$()]);
}$I$(1,"reverse$StringBuffer$I$I",[this.secResult, 0, this.secResult.length$()]);
}this.primResult.append$C("\u0000");
this.secResult.append$C("\u0000");
this.secResult.append$S(this.terResult.toString());
this.primResult.append$S(this.secResult.toString());
if (this.getStrength$() == 3) {
this.primResult.append$C("\u0000");
var mode=this.getDecomposition$();
if (mode == 1) {
this.primResult.append$S($I$(4,"normalize$CharSequence$java_text_Normalizer_Form",[source, $I$(3).NFD]));
} else if (mode == 2) {
this.primResult.append$S($I$(4,"normalize$CharSequence$java_text_Normalizer_Form",[source, $I$(3).NFKD]));
} else {
this.primResult.append$S(source);
}}return Clazz.new_([source, this.primResult.toString()],$I$(6,1).c$$S$S);
});

Clazz.newMeth(C$, 'clone$',  function () {
if (this.getClass$() === Clazz.getClass(C$) ) {
return Clazz.new_(C$.c$$java_text_RuleBasedCollator,[this]);
} else {
var result=C$.superclazz.prototype.clone$.apply(this, []);
result.primResult=null;
result.secResult=null;
result.terResult=null;
result.sourceCursor=null;
result.targetCursor=null;
return result;
}});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (obj == null ) return false;
if (!C$.superclazz.prototype.equals$O.apply(this, [obj])) return false;
var other=obj;
return (this.getRules$().equals$O(other.getRules$()));
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.getRules$().hashCode$();
});

Clazz.newMeth(C$, 'getTables$',  function () {
return this.tables;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:30 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
