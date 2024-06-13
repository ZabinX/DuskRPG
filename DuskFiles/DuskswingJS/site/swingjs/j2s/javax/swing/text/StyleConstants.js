(function(){var P$=Clazz.newPackage("javax.swing.text"),I$=[[0,['javax.swing.text.StyleConstants','.CharacterConstants'],['javax.swing.text.StyleConstants','.FontConstants'],['javax.swing.text.StyleConstants','.ColorConstants'],['javax.swing.text.StyleConstants','.ParagraphConstants'],'java.awt.Color']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StyleConstants", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['ParagraphConstants',9],['CharacterConstants',9],['ColorConstants',9],['FontConstants',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['representation']]
,['O',['NameAttribute','java.lang.Object','+ResolveAttribute','+ModelAttribute','+BidiLevel','+FontFamily','+Family','+FontSize','+Size','+Bold','+Italic','+Underline','+StrikeThrough','+Superscript','+Subscript','+Foreground','+Background','+ComponentAttribute','+IconAttribute','+ComposedTextAttribute','+FirstLineIndent','+LeftIndent','+RightIndent','+LineSpacing','+SpaceAbove','+SpaceBelow','+Alignment','+TabSet','+Orientation','keys','Object[]']]]

Clazz.newMeth(C$, 'toString',  function () {
return this.representation;
});

Clazz.newMeth(C$, 'getBidiLevel$javax_swing_text_AttributeSet',  function (a) {
var o=a.getAttribute$O(C$.BidiLevel);
if (o != null ) {
return o.intValue$();
}return 0;
}, 1);

Clazz.newMeth(C$, 'setBidiLevel$javax_swing_text_MutableAttributeSet$I',  function (a, o) {
a.addAttribute$O$O(C$.BidiLevel,  new Integer(o));
}, 1);

Clazz.newMeth(C$, 'getComponent$javax_swing_text_AttributeSet',  function (a) {
return a.getAttribute$O(C$.ComponentAttribute);
}, 1);

Clazz.newMeth(C$, 'setComponent$javax_swing_text_MutableAttributeSet$java_awt_Component',  function (a, c) {
a.addAttribute$O$O("$ename", "component");
a.addAttribute$O$O(C$.ComponentAttribute, c);
}, 1);

Clazz.newMeth(C$, 'getIcon$javax_swing_text_AttributeSet',  function (a) {
return a.getAttribute$O(C$.IconAttribute);
}, 1);

Clazz.newMeth(C$, 'setIcon$javax_swing_text_MutableAttributeSet$javax_swing_Icon',  function (a, c) {
a.addAttribute$O$O("$ename", "icon");
a.addAttribute$O$O(C$.IconAttribute, c);
}, 1);

Clazz.newMeth(C$, 'getFontFamily$javax_swing_text_AttributeSet',  function (a) {
var family=a.getAttribute$O(C$.FontFamily);
if (family == null ) {
family="Monospaced";
}return family;
}, 1);

Clazz.newMeth(C$, 'setFontFamily$javax_swing_text_MutableAttributeSet$S',  function (a, fam) {
a.addAttribute$O$O(C$.FontFamily, fam);
}, 1);

Clazz.newMeth(C$, 'getFontSize$javax_swing_text_AttributeSet',  function (a) {
var size=a.getAttribute$O(C$.FontSize);
if (size != null ) {
return size.intValue$();
}return 12;
}, 1);

Clazz.newMeth(C$, 'setFontSize$javax_swing_text_MutableAttributeSet$I',  function (a, s) {
a.addAttribute$O$O(C$.FontSize,  new Integer(s));
}, 1);

Clazz.newMeth(C$, 'isBold$javax_swing_text_AttributeSet',  function (a) {
var bold=a.getAttribute$O(C$.Bold);
if (bold != null ) {
return bold.booleanValue$();
}return false;
}, 1);

Clazz.newMeth(C$, 'setBold$javax_swing_text_MutableAttributeSet$Z',  function (a, b) {
a.addAttribute$O$O(C$.Bold, Boolean.valueOf$Z(b));
}, 1);

Clazz.newMeth(C$, 'isItalic$javax_swing_text_AttributeSet',  function (a) {
var italic=a.getAttribute$O(C$.Italic);
if (italic != null ) {
return italic.booleanValue$();
}return false;
}, 1);

Clazz.newMeth(C$, 'setItalic$javax_swing_text_MutableAttributeSet$Z',  function (a, b) {
a.addAttribute$O$O(C$.Italic, Boolean.valueOf$Z(b));
}, 1);

Clazz.newMeth(C$, 'isUnderline$javax_swing_text_AttributeSet',  function (a) {
var underline=a.getAttribute$O(C$.Underline);
if (underline != null ) {
return underline.booleanValue$();
}return false;
}, 1);

Clazz.newMeth(C$, 'isStrikeThrough$javax_swing_text_AttributeSet',  function (a) {
var strike=a.getAttribute$O(C$.StrikeThrough);
if (strike != null ) {
return strike.booleanValue$();
}return false;
}, 1);

Clazz.newMeth(C$, 'isSuperscript$javax_swing_text_AttributeSet',  function (a) {
var superscript=a.getAttribute$O(C$.Superscript);
if (superscript != null ) {
return superscript.booleanValue$();
}return false;
}, 1);

Clazz.newMeth(C$, 'isSubscript$javax_swing_text_AttributeSet',  function (a) {
var subscript=a.getAttribute$O(C$.Subscript);
if (subscript != null ) {
return subscript.booleanValue$();
}return false;
}, 1);

Clazz.newMeth(C$, 'setUnderline$javax_swing_text_MutableAttributeSet$Z',  function (a, b) {
a.addAttribute$O$O(C$.Underline, Boolean.valueOf$Z(b));
}, 1);

Clazz.newMeth(C$, 'setStrikeThrough$javax_swing_text_MutableAttributeSet$Z',  function (a, b) {
a.addAttribute$O$O(C$.StrikeThrough, Boolean.valueOf$Z(b));
}, 1);

Clazz.newMeth(C$, 'setSuperscript$javax_swing_text_MutableAttributeSet$Z',  function (a, b) {
a.addAttribute$O$O(C$.Superscript, Boolean.valueOf$Z(b));
}, 1);

Clazz.newMeth(C$, 'setSubscript$javax_swing_text_MutableAttributeSet$Z',  function (a, b) {
a.addAttribute$O$O(C$.Subscript, Boolean.valueOf$Z(b));
}, 1);

Clazz.newMeth(C$, 'getForeground$javax_swing_text_AttributeSet',  function (a) {
var fg=a.getAttribute$O(C$.Foreground);
if (fg == null ) {
fg=$I$(5).none;
}return fg;
}, 1);

Clazz.newMeth(C$, 'setForeground$javax_swing_text_MutableAttributeSet$java_awt_Color',  function (a, fg) {
a.addAttribute$O$O(C$.Foreground, fg);
}, 1);

Clazz.newMeth(C$, 'getBackground$javax_swing_text_AttributeSet',  function (a) {
var fg=a.getAttribute$O(C$.Background);
if (fg == null ) {
fg=$I$(5).none;
}return fg;
}, 1);

Clazz.newMeth(C$, 'setBackground$javax_swing_text_MutableAttributeSet$java_awt_Color',  function (a, fg) {
a.addAttribute$O$O(C$.Background, fg);
}, 1);

Clazz.newMeth(C$, 'getFirstLineIndent$javax_swing_text_AttributeSet',  function (a) {
var indent=a.getAttribute$O(C$.FirstLineIndent);
if (indent != null ) {
return indent.floatValue$();
}return 0;
}, 1);

Clazz.newMeth(C$, 'setFirstLineIndent$javax_swing_text_MutableAttributeSet$F',  function (a, i) {
a.addAttribute$O$O(C$.FirstLineIndent,  new Float(i));
}, 1);

Clazz.newMeth(C$, 'getRightIndent$javax_swing_text_AttributeSet',  function (a) {
var indent=a.getAttribute$O(C$.RightIndent);
if (indent != null ) {
return indent.floatValue$();
}return 0;
}, 1);

Clazz.newMeth(C$, 'setRightIndent$javax_swing_text_MutableAttributeSet$F',  function (a, i) {
a.addAttribute$O$O(C$.RightIndent,  new Float(i));
}, 1);

Clazz.newMeth(C$, 'getLeftIndent$javax_swing_text_AttributeSet',  function (a) {
var indent=a.getAttribute$O(C$.LeftIndent);
if (indent != null ) {
return indent.floatValue$();
}return 0;
}, 1);

Clazz.newMeth(C$, 'setLeftIndent$javax_swing_text_MutableAttributeSet$F',  function (a, i) {
a.addAttribute$O$O(C$.LeftIndent,  new Float(i));
}, 1);

Clazz.newMeth(C$, 'getLineSpacing$javax_swing_text_AttributeSet',  function (a) {
var space=a.getAttribute$O(C$.LineSpacing);
if (space != null ) {
return space.floatValue$();
}return 0;
}, 1);

Clazz.newMeth(C$, 'setLineSpacing$javax_swing_text_MutableAttributeSet$F',  function (a, i) {
a.addAttribute$O$O(C$.LineSpacing,  new Float(i));
}, 1);

Clazz.newMeth(C$, 'getSpaceAbove$javax_swing_text_AttributeSet',  function (a) {
var space=a.getAttribute$O(C$.SpaceAbove);
if (space != null ) {
return space.floatValue$();
}return 0;
}, 1);

Clazz.newMeth(C$, 'setSpaceAbove$javax_swing_text_MutableAttributeSet$F',  function (a, i) {
a.addAttribute$O$O(C$.SpaceAbove,  new Float(i));
}, 1);

Clazz.newMeth(C$, 'getSpaceBelow$javax_swing_text_AttributeSet',  function (a) {
var space=a.getAttribute$O(C$.SpaceBelow);
if (space != null ) {
return space.floatValue$();
}return 0;
}, 1);

Clazz.newMeth(C$, 'setSpaceBelow$javax_swing_text_MutableAttributeSet$F',  function (a, i) {
a.addAttribute$O$O(C$.SpaceBelow,  new Float(i));
}, 1);

Clazz.newMeth(C$, 'getAlignment$javax_swing_text_AttributeSet',  function (a) {
var align=a.getAttribute$O(C$.Alignment);
if (align != null ) {
return align.intValue$();
}return 0;
}, 1);

Clazz.newMeth(C$, 'setAlignment$javax_swing_text_MutableAttributeSet$I',  function (a, align) {
a.addAttribute$O$O(C$.Alignment,  new Integer(align));
}, 1);

Clazz.newMeth(C$, 'getTabSet$javax_swing_text_AttributeSet',  function (a) {
var tabs=a.getAttribute$O(C$.TabSet);
return tabs;
}, 1);

Clazz.newMeth(C$, 'setTabSet$javax_swing_text_MutableAttributeSet$javax_swing_text_TabSet',  function (a, tabs) {
a.addAttribute$O$O(C$.TabSet, tabs);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (representation) {
;C$.$init$.apply(this);
this.representation=representation;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.NameAttribute=Clazz.new_(C$.c$$S,["name"]);
C$.ResolveAttribute=Clazz.new_(C$.c$$S,["resolver"]);
C$.ModelAttribute=Clazz.new_(C$.c$$S,["model"]);
C$.BidiLevel=Clazz.new_($I$(1,1).c$$S,["bidiLevel"]);
C$.FontFamily=Clazz.new_($I$(2,1).c$$S,["family"]);
C$.Family=C$.FontFamily;
C$.FontSize=Clazz.new_($I$(2,1).c$$S,["size"]);
C$.Size=C$.FontSize;
C$.Bold=Clazz.new_($I$(2,1).c$$S,["bold"]);
C$.Italic=Clazz.new_($I$(2,1).c$$S,["italic"]);
C$.Underline=Clazz.new_($I$(1,1).c$$S,["underline"]);
C$.StrikeThrough=Clazz.new_($I$(1,1).c$$S,["strikethrough"]);
C$.Superscript=Clazz.new_($I$(1,1).c$$S,["superscript"]);
C$.Subscript=Clazz.new_($I$(1,1).c$$S,["subscript"]);
C$.Foreground=Clazz.new_($I$(3,1).c$$S,["foreground"]);
C$.Background=Clazz.new_($I$(3,1).c$$S,["background"]);
C$.ComponentAttribute=Clazz.new_($I$(1,1).c$$S,["component"]);
C$.IconAttribute=Clazz.new_($I$(1,1).c$$S,["icon"]);
C$.ComposedTextAttribute=Clazz.new_(C$.c$$S,["composed text"]);
C$.FirstLineIndent=Clazz.new_($I$(4,1).c$$S,["FirstLineIndent"]);
C$.LeftIndent=Clazz.new_($I$(4,1).c$$S,["LeftIndent"]);
C$.RightIndent=Clazz.new_($I$(4,1).c$$S,["RightIndent"]);
C$.LineSpacing=Clazz.new_($I$(4,1).c$$S,["LineSpacing"]);
C$.SpaceAbove=Clazz.new_($I$(4,1).c$$S,["SpaceAbove"]);
C$.SpaceBelow=Clazz.new_($I$(4,1).c$$S,["SpaceBelow"]);
C$.Alignment=Clazz.new_($I$(4,1).c$$S,["Alignment"]);
C$.TabSet=Clazz.new_($I$(4,1).c$$S,["TabSet"]);
C$.Orientation=Clazz.new_($I$(4,1).c$$S,["Orientation"]);
C$.keys=Clazz.array(java.lang.Object, -1, [C$.NameAttribute, C$.ResolveAttribute, C$.BidiLevel, C$.FontFamily, C$.FontSize, C$.Bold, C$.Italic, C$.Underline, C$.StrikeThrough, C$.Superscript, C$.Subscript, C$.Foreground, C$.Background, C$.ComponentAttribute, C$.IconAttribute, C$.FirstLineIndent, C$.LeftIndent, C$.RightIndent, C$.LineSpacing, C$.SpaceAbove, C$.SpaceBelow, C$.Alignment, C$.TabSet, C$.Orientation, C$.ModelAttribute, C$.ComposedTextAttribute]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.StyleConstants, "ParagraphConstants", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.text.StyleConstants', [['javax.swing.text.AttributeSet','javax.swing.text.AttributeSet.ParagraphAttribute']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$S',  function (representation) {
;C$.superclazz.c$$S.apply(this,[representation]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StyleConstants, "CharacterConstants", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.text.StyleConstants', [['javax.swing.text.AttributeSet','javax.swing.text.AttributeSet.CharacterAttribute']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$S',  function (representation) {
;C$.superclazz.c$$S.apply(this,[representation]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StyleConstants, "ColorConstants", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.text.StyleConstants', [['javax.swing.text.AttributeSet','javax.swing.text.AttributeSet.ColorAttribute'], ['javax.swing.text.AttributeSet','javax.swing.text.AttributeSet.CharacterAttribute']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$S',  function (representation) {
;C$.superclazz.c$$S.apply(this,[representation]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StyleConstants, "FontConstants", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.text.StyleConstants', [['javax.swing.text.AttributeSet','javax.swing.text.AttributeSet.FontAttribute'], ['javax.swing.text.AttributeSet','javax.swing.text.AttributeSet.CharacterAttribute']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$S',  function (representation) {
;C$.superclazz.c$$S.apply(this,[representation]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:22 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
