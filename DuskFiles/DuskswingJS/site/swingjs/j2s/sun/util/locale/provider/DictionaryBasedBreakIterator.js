(function(){var P$=Clazz.newPackage("sun.util.locale.provider"),p$1={},I$=[[0,'sun.util.locale.provider.BreakDictionary','sun.util.locale.provider.RuleBasedBreakIterator','java.util.Stack','java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DictionaryBasedBreakIterator", null, 'sun.util.locale.provider.RuleBasedBreakIterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['dictionaryCharCount','positionInCache'],'O',['dictionary','sun.util.locale.provider.BreakDictionary','categoryFlags','boolean[]','cachedBreakPositions','int[]']]]

Clazz.newMeth(C$, 'c$$S$S',  function (dataFile, dictionaryFile) {
;C$.superclazz.c$$S.apply(this,[dataFile]);C$.$init$.apply(this);
var tmp=C$.superclazz.prototype.getAdditionalData$.apply(this, []);
if (tmp != null ) {
p$1.prepareCategoryFlags$BA.apply(this, [tmp]);
C$.superclazz.prototype.setAdditionalData$BA.apply(this, [null]);
}this.dictionary=Clazz.new_($I$(1,1).c$$S,[dictionaryFile]);
}, 1);

Clazz.newMeth(C$, 'prepareCategoryFlags$BA',  function (data) {
this.categoryFlags=Clazz.array(Boolean.TYPE, [data.length]);
for (var i=0; i < data.length; i++) {
this.categoryFlags[i]=(data[i] == 1) ? true : false;
}
}, p$1);

Clazz.newMeth(C$, 'setText$java_text_CharacterIterator',  function (newText) {
C$.superclazz.prototype.setText$java_text_CharacterIterator.apply(this, [newText]);
this.cachedBreakPositions=null;
this.dictionaryCharCount=0;
this.positionInCache=0;
});

Clazz.newMeth(C$, 'first$',  function () {
this.cachedBreakPositions=null;
this.dictionaryCharCount=0;
this.positionInCache=0;
return C$.superclazz.prototype.first$.apply(this, []);
});

Clazz.newMeth(C$, 'last$',  function () {
this.cachedBreakPositions=null;
this.dictionaryCharCount=0;
this.positionInCache=0;
return C$.superclazz.prototype.last$.apply(this, []);
});

Clazz.newMeth(C$, 'previous$',  function () {
var text=this.getText$();
if (this.cachedBreakPositions != null  && this.positionInCache > 0 ) {
--this.positionInCache;
text.setIndex$I(this.cachedBreakPositions[this.positionInCache]);
return this.cachedBreakPositions[this.positionInCache];
} else {
this.cachedBreakPositions=null;
var result=C$.superclazz.prototype.previous$.apply(this, []);
if (this.cachedBreakPositions != null ) {
this.positionInCache=this.cachedBreakPositions.length - 2;
}return result;
}});

Clazz.newMeth(C$, 'preceding$I',  function (offset) {
var text=this.getText$();
$I$(2).checkOffset$I$java_text_CharacterIterator(offset, text);
if (this.cachedBreakPositions == null  || offset <= this.cachedBreakPositions[0]  || offset > this.cachedBreakPositions[this.cachedBreakPositions.length - 1] ) {
this.cachedBreakPositions=null;
return C$.superclazz.prototype.preceding$I.apply(this, [offset]);
} else {
this.positionInCache=0;
while (this.positionInCache < this.cachedBreakPositions.length && offset > this.cachedBreakPositions[this.positionInCache] ){
++this.positionInCache;
}
--this.positionInCache;
text.setIndex$I(this.cachedBreakPositions[this.positionInCache]);
return text.getIndex$();
}});

Clazz.newMeth(C$, 'following$I',  function (offset) {
var text=this.getText$();
$I$(2).checkOffset$I$java_text_CharacterIterator(offset, text);
if (this.cachedBreakPositions == null  || offset < this.cachedBreakPositions[0]  || offset >= this.cachedBreakPositions[this.cachedBreakPositions.length - 1] ) {
this.cachedBreakPositions=null;
return C$.superclazz.prototype.following$I.apply(this, [offset]);
} else {
this.positionInCache=0;
while (this.positionInCache < this.cachedBreakPositions.length && offset >= this.cachedBreakPositions[this.positionInCache] ){
++this.positionInCache;
}
text.setIndex$I(this.cachedBreakPositions[this.positionInCache]);
return text.getIndex$();
}});

Clazz.newMeth(C$, 'handleNext$',  function () {
var text=this.getText$();
if (this.cachedBreakPositions == null  || this.positionInCache == this.cachedBreakPositions.length - 1 ) {
var startPos=text.getIndex$();
this.dictionaryCharCount=0;
var result=C$.superclazz.prototype.handleNext$.apply(this, []);
if (this.dictionaryCharCount > 1 && result - startPos > 1 ) {
p$1.divideUpDictionaryRange$I$I.apply(this, [startPos, result]);
} else {
this.cachedBreakPositions=null;
return result;
}}if (this.cachedBreakPositions != null ) {
++this.positionInCache;
text.setIndex$I(this.cachedBreakPositions[this.positionInCache]);
return this.cachedBreakPositions[this.positionInCache];
}return -9999;
});

Clazz.newMeth(C$, 'lookupCategory$I',  function (c) {
var result=C$.superclazz.prototype.lookupCategory$I.apply(this, [c]);
if (result != -1 && this.categoryFlags[result] ) {
++this.dictionaryCharCount;
}return result;
});

Clazz.newMeth(C$, 'divideUpDictionaryRange$I$I',  function (startPos, endPos) {
var text=this.getText$();
text.setIndex$I(startPos);
var c=this.getCurrent$();
var category=this.lookupCategory$I(c);
while (category == -1 || !this.categoryFlags[category] ){
c=this.getNext$();
category=this.lookupCategory$I(c);
}
var currentBreakPositions=Clazz.new_($I$(3,1));
var possibleBreakPositions=Clazz.new_($I$(3,1));
var wrongBreakPositions=Clazz.new_($I$(4,1));
var state=0;
var farthestEndPoint=text.getIndex$();
var bestBreakPositions=null;
c=this.getCurrent$();
while (true){
if (this.dictionary.getNextState$I$I(state, 0) == -1) {
possibleBreakPositions.push$O(Integer.valueOf$I(text.getIndex$()));
}state=this.dictionary.getNextStateFromCharacter$I$I(state, c);
if (state == -1) {
currentBreakPositions.push$O(Integer.valueOf$I(text.getIndex$()));
break;
} else if (state == 0 || text.getIndex$() >= endPos ) {
if (text.getIndex$() > farthestEndPoint) {
farthestEndPoint=text.getIndex$();
var currentBreakPositionsCopy=currentBreakPositions.clone$();
bestBreakPositions=currentBreakPositionsCopy;
}while (!possibleBreakPositions.isEmpty$() && wrongBreakPositions.contains$O(possibleBreakPositions.peek$()) ){
possibleBreakPositions.pop$();
}
if (possibleBreakPositions.isEmpty$()) {
if (bestBreakPositions != null ) {
currentBreakPositions=bestBreakPositions;
if (farthestEndPoint < endPos) {
text.setIndex$I(farthestEndPoint + 1);
} else {
break;
}} else {
if ((currentBreakPositions.size$() == 0 || currentBreakPositions.peek$().intValue$() != text.getIndex$() ) && text.getIndex$() != startPos ) {
currentBreakPositions.push$O( new Integer(text.getIndex$()));
}this.getNext$();
currentBreakPositions.push$O( new Integer(text.getIndex$()));
}} else {
var temp=possibleBreakPositions.pop$();
var temp2=null;
while (!currentBreakPositions.isEmpty$() && temp.intValue$() < currentBreakPositions.peek$().intValue$() ){
temp2=currentBreakPositions.pop$();
wrongBreakPositions.add$O(temp2);
}
currentBreakPositions.push$O(temp);
text.setIndex$I(currentBreakPositions.peek$().intValue$());
}c=this.getCurrent$();
if (text.getIndex$() >= endPos) {
break;
}} else {
c=this.getNext$();
}}
if (!currentBreakPositions.isEmpty$()) {
currentBreakPositions.pop$();
}currentBreakPositions.push$O(Integer.valueOf$I(endPos));
this.cachedBreakPositions=Clazz.array(Integer.TYPE, [currentBreakPositions.size$() + 1]);
this.cachedBreakPositions[0]=startPos;
for (var i=0; i < currentBreakPositions.size$(); i++) {
this.cachedBreakPositions[i + 1]=currentBreakPositions.elementAt$I(i).intValue$();
}
this.positionInCache=0;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:57 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
