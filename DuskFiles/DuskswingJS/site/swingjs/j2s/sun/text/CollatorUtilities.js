(function(){var P$=Clazz.newPackage("sun.text"),I$=[[0,['sun.text.normalizer.NormalizerBase','.Mode'],'sun.text.normalizer.NormalizerBase']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CollatorUtilities");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['legacyModeMap','sun.text.normalizer.NormalizerBase.Mode[]']]]

Clazz.newMeth(C$, 'toLegacyMode$sun_text_normalizer_NormalizerBase_Mode',  function (mode) {
var legacyMode=C$.legacyModeMap.length;
while (legacyMode > 0){
--legacyMode;
if (C$.legacyModeMap[legacyMode] === mode ) {
break;
}}
return legacyMode;
}, 1);

Clazz.newMeth(C$, 'toNormalizerMode$I',  function (mode) {
var normalizerMode;
try {
normalizerMode=C$.legacyModeMap[mode];
} catch (e) {
if (Clazz.exceptionOf(e,"ArrayIndexOutOfBoundsException")){
normalizerMode=$I$(2).NONE;
} else {
throw e;
}
}
return normalizerMode;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.legacyModeMap=Clazz.array($I$(1), -1, [$I$(2).NONE, $I$(2).NFD, $I$(2).NFKD]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:50 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
