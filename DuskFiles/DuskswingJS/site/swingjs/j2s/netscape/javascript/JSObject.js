(function(){var P$=Clazz.newPackage("netscape.javascript"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "JSObject");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['obj','java.lang.Object']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'call$S$OA',  function (jsFuncName, params) {
var ret=null;
try {
if (params == null ) params=Clazz.array(java.lang.Object, [0]);
for (var i=params.length; --i >= 0; ) {
params[i]=p$1.unfixObject$O.apply(this, [params[i]]);
}

ret = this.obj[jsFuncName].apply(this.obj, params);
} catch (t) {
throw Clazz.new_(Clazz.load('netscape.javascript.JSException').c$$S,["" + t + " evaluating " + jsFuncName ]);
}
return p$1.fixObject$O.apply(this, [ret]);
});

Clazz.newMeth(C$, 'unfixObject$O',  function (o) {
var ret=o;
if (o == null ) {
return null;
} else if (Clazz.instanceOf(o, "java.lang.Number")) {

return o.doubleValue$();
} else if (Clazz.instanceOf(o, "java.lang.Boolean")) {

return o.BooleanValue$();
} else if (Clazz.instanceOf(o, "netscape.javascript.JSObject")) {
return (o).obj;
}return ret;
}, p$1);

Clazz.newMeth(C$, 'fixObject$O',  function (ret) {
if (ret == null ) return null;
var type=null;

type = typeof ret;
switch (type) {
case "number":
return Double.valueOf$S("" + ret);
case "boolean":
return Boolean.valueOf$S("" + ret);
default:
var jsobject=Clazz.new_(C$);
jsobject.obj=ret;
return jsobject;
}
}, p$1);

Clazz.newMeth(C$, 'eval$S',  function (params) {
var ret=null;
try {

ret = this.obj.eval(params);
} catch (t) {
throw Clazz.new_(Clazz.load('netscape.javascript.JSException').c$$S,["" + t + " evaluating " + params ]);
}
return p$1.fixObject$O.apply(this, [ret]);
});

Clazz.newMeth(C$, 'getMember$S',  function (name) {
var ret=null;
try {

ret = this.obj[name];
} catch (t) {
throw Clazz.new_(Clazz.load('netscape.javascript.JSException').c$$S,["" + t + " getMember " + name ]);
}
return p$1.fixObject$O.apply(this, [ret]);
});

Clazz.newMeth(C$, 'setMember$S$O',  function (name, value) {
try {

this.obj[name] = value;
} catch (t) {
throw Clazz.new_(Clazz.load('netscape.javascript.JSException').c$$S,["" + t + " setMember " + name + " " + value ]);
}
});

Clazz.newMeth(C$, 'removeMember$S',  function (name) {
try {

delete this.obj[name];
} catch (t) {
throw Clazz.new_(Clazz.load('netscape.javascript.JSException').c$$S,["" + t + " removeMember " + name ]);
}
});

Clazz.newMeth(C$, 'getSlot$I',  function (index) {
var ret=null;
try {

return this.obj[index];
return p$1.fixObject$O.apply(this, [ret]);
} catch (t) {
throw Clazz.new_(Clazz.load('netscape.javascript.JSException').c$$S,["" + t + " getSlot" ]);
}
});

Clazz.newMeth(C$, 'setSlot$I$O',  function (index, val) {
try {

this.obj[index] = val;
} catch (t) {
throw Clazz.new_(Clazz.load('netscape.javascript.JSException').c$$S,["" + t + " setSlot" ]);
}
});

Clazz.newMeth(C$, 'getWindow$java_applet_Applet',  function (applet) {
var jsobject=Clazz.new_(C$);
var context=applet.getAppletContext$();
jsobject.obj=context.html5Applet._window ||null;
return jsobject;
}, 1);

Clazz.newMeth(C$, 'getWindow$java_applet_JSApplet',  function (applet) {
var jsobject=Clazz.new_(C$);
var context=applet.getAppletContext$();
jsobject.obj=context.html5Applet._window ||null;
return jsobject;
}, 1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:37 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
