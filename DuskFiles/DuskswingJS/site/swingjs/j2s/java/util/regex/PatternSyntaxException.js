(function(){var P$=Clazz.newPackage("java.util.regex"),I$=[];
var C$=Clazz.newClass(P$, "PatternSyntaxException", null, 'IllegalArgumentException');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.desc=null;
this.pattern=null;
this.index=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.index=-1;
}, 1);

Clazz.newMeth(C$, 'c$$S$S$I', function (desc, pattern, index) {
Clazz.super_(C$, this,1);
this.desc=desc;
this.pattern=pattern;
this.index=index;
}, 1);

Clazz.newMeth(C$, 'getPattern$', function () {
return this.pattern;
});

Clazz.newMeth(C$, 'getMessage$', function () {
var s=this.desc;
if (this.index >= 0) {
s += " near index " + this.index;
}s += "\r\n" + this.pattern;
if (this.index >= 0) {
s += "\r\n";
for (var i=0; i < this.index; i++) s += " ";

s += "^";
}return s;
});

Clazz.newMeth(C$, 'getDescription$', function () {
return this.desc;
});

Clazz.newMeth(C$, 'getIndex$', function () {
return this.index;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.3.00');//Created 2023-11-12 14:15:59 Java2ScriptVisitor version 3.2.3.00 net.sf.j2s.core.jar version 3.2.3.00
