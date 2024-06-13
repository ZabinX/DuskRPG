(function(){var P$=Clazz.newPackage("javax.swing.text.html.parser"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ContentModelState");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['J',['value'],'O',['model','javax.swing.text.html.parser.ContentModel','next','javax.swing.text.html.parser.ContentModelState']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_html_parser_ContentModel',  function (model) {
C$.c$$O$javax_swing_text_html_parser_ContentModelState$J.apply(this, [model, null, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$O$javax_swing_text_html_parser_ContentModelState',  function (content, next) {
C$.c$$O$javax_swing_text_html_parser_ContentModelState$J.apply(this, [content, next, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$O$javax_swing_text_html_parser_ContentModelState$J',  function (content, next, value) {
;C$.$init$.apply(this);
this.model=content;
this.next=next;
this.value=value;
}, 1);

Clazz.newMeth(C$, 'getModel$',  function () {
var m=this.model;
for (var i=0; Long.$lt(i,this.value ); i++) {
if (m.next != null ) {
m=m.next;
} else {
return null;
}}
return m;
});

Clazz.newMeth(C$, 'terminate$',  function () {
switch (this.model.type) {
case 43:
if ((Long.$eq(this.value,0 )) && !(this.model).empty$() ) {
return false;
}case 42:
case 63:
return (this.next == null ) || this.next.terminate$() ;
case 124:
for (var m=this.model.content; m != null ; m=m.next) {
if (m.empty$()) {
return (this.next == null ) || this.next.terminate$() ;
}}
return false;
case 38:
{
var m=this.model.content;
for (var i=0; m != null ; i++, m=m.next) {
if (Long.$eq((Long.$and(this.value,(Long.$sl(1,i)))),0 )) {
if (!m.empty$()) {
return false;
}}}
return (this.next == null ) || this.next.terminate$() ;
}case 44:
{
var m=this.model.content;
for (var i=0; Long.$lt(i,this.value ); i++, m=m.next) ;
for (; (m != null ) && m.empty$() ; m=m.next) ;
if (m != null ) {
return false;
}return (this.next == null ) || this.next.terminate$() ;
}default:
return false;
}
});

Clazz.newMeth(C$, 'first$',  function () {
switch (this.model.type) {
case 42:
case 63:
case 124:
case 38:
return null;
case 43:
return this.model.first$();
case 44:
{
var m=this.model.content;
for (var i=0; Long.$lt(i,this.value ); i++, m=m.next) ;
return m.first$();
}default:
return this.model.first$();
}
});

Clazz.newMeth(C$, 'advance$O',  function (token) {
switch (this.model.type) {
case 43:
if (this.model.first$O(token)) {
return Clazz.new_(C$.c$$O$javax_swing_text_html_parser_ContentModelState,[this.model.content, Clazz.new_(C$.c$$O$javax_swing_text_html_parser_ContentModelState$J,[this.model, this.next, Long.$add(this.value,1)])]).advance$O(token);
}if (Long.$ne(this.value,0 )) {
if (this.next != null ) {
return this.next.advance$O(token);
} else {
return null;
}}break;
case 42:
if (this.model.first$O(token)) {
return Clazz.new_(C$.c$$O$javax_swing_text_html_parser_ContentModelState,[this.model.content, this]).advance$O(token);
}if (this.next != null ) {
return this.next.advance$O(token);
} else {
return null;
}case 63:
if (this.model.first$O(token)) {
return Clazz.new_(C$.c$$O$javax_swing_text_html_parser_ContentModelState,[this.model.content, this.next]).advance$O(token);
}if (this.next != null ) {
return this.next.advance$O(token);
} else {
return null;
}case 124:
for (var m=this.model.content; m != null ; m=m.next) {
if (m.first$O(token)) {
return Clazz.new_(C$.c$$O$javax_swing_text_html_parser_ContentModelState,[m, this.next]).advance$O(token);
}}
break;
case 44:
{
var m=this.model.content;
for (var i=0; Long.$lt(i,this.value ); i++, m=m.next) ;
if (m.first$O(token) || m.empty$() ) {
if (m.next == null ) {
return Clazz.new_(C$.c$$O$javax_swing_text_html_parser_ContentModelState,[m, this.next]).advance$O(token);
} else {
return Clazz.new_(C$.c$$O$javax_swing_text_html_parser_ContentModelState,[m, Clazz.new_(C$.c$$O$javax_swing_text_html_parser_ContentModelState$J,[this.model, this.next, Long.$add(this.value,1)])]).advance$O(token);
}}break;
}case 38:
{
var m=this.model.content;
var complete=true;
for (var i=0; m != null ; i++, m=m.next) {
if (Long.$eq((Long.$and(this.value,(Long.$sl(1,i)))),0 )) {
if (m.first$O(token)) {
return Clazz.new_(C$.c$$O$javax_swing_text_html_parser_ContentModelState,[m, Clazz.new_(C$.c$$O$javax_swing_text_html_parser_ContentModelState$J,[this.model, this.next, Long.$or(this.value,(Long.$sl(1,i)))])]).advance$O(token);
}if (!m.empty$()) {
complete=false;
}}}
if (complete) {
if (this.next != null ) {
return this.next.advance$O(token);
} else {
return null;
}}break;
}default:
if (this.model.content === token ) {
if (this.next == null  && (Clazz.instanceOf(token, "javax.swing.text.html.parser.Element"))  && (token).content != null  ) {
return Clazz.new_(C$.c$$javax_swing_text_html_parser_ContentModel,[(token).content]);
}return this.next;
}}
return null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:30 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
