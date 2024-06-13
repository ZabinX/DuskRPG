(function(){var P$=Clazz.newPackage("sun.util.locale.provider"),p$1={},I$=[[0,'Error','sun.text.CompactByteArray','sun.text.SupplementaryCharacterData','java.io.BufferedInputStream','StringBuilder','java.text.StringCharacterIterator',['sun.util.locale.provider.RuleBasedBreakIterator','.SafeCharIterator']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RuleBasedBreakIterator", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.text.BreakIterator');
C$.$classes$=[['SafeCharIterator',26]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.charCategoryTable=null;
this.supplementaryCharCategoryTable=null;
this.stateTable=null;
this.backwardsStateTable=null;
this.endStates=null;
this.lookaheadStates=null;
this.additionalData=null;
this.text=null;
this.cachedLastKnownBreak=-1;
},1);

C$.$fields$=[['I',['numCategories','cachedLastKnownBreak'],'J',['checksum'],'O',['charCategoryTable','sun.text.CompactByteArray','supplementaryCharCategoryTable','sun.text.SupplementaryCharacterData','stateTable','short[]','+backwardsStateTable','endStates','boolean[]','+lookaheadStates','additionalData','byte[]','text','java.text.CharacterIterator']]
,['I',['LABEL_LENGTH'],'O',['LABEL','byte[]']]]

Clazz.newMeth(C$, 'c$$S',  function (datafile) {
Clazz.super_(C$, this);
this.readTables$S(datafile);
}, 1);

Clazz.newMeth(C$, 'readTables$S',  function (datafile) {
var buffer=this.readFile$S(datafile);
var stateTableLength=C$.getInt$BA$I(buffer, 0);
var backwardsStateTableLength=C$.getInt$BA$I(buffer, 4);
var endStatesLength=C$.getInt$BA$I(buffer, 8);
var lookaheadStatesLength=C$.getInt$BA$I(buffer, 12);
var BMPdataLength=C$.getInt$BA$I(buffer, 16);
var nonBMPdataLength=C$.getInt$BA$I(buffer, 20);
var additionalDataLength=C$.getInt$BA$I(buffer, 24);
this.checksum=C$.getLong$BA$I(buffer, 28);
this.stateTable=Clazz.array(Short.TYPE, [stateTableLength]);
var offset=36;
for (var i=0; i < stateTableLength; i++, offset+=2) {
this.stateTable[i]=C$.getShort$BA$I(buffer, offset);
}
this.backwardsStateTable=Clazz.array(Short.TYPE, [backwardsStateTableLength]);
for (var i=0; i < backwardsStateTableLength; i++, offset+=2) {
this.backwardsStateTable[i]=C$.getShort$BA$I(buffer, offset);
}
this.endStates=Clazz.array(Boolean.TYPE, [endStatesLength]);
for (var i=0; i < endStatesLength; i++, offset++) {
this.endStates[i]=buffer[offset] == 1;
}
this.lookaheadStates=Clazz.array(Boolean.TYPE, [lookaheadStatesLength]);
for (var i=0; i < lookaheadStatesLength; i++, offset++) {
this.lookaheadStates[i]=buffer[offset] == 1;
}
var temp1=Clazz.array(Short.TYPE, [512]);
for (var i=0; i < 512; i++, offset+=2) {
temp1[i]=C$.getShort$BA$I(buffer, offset);
}
var temp2=Clazz.array(Byte.TYPE, [BMPdataLength]);
System.arraycopy$O$I$O$I$I(buffer, offset, temp2, 0, BMPdataLength);
offset+=BMPdataLength;
this.charCategoryTable=Clazz.new_($I$(2,1).c$$HA$BA,[temp1, temp2]);
var temp3=Clazz.array(Integer.TYPE, [nonBMPdataLength]);
for (var i=0; i < nonBMPdataLength; i++, offset+=4) {
temp3[i]=C$.getInt$BA$I(buffer, offset);
}
this.supplementaryCharCategoryTable=Clazz.new_($I$(3,1).c$$IA,[temp3]);
if (additionalDataLength > 0) {
this.additionalData=Clazz.array(Byte.TYPE, [additionalDataLength]);
System.arraycopy$O$I$O$I$I(buffer, offset, this.additionalData, 0, additionalDataLength);
}this.numCategories=(this.stateTable.length/this.endStates.length|0);
});

Clazz.newMeth(C$, 'readFile$S',  function (datafile) {
var is;
is=Clazz.new_([this.getClass$().getResourceAsStream$S("/sun/text/resources/" + datafile)],$I$(4,1).c$$java_io_InputStream);
var offset=0;
var len=C$.LABEL_LENGTH + 5;
var buf=Clazz.array(Byte.TYPE, [len]);
if (is.read$BA(buf) != len) {
throw Clazz.new_(Clazz.load('java.util.MissingResourceException').c$$S$S$S,["Wrong header length", datafile, ""]);
}for (var i=0; i < C$.LABEL_LENGTH; i++, offset++) {
if (buf[offset] != C$.LABEL[offset]) {
throw Clazz.new_(Clazz.load('java.util.MissingResourceException').c$$S$S$S,["Wrong magic number", datafile, ""]);
}}
if (buf[offset] != 1) {
throw Clazz.new_(Clazz.load('java.util.MissingResourceException').c$$S$S$S,["Unsupported version(" + buf[offset] + ")" , datafile, ""]);
}len=C$.getInt$BA$I(buf, ++offset);
buf=Clazz.array(Byte.TYPE, [len]);
if (is.read$BA(buf) != len) {
throw Clazz.new_(Clazz.load('java.util.MissingResourceException').c$$S$S$S,["Wrong data length", datafile, ""]);
}is.close$();
return buf;
});

Clazz.newMeth(C$, 'getAdditionalData$',  function () {
return this.additionalData;
});

Clazz.newMeth(C$, 'setAdditionalData$BA',  function (b) {
this.additionalData=b;
});

Clazz.newMeth(C$, 'clone$',  function () {
var result=C$.superclazz.prototype.clone$.apply(this, []);
if (this.text != null ) {
result.text=this.text.clone$();
}return result;
});

Clazz.newMeth(C$, 'equals$O',  function (that) {
try {
if (that == null ) {
return false;
}var other=that;
if (Long.$ne(this.checksum,other.checksum )) {
return false;
}if (this.text == null ) {
return other.text == null ;
} else {
return this.text.equals$O(other.text);
}} catch (e) {
if (Clazz.exceptionOf(e,"ClassCastException")){
return false;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'toString',  function () {
var sb=Clazz.new_($I$(5,1));
sb.append$C("[");
sb.append$S("checksum=0x");
sb.append$S(Long.toHexString$J(this.checksum));
sb.append$C("]");
return sb.toString();
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return Long.$ival(this.checksum);
});

Clazz.newMeth(C$, 'first$',  function () {
var t=this.getText$();
t.first$();
return t.getIndex$();
});

Clazz.newMeth(C$, 'last$',  function () {
var t=this.getText$();
t.setIndex$I(t.getEndIndex$());
return t.getIndex$();
});

Clazz.newMeth(C$, 'next$I',  function (n) {
var result=this.current$();
while (n > 0){
result=this.handleNext$();
--n;
}
while (n < 0){
result=this.previous$();
++n;
}
return result;
});

Clazz.newMeth(C$, 'next$',  function () {
return this.handleNext$();
});

Clazz.newMeth(C$, 'previous$',  function () {
var text=this.getText$();
if (this.current$() == text.getBeginIndex$()) {
return -1;
}var start=this.current$();
var lastResult=this.cachedLastKnownBreak;
if (lastResult >= start || lastResult <= -1 ) {
p$1.getPrevious.apply(this, []);
lastResult=this.handlePrevious$();
} else {
text.setIndex$I(lastResult);
}var result=lastResult;
while (result != -1 && result < start ){
lastResult=result;
result=this.handleNext$();
}
text.setIndex$I(lastResult);
this.cachedLastKnownBreak=lastResult;
return lastResult;
});

Clazz.newMeth(C$, 'getPrevious',  function () {
var c2=this.text.previous$();
if (Character.isLowSurrogate$C(c2) && this.text.getIndex$() > this.text.getBeginIndex$() ) {
var c1=this.text.previous$();
if (Character.isHighSurrogate$C(c1)) {
return Character.toCodePoint$C$C(c1, c2);
} else {
this.text.next$();
}}return c2.$c();
}, p$1);

Clazz.newMeth(C$, 'getCurrent$',  function () {
var c1=this.text.current$();
if (Character.isHighSurrogate$C(c1) && this.text.getIndex$() < this.text.getEndIndex$() ) {
var c2=this.text.next$();
this.text.previous$();
if (Character.isLowSurrogate$C(c2)) {
return Character.toCodePoint$C$C(c1, c2);
}}return c1.$c();
});

Clazz.newMeth(C$, 'getCurrentCodePointCount',  function () {
var c1=this.text.current$();
if (Character.isHighSurrogate$C(c1) && this.text.getIndex$() < this.text.getEndIndex$() ) {
var c2=this.text.next$();
this.text.previous$();
if (Character.isLowSurrogate$C(c2)) {
return 2;
}}return 1;
}, p$1);

Clazz.newMeth(C$, 'getNext$',  function () {
var index=this.text.getIndex$();
var endIndex=this.text.getEndIndex$();
if (index == endIndex || (index+=p$1.getCurrentCodePointCount.apply(this, [])) >= endIndex ) {
return "\uffff".$c();
}this.text.setIndex$I(index);
return this.getCurrent$();
});

Clazz.newMeth(C$, 'getNextIndex',  function () {
var index=this.text.getIndex$() + p$1.getCurrentCodePointCount.apply(this, []);
var endIndex=this.text.getEndIndex$();
if (index > endIndex) {
return endIndex;
} else {
return index;
}}, p$1);

Clazz.newMeth(C$, 'checkOffset$I$java_text_CharacterIterator',  function (offset, text) {
if (offset < text.getBeginIndex$() || offset > text.getEndIndex$() ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["offset out of bounds"]);
}}, 1);

Clazz.newMeth(C$, 'following$I',  function (offset) {
var text=this.getText$();
C$.checkOffset$I$java_text_CharacterIterator(offset, text);
text.setIndex$I(offset);
if (offset == text.getBeginIndex$()) {
this.cachedLastKnownBreak=this.handleNext$();
return this.cachedLastKnownBreak;
}var result=this.cachedLastKnownBreak;
if (result >= offset || result <= -1 ) {
result=this.handlePrevious$();
} else {
text.setIndex$I(result);
}while (result != -1 && result <= offset ){
result=this.handleNext$();
}
this.cachedLastKnownBreak=result;
return result;
});

Clazz.newMeth(C$, 'preceding$I',  function (offset) {
var text=this.getText$();
C$.checkOffset$I$java_text_CharacterIterator(offset, text);
text.setIndex$I(offset);
return this.previous$();
});

Clazz.newMeth(C$, 'isBoundary$I',  function (offset) {
var text=this.getText$();
C$.checkOffset$I$java_text_CharacterIterator(offset, text);
if (offset == text.getBeginIndex$()) {
return true;
} else {
return this.following$I(offset - 1) == offset;
}});

Clazz.newMeth(C$, 'current$',  function () {
return this.getText$().getIndex$();
});

Clazz.newMeth(C$, 'getText$',  function () {
if (this.text == null ) {
this.text=Clazz.new_($I$(6,1).c$$S,[""]);
}return this.text;
});

Clazz.newMeth(C$, 'setText$java_text_CharacterIterator',  function (newText) {
var end=newText.getEndIndex$();
var goodIterator;
try {
newText.setIndex$I(end);
goodIterator=newText.getIndex$() == end;
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
goodIterator=false;
} else {
throw e;
}
}
if (goodIterator) {
this.text=newText;
} else {
this.text=Clazz.new_($I$(7,1).c$$java_text_CharacterIterator,[newText]);
}this.text.first$();
this.cachedLastKnownBreak=-1;
});

Clazz.newMeth(C$, 'handleNext$',  function () {
var text=this.getText$();
if (text.getIndex$() == text.getEndIndex$()) {
return -1;
}var result=p$1.getNextIndex.apply(this, []);
var lookaheadResult=0;
var state=1;
var category;
var c=this.getCurrent$();
while (c != 65535  && state != 0 ){
category=this.lookupCategory$I(c);
if (category != -1) {
state=this.lookupState$I$I(state, category);
}if (this.lookaheadStates[state]) {
if (this.endStates[state]) {
result=lookaheadResult;
} else {
lookaheadResult=p$1.getNextIndex.apply(this, []);
}} else {
if (this.endStates[state]) {
result=p$1.getNextIndex.apply(this, []);
}}c=this.getNext$();
}
if (c == 65535  && lookaheadResult == text.getEndIndex$() ) {
result=lookaheadResult;
}text.setIndex$I(result);
return result;
});

Clazz.newMeth(C$, 'handlePrevious$',  function () {
var text=this.getText$();
var state=1;
var category=0;
var lastCategory=0;
var c=this.getCurrent$();
while (c != 65535  && state != 0 ){
lastCategory=category;
category=this.lookupCategory$I(c);
if (category != -1) {
state=this.lookupBackwardState$I$I(state, category);
}c=p$1.getPrevious.apply(this, []);
}
if (c != 65535 ) {
if (lastCategory != -1) {
this.getNext$();
this.getNext$();
} else {
this.getNext$();
}}return text.getIndex$();
});

Clazz.newMeth(C$, 'lookupCategory$I',  function (c) {
if (c < 65536) {
return this.charCategoryTable.elementAt$C(String.fromCharCode(c));
} else {
return this.supplementaryCharCategoryTable.getValue$I(c);
}});

Clazz.newMeth(C$, 'lookupState$I$I',  function (state, category) {
return this.stateTable[state * this.numCategories + category];
});

Clazz.newMeth(C$, 'lookupBackwardState$I$I',  function (state, category) {
return this.backwardsStateTable[state * this.numCategories + category];
});

Clazz.newMeth(C$, 'getLong$BA$I',  function (buf, offset) {
var num=buf[offset] & 255;
for (var i=1; i < 8; i++) {
num=Long.$or(Long.$sl(num,8),(buf[offset + i] & 255));
}
return num;
}, 1);

Clazz.newMeth(C$, 'getInt$BA$I',  function (buf, offset) {
var num=buf[offset] & 255;
for (var i=1; i < 4; i++) {
num=num << 8 | (buf[offset + i] & 255);
}
return num;
}, 1);

Clazz.newMeth(C$, 'getShort$BA$I',  function (buf, offset) {
var num=($s$[0] = (buf[offset] & 255), $s$[0]);
num=($s$[0] = (num << 8 | (buf[offset + 1] & 255)), $s$[0]);
return num;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.LABEL=Clazz.array(Byte.TYPE, -1, [66, 73, 100, 97, 116, 97, 0]);
C$.LABEL_LENGTH=C$.LABEL.length;
};
var $s$ = new Int16Array(1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.RuleBasedBreakIterator, "SafeCharIterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, ['java.text.CharacterIterator', 'Cloneable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['rangeStart','rangeLimit','currentIndex'],'O',['base','java.text.CharacterIterator']]]

Clazz.newMeth(C$, 'c$$java_text_CharacterIterator',  function (base) {
;C$.$init$.apply(this);
this.base=base;
this.rangeStart=base.getBeginIndex$();
this.rangeLimit=base.getEndIndex$();
this.currentIndex=base.getIndex$();
}, 1);

Clazz.newMeth(C$, 'first$',  function () {
return this.setIndex$I(this.rangeStart);
});

Clazz.newMeth(C$, 'last$',  function () {
return this.setIndex$I(this.rangeLimit - 1);
});

Clazz.newMeth(C$, 'current$',  function () {
if (this.currentIndex < this.rangeStart || this.currentIndex >= this.rangeLimit ) {
return "\uffff";
} else {
return this.base.setIndex$I(this.currentIndex);
}});

Clazz.newMeth(C$, 'next$',  function () {
++this.currentIndex;
if (this.currentIndex >= this.rangeLimit) {
this.currentIndex=this.rangeLimit;
return "\uffff";
} else {
return this.base.setIndex$I(this.currentIndex);
}});

Clazz.newMeth(C$, 'previous$',  function () {
--this.currentIndex;
if (this.currentIndex < this.rangeStart) {
this.currentIndex=this.rangeStart;
return "\uffff";
} else {
return this.base.setIndex$I(this.currentIndex);
}});

Clazz.newMeth(C$, 'setIndex$I',  function (i) {
if (i < this.rangeStart || i > this.rangeLimit ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid position"]);
}this.currentIndex=i;
return this.current$();
});

Clazz.newMeth(C$, 'getBeginIndex$',  function () {
return this.rangeStart;
});

Clazz.newMeth(C$, 'getEndIndex$',  function () {
return this.rangeLimit;
});

Clazz.newMeth(C$, 'getIndex$',  function () {
return this.currentIndex;
});

Clazz.newMeth(C$, 'clone$',  function () {
var copy=null;
try {
copy=Clazz.clone(this);
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(1,1).c$$S,["Clone not supported: " + e]);
} else {
throw e;
}
}
var copyOfBase=this.base.clone$();
copy.base=copyOfBase;
return copy;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:57 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
