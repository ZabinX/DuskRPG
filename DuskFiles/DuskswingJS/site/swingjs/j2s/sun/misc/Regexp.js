(function(){var P$=Clazz.newPackage("sun.misc"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Regexp");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['ignoreCase','exact'],'I',['prefixLen','suffixLen','totalLen'],'S',['exp','prefix','suffix'],'O',['mids','String[]']]]

Clazz.newMeth(C$, 'c$$S',  function (s) {
;C$.$init$.apply(this);
this.exp=s;
var firstst=s.indexOf$I("*");
var lastst=s.lastIndexOf$I("*");
if (firstst < 0) {
this.totalLen=s.length$();
this.exact=true;
} else {
this.prefixLen=firstst;
if (firstst == 0) this.prefix=null;
 else this.prefix=s.substring$I$I(0, firstst);
this.suffixLen=s.length$() - lastst - 1 ;
if (this.suffixLen == 0) this.suffix=null;
 else this.suffix=s.substring$I(lastst + 1);
var nmids=0;
var pos=firstst;
while (pos < lastst && pos >= 0 ){
++nmids;
pos=s.indexOf$I$I("*", pos + 1);
}
this.totalLen=this.prefixLen + this.suffixLen;
if (nmids > 0) {
this.mids=Clazz.array(String, [nmids]);
pos=firstst;
for (var i=0; i < nmids; i++) {
++pos;
var npos=s.indexOf$I$I("*", pos);
if (pos < npos) {
this.mids[i]=s.substring$I$I(pos, npos);
this.totalLen+=this.mids[i].length$();
}pos=npos;
}
}}}, 1);

Clazz.newMeth(C$, 'matches$S',  function (s) {
return this.matches$S$I$I(s, 0, s.length$());
});

Clazz.newMeth(C$, 'matches$S$I$I',  function (s, offset, len) {
if (this.exact) return len == this.totalLen && this.exp.regionMatches$Z$I$S$I$I(this.ignoreCase, 0, s, offset, len) ;
if (len < this.totalLen) return false;
if (this.prefixLen > 0 && !this.prefix.regionMatches$Z$I$S$I$I(this.ignoreCase, 0, s, offset, this.prefixLen)  || this.suffixLen > 0 && !this.suffix.regionMatches$Z$I$S$I$I(this.ignoreCase, 0, s, offset + len - this.suffixLen, this.suffixLen)  ) return false;
if (this.mids == null ) return true;
var nmids=this.mids.length;
var spos=offset + this.prefixLen;
var limit=offset + len - this.suffixLen;
for (var i=0; i < nmids; i++) {
var ms=this.mids[i];
var ml=ms.length$();
while (spos + ml <= limit && !ms.regionMatches$Z$I$S$I$I(this.ignoreCase, 0, s, spos, ml) )++spos;

if (spos + ml > limit) return false;
spos+=ml;
}
return true;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:46 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
