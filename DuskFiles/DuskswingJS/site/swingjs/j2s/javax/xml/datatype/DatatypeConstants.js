(function(){var P$=Clazz.newPackage("javax.xml.datatype"),I$=[[0,['javax.xml.datatype.DatatypeConstants','.Field'],'javax.xml.namespace.QName']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DatatypeConstants", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Field',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['YEARS','javax.xml.datatype.DatatypeConstants.Field','+MONTHS','+DAYS','+HOURS','+MINUTES','+SECONDS','DATETIME','javax.xml.namespace.QName','+TIME','+DATE','+GYEARMONTH','+GMONTHDAY','+GYEAR','+GMONTH','+GDAY','+DURATION','+DURATION_DAYTIME','+DURATION_YEARMONTH']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.YEARS=Clazz.new_($I$(1,1).c$$S$I,["YEARS", 0]);
C$.MONTHS=Clazz.new_($I$(1,1).c$$S$I,["MONTHS", 1]);
C$.DAYS=Clazz.new_($I$(1,1).c$$S$I,["DAYS", 2]);
C$.HOURS=Clazz.new_($I$(1,1).c$$S$I,["HOURS", 3]);
C$.MINUTES=Clazz.new_($I$(1,1).c$$S$I,["MINUTES", 4]);
C$.SECONDS=Clazz.new_($I$(1,1).c$$S$I,["SECONDS", 5]);
C$.DATETIME=Clazz.new_($I$(2,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "dateTime"]);
C$.TIME=Clazz.new_($I$(2,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "time"]);
C$.DATE=Clazz.new_($I$(2,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "date"]);
C$.GYEARMONTH=Clazz.new_($I$(2,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "gYearMonth"]);
C$.GMONTHDAY=Clazz.new_($I$(2,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "gMonthDay"]);
C$.GYEAR=Clazz.new_($I$(2,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "gYear"]);
C$.GMONTH=Clazz.new_($I$(2,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "gMonth"]);
C$.GDAY=Clazz.new_($I$(2,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "gDay"]);
C$.DURATION=Clazz.new_($I$(2,1).c$$S$S,["http://www.w3.org/2001/XMLSchema", "duration"]);
C$.DURATION_DAYTIME=Clazz.new_($I$(2,1).c$$S$S,["http://www.w3.org/2003/11/xpath-datatypes", "dayTimeDuration"]);
C$.DURATION_YEARMONTH=Clazz.new_($I$(2,1).c$$S$S,["http://www.w3.org/2003/11/xpath-datatypes", "yearMonthDuration"]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.DatatypeConstants, "Field", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['id'],'S',['str']]]

Clazz.newMeth(C$, 'c$$S$I',  function (str, id) {
;C$.$init$.apply(this);
this.str=str;
this.id=id;
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
return this.str;
});

Clazz.newMeth(C$, 'getId$',  function () {
return this.id;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:34 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
