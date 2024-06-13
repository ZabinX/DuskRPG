(function(){var P$=Clazz.newPackage("sun.text"),p$1={},I$=[[0,'InternalError']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CompactByteArray", null, null, 'Cloneable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isCompact'],'O',['values','byte[]','indices','short[]','hashes','int[]']]]

Clazz.newMeth(C$, 'c$$B',  function (defaultValue) {
;C$.$init$.apply(this);
var i;
this.values=Clazz.array(Byte.TYPE, [65536]);
this.indices=Clazz.array(Short.TYPE, [512]);
this.hashes=Clazz.array(Integer.TYPE, [512]);
for (i=0; i < 65536; ++i) {
this.values[i]=defaultValue;
}
for (i=0; i < 512; ++i) {
this.indices[i]=((i << 7)|0);
this.hashes[i]=0;
}
this.isCompact=false;
}, 1);

Clazz.newMeth(C$, 'c$$HA$BA',  function (indexArray, newValues) {
;C$.$init$.apply(this);
var i;
if (indexArray.length != 512) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Index out of bounds!"]);
for (i=0; i < 512; ++i) {
var index=indexArray[i];
if ((index < 0) || (index >= newValues.length + 128) ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Index out of bounds!"]);
}
this.indices=indexArray;
this.values=newValues;
this.isCompact=true;
}, 1);

Clazz.newMeth(C$, 'elementAt$C',  function (index) {
return (this.values[(this.indices[index.$c() >> 7] & 65535) + (index.$c() & 127)]);
});

Clazz.newMeth(C$, 'setElementAt$C$B',  function (index, value) {
if (this.isCompact) p$1.expand.apply(this, []);
this.values[index.$c()]=value;
p$1.touchBlock$I$I.apply(this, [index.$c() >> 7, value]);
});

Clazz.newMeth(C$, 'setElementAt$C$C$B',  function (start, end, value) {
var i;
if (this.isCompact) {
p$1.expand.apply(this, []);
}for (i=start.$c(); i <= end.$c() ; ++i) {
this.values[i]=value;
p$1.touchBlock$I$I.apply(this, [i >> 7, value]);
}
});

Clazz.newMeth(C$, 'compact$',  function () {
if (!this.isCompact) {
var limitCompacted=0;
var iBlockStart=0;
var iUntouched=($s$[0] = -1, $s$[0]);
for (var i=0; i < this.indices.length; ++i, iBlockStart+=128) {
this.indices[i]=(-1|0);
var touched=p$1.blockTouched$I.apply(this, [i]);
if (!touched && iUntouched != -1 ) {
this.indices[i]=iUntouched;
} else {
var jBlockStart=0;
var j=0;
for (j=0; j < limitCompacted; ++j, jBlockStart+=128) {
if (this.hashes[i] == this.hashes[j] && C$.arrayRegionMatches$BA$I$BA$I$I(this.values, iBlockStart, this.values, jBlockStart, 128) ) {
this.indices[i]=(jBlockStart|0);
break;
}}
if (this.indices[i] == -1) {
System.arraycopy$O$I$O$I$I(this.values, iBlockStart, this.values, jBlockStart, 128);
this.indices[i]=(jBlockStart|0);
this.hashes[j]=this.hashes[i];
++limitCompacted;
if (!touched) {
iUntouched=($s$[0] = jBlockStart, $s$[0]);
}}}}
var newSize=limitCompacted * 128;
var result=Clazz.array(Byte.TYPE, [newSize]);
System.arraycopy$O$I$O$I$I(this.values, 0, result, 0, newSize);
this.values=result;
this.isCompact=true;
this.hashes=null;
}});

Clazz.newMeth(C$, 'arrayRegionMatches$BA$I$BA$I$I',  function (source, sourceStart, target, targetStart, len) {
var sourceEnd=sourceStart + len;
var delta=targetStart - sourceStart;
for (var i=sourceStart; i < sourceEnd; i++) {
if (source[i] != target[i + delta]) return false;
}
return true;
}, 1);

Clazz.newMeth(C$, 'touchBlock$I$I',  function (i, value) {
this.hashes[i]=(this.hashes[i] + (value << 1)) | 1;
}, p$1);

Clazz.newMeth(C$, 'blockTouched$I',  function (i) {
return this.hashes[i] != 0;
}, p$1);

Clazz.newMeth(C$, 'getIndexArray$',  function () {
return this.indices;
});

Clazz.newMeth(C$, 'getStringArray$',  function () {
return this.values;
});

Clazz.newMeth(C$, 'clone$',  function () {
try {
var other=Clazz.clone(this);
other.values=this.values.clone$();
other.indices=this.indices.clone$();
if (this.hashes != null ) other.hashes=this.hashes.clone$();
return other;
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(1,1).c$$Throwable,[e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (obj == null ) return false;
if (this === obj ) return true;
if (this.getClass$() !== obj.getClass$() ) return false;
var other=obj;
for (var i=0; i < 65536; i++) {
if (this.elementAt$C(String.fromCharCode(i)) != other.elementAt$C(String.fromCharCode(i))) return false;
}
return true;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
var result=0;
var increment=Math.min(3, (this.values.length/16|0));
for (var i=0; i < this.values.length; i+=increment) {
result=result * 37 + this.values[i];
}
return result;
});

Clazz.newMeth(C$, 'expand',  function () {
var i;
if (this.isCompact) {
var tempArray;
this.hashes=Clazz.array(Integer.TYPE, [512]);
tempArray=Clazz.array(Byte.TYPE, [65536]);
for (i=0; i < 65536; ++i) {
var value=this.elementAt$C(String.fromCharCode(i));
tempArray[i]=value;
p$1.touchBlock$I$I.apply(this, [i >> 7, value]);
}
for (i=0; i < 512; ++i) {
this.indices[i]=((i << 7)|0);
}
this.values=null;
this.values=tempArray;
this.isCompact=false;
}}, p$1);

Clazz.newMeth(C$, 'getArray',  function () {
return this.values;
}, p$1);
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:50 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
