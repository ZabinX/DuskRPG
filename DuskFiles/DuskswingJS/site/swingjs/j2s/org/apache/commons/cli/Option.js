(function(){var P$=Clazz.newPackage("org.apache.commons.cli"),p$1={},I$=[[0,'org.apache.commons.cli.OptionValidator','org.apache.commons.cli.Option','java.util.ArrayList','StringBuilder',['org.apache.commons.cli.Option','.Builder']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Option", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['Cloneable', 'java.io.Serializable']);
C$.$classes$=[['Builder',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.numberOfArgs=-1;
this.type=Clazz.getClass(String);
this.values=Clazz.new_($I$(3,1));
},1);

C$.$fields$=[['Z',['required','optionalArg'],'C',['valuesep'],'I',['numberOfArgs'],'S',['opt','longOpt','argName','description'],'O',['type','Class','values','java.util.List']]]

Clazz.newMeth(C$, 'c$$org_apache_commons_cli_Option_Builder',  function (builder) {
;C$.$init$.apply(this);
this.argName=builder.argName;
this.description=builder.description;
this.longOpt=builder.longOpt;
this.numberOfArgs=builder.numberOfArgs;
this.opt=builder.opt;
this.optionalArg=builder.optionalArg;
this.required=builder.required;
this.type=builder.type;
this.valuesep=builder.valuesep;
}, 1);

Clazz.newMeth(C$, 'c$$S$S',  function (opt, description) {
C$.c$$S$S$Z$S.apply(this, [opt, null, false, description]);
}, 1);

Clazz.newMeth(C$, 'c$$S$Z$S',  function (opt, hasArg, description) {
C$.c$$S$S$Z$S.apply(this, [opt, null, hasArg, description]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$Z$S',  function (opt, longOpt, hasArg, description) {
;C$.$init$.apply(this);
$I$(1).validateOption$S(opt);
this.opt=opt;
this.longOpt=longOpt;
if (hasArg) {
this.numberOfArgs=1;
}this.description=description;
}, 1);

Clazz.newMeth(C$, 'getId$',  function () {
return this.getKey$().charAt$I(0).$c();
});

Clazz.newMeth(C$, 'getKey$',  function () {
return (this.opt == null ) ? this.longOpt : this.opt;
});

Clazz.newMeth(C$, 'getOpt$',  function () {
return this.opt;
});

Clazz.newMeth(C$, 'getType$',  function () {
return this.type;
});

Clazz.newMeth(C$, 'setType$O',  function (type) {
this.setType$Class(type);
});

Clazz.newMeth(C$, 'setType$Class',  function (type) {
this.type=type;
});

Clazz.newMeth(C$, 'getLongOpt$',  function () {
return this.longOpt;
});

Clazz.newMeth(C$, 'setLongOpt$S',  function (longOpt) {
this.longOpt=longOpt;
});

Clazz.newMeth(C$, 'setOptionalArg$Z',  function (optionalArg) {
this.optionalArg=optionalArg;
});

Clazz.newMeth(C$, 'hasOptionalArg$',  function () {
return this.optionalArg;
});

Clazz.newMeth(C$, 'hasLongOpt$',  function () {
return this.longOpt != null ;
});

Clazz.newMeth(C$, 'hasArg$',  function () {
return this.numberOfArgs > 0 || this.numberOfArgs == -2 ;
});

Clazz.newMeth(C$, 'getDescription$',  function () {
return this.description;
});

Clazz.newMeth(C$, 'setDescription$S',  function (description) {
this.description=description;
});

Clazz.newMeth(C$, 'isRequired$',  function () {
return this.required;
});

Clazz.newMeth(C$, 'setRequired$Z',  function (required) {
this.required=required;
});

Clazz.newMeth(C$, 'setArgName$S',  function (argName) {
this.argName=argName;
});

Clazz.newMeth(C$, 'getArgName$',  function () {
return this.argName;
});

Clazz.newMeth(C$, 'hasArgName$',  function () {
return this.argName != null  && this.argName.length$() > 0 ;
});

Clazz.newMeth(C$, 'hasArgs$',  function () {
return this.numberOfArgs > 1 || this.numberOfArgs == -2 ;
});

Clazz.newMeth(C$, 'setArgs$I',  function (num) {
this.numberOfArgs=num;
});

Clazz.newMeth(C$, 'setValueSeparator$C',  function (sep) {
this.valuesep=sep;
});

Clazz.newMeth(C$, 'getValueSeparator$',  function () {
return this.valuesep;
});

Clazz.newMeth(C$, 'hasValueSeparator$',  function () {
return this.valuesep.$c() > 0 ;
});

Clazz.newMeth(C$, 'getArgs$',  function () {
return this.numberOfArgs;
});

Clazz.newMeth(C$, 'addValueForProcessing$S',  function (value) {
if (this.numberOfArgs == -1) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["NO_ARGS_ALLOWED"]);
}p$1.processValue$S.apply(this, [value]);
});

Clazz.newMeth(C$, 'processValue$S',  function (value) {
if (this.hasValueSeparator$()) {
var sep=this.getValueSeparator$();
var index=value.indexOf$I(sep);
while (index != -1){
if (this.values.size$() == this.numberOfArgs - 1) {
break;
}p$1.add$S.apply(this, [value.substring$I$I(0, index)]);
value=value.substring$I(index + 1);
index=value.indexOf$I(sep);
}
}p$1.add$S.apply(this, [value]);
}, p$1);

Clazz.newMeth(C$, 'add$S',  function (value) {
if (!this.acceptsArg$()) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Cannot add value, list full."]);
}this.values.add$O(value);
}, p$1);

Clazz.newMeth(C$, 'getValue$',  function () {
return p$1.hasNoValues.apply(this, []) ? null : this.values.get$I(0);
});

Clazz.newMeth(C$, 'getValue$I',  function (index) {
return p$1.hasNoValues.apply(this, []) ? null : this.values.get$I(index);
});

Clazz.newMeth(C$, 'getValue$S',  function (defaultValue) {
var value=this.getValue$();
return (value != null ) ? value : defaultValue;
});

Clazz.newMeth(C$, 'getValues$',  function () {
return p$1.hasNoValues.apply(this, []) ? null : this.values.toArray$OA(Clazz.array(String, [this.values.size$()]));
});

Clazz.newMeth(C$, 'getValuesList$',  function () {
return this.values;
});

Clazz.newMeth(C$, 'toString',  function () {
var buf=Clazz.new_($I$(4,1)).append$S("[ option: ");
buf.append$S(this.opt);
if (this.longOpt != null ) {
buf.append$S(" ").append$S(this.longOpt);
}buf.append$S(" ");
if (this.hasArgs$()) {
buf.append$S("[ARG...]");
} else if (this.hasArg$()) {
buf.append$S(" [ARG]");
}buf.append$S(" :: ").append$S(this.description);
if (this.type != null ) {
buf.append$S(" :: ").append$O(this.type);
}buf.append$S(" ]");
return buf.toString();
});

Clazz.newMeth(C$, 'hasNoValues',  function () {
return this.values.isEmpty$();
}, p$1);

Clazz.newMeth(C$, 'equals$O',  function (o) {
if (this === o ) {
return true;
}if (o == null  || this.getClass$() !== o.getClass$()  ) {
return false;
}var option=o;
if (this.opt != null  ? !this.opt.equals$O(option.opt) : option.opt != null ) {
return false;
}if (this.longOpt != null  ? !this.longOpt.equals$O(option.longOpt) : option.longOpt != null ) {
return false;
}return true;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
var result;
result=this.opt != null  ? this.opt.hashCode$() : 0;
result=31 * result + (this.longOpt != null  ? this.longOpt.hashCode$() : 0);
return result;
});

Clazz.newMeth(C$, 'clone$',  function () {
try {
var option=Clazz.clone(this);
option.values=Clazz.new_($I$(3,1).c$$java_util_Collection,[this.values]);
return option;
} catch (cnse) {
if (Clazz.exceptionOf(cnse,"CloneNotSupportedException")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["A CloneNotSupportedException was thrown: " + cnse.getMessage$()]);
} else {
throw cnse;
}
}
});

Clazz.newMeth(C$, 'clearValues$',  function () {
this.values.clear$();
});

Clazz.newMeth(C$, 'addValue$S',  function (value) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["The addValue method is not intended for client use. Subclasses should use the addValueForProcessing method instead. "]);
});

Clazz.newMeth(C$, 'acceptsArg$',  function () {
return (this.hasArg$() || this.hasArgs$() || this.hasOptionalArg$()  ) && (this.numberOfArgs <= 0 || this.values.size$() < this.numberOfArgs ) ;
});

Clazz.newMeth(C$, 'requiresArg$',  function () {
if (this.optionalArg) {
return false;
}if (this.numberOfArgs == -2) {
return this.values.isEmpty$();
}return this.acceptsArg$();
});

Clazz.newMeth(C$, 'builder$',  function () {
return C$.builder$S(null);
}, 1);

Clazz.newMeth(C$, 'builder$S',  function (opt) {
return Clazz.new_($I$(5,1).c$$S,[opt]);
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.Option, "Builder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.numberOfArgs=-1;
this.type=Clazz.getClass(String);
},1);

C$.$fields$=[['Z',['required','optionalArg'],'C',['valuesep'],'I',['numberOfArgs'],'S',['opt','description','longOpt','argName'],'O',['type','Class']]]

Clazz.newMeth(C$, 'c$$S',  function (opt) {
;C$.$init$.apply(this);
$I$(1).validateOption$S(opt);
this.opt=opt;
}, 1);

Clazz.newMeth(C$, 'argName$S',  function (argName) {
this.argName=argName;
return this;
});

Clazz.newMeth(C$, 'desc$S',  function (description) {
this.description=description;
return this;
});

Clazz.newMeth(C$, 'longOpt$S',  function (longOpt) {
this.longOpt=longOpt;
return this;
});

Clazz.newMeth(C$, 'numberOfArgs$I',  function (numberOfArgs) {
this.numberOfArgs=numberOfArgs;
return this;
});

Clazz.newMeth(C$, 'optionalArg$Z',  function (isOptional) {
this.optionalArg=isOptional;
return this;
});

Clazz.newMeth(C$, 'required$',  function () {
return this.required$Z(true);
});

Clazz.newMeth(C$, 'required$Z',  function (required) {
this.required=required;
return this;
});

Clazz.newMeth(C$, 'type$Class',  function (type) {
this.type=type;
return this;
});

Clazz.newMeth(C$, 'valueSeparator$',  function () {
return this.valueSeparator$C("=");
});

Clazz.newMeth(C$, 'valueSeparator$C',  function (sep) {
this.valuesep=sep;
return this;
});

Clazz.newMeth(C$, 'hasArg$',  function () {
return this.hasArg$Z(true);
});

Clazz.newMeth(C$, 'hasArg$Z',  function (hasArg) {
this.numberOfArgs=hasArg ? 1 : -1;
return this;
});

Clazz.newMeth(C$, 'hasArgs$',  function () {
this.numberOfArgs=-2;
return this;
});

Clazz.newMeth(C$, 'build$',  function () {
if (this.opt == null  && this.longOpt == null  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Either opt or longOpt must be specified"]);
}return Clazz.new_($I$(2,1).c$$org_apache_commons_cli_Option_Builder,[this]);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:38 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
