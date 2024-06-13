(function(){var P$=Clazz.newPackage("java.util.jar"),I$=[[0,'sun.misc.ASCIICaseInsensitiveComparator','java.util.HashMap',['java.util.jar.Attributes','.Name'],'StringBuffer','java.util.jar.Manifest']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Attributes", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['java.util.Map', 'Cloneable']);
C$.$classes$=[['Name',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['map','java.util.Map']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$I.apply(this, [11]);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (size) {
;C$.$init$.apply(this);
this.map=Clazz.new_($I$(2,1).c$$I,[size]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_jar_Attributes',  function (attr) {
;C$.$init$.apply(this);
this.map=Clazz.new_($I$(2,1).c$$java_util_Map,[attr]);
}, 1);

Clazz.newMeth(C$, 'get$O',  function (name) {
return this.map.get$O(name);
});

Clazz.newMeth(C$, 'getValue$S',  function (name) {
return this.get$O(Clazz.new_($I$(3,1).c$$S,[name]));
});

Clazz.newMeth(C$, 'getValue$java_util_jar_Attributes_Name',  function (name) {
return this.get$O(name);
});

Clazz.newMeth(C$, 'put$O$O',  function (name, value) {
return this.map.put$O$O(name, value);
});

Clazz.newMeth(C$, 'putValue$S$S',  function (name, value) {
return this.put$O$O(Clazz.new_($I$(3,1).c$$S,[name]), value);
});

Clazz.newMeth(C$, 'remove$O',  function (name) {
return this.map.remove$O(name);
});

Clazz.newMeth(C$, 'containsValue$O',  function (value) {
return this.map.containsValue$O(value);
});

Clazz.newMeth(C$, 'containsKey$O',  function (name) {
return this.map.containsKey$O(name);
});

Clazz.newMeth(C$, 'putAll$java_util_Map',  function (attr) {
if (!Clazz.getClass(C$).isInstance$O(attr)) throw Clazz.new_(Clazz.load('ClassCastException'));
for (var me, $me = (attr).entrySet$().iterator$(); $me.hasNext$()&&((me=($me.next$())),1);) this.put$O$O(me.getKey$(), me.getValue$());

});

Clazz.newMeth(C$, 'clear$',  function () {
this.map.clear$();
});

Clazz.newMeth(C$, 'size$',  function () {
return this.map.size$();
});

Clazz.newMeth(C$, 'isEmpty$',  function () {
return this.map.isEmpty$();
});

Clazz.newMeth(C$, 'keySet$',  function () {
return this.map.keySet$();
});

Clazz.newMeth(C$, 'values$',  function () {
return this.map.values$();
});

Clazz.newMeth(C$, 'entrySet$',  function () {
return this.map.entrySet$();
});

Clazz.newMeth(C$, 'equals$O',  function (o) {
return this.map.equals$O(o);
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.map.hashCode$();
});

Clazz.newMeth(C$, 'clone$',  function () {
return Clazz.new_(C$.c$$java_util_jar_Attributes,[this]);
});

Clazz.newMeth(C$, 'write$java_io_DataOutputStream',  function (os) {
var it=this.entrySet$().iterator$();
while (it.hasNext$()){
var e=it.next$();
var buffer=Clazz.new_([(e.getKey$()).toString()],$I$(4,1).c$$S);
buffer.append$S(": ");
var value=e.getValue$();
if (value != null ) {
var vb=value.getBytes$S("UTF8");
value= String.instantialize(vb, 0, 0, vb.length);
}buffer.append$S(value);
buffer.append$S("\r\n");
$I$(5).make72Safe$StringBuffer(buffer);
os.writeBytes$S(buffer.toString());
}
os.writeBytes$S("\r\n");
});

Clazz.newMeth(C$, 'writeMain$java_io_DataOutputStream',  function (out) {
var vername=$I$(3).MANIFEST_VERSION.toString();
var version=this.getValue$S(vername);
if (version == null ) {
vername=$I$(3).SIGNATURE_VERSION.toString();
version=this.getValue$S(vername);
}if (version != null ) {
out.writeBytes$S(vername + ": " + version + "\r\n" );
}var it=this.entrySet$().iterator$();
while (it.hasNext$()){
var e=it.next$();
var name=(e.getKey$()).toString();
if ((version != null ) && !(name.equalsIgnoreCase$S(vername)) ) {
var buffer=Clazz.new_($I$(4,1).c$$S,[name]);
buffer.append$S(": ");
var value=e.getValue$();
if (value != null ) {
var vb=value.getBytes$S("UTF8");
value= String.instantialize(vb, 0, 0, vb.length);
}buffer.append$S(value);
buffer.append$S("\r\n");
$I$(5).make72Safe$StringBuffer(buffer);
out.writeBytes$S(buffer.toString());
}}
out.writeBytes$S("\r\n");
});

Clazz.newMeth(C$, 'read$java_util_jar_Manifest_FastInputStream$BA',  function (is, lbuf) {
var name=null;
var value=null;
var lastline=null;
var len;
while ((len=is.readLine$BA(lbuf)) != -1){
var lineContinued=false;
if (lbuf[--len] != 10 ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["line too long"]);
}if (len > 0 && lbuf[len - 1] == 13  ) {
--len;
}if (len == 0) {
break;
}var i=0;
if (lbuf[0] == 32 ) {
if (name == null ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["misplaced continuation line"]);
}lineContinued=true;
var buf=Clazz.array(Byte.TYPE, [lastline.length + len - 1]);
System.arraycopy$O$I$O$I$I(lastline, 0, buf, 0, lastline.length);
System.arraycopy$O$I$O$I$I(lbuf, 1, buf, lastline.length, len - 1);
if (is.peek$() == 32 ) {
lastline=buf;
continue;
}value= String.instantialize(buf, 0, buf.length, "UTF8");
lastline=null;
} else {
while (lbuf[i++] != 58 ){
if (i >= len) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["invalid header field"]);
}}
if (lbuf[i++] != 32 ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["invalid header field"]);
}name= String.instantialize(lbuf, 0, 0, i - 2);
if (is.peek$() == 32 ) {
lastline=Clazz.array(Byte.TYPE, [len - i]);
System.arraycopy$O$I$O$I$I(lbuf, i, lastline, 0, len - i);
continue;
}value= String.instantialize(lbuf, i, len - i, "UTF8");
}try {
if ((this.putValue$S$S(name, value) != null ) && (!lineContinued) ) {
System.out.println$S("java.util.jarDuplicate name in Manifest: " + name + ".\n" + "Ensure that the manifest does not " + "have duplicate entries, and\n" + "that blank lines separate " + "individual sections in both your\n" + "manifest and in the META-INF/MANIFEST.MF " + "entry in the jar file." );
}} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["invalid header field name: " + name]);
} else {
throw e;
}
}
}
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.Attributes, "Name", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.hashCode=-1;
},1);

C$.$fields$=[['I',['hashCode'],'S',['name']]
,['O',['MANIFEST_VERSION','java.util.jar.Attributes.Name','+SIGNATURE_VERSION','+CONTENT_TYPE','+CLASS_PATH','+MAIN_CLASS','+SEALED','+EXTENSION_LIST','+EXTENSION_NAME','+EXTENSION_INSTALLATION','+IMPLEMENTATION_TITLE','+IMPLEMENTATION_VERSION','+IMPLEMENTATION_VENDOR','+IMPLEMENTATION_VENDOR_ID','+IMPLEMENTATION_URL','+SPECIFICATION_TITLE','+SPECIFICATION_VERSION','+SPECIFICATION_VENDOR']]]

Clazz.newMeth(C$, 'c$$S',  function (name) {
;C$.$init$.apply(this);
if (name == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["name"]);
}if (!C$.isValid$S(name)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[name]);
}this.name=name.intern$();
}, 1);

Clazz.newMeth(C$, 'isValid$S',  function (name) {
var len=name.length$();
if (len > 70 || len == 0 ) {
return false;
}for (var i=0; i < len; i++) {
if (!C$.isValid$C(name.charAt$I(i))) {
return false;
}}
return true;
}, 1);

Clazz.newMeth(C$, 'isValid$C',  function (c) {
return C$.isAlpha$C(c) || C$.isDigit$C(c) || c == "_"   || c == "-" ;
}, 1);

Clazz.newMeth(C$, 'isAlpha$C',  function (c) {
return (c >= "a" && c <= "z" ) || (c >= "A" && c <= "Z" ) ;
}, 1);

Clazz.newMeth(C$, 'isDigit$C',  function (c) {
return c >= "0" && c <= "9" ;
}, 1);

Clazz.newMeth(C$, 'equals$O',  function (o) {
if (Clazz.instanceOf(o, "java.util.jar.Attributes.Name")) {
var c=$I$(1).CASE_INSENSITIVE_ORDER;
return c.compare$O$O(this.name, (o).name) == 0;
} else {
return false;
}});

Clazz.newMeth(C$, 'hashCode$',  function () {
if (this.hashCode == -1) {
this.hashCode=$I$(1).lowerCaseHashCode$S(this.name);
}return this.hashCode;
});

Clazz.newMeth(C$, 'toString',  function () {
return this.name;
});

C$.$static$=function(){C$.$static$=0;
C$.MANIFEST_VERSION=Clazz.new_(C$.c$$S,["Manifest-Version"]);
C$.SIGNATURE_VERSION=Clazz.new_(C$.c$$S,["Signature-Version"]);
C$.CONTENT_TYPE=Clazz.new_(C$.c$$S,["Content-Type"]);
C$.CLASS_PATH=Clazz.new_(C$.c$$S,["Class-Path"]);
C$.MAIN_CLASS=Clazz.new_(C$.c$$S,["Main-Class"]);
C$.SEALED=Clazz.new_(C$.c$$S,["Sealed"]);
C$.EXTENSION_LIST=Clazz.new_(C$.c$$S,["Extension-List"]);
C$.EXTENSION_NAME=Clazz.new_(C$.c$$S,["Extension-Name"]);
C$.EXTENSION_INSTALLATION=Clazz.new_(C$.c$$S,["Extension-Installation"]);
C$.IMPLEMENTATION_TITLE=Clazz.new_(C$.c$$S,["Implementation-Title"]);
C$.IMPLEMENTATION_VERSION=Clazz.new_(C$.c$$S,["Implementation-Version"]);
C$.IMPLEMENTATION_VENDOR=Clazz.new_(C$.c$$S,["Implementation-Vendor"]);
C$.IMPLEMENTATION_VENDOR_ID=Clazz.new_(C$.c$$S,["Implementation-Vendor-Id"]);
C$.IMPLEMENTATION_URL=Clazz.new_(C$.c$$S,["Implementation-URL"]);
C$.SPECIFICATION_TITLE=Clazz.new_(C$.c$$S,["Specification-Title"]);
C$.SPECIFICATION_VERSION=Clazz.new_(C$.c$$S,["Specification-Version"]);
C$.SPECIFICATION_VENDOR=Clazz.new_(C$.c$$S,["Specification-Vendor"]);
};

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:38 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
