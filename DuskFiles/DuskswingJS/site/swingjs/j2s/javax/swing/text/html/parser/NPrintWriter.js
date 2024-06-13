(function(){var P$=Clazz.newPackage("javax.swing.text.html.parser"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "NPrintWriter", null, 'java.io.PrintWriter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.numLines=5;
this.numPrinted=0;
},1);

C$.$fields$=[['I',['numLines','numPrinted']]]

Clazz.newMeth(C$, 'c$$I',  function (numberOfLines) {
;C$.superclazz.c$$java_io_OutputStream.apply(this,[System.out]);C$.$init$.apply(this);
this.numLines=numberOfLines;
}, 1);

Clazz.newMeth(C$, 'println$CA',  function (array) {
if (this.numPrinted >= this.numLines) {
return;
}var partialArray=null;
for (var i=0; i < array.length; i++) {
if (array[i] == "\n") {
++this.numPrinted;
}if (this.numPrinted == this.numLines) {
System.arraycopy$O$I$O$I$I(array, 0, partialArray, 0, i);
}}
if (partialArray != null ) {
C$.superclazz.prototype.print$CA.apply(this, [partialArray]);
}if (this.numPrinted == this.numLines) {
return;
}C$.superclazz.prototype.println$CA.apply(this, [array]);
++this.numPrinted;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:31 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
