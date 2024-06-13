(function(){var P$=Clazz.newPackage("org.apache.commons.cli"),I$=[[0,'java.util.LinkedHashMap','java.util.ArrayList','java.util.HashSet','org.apache.commons.cli.Option','java.util.Collections','org.apache.commons.cli.Util','StringBuilder']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Options", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.shortOpts=Clazz.new_($I$(1,1));
this.longOpts=Clazz.new_($I$(1,1));
this.requiredOpts=Clazz.new_($I$(2,1));
this.optionGroups=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['shortOpts','java.util.Map','+longOpts','requiredOpts','java.util.List','optionGroups','java.util.Map']]]

Clazz.newMeth(C$, 'addOptionGroup$org_apache_commons_cli_OptionGroup',  function (group) {
if (group.isRequired$()) {
this.requiredOpts.add$O(group);
}for (var option, $option = group.getOptions$().iterator$(); $option.hasNext$()&&((option=($option.next$())),1);) {
option.setRequired$Z(false);
this.addOption$org_apache_commons_cli_Option(option);
this.optionGroups.put$O$O(option.getKey$(), group);
}
return this;
});

Clazz.newMeth(C$, 'getOptionGroups$',  function () {
return Clazz.new_([this.optionGroups.values$()],$I$(3,1).c$$java_util_Collection);
});

Clazz.newMeth(C$, 'addOption$S$S',  function (opt, description) {
this.addOption$S$S$Z$S(opt, null, false, description);
return this;
});

Clazz.newMeth(C$, 'addOption$S$Z$S',  function (opt, hasArg, description) {
this.addOption$S$S$Z$S(opt, null, hasArg, description);
return this;
});

Clazz.newMeth(C$, 'addOption$S$S$Z$S',  function (opt, longOpt, hasArg, description) {
this.addOption$org_apache_commons_cli_Option(Clazz.new_($I$(4,1).c$$S$S$Z$S,[opt, longOpt, hasArg, description]));
return this;
});

Clazz.newMeth(C$, 'addRequiredOption$S$S$Z$S',  function (opt, longOpt, hasArg, description) {
var option=Clazz.new_($I$(4,1).c$$S$S$Z$S,[opt, longOpt, hasArg, description]);
option.setRequired$Z(true);
this.addOption$org_apache_commons_cli_Option(option);
return this;
});

Clazz.newMeth(C$, 'addOption$org_apache_commons_cli_Option',  function (opt) {
var key=opt.getKey$();
if (opt.hasLongOpt$()) {
this.longOpts.put$O$O(opt.getLongOpt$(), opt);
}if (opt.isRequired$()) {
if (this.requiredOpts.contains$O(key)) {
this.requiredOpts.remove$I(this.requiredOpts.indexOf$O(key));
}this.requiredOpts.add$O(key);
}this.shortOpts.put$O$O(key, opt);
return this;
});

Clazz.newMeth(C$, 'getOptions$',  function () {
return $I$(5,"unmodifiableCollection$java_util_Collection",[this.helpOptions$()]);
});

Clazz.newMeth(C$, 'helpOptions$',  function () {
return Clazz.new_([this.shortOpts.values$()],$I$(2,1).c$$java_util_Collection);
});

Clazz.newMeth(C$, 'getRequiredOptions$',  function () {
return $I$(5).unmodifiableList$java_util_List(this.requiredOpts);
});

Clazz.newMeth(C$, 'getOption$S',  function (opt) {
opt=$I$(6).stripLeadingHyphens$S(opt);
if (this.shortOpts.containsKey$O(opt)) {
return this.shortOpts.get$O(opt);
}return this.longOpts.get$O(opt);
});

Clazz.newMeth(C$, 'getMatchingOptions$S',  function (opt) {
opt=$I$(6).stripLeadingHyphens$S(opt);
var matchingOpts=Clazz.new_($I$(2,1));
if (this.longOpts.keySet$().contains$O(opt)) {
return $I$(5).singletonList$O(opt);
}for (var longOpt, $longOpt = this.longOpts.keySet$().iterator$(); $longOpt.hasNext$()&&((longOpt=($longOpt.next$())),1);) {
if (longOpt.startsWith$S(opt)) {
matchingOpts.add$O(longOpt);
}}
return matchingOpts;
});

Clazz.newMeth(C$, 'hasOption$S',  function (opt) {
opt=$I$(6).stripLeadingHyphens$S(opt);
return this.shortOpts.containsKey$O(opt) || this.longOpts.containsKey$O(opt) ;
});

Clazz.newMeth(C$, 'hasLongOption$S',  function (opt) {
opt=$I$(6).stripLeadingHyphens$S(opt);
return this.longOpts.containsKey$O(opt);
});

Clazz.newMeth(C$, 'hasShortOption$S',  function (opt) {
opt=$I$(6).stripLeadingHyphens$S(opt);
return this.shortOpts.containsKey$O(opt);
});

Clazz.newMeth(C$, 'getOptionGroup$org_apache_commons_cli_Option',  function (opt) {
return this.optionGroups.get$O(opt.getKey$());
});

Clazz.newMeth(C$, 'toString',  function () {
var buf=Clazz.new_($I$(7,1));
buf.append$S("[ Options: [ short ");
buf.append$S(this.shortOpts.toString());
buf.append$S(" ] [ long ");
buf.append$O(this.longOpts);
buf.append$S(" ]");
return buf.toString();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:38 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
