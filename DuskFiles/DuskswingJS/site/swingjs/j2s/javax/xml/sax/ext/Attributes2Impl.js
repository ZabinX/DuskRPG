(function(){var P$=Clazz.newPackage("javax.xml.sax.ext"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Attributes2Impl", null, 'javax.xml.sax.helpers.AttributesImpl', 'javax.xml.sax.ext.Attributes2');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['declared','boolean[]','+specified']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$javax_xml_sax_Attributes',  function (atts) {
;C$.superclazz.c$$javax_xml_sax_Attributes.apply(this,[atts]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'isDeclared$I',  function (index) {
if (index < 0 || index >= this.getLength$() ) throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["No attribute at index: " + index]);
return this.declared[index];
});

Clazz.newMeth(C$, 'isDeclared$S$S',  function (uri, localName) {
var index=this.getIndex$S$S(uri, localName);
if (index < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["No such attribute: local=" + localName + ", namespace=" + uri ]);
return this.declared[index];
});

Clazz.newMeth(C$, 'isDeclared$S',  function (qName) {
var index=this.getIndex$S(qName);
if (index < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["No such attribute: " + qName]);
return this.declared[index];
});

Clazz.newMeth(C$, 'isSpecified$I',  function (index) {
if (index < 0 || index >= this.getLength$() ) throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["No attribute at index: " + index]);
return this.specified[index];
});

Clazz.newMeth(C$, 'isSpecified$S$S',  function (uri, localName) {
var index=this.getIndex$S$S(uri, localName);
if (index < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["No such attribute: local=" + localName + ", namespace=" + uri ]);
return this.specified[index];
});

Clazz.newMeth(C$, 'isSpecified$S',  function (qName) {
var index=this.getIndex$S(qName);
if (index < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["No such attribute: " + qName]);
return this.specified[index];
});

Clazz.newMeth(C$, 'setAttributes$javax_xml_sax_Attributes',  function (atts) {
var length=atts.getLength$();
C$.superclazz.prototype.setAttributes$javax_xml_sax_Attributes.apply(this, [atts]);
this.declared=Clazz.array(Boolean.TYPE, [length]);
this.specified=Clazz.array(Boolean.TYPE, [length]);
if (Clazz.instanceOf(atts, "javax.xml.sax.ext.Attributes2")) {
var a2=atts;
for (var i=0; i < length; i++) {
this.declared[i]=a2.isDeclared$I(i);
this.specified[i]=a2.isSpecified$I(i);
}
} else {
for (var i=0; i < length; i++) {
this.declared[i]=!"CDATA".equals$O(atts.getType$I(i));
this.specified[i]=true;
}
}});

Clazz.newMeth(C$, 'addAttribute$S$S$S$S$S',  function (uri, localName, qName, type, value) {
C$.superclazz.prototype.addAttribute$S$S$S$S$S.apply(this, [uri, localName, qName, type, value]);
var length=this.getLength$();
if (length < this.specified.length) {
var newFlags;
newFlags=Clazz.array(Boolean.TYPE, [length]);
System.arraycopy$O$I$O$I$I(this.declared, 0, newFlags, 0, this.declared.length);
this.declared=newFlags;
newFlags=Clazz.array(Boolean.TYPE, [length]);
System.arraycopy$O$I$O$I$I(this.specified, 0, newFlags, 0, this.specified.length);
this.specified=newFlags;
}this.specified[length - 1]=true;
this.declared[length - 1]=!"CDATA".equals$O(type);
});

Clazz.newMeth(C$, 'removeAttribute$I',  function (index) {
var origMax=this.getLength$() - 1;
C$.superclazz.prototype.removeAttribute$I.apply(this, [index]);
if (index != origMax) {
System.arraycopy$O$I$O$I$I(this.declared, index + 1, this.declared, index, origMax - index);
System.arraycopy$O$I$O$I$I(this.specified, index + 1, this.specified, index, origMax - index);
}});

Clazz.newMeth(C$, 'setDeclared$I$Z',  function (index, value) {
if (index < 0 || index >= this.getLength$() ) throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["No attribute at index: " + index]);
this.declared[index]=value;
});

Clazz.newMeth(C$, 'setSpecified$I$Z',  function (index, value) {
if (index < 0 || index >= this.getLength$() ) throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["No attribute at index: " + index]);
this.specified[index]=value;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:35 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
