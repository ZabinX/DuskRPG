(function(){var P$=Clazz.newPackage("sun.swing"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "BakedArrayList", null, 'java.util.ArrayList');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['_hashCode']]]

Clazz.newMeth(C$, 'c$$I',  function (size) {
;C$.superclazz.c$$I.apply(this,[size]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_List',  function (data) {
C$.c$$I.apply(this, [data.size$()]);
for (var counter=0, max=data.size$(); counter < max; counter++) {
this.add$O(data.get$I(counter));
}
this.cacheHashCode$();
}, 1);

Clazz.newMeth(C$, 'cacheHashCode$',  function () {
this._hashCode=1;
for (var counter=this.size$() - 1; counter >= 0; counter--) {
this._hashCode=31 * this._hashCode + this.get$I(counter).hashCode$();
}
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this._hashCode;
});

Clazz.newMeth(C$, 'equals$O',  function (o) {
var list=o;
var size=this.size$();
if (list.size$() != size) {
return false;
}while (size-- > 0){
if (!this.get$I(size).equals$O(list.get$I(size))) {
return false;
}}
return true;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:49 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
