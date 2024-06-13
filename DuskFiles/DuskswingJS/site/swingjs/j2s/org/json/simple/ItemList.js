(function(){var P$=Clazz.newPackage("org.json.simple"),I$=[[0,'java.util.ArrayList','java.util.StringTokenizer','StringBuffer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ItemList");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.sp=",";
this.items=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['S',['sp'],'O',['items','java.util.List']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (s) {
;C$.$init$.apply(this);
this.split$S$S$java_util_List(s, this.sp, this.items);
}, 1);

Clazz.newMeth(C$, 'c$$S$S',  function (s, sp) {
;C$.$init$.apply(this);
this.sp=s;
this.split$S$S$java_util_List(s, sp, this.items);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$Z',  function (s, sp, isMultiToken) {
;C$.$init$.apply(this);
this.split$S$S$java_util_List$Z(s, sp, this.items, isMultiToken);
}, 1);

Clazz.newMeth(C$, 'getItems$',  function () {
return this.items;
});

Clazz.newMeth(C$, 'getArray$',  function () {
return this.items.toArray$();
});

Clazz.newMeth(C$, 'split$S$S$java_util_List$Z',  function (s, sp, append, isMultiToken) {
if (s == null  || sp == null  ) return;
if (isMultiToken) {
var tokens=Clazz.new_($I$(2,1).c$$S$S,[s, sp]);
while (tokens.hasMoreTokens$()){
append.add$O(tokens.nextToken$().trim$());
}
} else {
this.split$S$S$java_util_List(s, sp, append);
}});

Clazz.newMeth(C$, 'split$S$S$java_util_List',  function (s, sp, append) {
if (s == null  || sp == null  ) return;
var pos=0;
var prevPos=0;
do {
prevPos=pos;
pos=s.indexOf$S$I(sp, pos);
if (pos == -1) break;
append.add$O(s.substring$I$I(prevPos, pos).trim$());
pos+=sp.length$();
} while (pos != -1);
append.add$O(s.substring$I(prevPos).trim$());
});

Clazz.newMeth(C$, 'setSP$S',  function (sp) {
this.sp=sp;
});

Clazz.newMeth(C$, 'add$I$S',  function (i, item) {
if (item == null ) return;
this.items.add$I$O(i, item.trim$());
});

Clazz.newMeth(C$, 'add$S',  function (item) {
if (item == null ) return;
this.items.add$O(item.trim$());
});

Clazz.newMeth(C$, 'addAll$org_json_simple_ItemList',  function (list) {
this.items.addAll$java_util_Collection(list.items);
});

Clazz.newMeth(C$, 'addAll$S',  function (s) {
this.split$S$S$java_util_List(s, this.sp, this.items);
});

Clazz.newMeth(C$, 'addAll$S$S',  function (s, sp) {
this.split$S$S$java_util_List(s, sp, this.items);
});

Clazz.newMeth(C$, 'addAll$S$S$Z',  function (s, sp, isMultiToken) {
this.split$S$S$java_util_List$Z(s, sp, this.items, isMultiToken);
});

Clazz.newMeth(C$, 'get$I',  function (i) {
return this.items.get$I(i);
});

Clazz.newMeth(C$, 'size$',  function () {
return this.items.size$();
});

Clazz.newMeth(C$, 'toString',  function () {
return this.toString$S(this.sp);
});

Clazz.newMeth(C$, 'toString$S',  function (sp) {
var sb=Clazz.new_($I$(3,1));
for (var i=0; i < this.items.size$(); i++) {
if (i == 0) sb.append$O(this.items.get$I(i));
 else {
sb.append$S(sp);
sb.append$O(this.items.get$I(i));
}}
return sb.toString();
});

Clazz.newMeth(C$, 'clear$',  function () {
this.items.clear$();
});

Clazz.newMeth(C$, 'reset$',  function () {
this.sp=",";
this.items.clear$();
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:40 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
