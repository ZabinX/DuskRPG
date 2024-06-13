(function(){var P$=Clazz.newPackage("javax.swing.text.html"),I$=[[0,'javax.swing.JPanel','java.awt.BorderLayout',['javax.swing.text.html.HTML','.Attribute'],'javax.swing.UIManager','javax.swing.JLabel','javax.swing.JTextField','java.net.URLEncoder','java.net.URL']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "IsindexView", null, 'javax.swing.text.ComponentView', 'java.awt.event.ActionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['textField','javax.swing.JTextField']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_Element',  function (elem) {
;C$.superclazz.c$$javax_swing_text_Element.apply(this,[elem]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createComponent$',  function () {
var attr=this.getElement$().getAttributes$();
var panel=Clazz.new_([Clazz.new_($I$(2,1))],$I$(1,1).c$$java_awt_LayoutManager);
panel.setBackground$java_awt_Color(null);
var prompt=attr.getAttribute$O($I$(3).PROMPT);
if (prompt == null ) {
prompt=$I$(4).getString$O("IsindexView.prompt");
}var label=Clazz.new_($I$(5,1).c$$S,[prompt]);
this.textField=Clazz.new_($I$(6,1));
this.textField.addActionListener$java_awt_event_ActionListener(this);
panel.add$java_awt_Component$O(label, "West");
panel.add$java_awt_Component$O(this.textField, "Center");
panel.setAlignmentY$F(1.0);
panel.setOpaque$Z(false);
return panel;
});

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (evt) {
var data=this.textField.getText$();
if (data != null ) {
data=$I$(7).encode$S(data);
}var attr=this.getElement$().getAttributes$();
var hdoc=this.getElement$().getDocument$();
var action=attr.getAttribute$O($I$(3).ACTION);
if (action == null ) {
action=hdoc.getBase$().toString();
}try {
var url=Clazz.new_($I$(8,1).c$$S,[action + "?" + data ]);
var pane=this.getContainer$();
pane.setPage$java_net_URL(url);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.net.MalformedURLException")){
var e1 = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e2 = e$$;
{
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:29 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
