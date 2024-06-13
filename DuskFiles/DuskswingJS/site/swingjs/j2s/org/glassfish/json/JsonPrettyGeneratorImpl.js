(function(){var P$=Clazz.newPackage("org.glassfish.json"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "JsonPrettyGeneratorImpl", null, 'org.glassfish.json.JsonGeneratorImpl');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['indentLevel']]]

Clazz.newMeth(C$, 'c$$java_io_Writer',  function (writer) {
;C$.superclazz.c$$java_io_Writer.apply(this,[writer]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_OutputStream',  function (out) {
;C$.superclazz.c$$java_io_OutputStream.apply(this,[out]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_OutputStream$java_nio_charset_Charset',  function (out, encoding) {
;C$.superclazz.c$$java_io_OutputStream$java_nio_charset_Charset.apply(this,[out, encoding]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'writeStartObject$',  function () {
C$.superclazz.prototype.writeStartObject$.apply(this, []);
++this.indentLevel;
return this;
});

Clazz.newMeth(C$, 'writeStartObject$S',  function (name) {
C$.superclazz.prototype.writeStartObject$S.apply(this, [name]);
++this.indentLevel;
return this;
});

Clazz.newMeth(C$, 'writeStartArray$',  function () {
C$.superclazz.prototype.writeStartArray$.apply(this, []);
++this.indentLevel;
return this;
});

Clazz.newMeth(C$, 'writeStartArray$S',  function (name) {
C$.superclazz.prototype.writeStartArray$S.apply(this, [name]);
++this.indentLevel;
return this;
});

Clazz.newMeth(C$, 'writeEnd$',  function () {
p$1.writeNewLine.apply(this, []);
--this.indentLevel;
p$1.writeIndent.apply(this, []);
C$.superclazz.prototype.writeEnd$.apply(this, []);
return this;
});

Clazz.newMeth(C$, 'writeIndent',  function () {
for (var i=0; i < this.indentLevel; i++) {
try {
this.writer.write$S("    ");
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.json.JsonException').c$$S$Throwable,["I/O error while writing indentation", e]);
} else {
throw e;
}
}
}
}, p$1);

Clazz.newMeth(C$, 'writeComma$',  function () {
C$.superclazz.prototype.writeComma$.apply(this, []);
this.writer.write$S("\n");
p$1.writeIndent.apply(this, []);
});

Clazz.newMeth(C$, 'writeNewLine',  function () {
try {
this.writer.write$S("\n");
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.json.JsonException').c$$S$Throwable,["I/O error while writing newline", e]);
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:39 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
