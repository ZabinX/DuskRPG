(function(){var P$=Clazz.newPackage("sun.net.www"),p$1={},I$=[[0,'java.util.StringJoiner',['sun.net.www.MessageHeader','.HeaderIterator'],'java.util.HashMap','java.util.ArrayList','java.util.Collections']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MessageHeader", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['HeaderIterator',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['nkeys'],'O',['keys','String[]','+values']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
p$1.grow.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_InputStream',  function (is) {
;C$.$init$.apply(this);
this.parseHeader$java_io_InputStream(is);
}, 1);

Clazz.newMeth(C$, 'getHeaderNamesInList$',  function () {
var joiner=Clazz.new_($I$(1,1).c$$CharSequence,[","]);
for (var i=0; i < this.nkeys; i++) {
joiner.add$CharSequence(this.keys[i]);
}
return joiner.toString();
});

Clazz.newMeth(C$, 'reset$',  function () {
this.keys=null;
this.values=null;
this.nkeys=0;
p$1.grow.apply(this, []);
});

Clazz.newMeth(C$, 'findValue$S',  function (k) {
if (k == null ) {
for (var i=this.nkeys; --i >= 0; ) if (this.keys[i] == null ) return this.values[i];

} else for (var i=this.nkeys; --i >= 0; ) {
if (k.equalsIgnoreCase$S(this.keys[i])) return this.values[i];
}
return null;
});

Clazz.newMeth(C$, 'getKey$S',  function (k) {
for (var i=this.nkeys; --i >= 0; ) if ((this.keys[i] == k) || (k != null  && k.equalsIgnoreCase$S(this.keys[i]) ) ) return i;

return -1;
});

Clazz.newMeth(C$, 'getKey$I',  function (n) {
if (n < 0 || n >= this.nkeys ) return null;
return this.keys[n];
});

Clazz.newMeth(C$, 'getValue$I',  function (n) {
if (n < 0 || n >= this.nkeys ) return null;
return this.values[n];
});

Clazz.newMeth(C$, 'findNextValue$S$S',  function (k, v) {
var foundV=false;
if (k == null ) {
for (var i=this.nkeys; --i >= 0; ) if (this.keys[i] == null ) if (foundV) return this.values[i];
 else if (this.values[i] == v) foundV=true;

} else for (var i=this.nkeys; --i >= 0; ) if (k.equalsIgnoreCase$S(this.keys[i])) if (foundV) return this.values[i];
 else if (this.values[i] == v) foundV=true;

return null;
});

Clazz.newMeth(C$, 'filterNTLMResponses$S',  function (k) {
var found=false;
for (var i=0; i < this.nkeys; i++) {
if (k.equalsIgnoreCase$S(this.keys[i]) && this.values[i] != null   && this.values[i].length$() > 5  && this.values[i].substring$I$I(0, 5).equalsIgnoreCase$S("NTLM ") ) {
found=true;
break;
}}
if (found) {
var j=0;
for (var i=0; i < this.nkeys; i++) {
if (k.equalsIgnoreCase$S(this.keys[i]) && ("Negotiate".equalsIgnoreCase$S(this.values[i]) || "Kerberos".equalsIgnoreCase$S(this.values[i]) ) ) {
continue;
}if (i != j) {
this.keys[j]=this.keys[i];
this.values[j]=this.values[i];
}++j;
}
if (j != this.nkeys) {
this.nkeys=j;
return true;
}}return false;
});

Clazz.newMeth(C$, 'multiValueIterator$S',  function (k) {
return Clazz.new_($I$(2,1).c$$S$O,[this, null, k, this]);
});

Clazz.newMeth(C$, 'getHeaders$',  function () {
return this.getHeaders$SA(null);
});

Clazz.newMeth(C$, 'getHeaders$SA',  function (excludeList) {
return this.filterAndAddHeaders$SA$java_util_Map(excludeList, null);
});

Clazz.newMeth(C$, 'filterAndAddHeaders$SA$java_util_Map',  function (excludeList, include) {
var skipIt=false;
var m=Clazz.new_($I$(3,1));
for (var i=this.nkeys; --i >= 0; ) {
if (excludeList != null ) {
for (var j=0; j < excludeList.length; j++) {
if ((excludeList[j] != null ) && (excludeList[j].equalsIgnoreCase$S(this.keys[i])) ) {
skipIt=true;
break;
}}
}if (!skipIt) {
var l=m.get$O(this.keys[i]);
if (l == null ) {
l=Clazz.new_($I$(4,1));
m.put$O$O(this.keys[i], l);
}l.add$O(this.values[i]);
} else {
skipIt=false;
}}
if (include != null ) {
for (var entry, $entry = include.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var l=m.get$O(entry.getKey$());
if (l == null ) {
l=Clazz.new_($I$(4,1));
m.put$O$O(entry.getKey$(), l);
}l.addAll$java_util_Collection(entry.getValue$());
}
}for (var key, $key = m.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
m.put$O$O(key, $I$(5,"unmodifiableList$java_util_List",[m.get$O(key)]));
}
return $I$(5).unmodifiableMap$java_util_Map(m);
});

Clazz.newMeth(C$, 'print$java_io_PrintStream',  function (p) {
for (var i=0; i < this.nkeys; i++) if (this.keys[i] != null ) {
p.print$S(this.keys[i] + (this.values[i] != null  ? ": " + this.values[i] : "") + "\r\n" );
}
p.print$S("\r\n");
p.flush$();
});

Clazz.newMeth(C$, 'add$S$S',  function (k, v) {
p$1.grow.apply(this, []);
this.keys[this.nkeys]=k;
this.values[this.nkeys]=v;
++this.nkeys;
});

Clazz.newMeth(C$, 'prepend$S$S',  function (k, v) {
p$1.grow.apply(this, []);
for (var i=this.nkeys; i > 0; i--) {
this.keys[i]=this.keys[i - 1];
this.values[i]=this.values[i - 1];
}
this.keys[0]=k;
this.values[0]=v;
++this.nkeys;
});

Clazz.newMeth(C$, 'set$I$S$S',  function (i, k, v) {
p$1.grow.apply(this, []);
if (i < 0) {
return;
} else if (i >= this.nkeys) {
this.add$S$S(k, v);
} else {
this.keys[i]=k;
this.values[i]=v;
}});

Clazz.newMeth(C$, 'grow',  function () {
if (this.keys == null  || this.nkeys >= this.keys.length ) {
var nk=Clazz.array(String, [this.nkeys + 4]);
var nv=Clazz.array(String, [this.nkeys + 4]);
if (this.keys != null ) System.arraycopy$O$I$O$I$I(this.keys, 0, nk, 0, this.nkeys);
if (this.values != null ) System.arraycopy$O$I$O$I$I(this.values, 0, nv, 0, this.nkeys);
this.keys=nk;
this.values=nv;
}}, p$1);

Clazz.newMeth(C$, 'remove$S',  function (k) {
if (k == null ) {
for (var i=0; i < this.nkeys; i++) {
while (this.keys[i] == null  && i < this.nkeys ){
for (var j=i; j < this.nkeys - 1; j++) {
this.keys[j]=this.keys[j + 1];
this.values[j]=this.values[j + 1];
}
--this.nkeys;
}
}
} else {
for (var i=0; i < this.nkeys; i++) {
while (k.equalsIgnoreCase$S(this.keys[i]) && i < this.nkeys ){
for (var j=i; j < this.nkeys - 1; j++) {
this.keys[j]=this.keys[j + 1];
this.values[j]=this.values[j + 1];
}
--this.nkeys;
}
}
}});

Clazz.newMeth(C$, 'set$S$S',  function (k, v) {
for (var i=this.nkeys; --i >= 0; ) if (k.equalsIgnoreCase$S(this.keys[i])) {
this.values[i]=v;
return;
}
this.add$S$S(k, v);
});

Clazz.newMeth(C$, 'setIfNotSet$S$S',  function (k, v) {
if (this.findValue$S(k) == null ) {
this.add$S$S(k, v);
}});

Clazz.newMeth(C$, 'canonicalID$S',  function (id) {
if (id == null ) return "";
var st=0;
var len=id.length$();
var substr=false;
var c;
while (st < len && ((c=id.charAt$I(st).$c()) == 60  || c <= 32  ) ){
++st;
substr=true;
}
while (st < len && ((c=id.charAt$I(len - 1).$c()) == 62  || c <= 32  ) ){
--len;
substr=true;
}
return substr ? id.substring$I$I(st, len) : id;
}, 1);

Clazz.newMeth(C$, 'parseHeader$java_io_InputStream',  function (is) {
{
this.nkeys=0;
}this.mergeHeader$java_io_InputStream(is);
});

Clazz.newMeth(C$, 'mergeHeader$java_io_InputStream',  function (is) {
if (is == null ) return;
var s=Clazz.array(Character.TYPE, [10]);
var firstc=is.read$();
while (firstc != 10  && firstc != 13   && firstc >= 0 ){
var len=0;
var keyend=-1;
var c;
var inKey=firstc > 32 ;
s[len++]=String.fromCharCode(firstc);
 parseloop : {
while ((c=is.read$()) >= 0){
switch (c) {
case 58:
if (inKey && len > 0 ) keyend=len;
inKey=false;
break;
case 9:
c=" ".$c();
case 32:
inKey=false;
break;
case 13:
case 10:
firstc=is.read$();
if (c == 13  && firstc == 10  ) {
firstc=is.read$();
if (firstc == 13 ) firstc=is.read$();
}if (firstc == 10  || firstc == 13   || firstc > 32  ) break parseloop;
c=" ".$c();
break;
}
if (len >= s.length) {
var ns=Clazz.array(Character.TYPE, [s.length * 2]);
System.arraycopy$O$I$O$I$I(s, 0, ns, 0, len);
s=ns;
}s[len++]=String.fromCharCode(c);
}
firstc=-1;
}while (len > 0 && s[len - 1] <= " " )--len;

var k;
if (keyend <= 0) {
k=null;
keyend=0;
} else {
k=String.copyValueOf$CA$I$I(s, 0, keyend);
if (keyend < len && s[keyend] == ":" ) ++keyend;
while (keyend < len && s[keyend] <= " " )++keyend;

}var v;
if (keyend >= len) v= String.instantialize();
 else v=String.copyValueOf$CA$I$I(s, keyend, len - keyend);
this.add$S$S(k, v);
}
});

Clazz.newMeth(C$, 'toString',  function () {
var result=C$.superclazz.prototype.toString.apply(this, []) + this.nkeys + " pairs: " ;
for (var i=0; i < this.keys.length && i < this.nkeys ; i++) {
result+="{" + this.keys[i] + ": " + this.values[i] + "}" ;
}
return result;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.MessageHeader, "HeaderIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.index=0;
this.next=-1;
this.haveNext=false;
},1);

C$.$fields$=[['Z',['haveNext'],'I',['index','next'],'S',['key'],'O',['lock','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$S$O',  function (k, lock) {
;C$.$init$.apply(this);
this.key=k;
this.lock=lock;
}, 1);

Clazz.newMeth(C$, 'hasNext$',  function () {
{
if (this.haveNext) {
return true;
}while (this.index < this.b$['sun.net.www.MessageHeader'].nkeys){
if (this.key.equalsIgnoreCase$S(this.b$['sun.net.www.MessageHeader'].keys[this.index])) {
this.haveNext=true;
this.next=this.index++;
return true;
}++this.index;
}
return false;
}});

Clazz.newMeth(C$, 'next$',  function () {
{
if (this.haveNext) {
this.haveNext=false;
return this.b$['sun.net.www.MessageHeader'].values[this.next];
}if (this.hasNext$()) {
return this.next$();
} else {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException').c$$S,["No more elements"]);
}}});

Clazz.newMeth(C$, 'remove$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["remove not allowed"]);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:47 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
