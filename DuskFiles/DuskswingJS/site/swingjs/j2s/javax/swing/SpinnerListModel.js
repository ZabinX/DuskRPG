(function(){var P$=Clazz.newPackage("javax.swing"),I$=[[0,'java.util.Arrays']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SpinnerListModel", null, 'javax.swing.AbstractSpinnerModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['index'],'O',['list','java.util.List']]]

Clazz.newMeth(C$, 'c$$java_util_List',  function (values) {
Clazz.super_(C$, this);
if (values == null  || values.size$() == 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["SpinnerListModel(List) expects non-null non-empty List"]);
}this.list=values;
this.index=0;
}, 1);

Clazz.newMeth(C$, 'c$$OA',  function (values) {
Clazz.super_(C$, this);
if (values == null  || values.length == 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["SpinnerListModel(Object[]) expects non-null non-empty Object[]"]);
}this.list=$I$(1).asList$OA(values);
this.index=0;
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$OA.apply(this, [Clazz.array(java.lang.Object, -1, ["empty"])]);
}, 1);

Clazz.newMeth(C$, 'getList$',  function () {
return this.list;
});

Clazz.newMeth(C$, 'setList$java_util_List',  function (list) {
if ((list == null ) || (list.size$() == 0) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["invalid list"]);
}if (!list.equals$O(this.list)) {
this.list=list;
this.index=0;
this.fireStateChanged$();
}});

Clazz.newMeth(C$, 'getValue$',  function () {
return this.list.get$I(this.index);
});

Clazz.newMeth(C$, 'setValue$O',  function (elt) {
var index=this.list.indexOf$O(elt);
if (index == -1) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["invalid sequence element"]);
} else if (index != this.index) {
this.index=index;
this.fireStateChanged$();
}});

Clazz.newMeth(C$, 'getNextValue$',  function () {
return (this.index >= (this.list.size$() - 1)) ? null : this.list.get$I(this.index + 1);
});

Clazz.newMeth(C$, 'getPreviousValue$',  function () {
return (this.index <= 0) ? null : this.list.get$I(this.index - 1);
});

Clazz.newMeth(C$, 'findNextMatch$S',  function (substring) {
var max=this.list.size$();
if (max == 0) {
return null;
}var counter=this.index;
do {
var value=this.list.get$I(counter);
var string=value.toString();
if (string != null  && string.startsWith$S(substring) ) {
return value;
}counter=(counter + 1) % max;
} while (counter != this.index);
return null;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:02 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
