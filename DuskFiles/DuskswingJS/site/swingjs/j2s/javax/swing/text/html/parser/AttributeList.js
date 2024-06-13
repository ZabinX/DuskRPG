(function(){var P$=Clazz.newPackage("javax.swing.text.html.parser"),I$=[[0,'java.util.Hashtable']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AttributeList", null, null, ['javax.swing.text.html.parser.DTDConstants', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['type','modifier'],'S',['name','value'],'O',['values','java.util.Vector','next','javax.swing.text.html.parser.AttributeList']]
,['O',['attributeTypes','java.util.Hashtable']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (name) {
;C$.$init$.apply(this);
this.name=name;
}, 1);

Clazz.newMeth(C$, 'c$$S$I$I$S$java_util_Vector$javax_swing_text_html_parser_AttributeList',  function (name, type, modifier, value, values, next) {
;C$.$init$.apply(this);
this.name=name;
this.type=type;
this.modifier=modifier;
this.value=value;
this.values=values;
this.next=next;
}, 1);

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'getType$',  function () {
return this.type;
});

Clazz.newMeth(C$, 'getModifier$',  function () {
return this.modifier;
});

Clazz.newMeth(C$, 'getValues$',  function () {
return (this.values != null ) ? this.values.elements$() : null;
});

Clazz.newMeth(C$, 'getValue$',  function () {
return this.value;
});

Clazz.newMeth(C$, 'getNext$',  function () {
return this.next;
});

Clazz.newMeth(C$, 'toString',  function () {
return this.name;
});

Clazz.newMeth(C$, 'defineAttributeType$S$I',  function (nm, val) {
var num=Integer.valueOf$I(val);
C$.attributeTypes.put$O$O(nm, num);
C$.attributeTypes.put$O$O(num, nm);
}, 1);

Clazz.newMeth(C$, 'name2type$S',  function (nm) {
var i=C$.attributeTypes.get$O(nm);
return (i == null ) ? 1 : i.intValue$();
}, 1);

Clazz.newMeth(C$, 'type2name$I',  function (tp) {
return C$.attributeTypes.get$O(Integer.valueOf$I(tp));
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.attributeTypes=Clazz.new_($I$(1,1));
{
C$.defineAttributeType$S$I("CDATA", 1);
C$.defineAttributeType$S$I("ENTITY", 2);
C$.defineAttributeType$S$I("ENTITIES", 3);
C$.defineAttributeType$S$I("ID", 4);
C$.defineAttributeType$S$I("IDREF", 5);
C$.defineAttributeType$S$I("IDREFS", 6);
C$.defineAttributeType$S$I("NAME", 7);
C$.defineAttributeType$S$I("NAMES", 8);
C$.defineAttributeType$S$I("NMTOKEN", 9);
C$.defineAttributeType$S$I("NMTOKENS", 10);
C$.defineAttributeType$S$I("NOTATION", 11);
C$.defineAttributeType$S$I("NUMBER", 12);
C$.defineAttributeType$S$I("NUMBERS", 13);
C$.defineAttributeType$S$I("NUTOKEN", 14);
C$.defineAttributeType$S$I("NUTOKENS", 15);
C$.attributeTypes.put$O$O("fixed", Integer.valueOf$I(1));
C$.attributeTypes.put$O$O("required", Integer.valueOf$I(2));
C$.attributeTypes.put$O$O("current", Integer.valueOf$I(3));
C$.attributeTypes.put$O$O("conref", Integer.valueOf$I(4));
C$.attributeTypes.put$O$O("implied", Integer.valueOf$I(5));
};
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:30 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
