(function(){var P$=Clazz.newPackage("org.apache.commons.cli"),I$=[[0,'java.util.LinkedHashMap','StringBuilder']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "OptionGroup", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.optionMap=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['Z',['required'],'S',['selected'],'O',['optionMap','java.util.Map']]]

Clazz.newMeth(C$, 'addOption$org_apache_commons_cli_Option',  function (option) {
this.optionMap.put$O$O(option.getKey$(), option);
return this;
});

Clazz.newMeth(C$, 'getNames$',  function () {
return this.optionMap.keySet$();
});

Clazz.newMeth(C$, 'getOptions$',  function () {
return this.optionMap.values$();
});

Clazz.newMeth(C$, 'setSelected$org_apache_commons_cli_Option',  function (option) {
if (option == null ) {
this.selected=null;
return;
}if (this.selected == null  || this.selected.equals$O(option.getKey$()) ) {
this.selected=option.getKey$();
} else {
throw Clazz.new_(Clazz.load('org.apache.commons.cli.AlreadySelectedException').c$$org_apache_commons_cli_OptionGroup$org_apache_commons_cli_Option,[this, option]);
}});

Clazz.newMeth(C$, 'getSelected$',  function () {
return this.selected;
});

Clazz.newMeth(C$, 'setRequired$Z',  function (required) {
this.required=required;
});

Clazz.newMeth(C$, 'isRequired$',  function () {
return this.required;
});

Clazz.newMeth(C$, 'toString',  function () {
var buff=Clazz.new_($I$(2,1));
var iter=this.getOptions$().iterator$();
buff.append$S("[");
while (iter.hasNext$()){
var option=iter.next$();
if (option.getOpt$() != null ) {
buff.append$S("-");
buff.append$S(option.getOpt$());
} else {
buff.append$S("--");
buff.append$S(option.getLongOpt$());
}if (option.getDescription$() != null ) {
buff.append$S(" ");
buff.append$S(option.getDescription$());
}if (iter.hasNext$()) {
buff.append$S(", ");
}}
buff.append$S("]");
return buff.toString();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:38 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
