(function(){var P$=Clazz.newPackage("org.apache.commons.cli"),I$=[[0,'java.io.FileInputStream','java.io.File','java.net.URL','org.apache.commons.cli.Options','org.apache.commons.cli.Option']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PatternOptionBuilder");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['STRING_VALUE','Class','+OBJECT_VALUE','+NUMBER_VALUE','+DATE_VALUE','+CLASS_VALUE','+EXISTING_FILE_VALUE','+FILE_VALUE','+FILES_VALUE','+URL_VALUE']]]

Clazz.newMeth(C$, 'getValueClass$C',  function (ch) {
switch (ch.$c()) {
case 64:
return C$.OBJECT_VALUE;
case 58:
return C$.STRING_VALUE;
case 37:
return C$.NUMBER_VALUE;
case 43:
return C$.CLASS_VALUE;
case 35:
return C$.DATE_VALUE;
case 60:
return C$.EXISTING_FILE_VALUE;
case 62:
return C$.FILE_VALUE;
case 42:
return C$.FILES_VALUE;
case 47:
return C$.URL_VALUE;
}
return null;
}, 1);

Clazz.newMeth(C$, 'isValueCode$C',  function (ch) {
return ch == "@" || ch == ":"  || ch == "%"  || ch == "+"  || ch == "#"  || ch == "<"  || ch == ">"  || ch == "*"  || ch == "/"  || ch == "!" ;
}, 1);

Clazz.newMeth(C$, 'parsePattern$S',  function (pattern) {
var opt=" ";
var required=false;
var type=null;
var options=Clazz.new_($I$(4,1));
for (var i=0; i < pattern.length$(); i++) {
var ch=pattern.charAt$I(i);
if (!C$.isValueCode$C(ch)) {
if (opt != " ") {
var option=$I$(5,"builder$S",[String.valueOf$C(opt)]).hasArg$Z(type != null ).required$Z(required).type$Class(type).build$();
options.addOption$org_apache_commons_cli_Option(option);
required=false;
type=null;
opt=" ";
}opt=ch;
} else if (ch == "!") {
required=true;
} else {
type=C$.getValueClass$C(ch);
}}
if (opt != " ") {
var option=$I$(5,"builder$S",[String.valueOf$C(opt)]).hasArg$Z(type != null ).required$Z(required).type$Class(type).build$();
options.addOption$org_apache_commons_cli_Option(option);
}return options;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.STRING_VALUE=Clazz.getClass(String);
C$.OBJECT_VALUE=Clazz.getClass(java.lang.Object);
C$.NUMBER_VALUE=Clazz.getClass(Number);
C$.DATE_VALUE=Clazz.getClass(java.util.Date);
C$.CLASS_VALUE=Clazz.getClass(Class);
C$.EXISTING_FILE_VALUE=Clazz.getClass($I$(1));
C$.FILE_VALUE=Clazz.getClass($I$(2));
C$.FILES_VALUE=Clazz.array($I$(2), -1);
C$.URL_VALUE=Clazz.getClass($I$(3));
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:38 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
