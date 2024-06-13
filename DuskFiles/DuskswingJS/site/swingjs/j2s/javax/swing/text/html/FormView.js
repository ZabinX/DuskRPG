(function(){var P$=Clazz.newPackage("javax.swing.text.html"),p$1={},I$=[[0,'javax.swing.JFileChooser','javax.swing.text.StyleConstants',['javax.swing.text.html.HTML','.Tag'],'javax.swing.JList','javax.swing.text.html.HTML',['javax.swing.text.html.HTML','.Attribute'],'javax.swing.JScrollPane','javax.swing.JComboBox','javax.swing.JTextArea','javax.swing.UIManager','javax.swing.JButton','java.net.URL','javax.swing.ImageIcon',['javax.swing.text.html.FormView','.MouseEventListener'],'javax.swing.JCheckBox','javax.swing.JRadioButton','javax.swing.JTextField','javax.swing.JPasswordField','javax.swing.Box',['javax.swing.text.html.FormView','.BrowseFileAction'],'StringBuilder',['javax.swing.text.html.FormSubmitEvent','.MethodType'],'javax.swing.text.html.FormSubmitEvent',['javax.swing.event.HyperlinkEvent','.EventType'],'javax.swing.SwingUtilities','java.net.URLEncoder','javax.swing.text.ElementIterator','javax.swing.text.html.HTMLDocument']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FormView", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.text.ComponentView', 'java.awt.event.ActionListener');
C$.$classes$=[['MouseEventListener',4],['BrowseFileAction',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['H',['maxIsPreferred']]
,['S',['SUBMIT','RESET']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_Element',  function (elem) {
;C$.superclazz.c$$javax_swing_text_Element.apply(this,[elem]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createComponent$',  function () {
var attr=this.getElement$().getAttributes$();
var t=attr.getAttribute$O($I$(2).NameAttribute);
var c=null;
var model=attr.getAttribute$O($I$(2).ModelAttribute);
p$1.removeStaleListenerForModel$O.apply(this, [model]);
if (t === $I$(3).INPUT ) {
c=p$1.createInputComponent$javax_swing_text_AttributeSet$O.apply(this, [attr, model]);
} else if (t === $I$(3).SELECT ) {
if (Clazz.instanceOf(model, "javax.swing.text.html.OptionListModel")) {
var list=Clazz.new_($I$(4,1).c$$javax_swing_ListModel,[model]);
var size=$I$(5,"getIntegerAttributeValue$javax_swing_text_AttributeSet$javax_swing_text_html_HTML_Attribute$I",[attr, $I$(6).SIZE, 1]);
list.setVisibleRowCount$I(size);
list.setSelectionModel$javax_swing_ListSelectionModel(model);
c=Clazz.new_($I$(7,1).c$$java_awt_Component,[list]);
} else {
c=Clazz.new_($I$(8,1).c$$javax_swing_ComboBoxModel,[model]);
this.maxIsPreferred=($s$[0] = 3, $s$[0]);
}} else if (t === $I$(3).TEXTAREA ) {
var area=Clazz.new_($I$(9,1).c$$javax_swing_text_Document,[model]);
var rows=$I$(5,"getIntegerAttributeValue$javax_swing_text_AttributeSet$javax_swing_text_html_HTML_Attribute$I",[attr, $I$(6).ROWS, 1]);
area.setRows$I(rows);
var cols=$I$(5,"getIntegerAttributeValue$javax_swing_text_AttributeSet$javax_swing_text_html_HTML_Attribute$I",[attr, $I$(6).COLS, 20]);
this.maxIsPreferred=($s$[0] = 3, $s$[0]);
area.setColumns$I(cols);
c=Clazz.new_($I$(7,1).c$$java_awt_Component$I$I,[area, 22, 32]);
}if (c != null ) {
c.setAlignmentY$F(1.0);
}return c;
});

Clazz.newMeth(C$, 'createInputComponent$javax_swing_text_AttributeSet$O',  function (attr, model) {
var c=null;
var type=attr.getAttribute$O($I$(6).TYPE);
if (type.equals$O("submit") || type.equals$O("reset") ) {
var value=attr.getAttribute$O($I$(6).VALUE);
if (value == null ) {
if (type.equals$O("submit")) {
value=$I$(10).getString$O("FormView.submitButtonText");
} else {
value=$I$(10).getString$O("FormView.resetButtonText");
}}var button=Clazz.new_($I$(11,1).c$$S,[value]);
if (model != null ) {
button.setModel$javax_swing_ButtonModel(model);
button.addActionListener$java_awt_event_ActionListener(this);
}c=button;
this.maxIsPreferred=($s$[0] = 3, $s$[0]);
} else if (type.equals$O("image")) {
var srcAtt=attr.getAttribute$O($I$(6).SRC);
var button;
try {
var base=(this.getElement$().getDocument$()).getBase$();
var srcURL=Clazz.new_($I$(12,1).c$$java_net_URL$S,[base, srcAtt]);
var icon=Clazz.new_($I$(13,1).c$$java_net_URL,[srcURL]);
button=Clazz.new_($I$(11,1).c$$javax_swing_Icon,[icon]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
button=Clazz.new_($I$(11,1).c$$S,[srcAtt]);
} else {
throw e;
}
}
if (model != null ) {
button.setModel$javax_swing_ButtonModel(model);
button.addMouseListener$java_awt_event_MouseListener(Clazz.new_($I$(14,1),[this, null]));
}c=button;
this.maxIsPreferred=($s$[0] = 3, $s$[0]);
} else if (type.equals$O("checkbox")) {
c=Clazz.new_($I$(15,1));
if (model != null ) {
(c).setModel$javax_swing_ButtonModel(model);
}this.maxIsPreferred=($s$[0] = 3, $s$[0]);
} else if (type.equals$O("radio")) {
c=Clazz.new_($I$(16,1));
if (model != null ) {
(c).setModel$javax_swing_ButtonModel(model);
}this.maxIsPreferred=($s$[0] = 3, $s$[0]);
} else if (type.equals$O("text")) {
var size=$I$(5,"getIntegerAttributeValue$javax_swing_text_AttributeSet$javax_swing_text_html_HTML_Attribute$I",[attr, $I$(6).SIZE, -1]);
var field;
if (size > 0) {
field=Clazz.new_($I$(17,1));
field.setColumns$I(size);
} else {
field=Clazz.new_($I$(17,1));
field.setColumns$I(20);
}c=field;
if (model != null ) {
field.setDocument$javax_swing_text_Document(model);
}field.addActionListener$java_awt_event_ActionListener(this);
this.maxIsPreferred=($s$[0] = 3, $s$[0]);
} else if (type.equals$O("password")) {
var field=Clazz.new_($I$(18,1));
c=field;
if (model != null ) {
field.setDocument$javax_swing_text_Document(model);
}var size=$I$(5,"getIntegerAttributeValue$javax_swing_text_AttributeSet$javax_swing_text_html_HTML_Attribute$I",[attr, $I$(6).SIZE, -1]);
field.setColumns$I((size > 0) ? size : 20);
field.addActionListener$java_awt_event_ActionListener(this);
this.maxIsPreferred=($s$[0] = 3, $s$[0]);
} else if (type.equals$O("file")) {
var field=Clazz.new_($I$(17,1));
if (model != null ) {
field.setDocument$javax_swing_text_Document(model);
}var size=$I$(5,"getIntegerAttributeValue$javax_swing_text_AttributeSet$javax_swing_text_html_HTML_Attribute$I",[attr, $I$(6).SIZE, -1]);
field.setColumns$I((size > 0) ? size : 20);
var browseButton=Clazz.new_([$I$(10).getString$O("FormView.browseFileButtonText")],$I$(11,1).c$$S);
var box=$I$(19).createHorizontalBox$();
box.add$java_awt_Component(field);
box.add$java_awt_Component($I$(19).createHorizontalStrut$I(5));
box.add$java_awt_Component(browseButton);
browseButton.addActionListener$java_awt_event_ActionListener(Clazz.new_($I$(20,1).c$$javax_swing_text_AttributeSet$javax_swing_text_Document,[this, null, attr, model]));
c=box;
this.maxIsPreferred=($s$[0] = 3, $s$[0]);
}return c;
}, p$1);

Clazz.newMeth(C$, 'removeStaleListenerForModel$O',  function (model) {
if (Clazz.instanceOf(model, "javax.swing.DefaultButtonModel")) {
var buttonModel=model;
var listenerClass="javax.swing.AbstractButton$Handler";
for (var listener, $listener = 0, $$listener = buttonModel.getActionListeners$(); $listener<$$listener.length&&((listener=($$listener[$listener])),1);$listener++) {
if (listenerClass.equals$O(listener.getClass$().getName$())) {
buttonModel.removeActionListener$java_awt_event_ActionListener(listener);
}}
for (var listener, $listener = 0, $$listener = buttonModel.getChangeListeners$(); $listener<$$listener.length&&((listener=($$listener[$listener])),1);$listener++) {
if (listenerClass.equals$O(listener.getClass$().getName$())) {
buttonModel.removeChangeListener$javax_swing_event_ChangeListener(listener);
}}
for (var listener, $listener = 0, $$listener = buttonModel.getItemListeners$(); $listener<$$listener.length&&((listener=($$listener[$listener])),1);$listener++) {
if (listenerClass.equals$O(listener.getClass$().getName$())) {
buttonModel.removeItemListener$java_awt_event_ItemListener(listener);
}}
} else if (Clazz.instanceOf(model, "javax.swing.AbstractListModel")) {
var listModel=model;
var listenerClass1="javax.swing.plaf.basic.BasicListUI$Handler";
var listenerClass2="javax.swing.plaf.basic.BasicComboBoxUI$Handler";
for (var listener, $listener = 0, $$listener = listModel.getListDataListeners$(); $listener<$$listener.length&&((listener=($$listener[$listener])),1);$listener++) {
if (listenerClass1.equals$O(listener.getClass$().getName$()) || listenerClass2.equals$O(listener.getClass$().getName$()) ) {
listModel.removeListDataListener$javax_swing_event_ListDataListener(listener);
}}
} else if (Clazz.instanceOf(model, "javax.swing.text.AbstractDocument")) {
var listenerClass1="javax.swing.plaf.basic.BasicTextUI$UpdateHandler";
var listenerClass2="javax.swing.text.DefaultCaret$Handler";
var docModel=model;
for (var listener, $listener = 0, $$listener = docModel.getDocumentListeners$(); $listener<$$listener.length&&((listener=($$listener[$listener])),1);$listener++) {
if (listenerClass1.equals$O(listener.getClass$().getName$()) || listenerClass2.equals$O(listener.getClass$().getName$()) ) {
docModel.removeDocumentListener$javax_swing_event_DocumentListener(listener);
}}
}}, p$1);

Clazz.newMeth(C$, 'getMaximumSpan$I',  function (axis) {
switch (axis) {
case 0:
if ((this.maxIsPreferred & 1) == 1) {
C$.superclazz.prototype.getMaximumSpan$I.apply(this, [axis]);
return this.getPreferredSpan$I(axis);
}return C$.superclazz.prototype.getMaximumSpan$I.apply(this, [axis]);
case 1:
if ((this.maxIsPreferred & 2) == 2) {
C$.superclazz.prototype.getMaximumSpan$I.apply(this, [axis]);
return this.getPreferredSpan$I(axis);
}return C$.superclazz.prototype.getMaximumSpan$I.apply(this, [axis]);
default:
break;
}
return C$.superclazz.prototype.getMaximumSpan$I.apply(this, [axis]);
});

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (evt) {
var element=this.getElement$();
var dataBuffer=Clazz.new_($I$(21,1));
var doc=this.getDocument$();
var attr=element.getAttributes$();
var type=attr.getAttribute$O($I$(6).TYPE);
if (type.equals$O("submit")) {
p$1.getFormData$StringBuilder.apply(this, [dataBuffer]);
this.submitData$S(dataBuffer.toString());
} else if (type.equals$O("reset")) {
this.resetForm$();
} else if (type.equals$O("text") || type.equals$O("password") ) {
if (this.isLastTextOrPasswordField$()) {
p$1.getFormData$StringBuilder.apply(this, [dataBuffer]);
this.submitData$S(dataBuffer.toString());
} else {
this.getComponent$().transferFocus$();
}}});

Clazz.newMeth(C$, 'submitData$S',  function (data) {
var form=p$1.getFormElement.apply(this, []);
var attrs=form.getAttributes$();
var doc=form.getDocument$();
var base=doc.getBase$();
var target=attrs.getAttribute$O($I$(6).TARGET);
if (target == null ) {
target="_self";
}var method=attrs.getAttribute$O($I$(6).METHOD);
if (method == null ) {
method="GET";
}method=method.toLowerCase$();
var isPostMethod=method.equals$O("post");
if (isPostMethod) {
p$1.storePostData$javax_swing_text_html_HTMLDocument$S$S.apply(this, [doc, target, data]);
}var action=attrs.getAttribute$O($I$(6).ACTION);
var actionURL;
try {
actionURL=(action == null ) ? Clazz.new_([base.getProtocol$(), base.getHost$(), base.getPort$(), base.getFile$()],$I$(12,1).c$$S$S$I$S) : Clazz.new_($I$(12,1).c$$java_net_URL$S,[base, action]);
if (!isPostMethod) {
var query=data.toString();
actionURL=Clazz.new_($I$(12,1).c$$S,[actionURL + "?" + query ]);
}} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
actionURL=null;
} else {
throw e;
}
}
var c=this.getContainer$();
var kit=c.getEditorKit$();
var formEvent=null;
if (!kit.isAutoFormSubmission$() || doc.isFrameDocument$() ) {
var methodType=isPostMethod ? $I$(22).POST : $I$(22).GET;
formEvent=Clazz.new_([this, $I$(24).ACTIVATED, actionURL, form, target, methodType, data],$I$(23,1).c$$O$javax_swing_event_HyperlinkEvent_EventType$java_net_URL$javax_swing_text_Element$S$javax_swing_text_html_FormSubmitEvent_MethodType$S);
}var fse=formEvent;
var url=actionURL;
$I$(25,"invokeLater$Runnable",[((P$.FormView$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "FormView$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
if (this.$finals$.fse != null ) {
this.$finals$.c.fireHyperlinkUpdate$javax_swing_event_HyperlinkEvent(this.$finals$.fse);
} else {
try {
this.$finals$.c.setPage$java_net_URL(this.$finals$.url);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
$I$(10).getLookAndFeel$().provideErrorFeedback$java_awt_Component(this.$finals$.c);
} else {
throw e;
}
}
}});
})()
), Clazz.new_(P$.FormView$1.$init$,[this, {c:c,fse:fse,url:url}]))]);
});

Clazz.newMeth(C$, 'storePostData$javax_swing_text_html_HTMLDocument$S$S',  function (doc, target, data) {
var propDoc=doc;
var propName="javax.swing.JEditorPane.postdata";
if (doc.isFrameDocument$()) {
var p=this.getContainer$();
var v=p.getFrameView$();
var c=v.getOutermostJEditorPane$();
if (c != null ) {
propDoc=c.getDocument$();
propName+=("." + target);
}}propDoc.putProperty$O$O(propName, data);
}, p$1);

Clazz.newMeth(C$, 'imageSubmit$S',  function (imageData) {
var dataBuffer=Clazz.new_($I$(21,1));
var elem=this.getElement$();
var hdoc=elem.getDocument$();
p$1.getFormData$StringBuilder.apply(this, [dataBuffer]);
if (dataBuffer.length$() > 0) {
dataBuffer.append$C("&");
}dataBuffer.append$S(imageData);
this.submitData$S(dataBuffer.toString());
return;
});

Clazz.newMeth(C$, 'getImageData$java_awt_Point',  function (point) {
var mouseCoords=point.x + ":" + point.y ;
var sep=mouseCoords.indexOf$I(":");
var x=mouseCoords.substring$I$I(0, sep);
var y=mouseCoords.substring$I(++sep);
var name=this.getElement$().getAttributes$().getAttribute$O($I$(6).NAME);
var data;
if (name == null  || name.equals$O("") ) {
data="x=" + x + "&y=" + y ;
} else {
name=$I$(26).encode$S(name);
data=name + ".x" + "=" + x + "&" + name + ".y" + "=" + y ;
}return data;
}, p$1);

Clazz.newMeth(C$, 'getFormElement',  function () {
var elem=this.getElement$();
while (elem != null ){
if (elem.getAttributes$().getAttribute$O($I$(2).NameAttribute) === $I$(3).FORM ) {
return elem;
}elem=elem.getParentElement$();
}
return null;
}, p$1);

Clazz.newMeth(C$, 'getFormData$StringBuilder',  function (buffer) {
var formE=p$1.getFormElement.apply(this, []);
if (formE != null ) {
var it=Clazz.new_($I$(27,1).c$$javax_swing_text_Element,[formE]);
var next;
while ((next=it.next$()) != null ){
if (p$1.isControl$javax_swing_text_Element.apply(this, [next])) {
var type=next.getAttributes$().getAttribute$O($I$(6).TYPE);
if (type != null  && type.equals$O("submit")  && next !== this.getElement$()  ) {
} else if (type == null  || !type.equals$O("image") ) {
p$1.loadElementDataIntoBuffer$javax_swing_text_Element$StringBuilder.apply(this, [next, buffer]);
}}}
}}, p$1);

Clazz.newMeth(C$, 'loadElementDataIntoBuffer$javax_swing_text_Element$StringBuilder',  function (elem, buffer) {
var attr=elem.getAttributes$();
var name=attr.getAttribute$O($I$(6).NAME);
if (name == null ) {
return;
}var value=null;
var tag=elem.getAttributes$().getAttribute$O($I$(2).NameAttribute);
if (tag === $I$(3).INPUT ) {
value=p$1.getInputElementData$javax_swing_text_AttributeSet.apply(this, [attr]);
} else if (tag === $I$(3).TEXTAREA ) {
value=p$1.getTextAreaData$javax_swing_text_AttributeSet.apply(this, [attr]);
} else if (tag === $I$(3).SELECT ) {
p$1.loadSelectData$javax_swing_text_AttributeSet$StringBuilder.apply(this, [attr, buffer]);
}if (name != null  && value != null  ) {
p$1.appendBuffer$StringBuilder$S$S.apply(this, [buffer, name, value]);
}}, p$1);

Clazz.newMeth(C$, 'getInputElementData$javax_swing_text_AttributeSet',  function (attr) {
var model=attr.getAttribute$O($I$(2).ModelAttribute);
var type=attr.getAttribute$O($I$(6).TYPE);
var value=null;
if (type.equals$O("text") || type.equals$O("password") ) {
var doc=model;
try {
value=doc.getText$I$I(0, doc.getLength$());
} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.text.BadLocationException")){
value=null;
} else {
throw e;
}
}
} else if (type.equals$O("submit") || type.equals$O("hidden") ) {
value=attr.getAttribute$O($I$(6).VALUE);
if (value == null ) {
value="";
}} else if (type.equals$O("radio") || type.equals$O("checkbox") ) {
var m=model;
if (m.isSelected$()) {
value=attr.getAttribute$O($I$(6).VALUE);
if (value == null ) {
value="on";
}}} else if (type.equals$O("file")) {
var doc=model;
var path;
try {
path=doc.getText$I$I(0, doc.getLength$());
} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.text.BadLocationException")){
path=null;
} else {
throw e;
}
}
if (path != null  && path.length$() > 0 ) {
value=path;
}}return value;
}, p$1);

Clazz.newMeth(C$, 'getTextAreaData$javax_swing_text_AttributeSet',  function (attr) {
var doc=attr.getAttribute$O($I$(2).ModelAttribute);
try {
return doc.getText$I$I(0, doc.getLength$());
} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.text.BadLocationException")){
return null;
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'loadSelectData$javax_swing_text_AttributeSet$StringBuilder',  function (attr, buffer) {
var name=attr.getAttribute$O($I$(6).NAME);
if (name == null ) {
return;
}var m=attr.getAttribute$O($I$(2).ModelAttribute);
if (Clazz.instanceOf(m, "javax.swing.text.html.OptionListModel")) {
var model=m;
for (var i=0; i < model.getSize$(); i++) {
if (model.isSelectedIndex$I(i)) {
var option=model.getElementAt$I(i);
p$1.appendBuffer$StringBuilder$S$S.apply(this, [buffer, name, option.getValue$()]);
}}
} else if (Clazz.instanceOf(m, "javax.swing.ComboBoxModel")) {
var model=m;
var option=model.getSelectedItem$();
if (option != null ) {
p$1.appendBuffer$StringBuilder$S$S.apply(this, [buffer, name, option.getValue$()]);
}}}, p$1);

Clazz.newMeth(C$, 'appendBuffer$StringBuilder$S$S',  function (buffer, name, value) {
if (buffer.length$() > 0) {
buffer.append$C("&");
}var encodedName=$I$(26).encode$S(name);
buffer.append$S(encodedName);
buffer.append$C("=");
var encodedValue=$I$(26).encode$S(value);
buffer.append$S(encodedValue);
}, p$1);

Clazz.newMeth(C$, 'isControl$javax_swing_text_Element',  function (elem) {
return elem.isLeaf$();
}, p$1);

Clazz.newMeth(C$, 'isLastTextOrPasswordField$',  function () {
var parent=p$1.getFormElement.apply(this, []);
var elem=this.getElement$();
if (parent != null ) {
var it=Clazz.new_($I$(27,1).c$$javax_swing_text_Element,[parent]);
var next;
var found=false;
while ((next=it.next$()) != null ){
if (next === elem ) {
found=true;
} else if (found && p$1.isControl$javax_swing_text_Element.apply(this, [next]) ) {
var elemAttr=next.getAttributes$();
if ($I$(28,"matchNameAttribute$javax_swing_text_AttributeSet$javax_swing_text_html_HTML_Tag",[elemAttr, $I$(3).INPUT])) {
var type=elemAttr.getAttribute$O($I$(6).TYPE);
if ("text".equals$O(type) || "password".equals$O(type) ) {
return false;
}}}}
}return true;
});

Clazz.newMeth(C$, 'resetForm$',  function () {
var parent=p$1.getFormElement.apply(this, []);
if (parent != null ) {
var it=Clazz.new_($I$(27,1).c$$javax_swing_text_Element,[parent]);
var next;
while ((next=it.next$()) != null ){
if (p$1.isControl$javax_swing_text_Element.apply(this, [next])) {
var elemAttr=next.getAttributes$();
var m=elemAttr.getAttribute$O($I$(2).ModelAttribute);
if (Clazz.instanceOf(m, "javax.swing.text.html.TextAreaDocument")) {
var doc=m;
doc.reset$();
} else if (Clazz.instanceOf(m, "javax.swing.text.PlainDocument")) {
try {
var doc=m;
doc.remove$I$I(0, doc.getLength$());
if ($I$(28,"matchNameAttribute$javax_swing_text_AttributeSet$javax_swing_text_html_HTML_Tag",[elemAttr, $I$(3).INPUT])) {
var value=elemAttr.getAttribute$O($I$(6).VALUE);
if (value != null ) {
doc.insertString$I$S$javax_swing_text_AttributeSet(0, value, null);
}}} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.text.BadLocationException")){
} else {
throw e;
}
}
} else if (Clazz.instanceOf(m, "javax.swing.text.html.OptionListModel")) {
var model=m;
var size=model.getSize$();
for (var i=0; i < size; i++) {
model.removeIndexInterval$I$I(i, i);
}
var selectionRange=model.getInitialSelection$();
for (var i=0; i < selectionRange.size$(); i++) {
if (selectionRange.get$I(i)) {
model.addSelectionInterval$I$I(i, i);
}}
} else if (Clazz.instanceOf(m, "javax.swing.text.html.OptionComboBoxModel")) {
var model=m;
var option=model.getInitialSelection$();
if (option != null ) {
model.setSelectedItem$O(option);
}} else if (Clazz.instanceOf(m, "javax.swing.JToggleButton.ToggleButtonModel")) {
var checked=(elemAttr.getAttribute$O($I$(6).CHECKED) != null );
var model=m;
model.setSelected$Z(checked);
}}}
}});

C$.$static$=function(){C$.$static$=0;
C$.SUBMIT= String.instantialize("Submit Query");
C$.RESET= String.instantialize("Reset");
};
var $s$ = new Int16Array(1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.FormView, "MouseEventListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.awt.event.MouseAdapter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (evt) {
var imageData=p$1.getImageData$java_awt_Point.apply(this.b$['javax.swing.text.html.FormView'], [evt.getPoint$()]);
this.b$['javax.swing.text.html.FormView'].imageSubmit$S.apply(this.b$['javax.swing.text.html.FormView'], [imageData]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.FormView, "BrowseFileAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.event.ActionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['attrs','javax.swing.text.AttributeSet','model','javax.swing.text.Document']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_AttributeSet$javax_swing_text_Document',  function (attrs, model) {
;C$.$init$.apply(this);
this.attrs=attrs;
this.model=model;
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (ae) {
var fc=Clazz.new_($I$(1,1));
fc.setMultiSelectionEnabled$Z(false);
if (fc.showOpenDialog$java_awt_Component(this.b$['javax.swing.text.View'].getContainer$.apply(this.b$['javax.swing.text.View'], [])) == 0) {
var selected=fc.getSelectedFile$();
if (selected != null ) {
try {
if (this.model.getLength$() > 0) {
this.model.remove$I$I(0, this.model.getLength$());
}this.model.insertString$I$S$javax_swing_text_AttributeSet(0, selected.getPath$(), null);
} catch (ble) {
if (Clazz.exceptionOf(ble,"javax.swing.text.BadLocationException")){
} else {
throw ble;
}
}
}}});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:26 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
