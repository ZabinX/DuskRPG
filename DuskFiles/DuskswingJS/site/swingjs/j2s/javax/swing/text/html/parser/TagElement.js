(function(){var P$=Clazz.newPackage("javax.swing.text.html.parser"),I$=[[0,'javax.swing.text.html.HTML',['javax.swing.text.html.HTML','.UnknownTag']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TagElement");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['insertedByErrorRecovery'],'O',['elem','javax.swing.text.html.parser.Element','htmlTag','javax.swing.text.html.HTML.Tag']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_html_parser_Element',  function (elem) {
C$.c$$javax_swing_text_html_parser_Element$Z.apply(this, [elem, false]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_text_html_parser_Element$Z',  function (elem, fictional) {
;C$.$init$.apply(this);
this.elem=elem;
this.htmlTag=$I$(1,"getTag$S",[elem.getName$()]);
if (this.htmlTag == null ) {
this.htmlTag=Clazz.new_([elem.getName$()],$I$(2,1).c$$S);
}this.insertedByErrorRecovery=fictional;
}, 1);

Clazz.newMeth(C$, 'breaksFlow$',  function () {
return this.htmlTag.breaksFlow$();
});

Clazz.newMeth(C$, 'isPreformatted$',  function () {
return this.htmlTag.isPreformatted$();
});

Clazz.newMeth(C$, 'getElement$',  function () {
return this.elem;
});

Clazz.newMeth(C$, 'getHTMLTag$',  function () {
return this.htmlTag;
});

Clazz.newMeth(C$, 'fictional$',  function () {
return this.insertedByErrorRecovery;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:31 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
