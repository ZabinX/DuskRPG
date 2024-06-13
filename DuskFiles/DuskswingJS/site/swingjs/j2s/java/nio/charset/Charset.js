(function(){var P$=Clazz.newPackage("java.nio.charset"),p$1={},I$=[[0,'java.util.ServiceLoader','java.nio.charset.spi.CharsetProvider','swingjs.JSCharSet','swingjs.JSUtil','java.util.HashSet','java.util.Collections','java.nio.ByteBuffer','sun.nio.cs.ThreadLocalCoders','java.nio.charset.CodingErrorAction','Error','java.nio.CharBuffer']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Charset", null, null, 'Comparable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.aliasSet=null;
},1);

C$.$fields$=[['S',['name'],'O',['aliases','String[]','aliasSet','java.util.Set']]
,['O',['cache1','Object[]','+cache2','defaultCharset','java.nio.charset.Charset']]]

Clazz.newMeth(C$, 'checkName$S',  function (s) {
}, 1);

Clazz.newMeth(C$, 'cache$S$java_nio_charset_Charset',  function (charsetName, cs) {
C$.cache2=C$.cache1;
C$.cache1=Clazz.array(java.lang.Object, -1, [charsetName, cs]);
}, 1);

Clazz.newMeth(C$, 'providers$',  function () {
return ((P$.Charset$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Charset$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Iterator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.cl=ClassLoader.getSystemClassLoader$();
this.sl=$I$(1,"load$Class$ClassLoader",[Clazz.getClass($I$(2)), this.cl]);
this.i=this.sl.iterator$();
this.next=null;
},1);

C$.$fields$=[['O',['cl','ClassLoader','sl','java.util.ServiceLoader','i','java.util.Iterator','next','java.nio.charset.spi.CharsetProvider']]]

Clazz.newMeth(C$, 'getNext',  function () {
while (this.next == null ){
try {
if (!this.i.hasNext$()) return false;
this.next=this.i.next$();
} catch (sce) {
if (Clazz.exceptionOf(sce,"java.util.ServiceConfigurationError")){
if (Clazz.instanceOf(sce.getCause$(), "java.lang.SecurityException")) {
continue;
}throw sce;
} else {
throw sce;
}
}
}
return true;
}, p$1);

Clazz.newMeth(C$, 'hasNext$',  function () {
return p$1.getNext.apply(this, []);
});

Clazz.newMeth(C$, 'next$',  function () {
if (!p$1.getNext.apply(this, [])) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
var n=this.next;
this.next=null;
return n;
});

Clazz.newMeth(C$, 'remove$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});
})()
), Clazz.new_(P$.Charset$1.$init$,[this, null]));
}, 1);

Clazz.newMeth(C$, 'lookup$S',  function (charsetName) {
if (charsetName == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Null charset name"]);
var a;
if ((a=C$.cache1) != null  && charsetName.equals$O(a[0]) ) return a[1];
return C$.lookup2$S(charsetName);
}, 1);

Clazz.newMeth(C$, 'lookup2$S',  function (charsetName) {
var a;
if ((a=C$.cache2) != null  && charsetName.equals$O(a[0]) ) {
C$.cache2=C$.cache1;
C$.cache1=a;
return a[1];
}var name=$I$(3).lookupName$S(charsetName);
if (name == null ) return null;
var cs;
try {
cs=Clazz.forName("sun.nio.cs." + name).newInstance$();
} catch (e) {
if (Clazz.exceptionOf(e,"InstantiationException") || Clazz.exceptionOf(e,"IllegalAccessException") || Clazz.exceptionOf(e,"ClassNotFoundException")){
return null;
} else {
throw e;
}
}
if (cs != null ) {
C$.cache$S$java_nio_charset_Charset(charsetName, cs);
return cs;
}return null;
}, 1);

Clazz.newMeth(C$, 'isSupported$S',  function (charsetName) {
return (C$.lookup$S(charsetName) != null );
}, 1);

Clazz.newMeth(C$, 'forName$S',  function (charsetName) {
var cs=C$.lookup$S(charsetName);
if (cs != null ) return cs;
throw Clazz.new_(Clazz.load('java.nio.charset.UnsupportedCharsetException').c$$S,[charsetName]);
}, 1);

Clazz.newMeth(C$, 'put$java_util_Iterator$java_util_Map',  function (i, m) {
while (i.hasNext$()){
var cs=i.next$();
if (!m.containsKey$O(cs.name$())) m.put$O$O(cs.name$(), cs);
}
}, 1);

Clazz.newMeth(C$, 'availableCharsets$',  function () {
$I$(4).notImplemented$S("Charset.availableCharsets");
return null;
}, 1);

Clazz.newMeth(C$, 'defaultCharset$',  function () {
if (C$.defaultCharset == null ) {
C$.defaultCharset=C$.forName$S("UTF-8");
}return C$.defaultCharset;
}, 1);

Clazz.newMeth(C$, 'c$$S$SA',  function (canonicalName, aliases) {
;C$.$init$.apply(this);
var as=(aliases == null ) ? Clazz.array(String, [0]) : aliases;
this.name=canonicalName;
this.aliases=as;
}, 1);

Clazz.newMeth(C$, 'name$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'aliases$',  function () {
if (this.aliasSet != null ) return this.aliasSet;
var n=this.aliases.length;
var hs=Clazz.new_($I$(5,1).c$$I,[n]);
for (var i=0; i < n; i++) hs.add$O(this.aliases[i]);

this.aliasSet=$I$(6).unmodifiableSet$java_util_Set(hs);
return this.aliasSet;
});

Clazz.newMeth(C$, 'displayName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'isRegistered$',  function () {
return !this.name.startsWith$S("X-") && !this.name.startsWith$S("x-") ;
});

Clazz.newMeth(C$, 'displayName$java_util_Locale',  function (locale) {
return this.name;
});

Clazz.newMeth(C$, 'canEncode$',  function () {
return true;
});

Clazz.newMeth(C$, 'decode$BA$I$I',  function (b, offset, length) {
return this.decode$java_nio_ByteBuffer($I$(7).wrap$BA$I$I(b, offset, length));
});

Clazz.newMeth(C$, 'decode$java_nio_ByteBuffer',  function (bb) {
try {
return $I$(8).decoderFor$O(this).onMalformedInput$java_nio_charset_CodingErrorAction($I$(9).REPLACE).onUnmappableCharacter$java_nio_charset_CodingErrorAction($I$(9).REPLACE).decode$java_nio_ByteBuffer(bb);
} catch (x) {
if (Clazz.exceptionOf(x,"java.nio.charset.CharacterCodingException")){
throw Clazz.new_($I$(10,1).c$$Throwable,[x]);
} else {
throw x;
}
}
});

Clazz.newMeth(C$, 'encode$java_nio_CharBuffer',  function (cb) {
try {
return $I$(8).encoderFor$O(this).onMalformedInput$java_nio_charset_CodingErrorAction($I$(9).REPLACE).onUnmappableCharacter$java_nio_charset_CodingErrorAction($I$(9).REPLACE).encode$java_nio_CharBuffer(cb);
} catch (x) {
if (Clazz.exceptionOf(x,"java.nio.charset.CharacterCodingException")){
throw Clazz.new_($I$(10,1).c$$Throwable,[x]);
} else {
throw x;
}
}
});

Clazz.newMeth(C$, 'encode$S',  function (str) {
return this.encode$java_nio_CharBuffer($I$(11).wrap$CharSequence(str));
});

Clazz.newMeth(C$, ['compareTo$java_nio_charset_Charset','compareTo$O'],  function (that) {
return (this.name$().compareToIgnoreCase$S(that.name$()));
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.name$().hashCode$();
});

Clazz.newMeth(C$, 'equals$O',  function (ob) {
if (!(Clazz.instanceOf(ob, "java.nio.charset.Charset"))) return false;
if (this === ob ) return true;
return this.name.equals$O((ob).name$());
});

Clazz.newMeth(C$, 'toString',  function () {
return this.name$();
});

C$.$static$=function(){C$.$static$=0;
C$.cache1=null;
C$.cache2=null;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:21 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
