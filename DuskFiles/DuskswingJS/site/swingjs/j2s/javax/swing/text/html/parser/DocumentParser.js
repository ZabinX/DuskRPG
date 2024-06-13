(function(){var P$=Clazz.newPackage("javax.swing.text.html.parser"),p$1={},I$=[[0,'javax.swing.text.SimpleAttributeSet',['javax.swing.text.html.HTMLEditorKit','.ParserCallback'],['javax.swing.text.html.HTML','.Attribute']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DocumentParser", null, 'javax.swing.text.html.parser.Parser');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.callback=null;
this.ignoreCharSet=false;
},1);

C$.$fields$=[['Z',['seentitle','ignoreCharSet'],'I',['inbody','intitle','inhead','instyle','inscript'],'O',['callback','javax.swing.text.html.HTMLEditorKit.ParserCallback']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_html_parser_DTD',  function (dtd) {
;C$.superclazz.c$$javax_swing_text_html_parser_DTD.apply(this,[dtd]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'parse$java_io_Reader$javax_swing_text_html_HTMLEditorKit_ParserCallback$Z',  function ($in, callback, ignoreCharSet) {
this.ignoreCharSet=ignoreCharSet;
this.callback=callback;
this.parse$java_io_Reader($in);
callback.handleEndOfLineString$S(this.getEndOfLineString$());
});

Clazz.newMeth(C$, 'handleStartTag$javax_swing_text_html_parser_TagElement',  function (tag) {
var elem=tag.getElement$();
if (elem === this.dtd.body ) {
++this.inbody;
} else if (elem === this.dtd.html ) {
} else if (elem === this.dtd.head ) {
++this.inhead;
} else if (elem === this.dtd.title ) {
++this.intitle;
} else if (elem === this.dtd.style ) {
++this.instyle;
} else if (elem === this.dtd.script ) {
++this.inscript;
}if (false) {
if (tag.fictional$()) {
p$1.debug$S.apply(this, ["Start Tag: " + tag.getHTMLTag$() + " pos: " + this.getCurrentPos$() ]);
} else {
p$1.debug$S.apply(this, ["Start Tag: " + tag.getHTMLTag$() + " attributes: " + this.getAttributes$() + " pos: " + this.getCurrentPos$() ]);
}}if (tag.fictional$()) {
var attrs=Clazz.new_($I$(1,1));
attrs.addAttribute$O$O($I$(2).IMPLIED, Boolean.TRUE);
this.callback.handleStartTag$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet$I(tag.getHTMLTag$(), attrs, this.getBlockStartPosition$());
} else {
this.callback.handleStartTag$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet$I(tag.getHTMLTag$(), this.getAttributes$(), this.getBlockStartPosition$());
this.flushAttributes$();
}});

Clazz.newMeth(C$, 'handleComment$CA',  function (text) {
if (false) {
p$1.debug$S.apply(this, ["comment: ->" +  String.instantialize(text) + "<-" + " pos: " + this.getCurrentPos$() ]);
}this.callback.handleComment$CA$I(text, this.getBlockStartPosition$());
});

Clazz.newMeth(C$, 'handleEmptyTag$javax_swing_text_html_parser_TagElement',  function (tag) {
var elem=tag.getElement$();
if (elem === this.dtd.meta  && !this.ignoreCharSet ) {
var atts=this.getAttributes$();
if (atts != null ) {
var content=atts.getAttribute$O($I$(3).CONTENT);
if (content != null ) {
if (content.indexOf$S(";") >= 0) content=content.substring$I$I(0, content.indexOf$S(";")).trim$();
if ("content-type".equalsIgnoreCase$S(atts.getAttribute$O($I$(3).HTTPEQUIV))) {
if (!content.equalsIgnoreCase$S("text/html") && !content.equalsIgnoreCase$S("text/plain") ) {
throw Clazz.new_(Clazz.load('javax.swing.text.ChangedCharSetException').c$$S$Z,[content, false]);
}} else if ("charset".equalsIgnoreCase$S(atts.getAttribute$O($I$(3).HTTPEQUIV))) {
throw Clazz.new_(Clazz.load('javax.swing.text.ChangedCharSetException').c$$S$Z,[content, true]);
}}}}if (this.inbody != 0 || elem === this.dtd.meta   || elem === this.dtd.base   || elem === this.dtd.isindex   || elem === this.dtd.style   || elem === this.dtd.link  ) {
if (false) {
if (tag.fictional$()) {
p$1.debug$S.apply(this, ["Empty Tag: " + tag.getHTMLTag$() + " pos: " + this.getCurrentPos$() ]);
} else {
p$1.debug$S.apply(this, ["Empty Tag: " + tag.getHTMLTag$() + " attributes: " + this.getAttributes$() + " pos: " + this.getCurrentPos$() ]);
}}if (tag.fictional$()) {
var attrs=Clazz.new_($I$(1,1));
attrs.addAttribute$O$O($I$(2).IMPLIED, Boolean.TRUE);
this.callback.handleSimpleTag$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet$I(tag.getHTMLTag$(), attrs, this.getBlockStartPosition$());
} else {
this.callback.handleSimpleTag$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet$I(tag.getHTMLTag$(), this.getAttributes$(), this.getBlockStartPosition$());
this.flushAttributes$();
}}});

Clazz.newMeth(C$, 'handleEndTag$javax_swing_text_html_parser_TagElement',  function (tag) {
var elem=tag.getElement$();
if (elem === this.dtd.body ) {
--this.inbody;
} else if (elem === this.dtd.title ) {
--this.intitle;
this.seentitle=true;
} else if (elem === this.dtd.head ) {
--this.inhead;
} else if (elem === this.dtd.style ) {
--this.instyle;
} else if (elem === this.dtd.script ) {
--this.inscript;
}if (false) {
p$1.debug$S.apply(this, ["End Tag: " + tag.getHTMLTag$() + " pos: " + this.getCurrentPos$() ]);
}this.callback.handleEndTag$javax_swing_text_html_HTML_Tag$I(tag.getHTMLTag$(), this.getBlockStartPosition$());
});

Clazz.newMeth(C$, 'handleText$CA',  function (data) {
if (data != null ) {
if (this.inscript != 0) {
this.callback.handleComment$CA$I(data, this.getBlockStartPosition$());
return;
}if (this.inbody != 0 || ((this.instyle != 0) || ((this.intitle != 0) && !this.seentitle ) ) ) {
if (false) {
p$1.debug$S.apply(this, ["text:  ->" +  String.instantialize(data) + "<-" + " pos: " + this.getCurrentPos$() ]);
}this.callback.handleText$CA$I(data, this.getBlockStartPosition$());
}}});

Clazz.newMeth(C$, 'handleError$I$S',  function (ln, errorMsg) {
if (false) {
p$1.debug$S.apply(this, ["Error: ->" + errorMsg + "<-" + " pos: " + this.getCurrentPos$() ]);
}this.callback.handleError$S$I(errorMsg, this.getCurrentPos$());
});

Clazz.newMeth(C$, 'debug$S',  function (msg) {
System.out.println$S(msg);
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:30 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
