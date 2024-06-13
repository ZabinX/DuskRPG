(function(){var P$=Clazz.newPackage("org.apache.commons.cli"),p$1={},I$=[[0,'java.util.ArrayList','java.util.Arrays']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PosixParser", null, 'org.apache.commons.cli.Parser');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.tokens=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['Z',['eatTheRest'],'O',['tokens','java.util.List','currentOption','org.apache.commons.cli.Option','$options','org.apache.commons.cli.Options']]]

Clazz.newMeth(C$, 'init',  function () {
this.eatTheRest=false;
this.tokens.clear$();
}, p$1);

Clazz.newMeth(C$, 'flatten$org_apache_commons_cli_Options$SA$Z',  function (options, $arguments, stopAtNonOption) {
p$1.init.apply(this, []);
this.$options=options;
var iter=$I$(2).asList$OA($arguments).iterator$();
while (iter.hasNext$()){
var token=iter.next$();
if ("-".equals$O(token) || "--".equals$O(token) ) {
this.tokens.add$O(token);
} else if (token.startsWith$S("--")) {
var pos=token.indexOf$I("=");
var opt=pos == -1 ? token : token.substring$I$I(0, pos);
var matchingOpts=options.getMatchingOptions$S(opt);
if (matchingOpts.isEmpty$()) {
p$1.processNonOptionToken$S$Z.apply(this, [token, stopAtNonOption]);
} else if (matchingOpts.size$() > 1) {
throw Clazz.new_(Clazz.load('org.apache.commons.cli.AmbiguousOptionException').c$$S$java_util_Collection,[opt, matchingOpts]);
} else {
this.currentOption=options.getOption$S(matchingOpts.get$I(0));
this.tokens.add$O("--" + this.currentOption.getLongOpt$());
if (pos != -1) {
this.tokens.add$O(token.substring$I(pos + 1));
}}} else if (token.startsWith$S("-")) {
if (token.length$() == 2 || options.hasOption$S(token) ) {
p$1.processOptionToken$S$Z.apply(this, [token, stopAtNonOption]);
} else if (!options.getMatchingOptions$S(token).isEmpty$()) {
var matchingOpts=options.getMatchingOptions$S(token);
if (matchingOpts.size$() > 1) {
throw Clazz.new_(Clazz.load('org.apache.commons.cli.AmbiguousOptionException').c$$S$java_util_Collection,[token, matchingOpts]);
}var opt=options.getOption$S(matchingOpts.get$I(0));
p$1.processOptionToken$S$Z.apply(this, ["-" + opt.getLongOpt$(), stopAtNonOption]);
} else {
this.burstToken$S$Z(token, stopAtNonOption);
}} else {
p$1.processNonOptionToken$S$Z.apply(this, [token, stopAtNonOption]);
}p$1.gobble$java_util_Iterator.apply(this, [iter]);
}
return this.tokens.toArray$OA(Clazz.array(String, [this.tokens.size$()]));
});

Clazz.newMeth(C$, 'gobble$java_util_Iterator',  function (iter) {
if (this.eatTheRest) {
while (iter.hasNext$()){
this.tokens.add$O(iter.next$());
}
}}, p$1);

Clazz.newMeth(C$, 'processNonOptionToken$S$Z',  function (value, stopAtNonOption) {
if (stopAtNonOption && (this.currentOption == null  || !this.currentOption.hasArg$() ) ) {
this.eatTheRest=true;
this.tokens.add$O("--");
}this.tokens.add$O(value);
}, p$1);

Clazz.newMeth(C$, 'processOptionToken$S$Z',  function (token, stopAtNonOption) {
if (stopAtNonOption && !this.$options.hasOption$S(token) ) {
this.eatTheRest=true;
}if (this.$options.hasOption$S(token)) {
this.currentOption=this.$options.getOption$S(token);
}this.tokens.add$O(token);
}, p$1);

Clazz.newMeth(C$, 'burstToken$S$Z',  function (token, stopAtNonOption) {
for (var i=1; i < token.length$(); i++) {
var ch=String.valueOf$C(token.charAt$I(i));
if (this.$options.hasOption$S(ch)) {
this.tokens.add$O("-" + ch);
this.currentOption=this.$options.getOption$S(ch);
if (this.currentOption.hasArg$() && token.length$() != i + 1 ) {
this.tokens.add$O(token.substring$I(i + 1));
break;
}} else if (stopAtNonOption) {
p$1.processNonOptionToken$S$Z.apply(this, [token.substring$I(i), true]);
break;
} else {
this.tokens.add$O(token);
break;
}}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:38 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
