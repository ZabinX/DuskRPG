(function(){var P$=Clazz.newPackage("org.apache.commons.cli"),p$1={},I$=[[0,'java.util.ArrayList','org.apache.commons.cli.CommandLine','org.apache.commons.cli.Util']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DefaultParser", null, null, 'org.apache.commons.cli.CommandLineParser');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['stopAtNonOption','skipParsing'],'S',['currentToken'],'O',['cmd','org.apache.commons.cli.CommandLine','options','org.apache.commons.cli.Options','currentOption','org.apache.commons.cli.Option','expectedOpts','java.util.List']]]

Clazz.newMeth(C$, 'parse$org_apache_commons_cli_Options$SA',  function (options, $arguments) {
return this.parse$org_apache_commons_cli_Options$SA$java_util_Properties(options, $arguments, null);
});

Clazz.newMeth(C$, 'parse$org_apache_commons_cli_Options$SA$java_util_Properties',  function (options, $arguments, properties) {
return this.parse$org_apache_commons_cli_Options$SA$java_util_Properties$Z(options, $arguments, properties, false);
});

Clazz.newMeth(C$, 'parse$org_apache_commons_cli_Options$SA$Z',  function (options, $arguments, stopAtNonOption) {
return this.parse$org_apache_commons_cli_Options$SA$java_util_Properties$Z(options, $arguments, null, stopAtNonOption);
});

Clazz.newMeth(C$, 'parse$org_apache_commons_cli_Options$SA$java_util_Properties$Z',  function (options, $arguments, properties, stopAtNonOption) {
this.options=options;
this.stopAtNonOption=stopAtNonOption;
this.skipParsing=false;
this.currentOption=null;
this.expectedOpts=Clazz.new_([options.getRequiredOptions$()],$I$(1,1).c$$java_util_Collection);
for (var group, $group = options.getOptionGroups$().iterator$(); $group.hasNext$()&&((group=($group.next$())),1);) {
group.setSelected$org_apache_commons_cli_Option(null);
}
this.cmd=Clazz.new_($I$(2,1));
if ($arguments != null ) {
for (var argument, $argument = 0, $$argument = $arguments; $argument<$$argument.length&&((argument=($$argument[$argument])),1);$argument++) {
p$1.handleToken$S.apply(this, [argument]);
}
}p$1.checkRequiredArgs.apply(this, []);
p$1.handleProperties$java_util_Properties.apply(this, [properties]);
p$1.checkRequiredOptions.apply(this, []);
return this.cmd;
});

Clazz.newMeth(C$, 'handleProperties$java_util_Properties',  function (properties) {
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
opt.addValueForProcessing$S(value);
}} else if (!("yes".equalsIgnoreCase$S(value) || "true".equalsIgnoreCase$S(value) || "1".equalsIgnoreCase$S(value)  )) {
continue;
}p$1.handleOption$org_apache_commons_cli_Option.apply(this, [opt]);
this.currentOption=null;
}}
}, p$1);

Clazz.newMeth(C$, 'checkRequiredOptions',  function () {
if (!this.expectedOpts.isEmpty$()) {
throw Clazz.new_(Clazz.load('org.apache.commons.cli.MissingOptionException').c$$java_util_List,[this.expectedOpts]);
}}, p$1);

Clazz.newMeth(C$, 'checkRequiredArgs',  function () {
if (this.currentOption != null  && this.currentOption.requiresArg$() ) {
throw Clazz.new_(Clazz.load('org.apache.commons.cli.MissingArgumentException').c$$org_apache_commons_cli_Option,[this.currentOption]);
}}, p$1);

Clazz.newMeth(C$, 'handleToken$S',  function (token) {
this.currentToken=token;
if (this.skipParsing) {
this.cmd.addArg$S(token);
} else if ("--".equals$O(token)) {
this.skipParsing=true;
} else if (this.currentOption != null  && this.currentOption.acceptsArg$()  && p$1.isArgument$S.apply(this, [token]) ) {
this.currentOption.addValueForProcessing$S($I$(3).stripLeadingAndTrailingQuotes$S(token));
} else if (token.startsWith$S("--")) {
p$1.handleLongOption$S.apply(this, [token]);
} else if (token.startsWith$S("-") && !"-".equals$O(token) ) {
p$1.handleShortAndLongOption$S.apply(this, [token]);
} else {
p$1.handleUnknownToken$S.apply(this, [token]);
}if (this.currentOption != null  && !this.currentOption.acceptsArg$() ) {
this.currentOption=null;
}}, p$1);

Clazz.newMeth(C$, 'isArgument$S',  function (token) {
return !p$1.isOption$S.apply(this, [token]) || p$1.isNegativeNumber$S.apply(this, [token]) ;
}, p$1);

Clazz.newMeth(C$, 'isNegativeNumber$S',  function (token) {
try {
Double.parseDouble$S(token);
return true;
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
return false;
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'isOption$S',  function (token) {
return p$1.isLongOption$S.apply(this, [token]) || p$1.isShortOption$S.apply(this, [token]) ;
}, p$1);

Clazz.newMeth(C$, 'isShortOption$S',  function (token) {
if (!token.startsWith$S("-") || token.length$() == 1 ) {
return false;
}var pos=token.indexOf$S("=");
var optName=pos == -1 ? token.substring$I(1) : token.substring$I$I(1, pos);
if (this.options.hasShortOption$S(optName)) {
return true;
}return optName.length$() > 0 && this.options.hasShortOption$S(String.valueOf$C(optName.charAt$I(0))) ;
}, p$1);

Clazz.newMeth(C$, 'isLongOption$S',  function (token) {
if (!token.startsWith$S("-") || token.length$() == 1 ) {
return false;
}var pos=token.indexOf$S("=");
var t=pos == -1 ? token : token.substring$I$I(0, pos);
if (!this.options.getMatchingOptions$S(t).isEmpty$()) {
return true;
} else if (p$1.getLongPrefix$S.apply(this, [token]) != null  && !token.startsWith$S("--") ) {
return true;
}return false;
}, p$1);

Clazz.newMeth(C$, 'handleUnknownToken$S',  function (token) {
if (token.startsWith$S("-") && token.length$() > 1  && !this.stopAtNonOption ) {
throw Clazz.new_(Clazz.load('org.apache.commons.cli.UnrecognizedOptionException').c$$S$S,["Unrecognized option: " + token, token]);
}this.cmd.addArg$S(token);
if (this.stopAtNonOption) {
this.skipParsing=true;
}}, p$1);

Clazz.newMeth(C$, 'handleLongOption$S',  function (token) {
if (token.indexOf$I("=") == -1) {
p$1.handleLongOptionWithoutEqual$S.apply(this, [token]);
} else {
p$1.handleLongOptionWithEqual$S.apply(this, [token]);
}}, p$1);

Clazz.newMeth(C$, 'handleLongOptionWithoutEqual$S',  function (token) {
var matchingOpts=this.options.getMatchingOptions$S(token);
if (matchingOpts.isEmpty$()) {
p$1.handleUnknownToken$S.apply(this, [this.currentToken]);
} else if (matchingOpts.size$() > 1) {
throw Clazz.new_(Clazz.load('org.apache.commons.cli.AmbiguousOptionException').c$$S$java_util_Collection,[token, matchingOpts]);
} else {
p$1.handleOption$org_apache_commons_cli_Option.apply(this, [this.options.getOption$S(matchingOpts.get$I(0))]);
}}, p$1);

Clazz.newMeth(C$, 'handleLongOptionWithEqual$S',  function (token) {
var pos=token.indexOf$I("=");
var value=token.substring$I(pos + 1);
var opt=token.substring$I$I(0, pos);
var matchingOpts=this.options.getMatchingOptions$S(opt);
if (matchingOpts.isEmpty$()) {
p$1.handleUnknownToken$S.apply(this, [this.currentToken]);
} else if (matchingOpts.size$() > 1) {
throw Clazz.new_(Clazz.load('org.apache.commons.cli.AmbiguousOptionException').c$$S$java_util_Collection,[opt, matchingOpts]);
} else {
var option=this.options.getOption$S(matchingOpts.get$I(0));
if (option.acceptsArg$()) {
p$1.handleOption$org_apache_commons_cli_Option.apply(this, [option]);
this.currentOption.addValueForProcessing$S(value);
this.currentOption=null;
} else {
p$1.handleUnknownToken$S.apply(this, [this.currentToken]);
}}}, p$1);

Clazz.newMeth(C$, 'handleShortAndLongOption$S',  function (token) {
var t=$I$(3).stripLeadingHyphens$S(token);
var pos=t.indexOf$I("=");
if (t.length$() == 1) {
if (this.options.hasShortOption$S(t)) {
p$1.handleOption$org_apache_commons_cli_Option.apply(this, [this.options.getOption$S(t)]);
} else {
p$1.handleUnknownToken$S.apply(this, [token]);
}} else if (pos == -1) {
if (this.options.hasShortOption$S(t)) {
p$1.handleOption$org_apache_commons_cli_Option.apply(this, [this.options.getOption$S(t)]);
} else if (!this.options.getMatchingOptions$S(t).isEmpty$()) {
p$1.handleLongOptionWithoutEqual$S.apply(this, [token]);
} else {
var opt=p$1.getLongPrefix$S.apply(this, [t]);
if (opt != null  && this.options.getOption$S(opt).acceptsArg$() ) {
p$1.handleOption$org_apache_commons_cli_Option.apply(this, [this.options.getOption$S(opt)]);
this.currentOption.addValueForProcessing$S(t.substring$I(opt.length$()));
this.currentOption=null;
} else if (p$1.isJavaProperty$S.apply(this, [t])) {
p$1.handleOption$org_apache_commons_cli_Option.apply(this, [this.options.getOption$S(t.substring$I$I(0, 1))]);
this.currentOption.addValueForProcessing$S(t.substring$I(1));
this.currentOption=null;
} else {
this.handleConcatenatedOptions$S(token);
}}} else {
var opt=t.substring$I$I(0, pos);
var value=t.substring$I(pos + 1);
if (opt.length$() == 1) {
var option=this.options.getOption$S(opt);
if (option != null  && option.acceptsArg$() ) {
p$1.handleOption$org_apache_commons_cli_Option.apply(this, [option]);
this.currentOption.addValueForProcessing$S(value);
this.currentOption=null;
} else {
p$1.handleUnknownToken$S.apply(this, [token]);
}} else if (p$1.isJavaProperty$S.apply(this, [opt])) {
p$1.handleOption$org_apache_commons_cli_Option.apply(this, [this.options.getOption$S(opt.substring$I$I(0, 1))]);
this.currentOption.addValueForProcessing$S(opt.substring$I(1));
this.currentOption.addValueForProcessing$S(value);
this.currentOption=null;
} else {
p$1.handleLongOptionWithEqual$S.apply(this, [token]);
}}}, p$1);

Clazz.newMeth(C$, 'getLongPrefix$S',  function (token) {
var t=$I$(3).stripLeadingHyphens$S(token);
var i;
var opt=null;
for (i=t.length$() - 2; i > 1; i--) {
var prefix=t.substring$I$I(0, i);
if (this.options.hasLongOption$S(prefix)) {
opt=prefix;
break;
}}
return opt;
}, p$1);

Clazz.newMeth(C$, 'isJavaProperty$S',  function (token) {
var opt=token.substring$I$I(0, 1);
var option=this.options.getOption$S(opt);
return option != null  && (option.getArgs$() >= 2 || option.getArgs$() == -2 ) ;
}, p$1);

Clazz.newMeth(C$, 'handleOption$org_apache_commons_cli_Option',  function (option) {
p$1.checkRequiredArgs.apply(this, []);
option=option.clone$();
p$1.updateRequiredOptions$org_apache_commons_cli_Option.apply(this, [option]);
this.cmd.addOption$org_apache_commons_cli_Option(option);
if (option.hasArg$()) {
this.currentOption=option;
} else {
this.currentOption=null;
}}, p$1);

Clazz.newMeth(C$, 'updateRequiredOptions$org_apache_commons_cli_Option',  function (option) {
if (option.isRequired$()) {
this.expectedOpts.remove$O(option.getKey$());
}if (this.options.getOptionGroup$org_apache_commons_cli_Option(option) != null ) {
var group=this.options.getOptionGroup$org_apache_commons_cli_Option(option);
if (group.isRequired$()) {
this.expectedOpts.remove$O(group);
}group.setSelected$org_apache_commons_cli_Option(option);
}}, p$1);

Clazz.newMeth(C$, 'handleConcatenatedOptions$S',  function (token) {
for (var i=1; i < token.length$(); i++) {
var ch=String.valueOf$C(token.charAt$I(i));
if (this.options.hasOption$S(ch)) {
p$1.handleOption$org_apache_commons_cli_Option.apply(this, [this.options.getOption$S(ch)]);
if (this.currentOption != null  && token.length$() != i + 1 ) {
this.currentOption.addValueForProcessing$S(token.substring$I(i + 1));
break;
}} else {
p$1.handleUnknownToken$S.apply(this, [this.stopAtNonOption && i > 1  ? token.substring$I(i) : token]);
break;
}}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:37 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
