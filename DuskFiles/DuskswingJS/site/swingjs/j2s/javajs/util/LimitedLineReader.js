(function(){var P$=Clazz.newPackage("javajs.util"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "LimitedLineReader");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['cchBuf','ichCurrent'],'O',['buf','char[]']]]

Clazz.newMeth(C$, 'c$$java_io_BufferedReader$I',  function (bufferedReader, readLimit) {
;C$.$init$.apply(this);
bufferedReader.mark$I(readLimit + 1);
this.buf=Clazz.array(Character.TYPE, [readLimit]);
this.cchBuf=Math.max(bufferedReader.read$CA$I$I(this.buf, 0, readLimit), 0);
this.ichCurrent=0;
bufferedReader.reset$();
}, 1);

Clazz.newMeth(C$, 'getHeader$I',  function (n) {
return (n == 0 ?  String.instantialize(this.buf) :  String.instantialize(this.buf, 0, Math.min(this.cchBuf, n)));
});

Clazz.newMeth(C$, 'readLineWithNewline$',  function () {
while (this.ichCurrent < this.cchBuf){
var ichBeginningOfLine=this.ichCurrent;
var ch=String.fromCharCode(0);
while (this.ichCurrent < this.cchBuf && (ch=this.buf[this.ichCurrent++]) != "\r"  && ch != "\n" ){
}
if (ch == "\r" && this.ichCurrent < this.cchBuf  && this.buf[this.ichCurrent] == "\n" ) ++this.ichCurrent;
var cchLine=this.ichCurrent - ichBeginningOfLine;
if (this.buf[ichBeginningOfLine] == "#") continue;
return  String.instantialize(this.buf, ichBeginningOfLine, cchLine);
}
return "";
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:46 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
