(function(){var P$=Clazz.newPackage("sun.reflect.annotation"),p$1={},I$=[[0,'AssertionError','java.lang.reflect.Array','java.lang.reflect.Proxy','java.util.Arrays']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AnnotationInvocationHandler", null, null, 'java.lang.reflect.InvocationHandler');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.memberMethods=null;
},1);

C$.$fields$=[['O',['type','Class','memberValues','java.util.Map','memberMethods','java.lang.reflect.Method[]']]]

Clazz.newMeth(C$, 'c$$Class$java_util_Map',  function (type, memberValues) {
;C$.$init$.apply(this);
this.type=type;
this.memberValues=memberValues;
}, 1);

Clazz.newMeth(C$, 'invoke$O$java_lang_reflect_Method$OA',  function (proxy, method, args) {
var member=method.getName$();
var paramTypes=method.getParameterTypes$();
if (member.equals$O("equals") && paramTypes.length == 1  && paramTypes[0] === Clazz.getClass(java.lang.Object)  ) return p$1.equalsImpl$O.apply(this, [args[0]]);
if (paramTypes.length != 0) throw Clazz.new_($I$(1,1).c$$O,["Too many parameters for an annotation method"]);
switch (member) {
case "toString":
return p$1.toStringImpl.apply(this, []);
case "hashCode":
return Integer.valueOf$I(p$1.hashCodeImpl.apply(this, []));
case "annotationType":
return this.type;
}
var result=this.memberValues.get$O(member);
if (result.getClass$().isArray$() && $I$(2).getLength$O(result) != 0 ) result=p$1.cloneArray$O.apply(this, [result]);
return result;
});

Clazz.newMeth(C$, 'toStringImpl',  function () {
return "[" + this.type + "]" ;
}, p$1);

Clazz.newMeth(C$, 'cloneArray$O',  function (array) {
var type=array.getClass$();
if (type === Clazz.array(Byte.TYPE, -1) ) {
var byteArray=array;
return byteArray.clone$();
}if (type === Clazz.array(Character.TYPE, -1) ) {
var charArray=array;
return charArray.clone$();
}if (type === Clazz.array(Double.TYPE, -1) ) {
var doubleArray=array;
return doubleArray.clone$();
}if (type === Clazz.array(Float.TYPE, -1) ) {
var floatArray=array;
return floatArray.clone$();
}if (type === Clazz.array(Integer.TYPE, -1) ) {
var intArray=array;
return intArray.clone$();
}if (type === Clazz.array(Long.TYPE, -1) ) {
var longArray=array;
return longArray.clone$();
}if (type === Clazz.array(Short.TYPE, -1) ) {
var shortArray=array;
return shortArray.clone$();
}if (type === Clazz.array(Boolean.TYPE, -1) ) {
var booleanArray=array;
return booleanArray.clone$();
}var objectArray=array;
return objectArray.clone$();
}, p$1);

Clazz.newMeth(C$, 'equalsImpl$O',  function (o) {
if (o === this ) return Boolean.valueOf$Z(true);
if (!this.type.isInstance$O(o)) return Boolean.valueOf$Z(false);
for (var memberMethod, $memberMethod = 0, $$memberMethod = p$1.getMemberMethods.apply(this, []); $memberMethod<$$memberMethod.length&&((memberMethod=($$memberMethod[$memberMethod])),1);$memberMethod++) {
var member=memberMethod.getName$();
var ourValue=this.memberValues.get$O(member);
var hisValue=null;
var hisHandler=p$1.asOneOfUs$O.apply(this, [o]);
if (hisHandler != null ) {
hisValue=hisHandler.memberValues.get$O(member);
} else {
try {
hisValue=memberMethod.invoke$O$OA(o, Clazz.array(java.lang.Object, -1, []));
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.lang.reflect.InvocationTargetException")){
var e = e$$;
{
return Boolean.valueOf$Z(false);
}
} else if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var e = e$$;
{
throw Clazz.new_($I$(1,1).c$$O,[e]);
}
} else {
throw e$$;
}
}
}if (!C$.memberValueEquals$O$O(ourValue, hisValue)) return Boolean.valueOf$Z(false);
}
return Boolean.valueOf$Z(true);
}, p$1);

Clazz.newMeth(C$, 'asOneOfUs$O',  function (o) {
if ($I$(3,"isProxyClass$Class",[o.getClass$()])) {
var handler=$I$(3).getInvocationHandler$O(o);
if (Clazz.instanceOf(handler, "sun.reflect.annotation.AnnotationInvocationHandler")) return handler;
}return null;
}, p$1);

Clazz.newMeth(C$, 'memberValueEquals$O$O',  function (v1, v2) {
var type=v1.getClass$();
if (!type.isArray$()) return v1.equals$O(v2);
if (Clazz.instanceOf(v1, Clazz.array(java.lang.Object, -1)) && Clazz.instanceOf(v2, Clazz.array(java.lang.Object, -1)) ) return $I$(4).equals$OA$OA(v1, v2);
if (v2.getClass$() !== type ) return false;
if (type === Clazz.array(Byte.TYPE, -1) ) return $I$(4).equals$BA$BA(v1, v2);
if (type === Clazz.array(Character.TYPE, -1) ) return $I$(4).equals$CA$CA(v1, v2);
if (type === Clazz.array(Double.TYPE, -1) ) return $I$(4).equals$DA$DA(v1, v2);
if (type === Clazz.array(Float.TYPE, -1) ) return $I$(4).equals$FA$FA(v1, v2);
if (type === Clazz.array(Integer.TYPE, -1) ) return $I$(4).equals$IA$IA(v1, v2);
if (type === Clazz.array(Long.TYPE, -1) ) return $I$(4).equals$JA$JA(v1, v2);
if (type === Clazz.array(Short.TYPE, -1) ) return $I$(4).equals$HA$HA(v1, v2);
Clazz.assert(C$, this, function(){return type === Clazz.array(Boolean.TYPE, -1) });
return $I$(4).equals$ZA$ZA(v1, v2);
}, 1);

Clazz.newMeth(C$, 'getMemberMethods',  function () {
if (this.memberMethods == null ) {
this.memberMethods=this.type.getDeclaredMethods$();
}return this.memberMethods;
}, p$1);

Clazz.newMeth(C$, 'hashCodeImpl',  function () {
var result=0;
for (var e, $e = this.memberValues.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
result+=(127 * e.getKey$().hashCode$()) ^ C$.memberValueHashCode$O(e.getValue$());
}
return result;
}, p$1);

Clazz.newMeth(C$, 'memberValueHashCode$O',  function (value) {
var type=value.getClass$();
if (!type.isArray$()) return value.hashCode$();
if (type === Clazz.array(Byte.TYPE, -1) ) return $I$(4).hashCode$BA(value);
if (type === Clazz.array(Character.TYPE, -1) ) return $I$(4).hashCode$CA(value);
if (type === Clazz.array(Double.TYPE, -1) ) return $I$(4).hashCode$DA(value);
if (type === Clazz.array(Float.TYPE, -1) ) return $I$(4).hashCode$FA(value);
if (type === Clazz.array(Integer.TYPE, -1) ) return $I$(4).hashCode$IA(value);
if (type === Clazz.array(Long.TYPE, -1) ) return $I$(4).hashCode$JA(value);
if (type === Clazz.array(Short.TYPE, -1) ) return $I$(4).hashCode$HA(value);
if (type === Clazz.array(Boolean.TYPE, -1) ) return $I$(4).hashCode$ZA(value);
return $I$(4).hashCode$OA(value);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:49 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
