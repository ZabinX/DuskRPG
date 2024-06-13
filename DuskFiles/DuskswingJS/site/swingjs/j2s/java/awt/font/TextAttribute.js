(function(){var P$=Clazz.newPackage("java.awt.font"),I$=[[0,'java.util.HashMap']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TextAttribute", null, ['java.text.AttributedCharacterIterator','.Attribute']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['$instanceMap','java.util.Map','FAMILY','java.awt.font.TextAttribute','+WEIGHT','WEIGHT_EXTRA_LIGHT','Float','+WEIGHT_LIGHT','+WEIGHT_DEMILIGHT','+WEIGHT_REGULAR','+WEIGHT_SEMIBOLD','+WEIGHT_MEDIUM','+WEIGHT_DEMIBOLD','+WEIGHT_BOLD','+WEIGHT_HEAVY','+WEIGHT_EXTRABOLD','+WEIGHT_ULTRABOLD','WIDTH','java.awt.font.TextAttribute','WIDTH_CONDENSED','Float','+WIDTH_SEMI_CONDENSED','+WIDTH_REGULAR','+WIDTH_SEMI_EXTENDED','+WIDTH_EXTENDED','POSTURE','java.awt.font.TextAttribute','POSTURE_REGULAR','Float','+POSTURE_OBLIQUE','SIZE','java.awt.font.TextAttribute','+TRANSFORM','+SUPERSCRIPT','SUPERSCRIPT_SUPER','Integer','+SUPERSCRIPT_SUB','FONT','java.awt.font.TextAttribute','+CHAR_REPLACEMENT','+FOREGROUND','+BACKGROUND','+UNDERLINE','UNDERLINE_ON','Integer','STRIKETHROUGH','java.awt.font.TextAttribute','STRIKETHROUGH_ON','Boolean','RUN_DIRECTION','java.awt.font.TextAttribute','RUN_DIRECTION_LTR','Boolean','+RUN_DIRECTION_RTL','BIDI_EMBEDDING','java.awt.font.TextAttribute','+JUSTIFICATION','JUSTIFICATION_FULL','Float','+JUSTIFICATION_NONE','INPUT_METHOD_HIGHLIGHT','java.awt.font.TextAttribute','+INPUT_METHOD_UNDERLINE','UNDERLINE_LOW_ONE_PIXEL','Integer','+UNDERLINE_LOW_TWO_PIXEL','+UNDERLINE_LOW_DOTTED','+UNDERLINE_LOW_GRAY','+UNDERLINE_LOW_DASHED','SWAP_COLORS','java.awt.font.TextAttribute','SWAP_COLORS_ON','Boolean','NUMERIC_SHAPING','java.awt.font.TextAttribute','+KERNING','KERNING_ON','Integer','LIGATURES','java.awt.font.TextAttribute','LIGATURES_ON','Integer','TRACKING','java.awt.font.TextAttribute','TRACKING_TIGHT','Float','+TRACKING_LOOSE']]]

Clazz.newMeth(C$, 'c$$S',  function (name) {
;C$.superclazz.c$$S.apply(this,[name]);C$.$init$.apply(this);
if (this.getClass$() === Clazz.getClass(C$) ) {
C$.$instanceMap.put$O$O(name, this);
}}, 1);

Clazz.newMeth(C$, 'readResolve$',  function () {
if (this.getClass$() !== Clazz.getClass(C$) ) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["subclass didn\'t correctly implement readResolve"]);
}var instance=C$.$instanceMap.get$O(this.getName$());
if (instance != null ) {
return instance;
} else {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["unknown attribute name"]);
}});

C$.$static$=function(){C$.$static$=0;
C$.$instanceMap=Clazz.new_($I$(1,1).c$$I,[29]);
C$.FAMILY=Clazz.new_(C$.c$$S,["family"]);
C$.WEIGHT=Clazz.new_(C$.c$$S,["weight"]);
C$.WEIGHT_EXTRA_LIGHT=Float.valueOf$F(0.5);
C$.WEIGHT_LIGHT=Float.valueOf$F(0.75);
C$.WEIGHT_DEMILIGHT=Float.valueOf$F(0.875);
C$.WEIGHT_REGULAR=Float.valueOf$F(1.0);
C$.WEIGHT_SEMIBOLD=Float.valueOf$F(1.25);
C$.WEIGHT_MEDIUM=Float.valueOf$F(1.5);
C$.WEIGHT_DEMIBOLD=Float.valueOf$F(1.75);
C$.WEIGHT_BOLD=Float.valueOf$F(2.0);
C$.WEIGHT_HEAVY=Float.valueOf$F(2.25);
C$.WEIGHT_EXTRABOLD=Float.valueOf$F(2.5);
C$.WEIGHT_ULTRABOLD=Float.valueOf$F(2.75);
C$.WIDTH=Clazz.new_(C$.c$$S,["width"]);
C$.WIDTH_CONDENSED=Float.valueOf$F(0.75);
C$.WIDTH_SEMI_CONDENSED=Float.valueOf$F(0.875);
C$.WIDTH_REGULAR=Float.valueOf$F(1.0);
C$.WIDTH_SEMI_EXTENDED=Float.valueOf$F(1.25);
C$.WIDTH_EXTENDED=Float.valueOf$F(1.5);
C$.POSTURE=Clazz.new_(C$.c$$S,["posture"]);
C$.POSTURE_REGULAR=Float.valueOf$F(0.0);
C$.POSTURE_OBLIQUE=Float.valueOf$F(0.2);
C$.SIZE=Clazz.new_(C$.c$$S,["size"]);
C$.TRANSFORM=Clazz.new_(C$.c$$S,["transform"]);
C$.SUPERSCRIPT=Clazz.new_(C$.c$$S,["superscript"]);
C$.SUPERSCRIPT_SUPER=Integer.valueOf$I(1);
C$.SUPERSCRIPT_SUB=Integer.valueOf$I(-1);
C$.FONT=Clazz.new_(C$.c$$S,["font"]);
C$.CHAR_REPLACEMENT=Clazz.new_(C$.c$$S,["char_replacement"]);
C$.FOREGROUND=Clazz.new_(C$.c$$S,["foreground"]);
C$.BACKGROUND=Clazz.new_(C$.c$$S,["background"]);
C$.UNDERLINE=Clazz.new_(C$.c$$S,["underline"]);
C$.UNDERLINE_ON=Integer.valueOf$I(0);
C$.STRIKETHROUGH=Clazz.new_(C$.c$$S,["strikethrough"]);
C$.STRIKETHROUGH_ON=Boolean.TRUE;
C$.RUN_DIRECTION=Clazz.new_(C$.c$$S,["run_direction"]);
C$.RUN_DIRECTION_LTR=Boolean.FALSE;
C$.RUN_DIRECTION_RTL=Boolean.TRUE;
C$.BIDI_EMBEDDING=Clazz.new_(C$.c$$S,["bidi_embedding"]);
C$.JUSTIFICATION=Clazz.new_(C$.c$$S,["justification"]);
C$.JUSTIFICATION_FULL=Float.valueOf$F(1.0);
C$.JUSTIFICATION_NONE=Float.valueOf$F(0.0);
C$.INPUT_METHOD_HIGHLIGHT=Clazz.new_(C$.c$$S,["input method highlight"]);
C$.INPUT_METHOD_UNDERLINE=Clazz.new_(C$.c$$S,["input method underline"]);
C$.UNDERLINE_LOW_ONE_PIXEL=Integer.valueOf$I(1);
C$.UNDERLINE_LOW_TWO_PIXEL=Integer.valueOf$I(2);
C$.UNDERLINE_LOW_DOTTED=Integer.valueOf$I(3);
C$.UNDERLINE_LOW_GRAY=Integer.valueOf$I(4);
C$.UNDERLINE_LOW_DASHED=Integer.valueOf$I(5);
C$.SWAP_COLORS=Clazz.new_(C$.c$$S,["swap_colors"]);
C$.SWAP_COLORS_ON=Boolean.TRUE;
C$.NUMERIC_SHAPING=Clazz.new_(C$.c$$S,["numeric_shaping"]);
C$.KERNING=Clazz.new_(C$.c$$S,["kerning"]);
C$.KERNING_ON=Integer.valueOf$I(1);
C$.LIGATURES=Clazz.new_(C$.c$$S,["ligatures"]);
C$.LIGATURES_ON=Integer.valueOf$I(1);
C$.TRACKING=Clazz.new_(C$.c$$S,["tracking"]);
C$.TRACKING_TIGHT=Float.valueOf$F(-0.04);
C$.TRACKING_LOOSE=Float.valueOf$F(0.04);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:09 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
