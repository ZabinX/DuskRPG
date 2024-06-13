(function(){var P$=Clazz.newPackage("javax.swing.text"),p$1={},I$=[[0,'javax.swing.text.Utilities',['javax.swing.text.DefaultFormatter','.DefaultDocumentFilter'],['javax.swing.text.DefaultFormatter','.DefaultNavigationFilter'],['javax.swing.text.Position','.Bias'],['javax.swing.text.DefaultFormatter','.ReplaceHolder']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DefaultFormatter", function(){
Clazz.newInstance(this, arguments,0,C$);
}, ['javax.swing.JFormattedTextField','.AbstractFormatter'], 'Cloneable');
C$.$classes$=[['ReplaceHolder',8],['DefaultNavigationFilter',2],['DefaultDocumentFilter',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['allowsInvalid','overwriteMode','commitOnEdit'],'O',['valueClass','Class','navigationFilter','javax.swing.text.NavigationFilter','documentFilter','javax.swing.text.DocumentFilter','replaceHolder','javax.swing.text.DefaultFormatter.ReplaceHolder']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.overwriteMode=true;
this.allowsInvalid=true;
}, 1);

Clazz.newMeth(C$, 'install$javax_swing_JFormattedTextField',  function (ftf) {
C$.superclazz.prototype.install$javax_swing_JFormattedTextField.apply(this, [ftf]);
this.positionCursorAtInitialLocation$();
});

Clazz.newMeth(C$, 'setCommitsOnValidEdit$Z',  function (commit) {
this.commitOnEdit=commit;
});

Clazz.newMeth(C$, 'getCommitsOnValidEdit$',  function () {
return this.commitOnEdit;
});

Clazz.newMeth(C$, 'setOverwriteMode$Z',  function (overwriteMode) {
this.overwriteMode=overwriteMode;
});

Clazz.newMeth(C$, 'getOverwriteMode$',  function () {
return this.overwriteMode;
});

Clazz.newMeth(C$, 'setAllowsInvalid$Z',  function (allowsInvalid) {
this.allowsInvalid=allowsInvalid;
});

Clazz.newMeth(C$, 'getAllowsInvalid$',  function () {
return this.allowsInvalid;
});

Clazz.newMeth(C$, 'setValueClass$Class',  function (valueClass) {
this.valueClass=valueClass;
});

Clazz.newMeth(C$, 'getValueClass$',  function () {
return this.valueClass;
});

Clazz.newMeth(C$, 'stringToValue$S',  function (string) {
var vc=this.getValueClass$();
var ftf=this.getFormattedTextField$();
if (vc == null  && ftf != null  ) {
var value=ftf.getValue$();
if (value != null ) {
vc=value.getClass$();
}}return string;
});

Clazz.newMeth(C$, 'valueToString$O',  function (value) {
if (value == null ) {
return "";
}return value.toString();
});

Clazz.newMeth(C$, 'getDocumentFilter$',  function () {
if (this.documentFilter == null ) {
this.documentFilter=Clazz.new_($I$(2,1),[this, null]);
}return this.documentFilter;
});

Clazz.newMeth(C$, 'getNavigationFilter$',  function () {
if (this.navigationFilter == null ) {
this.navigationFilter=Clazz.new_($I$(3,1),[this, null]);
}return this.navigationFilter;
});

Clazz.newMeth(C$, 'clone$',  function () {
var formatter=C$.superclazz.prototype.clone$.apply(this, []);
formatter.navigationFilter=null;
formatter.documentFilter=null;
formatter.replaceHolder=null;
return formatter;
});

Clazz.newMeth(C$, 'positionCursorAtInitialLocation$',  function () {
var ftf=this.getFormattedTextField$();
if (ftf != null ) {
ftf.setCaretPosition$I(this.getInitialVisualPosition$());
}});

Clazz.newMeth(C$, 'getInitialVisualPosition$',  function () {
return p$1.getNextNavigatableChar$I$I.apply(this, [0, 1]);
});

Clazz.newMeth(C$, 'isNavigatable$I',  function (offset) {
return true;
});

Clazz.newMeth(C$, 'isLegalInsertText$S',  function (text) {
return true;
});

Clazz.newMeth(C$, 'getNextNavigatableChar$I$I',  function (offset, direction) {
var max=this.getFormattedTextField$().getDocument$().getLength$();
while (offset >= 0 && offset < max ){
if (this.isNavigatable$I(offset)) {
return offset;
}offset+=direction;
}
return offset;
}, p$1);

Clazz.newMeth(C$, 'getReplaceString$I$I$S',  function (offset, deleteLength, replaceString) {
var string=this.getFormattedTextField$().getText$();
var result;
result=string.substring$I$I(0, offset);
if (replaceString != null ) {
result+=replaceString;
}if (offset + deleteLength < string.length$()) {
result+=string.substring$I(offset + deleteLength);
}return result;
});

Clazz.newMeth(C$, 'isValidEdit$javax_swing_text_DefaultFormatter_ReplaceHolder',  function (rh) {
if (!this.getAllowsInvalid$()) {
var newString=this.getReplaceString$I$I$S(rh.offset, rh.length, rh.text);
try {
rh.value=this.stringToValue$S(newString);
return true;
} catch (pe) {
if (Clazz.exceptionOf(pe,"java.text.ParseException")){
return false;
} else {
throw pe;
}
}
}return true;
});

Clazz.newMeth(C$, 'commitEdit$',  function () {
});

Clazz.newMeth(C$, 'updateValue$',  function () {
this.updateValue$O(null);
});

Clazz.newMeth(C$, 'updateValue$O',  function (value) {
try {
if (value == null ) {
var string=this.getFormattedTextField$().getText$();
value=this.stringToValue$S(string);
}if (this.getCommitsOnValidEdit$()) {
this.commitEdit$();
}this.setEditValid$Z(true);
} catch (pe) {
if (Clazz.exceptionOf(pe,"java.text.ParseException")){
this.setEditValid$Z(false);
} else {
throw pe;
}
}
});

Clazz.newMeth(C$, 'getNextCursorPosition$I$I',  function (offset, direction) {
var newOffset=p$1.getNextNavigatableChar$I$I.apply(this, [offset, direction]);
var max=this.getFormattedTextField$().getDocument$().getLength$();
if (!this.getAllowsInvalid$()) {
if (direction == -1 && offset == newOffset ) {
newOffset=p$1.getNextNavigatableChar$I$I.apply(this, [newOffset, 1]);
if (newOffset >= max) {
newOffset=offset;
}} else if (direction == 1 && newOffset >= max ) {
newOffset=p$1.getNextNavigatableChar$I$I.apply(this, [max - 1, -1]);
if (newOffset < max) {
++newOffset;
}}}return newOffset;
});

Clazz.newMeth(C$, 'repositionCursor$I$I',  function (offset, direction) {
this.getFormattedTextField$().getCaret$().setDot$I(this.getNextCursorPosition$I$I(offset, direction));
});

Clazz.newMeth(C$, 'getNextVisualPositionFrom$javax_swing_text_JTextComponent$I$javax_swing_text_Position_Bias$I$javax_swing_text_Position_BiasA',  function (text, pos, bias, direction, biasRet) {
var value=(text.getUI$()).getNextVisualPositionFrom$javax_swing_text_JTextComponent$I$javax_swing_text_Position_Bias$I$javax_swing_text_Position_BiasA(text, pos, bias, direction, biasRet);
if (value == -1) {
return -1;
}if (!this.getAllowsInvalid$() && (direction == 3 || direction == 7 ) ) {
var last=-1;
while (!this.isNavigatable$I(value) && value != last ){
last=value;
value=(text.getUI$()).getNextVisualPositionFrom$javax_swing_text_JTextComponent$I$javax_swing_text_Position_Bias$I$javax_swing_text_Position_BiasA(text, value, bias, direction, biasRet);
}
var max=this.getFormattedTextField$().getDocument$().getLength$();
if (last == value || value == max ) {
if (value == 0) {
biasRet[0]=$I$(4).Forward;
value=this.getInitialVisualPosition$();
}if (value >= max && max > 0 ) {
biasRet[0]=$I$(4).Forward;
value=p$1.getNextNavigatableChar$I$I.apply(this, [max - 1, -1]) + 1;
}}}return value;
});

Clazz.newMeth(C$, 'canReplace$javax_swing_text_DefaultFormatter_ReplaceHolder',  function (rh) {
return this.isValidEdit$javax_swing_text_DefaultFormatter_ReplaceHolder(rh);
});

Clazz.newMeth(C$, 'replace$javax_swing_text_DocumentFilter_FilterBypass$I$I$S$javax_swing_text_AttributeSet',  function (fb, offset, length, text, attrs) {
var rh=this.getReplaceHolder$javax_swing_text_DocumentFilter_FilterBypass$I$I$S$javax_swing_text_AttributeSet(fb, offset, length, text, attrs);
this.replace$javax_swing_text_DefaultFormatter_ReplaceHolder(rh);
});

Clazz.newMeth(C$, 'replace$javax_swing_text_DefaultFormatter_ReplaceHolder',  function (rh) {
var valid=true;
var direction=1;
if (rh.length > 0 && (rh.text == null  || rh.text.length$() == 0 )  && (this.getFormattedTextField$().getSelectionStart$() != rh.offset || rh.length > 1 ) ) {
direction=-1;
}if (this.getOverwriteMode$() && rh.text != null  ) {
rh.length=Math.min(Math.max(rh.length, rh.text.length$()), rh.fb.getDocument$().getLength$() - rh.offset);
}if ((rh.text != null  && !this.isLegalInsertText$S(rh.text) ) || !this.canReplace$javax_swing_text_DefaultFormatter_ReplaceHolder(rh) || (rh.length == 0 && (rh.text == null  || rh.text.length$() == 0 ) )  ) {
valid=false;
}if (valid) {
var cursor=rh.cursorPosition;
rh.fb.replace$I$I$S$javax_swing_text_AttributeSet(rh.offset, rh.length, rh.text, rh.attrs);
if (cursor == -1) {
cursor=rh.offset;
if (direction == 1 && rh.text != null  ) {
cursor=rh.offset + rh.text.length$();
}}this.updateValue$O(rh.value);
this.repositionCursor$I$I(cursor, direction);
return true;
} else {
this.invalidEdit$();
}return false;
});

Clazz.newMeth(C$, 'setDot$javax_swing_text_NavigationFilter_FilterBypass$I$javax_swing_text_Position_Bias',  function (fb, dot, bias) {
fb.setDot$I$javax_swing_text_Position_Bias(dot, bias);
});

Clazz.newMeth(C$, 'moveDot$javax_swing_text_NavigationFilter_FilterBypass$I$javax_swing_text_Position_Bias',  function (fb, dot, bias) {
fb.moveDot$I$javax_swing_text_Position_Bias(dot, bias);
});

Clazz.newMeth(C$, 'getReplaceHolder$javax_swing_text_DocumentFilter_FilterBypass$I$I$S$javax_swing_text_AttributeSet',  function (fb, offset, length, text, attrs) {
if (this.replaceHolder == null ) {
this.replaceHolder=Clazz.new_($I$(5,1));
}this.replaceHolder.reset$javax_swing_text_DocumentFilter_FilterBypass$I$I$S$javax_swing_text_AttributeSet(fb, offset, length, text, attrs);
return this.replaceHolder;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultFormatter, "ReplaceHolder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['offset','length','cursorPosition'],'S',['text'],'O',['fb','javax.swing.text.DocumentFilter.FilterBypass','attrs','javax.swing.text.AttributeSet','value','java.lang.Object']]]

Clazz.newMeth(C$, 'reset$javax_swing_text_DocumentFilter_FilterBypass$I$I$S$javax_swing_text_AttributeSet',  function (fb, offset, length, text, attrs) {
this.fb=fb;
this.offset=offset;
this.length=length;
this.text=text;
this.attrs=attrs;
this.value=null;
this.cursorPosition=-1;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultFormatter, "DefaultNavigationFilter", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.text.NavigationFilter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'setDot$javax_swing_text_NavigationFilter_FilterBypass$I$javax_swing_text_Position_Bias',  function (fb, dot, bias) {
var tc=this.b$['javax.swing.text.DefaultFormatter'].getFormattedTextField$.apply(this.b$['javax.swing.text.DefaultFormatter'], []);
if (tc.composedTextExists$()) {
fb.setDot$I$javax_swing_text_Position_Bias(dot, bias);
} else {
this.b$['javax.swing.text.DefaultFormatter'].setDot$javax_swing_text_NavigationFilter_FilterBypass$I$javax_swing_text_Position_Bias.apply(this.b$['javax.swing.text.DefaultFormatter'], [fb, dot, bias]);
}});

Clazz.newMeth(C$, 'moveDot$javax_swing_text_NavigationFilter_FilterBypass$I$javax_swing_text_Position_Bias',  function (fb, dot, bias) {
var tc=this.b$['javax.swing.text.DefaultFormatter'].getFormattedTextField$.apply(this.b$['javax.swing.text.DefaultFormatter'], []);
if (tc.composedTextExists$()) {
fb.moveDot$I$javax_swing_text_Position_Bias(dot, bias);
} else {
this.b$['javax.swing.text.DefaultFormatter'].moveDot$javax_swing_text_NavigationFilter_FilterBypass$I$javax_swing_text_Position_Bias.apply(this.b$['javax.swing.text.DefaultFormatter'], [fb, dot, bias]);
}});

Clazz.newMeth(C$, 'getNextVisualPositionFrom$javax_swing_text_JTextComponent$I$javax_swing_text_Position_Bias$I$javax_swing_text_Position_BiasA',  function (text, pos, bias, direction, biasRet) {
if (text.composedTextExists$()) {
return (text.getUI$()).getNextVisualPositionFrom$javax_swing_text_JTextComponent$I$javax_swing_text_Position_Bias$I$javax_swing_text_Position_BiasA(text, pos, bias, direction, biasRet);
} else {
return this.b$['javax.swing.text.DefaultFormatter'].getNextVisualPositionFrom$javax_swing_text_JTextComponent$I$javax_swing_text_Position_Bias$I$javax_swing_text_Position_BiasA.apply(this.b$['javax.swing.text.DefaultFormatter'], [text, pos, bias, direction, biasRet]);
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultFormatter, "DefaultDocumentFilter", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.text.DocumentFilter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'remove$javax_swing_text_DocumentFilter_FilterBypass$I$I',  function (fb, offset, length) {
var tc=this.b$['javax.swing.text.DefaultFormatter'].getFormattedTextField$.apply(this.b$['javax.swing.text.DefaultFormatter'], []);
if (tc.composedTextExists$()) {
fb.remove$I$I(offset, length);
} else {
this.b$['javax.swing.text.DefaultFormatter'].replace$javax_swing_text_DocumentFilter_FilterBypass$I$I$S$javax_swing_text_AttributeSet.apply(this.b$['javax.swing.text.DefaultFormatter'], [fb, offset, length, null, null]);
}});

Clazz.newMeth(C$, 'insertString$javax_swing_text_DocumentFilter_FilterBypass$I$S$javax_swing_text_AttributeSet',  function (fb, offset, string, attr) {
var tc=this.b$['javax.swing.text.DefaultFormatter'].getFormattedTextField$.apply(this.b$['javax.swing.text.DefaultFormatter'], []);
if (tc.composedTextExists$() || $I$(1).isComposedTextAttributeDefined$javax_swing_text_AttributeSet(attr) ) {
fb.insertString$I$S$javax_swing_text_AttributeSet(offset, string, attr);
} else {
this.b$['javax.swing.text.DefaultFormatter'].replace$javax_swing_text_DocumentFilter_FilterBypass$I$I$S$javax_swing_text_AttributeSet.apply(this.b$['javax.swing.text.DefaultFormatter'], [fb, offset, 0, string, attr]);
}});

Clazz.newMeth(C$, 'replace$javax_swing_text_DocumentFilter_FilterBypass$I$I$S$javax_swing_text_AttributeSet',  function (fb, offset, length, text, attr) {
var tc=this.b$['javax.swing.text.DefaultFormatter'].getFormattedTextField$.apply(this.b$['javax.swing.text.DefaultFormatter'], []);
if (tc.composedTextExists$() || $I$(1).isComposedTextAttributeDefined$javax_swing_text_AttributeSet(attr) ) {
fb.replace$I$I$S$javax_swing_text_AttributeSet(offset, length, text, attr);
} else {
this.b$['javax.swing.text.DefaultFormatter'].replace$javax_swing_text_DocumentFilter_FilterBypass$I$I$S$javax_swing_text_AttributeSet.apply(this.b$['javax.swing.text.DefaultFormatter'], [fb, offset, length, text, attr]);
}});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:17 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
