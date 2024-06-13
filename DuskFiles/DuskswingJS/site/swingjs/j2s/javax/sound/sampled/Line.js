(function(){var P$=Clazz.newPackage("javax.sound.sampled"),I$=[[0,'javax.sound.sampled.Line']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "Line", function(){
});
C$.$classes$=[['Info',9]];
;
(function(){/*c*/var C$=Clazz.newClass(P$.Line, "Info", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['lineClass','Class']]]

Clazz.newMeth(C$, 'c$$Class',  function (lineClass) {
;C$.$init$.apply(this);
if (lineClass == null ) {
this.lineClass=Clazz.getClass($I$(1),['addLineListener$javax_sound_sampled_LineListener','close$','getControl$javax_sound_sampled_Control_Type','getControls$','getLineInfo$','isControlSupported$javax_sound_sampled_Control_Type','isOpen$','open$','removeLineListener$javax_sound_sampled_LineListener']);
} else {
this.lineClass=lineClass;
}}, 1);

Clazz.newMeth(C$, 'getLineClass$',  function () {
return this.lineClass;
});

Clazz.newMeth(C$, 'matches$javax_sound_sampled_Line_Info',  function (info) {
if (!(this.getClass$().isInstance$O(info))) {
return false;
}if (!(this.getLineClass$().isAssignableFrom$Class(info.getLineClass$()))) {
return false;
}return true;
});

Clazz.newMeth(C$, 'toString',  function () {
var fullPackagePath="javax.sound.sampled.";
var initialString= String.instantialize(this.getLineClass$().toString());
var finalString;
var index=initialString.indexOf$S(fullPackagePath);
if (index != -1) {
finalString=initialString.substring$I$I(0, index) + initialString.substring$I$I((index + fullPackagePath.length$()), initialString.length$());
} else {
finalString=initialString;
}return finalString;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:50 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
