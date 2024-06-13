(function(){var P$=Clazz.newPackage("java.awt.font"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "TextHitInfo");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isLeadingEdge'],'I',['charIndex']]]

Clazz.newMeth(C$, 'c$$I$Z',  function (charIndex, isLeadingEdge) {
;C$.$init$.apply(this);
this.charIndex=charIndex;
this.isLeadingEdge=isLeadingEdge;
}, 1);

Clazz.newMeth(C$, 'getCharIndex$',  function () {
return this.charIndex;
});

Clazz.newMeth(C$, 'isLeadingEdge$',  function () {
return this.isLeadingEdge;
});

Clazz.newMeth(C$, 'getInsertionIndex$',  function () {
return this.isLeadingEdge ? this.charIndex : this.charIndex + 1;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.charIndex;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
return (Clazz.instanceOf(obj, "java.awt.font.TextHitInfo")) && this.equals$java_awt_font_TextHitInfo(obj) ;
});

Clazz.newMeth(C$, 'equals$java_awt_font_TextHitInfo',  function (hitInfo) {
return hitInfo != null  && this.charIndex == hitInfo.charIndex  && this.isLeadingEdge == hitInfo.isLeadingEdge  ;
});

Clazz.newMeth(C$, 'toString',  function () {
return "TextHitInfo[" + this.charIndex + (this.isLeadingEdge ? "L" : "T") + "]" ;
});

Clazz.newMeth(C$, 'leading$I',  function (charIndex) {
return Clazz.new_(C$.c$$I$Z,[charIndex, true]);
}, 1);

Clazz.newMeth(C$, 'trailing$I',  function (charIndex) {
return Clazz.new_(C$.c$$I$Z,[charIndex, false]);
}, 1);

Clazz.newMeth(C$, 'beforeOffset$I',  function (offset) {
return Clazz.new_(C$.c$$I$Z,[offset - 1, false]);
}, 1);

Clazz.newMeth(C$, 'afterOffset$I',  function (offset) {
return Clazz.new_(C$.c$$I$Z,[offset, true]);
}, 1);

Clazz.newMeth(C$, 'getOtherHit$',  function () {
if (this.isLeadingEdge) {
return C$.trailing$I(this.charIndex - 1);
} else {
return C$.leading$I(this.charIndex + 1);
}});

Clazz.newMeth(C$, 'getOffsetHit$I',  function (delta) {
return Clazz.new_(C$.c$$I$Z,[this.charIndex + delta, this.isLeadingEdge]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:09 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
