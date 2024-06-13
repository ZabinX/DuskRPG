(function(){var P$=Clazz.newPackage("java.text"),p$1={},I$=[[0,['java.text.FieldPosition','.Delegate']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FieldPosition", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Delegate',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.field=0;
this.endIndex=0;
this.beginIndex=0;
},1);

C$.$fields$=[['I',['field','endIndex','beginIndex'],'O',['attribute','java.text.Format.Field']]]

Clazz.newMeth(C$, 'c$$I',  function (field) {
;C$.$init$.apply(this);
this.field=field;
}, 1);

Clazz.newMeth(C$, 'c$$java_text_Format_Field',  function (attribute) {
C$.c$$java_text_Format_Field$I.apply(this, [attribute, -1]);
}, 1);

Clazz.newMeth(C$, 'c$$java_text_Format_Field$I',  function (attribute, fieldID) {
;C$.$init$.apply(this);
this.attribute=attribute;
this.field=fieldID;
}, 1);

Clazz.newMeth(C$, 'getFieldAttribute$',  function () {
return this.attribute;
});

Clazz.newMeth(C$, 'getField$',  function () {
return this.field;
});

Clazz.newMeth(C$, 'getBeginIndex$',  function () {
return this.beginIndex;
});

Clazz.newMeth(C$, 'getEndIndex$',  function () {
return this.endIndex;
});

Clazz.newMeth(C$, 'setBeginIndex$I',  function (bi) {
this.beginIndex=bi;
});

Clazz.newMeth(C$, 'setEndIndex$I',  function (ei) {
this.endIndex=ei;
});

Clazz.newMeth(C$, 'getFieldDelegate$',  function () {
return Clazz.new_($I$(1,1),[this, null]);
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (obj == null ) return false;
if (!(Clazz.instanceOf(obj, "java.text.FieldPosition"))) return false;
var other=obj;
if (this.attribute == null ) {
if (other.attribute != null ) {
return false;
}} else if (!this.attribute.equals$O(other.attribute)) {
return false;
}return (this.beginIndex == other.beginIndex && this.endIndex == other.endIndex  && this.field == other.field );
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return (this.field << 24) | (this.beginIndex << 16) | this.endIndex ;
});

Clazz.newMeth(C$, 'toString',  function () {
return this.getClass$().getName$() + "[field=" + this.field + ",attribute=" + this.attribute + ",beginIndex=" + this.beginIndex + ",endIndex=" + this.endIndex + ']' ;
});

Clazz.newMeth(C$, 'matchesField$java_text_Format_Field',  function (attribute) {
if (this.attribute != null ) {
return this.attribute.equals$O(attribute);
}return false;
}, p$1);

Clazz.newMeth(C$, 'matchesField$java_text_Format_Field$I',  function (attribute, field) {
if (this.attribute != null ) {
return this.attribute.equals$O(attribute);
}return (field == this.field);
}, p$1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.FieldPosition, "Delegate", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, [['java.text.Format','java.text.Format.FieldDelegate']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['encounteredField']]]

Clazz.newMeth(C$, 'formatted$java_text_Format_Field$O$I$I$StringBuffer',  function (attr, value, start, end, buffer) {
if (!this.encounteredField && p$1.matchesField$java_text_Format_Field.apply(this.b$['java.text.FieldPosition'], [attr]) ) {
this.b$['java.text.FieldPosition'].setBeginIndex$I.apply(this.b$['java.text.FieldPosition'], [start]);
this.b$['java.text.FieldPosition'].setEndIndex$I.apply(this.b$['java.text.FieldPosition'], [end]);
this.encounteredField=(start != end);
}});

Clazz.newMeth(C$, 'formatted$I$java_text_Format_Field$O$I$I$StringBuffer',  function (fieldID, attr, value, start, end, buffer) {
if (!this.encounteredField && p$1.matchesField$java_text_Format_Field$I.apply(this.b$['java.text.FieldPosition'], [attr, fieldID]) ) {
this.b$['java.text.FieldPosition'].setBeginIndex$I.apply(this.b$['java.text.FieldPosition'], [start]);
this.b$['java.text.FieldPosition'].setEndIndex$I.apply(this.b$['java.text.FieldPosition'], [end]);
this.encounteredField=(start != end);
}});

Clazz.newMeth(C$, 'formatted$I$java_text_Format_Field$O$I$I$SA',  function (fieldID, attr, value, start, end, buffer) {
if (!this.encounteredField && p$1.matchesField$java_text_Format_Field$I.apply(this.b$['java.text.FieldPosition'], [attr, fieldID]) ) {
this.b$['java.text.FieldPosition'].setBeginIndex$I.apply(this.b$['java.text.FieldPosition'], [start]);
this.b$['java.text.FieldPosition'].setEndIndex$I.apply(this.b$['java.text.FieldPosition'], [end]);
this.encounteredField=(start != end);
}});

Clazz.newMeth(C$, 'formatted$java_text_Format_Field$O$I$I$SA',  function (attr, value, start, end, buffer) {
if (!this.encounteredField && p$1.matchesField$java_text_Format_Field.apply(this.b$['java.text.FieldPosition'], [attr]) ) {
this.b$['java.text.FieldPosition'].setBeginIndex$I.apply(this.b$['java.text.FieldPosition'], [start]);
this.b$['java.text.FieldPosition'].setEndIndex$I.apply(this.b$['java.text.FieldPosition'], [end]);
this.encounteredField=(start != end);
}});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:29 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
