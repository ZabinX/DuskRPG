(function(){var P$=Clazz.newPackage("java.nio.charset"),I$=[[0,'java.nio.charset.Charset','AssertionError']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StandardCharsets");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['US_ASCII','java.nio.charset.Charset','+ISO_8859_1','+UTF_8','+UTF_16BE','+UTF_16LE','+UTF_16']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
throw Clazz.new_($I$(2,1).c$$O,["No java.nio.charset.StandardCharsets instances for you!"]);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.US_ASCII=$I$(1).forName$S("US-ASCII");
C$.ISO_8859_1=$I$(1).forName$S("ISO-8859-1");
C$.UTF_8=$I$(1).forName$S("UTF-8");
C$.UTF_16BE=$I$(1).forName$S("UTF-16BE");
C$.UTF_16LE=$I$(1).forName$S("UTF-16LE");
C$.UTF_16=$I$(1).forName$S("UTF-16");
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:22 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
