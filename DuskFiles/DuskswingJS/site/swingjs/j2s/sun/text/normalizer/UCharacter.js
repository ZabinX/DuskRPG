(function(){var P$=Clazz.newPackage("sun.text.normalizer"),I$=[[0,'sun.text.normalizer.UCharacterProperty','sun.text.normalizer.UBiDiProps','sun.text.normalizer.UTF16']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UCharacter", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['NumericType',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['I',['PROPERTY_INITIAL_VALUE_'],'O',['PROPERTY_','sun.text.normalizer.UCharacterProperty','PROPERTY_TRIE_INDEX_','char[]','+PROPERTY_TRIE_DATA_','gBdp','sun.text.normalizer.UBiDiProps']]]

Clazz.newMeth(C$, 'digit$I$I',  function (ch, radix) {
var props=C$.getProperty$I(ch);
var value;
if (C$.getNumericType$I(props) == 1) {
value=$I$(1).getUnsignedValue$I(props);
} else {
value=C$.getEuropeanDigit$I(ch);
}return (0 <= value && value < radix ) ? value : -1;
}, 1);

Clazz.newMeth(C$, 'getDirection$I',  function (ch) {
return C$.gBdp.getClass$I(ch);
}, 1);

Clazz.newMeth(C$, 'getCodePoint$C$C',  function (lead, trail) {
if ($I$(3).isLeadSurrogate$C(lead) && $I$(3).isTrailSurrogate$C(trail) ) {
return $I$(1).getRawSupplementary$C$C(lead, trail);
}throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal surrogate characters"]);
}, 1);

Clazz.newMeth(C$, 'getAge$I',  function (ch) {
if (ch < 0 || ch > 1114111 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Codepoint out of bounds"]);
}return C$.PROPERTY_.getAge$I(ch);
}, 1);

Clazz.newMeth(C$, 'getEuropeanDigit$I',  function (ch) {
if ((ch > 122 && ch < 65313 ) || ch < 65  || (ch > 90 && ch < 97 )  || ch > 65370  || (ch > 65338 && ch < 65345 ) ) {
return -1;
}if (ch <= 122) {
return ch + 10 - ((ch <= 90) ? 65 : 97);
}if (ch <= 65338) {
return ch + 10 - 65313;
}return ch + 10 - 65345;
}, 1);

Clazz.newMeth(C$, 'getNumericType$I',  function (props) {
return (props & 224) >> 5;
}, 1);

Clazz.newMeth(C$, 'getProperty$I',  function (ch) {
if (ch < 55296 || (ch > 56319 && ch < 65536 ) ) {
try {
return C$.PROPERTY_TRIE_DATA_[((C$.PROPERTY_TRIE_INDEX_[ch >> 5]).$c() << 2) + (ch & 31)].$c();
} catch (e) {
if (Clazz.exceptionOf(e,"ArrayIndexOutOfBoundsException")){
return C$.PROPERTY_INITIAL_VALUE_;
} else {
throw e;
}
}
}if (ch <= 56319) {
return C$.PROPERTY_TRIE_DATA_[((C$.PROPERTY_TRIE_INDEX_[(320) + (ch >> 5)]).$c() << 2) + (ch & 31)].$c();
}if (ch <= 1114111) {
return C$.PROPERTY_.m_trie_.getSurrogateValue$C$C($I$(3).getLeadSurrogate$I(ch), String.fromCharCode((ch & 1023))).$c();
}return C$.PROPERTY_INITIAL_VALUE_;
}, 1);

C$.$static$=function(){C$.$static$=0;
{
try {
C$.PROPERTY_=$I$(1).getInstance$();
C$.PROPERTY_TRIE_INDEX_=C$.PROPERTY_.m_trieIndex_;
C$.PROPERTY_TRIE_DATA_=C$.PROPERTY_.m_trieData_;
C$.PROPERTY_INITIAL_VALUE_=C$.PROPERTY_.m_trieInitialValue_;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_(Clazz.load('java.util.MissingResourceException').c$$S$S$S,[e.getMessage$(), "", ""]);
} else {
throw e;
}
}
var bdp;
try {
bdp=$I$(2).getSingleton$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
bdp=$I$(2).getDummy$();
} else {
throw e;
}
}
C$.gBdp=bdp;
};
};
;
(function(){/*i*/var C$=Clazz.newInterface(P$.UCharacter, "NumericType", function(){
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:50 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
