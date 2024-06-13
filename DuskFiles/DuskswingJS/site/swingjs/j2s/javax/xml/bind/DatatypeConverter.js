(function(){var P$=Clazz.newPackage("javax.xml.bind"),I$=[[0,'javax.xml.bind.Messages','javax.xml.bind.DatatypeConverterImpl']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DatatypeConverter");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['theConverter','javax.xml.bind.DatatypeConverterInterface']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setDatatypeConverter$javax_xml_bind_DatatypeConverterInterface',  function (converter) {
if (converter == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(1).format$S("DatatypeConverter.ConverterMustNotBeNull")]);
} else if (C$.theConverter == null ) {
C$.theConverter=converter;
}}, 1);

Clazz.newMeth(C$, 'initConverter$',  function () {
C$.theConverter=Clazz.new_($I$(2,1));
}, 1);

Clazz.newMeth(C$, 'parseString$S',  function (lexicalXSDString) {
if (C$.theConverter == null ) C$.initConverter$();
return C$.theConverter.parseString$S(lexicalXSDString);
}, 1);

Clazz.newMeth(C$, 'parseInteger$S',  function (lexicalXSDInteger) {
if (C$.theConverter == null ) C$.initConverter$();
return C$.theConverter.parseInteger$S(lexicalXSDInteger);
}, 1);

Clazz.newMeth(C$, 'parseInt$S',  function (lexicalXSDInt) {
if (C$.theConverter == null ) C$.initConverter$();
return C$.theConverter.parseInt$S(lexicalXSDInt);
}, 1);

Clazz.newMeth(C$, 'parseLong$S',  function (lexicalXSDLong) {
if (C$.theConverter == null ) C$.initConverter$();
return C$.theConverter.parseLong$S(lexicalXSDLong);
}, 1);

Clazz.newMeth(C$, 'parseShort$S',  function (lexicalXSDShort) {
if (C$.theConverter == null ) C$.initConverter$();
return C$.theConverter.parseShort$S(lexicalXSDShort);
}, 1);

Clazz.newMeth(C$, 'parseDecimal$S',  function (lexicalXSDDecimal) {
if (C$.theConverter == null ) C$.initConverter$();
return C$.theConverter.parseDecimal$S(lexicalXSDDecimal);
}, 1);

Clazz.newMeth(C$, 'parseFloat$S',  function (lexicalXSDFloat) {
if (C$.theConverter == null ) C$.initConverter$();
return C$.theConverter.parseFloat$S(lexicalXSDFloat);
}, 1);

Clazz.newMeth(C$, 'parseDouble$S',  function (lexicalXSDDouble) {
if (C$.theConverter == null ) C$.initConverter$();
return C$.theConverter.parseDouble$S(lexicalXSDDouble);
}, 1);

Clazz.newMeth(C$, 'parseBoolean$S',  function (lexicalXSDBoolean) {
if (C$.theConverter == null ) C$.initConverter$();
return C$.theConverter.parseBoolean$S(lexicalXSDBoolean);
}, 1);

Clazz.newMeth(C$, 'parseByte$S',  function (lexicalXSDByte) {
if (C$.theConverter == null ) C$.initConverter$();
return C$.theConverter.parseByte$S(lexicalXSDByte);
}, 1);

Clazz.newMeth(C$, 'parseQName$S$javax_xml_namespace_NamespaceContext',  function (lexicalXSDQName, nsc) {
if (C$.theConverter == null ) C$.initConverter$();
return C$.theConverter.parseQName$S$javax_xml_namespace_NamespaceContext(lexicalXSDQName, nsc);
}, 1);

Clazz.newMeth(C$, 'parseDateTime$S',  function (lexicalXSDDateTime) {
if (C$.theConverter == null ) C$.initConverter$();
return C$.theConverter.parseDateTime$S(lexicalXSDDateTime);
}, 1);

Clazz.newMeth(C$, 'parseBase64Binary$S',  function (lexicalXSDBase64Binary) {
if (C$.theConverter == null ) C$.initConverter$();
return C$.theConverter.parseBase64Binary$S(lexicalXSDBase64Binary);
}, 1);

Clazz.newMeth(C$, 'parseHexBinary$S',  function (lexicalXSDHexBinary) {
if (C$.theConverter == null ) C$.initConverter$();
return C$.theConverter.parseHexBinary$S(lexicalXSDHexBinary);
}, 1);

Clazz.newMeth(C$, 'parseUnsignedInt$S',  function (lexicalXSDUnsignedInt) {
if (C$.theConverter == null ) C$.initConverter$();
return C$.theConverter.parseUnsignedInt$S(lexicalXSDUnsignedInt);
}, 1);

Clazz.newMeth(C$, 'parseUnsignedShort$S',  function (lexicalXSDUnsignedShort) {
if (C$.theConverter == null ) C$.initConverter$();
return C$.theConverter.parseUnsignedShort$S(lexicalXSDUnsignedShort);
}, 1);

Clazz.newMeth(C$, 'parseTime$S',  function (lexicalXSDTime) {
if (C$.theConverter == null ) C$.initConverter$();
return C$.theConverter.parseTime$S(lexicalXSDTime);
}, 1);

Clazz.newMeth(C$, 'parseDate$S',  function (lexicalXSDDate) {
if (C$.theConverter == null ) C$.initConverter$();
return C$.theConverter.parseDate$S(lexicalXSDDate);
}, 1);

Clazz.newMeth(C$, 'parseAnySimpleType$S',  function (lexicalXSDAnySimpleType) {
if (C$.theConverter == null ) C$.initConverter$();
return C$.theConverter.parseAnySimpleType$S(lexicalXSDAnySimpleType);
}, 1);

Clazz.newMeth(C$, 'printString$S',  function (val) {
if (C$.theConverter == null ) C$.initConverter$();
return C$.theConverter.printString$S(val);
}, 1);

Clazz.newMeth(C$, 'printInteger$java_math_BigInteger',  function (val) {
if (C$.theConverter == null ) C$.initConverter$();
return C$.theConverter.printInteger$java_math_BigInteger(val);
}, 1);

Clazz.newMeth(C$, 'printInt$I',  function (val) {
if (C$.theConverter == null ) C$.initConverter$();
return C$.theConverter.printInt$I(val);
}, 1);

Clazz.newMeth(C$, 'printLong$J',  function (val) {
if (C$.theConverter == null ) C$.initConverter$();
return C$.theConverter.printLong$J(val);
}, 1);

Clazz.newMeth(C$, 'printShort$H',  function (val) {
if (C$.theConverter == null ) C$.initConverter$();
return C$.theConverter.printShort$H(val);
}, 1);

Clazz.newMeth(C$, 'printDecimal$java_math_BigDecimal',  function (val) {
if (C$.theConverter == null ) C$.initConverter$();
return C$.theConverter.printDecimal$java_math_BigDecimal(val);
}, 1);

Clazz.newMeth(C$, 'printFloat$F',  function (val) {
if (C$.theConverter == null ) C$.initConverter$();
return C$.theConverter.printFloat$F(val);
}, 1);

Clazz.newMeth(C$, 'printDouble$D',  function (val) {
if (C$.theConverter == null ) C$.initConverter$();
return C$.theConverter.printDouble$D(val);
}, 1);

Clazz.newMeth(C$, 'printBoolean$Z',  function (val) {
if (C$.theConverter == null ) C$.initConverter$();
return C$.theConverter.printBoolean$Z(val);
}, 1);

Clazz.newMeth(C$, 'printByte$B',  function (val) {
if (C$.theConverter == null ) C$.initConverter$();
return C$.theConverter.printByte$B(val);
}, 1);

Clazz.newMeth(C$, 'printQName$javax_xml_namespace_QName$javax_xml_namespace_NamespaceContext',  function (val, nsc) {
if (C$.theConverter == null ) C$.initConverter$();
return C$.theConverter.printQName$javax_xml_namespace_QName$javax_xml_namespace_NamespaceContext(val, nsc);
}, 1);

Clazz.newMeth(C$, 'printDateTime$java_util_Calendar',  function (val) {
if (C$.theConverter == null ) C$.initConverter$();
return C$.theConverter.printDateTime$java_util_Calendar(val);
}, 1);

Clazz.newMeth(C$, 'printBase64Binary$BA',  function (val) {
if (C$.theConverter == null ) C$.initConverter$();
return C$.theConverter.printBase64Binary$BA(val);
}, 1);

Clazz.newMeth(C$, 'printHexBinary$BA',  function (val) {
if (C$.theConverter == null ) C$.initConverter$();
return C$.theConverter.printHexBinary$BA(val);
}, 1);

Clazz.newMeth(C$, 'printUnsignedInt$J',  function (val) {
if (C$.theConverter == null ) C$.initConverter$();
return C$.theConverter.printUnsignedInt$J(val);
}, 1);

Clazz.newMeth(C$, 'printUnsignedShort$I',  function (val) {
if (C$.theConverter == null ) C$.initConverter$();
return C$.theConverter.printUnsignedShort$I(val);
}, 1);

Clazz.newMeth(C$, 'printTime$java_util_Calendar',  function (val) {
if (C$.theConverter == null ) C$.initConverter$();
return C$.theConverter.printTime$java_util_Calendar(val);
}, 1);

Clazz.newMeth(C$, 'printDate$java_util_Calendar',  function (val) {
if (C$.theConverter == null ) C$.initConverter$();
return C$.theConverter.printDate$java_util_Calendar(val);
}, 1);

Clazz.newMeth(C$, 'printAnySimpleType$S',  function (val) {
if (C$.theConverter == null ) C$.initConverter$();
return C$.theConverter.printAnySimpleType$S(val);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.theConverter=null;
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:32 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
