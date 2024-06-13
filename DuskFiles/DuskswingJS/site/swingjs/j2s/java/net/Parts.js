(function(){var P$=Clazz.newPackage("java.net"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Parts");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['path','query','ref']]]

Clazz.newMeth(C$, 'c$$S',  function (file) {
;C$.$init$.apply(this);
var ind=file.indexOf$I("#");
this.ref=ind < 0 ? null : file.substring$I(ind + 1);
file=ind < 0 ? file : file.substring$I$I(0, ind);
var q=file.lastIndexOf$I("?");
if (q != -1) {
this.query=file.substring$I(q + 1);
this.path=file.substring$I$I(0, q);
} else {
this.path=file;
}}, 1);

Clazz.newMeth(C$, 'getPath$',  function () {
return this.path;
});

Clazz.newMeth(C$, 'getQuery$',  function () {
return this.query;
});

Clazz.newMeth(C$, 'getRef$',  function () {
return this.ref;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:19 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
