(function(){var P$=Clazz.newPackage("javax.swing.text"),p$1={},I$=[[0,'javax.swing.text.ElementIterator','javax.swing.text.Segment']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AbstractWriter");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.indentLevel=0;
this.indentSpace=2;
this.doc=null;
this.maxLineLength=100;
this.currLength=0;
this.startOffset=0;
this.endOffset=0;
this.offsetIndent=0;
},1);

C$.$fields$=[['Z',['canWrapLines','isLineEmpty'],'I',['indentLevel','indentSpace','maxLineLength','currLength','startOffset','endOffset','offsetIndent'],'S',['lineSeparator'],'O',['it','javax.swing.text.ElementIterator','out','java.io.Writer','doc','javax.swing.text.Document','indentChars','char[]','+tempChars','+newlineChars','segment','javax.swing.text.Segment']]]

Clazz.newMeth(C$, 'c$$java_io_Writer$javax_swing_text_Document',  function (w, doc) {
C$.c$$java_io_Writer$javax_swing_text_Document$I$I.apply(this, [w, doc, 0, doc.getLength$()]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_Writer$javax_swing_text_Document$I$I',  function (w, doc, pos, len) {
;C$.$init$.apply(this);
this.doc=doc;
this.it=Clazz.new_([doc.getDefaultRootElement$()],$I$(1,1).c$$javax_swing_text_Element);
this.out=w;
this.startOffset=pos;
this.endOffset=pos + len;
var docNewline=doc.getProperty$O("__EndOfLine__");
if (Clazz.instanceOf(docNewline, "java.lang.String")) {
this.setLineSeparator$S(docNewline);
} else {
var newline=null;
try {
newline=System.getProperty$S("line.separator");
} catch (se) {
if (Clazz.exceptionOf(se,"SecurityException")){
} else {
throw se;
}
}
if (newline == null ) {
newline="\n";
}this.setLineSeparator$S(newline);
}this.canWrapLines=true;
}, 1);

Clazz.newMeth(C$, 'c$$java_io_Writer$javax_swing_text_Element',  function (w, root) {
C$.c$$java_io_Writer$javax_swing_text_Element$I$I.apply(this, [w, root, 0, root.getEndOffset$()]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_Writer$javax_swing_text_Element$I$I',  function (w, root, pos, len) {
;C$.$init$.apply(this);
this.doc=root.getDocument$();
this.it=Clazz.new_($I$(1,1).c$$javax_swing_text_Element,[root]);
this.out=w;
this.startOffset=pos;
this.endOffset=pos + len;
this.canWrapLines=true;
}, 1);

Clazz.newMeth(C$, 'getStartOffset$',  function () {
return this.startOffset;
});

Clazz.newMeth(C$, 'getEndOffset$',  function () {
return this.endOffset;
});

Clazz.newMeth(C$, 'getElementIterator$',  function () {
return this.it;
});

Clazz.newMeth(C$, 'getWriter$',  function () {
return this.out;
});

Clazz.newMeth(C$, 'getDocument$',  function () {
return this.doc;
});

Clazz.newMeth(C$, 'inRange$javax_swing_text_Element',  function (next) {
var startOffset=this.getStartOffset$();
var endOffset=this.getEndOffset$();
if ((next.getStartOffset$() >= startOffset && next.getStartOffset$() < endOffset ) || (startOffset >= next.getStartOffset$() && startOffset < next.getEndOffset$() ) ) {
return true;
}return false;
});

Clazz.newMeth(C$, 'getText$javax_swing_text_Element',  function (elem) {
return this.doc.getText$I$I(elem.getStartOffset$(), elem.getEndOffset$() - elem.getStartOffset$());
});

Clazz.newMeth(C$, 'text$javax_swing_text_Element',  function (elem) {
var start=Math.max(this.getStartOffset$(), elem.getStartOffset$());
var end=Math.min(this.getEndOffset$(), elem.getEndOffset$());
if (start < end) {
if (this.segment == null ) {
this.segment=Clazz.new_($I$(2,1));
}this.getDocument$().getText$I$I$javax_swing_text_Segment(start, end - start, this.segment);
if (this.segment.count > 0) {
this.write$CA$I$I(this.segment.array, this.segment.offset, this.segment.count);
}}});

Clazz.newMeth(C$, 'setLineLength$I',  function (l) {
this.maxLineLength=l;
});

Clazz.newMeth(C$, 'getLineLength$',  function () {
return this.maxLineLength;
});

Clazz.newMeth(C$, 'setCurrentLineLength$I',  function (length) {
this.currLength=length;
this.isLineEmpty=(this.currLength == 0);
});

Clazz.newMeth(C$, 'getCurrentLineLength$',  function () {
return this.currLength;
});

Clazz.newMeth(C$, 'isLineEmpty$',  function () {
return this.isLineEmpty;
});

Clazz.newMeth(C$, 'setCanWrapLines$Z',  function (newValue) {
this.canWrapLines=newValue;
});

Clazz.newMeth(C$, 'getCanWrapLines$',  function () {
return this.canWrapLines;
});

Clazz.newMeth(C$, 'setIndentSpace$I',  function (space) {
this.indentSpace=space;
});

Clazz.newMeth(C$, 'getIndentSpace$',  function () {
return this.indentSpace;
});

Clazz.newMeth(C$, 'setLineSeparator$S',  function (value) {
this.lineSeparator=value;
});

Clazz.newMeth(C$, 'getLineSeparator$',  function () {
return this.lineSeparator;
});

Clazz.newMeth(C$, 'incrIndent$',  function () {
if (this.offsetIndent > 0) {
++this.offsetIndent;
} else {
if (++this.indentLevel * this.getIndentSpace$() >= this.getLineLength$()) {
++this.offsetIndent;
--this.indentLevel;
}}});

Clazz.newMeth(C$, 'decrIndent$',  function () {
if (this.offsetIndent > 0) {
--this.offsetIndent;
} else {
--this.indentLevel;
}});

Clazz.newMeth(C$, 'getIndentLevel$',  function () {
return this.indentLevel;
});

Clazz.newMeth(C$, 'indent$',  function () {
var max=this.getIndentLevel$() * this.getIndentSpace$();
if (this.indentChars == null  || max > this.indentChars.length ) {
this.indentChars=Clazz.array(Character.TYPE, [max]);
for (var counter=0; counter < max; counter++) {
this.indentChars[counter]=" ";
}
}var length=this.getCurrentLineLength$();
var wasEmpty=this.isLineEmpty$();
this.output$CA$I$I(this.indentChars, 0, max);
if (wasEmpty && length == 0 ) {
this.isLineEmpty=true;
}});

Clazz.newMeth(C$, 'write$C',  function (ch) {
if (this.tempChars == null ) {
this.tempChars=Clazz.array(Character.TYPE, [128]);
}this.tempChars[0]=ch;
this.write$CA$I$I(this.tempChars, 0, 1);
});

Clazz.newMeth(C$, 'write$S',  function (content) {
if (content == null ) {
return;
}var size=content.length$();
if (this.tempChars == null  || this.tempChars.length < size ) {
this.tempChars=Clazz.array(Character.TYPE, [size]);
}content.getChars$I$I$CA$I(0, size, this.tempChars, 0);
this.write$CA$I$I(this.tempChars, 0, size);
});

Clazz.newMeth(C$, 'writeLineSeparator$',  function () {
var newline=this.getLineSeparator$();
var length=newline.length$();
if (this.newlineChars == null  || this.newlineChars.length < length ) {
this.newlineChars=Clazz.array(Character.TYPE, [length]);
}newline.getChars$I$I$CA$I(0, length, this.newlineChars, 0);
this.output$CA$I$I(this.newlineChars, 0, length);
this.setCurrentLineLength$I(0);
});

Clazz.newMeth(C$, 'write$CA$I$I',  function (chars, startIndex, length) {
if (!this.getCanWrapLines$()) {
var lastIndex=startIndex;
var endIndex=startIndex + length;
var newlineIndex=p$1.indexOf$CA$C$I$I.apply(this, [chars, "\n", startIndex, endIndex]);
while (newlineIndex != -1){
if (newlineIndex > lastIndex) {
this.output$CA$I$I(chars, lastIndex, newlineIndex - lastIndex);
}this.writeLineSeparator$();
lastIndex=newlineIndex + 1;
newlineIndex=p$1.indexOf$CA$C$I$I.apply(this, [chars, "\n", lastIndex, endIndex]);
}
if (lastIndex < endIndex) {
this.output$CA$I$I(chars, lastIndex, endIndex - lastIndex);
}} else {
var lastIndex=startIndex;
var endIndex=startIndex + length;
var lineLength=this.getCurrentLineLength$();
var maxLength=this.getLineLength$();
while (lastIndex < endIndex){
var newlineIndex=p$1.indexOf$CA$C$I$I.apply(this, [chars, "\n", lastIndex, endIndex]);
var needsNewline=false;
var forceNewLine=false;
lineLength=this.getCurrentLineLength$();
if (newlineIndex != -1 && (lineLength + (newlineIndex - lastIndex)) < maxLength ) {
if (newlineIndex > lastIndex) {
this.output$CA$I$I(chars, lastIndex, newlineIndex - lastIndex);
}lastIndex=newlineIndex + 1;
forceNewLine=true;
} else if (newlineIndex == -1 && (lineLength + (endIndex - lastIndex)) < maxLength ) {
if (endIndex > lastIndex) {
this.output$CA$I$I(chars, lastIndex, endIndex - lastIndex);
}lastIndex=endIndex;
} else {
var breakPoint=-1;
var maxBreak=Math.min(endIndex - lastIndex, maxLength - lineLength - 1 );
var counter=0;
while (counter < maxBreak){
if (Character.isWhitespace$C(chars[counter + lastIndex])) {
breakPoint=counter;
}++counter;
}
if (breakPoint != -1) {
breakPoint+=lastIndex + 1;
this.output$CA$I$I(chars, lastIndex, breakPoint - lastIndex);
lastIndex=breakPoint;
needsNewline=true;
} else {
counter=Math.max(0, maxBreak);
maxBreak=endIndex - lastIndex;
while (counter < maxBreak){
if (Character.isWhitespace$C(chars[counter + lastIndex])) {
breakPoint=counter;
break;
}++counter;
}
if (breakPoint == -1) {
this.output$CA$I$I(chars, lastIndex, endIndex - lastIndex);
breakPoint=endIndex;
} else {
breakPoint+=lastIndex;
if (chars[breakPoint] == "\n") {
this.output$CA$I$I(chars, lastIndex, breakPoint++ - lastIndex);
forceNewLine=true;
} else {
this.output$CA$I$I(chars, lastIndex, ++breakPoint - lastIndex);
needsNewline=true;
}}lastIndex=breakPoint;
}}if (forceNewLine || needsNewline || lastIndex < endIndex  ) {
this.writeLineSeparator$();
if (lastIndex < endIndex || !forceNewLine ) {
this.indent$();
}}}
}});

Clazz.newMeth(C$, 'writeAttributes$javax_swing_text_AttributeSet',  function (attr) {
var names=attr.getAttributeNames$();
while (names.hasMoreElements$()){
var name=names.nextElement$();
this.write$S(" " + name + "=" + attr.getAttribute$O(name) );
}
});

Clazz.newMeth(C$, 'output$CA$I$I',  function (content, start, length) {
this.getWriter$().write$CA$I$I(content, start, length);
this.setCurrentLineLength$I(this.getCurrentLineLength$() + length);
});

Clazz.newMeth(C$, 'indexOf$CA$C$I$I',  function (chars, sChar, startIndex, endIndex) {
while (startIndex < endIndex){
if (chars[startIndex] == sChar) {
return startIndex;
}++startIndex;
}
return -1;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:15 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
