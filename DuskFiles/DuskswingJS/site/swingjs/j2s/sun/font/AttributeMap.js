(function(){var P$=Clazz.newPackage("sun.font"),p$1={},I$=[[0,'Thread','java.util.HashMap']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AttributeMap", null, 'java.util.AbstractMap');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['$values','sun.font.AttributeValues','delegateMap','java.util.Map']]
,['Z',['first']]]

Clazz.newMeth(C$, 'c$$sun_font_AttributeValues',  function (values) {
Clazz.super_(C$, this);
this.$values=values;
}, 1);

Clazz.newMeth(C$, 'entrySet$',  function () {
return p$1.delegate.apply(this, []).entrySet$();
});

Clazz.newMeth(C$, ['put$java_awt_font_TextAttribute$O','put$O$O'],  function (key, value) {
return p$1.delegate.apply(this, []).put$O$O(key, value);
});

Clazz.newMeth(C$, 'getValues$',  function () {
return this.$values;
});

Clazz.newMeth(C$, 'delegate',  function () {
if (this.delegateMap == null ) {
if (C$.first) {
C$.first=false;
$I$(1).dumpStack$();
}this.delegateMap=this.$values.toMap$java_util_Map(Clazz.new_($I$(2,1).c$$I,[27]));
this.$values=null;
}return this.delegateMap;
}, p$1);

Clazz.newMeth(C$, 'toString',  function () {
if (this.$values != null ) {
return "map of " + this.$values.toString();
}return C$.superclazz.prototype.toString.apply(this, []);
});

C$.$static$=function(){C$.$static$=0;
C$.first=false;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:44 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
