(function(){var P$=Clazz.newPackage("org.apache.commons.cli"),I$=[[0,'java.util.ArrayList','org.apache.commons.cli.Util']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GnuParser", null, 'org.apache.commons.cli.Parser');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'flatten$org_apache_commons_cli_Options$SA$Z',  function (options, $arguments, stopAtNonOption) {
var tokens=Clazz.new_($I$(1,1));
var eatTheRest=false;
for (var i=0; i < $arguments.length; i++) {
var arg=$arguments[i];
if ("--".equals$O(arg)) {
eatTheRest=true;
tokens.add$O("--");
} else if ("-".equals$O(arg)) {
tokens.add$O("-");
} else if (arg.startsWith$S("-")) {
var opt=$I$(2).stripLeadingHyphens$S(arg);
if (options.hasOption$S(opt)) {
tokens.add$O(arg);
} else {
if (opt.indexOf$I("=") != -1 && options.hasOption$S(opt.substring$I$I(0, opt.indexOf$I("="))) ) {
tokens.add$O(arg.substring$I$I(0, arg.indexOf$I("=")));
tokens.add$O(arg.substring$I(arg.indexOf$I("=") + 1));
} else if (options.hasOption$S(arg.substring$I$I(0, 2))) {
tokens.add$O(arg.substring$I$I(0, 2));
tokens.add$O(arg.substring$I(2));
} else {
eatTheRest=stopAtNonOption;
tokens.add$O(arg);
}}} else {
tokens.add$O(arg);
}if (eatTheRest) {
for (i++; i < $arguments.length; i++) {
tokens.add$O($arguments[i]);
}
}}
return tokens.toArray$OA(Clazz.array(String, [tokens.size$()]));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:37 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
