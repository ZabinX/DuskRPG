(function(){var P$=Clazz.newPackage("java.beans"),p$1={},I$=[[0,'java.beans.FeatureDescriptor','Void']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PropertyDescriptor", null, 'java.beans.FeatureDescriptor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['bound','constrained'],'S',['baseName','writeMethodName','readMethodName'],'O',['propertyTypeRef','Class','readMethodRef','java.lang.reflect.Method','+writeMethodRef','propertyEditorClassRef','Class']]]

Clazz.newMeth(C$, 'c$$S$Class',  function (propertyName, beanClass) {
C$.c$$S$Class$S$S.apply(this, [propertyName, beanClass, propertyName, propertyName]);
}, 1);

Clazz.newMeth(C$, 'c$$S$Class$S$S',  function (propertyName, beanClass, readMethodName, writeMethodName) {
Clazz.super_(C$, this);
if (beanClass == null ) {
throw Clazz.new_(Clazz.load('java.beans.IntrospectionException').c$$S,["Target Bean class is null"]);
}if (propertyName == null  || propertyName.length$() == 0 ) {
throw Clazz.new_(Clazz.load('java.beans.IntrospectionException').c$$S,["bad property name"]);
}if ("".equals$O(readMethodName) || "".equals$O(writeMethodName) ) {
throw Clazz.new_(Clazz.load('java.beans.IntrospectionException').c$$S,["read or write method name should not be the empty string"]);
}this.setName$S(propertyName);
this.setClass0$Class(beanClass);
this.readMethodName=readMethodName;
if (readMethodName != null  && this.getReadMethod$() == null  ) {
throw Clazz.new_(Clazz.load('java.beans.IntrospectionException').c$$S,["Method not found: " + readMethodName]);
}this.writeMethodName=writeMethodName;
if (writeMethodName != null  && this.getWriteMethod$() == null  ) {
throw Clazz.new_(Clazz.load('java.beans.IntrospectionException').c$$S,["Method not found: " + writeMethodName]);
}}, 1);

Clazz.newMeth(C$, 'c$$S$java_lang_reflect_Method$java_lang_reflect_Method',  function (propertyName, readMethod, writeMethod) {
Clazz.super_(C$, this);
if (propertyName == null  || propertyName.length$() == 0 ) {
throw Clazz.new_(Clazz.load('java.beans.IntrospectionException').c$$S,["bad property name"]);
}this.setName$S(propertyName);
this.setReadMethod$java_lang_reflect_Method(readMethod);
this.setWriteMethod$java_lang_reflect_Method(writeMethod);
}, 1);

Clazz.newMeth(C$, 'c$$Class$S$java_lang_reflect_Method$java_lang_reflect_Method',  function (bean, base, read, write) {
Clazz.super_(C$, this);
if (bean == null ) {
throw Clazz.new_(Clazz.load('java.beans.IntrospectionException').c$$S,["Target Bean class is null"]);
}this.setClass0$Class(bean);
this.setReadMethod$java_lang_reflect_Method(read);
this.setWriteMethod$java_lang_reflect_Method(write);
this.baseName=base;
}, 1);

Clazz.newMeth(C$, 'getPropertyType$',  function () {
var type=p$1.getPropertyType0.apply(this, []);
if (type == null ) {
try {
type=p$1.findPropertyType$java_lang_reflect_Method$java_lang_reflect_Method.apply(this, [this.getReadMethod$(), this.getWriteMethod$()]);
p$1.setPropertyType$Class.apply(this, [type]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.beans.IntrospectionException")){
} else {
throw ex;
}
}
}return type;
});

Clazz.newMeth(C$, 'setPropertyType$Class',  function (type) {
this.propertyTypeRef=type;
}, p$1);

Clazz.newMeth(C$, 'getPropertyType0',  function () {
return (this.propertyTypeRef != null ) ? this.propertyTypeRef : null;
}, p$1);

Clazz.newMeth(C$, 'getReadMethod$',  function () {
var readMethod=p$1.getReadMethod0.apply(this, []);
if (readMethod == null ) {
var cls=this.getClass0$();
if (cls == null  || (this.readMethodName == null  && this.readMethodRef == null  ) ) {
return null;
}if (this.readMethodName == null ) {
}try {
this.setReadMethod$java_lang_reflect_Method(readMethod);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.beans.IntrospectionException")){
} else {
throw ex;
}
}
}return readMethod;
});

Clazz.newMeth(C$, 'setReadMethod$java_lang_reflect_Method',  function (readMethod) {
if (readMethod == null ) {
this.readMethodName=null;
this.readMethodRef=null;
return;
}p$1.setPropertyType$Class.apply(this, [p$1.findPropertyType$java_lang_reflect_Method$java_lang_reflect_Method.apply(this, [readMethod, p$1.getWriteMethod0.apply(this, [])])]);
this.setClass0$Class(readMethod.getDeclaringClass$());
this.readMethodName=readMethod.getName$();
this.readMethodRef=readMethod;
});

Clazz.newMeth(C$, 'getWriteMethod$',  function () {
var writeMethod=p$1.getWriteMethod0.apply(this, []);
if (writeMethod == null ) {
var cls=this.getClass0$();
if (cls == null  || (this.writeMethodName == null  && this.writeMethodRef == null  ) ) {
return null;
}var type=p$1.getPropertyType0.apply(this, []);
if (type == null ) {
try {
type=p$1.findPropertyType$java_lang_reflect_Method$java_lang_reflect_Method.apply(this, [this.getReadMethod$(), null]);
p$1.setPropertyType$Class.apply(this, [type]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.beans.IntrospectionException")){
return null;
} else {
throw ex;
}
}
}if (this.writeMethodName == null ) {
}try {
this.setWriteMethod$java_lang_reflect_Method(writeMethod);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.beans.IntrospectionException")){
} else {
throw ex;
}
}
}return writeMethod;
});

Clazz.newMeth(C$, 'setWriteMethod$java_lang_reflect_Method',  function (writeMethod) {
if (writeMethod == null ) {
this.writeMethodName=null;
this.writeMethodRef=null;
return;
}p$1.setPropertyType$Class.apply(this, [p$1.findPropertyType$java_lang_reflect_Method$java_lang_reflect_Method.apply(this, [this.getReadMethod$(), writeMethod])]);
this.setClass0$Class(writeMethod.getDeclaringClass$());
this.writeMethodName=writeMethod.getName$();
this.writeMethodRef=writeMethod;
});

Clazz.newMeth(C$, 'getReadMethod0',  function () {
return (this.readMethodRef != null ) ? this.readMethodRef : null;
}, p$1);

Clazz.newMeth(C$, 'getWriteMethod0',  function () {
return (this.writeMethodRef != null ) ? this.writeMethodRef : null;
}, p$1);

Clazz.newMeth(C$, 'setClass0$Class',  function (clz) {
if (this.getClass0$() != null  && clz.isAssignableFrom$Class(this.getClass0$()) ) {
return;
}C$.superclazz.prototype.setClass0$Class.apply(this, [clz]);
});

Clazz.newMeth(C$, 'isBound$',  function () {
return this.bound;
});

Clazz.newMeth(C$, 'setBound$Z',  function (bound) {
this.bound=bound;
});

Clazz.newMeth(C$, 'isConstrained$',  function () {
return this.constrained;
});

Clazz.newMeth(C$, 'setConstrained$Z',  function (constrained) {
this.constrained=constrained;
});

Clazz.newMeth(C$, 'setPropertyEditorClass$Class',  function (propertyEditorClass) {
this.propertyEditorClassRef=(propertyEditorClass);
});

Clazz.newMeth(C$, 'getPropertyEditorClass$',  function () {
return (this.propertyEditorClassRef != null ) ? this.propertyEditorClassRef : null;
});

Clazz.newMeth(C$, 'createPropertyEditor$O',  function (bean) {
var editor=null;
var cls=this.getPropertyEditorClass$();
if (cls != null ) {
var ctor=null;
if (bean != null ) {
try {
ctor=cls.getConstructor$ClassA(Clazz.array(Class, -1, [Clazz.getClass(java.lang.Object)]));
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
}try {
if (ctor == null ) {
editor=cls.newInstance$();
} else {
editor=ctor.newInstance$OA(Clazz.array(java.lang.Object, -1, [bean]));
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$S$Throwable,["PropertyEditor not instantiated", ex]);
} else {
throw ex;
}
}
}return editor;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (this === obj ) {
return true;
}if (obj != null  && Clazz.instanceOf(obj, "java.beans.PropertyDescriptor") ) {
var other=obj;
var otherReadMethod=other.getReadMethod$();
var otherWriteMethod=other.getWriteMethod$();
if (!this.compareMethods$java_lang_reflect_Method$java_lang_reflect_Method(this.getReadMethod$(), otherReadMethod)) {
return false;
}if (!this.compareMethods$java_lang_reflect_Method$java_lang_reflect_Method(this.getWriteMethod$(), otherWriteMethod)) {
return false;
}if (this.getPropertyType$() === other.getPropertyType$()  && this.getPropertyEditorClass$() === other.getPropertyEditorClass$()   && this.bound == other.isBound$()   && this.constrained == other.isConstrained$()   && this.writeMethodName == other.writeMethodName  && this.readMethodName == other.readMethodName ) {
return true;
}}return false;
});

Clazz.newMeth(C$, 'compareMethods$java_lang_reflect_Method$java_lang_reflect_Method',  function (a, b) {
if ((a == null ) != (b == null ) ) {
return false;
}if (a != null  && b != null  ) {
if (!a.equals$O(b)) {
return false;
}}return true;
});

Clazz.newMeth(C$, 'c$$java_beans_PropertyDescriptor$java_beans_PropertyDescriptor',  function (x, y) {
;C$.superclazz.c$$java_beans_FeatureDescriptor$java_beans_FeatureDescriptor.apply(this,[x, y]);C$.$init$.apply(this);
if (y.baseName != null ) {
this.baseName=y.baseName;
} else {
this.baseName=x.baseName;
}if (y.readMethodName != null ) {
this.readMethodName=y.readMethodName;
} else {
this.readMethodName=x.readMethodName;
}if (y.writeMethodName != null ) {
this.writeMethodName=y.writeMethodName;
} else {
this.writeMethodName=x.writeMethodName;
}if (y.propertyTypeRef != null ) {
this.propertyTypeRef=y.propertyTypeRef;
} else {
this.propertyTypeRef=x.propertyTypeRef;
}var xr=x.getReadMethod$();
var yr=y.getReadMethod$();
try {
if (yr != null  && yr.getDeclaringClass$() === this.getClass0$()  ) {
this.setReadMethod$java_lang_reflect_Method(yr);
} else {
this.setReadMethod$java_lang_reflect_Method(xr);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"java.beans.IntrospectionException")){
} else {
throw ex;
}
}
if (xr != null  && yr != null   && xr.getDeclaringClass$() === yr.getDeclaringClass$()   && $I$(1,"getReturnType$Class$java_lang_reflect_Method",[this.getClass0$(), xr]) === Boolean.TYPE   && $I$(1,"getReturnType$Class$java_lang_reflect_Method",[this.getClass0$(), yr]) === Boolean.TYPE  ) {
try {
this.setReadMethod$java_lang_reflect_Method(xr);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.beans.IntrospectionException")){
} else {
throw ex;
}
}
}var xw=x.getWriteMethod$();
var yw=y.getWriteMethod$();
try {
if (yw != null  && yw.getDeclaringClass$() === this.getClass0$()  ) {
this.setWriteMethod$java_lang_reflect_Method(yw);
} else {
this.setWriteMethod$java_lang_reflect_Method(xw);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"java.beans.IntrospectionException")){
} else {
throw ex;
}
}
if (y.getPropertyEditorClass$() != null ) {
this.setPropertyEditorClass$Class(y.getPropertyEditorClass$());
} else {
this.setPropertyEditorClass$Class(x.getPropertyEditorClass$());
}this.bound=!!(x.bound | y.bound);
this.constrained=!!(x.constrained | y.constrained);
}, 1);

Clazz.newMeth(C$, 'c$$java_beans_PropertyDescriptor',  function (old) {
;C$.superclazz.c$$java_beans_FeatureDescriptor.apply(this,[old]);C$.$init$.apply(this);
this.propertyTypeRef=old.propertyTypeRef;
this.readMethodRef=old.readMethodRef;
this.writeMethodRef=old.writeMethodRef;
this.propertyEditorClassRef=old.propertyEditorClassRef;
this.writeMethodName=old.writeMethodName;
this.readMethodName=old.readMethodName;
this.baseName=old.baseName;
this.bound=old.bound;
this.constrained=old.constrained;
}, 1);

Clazz.newMeth(C$, 'findPropertyType$java_lang_reflect_Method$java_lang_reflect_Method',  function (readMethod, writeMethod) {
var propertyType=null;
try {
if (readMethod != null ) {
var params=$I$(1,"getParameterTypes$Class$java_lang_reflect_Method",[this.getClass0$(), readMethod]);
if (params.length != 0) {
throw Clazz.new_(Clazz.load('java.beans.IntrospectionException').c$$S,["bad read method arg count: " + readMethod]);
}propertyType=$I$(1,"getReturnType$Class$java_lang_reflect_Method",[this.getClass0$(), readMethod]);
if (propertyType === $I$(2).TYPE ) {
throw Clazz.new_(Clazz.load('java.beans.IntrospectionException').c$$S,["read method " + readMethod.getName$() + " returns void" ]);
}}if (writeMethod != null ) {
var params=$I$(1,"getParameterTypes$Class$java_lang_reflect_Method",[this.getClass0$(), writeMethod]);
if (params.length != 1) {
throw Clazz.new_(Clazz.load('java.beans.IntrospectionException').c$$S,["bad write method arg count: " + writeMethod]);
}if (propertyType != null  && propertyType !== params[0]  ) {
throw Clazz.new_(Clazz.load('java.beans.IntrospectionException').c$$S,["type mismatch between read and write methods"]);
}propertyType=params[0];
}} catch (ex) {
if (Clazz.exceptionOf(ex,"java.beans.IntrospectionException")){
throw ex;
} else {
throw ex;
}
}
return propertyType;
}, p$1);

Clazz.newMeth(C$, 'hashCode$',  function () {
var result=7;
result=37 * result + ((this.getPropertyType$() == null ) ? 0 : this.getPropertyType$().hashCode$());
result=37 * result + ((this.getReadMethod$() == null ) ? 0 : this.getReadMethod$().hashCode$());
result=37 * result + ((this.getWriteMethod$() == null ) ? 0 : this.getWriteMethod$().hashCode$());
result=37 * result + ((this.getPropertyEditorClass$() == null ) ? 0 : this.getPropertyEditorClass$().hashCode$());
result=37 * result + ((this.writeMethodName == null ) ? 0 : this.writeMethodName.hashCode$());
result=37 * result + ((this.readMethodName == null ) ? 0 : this.readMethodName.hashCode$());
result=37 * result + this.getName$().hashCode$();
result=37 * result + ((this.bound == false ) ? 0 : 1);
result=37 * result + ((this.constrained == false ) ? 0 : 1);
return result;
});

Clazz.newMeth(C$, 'getBaseName$',  function () {
if (this.baseName == null ) {
}return this.baseName;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:14 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
