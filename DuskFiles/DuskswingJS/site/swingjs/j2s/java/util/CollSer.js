(function(){var P$=java.util,p$1={},p$2={},p$3={},p$4={},p$5={},p$6={},p$7={},p$8={},I$=[[0,'java.util.ImmutableCollections',['java.util.ImmutableCollections','.SubList'],['java.util.ImmutableCollections','.ListItr'],'java.util.Objects',['java.util.ImmutableCollections','.AbstractImmutableList'],'java.util.CollSer',['java.util.ImmutableCollections','.SetN','.SetNIterator'],'java.util.Set','java.util.KeyValueHolder','InternalError',['java.util.ImmutableCollections','.MapN','.MapNIterator'],'java.util.AbstractSet','java.util.List',['java.util.ImmutableCollections','.ListN'],['java.util.ImmutableCollections','.SetN'],['java.util.ImmutableCollections','.MapN'],['java.util.ImmutableCollections','.Map1']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CollSer", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['tag'],'O',['array','Object[]']]]

Clazz.newMeth(C$, 'c$$I$OA',  function (t, a) {
;C$.$init$.apply(this);
this.tag=t;
this.array=a;
}, 1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream',  function (ois) {
ois.defaultReadObject$();
var len=ois.readInt$();
if (len < 0) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["negative length " + len]);
}var a=Clazz.array(java.lang.Object, [len]);
for (var i=0; i < len; i++) {
a[i]=ois.readObject$();
}
this.array=a;
}, p$8);

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream',  function (oos) {
oos.defaultWriteObject$();
oos.writeInt$I(this.array.length);
for (var i=0; i < this.array.length; i++) {
oos.writeObject$O(this.array[i]);
}
}, p$8);

Clazz.newMeth(C$, 'readResolve',  function () {
try {
if (this.array == null ) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["null array"]);
}switch (this.tag & 255) {
case 1:
return $I$(13).of$OA(this.array);
case 2:
return $I$(8).of$OA(this.array);
case 3:
if (this.array.length == 0) {
return $I$(1).emptyMap$();
} else if (this.array.length == 2) {
return Clazz.new_($I$(17,1).c$$O$O,[this.array[0], this.array[1]]);
} else {
return Clazz.new_($I$(16,1).c$$OA,[this.array]);
}default:
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,[String.format$S$OA("invalid flags 0x%x", Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(this.tag)]))]);
}
} catch (ex) {
if (Clazz.exceptionOf(ex,"NullPointerException") || Clazz.exceptionOf(ex,"IllegalArgumentException")){
var ioe=Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["invalid object"]);
ioe.initCause$Throwable(ex);
throw ioe;
} else {
throw ex;
}
}
}, p$8);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:33 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
