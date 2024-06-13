(function(){var P$=Clazz.newPackage("javax.xml.sax.helpers"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "AttributesImpl", null, null, 'javax.xml.sax.Attributes');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['length'],'O',['data','String[]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.length=0;
this.data=null;
}, 1);

Clazz.newMeth(C$, 'c$$javax_xml_sax_Attributes',  function (atts) {
;C$.$init$.apply(this);
this.setAttributes$javax_xml_sax_Attributes(atts);
}, 1);

Clazz.newMeth(C$, 'getLength$',  function () {
return this.length;
});

Clazz.newMeth(C$, 'getURI$I',  function (index) {
if (index >= 0 && index < this.length ) {
return this.data[index * 5];
} else {
return null;
}});

Clazz.newMeth(C$, 'getLocalName$I',  function (index) {
if (index >= 0 && index < this.length ) {
return this.data[index * 5 + 1];
} else {
return null;
}});

Clazz.newMeth(C$, 'getQName$I',  function (index) {
if (index >= 0 && index < this.length ) {
return this.data[index * 5 + 2];
} else {
return null;
}});

Clazz.newMeth(C$, 'getType$I',  function (index) {
if (index >= 0 && index < this.length ) {
return this.data[index * 5 + 3];
} else {
return null;
}});

Clazz.newMeth(C$, 'getValue$I',  function (index) {
if (index >= 0 && index < this.length ) {
return this.data[index * 5 + 4];
} else {
return null;
}});

Clazz.newMeth(C$, 'getIndex$S$S',  function (uri, localName) {
var max=this.length * 5;
for (var i=0; i < max; i+=5) {
if (this.data[i].equals$O(uri) && this.data[i + 1].equals$O(localName) ) {
return (i/5|0);
}}
return -1;
});

Clazz.newMeth(C$, 'getIndex$S',  function (qName) {
var max=this.length * 5;
for (var i=0; i < max; i+=5) {
if (this.data[i + 2].equals$O(qName)) {
return (i/5|0);
}}
return -1;
});

Clazz.newMeth(C$, 'getType$S$S',  function (uri, localName) {
var max=this.length * 5;
for (var i=0; i < max; i+=5) {
if (this.data[i].equals$O(uri) && this.data[i + 1].equals$O(localName) ) {
return this.data[i + 3];
}}
return null;
});

Clazz.newMeth(C$, 'getType$S',  function (qName) {
var max=this.length * 5;
for (var i=0; i < max; i+=5) {
if (this.data[i + 2].equals$O(qName)) {
return this.data[i + 3];
}}
return null;
});

Clazz.newMeth(C$, 'getValue$S$S',  function (uri, localName) {
var max=this.length * 5;
for (var i=0; i < max; i+=5) {
if (this.data[i].equals$O(uri) && this.data[i + 1].equals$O(localName) ) {
return this.data[i + 4];
}}
return null;
});

Clazz.newMeth(C$, 'getValue$S',  function (qName) {
var max=this.length * 5;
for (var i=0; i < max; i+=5) {
if (this.data[i + 2].equals$O(qName)) {
return this.data[i + 4];
}}
return null;
});

Clazz.newMeth(C$, 'clear$',  function () {
if (this.data != null ) {
for (var i=0; i < (this.length * 5); i++) this.data[i]=null;

}this.length=0;
});

Clazz.newMeth(C$, 'setAttributes$javax_xml_sax_Attributes',  function (atts) {
this.clear$();
this.length=atts.getLength$();
if (this.length > 0) {
this.data=Clazz.array(String, [this.length * 5]);
for (var i=0; i < this.length; i++) {
this.data[i * 5]=atts.getURI$I(i);
this.data[i * 5 + 1]=atts.getLocalName$I(i);
this.data[i * 5 + 2]=atts.getQName$I(i);
this.data[i * 5 + 3]=atts.getType$I(i);
this.data[i * 5 + 4]=atts.getValue$I(i);
}
}});

Clazz.newMeth(C$, 'addAttribute$S$S$S$S$S',  function (uri, localName, qName, type, value) {
p$1.ensureCapacity$I.apply(this, [this.length + 1]);
this.data[this.length * 5]=uri;
this.data[this.length * 5 + 1]=localName;
this.data[this.length * 5 + 2]=qName;
this.data[this.length * 5 + 3]=type;
this.data[this.length * 5 + 4]=value;
++this.length;
});

Clazz.newMeth(C$, 'setAttribute$I$S$S$S$S$S',  function (index, uri, localName, qName, type, value) {
if (index >= 0 && index < this.length ) {
this.data[index * 5]=uri;
this.data[index * 5 + 1]=localName;
this.data[index * 5 + 2]=qName;
this.data[index * 5 + 3]=type;
this.data[index * 5 + 4]=value;
} else {
p$1.badIndex$I.apply(this, [index]);
}});

Clazz.newMeth(C$, 'removeAttribute$I',  function (index) {
if (index >= 0 && index < this.length ) {
if (index < this.length - 1) {
System.arraycopy$O$I$O$I$I(this.data, (index + 1) * 5, this.data, index * 5, (this.length - index - 1 ) * 5);
}index=(this.length - 1) * 5;
this.data[index++]=null;
this.data[index++]=null;
this.data[index++]=null;
this.data[index++]=null;
this.data[index]=null;
--this.length;
} else {
p$1.badIndex$I.apply(this, [index]);
}});

Clazz.newMeth(C$, 'setURI$I$S',  function (index, uri) {
if (index >= 0 && index < this.length ) {
this.data[index * 5]=uri;
} else {
p$1.badIndex$I.apply(this, [index]);
}});

Clazz.newMeth(C$, 'setLocalName$I$S',  function (index, localName) {
if (index >= 0 && index < this.length ) {
this.data[index * 5 + 1]=localName;
} else {
p$1.badIndex$I.apply(this, [index]);
}});

Clazz.newMeth(C$, 'setQName$I$S',  function (index, qName) {
if (index >= 0 && index < this.length ) {
this.data[index * 5 + 2]=qName;
} else {
p$1.badIndex$I.apply(this, [index]);
}});

Clazz.newMeth(C$, 'setType$I$S',  function (index, type) {
if (index >= 0 && index < this.length ) {
this.data[index * 5 + 3]=type;
} else {
p$1.badIndex$I.apply(this, [index]);
}});

Clazz.newMeth(C$, 'setValue$I$S',  function (index, value) {
if (index >= 0 && index < this.length ) {
this.data[index * 5 + 4]=value;
} else {
p$1.badIndex$I.apply(this, [index]);
}});

Clazz.newMeth(C$, 'ensureCapacity$I',  function (n) {
if (n <= 0) {
return;
}var max;
if (this.data == null  || this.data.length == 0 ) {
max=25;
} else if (this.data.length >= n * 5) {
return;
} else {
max=this.data.length;
}while (max < n * 5){
max*=2;
}
var newData=Clazz.array(String, [max]);
if (this.length > 0) {
System.arraycopy$O$I$O$I$I(this.data, 0, newData, 0, this.length * 5);
}this.data=newData;
}, p$1);

Clazz.newMeth(C$, 'badIndex$I',  function (index) {
var msg="Attempt to modify attribute at illegal index: " + index;
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,[msg]);
}, p$1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:35 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
