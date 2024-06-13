(function(){var P$=Clazz.newPackage("java.awt"),I$=[[0,['java.awt.Dialog','.ModalityType']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Dialog", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'swingjs.a2s.Dialog');
C$.$classes$=[['ModalityType',25],['ModalExclusionType',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['DEFAULT_MODALITY_TYPE','java.awt.Dialog.ModalityType']]]

Clazz.newMeth(C$, 'c$$java_awt_Frame',  function (owner) {
;C$.superclazz.c$$java_awt_Frame.apply(this,[owner]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Frame$Z',  function (owner, modal) {
;C$.superclazz.c$$java_awt_Frame$Z.apply(this,[owner, modal]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Frame$S',  function (owner, title) {
;C$.superclazz.c$$java_awt_Frame$S.apply(this,[owner, title]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Frame$S$Z',  function (owner, title, modal) {
;C$.superclazz.c$$java_awt_Frame$S$Z.apply(this,[owner, title, modal]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Frame$S$Z$java_awt_GraphicsConfiguration',  function (owner, title, modal, gc) {
;C$.superclazz.c$$java_awt_Frame$S$Z$java_awt_GraphicsConfiguration.apply(this,[owner, title, modal, gc]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Dialog',  function (owner) {
;C$.superclazz.c$$java_awt_Dialog.apply(this,[owner]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Dialog$S',  function (owner, title) {
;C$.superclazz.c$$java_awt_Dialog$S$Z.apply(this,[owner, title, false]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Dialog$S$Z',  function (owner, title, modal) {
;C$.superclazz.c$$java_awt_Dialog$S$Z.apply(this,[owner, title, modal]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Dialog$S$Z$java_awt_GraphicsConfiguration',  function (owner, title, modal, gc) {
;C$.superclazz.c$$java_awt_Dialog$S$Z$java_awt_GraphicsConfiguration.apply(this,[owner, title, modal, gc]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Window',  function (owner) {
;C$.superclazz.c$$java_awt_Window.apply(this,[owner]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Window$S',  function (owner, title) {
;C$.superclazz.c$$java_awt_Window$S.apply(this,[owner, title]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Window$java_awt_Dialog_ModalityType',  function (owner, modalityType) {
;C$.superclazz.c$$java_awt_Window$java_awt_Dialog_ModalityType.apply(this,[owner, modalityType]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Window$S$java_awt_Dialog_ModalityType',  function (owner, title, modalityType) {
;C$.superclazz.c$$java_awt_Window$S$java_awt_Dialog_ModalityType.apply(this,[owner, title, modalityType]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Window$S$java_awt_Dialog_ModalityType$java_awt_GraphicsConfiguration',  function (owner, title, modalityType, gc) {
;C$.superclazz.c$$java_awt_Window$S$java_awt_Dialog_ModalityType$java_awt_GraphicsConfiguration.apply(this,[owner, title, modalityType, gc]);C$.$init$.apply(this);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.DEFAULT_MODALITY_TYPE=$I$(1).APPLICATION_MODAL;
};
;
(function(){/*e*/var C$=Clazz.newClass(P$.Dialog, "ModalityType", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "MODELESS", 0, []);
Clazz.newEnumConst($vals, C$.c$, "DOCUMENT_MODAL", 1, []);
Clazz.newEnumConst($vals, C$.c$, "APPLICATION_MODAL", 2, []);
Clazz.newEnumConst($vals, C$.c$, "TOOLKIT_MODAL", 3, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){/*e*/var C$=Clazz.newClass(P$.Dialog, "ModalExclusionType", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "NO_EXCLUDE", 0, []);
Clazz.newEnumConst($vals, C$.c$, "APPLICATION_EXCLUDE", 1, []);
Clazz.newEnumConst($vals, C$.c$, "TOOLKIT_EXCLUDE", 2, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:02 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
