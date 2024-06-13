(function(){var P$=Clazz.newPackage("org.apache.commons.cli"),I$=[[0,'org.apache.commons.cli.Option']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "OptionBuilder");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['Z',['required','optionalArg'],'C',['valuesep'],'I',['numberOfArgs'],'S',['longopt','description','argName'],'O',['type','Class','INSTANCE','org.apache.commons.cli.OptionBuilder']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'reset$',  function () {
C$.description=null;
C$.argName=null;
C$.longopt=null;
C$.type=Clazz.getClass(String);
C$.required=false;
C$.numberOfArgs=-1;
C$.optionalArg=false;
C$.valuesep="\u0000";
}, 1);

Clazz.newMeth(C$, 'withLongOpt$S',  function (newLongopt) {
C$.longopt=newLongopt;
return C$.INSTANCE;
}, 1);

Clazz.newMeth(C$, 'hasArg$',  function () {
C$.numberOfArgs=1;
return C$.INSTANCE;
}, 1);

Clazz.newMeth(C$, 'hasArg$Z',  function (hasArg) {
C$.numberOfArgs=hasArg ? 1 : -1;
return C$.INSTANCE;
}, 1);

Clazz.newMeth(C$, 'withArgName$S',  function (name) {
C$.argName=name;
return C$.INSTANCE;
}, 1);

Clazz.newMeth(C$, 'isRequired$',  function () {
C$.required=true;
return C$.INSTANCE;
}, 1);

Clazz.newMeth(C$, 'withValueSeparator$C',  function (sep) {
C$.valuesep=sep;
return C$.INSTANCE;
}, 1);

Clazz.newMeth(C$, 'withValueSeparator$',  function () {
C$.valuesep="=";
return C$.INSTANCE;
}, 1);

Clazz.newMeth(C$, 'isRequired$Z',  function (newRequired) {
C$.required=newRequired;
return C$.INSTANCE;
}, 1);

Clazz.newMeth(C$, 'hasArgs$',  function () {
C$.numberOfArgs=-2;
return C$.INSTANCE;
}, 1);

Clazz.newMeth(C$, 'hasArgs$I',  function (num) {
C$.numberOfArgs=num;
return C$.INSTANCE;
}, 1);

Clazz.newMeth(C$, 'hasOptionalArg$',  function () {
C$.numberOfArgs=1;
C$.optionalArg=true;
return C$.INSTANCE;
}, 1);

Clazz.newMeth(C$, 'hasOptionalArgs$',  function () {
C$.numberOfArgs=-2;
C$.optionalArg=true;
return C$.INSTANCE;
}, 1);

Clazz.newMeth(C$, 'hasOptionalArgs$I',  function (numArgs) {
C$.numberOfArgs=numArgs;
C$.optionalArg=true;
return C$.INSTANCE;
}, 1);

Clazz.newMeth(C$, 'withType$O',  function (newType) {
return C$.withType$Class(newType);
}, 1);

Clazz.newMeth(C$, 'withType$Class',  function (newType) {
C$.type=newType;
return C$.INSTANCE;
}, 1);

Clazz.newMeth(C$, 'withDescription$S',  function (newDescription) {
C$.description=newDescription;
return C$.INSTANCE;
}, 1);

Clazz.newMeth(C$, 'create$C',  function (opt) {
return C$.create$S(String.valueOf$C(opt));
}, 1);

Clazz.newMeth(C$, 'create$',  function () {
if (C$.longopt == null ) {
C$.reset$();
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["must specify longopt"]);
}return C$.create$S(null);
}, 1);

Clazz.newMeth(C$, 'create$S',  function (opt) {
var option=null;
try {
option=Clazz.new_($I$(1,1).c$$S$S,[opt, C$.description]);
option.setLongOpt$S(C$.longopt);
option.setRequired$Z(C$.required);
option.setOptionalArg$Z(C$.optionalArg);
option.setArgs$I(C$.numberOfArgs);
option.setType$Class(C$.type);
option.setValueSeparator$C(C$.valuesep);
option.setArgName$S(C$.argName);
} finally {
C$.reset$();
}
return option;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.numberOfArgs=-1;
C$.INSTANCE=Clazz.new_(C$);
{
C$.reset$();
};
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:38 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
