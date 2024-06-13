(function(){var P$=Clazz.newPackage("sun.nio.fs"),I$=[[0,'StringBuilder']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Globs");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['C',['EOL']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'isRegexMeta$C',  function (c) {
return ".^$+{[]|()".indexOf$I(c) != -1;
}, 1);

Clazz.newMeth(C$, 'isGlobMeta$C',  function (c) {
return "\\*?[{".indexOf$I(c) != -1;
}, 1);

Clazz.newMeth(C$, 'next$S$I',  function (glob, i) {
if (i < glob.length$()) {
return glob.charAt$I(i);
}return C$.EOL;
}, 1);

Clazz.newMeth(C$, 'toRegexPattern$S$Z',  function (globPattern, isDos) {
var inGroup=false;
var regex=Clazz.new_($I$(1,1).c$$S,["^"]);
var i=0;
while (i < globPattern.length$()){
var c=globPattern.charAt$I(i++);
switch (c.$c()) {
case 92:
if (i == globPattern.length$()) {
throw Clazz.new_(Clazz.load('java.util.regex.PatternSyntaxException').c$$S$S$I,["No character to escape", globPattern, i - 1]);
}var next=globPattern.charAt$I(i++);
if (C$.isGlobMeta$C(next) || C$.isRegexMeta$C(next) ) {
regex.append$C("\\");
}regex.append$C(next);
break;
case 47:
if (isDos) {
regex.append$S("\\\\");
} else {
regex.append$C(c);
}break;
case 91:
if (isDos) {
regex.append$S("[[^\\\\]&&[");
} else {
regex.append$S("[[^/]&&[");
}if (C$.next$S$I(globPattern, i) == "^") {
regex.append$S("\\^");
++i;
} else {
if (C$.next$S$I(globPattern, i) == "!") {
regex.append$C("^");
++i;
}if (C$.next$S$I(globPattern, i) == "-") {
regex.append$C("-");
++i;
}}var hasRangeStart=false;
var last=String.fromCharCode(0);
while (i < globPattern.length$()){
c=globPattern.charAt$I(i++);
if (c == "]") {
break;
}if (c == "/" || (isDos && c == "\\" ) ) {
throw Clazz.new_(Clazz.load('java.util.regex.PatternSyntaxException').c$$S$S$I,["Explicit \'name separator\' in class", globPattern, i - 1]);
}if (c == "\\" || c == "["  || c == "&" && C$.next$S$I(globPattern, i) == "&"  ) {
regex.append$C("\\");
}regex.append$C(c);
if (c == "-") {
if (!hasRangeStart) {
throw Clazz.new_(Clazz.load('java.util.regex.PatternSyntaxException').c$$S$S$I,["Invalid range", globPattern, i - 1]);
}if ((c=C$.next$S$I(globPattern, i++)) == C$.EOL || c == "]" ) {
break;
}if (c < last) {
throw Clazz.new_(Clazz.load('java.util.regex.PatternSyntaxException').c$$S$S$I,["Invalid range", globPattern, i - 3]);
}regex.append$C(c);
hasRangeStart=false;
} else {
hasRangeStart=true;
last=c;
}}
if (c != "]") {
throw Clazz.new_(Clazz.load('java.util.regex.PatternSyntaxException').c$$S$S$I,["Missing \']", globPattern, i - 1]);
}regex.append$S("]]");
break;
case 123:
if (inGroup) {
throw Clazz.new_(Clazz.load('java.util.regex.PatternSyntaxException').c$$S$S$I,["Cannot nest groups", globPattern, i - 1]);
}regex.append$S("(?:(?:");
inGroup=true;
break;
case 125:
if (inGroup) {
regex.append$S("))");
inGroup=false;
} else {
regex.append$C("}");
}break;
case 44:
if (inGroup) {
regex.append$S(")|(?:");
} else {
regex.append$C(",");
}break;
case 42:
if (C$.next$S$I(globPattern, i) == "*") {
regex.append$S(".*");
++i;
} else {
if (isDos) {
regex.append$S("[^\\\\]*");
} else {
regex.append$S("[^/]*");
}}break;
case 63:
if (isDos) {
regex.append$S("[^\\\\]");
} else {
regex.append$S("[^/]");
}break;
default:
if (C$.isRegexMeta$C(c)) {
regex.append$C("\\");
}regex.append$C(c);
}
}
if (inGroup) {
throw Clazz.new_(Clazz.load('java.util.regex.PatternSyntaxException').c$$S$S$I,["Missing \'}", globPattern, i - 1]);
}return regex.append$C("$").toString();
}, 1);

Clazz.newMeth(C$, 'toUnixRegexPattern$S',  function (globPattern) {
return C$.toRegexPattern$S$Z(globPattern, false);
}, 1);

Clazz.newMeth(C$, 'toWindowsRegexPattern$S',  function (globPattern) {
return C$.toRegexPattern$S$Z(globPattern, true);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.EOL=String.fromCharCode(0);
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:49 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
