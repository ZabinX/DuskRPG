(function(){var P$=Clazz.newPackage("sun.font"),p$1={},I$=[[0,'java.util.concurrent.ConcurrentHashMap','java.util.Locale','java.util.HashMap']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FontFamily");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.logicalFont=false;
},1);

C$.$fields$=[['Z',['logicalFont'],'I',['familyRank'],'S',['familyName'],'O',['plain','sun.font.Font2D','+bold','+italic','+bolditalic']]
,['O',['familyNameMap','java.util.concurrent.ConcurrentHashMap','allLocaleNames','java.util.HashMap']]]

Clazz.newMeth(C$, 'getFamily$S',  function (name) {
return C$.familyNameMap.get$O(name.toLowerCase$java_util_Locale($I$(2).ENGLISH));
}, 1);

Clazz.newMeth(C$, 'getAllFamilyNames$',  function () {
return null;
}, 1);

Clazz.newMeth(C$, 'remove$sun_font_Font2D',  function (font2D) {
var name=font2D.getFamilyName$java_util_Locale($I$(2).ENGLISH);
var family=C$.getFamily$S(name);
if (family == null ) {
return;
}if (family.plain === font2D ) {
family.plain=null;
}if (family.bold === font2D ) {
family.bold=null;
}if (family.italic === font2D ) {
family.italic=null;
}if (family.bolditalic === font2D ) {
family.bolditalic=null;
}if (family.plain == null  && family.bold == null   && family.plain == null   && family.bold == null  ) {
C$.familyNameMap.remove$O(name);
}}, 1);

Clazz.newMeth(C$, 'c$$S$Z$I',  function (name, isLogFont, rank) {
;C$.$init$.apply(this);
this.logicalFont=isLogFont;
this.familyName=name;
this.familyRank=rank;
C$.familyNameMap.put$O$O(name.toLowerCase$java_util_Locale($I$(2).ENGLISH), this);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (name) {
;C$.$init$.apply(this);
this.logicalFont=false;
this.familyName=name;
this.familyRank=4;
}, 1);

Clazz.newMeth(C$, 'getFamilyName$',  function () {
return this.familyName;
});

Clazz.newMeth(C$, 'getRank$',  function () {
return this.familyRank;
});

Clazz.newMeth(C$, 'isFromSameSource$sun_font_Font2D',  function (font) {
return false;
}, p$1);

Clazz.newMeth(C$, 'setFont$sun_font_Font2D$I',  function (font, style) {
if ((font.getRank$() > this.familyRank) && !p$1.isFromSameSource$sun_font_Font2D.apply(this, [font]) ) {
return;
}switch (style) {
case 0:
this.plain=font;
break;
case 1:
this.bold=font;
break;
case 2:
this.italic=font;
break;
case 3:
this.bolditalic=font;
break;
default:
break;
}
});

Clazz.newMeth(C$, 'getFontWithExactStyleMatch$I',  function (style) {
switch (style) {
case 0:
return this.plain;
case 1:
return this.bold;
case 2:
return this.italic;
case 3:
return this.bolditalic;
default:
return null;
}
});

Clazz.newMeth(C$, 'getFont$I',  function (style) {
switch (style) {
case 0:
return this.plain;
case 1:
if (this.bold != null ) {
return this.bold;
} else if (this.plain != null  && this.plain.canDoStyle$I(style) ) {
return this.plain;
} else {
return null;
}case 2:
if (this.italic != null ) {
return this.italic;
} else if (this.plain != null  && this.plain.canDoStyle$I(style) ) {
return this.plain;
} else {
return null;
}case 3:
if (this.bolditalic != null ) {
return this.bolditalic;
} else if (this.italic != null  && this.italic.canDoStyle$I(style) ) {
return this.italic;
} else if (this.bold != null  && this.bold.canDoStyle$I(style) ) {
return this.italic;
} else if (this.plain != null  && this.plain.canDoStyle$I(style) ) {
return this.plain;
} else {
return null;
}default:
return null;
}
});

Clazz.newMeth(C$, 'getClosestStyle$I',  function (style) {
switch (style) {
case 0:
if (this.bold != null ) {
return this.bold;
} else if (this.italic != null ) {
return this.italic;
} else {
return this.bolditalic;
}case 1:
if (this.plain != null ) {
return this.plain;
} else if (this.bolditalic != null ) {
return this.bolditalic;
} else {
return this.italic;
}case 2:
if (this.bolditalic != null ) {
return this.bolditalic;
} else if (this.plain != null ) {
return this.plain;
} else {
return this.bold;
}case 3:
if (this.italic != null ) {
return this.italic;
} else if (this.bold != null ) {
return this.bold;
} else {
return this.plain;
}}
return null;
});

Clazz.newMeth(C$, 'addLocaleNames$sun_font_FontFamily$SA',  function (family, names) {
if (C$.allLocaleNames == null ) {
C$.allLocaleNames=Clazz.new_($I$(3,1));
}for (var i=0; i < names.length; i++) {
C$.allLocaleNames.put$O$O(names[i].toLowerCase$(), family);
}
}, 1);

Clazz.newMeth(C$, 'getLocaleFamily$S',  function (name) {
if (C$.allLocaleNames == null ) {
return null;
}return C$.allLocaleNames.get$O(name.toLowerCase$());
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
return "Font family: " + this.familyName + " plain=" + this.plain + " bold=" + this.bold + " italic=" + this.italic + " bolditalic=" + this.bolditalic ;
});

C$.$static$=function(){C$.$static$=0;
C$.familyNameMap=Clazz.new_($I$(1,1));
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:44 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
