(function(){var P$=Clazz.newPackage("javax.swing.text.html.parser"),p$1={},I$=[[0,'java.util.Vector','java.util.Hashtable','javax.swing.text.html.parser.Element','javax.swing.text.html.parser.AttributeList','javax.swing.text.html.parser.Entity','java.util.BitSet','java.util.StringTokenizer','javax.swing.text.html.parser.ContentModel','sun.awt.AppContext']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DTD", null, null, 'javax.swing.text.html.parser.DTDConstants');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.elements=Clazz.new_($I$(1,1));
this.elementHash=Clazz.new_($I$(2,1));
this.entityHash=Clazz.new_($I$(2,1));
this.pcdata=this.getElement$S("#pcdata");
this.html=this.getElement$S("html");
this.meta=this.getElement$S("meta");
this.base=this.getElement$S("base");
this.isindex=this.getElement$S("isindex");
this.head=this.getElement$S("head");
this.body=this.getElement$S("body");
this.applet=this.getElement$S("applet");
this.param=this.getElement$S("param");
this.p=this.getElement$S("p");
this.title=this.getElement$S("title");
this.style=this.getElement$S("style");
this.link=this.getElement$S("link");
this.script=this.getElement$S("script");
},1);

C$.$fields$=[['S',['name'],'O',['elements','java.util.Vector','elementHash','java.util.Hashtable','+entityHash','pcdata','javax.swing.text.html.parser.Element','+html','+meta','+base','+isindex','+head','+body','+applet','+param','+p','+title','+style','+link','+script']]
,['O',['DTD_HASH_KEY','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$S',  function (name) {
;C$.$init$.apply(this);
this.name=name;
this.defEntity$S$I$I("#RE", 65536, "\r".$c());
this.defEntity$S$I$I("#RS", 65536, "\n".$c());
this.defEntity$S$I$I("#SPACE", 65536, " ".$c());
this.defineElement$S$I$Z$Z$javax_swing_text_html_parser_ContentModel$java_util_BitSet$java_util_BitSet$javax_swing_text_html_parser_AttributeList("unknown", 17, false, true, null, null, null, null);
}, 1);

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'getEntity$S',  function (name) {
return this.entityHash.get$O(name);
});

Clazz.newMeth(C$, 'getEntity$I',  function (ch) {
return this.entityHash.get$O(Integer.valueOf$I(ch));
});

Clazz.newMeth(C$, 'elementExists$S',  function (name) {
return !"unknown".equals$O(name) && (this.elementHash.get$O(name) != null ) ;
});

Clazz.newMeth(C$, 'getElement$S',  function (name) {
var e=this.elementHash.get$O(name);
if (e == null ) {
e=Clazz.new_([name, this.elements.size$()],$I$(3,1).c$$S$I);
this.elements.addElement$O(e);
e.atts=Clazz.new_($I$(4,1));
e.atts.name=name;
this.elementHash.put$O$O(name, e);
}return e;
});

Clazz.newMeth(C$, 'getElement$I',  function (index) {
return this.elements.elementAt$I(index);
});

Clazz.newMeth(C$, 'defineEntity$S$I$CA',  function (name, type, data) {
var ent=this.entityHash.get$O(name);
if (ent == null ) {
ent=Clazz.new_($I$(5,1).c$$S$I$CA,[name, type, data]);
this.entityHash.put$O$O(name, ent);
if (((type & 65536) != 0) && (data.length == 1) ) {
switch (type & ~65536) {
case 1:
case 11:
this.entityHash.put$O$O(Integer.valueOf$I(data[0].$c()), ent);
break;
}
}}return ent;
});

Clazz.newMeth(C$, 'defineElement$S$I$Z$Z$javax_swing_text_html_parser_ContentModel$java_util_BitSet$java_util_BitSet$javax_swing_text_html_parser_AttributeList',  function (name, type, omitStart, omitEnd, content, exclusions, inclusions, atts) {
var e=this.getElement$S(name);
e.type=type;
e.oStart=omitStart;
e.oEnd=omitEnd;
e.content=content;
e.exclusions=exclusions;
e.inclusions=inclusions;
e.atts=atts;
return e;
});

Clazz.newMeth(C$, 'defineAttributes$S$javax_swing_text_html_parser_AttributeList',  function (name, atts) {
var e=this.getElement$S(name);
e.atts=atts;
});

Clazz.newMeth(C$, 'defEntity$S$I$I',  function (name, type, ch) {
var data=Clazz.array(Character.TYPE, -1, [String.fromCharCode(ch)]);
return this.defineEntity$S$I$CA(name, type, data);
});

Clazz.newMeth(C$, 'defEntity$S$I$S',  function (name, type, str) {
var len=str.length$();
var data=Clazz.array(Character.TYPE, [len]);
str.getChars$I$I$CA$I(0, len, data, 0);
return this.defineEntity$S$I$CA(name, type, data);
});

Clazz.newMeth(C$, 'defElement$S$I$Z$Z$javax_swing_text_html_parser_ContentModel$SA$SA$javax_swing_text_html_parser_AttributeList',  function (name, type, omitStart, omitEnd, content, exclusions, inclusions, atts) {
var excl=null;
if (exclusions != null  && exclusions.length > 0 ) {
excl=Clazz.new_($I$(6,1));
for (var str, $str = 0, $$str = exclusions; $str<$$str.length&&((str=($$str[$str])),1);$str++) {
if (str.length$() > 0) {
excl.set$I(this.getElement$S(str).getIndex$());
}}
}var incl=null;
if (inclusions != null  && inclusions.length > 0 ) {
incl=Clazz.new_($I$(6,1));
for (var str, $str = 0, $$str = inclusions; $str<$$str.length&&((str=($$str[$str])),1);$str++) {
if (str.length$() > 0) {
incl.set$I(this.getElement$S(str).getIndex$());
}}
}return this.defineElement$S$I$Z$Z$javax_swing_text_html_parser_ContentModel$java_util_BitSet$java_util_BitSet$javax_swing_text_html_parser_AttributeList(name, type, omitStart, omitEnd, content, excl, incl, atts);
});

Clazz.newMeth(C$, 'defAttributeList$S$I$I$S$S$javax_swing_text_html_parser_AttributeList',  function (name, type, modifier, value, values, atts) {
var vals=null;
if (values != null ) {
vals=Clazz.new_($I$(1,1));
for (var s=Clazz.new_($I$(7,1).c$$S$S,[values, "|"]); s.hasMoreTokens$(); ) {
var str=s.nextToken$();
if (str.length$() > 0) {
vals.addElement$O(str);
}}
}return Clazz.new_($I$(4,1).c$$S$I$I$S$java_util_Vector$javax_swing_text_html_parser_AttributeList,[name, type, modifier, value, vals, atts]);
});

Clazz.newMeth(C$, 'defContentModel$I$O$javax_swing_text_html_parser_ContentModel',  function (type, obj, next) {
return Clazz.new_($I$(8,1).c$$I$O$javax_swing_text_html_parser_ContentModel,[type, obj, next]);
});

Clazz.newMeth(C$, 'toString',  function () {
return this.name;
});

Clazz.newMeth(C$, 'putDTDHash$S$javax_swing_text_html_parser_DTD',  function (name, dtd) {
C$.getDtdHash$().put$O$O(name, dtd);
}, 1);

Clazz.newMeth(C$, 'getDTD$S',  function (name) {
name=name.toLowerCase$();
var dtd=C$.getDtdHash$().get$O(name);
if (dtd == null ) dtd=Clazz.new_(C$.c$$S,[name]);
return dtd;
}, 1);

Clazz.newMeth(C$, 'getDtdHash$',  function () {
var appContext=$I$(9).getAppContext$();
var result=appContext.get$O(C$.DTD_HASH_KEY);
if (result == null ) {
result=Clazz.new_($I$(2,1));
appContext.put$O$O(C$.DTD_HASH_KEY, result);
}return result;
}, 1);

Clazz.newMeth(C$, 'read$java_io_DataInputStream',  function ($in) {
if ($in.readInt$() != 1) {
}var names=Clazz.array(String, [$in.readShort$()]);
for (var i=0; i < names.length; i++) {
names[i]=$in.readUTF$();
}
var num=$in.readShort$();
for (var i=0; i < num; i++) {
var nameId=$in.readShort$();
var type=$in.readByte$();
var name=$in.readUTF$();
this.defEntity$S$I$S(names[nameId], type | 65536, name);
}
num=$in.readShort$();
for (var i=0; i < num; i++) {
var nameId=$in.readShort$();
var type=$in.readByte$();
var flags=$in.readByte$();
var m=p$1.readContentModel$java_io_DataInputStream$SA.apply(this, [$in, names]);
var exclusions=p$1.readNameArray$java_io_DataInputStream$SA.apply(this, [$in, names]);
var inclusions=p$1.readNameArray$java_io_DataInputStream$SA.apply(this, [$in, names]);
var atts=p$1.readAttributeList$java_io_DataInputStream$SA.apply(this, [$in, names]);
this.defElement$S$I$Z$Z$javax_swing_text_html_parser_ContentModel$SA$SA$javax_swing_text_html_parser_AttributeList(names[nameId], type, ((flags & 1) != 0), ((flags & 2) != 0), m, exclusions, inclusions, atts);
}
});

Clazz.newMeth(C$, 'readContentModel$java_io_DataInputStream$SA',  function ($in, names) {
var flag=$in.readByte$();
switch (flag) {
case 0:
return null;
case 1:
{
var type=$in.readByte$();
var m=p$1.readContentModel$java_io_DataInputStream$SA.apply(this, [$in, names]);
var next=p$1.readContentModel$java_io_DataInputStream$SA.apply(this, [$in, names]);
return this.defContentModel$I$O$javax_swing_text_html_parser_ContentModel(type, m, next);
}case 2:
{
var type=$in.readByte$();
var el=this.getElement$S(names[$in.readShort$()]);
var next=p$1.readContentModel$java_io_DataInputStream$SA.apply(this, [$in, names]);
return this.defContentModel$I$O$javax_swing_text_html_parser_ContentModel(type, el, next);
}default:
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["bad bdtd"]);
}
}, p$1);

Clazz.newMeth(C$, 'readNameArray$java_io_DataInputStream$SA',  function ($in, names) {
var num=$in.readShort$();
if (num == 0) {
return null;
}var result=Clazz.array(String, [num]);
for (var i=0; i < num; i++) {
result[i]=names[$in.readShort$()];
}
return result;
}, p$1);

Clazz.newMeth(C$, 'readAttributeList$java_io_DataInputStream$SA',  function ($in, names) {
var result=null;
for (var num=$in.readByte$(); num > 0; --num) {
var nameId=$in.readShort$();
var type=$in.readByte$();
var modifier=$in.readByte$();
var valueId=$in.readShort$();
var value=(valueId == -1) ? null : names[valueId];
var values=null;
var numValues=$in.readShort$();
if (numValues > 0) {
values=Clazz.new_($I$(1,1).c$$I,[numValues]);
for (var i=0; i < numValues; i++) {
values.addElement$O(names[$in.readShort$()]);
}
}result=Clazz.new_($I$(4,1).c$$S$I$I$S$java_util_Vector$javax_swing_text_html_parser_AttributeList,[names[nameId], type, modifier, value, values, result]);
}
return result;
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.DTD_HASH_KEY= Clazz.new_();
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:30 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
