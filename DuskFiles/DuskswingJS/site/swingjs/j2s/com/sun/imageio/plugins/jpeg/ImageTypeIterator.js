(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.jpeg"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ImageTypeIterator", null, null, 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.theNext=null;
},1);

C$.$fields$=[['O',['producers','java.util.Iterator','theNext','javax.imageio.ImageTypeSpecifier']]]

Clazz.newMeth(C$, 'c$$java_util_Iterator',  function (producers) {
;C$.$init$.apply(this);
this.producers=producers;
}, 1);

Clazz.newMeth(C$, 'hasNext$',  function () {
if (this.theNext != null ) {
return true;
}if (!this.producers.hasNext$()) {
return false;
}do {
this.theNext=this.producers.next$().getType$();
} while (this.theNext == null  && this.producers.hasNext$() );
return (this.theNext != null );
});

Clazz.newMeth(C$, 'next$',  function () {
if (this.theNext != null  || this.hasNext$() ) {
var t=this.theNext;
this.theNext=null;
return t;
} else {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
}});

Clazz.newMeth(C$, 'remove$',  function () {
this.producers.remove$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:54 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
