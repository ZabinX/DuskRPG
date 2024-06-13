(function(){var P$=Clazz.newPackage("javax.json"),I$=[[0,['javax.json.JsonValue','.ValueType']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "JsonValue", function(){
});
C$.$classes$=[['ValueType',25]];

C$.$fields$=[[]
,['O',['NULL','javax.json.JsonValue','+TRUE','+FALSE']]]

C$.$static$=function(){C$.$static$=0;
C$.NULL=((P$.JsonValue$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "JsonValue$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.json.JsonValue', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getValueType$',  function () {
return $I$(1).NULL;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (Clazz.instanceOf(obj, "javax.json.JsonValue")) {
return this.getValueType$().equals$O((obj).getValueType$());
}return false;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return $I$(1).NULL.hashCode$();
});

Clazz.newMeth(C$, 'toString',  function () {
return "null";
});
})()
), Clazz.new_(P$.JsonValue$1.$init$,[this, null]));
C$.TRUE=((P$.JsonValue$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "JsonValue$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.json.JsonValue', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'getValueType$',  function () {
return $I$(1).TRUE;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (Clazz.instanceOf(obj, "javax.json.JsonValue")) {
return this.getValueType$().equals$O((obj).getValueType$());
}return false;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return $I$(1).TRUE.hashCode$();
});

Clazz.newMeth(C$, 'toString',  function () {
return "true";
});
})()
), Clazz.new_(P$.JsonValue$2.$init$,[this, null]));
C$.FALSE=((P$.JsonValue$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "JsonValue$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.json.JsonValue', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'getValueType$',  function () {
return $I$(1).FALSE;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (Clazz.instanceOf(obj, "javax.json.JsonValue")) {
return this.getValueType$().equals$O((obj).getValueType$());
}return false;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return $I$(1).FALSE.hashCode$();
});

Clazz.newMeth(C$, 'toString',  function () {
return "false";
});
})()
), Clazz.new_(P$.JsonValue$3.$init$,[this, null]));
};
;
(function(){/*e*/var C$=Clazz.newClass(P$.JsonValue, "ValueType", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "ARRAY", 0, []);
Clazz.newEnumConst($vals, C$.c$, "OBJECT", 1, []);
Clazz.newEnumConst($vals, C$.c$, "STRING", 2, []);
Clazz.newEnumConst($vals, C$.c$, "NUMBER", 3, []);
Clazz.newEnumConst($vals, C$.c$, "TRUE", 4, []);
Clazz.newEnumConst($vals, C$.c$, "FALSE", 5, []);
Clazz.newEnumConst($vals, C$.c$, "NULL", 6, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:49 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
