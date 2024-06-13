(function(){var P$=Clazz.newPackage("sun.misc"),p$1={},p$2={},I$=[[0,['sun.misc.SoftCache','.ValueCell'],'sun.misc.SoftCache',['sun.misc.SoftCache','.Entry'],'java.util.HashMap',['sun.misc.SoftCache','.EntrySet']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SoftCache", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.AbstractMap', 'java.util.Map');
C$.$classes$=[['ValueCell',10],['Entry',2],['EntrySet',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.entrySet=null;
},1);

C$.$fields$=[['O',['hash','java.util.Map','entrySet','java.util.Set']]]

Clazz.newMeth(C$, 'processQueue',  function () {
}, p$2);

Clazz.newMeth(C$, 'c$$I$F',  function (initialCapacity, loadFactor) {
Clazz.super_(C$, this);
this.hash=Clazz.new_($I$(4,1).c$$I$F,[initialCapacity, loadFactor]);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (initialCapacity) {
Clazz.super_(C$, this);
this.hash=Clazz.new_($I$(4,1).c$$I,[initialCapacity]);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.hash=Clazz.new_($I$(4,1));
}, 1);

Clazz.newMeth(C$, 'size$',  function () {
return this.entrySet$().size$();
});

Clazz.newMeth(C$, 'isEmpty$',  function () {
return this.entrySet$().isEmpty$();
});

Clazz.newMeth(C$, 'containsKey$O',  function (key) {
return $I$(1,"strip$O$Z",[this.hash.get$O(key), false]) != null ;
});

Clazz.newMeth(C$, 'fill$O',  function (key) {
return null;
});

Clazz.newMeth(C$, 'get$O',  function (key) {
p$2.processQueue.apply(this, []);
var v=this.hash.get$O(key);
if (v == null ) {
v=this.fill$O(key);
if (v != null ) {
this.hash.put$O$O(key, $I$(1).create$O$O(key, v));
return v;
}}return $I$(1).strip$O$Z(v, false);
});

Clazz.newMeth(C$, 'put$O$O',  function (key, value) {
p$2.processQueue.apply(this, []);
var vc=$I$(1).create$O$O(key, value);
return $I$(1,"strip$O$Z",[this.hash.put$O$O(key, vc), true]);
});

Clazz.newMeth(C$, 'remove$O',  function (key) {
p$2.processQueue.apply(this, []);
return $I$(1,"strip$O$Z",[this.hash.remove$O(key), true]);
});

Clazz.newMeth(C$, 'clear$',  function () {
p$2.processQueue.apply(this, []);
this.hash.clear$();
});

Clazz.newMeth(C$, 'valEquals$O$O',  function (o1, o2) {
return (o1 == null ) ? (o2 == null ) : o1.equals$O(o2);
}, 1);

Clazz.newMeth(C$, 'entrySet$',  function () {
if (this.entrySet == null ) this.entrySet=Clazz.new_($I$(5,1),[this, null]);
return this.entrySet;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.SoftCache, "ValueCell", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['+key','+value']]
,['I',['dropped'],'O',['INVALID_KEY','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$O$O',  function (key, value) {
;C$.$init$.apply(this);
this.value=value;
this.key=key;
}, 1);

Clazz.newMeth(C$, 'create$O$O',  function (key, value) {
if (value == null ) return null;
return Clazz.new_(C$.c$$O$O,[key, value]);
}, 1);

Clazz.newMeth(C$, 'strip$O$Z',  function (val, drop) {
if (val == null ) return null;
var vc=val;
var o=vc.value;
if (drop) p$1.drop.apply(vc, []);
return o;
}, 1);

Clazz.newMeth(C$, 'isValid',  function () {
return (this.key !== C$.INVALID_KEY );
}, p$1);

Clazz.newMeth(C$, 'drop',  function () {
this.key=C$.INVALID_KEY;
++C$.dropped;
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.INVALID_KEY= Clazz.new_();
C$.dropped=0;
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SoftCache, "Entry", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, [['java.util.Map','java.util.Map.Entry']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['ent','java.util.Map.Entry','value','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$java_util_Map_Entry$O',  function (ent, value) {
;C$.$init$.apply(this);
this.ent=ent;
this.value=value;
}, 1);

Clazz.newMeth(C$, 'getKey$',  function () {
return this.ent.getKey$();
});

Clazz.newMeth(C$, 'getValue$',  function () {
return this.value;
});

Clazz.newMeth(C$, 'setValue$O',  function (value) {
return this.ent.setValue$O($I$(1,"create$O$O",[this.ent.getKey$(), value]));
});

Clazz.newMeth(C$, 'equals$O',  function (o) {
if (!(Clazz.instanceOf(o, "java.util.Map.Entry"))) return false;
var e=o;
return ($I$(2,"valEquals$O$O",[this.ent.getKey$(), e.getKey$()]) && $I$(2,"valEquals$O$O",[this.value, e.getValue$()]) );
});

Clazz.newMeth(C$, 'hashCode$',  function () {
var k;
return ((((k=this.getKey$()) == null ) ? 0 : k.hashCode$()) ^ ((this.value == null ) ? 0 : this.value.hashCode$()));
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SoftCache, "EntrySet", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.util.AbstractSet');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.hashEntries=this.b$['sun.misc.SoftCache'].hash.entrySet$();
},1);

C$.$fields$=[['O',['hashEntries','java.util.Set']]]

Clazz.newMeth(C$, 'iterator$',  function () {
return ((P$.SoftCache$EntrySet$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "SoftCache$EntrySet$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Iterator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.hashIterator=this.b$['sun.misc.SoftCache.EntrySet'].hashEntries.iterator$();
this.next=null;
},1);

C$.$fields$=[['O',['hashIterator','java.util.Iterator','next','sun.misc.SoftCache.Entry']]]

Clazz.newMeth(C$, 'hasNext$',  function () {
while (this.hashIterator.hasNext$()){
var ent=this.hashIterator.next$();
var vc=ent.getValue$();
var v=null;
if ((vc != null ) && ((v=vc.value) == null ) ) {
continue;
}this.next=Clazz.new_($I$(3,1).c$$java_util_Map_Entry$O,[this, null, ent, v]);
return true;
}
return false;
});

Clazz.newMeth(C$, 'next$',  function () {
if ((this.next == null ) && !this.hasNext$() ) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
var e=this.next;
this.next=null;
return e;
});

Clazz.newMeth(C$, 'remove$',  function () {
this.hashIterator.remove$();
});
})()
), Clazz.new_(P$.SoftCache$EntrySet$1.$init$,[this, null]));
});

Clazz.newMeth(C$, 'isEmpty$',  function () {
return !(this.iterator$().hasNext$());
});

Clazz.newMeth(C$, 'size$',  function () {
var j=0;
for (var i=this.iterator$(); i.hasNext$(); i.next$()) ++j;

return j;
});

Clazz.newMeth(C$, 'remove$O',  function (o) {
p$2.processQueue.apply(this.b$['sun.misc.SoftCache'], []);
if (Clazz.instanceOf(o, "sun.misc.SoftCache.Entry")) return this.hashEntries.remove$O((o).ent);
 else return false;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:47 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
