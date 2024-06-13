(function(){var P$=Clazz.newPackage("java.nio.file.attribute"),I$=[[0,'java.nio.file.attribute.AclEntry','java.util.Collections','java.util.EnumSet','java.nio.file.attribute.AclEntryPermission','java.nio.file.attribute.AclEntryFlag',['java.nio.file.attribute.AclEntry','.Builder'],'java.util.HashSet','StringBuilder']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AclEntry", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Builder',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['hash'],'O',['type','java.nio.file.attribute.AclEntryType','who','java.nio.file.attribute.UserPrincipal','perms','java.util.Set','+flags']]]

Clazz.newMeth(C$, 'c$$java_nio_file_attribute_AclEntryType$java_nio_file_attribute_UserPrincipal$java_util_Set$java_util_Set',  function (type, who, perms, flags) {
;C$.$init$.apply(this);
this.type=type;
this.who=who;
this.perms=perms;
this.flags=flags;
}, 1);

Clazz.newMeth(C$, 'newBuilder$',  function () {
var perms=$I$(2).emptySet$();
var flags=$I$(2).emptySet$();
return Clazz.new_($I$(6,1).c$$java_nio_file_attribute_AclEntryType$java_nio_file_attribute_UserPrincipal$java_util_Set$java_util_Set,[null, null, perms, flags]);
}, 1);

Clazz.newMeth(C$, 'newBuilder$java_nio_file_attribute_AclEntry',  function (entry) {
return Clazz.new_($I$(6,1).c$$java_nio_file_attribute_AclEntryType$java_nio_file_attribute_UserPrincipal$java_util_Set$java_util_Set,[entry.type, entry.who, entry.perms, entry.flags]);
}, 1);

Clazz.newMeth(C$, 'type$',  function () {
return this.type;
});

Clazz.newMeth(C$, 'principal$',  function () {
return this.who;
});

Clazz.newMeth(C$, 'permissions$',  function () {
return Clazz.new_($I$(7,1).c$$java_util_Collection,[this.perms]);
});

Clazz.newMeth(C$, 'flags$',  function () {
return Clazz.new_($I$(7,1).c$$java_util_Collection,[this.flags]);
});

Clazz.newMeth(C$, 'equals$O',  function (ob) {
if (ob === this ) return true;
if (ob == null  || !(Clazz.instanceOf(ob, "java.nio.file.attribute.AclEntry")) ) return false;
var other=ob;
if (this.type !== other.type ) return false;
if (!this.who.equals$O(other.who)) return false;
if (!this.perms.equals$O(other.perms)) return false;
if (!this.flags.equals$O(other.flags)) return false;
return true;
});

Clazz.newMeth(C$, 'hash$I$O',  function (h, o) {
return h * 127 + o.hashCode$();
}, 1);

Clazz.newMeth(C$, 'hashCode$',  function () {
if (this.hash != 0) return this.hash;
var h=this.type.hashCode$();
h=C$.hash$I$O(h, this.who);
h=C$.hash$I$O(h, this.perms);
h=C$.hash$I$O(h, this.flags);
this.hash=h;
return this.hash;
});

Clazz.newMeth(C$, 'toString',  function () {
var sb=Clazz.new_($I$(8,1));
sb.append$S(this.who.getName$());
sb.append$C(":");
for (var perm, $perm = this.perms.iterator$(); $perm.hasNext$()&&((perm=($perm.next$())),1);) {
sb.append$S(perm.name$());
sb.append$C("/");
}
sb.setLength$I(sb.length$() - 1);
sb.append$C(":");
if (!this.flags.isEmpty$()) {
for (var flag, $flag = this.flags.iterator$(); $flag.hasNext$()&&((flag=($flag.next$())),1);) {
sb.append$S(flag.name$());
sb.append$C("/");
}
sb.setLength$I(sb.length$() - 1);
sb.append$C(":");
}sb.append$S(this.type.name$());
return sb.toString();
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.AclEntry, "Builder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['type','java.nio.file.attribute.AclEntryType','who','java.nio.file.attribute.UserPrincipal','perms','java.util.Set','+flags']]]

Clazz.newMeth(C$, 'c$$java_nio_file_attribute_AclEntryType$java_nio_file_attribute_UserPrincipal$java_util_Set$java_util_Set',  function (type, who, perms, flags) {
;C$.$init$.apply(this);
Clazz.assert(C$, this, function(){return perms != null  && flags != null  });
this.type=type;
this.who=who;
this.perms=perms;
this.flags=flags;
}, 1);

Clazz.newMeth(C$, 'build$',  function () {
if (this.type == null ) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Missing type component"]);
if (this.who == null ) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Missing who component"]);
return Clazz.new_($I$(1,1).c$$java_nio_file_attribute_AclEntryType$java_nio_file_attribute_UserPrincipal$java_util_Set$java_util_Set,[this.type, this.who, this.perms, this.flags]);
});

Clazz.newMeth(C$, 'setType$java_nio_file_attribute_AclEntryType',  function (type) {
if (type == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
this.type=type;
return this;
});

Clazz.newMeth(C$, 'setPrincipal$java_nio_file_attribute_UserPrincipal',  function (who) {
if (who == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
this.who=who;
return this;
});

Clazz.newMeth(C$, 'checkSet$java_util_Set$Class',  function (set, type) {
for (var e, $e = set.iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
if (e == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
type.cast$O(e);
}
}, 1);

Clazz.newMeth(C$, 'setPermissions$java_util_Set',  function (perms) {
if (perms.isEmpty$()) {
perms=$I$(2).emptySet$();
} else {
perms=$I$(3).copyOf$java_util_Collection(perms);
C$.checkSet$java_util_Set$Class(perms, Clazz.getClass($I$(4)));
}this.perms=perms;
return this;
});

Clazz.newMeth(C$, 'setPermissions$java_nio_file_attribute_AclEntryPermissionA',  function (perms) {
var set=$I$(3,"noneOf$Class",[Clazz.getClass($I$(4))]);
for (var p, $p = 0, $$p = perms; $p<$$p.length&&((p=($$p[$p])),1);$p++) {
if (p == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
set.add$O(p);
}
this.perms=set;
return this;
});

Clazz.newMeth(C$, 'setFlags$java_util_Set',  function (flags) {
if (flags.isEmpty$()) {
flags=$I$(2).emptySet$();
} else {
flags=$I$(3).copyOf$java_util_Collection(flags);
C$.checkSet$java_util_Set$Class(flags, Clazz.getClass($I$(5)));
}this.flags=flags;
return this;
});

Clazz.newMeth(C$, 'setFlags$java_nio_file_attribute_AclEntryFlagA',  function (flags) {
var set=$I$(3,"noneOf$Class",[Clazz.getClass($I$(5))]);
for (var f, $f = 0, $$f = flags; $f<$$f.length&&((f=($$f[$f])),1);$f++) {
if (f == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
set.add$O(f);
}
this.flags=set;
return this;
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:23 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
