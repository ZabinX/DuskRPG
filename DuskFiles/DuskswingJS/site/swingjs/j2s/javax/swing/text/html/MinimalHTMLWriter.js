(function(){var P$=Clazz.newPackage("javax.swing.text.html"),p$1={},I$=[[0,'javax.swing.text.html.CSS','java.util.Hashtable','javax.swing.text.StyleConstants','StringBuilder']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MinimalHTMLWriter", null, 'javax.swing.text.AbstractWriter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.fontMask=0;
this.$startOffset=0;
this.$endOffset=0;
},1);

C$.$fields$=[['I',['fontMask','$startOffset','$endOffset'],'O',['fontAttributes','javax.swing.text.AttributeSet','styleNameMapping','java.util.Hashtable']]
,['O',['css','javax.swing.text.html.CSS']]]

Clazz.newMeth(C$, 'c$$java_io_Writer$javax_swing_text_StyledDocument',  function (w, doc) {
;C$.superclazz.c$$java_io_Writer$javax_swing_text_Document.apply(this,[w, doc]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_Writer$javax_swing_text_StyledDocument$I$I',  function (w, doc, pos, len) {
;C$.superclazz.c$$java_io_Writer$javax_swing_text_Document$I$I.apply(this,[w, doc, pos, len]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'write$',  function () {
this.styleNameMapping=Clazz.new_($I$(2,1));
this.writeStartTag$S("<html>");
this.writeHeader$();
this.writeBody$();
this.writeEndTag$S("</html>");
});

Clazz.newMeth(C$, 'writeAttributes$javax_swing_text_AttributeSet',  function (attr) {
var attributeNames=attr.getAttributeNames$();
while (attributeNames.hasMoreElements$()){
var name=attributeNames.nextElement$();
if ((Clazz.instanceOf(name, "javax.swing.text.StyleConstants.ParagraphConstants")) || (Clazz.instanceOf(name, "javax.swing.text.StyleConstants.CharacterConstants")) || (Clazz.instanceOf(name, "javax.swing.text.StyleConstants.FontConstants")) || (Clazz.instanceOf(name, "javax.swing.text.StyleConstants.ColorConstants"))  ) {
this.indent$();
this.write$S(name.toString());
this.write$C(":");
this.write$S(C$.css.styleConstantsValueToCSSValue$javax_swing_text_StyleConstants$O(name, attr.getAttribute$O(name)).toString());
this.write$C(";");
this.write$C("\n");
}}
});

Clazz.newMeth(C$, 'text$javax_swing_text_Element',  function (elem) {
var contentStr=this.getText$javax_swing_text_Element(elem);
if ((contentStr.length$() > 0) && (contentStr.charAt$I(contentStr.length$() - 1) == "\n") ) {
contentStr=contentStr.substring$I$I(0, contentStr.length$() - 1);
}if (contentStr.length$() > 0) {
this.write$S(contentStr);
}});

Clazz.newMeth(C$, 'writeStartTag$S',  function (tag) {
this.indent$();
this.write$S(tag);
this.write$C("\n");
this.incrIndent$();
});

Clazz.newMeth(C$, 'writeEndTag$S',  function (endTag) {
this.decrIndent$();
this.indent$();
this.write$S(endTag);
this.write$C("\n");
});

Clazz.newMeth(C$, 'writeHeader$',  function () {
this.writeStartTag$S("<head>");
this.writeStartTag$S("<style>");
this.writeStartTag$S("<!--");
this.writeStyles$();
this.writeEndTag$S("-->");
this.writeEndTag$S("</style>");
this.writeEndTag$S("</head>");
});

Clazz.newMeth(C$, 'writeStyles$',  function () {
var styledDoc=(this.getDocument$());
var styleNames=styledDoc.getStyleNames$();
while (styleNames.hasMoreElements$()){
var s=styledDoc.getStyle$S(styleNames.nextElement$());
if (s.getAttributeCount$() == 1 && s.isDefined$O($I$(3).NameAttribute) ) {
continue;
}this.indent$();
this.write$S("p." + p$1.addStyleName$S.apply(this, [s.getName$()]));
this.write$S(" {\n");
this.incrIndent$();
this.writeAttributes$javax_swing_text_AttributeSet(s);
this.decrIndent$();
this.indent$();
this.write$S("}\n");
}
});

Clazz.newMeth(C$, 'writeBody$',  function () {
var it=this.getElementIterator$();
it.current$();
var next;
this.writeStartTag$S("<body>");
var inContent=false;
while ((next=it.next$()) != null ){
if (!this.inRange$javax_swing_text_Element(next)) {
continue;
}if (Clazz.instanceOf(next, "javax.swing.text.AbstractDocument.BranchElement")) {
if (inContent) {
this.writeEndParagraph$();
inContent=false;
this.fontMask=0;
}this.writeStartParagraph$javax_swing_text_Element(next);
} else if (this.isText$javax_swing_text_Element(next)) {
this.writeContent$javax_swing_text_Element$Z(next, !inContent);
inContent=true;
} else {
this.writeLeaf$javax_swing_text_Element(next);
inContent=true;
}}
if (inContent) {
this.writeEndParagraph$();
}this.writeEndTag$S("</body>");
});

Clazz.newMeth(C$, 'writeEndParagraph$',  function () {
p$1.writeEndMask$I.apply(this, [this.fontMask]);
if (this.inFontTag$()) {
p$1.endSpanTag.apply(this, []);
} else {
this.write$C("\n");
}this.writeEndTag$S("</p>");
});

Clazz.newMeth(C$, 'writeStartParagraph$javax_swing_text_Element',  function (elem) {
var attr=elem.getAttributes$();
var resolveAttr=attr.getAttribute$O($I$(3).ResolveAttribute);
if (Clazz.instanceOf(resolveAttr, "javax.swing.text.StyleContext.NamedStyle")) {
this.writeStartTag$S("<p class=" + p$1.mapStyleName$S.apply(this, [(resolveAttr).getName$()]) + ">" );
} else {
this.writeStartTag$S("<p>");
}});

Clazz.newMeth(C$, 'writeLeaf$javax_swing_text_Element',  function (elem) {
this.indent$();
if (elem.getName$() == "icon") {
this.writeImage$javax_swing_text_Element(elem);
} else if (elem.getName$() == "component") {
this.writeComponent$javax_swing_text_Element(elem);
}});

Clazz.newMeth(C$, 'writeImage$javax_swing_text_Element',  function (elem) {
});

Clazz.newMeth(C$, 'writeComponent$javax_swing_text_Element',  function (elem) {
});

Clazz.newMeth(C$, 'isText$javax_swing_text_Element',  function (elem) {
return (elem.getName$() == "content");
});

Clazz.newMeth(C$, 'writeContent$javax_swing_text_Element$Z',  function (elem, needsIndenting) {
var attr=elem.getAttributes$();
this.writeNonHTMLAttributes$javax_swing_text_AttributeSet(attr);
if (needsIndenting) {
this.indent$();
}this.writeHTMLTags$javax_swing_text_AttributeSet(attr);
this.text$javax_swing_text_Element(elem);
});

Clazz.newMeth(C$, 'writeHTMLTags$javax_swing_text_AttributeSet',  function (attr) {
var oldMask=this.fontMask;
p$1.setFontMask$javax_swing_text_AttributeSet.apply(this, [attr]);
var endMask=0;
var startMask=0;
if ((oldMask & 1) != 0) {
if ((this.fontMask & 1) == 0) {
endMask|=1;
}} else if ((this.fontMask & 1) != 0) {
startMask|=1;
}if ((oldMask & 2) != 0) {
if ((this.fontMask & 2) == 0) {
endMask|=2;
}} else if ((this.fontMask & 2) != 0) {
startMask|=2;
}if ((oldMask & 4) != 0) {
if ((this.fontMask & 4) == 0) {
endMask|=4;
}} else if ((this.fontMask & 4) != 0) {
startMask|=4;
}p$1.writeEndMask$I.apply(this, [endMask]);
p$1.writeStartMask$I.apply(this, [startMask]);
});

Clazz.newMeth(C$, 'setFontMask$javax_swing_text_AttributeSet',  function (attr) {
if ($I$(3).isBold$javax_swing_text_AttributeSet(attr)) {
this.fontMask|=1;
}if ($I$(3).isItalic$javax_swing_text_AttributeSet(attr)) {
this.fontMask|=2;
}if ($I$(3).isUnderline$javax_swing_text_AttributeSet(attr)) {
this.fontMask|=4;
}}, p$1);

Clazz.newMeth(C$, 'writeStartMask$I',  function (mask) {
if (mask != 0) {
if ((mask & 4) != 0) {
this.write$S("<u>");
}if ((mask & 2) != 0) {
this.write$S("<i>");
}if ((mask & 1) != 0) {
this.write$S("<b>");
}}}, p$1);

Clazz.newMeth(C$, 'writeEndMask$I',  function (mask) {
if (mask != 0) {
if ((mask & 1) != 0) {
this.write$S("</b>");
}if ((mask & 2) != 0) {
this.write$S("</i>");
}if ((mask & 4) != 0) {
this.write$S("</u>");
}}}, p$1);

Clazz.newMeth(C$, 'writeNonHTMLAttributes$javax_swing_text_AttributeSet',  function (attr) {
var style="";
var separator="; ";
if (this.inFontTag$() && this.fontAttributes.isEqual$javax_swing_text_AttributeSet(attr) ) {
return;
}var first=true;
var color=attr.getAttribute$O($I$(3).Foreground);
if (color != null ) {
style+="color: " + C$.css.styleConstantsValueToCSSValue$javax_swing_text_StyleConstants$O($I$(3).Foreground, color);
first=false;
}var size=attr.getAttribute$O($I$(3).FontSize);
if (size != null ) {
if (!first) {
style+=separator;
}style+="font-size: " + size.intValue$() + "pt" ;
first=false;
}var family=attr.getAttribute$O($I$(3).FontFamily);
if (family != null ) {
if (!first) {
style+=separator;
}style+="font-family: " + family;
first=false;
}if (style.length$() > 0) {
if (this.fontMask != 0) {
p$1.writeEndMask$I.apply(this, [this.fontMask]);
this.fontMask=0;
}p$1.startSpanTag$S.apply(this, [style]);
this.fontAttributes=attr;
} else if (this.fontAttributes != null ) {
p$1.writeEndMask$I.apply(this, [this.fontMask]);
this.fontMask=0;
p$1.endSpanTag.apply(this, []);
}});

Clazz.newMeth(C$, 'inFontTag$',  function () {
return (this.fontAttributes != null );
});

Clazz.newMeth(C$, 'endFontTag$',  function () {
this.write$C("\n");
this.writeEndTag$S("</font>");
this.fontAttributes=null;
});

Clazz.newMeth(C$, 'startFontTag$S',  function (style) {
var callIndent=false;
if (this.inFontTag$()) {
this.endFontTag$();
callIndent=true;
}this.writeStartTag$S("<font style=\"" + style + "\">" );
if (callIndent) {
this.indent$();
}});

Clazz.newMeth(C$, 'startSpanTag$S',  function (style) {
var callIndent=false;
if (this.inFontTag$()) {
p$1.endSpanTag.apply(this, []);
callIndent=true;
}this.writeStartTag$S("<span style=\"" + style + "\">" );
if (callIndent) {
this.indent$();
}}, p$1);

Clazz.newMeth(C$, 'endSpanTag',  function () {
this.write$C("\n");
this.writeEndTag$S("</span>");
this.fontAttributes=null;
}, p$1);

Clazz.newMeth(C$, 'addStyleName$S',  function (style) {
if (this.styleNameMapping == null ) {
return style;
}var sb=null;
for (var counter=style.length$() - 1; counter >= 0; counter--) {
if (!p$1.isValidCharacter$C.apply(this, [style.charAt$I(counter)])) {
if (sb == null ) {
sb=Clazz.new_($I$(4,1).c$$S,[style]);
}sb.setCharAt$I$C(counter, "a");
}}
var mappedName=(sb != null ) ? sb.toString() : style;
while (this.styleNameMapping.get$O(mappedName) != null ){
mappedName=mappedName + 'x';
}
this.styleNameMapping.put$O$O(style, mappedName);
return mappedName;
}, p$1);

Clazz.newMeth(C$, 'mapStyleName$S',  function (style) {
if (this.styleNameMapping == null ) {
return style;
}var retValue=this.styleNameMapping.get$O(style);
return (retValue == null ) ? style : retValue;
}, p$1);

Clazz.newMeth(C$, 'isValidCharacter$C',  function (character) {
return ((character >= "a" && character <= "z" ) || (character >= "A" && character <= "Z" ) );
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.css=Clazz.new_($I$(1,1));
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:29 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
