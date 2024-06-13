(function(){var P$=Clazz.newPackage("org.apache.commons.cli"),I$=[[0,'org.apache.commons.cli.PatternOptionBuilder','java.net.URL','java.io.File']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TypeHandler");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'createValue$S$O',  function (str, obj) {
return C$.createValue$S$Class(str, obj);
}, 1);

Clazz.newMeth(C$, 'createValue$S$Class',  function (str, clazz) {
if ($I$(1).STRING_VALUE === clazz ) {
return str;
} else if ($I$(1).OBJECT_VALUE === clazz ) {
return C$.createObject$S(str);
} else if ($I$(1).NUMBER_VALUE === clazz ) {
return C$.createNumber$S(str);
} else if ($I$(1).DATE_VALUE === clazz ) {
return C$.createDate$S(str);
} else if ($I$(1).CLASS_VALUE === clazz ) {
return C$.createClass$S(str);
} else if ($I$(1).FILE_VALUE === clazz ) {
return C$.createFile$S(str);
} else if ($I$(1).EXISTING_FILE_VALUE === clazz ) {
return C$.createFile$S(str);
} else if ($I$(1).FILES_VALUE === clazz ) {
return C$.createFiles$S(str);
} else if ($I$(1).URL_VALUE === clazz ) {
return C$.createURL$S(str);
} else {
return null;
}}, 1);

Clazz.newMeth(C$, 'createObject$S',  function (classname) {
var cl;
try {
cl=Clazz.forName(classname);
} catch (cnfe) {
if (Clazz.exceptionOf(cnfe,"ClassNotFoundException")){
throw Clazz.new_(Clazz.load('org.apache.commons.cli.ParseException').c$$S,["Unable to find the class: " + classname]);
} else {
throw cnfe;
}
}
try {
return cl.newInstance$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_(Clazz.load('org.apache.commons.cli.ParseException').c$$S,[e.getClass$().getName$() + "; Unable to create an instance of: " + classname ]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'createNumber$S',  function (str) {
try {
if (str.indexOf$I(".") != -1) {
return Double.valueOf$S(str);
}return Long.valueOf$S(str);
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
throw Clazz.new_(Clazz.load('org.apache.commons.cli.ParseException').c$$S,[e.getMessage$()]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'createClass$S',  function (classname) {
try {
return Clazz.forName(classname);
} catch (e) {
if (Clazz.exceptionOf(e,"ClassNotFoundException")){
throw Clazz.new_(Clazz.load('org.apache.commons.cli.ParseException').c$$S,["Unable to find the class: " + classname]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'createDate$S',  function (str) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Not yet implemented"]);
}, 1);

Clazz.newMeth(C$, 'createURL$S',  function (str) {
try {
return Clazz.new_($I$(2,1).c$$S,[str]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
throw Clazz.new_(Clazz.load('org.apache.commons.cli.ParseException').c$$S,["Unable to parse the URL: " + str]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'createFile$S',  function (str) {
return Clazz.new_($I$(3,1).c$$S,[str]);
}, 1);

Clazz.newMeth(C$, 'createFiles$S',  function (str) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Not yet implemented"]);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:38 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
