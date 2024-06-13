(function(){var P$=Clazz.newPackage("javax.swing.text.html.parser"),I$=[[0,'javax.swing.text.html.parser.Element']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ContentModel", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['type'],'O',['content','java.lang.Object','next','javax.swing.text.html.parser.ContentModel','valSet','boolean[]','+val']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_text_html_parser_Element',  function (content) {
C$.c$$I$O$javax_swing_text_html_parser_ContentModel.apply(this, [0, content, null]);
}, 1);

Clazz.newMeth(C$, 'c$$I$javax_swing_text_html_parser_ContentModel',  function (type, content) {
C$.c$$I$O$javax_swing_text_html_parser_ContentModel.apply(this, [type, content, null]);
}, 1);

Clazz.newMeth(C$, 'c$$I$O$javax_swing_text_html_parser_ContentModel',  function (type, content, next) {
;C$.$init$.apply(this);
this.type=type;
this.content=content;
this.next=next;
}, 1);

Clazz.newMeth(C$, 'empty$',  function () {
switch (this.type) {
case 42:
case 63:
return true;
case 43:
case 124:
for (var m=this.content; m != null ; m=m.next) {
if (m.empty$()) {
return true;
}}
return false;
case 44:
case 38:
for (var m=this.content; m != null ; m=m.next) {
if (!m.empty$()) {
return false;
}}
return true;
default:
return false;
}
});

Clazz.newMeth(C$, 'getElements$java_util_Vector',  function (elemVec) {
switch (this.type) {
case 42:
case 63:
case 43:
(this.content).getElements$java_util_Vector(elemVec);
break;
case 44:
case 124:
case 38:
for (var m=this.content; m != null ; m=m.next) {
m.getElements$java_util_Vector(elemVec);
}
break;
default:
elemVec.addElement$O(this.content);
}
});

Clazz.newMeth(C$, 'first$O',  function (token) {
switch (this.type) {
case 42:
case 63:
case 43:
return (this.content).first$O(token);
case 44:
for (var m=this.content; m != null ; m=m.next) {
if (m.first$O(token)) {
return true;
}if (!m.empty$()) {
return false;
}}
return false;
case 124:
case 38:
{
var e=token;
if (this.valSet == null ) {
this.valSet=Clazz.array(Boolean.TYPE, [$I$(1).getMaxIndex$() + 1]);
this.val=Clazz.array(Boolean.TYPE, [this.valSet.length]);
}if (this.valSet[e.index]) {
return this.val[e.index];
}for (var m=this.content; m != null ; m=m.next) {
if (m.first$O(token)) {
this.val[e.index]=true;
break;
}}
this.valSet[e.index]=true;
return this.val[e.index];
}default:
return (this.content === token );
}
});

Clazz.newMeth(C$, 'first$',  function () {
switch (this.type) {
case 38:
case 124:
case 42:
case 63:
return null;
case 43:
case 44:
return (this.content).first$();
default:
return this.content;
}
});

Clazz.newMeth(C$, 'toString',  function () {
switch (this.type) {
case 42:
return this.content + "*";
case 63:
return this.content + "?";
case 43:
return this.content + "+";
case 44:
case 124:
case 38:
var data=Clazz.array(Character.TYPE, -1, [" ", String.fromCharCode(this.type), " "]);
var str="";
for (var m=this.content; m != null ; m=m.next) {
str=str + m;
if (m.next != null ) {
str+= String.instantialize(data);
}}
return "(" + str + ")" ;
default:
return this.content.toString();
}
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:30 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
