(function(){var P$=Clazz.newPackage("org.json"),I$=[[0,'java.util.HashMap','org.json.XML','StringBuilder']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "XMLTokener", null, 'org.json.JSONTokener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['entity','java.util.HashMap']]]

Clazz.newMeth(C$, 'c$$java_io_Reader',  function (r) {
;C$.superclazz.c$$java_io_Reader.apply(this,[r]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (s) {
;C$.superclazz.c$$S.apply(this,[s]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'nextCDATA$',  function () {
var c;
var i;
var sb=Clazz.new_($I$(3,1));
while (this.more$()){
c=this.next$();
sb.append$C(c);
i=sb.length$() - 3;
if (i >= 0 && sb.charAt$I(i) == "]"  && sb.charAt$I(i + 1) == "]"  && sb.charAt$I(i + 2) == ">" ) {
sb.setLength$I(i);
return sb.toString();
}}
throw this.syntaxError$S("Unclosed CDATA");
});

Clazz.newMeth(C$, 'nextContent$',  function () {
var c;
var sb;
do {
c=this.next$();
} while (Character.isWhitespace$C(c));
if (c.$c() == 0 ) {
return null;
}if (c == "<") {
return $I$(2).LT;
}sb=Clazz.new_($I$(3,1));
for (; ; ) {
if (c.$c() == 0 ) {
return sb.toString().trim$();
}if (c == "<") {
this.back$();
return sb.toString().trim$();
}if (c == "&") {
sb.append$O(this.nextEntity$C(c));
} else {
sb.append$C(c);
}c=this.next$();
}
});

Clazz.newMeth(C$, 'nextEntity$C',  function (ampersand) {
var sb=Clazz.new_($I$(3,1));
for (; ; ) {
var c=this.next$();
if (Character.isLetterOrDigit$C(c) || c == "#" ) {
sb.append$C(Character.toLowerCase$C(c));
} else if (c == ";") {
break;
} else {
throw this.syntaxError$S("Missing ';' in XML entity: &" + sb);
}}
var string=sb.toString();
return C$.unescapeEntity$S(string);
});

Clazz.newMeth(C$, 'unescapeEntity$S',  function (e) {
if (e == null  || e.isEmpty$() ) {
return "";
}if (e.charAt$I(0) == "#") {
var cp;
if (e.charAt$I(1) == "x") {
cp=Integer.parseInt$S$I(e.substring$I(2), 16);
} else {
cp=Integer.parseInt$S(e.substring$I(1));
}return  String.instantialize(Clazz.array(Integer.TYPE, -1, [cp]), 0, 1);
}var knownEntity=C$.entity.get$O(e);
if (knownEntity == null ) {
return '&' + e + ';' ;
}return knownEntity.toString();
}, 1);

Clazz.newMeth(C$, 'nextMeta$',  function () {
var c;
var q;
do {
c=this.next$();
} while (Character.isWhitespace$C(c));
switch (c.$c()) {
case 0:
throw this.syntaxError$S("Misshaped meta tag");
case 60:
return $I$(2).LT;
case 62:
return $I$(2).GT;
case 47:
return $I$(2).SLASH;
case 61:
return $I$(2).EQ;
case 33:
return $I$(2).BANG;
case 63:
return $I$(2).QUEST;
case 34:
case 39:
q=c;
for (; ; ) {
c=this.next$();
if (c.$c() == 0 ) {
throw this.syntaxError$S("Unterminated string");
}if (c == q) {
return Boolean.TRUE;
}}
default:
for (; ; ) {
c=this.next$();
if (Character.isWhitespace$C(c)) {
return Boolean.TRUE;
}switch (c.$c()) {
case 0:
case 60:
case 62:
case 47:
case 61:
case 33:
case 63:
case 34:
case 39:
this.back$();
return Boolean.TRUE;
}
}
}
});

Clazz.newMeth(C$, 'nextToken$',  function () {
var c;
var q;
var sb;
do {
c=this.next$();
} while (Character.isWhitespace$C(c));
switch (c.$c()) {
case 0:
throw this.syntaxError$S("Misshaped element");
case 60:
throw this.syntaxError$S("Misplaced \'<\'");
case 62:
return $I$(2).GT;
case 47:
return $I$(2).SLASH;
case 61:
return $I$(2).EQ;
case 33:
return $I$(2).BANG;
case 63:
return $I$(2).QUEST;
case 34:
case 39:
q=c;
sb=Clazz.new_($I$(3,1));
for (; ; ) {
c=this.next$();
if (c.$c() == 0 ) {
throw this.syntaxError$S("Unterminated string");
}if (c == q) {
return sb.toString();
}if (c == "&") {
sb.append$O(this.nextEntity$C(c));
} else {
sb.append$C(c);
}}
default:
sb=Clazz.new_($I$(3,1));
for (; ; ) {
sb.append$C(c);
c=this.next$();
if (Character.isWhitespace$C(c)) {
return sb.toString();
}switch (c.$c()) {
case 0:
return sb.toString();
case 62:
case 47:
case 61:
case 33:
case 63:
case 91:
case 93:
this.back$();
return sb.toString();
case 60:
case 34:
case 39:
throw this.syntaxError$S("Bad character in a name");
}
}
}
});

Clazz.newMeth(C$, 'skipPast$S',  function (to) {
var b;
var c;
var i;
var j;
var offset=0;
var length=to.length$();
var circle=Clazz.array(Character.TYPE, [length]);
for (i=0; i < length; i+=1) {
c=this.next$();
if (c.$c() == 0 ) {
return;
}circle[i]=c;
}
for (; ; ) {
j=offset;
b=true;
for (i=0; i < length; i+=1) {
if (circle[j] != to.charAt$I(i)) {
b=false;
break;
}j+=1;
if (j >= length) {
j-=length;
}}
if (b) {
return;
}c=this.next$();
if (c.$c() == 0 ) {
return;
}circle[offset]=c;
offset+=1;
if (offset >= length) {
offset-=length;
}}
});

C$.$static$=function(){C$.$static$=0;
{
C$.entity=Clazz.new_($I$(1,1).c$$I,[8]);
C$.entity.put$O$O("amp", $I$(2).AMP);
C$.entity.put$O$O("apos", $I$(2).APOS);
C$.entity.put$O$O("gt", $I$(2).GT);
C$.entity.put$O$O("lt", $I$(2).LT);
C$.entity.put$O$O("quot", $I$(2).QUOT);
};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:39 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
