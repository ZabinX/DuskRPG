(function(){var P$=Clazz.newPackage("java.awt.datatransfer"),p$1={},I$=[[0,'java.awt.datatransfer.MimeTypeParameterList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MimeType", null, null, 'Cloneable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['primaryType','subType'],'O',['parameters','java.awt.datatransfer.MimeTypeParameterList']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (rawdata) {
;C$.$init$.apply(this);
p$1.parse$S.apply(this, [rawdata]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S',  function (primary, sub) {
C$.c$$S$S$java_awt_datatransfer_MimeTypeParameterList.apply(this, [primary, sub, Clazz.new_($I$(1,1))]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$java_awt_datatransfer_MimeTypeParameterList',  function (primary, sub, mtpl) {
;C$.$init$.apply(this);
if (p$1.isValidToken$S.apply(this, [primary])) {
this.primaryType=primary.toLowerCase$();
} else {
throw Clazz.new_(Clazz.load('java.awt.datatransfer.MimeTypeParseException').c$$S,["Primary type is invalid."]);
}if (p$1.isValidToken$S.apply(this, [sub])) {
this.subType=sub.toLowerCase$();
} else {
throw Clazz.new_(Clazz.load('java.awt.datatransfer.MimeTypeParseException').c$$S,["Sub type is invalid."]);
}this.parameters=mtpl.clone$();
}, 1);

Clazz.newMeth(C$, 'hashCode$',  function () {
var code=0;
code+=this.primaryType.hashCode$();
code+=this.subType.hashCode$();
code+=this.parameters.hashCode$();
return code;
});

Clazz.newMeth(C$, 'equals$O',  function (thatObject) {
if (!(Clazz.instanceOf(thatObject, "java.awt.datatransfer.MimeType"))) {
return false;
}var that=thatObject;
var isIt=((this.primaryType.equals$O(that.primaryType)) && (this.subType.equals$O(that.subType)) && (this.parameters.equals$O(that.parameters))  );
return isIt;
});

Clazz.newMeth(C$, 'parse$S',  function (rawdata) {
var slashIndex=rawdata.indexOf$I("/");
var semIndex=rawdata.indexOf$I(";");
if ((slashIndex < 0) && (semIndex < 0) ) {
throw Clazz.new_(Clazz.load('java.awt.datatransfer.MimeTypeParseException').c$$S,["Unable to find a sub type."]);
} else if ((slashIndex < 0) && (semIndex >= 0) ) {
throw Clazz.new_(Clazz.load('java.awt.datatransfer.MimeTypeParseException').c$$S,["Unable to find a sub type."]);
} else if ((slashIndex >= 0) && (semIndex < 0) ) {
this.primaryType=rawdata.substring$I$I(0, slashIndex).trim$().toLowerCase$();
this.subType=rawdata.substring$I(slashIndex + 1).trim$().toLowerCase$();
this.parameters=Clazz.new_($I$(1,1));
} else if (slashIndex < semIndex) {
this.primaryType=rawdata.substring$I$I(0, slashIndex).trim$().toLowerCase$();
this.subType=rawdata.substring$I$I(slashIndex + 1, semIndex).trim$().toLowerCase$();
this.parameters=Clazz.new_([rawdata.substring$I(semIndex)],$I$(1,1).c$$S);
} else {
throw Clazz.new_(Clazz.load('java.awt.datatransfer.MimeTypeParseException').c$$S,["Unable to find a sub type."]);
}if (!p$1.isValidToken$S.apply(this, [this.primaryType])) {
throw Clazz.new_(Clazz.load('java.awt.datatransfer.MimeTypeParseException').c$$S,["Primary type is invalid."]);
}if (!p$1.isValidToken$S.apply(this, [this.subType])) {
throw Clazz.new_(Clazz.load('java.awt.datatransfer.MimeTypeParseException').c$$S,["Sub type is invalid."]);
}}, p$1);

Clazz.newMeth(C$, 'getPrimaryType$',  function () {
return this.primaryType;
});

Clazz.newMeth(C$, 'getSubType$',  function () {
return this.subType;
});

Clazz.newMeth(C$, 'getParameters$',  function () {
return this.parameters.clone$();
});

Clazz.newMeth(C$, 'getParameter$S',  function (name) {
return this.parameters.get$S(name);
});

Clazz.newMeth(C$, 'setParameter$S$S',  function (name, value) {
this.parameters.set$S$S(name, value);
});

Clazz.newMeth(C$, 'removeParameter$S',  function (name) {
this.parameters.remove$S(name);
});

Clazz.newMeth(C$, 'toString',  function () {
return this.getBaseType$() + this.parameters.toString();
});

Clazz.newMeth(C$, 'getBaseType$',  function () {
return this.primaryType + "/" + this.subType ;
});

Clazz.newMeth(C$, 'match$java_awt_datatransfer_MimeType',  function (type) {
if (type == null ) return false;
return this.primaryType.equals$O(type.getPrimaryType$()) && (this.subType.equals$O("*") || type.getSubType$().equals$O("*") || (this.subType.equals$O(type.getSubType$()))  ) ;
});

Clazz.newMeth(C$, 'match$S',  function (rawdata) {
if (rawdata == null ) return false;
return this.match$java_awt_datatransfer_MimeType(Clazz.new_(C$.c$$S,[rawdata]));
});

Clazz.newMeth(C$, 'clone$',  function () {
var newObj=null;
try {
newObj=Clazz.clone(this);
} catch (cannotHappen) {
if (Clazz.exceptionOf(cannotHappen,"CloneNotSupportedException")){
} else {
throw cannotHappen;
}
}
newObj.parameters=this.parameters.clone$();
return newObj;
});

Clazz.newMeth(C$, 'isTokenChar$C',  function (c) {
return ((c.$c() > 32 ) && (c.$c() < 127 ) ) && ("()<>@,;:\\\"/[]?=".indexOf$I(c) < 0) ;
}, 1);

Clazz.newMeth(C$, 'isValidToken$S',  function (s) {
var len=s.length$();
if (len > 0) {
for (var i=0; i < len; ++i) {
var c=s.charAt$I(i);
if (!C$.isTokenChar$C(c)) {
return false;
}}
return true;
} else {
return false;
}}, p$1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:08 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
