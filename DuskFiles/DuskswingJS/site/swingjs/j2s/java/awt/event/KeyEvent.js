(function(){var P$=Clazz.newPackage("java.awt.event"),p$1={},I$=[[0,'java.awt.Toolkit','StringBuilder','java.awt.event.InputEvent']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "KeyEvent", null, 'java.awt.event.InputEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.isProxyActive=false;
},1);

C$.$fields$=[['Z',['isProxyActive'],'C',['keyChar'],'I',['keyCode','keyLocation']]]

Clazz.newMeth(C$, 'c$$java_awt_Component$I$J$I$I$C$I',  function (source, id, when, modifiers, keyCode, keyChar, keyLocation) {
;C$.superclazz.c$$java_awt_Component$I$J$I.apply(this,[source, id, when, modifiers]);C$.$init$.apply(this);
if (id == 400) {
if (keyChar == "\uffff") {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["invalid keyChar"]);
}if (keyCode != 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["invalid keyCode"]);
}if (keyLocation != 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["invalid keyLocation"]);
}}this.keyCode=keyCode;
this.keyChar=keyChar;
if ((keyLocation < 0) || (keyLocation > 4) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["invalid keyLocation"]);
}this.keyLocation=keyLocation;
if ((this.getModifiers$() != 0) && (this.getModifiersEx$() == 0) ) {
p$1.setNewModifiers.apply(this, []);
} else if ((this.getModifiers$() == 0) && (this.getModifiersEx$() != 0) ) {
p$1.setOldModifiers.apply(this, []);
}}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Component$I$J$I$I$C',  function (source, id, when, modifiers, keyCode, keyChar) {
C$.c$$java_awt_Component$I$J$I$I$C$I.apply(this, [source, id, when, modifiers, keyCode, keyChar, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Component$I$J$I$I',  function (source, id, when, modifiers, keyCode) {
C$.c$$java_awt_Component$I$J$I$I$C.apply(this, [source, id, when, modifiers, keyCode, String.fromCharCode(keyCode)]);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getKeyCode$',  function () {
return this.keyCode;
});

Clazz.newMeth(C$, 'setKeyCode$I',  function (keyCode) {
this.keyCode=keyCode;
});

Clazz.newMeth(C$, 'getKeyChar$',  function () {
return this.keyChar;
});

Clazz.newMeth(C$, 'setKeyChar$C',  function (keyChar) {
this.keyChar=keyChar;
});

Clazz.newMeth(C$, 'setModifiers$I',  function (modifiers) {
this.modifiers=modifiers;
if ((this.getModifiers$() != 0) && (this.getModifiersEx$() == 0) ) {
p$1.setNewModifiers.apply(this, []);
} else if ((this.getModifiers$() == 0) && (this.getModifiersEx$() != 0) ) {
p$1.setOldModifiers.apply(this, []);
}});

Clazz.newMeth(C$, 'getKeyLocation$',  function () {
return this.keyLocation;
});

Clazz.newMeth(C$, 'getKeyText$I',  function (keyCode) {
if (keyCode >= 48 && keyCode <= 57  || keyCode >= 65 && keyCode <= 90  ) {
return String.valueOf$C(String.fromCharCode(keyCode));
}switch (keyCode) {
case 10:
return $I$(1).getProperty$S$S("AWT.enter", "Enter");
case 8:
return $I$(1).getProperty$S$S("AWT.backSpace", "Backspace");
case 9:
return $I$(1).getProperty$S$S("AWT.tab", "Tab");
case 3:
return $I$(1).getProperty$S$S("AWT.cancel", "Cancel");
case 12:
return $I$(1).getProperty$S$S("AWT.clear", "Clear");
case 65312:
return $I$(1).getProperty$S$S("AWT.compose", "Compose");
case 19:
return $I$(1).getProperty$S$S("AWT.pause", "Pause");
case 20:
return $I$(1).getProperty$S$S("AWT.capsLock", "Caps Lock");
case 27:
return $I$(1).getProperty$S$S("AWT.escape", "Escape");
case 32:
return $I$(1).getProperty$S$S("AWT.space", "Space");
case 33:
return $I$(1).getProperty$S$S("AWT.pgup", "Page Up");
case 34:
return $I$(1).getProperty$S$S("AWT.pgdn", "Page Down");
case 35:
return $I$(1).getProperty$S$S("AWT.end", "End");
case 36:
return $I$(1).getProperty$S$S("AWT.home", "Home");
case 37:
return $I$(1).getProperty$S$S("AWT.left", "Left");
case 38:
return $I$(1).getProperty$S$S("AWT.up", "Up");
case 39:
return $I$(1).getProperty$S$S("AWT.right", "Right");
case 40:
return $I$(1).getProperty$S$S("AWT.down", "Down");
case 65368:
return $I$(1).getProperty$S$S("AWT.begin", "Begin");
case 16:
return $I$(1).getProperty$S$S("AWT.shift", "Shift");
case 17:
return $I$(1).getProperty$S$S("AWT.control", "Control");
case 18:
return $I$(1).getProperty$S$S("AWT.alt", "Alt");
case 157:
return $I$(1).getProperty$S$S("AWT.meta", "Meta");
case 65406:
return $I$(1).getProperty$S$S("AWT.altGraph", "Alt Graph");
case 44:
return $I$(1).getProperty$S$S("AWT.comma", "Comma");
case 46:
return $I$(1).getProperty$S$S("AWT.period", "Period");
case 47:
return $I$(1).getProperty$S$S("AWT.slash", "Slash");
case 59:
return $I$(1).getProperty$S$S("AWT.semicolon", "Semicolon");
case 61:
return $I$(1).getProperty$S$S("AWT.equals", "Equals");
case 91:
return $I$(1).getProperty$S$S("AWT.openBracket", "Open Bracket");
case 92:
return $I$(1).getProperty$S$S("AWT.backSlash", "Back Slash");
case 93:
return $I$(1).getProperty$S$S("AWT.closeBracket", "Close Bracket");
case 106:
return $I$(1).getProperty$S$S("AWT.multiply", "NumPad *");
case 107:
return $I$(1).getProperty$S$S("AWT.add", "NumPad +");
case 108:
return $I$(1).getProperty$S$S("AWT.separator", "NumPad ,");
case 109:
return $I$(1).getProperty$S$S("AWT.subtract", "NumPad -");
case 110:
return $I$(1).getProperty$S$S("AWT.decimal", "NumPad .");
case 111:
return $I$(1).getProperty$S$S("AWT.divide", "NumPad /");
case 127:
return $I$(1).getProperty$S$S("AWT.delete", "Delete");
case 144:
return $I$(1).getProperty$S$S("AWT.numLock", "Num Lock");
case 145:
return $I$(1).getProperty$S$S("AWT.scrollLock", "Scroll Lock");
case 524:
return $I$(1).getProperty$S$S("AWT.windows", "Windows");
case 525:
return $I$(1).getProperty$S$S("AWT.context", "Context Menu");
case 112:
return $I$(1).getProperty$S$S("AWT.f1", "F1");
case 113:
return $I$(1).getProperty$S$S("AWT.f2", "F2");
case 114:
return $I$(1).getProperty$S$S("AWT.f3", "F3");
case 115:
return $I$(1).getProperty$S$S("AWT.f4", "F4");
case 116:
return $I$(1).getProperty$S$S("AWT.f5", "F5");
case 117:
return $I$(1).getProperty$S$S("AWT.f6", "F6");
case 118:
return $I$(1).getProperty$S$S("AWT.f7", "F7");
case 119:
return $I$(1).getProperty$S$S("AWT.f8", "F8");
case 120:
return $I$(1).getProperty$S$S("AWT.f9", "F9");
case 121:
return $I$(1).getProperty$S$S("AWT.f10", "F10");
case 122:
return $I$(1).getProperty$S$S("AWT.f11", "F11");
case 123:
return $I$(1).getProperty$S$S("AWT.f12", "F12");
case 61440:
return $I$(1).getProperty$S$S("AWT.f13", "F13");
case 61441:
return $I$(1).getProperty$S$S("AWT.f14", "F14");
case 61442:
return $I$(1).getProperty$S$S("AWT.f15", "F15");
case 61443:
return $I$(1).getProperty$S$S("AWT.f16", "F16");
case 61444:
return $I$(1).getProperty$S$S("AWT.f17", "F17");
case 61445:
return $I$(1).getProperty$S$S("AWT.f18", "F18");
case 61446:
return $I$(1).getProperty$S$S("AWT.f19", "F19");
case 61447:
return $I$(1).getProperty$S$S("AWT.f20", "F20");
case 61448:
return $I$(1).getProperty$S$S("AWT.f21", "F21");
case 61449:
return $I$(1).getProperty$S$S("AWT.f22", "F22");
case 61450:
return $I$(1).getProperty$S$S("AWT.f23", "F23");
case 61451:
return $I$(1).getProperty$S$S("AWT.f24", "F24");
case 154:
return $I$(1).getProperty$S$S("AWT.printScreen", "Print Screen");
case 155:
return $I$(1).getProperty$S$S("AWT.insert", "Insert");
case 156:
return $I$(1).getProperty$S$S("AWT.help", "Help");
case 192:
return $I$(1).getProperty$S$S("AWT.backQuote", "Back Quote");
case 222:
return $I$(1).getProperty$S$S("AWT.quote", "Quote");
case 224:
return $I$(1).getProperty$S$S("AWT.up", "Up");
case 225:
return $I$(1).getProperty$S$S("AWT.down", "Down");
case 226:
return $I$(1).getProperty$S$S("AWT.left", "Left");
case 227:
return $I$(1).getProperty$S$S("AWT.right", "Right");
case 128:
return $I$(1).getProperty$S$S("AWT.deadGrave", "Dead Grave");
case 129:
return $I$(1).getProperty$S$S("AWT.deadAcute", "Dead Acute");
case 130:
return $I$(1).getProperty$S$S("AWT.deadCircumflex", "Dead Circumflex");
case 131:
return $I$(1).getProperty$S$S("AWT.deadTilde", "Dead Tilde");
case 132:
return $I$(1).getProperty$S$S("AWT.deadMacron", "Dead Macron");
case 133:
return $I$(1).getProperty$S$S("AWT.deadBreve", "Dead Breve");
case 134:
return $I$(1).getProperty$S$S("AWT.deadAboveDot", "Dead Above Dot");
case 135:
return $I$(1).getProperty$S$S("AWT.deadDiaeresis", "Dead Diaeresis");
case 136:
return $I$(1).getProperty$S$S("AWT.deadAboveRing", "Dead Above Ring");
case 137:
return $I$(1).getProperty$S$S("AWT.deadDoubleAcute", "Dead Double Acute");
case 138:
return $I$(1).getProperty$S$S("AWT.deadCaron", "Dead Caron");
case 139:
return $I$(1).getProperty$S$S("AWT.deadCedilla", "Dead Cedilla");
case 140:
return $I$(1).getProperty$S$S("AWT.deadOgonek", "Dead Ogonek");
case 141:
return $I$(1).getProperty$S$S("AWT.deadIota", "Dead Iota");
case 142:
return $I$(1).getProperty$S$S("AWT.deadVoicedSound", "Dead Voiced Sound");
case 143:
return $I$(1).getProperty$S$S("AWT.deadSemivoicedSound", "Dead Semivoiced Sound");
case 150:
return $I$(1).getProperty$S$S("AWT.ampersand", "Ampersand");
case 151:
return $I$(1).getProperty$S$S("AWT.asterisk", "Asterisk");
case 152:
return $I$(1).getProperty$S$S("AWT.quoteDbl", "Double Quote");
case 153:
return $I$(1).getProperty$S$S("AWT.Less", "Less");
case 160:
return $I$(1).getProperty$S$S("AWT.greater", "Greater");
case 161:
return $I$(1).getProperty$S$S("AWT.braceLeft", "Left Brace");
case 162:
return $I$(1).getProperty$S$S("AWT.braceRight", "Right Brace");
case 512:
return $I$(1).getProperty$S$S("AWT.at", "At");
case 513:
return $I$(1).getProperty$S$S("AWT.colon", "Colon");
case 514:
return $I$(1).getProperty$S$S("AWT.circumflex", "Circumflex");
case 515:
return $I$(1).getProperty$S$S("AWT.dollar", "Dollar");
case 516:
return $I$(1).getProperty$S$S("AWT.euro", "Euro");
case 517:
return $I$(1).getProperty$S$S("AWT.exclamationMark", "Exclamation Mark");
case 518:
return $I$(1).getProperty$S$S("AWT.invertedExclamationMark", "Inverted Exclamation Mark");
case 519:
return $I$(1).getProperty$S$S("AWT.leftParenthesis", "Left Parenthesis");
case 520:
return $I$(1).getProperty$S$S("AWT.numberSign", "Number Sign");
case 45:
return $I$(1).getProperty$S$S("AWT.minus", "Minus");
case 521:
return $I$(1).getProperty$S$S("AWT.plus", "Plus");
case 522:
return $I$(1).getProperty$S$S("AWT.rightParenthesis", "Right Parenthesis");
case 523:
return $I$(1).getProperty$S$S("AWT.underscore", "Underscore");
case 24:
return $I$(1).getProperty$S$S("AWT.final", "Final");
case 28:
return $I$(1).getProperty$S$S("AWT.convert", "Convert");
case 29:
return $I$(1).getProperty$S$S("AWT.noconvert", "No Convert");
case 30:
return $I$(1).getProperty$S$S("AWT.accept", "Accept");
case 31:
return $I$(1).getProperty$S$S("AWT.modechange", "Mode Change");
case 21:
return $I$(1).getProperty$S$S("AWT.kana", "Kana");
case 25:
return $I$(1).getProperty$S$S("AWT.kanji", "Kanji");
case 240:
return $I$(1).getProperty$S$S("AWT.alphanumeric", "Alphanumeric");
case 241:
return $I$(1).getProperty$S$S("AWT.katakana", "Katakana");
case 242:
return $I$(1).getProperty$S$S("AWT.hiragana", "Hiragana");
case 243:
return $I$(1).getProperty$S$S("AWT.fullWidth", "Full-Width");
case 244:
return $I$(1).getProperty$S$S("AWT.halfWidth", "Half-Width");
case 245:
return $I$(1).getProperty$S$S("AWT.romanCharacters", "Roman Characters");
case 256:
return $I$(1).getProperty$S$S("AWT.allCandidates", "All Candidates");
case 257:
return $I$(1).getProperty$S$S("AWT.previousCandidate", "Previous Candidate");
case 258:
return $I$(1).getProperty$S$S("AWT.codeInput", "Code Input");
case 259:
return $I$(1).getProperty$S$S("AWT.japaneseKatakana", "Japanese Katakana");
case 260:
return $I$(1).getProperty$S$S("AWT.japaneseHiragana", "Japanese Hiragana");
case 261:
return $I$(1).getProperty$S$S("AWT.japaneseRoman", "Japanese Roman");
case 262:
return $I$(1).getProperty$S$S("AWT.kanaLock", "Kana Lock");
case 263:
return $I$(1).getProperty$S$S("AWT.inputMethodOnOff", "Input Method On/Off");
case 65481:
return $I$(1).getProperty$S$S("AWT.again", "Again");
case 65483:
return $I$(1).getProperty$S$S("AWT.undo", "Undo");
case 65485:
return $I$(1).getProperty$S$S("AWT.copy", "Copy");
case 65487:
return $I$(1).getProperty$S$S("AWT.paste", "Paste");
case 65489:
return $I$(1).getProperty$S$S("AWT.cut", "Cut");
case 65488:
return $I$(1).getProperty$S$S("AWT.find", "Find");
case 65482:
return $I$(1).getProperty$S$S("AWT.props", "Props");
case 65480:
return $I$(1).getProperty$S$S("AWT.stop", "Stop");
}
if (keyCode >= 96 && keyCode <= 105 ) {
var numpad=$I$(1).getProperty$S$S("AWT.numpad", "NumPad");
var c=String.fromCharCode((keyCode - 96 + 48));
return numpad + "-" + c ;
}var unknown=$I$(1).getProperty$S$S("AWT.unknown", "Unknown");
return unknown + " keyCode: 0x" + Integer.toString$I$I(keyCode, 16) ;
}, 1);

Clazz.newMeth(C$, 'getKeyModifiersText$I',  function (modifiers) {
var buf=Clazz.new_($I$(2,1));
if ((modifiers & 4) != 0) {
buf.append$S($I$(1).getProperty$S$S("AWT.meta", "Meta"));
buf.append$S("+");
}if ((modifiers & 2) != 0) {
buf.append$S($I$(1).getProperty$S$S("AWT.control", "Ctrl"));
buf.append$S("+");
}if ((modifiers & 8) != 0) {
buf.append$S($I$(1).getProperty$S$S("AWT.alt", "Alt"));
buf.append$S("+");
}if ((modifiers & 1) != 0) {
buf.append$S($I$(1).getProperty$S$S("AWT.shift", "Shift"));
buf.append$S("+");
}if ((modifiers & 32) != 0) {
buf.append$S($I$(1).getProperty$S$S("AWT.altGraph", "Alt Graph"));
buf.append$S("+");
}if ((modifiers & 16) != 0) {
buf.append$S($I$(1).getProperty$S$S("AWT.button1", "Button1"));
buf.append$S("+");
}if (buf.length$() > 0) {
buf.setLength$I(buf.length$() - 1);
}return buf.toString();
}, 1);

Clazz.newMeth(C$, 'isActionKey$',  function () {
switch (this.keyCode) {
case 36:
case 35:
case 33:
case 34:
case 38:
case 40:
case 37:
case 39:
case 65368:
case 226:
case 224:
case 227:
case 225:
case 112:
case 113:
case 114:
case 115:
case 116:
case 117:
case 118:
case 119:
case 120:
case 121:
case 122:
case 123:
case 61440:
case 61441:
case 61442:
case 61443:
case 61444:
case 61445:
case 61446:
case 61447:
case 61448:
case 61449:
case 61450:
case 61451:
case 154:
case 145:
case 20:
case 144:
case 19:
case 155:
case 24:
case 28:
case 29:
case 30:
case 31:
case 21:
case 25:
case 240:
case 241:
case 242:
case 243:
case 244:
case 245:
case 256:
case 257:
case 258:
case 259:
case 260:
case 261:
case 262:
case 263:
case 65481:
case 65483:
case 65485:
case 65487:
case 65489:
case 65488:
case 65482:
case 65480:
case 156:
case 524:
case 525:
return true;
}
return false;
});

Clazz.newMeth(C$, 'paramString$',  function () {
var str=Clazz.new_($I$(2,1).c$$I,[100]);
switch (this.id) {
case 401:
str.append$S("KEY_PRESSED");
break;
case 402:
str.append$S("KEY_RELEASED");
break;
case 400:
str.append$S("KEY_TYPED");
break;
default:
str.append$S("unknown type");
break;
}
str.append$S(",keyCode=").append$S("" + this.keyCode);
str.append$S(",keyText=").append$S(C$.getKeyText$I(this.keyCode));
str.append$S(",keyChar=");
switch (this.keyChar.$c()) {
case 8:
str.append$S(C$.getKeyText$I(8));
break;
case 9:
str.append$S(C$.getKeyText$I(9));
break;
case 10:
str.append$S(C$.getKeyText$I(10));
break;
case 24:
str.append$S(C$.getKeyText$I(3));
break;
case 27:
str.append$S(C$.getKeyText$I(27));
break;
case 127:
str.append$S(C$.getKeyText$I(127));
break;
case 65535:
str.append$S($I$(1).getProperty$S$S("AWT.undefined", "Undefined"));
str.append$S(" keyChar");
break;
default:
str.append$S("\'").append$S("" + this.keyChar).append$S("\'");
break;
}
if (this.getModifiers$() != 0) {
str.append$S(",modifiers=").append$S(C$.getKeyModifiersText$I(this.modifiers));
}if (this.getModifiersEx$() != 0) {
str.append$S(",extModifiers=").append$S($I$(3).getModifiersExText$I(this.modifiers));
}str.append$S(",keyLocation=");
switch (this.keyLocation) {
case 0:
str.append$S("KEY_LOCATION_UNKNOWN");
break;
case 1:
str.append$S("KEY_LOCATION_STANDARD");
break;
case 2:
str.append$S("KEY_LOCATION_LEFT");
break;
case 3:
str.append$S("KEY_LOCATION_RIGHT");
break;
case 4:
str.append$S("KEY_LOCATION_NUMPAD");
break;
default:
str.append$S("KEY_LOCATION_UNKNOWN");
break;
}
return str.toString();
});

Clazz.newMeth(C$, 'setNewModifiers',  function () {
if ((this.modifiers & 1) != 0) {
this.modifiers|=64;
}if ((this.modifiers & 8) != 0) {
this.modifiers|=512;
}if ((this.modifiers & 2) != 0) {
this.modifiers|=128;
}if ((this.modifiers & 4) != 0) {
this.modifiers|=256;
}if ((this.modifiers & 32) != 0) {
this.modifiers|=8192;
}if ((this.modifiers & 16) != 0) {
this.modifiers|=1024;
}}, p$1);

Clazz.newMeth(C$, 'setOldModifiers',  function () {
if ((this.modifiers & 64) != 0) {
this.modifiers|=1;
}if ((this.modifiers & 512) != 0) {
this.modifiers|=8;
}if ((this.modifiers & 128) != 0) {
this.modifiers|=2;
}if ((this.modifiers & 256) != 0) {
this.modifiers|=4;
}if ((this.modifiers & 8192) != 0) {
this.modifiers|=32;
}if ((this.modifiers & 1024) != 0) {
this.modifiers|=16;
}}, p$1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:09 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
