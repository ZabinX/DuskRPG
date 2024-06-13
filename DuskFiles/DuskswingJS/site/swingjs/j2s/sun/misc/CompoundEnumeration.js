(function(){var P$=Clazz.newPackage("sun.misc"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "CompoundEnumeration", null, null, 'java.util.Enumeration');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.index=0;
},1);

C$.$fields$=[['I',['index'],'O',['enums','java.util.Enumeration[]']]]

Clazz.newMeth(C$, 'c$$java_util_EnumerationA',  function (enums) {
;C$.$init$.apply(this);
this.enums=enums;
}, 1);

Clazz.newMeth(C$, 'next',  function () {
while (this.index < this.enums.length){
if (this.enums[this.index] != null  && this.enums[this.index].hasMoreElements$() ) {
return true;
}++this.index;
}
return false;
}, p$1);

Clazz.newMeth(C$, 'hasMoreElements$',  function () {
return p$1.next.apply(this, []);
});

Clazz.newMeth(C$, 'nextElement$',  function () {
if (!p$1.next.apply(this, [])) {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
}return this.enums[this.index].nextElement$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:45 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
