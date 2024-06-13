(function(){var P$=Clazz.newPackage("org.glassfish.json"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "JsonLocationImpl", null, null, 'javax.json.stream.JsonLocation');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['J',['columnNo','lineNo','offset']]
,['O',['UNKNOWN','javax.json.stream.JsonLocation']]]

Clazz.newMeth(C$, 'c$$J$J$J',  function (lineNo, columnNo, streamOffset) {
;C$.$init$.apply(this);
this.lineNo=lineNo;
this.columnNo=columnNo;
this.offset=streamOffset;
}, 1);

Clazz.newMeth(C$, 'getLineNumber$',  function () {
return this.lineNo;
});

Clazz.newMeth(C$, 'getColumnNumber$',  function () {
return this.columnNo;
});

Clazz.newMeth(C$, 'getStreamOffset$',  function () {
return this.offset;
});

Clazz.newMeth(C$, 'toString',  function () {
return "(line no=" + Long.$s(this.lineNo) + ", column no=" + Long.$s(this.columnNo) + ", offset=" + Long.$s(this.offset) + ")" ;
});

C$.$static$=function(){C$.$static$=0;
C$.UNKNOWN=Clazz.new_(C$.c$$J$J$J,[-1, -1, -1]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:38 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
