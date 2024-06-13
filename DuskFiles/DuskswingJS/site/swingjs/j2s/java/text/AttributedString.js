(function(){var P$=Clazz.newPackage("java.text"),p$1={},p$2={},I$=[[0,'InternalError','java.text.AttributedString','java.util.Hashtable',['java.text.AttributedString','.AttributeMap'],'java.util.HashSet','java.text.AttributeEntry','StringBuffer','java.util.Vector',['java.text.AttributedString','.AttributedStringIterator']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AttributedString", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['AttributedStringIterator',18],['AttributeMap',18]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['runArraySize','runCount'],'S',['text'],'O',['runStarts','int[]','runAttributes','java.util.Vector[]','+runAttributeValues']]]

Clazz.newMeth(C$, 'c$$java_text_AttributedCharacterIteratorA',  function (iterators) {
;C$.$init$.apply(this);
if (iterators == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["Iterators must not be null"]);
}if (iterators.length == 0) {
this.text="";
} else {
var buffer=Clazz.new_($I$(7,1));
for (var counter=0; counter < iterators.length; counter++) {
p$2.appendContents$StringBuffer$java_text_CharacterIterator.apply(this, [buffer, iterators[counter]]);
}
this.text=buffer.toString();
if (this.text.length$() > 0) {
var offset=0;
var last=null;
for (var counter=0; counter < iterators.length; counter++) {
var iterator=iterators[counter];
var start=iterator.getBeginIndex$();
var end=iterator.getEndIndex$();
var index=start;
while (index < end){
iterator.setIndex$I(index);
var attrs=iterator.getAttributes$();
if (C$.mapsDiffer$java_util_Map$java_util_Map(last, attrs)) {
p$2.setAttributes$java_util_Map$I.apply(this, [attrs, index - start + offset]);
}last=attrs;
index=iterator.getRunLimit$();
}
offset+=(end - start);
}
}}}, 1);

Clazz.newMeth(C$, 'c$$S',  function (text) {
;C$.$init$.apply(this);
if (text == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}this.text=text;
}, 1);

Clazz.newMeth(C$, 'c$$S$java_util_Map',  function (text, attributes) {
;C$.$init$.apply(this);
if (text == null  || attributes == null  ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}this.text=text;
if (text.length$() == 0) {
if (attributes.isEmpty$()) return;
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Can\'t add attribute to 0-length text"]);
}var attributeCount=attributes.size$();
if (attributeCount > 0) {
p$2.createRunAttributeDataVectors.apply(this, []);
var newRunAttributes=Clazz.new_($I$(8,1).c$$I,[attributeCount]);
var newRunAttributeValues=Clazz.new_($I$(8,1).c$$I,[attributeCount]);
this.runAttributes[0]=newRunAttributes;
this.runAttributeValues[0]=newRunAttributeValues;
var iterator=attributes.entrySet$().iterator$();
while (iterator.hasNext$()){
var entry=iterator.next$();
newRunAttributes.addElement$O(entry.getKey$());
newRunAttributeValues.addElement$O(entry.getValue$());
}
}}, 1);

Clazz.newMeth(C$, 'c$$java_text_AttributedCharacterIterator',  function (text) {
C$.c$$java_text_AttributedCharacterIterator$I$I$java_text_AttributedCharacterIterator_AttributeA.apply(this, [text, text.getBeginIndex$(), text.getEndIndex$(), null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_text_AttributedCharacterIterator$I$I',  function (text, beginIndex, endIndex) {
C$.c$$java_text_AttributedCharacterIterator$I$I$java_text_AttributedCharacterIterator_AttributeA.apply(this, [text, beginIndex, endIndex, null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_text_AttributedCharacterIterator$I$I$java_text_AttributedCharacterIterator_AttributeA',  function (text, beginIndex, endIndex, attributes) {
;C$.$init$.apply(this);
if (text == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}var textBeginIndex=text.getBeginIndex$();
var textEndIndex=text.getEndIndex$();
if (beginIndex < textBeginIndex || endIndex > textEndIndex  || beginIndex > endIndex ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid substring range"]);
var textBuffer=Clazz.new_($I$(7,1));
text.setIndex$I(beginIndex);
for (var c=text.current$(); text.getIndex$() < endIndex; c=text.next$()) textBuffer.append$C(c);

this.text=textBuffer.toString();
if (beginIndex == endIndex) return;
var keys=Clazz.new_($I$(5,1));
if (attributes == null ) {
keys.addAll$java_util_Collection(text.getAllAttributeKeys$());
} else {
for (var i=0; i < attributes.length; i++) keys.add$O(attributes[i]);

keys.retainAll$java_util_Collection(text.getAllAttributeKeys$());
}if (keys.isEmpty$()) return;
var itr=keys.iterator$();
while (itr.hasNext$()){
var attributeKey=itr.next$();
text.setIndex$I(textBeginIndex);
while (text.getIndex$() < endIndex){
var start=text.getRunStart$java_text_AttributedCharacterIterator_Attribute(attributeKey);
var limit=text.getRunLimit$java_text_AttributedCharacterIterator_Attribute(attributeKey);
var value=text.getAttribute$java_text_AttributedCharacterIterator_Attribute(attributeKey);
if (value != null ) {
if (Clazz.instanceOf(value, "java.text.Annotation")) {
if (start >= beginIndex && limit <= endIndex ) {
this.addAttribute$java_text_AttributedCharacterIterator_Attribute$O$I$I(attributeKey, value, start - beginIndex, limit - beginIndex);
} else {
if (limit > endIndex) break;
}} else {
if (start >= endIndex) break;
if (limit > beginIndex) {
if (start < beginIndex) start=beginIndex;
if (limit > endIndex) limit=endIndex;
if (start != limit) {
this.addAttribute$java_text_AttributedCharacterIterator_Attribute$O$I$I(attributeKey, value, start - beginIndex, limit - beginIndex);
}}}}text.setIndex$I(limit);
}
}
}, 1);

Clazz.newMeth(C$, 'addAttribute$java_text_AttributedCharacterIterator_Attribute$O',  function (attribute, value) {
if (attribute == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}var len=this.length$();
if (len == 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Can\'t add attribute to 0-length text"]);
}p$2.addAttributeImpl$java_text_AttributedCharacterIterator_Attribute$O$I$I.apply(this, [attribute, value, 0, len]);
});

Clazz.newMeth(C$, 'addAttribute$java_text_AttributedCharacterIterator_Attribute$O$I$I',  function (attribute, value, beginIndex, endIndex) {
if (attribute == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}if (beginIndex < 0 || endIndex > this.length$()  || beginIndex >= endIndex ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid substring range"]);
}p$2.addAttributeImpl$java_text_AttributedCharacterIterator_Attribute$O$I$I.apply(this, [attribute, value, beginIndex, endIndex]);
});

Clazz.newMeth(C$, 'addAttributes$java_util_Map$I$I',  function (attributes, beginIndex, endIndex) {
if (attributes == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}if (beginIndex < 0 || endIndex > this.length$()  || beginIndex > endIndex ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid substring range"]);
}if (beginIndex == endIndex) {
if (attributes.isEmpty$()) return;
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Can\'t add attribute to 0-length text"]);
}if (this.runCount == 0) {
p$2.createRunAttributeDataVectors.apply(this, []);
}var beginRunIndex=p$2.ensureRunBreak$I.apply(this, [beginIndex]);
var endRunIndex=p$2.ensureRunBreak$I.apply(this, [endIndex]);
var iterator=attributes.entrySet$().iterator$();
while (iterator.hasNext$()){
var entry=iterator.next$();
p$2.addAttributeRunData$java_text_AttributedCharacterIterator_Attribute$O$I$I.apply(this, [entry.getKey$(), entry.getValue$(), beginRunIndex, endRunIndex]);
}
});

Clazz.newMeth(C$, 'addAttributeImpl$java_text_AttributedCharacterIterator_Attribute$O$I$I',  function (attribute, value, beginIndex, endIndex) {
if (this.runCount == 0) {
p$2.createRunAttributeDataVectors.apply(this, []);
}var beginRunIndex=p$2.ensureRunBreak$I.apply(this, [beginIndex]);
var endRunIndex=p$2.ensureRunBreak$I.apply(this, [endIndex]);
p$2.addAttributeRunData$java_text_AttributedCharacterIterator_Attribute$O$I$I.apply(this, [attribute, value, beginRunIndex, endRunIndex]);
}, p$2);

Clazz.newMeth(C$, 'createRunAttributeDataVectors',  function () {
var newRunStarts=Clazz.array(Integer.TYPE, [10]);
var newRunAttributes=Clazz.array($I$(8), [10]);
var newRunAttributeValues=Clazz.array($I$(8), [10]);
this.runStarts=newRunStarts;
this.runAttributes=newRunAttributes;
this.runAttributeValues=newRunAttributeValues;
this.runArraySize=10;
this.runCount=1;
}, p$2);

Clazz.newMeth(C$, 'ensureRunBreak$I',  function (offset) {
return p$2.ensureRunBreak$I$Z.apply(this, [offset, true]);
}, p$2);

Clazz.newMeth(C$, 'ensureRunBreak$I$Z',  function (offset, copyAttrs) {
if (offset == this.length$()) {
return this.runCount;
}var runIndex=0;
while (runIndex < this.runCount && this.runStarts[runIndex] < offset ){
++runIndex;
}
if (runIndex < this.runCount && this.runStarts[runIndex] == offset ) {
return runIndex;
}if (this.runCount == this.runArraySize) {
var newArraySize=this.runArraySize + 10;
var newRunStarts=Clazz.array(Integer.TYPE, [newArraySize]);
var newRunAttributes=Clazz.array($I$(8), [newArraySize]);
var newRunAttributeValues=Clazz.array($I$(8), [newArraySize]);
for (var i=0; i < this.runArraySize; i++) {
newRunStarts[i]=this.runStarts[i];
newRunAttributes[i]=this.runAttributes[i];
newRunAttributeValues[i]=this.runAttributeValues[i];
}
this.runStarts=newRunStarts;
this.runAttributes=newRunAttributes;
this.runAttributeValues=newRunAttributeValues;
this.runArraySize=newArraySize;
}var newRunAttributes=null;
var newRunAttributeValues=null;
if (copyAttrs) {
var oldRunAttributes=this.runAttributes[runIndex - 1];
var oldRunAttributeValues=this.runAttributeValues[runIndex - 1];
if (oldRunAttributes != null ) {
newRunAttributes=oldRunAttributes.clone$();
}if (oldRunAttributeValues != null ) {
newRunAttributeValues=oldRunAttributeValues.clone$();
}}++this.runCount;
for (var i=this.runCount - 1; i > runIndex; i--) {
this.runStarts[i]=this.runStarts[i - 1];
this.runAttributes[i]=this.runAttributes[i - 1];
this.runAttributeValues[i]=this.runAttributeValues[i - 1];
}
this.runStarts[runIndex]=offset;
this.runAttributes[runIndex]=newRunAttributes;
this.runAttributeValues[runIndex]=newRunAttributeValues;
return runIndex;
}, p$2);

Clazz.newMeth(C$, 'addAttributeRunData$java_text_AttributedCharacterIterator_Attribute$O$I$I',  function (attribute, value, beginRunIndex, endRunIndex) {
for (var i=beginRunIndex; i < endRunIndex; i++) {
var keyValueIndex=-1;
if (this.runAttributes[i] == null ) {
var newRunAttributes=Clazz.new_($I$(8,1));
var newRunAttributeValues=Clazz.new_($I$(8,1));
this.runAttributes[i]=newRunAttributes;
this.runAttributeValues[i]=newRunAttributeValues;
} else {
keyValueIndex=this.runAttributes[i].indexOf$O(attribute);
}if (keyValueIndex == -1) {
var oldSize=this.runAttributes[i].size$();
this.runAttributes[i].addElement$O(attribute);
try {
this.runAttributeValues[i].addElement$O(value);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this.runAttributes[i].setSize$I(oldSize);
this.runAttributeValues[i].setSize$I(oldSize);
} else {
throw e;
}
}
} else {
this.runAttributeValues[i].set$I$O(keyValueIndex, value);
}}
}, p$2);

Clazz.newMeth(C$, 'getIterator$',  function () {
return this.getIterator$java_text_AttributedCharacterIterator_AttributeA$I$I(null, 0, this.length$());
});

Clazz.newMeth(C$, 'getIterator$java_text_AttributedCharacterIterator_AttributeA',  function (attributes) {
return this.getIterator$java_text_AttributedCharacterIterator_AttributeA$I$I(attributes, 0, this.length$());
});

Clazz.newMeth(C$, 'getIterator$java_text_AttributedCharacterIterator_AttributeA$I$I',  function (attributes, beginIndex, endIndex) {
return Clazz.new_($I$(9,1).c$$java_text_AttributedCharacterIterator_AttributeA$I$I,[this, null, attributes, beginIndex, endIndex]);
});

Clazz.newMeth(C$, 'length$',  function () {
return this.text.length$();
});

Clazz.newMeth(C$, 'charAt$I',  function (index) {
return this.text.charAt$I(index);
}, p$2);

Clazz.newMeth(C$, 'getAttribute$java_text_AttributedCharacterIterator_Attribute$I',  function (attribute, runIndex) {
var currentRunAttributes=this.runAttributes[runIndex];
var currentRunAttributeValues=this.runAttributeValues[runIndex];
if (currentRunAttributes == null ) {
return null;
}var attributeIndex=currentRunAttributes.indexOf$O(attribute);
if (attributeIndex != -1) {
return currentRunAttributeValues.elementAt$I(attributeIndex);
} else {
return null;
}}, p$2);

Clazz.newMeth(C$, 'getAttributeCheckRange$java_text_AttributedCharacterIterator_Attribute$I$I$I',  function (attribute, runIndex, beginIndex, endIndex) {
var value=p$2.getAttribute$java_text_AttributedCharacterIterator_Attribute$I.apply(this, [attribute, runIndex]);
if (Clazz.instanceOf(value, "java.text.Annotation")) {
if (beginIndex > 0) {
var currIndex=runIndex;
var runStart=this.runStarts[currIndex];
while (runStart >= beginIndex && C$.valuesMatch$O$O(value, p$2.getAttribute$java_text_AttributedCharacterIterator_Attribute$I.apply(this, [attribute, currIndex - 1])) ){
--currIndex;
runStart=this.runStarts[currIndex];
}
if (runStart < beginIndex) {
return null;
}}var textLength=this.length$();
if (endIndex < textLength) {
var currIndex=runIndex;
var runLimit=(currIndex < this.runCount - 1) ? this.runStarts[currIndex + 1] : textLength;
while (runLimit <= endIndex && C$.valuesMatch$O$O(value, p$2.getAttribute$java_text_AttributedCharacterIterator_Attribute$I.apply(this, [attribute, currIndex + 1])) ){
++currIndex;
runLimit=(currIndex < this.runCount - 1) ? this.runStarts[currIndex + 1] : textLength;
}
if (runLimit > endIndex) {
return null;
}}}return value;
}, p$2);

Clazz.newMeth(C$, 'attributeValuesMatch$java_util_Set$I$I',  function (attributes, runIndex1, runIndex2) {
var iterator=attributes.iterator$();
while (iterator.hasNext$()){
var key=iterator.next$();
if (!C$.valuesMatch$O$O(p$2.getAttribute$java_text_AttributedCharacterIterator_Attribute$I.apply(this, [key, runIndex1]), p$2.getAttribute$java_text_AttributedCharacterIterator_Attribute$I.apply(this, [key, runIndex2]))) {
return false;
}}
return true;
}, p$2);

Clazz.newMeth(C$, 'valuesMatch$O$O',  function (value1, value2) {
if (value1 == null ) {
return value2 == null ;
} else {
return value1.equals$O(value2);
}}, 1);

Clazz.newMeth(C$, 'appendContents$StringBuffer$java_text_CharacterIterator',  function (buf, iterator) {
var index=iterator.getBeginIndex$();
var end=iterator.getEndIndex$();
while (index < end){
iterator.setIndex$I(index++);
buf.append$C(iterator.current$());
}
}, p$2);

Clazz.newMeth(C$, 'setAttributes$java_util_Map$I',  function (attrs, offset) {
if (this.runCount == 0) {
p$2.createRunAttributeDataVectors.apply(this, []);
}var index=p$2.ensureRunBreak$I$Z.apply(this, [offset, false]);
var size;
if (attrs != null  && (size=attrs.size$()) > 0 ) {
var runAttrs=Clazz.new_($I$(8,1).c$$I,[size]);
var runValues=Clazz.new_($I$(8,1).c$$I,[size]);
var iterator=attrs.entrySet$().iterator$();
while (iterator.hasNext$()){
var entry=iterator.next$();
runAttrs.add$O(entry.getKey$());
runValues.add$O(entry.getValue$());
}
this.runAttributes[index]=runAttrs;
this.runAttributeValues[index]=runValues;
}}, p$2);

Clazz.newMeth(C$, 'mapsDiffer$java_util_Map$java_util_Map',  function (last, attrs) {
if (last == null ) {
return (attrs != null  && attrs.size$() > 0 );
}return (!last.equals$O(attrs));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.AttributedString, "AttributedStringIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.text.AttributedCharacterIterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['beginIndex','endIndex','currentIndex','currentRunIndex','currentRunStart','currentRunLimit']]]

Clazz.newMeth(C$, 'c$$java_text_AttributedCharacterIterator_AttributeA$I$I',  function (attributes, beginIndex, endIndex) {
;C$.$init$.apply(this);
if (beginIndex < 0 || beginIndex > endIndex  || endIndex > this.b$['java.text.AttributedString'].length$.apply(this.b$['java.text.AttributedString'], []) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid substring range"]);
}this.beginIndex=beginIndex;
this.endIndex=endIndex;
this.currentIndex=beginIndex;
p$1.updateRunInfo.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (this === obj ) {
return true;
}if (!(Clazz.instanceOf(obj, "java.text.AttributedString.AttributedStringIterator"))) {
return false;
}var that=obj;
if (this.b$['java.text.AttributedString'] !== p$1.getString.apply(that, []) ) return false;
if (this.currentIndex != that.currentIndex || this.beginIndex != that.beginIndex  || this.endIndex != that.endIndex ) return false;
return true;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.b$['java.text.AttributedString'].text.hashCode$() ^ this.currentIndex ^ this.beginIndex ^ this.endIndex ;
});

Clazz.newMeth(C$, 'clone$',  function () {
try {
var other=Clazz.clone(this);
return other;
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(1,1));
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'first$',  function () {
return p$1.internalSetIndex$I.apply(this, [this.beginIndex]);
});

Clazz.newMeth(C$, 'last$',  function () {
if (this.endIndex == this.beginIndex) {
return p$1.internalSetIndex$I.apply(this, [this.endIndex]);
} else {
return p$1.internalSetIndex$I.apply(this, [this.endIndex - 1]);
}});

Clazz.newMeth(C$, 'current$',  function () {
if (this.currentIndex == this.endIndex) {
return "\uffff";
} else {
return p$2.charAt$I.apply(this.b$['java.text.AttributedString'], [this.currentIndex]);
}});

Clazz.newMeth(C$, 'next$',  function () {
if (this.currentIndex < this.endIndex) {
return p$1.internalSetIndex$I.apply(this, [this.currentIndex + 1]);
} else {
return "\uffff";
}});

Clazz.newMeth(C$, 'previous$',  function () {
if (this.currentIndex > this.beginIndex) {
return p$1.internalSetIndex$I.apply(this, [this.currentIndex - 1]);
} else {
return "\uffff";
}});

Clazz.newMeth(C$, 'setIndex$I',  function (position) {
if (position < this.beginIndex || position > this.endIndex ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid index"]);
return p$1.internalSetIndex$I.apply(this, [position]);
});

Clazz.newMeth(C$, 'getBeginIndex$',  function () {
return this.beginIndex;
});

Clazz.newMeth(C$, 'getEndIndex$',  function () {
return this.endIndex;
});

Clazz.newMeth(C$, 'getIndex$',  function () {
return this.currentIndex;
});

Clazz.newMeth(C$, 'getRunStart$',  function () {
return this.currentRunStart;
});

Clazz.newMeth(C$, 'getRunStart$java_text_AttributedCharacterIterator_Attribute',  function (attribute) {
if (this.currentRunStart == this.beginIndex || this.currentRunIndex == -1 ) {
return this.currentRunStart;
} else {
var value=this.getAttribute$java_text_AttributedCharacterIterator_Attribute(attribute);
var runStart=this.currentRunStart;
var runIndex=this.currentRunIndex;
while (runStart > this.beginIndex && $I$(2,"valuesMatch$O$O",[value, p$2.getAttribute$java_text_AttributedCharacterIterator_Attribute$I.apply(this.b$['java.text.AttributedString'], [attribute, runIndex - 1])]) ){
--runIndex;
runStart=this.b$['java.text.AttributedString'].runStarts[runIndex];
}
if (runStart < this.beginIndex) {
runStart=this.beginIndex;
}return runStart;
}});

Clazz.newMeth(C$, 'getRunStart$java_util_Set',  function (attributes) {
if (this.currentRunStart == this.beginIndex || this.currentRunIndex == -1 ) {
return this.currentRunStart;
} else {
var runStart=this.currentRunStart;
var runIndex=this.currentRunIndex;
while (runStart > this.beginIndex && p$2.attributeValuesMatch$java_util_Set$I$I.apply(this.b$['java.text.AttributedString'], [attributes, this.currentRunIndex, runIndex - 1]) ){
--runIndex;
runStart=this.b$['java.text.AttributedString'].runStarts[runIndex];
}
if (runStart < this.beginIndex) {
runStart=this.beginIndex;
}return runStart;
}});

Clazz.newMeth(C$, 'getRunLimit$',  function () {
return this.currentRunLimit;
});

Clazz.newMeth(C$, 'getRunLimit$java_text_AttributedCharacterIterator_Attribute',  function (attribute) {
if (this.currentRunLimit == this.endIndex || this.currentRunIndex == -1 ) {
return this.currentRunLimit;
} else {
var value=this.getAttribute$java_text_AttributedCharacterIterator_Attribute(attribute);
var runLimit=this.currentRunLimit;
var runIndex=this.currentRunIndex;
while (runLimit < this.endIndex && $I$(2,"valuesMatch$O$O",[value, p$2.getAttribute$java_text_AttributedCharacterIterator_Attribute$I.apply(this.b$['java.text.AttributedString'], [attribute, runIndex + 1])]) ){
++runIndex;
runLimit=runIndex < this.b$['java.text.AttributedString'].runCount - 1 ? this.b$['java.text.AttributedString'].runStarts[runIndex + 1] : this.endIndex;
}
if (runLimit > this.endIndex) {
runLimit=this.endIndex;
}return runLimit;
}});

Clazz.newMeth(C$, 'getRunLimit$java_util_Set',  function (attributes) {
if (this.currentRunLimit == this.endIndex || this.currentRunIndex == -1 ) {
return this.currentRunLimit;
} else {
var runLimit=this.currentRunLimit;
var runIndex=this.currentRunIndex;
while (runLimit < this.endIndex && p$2.attributeValuesMatch$java_util_Set$I$I.apply(this.b$['java.text.AttributedString'], [attributes, this.currentRunIndex, runIndex + 1]) ){
++runIndex;
runLimit=runIndex < this.b$['java.text.AttributedString'].runCount - 1 ? this.b$['java.text.AttributedString'].runStarts[runIndex + 1] : this.endIndex;
}
if (runLimit > this.endIndex) {
runLimit=this.endIndex;
}return runLimit;
}});

Clazz.newMeth(C$, 'getAttributes$',  function () {
if (this.b$['java.text.AttributedString'].runAttributes == null  || this.currentRunIndex == -1  || this.b$['java.text.AttributedString'].runAttributes[this.currentRunIndex] == null  ) {
return Clazz.new_($I$(3,1));
}return Clazz.new_($I$(4,1).c$$I$I$I,[this, null, this.currentRunIndex, this.beginIndex, this.endIndex]);
});

Clazz.newMeth(C$, 'getAllAttributeKeys$',  function () {
if (this.b$['java.text.AttributedString'].runAttributes == null ) {
return Clazz.new_($I$(5,1));
}{
var keys=Clazz.new_($I$(5,1));
var i=0;
while (i < this.b$['java.text.AttributedString'].runCount){
if (this.b$['java.text.AttributedString'].runStarts[i] < this.endIndex && (i == this.b$['java.text.AttributedString'].runCount - 1 || this.b$['java.text.AttributedString'].runStarts[i + 1] > this.beginIndex ) ) {
var currentRunAttributes=this.b$['java.text.AttributedString'].runAttributes[i];
if (currentRunAttributes != null ) {
var j=currentRunAttributes.size$();
while (j-- > 0){
keys.add$O(currentRunAttributes.get$I(j));
}
}}++i;
}
return keys;
}});

Clazz.newMeth(C$, 'getAttribute$java_text_AttributedCharacterIterator_Attribute',  function (attribute) {
var runIndex=this.currentRunIndex;
if (runIndex < 0) {
return null;
}return p$2.getAttributeCheckRange$java_text_AttributedCharacterIterator_Attribute$I$I$I.apply(this.b$['java.text.AttributedString'], [attribute, runIndex, this.beginIndex, this.endIndex]);
});

Clazz.newMeth(C$, 'getString',  function () {
return this.b$['java.text.AttributedString'];
}, p$1);

Clazz.newMeth(C$, 'internalSetIndex$I',  function (position) {
this.currentIndex=position;
if (position < this.currentRunStart || position >= this.currentRunLimit ) {
p$1.updateRunInfo.apply(this, []);
}if (this.currentIndex == this.endIndex) {
return "\uffff";
} else {
return p$2.charAt$I.apply(this.b$['java.text.AttributedString'], [position]);
}}, p$1);

Clazz.newMeth(C$, 'updateRunInfo',  function () {
if (this.currentIndex == this.endIndex) {
this.currentRunStart=this.currentRunLimit=this.endIndex;
this.currentRunIndex=-1;
} else {
{
var runIndex=-1;
while (runIndex < this.b$['java.text.AttributedString'].runCount - 1 && this.b$['java.text.AttributedString'].runStarts[runIndex + 1] <= this.currentIndex )++runIndex;

this.currentRunIndex=runIndex;
if (runIndex >= 0) {
this.currentRunStart=this.b$['java.text.AttributedString'].runStarts[runIndex];
if (this.currentRunStart < this.beginIndex) this.currentRunStart=this.beginIndex;
} else {
this.currentRunStart=this.beginIndex;
}if (runIndex < this.b$['java.text.AttributedString'].runCount - 1) {
this.currentRunLimit=this.b$['java.text.AttributedString'].runStarts[runIndex + 1];
if (this.currentRunLimit > this.endIndex) this.currentRunLimit=this.endIndex;
} else {
this.currentRunLimit=this.endIndex;
}}}}, p$1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AttributedString, "AttributeMap", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.util.AbstractMap');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['runIndex','beginIndex','endIndex']]]

Clazz.newMeth(C$, 'c$$I$I$I',  function (runIndex, beginIndex, endIndex) {
Clazz.super_(C$, this);
this.runIndex=runIndex;
this.beginIndex=beginIndex;
this.endIndex=endIndex;
}, 1);

Clazz.newMeth(C$, 'entrySet$',  function () {
var set=Clazz.new_($I$(5,1));
{
var size=this.b$['java.text.AttributedString'].runAttributes[this.runIndex].size$();
for (var i=0; i < size; i++) {
var key=this.b$['java.text.AttributedString'].runAttributes[this.runIndex].get$I(i);
var value=this.b$['java.text.AttributedString'].runAttributeValues[this.runIndex].get$I(i);
if (Clazz.instanceOf(value, "java.text.Annotation")) {
value=p$2.getAttributeCheckRange$java_text_AttributedCharacterIterator_Attribute$I$I$I.apply(this.b$['java.text.AttributedString'], [key, this.runIndex, this.beginIndex, this.endIndex]);
if (value == null ) {
continue;
}}var entry=Clazz.new_($I$(6,1).c$$java_text_AttributedCharacterIterator_Attribute$O,[key, value]);
set.add$O(entry);
}
}return set;
});

Clazz.newMeth(C$, 'get$O',  function (key) {
return p$2.getAttributeCheckRange$java_text_AttributedCharacterIterator_Attribute$I$I$I.apply(this.b$['java.text.AttributedString'], [key, this.runIndex, this.beginIndex, this.endIndex]);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:29 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
