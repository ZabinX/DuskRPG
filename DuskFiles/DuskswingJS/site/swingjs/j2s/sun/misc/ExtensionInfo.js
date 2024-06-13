(function(){var P$=Clazz.newPackage("sun.misc"),p$1={},I$=[[0,'java.util.ResourceBundle',['java.util.jar.Attributes','.Name'],'java.util.StringTokenizer','java.text.MessageFormat']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ExtensionInfo");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['title','name','specVersion','specVendor','implementationVersion','vendor','vendorId','url']]
,['O',['rb','java.util.ResourceBundle']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$java_util_jar_Attributes',  function (extensionKey, attr) {
;C$.$init$.apply(this);
var s;
if (extensionKey != null ) {
s=extensionKey + "-";
} else {
s="";
}var attrKey=s + $I$(2).EXTENSION_NAME.toString();
this.name=attr.getValue$S(attrKey);
if (this.name != null ) this.name=this.name.trim$();
attrKey=s + $I$(2).SPECIFICATION_TITLE.toString();
this.title=attr.getValue$S(attrKey);
if (this.title != null ) this.title=this.title.trim$();
attrKey=s + $I$(2).SPECIFICATION_VERSION.toString();
this.specVersion=attr.getValue$S(attrKey);
if (this.specVersion != null ) this.specVersion=this.specVersion.trim$();
attrKey=s + $I$(2).SPECIFICATION_VENDOR.toString();
this.specVendor=attr.getValue$S(attrKey);
if (this.specVendor != null ) this.specVendor=this.specVendor.trim$();
attrKey=s + $I$(2).IMPLEMENTATION_VERSION.toString();
this.implementationVersion=attr.getValue$S(attrKey);
if (this.implementationVersion != null ) this.implementationVersion=this.implementationVersion.trim$();
attrKey=s + $I$(2).IMPLEMENTATION_VENDOR.toString();
this.vendor=attr.getValue$S(attrKey);
if (this.vendor != null ) this.vendor=this.vendor.trim$();
attrKey=s + $I$(2).IMPLEMENTATION_VENDOR_ID.toString();
this.vendorId=attr.getValue$S(attrKey);
if (this.vendorId != null ) this.vendorId=this.vendorId.trim$();
attrKey=s + $I$(2).IMPLEMENTATION_URL.toString();
this.url=attr.getValue$S(attrKey);
if (this.url != null ) this.url=this.url.trim$();
}, 1);

Clazz.newMeth(C$, 'isCompatibleWith$sun_misc_ExtensionInfo',  function (ei) {
if (this.name == null  || ei.name == null  ) return 4;
if (this.name.compareTo$S(ei.name) == 0) {
if (this.specVersion == null  || ei.specVersion == null  ) return 0;
var version=p$1.compareExtensionVersion$S$S.apply(this, [this.specVersion, ei.specVersion]);
if (version < 0) {
if (this.vendorId != null  && ei.vendorId != null  ) {
if (this.vendorId.compareTo$S(ei.vendorId) != 0) {
return 3;
}}return 1;
} else {
if (this.vendorId != null  && ei.vendorId != null  ) {
if (this.vendorId.compareTo$S(ei.vendorId) != 0) {
return 3;
} else {
if (this.implementationVersion != null  && ei.implementationVersion != null  ) {
version=p$1.compareExtensionVersion$S$S.apply(this, [this.implementationVersion, ei.implementationVersion]);
if (version < 0) {
return 2;
}}}}return 0;
}}return 4;
});

Clazz.newMeth(C$, 'toString',  function () {
return "Extension : title(" + this.title + "), name(" + this.name + "), spec vendor(" + this.specVendor + "), spec version(" + this.specVersion + "), impl vendor(" + this.vendor + "), impl vendor id(" + this.vendorId + "), impl version(" + this.implementationVersion + "), impl url(" + this.url + ")" ;
});

Clazz.newMeth(C$, 'compareExtensionVersion$S$S',  function (source, target) {
source=source.toLowerCase$();
target=target.toLowerCase$();
return p$1.strictCompareExtensionVersion$S$S.apply(this, [source, target]);
}, p$1);

Clazz.newMeth(C$, 'strictCompareExtensionVersion$S$S',  function (source, target) {
if (source.equals$O(target)) return 0;
var stk=Clazz.new_($I$(3,1).c$$S$S,[source, ".,"]);
var ttk=Clazz.new_($I$(3,1).c$$S$S,[target, ".,"]);
var n=0;
var m=0;
var result=0;
if (stk.hasMoreTokens$()) n=p$1.convertToken$S.apply(this, [stk.nextToken$().toString()]);
if (ttk.hasMoreTokens$()) m=p$1.convertToken$S.apply(this, [ttk.nextToken$().toString()]);
if (n > m) return 1;
 else if (m > n) return -1;
 else {
var sIdx=source.indexOf$S(".");
var tIdx=target.indexOf$S(".");
if (sIdx == -1) sIdx=source.length$() - 1;
if (tIdx == -1) tIdx=target.length$() - 1;
return p$1.strictCompareExtensionVersion$S$S.apply(this, [source.substring$I(sIdx + 1), target.substring$I(tIdx + 1)]);
}}, p$1);

Clazz.newMeth(C$, 'convertToken$S',  function (token) {
if (token == null  || token.equals$O("") ) return 0;
var charValue=0;
var charVersion=0;
var patchVersion=0;
var strLength=token.length$();
var endIndex=strLength;
var lastChar;
var args=Clazz.array(java.lang.Object, -1, [this.name]);
var mf=Clazz.new_([C$.rb.getString$S("optpkg.versionerror")],$I$(4,1).c$$S);
var versionError=mf.format$O(args);
var prIndex=token.indexOf$S("-");
var patchIndex=token.indexOf$S("_");
if (prIndex == -1 && patchIndex == -1 ) {
try {
return Integer.parseInt$S(token) * 100;
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
System.out.println$S(versionError);
return 0;
} else {
throw e;
}
}
} else if (patchIndex != -1) {
var prversion;
try {
prversion=Integer.parseInt$S(token.substring$I$I(0, patchIndex));
lastChar=token.charAt$I(strLength - 1);
if (Character.isLetter$C(lastChar)) {
charValue=Character.getNumericValue$C(lastChar);
endIndex=strLength - 1;
patchVersion=Integer.parseInt$S(token.substring$I$I(patchIndex + 1, endIndex));
if (charValue >= Character.getNumericValue$C("a") && charValue <= Character.getNumericValue$C("z") ) {
charVersion=(patchVersion * 100) + charValue;
} else {
charVersion=0;
System.out.println$S(versionError);
}} else {
patchVersion=Integer.parseInt$S(token.substring$I$I(patchIndex + 1, endIndex));
}} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
System.out.println$S(versionError);
return 0;
} else {
throw e;
}
}
return prversion * 100 + (patchVersion + charVersion);
} else {
var mrversion;
try {
mrversion=Integer.parseInt$S(token.substring$I$I(0, prIndex));
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
System.out.println$S(versionError);
return 0;
} else {
throw e;
}
}
var prString=token.substring$I(prIndex + 1);
var msVersion="";
var delta=0;
if (prString.indexOf$S("ea") != -1) {
msVersion=prString.substring$I(2);
delta=50;
} else if (prString.indexOf$S("alpha") != -1) {
msVersion=prString.substring$I(5);
delta=40;
} else if (prString.indexOf$S("beta") != -1) {
msVersion=prString.substring$I(4);
delta=30;
} else if (prString.indexOf$S("rc") != -1) {
msVersion=prString.substring$I(2);
delta=20;
}if (msVersion == null  || msVersion.equals$O("") ) {
return mrversion * 100 - delta;
} else {
try {
return mrversion * 100 - delta + Integer.parseInt$S(msVersion);
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
System.out.println$S(versionError);
return 0;
} else {
throw e;
}
}
}}}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.rb=$I$(1).getBundle$S("sun.misc.resources.Messages");
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:46 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
