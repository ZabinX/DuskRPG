(function(){var P$=Clazz.newPackage("java.awt.font"),I$=[[0,['java.awt.geom.Rectangle2D','.Float']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GlyphMetrics");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['horizontal'],'B',['glyphType'],'F',['advanceX','advanceY'],'O',['bounds','java.awt.geom.Rectangle2D.Float']]]

Clazz.newMeth(C$, 'c$$F$java_awt_geom_Rectangle2D$B',  function (advance, bounds, glyphType) {
;C$.$init$.apply(this);
this.horizontal=true;
this.advanceX=advance;
this.advanceY=0;
this.bounds=Clazz.new_($I$(1,1));
this.bounds.setRect$java_awt_geom_Rectangle2D(bounds);
this.glyphType=glyphType;
}, 1);

Clazz.newMeth(C$, 'c$$Z$F$F$java_awt_geom_Rectangle2D$B',  function (horizontal, advanceX, advanceY, bounds, glyphType) {
;C$.$init$.apply(this);
this.horizontal=horizontal;
this.advanceX=advanceX;
this.advanceY=advanceY;
this.bounds=Clazz.new_($I$(1,1));
this.bounds.setRect$java_awt_geom_Rectangle2D(bounds);
this.glyphType=glyphType;
}, 1);

Clazz.newMeth(C$, 'getAdvance$',  function () {
return this.horizontal ? this.advanceX : this.advanceY;
});

Clazz.newMeth(C$, 'getAdvanceX$',  function () {
return this.advanceX;
});

Clazz.newMeth(C$, 'getAdvanceY$',  function () {
return this.advanceY;
});

Clazz.newMeth(C$, 'getBounds2D$',  function () {
return Clazz.new_($I$(1,1).c$$F$F$F$F,[this.bounds.x, this.bounds.y, this.bounds.width, this.bounds.height]);
});

Clazz.newMeth(C$, 'getLSB$',  function () {
return this.horizontal ? this.bounds.x : this.bounds.y;
});

Clazz.newMeth(C$, 'getRSB$',  function () {
return this.horizontal ? this.advanceX - this.bounds.x - this.bounds.width  : this.advanceY - this.bounds.y - this.bounds.height ;
});

Clazz.newMeth(C$, 'getType$',  function () {
return this.glyphType;
});

Clazz.newMeth(C$, 'isStandard$',  function () {
return (this.glyphType & 3) == 0;
});

Clazz.newMeth(C$, 'isLigature$',  function () {
return (this.glyphType & 3) == 1;
});

Clazz.newMeth(C$, 'isCombining$',  function () {
return (this.glyphType & 3) == 2;
});

Clazz.newMeth(C$, 'isComponent$',  function () {
return (this.glyphType & 3) == 3;
});

Clazz.newMeth(C$, 'isWhitespace$',  function () {
return (this.glyphType & 4) == 4;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:09 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
