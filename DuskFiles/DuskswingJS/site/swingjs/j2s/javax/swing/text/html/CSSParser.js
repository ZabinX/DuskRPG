(function(){var P$=Clazz.newPackage("javax.swing.text.html"),p$1={},I$=[[0,'StringBuffer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CSSParser", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['CSSParserCallback',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['didPushChar','encounteredRuleSet','readWS'],'I',['pushedChar','stackCount','tokenBufferLength'],'O',['unitBuffer','StringBuffer','unitStack','int[]','reader','java.io.Reader','callback','javax.swing.text.html.CSSParser.CSSParserCallback','tokenBuffer','char[]']]
,['O',['charMapping','char[]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.unitStack=Clazz.array(Integer.TYPE, [2]);
this.tokenBuffer=Clazz.array(Character.TYPE, [80]);
this.unitBuffer=Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'parse$java_io_Reader$javax_swing_text_html_CSSParser_CSSParserCallback$Z',  function (reader, callback, inRule) {
this.callback=callback;
this.stackCount=this.tokenBufferLength=0;
this.reader=reader;
this.encounteredRuleSet=false;
try {
if (inRule) {
p$1.parseDeclarationBlock.apply(this, []);
} else {
while (p$1.getNextStatement.apply(this, []));
}} finally {
callback=null;
reader=null;
}
});

Clazz.newMeth(C$, 'getNextStatement',  function () {
this.unitBuffer.setLength$I(0);
var token=p$1.nextToken$C.apply(this, ["\u0000"]);
switch (token) {
case 1:
if (this.tokenBufferLength > 0) {
if (this.tokenBuffer[0] == "@") {
p$1.parseAtRule.apply(this, []);
} else {
this.encounteredRuleSet=true;
p$1.parseRuleSet.apply(this, []);
}}return true;
case 2:
case 4:
case 6:
p$1.parseTillClosed$I.apply(this, [token]);
return true;
case 3:
case 5:
case 7:
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Unexpected top level block close"]);
case -1:
return false;
}
return true;
}, p$1);

Clazz.newMeth(C$, 'parseAtRule',  function () {
var done=false;
var isImport=(this.tokenBufferLength == 7 && this.tokenBuffer[0] == "@"  && this.tokenBuffer[1] == "i"  && this.tokenBuffer[2] == "m"  && this.tokenBuffer[3] == "p"  && this.tokenBuffer[4] == "o"  && this.tokenBuffer[5] == "r"  && this.tokenBuffer[6] == "t" );
this.unitBuffer.setLength$I(0);
while (!done){
var nextToken=p$1.nextToken$C.apply(this, [";"]);
switch (nextToken) {
case 1:
if (this.tokenBufferLength > 0 && this.tokenBuffer[this.tokenBufferLength - 1] == ";" ) {
--this.tokenBufferLength;
done=true;
}if (this.tokenBufferLength > 0) {
if (this.unitBuffer.length$() > 0 && this.readWS ) {
this.unitBuffer.append$C(" ");
}this.unitBuffer.append$CA$I$I(this.tokenBuffer, 0, this.tokenBufferLength);
}break;
case 4:
if (this.unitBuffer.length$() > 0 && this.readWS ) {
this.unitBuffer.append$C(" ");
}this.unitBuffer.append$C(C$.charMapping[nextToken]);
p$1.parseTillClosed$I.apply(this, [nextToken]);
done=true;
{
var nextChar=p$1.readWS.apply(this, []);
if (nextChar != -1 && nextChar != 59  ) {
p$1.pushChar$I.apply(this, [nextChar]);
}}break;
case 2:
case 6:
this.unitBuffer.append$C(C$.charMapping[nextToken]);
p$1.parseTillClosed$I.apply(this, [nextToken]);
break;
case 3:
case 5:
case 7:
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Unexpected close in @ rule"]);
case -1:
done=true;
break;
}
}
if (isImport && !this.encounteredRuleSet ) {
this.callback.handleImport$S(this.unitBuffer.toString());
}}, p$1);

Clazz.newMeth(C$, 'parseRuleSet',  function () {
if (p$1.parseSelectors.apply(this, [])) {
this.callback.startRule$();
p$1.parseDeclarationBlock.apply(this, []);
this.callback.endRule$();
}}, p$1);

Clazz.newMeth(C$, 'parseSelectors',  function () {
var nextToken;
if (this.tokenBufferLength > 0) {
this.callback.handleSelector$S( String.instantialize(this.tokenBuffer, 0, this.tokenBufferLength));
}this.unitBuffer.setLength$I(0);
for (; ; ) {
while ((nextToken=p$1.nextToken$C.apply(this, ["\u0000"])) == 1){
if (this.tokenBufferLength > 0) {
this.callback.handleSelector$S( String.instantialize(this.tokenBuffer, 0, this.tokenBufferLength));
}}
switch (nextToken) {
case 4:
return true;
case 2:
case 6:
p$1.parseTillClosed$I.apply(this, [nextToken]);
this.unitBuffer.setLength$I(0);
break;
case 3:
case 5:
case 7:
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Unexpected block close in selector"]);
case -1:
return false;
}
}
}, p$1);

Clazz.newMeth(C$, 'parseDeclarationBlock',  function () {
for (; ; ) {
var token=p$1.parseDeclaration.apply(this, []);
switch (token) {
case -1:
case 5:
return;
case 3:
case 7:
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Unexpected close in declaration block"]);
case 1:
break;
}
}
}, p$1);

Clazz.newMeth(C$, 'parseDeclaration',  function () {
var token;
if ((token=p$1.parseIdentifiers$C$Z.apply(this, [":", false])) != 1) {
return token;
}for (var counter=this.unitBuffer.length$() - 1; counter >= 0; counter--) {
this.unitBuffer.setCharAt$I$C(counter, Character.toLowerCase$C(this.unitBuffer.charAt$I(counter)));
}
this.callback.handleProperty$S(this.unitBuffer.toString());
token=p$1.parseIdentifiers$C$Z.apply(this, [";", true]);
this.callback.handleValue$S(this.unitBuffer.toString());
return token;
}, p$1);

Clazz.newMeth(C$, 'parseIdentifiers$C$Z',  function (extraChar, wantsBlocks) {
var nextToken;
var ubl;
this.unitBuffer.setLength$I(0);
for (; ; ) {
nextToken=p$1.nextToken$C.apply(this, [extraChar]);
switch (nextToken) {
case 1:
if (this.tokenBufferLength > 0) {
if (this.tokenBuffer[this.tokenBufferLength - 1] == extraChar) {
if (--this.tokenBufferLength > 0) {
if (this.readWS && this.unitBuffer.length$() > 0 ) {
this.unitBuffer.append$C(" ");
}this.unitBuffer.append$CA$I$I(this.tokenBuffer, 0, this.tokenBufferLength);
}return 1;
}if (this.readWS && this.unitBuffer.length$() > 0 ) {
this.unitBuffer.append$C(" ");
}this.unitBuffer.append$CA$I$I(this.tokenBuffer, 0, this.tokenBufferLength);
}break;
case 2:
case 4:
case 6:
ubl=this.unitBuffer.length$();
if (wantsBlocks) {
this.unitBuffer.append$C(C$.charMapping[nextToken]);
}p$1.parseTillClosed$I.apply(this, [nextToken]);
if (!wantsBlocks) {
this.unitBuffer.setLength$I(ubl);
}break;
case 5:
case 3:
case 7:
case -1:
return nextToken;
}
}
}, p$1);

Clazz.newMeth(C$, 'parseTillClosed$I',  function (openToken) {
var nextToken;
var done=false;
p$1.startBlock$I.apply(this, [openToken]);
while (!done){
nextToken=p$1.nextToken$C.apply(this, ["\u0000"]);
switch (nextToken) {
case 1:
if (this.unitBuffer.length$() > 0 && this.readWS ) {
this.unitBuffer.append$C(" ");
}if (this.tokenBufferLength > 0) {
this.unitBuffer.append$CA$I$I(this.tokenBuffer, 0, this.tokenBufferLength);
}break;
case 2:
case 4:
case 6:
if (this.unitBuffer.length$() > 0 && this.readWS ) {
this.unitBuffer.append$C(" ");
}this.unitBuffer.append$C(C$.charMapping[nextToken]);
p$1.startBlock$I.apply(this, [nextToken]);
break;
case 3:
case 5:
case 7:
if (this.unitBuffer.length$() > 0 && this.readWS ) {
this.unitBuffer.append$C(" ");
}this.unitBuffer.append$C(C$.charMapping[nextToken]);
p$1.endBlock$I.apply(this, [nextToken]);
if (!p$1.inBlock.apply(this, [])) {
done=true;
}break;
case -1:
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Unclosed block"]);
}
}
}, p$1);

Clazz.newMeth(C$, 'nextToken$C',  function (idChar) {
this.readWS=false;
var nextChar=p$1.readWS.apply(this, []);
switch (nextChar) {
case 39:
p$1.readTill$C.apply(this, ["\'"]);
if (this.tokenBufferLength > 0) {
--this.tokenBufferLength;
}return 1;
case 34:
p$1.readTill$C.apply(this, ["\""]);
if (this.tokenBufferLength > 0) {
--this.tokenBufferLength;
}return 1;
case 91:
return 2;
case 93:
return 3;
case 123:
return 4;
case 125:
return 5;
case 40:
return 6;
case 41:
return 7;
case -1:
return -1;
default:
p$1.pushChar$I.apply(this, [nextChar]);
p$1.getIdentifier$C.apply(this, [idChar]);
return 1;
}
}, p$1);

Clazz.newMeth(C$, 'getIdentifier$C',  function (stopChar) {
var lastWasEscape=false;
var done=false;
var escapeCount=0;
var escapeChar=0;
var nextChar;
var intStopChar=stopChar.$c();
var type;
var escapeOffset=0;
this.tokenBufferLength=0;
while (!done){
nextChar=p$1.readChar.apply(this, []);
switch (nextChar) {
case 92:
type=($s$[0] = 1, $s$[0]);
break;
case 48:
case 49:
case 50:
case 51:
case 52:
case 53:
case 54:
case 55:
case 56:
case 57:
type=($s$[0] = 2, $s$[0]);
escapeOffset=nextChar - 48;
break;
case 97:
case 98:
case 99:
case 100:
case 101:
case 102:
type=($s$[0] = 2, $s$[0]);
escapeOffset=nextChar - 97 + 10;
break;
case 65:
case 66:
case 67:
case 68:
case 69:
case 70:
type=($s$[0] = 2, $s$[0]);
escapeOffset=nextChar - 65 + 10;
break;
case 39:
case 34:
case 91:
case 93:
case 123:
case 125:
case 40:
case 41:
case 32:
case 10:
case 9:
case 13:
type=($s$[0] = 3, $s$[0]);
break;
case 47:
type=($s$[0] = 4, $s$[0]);
break;
case -1:
done=true;
type=($s$[0] = 0, $s$[0]);
break;
default:
type=($s$[0] = 0, $s$[0]);
break;
}
if (lastWasEscape) {
if (type == 2) {
escapeChar=escapeChar * 16 + escapeOffset;
if (++escapeCount == 4) {
lastWasEscape=false;
p$1.append$C.apply(this, [String.fromCharCode(escapeChar)]);
}} else {
lastWasEscape=false;
if (escapeCount > 0) {
p$1.append$C.apply(this, [String.fromCharCode(escapeChar)]);
p$1.pushChar$I.apply(this, [nextChar]);
} else if (!done) {
p$1.append$C.apply(this, [String.fromCharCode(nextChar)]);
}}} else if (!done) {
if (type == 1) {
lastWasEscape=true;
escapeChar=escapeCount=0;
} else if (type == 3) {
done=true;
p$1.pushChar$I.apply(this, [nextChar]);
} else if (type == 4) {
nextChar=p$1.readChar.apply(this, []);
if (nextChar == 42 ) {
done=true;
p$1.readComment.apply(this, []);
this.readWS=true;
} else {
p$1.append$C.apply(this, ["/"]);
if (nextChar == -1) {
done=true;
} else {
p$1.pushChar$I.apply(this, [nextChar]);
}}} else {
p$1.append$C.apply(this, [String.fromCharCode(nextChar)]);
if (nextChar == intStopChar) {
done=true;
}}}}
return (this.tokenBufferLength > 0);
}, p$1);

Clazz.newMeth(C$, 'readTill$C',  function (stopChar) {
var lastWasEscape=false;
var escapeCount=0;
var escapeChar=0;
var nextChar;
var done=false;
var intStopChar=stopChar.$c();
var type;
var escapeOffset=0;
this.tokenBufferLength=0;
while (!done){
nextChar=p$1.readChar.apply(this, []);
switch (nextChar) {
case 92:
type=($s$[0] = 1, $s$[0]);
break;
case 48:
case 49:
case 50:
case 51:
case 52:
case 53:
case 54:
case 55:
case 56:
case 57:
type=($s$[0] = 2, $s$[0]);
escapeOffset=nextChar - 48;
break;
case 97:
case 98:
case 99:
case 100:
case 101:
case 102:
type=($s$[0] = 2, $s$[0]);
escapeOffset=nextChar - 97 + 10;
break;
case 65:
case 66:
case 67:
case 68:
case 69:
case 70:
type=($s$[0] = 2, $s$[0]);
escapeOffset=nextChar - 65 + 10;
break;
case -1:
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Unclosed " + stopChar]);
default:
type=($s$[0] = 0, $s$[0]);
break;
}
if (lastWasEscape) {
if (type == 2) {
escapeChar=escapeChar * 16 + escapeOffset;
if (++escapeCount == 4) {
lastWasEscape=false;
p$1.append$C.apply(this, [String.fromCharCode(escapeChar)]);
}} else {
if (escapeCount > 0) {
p$1.append$C.apply(this, [String.fromCharCode(escapeChar)]);
if (type == 1) {
lastWasEscape=true;
escapeChar=escapeCount=0;
} else {
if (nextChar == intStopChar) {
done=true;
}p$1.append$C.apply(this, [String.fromCharCode(nextChar)]);
lastWasEscape=false;
}} else {
p$1.append$C.apply(this, [String.fromCharCode(nextChar)]);
lastWasEscape=false;
}}} else if (type == 1) {
lastWasEscape=true;
escapeChar=escapeCount=0;
} else {
if (nextChar == intStopChar) {
done=true;
}p$1.append$C.apply(this, [String.fromCharCode(nextChar)]);
}}
}, p$1);

Clazz.newMeth(C$, 'append$C',  function (character) {
if (this.tokenBufferLength == this.tokenBuffer.length) {
var newBuffer=Clazz.array(Character.TYPE, [this.tokenBuffer.length * 2]);
System.arraycopy$O$I$O$I$I(this.tokenBuffer, 0, newBuffer, 0, this.tokenBuffer.length);
this.tokenBuffer=newBuffer;
}this.tokenBuffer[this.tokenBufferLength++]=character;
}, p$1);

Clazz.newMeth(C$, 'readComment',  function () {
var nextChar;
for (; ; ) {
nextChar=p$1.readChar.apply(this, []);
switch (nextChar) {
case -1:
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Unclosed comment"]);
case 42:
nextChar=p$1.readChar.apply(this, []);
if (nextChar == 47 ) {
return;
} else if (nextChar == -1) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Unclosed comment"]);
} else {
p$1.pushChar$I.apply(this, [nextChar]);
}break;
default:
break;
}
}
}, p$1);

Clazz.newMeth(C$, 'startBlock$I',  function (startToken) {
if (this.stackCount == this.unitStack.length) {
var newUS=Clazz.array(Integer.TYPE, [this.stackCount * 2]);
System.arraycopy$O$I$O$I$I(this.unitStack, 0, newUS, 0, this.stackCount);
this.unitStack=newUS;
}this.unitStack[this.stackCount++]=startToken;
}, p$1);

Clazz.newMeth(C$, 'endBlock$I',  function (endToken) {
var startToken;
switch (endToken) {
case 3:
startToken=2;
break;
case 5:
startToken=4;
break;
case 7:
startToken=6;
break;
default:
startToken=-1;
break;
}
if (this.stackCount > 0 && this.unitStack[this.stackCount - 1] == startToken ) {
--this.stackCount;
} else {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Unmatched block"]);
}}, p$1);

Clazz.newMeth(C$, 'inBlock',  function () {
return (this.stackCount > 0);
}, p$1);

Clazz.newMeth(C$, 'readWS',  function () {
var nextChar;
while ((nextChar=p$1.readChar.apply(this, [])) != -1 && Character.isWhitespace$C(String.fromCharCode(nextChar)) ){
this.readWS=true;
}
return nextChar;
}, p$1);

Clazz.newMeth(C$, 'readChar',  function () {
if (this.didPushChar) {
this.didPushChar=false;
return this.pushedChar;
}return this.reader.read$();
}, p$1);

Clazz.newMeth(C$, 'pushChar$I',  function (tempChar) {
if (this.didPushChar) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Can not handle look ahead of more than one character"]);
}this.didPushChar=true;
this.pushedChar=tempChar;
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.charMapping=Clazz.array(Character.TYPE, -1, [0, 0, "[", "]", "{", "}", "(", ")", 0]);
};
var $s$ = new Int16Array(1);
;
(function(){/*i*/var C$=Clazz.newInterface(P$.CSSParser, "CSSParserCallback", function(){
});
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:26 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
