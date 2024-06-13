(function(){var P$=Clazz.newPackage("org.apache.commons.cli"),p$1={},I$=[[0,['org.apache.commons.cli.HelpFormatter','.OptionComparator'],'java.io.PrintWriter','StringBuffer','java.util.ArrayList','java.util.Collections','StringBuilder','java.io.BufferedReader','java.io.StringReader','java.util.Arrays']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "HelpFormatter", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['OptionComparator',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.defaultWidth=74;
this.defaultLeftPad=1;
this.defaultDescPad=3;
this.defaultSyntaxPrefix="usage: ";
this.defaultNewLine=System.getProperty$S("line.separator");
this.defaultOptPrefix="-";
this.defaultLongOptPrefix="--";
this.defaultArgName="arg";
this.optionComparator=Clazz.new_($I$(1,1));
this.longOptSeparator=" ";
},1);

C$.$fields$=[['I',['defaultWidth','defaultLeftPad','defaultDescPad'],'S',['defaultSyntaxPrefix','defaultNewLine','defaultOptPrefix','defaultLongOptPrefix','defaultArgName','longOptSeparator'],'O',['optionComparator','java.util.Comparator']]]

Clazz.newMeth(C$, 'setWidth$I',  function (width) {
this.defaultWidth=width;
});

Clazz.newMeth(C$, 'getWidth$',  function () {
return this.defaultWidth;
});

Clazz.newMeth(C$, 'setLeftPadding$I',  function (padding) {
this.defaultLeftPad=padding;
});

Clazz.newMeth(C$, 'getLeftPadding$',  function () {
return this.defaultLeftPad;
});

Clazz.newMeth(C$, 'setDescPadding$I',  function (padding) {
this.defaultDescPad=padding;
});

Clazz.newMeth(C$, 'getDescPadding$',  function () {
return this.defaultDescPad;
});

Clazz.newMeth(C$, 'setSyntaxPrefix$S',  function (prefix) {
this.defaultSyntaxPrefix=prefix;
});

Clazz.newMeth(C$, 'getSyntaxPrefix$',  function () {
return this.defaultSyntaxPrefix;
});

Clazz.newMeth(C$, 'setNewLine$S',  function (newline) {
this.defaultNewLine=newline;
});

Clazz.newMeth(C$, 'getNewLine$',  function () {
return this.defaultNewLine;
});

Clazz.newMeth(C$, 'setOptPrefix$S',  function (prefix) {
this.defaultOptPrefix=prefix;
});

Clazz.newMeth(C$, 'getOptPrefix$',  function () {
return this.defaultOptPrefix;
});

Clazz.newMeth(C$, 'setLongOptPrefix$S',  function (prefix) {
this.defaultLongOptPrefix=prefix;
});

Clazz.newMeth(C$, 'getLongOptPrefix$',  function () {
return this.defaultLongOptPrefix;
});

Clazz.newMeth(C$, 'setLongOptSeparator$S',  function (longOptSeparator) {
this.longOptSeparator=longOptSeparator;
});

Clazz.newMeth(C$, 'getLongOptSeparator$',  function () {
return this.longOptSeparator;
});

Clazz.newMeth(C$, 'setArgName$S',  function (name) {
this.defaultArgName=name;
});

Clazz.newMeth(C$, 'getArgName$',  function () {
return this.defaultArgName;
});

Clazz.newMeth(C$, 'getOptionComparator$',  function () {
return this.optionComparator;
});

Clazz.newMeth(C$, 'setOptionComparator$java_util_Comparator',  function (comparator) {
this.optionComparator=comparator;
});

Clazz.newMeth(C$, 'printHelp$S$org_apache_commons_cli_Options',  function (cmdLineSyntax, options) {
this.printHelp$I$S$S$org_apache_commons_cli_Options$S$Z(this.getWidth$(), cmdLineSyntax, null, options, null, false);
});

Clazz.newMeth(C$, 'printHelp$S$org_apache_commons_cli_Options$Z',  function (cmdLineSyntax, options, autoUsage) {
this.printHelp$I$S$S$org_apache_commons_cli_Options$S$Z(this.getWidth$(), cmdLineSyntax, null, options, null, autoUsage);
});

Clazz.newMeth(C$, 'printHelp$S$S$org_apache_commons_cli_Options$S',  function (cmdLineSyntax, header, options, footer) {
this.printHelp$S$S$org_apache_commons_cli_Options$S$Z(cmdLineSyntax, header, options, footer, false);
});

Clazz.newMeth(C$, 'printHelp$S$S$org_apache_commons_cli_Options$S$Z',  function (cmdLineSyntax, header, options, footer, autoUsage) {
this.printHelp$I$S$S$org_apache_commons_cli_Options$S$Z(this.getWidth$(), cmdLineSyntax, header, options, footer, autoUsage);
});

Clazz.newMeth(C$, 'printHelp$I$S$S$org_apache_commons_cli_Options$S',  function (width, cmdLineSyntax, header, options, footer) {
this.printHelp$I$S$S$org_apache_commons_cli_Options$S$Z(width, cmdLineSyntax, header, options, footer, false);
});

Clazz.newMeth(C$, 'printHelp$I$S$S$org_apache_commons_cli_Options$S$Z',  function (width, cmdLineSyntax, header, options, footer, autoUsage) {
var pw=Clazz.new_($I$(2,1).c$$java_io_OutputStream,[System.out]);
this.printHelp$java_io_PrintWriter$I$S$S$org_apache_commons_cli_Options$I$I$S$Z(pw, width, cmdLineSyntax, header, options, this.getLeftPadding$(), this.getDescPadding$(), footer, autoUsage);
pw.flush$();
});

Clazz.newMeth(C$, 'printHelp$java_io_PrintWriter$I$S$S$org_apache_commons_cli_Options$I$I$S',  function (pw, width, cmdLineSyntax, header, options, leftPad, descPad, footer) {
this.printHelp$java_io_PrintWriter$I$S$S$org_apache_commons_cli_Options$I$I$S$Z(pw, width, cmdLineSyntax, header, options, leftPad, descPad, footer, false);
});

Clazz.newMeth(C$, 'printHelp$java_io_PrintWriter$I$S$S$org_apache_commons_cli_Options$I$I$S$Z',  function (pw, width, cmdLineSyntax, header, options, leftPad, descPad, footer, autoUsage) {
if (cmdLineSyntax == null  || cmdLineSyntax.length$() == 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["cmdLineSyntax not provided"]);
}if (autoUsage) {
this.printUsage$java_io_PrintWriter$I$S$org_apache_commons_cli_Options(pw, width, cmdLineSyntax, options);
} else {
this.printUsage$java_io_PrintWriter$I$S(pw, width, cmdLineSyntax);
}if (header != null  && header.trim$().length$() > 0 ) {
this.printWrapped$java_io_PrintWriter$I$S(pw, width, header);
}this.printOptions$java_io_PrintWriter$I$org_apache_commons_cli_Options$I$I(pw, width, options, leftPad, descPad);
if (footer != null  && footer.trim$().length$() > 0 ) {
this.printWrapped$java_io_PrintWriter$I$S(pw, width, footer);
}});

Clazz.newMeth(C$, 'printUsage$java_io_PrintWriter$I$S$org_apache_commons_cli_Options',  function (pw, width, app, options) {
var buff=Clazz.new_([this.getSyntaxPrefix$()],$I$(3,1).c$$S).append$S(app).append$S(" ");
var processedGroups=Clazz.new_($I$(4,1));
var optList=Clazz.new_([options.getOptions$()],$I$(4,1).c$$java_util_Collection);
if (this.getOptionComparator$() != null ) {
$I$(5,"sort$java_util_List$java_util_Comparator",[optList, this.getOptionComparator$()]);
}for (var it=optList.iterator$(); it.hasNext$(); ) {
var option=it.next$();
var group=options.getOptionGroup$org_apache_commons_cli_Option(option);
if (group != null ) {
if (!processedGroups.contains$O(group)) {
processedGroups.add$O(group);
p$1.appendOptionGroup$StringBuffer$org_apache_commons_cli_OptionGroup.apply(this, [buff, group]);
}} else {
p$1.appendOption$StringBuffer$org_apache_commons_cli_Option$Z.apply(this, [buff, option, option.isRequired$()]);
}if (it.hasNext$()) {
buff.append$S(" ");
}}
this.printWrapped$java_io_PrintWriter$I$I$S(pw, width, buff.toString().indexOf$I(" ") + 1, buff.toString());
});

Clazz.newMeth(C$, 'appendOptionGroup$StringBuffer$org_apache_commons_cli_OptionGroup',  function (buff, group) {
if (!group.isRequired$()) {
buff.append$S("[");
}var optList=Clazz.new_([group.getOptions$()],$I$(4,1).c$$java_util_Collection);
if (this.getOptionComparator$() != null ) {
$I$(5,"sort$java_util_List$java_util_Comparator",[optList, this.getOptionComparator$()]);
}for (var it=optList.iterator$(); it.hasNext$(); ) {
p$1.appendOption$StringBuffer$org_apache_commons_cli_Option$Z.apply(this, [buff, it.next$(), true]);
if (it.hasNext$()) {
buff.append$S(" | ");
}}
if (!group.isRequired$()) {
buff.append$S("]");
}}, p$1);

Clazz.newMeth(C$, 'appendOption$StringBuffer$org_apache_commons_cli_Option$Z',  function (buff, option, required) {
if (!required) {
buff.append$S("[");
}if (option.getOpt$() != null ) {
buff.append$S("-").append$S(option.getOpt$());
} else {
buff.append$S("--").append$S(option.getLongOpt$());
}if (option.hasArg$() && (option.getArgName$() == null  || option.getArgName$().length$() != 0 ) ) {
buff.append$S(option.getOpt$() == null  ? this.longOptSeparator : " ");
buff.append$S("<").append$S(option.getArgName$() != null  ? option.getArgName$() : this.getArgName$()).append$S(">");
}if (!required) {
buff.append$S("]");
}}, p$1);

Clazz.newMeth(C$, 'printUsage$java_io_PrintWriter$I$S',  function (pw, width, cmdLineSyntax) {
var argPos=cmdLineSyntax.indexOf$I(" ") + 1;
this.printWrapped$java_io_PrintWriter$I$I$S(pw, width, this.getSyntaxPrefix$().length$() + argPos, this.getSyntaxPrefix$() + cmdLineSyntax);
});

Clazz.newMeth(C$, 'printOptions$java_io_PrintWriter$I$org_apache_commons_cli_Options$I$I',  function (pw, width, options, leftPad, descPad) {
var sb=Clazz.new_($I$(3,1));
this.renderOptions$StringBuffer$I$org_apache_commons_cli_Options$I$I(sb, width, options, leftPad, descPad);
pw.println$S(sb.toString());
});

Clazz.newMeth(C$, 'printWrapped$java_io_PrintWriter$I$S',  function (pw, width, text) {
this.printWrapped$java_io_PrintWriter$I$I$S(pw, width, 0, text);
});

Clazz.newMeth(C$, 'printWrapped$java_io_PrintWriter$I$I$S',  function (pw, width, nextLineTabStop, text) {
var sb=Clazz.new_([text.length$()],$I$(3,1).c$$I);
p$1.renderWrappedTextBlock$StringBuffer$I$I$S.apply(this, [sb, width, nextLineTabStop, text]);
pw.println$S(sb.toString());
});

Clazz.newMeth(C$, 'renderOptions$StringBuffer$I$org_apache_commons_cli_Options$I$I',  function (sb, width, options, leftPad, descPad) {
var lpad=this.createPadding$I(leftPad);
var dpad=this.createPadding$I(descPad);
var max=0;
var prefixList=Clazz.new_($I$(4,1));
var optList=options.helpOptions$();
if (this.getOptionComparator$() != null ) {
$I$(5,"sort$java_util_List$java_util_Comparator",[optList, this.getOptionComparator$()]);
}for (var option, $option = optList.iterator$(); $option.hasNext$()&&((option=($option.next$())),1);) {
var optBuf=Clazz.new_($I$(3,1));
if (option.getOpt$() == null ) {
optBuf.append$S(lpad).append$S("   ").append$S(this.getLongOptPrefix$()).append$S(option.getLongOpt$());
} else {
optBuf.append$S(lpad).append$S(this.getOptPrefix$()).append$S(option.getOpt$());
if (option.hasLongOpt$()) {
optBuf.append$C(",").append$S(this.getLongOptPrefix$()).append$S(option.getLongOpt$());
}}if (option.hasArg$()) {
var argName=option.getArgName$();
if (argName != null  && argName.length$() == 0 ) {
optBuf.append$C(" ");
} else {
optBuf.append$S(option.hasLongOpt$() ? this.longOptSeparator : " ");
optBuf.append$S("<").append$S(argName != null  ? option.getArgName$() : this.getArgName$()).append$S(">");
}}prefixList.add$O(optBuf);
max=optBuf.length$() > max ? optBuf.length$() : max;
}
var x=0;
for (var it=optList.iterator$(); it.hasNext$(); ) {
var option=it.next$();
var optBuf=Clazz.new_([prefixList.get$I(x++).toString()],$I$(6,1).c$$S);
if (optBuf.length$() < max) {
optBuf.append$S(this.createPadding$I(max - optBuf.length$()));
}optBuf.append$S(dpad);
var nextLineTabStop=max + descPad;
if (option.getDescription$() != null ) {
optBuf.append$S(option.getDescription$());
}this.renderWrappedText$StringBuffer$I$I$S(sb, width, nextLineTabStop, optBuf.toString());
if (it.hasNext$()) {
sb.append$S(this.getNewLine$());
}}
return sb;
});

Clazz.newMeth(C$, 'renderWrappedText$StringBuffer$I$I$S',  function (sb, width, nextLineTabStop, text) {
var pos=this.findWrapPos$S$I$I(text, width, 0);
if (pos == -1) {
sb.append$S(this.rtrim$S(text));
return sb;
}sb.append$S(this.rtrim$S(text.substring$I$I(0, pos))).append$S(this.getNewLine$());
if (nextLineTabStop >= width) {
nextLineTabStop=1;
}var padding=this.createPadding$I(nextLineTabStop);
while (true){
text=padding + text.substring$I(pos).trim$();
pos=this.findWrapPos$S$I$I(text, width, 0);
if (pos == -1) {
sb.append$S(text);
return sb;
}if (text.length$() > width && pos == nextLineTabStop - 1 ) {
pos=width;
}sb.append$S(this.rtrim$S(text.substring$I$I(0, pos))).append$S(this.getNewLine$());
}
});

Clazz.newMeth(C$, 'renderWrappedTextBlock$StringBuffer$I$I$S',  function (sb, width, nextLineTabStop, text) {
try {
var $in=Clazz.new_([Clazz.new_($I$(8,1).c$$S,[text])],$I$(7,1).c$$java_io_Reader);
var line;
var firstLine=true;
while ((line=$in.readLine$()) != null ){
if (!firstLine) {
sb.append$S(this.getNewLine$());
} else {
firstLine=false;
}this.renderWrappedText$StringBuffer$I$I$S(sb, width, nextLineTabStop, line);
}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
return sb;
}, p$1);

Clazz.newMeth(C$, 'findWrapPos$S$I$I',  function (text, width, startPos) {
var pos=text.indexOf$I$I("\n", startPos);
if (pos != -1 && pos <= width ) {
return pos + 1;
}pos=text.indexOf$I$I("\t", startPos);
if (pos != -1 && pos <= width ) {
return pos + 1;
}if (startPos + width >= text.length$()) {
return -1;
}for (pos=startPos + width; pos >= startPos; --pos) {
var c=text.charAt$I(pos);
if (c == " " || c == "\n"  || c == "\r" ) {
break;
}}
if (pos > startPos) {
return pos;
}pos=startPos + width;
return pos == text.length$() ? -1 : pos;
});

Clazz.newMeth(C$, 'createPadding$I',  function (len) {
var padding=Clazz.array(Character.TYPE, [len]);
$I$(9).fill$CA$C(padding, " ");
return  String.instantialize(padding);
});

Clazz.newMeth(C$, 'rtrim$S',  function (s) {
if (s == null  || s.length$() == 0 ) {
return s;
}var pos=s.length$();
while (pos > 0 && Character.isWhitespace$C(s.charAt$I(pos - 1)) ){
--pos;
}
return s.substring$I$I(0, pos);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.HelpFormatter, "OptionComparator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, ['java.util.Comparator', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['compare$org_apache_commons_cli_Option$org_apache_commons_cli_Option','compare$O$O'],  function (opt1, opt2) {
return opt1.getKey$().compareToIgnoreCase$S(opt2.getKey$());
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:38 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
