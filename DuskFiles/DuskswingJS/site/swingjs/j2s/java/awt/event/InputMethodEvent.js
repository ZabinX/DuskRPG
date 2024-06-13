(function(){var P$=Clazz.newPackage("java.awt.event"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "InputMethodEvent", null, 'java.awt.AWTEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['committedCharacterCount'],'J',['when'],'O',['text','java.text.AttributedCharacterIterator']]]

Clazz.newMeth(C$, 'c$$java_awt_Event',  function (event) {
;C$.superclazz.c$$java_awt_Event.apply(this,[event]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getText$',  function () {
return this.text;
});

Clazz.newMeth(C$, 'getCommittedCharacterCount$',  function () {
return this.committedCharacterCount;
});

Clazz.newMeth(C$, 'getWhen$',  function () {
return this.when;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:09 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
