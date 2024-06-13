(function(){var P$=Clazz.newPackage("java.security"),p$1={},I$=[[0,'java.util.regex.Pattern','sun.security.util.ObjectIdentifier','java.util.Arrays','sun.security.util.DerOutputStream','java.math.BigInteger','sun.security.util.DerInputStream','sun.security.util.Debug']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PKCS12Attribute", null, null, [['java.security.KeyStore','java.security.KeyStore.Entry','java.security.KeyStore.Entry.Attribute']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.hashValue=-1;
},1);

C$.$fields$=[['I',['hashValue'],'S',['name','value'],'O',['encoded','byte[]']]
,['O',['COLON_SEPARATED_HEX_PAIRS','java.util.regex.Pattern']]]

Clazz.newMeth(C$, 'c$$S$S',  function (name, value) {
;C$.$init$.apply(this);
if (name == null  || value == null  ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}var type;
try {
type=Clazz.new_($I$(2,1).c$$S,[name]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S$Throwable,["Incorrect format: name", e]);
} else {
throw e;
}
}
this.name=name;
var length=value.length$();
var values;
if (value.charAt$I(0) == "[" && value.charAt$I(length - 1) == "]" ) {
values=value.substring$I$I(1, length - 1).split$S(", ");
} else {
values=Clazz.array(String, -1, [value]);
}this.value=value;
try {
this.encoded=p$1.encode$sun_security_util_ObjectIdentifier$SA.apply(this, [type, values]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S$Throwable,["Incorrect format: value", e]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'c$$BA',  function (encoded) {
;C$.$init$.apply(this);
if (encoded == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}this.encoded=encoded.clone$();
try {
p$1.parse$BA.apply(this, [encoded]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S$Throwable,["Incorrect format: encoded", e]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'getValue$',  function () {
return this.value;
});

Clazz.newMeth(C$, 'getEncoded$',  function () {
return this.encoded.clone$();
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (this === obj ) {
return true;
}if (!(Clazz.instanceOf(obj, "java.security.PKCS12Attribute"))) {
return false;
}return $I$(3,"equals$BA$BA",[this.encoded, (obj).getEncoded$()]);
});

Clazz.newMeth(C$, 'hashCode$',  function () {
if (this.hashValue == -1) {
$I$(3).hashCode$BA(this.encoded);
}return this.hashValue;
});

Clazz.newMeth(C$, 'toString',  function () {
return (this.name + "=" + this.value );
});

Clazz.newMeth(C$, 'encode$sun_security_util_ObjectIdentifier$SA',  function (type, values) {
var attribute=Clazz.new_($I$(4,1));
attribute.putOID$sun_security_util_ObjectIdentifier(type);
var attrContent=Clazz.new_($I$(4,1));
for (var value, $value = 0, $$value = values; $value<$$value.length&&((value=($$value[$value])),1);$value++) {
if (C$.COLON_SEPARATED_HEX_PAIRS.matcher$CharSequence(value).matches$()) {
var bytes=Clazz.new_([value.replace$CharSequence$CharSequence(":", ""), 16],$I$(5,1).c$$S$I).toByteArray$();
if (bytes[0] == 0) {
bytes=$I$(3).copyOfRange$BA$I$I(bytes, 1, bytes.length);
}attrContent.putOctetString$BA(bytes);
} else {
attrContent.putUTF8String$S(value);
}}
attribute.write$B$sun_security_util_DerOutputStream(49, attrContent);
var attributeValue=Clazz.new_($I$(4,1));
attributeValue.write$B$sun_security_util_DerOutputStream(48, attribute);
return attributeValue.toByteArray$();
}, p$1);

Clazz.newMeth(C$, 'parse$BA',  function (encoded) {
var attributeValue=Clazz.new_($I$(6,1).c$$BA,[encoded]);
var attrSeq=attributeValue.getSequence$I(2);
var type=attrSeq[0].getOID$();
var attrContent=Clazz.new_([attrSeq[1].toByteArray$()],$I$(6,1).c$$BA);
var attrValueSet=attrContent.getSet$I(1);
var values=Clazz.array(String, [attrValueSet.length]);
var printableString;
for (var i=0; i < attrValueSet.length; i++) {
if (attrValueSet[i].tag == 4) {
values[i]=$I$(7,"toString$BA",[attrValueSet[i].getOctetString$()]);
} else if ((printableString=attrValueSet[i].getAsString$()) != null ) {
values[i]=printableString;
} else if (attrValueSet[i].tag == 6) {
values[i]=attrValueSet[i].getOID$().toString();
} else if (attrValueSet[i].tag == 24) {
values[i]=attrValueSet[i].getGeneralizedTime$().toString();
} else if (attrValueSet[i].tag == 23) {
values[i]=attrValueSet[i].getUTCTime$().toString();
} else if (attrValueSet[i].tag == 2) {
values[i]=attrValueSet[i].getBigInteger$().toString();
} else if (attrValueSet[i].tag == 1) {
values[i]=String.valueOf$Z(attrValueSet[i].getBoolean$());
} else {
values[i]=$I$(7,"toString$BA",[attrValueSet[i].getDataBytes$()]);
}}
this.name=type.toString();
this.value=values.length == 1 ? values[0] : $I$(3).toString$OA(values);
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.COLON_SEPARATED_HEX_PAIRS=$I$(1,"compile$S",["^[0-9a-fA-F]{2}(:[0-9a-fA-F]{2})+$"]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:25 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
