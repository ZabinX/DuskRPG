(function(){var P$=Clazz.newPackage("javax.xml.bind"),I$=[[0,'java.util.ResourceBundle','java.text.MessageFormat']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Messages");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'format$S',  function (property) {
return C$.format$S$OA(property, null);
}, 1);

Clazz.newMeth(C$, 'format$S$O',  function (property, arg1) {
return C$.format$S$OA(property, Clazz.array(java.lang.Object, -1, [arg1]));
}, 1);

Clazz.newMeth(C$, 'format$S$O$O',  function (property, arg1, arg2) {
return C$.format$S$OA(property, Clazz.array(java.lang.Object, -1, [arg1, arg2]));
}, 1);

Clazz.newMeth(C$, 'format$S$O$O$O',  function (property, arg1, arg2, arg3) {
return C$.format$S$OA(property, Clazz.array(java.lang.Object, -1, [arg1, arg2, arg3]));
}, 1);

Clazz.newMeth(C$, 'format$S$OA',  function (property, args) {
var text=$I$(1,"getBundle$S",[Clazz.getClass(C$).getName$()]).getString$S(property);
return $I$(2).format$S$OA(text, args);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:32 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
