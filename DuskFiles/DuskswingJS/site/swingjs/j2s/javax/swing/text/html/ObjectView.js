(function(){var P$=Clazz.newPackage("javax.swing.text.html"),p$1={},I$=[[0,['javax.swing.text.html.HTML','.Attribute'],'sun.reflect.misc.ReflectUtil','Thread','javax.swing.JLabel','java.awt.Color','java.beans.Introspector','sun.reflect.misc.MethodUtil']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ObjectView", null, 'javax.swing.text.ComponentView');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$javax_swing_text_Element',  function (elem) {
;C$.superclazz.c$$javax_swing_text_Element.apply(this,[elem]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createComponent$',  function () {
var attr=this.getElement$().getAttributes$();
var classname=attr.getAttribute$O($I$(1).CLASSID);
try {
$I$(2).checkPackageAccess$S(classname);
var c=Clazz.forName(classname, true, $I$(3).currentThread$().getContextClassLoader$());
var o=c.newInstance$();
if (Clazz.instanceOf(o, "java.awt.Component")) {
var comp=o;
p$1.setParameters$java_awt_Component$javax_swing_text_AttributeSet.apply(this, [comp, attr]);
return comp;
}} catch (e) {
}
return this.getUnloadableRepresentation$();
});

Clazz.newMeth(C$, 'getUnloadableRepresentation$',  function () {
var comp=Clazz.new_($I$(4,1).c$$S,["??"]);
comp.setForeground$java_awt_Color($I$(5).red);
return comp;
});

Clazz.newMeth(C$, 'setParameters$java_awt_Component$javax_swing_text_AttributeSet',  function (comp, attr) {
var k=comp.getClass$();
var bi;
try {
bi=$I$(6).getBeanInfo$Class(k);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.beans.IntrospectionException")){
System.err.println$S("introspector failed, ex: " + ex);
return;
} else {
throw ex;
}
}
var props=bi.getPropertyDescriptors$();
for (var i=0; i < props.length; i++) {
var v=attr.getAttribute$O(props[i].getName$());
if (Clazz.instanceOf(v, "java.lang.String")) {
var value=v;
var writer=props[i].getWriteMethod$();
if (writer == null ) {
return;
}var params=writer.getParameterTypes$();
if (params.length != 1) {
return;
}var args=Clazz.array(java.lang.Object, -1, [value]);
try {
$I$(7).invoke$java_lang_reflect_Method$O$OA(writer, comp, args);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.err.println$S("Invocation failed");
} else {
throw ex;
}
}
}}
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:29 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
