(function(){var P$=Clazz.newPackage("java.awt.im"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "InputMethodHighlight");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['selected'],'I',['state','variation'],'O',['style','java.util.Map']]
,['O',['UNSELECTED_RAW_TEXT_HIGHLIGHT','java.awt.im.InputMethodHighlight','+SELECTED_RAW_TEXT_HIGHLIGHT','+UNSELECTED_CONVERTED_TEXT_HIGHLIGHT','+SELECTED_CONVERTED_TEXT_HIGHLIGHT']]]

Clazz.newMeth(C$, 'c$$Z$I',  function (selected, state) {
C$.c$$Z$I$I$java_util_Map.apply(this, [selected, state, 0, null]);
}, 1);

Clazz.newMeth(C$, 'c$$Z$I$I',  function (selected, state, variation) {
C$.c$$Z$I$I$java_util_Map.apply(this, [selected, state, variation, null]);
}, 1);

Clazz.newMeth(C$, 'c$$Z$I$I$java_util_Map',  function (selected, state, variation, style) {
;C$.$init$.apply(this);
this.selected=selected;
if (!(state == 0 || state == 1 )) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["unknown input method highlight state"]);
}this.state=state;
this.variation=variation;
this.style=style;
}, 1);

Clazz.newMeth(C$, 'isSelected$',  function () {
return this.selected;
});

Clazz.newMeth(C$, 'getState$',  function () {
return this.state;
});

Clazz.newMeth(C$, 'getVariation$',  function () {
return this.variation;
});

Clazz.newMeth(C$, 'getStyle$',  function () {
return this.style;
});

C$.$static$=function(){C$.$static$=0;
C$.UNSELECTED_RAW_TEXT_HIGHLIGHT=Clazz.new_(C$.c$$Z$I,[false, 0]);
C$.SELECTED_RAW_TEXT_HIGHLIGHT=Clazz.new_(C$.c$$Z$I,[true, 0]);
C$.UNSELECTED_CONVERTED_TEXT_HIGHLIGHT=Clazz.new_(C$.c$$Z$I,[false, 1]);
C$.SELECTED_CONVERTED_TEXT_HIGHLIGHT=Clazz.new_(C$.c$$Z$I,[true, 1]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:11 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
