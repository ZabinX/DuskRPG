(function(){var P$=Clazz.newPackage("java.util.regex"),p$1={},I$=[[0,'java.util.ArrayList','java.util.regex.Matcher','StringBuilder','swingjs.JSUtil','javajs.util.SB','java.util.HashMap','java.util.stream.StreamSupport','java.util.Spliterators']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Pattern");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.compiled=false;
this.秘groupNames=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['Z',['compiled'],'I',['flags','cursor'],'S',['pattern','秘pattern'],'O',['namedGroups','java.util.Map','秘groupNames','java.util.ArrayList','regexp','java.util.regex.Matcher.RegExp']]
,['O',['testPattern','java.util.regex.Pattern','posixes','String[]']]]

Clazz.newMeth(C$, ['compile$S','compile'],  function (regex) {
return Clazz.new_(C$.c$$S$I,[regex, 0]);
}, 1);

Clazz.newMeth(C$, 'compile$S$I',  function (regex, flags) {
return Clazz.new_(C$.c$$S$I,[regex, flags]);
}, 1);

Clazz.newMeth(C$, 'pattern$',  function () {
return this.pattern;
});

Clazz.newMeth(C$, 'toString',  function () {
return this.pattern;
});

Clazz.newMeth(C$, 'matcher$CharSequence',  function (input) {
if (!this.compiled) {
p$1.compile.apply(this, []);
}return Clazz.new_($I$(2,1).c$$java_util_regex_Pattern$CharSequence,[this, input]);
});

Clazz.newMeth(C$, 'flags$',  function () {
return this.flags;
});

Clazz.newMeth(C$, 'matches$S$CharSequence',  function (regex, input) {
var p=C$.compile$S(regex);
var m=p.matcher$CharSequence(input);
return m.matches$();
}, 1);

Clazz.newMeth(C$, 'split$CharSequence$I',  function (input, limit) {
var index=0;
var matchLimited=limit > 0;
var matchList=Clazz.new_($I$(1,1));
var m=this.matcher$CharSequence(input);
while (m.find$()){
if (!matchLimited || matchList.size$() < limit - 1 ) {
if (index == 0 && index == m.start$()  && m.start$() == m.end$() ) {
continue;
}var match=input.subSequence$I$I(index, m.start$()).toString();
matchList.add$O(match);
index=m.end$();
} else if (matchList.size$() == limit - 1) {
var match=input.subSequence$I$I(index, input.length$()).toString();
matchList.add$O(match);
index=m.end$();
}}
if (index == 0) return Clazz.array(String, -1, [input.toString()]);
if (!matchLimited || matchList.size$() < limit ) matchList.add$O(input.subSequence$I$I(index, input.length$()).toString());
var resultSize=matchList.size$();
if (limit == 0) while (resultSize > 0 && matchList.get$I(resultSize - 1).equals$O("") )--resultSize;

var result=Clazz.array(String, [resultSize]);
return matchList.subList$I$I(0, resultSize).toArray$OA(result);
});

Clazz.newMeth(C$, 'split$CharSequence',  function (input) {
return this.split$CharSequence$I(input, 0);
});

Clazz.newMeth(C$, 'quote$S',  function (s) {
var slashEIndex=s.indexOf$S("\\E");
if (slashEIndex == -1) return "\\Q" + s + "\\E" ;
var sb=Clazz.new_([s.length$() * 2],$I$(3,1).c$$I);
sb.append$S("\\Q");
slashEIndex=0;
var current=0;
while ((slashEIndex=s.indexOf$S$I("\\E", current)) != -1){
sb.append$S(s.substring$I$I(current, slashEIndex));
current=slashEIndex + 2;
sb.append$S("\\E\\\\E\\Q");
}
sb.append$S(s.substring$I$I(current, s.length$()));
sb.append$S("\\E");
return sb.toString();
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$I',  function (p, f) {
;C$.$init$.apply(this);
this.pattern=p;
this.flags=f;
if (this.pattern.length$() > 0) {
p$1.compile.apply(this, []);
}}, 1);

Clazz.newMeth(C$, 'removeQEQuoting$S',  function (pattern) {
var pt;
while ((pt=pattern.indexOf$S("\\Q")) >= 0){
var ret=pattern.substring$I$I(0, pt);
var pt1=pattern.indexOf$S$I("\\E", pt);
if (pt1 < 0) pt1=pattern.length$();
ret+=C$.javaQuote$S(pattern.substring$I$I(pt + 2, pt1));
pattern=ret + pattern.substring$I(pt1 + 2);
}
if (pattern.indexOf$S("\\p{") >= 0) {
for (var i=0, n=C$.posixes.length; i < n; i+=2) {
pattern=pattern.replace$CharSequence$CharSequence(C$.posixes[i], C$.posixes[i + 1]);
}
if (pattern.indexOf$S("\\p{") >= 0) {
$I$(4).notImplemented$S("POSIX " + pattern);
}}return pattern;
}, 1);

Clazz.newMeth(C$, 'javaQuote$S',  function (s) {
for (var i=s.length$(); --i >= 0; ) {
var ch=s.charAt$I(i);
if ("[]^$|()\\+*?{}=!".indexOf$I(ch) >= 0) s=s.substring$I$I(0, i) + "\\" + s.substring$I(i) ;
}
return s;
}, 1);

Clazz.newMeth(C$, 'getJSRegex$S$S',  function (regex, flags) {
if (regex.indexOf$S("\\Q") >= 0) {
regex=C$.removeQEQuoting$S(regex);
}if (C$.testPattern == null ) C$.testPattern=Clazz.new_(C$);
if (regex.indexOf$S("(?") == 0) {
C$.testPattern.pattern=regex;
p$1.checkFlags.apply(C$.testPattern, []);
regex=C$.testPattern.pattern;
}C$.testPattern.pattern="(?" + flags + ")" ;
return C$.newRegExp$S$S(regex, C$.getFlags$I(p$1.checkFlags.apply(C$.testPattern, [])));
}, 1);

Clazz.newMeth(C$, 'compile',  function () {
p$1.checkFlags.apply(this, []);
this.pattern=C$.removeQEQuoting$S(this.pattern);
this.秘pattern=C$.秘getJSpattern$S(this.pattern);
this.regexp=C$.newRegExp$S$S(this.秘pattern, C$.getFlags$I(this.flags | -2147483648));
this.compiled=true;
}, p$1);

Clazz.newMeth(C$, 'getFlags$I',  function (flags) {
var flagStr="";
if (C$.has$I$I(flags, -2147483648)) {
flagStr+="g";
}if (C$.has$I$I(flags, 2)) {
flagStr+="i";
}if (C$.has$I$I(flags, 32)) {
flagStr+="s";
}if (C$.has$I$I(flags, 8)) {
flagStr+="m";
}if ((flags & 256) != 0) {
flags|=64;
}if (C$.has$I$I(flags, 64)) {
flagStr+="u";
}var nope="";
if (C$.has$I$I(flags, 128)) {
nope+=" CANON_EQ";
flags&=~128;
}if (C$.has$I$I(flags, 4)) {
nope+=" COMMENTS";
flags&=~4;
}if (C$.has$I$I(flags, 16)) {
nope+=" LITERAL";
flags&=~16;
}if (C$.has$I$I(flags, 1)) {
nope+=" UNIX_LINES";
flags&=~1;
}if (nope.length$() > 0) $I$(4).notImplemented$S("Pattern does not implement" + nope);
return flagStr;
}, 1);

Clazz.newMeth(C$, 'newRegExp$S$S',  function (秘pattern, flags) {
return new RegExp(秘pattern, flags) ||null;
}, 1);

Clazz.newMeth(C$, '秘getJSpattern$S',  function (pattern) {
if (pattern.indexOf$S("(") < 0) return pattern;
var p=Clazz.new_($I$(5,1));
var ntext=0;
var ignore=false;
var isChar=false;
for (var i1=-1, plen=0, i=0, n=pattern.length$(); i < n; i++) {
var c=pattern.charAt$I(i);
switch (c.$c()) {
default:
isChar=true;
break;
case 42:
case 43:
case 63:
isChar=true;
if (i1 < 0) {
p.appendC$C(c);
continue;
}break;
case 91:
if (!ignore && i1 == -1 ) {
plen=p.length$();
i1=i;
}ignore=true;
isChar=true;
break;
case 93:
ignore=false;
isChar=true;
break;
case 41:
case 40:
if (ignore) break;
isChar=false;
var isQ=(c == "(" && pattern.charAt$I(i + 1) == "?" );
var isColon=(isQ && pattern.charAt$I(i + 2) == ":" );
var i0=i;
if (isColon) {
i=pattern.indexOf$I$I(")", i);
p.append$S(pattern.substring$I$I(i0, i + 1));
continue;
}if (i1 >= 0) {
p.insert$I$S(plen, "(?<秘" + ++ntext + ">" );
p.append$S(")");
i1=-1;
}if (isQ) {
if (pattern.charAt$I(i + 2) == "<") {
i=pattern.indexOf$S$I(">", i);
p.append$S(pattern.substring$I$I(i0, i + 1));
continue;
}}break;
}
if (isChar) {
if (!ignore && i1 == -1 ) {
plen=p.length$();
i1=i;
}if (c == "\\") {
p.appendC$C(c);
c=pattern.charAt$I(++i);
}}p.appendC$C(c);
}
return p.toString();
}, 1);

Clazz.newMeth(C$, 'has$I$I',  function (flags, f) {
return (flags & f) != 0;
}, 1);

Clazz.newMeth(C$, 'checkFlags',  function () {
if (this.pattern.startsWith$S("(?")) {
this.cursor=2;
p$1.addFlag.apply(this, []);
if (this.cursor > 2) this.pattern=this.pattern.substring$I(this.cursor);
}return this.flags;
}, p$1);

Clazz.newMeth(C$, 'addFlag',  function () {
for (; ; ) {
var ch=p$1.next.apply(this, []);
switch (ch) {
case 41:
return;
case 103:
this.flags|=-2147483648;
break;
case 105:
this.flags|=2;
break;
case 109:
this.flags|=8;
break;
case 115:
this.flags|=32;
break;
case 100:
this.flags|=1;
break;
case 117:
this.flags|=64;
break;
case 99:
this.flags|=128;
break;
case 120:
this.flags|=4;
break;
case 85:
this.flags|=(320);
break;
case 45:
p$1.unFlag.apply(this, []);
continue;
default:
--this.cursor;
return;
}
}
}, p$1);

Clazz.newMeth(C$, 'unFlag',  function () {
for (; ; ) {
var ch=p$1.next.apply(this, []);
switch (ch) {
case 105:
this.flags&=~2;
break;
case 109:
this.flags&=~8;
break;
case 115:
this.flags&=~32;
break;
case 100:
this.flags&=~1;
break;
case 117:
this.flags&=~64;
break;
case 99:
this.flags&=~128;
break;
case 120:
this.flags&=~4;
break;
case 85:
this.flags&=~(320);
break;
default:
--this.cursor;
return;
}
}
}, p$1);

Clazz.newMeth(C$, 'next',  function () {
return this.pattern.codePointAt$I(this.cursor++);
}, p$1);

Clazz.newMeth(C$, 'namedGroups$',  function () {
if (this.namedGroups == null ) this.namedGroups=Clazz.new_($I$(6,1).c$$I,[2]);
return this.namedGroups;
});

Clazz.newMeth(C$, 'asPredicate$',  function () {
return ((P$.Pattern$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Pattern$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Predicate', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['test$S','test$O'],  function (s) { return (this.b$['java.util.regex.Pattern'].matcher$CharSequence.apply(this.b$['java.util.regex.Pattern'], [s]).find$.apply(this.b$['java.util.regex.Pattern'].matcher$CharSequence.apply(this.b$['java.util.regex.Pattern'], [s]), []));});
})()
), Clazz.new_(P$.Pattern$lambda1.$init$,[this, null]));
});

Clazz.newMeth(C$, 'splitAsStream$CharSequence',  function (input) {
return $I$(7,"stream$java_util_Spliterator$Z",[$I$(8,"spliteratorUnknownSize$java_util_Iterator$I",[Clazz.new_(P$.Pattern$1MatcherIterator.$init$,[this, {input:input}]), 272]), false]);
});

Clazz.newMeth(C$, '秘setNameGroups$',  function () {
if (this.namedGroups != null ) return;
this.namedGroups$();
var s=this.秘pattern;
var pt=s.lastIndexOf$S("(") + 1;
if (pt == 0) return;
var ignore=false;
var n=-1;
for (var i=0; i < pt; i++) {
var c=s.charAt$I(i);
switch (c.$c()) {
case 92:
++i;
break;
case 91:
ignore=true;
break;
case 93:
ignore=false;
break;
case 40:
if (ignore) continue;
++n;
var name=null;
if (s.charAt$I(i + 1) == "?") {
switch ((s.charCodeAt$I(i + 2))) {
case 60:
var i1=s.indexOf$S$I(">", i);
name=s.substring$I$I(i + 3, i1);
if (name.startsWith$S("\u79d8")) {
--n;
} else {
this.namedGroups.put$O$O(name, Integer.valueOf$I(n));
}i=i1;
break;
case 58:
--n;
continue;
}
}if (this.秘groupNames.size$() == 0) this.秘groupNames.add$O(null);
this.秘groupNames.add$O(name);
break;
}
}
});

C$.$static$=function(){C$.$static$=0;
C$.posixes=Clazz.array(String, -1, ["\\p{javaWhitespace}", "\\s", "\\p{javaDigit}", "\\d", "\\p{Lower}", "[a-z]", "\\p{Upper}", "[A-Z]", "\\p{ASCII}", "[\u0000-]", "\\p{Alpha}", "[A-Za-z]", "\\p{Digit}", "[0-9]", "\\p{Alnum}", "[A-Za-z0-9]", "\\p{Punct}", "[!\"#$%&\'\\(\\)\\*\\+,-./:;<=>?@\\[\\\\\\]^_`{\\|}~]", "\\p{Graph}", "[A-Za-z0-9]!\"#$%&\'\\(\\)\\*\\+,-./:;<=>?@\\[\\\\\\]^_`{\\|}~]", "\\p{Print}", "[A-Za-z0-9]!\"#$%&\'\\(\\)\\*\\+,-./:;<=>?@\\[\\\\\\]^_`{\\|}~]", "\\p{Blank}", "[ \t]", "\\p{Cntrl}", "[\u0000-\u001f]", "\\p{XDigit}", "[0-9a-fA-F]", "\\p{Space}", "[ \t\n\u000b\f\r]", "\\p{javaLowerCase}", "[a-z]", "\\p{javaUpperCase}", "[A-Z]", "\\p{Sc}", "[$\u00a2\u00a3\u00a4\u00a5\u058f\u060b\u07fe\u07ff\u09f2\u09f3\u09fb\u0af1\u0bf9\u0e3f\u20a0\u20a1\u20a2\u20a3\u20a4\u20a5\u20a6\u20a7\u20a8\u20a9\u20aa\u20ab\u20ac\u20ad\u20ae\u20af\u20b0\u20b1\u20b2\u20b3\u20b4\u20b5\u20b6\u20b7\u20b8\u20b9\u20ba\u20bb\u20bc\u20bd\u20be\u20bf\ua838\ufdfc\ufe69\uff04\uffe0\uffe1\uffe5\uffe6]"]);
};
;
(function(){/*l*/var C$=Clazz.newClass(P$, "Pattern$1MatcherIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Iterator', 2);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['current','emptyElementCount'],'S',['nextElement'],'O',['matcher','java.util.regex.Matcher']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.matcher=this.b$['java.util.regex.Pattern'].matcher$CharSequence.apply(this.b$['java.util.regex.Pattern'], [this.$finals$.input]);
}, 1);

Clazz.newMeth(C$, 'next$',  function () {
if (!this.hasNext$()) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
if (this.emptyElementCount == 0) {
var n=this.nextElement;
this.nextElement=null;
return n;
} else {
--this.emptyElementCount;
return "";
}});

Clazz.newMeth(C$, 'hasNext$',  function () {
if (this.nextElement != null  || this.emptyElementCount > 0 ) return true;
if (this.current == this.$finals$.input.length$()) return false;
while (this.matcher.find$()){
this.nextElement=this.$finals$.input.subSequence$I$I(this.current, this.matcher.start$()).toString();
this.current=this.matcher.end$();
if (!this.nextElement.isEmpty$()) {
return true;
} else if (this.current > 0) {
++this.emptyElementCount;
}}
this.nextElement=this.$finals$.input.subSequence$I$I(this.current, this.$finals$.input.length$()).toString();
this.current=this.$finals$.input.length$();
if (!this.nextElement.isEmpty$()) {
return true;
} else {
this.emptyElementCount=0;
this.nextElement=null;
return false;
}});
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:40 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
