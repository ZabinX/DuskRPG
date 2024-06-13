(function(){var P$=Clazz.newPackage("javax.xml.namespace"),I$=[[0,'java.security.AccessController']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "QName", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['namespaceURI','localPart','prefix']]
,['Z',['useDefaultSerialVersionUID'],'J',['serialVersionUID']]]

Clazz.newMeth(C$, 'c$$S$S',  function (namespaceURI, localPart) {
C$.c$$S$S$S.apply(this, [namespaceURI, localPart, ""]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S',  function (namespaceURI, localPart, prefix) {
;C$.$init$.apply(this);
if (namespaceURI == null ) {
this.namespaceURI="";
} else {
this.namespaceURI=namespaceURI;
}if (localPart == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["local part cannot be \"null\" when creating a QName"]);
}this.localPart=localPart;
if (prefix == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["prefix cannot be \"null\" when creating a QName"]);
}this.prefix=prefix;
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (localPart) {
C$.c$$S$S$S.apply(this, ["", localPart, ""]);
}, 1);

Clazz.newMeth(C$, 'getNamespaceURI$',  function () {
return this.namespaceURI;
});

Clazz.newMeth(C$, 'getLocalPart$',  function () {
return this.localPart;
});

Clazz.newMeth(C$, 'getPrefix$',  function () {
return this.prefix;
});

Clazz.newMeth(C$, 'equals$O',  function (objectToTest) {
if (objectToTest === this ) {
return true;
}if (objectToTest == null  || !(Clazz.instanceOf(objectToTest, "javax.xml.namespace.QName")) ) {
return false;
}var qName=objectToTest;
return this.localPart.equals$O(qName.localPart) && this.namespaceURI.equals$O(qName.namespaceURI) ;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.namespaceURI.hashCode$() ^ this.localPart.hashCode$();
});

Clazz.newMeth(C$, 'toString',  function () {
if (this.namespaceURI.equals$O("")) {
return this.localPart;
} else {
return "{" + this.namespaceURI + "}" + this.localPart ;
}});

Clazz.newMeth(C$, 'valueOf$S',  function (qNameAsString) {
if (qNameAsString == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["cannot create QName from \"null\" or \"\" String"]);
}if (qNameAsString.length$() == 0) {
return Clazz.new_(C$.c$$S$S$S,["", qNameAsString, ""]);
}if (qNameAsString.charAt$I(0) != "{") {
return Clazz.new_(C$.c$$S$S$S,["", qNameAsString, ""]);
}if (qNameAsString.startsWith$S("{}")) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Namespace URI .equals(XMLConstants.NULL_NS_URI), .equals(\"" + "" + "\"), " + "only the local part, " + "\"" + qNameAsString.substring$I(2 + "".length$()) + "\", " + "should be provided." ]);
}var endOfNamespaceURI=qNameAsString.indexOf$I("}");
if (endOfNamespaceURI == -1) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["cannot create QName from \"" + qNameAsString + "\", missing closing \"}\"" ]);
}return Clazz.new_(C$.c$$S$S$S,[qNameAsString.substring$I$I(1, endOfNamespaceURI), qNameAsString.substring$I(endOfNamespaceURI + 1), ""]);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.useDefaultSerialVersionUID=true;
{
try {
var valueUseCompatibleSerialVersionUID=$I$(1,"doPrivileged$java_security_PrivilegedAction",[((P$.QName$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "QName$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'run$',  function () {
return System.getProperty$S("com.sun.xml.namespace.QName.useCompatibleSerialVersionUID");
});
})()
), Clazz.new_(P$.QName$1.$init$,[this, null]))]);
C$.useDefaultSerialVersionUID=(valueUseCompatibleSerialVersionUID != null  && valueUseCompatibleSerialVersionUID.equals$O("1.0") ) ? false : true;
} catch (exception) {
if (Clazz.exceptionOf(exception,"Exception")){
C$.useDefaultSerialVersionUID=true;
} else {
throw exception;
}
}
if (C$.useDefaultSerialVersionUID) {
C$.serialVersionUID=[12853908,543621108227,-1];
} else {
C$.serialVersionUID=[7798271,263370453180,1];
}};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:34 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
