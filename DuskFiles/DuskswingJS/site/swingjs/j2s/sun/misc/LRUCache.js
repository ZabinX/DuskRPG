(function(){var P$=Clazz.newPackage("sun.misc"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "LRUCache");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.oa=null;
},1);

C$.$fields$=[['I',['size'],'O',['oa','_.V[]']]]

Clazz.newMeth(C$, 'c$$I',  function (size) {
;C$.$init$.apply(this);
this.size=size;
}, 1);

Clazz.newMeth(C$, 'moveToFront$OA$I',  function (oa, i) {
var ob=oa[i];
for (var j=i; j > 0; j--) oa[j]=oa[j - 1];

oa[0]=ob;
}, 1);

Clazz.newMeth(C$, 'forName$O',  function (name) {
if (this.oa == null ) {
var temp=Clazz.array(java.lang.Object, [this.size]);
this.oa=temp;
} else {
for (var i=0; i < this.oa.length; i++) {
var ob=this.oa[i];
if (ob == null ) continue;
if (this.hasName$O$O(ob, name)) {
if (i > 0) C$.moveToFront$OA$I(this.oa, i);
return ob;
}}
}var ob=this.create$O(name);
this.oa[this.oa.length - 1]=ob;
C$.moveToFront$OA$I(this.oa, this.oa.length - 1);
return ob;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:46 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
