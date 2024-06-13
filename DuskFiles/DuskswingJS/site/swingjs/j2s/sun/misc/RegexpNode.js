(function(){var P$=Clazz.newPackage("sun.misc"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "RegexpNode");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.re=null;
},1);

C$.$fields$=[['Z',['exact'],'C',['c'],'I',['depth'],'S',['re'],'O',['firstchild','sun.misc.RegexpNode','+nextsibling','result','java.lang.Object']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.c="#";
this.depth=0;
}, 1);

Clazz.newMeth(C$, 'c$$C$I',  function (C, depth) {
;C$.$init$.apply(this);
this.c=C;
this.depth=depth;
}, 1);

Clazz.newMeth(C$, 'add$C',  function (C) {
var p=this.firstchild;
if (p == null ) p=Clazz.new_(C$.c$$C$I,[C, this.depth + 1]);
 else {
while (p != null )if (p.c == C) return p;
 else p=p.nextsibling;

p=Clazz.new_(C$.c$$C$I,[C, this.depth + 1]);
p.nextsibling=this.firstchild;
}this.firstchild=p;
return p;
});

Clazz.newMeth(C$, 'find$C',  function (C) {
for (var p=this.firstchild; p != null ; p=p.nextsibling) if (p.c == C) return p;

return null;
});

Clazz.newMeth(C$, 'print$java_io_PrintStream',  function (out) {
if (this.nextsibling != null ) {
var p=this;
out.print$S("(");
while (p != null ){
out.write$I(p.c.$c());
if (p.firstchild != null ) p.firstchild.print$java_io_PrintStream(out);
p=p.nextsibling;
out.write$I(p != null  ? "|" : ")".$c());
}
} else {
out.write$I(this.c.$c());
if (this.firstchild != null ) this.firstchild.print$java_io_PrintStream(out);
}});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:46 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
