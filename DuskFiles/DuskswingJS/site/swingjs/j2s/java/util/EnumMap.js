(function(){var P$=java.util,p$1={},I$=[[0,['java.util.EnumMap','.KeyIterator'],['java.util.EnumMap','.ValueIterator'],['java.util.EnumMap','.EntryIterator'],'java.lang.reflect.Array',['java.util.AbstractMap','.SimpleEntry'],['java.util.EnumMap','.EntryIterator','.Entry'],'Enum','java.util.Arrays',['java.util.EnumMap','.KeySet'],['java.util.EnumMap','.Values'],['java.util.EnumMap','.EntrySet'],'AssertionError']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EnumMap", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.AbstractMap', ['java.io.Serializable', 'Cloneable']);
C$.$classes$=[['KeySet',2],['Values',2],['EntrySet',2],['EnumMapIterator',1026],['KeyIterator',2],['ValueIterator',2],['EntryIterator',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.size=0;
},1);

C$.$fields$=[['I',['size'],'O',['keyType','Class','keyUniverse','_.K[]','vals','Object[]','entrySet','java.util.Set']]
,['O',['NULL','java.lang.Object','ZERO_LENGTH_ENUM_ARRAY','Enum[]']]]

Clazz.newMeth(C$, 'maskNull$O',  function (value) {
return (value == null  ? C$.NULL : value);
}, p$1);

Clazz.newMeth(C$, 'unmaskNull$O',  function (value) {
return (value === C$.NULL  ? null : value);
}, p$1);

Clazz.newMeth(C$, 'c$$Class',  function (keyType) {
Clazz.super_(C$, this);
this.keyType=keyType;
this.keyUniverse=C$.getKeyUniverse$Class(keyType);
this.vals=Clazz.array(java.lang.Object, [this.keyUniverse.length]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_EnumMap',  function (m) {
Clazz.super_(C$, this);
this.keyType=m.keyType;
this.keyUniverse=m.keyUniverse;
this.vals=m.vals.clone$();
this.size=m.size;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Map',  function (m) {
Clazz.super_(C$, this);
if (Clazz.instanceOf(m, "java.util.EnumMap")) {
var em=m;
this.keyType=em.keyType;
this.keyUniverse=em.keyUniverse;
this.vals=em.vals.clone$();
this.size=em.size;
} else {
if (m.isEmpty$()) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Specified map is empty"]);
this.keyType=m.keySet$().iterator$().next$().getDeclaringClass$();
this.keyUniverse=C$.getKeyUniverse$Class(this.keyType);
this.vals=Clazz.array(java.lang.Object, [this.keyUniverse.length]);
this.putAll$java_util_Map(m);
}}, 1);

Clazz.newMeth(C$, 'size$',  function () {
return this.size;
});

Clazz.newMeth(C$, 'containsValue$O',  function (value) {
value=p$1.maskNull$O.apply(this, [value]);
for (var val, $val = 0, $$val = this.vals; $val<$$val.length&&((val=($$val[$val])),1);$val++) if (value.equals$O(val)) return true;

return false;
});

Clazz.newMeth(C$, 'containsKey$O',  function (key) {
return p$1.isValidKey$O.apply(this, [key]) && this.vals[(key).ordinal$()] != null  ;
});

Clazz.newMeth(C$, 'containsMapping$O$O',  function (key, value) {
return p$1.isValidKey$O.apply(this, [key]) && p$1.maskNull$O.apply(this, [value]).equals$O(this.vals[(key).ordinal$()]) ;
}, p$1);

Clazz.newMeth(C$, 'get$O',  function (key) {
return (p$1.isValidKey$O.apply(this, [key]) ? p$1.unmaskNull$O.apply(this, [this.vals[(key).ordinal$()]]) : null);
});

Clazz.newMeth(C$, ['put$Enum$O','put$O$O'],  function (key, value) {
p$1.typeCheck$Enum.apply(this, [key]);
var index=key.ordinal$();
var oldValue=this.vals[index];
this.vals[index]=p$1.maskNull$O.apply(this, [value]);
if (oldValue == null ) ++this.size;
return p$1.unmaskNull$O.apply(this, [oldValue]);
});

Clazz.newMeth(C$, 'remove$O',  function (key) {
if (!p$1.isValidKey$O.apply(this, [key])) return null;
var index=(key).ordinal$();
var oldValue=this.vals[index];
this.vals[index]=null;
if (oldValue != null ) --this.size;
return p$1.unmaskNull$O.apply(this, [oldValue]);
});

Clazz.newMeth(C$, 'removeMapping$O$O',  function (key, value) {
if (!p$1.isValidKey$O.apply(this, [key])) return false;
var index=(key).ordinal$();
if (p$1.maskNull$O.apply(this, [value]).equals$O(this.vals[index])) {
this.vals[index]=null;
--this.size;
return true;
}return false;
}, p$1);

Clazz.newMeth(C$, 'isValidKey$O',  function (key) {
if (key == null ) return false;
var keyClass=key.getClass$();
return keyClass === this.keyType  || keyClass.getSuperclass$() === this.keyType  ;
}, p$1);

Clazz.newMeth(C$, 'putAll$java_util_Map',  function (m) {
if (Clazz.instanceOf(m, "java.util.EnumMap")) {
var em=m;
if (em.keyType !== this.keyType ) {
if (em.isEmpty$()) return;
throw Clazz.new_(Clazz.load('ClassCastException').c$$S,[em.keyType + " != " + this.keyType ]);
}for (var i=0; i < this.keyUniverse.length; i++) {
var emValue=em.vals[i];
if (emValue != null ) {
if (this.vals[i] == null ) ++this.size;
this.vals[i]=emValue;
}}
} else {
C$.superclazz.prototype.putAll$java_util_Map.apply(this, [m]);
}});

Clazz.newMeth(C$, 'clear$',  function () {
$I$(8).fill$OA$O(this.vals, null);
this.size=0;
});

Clazz.newMeth(C$, 'keySet$',  function () {
var ks=this.keySet;
if (ks != null ) return ks;
 else return this.keySet=Clazz.new_($I$(9,1),[this, null]);
});

Clazz.newMeth(C$, 'values$',  function () {
var vs=this.values;
if (vs != null ) return vs;
 else return this.values=Clazz.new_($I$(10,1),[this, null]);
});

Clazz.newMeth(C$, 'entrySet$',  function () {
var es=this.entrySet;
if (es != null ) return es;
 else return this.entrySet=Clazz.new_($I$(11,1),[this, null]);
});

Clazz.newMeth(C$, 'equals$O',  function (o) {
if (this === o ) return true;
if (Clazz.instanceOf(o, "java.util.EnumMap")) return p$1.equals$java_util_EnumMap.apply(this, [o]);
if (!(Clazz.instanceOf(o, "java.util.Map"))) return false;
var m=o;
if (this.size != m.size$()) return false;
for (var i=0; i < this.keyUniverse.length; i++) {
if (null != this.vals[i] ) {
var key=this.keyUniverse[i];
var value=p$1.unmaskNull$O.apply(this, [this.vals[i]]);
if (null == value ) {
if (!((null == m.get$O(key) ) && m.containsKey$O(key) )) return false;
} else {
if (!value.equals$O(m.get$O(key))) return false;
}}}
return true;
});

Clazz.newMeth(C$, 'equals$java_util_EnumMap',  function (em) {
if (em.keyType !== this.keyType ) return this.size == 0 && em.size == 0 ;
for (var i=0; i < this.keyUniverse.length; i++) {
var ourValue=this.vals[i];
var hisValue=em.vals[i];
if (hisValue !== ourValue  && (hisValue == null  || !hisValue.equals$O(ourValue) ) ) return false;
}
return true;
}, p$1);

Clazz.newMeth(C$, 'hashCode$',  function () {
var h=0;
for (var i=0; i < this.keyUniverse.length; i++) {
if (null != this.vals[i] ) {
h+=p$1.entryHashCode$I.apply(this, [i]);
}}
return h;
});

Clazz.newMeth(C$, 'entryHashCode$I',  function (index) {
return (this.keyUniverse[index].hashCode$() ^ this.vals[index].hashCode$());
}, p$1);

Clazz.newMeth(C$, 'clone$',  function () {
var result=null;
try {
result=C$.superclazz.prototype.clone$.apply(this, []);
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(12,1));
} else {
throw e;
}
}
result.vals=result.vals.clone$();
result.entrySet=null;
return result;
});

Clazz.newMeth(C$, 'typeCheck$Enum',  function (key) {
var keyClass=key.getClass$();
if (keyClass !== this.keyType  && keyClass.getSuperclass$() !== this.keyType  ) throw Clazz.new_(Clazz.load('ClassCastException').c$$S,[keyClass + " != " + this.keyType ]);
}, p$1);

Clazz.newMeth(C$, 'getKeyUniverse$Class',  function (keyType) {
return keyType.getEnumConstants$();
}, 1);

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream',  function (s) {
s.defaultWriteObject$();
s.writeInt$I(this.size);
var entriesToBeWritten=this.size;
for (var i=0; entriesToBeWritten > 0; i++) {
if (null != this.vals[i] ) {
s.writeObject$O(this.keyUniverse[i]);
s.writeObject$O(p$1.unmaskNull$O.apply(this, [this.vals[i]]));
--entriesToBeWritten;
}}
}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream',  function (s) {
s.defaultReadObject$();
this.keyUniverse=C$.getKeyUniverse$Class(this.keyType);
this.vals=Clazz.array(java.lang.Object, [this.keyUniverse.length]);
var size=s.readInt$();
for (var i=0; i < size; i++) {
var key=s.readObject$();
var value=s.readObject$();
this.put$Enum$O(key, value);
}
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.NULL=((P$.EnumMap$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "EnumMap$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'hashCode$',  function () {
return 0;
});

Clazz.newMeth(C$, 'toString',  function () {
return "java.util.EnumMap.NULL";
});
})()
), Clazz.new_(P$.EnumMap$1.$init$,[this, null]));
C$.ZERO_LENGTH_ENUM_ARRAY=Clazz.array($I$(7), [0]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.EnumMap, "KeySet", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.util.AbstractSet');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'iterator$',  function () {
return Clazz.new_($I$(1,1),[this, null]);
});

Clazz.newMeth(C$, 'size$',  function () {
return this.b$['java.util.EnumMap'].size;
});

Clazz.newMeth(C$, 'contains$O',  function (o) {
return this.b$['java.util.EnumMap'].containsKey$O.apply(this.b$['java.util.EnumMap'], [o]);
});

Clazz.newMeth(C$, 'remove$O',  function (o) {
var oldSize=this.b$['java.util.EnumMap'].size;
this.b$['java.util.EnumMap'].remove$O.apply(this.b$['java.util.EnumMap'], [o]);
return this.b$['java.util.EnumMap'].size != oldSize;
});

Clazz.newMeth(C$, 'clear$',  function () {
this.b$['java.util.EnumMap'].clear$.apply(this.b$['java.util.EnumMap'], []);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EnumMap, "Values", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.util.AbstractCollection');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'iterator$',  function () {
return Clazz.new_($I$(2,1),[this, null]);
});

Clazz.newMeth(C$, 'size$',  function () {
return this.b$['java.util.EnumMap'].size;
});

Clazz.newMeth(C$, 'contains$O',  function (o) {
return this.b$['java.util.EnumMap'].containsValue$O.apply(this.b$['java.util.EnumMap'], [o]);
});

Clazz.newMeth(C$, 'remove$O',  function (o) {
o=p$1.maskNull$O.apply(this.b$['java.util.EnumMap'], [o]);
for (var i=0; i < this.b$['java.util.EnumMap'].vals.length; i++) {
if (o.equals$O(this.b$['java.util.EnumMap'].vals[i])) {
this.b$['java.util.EnumMap'].vals[i]=null;
--this.b$['java.util.EnumMap'].size;
return true;
}}
return false;
});

Clazz.newMeth(C$, 'clear$',  function () {
this.b$['java.util.EnumMap'].clear$.apply(this.b$['java.util.EnumMap'], []);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EnumMap, "EntrySet", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.util.AbstractSet');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'iterator$',  function () {
return Clazz.new_($I$(3,1),[this, null]);
});

Clazz.newMeth(C$, 'contains$O',  function (o) {
if (!(Clazz.instanceOf(o, "java.util.Map.Entry"))) return false;
var entry=o;
return p$1.containsMapping$O$O.apply(this.b$['java.util.EnumMap'], [entry.getKey$(), entry.getValue$()]);
});

Clazz.newMeth(C$, 'remove$O',  function (o) {
if (!(Clazz.instanceOf(o, "java.util.Map.Entry"))) return false;
var entry=o;
return p$1.removeMapping$O$O.apply(this.b$['java.util.EnumMap'], [entry.getKey$(), entry.getValue$()]);
});

Clazz.newMeth(C$, 'size$',  function () {
return this.b$['java.util.EnumMap'].size;
});

Clazz.newMeth(C$, 'clear$',  function () {
this.b$['java.util.EnumMap'].clear$.apply(this.b$['java.util.EnumMap'], []);
});

Clazz.newMeth(C$, 'toArray$',  function () {
return p$1.fillEntryArray$OA.apply(this, [Clazz.array(java.lang.Object, [this.b$['java.util.EnumMap'].size])]);
});

Clazz.newMeth(C$, 'toArray$OA',  function (a) {
var size=this.size$();
if (a.length < size) a=Clazz.array(a.getClass$().getComponentType$(), size);
if (a.length > size) a[size]=null;
return p$1.fillEntryArray$OA.apply(this, [a]);
});

Clazz.newMeth(C$, 'fillEntryArray$OA',  function (a) {
var j=0;
for (var i=0; i < this.b$['java.util.EnumMap'].vals.length; i++) if (this.b$['java.util.EnumMap'].vals[i] != null ) a[j++]=Clazz.new_([this.b$['java.util.EnumMap'].keyUniverse[i], p$1.unmaskNull$O.apply(this.b$['java.util.EnumMap'], [this.b$['java.util.EnumMap'].vals[i]])],$I$(5,1).c$$O$O);

return a;
}, p$1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EnumMap, "EnumMapIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.index=0;
this.lastReturnedIndex=-1;
},1);

C$.$fields$=[['I',['index','lastReturnedIndex']]]

Clazz.newMeth(C$, 'hasNext$',  function () {
while (this.index < this.b$['java.util.EnumMap'].vals.length && this.b$['java.util.EnumMap'].vals[this.index] == null  )++this.index;

return this.index != this.b$['java.util.EnumMap'].vals.length;
});

Clazz.newMeth(C$, 'remove$',  function () {
p$1.checkLastReturnedIndex.apply(this, []);
if (this.b$['java.util.EnumMap'].vals[this.lastReturnedIndex] != null ) {
this.b$['java.util.EnumMap'].vals[this.lastReturnedIndex]=null;
--this.b$['java.util.EnumMap'].size;
}this.lastReturnedIndex=-1;
});

Clazz.newMeth(C$, 'checkLastReturnedIndex',  function () {
if (this.lastReturnedIndex < 0) throw Clazz.new_(Clazz.load('IllegalStateException'));
}, p$1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EnumMap, "KeyIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.EnumMap','.EnumMapIterator']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'next$',  function () {
if (!this.hasNext$()) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
this.lastReturnedIndex=this.index++;
return this.b$['java.util.EnumMap'].keyUniverse[this.lastReturnedIndex];
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EnumMap, "ValueIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.EnumMap','.EnumMapIterator']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'next$',  function () {
if (!this.hasNext$()) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
this.lastReturnedIndex=this.index++;
return p$1.unmaskNull$O.apply(this.b$['java.util.EnumMap'], [this.b$['java.util.EnumMap'].vals[this.lastReturnedIndex]]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EnumMap, "EntryIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.EnumMap','.EnumMapIterator']);
C$.$classes$=[['Entry',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['lastReturnedEntry','java.util.EnumMap.EntryIterator.Entry']]]

Clazz.newMeth(C$, 'next$',  function () {
if (!this.hasNext$()) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
this.lastReturnedEntry=Clazz.new_($I$(6,1).c$$I,[this, null, this.index++]);
return this.lastReturnedEntry;
});

Clazz.newMeth(C$, 'remove$',  function () {
this.lastReturnedIndex=((null == this.lastReturnedEntry ) ? -1 : this.lastReturnedEntry.index);
C$.superclazz.prototype.remove$.apply(this, []);
this.lastReturnedEntry.index=this.lastReturnedIndex;
this.lastReturnedEntry=null;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.EnumMap.EntryIterator, "Entry", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, [['java.util.Map','java.util.Map.Entry']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['index']]]

Clazz.newMeth(C$, 'c$$I',  function (index) {
;C$.$init$.apply(this);
this.index=index;
}, 1);

Clazz.newMeth(C$, 'getKey$',  function () {
p$1.checkIndexForEntryUse.apply(this, []);
return this.b$['java.util.EnumMap'].keyUniverse[this.index];
});

Clazz.newMeth(C$, 'getValue$',  function () {
p$1.checkIndexForEntryUse.apply(this, []);
return p$1.unmaskNull$O.apply(this.b$['java.util.EnumMap'], [this.b$['java.util.EnumMap'].vals[this.index]]);
});

Clazz.newMeth(C$, 'setValue$O',  function (value) {
p$1.checkIndexForEntryUse.apply(this, []);
var oldValue=p$1.unmaskNull$O.apply(this.b$['java.util.EnumMap'], [this.b$['java.util.EnumMap'].vals[this.index]]);
this.b$['java.util.EnumMap'].vals[this.index]=p$1.maskNull$O.apply(this.b$['java.util.EnumMap'], [value]);
return oldValue;
});

Clazz.newMeth(C$, 'equals$O',  function (o) {
if (this.index < 0) return o === this ;
if (!(Clazz.instanceOf(o, "java.util.Map.Entry"))) return false;
var e=o;
var ourValue=p$1.unmaskNull$O.apply(this.b$['java.util.EnumMap'], [this.b$['java.util.EnumMap'].vals[this.index]]);
var hisValue=e.getValue$();
return (e.getKey$() === this.b$['java.util.EnumMap'].keyUniverse[this.index]  && (ourValue === hisValue  || (ourValue != null  && ourValue.equals$O(hisValue) ) ) );
});

Clazz.newMeth(C$, 'hashCode$',  function () {
if (this.index < 0) return C$.superclazz.prototype.hashCode$.apply(this, []);
return p$1.entryHashCode$I.apply(this.b$['java.util.EnumMap'], [this.index]);
});

Clazz.newMeth(C$, 'toString',  function () {
if (this.index < 0) return C$.superclazz.prototype.toString.apply(this, []);
return this.b$['java.util.EnumMap'].keyUniverse[this.index] + "=" + p$1.unmaskNull$O.apply(this.b$['java.util.EnumMap'], [this.b$['java.util.EnumMap'].vals[this.index]]) ;
});

Clazz.newMeth(C$, 'checkIndexForEntryUse',  function () {
if (this.index < 0) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Entry was removed"]);
}, p$1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:32 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
