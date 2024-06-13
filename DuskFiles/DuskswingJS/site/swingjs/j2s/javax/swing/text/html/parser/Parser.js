(function(){var P$=Clazz.newPackage("javax.swing.text.html.parser"),p$1={},I$=[[0,'javax.swing.text.SimpleAttributeSet','javax.swing.text.html.parser.TagElement','java.io.CharArrayReader','javax.swing.text.html.HTML','javax.swing.text.html.parser.TagStack','java.util.Vector','StringBuilder','StringBuffer',['javax.swing.text.html.HTML','.Attribute'],'Thread']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Parser", null, null, 'javax.swing.text.html.parser.DTDConstants');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.text=Clazz.array(Character.TYPE, [1024]);
this.textpos=0;
this.str=Clazz.array(Character.TYPE, [128]);
this.strpos=0;
this.dtd=null;
this.skipTag=false;
this.lastFormSent=null;
this.attributes=Clazz.new_($I$(1,1));
this.seenHtml=false;
this.seenHead=false;
this.seenBody=false;
this.strict=false;
this.buf=Clazz.array(Character.TYPE, [1]);
},1);

C$.$fields$=[['Z',['space','skipTag','seenHtml','seenHead','seenBody','ignoreSpace','strict'],'I',['textpos','strpos','ch','ln','crlfCount','crCount','lfCount','currentBlockStartPos','lastBlockStartPos','pos','len','currentPosition'],'O',['+text','last','javax.swing.text.html.parser.TagElement','str','char[]','dtd','javax.swing.text.html.parser.DTD','$in','java.io.Reader','recent','javax.swing.text.html.parser.Element','stack','javax.swing.text.html.parser.TagStack','lastFormSent','javax.swing.text.html.parser.TagElement','attributes','javax.swing.text.SimpleAttributeSet','buf','char[]']]
,['O',['cp1252Map','char[]','+SCRIPT_END_TAG','+SCRIPT_END_TAG_UPPER_CASE']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_html_parser_DTD',  function (dtd) {
;C$.$init$.apply(this);
this.dtd=dtd;
}, 1);

Clazz.newMeth(C$, 'getCurrentLine$',  function () {
return this.ln;
});

Clazz.newMeth(C$, 'getBlockStartPosition$',  function () {
return Math.max(0, this.lastBlockStartPos - 1);
});

Clazz.newMeth(C$, 'makeTag$javax_swing_text_html_parser_Element$Z',  function (elem, fictional) {
return Clazz.new_($I$(2,1).c$$javax_swing_text_html_parser_Element$Z,[elem, fictional]);
});

Clazz.newMeth(C$, 'makeTag$javax_swing_text_html_parser_Element',  function (elem) {
return this.makeTag$javax_swing_text_html_parser_Element$Z(elem, false);
});

Clazz.newMeth(C$, 'getAttributes$',  function () {
return this.attributes;
});

Clazz.newMeth(C$, 'flushAttributes$',  function () {
this.attributes.removeAttributes$javax_swing_text_AttributeSet(this.attributes);
});

Clazz.newMeth(C$, 'handleText$CA',  function (text) {
});

Clazz.newMeth(C$, 'handleTitle$CA',  function (text) {
this.handleText$CA(text);
});

Clazz.newMeth(C$, 'handleComment$CA',  function (text) {
});

Clazz.newMeth(C$, 'handleEOFInComment$',  function () {
var commentEndPos=this.strIndexOf$C("\n");
if (commentEndPos >= 0) {
this.handleComment$CA(this.getChars$I$I(0, commentEndPos));
try {
this.$in.close$();
this.$in=Clazz.new_([this.getChars$I(commentEndPos + 1)],$I$(3,1).c$$CA);
this.ch=">".$c();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
this.error$S("ioexception");
} else {
throw e;
}
}
this.resetStrBuffer$();
} else {
this.error$S("eof.comment");
}});

Clazz.newMeth(C$, 'handleEmptyTag$javax_swing_text_html_parser_TagElement',  function (tag) {
});

Clazz.newMeth(C$, 'handleStartTag$javax_swing_text_html_parser_TagElement',  function (tag) {
});

Clazz.newMeth(C$, 'handleEndTag$javax_swing_text_html_parser_TagElement',  function (tag) {
});

Clazz.newMeth(C$, 'handleError$I$S',  function (ln, msg) {
});

Clazz.newMeth(C$, 'handleText$javax_swing_text_html_parser_TagElement',  function (tag) {
if (tag.breaksFlow$()) {
this.space=false;
if (!this.strict) {
this.ignoreSpace=true;
}}if (this.textpos == 0) {
if ((!this.space) || (this.stack == null ) || this.last.breaksFlow$() || !this.stack.advance$javax_swing_text_html_parser_Element(this.dtd.pcdata)  ) {
this.last=tag;
this.space=false;
this.lastBlockStartPos=this.currentBlockStartPos;
return;
}}if (this.space) {
if (!this.ignoreSpace) {
if (this.textpos + 1 > this.text.length) {
var newtext=Clazz.array(Character.TYPE, [this.text.length + 200]);
System.arraycopy$O$I$O$I$I(this.text, 0, newtext, 0, this.text.length);
this.text=newtext;
}this.text[this.textpos++]=" ";
if (!this.strict && !tag.getElement$().isEmpty$() ) {
this.ignoreSpace=true;
}}this.space=false;
}var newtext=Clazz.array(Character.TYPE, [this.textpos]);
System.arraycopy$O$I$O$I$I(this.text, 0, newtext, 0, this.textpos);
if (tag.getElement$().getName$().equals$O("title")) {
this.handleTitle$CA(newtext);
} else {
this.handleText$CA(newtext);
}this.lastBlockStartPos=this.currentBlockStartPos;
this.textpos=0;
this.last=tag;
this.space=false;
});

Clazz.newMeth(C$, 'error$S$S$S$S',  function (err, arg1, arg2, arg3) {
this.handleError$I$S(this.ln, err + " " + arg1 + " " + arg2 + " " + arg3 );
});

Clazz.newMeth(C$, 'error$S$S$S',  function (err, arg1, arg2) {
this.error$S$S$S$S(err, arg1, arg2, "?");
});

Clazz.newMeth(C$, 'error$S$S',  function (err, arg1) {
this.error$S$S$S$S(err, arg1, "?", "?");
});

Clazz.newMeth(C$, 'error$S',  function (err) {
this.error$S$S$S$S(err, "?", "?", "?");
});

Clazz.newMeth(C$, 'startTag$javax_swing_text_html_parser_TagElement',  function (tag) {
var elem=tag.getElement$();
if (!elem.isEmpty$() || ((this.last != null ) && !this.last.breaksFlow$() ) || (this.textpos != 0)  ) {
this.handleText$javax_swing_text_html_parser_TagElement(tag);
} else {
this.last=tag;
this.space=false;
}this.lastBlockStartPos=this.currentBlockStartPos;
for (var a=elem.atts; a != null ; a=a.next) {
if ((a.modifier == 2) && ((this.attributes.isEmpty$()) || ((!this.attributes.isDefined$O(a.name)) && (!this.attributes.isDefined$O($I$(4).getAttributeKey$S(a.name))) ) ) ) {
this.error$S$S$S("req.att ", a.getName$(), elem.getName$());
}}
if (elem.isEmpty$()) {
this.handleEmptyTag$javax_swing_text_html_parser_TagElement(tag);
} else {
this.recent=elem;
this.stack=Clazz.new_($I$(5,1).c$$javax_swing_text_html_parser_TagElement$javax_swing_text_html_parser_TagStack,[tag, this.stack]);
this.handleStartTag$javax_swing_text_html_parser_TagElement(tag);
}});

Clazz.newMeth(C$, 'endTag$Z',  function (omitted) {
this.handleText$javax_swing_text_html_parser_TagElement(this.stack.tag);
if (omitted && !this.stack.elem.omitEnd$() ) {
this.error$S$S("end.missing", this.stack.elem.getName$());
} else if (!this.stack.terminate$()) {
this.error$S$S("end.unexpected", this.stack.elem.getName$());
}this.handleEndTag$javax_swing_text_html_parser_TagElement(this.stack.tag);
this.stack=this.stack.next;
this.recent=(this.stack != null ) ? this.stack.elem : null;
});

Clazz.newMeth(C$, 'ignoreElement$javax_swing_text_html_parser_Element',  function (elem) {
var stackElement=this.stack.elem.getName$();
var elemName=elem.getName$();
if ((elemName.equals$O("html") && this.seenHtml ) || (elemName.equals$O("head") && this.seenHead ) || (elemName.equals$O("body") && this.seenBody )  ) {
return true;
}if (elemName.equals$O("dt") || elemName.equals$O("dd") ) {
var s=this.stack;
while (s != null  && !s.elem.getName$().equals$O("dl") ){
s=s.next;
}
if (s == null ) {
return true;
}}if (((stackElement.equals$O("table")) && (!elemName.equals$O("#pcdata")) && (!elemName.equals$O("input"))  ) || ((elemName.equals$O("font")) && (stackElement.equals$O("ul") || stackElement.equals$O("ol") ) ) || (elemName.equals$O("meta") && this.stack != null  ) || (elemName.equals$O("style") && this.seenBody ) || (stackElement.equals$O("table") && elemName.equals$O("a") )  ) {
return true;
}return false;
});

Clazz.newMeth(C$, 'markFirstTime$javax_swing_text_html_parser_Element',  function (elem) {
var elemName=elem.getName$();
if (elemName.equals$O("html")) {
this.seenHtml=true;
} else if (elemName.equals$O("head")) {
this.seenHead=true;
} else if (elemName.equals$O("body")) {
if (this.buf.length == 1) {
var newBuf=Clazz.array(Character.TYPE, [256]);
newBuf[0]=this.buf[0];
this.buf=newBuf;
}this.seenBody=true;
}});

Clazz.newMeth(C$, 'legalElementContext$javax_swing_text_html_parser_Element',  function (elem) {
if (this.stack == null ) {
if (elem !== this.dtd.html ) {
this.startTag$javax_swing_text_html_parser_TagElement(this.makeTag$javax_swing_text_html_parser_Element$Z(this.dtd.html, true));
return this.legalElementContext$javax_swing_text_html_parser_Element(elem);
}return true;
}if (this.stack.advance$javax_swing_text_html_parser_Element(elem)) {
this.markFirstTime$javax_swing_text_html_parser_Element(elem);
return true;
}var insertTag=false;
var stackElemName=this.stack.elem.getName$();
var elemName=elem.getName$();
if (!this.strict && ((stackElemName.equals$O("table") && elemName.equals$O("td") ) || (stackElemName.equals$O("table") && elemName.equals$O("th") ) || (stackElemName.equals$O("tr") && !elemName.equals$O("tr") )  ) ) {
insertTag=true;
}if (!this.strict && !insertTag && (this.stack.elem.getName$() != elem.getName$() || elem.getName$().equals$O("body") )  ) {
if (this.skipTag=this.ignoreElement$javax_swing_text_html_parser_Element(elem)) {
this.error$S$S("tag.ignore", elem.getName$());
return this.skipTag;
}}if (!this.strict && stackElemName.equals$O("table") && !elemName.equals$O("tr") && !elemName.equals$O("td") && !elemName.equals$O("th") && !elemName.equals$O("caption")  ) {
var e=this.dtd.getElement$S("tr");
var t=this.makeTag$javax_swing_text_html_parser_Element$Z(e, true);
this.legalTagContext$javax_swing_text_html_parser_TagElement(t);
this.startTag$javax_swing_text_html_parser_TagElement(t);
this.error$S$S("start.missing", elem.getName$());
return this.legalElementContext$javax_swing_text_html_parser_Element(elem);
}if (!insertTag && this.stack.terminate$() && (!this.strict || this.stack.elem.omitEnd$() )  ) {
for (var s=this.stack.next; s != null ; s=s.next) {
if (s.advance$javax_swing_text_html_parser_Element(elem)) {
while (this.stack !== s ){
this.endTag$Z(true);
}
return true;
}if (!s.terminate$() || (this.strict && !s.elem.omitEnd$() ) ) {
break;
}}
}var next=this.stack.first$();
if (next != null  && (!this.strict || next.omitStart$() )  && !(next === this.dtd.head  && elem === this.dtd.pcdata  ) ) {
var t=this.makeTag$javax_swing_text_html_parser_Element$Z(next, true);
this.legalTagContext$javax_swing_text_html_parser_TagElement(t);
this.startTag$javax_swing_text_html_parser_TagElement(t);
if (!next.omitStart$()) {
this.error$S$S("start.missing", elem.getName$());
}return this.legalElementContext$javax_swing_text_html_parser_Element(elem);
}if (!this.strict) {
var content=this.stack.contentModel$();
var elemVec=Clazz.new_($I$(6,1));
if (content != null ) {
content.getElements$java_util_Vector(elemVec);
for (var e, $e = elemVec.iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
if (this.stack.excluded$I(e.getIndex$())) {
continue;
}var reqAtts=false;
for (var a=e.getAttributes$(); a != null ; a=a.next) {
if (a.modifier == 2) {
reqAtts=true;
break;
}}
if (reqAtts) {
continue;
}var m=e.getContent$();
if (m != null  && m.first$O(elem) ) {
var t=this.makeTag$javax_swing_text_html_parser_Element$Z(e, true);
this.legalTagContext$javax_swing_text_html_parser_TagElement(t);
this.startTag$javax_swing_text_html_parser_TagElement(t);
this.error$S$S("start.missing", e.getName$());
return this.legalElementContext$javax_swing_text_html_parser_Element(elem);
}}
}}if (this.stack.terminate$() && (this.stack.elem !== this.dtd.body ) && (!this.strict || this.stack.elem.omitEnd$() )  ) {
if (!this.stack.elem.omitEnd$()) {
this.error$S$S("end.missing", elem.getName$());
}this.endTag$Z(true);
return this.legalElementContext$javax_swing_text_html_parser_Element(elem);
}return false;
});

Clazz.newMeth(C$, 'legalTagContext$javax_swing_text_html_parser_TagElement',  function (tag) {
if (this.legalElementContext$javax_swing_text_html_parser_Element(tag.getElement$())) {
this.markFirstTime$javax_swing_text_html_parser_Element(tag.getElement$());
return;
}if (tag.breaksFlow$() && (this.stack != null ) && !this.stack.tag.breaksFlow$()  ) {
this.endTag$Z(true);
this.legalTagContext$javax_swing_text_html_parser_TagElement(tag);
return;
}for (var s=this.stack; s != null ; s=s.next) {
if (s.tag.getElement$() === this.dtd.head ) {
while (this.stack !== s ){
this.endTag$Z(true);
}
this.endTag$Z(true);
this.legalTagContext$javax_swing_text_html_parser_TagElement(tag);
return;
}}
this.error$S$S("tag.unexpected", tag.getElement$().getName$());
});

Clazz.newMeth(C$, 'errorContext$',  function () {
for (; (this.stack != null ) && (this.stack.tag.getElement$() !== this.dtd.body ) ; this.stack=this.stack.next) {
this.handleEndTag$javax_swing_text_html_parser_TagElement(this.stack.tag);
}
if (this.stack == null ) {
this.legalElementContext$javax_swing_text_html_parser_Element(this.dtd.body);
this.startTag$javax_swing_text_html_parser_TagElement(this.makeTag$javax_swing_text_html_parser_Element$Z(this.dtd.body, true));
}});

Clazz.newMeth(C$, 'addString$I',  function (c) {
if (this.strpos == this.str.length) {
var newstr=Clazz.array(Character.TYPE, [this.str.length + 128]);
System.arraycopy$O$I$O$I$I(this.str, 0, newstr, 0, this.str.length);
this.str=newstr;
}this.str[this.strpos++]=String.fromCharCode(c);
});

Clazz.newMeth(C$, 'getString$I',  function (pos) {
var newStr=Clazz.array(Character.TYPE, [this.strpos - pos]);
System.arraycopy$O$I$O$I$I(this.str, pos, newStr, 0, this.strpos - pos);
this.strpos=pos;
return  String.instantialize(newStr);
});

Clazz.newMeth(C$, 'getChars$I',  function (pos) {
var newStr=Clazz.array(Character.TYPE, [this.strpos - pos]);
System.arraycopy$O$I$O$I$I(this.str, pos, newStr, 0, this.strpos - pos);
this.strpos=pos;
return newStr;
});

Clazz.newMeth(C$, 'getChars$I$I',  function (pos, endPos) {
var newStr=Clazz.array(Character.TYPE, [endPos - pos]);
System.arraycopy$O$I$O$I$I(this.str, pos, newStr, 0, endPos - pos);
return newStr;
});

Clazz.newMeth(C$, 'resetStrBuffer$',  function () {
this.strpos=0;
});

Clazz.newMeth(C$, 'strIndexOf$C',  function (target) {
for (var i=0; i < this.strpos; i++) {
if (this.str[i] == target) {
return i;
}}
return -1;
});

Clazz.newMeth(C$, 'skipSpace$',  function () {
while (true){
switch (this.ch) {
case 10:
++this.ln;
this.ch=p$1.readCh.apply(this, []);
++this.lfCount;
break;
case 13:
++this.ln;
if ((this.ch=p$1.readCh.apply(this, [])) == 10 ) {
this.ch=p$1.readCh.apply(this, []);
++this.crlfCount;
} else {
++this.crCount;
}break;
case 32:
case 9:
this.ch=p$1.readCh.apply(this, []);
break;
default:
return;
}
}
});

Clazz.newMeth(C$, 'parseIdentifier$Z',  function (lower) {
switch (this.ch) {
case 65:
case 66:
case 67:
case 68:
case 69:
case 70:
case 71:
case 72:
case 73:
case 74:
case 75:
case 76:
case 77:
case 78:
case 79:
case 80:
case 81:
case 82:
case 83:
case 84:
case 85:
case 86:
case 87:
case 88:
case 89:
case 90:
if (lower) {
this.ch=97 + (this.ch - 65);
}case 97:
case 98:
case 99:
case 100:
case 101:
case 102:
case 103:
case 104:
case 105:
case 106:
case 107:
case 108:
case 109:
case 110:
case 111:
case 112:
case 113:
case 114:
case 115:
case 116:
case 117:
case 118:
case 119:
case 120:
case 121:
case 122:
break;
default:
return false;
}
while (true){
this.addString$I(this.ch);
switch (this.ch=p$1.readCh.apply(this, [])) {
case 65:
case 66:
case 67:
case 68:
case 69:
case 70:
case 71:
case 72:
case 73:
case 74:
case 75:
case 76:
case 77:
case 78:
case 79:
case 80:
case 81:
case 82:
case 83:
case 84:
case 85:
case 86:
case 87:
case 88:
case 89:
case 90:
if (lower) {
this.ch=97 + (this.ch - 65);
}case 97:
case 98:
case 99:
case 100:
case 101:
case 102:
case 103:
case 104:
case 105:
case 106:
case 107:
case 108:
case 109:
case 110:
case 111:
case 112:
case 113:
case 114:
case 115:
case 116:
case 117:
case 118:
case 119:
case 120:
case 121:
case 122:
case 48:
case 49:
case 50:
case 51:
case 52:
case 53:
case 54:
case 55:
case 56:
case 57:
case 46:
case 45:
case 95:
break;
default:
return true;
}
}
});

Clazz.newMeth(C$, 'parseEntityReference',  function () {
var pos=this.strpos;
if ((this.ch=p$1.readCh.apply(this, [])) == 35 ) {
var n=0;
this.ch=p$1.readCh.apply(this, []);
if ((this.ch >= 48 ) && (this.ch <= 57 )  || this.ch == 120   || this.ch == 88  ) {
if ((this.ch >= 48 ) && (this.ch <= 57 ) ) {
while ((this.ch >= 48 ) && (this.ch <= 57 ) ){
n=(n * 10) + this.ch - 48;
this.ch=p$1.readCh.apply(this, []);
}
} else {
this.ch=p$1.readCh.apply(this, []);
var lch=String.fromCharCode(Character.toLowerCase$I(this.ch));
while ((lch >= "0") && (lch <= "9")  || (lch >= "a") && (lch <= "f")  ){
if (lch >= "0" && lch <= "9" ) {
n=(n * 16) + lch.$c() - 48;
} else {
n=(n * 16) + lch.$c() - 97 + 10;
}this.ch=p$1.readCh.apply(this, []);
lch=String.fromCharCode(Character.toLowerCase$I(this.ch));
}
}switch (this.ch) {
case 10:
++this.ln;
this.ch=p$1.readCh.apply(this, []);
++this.lfCount;
break;
case 13:
++this.ln;
if ((this.ch=p$1.readCh.apply(this, [])) == 10 ) {
this.ch=p$1.readCh.apply(this, []);
++this.crlfCount;
} else {
++this.crCount;
}break;
case 59:
this.ch=p$1.readCh.apply(this, []);
break;
}
var data=p$1.mapNumericReference$I.apply(this, [n]);
return data;
}this.addString$I("#".$c());
if (!this.parseIdentifier$Z(false)) {
this.error$S("ident.expected");
this.strpos=pos;
var data=Clazz.array(Character.TYPE, -1, ["&", "#"]);
return data;
}} else if (!this.parseIdentifier$Z(false)) {
var data=Clazz.array(Character.TYPE, -1, ["&"]);
return data;
}var semicolon=false;
switch (this.ch) {
case 10:
++this.ln;
this.ch=p$1.readCh.apply(this, []);
++this.lfCount;
break;
case 13:
++this.ln;
if ((this.ch=p$1.readCh.apply(this, [])) == 10 ) {
this.ch=p$1.readCh.apply(this, []);
++this.crlfCount;
} else {
++this.crCount;
}break;
case 59:
semicolon=true;
this.ch=p$1.readCh.apply(this, []);
break;
}
var nm=this.getString$I(pos);
var ent=this.dtd.getEntity$S(nm);
if (!this.strict && (ent == null ) ) {
ent=this.dtd.getEntity$S(nm.toLowerCase$());
}if ((ent == null ) || !ent.isGeneral$() ) {
if (nm.length$() == 0) {
this.error$S$S("invalid.entref", nm);
return Clazz.array(Character.TYPE, [0]);
}var str="&" + nm + (semicolon ? ";" : "") ;
var b=Clazz.array(Character.TYPE, [str.length$()]);
str.getChars$I$I$CA$I(0, b.length, b, 0);
return b;
}return ent.getData$();
}, p$1);

Clazz.newMeth(C$, 'mapNumericReference$I',  function (c) {
var data;
if (c >= 65535) {
try {
data=Character.toChars$I(c);
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
data=Clazz.array(Character.TYPE, [0]);
} else {
throw e;
}
}
} else {
data=Clazz.array(Character.TYPE, [1]);
data[0]=(c < 130 || c > 159 ) ? String.fromCharCode(c) : C$.cp1252Map[c - 130];
}return data;
}, p$1);

Clazz.newMeth(C$, 'parseComment$',  function () {
while (true){
var c=this.ch;
switch (c) {
case 45:
if (!this.strict && (this.strpos != 0) && (this.str[this.strpos - 1] == "-")  ) {
if ((this.ch=p$1.readCh.apply(this, [])) == 62 ) {
return;
}if (this.ch == 33 ) {
if ((this.ch=p$1.readCh.apply(this, [])) == 62 ) {
return;
} else {
this.addString$I("-".$c());
this.addString$I("!".$c());
continue;
}}break;
}if ((this.ch=p$1.readCh.apply(this, [])) == 45 ) {
this.ch=p$1.readCh.apply(this, []);
if (this.strict || this.ch == 62  ) {
return;
}if (this.ch == 33 ) {
if ((this.ch=p$1.readCh.apply(this, [])) == 62 ) {
return;
} else {
this.addString$I("-".$c());
this.addString$I("!".$c());
continue;
}}this.addString$I("-".$c());
}break;
case -1:
this.handleEOFInComment$();
return;
case 10:
++this.ln;
this.ch=p$1.readCh.apply(this, []);
++this.lfCount;
break;
case 62:
this.ch=p$1.readCh.apply(this, []);
break;
case 13:
++this.ln;
if ((this.ch=p$1.readCh.apply(this, [])) == 10 ) {
this.ch=p$1.readCh.apply(this, []);
++this.crlfCount;
} else {
++this.crCount;
}c="\n".$c();
break;
default:
this.ch=p$1.readCh.apply(this, []);
break;
}
this.addString$I(c);
}
});

Clazz.newMeth(C$, 'parseLiteral$Z',  function (replace) {
while (true){
var c=this.ch;
switch (c) {
case -1:
this.error$S$S("eof.literal", this.stack.elem.getName$());
this.endTag$Z(true);
return;
case 62:
this.ch=p$1.readCh.apply(this, []);
var i=this.textpos - (this.stack.elem.name.length$() + 2);
var j=0;
if ((i >= 0) && (this.text[i++] == "<") && (this.text[i] == "/")  ) {
while ((++i < this.textpos) && (Character.toLowerCase$C(this.text[i]) == this.stack.elem.name.charAt$I(j++)) );
if (i == this.textpos) {
this.textpos-=(this.stack.elem.name.length$() + 2);
if ((this.textpos > 0) && (this.text[this.textpos - 1] == "\n") ) {
--this.textpos;
}this.endTag$Z(false);
return;
}}break;
case 38:
var data=p$1.parseEntityReference.apply(this, []);
if (this.textpos + data.length > this.text.length) {
var newtext=Clazz.array(Character.TYPE, [Math.max(this.textpos + data.length + 128 , this.text.length * 2)]);
System.arraycopy$O$I$O$I$I(this.text, 0, newtext, 0, this.text.length);
this.text=newtext;
}System.arraycopy$O$I$O$I$I(data, 0, this.text, this.textpos, data.length);
this.textpos+=data.length;
continue;
case 10:
++this.ln;
this.ch=p$1.readCh.apply(this, []);
++this.lfCount;
break;
case 13:
++this.ln;
if ((this.ch=p$1.readCh.apply(this, [])) == 10 ) {
this.ch=p$1.readCh.apply(this, []);
++this.crlfCount;
} else {
++this.crCount;
}c="\n".$c();
break;
default:
this.ch=p$1.readCh.apply(this, []);
break;
}
if (this.textpos == this.text.length) {
var newtext=Clazz.array(Character.TYPE, [this.text.length + 128]);
System.arraycopy$O$I$O$I$I(this.text, 0, newtext, 0, this.text.length);
this.text=newtext;
}this.text[this.textpos++]=String.fromCharCode(c);
}
});

Clazz.newMeth(C$, 'parseAttributeValue$Z',  function (lower) {
var delim=-1;
switch (this.ch) {
case 39:
case 34:
delim=this.ch;
this.ch=p$1.readCh.apply(this, []);
break;
}
while (true){
var c=this.ch;
switch (c) {
case 10:
++this.ln;
this.ch=p$1.readCh.apply(this, []);
++this.lfCount;
if (delim < 0) {
return this.getString$I(0);
}break;
case 13:
++this.ln;
if ((this.ch=p$1.readCh.apply(this, [])) == 10 ) {
this.ch=p$1.readCh.apply(this, []);
++this.crlfCount;
} else {
++this.crCount;
}if (delim < 0) {
return this.getString$I(0);
}break;
case 9:
if (delim < 0) c=" ".$c();
case 32:
this.ch=p$1.readCh.apply(this, []);
if (delim < 0) {
return this.getString$I(0);
}break;
case 62:
case 60:
if (delim < 0) {
return this.getString$I(0);
}this.ch=p$1.readCh.apply(this, []);
break;
case 39:
case 34:
this.ch=p$1.readCh.apply(this, []);
if (c == delim) {
return this.getString$I(0);
} else if (delim == -1) {
this.error$S("attvalerr");
if (this.strict || this.ch == 32  ) {
return this.getString$I(0);
} else {
continue;
}}break;
case 61:
if (delim < 0) {
this.error$S("attvalerr");
if (this.strict) {
return this.getString$I(0);
}}this.ch=p$1.readCh.apply(this, []);
break;
case 38:
if (this.strict && delim < 0 ) {
this.ch=p$1.readCh.apply(this, []);
break;
}var data=p$1.parseEntityReference.apply(this, []);
for (var i=0; i < data.length; i++) {
c=data[i].$c();
this.addString$I((lower && (c >= 65 ) && (c <= 90 )  ) ? 97 + c - 65 : c);
}
continue;
case -1:
return this.getString$I(0);
default:
if (lower && (c >= 65 ) && (c <= 90 )  ) {
c=97 + c - 65;
}this.ch=p$1.readCh.apply(this, []);
break;
}
this.addString$I(c);
}
});

Clazz.newMeth(C$, 'parseAttributeSpecificationList$javax_swing_text_html_parser_Element',  function (elem) {
while (true){
this.skipSpace$();
switch (this.ch) {
case 47:
case 62:
case 60:
case -1:
return;
case 45:
if ((this.ch=p$1.readCh.apply(this, [])) == 45 ) {
this.ch=p$1.readCh.apply(this, []);
this.parseComment$();
this.strpos=0;
} else {
this.error$S$S$S("invalid.tagchar", "-", elem.getName$());
this.ch=p$1.readCh.apply(this, []);
}continue;
}
var att;
var attname;
var attvalue;
if (this.parseIdentifier$Z(true)) {
attname=this.getString$I(0);
this.skipSpace$();
if (this.ch == 61 ) {
this.ch=p$1.readCh.apply(this, []);
this.skipSpace$();
att=elem.getAttribute$S(attname);
attvalue=this.parseAttributeValue$Z((att != null ) && (att.type != 1) && (att.type != 11) && (att.type != 7)  );
} else {
attvalue=attname;
att=elem.getAttributeByValue$S(attvalue);
if (att == null ) {
att=elem.getAttribute$S(attname);
if (att != null ) {
attvalue=att.getValue$();
} else {
attvalue=null;
}}}} else if (!this.strict && this.ch == 44  ) {
this.ch=p$1.readCh.apply(this, []);
continue;
} else if (!this.strict && this.ch == 34  ) {
this.ch=p$1.readCh.apply(this, []);
this.skipSpace$();
if (this.parseIdentifier$Z(true)) {
attname=this.getString$I(0);
if (this.ch == 34 ) {
this.ch=p$1.readCh.apply(this, []);
}this.skipSpace$();
if (this.ch == 61 ) {
this.ch=p$1.readCh.apply(this, []);
this.skipSpace$();
att=elem.getAttribute$S(attname);
attvalue=this.parseAttributeValue$Z((att != null ) && (att.type != 1) && (att.type != 11)  );
} else {
attvalue=attname;
att=elem.getAttributeByValue$S(attvalue);
if (att == null ) {
att=elem.getAttribute$S(attname);
if (att != null ) {
attvalue=att.getValue$();
}}}} else {
var str=Clazz.array(Character.TYPE, -1, [String.fromCharCode(this.ch)]);
this.error$S$S$S("invalid.tagchar",  String.instantialize(str), elem.getName$());
this.ch=p$1.readCh.apply(this, []);
continue;
}} else if (!this.strict && (this.attributes.isEmpty$()) && (this.ch == 61 )  ) {
this.ch=p$1.readCh.apply(this, []);
this.skipSpace$();
attname=elem.getName$();
att=elem.getAttribute$S(attname);
attvalue=this.parseAttributeValue$Z((att != null ) && (att.type != 1) && (att.type != 11)  );
} else if (!this.strict && (this.ch == 61 ) ) {
this.ch=p$1.readCh.apply(this, []);
this.skipSpace$();
attvalue=this.parseAttributeValue$Z(true);
this.error$S("attvalerr");
return;
} else {
var str=Clazz.array(Character.TYPE, -1, [String.fromCharCode(this.ch)]);
this.error$S$S$S("invalid.tagchar",  String.instantialize(str), elem.getName$());
if (!this.strict) {
this.ch=p$1.readCh.apply(this, []);
continue;
} else {
return;
}}if (att != null ) {
attname=att.getName$();
} else {
att=elem.秘addAttribute$S(attname.toLowerCase$());
}if (this.attributes.isDefined$O(attname)) {
this.error$S$S$S("multi.tagatt", attname, elem.getName$());
}if (attvalue == null ) {
attvalue=((att != null ) && (att.value != null ) ) ? att.value : "#DEFAULT";
} else if ((att != null ) && (att.values != null ) && !att.values.contains$O(attvalue)  ) {
this.error$S$S$S("invalid.tagattval", attname, elem.getName$());
}var attkey=$I$(4).getAttributeKey$S(attname);
if (attkey == null ) {
this.attributes.addAttribute$O$O(attname, attvalue);
} else {
this.attributes.addAttribute$O$O(attkey, attvalue);
}}
});

Clazz.newMeth(C$, 'parseDTDMarkup$',  function () {
var strBuff=Clazz.new_($I$(7,1));
this.ch=p$1.readCh.apply(this, []);
while (true){
switch (this.ch) {
case 62:
this.ch=p$1.readCh.apply(this, []);
return strBuff.toString();
case -1:
this.error$S("invalid.markup");
return strBuff.toString();
case 10:
++this.ln;
this.ch=p$1.readCh.apply(this, []);
++this.lfCount;
break;
case 34:
this.ch=p$1.readCh.apply(this, []);
break;
case 13:
++this.ln;
if ((this.ch=p$1.readCh.apply(this, [])) == 10 ) {
this.ch=p$1.readCh.apply(this, []);
++this.crlfCount;
} else {
++this.crCount;
}break;
default:
strBuff.append$C(String.fromCharCode((this.ch & 255)));
this.ch=p$1.readCh.apply(this, []);
break;
}
}
});

Clazz.newMeth(C$, 'parseMarkupDeclarations$StringBuffer',  function (strBuff) {
if ((strBuff.length$() == "DOCTYPE".length$()) && (strBuff.toString().toUpperCase$().equals$O("DOCTYPE")) ) {
this.parseDTDMarkup$();
return true;
}return false;
});

Clazz.newMeth(C$, 'parseInvalidTag$',  function () {
while (true){
this.skipSpace$();
switch (this.ch) {
case 62:
case -1:
this.ch=p$1.readCh.apply(this, []);
return;
case 60:
return;
default:
this.ch=p$1.readCh.apply(this, []);
}
}
});

Clazz.newMeth(C$, 'parseTag$',  function () {
var elem;
var net=false;
var warned=false;
var unknown=false;
switch (this.ch=p$1.readCh.apply(this, [])) {
case 33:
switch (this.ch=p$1.readCh.apply(this, [])) {
case 45:
while (true){
if (this.ch == 45 ) {
if (!this.strict || ((this.ch=p$1.readCh.apply(this, [])) == 45 ) ) {
this.ch=p$1.readCh.apply(this, []);
if (!this.strict && this.ch == 45  ) {
this.ch=p$1.readCh.apply(this, []);
}if (this.textpos != 0) {
var newtext=Clazz.array(Character.TYPE, [this.textpos]);
System.arraycopy$O$I$O$I$I(this.text, 0, newtext, 0, this.textpos);
this.handleText$CA(newtext);
this.lastBlockStartPos=this.currentBlockStartPos;
this.textpos=0;
}this.parseComment$();
this.last=this.makeTag$javax_swing_text_html_parser_Element$Z(this.dtd.getElement$S("comment"), true);
this.handleComment$CA(this.getChars$I(0));
continue;
} else if (!warned) {
warned=true;
this.error$S$S("invalid.commentchar", "-");
}}this.skipSpace$();
switch (this.ch) {
case 45:
continue;
case 62:
this.ch=p$1.readCh.apply(this, []);
case -1:
return;
default:
this.ch=p$1.readCh.apply(this, []);
if (!warned) {
warned=true;
this.error$S$S("invalid.commentchar", String.valueOf$C(String.fromCharCode(this.ch)));
}break;
}
}
default:
var strBuff=Clazz.new_($I$(8,1));
while (true){
strBuff.append$C(String.fromCharCode(this.ch));
if (this.parseMarkupDeclarations$StringBuffer(strBuff)) {
return;
}switch (this.ch) {
case 62:
this.ch=p$1.readCh.apply(this, []);
case -1:
this.error$S("invalid.markup");
return;
case 10:
++this.ln;
this.ch=p$1.readCh.apply(this, []);
++this.lfCount;
break;
case 13:
++this.ln;
if ((this.ch=p$1.readCh.apply(this, [])) == 10 ) {
this.ch=p$1.readCh.apply(this, []);
++this.crlfCount;
} else {
++this.crCount;
}break;
default:
this.ch=p$1.readCh.apply(this, []);
break;
}
}
}
case 47:
switch (this.ch=p$1.readCh.apply(this, [])) {
case 62:
this.ch=p$1.readCh.apply(this, []);
case 60:
if (this.recent == null ) {
this.error$S("invalid.shortend");
return;
}elem=this.recent;
break;
default:
if (!this.parseIdentifier$Z(true)) {
this.error$S("expected.endtagname");
return;
}this.skipSpace$();
switch (this.ch) {
case 62:
this.ch=p$1.readCh.apply(this, []);
case 60:
break;
default:
this.error$S$S("expected", "\'>\'");
while ((this.ch != -1) && (this.ch != 10 ) && (this.ch != 62 )  ){
this.ch=p$1.readCh.apply(this, []);
}
if (this.ch == 62 ) {
this.ch=p$1.readCh.apply(this, []);
}break;
}
var elemStr=this.getString$I(0);
if (false && !this.dtd.elementExists$S(elemStr) ) {
this.error$S$S("end.unrecognized", elemStr);
if ((this.textpos > 0) && (this.text[this.textpos - 1] == "\n") ) {
--this.textpos;
}elem=this.dtd.getElement$S("unknown");
elem.name=elemStr;
unknown=true;
} else {
elem=this.dtd.getElement$S(elemStr);
}break;
}
if (this.stack == null ) {
this.error$S$S("end.extra.tag", elem.getName$());
return;
}if ((this.textpos > 0) && (this.text[this.textpos - 1] == "\n") ) {
if (this.stack.pre) {
if ((this.textpos > 1) && (this.text[this.textpos - 2] != "\n") ) {
--this.textpos;
}} else {
--this.textpos;
}}if (unknown) {
var t=this.makeTag$javax_swing_text_html_parser_Element(elem);
this.handleText$javax_swing_text_html_parser_TagElement(t);
this.attributes.addAttribute$O$O($I$(9).ENDTAG, "true");
this.handleEmptyTag$javax_swing_text_html_parser_TagElement(this.makeTag$javax_swing_text_html_parser_Element(elem));
unknown=false;
return;
}if (!this.strict) {
var stackElem=this.stack.elem.getName$();
if (stackElem.equals$O("table")) {
if (!elem.getName$().equals$O(stackElem)) {
this.error$S$S("tag.ignore", elem.getName$());
return;
}}if (stackElem.equals$O("tr") || stackElem.equals$O("td") ) {
if ((!elem.getName$().equals$O("table")) && (!elem.getName$().equals$O(stackElem)) ) {
this.error$S$S("tag.ignore", elem.getName$());
return;
}}}var sp=this.stack;
while ((sp != null ) && (elem !== sp.elem ) ){
sp=sp.next;
}
if (sp == null ) {
this.error$S$S("unmatched.endtag", elem.getName$());
return;
}var elemName=elem.getName$();
if (this.stack !== sp  && (elemName.equals$O("font") || elemName.equals$O("center") ) ) {
if (elemName.equals$O("center")) {
while (this.stack.elem.omitEnd$() && this.stack !== sp  ){
this.endTag$Z(true);
}
if (this.stack.elem === elem ) {
this.endTag$Z(false);
}}return;
}while (this.stack !== sp ){
this.endTag$Z(true);
}
this.endTag$Z(false);
return;
case -1:
this.error$S("eof");
return;
}
if (!this.parseIdentifier$Z(true)) {
elem=this.recent;
if ((this.ch != 62 ) || (elem == null ) ) {
this.error$S("expected.tagname");
return;
}} else {
var elemStr=this.getString$I(0);
if (elemStr.equals$O("image")) {
elemStr="img";
}if (false && !this.dtd.elementExists$S(elemStr) ) {
this.error$S$S("tag.unrecognized ", elemStr);
elem=this.dtd.getElement$S("unknown");
elem.name=elemStr;
unknown=true;
} else {
elem=this.dtd.getElement$S(elemStr);
}}this.parseAttributeSpecificationList$javax_swing_text_html_parser_Element(elem);
switch (this.ch) {
case 47:
net=true;
case 62:
this.ch=p$1.readCh.apply(this, []);
if (this.ch == 62  && net ) {
this.ch=p$1.readCh.apply(this, []);
}case 60:
break;
default:
this.error$S$S("expected", "\'>\'");
break;
}
if (!this.strict) {
if (elem.getName$().equals$O("script")) {
this.error$S("javascript.unsupported");
}}if (!elem.isEmpty$()) {
if (this.ch == 10 ) {
++this.ln;
++this.lfCount;
this.ch=p$1.readCh.apply(this, []);
} else if (this.ch == 13 ) {
++this.ln;
if ((this.ch=p$1.readCh.apply(this, [])) == 10 ) {
this.ch=p$1.readCh.apply(this, []);
++this.crlfCount;
} else {
++this.crCount;
}}}var tag=this.makeTag$javax_swing_text_html_parser_Element$Z(elem, false);
if (false && !unknown ) {
this.legalTagContext$javax_swing_text_html_parser_TagElement(tag);
if (!this.strict && this.skipTag ) {
this.skipTag=false;
return;
}}this.startTag$javax_swing_text_html_parser_TagElement(tag);
if (!elem.isEmpty$()) {
switch (elem.getType$()) {
case 1:
this.parseLiteral$Z(false);
break;
case 16:
this.parseLiteral$Z(true);
break;
default:
if (this.stack != null ) {
this.stack.net=net;
}break;
}
}});

Clazz.newMeth(C$, 'parseScript$',  function () {
var charsToAdd=Clazz.array(Character.TYPE, [C$.SCRIPT_END_TAG.length]);
var insideComment=false;
while (true){
var i=0;
while (!insideComment && i < C$.SCRIPT_END_TAG.length  && ((C$.SCRIPT_END_TAG[i]).$c() == this.ch  || (C$.SCRIPT_END_TAG_UPPER_CASE[i]).$c() == this.ch  ) ){
charsToAdd[i]=String.fromCharCode(this.ch);
this.ch=p$1.readCh.apply(this, []);
++i;
}
if (i == C$.SCRIPT_END_TAG.length) {
return;
} else {
for (var j=0; j < i; j++) {
this.addString$I(charsToAdd[j].$c());
}
switch (this.ch) {
case -1:
this.error$S("eof.script");
return;
case 10:
++this.ln;
this.ch=p$1.readCh.apply(this, []);
++this.lfCount;
this.addString$I("\n".$c());
break;
case 13:
++this.ln;
if ((this.ch=p$1.readCh.apply(this, [])) == 10 ) {
this.ch=p$1.readCh.apply(this, []);
++this.crlfCount;
} else {
++this.crCount;
}this.addString$I("\n".$c());
break;
default:
this.addString$I(this.ch);
var str= String.instantialize(this.getChars$I$I(0, this.strpos));
if (!insideComment && str.endsWith$S("<!--") ) {
insideComment=true;
}if (insideComment && str.endsWith$S("-->") ) {
insideComment=false;
}this.ch=p$1.readCh.apply(this, []);
break;
}
}}
});

Clazz.newMeth(C$, 'parseContent$',  function () {
var curThread=$I$(10).currentThread$();
for (; ; ) {
if (curThread.isInterrupted$()) {
curThread.interrupt$();
break;
}var c=this.ch;
this.currentBlockStartPos=this.currentPosition;
if (this.recent === this.dtd.script ) {
this.parseScript$();
this.last=this.makeTag$javax_swing_text_html_parser_Element$Z(this.dtd.getElement$S("comment"), true);
var str= String.instantialize(this.getChars$I(0)).trim$();
var minLength="<!--".length$() + "-->".length$();
if (str.startsWith$S("<!--") && str.endsWith$S("-->") && str.length$() >= (minLength)  ) {
str=str.substring$I$I("<!--".length$(), str.length$() - "-->".length$());
}this.handleComment$CA(str.toCharArray$());
this.endTag$Z(false);
this.lastBlockStartPos=this.currentPosition;
continue;
} else {
switch (c) {
case 60:
this.parseTag$();
this.lastBlockStartPos=this.currentPosition;
continue;
case 47:
this.ch=p$1.readCh.apply(this, []);
if ((this.stack != null ) && this.stack.net ) {
this.endTag$Z(false);
continue;
} else if (this.textpos == 0) {
if (!this.legalElementContext$javax_swing_text_html_parser_Element(this.dtd.pcdata)) {
this.error$S("unexpected.pcdata");
}if (this.last.breaksFlow$()) {
this.space=false;
}}break;
case -1:
return;
case 38:
if (this.textpos == 0) {
if (!this.legalElementContext$javax_swing_text_html_parser_Element(this.dtd.pcdata)) {
this.error$S("unexpected.pcdata");
}if (this.last.breaksFlow$()) {
this.space=false;
}}var data=p$1.parseEntityReference.apply(this, []);
if (this.textpos + data.length + 1  > this.text.length) {
var newtext=Clazz.array(Character.TYPE, [Math.max(this.textpos + data.length + 128 , this.text.length * 2)]);
System.arraycopy$O$I$O$I$I(this.text, 0, newtext, 0, this.text.length);
this.text=newtext;
}if (this.space) {
this.space=false;
this.text[this.textpos++]=" ";
}System.arraycopy$O$I$O$I$I(data, 0, this.text, this.textpos, data.length);
this.textpos+=data.length;
this.ignoreSpace=false;
continue;
case 10:
++this.ln;
++this.lfCount;
this.ch=p$1.readCh.apply(this, []);
if ((this.stack != null ) && this.stack.pre ) {
break;
}if (this.textpos == 0) {
this.lastBlockStartPos=this.currentPosition;
}if (!this.ignoreSpace) {
this.space=true;
}continue;
case 13:
++this.ln;
c="\n".$c();
if ((this.ch=p$1.readCh.apply(this, [])) == 10 ) {
this.ch=p$1.readCh.apply(this, []);
++this.crlfCount;
} else {
++this.crCount;
}if ((this.stack != null ) && this.stack.pre ) {
break;
}if (this.textpos == 0) {
this.lastBlockStartPos=this.currentPosition;
}if (!this.ignoreSpace) {
this.space=true;
}continue;
case 9:
case 32:
this.ch=p$1.readCh.apply(this, []);
if ((this.stack != null ) && this.stack.pre ) {
break;
}if (this.textpos == 0) {
this.lastBlockStartPos=this.currentPosition;
}if (!this.ignoreSpace) {
this.space=true;
}continue;
default:
if (this.textpos == 0) {
if (!this.legalElementContext$javax_swing_text_html_parser_Element(this.dtd.pcdata)) {
this.error$S("unexpected.pcdata");
}if (this.last.breaksFlow$()) {
this.space=false;
}}this.ch=p$1.readCh.apply(this, []);
break;
}
}if (this.textpos + 2 > this.text.length) {
var newtext=Clazz.array(Character.TYPE, [this.text.length + 128]);
System.arraycopy$O$I$O$I$I(this.text, 0, newtext, 0, this.text.length);
this.text=newtext;
}if (this.space) {
if (this.textpos == 0) {
--this.lastBlockStartPos;
}this.text[this.textpos++]=" ";
this.space=false;
}this.text[this.textpos++]=String.fromCharCode(c);
this.ignoreSpace=false;
}
});

Clazz.newMeth(C$, 'getEndOfLineString$',  function () {
if (this.crlfCount >= this.crCount) {
if (this.lfCount >= this.crlfCount) {
return "\n";
} else {
return "\r\n";
}} else {
if (this.crCount > this.lfCount) {
return "\r";
} else {
return "\n";
}}});

Clazz.newMeth(C$, 'parse$java_io_Reader',  function ($in) {
this.$in=$in;
this.ln=1;
this.seenHtml=false;
this.seenHead=false;
this.seenBody=false;
this.crCount=this.lfCount=this.crlfCount=0;
try {
this.ch=p$1.readCh.apply(this, []);
this.text=Clazz.array(Character.TYPE, [1024]);
this.str=Clazz.array(Character.TYPE, [128]);
this.parseContent$();
while (this.stack != null ){
this.endTag$Z(true);
}
$in.close$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
this.errorContext$();
this.error$S("ioexception");
throw e;
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var e = e$$;
{
this.errorContext$();
this.error$S$S$S("exception", e.toString(), e.getMessage$());
e.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"ThreadDeath")){
var e = e$$;
{
this.errorContext$();
this.error$S("terminated");
e.printStackTrace$();
throw e;
}
} else {
throw e$$;
}
} finally {
for (; this.stack != null ; this.stack=this.stack.next) {
this.handleEndTag$javax_swing_text_html_parser_TagElement(this.stack.tag);
}
this.text=null;
this.str=null;
}
});

Clazz.newMeth(C$, 'readCh',  function () {
if (this.pos >= this.len) {
for (; ; ) {
try {
this.len=this.$in.read$CA(this.buf);
break;
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.InterruptedIOException")){
throw ex;
} else {
throw ex;
}
}
}
if (this.len <= 0) {
return -1;
}this.pos=0;
}++this.currentPosition;
return this.buf[this.pos++].$c();
}, p$1);

Clazz.newMeth(C$, 'getCurrentPos$',  function () {
return this.currentPosition;
});

C$.$static$=function(){C$.$static$=0;
C$.cp1252Map=Clazz.array(Character.TYPE, -1, [8218, 402, 8222, 8230, 8224, 8225, 710, 8240, 352, 8249, 338, 141, 142, 143, 144, 8216, 8217, 8220, 8221, 8226, 8211, 8212, 732, 8482, 353, 8250, 339, 157, 158, 376]);
C$.SCRIPT_END_TAG="</script>".toCharArray$();
C$.SCRIPT_END_TAG_UPPER_CASE="</SCRIPT>".toCharArray$();
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:31 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
