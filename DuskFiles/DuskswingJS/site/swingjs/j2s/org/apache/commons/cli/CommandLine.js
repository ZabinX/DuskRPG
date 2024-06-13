(function(){var P$=Clazz.newPackage("org.apache.commons.cli"),p$1={},I$=[[0,'org.apache.commons.cli.CommandLine','java.util.LinkedList','java.util.ArrayList','org.apache.commons.cli.TypeHandler','org.apache.commons.cli.Util','java.util.Properties','org.apache.commons.cli.Option']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CommandLine", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'java.io.Serializable');
C$.$classes$=[['Builder',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.args=Clazz.new_($I$(2,1));
this.options=Clazz.new_($I$(3,1));
},1);

C$.$fields$=[['O',['args','java.util.List','+options']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'hasOption$S',  function (opt) {
return this.options.contains$O(p$1.resolveOption$S.apply(this, [opt]));
});

Clazz.newMeth(C$, 'hasOption$C',  function (opt) {
return this.hasOption$S(String.valueOf$C(opt));
});

Clazz.newMeth(C$, 'getOptionObject$S',  function (opt) {
try {
return this.getParsedOptionValue$S(opt);
} catch (pe) {
if (Clazz.exceptionOf(pe,"org.apache.commons.cli.ParseException")){
System.err.println$S("Exception found converting " + opt + " to desired type: " + pe.getMessage$() );
return null;
} else {
throw pe;
}
}
});

Clazz.newMeth(C$, 'getParsedOptionValue$S',  function (opt) {
var res=this.getOptionValue$S(opt);
var option=p$1.resolveOption$S.apply(this, [opt]);
if (option == null  || res == null  ) {
return null;
}return $I$(4,"createValue$S$O",[res, option.getType$()]);
});

Clazz.newMeth(C$, 'getOptionObject$C',  function (opt) {
return this.getOptionObject$S(String.valueOf$C(opt));
});

Clazz.newMeth(C$, 'getOptionValue$S',  function (opt) {
var values=this.getOptionValues$S(opt);
return (values == null ) ? null : values[0];
});

Clazz.newMeth(C$, 'getOptionValue$C',  function (opt) {
return this.getOptionValue$S(String.valueOf$C(opt));
});

Clazz.newMeth(C$, 'getOptionValues$S',  function (opt) {
var values=Clazz.new_($I$(3,1));
for (var option, $option = this.options.iterator$(); $option.hasNext$()&&((option=($option.next$())),1);) {
if (opt.equals$O(option.getOpt$()) || opt.equals$O(option.getLongOpt$()) ) {
values.addAll$java_util_Collection(option.getValuesList$());
}}
return values.isEmpty$() ? null : values.toArray$OA(Clazz.array(String, [values.size$()]));
});

Clazz.newMeth(C$, 'resolveOption$S',  function (opt) {
opt=$I$(5).stripLeadingHyphens$S(opt);
for (var option, $option = this.options.iterator$(); $option.hasNext$()&&((option=($option.next$())),1);) {
if (opt.equals$O(option.getOpt$())) {
return option;
}if (opt.equals$O(option.getLongOpt$())) {
return option;
}}
return null;
}, p$1);

Clazz.newMeth(C$, 'getOptionValues$C',  function (opt) {
return this.getOptionValues$S(String.valueOf$C(opt));
});

Clazz.newMeth(C$, 'getOptionValue$S$S',  function (opt, defaultValue) {
var answer=this.getOptionValue$S(opt);
return (answer != null ) ? answer : defaultValue;
});

Clazz.newMeth(C$, 'getOptionValue$C$S',  function (opt, defaultValue) {
return this.getOptionValue$S$S(String.valueOf$C(opt), defaultValue);
});

Clazz.newMeth(C$, 'getOptionProperties$S',  function (opt) {
var props=Clazz.new_($I$(6,1));
for (var option, $option = this.options.iterator$(); $option.hasNext$()&&((option=($option.next$())),1);) {
if (opt.equals$O(option.getOpt$()) || opt.equals$O(option.getLongOpt$()) ) {
var values=option.getValuesList$();
if (values.size$() >= 2) {
props.put$O$O(values.get$I(0), values.get$I(1));
} else if (values.size$() == 1) {
props.put$O$O(values.get$I(0), "true");
}}}
return props;
});

Clazz.newMeth(C$, 'getArgs$',  function () {
var answer=Clazz.array(String, [this.args.size$()]);
this.args.toArray$OA(answer);
return answer;
});

Clazz.newMeth(C$, 'getArgList$',  function () {
return this.args;
});

Clazz.newMeth(C$, 'addArg$S',  function (arg) {
this.args.add$O(arg);
});

Clazz.newMeth(C$, 'addOption$org_apache_commons_cli_Option',  function (opt) {
this.options.add$O(opt);
});

Clazz.newMeth(C$, 'iterator$',  function () {
return this.options.iterator$();
});

Clazz.newMeth(C$, 'getOptions$',  function () {
var processed=this.options;
var optionsArray=Clazz.array($I$(7), [processed.size$()]);
return processed.toArray$OA(optionsArray);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.CommandLine, "Builder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.commandLine=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['commandLine','org.apache.commons.cli.CommandLine']]]

Clazz.newMeth(C$, 'addOption$org_apache_commons_cli_Option',  function (opt) {
this.commandLine.addOption$org_apache_commons_cli_Option(opt);
return this;
});

Clazz.newMeth(C$, 'addArg$S',  function (arg) {
this.commandLine.addArg$S(arg);
return this;
});

Clazz.newMeth(C$, 'build$',  function () {
return this.commandLine;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:37 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
