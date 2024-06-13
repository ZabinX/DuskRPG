(function(){var P$=Clazz.newPackage("sun.misc"),p$1={},I$=[[0,'sun.misc.RegexpNode']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RegexpPool");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.prefixMachine=Clazz.new_($I$(1,1));
this.suffixMachine=Clazz.new_($I$(1,1));
this.lastDepth=2147483647;
},1);

C$.$fields$=[['I',['lastDepth'],'O',['prefixMachine','sun.misc.RegexpNode','+suffixMachine']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'add$S$O',  function (re, ret) {
p$1.add$S$O$Z.apply(this, [re, ret, false]);
});

Clazz.newMeth(C$, 'replace$S$O',  function (re, ret) {
try {
p$1.add$S$O$Z.apply(this, [re, ret, true]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'delete$S',  function (re) {
var o=null;
var p=this.prefixMachine;
var best=p;
var len=re.length$() - 1;
var i;
var prefix=true;
if (!re.startsWith$S("*") || !re.endsWith$S("*") ) ++len;
if (len <= 0) return null;
for (i=0; p != null ; i++) {
if (p.result != null  && p.depth < 2147483647  && (!p.exact || i == len ) ) {
best=p;
}if (i >= len) break;
p=p.find$C(re.charAt$I(i));
}
p=this.suffixMachine;
for (i=len; --i >= 0 && p != null  ; ) {
if (p.result != null  && p.depth < 2147483647 ) {
prefix=false;
best=p;
}p=p.find$C(re.charAt$I(i));
}
if (prefix) {
if (re.equals$O(best.re)) {
o=best.result;
best.result=null;
}} else {
if (re.equals$O(best.re)) {
o=best.result;
best.result=null;
}}return o;
});

Clazz.newMeth(C$, 'match$S',  function (s) {
return p$1.matchAfter$S$I.apply(this, [s, 2147483647]);
});

Clazz.newMeth(C$, 'matchNext$S',  function (s) {
return p$1.matchAfter$S$I.apply(this, [s, this.lastDepth]);
});

Clazz.newMeth(C$, 'add$S$O$Z',  function (re, ret, replace) {
var len=re.length$();
var p;
if (re.charAt$I(0) == "*") {
p=this.suffixMachine;
while (len > 1)p=p.add$C(re.charAt$I(--len));

} else {
var exact=false;
if (re.charAt$I(len - 1) == "*") --len;
 else exact=true;
p=this.prefixMachine;
for (var i=0; i < len; i++) p=p.add$C(re.charAt$I(i));

p.exact=exact;
}if (p.result != null  && !replace ) throw Clazz.new_(Clazz.load('sun.misc.REException').c$$S,[re + " is a duplicate"]);
p.re=re;
p.result=ret;
}, p$1);

Clazz.newMeth(C$, 'matchAfter$S$I',  function (s, lastMatchDepth) {
var p=this.prefixMachine;
var best=p;
var bst=0;
var bend=0;
var len=s.length$();
var i;
if (len <= 0) return null;
for (i=0; p != null ; i++) {
if (p.result != null  && p.depth < lastMatchDepth  && (!p.exact || i == len ) ) {
this.lastDepth=p.depth;
best=p;
bst=i;
bend=len;
}if (i >= len) break;
p=p.find$C(s.charAt$I(i));
}
p=this.suffixMachine;
for (i=len; --i >= 0 && p != null  ; ) {
if (p.result != null  && p.depth < lastMatchDepth ) {
this.lastDepth=p.depth;
best=p;
bst=0;
bend=i + 1;
}p=p.find$C(s.charAt$I(i));
}
var o=best.result;
if (o != null  && Clazz.instanceOf(o, "sun.misc.RegexpTarget") ) o=(o).found$S(s.substring$I$I(bst, bend));
return o;
}, p$1);

Clazz.newMeth(C$, 'reset$',  function () {
this.lastDepth=2147483647;
});

Clazz.newMeth(C$, 'print$java_io_PrintStream',  function (out) {
out.print$S("Regexp pool:\n");
if (this.suffixMachine.firstchild != null ) {
out.print$S(" Suffix machine: ");
this.suffixMachine.firstchild.print$java_io_PrintStream(out);
out.print$S("\n");
}if (this.prefixMachine.firstchild != null ) {
out.print$S(" Prefix machine: ");
this.prefixMachine.firstchild.print$java_io_PrintStream(out);
out.print$S("\n");
}});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:46 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
