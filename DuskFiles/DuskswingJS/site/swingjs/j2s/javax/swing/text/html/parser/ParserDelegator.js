(function(){var P$=Clazz.newPackage("javax.swing.text.html.parser"),p$1={},I$=[[0,'sun.awt.AppContext','javax.swing.text.html.parser.DTD','java.io.DataInputStream','java.io.BufferedInputStream','javax.swing.text.html.parser.DocumentParser','java.security.AccessController','javax.swing.text.html.parser.ParserDelegator']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ParserDelegator", null, ['javax.swing.text.html.HTMLEditorKit','.Parser'], 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['DTD_KEY','java.lang.Object']]]

Clazz.newMeth(C$, 'setDefaultDTD$',  function () {
C$.getDefaultDTD$();
}, 1);

Clazz.newMeth(C$, 'getDefaultDTD$',  function () {
var appContext=$I$(1).getAppContext$();
var dtd=appContext.get$O(C$.DTD_KEY);
if (dtd == null ) {
var _dtd=null;
var nm="html32";
try {
_dtd=$I$(2).getDTD$S(nm);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
System.out.println$S("Throw an exception: could not get default dtd: " + nm);
} else {
throw e;
}
}
dtd=C$.createDTD$javax_swing_text_html_parser_DTD$S(_dtd, nm);
appContext.put$O$O(C$.DTD_KEY, dtd);
}return dtd;
}, 1);

Clazz.newMeth(C$, 'createDTD$javax_swing_text_html_parser_DTD$S',  function (dtd, name) {
var $in=null;
try {
var path=name + ".bdtd";
$in=C$.getResourceAsStream$S(path);
if ($in != null ) {
dtd.read$java_io_DataInputStream(Clazz.new_([Clazz.new_($I$(4,1).c$$java_io_InputStream,[$in])],$I$(3,1).c$$java_io_InputStream));
$I$(2).putDTDHash$S$javax_swing_text_html_parser_DTD(name, dtd);
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$O(e);
} else {
throw e;
}
}
return dtd;
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
C$.setDefaultDTD$();
}, 1);

Clazz.newMeth(C$, 'parse$java_io_Reader$javax_swing_text_html_HTMLEditorKit_ParserCallback$Z',  function (r, cb, ignoreCharSet) {
Clazz.new_([C$.getDefaultDTD$()],$I$(5,1).c$$javax_swing_text_html_parser_DTD).parse$java_io_Reader$javax_swing_text_html_HTMLEditorKit_ParserCallback$Z(r, cb, ignoreCharSet);
});

Clazz.newMeth(C$, 'getResourceAsStream$S',  function (name) {
return $I$(6,"doPrivileged$java_security_PrivilegedAction",[((P$.ParserDelegator$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ParserDelegator$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
return Clazz.getClass($I$(7)).getResourceAsStream$S(this.$finals$.name);
});
})()
), Clazz.new_(P$.ParserDelegator$1.$init$,[this, {name:name}]))]);
}, 1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream',  function (s) {
s.defaultReadObject$();
C$.setDefaultDTD$();
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.DTD_KEY= Clazz.new_();
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:31 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
