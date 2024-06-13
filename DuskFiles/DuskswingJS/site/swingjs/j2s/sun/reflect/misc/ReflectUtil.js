(function(){var P$=Clazz.newPackage("sun.reflect.misc"),I$=[[0,'java.lang.reflect.Proxy','java.lang.reflect.Modifier']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ReflectUtil");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'forName$S',  function (name) {
return Clazz.forName(name);
}, 1);

Clazz.newMeth(C$, 'newInstance$Class',  function (cls) {
return cls.newInstance$();
}, 1);

Clazz.newMeth(C$, 'ensureMemberAccess$Class$Class$O$I',  function (currentClass, memberClass, target, modifiers) {
return;
}, 1);

Clazz.newMeth(C$, 'conservativeCheckMemberAccess$java_lang_reflect_Member',  function (m) {
}, 1);

Clazz.newMeth(C$, 'checkPackageAccess$Class',  function (clazz) {
}, 1);

Clazz.newMeth(C$, 'checkPackageAccess$S',  function (name) {
}, 1);

Clazz.newMeth(C$, 'isPackageAccessible$Class',  function (clazz) {
return true;
}, 1);

Clazz.newMeth(C$, 'isAncestor$ClassLoader$ClassLoader',  function (p, cl) {
var acl=cl;
do {
acl=acl.getParent$();
if (p === acl ) {
return true;
}} while (acl != null );
return false;
}, 1);

Clazz.newMeth(C$, 'needsPackageAccessCheck$ClassLoader$ClassLoader',  function (from, to) {
return false;
}, 1);

Clazz.newMeth(C$, 'checkProxyPackageAccess$Class',  function (clazz) {
}, 1);

Clazz.newMeth(C$, 'checkProxyPackageAccess$ClassLoader$ClassA',  function (ccl, interfaces) {
}, 1);

Clazz.newMeth(C$, 'isNonPublicProxyClass$Class',  function (cls) {
var name=cls.getName$();
var i=name.lastIndexOf$I(".");
var pkg=(i != -1) ? name.substring$I$I(0, i) : "";
return $I$(1).isProxyClass$Class(cls) && !pkg.equals$O("com.sun.proxy") ;
}, 1);

Clazz.newMeth(C$, 'checkProxyMethod$O$java_lang_reflect_Method',  function (proxy, method) {
if (proxy == null  || !$I$(1,"isProxyClass$Class",[proxy.getClass$()]) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Not a Proxy instance"]);
}if ($I$(2,"isStatic$I",[method.getModifiers$()])) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Can\'t handle static method"]);
}var c=method.getDeclaringClass$();
if (c === Clazz.getClass(java.lang.Object) ) {
var name=method.getName$();
if (name.equals$O("hashCode") || name.equals$O("equals") || name.equals$O("toString")  ) {
return;
}}if (C$.isSuperInterface$Class$Class(proxy.getClass$(), c)) {
return;
}throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Can't handle: " + method]);
}, 1);

Clazz.newMeth(C$, 'isSuperInterface$Class$Class',  function (c, intf) {
for (var i, $i = 0, $$i = c.getInterfaces$(); $i<$$i.length&&((i=($$i[$i])),1);$i++) {
if (i === intf ) {
return true;
}if (C$.isSuperInterface$Class$Class(i, intf)) {
return true;
}}
return false;
}, 1);

Clazz.newMeth(C$, 'isVMAnonymousClass$Class',  function (cls) {
return cls.getName$().indexOf$S("/") >= 0;
}, 1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:49 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
