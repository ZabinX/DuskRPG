(function(){var P$=Clazz.newPackage("javax.swing.text"),p$1={},p$2={},I$=[[0,'javax.swing.text.StyleConstants',['javax.swing.text.StyleContext','.KeyEnumeration'],'java.util.Vector','javax.swing.event.EventListenerList','javax.swing.event.ChangeListener','javax.swing.event.ChangeEvent',['javax.swing.text.StyleContext','.FontKey'],'java.util.Hashtable','java.util.Collections','java.util.HashMap','javax.swing.text.SimpleAttributeSet',['javax.swing.text.StyleContext','.NamedStyle'],'java.awt.Font','javax.swing.SwingUtilities',['javax.swing.text.StyleContext','.SmallAttributeSet']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StyleContext", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, [['javax.swing.text.AbstractDocument','javax.swing.text.AbstractDocument.AttributeContext']]);
C$.$classes$=[['SmallAttributeSet',1],['KeyEnumeration',0],['KeyBuilder',0],['FontKey',8],['NamedStyle',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.fontSearch=Clazz.new_($I$(7,1).c$$S$I$I,[null, 0, 0]);
this.fontTable=Clazz.new_($I$(8,1));
this.attributesPool=$I$(9,"synchronizedMap$java_util_Map",[Clazz.new_($I$(10,1))]);
this.search=Clazz.new_($I$(11,1));
},1);

C$.$fields$=[['O',['styles','javax.swing.text.Style','fontSearch','javax.swing.text.StyleContext.FontKey','fontTable','java.util.Hashtable','attributesPool','java.util.Map','search','javax.swing.text.MutableAttributeSet']]
,['O',['defaultContext','javax.swing.text.StyleContext','freezeKeyMap','java.util.Hashtable','+thawKeyMap']]]

Clazz.newMeth(C$, 'getDefaultStyleContext$',  function () {
if (C$.defaultContext == null ) {
C$.defaultContext=Clazz.new_(C$);
}return C$.defaultContext;
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.styles=Clazz.new_($I$(12,1).c$$javax_swing_text_Style,[this, null, null]);
this.addStyle$S$javax_swing_text_Style("default", null);
}, 1);

Clazz.newMeth(C$, 'addStyle$S$javax_swing_text_Style',  function (nm, parent) {
var style=Clazz.new_($I$(12,1).c$$S$javax_swing_text_Style,[this, null, nm, parent]);
if (nm != null ) {
this.styles.addAttribute$O$O(nm, style);
}return style;
});

Clazz.newMeth(C$, 'removeStyle$S',  function (nm) {
this.styles.removeAttribute$O(nm);
});

Clazz.newMeth(C$, 'getStyle$S',  function (nm) {
return this.styles.getAttribute$O(nm);
});

Clazz.newMeth(C$, 'getStyleNames$',  function () {
return this.styles.getAttributeNames$();
});

Clazz.newMeth(C$, 'addChangeListener$javax_swing_event_ChangeListener',  function (l) {
this.styles.addChangeListener$javax_swing_event_ChangeListener(l);
});

Clazz.newMeth(C$, 'removeChangeListener$javax_swing_event_ChangeListener',  function (l) {
this.styles.removeChangeListener$javax_swing_event_ChangeListener(l);
});

Clazz.newMeth(C$, 'getChangeListeners$',  function () {
return (this.styles).getChangeListeners$();
});

Clazz.newMeth(C$, 'getFont$javax_swing_text_AttributeSet',  function (attr) {
var style=0;
if ($I$(1).isBold$javax_swing_text_AttributeSet(attr)) {
style|=1;
}if ($I$(1).isItalic$javax_swing_text_AttributeSet(attr)) {
style|=2;
}var family=$I$(1).getFontFamily$javax_swing_text_AttributeSet(attr);
var size=$I$(1).getFontSize$javax_swing_text_AttributeSet(attr);
if ($I$(1).isSuperscript$javax_swing_text_AttributeSet(attr) || $I$(1).isSubscript$javax_swing_text_AttributeSet(attr) ) {
size-=2;
}return this.getFont$S$I$I(family, style, size);
});

Clazz.newMeth(C$, 'getForeground$javax_swing_text_AttributeSet',  function (attr) {
return $I$(1).getForeground$javax_swing_text_AttributeSet(attr);
});

Clazz.newMeth(C$, 'getBackground$javax_swing_text_AttributeSet',  function (attr) {
return $I$(1).getBackground$javax_swing_text_AttributeSet(attr);
});

Clazz.newMeth(C$, 'getFont$S$I$I',  function (family, style, size) {
this.fontSearch.setValue$S$I$I(family, style, size);
var f=this.fontTable.get$O(this.fontSearch);
if (f == null ) {
var defaultStyle=this.getStyle$S("default");
if (defaultStyle != null ) {
var FONT_ATTRIBUTE_KEY="FONT_ATTRIBUTE_KEY";
var defaultFont=defaultStyle.getAttribute$O("FONT_ATTRIBUTE_KEY");
if (defaultFont != null  && defaultFont.getFamily$().equalsIgnoreCase$S(family) ) {
f=defaultFont.deriveFont$I$F(style, size);
}}if (f == null ) {
f=Clazz.new_($I$(13,1).c$$S$I$I,[family, style, size]);
}var key=Clazz.new_($I$(7,1).c$$S$I$I,[family, style, size]);
this.fontTable.put$O$O(key, f);
}return f;
});

Clazz.newMeth(C$, 'getFontMetrics$java_awt_Font',  function (f) {
return f.getFontMetrics$();
});

Clazz.newMeth(C$, 'addAttribute$javax_swing_text_AttributeSet$O$O',  function (old, name, value) {
if ((old.getAttributeCount$() + 1) <= this.getCompressionThreshold$()) {
this.search.removeAttributes$javax_swing_text_AttributeSet(this.search);
this.search.addAttributes$javax_swing_text_AttributeSet(old);
this.search.addAttribute$O$O(name, value);
this.reclaim$javax_swing_text_AttributeSet(old);
return this.getImmutableUniqueSet$();
}var ma=this.getMutableAttributeSet$javax_swing_text_AttributeSet(old);
ma.addAttribute$O$O(name, value);
return ma;
});

Clazz.newMeth(C$, 'addAttributes$javax_swing_text_AttributeSet$javax_swing_text_AttributeSet',  function (old, attr) {
if ((old.getAttributeCount$() + attr.getAttributeCount$()) <= this.getCompressionThreshold$()) {
this.search.removeAttributes$javax_swing_text_AttributeSet(this.search);
this.search.addAttributes$javax_swing_text_AttributeSet(old);
this.search.addAttributes$javax_swing_text_AttributeSet(attr);
this.reclaim$javax_swing_text_AttributeSet(old);
return this.getImmutableUniqueSet$();
}var ma=this.getMutableAttributeSet$javax_swing_text_AttributeSet(old);
ma.addAttributes$javax_swing_text_AttributeSet(attr);
return ma;
});

Clazz.newMeth(C$, 'removeAttribute$javax_swing_text_AttributeSet$O',  function (old, name) {
if ((old.getAttributeCount$() - 1) <= this.getCompressionThreshold$()) {
this.search.removeAttributes$javax_swing_text_AttributeSet(this.search);
this.search.addAttributes$javax_swing_text_AttributeSet(old);
this.search.removeAttribute$O(name);
this.reclaim$javax_swing_text_AttributeSet(old);
return this.getImmutableUniqueSet$();
}var ma=this.getMutableAttributeSet$javax_swing_text_AttributeSet(old);
ma.removeAttribute$O(name);
return ma;
});

Clazz.newMeth(C$, 'removeAttributes$javax_swing_text_AttributeSet$java_util_Enumeration',  function (old, names) {
if (old.getAttributeCount$() <= this.getCompressionThreshold$()) {
this.search.removeAttributes$javax_swing_text_AttributeSet(this.search);
this.search.addAttributes$javax_swing_text_AttributeSet(old);
this.search.removeAttributes$java_util_Enumeration(names);
this.reclaim$javax_swing_text_AttributeSet(old);
return this.getImmutableUniqueSet$();
}var ma=this.getMutableAttributeSet$javax_swing_text_AttributeSet(old);
ma.removeAttributes$java_util_Enumeration(names);
return ma;
});

Clazz.newMeth(C$, 'removeAttributes$javax_swing_text_AttributeSet$javax_swing_text_AttributeSet',  function (old, attrs) {
if (old.getAttributeCount$() <= this.getCompressionThreshold$()) {
this.search.removeAttributes$javax_swing_text_AttributeSet(this.search);
this.search.addAttributes$javax_swing_text_AttributeSet(old);
this.search.removeAttributes$javax_swing_text_AttributeSet(attrs);
this.reclaim$javax_swing_text_AttributeSet(old);
return this.getImmutableUniqueSet$();
}var ma=this.getMutableAttributeSet$javax_swing_text_AttributeSet(old);
ma.removeAttributes$javax_swing_text_AttributeSet(attrs);
return ma;
});

Clazz.newMeth(C$, 'getEmptySet$',  function () {
return $I$(11).EMPTY;
});

Clazz.newMeth(C$, 'reclaim$javax_swing_text_AttributeSet',  function (a) {
if ($I$(14).isEventDispatchThread$()) {
this.attributesPool.size$();
}});

Clazz.newMeth(C$, 'getCompressionThreshold$',  function () {
return 9;
});

Clazz.newMeth(C$, 'createSmallAttributeSet$javax_swing_text_AttributeSet',  function (a) {
return Clazz.new_($I$(15,1).c$$javax_swing_text_AttributeSet,[this, null, a]);
});

Clazz.newMeth(C$, 'createLargeAttributeSet$javax_swing_text_AttributeSet',  function (a) {
return Clazz.new_($I$(11,1).c$$javax_swing_text_AttributeSet,[a]);
});

Clazz.newMeth(C$, 'removeUnusedSets$',  function () {
this.attributesPool.size$();
});

Clazz.newMeth(C$, 'getImmutableUniqueSet$',  function () {
var key=this.createSmallAttributeSet$javax_swing_text_AttributeSet(this.search);
return key;
});

Clazz.newMeth(C$, 'getMutableAttributeSet$javax_swing_text_AttributeSet',  function (a) {
if (Clazz.instanceOf(a, "javax.swing.text.MutableAttributeSet") && a !== $I$(11).EMPTY  ) {
return a;
}return this.createLargeAttributeSet$javax_swing_text_AttributeSet(a);
});

Clazz.newMeth(C$, 'toString',  function () {
this.removeUnusedSets$();
var s="";
var iterator=this.attributesPool.keySet$().iterator$();
while (iterator.hasNext$()){
var set=iterator.next$();
s=s + set + "\n" ;
}
return s;
});

Clazz.newMeth(C$, 'registerStaticAttributeKey$O',  function (key) {
var ioFmt=key.getClass$().getName$() + "." + key.toString() ;
if (C$.freezeKeyMap == null ) {
C$.freezeKeyMap=Clazz.new_($I$(8,1));
C$.thawKeyMap=Clazz.new_($I$(8,1));
}C$.freezeKeyMap.put$O$O(key, ioFmt);
C$.thawKeyMap.put$O$O(ioFmt, key);
}, 1);

Clazz.newMeth(C$, 'getStaticAttribute$O',  function (key) {
if (C$.thawKeyMap == null  || key == null  ) {
return null;
}return C$.thawKeyMap.get$O(key);
}, 1);

Clazz.newMeth(C$, 'getStaticAttributeKey$O',  function (key) {
return key.getClass$().getName$() + "." + key.toString() ;
}, 1);

C$.$static$=function(){C$.$static$=0;
{
};
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.StyleContext, "SmallAttributeSet", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.text.AttributeSet');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['attributes','Object[]','resolveParent','javax.swing.text.AttributeSet']]]

Clazz.newMeth(C$, 'c$$OA',  function (attributes) {
;C$.$init$.apply(this);
this.attributes=attributes;
p$1.updateResolveParent.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_text_AttributeSet',  function (attrs) {
;C$.$init$.apply(this);
var n=attrs.getAttributeCount$();
var tbl=Clazz.array(java.lang.Object, [2 * n]);
var names=attrs.getAttributeNames$();
var i=0;
while (names.hasMoreElements$()){
tbl[i]=names.nextElement$();
tbl[i + 1]=attrs.getAttribute$O(tbl[i]);
i+=2;
}
this.attributes=tbl;
p$1.updateResolveParent.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'updateResolveParent',  function () {
this.resolveParent=null;
var tbl=this.attributes;
for (var i=0; i < tbl.length; i+=2) {
if (tbl[i] === $I$(1).ResolveAttribute ) {
this.resolveParent=tbl[i + 1];
break;
}}
}, p$1);

Clazz.newMeth(C$, 'getLocalAttribute$O',  function (nm) {
if (nm === $I$(1).ResolveAttribute ) {
return this.resolveParent;
}var tbl=this.attributes;
for (var i=0; i < tbl.length; i+=2) {
if (nm.equals$O(tbl[i])) {
return tbl[i + 1];
}}
return null;
});

Clazz.newMeth(C$, 'toString',  function () {
var s="{";
var tbl=this.attributes;
for (var i=0; i < tbl.length; i+=2) {
if (Clazz.instanceOf(tbl[i + 1], "javax.swing.text.AttributeSet")) {
s=s + tbl[i] + "=" + "AttributeSet" + "," ;
} else {
s=s + tbl[i] + "=" + tbl[i + 1] + "," ;
}}
s=s + "}";
return s;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
var code=0;
var tbl=this.attributes;
for (var i=1; i < tbl.length; i+=2) {
code^=tbl[i].hashCode$();
}
return code;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (Clazz.instanceOf(obj, "javax.swing.text.AttributeSet")) {
var attrs=obj;
return ((this.getAttributeCount$() == attrs.getAttributeCount$()) && this.containsAttributes$javax_swing_text_AttributeSet(attrs) );
}return false;
});

Clazz.newMeth(C$, 'clone$',  function () {
return this;
});

Clazz.newMeth(C$, 'getAttributeCount$',  function () {
return (this.attributes.length/2|0);
});

Clazz.newMeth(C$, 'isDefined$O',  function (key) {
var a=this.attributes;
var n=a.length;
for (var i=0; i < n; i+=2) {
if (key.equals$O(a[i])) {
return true;
}}
return false;
});

Clazz.newMeth(C$, 'isEqual$javax_swing_text_AttributeSet',  function (attr) {
if (Clazz.instanceOf(attr, "javax.swing.text.StyleContext.SmallAttributeSet")) {
return attr === this ;
}return ((this.getAttributeCount$() == attr.getAttributeCount$()) && this.containsAttributes$javax_swing_text_AttributeSet(attr) );
});

Clazz.newMeth(C$, 'copyAttributes$',  function () {
return this;
});

Clazz.newMeth(C$, 'getAttribute$O',  function (key) {
var value=this.getLocalAttribute$O(key);
if (value == null ) {
var parent=this.getResolveParent$();
if (parent != null ) value=parent.getAttribute$O(key);
}return value;
});

Clazz.newMeth(C$, 'getAttributeNames$',  function () {
return Clazz.new_($I$(2,1).c$$OA,[this, null, this.attributes]);
});

Clazz.newMeth(C$, 'containsAttribute$O$O',  function (name, value) {
return value.equals$O(this.getAttribute$O(name));
});

Clazz.newMeth(C$, 'containsAttributes$javax_swing_text_AttributeSet',  function (attrs) {
var result=true;
var names=attrs.getAttributeNames$();
while (result && names.hasMoreElements$() ){
var name=names.nextElement$();
result=attrs.getAttribute$O(name).equals$O(this.getAttribute$O(name));
}
return result;
});

Clazz.newMeth(C$, 'getResolveParent$',  function () {
return this.resolveParent;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StyleContext, "KeyEnumeration", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Enumeration');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['i'],'O',['attr','Object[]']]]

Clazz.newMeth(C$, 'c$$OA',  function (attr) {
;C$.$init$.apply(this);
this.attr=attr;
this.i=0;
}, 1);

Clazz.newMeth(C$, 'hasMoreElements$',  function () {
return this.i < this.attr.length;
});

Clazz.newMeth(C$, 'nextElement$',  function () {
if (this.i < this.attr.length) {
var o=this.attr[this.i];
this.i+=2;
return o;
}throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StyleContext, "KeyBuilder", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.keys=Clazz.new_($I$(3,1));
this.data=Clazz.new_($I$(3,1));
},1);

C$.$fields$=[['O',['keys','java.util.Vector','+data']]]

Clazz.newMeth(C$, 'initialize$javax_swing_text_AttributeSet',  function (a) {
if (Clazz.instanceOf(a, "javax.swing.text.StyleContext.SmallAttributeSet")) {
p$2.initialize$OA.apply(this, [(a).attributes]);
} else {
this.keys.removeAllElements$();
this.data.removeAllElements$();
var names=a.getAttributeNames$();
while (names.hasMoreElements$()){
var name=names.nextElement$();
this.addAttribute$O$O(name, a.getAttribute$O(name));
}
}});

Clazz.newMeth(C$, 'initialize$OA',  function (sorted) {
this.keys.removeAllElements$();
this.data.removeAllElements$();
var n=sorted.length;
for (var i=0; i < n; i+=2) {
this.keys.addElement$O(sorted[i]);
this.data.addElement$O(sorted[i + 1]);
}
}, p$2);

Clazz.newMeth(C$, 'createTable$',  function () {
var n=this.keys.size$();
var tbl=Clazz.array(java.lang.Object, [2 * n]);
for (var i=0; i < n; i++) {
var offs=2 * i;
tbl[offs]=this.keys.elementAt$I(i);
tbl[offs + 1]=this.data.elementAt$I(i);
}
return tbl;
});

Clazz.newMeth(C$, 'getCount$',  function () {
return this.keys.size$();
});

Clazz.newMeth(C$, 'addAttribute$O$O',  function (key, value) {
this.keys.addElement$O(key);
this.data.addElement$O(value);
});

Clazz.newMeth(C$, 'addAttributes$javax_swing_text_AttributeSet',  function (attr) {
if (Clazz.instanceOf(attr, "javax.swing.text.StyleContext.SmallAttributeSet")) {
var tbl=(attr).attributes;
var n=tbl.length;
for (var i=0; i < n; i+=2) {
this.addAttribute$O$O(tbl[i], tbl[i + 1]);
}
} else {
var names=attr.getAttributeNames$();
while (names.hasMoreElements$()){
var name=names.nextElement$();
this.addAttribute$O$O(name, attr.getAttribute$O(name));
}
}});

Clazz.newMeth(C$, 'removeAttribute$O',  function (key) {
var n=this.keys.size$();
for (var i=0; i < n; i++) {
if (this.keys.elementAt$I(i).equals$O(key)) {
this.keys.removeElementAt$I(i);
this.data.removeElementAt$I(i);
return;
}}
});

Clazz.newMeth(C$, 'removeAttributes$java_util_Enumeration',  function (names) {
while (names.hasMoreElements$()){
var name=names.nextElement$();
this.removeAttribute$O(name);
}
});

Clazz.newMeth(C$, 'removeAttributes$javax_swing_text_AttributeSet',  function (attr) {
var names=attr.getAttributeNames$();
while (names.hasMoreElements$()){
var name=names.nextElement$();
var value=attr.getAttribute$O(name);
p$2.removeSearchAttribute$O$O.apply(this, [name, value]);
}
});

Clazz.newMeth(C$, 'removeSearchAttribute$O$O',  function (ikey, value) {
var n=this.keys.size$();
for (var i=0; i < n; i++) {
if (this.keys.elementAt$I(i).equals$O(ikey)) {
if (this.data.elementAt$I(i).equals$O(value)) {
this.keys.removeElementAt$I(i);
this.data.removeElementAt$I(i);
}return;
}}
}, p$2);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StyleContext, "FontKey", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['style','size'],'S',['family']]]

Clazz.newMeth(C$, 'c$$S$I$I',  function (family, style, size) {
;C$.$init$.apply(this);
this.setValue$S$I$I(family, style, size);
}, 1);

Clazz.newMeth(C$, 'setValue$S$I$I',  function (family, style, size) {
this.family=(family != null ) ? family.intern$() : null;
this.style=style;
this.size=size;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
var fhash=(this.family != null ) ? this.family.hashCode$() : 0;
return fhash ^ this.style ^ this.size ;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (Clazz.instanceOf(obj, "javax.swing.text.StyleContext.FontKey")) {
var font=obj;
return (this.size == font.size) && (this.style == font.style) && (this.family == font.family)  ;
}return false;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StyleContext, "NamedStyle", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.text.Style');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.listenerList=Clazz.new_($I$(4,1));
this.changeEvent=null;
},1);

C$.$fields$=[['O',['listenerList','javax.swing.event.EventListenerList','changeEvent','javax.swing.event.ChangeEvent','attributes','javax.swing.text.AttributeSet']]]

Clazz.newMeth(C$, 'c$$S$javax_swing_text_Style',  function (name, parent) {
;C$.$init$.apply(this);
this.attributes=this.b$['javax.swing.text.StyleContext'].getEmptySet$.apply(this.b$['javax.swing.text.StyleContext'], []);
if (name != null ) {
this.setName$S(name);
}if (parent != null ) {
this.setResolveParent$javax_swing_text_AttributeSet(parent);
}}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_text_Style',  function (parent) {
C$.c$$S$javax_swing_text_Style.apply(this, [null, parent]);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.attributes=this.b$['javax.swing.text.StyleContext'].getEmptySet$.apply(this.b$['javax.swing.text.StyleContext'], []);
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
return "NamedStyle:" + this.getName$() + " " + this.attributes ;
});

Clazz.newMeth(C$, 'getName$',  function () {
if (this.isDefined$O($I$(1).NameAttribute)) {
return this.getAttribute$O($I$(1).NameAttribute).toString();
}return null;
});

Clazz.newMeth(C$, 'setName$S',  function (name) {
if (name != null ) {
this.addAttribute$O$O($I$(1).NameAttribute, name);
}});

Clazz.newMeth(C$, 'addChangeListener$javax_swing_event_ChangeListener',  function (l) {
this.listenerList.add$Class$java_util_EventListener(Clazz.getClass($I$(5),['stateChanged$javax_swing_event_ChangeEvent']), l);
});

Clazz.newMeth(C$, 'removeChangeListener$javax_swing_event_ChangeListener',  function (l) {
this.listenerList.remove$Class$java_util_EventListener(Clazz.getClass($I$(5),['stateChanged$javax_swing_event_ChangeEvent']), l);
});

Clazz.newMeth(C$, 'getChangeListeners$',  function () {
return this.listenerList.getListeners$Class(Clazz.getClass($I$(5),['stateChanged$javax_swing_event_ChangeEvent']));
});

Clazz.newMeth(C$, 'fireStateChanged$',  function () {
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(5),['stateChanged$javax_swing_event_ChangeEvent']) ) {
if (this.changeEvent == null ) this.changeEvent=Clazz.new_($I$(6,1).c$$O,[this]);
(listeners[i + 1]).stateChanged$javax_swing_event_ChangeEvent(this.changeEvent);
}}
});

Clazz.newMeth(C$, 'getListeners$Class',  function (listenerType) {
return this.listenerList.getListeners$Class(listenerType);
});

Clazz.newMeth(C$, 'getAttributeCount$',  function () {
return this.attributes.getAttributeCount$();
});

Clazz.newMeth(C$, 'isDefined$O',  function (attrName) {
return this.attributes.isDefined$O(attrName);
});

Clazz.newMeth(C$, 'isEqual$javax_swing_text_AttributeSet',  function (attr) {
return this.attributes.isEqual$javax_swing_text_AttributeSet(attr);
});

Clazz.newMeth(C$, 'copyAttributes$',  function () {
var a=Clazz.new_(C$,[this, null]);
a.attributes=this.attributes.copyAttributes$();
return a;
});

Clazz.newMeth(C$, 'getAttribute$O',  function (attrName) {
return this.attributes.getAttribute$O(attrName);
});

Clazz.newMeth(C$, 'getAttributeNames$',  function () {
return this.attributes.getAttributeNames$();
});

Clazz.newMeth(C$, 'containsAttribute$O$O',  function (name, value) {
return this.attributes.containsAttribute$O$O(name, value);
});

Clazz.newMeth(C$, 'containsAttributes$javax_swing_text_AttributeSet',  function (attrs) {
return this.attributes.containsAttributes$javax_swing_text_AttributeSet(attrs);
});

Clazz.newMeth(C$, 'getResolveParent$',  function () {
return this.attributes.getResolveParent$();
});

Clazz.newMeth(C$, 'addAttribute$O$O',  function (name, value) {
var context=this.b$['javax.swing.text.StyleContext'];
this.attributes=context.addAttribute$javax_swing_text_AttributeSet$O$O(this.attributes, name, value);
this.fireStateChanged$();
});

Clazz.newMeth(C$, 'addAttributes$javax_swing_text_AttributeSet',  function (attr) {
var context=this.b$['javax.swing.text.StyleContext'];
this.attributes=context.addAttributes$javax_swing_text_AttributeSet$javax_swing_text_AttributeSet(this.attributes, attr);
this.fireStateChanged$();
});

Clazz.newMeth(C$, 'removeAttribute$O',  function (name) {
var context=this.b$['javax.swing.text.StyleContext'];
this.attributes=context.removeAttribute$javax_swing_text_AttributeSet$O(this.attributes, name);
this.fireStateChanged$();
});

Clazz.newMeth(C$, 'removeAttributes$java_util_Enumeration',  function (names) {
var context=this.b$['javax.swing.text.StyleContext'];
this.attributes=context.removeAttributes$javax_swing_text_AttributeSet$java_util_Enumeration(this.attributes, names);
this.fireStateChanged$();
});

Clazz.newMeth(C$, 'removeAttributes$javax_swing_text_AttributeSet',  function (attrs) {
var context=this.b$['javax.swing.text.StyleContext'];
if (attrs === this ) {
this.attributes=context.getEmptySet$();
} else {
this.attributes=context.removeAttributes$javax_swing_text_AttributeSet$javax_swing_text_AttributeSet(this.attributes, attrs);
}this.fireStateChanged$();
});

Clazz.newMeth(C$, 'setResolveParent$javax_swing_text_AttributeSet',  function (parent) {
if (parent != null ) {
this.addAttribute$O$O($I$(1).ResolveAttribute, parent);
} else {
this.removeAttribute$O($I$(1).ResolveAttribute);
}});
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:23 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
