(function(){var P$=Clazz.newPackage("sun.font"),p$1={},I$=[[0,'java.awt.Font','java.awt.GraphicsEnvironment','java.util.ArrayList','sun.font.FontUtilities']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FontResolver");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.defaultFont=Clazz.new_($I$(1,1).c$$S$I$I,["Dialog", 0, 12]);
this.blocks=Clazz.array(Integer.TYPE, [512, null]);
},1);

C$.$fields$=[['O',['allFonts','java.awt.Font[]','+supplementaryFonts','supplementaryIndices','int[]','defaultFont','java.awt.Font','blocks','int[][]']]
,['O',['INSTANCE','sun.font.FontResolver']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getAllFonts',  function () {
if (this.allFonts == null ) {
this.allFonts=$I$(2).getLocalGraphicsEnvironment$().getAllFonts$();
for (var i=0; i < this.allFonts.length; i++) {
this.allFonts[i]=this.allFonts[i].deriveFont$F(12.0);
}
}return this.allFonts;
}, p$1);

Clazz.newMeth(C$, 'getIndexFor$C',  function (c) {
if (this.defaultFont.canDisplay$C(c)) {
return 1;
}for (var i=0; i < p$1.getAllFonts.apply(this, []).length; i++) {
if (this.allFonts[i].canDisplay$C(c)) {
return i + 2;
}}
return 1;
}, p$1);

Clazz.newMeth(C$, 'getAllSCFonts',  function () {
if (this.supplementaryFonts == null ) {
var fonts=Clazz.new_($I$(3,1));
var indices=Clazz.new_($I$(3,1));
for (var i=0; i < p$1.getAllFonts.apply(this, []).length; i++) {
var font=this.allFonts[i];
var font2D=$I$(4).getFont2D$java_awt_Font(font);
if (font2D.hasSupplementaryChars$()) {
fonts.add$O(font);
indices.add$O(Integer.valueOf$I(i));
}}
var len=fonts.size$();
this.supplementaryIndices=Clazz.array(Integer.TYPE, [len]);
for (var i=0; i < len; i++) {
this.supplementaryIndices[i]=(indices.get$I(i)).$c();
}
this.supplementaryFonts=fonts.toArray$OA(Clazz.array($I$(1), [len]));
}return this.supplementaryFonts;
}, p$1);

Clazz.newMeth(C$, 'getIndexFor$I',  function (cp) {
if (this.defaultFont.canDisplay$I(cp)) {
return 1;
}for (var i=0; i < p$1.getAllSCFonts.apply(this, []).length; i++) {
if (this.supplementaryFonts[i].canDisplay$I(cp)) {
return this.supplementaryIndices[i] + 2;
}}
return 1;
}, p$1);

Clazz.newMeth(C$, 'getFontIndex$C',  function (c) {
var blockIndex=c.$c() >> 9;
var block=this.blocks[blockIndex];
if (block == null ) {
block=Clazz.array(Integer.TYPE, [128]);
this.blocks[blockIndex]=block;
}var index=c.$c() & 127;
if (block[index] == 0) {
block[index]=p$1.getIndexFor$C.apply(this, [c]);
}return block[index];
});

Clazz.newMeth(C$, 'getFontIndex$I',  function (cp) {
if (cp < 65536) {
return this.getFontIndex$C(String.fromCharCode(cp));
}return p$1.getIndexFor$I.apply(this, [cp]);
});

Clazz.newMeth(C$, 'nextFontRunIndex$sun_text_CodePointIterator',  function (iter) {
var cp=iter.next$();
var fontIndex=1;
if (cp != -1) {
fontIndex=this.getFontIndex$I(cp);
while ((cp=iter.next$()) != -1){
if (this.getFontIndex$I(cp) != fontIndex) {
iter.prev$();
break;
}}
}return fontIndex;
});

Clazz.newMeth(C$, 'getFont$I$java_util_Map',  function (index, attributes) {
var font=this.defaultFont;
if (index >= 2) {
font=this.allFonts[index - 2];
}return font.deriveFont$java_util_Map(attributes);
});

Clazz.newMeth(C$, 'getInstance$',  function () {
if (C$.INSTANCE == null ) {
C$.INSTANCE=Clazz.new_(C$);
}return C$.INSTANCE;
}, 1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:45 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
