(function(){var P$=Clazz.newPackage("sun.nio.fs"),I$=[[0,'RuntimePermission','java.nio.ByteBuffer','java.util.ArrayList','java.util.HashMap','java.util.Arrays']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AbstractUserDefinedFileAttributeView", null, null, ['java.nio.file.attribute.UserDefinedFileAttributeView', 'sun.nio.fs.DynamicFileAttributeView']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'checkAccess$S$Z$Z',  function (file, checkRead, checkWrite) {
Clazz.assert(C$, this, function(){return checkRead || checkWrite });
var sm=System.getSecurityManager$();
if (sm != null ) {
if (checkRead) sm.checkRead$S(file);
if (checkWrite) sm.checkWrite$S(file);
sm.checkPermission$java_security_Permission(Clazz.new_($I$(1,1).c$$S,["accessUserDefinedAttributes"]));
}});

Clazz.newMeth(C$, 'name$',  function () {
return "user";
});

Clazz.newMeth(C$, 'setAttribute$S$O',  function (attribute, value) {
var bb;
if (Clazz.instanceOf(value, Clazz.array(Byte.TYPE, -1))) {
bb=$I$(2).wrap$BA(value);
} else {
bb=value;
}this.write$S$java_nio_ByteBuffer(attribute, bb);
});

Clazz.newMeth(C$, 'readAttributes$SA',  function (attributes) {
var names=Clazz.new_($I$(3,1));
for (var name, $name = 0, $$name = attributes; $name<$$name.length&&((name=($$name[$name])),1);$name++) {
if (name.equals$O("*")) {
names=this.list$();
break;
} else {
if (name.length$() == 0) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
names.add$O(name);
}}
var result=Clazz.new_($I$(4,1));
for (var name, $name = names.iterator$(); $name.hasNext$()&&((name=($name.next$())),1);) {
var size=this.size$S(name);
var buf=Clazz.array(Byte.TYPE, [size]);
var n=this.read$S$java_nio_ByteBuffer(name, $I$(2).wrap$BA(buf));
var value=(n == size) ? buf : $I$(5).copyOf$BA$I(buf, n);
result.put$O$O(name, value);
}
return result;
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:48 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
