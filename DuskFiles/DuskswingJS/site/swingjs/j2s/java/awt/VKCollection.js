(function(){var P$=Clazz.newPackage("java.awt"),I$=[[0,'sun.awt.AppContext','java.util.HashMap','java.util.StringTokenizer','java.util.Collections','java.awt.VKCollection','StringBuilder']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VKCollection");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['code2name','java.util.Map','+name2code']]
,['I',['VK_ENTER','VK_BACK_SPACE','VK_TAB','VK_CANCEL','VK_CLEAR','VK_SHIFT','VK_CONTROL','VK_ALT','VK_PAUSE','VK_CAPS_LOCK','VK_ESCAPE','VK_SPACE','VK_PAGE_UP','VK_PAGE_DOWN','VK_END','VK_HOME','VK_LEFT','VK_UP','VK_RIGHT','VK_DOWN','VK_COMMA','VK_MINUS','VK_PERIOD','VK_SLASH','VK_0','VK_1','VK_2','VK_3','VK_4','VK_5','VK_6','VK_7','VK_8','VK_9','VK_SEMICOLON','VK_EQUALS','VK_A','VK_B','VK_C','VK_D','VK_E','VK_F','VK_G','VK_H','VK_I','VK_J','VK_K','VK_L','VK_M','VK_N','VK_O','VK_P','VK_Q','VK_R','VK_S','VK_T','VK_U','VK_V','VK_W','VK_X','VK_Y','VK_Z','VK_OPEN_BRACKET','VK_BACK_SLASH','VK_CLOSE_BRACKET','VK_NUMPAD0','VK_NUMPAD1','VK_NUMPAD2','VK_NUMPAD3','VK_NUMPAD4','VK_NUMPAD5','VK_NUMPAD6','VK_NUMPAD7','VK_NUMPAD8','VK_NUMPAD9','VK_MULTIPLY','VK_ADD','VK_SEPARATER','VK_SEPARATOR','VK_SUBTRACT','VK_DECIMAL','VK_DIVIDE','VK_DELETE','VK_NUM_LOCK','VK_SCROLL_LOCK','VK_F1','VK_F2','VK_F3','VK_F4','VK_F5','VK_F6','VK_F7','VK_F8','VK_F9','VK_F10','VK_F11','VK_F12','VK_F13','VK_F14','VK_F15','VK_F16','VK_F17','VK_F18','VK_F19','VK_F20','VK_F21','VK_F22','VK_F23','VK_F24','VK_PRINTSCREEN','VK_INSERT','VK_HELP','VK_META','VK_BACK_QUOTE','VK_QUOTE','VK_KP_UP','VK_KP_DOWN','VK_KP_LEFT','VK_KP_RIGHT','VK_DEAD_GRAVE','VK_DEAD_ACUTE','VK_DEAD_CIRCUMFLEX','VK_DEAD_TILDE','VK_DEAD_MACRON','VK_DEAD_BREVE','VK_DEAD_ABOVEDOT','VK_DEAD_DIAERESIS','VK_DEAD_ABOVERING','VK_DEAD_DOUBLEACUTE','VK_DEAD_CARON','VK_DEAD_CEDILLA','VK_DEAD_OGONEK','VK_DEAD_IOTA','VK_DEAD_VOICED_SOUND','VK_DEAD_SEMIVOICED_SOUND','VK_AMPERSAND','VK_ASTERISK','VK_QUOTEDBL','VK_LESS','VK_GREATER','VK_BRACELEFT','VK_BRACERIGHT','VK_AT','VK_COLON','VK_CIRCUMFLEX','VK_DOLLAR','VK_EURO_SIGN','VK_EXCLAMATION_MARK','VK_INVERTED_EXCLAMATION_MARK','VK_LEFT_PARENTHESIS','VK_NUMBER_SIGN','VK_PLUS','VK_RIGHT_PARENTHESIS','VK_UNDERSCORE','VK_WINDOWS','VK_CONTEXT_MENU','VK_FINAL','VK_CONVERT','VK_NONCONVERT','VK_ACCEPT','VK_MODECHANGE','VK_KANA','VK_KANJI','VK_ALPHANUMERIC','VK_KATAKANA','VK_HIRAGANA','VK_FULL_WIDTH','VK_HALF_WIDTH','VK_ROMAN_CHARACTERS','VK_ALL_CANDIDATES','VK_PREVIOUS_CANDIDATE','VK_CODE_INPUT','VK_JAPANESE_KATAKANA','VK_JAPANESE_HIRAGANA','VK_JAPANESE_ROMAN','VK_KANA_LOCK','VK_INPUT_METHOD_ON_OFF','VK_CUT','VK_COPY','VK_PASTE','VK_UNDO','VK_AGAIN','VK_FIND','VK_PROPS','VK_STOP','VK_COMPOSE','VK_ALT_GRAPH','VK_BEGIN']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.code2name=Clazz.new_($I$(2,1));
this.name2code=Clazz.new_($I$(2,1));
var list=Clazz.array(java.lang.Object, [0, null]);

for (var k in C$) if (("" + k).indexOf("VK_") == 0) list.push([k, C$[k]]);
for (var i=0; i < list.length; i++) {
this.put$S$Integer(list[i][0], Integer.valueOf$I(list[i][1] ||0));
}
}, 1);

Clazz.newMeth(C$, 'put$S$Integer',  function (name, code) {
this.code2name.put$O$O("" + code, name);
this.name2code.put$O$O(name, code);
});

Clazz.newMeth(C$, 'findCode$S',  function (name) {
return this.name2code.get$O(name);
});

Clazz.newMeth(C$, 'findName$Integer',  function (code) {
return this.code2name.get$O("" + code);
});

C$.$static$=function(){C$.$static$=0;
C$.VK_ENTER=10;
C$.VK_BACK_SPACE=8;
C$.VK_TAB=9;
C$.VK_CANCEL=3;
C$.VK_CLEAR=12;
C$.VK_SHIFT=16;
C$.VK_CONTROL=17;
C$.VK_ALT=18;
C$.VK_PAUSE=19;
C$.VK_CAPS_LOCK=20;
C$.VK_ESCAPE=27;
C$.VK_SPACE=32;
C$.VK_PAGE_UP=33;
C$.VK_PAGE_DOWN=34;
C$.VK_END=35;
C$.VK_HOME=36;
C$.VK_LEFT=37;
C$.VK_UP=38;
C$.VK_RIGHT=39;
C$.VK_DOWN=40;
C$.VK_COMMA=44;
C$.VK_MINUS=45;
C$.VK_PERIOD=46;
C$.VK_SLASH=47;
C$.VK_0=48;
C$.VK_1=49;
C$.VK_2=50;
C$.VK_3=51;
C$.VK_4=52;
C$.VK_5=53;
C$.VK_6=54;
C$.VK_7=55;
C$.VK_8=56;
C$.VK_9=57;
C$.VK_SEMICOLON=59;
C$.VK_EQUALS=61;
C$.VK_A=65;
C$.VK_B=66;
C$.VK_C=67;
C$.VK_D=68;
C$.VK_E=69;
C$.VK_F=70;
C$.VK_G=71;
C$.VK_H=72;
C$.VK_I=73;
C$.VK_J=74;
C$.VK_K=75;
C$.VK_L=76;
C$.VK_M=77;
C$.VK_N=78;
C$.VK_O=79;
C$.VK_P=80;
C$.VK_Q=81;
C$.VK_R=82;
C$.VK_S=83;
C$.VK_T=84;
C$.VK_U=85;
C$.VK_V=86;
C$.VK_W=87;
C$.VK_X=88;
C$.VK_Y=89;
C$.VK_Z=90;
C$.VK_OPEN_BRACKET=91;
C$.VK_BACK_SLASH=92;
C$.VK_CLOSE_BRACKET=93;
C$.VK_NUMPAD0=96;
C$.VK_NUMPAD1=97;
C$.VK_NUMPAD2=98;
C$.VK_NUMPAD3=99;
C$.VK_NUMPAD4=100;
C$.VK_NUMPAD5=101;
C$.VK_NUMPAD6=102;
C$.VK_NUMPAD7=103;
C$.VK_NUMPAD8=104;
C$.VK_NUMPAD9=105;
C$.VK_MULTIPLY=106;
C$.VK_ADD=107;
C$.VK_SEPARATER=108;
C$.VK_SEPARATOR=C$.VK_SEPARATER;
C$.VK_SUBTRACT=109;
C$.VK_DECIMAL=110;
C$.VK_DIVIDE=111;
C$.VK_DELETE=127;
C$.VK_NUM_LOCK=144;
C$.VK_SCROLL_LOCK=145;
C$.VK_F1=112;
C$.VK_F2=113;
C$.VK_F3=114;
C$.VK_F4=115;
C$.VK_F5=116;
C$.VK_F6=117;
C$.VK_F7=118;
C$.VK_F8=119;
C$.VK_F9=120;
C$.VK_F10=121;
C$.VK_F11=122;
C$.VK_F12=123;
C$.VK_F13=61440;
C$.VK_F14=61441;
C$.VK_F15=61442;
C$.VK_F16=61443;
C$.VK_F17=61444;
C$.VK_F18=61445;
C$.VK_F19=61446;
C$.VK_F20=61447;
C$.VK_F21=61448;
C$.VK_F22=61449;
C$.VK_F23=61450;
C$.VK_F24=61451;
C$.VK_PRINTSCREEN=154;
C$.VK_INSERT=155;
C$.VK_HELP=156;
C$.VK_META=157;
C$.VK_BACK_QUOTE=192;
C$.VK_QUOTE=222;
C$.VK_KP_UP=224;
C$.VK_KP_DOWN=225;
C$.VK_KP_LEFT=226;
C$.VK_KP_RIGHT=227;
C$.VK_DEAD_GRAVE=128;
C$.VK_DEAD_ACUTE=129;
C$.VK_DEAD_CIRCUMFLEX=130;
C$.VK_DEAD_TILDE=131;
C$.VK_DEAD_MACRON=132;
C$.VK_DEAD_BREVE=133;
C$.VK_DEAD_ABOVEDOT=134;
C$.VK_DEAD_DIAERESIS=135;
C$.VK_DEAD_ABOVERING=136;
C$.VK_DEAD_DOUBLEACUTE=137;
C$.VK_DEAD_CARON=138;
C$.VK_DEAD_CEDILLA=139;
C$.VK_DEAD_OGONEK=140;
C$.VK_DEAD_IOTA=141;
C$.VK_DEAD_VOICED_SOUND=142;
C$.VK_DEAD_SEMIVOICED_SOUND=143;
C$.VK_AMPERSAND=150;
C$.VK_ASTERISK=151;
C$.VK_QUOTEDBL=152;
C$.VK_LESS=153;
C$.VK_GREATER=160;
C$.VK_BRACELEFT=161;
C$.VK_BRACERIGHT=162;
C$.VK_AT=512;
C$.VK_COLON=513;
C$.VK_CIRCUMFLEX=514;
C$.VK_DOLLAR=515;
C$.VK_EURO_SIGN=516;
C$.VK_EXCLAMATION_MARK=517;
C$.VK_INVERTED_EXCLAMATION_MARK=518;
C$.VK_LEFT_PARENTHESIS=519;
C$.VK_NUMBER_SIGN=520;
C$.VK_PLUS=521;
C$.VK_RIGHT_PARENTHESIS=522;
C$.VK_UNDERSCORE=523;
C$.VK_WINDOWS=524;
C$.VK_CONTEXT_MENU=525;
C$.VK_FINAL=24;
C$.VK_CONVERT=28;
C$.VK_NONCONVERT=29;
C$.VK_ACCEPT=30;
C$.VK_MODECHANGE=31;
C$.VK_KANA=21;
C$.VK_KANJI=25;
C$.VK_ALPHANUMERIC=240;
C$.VK_KATAKANA=241;
C$.VK_HIRAGANA=242;
C$.VK_FULL_WIDTH=243;
C$.VK_HALF_WIDTH=244;
C$.VK_ROMAN_CHARACTERS=245;
C$.VK_ALL_CANDIDATES=256;
C$.VK_PREVIOUS_CANDIDATE=257;
C$.VK_CODE_INPUT=258;
C$.VK_JAPANESE_KATAKANA=259;
C$.VK_JAPANESE_HIRAGANA=260;
C$.VK_JAPANESE_ROMAN=261;
C$.VK_KANA_LOCK=262;
C$.VK_INPUT_METHOD_ON_OFF=263;
C$.VK_CUT=65489;
C$.VK_COPY=65485;
C$.VK_PASTE=65487;
C$.VK_UNDO=65483;
C$.VK_AGAIN=65481;
C$.VK_FIND=65488;
C$.VK_PROPS=65482;
C$.VK_STOP=65480;
C$.VK_COMPOSE=65312;
C$.VK_ALT_GRAPH=65406;
C$.VK_BEGIN=65368;
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:59 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
