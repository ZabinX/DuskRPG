(function(){var P$=Clazz.newPackage("javax.swing.text.html"),I$=[[0,['javax.swing.text.html.HTML','.Attribute']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Option", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['selected'],'S',['label'],'O',['attr','javax.swing.text.AttributeSet']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_AttributeSet',  function (attr) {
;C$.$init$.apply(this);
this.attr=attr.copyAttributes$();
this.selected=(attr.getAttribute$O($I$(1).SELECTED) != null );
}, 1);

Clazz.newMeth(C$, 'setLabel$S',  function (label) {
this.label=label;
});

Clazz.newMeth(C$, 'getLabel$',  function () {
return this.label;
});

Clazz.newMeth(C$, 'getAttributes$',  function () {
return this.attr;
});

Clazz.newMeth(C$, 'toString',  function () {
return this.label;
});

Clazz.newMeth(C$, 'setSelection$Z',  function (state) {
this.selected=state;
});

Clazz.newMeth(C$, 'isSelected$',  function () {
return this.selected;
});

Clazz.newMeth(C$, 'getValue$',  function () {
var value=this.attr.getAttribute$O($I$(1).VALUE);
if (value == null ) {
value=this.label;
}return value;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:30 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
