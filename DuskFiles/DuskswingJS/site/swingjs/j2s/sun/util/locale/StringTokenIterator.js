(function(){var P$=Clazz.newPackage("sun.util.locale"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "StringTokenIterator");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['done'],'C',['delimiterChar'],'I',['start','end'],'S',['text','dlms','token']]]

Clazz.newMeth(C$, 'c$$S$S',  function (text, dlms) {
;C$.$init$.apply(this);
this.text=text;
if (dlms.length$() == 1) {
this.delimiterChar=dlms.charAt$I(0);
} else {
this.dlms=dlms;
}this.setStart$I(0);
}, 1);

Clazz.newMeth(C$, 'first$',  function () {
this.setStart$I(0);
return this.token;
});

Clazz.newMeth(C$, 'current$',  function () {
return this.token;
});

Clazz.newMeth(C$, 'currentStart$',  function () {
return this.start;
});

Clazz.newMeth(C$, 'currentEnd$',  function () {
return this.end;
});

Clazz.newMeth(C$, 'isDone$',  function () {
return this.done;
});

Clazz.newMeth(C$, 'next$',  function () {
if (this.hasNext$()) {
this.start=this.end + 1;
this.end=p$1.nextDelimiter$I.apply(this, [this.start]);
this.token=this.text.substring$I$I(this.start, this.end);
} else {
this.start=this.end;
this.token=null;
this.done=true;
}return this.token;
});

Clazz.newMeth(C$, 'hasNext$',  function () {
return (this.end < this.text.length$());
});

Clazz.newMeth(C$, 'setStart$I',  function (offset) {
if (offset > this.text.length$()) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
}this.start=offset;
this.end=p$1.nextDelimiter$I.apply(this, [this.start]);
this.token=this.text.substring$I$I(this.start, this.end);
this.done=false;
return this;
});

Clazz.newMeth(C$, 'setText$S',  function (text) {
this.text=text;
this.setStart$I(0);
return this;
});

Clazz.newMeth(C$, 'nextDelimiter$I',  function (start) {
var textlen=this.text.length$();
if (this.dlms == null ) {
for (var idx=start; idx < textlen; idx++) {
if (this.text.charAt$I(idx) == this.delimiterChar) {
return idx;
}}
} else {
var dlmslen=this.dlms.length$();
for (var idx=start; idx < textlen; idx++) {
var c=this.text.charAt$I(idx);
for (var i=0; i < dlmslen; i++) {
if (c == this.dlms.charAt$I(i)) {
return idx;
}}
}
}return textlen;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:56 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
