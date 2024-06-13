(function(){var P$=Clazz.newPackage("java.awt"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "SystemColor", null, 'java.awt.Color', 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['index']]
,['O',['systemColors','int[]','desktop','java.awt.SystemColor','+activeCaption','+activeCaptionText','+activeCaptionBorder','+inactiveCaption','+inactiveCaptionText','+inactiveCaptionBorder','+window','+windowBorder','+windowText','+menu','+menuText','+text','+textText','+textHighlight','+textHighlightText','+textInactiveText','+control','+controlText','+controlHighlight','+controlLtHighlight','+controlShadow','+controlDkShadow','+scrollbar','+info','+infoText','systemColorObjects','java.awt.SystemColor[]']]]

Clazz.newMeth(C$, 'updateSystemColors$',  function () {
for (var i=0; i < C$.systemColors.length; i++) {
C$.systemColorObjects[i].value=C$.systemColors[i];
}
}, 1);

Clazz.newMeth(C$, 'c$$B',  function (index) {
;C$.superclazz.c$$I.apply(this,[C$.systemColors[index]]);C$.$init$.apply(this);
this.index=index;
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
return this.getClass$().getName$() + "[i=" + (this.index) + "]" ;
});

Clazz.newMeth(C$, 'readResolve',  function () {
return C$.systemColorObjects[this.value];
}, p$1);

Clazz.newMeth(C$, 'writeReplace',  function () {
var color=Clazz.new_(C$.c$$B,[($b$[0] = this.index, $b$[0])]);
color.value=this.index;
return color;
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.systemColors=Clazz.array(Integer.TYPE, -1, [-16753572, -16777088, -1, -4144960, -8355712, -4144960, -4144960, -1, -16777216, -16777216, -4144960, -16777216, -4144960, -16777216, -16777088, -1, -8355712, -4144960, -16777216, -1, -2039584, -8355712, -16777216, -2039584, -2039808, -16777216]);
C$.desktop=Clazz.new_(C$.c$$B,[0]);
C$.activeCaption=Clazz.new_(C$.c$$B,[1]);
C$.activeCaptionText=Clazz.new_(C$.c$$B,[2]);
C$.activeCaptionBorder=Clazz.new_(C$.c$$B,[3]);
C$.inactiveCaption=Clazz.new_(C$.c$$B,[4]);
C$.inactiveCaptionText=Clazz.new_(C$.c$$B,[5]);
C$.inactiveCaptionBorder=Clazz.new_(C$.c$$B,[6]);
C$.window=Clazz.new_(C$.c$$B,[7]);
C$.windowBorder=Clazz.new_(C$.c$$B,[8]);
C$.windowText=Clazz.new_(C$.c$$B,[9]);
C$.menu=Clazz.new_(C$.c$$B,[10]);
C$.menuText=Clazz.new_(C$.c$$B,[11]);
C$.text=Clazz.new_(C$.c$$B,[12]);
C$.textText=Clazz.new_(C$.c$$B,[13]);
C$.textHighlight=Clazz.new_(C$.c$$B,[14]);
C$.textHighlightText=Clazz.new_(C$.c$$B,[15]);
C$.textInactiveText=Clazz.new_(C$.c$$B,[16]);
C$.control=Clazz.new_(C$.c$$B,[17]);
C$.controlText=Clazz.new_(C$.c$$B,[18]);
C$.controlHighlight=Clazz.new_(C$.c$$B,[19]);
C$.controlLtHighlight=Clazz.new_(C$.c$$B,[20]);
C$.controlShadow=Clazz.new_(C$.c$$B,[21]);
C$.controlDkShadow=Clazz.new_(C$.c$$B,[22]);
C$.scrollbar=Clazz.new_(C$.c$$B,[23]);
C$.info=Clazz.new_(C$.c$$B,[24]);
C$.infoText=Clazz.new_(C$.c$$B,[25]);
C$.systemColorObjects=Clazz.array(C$, -1, [C$.desktop, C$.activeCaption, C$.activeCaptionText, C$.activeCaptionBorder, C$.inactiveCaption, C$.inactiveCaptionText, C$.inactiveCaptionBorder, C$.window, C$.windowBorder, C$.windowText, C$.menu, C$.menuText, C$.text, C$.textText, C$.textHighlight, C$.textHighlightText, C$.textInactiveText, C$.control, C$.controlText, C$.controlHighlight, C$.controlLtHighlight, C$.controlShadow, C$.controlDkShadow, C$.scrollbar, C$.info, C$.infoText]);
{
C$.updateSystemColors$();
};
};
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:07 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
