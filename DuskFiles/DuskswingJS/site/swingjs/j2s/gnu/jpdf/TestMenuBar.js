(function(){var P$=Clazz.newPackage("gnu.jpdf"),p$1={},p$2={},I$=[[0,'javax.swing.JPanel','java.io.File','java.io.FileOutputStream','java.awt.event.WindowAdapter','java.awt.BorderLayout','gnu.jpdf.TestMenuBar','gnu.jpdf.PDFJob','gnu.jpdf.TestPanel','javax.swing.JScrollPane','java.awt.Dimension','java.awt.Toolkit','javax.swing.JOptionPane','gnu.jpdf.HelpFrame','java.awt.JobAttributes','java.awt.Color','java.awt.Point','java.awt.Font','gnu.jpdf.BoundingBox','java.awt.MediaTracker','javax.swing.JMenu','javax.swing.JMenuItem','javax.swing.KeyStroke','javax.swing.JTextArea','StringBuffer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TestMenuBar", null, 'javax.swing.JMenuBar');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['file','javax.swing.JMenu','+personnel','+help','+about','+view','printer','javax.swing.JMenuItem','+close','+helpTopics','+aboutApp','+viewFirstPage','+viewSecondPage']]]

Clazz.newMeth(C$, 'c$$java_awt_event_ActionListener',  function (parent) {
Clazz.super_(C$, this);
this.file=Clazz.new_($I$(20,1).c$$S,["File"]);
this.file.setMnemonic$I(70);
this.printer=Clazz.new_($I$(21,1).c$$S,["Print"]);
this.printer.setMnemonic$I(82);
this.printer.setAccelerator$javax_swing_KeyStroke($I$(22).getKeyStroke$I$I(82, 2));
this.printer.addActionListener$java_awt_event_ActionListener(parent);
this.file.add$javax_swing_JMenuItem(this.printer);
this.close=Clazz.new_($I$(21,1).c$$S,["Close"]);
this.close.setMnemonic$I(81);
this.close.setAccelerator$javax_swing_KeyStroke($I$(22).getKeyStroke$I$I(81, 2));
this.close.addActionListener$java_awt_event_ActionListener(parent);
this.file.add$javax_swing_JMenuItem(this.close);
this.view=Clazz.new_($I$(20,1).c$$S,["View"]);
this.view.setMnemonic$I(86);
this.viewFirstPage=Clazz.new_($I$(21,1).c$$S,["First Page"]);
this.viewFirstPage.addActionListener$java_awt_event_ActionListener(parent);
this.view.add$javax_swing_JMenuItem(this.viewFirstPage);
this.viewSecondPage=Clazz.new_($I$(21,1).c$$S,["Second Page"]);
this.viewSecondPage.addActionListener$java_awt_event_ActionListener(parent);
this.view.add$javax_swing_JMenuItem(this.viewSecondPage);
this.help=Clazz.new_($I$(20,1).c$$S,["Help"]);
this.help.setMnemonic$I(72);
this.helpTopics=Clazz.new_($I$(21,1).c$$S,["Help Topics"]);
this.helpTopics.addActionListener$java_awt_event_ActionListener(parent);
this.help.add$javax_swing_JMenuItem(this.helpTopics);
this.about=Clazz.new_($I$(20,1).c$$S,["About"]);
this.about.setMnemonic$I(65);
this.aboutApp=Clazz.new_($I$(21,1).c$$S,["About"]);
this.aboutApp.addActionListener$java_awt_event_ActionListener(parent);
this.about.add$javax_swing_JMenuItem(this.aboutApp);
this.add$javax_swing_JMenu(this.file);
this.add$javax_swing_JMenu(this.view);
this.add$javax_swing_JMenu(this.help);
this.add$javax_swing_JMenu(this.about);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:58 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
