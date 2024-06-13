(function(){var P$=Clazz.newPackage("javax.swing.text.html"),p$1={},I$=[[0,'javax.swing.text.html.HTML','java.util.Hashtable',['javax.swing.text.html.HTML','.Tag'],'javax.swing.text.StyleContext',['javax.swing.text.html.HTML','.Attribute'],'javax.swing.text.StyleConstants']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "HTML", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Tag',9],['UnknownTag',9],['Attribute',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['tagHashtable','java.util.Hashtable','+scMapping','+attHashtable']]]

Clazz.newMeth(C$, 'getAllTags$',  function () {
var tags=Clazz.array($I$(3), [$I$(3).allTags.length]);
System.arraycopy$O$I$O$I$I($I$(3).allTags, 0, tags, 0, $I$(3).allTags.length);
return tags;
}, 1);

Clazz.newMeth(C$, 'getTag$S',  function (tagName) {
var t=C$.tagHashtable.get$O(tagName);
return (t == null  ? null : t);
}, 1);

Clazz.newMeth(C$, 'getTagForStyleConstantsKey$javax_swing_text_StyleConstants',  function (sc) {
return C$.scMapping.get$O(sc);
}, 1);

Clazz.newMeth(C$, 'getIntegerAttributeValue$javax_swing_text_AttributeSet$javax_swing_text_html_HTML_Attribute$I',  function (attr, key, def) {
var value=def;
var istr=attr.getAttribute$O(key);
if (istr != null ) {
try {
value=Integer.valueOf$S(istr).intValue$();
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
value=def;
} else {
throw e;
}
}
}return value;
}, 1);

Clazz.newMeth(C$, 'getAllAttributeKeys$',  function () {
var attributes=Clazz.array($I$(5), [$I$(5).allAttributes.length]);
System.arraycopy$O$I$O$I$I($I$(5).allAttributes, 0, attributes, 0, $I$(5).allAttributes.length);
return attributes;
}, 1);

Clazz.newMeth(C$, 'getAttributeKey$S',  function (attName) {
var a=C$.attHashtable.get$O(attName);
if (a == null ) {
return null;
}return a;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.tagHashtable=Clazz.new_($I$(2,1).c$$I,[73]);
C$.scMapping=Clazz.new_($I$(2,1).c$$I,[8]);
{
for (var i=0; i < $I$(3).allTags.length; i++) {
C$.tagHashtable.put$O$O($I$(3).allTags[i].toString(), $I$(3).allTags[i]);
$I$(4,"registerStaticAttributeKey$O",[$I$(3).allTags[i]]);
}
$I$(4,"registerStaticAttributeKey$O",[$I$(3).IMPLIED]);
$I$(4,"registerStaticAttributeKey$O",[$I$(3).CONTENT]);
$I$(4,"registerStaticAttributeKey$O",[$I$(3).COMMENT]);
for (var i=0; i < $I$(5).allAttributes.length; i++) {
$I$(4,"registerStaticAttributeKey$O",[$I$(5).allAttributes[i]]);
}
$I$(4).registerStaticAttributeKey$O("#DEFAULT");
C$.scMapping.put$O$O($I$(6).Bold, $I$(3).B);
C$.scMapping.put$O$O($I$(6).Italic, $I$(3).I);
C$.scMapping.put$O$O($I$(6).Underline, $I$(3).U);
C$.scMapping.put$O$O($I$(6).StrikeThrough, $I$(3).STRIKE);
C$.scMapping.put$O$O($I$(6).Superscript, $I$(3).SUP);
C$.scMapping.put$O$O($I$(6).Subscript, $I$(3).SUB);
C$.scMapping.put$O$O($I$(6).FontFamily, $I$(3).FONT);
C$.scMapping.put$O$O($I$(6).FontSize, $I$(3).FONT);
};
C$.attHashtable=Clazz.new_($I$(2,1).c$$I,[77]);
{
for (var i=0; i < $I$(5).allAttributes.length; i++) {
C$.attHashtable.put$O$O($I$(5).allAttributes[i].toString(), $I$(5).allAttributes[i]);
}
};
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.HTML, "Tag", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['blockTag','breakTag','unknown'],'S',['name']]
,['O',['A','javax.swing.text.html.HTML.Tag','+ADDRESS','+APPLET','+AREA','+B','+BASE','+BASEFONT','+BIG','+BLOCKQUOTE','+BODY','+BR','+CAPTION','+CENTER','+CITE','+CODE','+DD','+DFN','+DIR','+DIV','+DL','+DT','+EM','+FONT','+FORM','+FRAME','+FRAMESET','+H1','+H2','+H3','+H4','+H5','+H6','+HEAD','+HR','+HTML','+I','+IMG','+INPUT','+ISINDEX','+KBD','+LI','+LINK','+MAP','+MENU','+META','+NOBR','+NOFRAMES','+OBJECT','+OL','+OPTION','+P','+PARAM','+PRE','+SAMP','+SCRIPT','+SELECT','+SMALL','+SPAN','+STRIKE','+S','+STRONG','+STYLE','+SUB','+SUP','+TABLE','+TD','+TEXTAREA','+TH','+TITLE','+TR','+TT','+U','+UL','+VAR','+IMPLIED','+CONTENT','+COMMENT','allTags','javax.swing.text.html.HTML.Tag[]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (id) {
C$.c$$S$Z$Z.apply(this, [id, false, false]);
}, 1);

Clazz.newMeth(C$, 'c$$S$Z$Z',  function (id, causesBreak, isBlock) {
;C$.$init$.apply(this);
this.name=id;
this.breakTag=causesBreak;
this.blockTag=isBlock;
}, 1);

Clazz.newMeth(C$, 'isBlock$',  function () {
return this.blockTag;
});

Clazz.newMeth(C$, 'breaksFlow$',  function () {
return this.breakTag;
});

Clazz.newMeth(C$, 'isPreformatted$',  function () {
return (this === C$.PRE  || this === C$.TEXTAREA  );
});

Clazz.newMeth(C$, 'toString',  function () {
return this.name;
});

Clazz.newMeth(C$, 'isParagraph$',  function () {
return (this === C$.P  || this === C$.IMPLIED   || this === C$.DT   || this === C$.H1   || this === C$.H2   || this === C$.H3   || this === C$.H4   || this === C$.H5   || this === C$.H6  );
});

C$.$static$=function(){C$.$static$=0;
C$.A=Clazz.new_(C$.c$$S,["a"]);
C$.ADDRESS=Clazz.new_(C$.c$$S,["address"]);
C$.APPLET=Clazz.new_(C$.c$$S,["applet"]);
C$.AREA=Clazz.new_(C$.c$$S,["area"]);
C$.B=Clazz.new_(C$.c$$S,["b"]);
C$.BASE=Clazz.new_(C$.c$$S,["base"]);
C$.BASEFONT=Clazz.new_(C$.c$$S,["basefont"]);
C$.BIG=Clazz.new_(C$.c$$S,["big"]);
C$.BLOCKQUOTE=Clazz.new_(C$.c$$S$Z$Z,["blockquote", true, true]);
C$.BODY=Clazz.new_(C$.c$$S$Z$Z,["body", true, true]);
C$.BR=Clazz.new_(C$.c$$S$Z$Z,["br", true, false]);
C$.CAPTION=Clazz.new_(C$.c$$S,["caption"]);
C$.CENTER=Clazz.new_(C$.c$$S$Z$Z,["center", true, false]);
C$.CITE=Clazz.new_(C$.c$$S,["cite"]);
C$.CODE=Clazz.new_(C$.c$$S,["code"]);
C$.DD=Clazz.new_(C$.c$$S$Z$Z,["dd", true, true]);
C$.DFN=Clazz.new_(C$.c$$S,["dfn"]);
C$.DIR=Clazz.new_(C$.c$$S$Z$Z,["dir", true, true]);
C$.DIV=Clazz.new_(C$.c$$S$Z$Z,["div", true, true]);
C$.DL=Clazz.new_(C$.c$$S$Z$Z,["dl", true, true]);
C$.DT=Clazz.new_(C$.c$$S$Z$Z,["dt", true, true]);
C$.EM=Clazz.new_(C$.c$$S,["em"]);
C$.FONT=Clazz.new_(C$.c$$S,["font"]);
C$.FORM=Clazz.new_(C$.c$$S$Z$Z,["form", true, false]);
C$.FRAME=Clazz.new_(C$.c$$S,["frame"]);
C$.FRAMESET=Clazz.new_(C$.c$$S,["frameset"]);
C$.H1=Clazz.new_(C$.c$$S$Z$Z,["h1", true, true]);
C$.H2=Clazz.new_(C$.c$$S$Z$Z,["h2", true, true]);
C$.H3=Clazz.new_(C$.c$$S$Z$Z,["h3", true, true]);
C$.H4=Clazz.new_(C$.c$$S$Z$Z,["h4", true, true]);
C$.H5=Clazz.new_(C$.c$$S$Z$Z,["h5", true, true]);
C$.H6=Clazz.new_(C$.c$$S$Z$Z,["h6", true, true]);
C$.HEAD=Clazz.new_(C$.c$$S$Z$Z,["head", true, true]);
C$.HR=Clazz.new_(C$.c$$S$Z$Z,["hr", true, false]);
C$.HTML=Clazz.new_(C$.c$$S$Z$Z,["html", true, false]);
C$.I=Clazz.new_(C$.c$$S,["i"]);
C$.IMG=Clazz.new_(C$.c$$S,["img"]);
C$.INPUT=Clazz.new_(C$.c$$S,["input"]);
C$.ISINDEX=Clazz.new_(C$.c$$S$Z$Z,["isindex", true, false]);
C$.KBD=Clazz.new_(C$.c$$S,["kbd"]);
C$.LI=Clazz.new_(C$.c$$S$Z$Z,["li", true, true]);
C$.LINK=Clazz.new_(C$.c$$S,["link"]);
C$.MAP=Clazz.new_(C$.c$$S,["map"]);
C$.MENU=Clazz.new_(C$.c$$S$Z$Z,["menu", true, true]);
C$.META=Clazz.new_(C$.c$$S,["meta"]);
C$.NOBR=Clazz.new_(C$.c$$S,["nobr"]);
C$.NOFRAMES=Clazz.new_(C$.c$$S$Z$Z,["noframes", true, true]);
C$.OBJECT=Clazz.new_(C$.c$$S,["object"]);
C$.OL=Clazz.new_(C$.c$$S$Z$Z,["ol", true, true]);
C$.OPTION=Clazz.new_(C$.c$$S,["option"]);
C$.P=Clazz.new_(C$.c$$S$Z$Z,["p", true, true]);
C$.PARAM=Clazz.new_(C$.c$$S,["param"]);
C$.PRE=Clazz.new_(C$.c$$S$Z$Z,["pre", true, true]);
C$.SAMP=Clazz.new_(C$.c$$S,["samp"]);
C$.SCRIPT=Clazz.new_(C$.c$$S,["script"]);
C$.SELECT=Clazz.new_(C$.c$$S,["select"]);
C$.SMALL=Clazz.new_(C$.c$$S,["small"]);
C$.SPAN=Clazz.new_(C$.c$$S,["span"]);
C$.STRIKE=Clazz.new_(C$.c$$S,["strike"]);
C$.S=Clazz.new_(C$.c$$S,["s"]);
C$.STRONG=Clazz.new_(C$.c$$S,["strong"]);
C$.STYLE=Clazz.new_(C$.c$$S,["style"]);
C$.SUB=Clazz.new_(C$.c$$S,["sub"]);
C$.SUP=Clazz.new_(C$.c$$S,["sup"]);
C$.TABLE=Clazz.new_(C$.c$$S$Z$Z,["table", false, true]);
C$.TD=Clazz.new_(C$.c$$S$Z$Z,["td", true, true]);
C$.TEXTAREA=Clazz.new_(C$.c$$S,["textarea"]);
C$.TH=Clazz.new_(C$.c$$S$Z$Z,["th", true, true]);
C$.TITLE=Clazz.new_(C$.c$$S$Z$Z,["title", true, true]);
C$.TR=Clazz.new_(C$.c$$S$Z$Z,["tr", false, true]);
C$.TT=Clazz.new_(C$.c$$S,["tt"]);
C$.U=Clazz.new_(C$.c$$S,["u"]);
C$.UL=Clazz.new_(C$.c$$S$Z$Z,["ul", true, true]);
C$.VAR=Clazz.new_(C$.c$$S,["var"]);
C$.IMPLIED=Clazz.new_(C$.c$$S,["p-implied"]);
C$.CONTENT=Clazz.new_(C$.c$$S,["content"]);
C$.COMMENT=Clazz.new_(C$.c$$S,["comment"]);
C$.allTags=Clazz.array(C$, -1, [C$.A, C$.ADDRESS, C$.APPLET, C$.AREA, C$.B, C$.BASE, C$.BASEFONT, C$.BIG, C$.BLOCKQUOTE, C$.BODY, C$.BR, C$.CAPTION, C$.CENTER, C$.CITE, C$.CODE, C$.DD, C$.DFN, C$.DIR, C$.DIV, C$.DL, C$.DT, C$.EM, C$.FONT, C$.FORM, C$.FRAME, C$.FRAMESET, C$.H1, C$.H2, C$.H3, C$.H4, C$.H5, C$.H6, C$.HEAD, C$.HR, C$.HTML, C$.I, C$.IMG, C$.INPUT, C$.ISINDEX, C$.KBD, C$.LI, C$.LINK, C$.MAP, C$.MENU, C$.META, C$.NOBR, C$.NOFRAMES, C$.OBJECT, C$.OL, C$.OPTION, C$.P, C$.PARAM, C$.PRE, C$.SAMP, C$.SCRIPT, C$.SELECT, C$.SMALL, C$.SPAN, C$.STRIKE, C$.S, C$.STRONG, C$.STYLE, C$.SUB, C$.SUP, C$.TABLE, C$.TD, C$.TEXTAREA, C$.TH, C$.TITLE, C$.TR, C$.TT, C$.U, C$.UL, C$.VAR]);
{
$I$(1).getTag$S("html");
};
};
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HTML, "UnknownTag", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.text.html.HTML','.Tag'], 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$S',  function (id) {
;C$.superclazz.c$$S.apply(this,[id]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.toString().hashCode$();
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (Clazz.instanceOf(obj, "javax.swing.text.html.HTML.UnknownTag")) {
return this.toString().equals$O(obj.toString());
}return false;
});

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream',  function (s) {
s.defaultWriteObject$();
s.writeBoolean$Z(this.blockTag);
s.writeBoolean$Z(this.breakTag);
s.writeBoolean$Z(this.unknown);
s.writeObject$O(this.name);
}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream',  function (s) {
s.defaultReadObject$();
this.blockTag=s.readBoolean$();
this.breakTag=s.readBoolean$();
this.unknown=s.readBoolean$();
this.name=s.readObject$();
}, p$1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HTML, "Attribute", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['name']]
,['O',['SIZE','javax.swing.text.html.HTML.Attribute','+COLOR','+CLEAR','+BACKGROUND','+BGCOLOR','+TEXT','+LINK','+VLINK','+ALINK','+WIDTH','+HEIGHT','+ALIGN','+NAME','+HREF','+REL','+REV','+TITLE','+TARGET','+SHAPE','+COORDS','+ISMAP','+NOHREF','+ALT','+ID','+SRC','+HSPACE','+VSPACE','+USEMAP','+LOWSRC','+CODEBASE','+CODE','+ARCHIVE','+VALUE','+VALUETYPE','+TYPE','+CLASS','+STYLE','+LANG','+FACE','+DIR','+DECLARE','+CLASSID','+DATA','+CODETYPE','+STANDBY','+BORDER','+SHAPES','+NOSHADE','+COMPACT','+START','+ACTION','+METHOD','+ENCTYPE','+CHECKED','+MAXLENGTH','+MULTIPLE','+SELECTED','+ROWS','+COLS','+DUMMY','+CELLSPACING','+CELLPADDING','+VALIGN','+HALIGN','+NOWRAP','+ROWSPAN','+COLSPAN','+PROMPT','+HTTPEQUIV','+CONTENT','+LANGUAGE','+VERSION','+N','+FRAMEBORDER','+MARGINWIDTH','+MARGINHEIGHT','+SCROLLING','+NORESIZE','+ENDTAG','+COMMENT','+MEDIA','allAttributes','javax.swing.text.html.HTML.Attribute[]']]]

Clazz.newMeth(C$, 'c$$S',  function (id) {
;C$.$init$.apply(this);
this.name=id;
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
return this.name;
});

C$.$static$=function(){C$.$static$=0;
C$.SIZE=Clazz.new_(C$.c$$S,["size"]);
C$.COLOR=Clazz.new_(C$.c$$S,["color"]);
C$.CLEAR=Clazz.new_(C$.c$$S,["clear"]);
C$.BACKGROUND=Clazz.new_(C$.c$$S,["background"]);
C$.BGCOLOR=Clazz.new_(C$.c$$S,["bgcolor"]);
C$.TEXT=Clazz.new_(C$.c$$S,["text"]);
C$.LINK=Clazz.new_(C$.c$$S,["link"]);
C$.VLINK=Clazz.new_(C$.c$$S,["vlink"]);
C$.ALINK=Clazz.new_(C$.c$$S,["alink"]);
C$.WIDTH=Clazz.new_(C$.c$$S,["width"]);
C$.HEIGHT=Clazz.new_(C$.c$$S,["height"]);
C$.ALIGN=Clazz.new_(C$.c$$S,["align"]);
C$.NAME=Clazz.new_(C$.c$$S,["name"]);
C$.HREF=Clazz.new_(C$.c$$S,["href"]);
C$.REL=Clazz.new_(C$.c$$S,["rel"]);
C$.REV=Clazz.new_(C$.c$$S,["rev"]);
C$.TITLE=Clazz.new_(C$.c$$S,["title"]);
C$.TARGET=Clazz.new_(C$.c$$S,["target"]);
C$.SHAPE=Clazz.new_(C$.c$$S,["shape"]);
C$.COORDS=Clazz.new_(C$.c$$S,["coords"]);
C$.ISMAP=Clazz.new_(C$.c$$S,["ismap"]);
C$.NOHREF=Clazz.new_(C$.c$$S,["nohref"]);
C$.ALT=Clazz.new_(C$.c$$S,["alt"]);
C$.ID=Clazz.new_(C$.c$$S,["id"]);
C$.SRC=Clazz.new_(C$.c$$S,["src"]);
C$.HSPACE=Clazz.new_(C$.c$$S,["hspace"]);
C$.VSPACE=Clazz.new_(C$.c$$S,["vspace"]);
C$.USEMAP=Clazz.new_(C$.c$$S,["usemap"]);
C$.LOWSRC=Clazz.new_(C$.c$$S,["lowsrc"]);
C$.CODEBASE=Clazz.new_(C$.c$$S,["codebase"]);
C$.CODE=Clazz.new_(C$.c$$S,["code"]);
C$.ARCHIVE=Clazz.new_(C$.c$$S,["archive"]);
C$.VALUE=Clazz.new_(C$.c$$S,["value"]);
C$.VALUETYPE=Clazz.new_(C$.c$$S,["valuetype"]);
C$.TYPE=Clazz.new_(C$.c$$S,["type"]);
C$.CLASS=Clazz.new_(C$.c$$S,["class"]);
C$.STYLE=Clazz.new_(C$.c$$S,["style"]);
C$.LANG=Clazz.new_(C$.c$$S,["lang"]);
C$.FACE=Clazz.new_(C$.c$$S,["face"]);
C$.DIR=Clazz.new_(C$.c$$S,["dir"]);
C$.DECLARE=Clazz.new_(C$.c$$S,["declare"]);
C$.CLASSID=Clazz.new_(C$.c$$S,["classid"]);
C$.DATA=Clazz.new_(C$.c$$S,["data"]);
C$.CODETYPE=Clazz.new_(C$.c$$S,["codetype"]);
C$.STANDBY=Clazz.new_(C$.c$$S,["standby"]);
C$.BORDER=Clazz.new_(C$.c$$S,["border"]);
C$.SHAPES=Clazz.new_(C$.c$$S,["shapes"]);
C$.NOSHADE=Clazz.new_(C$.c$$S,["noshade"]);
C$.COMPACT=Clazz.new_(C$.c$$S,["compact"]);
C$.START=Clazz.new_(C$.c$$S,["start"]);
C$.ACTION=Clazz.new_(C$.c$$S,["action"]);
C$.METHOD=Clazz.new_(C$.c$$S,["method"]);
C$.ENCTYPE=Clazz.new_(C$.c$$S,["enctype"]);
C$.CHECKED=Clazz.new_(C$.c$$S,["checked"]);
C$.MAXLENGTH=Clazz.new_(C$.c$$S,["maxlength"]);
C$.MULTIPLE=Clazz.new_(C$.c$$S,["multiple"]);
C$.SELECTED=Clazz.new_(C$.c$$S,["selected"]);
C$.ROWS=Clazz.new_(C$.c$$S,["rows"]);
C$.COLS=Clazz.new_(C$.c$$S,["cols"]);
C$.DUMMY=Clazz.new_(C$.c$$S,["dummy"]);
C$.CELLSPACING=Clazz.new_(C$.c$$S,["cellspacing"]);
C$.CELLPADDING=Clazz.new_(C$.c$$S,["cellpadding"]);
C$.VALIGN=Clazz.new_(C$.c$$S,["valign"]);
C$.HALIGN=Clazz.new_(C$.c$$S,["halign"]);
C$.NOWRAP=Clazz.new_(C$.c$$S,["nowrap"]);
C$.ROWSPAN=Clazz.new_(C$.c$$S,["rowspan"]);
C$.COLSPAN=Clazz.new_(C$.c$$S,["colspan"]);
C$.PROMPT=Clazz.new_(C$.c$$S,["prompt"]);
C$.HTTPEQUIV=Clazz.new_(C$.c$$S,["http-equiv"]);
C$.CONTENT=Clazz.new_(C$.c$$S,["content"]);
C$.LANGUAGE=Clazz.new_(C$.c$$S,["language"]);
C$.VERSION=Clazz.new_(C$.c$$S,["version"]);
C$.N=Clazz.new_(C$.c$$S,["n"]);
C$.FRAMEBORDER=Clazz.new_(C$.c$$S,["frameborder"]);
C$.MARGINWIDTH=Clazz.new_(C$.c$$S,["marginwidth"]);
C$.MARGINHEIGHT=Clazz.new_(C$.c$$S,["marginheight"]);
C$.SCROLLING=Clazz.new_(C$.c$$S,["scrolling"]);
C$.NORESIZE=Clazz.new_(C$.c$$S,["noresize"]);
C$.ENDTAG=Clazz.new_(C$.c$$S,["endtag"]);
C$.COMMENT=Clazz.new_(C$.c$$S,["comment"]);
C$.MEDIA=Clazz.new_(C$.c$$S,["media"]);
C$.allAttributes=Clazz.array(C$, -1, [C$.FACE, C$.COMMENT, C$.SIZE, C$.COLOR, C$.CLEAR, C$.BACKGROUND, C$.BGCOLOR, C$.TEXT, C$.LINK, C$.VLINK, C$.ALINK, C$.WIDTH, C$.HEIGHT, C$.ALIGN, C$.NAME, C$.HREF, C$.REL, C$.REV, C$.TITLE, C$.TARGET, C$.SHAPE, C$.COORDS, C$.ISMAP, C$.NOHREF, C$.ALT, C$.ID, C$.SRC, C$.HSPACE, C$.VSPACE, C$.USEMAP, C$.LOWSRC, C$.CODEBASE, C$.CODE, C$.ARCHIVE, C$.VALUE, C$.VALUETYPE, C$.TYPE, C$.CLASS, C$.STYLE, C$.LANG, C$.DIR, C$.DECLARE, C$.CLASSID, C$.DATA, C$.CODETYPE, C$.STANDBY, C$.BORDER, C$.SHAPES, C$.NOSHADE, C$.COMPACT, C$.START, C$.ACTION, C$.METHOD, C$.ENCTYPE, C$.CHECKED, C$.MAXLENGTH, C$.MULTIPLE, C$.SELECTED, C$.ROWS, C$.COLS, C$.DUMMY, C$.CELLSPACING, C$.CELLPADDING, C$.VALIGN, C$.HALIGN, C$.NOWRAP, C$.ROWSPAN, C$.COLSPAN, C$.PROMPT, C$.HTTPEQUIV, C$.CONTENT, C$.LANGUAGE, C$.VERSION, C$.N, C$.FRAMEBORDER, C$.MARGINWIDTH, C$.MARGINHEIGHT, C$.SCROLLING, C$.NORESIZE, C$.MEDIA, C$.ENDTAG]);
};

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:27 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
