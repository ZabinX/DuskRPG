(function(){var P$=Clazz.newPackage("javax.swing"),p$1={},I$=[[0,'javax.swing.RowFilter',['javax.swing.RowFilter','.ComparisonType'],'java.util.ArrayList',['javax.swing.RowFilter','.RegexFilter'],'java.util.regex.Pattern',['javax.swing.RowFilter','.DateFilter'],['javax.swing.RowFilter','.NumberFilter'],['javax.swing.RowFilter','.OrFilter'],['javax.swing.RowFilter','.AndFilter'],['javax.swing.RowFilter','.NotFilter']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RowFilter", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['ComparisonType',25],['Entry',1033],['GeneralFilter',1034],['RegexFilter',10],['DateFilter',10],['NumberFilter',10],['OrFilter',10],['AndFilter',10],['NotFilter',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'checkIndices$IA',  function (columns) {
for (var i=columns.length - 1; i >= 0; i--) {
if (columns[i] < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Index must be >= 0"]);
}}
}, 1);

Clazz.newMeth(C$, 'regexFilter$S$IA',  function (regex, indices) {
return Clazz.new_([$I$(5).compile$S(regex), indices],$I$(4,1).c$$java_util_regex_Pattern$IA);
}, 1);

Clazz.newMeth(C$, 'dateFilter$javax_swing_RowFilter_ComparisonType$java_util_Date$IA',  function (type, date, indices) {
return Clazz.new_([type, date.getTime$(), indices],$I$(6,1).c$$javax_swing_RowFilter_ComparisonType$J$IA);
}, 1);

Clazz.newMeth(C$, 'numberFilter$javax_swing_RowFilter_ComparisonType$Number$IA',  function (type, number, indices) {
return Clazz.new_($I$(7,1).c$$javax_swing_RowFilter_ComparisonType$Number$IA,[type, number, indices]);
}, 1);

Clazz.newMeth(C$, 'orFilter$Iterable',  function (filters) {
return Clazz.new_($I$(8,1).c$$Iterable,[filters]);
}, 1);

Clazz.newMeth(C$, 'andFilter$Iterable',  function (filters) {
return Clazz.new_($I$(9,1).c$$Iterable,[filters]);
}, 1);

Clazz.newMeth(C$, 'notFilter$javax_swing_RowFilter',  function (filter) {
return Clazz.new_($I$(10,1).c$$javax_swing_RowFilter,[filter]);
}, 1);
;
(function(){/*e*/var C$=Clazz.newClass(P$.RowFilter, "ComparisonType", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "BEFORE", 0, []);
Clazz.newEnumConst($vals, C$.c$, "AFTER", 1, []);
Clazz.newEnumConst($vals, C$.c$, "EQUAL", 2, []);
Clazz.newEnumConst($vals, C$.c$, "NOT_EQUAL", 3, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.RowFilter, "Entry", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getStringValue$I',  function (index) {
var value=this.getValue$I(index);
return (value == null ) ? "" : value.toString();
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.RowFilter, "GeneralFilter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.RowFilter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['columns','int[]']]]

Clazz.newMeth(C$, 'c$$IA',  function (columns) {
Clazz.super_(C$, this);
$I$(1).checkIndices$IA(columns);
this.columns=columns;
}, 1);

Clazz.newMeth(C$, 'include$javax_swing_RowFilter_Entry',  function (value) {
var count=value.getValueCount$();
if (this.columns.length > 0) {
for (var i=this.columns.length - 1; i >= 0; i--) {
var index=this.columns[i];
if (index < count) {
if (this.include$javax_swing_RowFilter_Entry$I(value, index)) {
return true;
}}}
} else {
while (--count >= 0){
if (this.include$javax_swing_RowFilter_Entry$I(value, count)) {
return true;
}}
}return false;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.RowFilter, "RegexFilter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.RowFilter','.GeneralFilter']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['matcher','java.util.regex.Matcher']]]

Clazz.newMeth(C$, 'c$$java_util_regex_Pattern$IA',  function (regex, columns) {
;C$.superclazz.c$$IA.apply(this,[columns]);C$.$init$.apply(this);
if (regex == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Pattern must be non-null"]);
}this.matcher=regex.matcher$CharSequence("");
}, 1);

Clazz.newMeth(C$, 'include$javax_swing_RowFilter_Entry$I',  function (value, index) {
this.matcher.reset$CharSequence(value.getStringValue$I(index));
return this.matcher.find$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.RowFilter, "DateFilter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.RowFilter','.GeneralFilter']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['J',['date'],'O',['type','javax.swing.RowFilter.ComparisonType']]]

Clazz.newMeth(C$, 'c$$javax_swing_RowFilter_ComparisonType$J$IA',  function (type, date, columns) {
;C$.superclazz.c$$IA.apply(this,[columns]);C$.$init$.apply(this);
if (type == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["type must be non-null"]);
}this.type=type;
this.date=date;
}, 1);

Clazz.newMeth(C$, 'include$javax_swing_RowFilter_Entry$I',  function (value, index) {
var v=value.getValue$I(index);
if (Clazz.instanceOf(v, "java.util.Date")) {
var vDate=(v).getTime$();
switch (this.type) {
case $I$(2).BEFORE:
return (Long.$lt(vDate,this.date ));
case $I$(2).AFTER:
return (Long.$gt(vDate,this.date ));
case $I$(2).EQUAL:
return (Long.$eq(vDate,this.date ));
case $I$(2).NOT_EQUAL:
return (Long.$ne(vDate,this.date ));
default:
break;
}
}return false;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.RowFilter, "NumberFilter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.RowFilter','.GeneralFilter']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isComparable'],'O',['number','Number','type','javax.swing.RowFilter.ComparisonType']]]

Clazz.newMeth(C$, 'c$$javax_swing_RowFilter_ComparisonType$Number$IA',  function (type, number, columns) {
;C$.superclazz.c$$IA.apply(this,[columns]);C$.$init$.apply(this);
if (type == null  || number == null  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["type and number must be non-null"]);
}this.type=type;
this.number=number;
this.isComparable=(Clazz.instanceOf(number, "java.lang.Comparable"));
}, 1);

Clazz.newMeth(C$, 'include$javax_swing_RowFilter_Entry$I',  function (value, index) {
var v=value.getValue$I(index);
if (Clazz.instanceOf(v, "java.lang.Number")) {
var compareResult;
var vClass=v.getClass$();
if (this.number.getClass$() === vClass  && this.isComparable ) {
compareResult=(this.number).compareTo$O(v);
} else {
compareResult=p$1.longCompare$Number.apply(this, [v]);
}switch (this.type) {
case $I$(2).BEFORE:
return (compareResult > 0);
case $I$(2).AFTER:
return (compareResult < 0);
case $I$(2).EQUAL:
return (compareResult == 0);
case $I$(2).NOT_EQUAL:
return (compareResult != 0);
default:
break;
}
}return false;
});

Clazz.newMeth(C$, 'longCompare$Number',  function (o) {
var diff=Long.$sub(this.number.longValue$(),o.longValue$());
if (Long.$lt(diff,0 )) {
return -1;
} else if (Long.$gt(diff,0 )) {
return 1;
}return 0;
}, p$1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.RowFilter, "OrFilter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.RowFilter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['filters','java.util.List']]]

Clazz.newMeth(C$, 'c$$Iterable',  function (filters) {
Clazz.super_(C$, this);
this.filters=Clazz.new_($I$(3,1));
for (var filter, $filter = filters.iterator$(); $filter.hasNext$()&&((filter=($filter.next$())),1);) {
if (filter == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Filter must be non-null"]);
}this.filters.add$O(filter);
}
}, 1);

Clazz.newMeth(C$, 'include$javax_swing_RowFilter_Entry',  function (value) {
for (var filter, $filter = this.filters.iterator$(); $filter.hasNext$()&&((filter=($filter.next$())),1);) {
if (filter.include$javax_swing_RowFilter_Entry(value)) {
return true;
}}
return false;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.RowFilter, "AndFilter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.RowFilter','.OrFilter']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$Iterable',  function (filters) {
;C$.superclazz.c$$Iterable.apply(this,[filters]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'include$javax_swing_RowFilter_Entry',  function (value) {
for (var filter, $filter = this.filters.iterator$(); $filter.hasNext$()&&((filter=($filter.next$())),1);) {
if (!filter.include$javax_swing_RowFilter_Entry(value)) {
return false;
}}
return true;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.RowFilter, "NotFilter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.RowFilter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['filter','javax.swing.RowFilter']]]

Clazz.newMeth(C$, 'c$$javax_swing_RowFilter',  function (filter) {
Clazz.super_(C$, this);
if (filter == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["filter must be non-null"]);
}this.filter=filter;
}, 1);

Clazz.newMeth(C$, 'include$javax_swing_RowFilter_Entry',  function (value) {
return !this.filter.include$javax_swing_RowFilter_Entry(value);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:01 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
