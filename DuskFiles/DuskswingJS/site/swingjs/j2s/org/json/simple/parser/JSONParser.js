(function(){var P$=Clazz.newPackage("org.json.simple.parser"),p$1={},I$=[[0,'org.json.simple.parser.Yylex','java.io.StringReader','java.util.LinkedList','org.json.simple.parser.Yytoken','org.json.simple.JSONObject','org.json.simple.JSONArray']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSONParser");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.lexer=Clazz.new_($I$(1,1).c$$java_io_Reader,[null]);
this.token=null;
this.status=0;
},1);

C$.$fields$=[['I',['status'],'O',['handlerStatusStack','java.util.LinkedList','lexer','org.json.simple.parser.Yylex','token','org.json.simple.parser.Yytoken']]]

Clazz.newMeth(C$, 'peekStatus$java_util_LinkedList',  function (statusStack) {
if (statusStack.size$() == 0) return -1;
var status=statusStack.getFirst$();
return status.intValue$();
}, p$1);

Clazz.newMeth(C$, 'reset$',  function () {
this.token=null;
this.status=0;
this.handlerStatusStack=null;
});

Clazz.newMeth(C$, 'reset$java_io_Reader',  function ($in) {
this.lexer.yyreset$java_io_Reader($in);
this.reset$();
});

Clazz.newMeth(C$, 'getPosition$',  function () {
return this.lexer.getPosition$();
});

Clazz.newMeth(C$, 'parse$S',  function (s) {
return this.parse$S$org_json_simple_parser_ContainerFactory(s, null);
});

Clazz.newMeth(C$, 'parse$S$org_json_simple_parser_ContainerFactory',  function (s, containerFactory) {
var $in=Clazz.new_($I$(2,1).c$$S,[s]);
try {
return this.parse$java_io_Reader$org_json_simple_parser_ContainerFactory($in, containerFactory);
} catch (ie) {
if (Clazz.exceptionOf(ie,"java.io.IOException")){
throw Clazz.new_(Clazz.load('org.json.simple.parser.ParseException').c$$I$I$O,[-1, 2, ie]);
} else {
throw ie;
}
}
});

Clazz.newMeth(C$, 'parse$java_io_Reader',  function ($in) {
return this.parse$java_io_Reader$org_json_simple_parser_ContainerFactory($in, null);
});

Clazz.newMeth(C$, 'parse$java_io_Reader$org_json_simple_parser_ContainerFactory',  function ($in, containerFactory) {
this.reset$java_io_Reader($in);
var statusStack=Clazz.new_($I$(3,1));
var valueStack=Clazz.new_($I$(3,1));
try {
do {
p$1.nextToken.apply(this, []);
switch (this.status) {
case 0:
switch (this.token.type) {
case 0:
this.status=1;
statusStack.addFirst$O( new Integer(this.status));
valueStack.addFirst$O(this.token.value);
break;
case 1:
this.status=2;
statusStack.addFirst$O( new Integer(this.status));
valueStack.addFirst$O(p$1.createObjectContainer$org_json_simple_parser_ContainerFactory.apply(this, [containerFactory]));
break;
case 3:
this.status=3;
statusStack.addFirst$O( new Integer(this.status));
valueStack.addFirst$O(p$1.createArrayContainer$org_json_simple_parser_ContainerFactory.apply(this, [containerFactory]));
break;
default:
this.status=-1;
}
break;
case 1:
if (this.token.type == -1) return valueStack.removeFirst$();
 else throw Clazz.new_(Clazz.load('org.json.simple.parser.ParseException').c$$I$I$O,[this.getPosition$(), 1, this.token]);
case 2:
switch (this.token.type) {
case 5:
break;
case 0:
if (Clazz.instanceOf(this.token.value, "java.lang.String")) {
var key=this.token.value;
valueStack.addFirst$O(key);
this.status=4;
statusStack.addFirst$O( new Integer(this.status));
} else {
this.status=-1;
}break;
case 2:
if (valueStack.size$() > 1) {
statusStack.removeFirst$();
valueStack.removeFirst$();
this.status=p$1.peekStatus$java_util_LinkedList.apply(this, [statusStack]);
} else {
this.status=1;
}break;
default:
this.status=-1;
break;
}
break;
case 4:
switch (this.token.type) {
case 6:
break;
case 0:
statusStack.removeFirst$();
var key=valueStack.removeFirst$();
var parent=valueStack.getFirst$();
parent.put$O$O(key, this.token.value);
this.status=p$1.peekStatus$java_util_LinkedList.apply(this, [statusStack]);
break;
case 3:
statusStack.removeFirst$();
key=valueStack.removeFirst$();
parent=valueStack.getFirst$();
var newArray=p$1.createArrayContainer$org_json_simple_parser_ContainerFactory.apply(this, [containerFactory]);
parent.put$O$O(key, newArray);
this.status=3;
statusStack.addFirst$O( new Integer(this.status));
valueStack.addFirst$O(newArray);
break;
case 1:
statusStack.removeFirst$();
key=valueStack.removeFirst$();
parent=valueStack.getFirst$();
var newObject=p$1.createObjectContainer$org_json_simple_parser_ContainerFactory.apply(this, [containerFactory]);
parent.put$O$O(key, newObject);
this.status=2;
statusStack.addFirst$O( new Integer(this.status));
valueStack.addFirst$O(newObject);
break;
default:
this.status=-1;
}
break;
case 3:
switch (this.token.type) {
case 5:
break;
case 0:
var val=valueStack.getFirst$();
val.add$O(this.token.value);
break;
case 4:
if (valueStack.size$() > 1) {
statusStack.removeFirst$();
valueStack.removeFirst$();
this.status=p$1.peekStatus$java_util_LinkedList.apply(this, [statusStack]);
} else {
this.status=1;
}break;
case 1:
val=valueStack.getFirst$();
var newObject=p$1.createObjectContainer$org_json_simple_parser_ContainerFactory.apply(this, [containerFactory]);
val.add$O(newObject);
this.status=2;
statusStack.addFirst$O( new Integer(this.status));
valueStack.addFirst$O(newObject);
break;
case 3:
val=valueStack.getFirst$();
var newArray=p$1.createArrayContainer$org_json_simple_parser_ContainerFactory.apply(this, [containerFactory]);
val.add$O(newArray);
this.status=3;
statusStack.addFirst$O( new Integer(this.status));
valueStack.addFirst$O(newArray);
break;
default:
this.status=-1;
}
break;
case -1:
throw Clazz.new_(Clazz.load('org.json.simple.parser.ParseException').c$$I$I$O,[this.getPosition$(), 1, this.token]);
}
if (this.status == -1) {
throw Clazz.new_(Clazz.load('org.json.simple.parser.ParseException').c$$I$I$O,[this.getPosition$(), 1, this.token]);
}} while (this.token.type != -1);
} catch (ie) {
if (Clazz.exceptionOf(ie,"java.io.IOException")){
throw ie;
} else {
throw ie;
}
}
throw Clazz.new_(Clazz.load('org.json.simple.parser.ParseException').c$$I$I$O,[this.getPosition$(), 1, this.token]);
});

Clazz.newMeth(C$, 'nextToken',  function () {
this.token=this.lexer.yylex$();
if (this.token == null ) this.token=Clazz.new_($I$(4,1).c$$I$O,[-1, null]);
}, p$1);

Clazz.newMeth(C$, 'createObjectContainer$org_json_simple_parser_ContainerFactory',  function (containerFactory) {
if (containerFactory == null ) return Clazz.new_($I$(5,1));
var m=containerFactory.createObjectContainer$();
if (m == null ) return Clazz.new_($I$(5,1));
return m;
}, p$1);

Clazz.newMeth(C$, 'createArrayContainer$org_json_simple_parser_ContainerFactory',  function (containerFactory) {
if (containerFactory == null ) return Clazz.new_($I$(6,1));
var l=containerFactory.creatArrayContainer$();
if (l == null ) return Clazz.new_($I$(6,1));
return l;
}, p$1);

Clazz.newMeth(C$, 'parse$S$org_json_simple_parser_ContentHandler',  function (s, contentHandler) {
this.parse$S$org_json_simple_parser_ContentHandler$Z(s, contentHandler, false);
});

Clazz.newMeth(C$, 'parse$S$org_json_simple_parser_ContentHandler$Z',  function (s, contentHandler, isResume) {
var $in=Clazz.new_($I$(2,1).c$$S,[s]);
try {
this.parse$java_io_Reader$org_json_simple_parser_ContentHandler$Z($in, contentHandler, isResume);
} catch (ie) {
if (Clazz.exceptionOf(ie,"java.io.IOException")){
throw Clazz.new_(Clazz.load('org.json.simple.parser.ParseException').c$$I$I$O,[-1, 2, ie]);
} else {
throw ie;
}
}
});

Clazz.newMeth(C$, 'parse$java_io_Reader$org_json_simple_parser_ContentHandler',  function ($in, contentHandler) {
this.parse$java_io_Reader$org_json_simple_parser_ContentHandler$Z($in, contentHandler, false);
});

Clazz.newMeth(C$, 'parse$java_io_Reader$org_json_simple_parser_ContentHandler$Z',  function ($in, contentHandler, isResume) {
if (!isResume) {
this.reset$java_io_Reader($in);
this.handlerStatusStack=Clazz.new_($I$(3,1));
} else {
if (this.handlerStatusStack == null ) {
isResume=false;
this.reset$java_io_Reader($in);
this.handlerStatusStack=Clazz.new_($I$(3,1));
}}var statusStack=this.handlerStatusStack;
try {
do {
switch (this.status) {
case 0:
contentHandler.startJSON$();
p$1.nextToken.apply(this, []);
switch (this.token.type) {
case 0:
this.status=1;
statusStack.addFirst$O( new Integer(this.status));
if (!contentHandler.primitive$O(this.token.value)) return;
break;
case 1:
this.status=2;
statusStack.addFirst$O( new Integer(this.status));
if (!contentHandler.startObject$()) return;
break;
case 3:
this.status=3;
statusStack.addFirst$O( new Integer(this.status));
if (!contentHandler.startArray$()) return;
break;
default:
this.status=-1;
}
break;
case 1:
p$1.nextToken.apply(this, []);
if (this.token.type == -1) {
contentHandler.endJSON$();
this.status=6;
return;
} else {
this.status=-1;
throw Clazz.new_(Clazz.load('org.json.simple.parser.ParseException').c$$I$I$O,[this.getPosition$(), 1, this.token]);
}case 2:
p$1.nextToken.apply(this, []);
switch (this.token.type) {
case 5:
break;
case 0:
if (Clazz.instanceOf(this.token.value, "java.lang.String")) {
var key=this.token.value;
this.status=4;
statusStack.addFirst$O( new Integer(this.status));
if (!contentHandler.startObjectEntry$S(key)) return;
} else {
this.status=-1;
}break;
case 2:
if (statusStack.size$() > 1) {
statusStack.removeFirst$();
this.status=p$1.peekStatus$java_util_LinkedList.apply(this, [statusStack]);
} else {
this.status=1;
}if (!contentHandler.endObject$()) return;
break;
default:
this.status=-1;
break;
}
break;
case 4:
p$1.nextToken.apply(this, []);
switch (this.token.type) {
case 6:
break;
case 0:
statusStack.removeFirst$();
this.status=p$1.peekStatus$java_util_LinkedList.apply(this, [statusStack]);
if (!contentHandler.primitive$O(this.token.value)) return;
if (!contentHandler.endObjectEntry$()) return;
break;
case 3:
statusStack.removeFirst$();
statusStack.addFirst$O( new Integer(5));
this.status=3;
statusStack.addFirst$O( new Integer(this.status));
if (!contentHandler.startArray$()) return;
break;
case 1:
statusStack.removeFirst$();
statusStack.addFirst$O( new Integer(5));
this.status=2;
statusStack.addFirst$O( new Integer(this.status));
if (!contentHandler.startObject$()) return;
break;
default:
this.status=-1;
}
break;
case 5:
statusStack.removeFirst$();
this.status=p$1.peekStatus$java_util_LinkedList.apply(this, [statusStack]);
if (!contentHandler.endObjectEntry$()) return;
break;
case 3:
p$1.nextToken.apply(this, []);
switch (this.token.type) {
case 5:
break;
case 0:
if (!contentHandler.primitive$O(this.token.value)) return;
break;
case 4:
if (statusStack.size$() > 1) {
statusStack.removeFirst$();
this.status=p$1.peekStatus$java_util_LinkedList.apply(this, [statusStack]);
} else {
this.status=1;
}if (!contentHandler.endArray$()) return;
break;
case 1:
this.status=2;
statusStack.addFirst$O( new Integer(this.status));
if (!contentHandler.startObject$()) return;
break;
case 3:
this.status=3;
statusStack.addFirst$O( new Integer(this.status));
if (!contentHandler.startArray$()) return;
break;
default:
this.status=-1;
}
break;
case 6:
return;
case -1:
throw Clazz.new_(Clazz.load('org.json.simple.parser.ParseException').c$$I$I$O,[this.getPosition$(), 1, this.token]);
}
if (this.status == -1) {
throw Clazz.new_(Clazz.load('org.json.simple.parser.ParseException').c$$I$I$O,[this.getPosition$(), 1, this.token]);
}} while (this.token.type != -1);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var ie = e$$;
{
this.status=-1;
throw ie;
}
} else if (Clazz.exceptionOf(e$$,"org.json.simple.parser.ParseException")){
var pe = e$$;
{
this.status=-1;
throw pe;
}
} else if (Clazz.exceptionOf(e$$,"RuntimeException")){
var re = e$$;
{
this.status=-1;
throw re;
}
} else if (Clazz.exceptionOf(e$$,"Error")){
var e = e$$;
{
this.status=-1;
throw e;
}
} else {
throw e$$;
}
}
this.status=-1;
throw Clazz.new_(Clazz.load('org.json.simple.parser.ParseException').c$$I$I$O,[this.getPosition$(), 1, this.token]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:40 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
