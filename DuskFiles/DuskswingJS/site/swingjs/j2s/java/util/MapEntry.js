(function(){var P$=java.util,I$=[];
var C$=Clazz.newClass(P$, "MapEntry", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, [['java.util.Map','java.util.Map.Entry'], 'Cloneable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.key=null;
this.value=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['c$$TK'], function (theKey) {
C$.$init$.apply(this);
this.key=theKey;
}, 1);

Clazz.newMeth(C$, ['c$$TK$TV'], function (theKey, theValue) {
C$.$init$.apply(this);
this.key=theKey;
this.value=theValue;
}, 1);

Clazz.newMeth(C$, 'clone$', function () {
try {
return Clazz.clone(this);
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'equals$O', function (object) {
if (this === object ) {
return true;
}if (Clazz.instanceOf(object, "java.util.Map.Entry")) {
var entry=object;
return (this.key == null  ? entry.getKey$() == null  : this.key.equals$O(entry.getKey$())) && (this.value == null  ? entry.getValue$() == null  : this.value.equals$O(entry.getValue$())) ;
}return false;
});

Clazz.newMeth(C$, 'getKey$', function () {
return this.key;
});

Clazz.newMeth(C$, 'getValue$', function () {
return this.value;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return (this.key == null  ? 0 : this.key.hashCode$()) ^ (this.value == null  ? 0 : this.value.hashCode$());
});

Clazz.newMeth(C$, ['setValue$TV'], function (object) {
var result=this.value;
this.value=object;
return result;
});

Clazz.newMeth(C$, 'toString', function () {
return this.key + "=" + this.value ;
});
;
(function(){var C$=Clazz.newInterface(P$.MapEntry, "Type", function(){
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.3.00');//Created 2023-11-12 14:15:58 Java2ScriptVisitor version 3.2.3.00 net.sf.j2s.core.jar version 3.2.3.00
