(function(){var P$=Clazz.newPackage("javax.swing.text.html.parser"),I$=[[0,'java.util.Hashtable','sun.awt.AppContext','javax.swing.text.html.parser.AttributeList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Element", null, null, ['javax.swing.text.html.parser.DTDConstants', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.type=19;
},1);

C$.$fields$=[['Z',['oStart','oEnd'],'I',['index','type'],'S',['name'],'O',['inclusions','java.util.BitSet','+exclusions','content','javax.swing.text.html.parser.ContentModel','atts','javax.swing.text.html.parser.AttributeList','data','java.lang.Object']]
,['O',['MAX_INDEX_KEY','java.lang.Object','contentTypes','java.util.Hashtable']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$I',  function (name, index) {
;C$.$init$.apply(this);
this.name=name;
this.index=index;
if (index > C$.getMaxIndex$()) {
$I$(2).getAppContext$().put$O$O(C$.MAX_INDEX_KEY, Integer.valueOf$I(index));
}}, 1);

Clazz.newMeth(C$, 'getMaxIndex$',  function () {
var value=$I$(2).getAppContext$().get$O(C$.MAX_INDEX_KEY);
return (value != null ) ? value.intValue$() : 0;
}, 1);

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'omitStart$',  function () {
return this.oStart;
});

Clazz.newMeth(C$, 'omitEnd$',  function () {
return this.oEnd;
});

Clazz.newMeth(C$, 'getType$',  function () {
return this.type;
});

Clazz.newMeth(C$, 'getContent$',  function () {
return this.content;
});

Clazz.newMeth(C$, 'getAttributes$',  function () {
return this.atts;
});

Clazz.newMeth(C$, 'getIndex$',  function () {
return this.index;
});

Clazz.newMeth(C$, 'isEmpty$',  function () {
return this.type == 17;
});

Clazz.newMeth(C$, 'toString',  function () {
return this.name;
});

Clazz.newMeth(C$, 'getAttribute$S',  function (name) {
for (var a=this.atts; a != null ; a=a.next) {
if (a.name.equals$O(name)) {
return a;
}}
return null;
});

Clazz.newMeth(C$, 'getAttributeByValue$S',  function (name) {
for (var a=this.atts; a != null ; a=a.next) {
if ((a.values != null ) && a.values.contains$O(name) ) {
return a;
}}
return null;
});

Clazz.newMeth(C$, 'name2type$S',  function (nm) {
var val=C$.contentTypes.get$O(nm);
return (val != null ) ? val.intValue$() : 0;
}, 1);

Clazz.newMeth(C$, '秘addAttribute$S',  function (name) {
var att=Clazz.new_($I$(3,1).c$$S,[name]);
if (this.atts == null ) {
this.atts=att;
} else {
att.next=this.atts;
this.atts=att;
}return att;
});

C$.$static$=function(){C$.$static$=0;
C$.MAX_INDEX_KEY= Clazz.new_();
C$.contentTypes=Clazz.new_($I$(1,1));
{
C$.contentTypes.put$O$O("CDATA", Integer.valueOf$I(1));
C$.contentTypes.put$O$O("RCDATA", Integer.valueOf$I(16));
C$.contentTypes.put$O$O("EMPTY", Integer.valueOf$I(17));
C$.contentTypes.put$O$O("ANY", Integer.valueOf$I(19));
};
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:31 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
