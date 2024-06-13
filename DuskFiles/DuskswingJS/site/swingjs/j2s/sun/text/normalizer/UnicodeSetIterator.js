(function(){var P$=Clazz.newPackage("sun.text.normalizer"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "UnicodeSetIterator");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.endRange=0;
this.range=0;
this.stringIterator=null;
},1);

C$.$fields$=[['I',['codepoint','codepointEnd','endRange','range','endElement','nextElement'],'S',['string'],'O',['set','sun.text.normalizer.UnicodeSet','stringIterator','java.util.Iterator']]
,['I',['IS_STRING']]]

Clazz.newMeth(C$, 'c$$sun_text_normalizer_UnicodeSet',  function (set) {
;C$.$init$.apply(this);
this.reset$sun_text_normalizer_UnicodeSet(set);
}, 1);

Clazz.newMeth(C$, 'nextRange$',  function () {
if (this.nextElement <= this.endElement) {
this.codepointEnd=this.endElement;
this.codepoint=this.nextElement;
this.nextElement=this.endElement + 1;
return true;
}if (this.range < this.endRange) {
this.loadRange$I(++this.range);
this.codepointEnd=this.endElement;
this.codepoint=this.nextElement;
this.nextElement=this.endElement + 1;
return true;
}if (this.stringIterator == null ) return false;
this.codepoint=C$.IS_STRING;
this.string=this.stringIterator.next$();
if (!this.stringIterator.hasNext$()) this.stringIterator=null;
return true;
});

Clazz.newMeth(C$, 'reset$sun_text_normalizer_UnicodeSet',  function (uset) {
this.set=uset;
this.reset$();
});

Clazz.newMeth(C$, 'reset$',  function () {
this.endRange=this.set.getRangeCount$() - 1;
this.range=0;
this.endElement=-1;
this.nextElement=0;
if (this.endRange >= 0) {
this.loadRange$I(this.range);
}this.stringIterator=null;
if (this.set.strings != null ) {
this.stringIterator=this.set.strings.iterator$();
if (!this.stringIterator.hasNext$()) this.stringIterator=null;
}});

Clazz.newMeth(C$, 'loadRange$I',  function (aRange) {
this.nextElement=this.set.getRangeStart$I(aRange);
this.endElement=this.set.getRangeEnd$I(aRange);
});

C$.$static$=function(){C$.$static$=0;
C$.IS_STRING=-1;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:50 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
