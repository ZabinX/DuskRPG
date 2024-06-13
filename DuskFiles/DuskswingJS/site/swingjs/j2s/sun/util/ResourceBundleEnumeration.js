(function(){var P$=Clazz.newPackage("sun.util"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ResourceBundleEnumeration", null, null, 'java.util.Enumeration');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.next=null;
},1);

C$.$fields$=[['S',['next'],'O',['set','java.util.Set','iterator','java.util.Iterator','enumeration','java.util.Enumeration']]]

Clazz.newMeth(C$, 'c$$java_util_Set$java_util_Enumeration',  function (set, enumeration) {
;C$.$init$.apply(this);
this.set=set;
this.iterator=set.iterator$();
this.enumeration=enumeration;
}, 1);

Clazz.newMeth(C$, 'hasMoreElements$',  function () {
if (this.next == null ) {
if (this.iterator.hasNext$()) {
this.next=this.iterator.next$();
} else if (this.enumeration != null ) {
while (this.next == null  && this.enumeration.hasMoreElements$() ){
this.next=this.enumeration.nextElement$();
if (this.set.contains$O(this.next)) {
this.next=null;
}}
}}return this.next != null ;
});

Clazz.newMeth(C$, 'nextElement$',  function () {
if (this.hasMoreElements$()) {
var result=this.next;
this.next=null;
return result;
} else {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:56 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
