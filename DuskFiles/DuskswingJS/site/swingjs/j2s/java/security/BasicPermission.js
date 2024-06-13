(function(){var P$=Clazz.newPackage("java.security"),p$1={},p$2={},I$=[[0,'java.security.BasicPermissionCollection','java.io.ObjectStreamField','java.util.Hashtable','java.util.HashMap','java.util.Collections']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BasicPermission", null, 'java.security.Permission', 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['wildcard','exitVM'],'S',['path']]]

Clazz.newMeth(C$, 'init$S',  function (name) {
if (name == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["name can\'t be null"]);
var len=name.length$();
if (len == 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["name can\'t be empty"]);
}var last=name.charAt$I(len - 1);
if (last == "*" && (len == 1 || name.charAt$I(len - 2) == "." ) ) {
this.wildcard=true;
if (len == 1) {
this.path="";
} else {
this.path=name.substring$I$I(0, len - 1);
}} else {
if (name.equals$O("exitVM")) {
this.wildcard=true;
this.path="exitVM.";
this.exitVM=true;
} else {
this.path=name;
}}}, p$1);

Clazz.newMeth(C$, 'c$$S',  function (name) {
;C$.superclazz.c$$S.apply(this,[name]);C$.$init$.apply(this);
p$1.init$S.apply(this, [name]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S',  function (name, actions) {
;C$.superclazz.c$$S.apply(this,[name]);C$.$init$.apply(this);
p$1.init$S.apply(this, [name]);
}, 1);

Clazz.newMeth(C$, 'implies$java_security_Permission',  function (p) {
if ((p == null ) || (p.getClass$() !== this.getClass$() ) ) return false;
var that=p;
if (this.wildcard) {
if (that.wildcard) {
return that.path.startsWith$S(this.path);
} else {
return (that.path.length$() > this.path.length$()) && that.path.startsWith$S(this.path) ;
}} else {
if (that.wildcard) {
return false;
} else {
return this.path.equals$O(that.path);
}}});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (obj === this ) return true;
if ((obj == null ) || (obj.getClass$() !== this.getClass$() ) ) return false;
var bp=obj;
return this.getName$().equals$O(bp.getName$());
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.getName$().hashCode$();
});

Clazz.newMeth(C$, 'getActions$',  function () {
return "";
});

Clazz.newMeth(C$, 'newPermissionCollection$',  function () {
return Clazz.new_([this.getClass$()],$I$(1,1).c$$Class);
});

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream',  function (s) {
s.defaultReadObject$();
p$1.init$S.apply(this, [this.getName$()]);
}, p$1);

Clazz.newMeth(C$, 'getCanonicalName$',  function () {
return this.exitVM ? "exitVM.*" : this.getName$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:24 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
