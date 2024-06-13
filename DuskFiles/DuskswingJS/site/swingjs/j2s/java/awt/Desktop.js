(function(){var P$=Clazz.newPackage("java.awt"),I$=[[0,['java.awt.Desktop','.Action'],'swingjs.JSUtil']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Desktop", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Action',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['desktop','java.awt.Desktop']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getDesktop$',  function () {
if (C$.desktop == null ) {
C$.desktop=Clazz.new_(C$);
}return C$.desktop;
}, 1);

Clazz.newMeth(C$, 'isDesktopSupported$',  function () {
return true;
}, 1);

Clazz.newMeth(C$, 'isSupported$java_awt_Desktop_Action',  function (action) {
switch (action) {
case $I$(1).BROWSE:
return true;
default:
return false;
}
});

Clazz.newMeth(C$, 'open$java_io_File',  function (file) {
});

Clazz.newMeth(C$, 'edit$java_io_File',  function (file) {
});

Clazz.newMeth(C$, 'print$java_io_File',  function (file) {
});

Clazz.newMeth(C$, 'browse$java_net_URI',  function (uri) {
$I$(2,"showWebPage$O$O",[uri.toURL$(), null]);
});

Clazz.newMeth(C$, 'mail$',  function () {
});

Clazz.newMeth(C$, 'mail$java_net_URI',  function (mailtoURI) {
});
;
(function(){/*e*/var C$=Clazz.newClass(P$.Desktop, "Action", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "OPEN", 0, []);
Clazz.newEnumConst($vals, C$.c$, "EDIT", 1, []);
Clazz.newEnumConst($vals, C$.c$, "PRINT", 2, []);
Clazz.newEnumConst($vals, C$.c$, "MAIL", 3, []);
Clazz.newEnumConst($vals, C$.c$, "BROWSE", 4, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:02 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
