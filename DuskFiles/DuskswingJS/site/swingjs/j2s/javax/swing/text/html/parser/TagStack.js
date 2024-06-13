(function(){var P$=Clazz.newPackage("javax.swing.text.html.parser"),I$=[[0,'javax.swing.text.html.parser.ContentModelState']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TagStack", null, null, 'javax.swing.text.html.parser.DTDConstants');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['net','pre'],'O',['tag','javax.swing.text.html.parser.TagElement','elem','javax.swing.text.html.parser.Element','state','javax.swing.text.html.parser.ContentModelState','next','javax.swing.text.html.parser.TagStack','inclusions','java.util.BitSet','+exclusions']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_html_parser_TagElement$javax_swing_text_html_parser_TagStack',  function (tag, next) {
;C$.$init$.apply(this);
this.tag=tag;
this.elem=tag.getElement$();
this.next=next;
var elem=tag.getElement$();
if (elem.getContent$() != null ) {
this.state=Clazz.new_([elem.getContent$()],$I$(1,1).c$$javax_swing_text_html_parser_ContentModel);
}if (next != null ) {
this.inclusions=next.inclusions;
this.exclusions=next.exclusions;
this.pre=next.pre;
}if (tag.isPreformatted$()) {
this.pre=true;
}if (elem.inclusions != null ) {
if (this.inclusions != null ) {
this.inclusions=this.inclusions.clone$();
this.inclusions.or$java_util_BitSet(elem.inclusions);
} else {
this.inclusions=elem.inclusions;
}}if (elem.exclusions != null ) {
if (this.exclusions != null ) {
this.exclusions=this.exclusions.clone$();
this.exclusions.or$java_util_BitSet(elem.exclusions);
} else {
this.exclusions=elem.exclusions;
}}}, 1);

Clazz.newMeth(C$, 'first$',  function () {
return (this.state != null ) ? this.state.first$() : null;
});

Clazz.newMeth(C$, 'contentModel$',  function () {
if (this.state == null ) {
return null;
} else {
return this.state.getModel$();
}});

Clazz.newMeth(C$, 'excluded$I',  function (elemIndex) {
return (this.exclusions != null ) && this.exclusions.get$I(this.elem.getIndex$()) ;
});

Clazz.newMeth(C$, 'advance$javax_swing_text_html_parser_Element',  function (elem) {
if ((this.exclusions != null ) && this.exclusions.get$I(elem.getIndex$()) ) {
return false;
}if (this.state != null ) {
var newState=this.state.advance$O(elem);
if (newState != null ) {
this.state=newState;
return true;
}} else if (this.elem.getType$() == 19) {
return true;
}return (this.inclusions != null ) && this.inclusions.get$I(elem.getIndex$()) ;
});

Clazz.newMeth(C$, 'terminate$',  function () {
return (this.state == null ) || this.state.terminate$() ;
});

Clazz.newMeth(C$, 'toString',  function () {
return (this.next == null ) ? "<" + this.tag.getElement$().getName$() + ">"  : this.next + " <" + this.tag.getElement$().getName$() + ">" ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:31 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
