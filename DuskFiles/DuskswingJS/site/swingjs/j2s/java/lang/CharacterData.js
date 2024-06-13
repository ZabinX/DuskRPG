(function(){var P$=java.lang,I$=[[0,'CharacterDataLatin1','CharacterData00','CharacterData01','CharacterData02','CharacterData0E','CharacterDataPrivateUse','CharacterDataUndefined']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CharacterData");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'toUpperCaseEx$I',  function (ch) {
return this.toUpperCase$I(ch);
});

Clazz.newMeth(C$, 'toUpperCaseCharArray$I',  function (ch) {
return null;
});

Clazz.newMeth(C$, 'of$I',  function (ch) {
if (ch >>> 8 == 0) {
return $I$(1).instance;
} else {
switch (ch >>> 16) {
case (0):
return $I$(2).instance;
case (1):
return $I$(3).instance;
case (2):
return $I$(4).instance;
case (14):
return $I$(5).instance;
case (15):
case (16):
return $I$(6).instance;
default:
return $I$(7).instance;
}
}}, 1);

Clazz.newMeth(C$, 'of1$I',  function (ch) {
if (ch >>> 8 == 0) {
return $I$(1).instance;
} else {
switch (ch >>> 16) {
case (0):
return $I$(2).instance;
case (1):
return $I$(3).instance;
case (2):
return $I$(4).instance;
case (14):
return $I$(5).instance;
case (15):
case (16):
return $I$(6).instance;
default:
return $I$(7).instance;
}
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:16 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
