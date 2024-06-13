(function(){var P$=Clazz.newPackage("java.nio.file.attribute"),I$=[[0,'StringBuilder','java.nio.file.attribute.PosixFilePermission','java.util.EnumSet','java.util.HashSet','java.util.Collections']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PosixFilePermissions");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'writeBits$StringBuilder$Z$Z$Z',  function (sb, r, w, x) {
if (r) {
sb.append$C("r");
} else {
sb.append$C("-");
}if (w) {
sb.append$C("w");
} else {
sb.append$C("-");
}if (x) {
sb.append$C("x");
} else {
sb.append$C("-");
}}, 1);

Clazz.newMeth(C$, 'toString$java_util_Set',  function (perms) {
var sb=Clazz.new_($I$(1,1).c$$I,[9]);
C$.writeBits$StringBuilder$Z$Z$Z(sb, perms.contains$O($I$(2).OWNER_READ), perms.contains$O($I$(2).OWNER_WRITE), perms.contains$O($I$(2).OWNER_EXECUTE));
C$.writeBits$StringBuilder$Z$Z$Z(sb, perms.contains$O($I$(2).GROUP_READ), perms.contains$O($I$(2).GROUP_WRITE), perms.contains$O($I$(2).GROUP_EXECUTE));
C$.writeBits$StringBuilder$Z$Z$Z(sb, perms.contains$O($I$(2).OTHERS_READ), perms.contains$O($I$(2).OTHERS_WRITE), perms.contains$O($I$(2).OTHERS_EXECUTE));
return sb.toString();
}, 1);

Clazz.newMeth(C$, 'isSet$C$C',  function (c, setValue) {
if (c == setValue) return true;
if (c == "-") return false;
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid mode"]);
}, 1);

Clazz.newMeth(C$, 'isR$C',  function (c) {
return C$.isSet$C$C(c, "r");
}, 1);

Clazz.newMeth(C$, 'isW$C',  function (c) {
return C$.isSet$C$C(c, "w");
}, 1);

Clazz.newMeth(C$, 'isX$C',  function (c) {
return C$.isSet$C$C(c, "x");
}, 1);

Clazz.newMeth(C$, 'fromString$S',  function (perms) {
if (perms.length$() != 9) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid mode"]);
var result=$I$(3,"noneOf$Class",[Clazz.getClass($I$(2))]);
if (C$.isR$C(perms.charAt$I(0))) result.add$O($I$(2).OWNER_READ);
if (C$.isW$C(perms.charAt$I(1))) result.add$O($I$(2).OWNER_WRITE);
if (C$.isX$C(perms.charAt$I(2))) result.add$O($I$(2).OWNER_EXECUTE);
if (C$.isR$C(perms.charAt$I(3))) result.add$O($I$(2).GROUP_READ);
if (C$.isW$C(perms.charAt$I(4))) result.add$O($I$(2).GROUP_WRITE);
if (C$.isX$C(perms.charAt$I(5))) result.add$O($I$(2).GROUP_EXECUTE);
if (C$.isR$C(perms.charAt$I(6))) result.add$O($I$(2).OTHERS_READ);
if (C$.isW$C(perms.charAt$I(7))) result.add$O($I$(2).OTHERS_WRITE);
if (C$.isX$C(perms.charAt$I(8))) result.add$O($I$(2).OTHERS_EXECUTE);
return result;
}, 1);

Clazz.newMeth(C$, 'asFileAttribute$java_util_Set',  function (perms) {
perms=Clazz.new_($I$(4,1).c$$java_util_Collection,[perms]);
for (var p, $p = perms.iterator$(); $p.hasNext$()&&((p=($p.next$())),1);) {
if (p == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
}
var value=perms;
return ((P$.PosixFilePermissions$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "PosixFilePermissions$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.nio.file.attribute.FileAttribute', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'name$',  function () {
return "posix:permissions";
});

Clazz.newMeth(C$, 'value$',  function () {
return $I$(5).unmodifiableSet$java_util_Set(this.$finals$.value);
});
})()
), Clazz.new_(P$.PosixFilePermissions$1.$init$,[this, {value:value}]));
}, 1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:23 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
