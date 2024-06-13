(function(){var P$=Clazz.newPackage("org.apache.commons.cli"),p$1={},I$=[[0,'java.util.ArrayList','org.apache.commons.cli.CommandLine','java.util.Arrays','org.apache.commons.cli.Util']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Parser", null, null, 'org.apache.commons.cli.CommandLineParser');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['cmd','org.apache.commons.cli.CommandLine','options','org.apache.commons.cli.Options','requiredOptions','java.util.List']]]

Clazz.newMeth(C$, 'setOptions$org_apache_commons_cli_Options',  function (options) {
this.options=options;
this.requiredOptions=Clazz.new_([options.getRequiredOptions$()],$I$(1,1).c$$java_util_Collection);
});

Clazz.newMeth(C$, 'getOptions$',  function () {
return this.options;
});

Clazz.newMeth(C$, 'getRequiredOptions$',  function () {
return this.requiredOptions;
});

Clazz.newMeth(C$, 'parse$org_apache_commons_cli_Options$SA',  function (options, $arguments) {
return this.parse$org_apache_commons_cli_Options$SA$java_util_Properties$Z(options, $arguments, null, false);
});

Clazz.newMeth(C$, 'parse$org_apache_commons_cli_Options$SA$java_util_Properties',  function (options, $arguments, properties) {
return this.parse$org_apache_commons_cli_Options$SA$java_util_Properties$Z(options, $arguments, properties, false);
});

Clazz.newMeth(C$, 'parse$org_apache_commons_cli_Options$SA$Z',  function (options, $arguments, stopAtNonOption) {
return this.parse$org_apache_commons_cli_Options$SA$java_util_Properties$Z(options, $arguments, null, stopAtNonOption);
});

Clazz.newMeth(C$, 'parse$org_apache_commons_cli_Options$SA$java_util_Properties$Z',  function (options, $arguments, properties, stopAtNonOption) {
for (var opt, $opt = options.helpOptions$().iterator$(); $opt.hasNext$()&&((opt=($opt.next$())),1);) {
opt.clearValues$();
}
for (var group, $group = options.getOptionGroups$().iterator$(); $group.hasNext$()&&((group=($group.next$())),1);) {
group.setSelected$org_apache_commons_cli_Option(null);
}
this.setOptions$org_apache_commons_cli_Options(options);
this.cmd=Clazz.new_($I$(2,1));
var eatTheRest=false;
if ($arguments == null ) {
$arguments=Clazz.array(String, [0]);
}var tokenList=$I$(3,"asList$OA",[this.flatten$org_apache_commons_cli_Options$SA$Z(this.getOptions$(), $arguments, stopAtNonOption)]);
var iterator=tokenList.listIterator$();
while (iterator.hasNext$()){
var t=iterator.next$();
if ("--".equals$O(t)) {
eatTheRest=true;
} else if ("-".equals$O(t)) {
if (stopAtNonOption) {
eatTheRest=true;
} else {
this.cmd.addArg$S(t);
}} else if (t.startsWith$S("-")) {
if (stopAtNonOption && !this.getOptions$().hasOption$S(t) ) {
eatTheRest=true;
this.cmd.addArg$S(t);
} else {
this.processOption$S$java_util_ListIterator(t, iterator);
}} else {
this.cmd.addArg$S(t);
if (stopAtNonOption) {
eatTheRest=true;
}}if (eatTheRest) {
while (iterator.hasNext$()){
var str=iterator.next$();
if (!"--".equals$O(str)) {
this.cmd.addArg$S(str);
}}
}}
this.processProperties$java_util_Properties(properties);
this.checkRequiredOptions$();
return this.cmd;
});

Clazz.newMeth(C$, 'processProperties$java_util_Properties',  function (properties) {
if (properties == null ) {
return;
}for (var e=properties.propertyNames$(); e.hasMoreElements$(); ) {
var option=e.nextElement$().toString();
var opt=this.options.getOption$S(option);
if (opt == null ) {
throw Clazz.new_(Clazz.load('org.apache.commons.cli.UnrecognizedOptionException').c$$S$S,["Default option wasn\'t defined", option]);
}var group=this.options.getOptionGroup$org_apache_commons_cli_Option(opt);
var selected=group != null  && group.getSelected$() != null  ;
if (!this.cmd.hasOption$S(option) && !selected ) {
var value=properties.getProperty$S(option);
if (opt.hasArg$()) {
if (opt.getValues$() == null  || opt.getValues$().length == 0 ) {
try {
opt.addValueForProcessing$S(value);
} catch (exp) {
if (Clazz.exceptionOf(exp,"RuntimeException")){
} else {
throw exp;
}
}
}} else if (!("yes".equalsIgnoreCase$S(value) || "true".equalsIgnoreCase$S(value) || "1".equalsIgnoreCase$S(value)  )) {
continue;
}this.cmd.addOption$org_apache_commons_cli_Option(opt);
p$1.updateRequiredOptions$org_apache_commons_cli_Option.apply(this, [opt]);
}}
});

Clazz.newMeth(C$, 'checkRequiredOptions$',  function () {
if (!this.getRequiredOptions$().isEmpty$()) {
throw Clazz.new_(Clazz.load('org.apache.commons.cli.MissingOptionException').c$$java_util_List,[this.getRequiredOptions$()]);
}});

Clazz.newMeth(C$, 'processArgs$org_apache_commons_cli_Option$java_util_ListIterator',  function (opt, iter) {
while (iter.hasNext$()){
var str=iter.next$();
if (this.getOptions$().hasOption$S(str) && str.startsWith$S("-") ) {
iter.previous$();
break;
}try {
opt.addValueForProcessing$S($I$(4).stripLeadingAndTrailingQuotes$S(str));
} catch (exp) {
if (Clazz.exceptionOf(exp,"RuntimeException")){
iter.previous$();
break;
} else {
throw exp;
}
}
}
if (opt.getValues$() == null  && !opt.hasOptionalArg$() ) {
throw Clazz.new_(Clazz.load('org.apache.commons.cli.MissingArgumentException').c$$org_apache_commons_cli_Option,[opt]);
}});

Clazz.newMeth(C$, 'processOption$S$java_util_ListIterator',  function (arg, iter) {
var hasOption=this.getOptions$().hasOption$S(arg);
if (!hasOption) {
throw Clazz.new_(Clazz.load('org.apache.commons.cli.UnrecognizedOptionException').c$$S$S,["Unrecognized option: " + arg, arg]);
}var opt=this.getOptions$().getOption$S(arg).clone$();
p$1.updateRequiredOptions$org_apache_commons_cli_Option.apply(this, [opt]);
if (opt.hasArg$()) {
this.processArgs$org_apache_commons_cli_Option$java_util_ListIterator(opt, iter);
}this.cmd.addOption$org_apache_commons_cli_Option(opt);
});

Clazz.newMeth(C$, 'updateRequiredOptions$org_apache_commons_cli_Option',  function (opt) {
if (opt.isRequired$()) {
this.getRequiredOptions$().remove$O(opt.getKey$());
}if (this.getOptions$().getOptionGroup$org_apache_commons_cli_Option(opt) != null ) {
var group=this.getOptions$().getOptionGroup$org_apache_commons_cli_Option(opt);
if (group.isRequired$()) {
this.getRequiredOptions$().remove$O(group);
}group.setSelected$org_apache_commons_cli_Option(opt);
}}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:38 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
