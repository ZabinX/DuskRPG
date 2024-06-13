(function(){var P$=Clazz.newPackage("java.util.regex"),p$1={},I$=[[0,['java.util.regex.Matcher','.RegExp'],'StringBuilder','java.util.regex.ASCII',['java.util.regex.Matcher','.Value'],'StringBuffer','java.util.Objects']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Matcher", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'java.util.regex.MatchResult');
C$.$classes$=[['Value',0],['RegExp',1032]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.acceptMode=-1;
this.first=-1;
this.last=0;
this.oldLast=-1;
this.appendPos=0;
this.transparentBounds=false;
this.anchoringBounds=true;
},1);

C$.$fields$=[['Z',['hitEnd','requireEnd','transparentBounds','anchoringBounds','秘haveGroups'],'I',['leftBound','rightBound','lookbehindTo','acceptMode','first','last','oldLast','appendPos','groupCount','秘groupCount'],'S',['processedRepl','replacement','strString'],'O',['pat','java.util.regex.Pattern','groups','int[]','cs','CharSequence','replacementParts','Object[]','秘results','String[]','+results']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_regex_Pattern$CharSequence',  function (parent, text) {
;C$.$init$.apply(this);
this.pat=parent;
this.cs=text;
this.reset$();
}, 1);

Clazz.newMeth(C$, 'toMatchResult$',  function () {
var result=Clazz.new_(C$.c$$java_util_regex_Pattern$CharSequence,[this.pat, this.cs.toString()]);
result.first=this.first;
result.last=this.last;
result.秘groupCount=this.秘groupCount;
result.秘results=this.秘results.clone$();
return result;
});

Clazz.newMeth(C$, 'usePattern$java_util_regex_Pattern',  function (newPattern) {
if (newPattern == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Pattern cannot be null"]);
this.pat=newPattern;
p$1.clearGroups.apply(this, []);
return this;
});

Clazz.newMeth(C$, 'reset$',  function () {
this.first=-1;
this.last=0;
this.秘groupCount=0;
this.oldLast=-1;
p$1.clearGroups.apply(this, []);
this.appendPos=0;
this.leftBound=0;
this.rightBound=this.getTextLength$();
this.strString=null;
this.pat.regexp=$I$(1).clone$java_util_regex_Matcher_RegExp(this.pat.regexp);
return this;
});

Clazz.newMeth(C$, 'reset$CharSequence',  function (input) {
this.cs=input;
return this.reset$();
});

Clazz.newMeth(C$, 'find$',  function () {
var nextSearchIndex=this.last;
if (nextSearchIndex == this.first) ++nextSearchIndex;
if (nextSearchIndex < this.leftBound) nextSearchIndex=this.leftBound;
if (nextSearchIndex > this.rightBound) {
p$1.clearGroups.apply(this, []);
return false;
}return this.search$I$I(nextSearchIndex, -1);
});

Clazz.newMeth(C$, 'search$I$I',  function (from, anchor) {
if (this.strString == null ) this.strString=this.cs.toString();
this.hitEnd=false;
this.requireEnd=this.pat.pattern$().endsWith$S("$");
from=(from < 0 ? 0 : from);
this.first=from;
this.oldLast=(this.oldLast < 0 ? from : this.oldLast);
p$1.clearGroups.apply(this, []);
var s=(this.rightBound == this.strString.length$() ? this.strString : this.strString.substring$I$I(0, this.rightBound));
var rg=this.pat.regexp;
rg.lastIndex=from;
this.acceptMode=(anchor == -1 ? 0 : anchor);
this.秘results=p$1.execRE$java_util_regex_Matcher_RegExp$S.apply(this, [rg, s]);
var result=p$1.checkRE$SA$S.apply(this, [this.秘results, s]);
this.oldLast=this.last;
return result;
});

Clazz.newMeth(C$, 'clearGroups',  function () {
this.秘haveGroups=false;
this.groups=null;
}, p$1);

Clazz.newMeth(C$, 'find$I',  function (start) {
var limit=this.getTextLength$();
if ((start < 0) || (start > limit) ) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["Illegal start index"]);
this.reset$();
return this.search$I$I(start, -1);
});

Clazz.newMeth(C$, 'lookingAt$',  function () {
return this.match$I$I(this.leftBound, 2);
});

Clazz.newMeth(C$, 'appendReplacement$StringBuffer$S',  function (sb, replacement) {
if (this.first < 0) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["No match available"]);
this.processedRepl=p$1.processRepl$S.apply(this, [replacement]);
sb.append$CharSequence$I$I(this.cs, this.appendPos, this.first);
sb.append$S(this.processedRepl);
this.appendPos=this.last;
return this;
});

Clazz.newMeth(C$, 'processRepl$S',  function (replacement) {
if (this.replacement != null  && this.replacement.equals$O(replacement) ) {
return (this.replacementParts == null  ? this.processedRepl : 1 ? this.replacementParts.join("") :null);
}this.replacement=replacement;
if (replacement != null  && replacement.indexOf$S("$") >= 0 ) p$1.秘updateGroups.apply(this, []);
var index=0;
var replacementPos=0;
var res=Clazz.new_($I$(2,1));
var len=replacement.length$();
while (index < len){
var nextChar=replacement.charAt$I(index);
switch (nextChar.$c()) {
case 92:
++index;
if (index == replacement.length$()) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["character to be escaped is missing"]);
nextChar=replacement.charAt$I(index);
res.append$C(nextChar);
++index;
break;
case 36:
++index;
if (index == len) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal group reference: group index is missing"]);
nextChar=replacement.charAt$I(index);
var gr=-1;
if (nextChar == "{") {
++index;
var gsb=Clazz.new_($I$(2,1));
while (index < replacement.length$()){
nextChar=replacement.charAt$I(index);
if ($I$(3,"isLower$I",[nextChar.$c()]) || $I$(3,"isUpper$I",[nextChar.$c()]) || $I$(3,"isDigit$I",[nextChar.$c()])  ) {
gsb.append$C(nextChar);
++index;
} else {
break;
}}
if (gsb.length$() == 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["named capturing group has 0 length name"]);
if (nextChar != "}") throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["named capturing group is missing trailing \'}\'"]);
var gname=gsb.toString();
if ($I$(3,"isDigit$I",[gname.charAt$I(0).$c()])) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["capturing group name {" + gname + "} starts with digit character" ]);
if (this.pat.namedGroups == null  || !this.pat.namedGroups$().containsKey$O(gname) ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["No group with name {" + gname + "}" ]);
gr=(this.pat.namedGroups$().get$O(gname)).$c();
++index;
} else {
if (this.replacementParts == null ) this.replacementParts=Clazz.array(String, [0]);
gr=nextChar.$c() - 48;
if ((gr < 0) || (gr > 9) ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal group reference"]);
++index;
var done=false;
while (!done){
if (index >= replacement.length$()) {
break;
}var nextDigit=(replacement.charCodeAt$I(index)) - 48;
if ((nextDigit < 0) || (nextDigit > 9) ) {
break;
}var newRefNum=(gr * 10) + nextDigit;
if (this.groupCount$() < newRefNum) {
done=true;
} else {
gr=newRefNum;
++index;
}}
}var n=res.length$();
if (replacementPos != n) {
this.replacementParts[this.replacementParts.length]=res.substring$I$I(replacementPos, n);
replacementPos=n;
}var g=(this.replacementParts[this.replacementParts.length]=Clazz.new_($I$(4,1).c$$I,[this, null, gr])).toString();
res.append$S(g);
replacementPos=res.length$();
break;
default:
res.append$C(nextChar);
++index;
break;
}
}
if (this.replacementParts != null  && replacementPos != res.length$() ) {
this.replacementParts[this.replacementParts.length]=res.substring$I$I(replacementPos, res.length$());
}return res.toString();
}, p$1);

Clazz.newMeth(C$, 'region$I$I',  function (start, end) {
if ((start < 0) || (start > this.getTextLength$()) ) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["start"]);
if ((end < 0) || (end > this.getTextLength$()) ) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["end"]);
if (start > end) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["start > end"]);
this.reset$();
this.leftBound=start;
this.rightBound=end;
return this;
});

Clazz.newMeth(C$, 'appendTail$StringBuffer',  function (sb) {
return sb.append$CharSequence$I$I(this.cs, this.appendPos, this.getTextLength$());
});

Clazz.newMeth(C$, 'replaceFirst$S',  function (replacement) {
if (replacement == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["replacement"]);
this.reset$();
if (!this.find$()) return this.cs.toString();
var sb=Clazz.new_($I$(5,1));
this.appendReplacement$StringBuffer$S(sb, replacement);
return this.appendTail$StringBuffer(sb).toString();
});

Clazz.newMeth(C$, 'replaceAll$S',  function (replacement) {
this.reset$();
var result=this.find$();
if (!result) {
return this.cs.toString();
}var sb=Clazz.new_($I$(5,1));
do {
this.appendReplacement$StringBuffer$S(sb, replacement);
result=this.find$();
} while (result);
return this.appendTail$StringBuffer(sb).toString();
});

Clazz.newMeth(C$, 'pattern$',  function () {
return this.pat;
});

Clazz.newMeth(C$, 'group$',  function () {
return this.group$I(0);
});

Clazz.newMeth(C$, 'group$I',  function (group) {
if (this.first < 0) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["No match found"]);
if (group < 0 || group > this.groupCount$() ) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["No group " + group]);
return this.results[group] == null  ? null : this.results[group];
});

Clazz.newMeth(C$, 'group$S',  function (name) {
var group=this.getMatchedGroupIndex$S(name);
return group < 0 || group >= this.results.length  ? null : this.group$I(group);
});

Clazz.newMeth(C$, 'groupCount$',  function () {
p$1.秘updateGroups.apply(this, []);
return this.groupCount;
});

Clazz.newMeth(C$, '秘updateGroups',  function () {
if (this.秘haveGroups || this.秘groupCount <= 0  || this.秘results == null  ) return;
this.秘haveGroups=true;
this.pat.秘setNameGroups$();
var names=this.pat.秘groupNames;
var pt=this.start$();
this.groupCount=-1;
this.groups=Clazz.array(Integer.TYPE, [names.size$() * 2]);
this.results=Clazz.array(String, [this.秘results.length]);
for (var i=0, gpt=0, n=names.size$(); i < n; i++) {
var name=names.get$I(i);
var r=this.秘results[i];
var len=(r == null  ? 0 : r.length$());
if (name == null  || !name.startsWith$S("\u79d8") ) {
this.groups[gpt++]=pt;
this.groups[gpt++]=pt + len;
this.pat.namedGroups$().put$O$O(name, Integer.valueOf$I(this.groupCount));
this.results[++this.groupCount]=r;
} else {
pt+=len;
}}
}, p$1);

Clazz.newMeth(C$, 'matches$',  function () {
return this.match$I$I(this.leftBound, 1);
});

Clazz.newMeth(C$, 'match$I$I',  function (from, anchor) {
this.hitEnd=false;
from=Math.max(0, from);
this.first=from;
this.oldLast=(this.oldLast < 0 ? from : this.oldLast);
p$1.clearGroups.apply(this, []);
var result=this.search$I$I(from, anchor);
this.oldLast=from;
this.pat.regexp.lastIndex=from;
return result;
});

Clazz.newMeth(C$, 'indexRE$SA',  function (r) {
return r.index ||0;
}, p$1);

Clazz.newMeth(C$, 'execRE$java_util_regex_Matcher_RegExp$S',  function (rg, s) {
return 1 ? rg.exec(s) :null;
}, p$1);

Clazz.newMeth(C$, 'checkRE$SA$S',  function (r, s) {
this.hitEnd=(r == null );
if (this.hitEnd) {
this.requireEnd=false;
this.first=-1;
return false;
}this.秘groupCount=r.length - 1;
var f0=this.first;
this.first=p$1.indexRE$SA.apply(this, [r]);
this.last=this.first + r[0].length$();
this.hitEnd=(this.last == s.length$());
if (this.hitEnd && this.requireEnd$() && this.last != this.strString.length$()  ) {
return false;
}if (this.秘groupCount < 0) return false;
switch (this.acceptMode) {
case 2:
return this.first == f0;
case 1:
return this.first == f0 && this.last == r.input.length ||0 ;
default:
return true;
}
}, p$1);

Clazz.newMeth(C$, 'quoteReplacement$S',  function (s) {
if ((s.indexOf$I("\\") == -1) && (s.indexOf$I("$") == -1) ) return s;
var sb="";
for (var i=0; i < s.length$(); i++) {
var c=s.charAt$I(i);
if (c == "\\" || c == "$" ) {
sb+="\\";
}sb+=c;
}
return sb;
}, 1);

Clazz.newMeth(C$, 'regionStart$',  function () {
return this.leftBound;
});

Clazz.newMeth(C$, 'regionEnd$',  function () {
return this.rightBound;
});

Clazz.newMeth(C$, 'hasTransparentBounds$',  function () {
return this.transparentBounds;
});

Clazz.newMeth(C$, 'useTransparentBounds$Z',  function (b) {
this.transparentBounds=b;
return this;
});

Clazz.newMeth(C$, 'hasAnchoringBounds$',  function () {
return this.anchoringBounds;
});

Clazz.newMeth(C$, 'useAnchoringBounds$Z',  function (b) {
this.anchoringBounds=b;
return this;
});

Clazz.newMeth(C$, 'toString',  function () {
var sb=Clazz.new_($I$(2,1));
sb.append$S("java.util.regex.Matcher");
sb.append$S("[pattern=" + this.pattern$());
sb.append$S(" region=");
sb.append$S(this.regionStart$() + "," + this.regionEnd$() );
sb.append$S(" lastmatch=");
if ((this.first >= 0) && (this.group$() != null ) ) {
sb.append$S(this.group$());
}sb.append$S("]");
return sb.toString();
});

Clazz.newMeth(C$, 'hitEnd$',  function () {
return this.hitEnd;
});

Clazz.newMeth(C$, 'requireEnd$',  function () {
return this.requireEnd;
});

Clazz.newMeth(C$, 'getTextLength$',  function () {
return this.cs.length$();
});

Clazz.newMeth(C$, 'getSubSequence$I$I',  function (beginIndex, endIndex) {
return this.cs.subSequence$I$I(beginIndex, endIndex);
});

Clazz.newMeth(C$, 'charAt$I',  function (i) {
return this.cs.charAt$I(i);
});

Clazz.newMeth(C$, 'getMatchedGroupIndex$S',  function (name) {
$I$(6).requireNonNull$O$S(name, "Group name");
if (this.first < 0) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["No match found"]);
p$1.秘updateGroups.apply(this, []);
if (this.pat.namedGroups == null  || !this.pat.namedGroups$().containsKey$O(name) ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["No group with name <" + name + ">" ]);
return this.pat.namedGroups$().get$O(name).intValue$() + 1;
});

Clazz.newMeth(C$, 'start$',  function () {
if (this.first < 0) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["No match available"]);
return this.first;
});

Clazz.newMeth(C$, 'start$I',  function (group) {
if (this.first < 0) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["No match available"]);
if (group < 0 || group > this.groupCount$() ) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["No group " + group]);
if (group == 0) return this.start$();
return this.groups[group * 2];
});

Clazz.newMeth(C$, 'start$S',  function (name) {
var g=this.getMatchedGroupIndex$S(name);
return this.groups[g * 2];
});

Clazz.newMeth(C$, 'end$',  function () {
if (this.first < 0) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["No match available"]);
return this.last;
});

Clazz.newMeth(C$, 'end$I',  function (group) {
if (this.first < 0) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["No match available"]);
if (group < 0 || group > this.groupCount$() ) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["No group " + group]);
if (group == 0) return this.end$();
return this.groups[group * 2 + 1];
});

Clazz.newMeth(C$, 'end$S',  function (name) {
var g=this.getMatchedGroupIndex$S(name);
return this.groups[g * 2 + 1];
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.Matcher, "Value", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['grN']]]

Clazz.newMeth(C$, 'c$$I',  function (grN) {
;C$.$init$.apply(this);
this.grN=grN;
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
return this.b$['java.util.regex.Matcher'].group$I.apply(this.b$['java.util.regex.Matcher'], [this.grN]).toString();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Matcher, "RegExp", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['lastIndex']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'clone$java_util_regex_Matcher_RegExp',  function (rg) {
return 1?new RegExp(rg.source, rg.flags):null;
}, 1);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:40 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
