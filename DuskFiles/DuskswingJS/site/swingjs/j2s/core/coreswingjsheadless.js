(function(Clazz,Clazz_setTVer,Clazz_toLong,Clazz_incrAN,Clazz_array,Clazz_assert,Clazz_clone,Clazz_exceptionOf,Clazz_forName,Clazz_getClass,Clazz_instanceOf,Clazz_load,Clazz_new_,Clazz_newClass,Clazz_newEnumConst,Clazz_newInstance,Clazz_newInterface,Clazz_newMeth,Clazz_newPackage,Clazz_super_){(function(){var P$=java.lang,p$1={},I$=[[0,'java.lang.reflect.Method','java.util.Arrays','Class','java.util.Collections','java.util.ArrayList','sun.misc.CompoundEnumeration','java.util.Enumeration','java.lang.reflect.TypeVariable','swingjs.JSUtil','java.lang.reflect.Field','java.lang.reflect.Constructor','java.net.URL','java.io.File',['sun.reflect.annotation.AnnotationParser','.JSAnnotationObject'],'Void','java.util.HashMap','java.util.Objects','sun.reflect.annotation.AnnotationParser','sun.reflect.annotation.AnnotationSupport','sun.reflect.annotation.AnnotationType','java.util.LinkedHashMap',['Class','.AnnotationData'],'Package','java.util.stream.Collectors','java.lang.annotation.Annotation','java.util.function.Function']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz_load(I$0[i])))),!n&&i.$load$&&Clazz_load(i,2),i)};
/*c*/var C$=Clazz_newClass(P$, "Class", function(){
Clazz_newInstance(this, arguments,0,C$);
});
C$.$classes$=[['MethodArray',8],['AnnotationData',10]];

C$.$clinit$=2;

Clazz_newMeth(C$, '$init$', function () {
this.modifiers=-1;
this.fieldAnnMap=null;
this.enumConstants=null;
this.enumConstantDirectory=null;
},1);

C$.$fields$=[['I',['modifiers'],'S',['name'],'O',['$clazz$','java.lang.Object','$methodList$','String[]','fields','java.lang.reflect.Field[]','implementz','Class[]','fieldAnnMap','java.util.Map','declaredFields','java.lang.reflect.Field[]','$members$','java.lang.reflect.Method[]','$constructors$','java.lang.reflect.Constructor[]','enumConstants','_.T[]','enumConstantDirectory','java.util.Map','annotationData','Class.AnnotationData','annotationType','sun.reflect.annotation.AnnotationType','annotations','java.util.Map','+declaredAnnotations']]
,['O',['NO_PARAMETERS','Class[]','+UNKNOWN_PARAMETERS']]]

Clazz_newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz_newMeth(C$, 'toString',  function () {
return (this.isInterface$() ? "interface " : (this.isPrimitive$() ? "" : "class ")) + this.getName$();
});

Clazz_newMeth(C$, 'forName$S',  function (className) {
return C$.forName0$S$Z$ClassLoader(className, true, null);
}, 1);

Clazz_newMeth(C$, 'forName$S$Z$ClassLoader',  function (name, initialize, loader) {
return C$.forName0$S$Z$ClassLoader(name, initialize, loader);
}, 1);

Clazz_newMeth(C$, 'forName0$S$Z$ClassLoader',  function (name, initialize, loader) {
{
return Clazz_forName(name, initialize, loader);
}
}, 1);

Clazz_newMeth(C$, 'newInstance$',  function () {
var c=this.$clazz$;
{
return new c;
}
});

Clazz_newMeth(C$, 'isInstance$O',  function (obj) {
var c=this.$clazz$;
{
return Clazz_instanceOf(obj, c);
}
});

Clazz_newMeth(C$, 'isAssignableFrom$Class',  function (cls) {
if (cls == null ) return false;
var a=cls.$clazz$;
var me=this.$clazz$;
return Clazz_instanceOf(a, me) ||false;
});

Clazz_newMeth(C$, 'isInterface$',  function () {
var me=this.$clazz$;
{
return me.$isInterface;
}
});

Clazz_newMeth(C$, 'isArray$',  function () {
var me=this.$clazz$;
{
return !!me.__ARRAYTYPE;
}
});

Clazz_newMeth(C$, 'isPrimitive$',  function () {
{
return !!this.__PRIMITIVE;
}
});

Clazz_newMeth(C$, 'isAnnotation$',  function () {
var me=this.$clazz$;
{
return !!me.$getMembers$;
}
});

Clazz_newMeth(C$, 'isEnum$',  function () {
var me=this.$clazz$;
{
return !!me.$isEnum;
}
});

Clazz_newMeth(C$, 'isSynthetic$',  function () {
return false;
});

Clazz_newMeth(C$, 'getName$',  function () {
if (this.name == null ) this.name=p$1.getName0.apply(this, []);
return this.name;
});

Clazz_newMeth(C$, 'getName0',  function () {
var code="";

code = this.$clazz$.__CLASS_NAME$__ || this.$clazz$.__CLASS_NAME__;
if (code) return (code.indexOf(".") < 0 ? "java.lang." + code : code);
code = this.$clazz$.__PARAMCODE;
switch (code) {
case "S":
code="String";
break;
case "I":
code="Integer";
break;
case "H":
code="Short";
break;
case "B":
code="Byte";
break;
case "J":
code="Long";
break;
case "C":
code="Character";
break;
case "O":
code="Object";
break;
default:
return null;
}
return "java.lang." + code;
}, p$1);

Clazz_newMeth(C$, 'getClassLoader$',  function () {
var cl=this.getClassLoader0$();

cl.baseClass = this;
return cl;
});

Clazz_newMeth(C$, 'getClassLoader0$',  function () {
var loader=null;

var baseFolder = Clazz._Loader.getJ2SLibBase();
loader = Clazz._Loader.requireLoaderByBase(baseFolder);
var me = this;
loader.getResourceAsStream$S = function(s) { return me.getResourceAsStream$S(s.indexOf("/") == 0 ? s : "/" + s) };
loader.getResource$S = function(s) { return me.getResource$S(s.indexOf("/") == 0 ? s : "/" + s) };
loader.getResources$S = function(s) { return me.getResources$S(s) };
loader.getParent$ = function() {return null};
return loader;
});

Clazz_newMeth(C$, 'getResources$S',  function (name) {
var url1=this.getResource$S(name);
var url2=(name.indexOf$S("/") == 0 ? null : this.getClassLoader$().getResource$S(name));
var e;
if (url1 == null  && url2 == null  ) {
e=$I$(4).emptyEnumeration$();
} else {
var list=Clazz_new_($I$(5,1).c$$I,[2]);
if (url1 != null ) list.add$O(url1);
if (url2 != null  && !url2.equals$O(url1) ) list.add$O(url2);
e=$I$(4).enumeration$java_util_Collection(list);
}return Clazz_new_([Clazz_array($I$(7), -1, [null, e])],$I$(6,1).c$$java_util_EnumerationA);
});

Clazz_newMeth(C$, 'getTypeParameters$',  function () {
return Clazz_array($I$(8), [0]);
});

Clazz_newMeth(C$, 'getSuperclass$',  function () {
{
if (this.$clazz$ == java.lang.Object) return null;
return Clazz_getClass(this.$clazz$.superclazz || java.lang.Object);
}
});

Clazz_newMeth(C$, 'getInterfaces$',  function () {
if (this.implementz == null ) {
var a=Clazz_array(Class, [0]);
var me=this.$clazz$;
var list=me.implementz ||null;
if (list != null ) {
for (var i=0, n=list.length; i < n; i++) {

a.push(Clazz_getClass(list[i]));
}
}this.implementz=a;
}return this.implementz;
});

Clazz_newMeth(C$, 'getComponentType$',  function () {
return null;
});

Clazz_newMeth(C$, 'getModifiers$',  function () {
return (this.modifiers >= 0 ? this.modifiers : 1 | (this.isEnum$() ? 16384 : this.isInterface$() ? 512 : 0) | (this.isAnnotation$() ? 8192 : 0) );
});

Clazz_newMeth(C$, '_setModifiers$I',  function (m) {
this.modifiers=m;
});

Clazz_newMeth(C$, 'getSigners$',  function () {
$I$(9).notImplemented$S(null);
return Clazz_array(java.lang.Object, [0]);
});

Clazz_newMeth(C$, 'setSigners$OA',  function (signers) {
$I$(9).notImplemented$S(null);
});

Clazz_newMeth(C$, 'getDeclaringClass$',  function () {
$I$(9).notImplemented$S(null);
return null;
});

Clazz_newMeth(C$, 'getSimpleName$',  function () {
if (this.isArray$()) return this.getComponentType$().getSimpleName$() + "[]";
var name="";
{
name = (this.$clazz$.__ANON ? "" : this.$clazz$.__CLASS_NAME__);
name || (name = this.$clazz$.name);
}
return name.substring$I(name.lastIndexOf$S(".") + 1);
});

Clazz_newMeth(C$, 'getCanonicalName$',  function () {
if (this.isArray$()) {
var canonicalName=this.getComponentType$().getCanonicalName$();
if (canonicalName != null ) return canonicalName + "[]";
 else return null;
}if (p$1.isLocalOrAnonymousClass.apply(this, [])) return null;
var name=null;

name = this.$clazz$.__CLASS_NAME__ || null;
return name;
});

Clazz_newMeth(C$, 'isAnonymousClass$',  function () {
return "".equals$O(this.getSimpleName$());
});

Clazz_newMeth(C$, 'isLocalClass$',  function () {
{
return !!this.$clazz$.__LOCAL;
}
});

Clazz_newMeth(C$, 'isLocalOrAnonymousClass',  function () {
{
return !!this.$clazz$.__ISANON || !!this.$clazz$.__LOCAL;
}
}, p$1);

Clazz_newMeth(C$, 'getClasses$',  function () {
var list=Clazz_new_($I$(5,1));
var currentClass=this;
while (currentClass != null ){
var members=currentClass.getDeclaredClasses$();
for (var i=0; i < members.length; i++) {
list.add$O(members[i]);
}
currentClass=currentClass.getSuperclass$();
}
return list.toArray$OA(Clazz_array(Class, [list.size$()]));
});

Clazz_newMeth(C$, 'getFields$',  function () {
if (this.fields != null ) return this.fields;
this.fields=Clazz_array($I$(10), [0]);
p$1.addAllFields$java_lang_reflect_FieldA$Z.apply(this, [this.fields, true]);
return this.fields;
});

Clazz_newMeth(C$, 'addAllFields$java_lang_reflect_FieldA$Z',  function (fields, recurse) {
var cl=this.$clazz$ ||null;

Clazz._initClass(cl,1,1,0);
p$1.addFields$O$java_lang_reflect_FieldA$I.apply(this, [cl, fields, 0]);
p$1.addFields$O$java_lang_reflect_FieldA$I.apply(this, [cl, fields, 8]);
if (!recurse) return;
var c=this.getSuperclass$();
if (c != null ) p$1.addAllFields$java_lang_reflect_FieldA$Z.apply(c, [fields, true]);
}, p$1);

Clazz_newMeth(C$, 'getFieldAnnMap$O',  function (cl) {
p$1.initAnnotationsIfNecessary.apply(this, []);
return this.fieldAnnMap;
});

Clazz_newMeth(C$, 'getMethods$',  function () {
return (p$1.privateGetPublicMethods$Z.apply(this, [true]));
});

Clazz_newMeth(C$, 'getConstructors$',  function () {
return (p$1.privateGetConstructors.apply(this, []));
});

Clazz_newMeth(C$, 'getField$S',  function (name) {
this.getFields$();
for (var i=this.fields.length; --i >= 0; ) {
if (this.fields[i].jsName == name) return this.fields[i];
}
throw Clazz_new_(Clazz_load('NoSuchFieldException').c$$S,["field " + name]);
});

Clazz_newMeth(C$, 'addFields$O$java_lang_reflect_FieldA$I',  function (cl, f, modifiers) {
var fieldNames=Clazz._getFieldNames(cl, !!modifiers) || [] ||null;
var types=Clazz._getFieldTypes(cl, !!modifiers) || [] ||null;
for (var i=0; i < fieldNames.length; i++) {
p$1.addField$java_lang_reflect_FieldA$S$I$S.apply(this, [f, fieldNames[i], modifiers, types[i]]);
}
}, p$1);

Clazz_newMeth(C$, 'excludeField$S',  function (name) {
return (name === "prototype"  || name.startsWith$S("__")  || name.startsWith$S("$") && name.endsWith$S("$")   || name === "$isInterface"   || name === "$isEnum"   || name === "implementz"  );
});

Clazz_newMeth(C$, 'addField$java_lang_reflect_FieldA$S$I$S',  function (fields, name, modifiers, type) {
var f=Clazz_new_($I$(10,1).c$$Class$S$I,[this, name, modifiers]);
f._setTypeString$S(type);

fields.push(f);
}, p$1);

Clazz_newMeth(C$, 'getMethod$S$ClassA',  function (name, paramTypes) {
var m=Clazz_new_($I$(1,1).c$$Class$S$ClassA$Class$ClassA$I,[this, name, paramTypes, null, null, 1]);
if (!this.isInterface$()) {
var o=this.$clazz$;
var isStatic=false;
var qname=m.getSignature$();

if (o[qname]) { isStatic = true;
o = o[qname];
} else { o = o.prototype && o.prototype[qname];
}
if (o == null ) throw Clazz_new_(Clazz_load('NoSuchMethodException').c$$S,[this.getName$() + "." + qname ]);
m._setJSMethod$O$I(o, (isStatic ? 8 : 0));
}return m;
});

Clazz_newMeth(C$, 'getConstructor$ClassA',  function (parameterTypes) {
return Clazz_new_([this, parameterTypes, Clazz_array(Class, [0]), 0],$I$(11,1).c$$Class$ClassA$ClassA$I);
});

Clazz_newMeth(C$, 'getDeclaredClasses$',  function () {
return p$1.getDeclaredClasses0.apply(this, []);
});

Clazz_newMeth(C$, 'getDeclaredFields$',  function () {
if (this.declaredFields != null ) return this.declaredFields;
this.declaredFields=Clazz_array($I$(10), [0]);
p$1.addAllFields$java_lang_reflect_FieldA$Z.apply(this, [this.declaredFields, false]);
return this.declaredFields;
});

Clazz_newMeth(C$, 'getDeclaredMethods$',  function () {
return (p$1.privateGetPublicMethods$Z.apply(this, [false]));
});

Clazz_newMeth(C$, 'getDeclaredConstructors$',  function () {
return this.getConstructors$();
});

Clazz_newMeth(C$, 'getDeclaredField$S',  function (name) {
return this.getField$S(name);
});

Clazz_newMeth(C$, 'getDeclaredMethod$S$ClassA',  function (name, parameterTypes) {
return this.getMethod$S$ClassA(name, parameterTypes);
});

Clazz_newMeth(C$, 'getDeclaredConstructor$ClassA',  function (parameterTypes) {
return this.getConstructor$ClassA(parameterTypes);
});

Clazz_newMeth(C$, 'getResourceAsStream$S',  function (name) {
var clazzName=this.$clazz$ && (this.$clazz$.__CLASS_NAME$__ ||  this.$clazz$.__CLASS_NAME__)||"";
if (clazzName === ""  && !name.startsWith$S("/") ) name="/" + name;
var data=null;
if (name == null  || Clazz_getClass($I$(12)) == null  ) return null;
name=name.replace$C$C("\\", "/");
var baseFolder=null;
var fname=name;
var url=null;
if (name.startsWith$S($I$(13).temporaryDirectory)) {
data=$I$(9).getCachedFileData$S$Z(name, true);
if (data == null ) return null;
} else {

if (arguments.length == 2 && name.indexOf ('/') != 0) { // additional argument
name = "/" + name;
} if (name.indexOf ('/') == 0) { if (arguments.length == 2)  // additional argument
baseFolder = arguments[1];
if (!baseFolder) baseFolder = Clazz._Loader.getJ2SLibBase();
if (baseFolder.charAt(baseFolder.length - 1) != '/') baseFolder += "/";
fname = baseFolder + name.substring (1);
} else { baseFolder = Clazz._Loader.getJ2SLibBase(); // getClass().getClassLoader() uses full path
fname = baseFolder;
if (this.$_$base == null) { // getClass().getResource() will be here
var pkgs = clazzName.split(".");
if (fname.charAt(fname.length - 1) != '/') fname += "/";
var map = Clazz._allPackage;
for (var i = 0; i < pkgs.length - 1; i++) { if (!(map = map[pkgs[i]])) break;
fname += pkgs[i] + "/";
} } fname += name;
} var javapath = fname;
try { //	      if (fname.indexOf(":/") < 0) {
//	        var d = document.location.href.split("#")[0].split("?")[0].split("/");
//        	d[d.length - 1] = fname;
//        	fname = d.join("/");
//	      }
Clazz_load("java.net.URL");
url = Clazz_new_(java.net.URL.c$$S,["file:/" + fname]);
} catch (e) { return null;
} var fileCache = J2S.getSetJavaFileCache(null);
data = fileCache && fileCache.get$O(javapath);
}if (data == null ) data=$I$(9).J2S.getFileData(fname.toString(), null, true, true);
{
if (data == null || data == Boolean.FALSE || data == "error" || data.indexOf && data.indexOf("[Exception") == 0) return null;
var bytes = (data.__BYTESIZE == 1 ? data : J2S._strToBytes(data));
Clazz_load("java.io.BufferedInputStream");
Clazz_load("java.io.ByteArrayInputStream");
var is = Clazz_new_(java.io.BufferedInputStream.c$$java_io_InputStream, [Clazz_new_(java.io.ByteArrayInputStream.c$$BA, [bytes])]);
is.url = url;
url._streamData = bytes;
return is;
}
});

Clazz_newMeth(C$, 'getResource$S',  function (name) {
{
var stream = this.getResourceAsStream$S(name);
return(stream ? stream.url : null);
}
});

Clazz_newMeth(C$, 'getPrimitiveOrStringClass$S',  function (name) {
switch (name) {
case "S":
case "String":
return Clazz_getClass(String);
case "Z":
case "boolean":
return Boolean.TYPE;
case "B":
case "byte":
return Byte.TYPE;
case "C":
case "char":
return Character.TYPE;
case "H":
case "short":
return Short.TYPE;
case "I":
case "int":
return Integer.TYPE;
case "J":
case "long":
return Long.TYPE;
case "F":
case "float":
return Float.TYPE;
case "D":
case "double":
return Double.TYPE;
case "O":
return Clazz_getClass(java.lang.Object);
default:
return null;
}
}, 1);

Clazz_newMeth(C$, 'privateGetPublicMethods$Z',  function (isAll) {
if (this.isAnnotation$()) {
if (this.$members$ == null ) {
this.$members$=$I$(14).createMethods$Class(this);
}return this.$members$;
}var ms;
if (this.$methodList$ != null ) {
ms=Clazz_array($I$(1), [this.$methodList$.length]);
for (var i=ms.length; --i >= 0; ) {
ms[i]=Clazz_new_([this, this.$methodList$[i], null, Clazz_getClass($I$(15)), null, 1],$I$(1,1).c$$Class$S$ClassA$Class$ClassA$I);
}
return ms;
}ms=Clazz_array($I$(1), [0]);
var attr=null;
var o=null;

var p = this.$clazz$.prototype;
for (attr in p) { o = p[attr]; if ( typeof o == "function" && o.exName && !o.__CLASS_NAME__ && o != this.$clazz$[attr] && (isAll || o.exClazz == this.$clazz$) && !o.exName.startsWith("c$") ) { // there are polynormical methods.
var m=Clazz_new_([this, attr, Class.UNKNOWN_PARAMETERS, Clazz_getClass($I$(15)), Class.NO_PARAMETERS, 1],$I$(1,1).c$$Class$S$ClassA$Class$ClassA$I);
m._setJSMethod$O$I(o, 1);

ms.push(m);
}} p = this.$clazz$;
for (attr in p) { o = p[attr];if ( typeof o == "function" && o.exName && !o.__CLASS_NAME__ && (isAll || o.exClazz == this.$clazz$) && o.exName.indexOf("$") != 0 && !o.exName.startsWith("c$") ) {
m=Clazz_new_([this, attr, Class.UNKNOWN_PARAMETERS, Clazz_getClass($I$(15)), Class.NO_PARAMETERS, 1],$I$(1,1).c$$Class$S$ClassA$Class$ClassA$I);
m._setJSMethod$O$I(o, 8);

ms.push(m);
}}
return ms;
}, p$1);

Clazz_newMeth(C$, 'privateGetConstructors',  function () {
var ms;
if (this.$constructors$ != null ) {
ms=Clazz_array($I$(11), [this.$constructors$.length]);
for (var i=ms.length; --i >= 0; ) {
ms[i]=Clazz_new_([this, this.$constructors$[i].getParameterTypes$(), null, 1],$I$(11,1).c$$Class$ClassA$ClassA$I);
}
return ms;
}ms=Clazz_array($I$(11), [0]);
var attr=null;
var o=null;

var p = this.$clazz$;
for (attr in p) { o = p[attr]; if ( typeof o == "function" && o.exName && o.exName.startsWith("c$") && !o.__CLASS_NAME__ && (o.exClazz == this.$clazz$) ) {
var m=Clazz_new_($I$(11,1).c$$Class$ClassA$ClassA$I,[this, Class.UNKNOWN_PARAMETERS, null, 1]);
m._setJSMethod$O$I(o, 1);

ms.push(m);
}}
return ms;
}, p$1);

Clazz_newMeth(C$, 'arrayContentsEq$OA$OA',  function (a1, a2) {
if (a1 == null ) {
return a2 == null  || a2.length == 0 ;
}if (a2 == null ) {
return a1.length == 0;
}if (a1.length != a2.length) {
return false;
}for (var i=0; i < a1.length; i++) {
if (a1[i] !== a2[i] ) {
return false;
}}
return true;
}, 1);

Clazz_newMeth(C$, 'getDeclaredClasses0',  function () {
return $I$(14).getDeclaredClasses$O(this.$clazz$);
}, p$1);

Clazz_newMeth(C$, 'argumentTypesToString$ClassA',  function (parameterTypes) {
if (parameterTypes == null ) return "$";
var s="";
for (var i=0; i < parameterTypes.length; i++) s+="$" + (Clazz._getParamCode(parameterTypes[i]) ||null);

return s;
}, 1);

Clazz_newMeth(C$, 'getEnumConstants$',  function () {
return this.getEnumConstantsShared$();
});

Clazz_newMeth(C$, 'getEnumConstantsShared$',  function () {
if (this.enumConstants == null ) {
if (this.isEnum$()) this.enumConstants=this.$clazz$.values$() ||null;
}return this.enumConstants;
});

Clazz_newMeth(C$, 'enumConstantDirectory$',  function () {
if (this.enumConstantDirectory == null ) {
var universe=this.getEnumConstantsShared$();
if (universe == null ) throw Clazz_new_(Clazz_load('IllegalArgumentException').c$$S,[this.getName$() + " is not an enum type"]);
var m=Clazz_new_($I$(16,1).c$$I,[2 * universe.length]);
for (var constant, $constant = 0, $$constant = universe; $constant<$$constant.length&&((constant=($$constant[$constant])),1);$constant++) m.put$O$O((constant).name$(), constant);

this.enumConstantDirectory=m;
}return this.enumConstantDirectory;
});

Clazz_newMeth(C$, 'cast$O',  function (obj) {
if (obj != null  && !this.isInstance$O(obj) ) throw Clazz_new_(Clazz_load('ClassCastException').c$$S,[p$1.cannotCastMsg$O.apply(this, [obj])]);
return obj;
});

Clazz_newMeth(C$, 'cannotCastMsg$O',  function (obj) {
return "Cannot cast " + obj.getClass$().getName$() + " to " + this.getName$() ;
}, p$1);

Clazz_newMeth(C$, 'asSubclass$Class',  function (clazz) {
if (clazz.isAssignableFrom$Class(this)) return this;
 else throw Clazz_new_(Clazz_load('ClassCastException').c$$S,[this.toString()]);
});

Clazz_newMeth(C$, 'getAnnotation$Class',  function (annotationClass) {
$I$(17).requireNonNull$O(annotationClass);
p$1.initAnnotationsIfNecessary.apply(this, []);
return (this.annotations == null  ? null : this.annotations.get$O(annotationClass));
});

Clazz_newMeth(C$, 'getAnnotations$',  function () {
p$1.initAnnotationsIfNecessary.apply(this, []);
return this.annotations.values$().toArray$OA($I$(18).getEmptyAnnotationArray$());
});

Clazz_newMeth(C$, 'getAnnotationsByType$Class',  function (annotationClass) {
$I$(17).requireNonNull$O(annotationClass);
var annotationData=p$1.annotationData.apply(this, []);
return $I$(19).getAssociatedAnnotations$java_util_Map$Class$Class(annotationData.declaredAnnotations, this, annotationClass);
});

Clazz_newMeth(C$, 'annotationData',  function () {
var annotationData=this.annotationData;
if (annotationData != null ) {
return annotationData;
}return annotationData=p$1.createAnnotationData$I.apply(this, [0]);
}, p$1);

Clazz_newMeth(C$, 'createAnnotationData$I',  function (classRedefinedCount) {
var declaredAnnotations=$I$(18).parseAnnotations$S$Class$Z(null, this, false);
var superClass=this.getSuperclass$();
var annotations=null;
if (superClass != null ) {
var superAnnotations=p$1.annotationData.apply(superClass, []).annotations;
for (var e, $e = superAnnotations.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var annotationClass=e.getKey$();
if ($I$(20).getInstance$Class(annotationClass).isInherited$()) {
if (annotations == null ) {
annotations=Clazz_new_([((Math.max(declaredAnnotations.size$(), Math.min(12, declaredAnnotations.size$() + superAnnotations.size$())) * 4 + 2)/3|0)],$I$(21,1).c$$I);
}annotations.put$O$O(annotationClass, e.getValue$());
}}
}if (annotations == null ) {
annotations=declaredAnnotations;
} else {
annotations.putAll$java_util_Map(declaredAnnotations);
}return Clazz_new_($I$(22,1).c$$java_util_Map$java_util_Map$I,[annotations, declaredAnnotations, classRedefinedCount]);
}, p$1);

Clazz_newMeth(C$, 'setAnnotationResult$sun_reflect_annotation_AnnotationType',  function (type) {
this.annotationType=type;
});

Clazz_newMeth(C$, 'annotationType$',  function () {
return (this.isAnnotation$() ? this : null);
});

Clazz_newMeth(C$, 'getAnnotationType$',  function () {
return this.annotationType;
});

Clazz_newMeth(C$, 'getDeclaredAnnotationMap$',  function () {
return p$1.annotationData.apply(this, []).declaredAnnotations;
});

Clazz_newMeth(C$, 'getDeclaredAnnotations$',  function () {
p$1.initAnnotationsIfNecessary.apply(this, []);
return this.declaredAnnotations.values$().toArray$OA($I$(18).getEmptyAnnotationArray$());
});

Clazz_newMeth(C$, 'initAnnotationsIfNecessary',  function () {
if (this.annotations != null ) return;
this.declaredAnnotations=$I$(18).parseAnnotations$S$Class$Z(null, this, false);
var superClass=this.getSuperclass$();
if (superClass == null ) {
this.annotations=this.declaredAnnotations;
} else {
this.annotations=Clazz_new_($I$(16,1));
p$1.initAnnotationsIfNecessary.apply(superClass, []);
for (var e, $e = superClass.annotations.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var annotationClass=e.getKey$();
if ($I$(20).getInstance$Class(annotationClass).isInherited$()) this.annotations.put$O$O(annotationClass, e.getValue$());
}
this.annotations.putAll$java_util_Map(this.declaredAnnotations);
}}, p$1);

Clazz_newMeth(C$, 'setAnnotationType$sun_reflect_annotation_AnnotationType',  function (type) {
this.annotationType=type;
});

Clazz_newMeth(C$, 'hashCode$',  function () {
var name=null;

name = this.$clazz$.__CLASS_NAME__ || this.$clazz$.toString();
return name.hashCode$();
});

Clazz_newMeth(C$, 'equals$O',  function (o) {
{
return o && o.__CLASS_NAME__ == "java.lang.Class" && o.$clazz$ == this.$clazz$;
}
});

Clazz_newMeth(C$, 'getArgumentArray$ClassA$OA$Z',  function (types, args, isProxy) {
var a=Clazz_array(java.lang.Object, [args == null  ? 0 : args.length]);
if (args != null  && (types != null  || isProxy ) ) for (var i=args.length; --i >= 0; ) a[i]=(isProxy ? args[i] : (types[i].__PRIMITIVE && args[i].valueOf ? args[i].valueOf() : args[i]) ||null);

return a;
}, 1);

Clazz_newMeth(C$, 'getPackage$',  function () {
return $I$(23).getPackage$Class(this);
});

Clazz_newMeth(C$, 'getJ2SSuperclassFor$Class',  function (cl) {
var c=null;
{
c = cl.getSuperclass$ && cl.getSuperclass$();
}
if (c == null  && cl !== Clazz_getClass(java.lang.Object)  ) {
c=Clazz_getClass(java.lang.Object);
}return c;
}, 1);

Clazz_newMeth(C$, 'getDeclaredAnnotation$Class',  function (annotationClass) {
$I$(17).requireNonNull$O(annotationClass);
for (var annotation, $annotation = 0, $$annotation = this.getDeclaredAnnotations$(); $annotation<$$annotation.length&&((annotation=($$annotation[$annotation])),1);$annotation++) {
if (annotationClass.equals$O(annotation.annotationType$())) {
return annotationClass.cast$O(annotation);
}}
return null;
});

Clazz_newMeth(C$, 'getDeclaredAnnotationsByType$Class',  function (annotationClass) {
$I$(17).requireNonNull$O(annotationClass);
return $I$(19,"getDirectlyAndIndirectlyPresent$java_util_Map$Class",[$I$(2,"stream$OA",[this.getDeclaredAnnotations$()]).collect$java_util_stream_Collector($I$(24,"toMap$java_util_function_Function$java_util_function_Function$java_util_function_BinaryOperator$java_util_function_Supplier",[(function($$){((
(function(){/*m*/var C$=Clazz_newClass(P$, "Class$lambda1", function(){Clazz_newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz_newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz_newMeth(C$, 'apply$O',  function (t) { return t.annotationType$.apply(t,[])});
})()
)); return Clazz_new_(Class$lambda1.$init$,[this, null])})($I$(25)), $I$(26).identity$(), ((Class$lambda2$||(Class$lambda2$=(((P$.Class$lambda2||
(function(){/*m*/var C$=Clazz_newClass(P$, "Class$lambda2", function(){Clazz_newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BinaryOperator', 1);

C$.$clinit$=2;

Clazz_newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz_newMeth(C$, ['apply$java_lang_annotation_Annotation$java_lang_annotation_Annotation','apply$O$O'],  function (first, second) { return (first);});
})()
), Clazz_new_(Class$lambda2.$init$,[this, null])))))), ((P$.Class$lambda3||
(function(){/*m*/var C$=Clazz_newClass(P$, "Class$lambda3", function(){Clazz_newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$=2;

Clazz_newMeth(C$, '$init$', function () {
},1);
/*lambda_C*/
Clazz_newMeth(C$, 'get$',  function () { return Clazz_new_($I$(21,1),[])});
})()
), Clazz_new_(Class$lambda3.$init$,[this, null]))])), annotationClass]);
});

Clazz_newMeth(C$, 'isAnnotationPresent$Class',  function (annotationClass) {
if (annotationClass == null ) throw Clazz_new_(Clazz_load('NullPointerException'));
return this.getAnnotation$Class(annotationClass) != null ;
});

C$.$static$=function(){C$.$static$=0;
C$.NO_PARAMETERS=Clazz_array(Class, [0]);
C$.UNKNOWN_PARAMETERS=Clazz_array(Class, [0]);
};
;
(function(){/*c*/var C$=Clazz_newClass(P$.Class, "MethodArray", function(){
Clazz_newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz_newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['length'],'O',['methods','java.lang.reflect.Method[]']]]

Clazz_newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.methods=Clazz_array($I$(1), [20]);
this.length=0;
}, 1);

Clazz_newMeth(C$, 'add$java_lang_reflect_Method',  function (m) {
if (this.length == this.methods.length) {
this.methods=$I$(2).copyOf$OA$I(this.methods, 2 * this.methods.length);
}this.methods[this.length++]=m;
});

Clazz_newMeth(C$, 'addAll$java_lang_reflect_MethodA',  function (ma) {
for (var i=0; i < ma.length; i++) {
this.add$java_lang_reflect_Method(ma[i]);
}
});

Clazz_newMeth(C$, 'addAll$Class_MethodArray',  function (ma) {
for (var i=0; i < ma.length$(); i++) {
this.add$java_lang_reflect_Method(ma.get$I(i));
}
});

Clazz_newMeth(C$, 'addIfNotPresent$java_lang_reflect_Method',  function (newMethod) {
for (var i=0; i < this.length; i++) {
var m=this.methods[i];
if (m === newMethod  || (m != null  && m.equals$O(newMethod) ) ) {
return;
}}
this.add$java_lang_reflect_Method(newMethod);
});

Clazz_newMeth(C$, 'addAllIfNotPresent$Class_MethodArray',  function (newMethods) {
for (var i=0; i < newMethods.length$(); i++) {
var m=newMethods.get$I(i);
if (m != null ) {
this.addIfNotPresent$java_lang_reflect_Method(m);
}}
});

Clazz_newMeth(C$, 'length$',  function () {
return this.length;
});

Clazz_newMeth(C$, 'get$I',  function (i) {
return this.methods[i];
});

Clazz_newMeth(C$, 'removeByNameAndSignature$java_lang_reflect_Method',  function (toRemove) {
for (var i=0; i < this.length; i++) {
var m=this.methods[i];
if (m != null  && m.getName$() == toRemove.getName$()  && $I$(3,"arrayContentsEq$OA$OA",[m.getParameterTypes$(), toRemove.getParameterTypes$()]) ) {
this.methods[i]=null;
}}
});

Clazz_newMeth(C$, 'compactAndTrim$',  function () {
var newPos=0;
for (var pos=0; pos < this.length; pos++) {
var m=this.methods[pos];
if (m != null ) {
if (pos != newPos) {
this.methods[newPos]=m;
}++newPos;
}}
if (newPos != this.methods.length) {
this.methods=$I$(2).copyOf$OA$I(this.methods, newPos);
}});

Clazz_newMeth(C$, 'getArray$',  function () {
return this.methods;
});
})()
;
(function(){/*c*/var C$=Clazz_newClass(P$.Class, "AnnotationData", function(){
Clazz_newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz_newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['annotations','java.util.Map','+declaredAnnotations']]]

Clazz_newMeth(C$, 'c$$java_util_Map$java_util_Map$I',  function (annotations, declaredAnnotations, redefinedCount) {
;C$.$init$.apply(this);
this.annotations=annotations;
this.declaredAnnotations=declaredAnnotations;
}, 1);

Clazz_newMeth(C$);
})()
})();
;Clazz_setTVer('5.0.1-v2');//Created 2024-01-16 21:08:48 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=java.lang,I$=[[0,'Thread','swingjs.JSToolkit','Shutdown','ApplicationShutdownHooks','java.util.StringTokenizer','java.io.File','UnsatisfiedLinkError']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz_load(I$0[i])))),!n&&i.$load$&&Clazz_load(i,2),i)};
/*c*/var C$=Clazz_newClass(P$, "Runtime");

C$.$clinit$=2;

Clazz_newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['currentRuntime','Runtime']]]

Clazz_newMeth(C$, 'getRuntime$',  function () {
return C$.currentRuntime;
}, 1);

Clazz_newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz_newMeth(C$, 'exit$I',  function (status) {
$I$(1).currentThread$().getThreadGroup$().秘exit$();
var v=!swingjs.JSToolkit ? null :$I$(2).getAppletViewer$();
if (v != null ) v.exit$();
$I$(3).exit$I(status);
});

Clazz_newMeth(C$, 'addShutdownHook$Thread',  function (hook) {
$I$(4).add$Thread(hook);
});

Clazz_newMeth(C$, 'removeShutdownHook$Thread',  function (hook) {
return $I$(4).remove$Thread(hook);
});

Clazz_newMeth(C$, 'halt$I',  function (status) {
var sm=System.getSecurityManager$();
if (sm != null ) {
sm.checkExit$I(status);
}$I$(3).halt$I(status);
});

Clazz_newMeth(C$, 'runFinalizersOnExit$Z',  function (value) {
var security=System.getSecurityManager$();
if (security != null ) {
try {
security.checkExit$I(0);
} catch (e) {
if (Clazz_exceptionOf(e,"SecurityException")){
throw Clazz_new_(Clazz_load('SecurityException').c$$S,["runFinalizersOnExit"]);
} else {
throw e;
}
}
}$I$(3).setRunFinalizersOnExit$Z(value);
}, 1);

Clazz_newMeth(C$, 'exec$S',  function (command) {
return this.exec$S$SA$java_io_File(command, null, null);
});

Clazz_newMeth(C$, 'exec$S$SA',  function (command, envp) {
return this.exec$S$SA$java_io_File(command, envp, null);
});

Clazz_newMeth(C$, 'exec$S$SA$java_io_File',  function (command, envp, dir) {
if (command.length$() == 0) throw Clazz_new_(Clazz_load('IllegalArgumentException').c$$S,["Empty command"]);
var st=Clazz_new_($I$(5,1).c$$S,[command]);
var cmdarray=Clazz_array(String, [st.countTokens$()]);
for (var i=0; st.hasMoreTokens$(); i++) cmdarray[i]=st.nextToken$();

return this.exec$SA$SA$java_io_File(cmdarray, envp, dir);
});

Clazz_newMeth(C$, 'exec$SA',  function (cmdarray) {
return this.exec$SA$SA$java_io_File(cmdarray, null, null);
});

Clazz_newMeth(C$, 'exec$SA$SA',  function (cmdarray, envp) {
return this.exec$SA$SA$java_io_File(cmdarray, envp, null);
});

Clazz_newMeth(C$, 'exec$SA$SA$java_io_File',  function (cmdarray, envp, dir) {

alert("Runtime.exec is not implemented. "+cmdarray[0]);
return null;
});

Clazz_newMeth(C$, 'availableProcessors$',  function () {
return 2147483647;
});

Clazz_newMeth(C$, 'freeMemory$',  function () {
return 2147483647;
});

Clazz_newMeth(C$, 'totalMemory$',  function () {
return 2147483647;
});

Clazz_newMeth(C$, 'maxMemory$',  function () {
return 2147483647;
});

Clazz_newMeth(C$, 'gc$',  function () {
});

Clazz_newMeth(C$, 'runFinalization0$',  function () {
}, 1);

Clazz_newMeth(C$, 'runFinalization$',  function () {
C$.runFinalization0$();
});

Clazz_newMeth(C$, 'traceInstructions$Z',  function (on) {
});

Clazz_newMeth(C$, 'traceMethodCalls$Z',  function (on) {
});

Clazz_newMeth(C$, 'load$S',  function (filename) {
this.load0$Class$S(null, filename);
});

Clazz_newMeth(C$, 'load0$Class$S',  function (fromClass, filename) {
if (!(Clazz_new_($I$(6,1).c$$S,[filename]).isAbsolute$())) {
throw Clazz_new_($I$(7,1).c$$S,["Expecting an absolute path of the library: " + filename]);
}ClassLoader.loadLibrary$Class$S$Z(fromClass, filename, true);
});

Clazz_newMeth(C$, 'loadLibrary$S',  function (libname) {
this.loadLibrary0$Class$S(null, libname);
});

Clazz_newMeth(C$, 'loadLibrary0$Class$S',  function (fromClass, libname) {
if (libname.indexOf$I($I$(6).separatorChar.$c()) != -1) {
throw Clazz_new_($I$(7,1).c$$S,["Directory separator should not appear in library name: " + libname]);
}ClassLoader.loadLibrary$Class$S$Z(fromClass, libname, false);
});

Clazz_newMeth(C$, 'getLocalizedInputStream$java_io_InputStream',  function ($in) {
return $in;
});

Clazz_newMeth(C$, 'getLocalizedOutputStream$java_io_OutputStream',  function (out) {
return out;
});

C$.$static$=function(){C$.$static$=0;
C$.currentRuntime=Clazz_new_(C$);
};
})();
;Clazz_setTVer('5.0.1-v2');//Created 2024-01-09 14:03:23 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=java.lang,I$=[[0,'InternalError','java.util.Hashtable','Thread','swingjs.JSUtil']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz_load(I$0[i])))),!n&&i.$load$&&Clazz_load(i,2),i)};
/*c*/var C$=Clazz_newClass(P$, "Shutdown");

C$.$clinit$=2;

Clazz_newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['Z',['runFinalizersOnExit','秘isHalted'],'I',['state','currentRunningHook'],'O',['groupHooks','java.util.Map','lock','java.lang.Object','+haltLock']]]

Clazz_newMeth(C$, 'setRunFinalizersOnExit$Z',  function (run) {
{
C$.runFinalizersOnExit=run;
}}, 1);

Clazz_newMeth(C$, 'add$I$Z$Runnable',  function (slot, registerShutdownInProgress, hook) {
{
var hooks=C$.getHooks$Z(true);
if (hooks[slot] != null ) throw Clazz_new_($I$(1,1).c$$S,["Shutdown hook at slot " + slot + " already registered" ]);
if (!registerShutdownInProgress) {
if (C$.state > 0) throw Clazz_new_(Clazz_load('IllegalStateException').c$$S,["Shutdown in progress"]);
} else {
if (C$.state > 1 || (C$.state == 1 && slot <= C$.currentRunningHook ) ) throw Clazz_new_(Clazz_load('IllegalStateException').c$$S,["Shutdown in progress"]);
}hooks[slot]=hook;
}}, 1);

Clazz_newMeth(C$, 'getHooks$Z',  function (andCreate) {
if (C$.groupHooks == null ) {
if (!andCreate) return null;
C$.groupHooks=Clazz_new_($I$(2,1));
}var g=$I$(3).currentThread$().getThreadGroup$();
var hooks=C$.groupHooks.get$O($I$(4).getJSID$O(g));
if (hooks == null ) {
if (!andCreate) return null;
C$.groupHooks.put$O$O($I$(4).getJSID$O(g), hooks=Clazz_array(Runnable, [10]));
}return hooks;
}, 1);

Clazz_newMeth(C$, 'runHooks$',  function () {
var hooks=C$.getHooks$Z(false);
if (hooks == null ) return;
for (var i=0; i < 10; i++) {
try {
var hook;
{
C$.currentRunningHook=i;
hook=hooks[i];
}if (hook != null ) hook.run$();
} catch (t) {
if (Clazz_instanceOf(t, "java.lang.ThreadDeath")) {
var td=t;
throw td;
}}
}
}, 1);

Clazz_newMeth(C$, 'halt$I',  function (status) {
{
if (!C$.秘isHalted) {
C$.秘isHalted=true;
System.out.println$S("Shutdown(" + status + ") on " + $I$(3).currentThread$().getThreadGroup$().getName$() );
}}}, 1);

Clazz_newMeth(C$, 'sequence$',  function () {
{
if (C$.state != 1) return;
}C$.runHooks$();
{
C$.state=2;
}}, 1);

Clazz_newMeth(C$, 'exit$I',  function (status) {
var runMoreFinalizers=false;
{
if (status != 0) C$.runFinalizersOnExit=false;
switch (C$.state) {
case 0:
C$.state=1;
break;
case 1:
break;
case 2:
if (status != 0) {
C$.halt$I(status);
} else {
runMoreFinalizers=C$.runFinalizersOnExit;
}break;
}
}if (runMoreFinalizers) {
C$.halt$I(status);
}{
C$.sequence$();
C$.halt$I(status);
}}, 1);

Clazz_newMeth(C$, 'shutdown$',  function () {
{
switch (C$.state) {
case 0:
C$.state=1;
break;
case 1:
case 2:
break;
}
}{
C$.sequence$();
}}, 1);

C$.$static$=function(){C$.$static$=0;
C$.state=0;
C$.runFinalizersOnExit=false;
C$.currentRunningHook=0;
C$.lock=null;
C$.haltLock=null;
};

Clazz_newMeth(C$);
})();
;Clazz_setTVer('5.0.1-v2');//Created 2024-01-09 14:03:23 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=java.lang,p$1={},I$=[[0,'swingjs.JSThreadGroup','swingjs.JSUtil','ThreadLocal','ThreadGroup','swingjs.JSToolkit','ThreadDeath','NoSuchMethodError','java.util.HashMap',['Thread','.State']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz_load(I$0[i])))),!n&&i.$load$&&Clazz_load(i,2),i)};
/*c*/var C$=Clazz_newClass(P$, "Thread", function(){
Clazz_newInstance(this, arguments,0,C$);
}, null, 'Runnable');
C$.$classes$=[['State',25],['UncaughtExceptionHandler',9]];

C$.$clinit$=2;

Clazz_newMeth(C$, '$init$', function () {
this.priority=5;
this.daemon=false;
this.threadLocals=null;
this.inheritableThreadLocals=null;
this.threadStatus=0;
},1);

C$.$fields$=[['Z',['daemon','stopBeforeStart','started','interrupted','stopped'],'I',['priority','threadStatus'],'J',['tid'],'S',['name'],'O',['target','Runnable','group','ThreadGroup','threadLocals','ThreadLocal.ThreadLocalMap','+inheritableThreadLocals','parkBlocker','java.lang.Object','throwableFromStop','Throwable','me','Thread','uncaughtExceptionHandler','Thread.UncaughtExceptionHandler']]
,['I',['threadInitNumber'],'J',['threadSeqNumber'],'O',['秘thisThread','javajs.util.JSThread','defaultUncaughtExceptionHandler','Thread.UncaughtExceptionHandler']]]

Clazz_newMeth(C$, 'nextThreadNum$',  function () {
return C$.threadInitNumber++;
}, 1);

Clazz_newMeth(C$, 'nextThreadID$',  function () {
return (C$.threadSeqNumber=Long.$inc(C$.threadSeqNumber,1));
}, 1);

Clazz_newMeth(C$, 'currentThread$',  function () {
var t=C$.秘thisThread;
if (t === "working" ) return null;
if (t == null ) {
C$.秘thisThread="working";
C$.秘thisThread=Clazz_new_(C$.c$$S,["master"]);
var name=J2S._applets["master"]._id ||null;
var g=Clazz_new_($I$(1,1).c$$ThreadGroup$S,[null, name]);
C$.秘thisThread=Clazz_new_(Clazz_load("javajs.util.JSThread").c$$ThreadGroup$S, [g, name]) ||null;
C$.秘thisThread.setPriority$I(5);
}return C$.秘thisThread;
}, 1);

Clazz_newMeth(C$, 'yield$',  function () {
$I$(2).notImplemented$S(null);
}, 1);

Clazz_newMeth(C$, 'sleep$J',  function (millis) {
$I$(2).notImplemented$S(null);
throw Clazz_new_(Clazz_load('InterruptedException').c$$S,["SwingJS does not implement Thread.sleep(long)"]);
}, 1);

Clazz_newMeth(C$, 'sleep$J$I',  function (millis, nanos) {
if (Long.$lt(millis,0 )) {
throw Clazz_new_(Clazz_load('IllegalArgumentException').c$$S,["timeout value is negative"]);
}if (nanos < 0 || nanos > 999999 ) {
throw Clazz_new_(Clazz_load('IllegalArgumentException').c$$S,["nanosecond timeout value out of range"]);
}if (nanos >= 500000 || (nanos != 0 && Long.$eq(millis,0 ) ) ) {
(millis=Long.$inc(millis,1));
}$I$(2).notImplemented$S(null);
throw Clazz_new_(Clazz_load('InterruptedException').c$$S,["SwingJS does not implement Thread.sleep(long,int)"]);
}, 1);

Clazz_newMeth(C$, 'init$ThreadGroup$Runnable$S$J',  function (g, target, name, stackSize) {
p$1.init$ThreadGroup$Runnable$S$J$O.apply(this, [g, target, name, stackSize, null]);
}, p$1);

Clazz_newMeth(C$, 'init$ThreadGroup$Runnable$S$J$O',  function (g, target, name, stackSize, acc) {
var parent=(C$.秘thisThread == null  ? null : C$.秘thisThread);
if (g == null ) {
if (g == null  && parent != null   && !parent.equals$O("working") ) {
g=parent.getThreadGroup$();
}}if (g == null ) {
g=this.newThreadGroup$ThreadGroup$S(null, name);
parent=this;
}g.addUnstarted$();
this.group=g;
this.priority=parent.getPriority$();
this.name=name;
this.target=target;
this.setPriority$I(this.priority);
if (parent.inheritableThreadLocals != null ) this.inheritableThreadLocals=$I$(3).createInheritedMap$ThreadLocal_ThreadLocalMap(parent.inheritableThreadLocals);
this.tid=C$.nextThreadID$();
this.me=this;
}, p$1);

Clazz_newMeth(C$, 'newThreadGroup$ThreadGroup$S',  function (group, name) {
return Clazz_new_($I$(4,1).c$$ThreadGroup$S,[group, name]);
});

Clazz_newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
p$1.init$ThreadGroup$Runnable$S$J.apply(this, [null, null, "Thread-" + C$.nextThreadNum$(), 0]);
}, 1);

Clazz_newMeth(C$, 'c$$Runnable',  function (target) {
;C$.$init$.apply(this);
p$1.init$ThreadGroup$Runnable$S$J.apply(this, [null, target, "Thread-" + C$.nextThreadNum$(), 0]);
}, 1);

Clazz_newMeth(C$, 'c$$ThreadGroup$Runnable',  function (group, target) {
;C$.$init$.apply(this);
p$1.init$ThreadGroup$Runnable$S$J.apply(this, [group, target, "Thread-" + C$.nextThreadNum$(), 0]);
}, 1);

Clazz_newMeth(C$, 'c$$S',  function (name) {
;C$.$init$.apply(this);
p$1.init$ThreadGroup$Runnable$S$J.apply(this, [null, null, name, 0]);
}, 1);

Clazz_newMeth(C$, 'c$$ThreadGroup$S',  function (group, name) {
;C$.$init$.apply(this);
p$1.init$ThreadGroup$Runnable$S$J.apply(this, [group, null, name, 0]);
}, 1);

Clazz_newMeth(C$, 'c$$Runnable$S',  function (target, name) {
;C$.$init$.apply(this);
p$1.init$ThreadGroup$Runnable$S$J.apply(this, [null, target, name, 0]);
}, 1);

Clazz_newMeth(C$, 'c$$ThreadGroup$Runnable$S',  function (group, target, name) {
;C$.$init$.apply(this);
p$1.init$ThreadGroup$Runnable$S$J.apply(this, [group, target, name, 0]);
}, 1);

Clazz_newMeth(C$, 'c$$ThreadGroup$Runnable$S$J',  function (group, target, name, stackSize) {
;C$.$init$.apply(this);
p$1.init$ThreadGroup$Runnable$S$J.apply(this, [group, target, name, stackSize]);
}, 1);

Clazz_newMeth(C$, 'start$',  function () {
if (this.threadStatus != 0 || this !== this.me  ) throw Clazz_new_(Clazz_load('IllegalThreadStateException'));
this.group.add$Thread(this);
p$1.start0.apply(this, []);
if (this.stopBeforeStart) {
p$1.stop0$O.apply(this, [this.throwableFromStop]);
}});

Clazz_newMeth(C$, 'start0',  function () {
this.started=true;
C$.currentThread$().getThreadGroup$().秘transferJ2SInfo$ThreadGroup(this.getThreadGroup$());
$I$(5).startThread$Thread(this);
}, p$1);

Clazz_newMeth(C$, 'run$',  function () {
if (this.target != null ) {
this.target.run$();
}});

Clazz_newMeth(C$, 'stop$',  function () {
if ((this.threadStatus != 0) && !this.isAlive$() ) {
return;
}p$1.stop1$Throwable.apply(this, [Clazz_new_($I$(6,1))]);
});

Clazz_newMeth(C$, 'stop$Throwable',  function (obj) {
p$1.stop1$Throwable.apply(this, [obj]);
});

Clazz_newMeth(C$, 'stop1$Throwable',  function (th) {
if (this.threadStatus != 0) {
this.resume$();
p$1.stop0$O.apply(this, [th]);
} else {
if (th == null ) {
throw Clazz_new_(Clazz_load('NullPointerException'));
}this.stopBeforeStart=true;
this.throwableFromStop=th;
}}, p$1);

Clazz_newMeth(C$, 'interrupt$',  function () {
p$1.interrupt0.apply(this, []);
});

Clazz_newMeth(C$, 'interrupted$',  function () {
return p$1.isInterruptedB$Z.apply(C$.currentThread$(), [true]);
}, 1);

Clazz_newMeth(C$, 'isInterrupted$',  function () {
return p$1.isInterruptedB$Z.apply(this, [false]);
});

Clazz_newMeth(C$, 'isInterruptedB$Z',  function (clearInterrupted) {
var wasInt=this.interrupted;
if (clearInterrupted) this.interrupted=false;
return wasInt;
}, p$1);

Clazz_newMeth(C$, 'destroy$',  function () {
throw Clazz_new_($I$(7,1));
});

Clazz_newMeth(C$, 'isAlive$',  function () {
return this.started && !this.stopped ;
});

Clazz_newMeth(C$, 'suspend$',  function () {
this.checkAccess$();
p$1.suspend0.apply(this, []);
});

Clazz_newMeth(C$, 'resume$',  function () {
this.checkAccess$();
p$1.resume0.apply(this, []);
});

Clazz_newMeth(C$, 'setPriority$I',  function (newPriority) {
var g;
this.checkAccess$();
if (newPriority > 10 || newPriority < 1 ) {
throw Clazz_new_(Clazz_load('IllegalArgumentException'));
}if ((g=this.getThreadGroup$()) != null ) {
if (newPriority > g.getMaxPriority$()) {
newPriority=g.getMaxPriority$();
}p$1.setPriority0$I.apply(this, [this.priority=newPriority]);
}});

Clazz_newMeth(C$, 'getPriority$',  function () {
return this.priority;
});

Clazz_newMeth(C$, 'setName$S',  function (name) {
this.checkAccess$();
this.name=name;
});

Clazz_newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz_newMeth(C$, 'getThreadGroup$',  function () {
return this.group;
});

Clazz_newMeth(C$, 'activeCount$',  function () {
return C$.currentThread$().getThreadGroup$().activeCount$();
}, 1);

Clazz_newMeth(C$, 'enumerate$ThreadA',  function (tarray) {
return C$.currentThread$().getThreadGroup$().enumerate$ThreadA(tarray);
}, 1);

Clazz_newMeth(C$, 'countStackFrames$',  function () {
return 0;
});

Clazz_newMeth(C$, 'join$J',  function (millis) {
if (Long.$lt(millis,0 )) {
throw Clazz_new_(Clazz_load('IllegalArgumentException').c$$S,["timeout value is negative"]);
}$I$(2).notImplemented$S(null);
});

Clazz_newMeth(C$, 'join$J$I',  function (millis, nanos) {
if (Long.$lt(millis,0 )) {
throw Clazz_new_(Clazz_load('IllegalArgumentException').c$$S,["timeout value is negative"]);
}if (nanos < 0 || nanos > 999999 ) {
throw Clazz_new_(Clazz_load('IllegalArgumentException').c$$S,["nanosecond timeout value out of range"]);
}if (nanos >= 500000 || (nanos != 0 && Long.$eq(millis,0 ) ) ) {
(millis=Long.$inc(millis,1));
}this.join$J(millis);
});

Clazz_newMeth(C$, 'join$',  function () {
this.join$J(0);
});

Clazz_newMeth(C$, 'dumpStack$',  function () {
Clazz_new_(Clazz_load('Exception').c$$S,["Stack trace"]).printStackTrace$();
}, 1);

Clazz_newMeth(C$, 'setDaemon$Z',  function (on) {
this.checkAccess$();
if (this.isAlive$()) {
throw Clazz_new_(Clazz_load('IllegalThreadStateException'));
}this.daemon=on;
});

Clazz_newMeth(C$, 'isDaemon$',  function () {
return this.daemon;
});

Clazz_newMeth(C$, 'checkAccess$',  function () {
});

Clazz_newMeth(C$, 'toString',  function () {
var group=this.getThreadGroup$();
if (group != null ) {
return "Thread[" + this.getName$() + "," + this.getPriority$() + "," + group.getName$() + "]" ;
} else {
return "Thread[" + this.getName$() + "," + this.getPriority$() + "," + "" + "]" ;
}});

Clazz_newMeth(C$, 'getContextClassLoader$',  function () {
var cl=Clazz_getClass($I$(2)).getClassLoader$();

cl.baseClass = {getName$:function(){return ""}};
return cl;
});

Clazz_newMeth(C$, 'setContextClassLoader$ClassLoader',  function (cl) {
});

Clazz_newMeth(C$, 'holdsLock$O',  function (obj) {
return false;
}, 1);

Clazz_newMeth(C$, 'getStackTrace$',  function () {
return (Clazz_new_(Clazz_load('Exception'))).getStackTrace$();
});

Clazz_newMeth(C$, 'getAllStackTraces$',  function () {
var threads=C$.getThreads$();
var traces=C$.dumpThreads$ThreadA(threads);
var m=Clazz_new_($I$(8,1).c$$I,[threads.length]);
for (var i=0; i < threads.length; i++) {
var stackTrace=traces[i];
if (stackTrace != null ) {
m.put$O$O(threads[i], stackTrace);
}}
return m;
}, 1);

Clazz_newMeth(C$, 'dumpThreads$ThreadA',  function (threads) {
return null;
}, 1);

Clazz_newMeth(C$, 'getThreads$',  function () {
return null;
}, 1);

Clazz_newMeth(C$, 'getId$',  function () {
return this.tid;
});

Clazz_newMeth(C$, 'getState$',  function () {
switch (this.threadStatus) {
case 0:
return $I$(9).NEW;
case 1:
return $I$(9).RUNNABLE;
case 2:
default:
return $I$(9).TERMINATED;
case 3:
return $I$(9).TIMED_WAITING;
case 4:
return $I$(9).WAITING;
}
});

Clazz_newMeth(C$, 'setDefaultUncaughtExceptionHandler$Thread_UncaughtExceptionHandler',  function (eh) {
C$.defaultUncaughtExceptionHandler=eh;
}, 1);

Clazz_newMeth(C$, 'getDefaultUncaughtExceptionHandler$',  function () {
return C$.defaultUncaughtExceptionHandler;
}, 1);

Clazz_newMeth(C$, 'getUncaughtExceptionHandler$',  function () {
return this.uncaughtExceptionHandler != null  ? this.uncaughtExceptionHandler : this.group;
});

Clazz_newMeth(C$, 'setUncaughtExceptionHandler$Thread_UncaughtExceptionHandler',  function (eh) {
this.checkAccess$();
this.uncaughtExceptionHandler=eh;
});

Clazz_newMeth(C$, 'setPriority0$I',  function (newPriority) {
}, p$1);

Clazz_newMeth(C$, 'stop0$O',  function (o) {
this.stopped=true;
}, p$1);

Clazz_newMeth(C$, 'suspend0',  function () {
}, p$1);

Clazz_newMeth(C$, 'resume0',  function () {
}, p$1);

Clazz_newMeth(C$, 'interrupt0',  function () {
this.interrupted=true;
}, p$1);
;
(function(){/*e*/var C$=Clazz_newClass(P$.Thread, "State", function(){
Clazz_newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz_newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz_array(C$,[0]);
Clazz_newEnumConst($vals, C$.c$, "NEW", 0, []);
Clazz_newEnumConst($vals, C$.c$, "RUNNABLE", 1, []);
Clazz_newEnumConst($vals, C$.c$, "BLOCKED", 2, []);
Clazz_newEnumConst($vals, C$.c$, "WAITING", 3, []);
Clazz_newEnumConst($vals, C$.c$, "TIMED_WAITING", 4, []);
Clazz_newEnumConst($vals, C$.c$, "TERMINATED", 5, []);
};

Clazz_newMeth(C$);
var $vals=[];
Clazz_newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz_newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){/*i*/var C$=Clazz_newInterface(P$.Thread, "UncaughtExceptionHandler", function(){
});
})()
})();
;Clazz_setTVer('5.0.1-v2');//Created 2024-01-09 14:03:24 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=java.lang,p$1={},I$=[[0,'Thread','java.util.Arrays','java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz_load(I$0[i])))),!n&&i.$load$&&Clazz_load(i,2),i)};
/*c*/var C$=Clazz_newClass(P$, "ThreadGroup", null, null, [['Thread','Thread.UncaughtExceptionHandler']]);

C$.$clinit$=2;

Clazz_newMeth(C$, '$init$', function () {
this.maxPriority=10;
this.nUnstartedThreads=0;
},1);

C$.$fields$=[['Z',['destroyed','daemon','vmAllowSuspension','秘systemExited'],'I',['maxPriority','nUnstartedThreads','nthreads','ngroups'],'S',['name'],'O',['parent','ThreadGroup','threads','Thread[]','groups','ThreadGroup[]','秘html5Applet','swingjs.api.js.HTML5Applet','秘appletViewer','swingjs.JSAppletViewer','秘timerQueue','java.util.ArrayList']]]

Clazz_newMeth(C$, 'c$$S',  function (name) {
C$.c$$ThreadGroup$S.apply(this, [$I$(1).currentThread$().getThreadGroup$(), name]);
}, 1);

Clazz_newMeth(C$, 'c$$ThreadGroup$S',  function (parent, name) {
;C$.$init$.apply(this);
this.name=name;
this.parent=parent;
if (parent != null ) {
this.maxPriority=parent.maxPriority;
this.daemon=parent.daemon;
this.vmAllowSuspension=parent.vmAllowSuspension;
p$1.add$ThreadGroup.apply(parent, [this]);
}}, 1);

Clazz_newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz_newMeth(C$, 'getParent$',  function () {
if (this.parent != null ) this.parent.checkAccess$();
return this.parent;
});

Clazz_newMeth(C$, 'getMaxPriority$',  function () {
return this.maxPriority;
});

Clazz_newMeth(C$, 'isDaemon$',  function () {
return this.daemon;
});

Clazz_newMeth(C$, 'isDestroyed$',  function () {
return this.destroyed;
});

Clazz_newMeth(C$, 'setDaemon$Z',  function (daemon) {
this.checkAccess$();
this.daemon=daemon;
});

Clazz_newMeth(C$, 'setMaxPriority$I',  function (pri) {
var ngroupsSnapshot;
var groupsSnapshot;
{
this.checkAccess$();
if (pri < 1 || pri > 10 ) {
return;
}this.maxPriority=(this.parent != null ) ? Math.min(pri, this.parent.maxPriority) : pri;
ngroupsSnapshot=this.ngroups;
if (this.groups != null ) {
groupsSnapshot=$I$(2).copyOf$OA$I(this.groups, ngroupsSnapshot);
} else {
groupsSnapshot=null;
}}for (var i=0; i < ngroupsSnapshot; i++) {
groupsSnapshot[i].setMaxPriority$I(pri);
}
});

Clazz_newMeth(C$, 'parentOf$ThreadGroup',  function (g) {
for (; g != null ; g=g.parent) {
if (g === this ) {
return true;
}}
return false;
});

Clazz_newMeth(C$, 'checkAccess$',  function () {
});

Clazz_newMeth(C$, 'activeCount$',  function () {
var result;
var ngroupsSnapshot;
var groupsSnapshot;
{
if (this.destroyed) {
return 0;
}result=this.nthreads;
ngroupsSnapshot=this.ngroups;
if (this.groups != null ) {
groupsSnapshot=$I$(2).copyOf$OA$I(this.groups, ngroupsSnapshot);
} else {
groupsSnapshot=null;
}}for (var i=0; i < ngroupsSnapshot; i++) {
result+=groupsSnapshot[i].activeCount$();
}
return result;
});

Clazz_newMeth(C$, 'enumerate$ThreadA',  function (list) {
this.checkAccess$();
return p$1.enumerate$ThreadA$I$Z.apply(this, [list, 0, true]);
});

Clazz_newMeth(C$, 'enumerate$ThreadA$Z',  function (list, recurse) {
this.checkAccess$();
return p$1.enumerate$ThreadA$I$Z.apply(this, [list, 0, recurse]);
});

Clazz_newMeth(C$, 'enumerate$ThreadA$I$Z',  function (list, n, recurse) {
var ngroupsSnapshot=0;
var groupsSnapshot=null;
{
if (this.destroyed) {
return 0;
}var nt=this.nthreads;
if (nt > list.length - n) {
nt=list.length - n;
}for (var i=0; i < nt; i++) {
if (this.threads[i].isAlive$()) {
list[n++]=this.threads[i];
}}
if (recurse) {
ngroupsSnapshot=this.ngroups;
if (this.groups != null ) {
groupsSnapshot=$I$(2).copyOf$OA$I(this.groups, ngroupsSnapshot);
} else {
groupsSnapshot=null;
}}}if (recurse) {
for (var i=0; i < ngroupsSnapshot; i++) {
n=p$1.enumerate$ThreadA$I$Z.apply(groupsSnapshot[i], [list, n, true]);
}
}return n;
}, p$1);

Clazz_newMeth(C$, 'activeGroupCount$',  function () {
var ngroupsSnapshot;
var groupsSnapshot;
{
if (this.destroyed) {
return 0;
}ngroupsSnapshot=this.ngroups;
if (this.groups != null ) {
groupsSnapshot=$I$(2).copyOf$OA$I(this.groups, ngroupsSnapshot);
} else {
groupsSnapshot=null;
}}var n=ngroupsSnapshot;
for (var i=0; i < ngroupsSnapshot; i++) {
n+=groupsSnapshot[i].activeGroupCount$();
}
return n;
});

Clazz_newMeth(C$, 'enumerate$ThreadGroupA',  function (list) {
this.checkAccess$();
return p$1.enumerate$ThreadGroupA$I$Z.apply(this, [list, 0, true]);
});

Clazz_newMeth(C$, 'enumerate$ThreadGroupA$Z',  function (list, recurse) {
this.checkAccess$();
return p$1.enumerate$ThreadGroupA$I$Z.apply(this, [list, 0, recurse]);
});

Clazz_newMeth(C$, 'enumerate$ThreadGroupA$I$Z',  function (list, n, recurse) {
var ngroupsSnapshot=0;
var groupsSnapshot=null;
{
if (this.destroyed) {
return 0;
}var ng=this.ngroups;
if (ng > list.length - n) {
ng=list.length - n;
}if (ng > 0) {
System.arraycopy$O$I$O$I$I(this.groups, 0, list, n, ng);
n+=ng;
}if (recurse) {
ngroupsSnapshot=this.ngroups;
if (this.groups != null ) {
groupsSnapshot=$I$(2).copyOf$OA$I(this.groups, ngroupsSnapshot);
} else {
groupsSnapshot=null;
}}}if (recurse) {
for (var i=0; i < ngroupsSnapshot; i++) {
n=p$1.enumerate$ThreadGroupA$I$Z.apply(groupsSnapshot[i], [list, n, true]);
}
}return n;
}, p$1);

Clazz_newMeth(C$, 'stop$',  function () {
if (p$1.stopOrSuspend$Z.apply(this, [false])) $I$(1).currentThread$().stop$();
});

Clazz_newMeth(C$, 'interrupt$',  function () {
var ngroupsSnapshot;
var groupsSnapshot;
{
this.checkAccess$();
for (var i=0; i < this.nthreads; i++) {
this.threads[i].interrupt$();
}
ngroupsSnapshot=this.ngroups;
if (this.groups != null ) {
groupsSnapshot=$I$(2).copyOf$OA$I(this.groups, ngroupsSnapshot);
} else {
groupsSnapshot=null;
}}for (var i=0; i < ngroupsSnapshot; i++) {
groupsSnapshot[i].interrupt$();
}
});

Clazz_newMeth(C$, 'suspend$',  function () {
if (p$1.stopOrSuspend$Z.apply(this, [true])) $I$(1).currentThread$().suspend$();
});

Clazz_newMeth(C$, 'stopOrSuspend$Z',  function (suspend) {
var suicide=false;
var us=$I$(1).currentThread$();
var ngroupsSnapshot;
var groupsSnapshot=null;
{
this.checkAccess$();
for (var i=0; i < this.nthreads; i++) {
if (this.threads[i] === us ) suicide=true;
 else if (suspend) this.threads[i].suspend$();
 else this.threads[i].stop$();
}
ngroupsSnapshot=this.ngroups;
if (this.groups != null ) {
groupsSnapshot=$I$(2).copyOf$OA$I(this.groups, ngroupsSnapshot);
}}for (var i=0; i < ngroupsSnapshot; i++) suicide=p$1.stopOrSuspend$Z.apply(groupsSnapshot[i], [suspend]) || suicide ;

return suicide;
}, p$1);

Clazz_newMeth(C$, 'resume$',  function () {
var ngroupsSnapshot;
var groupsSnapshot;
{
this.checkAccess$();
for (var i=0; i < this.nthreads; i++) {
this.threads[i].resume$();
}
ngroupsSnapshot=this.ngroups;
if (this.groups != null ) {
groupsSnapshot=$I$(2).copyOf$OA$I(this.groups, ngroupsSnapshot);
} else {
groupsSnapshot=null;
}}for (var i=0; i < ngroupsSnapshot; i++) {
groupsSnapshot[i].resume$();
}
});

Clazz_newMeth(C$, 'destroy$',  function () {
var ngroupsSnapshot;
var groupsSnapshot;
{
this.checkAccess$();
if (this.destroyed || (this.nthreads > 0) ) {
throw Clazz_new_(Clazz_load('IllegalThreadStateException'));
}ngroupsSnapshot=this.ngroups;
if (this.groups != null ) {
groupsSnapshot=$I$(2).copyOf$OA$I(this.groups, ngroupsSnapshot);
} else {
groupsSnapshot=null;
}if (this.parent != null ) {
this.destroyed=true;
this.ngroups=0;
this.groups=null;
this.nthreads=0;
this.threads=null;
}}for (var i=0; i < ngroupsSnapshot; i+=1) {
groupsSnapshot[i].destroy$();
}
if (this.parent != null ) {
p$1.remove$ThreadGroup.apply(this.parent, [this]);
}});

Clazz_newMeth(C$, 'add$ThreadGroup',  function (g) {
{
if (this.destroyed) {
throw Clazz_new_(Clazz_load('IllegalThreadStateException'));
}if (this.groups == null ) {
this.groups=Clazz_array(C$, [4]);
} else if (this.ngroups == this.groups.length) {
this.groups=$I$(2).copyOf$OA$I(this.groups, this.ngroups * 2);
}this.groups[this.ngroups]=g;
++this.ngroups;
}}, p$1);

Clazz_newMeth(C$, 'remove$ThreadGroup',  function (g) {
{
if (this.destroyed) {
return;
}for (var i=0; i < this.ngroups; i++) {
if (this.groups[i] === g ) {
this.ngroups-=1;
System.arraycopy$O$I$O$I$I(this.groups, i + 1, this.groups, i, this.ngroups - i);
this.groups[this.ngroups]=null;
break;
}}
if (this.nthreads == 0) {
this.notifyAll$();
}if (this.daemon && (this.nthreads == 0) && (this.nUnstartedThreads == 0) && (this.ngroups == 0)  ) {
this.destroy$();
}}}, p$1);

Clazz_newMeth(C$, 'addUnstarted$',  function () {
{
if (this.destroyed) {
throw Clazz_new_(Clazz_load('IllegalThreadStateException'));
}++this.nUnstartedThreads;
}});

Clazz_newMeth(C$, 'add$Thread',  function (t) {
{
if (this.destroyed) {
throw Clazz_new_(Clazz_load('IllegalThreadStateException'));
}if (this.threads == null ) {
this.threads=Clazz_array($I$(1), [4]);
} else if (this.nthreads == this.threads.length) {
this.threads=$I$(2).copyOf$OA$I(this.threads, this.nthreads * 2);
}this.threads[this.nthreads]=t;
++this.nthreads;
--this.nUnstartedThreads;
}});

Clazz_newMeth(C$, 'remove$Thread',  function (t) {
{
if (this.destroyed) {
return;
}for (var i=0; i < this.nthreads; i++) {
if (this.threads[i] === t ) {
System.arraycopy$O$I$O$I$I(this.threads, i + 1, this.threads, i, --this.nthreads - i);
this.threads[this.nthreads]=null;
break;
}}
if (this.nthreads == 0) {
this.notifyAll$();
}if (this.daemon && (this.nthreads == 0) && (this.nUnstartedThreads == 0) && (this.ngroups == 0)  ) {
this.destroy$();
}}});

Clazz_newMeth(C$, 'uncaughtException$Thread$Throwable',  function (t, e) {
if (this.parent != null ) {
this.parent.uncaughtException$Thread$Throwable(t, e);
} else {
var ueh=$I$(1).getDefaultUncaughtExceptionHandler$();
if (ueh != null ) {
ueh.uncaughtException$Thread$Throwable(t, e);
} else if (!(Clazz_instanceOf(e, "java.lang.ThreadDeath"))) {
System.err.print$S("Exception in thread \"" + t.getName$() + "\" " );
e.printStackTrace$java_io_PrintStream(System.err);
}}});

Clazz_newMeth(C$, 'toString',  function () {
return this.getClass$().getName$() + "[name=" + this.getName$() + ",maxpri=" + this.maxPriority + ",html5Applet=" + this.秘html5Applet + "]" ;
});

Clazz_newMeth(C$, '秘getTimerQueue$',  function () {
return (this.秘systemExited ? null : this.秘timerQueue == null  ? (this.秘timerQueue=Clazz_new_($I$(3,1))) : this.秘timerQueue);
});

Clazz_newMeth(C$, '秘exit$',  function () {
var q=this.秘systemExited ? null : this.秘timerQueue;
if (q != null ) for (var i=q.size$(); --i >= 0; ) {
var t=q.get$I(i);
try {
t.stop$();
} catch (e) {
}
}
this.秘systemExited=true;
});

Clazz_newMeth(C$, '秘transferJ2SInfo$ThreadGroup',  function (g) {
g.秘appletViewer=this.秘appletViewer;
g.秘html5Applet=this.秘html5Applet;
g.秘timerQueue=this.秘timerQueue;
});

Clazz_newMeth(C$, '秘getAppletViewer$',  function () {
var a=this.秘appletViewer;
if (a == null ) {

a = this.秘html5Applet._appletPanel;
this.秘appletViewer=a;
}return a;
});

Clazz_newMeth(C$);
})();
;Clazz_setTVer('5.0.1-v2');//Created 2024-01-09 14:03:24 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=Clazz_newPackage("javajs.util"),I$=[[0,'Thread']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz_load(I$0[i])))),!n&&i.$load$&&Clazz_load(i,2),i)};
/*c*/var C$=Clazz_newClass(P$, "JSThread", null, 'Thread');

C$.$clinit$=2;

Clazz_newMeth(C$, '$init$', function () {
this.isJS=true ||false;
},1);

C$.$fields$=[['Z',['isJS']]
,['I',['threadCount']]]

Clazz_newMeth(C$, 'c$',  function () {
C$.c$$ThreadGroup$S.apply(this, [null, "JSThread-" + (++C$.threadCount)]);
}, 1);

Clazz_newMeth(C$, 'c$$S',  function (name) {
C$.c$$ThreadGroup$S.apply(this, [null, name]);
}, 1);

Clazz_newMeth(C$, 'c$$ThreadGroup$S',  function (group, name) {
;C$.superclazz.c$$ThreadGroup$S.apply(this,[group, name]);C$.$init$.apply(this);
}, 1);

Clazz_newMeth(C$, 'run$',  function () {
this.run1$I(0);
});

Clazz_newMeth(C$, 'start$',  function () {
{
this.started = true;
Clazz_load("swingjs.JSToolkit").dispatch$O$I$I(this, 1, 0);
}
});

Clazz_newMeth(C$, 'run1$I',  function (state) {
var executeFinally=true;
try {
while (!$I$(1).interrupted$()){
switch (state) {
case 0:
if (!this.myInit$()) return;
state=1;
continue;
case 1:
if (!this.isLooping$()) {
state=2;
continue;
}if (this.myLoop$() && this.sleepAndReturn$I$I(this.getDelayMillis$(), state) ) {
executeFinally=false;
return;
}continue;
case 2:
this.whenDone$();
return;
}
}
} catch (e) {
if (Clazz_exceptionOf(e,"Exception")){
this.onException$Exception(e);
state=2;
} else {
throw e;
}
} finally {
if (executeFinally) {
executeFinally=false;
this.doFinally$();
}}
});

Clazz_newMeth(C$, 'sleepAndReturn$I$I',  function (delay, state) {
if (!this.isJS) {
$I$(1).sleep$J(delay);
return false;
}var me=this;
var r=((P$.JSThread$1||
(function(){/*a*/var C$=Clazz_newClass(P$, "JSThread$1", function(){Clazz_newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz_newMeth(C$, '$init$', function () {
},1);

Clazz_newMeth(C$, 'run$',  function () {
this.$finals$.me.run1$I(this.$finals$.state);
});
})()
), Clazz_new_(P$.JSThread$1.$init$,[this, {state:state,me:me}]));
{
setTimeout( function() { java.awt.Toolkit.getDefaultToolkit$().getSystemEventQueue$().postEvent$java_awt_AWTEvent( Clazz_new_(java.awt.event.InvocationEvent.c$$O$Runnable,[me, r]))}, delay);
}
return true;
});

C$.$static$=function(){C$.$static$=0;
C$.threadCount=0;
};
})();
;Clazz_setTVer('5.0.1-v2');//Created 2024-01-09 14:03:52 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=Clazz_newPackage("swingjs");
/*c*/var C$=Clazz_newClass(P$, "JSThreadGroup", null, 'ThreadGroup');

C$.$clinit$=2;

Clazz_newMeth(C$, '$init$', function () {
},1);

Clazz_newMeth(C$, 'c$$S',  function (name) {
;C$.superclazz.c$$S.apply(this,[name]);C$.$init$.apply(this);
this.秘html5Applet=J2S._applets[name] ||null;
}, 1);

Clazz_newMeth(C$, 'c$$ThreadGroup$S',  function (parent, name) {
;C$.superclazz.c$$ThreadGroup$S.apply(this,[parent, name]);C$.$init$.apply(this);
this.秘html5Applet=J2S._applets[name] ||null;
}, 1);

Clazz_newMeth(C$, 'getHtmlApplet$',  function () {
return this.秘html5Applet;
});

Clazz_newMeth(C$);
})();
;Clazz_setTVer('5.0.1-v2');//Created 2024-01-09 14:04:54 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

})(Clazz,Clazz.setTVer,Clazz.toLong,Clazz.incrAN,Clazz.array,Clazz.assert,Clazz.clone,Clazz.exceptionOf,Clazz.forName,Clazz.getClass,Clazz.instanceOf,Clazz.load,Clazz.new_,Clazz.newClass,Clazz.newEnumConst,Clazz.newInstance,Clazz.newInterface,Clazz.newMeth,Clazz.newPackage,Clazz.super_);
