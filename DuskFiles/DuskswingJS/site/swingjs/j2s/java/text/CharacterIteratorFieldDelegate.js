(function(){var P$=Clazz.newPackage("java.text"),I$=[[0,'java.util.ArrayList','java.text.AttributedString','java.text.AttributedCharacterIterator']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CharacterIteratorFieldDelegate", null, null, [['java.text.Format','java.text.Format.FieldDelegate']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['size'],'O',['attributedStrings','java.util.ArrayList']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.attributedStrings=Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'formatted$java_text_Format_Field$O$I$I$StringBuffer',  function (attr, value, start, end, buffer) {
if (start != end) {
if (start < this.size) {
var index=this.size;
var asIndex=this.attributedStrings.size$() - 1;
while (start < index){
var as=this.attributedStrings.get$I(asIndex--);
var newIndex=index - as.length$();
var aStart=Math.max(0, start - newIndex);
as.addAttribute$java_text_AttributedCharacterIterator_Attribute$O$I$I(attr, value, aStart, Math.min(end - start, as.length$() - aStart) + aStart);
index=newIndex;
}
}if (this.size < start) {
this.attributedStrings.add$O(Clazz.new_([buffer.substring$I$I(this.size, start)],$I$(2,1).c$$S));
this.size=start;
}if (this.size < end) {
var aStart=Math.max(start, this.size);
var string=Clazz.new_([buffer.substring$I$I(aStart, end)],$I$(2,1).c$$S);
string.addAttribute$java_text_AttributedCharacterIterator_Attribute$O(attr, value);
this.attributedStrings.add$O(string);
this.size=end;
}}});

Clazz.newMeth(C$, 'formatted$I$java_text_Format_Field$O$I$I$StringBuffer',  function (fieldID, attr, value, start, end, buffer) {
this.formatted$java_text_Format_Field$O$I$I$StringBuffer(attr, value, start, end, buffer);
});

Clazz.newMeth(C$, 'getIterator$S',  function (string) {
if (string.length$() > this.size) {
this.attributedStrings.add$O(Clazz.new_([string.substring$I(this.size)],$I$(2,1).c$$S));
this.size=string.length$();
}var iCount=this.attributedStrings.size$();
var iterators=Clazz.array($I$(3), [iCount]);
for (var counter=0; counter < iCount; counter++) {
iterators[counter]=(this.attributedStrings.get$I(counter)).getIterator$();
}
return Clazz.new_($I$(2,1).c$$java_text_AttributedCharacterIteratorA,[iterators]).getIterator$();
});

Clazz.newMeth(C$, 'formatted$java_text_Format_Field$O$I$I$SA',  function (attr, value, start, end, buffer) {
if (start != end) {
if (start < this.size) {
var index=this.size;
var asIndex=this.attributedStrings.size$() - 1;
while (start < index){
var as=this.attributedStrings.get$I(asIndex--);
var newIndex=index - as.length$();
var aStart=Math.max(0, start - newIndex);
as.addAttribute$java_text_AttributedCharacterIterator_Attribute$O$I$I(attr, value, aStart, Math.min(end - start, as.length$() - aStart) + aStart);
index=newIndex;
}
}if (this.size < start) {
this.attributedStrings.add$O(Clazz.new_([buffer[0].substring$I$I(this.size, start)],$I$(2,1).c$$S));
this.size=start;
}if (this.size < end) {
var aStart=Math.max(start, this.size);
var string=Clazz.new_([buffer[0].substring$I$I(aStart, end)],$I$(2,1).c$$S);
string.addAttribute$java_text_AttributedCharacterIterator_Attribute$O(attr, value);
this.attributedStrings.add$O(string);
this.size=end;
}}});

Clazz.newMeth(C$, 'formatted$I$java_text_Format_Field$O$I$I$SA',  function (fieldID, attr, value, start, end, buffer) {
this.formatted$java_text_Format_Field$O$I$I$SA(attr, value, start, end, buffer);
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:29 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
