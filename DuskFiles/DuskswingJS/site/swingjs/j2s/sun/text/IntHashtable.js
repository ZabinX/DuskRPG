(function(){var P$=Clazz.newPackage("sun.text"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "IntHashtable");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.defaultValue=0;
},1);

C$.$fields$=[['I',['defaultValue','primeIndex','highWaterMark','lowWaterMark','count'],'O',['+values','+keyList']]
,['O',['PRIMES','int[]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
p$1.initialize$I.apply(this, [3]);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (initialSize) {
;C$.$init$.apply(this);
p$1.initialize$I.apply(this, [C$.leastGreaterPrimeIndex$I(((initialSize / 0.4)|0))]);
}, 1);

Clazz.newMeth(C$, 'size$',  function () {
return this.count;
});

Clazz.newMeth(C$, 'isEmpty$',  function () {
return this.count == 0;
});

Clazz.newMeth(C$, 'put$I$I',  function (key, value) {
if (this.count > this.highWaterMark) {
p$1.rehash.apply(this, []);
}var index=p$1.find$I.apply(this, [key]);
if (this.keyList[index] <= -2147483647) {
this.keyList[index]=key;
++this.count;
}this.values[index]=value;
});

Clazz.newMeth(C$, 'get$I',  function (key) {
return this.values[p$1.find$I.apply(this, [key])];
});

Clazz.newMeth(C$, 'remove$I',  function (key) {
var index=p$1.find$I.apply(this, [key]);
if (this.keyList[index] > -2147483647) {
this.keyList[index]=-2147483647;
this.values[index]=this.defaultValue;
--this.count;
if (this.count < this.lowWaterMark) {
p$1.rehash.apply(this, []);
}}});

Clazz.newMeth(C$, 'getDefaultValue$',  function () {
return this.defaultValue;
});

Clazz.newMeth(C$, 'setDefaultValue$I',  function (newValue) {
this.defaultValue=newValue;
p$1.rehash.apply(this, []);
});

Clazz.newMeth(C$, 'equals$O',  function (that) {
if (that.getClass$() !== this.getClass$() ) return false;
var other=that;
if (other.size$() != this.count || other.defaultValue != this.defaultValue ) {
return false;
}for (var i=0; i < this.keyList.length; ++i) {
var key=this.keyList[i];
if (key > -2147483647 && other.get$I(key) != this.values[i] ) return false;
}
return true;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
var result=465;
var scrambler=1362796821;
for (var i=0; i < this.keyList.length; ++i) {
result=result * scrambler + 1;
result+=this.keyList[i];
}
for (var i=0; i < this.values.length; ++i) {
result=result * scrambler + 1;
result+=this.values[i];
}
return result;
});

Clazz.newMeth(C$, 'clone$',  function () {
var result=Clazz.clone(this);
this.values=this.values.clone$();
this.keyList=this.keyList.clone$();
return result;
});

Clazz.newMeth(C$, 'initialize$I',  function (primeIndex) {
if (primeIndex < 0) {
primeIndex=0;
} else if (primeIndex >= C$.PRIMES.length) {
System.out.println$S("TOO BIG");
primeIndex=C$.PRIMES.length - 1;
}this.primeIndex=primeIndex;
var initialSize=C$.PRIMES[primeIndex];
this.values=Clazz.array(Integer.TYPE, [initialSize]);
this.keyList=Clazz.array(Integer.TYPE, [initialSize]);
for (var i=0; i < initialSize; ++i) {
this.keyList[i]=-2147483648;
this.values[i]=this.defaultValue;
}
this.count=0;
this.lowWaterMark=((initialSize * 0.0)|0);
this.highWaterMark=((initialSize * 0.4)|0);
}, p$1);

Clazz.newMeth(C$, 'rehash',  function () {
var oldValues=this.values;
var oldkeyList=this.keyList;
var newPrimeIndex=this.primeIndex;
if (this.count > this.highWaterMark) {
++newPrimeIndex;
} else if (this.count < this.lowWaterMark) {
newPrimeIndex-=2;
}p$1.initialize$I.apply(this, [newPrimeIndex]);
for (var i=oldValues.length - 1; i >= 0; --i) {
var key=oldkeyList[i];
if (key > -2147483647) {
this.putInternal$I$I(key, oldValues[i]);
}}
}, p$1);

Clazz.newMeth(C$, 'putInternal$I$I',  function (key, value) {
var index=p$1.find$I.apply(this, [key]);
if (this.keyList[index] < -2147483647) {
this.keyList[index]=key;
++this.count;
}this.values[index]=value;
});

Clazz.newMeth(C$, 'find$I',  function (key) {
if (key <= -2147483647) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["key can\'t be less than 0xFFFFFFFE"]);
var firstDeleted=-1;
var index=(key ^ 67108864) % this.keyList.length;
if (index < 0) index=-index;
var jump=0;
while (true){
var tableHash=this.keyList[index];
if (tableHash == key) {
return index;
} else if (tableHash > -2147483647) {
} else if (tableHash == -2147483648) {
if (firstDeleted >= 0) {
index=firstDeleted;
}return index;
} else if (firstDeleted < 0) {
firstDeleted=index;
}if (jump == 0) {
jump=(key % (this.keyList.length - 1));
if (jump < 0) jump=-jump;
++jump;
}index=(index + jump) % this.keyList.length;
if (index == firstDeleted) {
return index;
}}
}, p$1);

Clazz.newMeth(C$, 'leastGreaterPrimeIndex$I',  function (source) {
var i;
for (i=0; i < C$.PRIMES.length; ++i) {
if (source < C$.PRIMES[i]) {
break;
}}
return (i == 0) ? 0 : (i - 1);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.PRIMES=Clazz.array(Integer.TYPE, -1, [17, 37, 67, 131, 257, 521, 1031, 2053, 4099, 8209, 16411, 32771, 65537, 131101, 262147, 524309, 1048583, 2097169, 4194319, 8388617, 16777259, 33554467, 67108879, 134217757, 268435459, 536870923, 1073741827, 2147483647]);
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:50 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
