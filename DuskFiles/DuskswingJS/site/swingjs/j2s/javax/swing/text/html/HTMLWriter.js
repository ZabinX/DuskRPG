(function(){var P$=Clazz.newPackage("javax.swing.text.html"),p$1={},I$=[[0,'java.util.Stack','java.util.Vector','javax.swing.text.SimpleAttributeSet','javax.swing.text.Segment','javax.swing.text.StyleConstants',['javax.swing.text.html.HTML','.Tag'],['javax.swing.text.html.HTML','.Attribute'],['javax.swing.text.html.CSS','.Attribute']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "HTMLWriter", null, 'javax.swing.text.AbstractWriter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.blockElementStack=Clazz.new_($I$(1,1));
this.inContent=false;
this.inPre=false;
this.inTextArea=false;
this.newlineOutputed=false;
this.tags=Clazz.new_($I$(2,1).c$$I,[10]);
this.tagValues=Clazz.new_($I$(2,1).c$$I,[10]);
this.tagsToRemove=Clazz.new_($I$(2,1).c$$I,[10]);
this.indentNext=false;
this.writeCSS=false;
this.convAttr=Clazz.new_($I$(3,1));
this.oConvAttr=Clazz.new_($I$(3,1));
this.indented=false;
},1);

C$.$fields$=[['Z',['inContent','inPre','inTextArea','newlineOutputed','completeDoc','wroteHead','replaceEntities','indentNext','writeCSS','indented'],'I',['preEndOffset'],'O',['blockElementStack','java.util.Stack','tags','java.util.Vector','+tagValues','$segment','javax.swing.text.Segment','tagsToRemove','java.util.Vector','$tempChars','char[]','convAttr','javax.swing.text.MutableAttributeSet','+oConvAttr']]]

Clazz.newMeth(C$, 'c$$java_io_Writer$javax_swing_text_html_HTMLDocument',  function (w, doc) {
C$.c$$java_io_Writer$javax_swing_text_html_HTMLDocument$I$I.apply(this, [w, doc, 0, doc.getLength$()]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_Writer$javax_swing_text_html_HTMLDocument$I$I',  function (w, doc, pos, len) {
;C$.superclazz.c$$java_io_Writer$javax_swing_text_Document$I$I.apply(this,[w, doc, pos, len]);C$.$init$.apply(this);
this.completeDoc=(pos == 0 && len == doc.getLength$() );
this.setLineLength$I(80);
}, 1);

Clazz.newMeth(C$, 'write$',  function () {
var it=this.getElementIterator$();
var current=null;
var next;
this.wroteHead=false;
this.setCurrentLineLength$I(0);
this.replaceEntities=false;
this.setCanWrapLines$Z(false);
if (this.$segment == null ) {
this.$segment=Clazz.new_($I$(4,1));
}this.inPre=false;
var forcedBody=false;
while ((next=it.next$()) != null ){
if (!this.inRange$javax_swing_text_Element(next)) {
if (this.completeDoc && next.getAttributes$().getAttribute$O($I$(5).NameAttribute) === $I$(6).BODY  ) {
forcedBody=true;
} else {
continue;
}}if (current != null ) {
if (p$1.indentNeedsIncrementing$javax_swing_text_Element$javax_swing_text_Element.apply(this, [current, next])) {
this.incrIndent$();
} else if (current.getParentElement$() !== next.getParentElement$() ) {
var top=this.blockElementStack.peek$();
while (top !== next.getParentElement$() ){
this.blockElementStack.pop$();
if (!this.synthesizedElement$javax_swing_text_Element(top)) {
var attrs=top.getAttributes$();
if (!this.matchNameAttribute$javax_swing_text_AttributeSet$javax_swing_text_html_HTML_Tag(attrs, $I$(6).PRE) && !p$1.isFormElementWithContent$javax_swing_text_AttributeSet.apply(this, [attrs]) ) {
this.decrIndent$();
}this.endTag$javax_swing_text_Element(top);
}top=this.blockElementStack.peek$();
}
} else if (current.getParentElement$() === next.getParentElement$() ) {
var top=this.blockElementStack.peek$();
if (top === current ) {
this.blockElementStack.pop$();
this.endTag$javax_swing_text_Element(top);
}}}if (!next.isLeaf$() || p$1.isFormElementWithContent$javax_swing_text_AttributeSet.apply(this, [next.getAttributes$()]) ) {
this.blockElementStack.push$O(next);
this.startTag$javax_swing_text_Element(next);
} else {
this.emptyTag$javax_swing_text_Element(next);
}current=next;
}
this.closeOutUnwantedEmbeddedTags$javax_swing_text_AttributeSet(null);
if (forcedBody) {
this.blockElementStack.pop$();
this.endTag$javax_swing_text_Element(current);
}while (!this.blockElementStack.empty$()){
current=this.blockElementStack.pop$();
if (!this.synthesizedElement$javax_swing_text_Element(current)) {
var attrs=current.getAttributes$();
if (!this.matchNameAttribute$javax_swing_text_AttributeSet$javax_swing_text_html_HTML_Tag(attrs, $I$(6).PRE) && !p$1.isFormElementWithContent$javax_swing_text_AttributeSet.apply(this, [attrs]) ) {
this.decrIndent$();
}this.endTag$javax_swing_text_Element(current);
}}
if (this.completeDoc) {
this.writeAdditionalComments$();
}this.$segment.array=null;
});

Clazz.newMeth(C$, 'writeAttributes$javax_swing_text_AttributeSet',  function (attr) {
this.convAttr.removeAttributes$javax_swing_text_AttributeSet(this.convAttr);
C$.convertToHTML32$javax_swing_text_AttributeSet$javax_swing_text_MutableAttributeSet(attr, this.convAttr);
var names=this.convAttr.getAttributeNames$();
while (names.hasMoreElements$()){
var name=names.nextElement$();
if (Clazz.instanceOf(name, "javax.swing.text.html.HTML.Tag") || Clazz.instanceOf(name, "javax.swing.text.StyleConstants") || name === $I$(7).ENDTAG   ) {
continue;
}this.write$S(" " + name + "=\"" + this.convAttr.getAttribute$O(name) + "\"" );
}
});

Clazz.newMeth(C$, 'emptyTag$javax_swing_text_Element',  function (elem) {
if (!this.inContent && !this.inPre ) {
p$1.indentSmart.apply(this, []);
}var attr=elem.getAttributes$();
this.closeOutUnwantedEmbeddedTags$javax_swing_text_AttributeSet(attr);
this.writeEmbeddedTags$javax_swing_text_AttributeSet(attr);
if (this.matchNameAttribute$javax_swing_text_AttributeSet$javax_swing_text_html_HTML_Tag(attr, $I$(6).CONTENT)) {
this.inContent=true;
this.text$javax_swing_text_Element(elem);
} else if (this.matchNameAttribute$javax_swing_text_AttributeSet$javax_swing_text_html_HTML_Tag(attr, $I$(6).COMMENT)) {
this.comment$javax_swing_text_Element(elem);
} else {
var isBlock=this.isBlockTag$javax_swing_text_AttributeSet(elem.getAttributes$());
if (this.inContent && isBlock ) {
this.writeLineSeparator$();
p$1.indentSmart.apply(this, []);
}var nameTag=(attr != null ) ? attr.getAttribute$O($I$(5).NameAttribute) : null;
var endTag=(attr != null ) ? attr.getAttribute$O($I$(7).ENDTAG) : null;
var outputEndTag=false;
if (nameTag != null  && endTag != null   && (Clazz.instanceOf(endTag, "java.lang.String"))  && endTag.equals$O("true") ) {
outputEndTag=true;
}if (this.completeDoc && this.matchNameAttribute$javax_swing_text_AttributeSet$javax_swing_text_html_HTML_Tag(attr, $I$(6).HEAD) ) {
if (outputEndTag) {
this.writeStyles$javax_swing_text_html_StyleSheet((this.getDocument$()).getStyleSheet$());
}this.wroteHead=true;
}this.write$C("<");
if (outputEndTag) {
this.write$C("/");
}this.write$S(elem.getName$());
this.writeAttributes$javax_swing_text_AttributeSet(attr);
this.write$C(">");
if (this.matchNameAttribute$javax_swing_text_AttributeSet$javax_swing_text_html_HTML_Tag(attr, $I$(6).TITLE) && !outputEndTag ) {
var doc=elem.getDocument$();
var title=doc.getProperty$O("title");
this.write$S(title);
} else if (!this.inContent || isBlock ) {
this.writeLineSeparator$();
if (isBlock && this.inContent ) {
p$1.indentSmart.apply(this, []);
}}}});

Clazz.newMeth(C$, 'isBlockTag$javax_swing_text_AttributeSet',  function (attr) {
var o=attr.getAttribute$O($I$(5).NameAttribute);
if (Clazz.instanceOf(o, "javax.swing.text.html.HTML.Tag")) {
var name=o;
return name.isBlock$();
}return false;
});

Clazz.newMeth(C$, 'startTag$javax_swing_text_Element',  function (elem) {
if (this.synthesizedElement$javax_swing_text_Element(elem)) {
return;
}var attr=elem.getAttributes$();
var nameAttribute=attr.getAttribute$O($I$(5).NameAttribute);
var name;
if (Clazz.instanceOf(nameAttribute, "javax.swing.text.html.HTML.Tag")) {
name=nameAttribute;
} else {
name=null;
}if (name === $I$(6).PRE ) {
this.inPre=true;
this.preEndOffset=elem.getEndOffset$();
}this.closeOutUnwantedEmbeddedTags$javax_swing_text_AttributeSet(attr);
if (this.inContent) {
this.writeLineSeparator$();
this.inContent=false;
this.newlineOutputed=false;
}if (this.completeDoc && name === $I$(6).BODY   && !this.wroteHead ) {
this.wroteHead=true;
p$1.indentSmart.apply(this, []);
this.write$S("<head>");
this.writeLineSeparator$();
this.incrIndent$();
this.writeStyles$javax_swing_text_html_StyleSheet((this.getDocument$()).getStyleSheet$());
this.decrIndent$();
this.writeLineSeparator$();
p$1.indentSmart.apply(this, []);
this.write$S("</head>");
this.writeLineSeparator$();
}p$1.indentSmart.apply(this, []);
this.write$C("<");
this.write$S(elem.getName$());
this.writeAttributes$javax_swing_text_AttributeSet(attr);
this.write$C(">");
if (name !== $I$(6).PRE ) {
this.writeLineSeparator$();
}if (name === $I$(6).TEXTAREA ) {
this.textAreaContent$javax_swing_text_AttributeSet(elem.getAttributes$());
} else if (name === $I$(6).SELECT ) {
this.selectContent$javax_swing_text_AttributeSet(elem.getAttributes$());
} else if (this.completeDoc && name === $I$(6).BODY  ) {
this.writeMaps$java_util_Enumeration((this.getDocument$()).getMaps$());
} else if (name === $I$(6).HEAD ) {
var document=this.getDocument$();
this.wroteHead=true;
this.incrIndent$();
this.writeStyles$javax_swing_text_html_StyleSheet(document.getStyleSheet$());
if (document.hasBaseTag$()) {
p$1.indentSmart.apply(this, []);
this.write$S("<base href=\"" + document.getBase$() + "\">" );
this.writeLineSeparator$();
}this.decrIndent$();
}});

Clazz.newMeth(C$, 'textAreaContent$javax_swing_text_AttributeSet',  function (attr) {
var doc=attr.getAttribute$O($I$(5).ModelAttribute);
if (doc != null  && doc.getLength$() > 0 ) {
if (this.$segment == null ) {
this.$segment=Clazz.new_($I$(4,1));
}doc.getText$I$I$javax_swing_text_Segment(0, doc.getLength$(), this.$segment);
if (this.$segment.count > 0) {
this.inTextArea=true;
this.incrIndent$();
p$1.indentSmart.apply(this, []);
this.setCanWrapLines$Z(true);
this.replaceEntities=true;
this.write$CA$I$I(this.$segment.array, this.$segment.offset, this.$segment.count);
this.replaceEntities=false;
this.setCanWrapLines$Z(false);
this.writeLineSeparator$();
this.inTextArea=false;
this.decrIndent$();
}}});

Clazz.newMeth(C$, 'text$javax_swing_text_Element',  function (elem) {
var start=Math.max(this.getStartOffset$(), elem.getStartOffset$());
var end=Math.min(this.getEndOffset$(), elem.getEndOffset$());
if (start < end) {
if (this.$segment == null ) {
this.$segment=Clazz.new_($I$(4,1));
}this.getDocument$().getText$I$I$javax_swing_text_Segment(start, end - start, this.$segment);
this.newlineOutputed=false;
if (this.$segment.count > 0) {
if (this.$segment.array[this.$segment.offset + this.$segment.count - 1] == "\n") {
this.newlineOutputed=true;
}if (this.inPre && end == this.preEndOffset ) {
if (this.$segment.count > 1) {
--this.$segment.count;
} else {
return;
}}this.replaceEntities=true;
this.setCanWrapLines$Z(!this.inPre);
this.write$CA$I$I(this.$segment.array, this.$segment.offset, this.$segment.count);
this.setCanWrapLines$Z(false);
this.replaceEntities=false;
}}});

Clazz.newMeth(C$, 'selectContent$javax_swing_text_AttributeSet',  function (attr) {
var model=attr.getAttribute$O($I$(5).ModelAttribute);
this.incrIndent$();
if (Clazz.instanceOf(model, "javax.swing.text.html.OptionListModel")) {
var listModel=model;
var size=listModel.getSize$();
for (var i=0; i < size; i++) {
var option=listModel.getElementAt$I(i);
this.writeOption$javax_swing_text_html_Option(option);
}
} else if (Clazz.instanceOf(model, "javax.swing.text.html.OptionComboBoxModel")) {
var comboBoxModel=model;
var size=comboBoxModel.getSize$();
for (var i=0; i < size; i++) {
var option=comboBoxModel.getElementAt$I(i);
this.writeOption$javax_swing_text_html_Option(option);
}
}this.decrIndent$();
});

Clazz.newMeth(C$, 'writeOption$javax_swing_text_html_Option',  function (option) {
p$1.indentSmart.apply(this, []);
this.write$C("<");
this.write$S("option");
var value=option.getAttributes$().getAttribute$O($I$(7).VALUE);
if (value != null ) {
this.write$S(" value=" + value);
}if (option.isSelected$()) {
this.write$S(" selected");
}this.write$C(">");
if (option.getLabel$() != null ) {
this.write$S(option.getLabel$());
}this.writeLineSeparator$();
});

Clazz.newMeth(C$, 'endTag$javax_swing_text_Element',  function (elem) {
if (this.synthesizedElement$javax_swing_text_Element(elem)) {
return;
}this.closeOutUnwantedEmbeddedTags$javax_swing_text_AttributeSet(elem.getAttributes$());
if (this.inContent) {
if (!this.newlineOutputed && !this.inPre ) {
this.writeLineSeparator$();
}this.newlineOutputed=false;
this.inContent=false;
}if (!this.inPre) {
p$1.indentSmart.apply(this, []);
}if (this.matchNameAttribute$javax_swing_text_AttributeSet$javax_swing_text_html_HTML_Tag(elem.getAttributes$(), $I$(6).PRE)) {
this.inPre=false;
}this.write$C("<");
this.write$C("/");
this.write$S(elem.getName$());
this.write$C(">");
this.writeLineSeparator$();
});

Clazz.newMeth(C$, 'comment$javax_swing_text_Element',  function (elem) {
var as=elem.getAttributes$();
if (this.matchNameAttribute$javax_swing_text_AttributeSet$javax_swing_text_html_HTML_Tag(as, $I$(6).COMMENT)) {
var comment=as.getAttribute$O($I$(7).COMMENT);
if (Clazz.instanceOf(comment, "java.lang.String")) {
this.writeComment$S(comment);
} else {
this.writeComment$S(null);
}}});

Clazz.newMeth(C$, 'writeComment$S',  function (string) {
this.write$S("<!--");
if (string != null ) {
this.write$S(string);
}this.write$S("-->");
this.writeLineSeparator$();
p$1.indentSmart.apply(this, []);
});

Clazz.newMeth(C$, 'writeAdditionalComments$',  function () {
var comments=this.getDocument$().getProperty$O("AdditionalComments");
if (Clazz.instanceOf(comments, "java.util.Vector")) {
var v=comments;
for (var counter=0, maxCounter=v.size$(); counter < maxCounter; counter++) {
this.writeComment$S(v.elementAt$I(counter).toString());
}
}});

Clazz.newMeth(C$, 'synthesizedElement$javax_swing_text_Element',  function (elem) {
if (this.matchNameAttribute$javax_swing_text_AttributeSet$javax_swing_text_html_HTML_Tag(elem.getAttributes$(), $I$(6).IMPLIED)) {
return true;
}return false;
});

Clazz.newMeth(C$, 'matchNameAttribute$javax_swing_text_AttributeSet$javax_swing_text_html_HTML_Tag',  function (attr, tag) {
var o=attr.getAttribute$O($I$(5).NameAttribute);
if (Clazz.instanceOf(o, "javax.swing.text.html.HTML.Tag")) {
var name=o;
if (name === tag ) {
return true;
}}return false;
});

Clazz.newMeth(C$, 'writeEmbeddedTags$javax_swing_text_AttributeSet',  function (attr) {
attr=this.convertToHTML$javax_swing_text_AttributeSet$javax_swing_text_MutableAttributeSet(attr, this.oConvAttr);
var names=attr.getAttributeNames$();
while (names.hasMoreElements$()){
var name=names.nextElement$();
if (Clazz.instanceOf(name, "javax.swing.text.html.HTML.Tag")) {
var tag=name;
if (tag === $I$(6).FORM  || this.tags.contains$O(tag) ) {
continue;
}this.write$C("<");
this.write$S(tag.toString());
var o=attr.getAttribute$O(tag);
if (o != null  && Clazz.instanceOf(o, "javax.swing.text.AttributeSet") ) {
this.writeAttributes$javax_swing_text_AttributeSet(o);
}this.write$C(">");
this.tags.addElement$O(tag);
this.tagValues.addElement$O(o);
}}
});

Clazz.newMeth(C$, 'noMatchForTagInAttributes$javax_swing_text_AttributeSet$javax_swing_text_html_HTML_Tag$O',  function (attr, t, tagValue) {
if (attr != null  && attr.isDefined$O(t) ) {
var newValue=attr.getAttribute$O(t);
if ((tagValue == null ) ? (newValue == null ) : (newValue != null  && tagValue.equals$O(newValue) )) {
return false;
}}return true;
}, p$1);

Clazz.newMeth(C$, 'closeOutUnwantedEmbeddedTags$javax_swing_text_AttributeSet',  function (attr) {
this.tagsToRemove.removeAllElements$();
attr=this.convertToHTML$javax_swing_text_AttributeSet$javax_swing_text_MutableAttributeSet(attr, null);
var t;
var tValue;
var firstIndex=-1;
var size=this.tags.size$();
for (var i=size - 1; i >= 0; i--) {
t=this.tags.elementAt$I(i);
tValue=this.tagValues.elementAt$I(i);
if ((attr == null ) || p$1.noMatchForTagInAttributes$javax_swing_text_AttributeSet$javax_swing_text_html_HTML_Tag$O.apply(this, [attr, t, tValue]) ) {
firstIndex=i;
this.tagsToRemove.addElement$O(t);
}}
if (firstIndex != -1) {
var removeAll=((size - firstIndex) == this.tagsToRemove.size$());
for (var i=size - 1; i >= firstIndex; i--) {
t=this.tags.elementAt$I(i);
if (removeAll || this.tagsToRemove.contains$O(t) ) {
this.tags.removeElementAt$I(i);
this.tagValues.removeElementAt$I(i);
}this.write$C("<");
this.write$C("/");
this.write$S(t.toString());
this.write$C(">");
}
size=this.tags.size$();
for (var i=firstIndex; i < size; i++) {
t=this.tags.elementAt$I(i);
this.write$C("<");
this.write$S(t.toString());
var o=this.tagValues.elementAt$I(i);
if (o != null  && Clazz.instanceOf(o, "javax.swing.text.AttributeSet") ) {
this.writeAttributes$javax_swing_text_AttributeSet(o);
}this.write$C(">");
}
}});

Clazz.newMeth(C$, 'isFormElementWithContent$javax_swing_text_AttributeSet',  function (attr) {
return this.matchNameAttribute$javax_swing_text_AttributeSet$javax_swing_text_html_HTML_Tag(attr, $I$(6).TEXTAREA) || this.matchNameAttribute$javax_swing_text_AttributeSet$javax_swing_text_html_HTML_Tag(attr, $I$(6).SELECT) ;
}, p$1);

Clazz.newMeth(C$, 'indentNeedsIncrementing$javax_swing_text_Element$javax_swing_text_Element',  function (current, next) {
if ((next.getParentElement$() === current ) && !this.inPre ) {
if (this.indentNext) {
this.indentNext=false;
return true;
} else if (this.synthesizedElement$javax_swing_text_Element(next)) {
this.indentNext=true;
} else if (!this.synthesizedElement$javax_swing_text_Element(current)) {
return true;
}}return false;
}, p$1);

Clazz.newMeth(C$, 'writeMaps$java_util_Enumeration',  function (maps) {
if (maps != null ) {
while (maps.hasMoreElements$()){
var map=maps.nextElement$();
var name=map.getName$();
this.incrIndent$();
p$1.indentSmart.apply(this, []);
this.write$S("<map");
if (name != null ) {
this.write$S(" name=\"");
this.write$S(name);
this.write$S("\">");
} else {
this.write$C(">");
}this.writeLineSeparator$();
this.incrIndent$();
var areas=map.getAreas$();
if (areas != null ) {
for (var counter=0, maxCounter=areas.length; counter < maxCounter; counter++) {
p$1.indentSmart.apply(this, []);
this.write$S("<area");
this.writeAttributes$javax_swing_text_AttributeSet(areas[counter]);
this.write$S("></area>");
this.writeLineSeparator$();
}
}this.decrIndent$();
p$1.indentSmart.apply(this, []);
this.write$S("</map>");
this.writeLineSeparator$();
this.decrIndent$();
}
}});

Clazz.newMeth(C$, 'writeStyles$javax_swing_text_html_StyleSheet',  function (sheet) {
if (sheet != null ) {
var styles=sheet.getStyleNames$();
if (styles != null ) {
var outputStyle=false;
while (styles.hasMoreElements$()){
var name=styles.nextElement$();
if (!"default".equals$O(name) && this.writeStyle$S$javax_swing_text_Style$Z(name, sheet.getStyle$S(name), outputStyle) ) {
outputStyle=true;
}}
if (outputStyle) {
this.writeStyleEndTag$();
}}}});

Clazz.newMeth(C$, 'writeStyle$S$javax_swing_text_Style$Z',  function (name, style, outputStyle) {
var didOutputStyle=false;
var attributes=style.getAttributeNames$();
if (attributes != null ) {
while (attributes.hasMoreElements$()){
var attribute=attributes.nextElement$();
if (Clazz.instanceOf(attribute, "javax.swing.text.html.CSS.Attribute")) {
var value=style.getAttribute$O(attribute).toString();
if (value != null ) {
if (!outputStyle) {
this.writeStyleStartTag$();
outputStyle=true;
}if (!didOutputStyle) {
didOutputStyle=true;
p$1.indentSmart.apply(this, []);
this.write$S(name);
this.write$S(" {");
} else {
this.write$S(";");
}this.write$C(" ");
this.write$S(attribute.toString());
this.write$S(": ");
this.write$S(value);
}}}
}if (didOutputStyle) {
this.write$S(" }");
this.writeLineSeparator$();
}return didOutputStyle;
});

Clazz.newMeth(C$, 'writeStyleStartTag$',  function () {
p$1.indentSmart.apply(this, []);
this.write$S("<style type=\"text/css\">");
this.incrIndent$();
this.writeLineSeparator$();
p$1.indentSmart.apply(this, []);
this.write$S("<!--");
this.incrIndent$();
this.writeLineSeparator$();
});

Clazz.newMeth(C$, 'writeStyleEndTag$',  function () {
this.decrIndent$();
p$1.indentSmart.apply(this, []);
this.write$S("-->");
this.writeLineSeparator$();
this.decrIndent$();
p$1.indentSmart.apply(this, []);
this.write$S("</style>");
this.writeLineSeparator$();
p$1.indentSmart.apply(this, []);
});

Clazz.newMeth(C$, 'convertToHTML$javax_swing_text_AttributeSet$javax_swing_text_MutableAttributeSet',  function (from, to) {
if (to == null ) {
to=this.convAttr;
}to.removeAttributes$javax_swing_text_AttributeSet(to);
if (this.writeCSS) {
C$.convertToHTML40$javax_swing_text_AttributeSet$javax_swing_text_MutableAttributeSet(from, to);
} else {
C$.convertToHTML32$javax_swing_text_AttributeSet$javax_swing_text_MutableAttributeSet(from, to);
}return to;
});

Clazz.newMeth(C$, 'convertToHTML32$javax_swing_text_AttributeSet$javax_swing_text_MutableAttributeSet',  function (from, to) {
if (from == null ) {
return;
}var keys=from.getAttributeNames$();
var value="";
while (keys.hasMoreElements$()){
var key=keys.nextElement$();
if (Clazz.instanceOf(key, "javax.swing.text.html.CSS.Attribute")) {
if ((key === $I$(8).FONT_FAMILY ) || (key === $I$(8).FONT_SIZE ) || (key === $I$(8).COLOR )  ) {
C$.createFontAttribute$javax_swing_text_html_CSS_Attribute$javax_swing_text_AttributeSet$javax_swing_text_MutableAttributeSet(key, from, to);
} else if (key === $I$(8).FONT_WEIGHT ) {
var weightValue=from.getAttribute$O($I$(8).FONT_WEIGHT);
if ((weightValue != null ) && (weightValue.getValue$() > 400) ) {
C$.addAttribute$javax_swing_text_MutableAttributeSet$O$O(to, $I$(6).B, $I$(3).EMPTY);
}} else if (key === $I$(8).FONT_STYLE ) {
var s=from.getAttribute$O(key).toString();
if (s.indexOf$S("italic") >= 0) {
C$.addAttribute$javax_swing_text_MutableAttributeSet$O$O(to, $I$(6).I, $I$(3).EMPTY);
}} else if (key === $I$(8).TEXT_DECORATION ) {
var decor=from.getAttribute$O(key).toString();
if (decor.indexOf$S("underline") >= 0) {
C$.addAttribute$javax_swing_text_MutableAttributeSet$O$O(to, $I$(6).U, $I$(3).EMPTY);
}if (decor.indexOf$S("line-through") >= 0) {
C$.addAttribute$javax_swing_text_MutableAttributeSet$O$O(to, $I$(6).STRIKE, $I$(3).EMPTY);
}} else if (key === $I$(8).VERTICAL_ALIGN ) {
var vAlign=from.getAttribute$O(key).toString();
if (vAlign.indexOf$S("sup") >= 0) {
C$.addAttribute$javax_swing_text_MutableAttributeSet$O$O(to, $I$(6).SUP, $I$(3).EMPTY);
}if (vAlign.indexOf$S("sub") >= 0) {
C$.addAttribute$javax_swing_text_MutableAttributeSet$O$O(to, $I$(6).SUB, $I$(3).EMPTY);
}} else if (key === $I$(8).TEXT_ALIGN ) {
C$.addAttribute$javax_swing_text_MutableAttributeSet$O$O(to, $I$(7).ALIGN, from.getAttribute$O(key).toString());
} else {
if (value.length$() > 0) {
value=value + "; ";
}value=value + key + ": " + from.getAttribute$O(key) ;
}} else {
var attr=from.getAttribute$O(key);
if (Clazz.instanceOf(attr, "javax.swing.text.AttributeSet")) {
attr=(attr).copyAttributes$();
}C$.addAttribute$javax_swing_text_MutableAttributeSet$O$O(to, key, attr);
}}
if (value.length$() > 0) {
to.addAttribute$O$O($I$(7).STYLE, value);
}}, 1);

Clazz.newMeth(C$, 'addAttribute$javax_swing_text_MutableAttributeSet$O$O',  function (to, key, value) {
var attr=to.getAttribute$O(key);
if (attr == null  || attr === $I$(3).EMPTY  ) {
to.addAttribute$O$O(key, value);
} else {
if (Clazz.instanceOf(attr, "javax.swing.text.MutableAttributeSet") && Clazz.instanceOf(value, "javax.swing.text.AttributeSet") ) {
(attr).addAttributes$javax_swing_text_AttributeSet(value);
}}}, 1);

Clazz.newMeth(C$, 'createFontAttribute$javax_swing_text_html_CSS_Attribute$javax_swing_text_AttributeSet$javax_swing_text_MutableAttributeSet',  function (a, from, to) {
var fontAttr=to.getAttribute$O($I$(6).FONT);
if (fontAttr == null ) {
fontAttr=Clazz.new_($I$(3,1));
to.addAttribute$O$O($I$(6).FONT, fontAttr);
}var htmlValue=from.getAttribute$O(a).toString();
if (a === $I$(8).FONT_FAMILY ) {
fontAttr.addAttribute$O$O($I$(7).FACE, htmlValue);
} else if (a === $I$(8).FONT_SIZE ) {
fontAttr.addAttribute$O$O($I$(7).SIZE, htmlValue);
} else if (a === $I$(8).COLOR ) {
fontAttr.addAttribute$O$O($I$(7).COLOR, htmlValue);
}}, 1);

Clazz.newMeth(C$, 'convertToHTML40$javax_swing_text_AttributeSet$javax_swing_text_MutableAttributeSet',  function (from, to) {
var keys=from.getAttributeNames$();
var value="";
while (keys.hasMoreElements$()){
var key=keys.nextElement$();
if (Clazz.instanceOf(key, "javax.swing.text.html.CSS.Attribute")) {
value=value + " " + key + "=" + from.getAttribute$O(key) + ";" ;
} else {
to.addAttribute$O$O(key, from.getAttribute$O(key));
}}
if (value.length$() > 0) {
to.addAttribute$O$O($I$(7).STYLE, value);
}}, 1);

Clazz.newMeth(C$, 'writeLineSeparator$',  function () {
var oldReplace=this.replaceEntities;
this.replaceEntities=false;
C$.superclazz.prototype.writeLineSeparator$.apply(this, []);
this.replaceEntities=oldReplace;
this.indented=false;
});

Clazz.newMeth(C$, 'output$CA$I$I',  function (chars, start, length) {
if (!this.replaceEntities) {
C$.superclazz.prototype.output$CA$I$I.apply(this, [chars, start, length]);
return;
}var last=start;
length+=start;
for (var counter=start; counter < length; counter++) {
switch ((chars[counter]).$c()) {
case 60:
if (counter > last) {
C$.superclazz.prototype.output$CA$I$I.apply(this, [chars, last, counter - last]);
}last=counter + 1;
p$1.output$S.apply(this, ["&lt;"]);
break;
case 62:
if (counter > last) {
C$.superclazz.prototype.output$CA$I$I.apply(this, [chars, last, counter - last]);
}last=counter + 1;
p$1.output$S.apply(this, ["&gt;"]);
break;
case 38:
if (counter > last) {
C$.superclazz.prototype.output$CA$I$I.apply(this, [chars, last, counter - last]);
}last=counter + 1;
p$1.output$S.apply(this, ["&amp;"]);
break;
case 34:
if (counter > last) {
C$.superclazz.prototype.output$CA$I$I.apply(this, [chars, last, counter - last]);
}last=counter + 1;
p$1.output$S.apply(this, ["&quot;"]);
break;
case 10:
case 9:
case 13:
break;
default:
if (chars[counter] < " " || (chars[counter]).$c() > 127  ) {
if (counter > last) {
C$.superclazz.prototype.output$CA$I$I.apply(this, [chars, last, counter - last]);
}last=counter + 1;
p$1.output$S.apply(this, ["&#"]);
p$1.output$S.apply(this, [String.valueOf$I(chars[counter].$c())]);
p$1.output$S.apply(this, [";"]);
}break;
}
}
if (last < length) {
C$.superclazz.prototype.output$CA$I$I.apply(this, [chars, last, length - last]);
}});

Clazz.newMeth(C$, 'output$S',  function (string) {
var length=string.length$();
if (this.$tempChars == null  || this.$tempChars.length < length ) {
this.$tempChars=Clazz.array(Character.TYPE, [length]);
}string.getChars$I$I$CA$I(0, length, this.$tempChars, 0);
C$.superclazz.prototype.output$CA$I$I.apply(this, [this.$tempChars, 0, length]);
}, p$1);

Clazz.newMeth(C$, 'indentSmart',  function () {
if (!this.indented) {
this.indent$();
this.indented=true;
}}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:29 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
