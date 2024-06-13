(function(){var P$=Clazz.newPackage("javax.print.attribute.standard"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "PageRanges", null, 'javax.print.attribute.SetOfIntegerSyntax', ['javax.print.attribute.DocAttribute', 'javax.print.attribute.PrintRequestAttribute', 'javax.print.attribute.PrintJobAttribute']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$IAA',  function (members) {
;C$.superclazz.c$$IAA.apply(this,[members]);C$.$init$.apply(this);
if (members == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["members is null"]);
}p$1.myPageRanges.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (members) {
;C$.superclazz.c$$S.apply(this,[members]);C$.$init$.apply(this);
if (members == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["members is null"]);
}p$1.myPageRanges.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'myPageRanges',  function () {
var myMembers=this.getMembers$();
var n=myMembers.length;
if (n == 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["members is zero-length"]);
}var i;
for (i=0; i < n; ++i) {
if (myMembers[i][0] < 1) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Page value < 1 specified"]);
}}
}, p$1);

Clazz.newMeth(C$, 'c$$I',  function (member) {
;C$.superclazz.c$$I.apply(this,[member]);C$.$init$.apply(this);
if (member < 1) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Page value < 1 specified"]);
}}, 1);

Clazz.newMeth(C$, 'c$$I$I',  function (lowerBound, upperBound) {
;C$.superclazz.c$$I$I.apply(this,[lowerBound, upperBound]);C$.$init$.apply(this);
if (lowerBound > upperBound) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Null range specified"]);
} else if (lowerBound < 1) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Page value < 1 specified"]);
}}, 1);

Clazz.newMeth(C$, 'equals$O',  function (object) {
return (C$.superclazz.prototype.equals$O.apply(this, [object]) && Clazz.instanceOf(object, "javax.print.attribute.standard.PageRanges") );
});

Clazz.newMeth(C$, 'getCategory$',  function () {
return Clazz.getClass(C$);
});

Clazz.newMeth(C$, 'getName$',  function () {
return "page-ranges";
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:50 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
