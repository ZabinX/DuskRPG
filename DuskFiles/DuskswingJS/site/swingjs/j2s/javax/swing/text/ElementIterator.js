(function(){var P$=Clazz.newPackage("javax.swing.text"),p$1={},p$2={},I$=[[0,'java.util.Stack','InternalError',['javax.swing.text.ElementIterator','.StackItem']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ElementIterator", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'Cloneable');
C$.$classes$=[['StackItem',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.elementStack=null;
},1);

C$.$fields$=[['O',['root','javax.swing.text.Element','elementStack','java.util.Stack']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_Document',  function (document) {
;C$.$init$.apply(this);
this.root=document.getDefaultRootElement$();
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_text_Element',  function (root) {
;C$.$init$.apply(this);
this.root=root;
}, 1);

Clazz.newMeth(C$, 'clone$',  function () {
try {
var it=Clazz.new_(C$.c$$javax_swing_text_Element,[this.root]);
if (this.elementStack != null ) {
it.elementStack=Clazz.new_($I$(1,1));
for (var i=0; i < this.elementStack.size$(); i++) {
var item=this.elementStack.elementAt$I(i);
var clonee=item.clone$();
it.elementStack.push$O(clonee);
}
}return it;
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(2,1));
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'first$',  function () {
if (this.root == null ) {
return null;
}this.elementStack=Clazz.new_($I$(1,1));
if (this.root.getElementCount$() != 0) {
this.elementStack.push$O(Clazz.new_($I$(3,1).c$$javax_swing_text_Element,[this, null, this.root]));
}return this.root;
});

Clazz.newMeth(C$, 'depth$',  function () {
if (this.elementStack == null ) {
return 0;
}return this.elementStack.size$();
});

Clazz.newMeth(C$, 'current$',  function () {
if (this.elementStack == null ) {
return this.first$();
}if (!this.elementStack.empty$()) {
var item=this.elementStack.peek$();
var elem=p$1.getElement.apply(item, []);
var index=p$1.getIndex.apply(item, []);
if (index == -1) {
return elem;
}return elem.getElement$I(index);
}return null;
});

Clazz.newMeth(C$, 'next$',  function () {
if (this.elementStack == null ) {
return this.first$();
}if (this.elementStack.isEmpty$()) {
return null;
}var item=this.elementStack.peek$();
var elem=p$1.getElement.apply(item, []);
var index=p$1.getIndex.apply(item, []);
if (index + 1 < elem.getElementCount$()) {
var child=elem.getElement$I(index + 1);
if (child.isLeaf$()) {
p$1.incrementIndex.apply(item, []);
} else {
this.elementStack.push$O(Clazz.new_($I$(3,1).c$$javax_swing_text_Element,[this, null, child]));
}return child;
} else {
this.elementStack.pop$();
if (!this.elementStack.isEmpty$()) {
var top=this.elementStack.peek$();
p$1.incrementIndex.apply(top, []);
return this.next$();
}}return null;
});

Clazz.newMeth(C$, 'previous$',  function () {
var stackSize;
if (this.elementStack == null  || (stackSize=this.elementStack.size$()) == 0 ) {
return null;
}var item=this.elementStack.peek$();
var elem=p$1.getElement.apply(item, []);
var index=p$1.getIndex.apply(item, []);
if (index > 0) {
return p$2.getDeepestLeaf$javax_swing_text_Element.apply(this, [elem.getElement$I(--index)]);
} else if (index == 0) {
return elem;
} else if (index == -1) {
if (stackSize == 1) {
return null;
}var top=this.elementStack.pop$();
item=this.elementStack.peek$();
this.elementStack.push$O(top);
elem=p$1.getElement.apply(item, []);
index=p$1.getIndex.apply(item, []);
return ((index == -1) ? elem : p$2.getDeepestLeaf$javax_swing_text_Element.apply(this, [elem.getElement$I(index)]));
}return null;
});

Clazz.newMeth(C$, 'getDeepestLeaf$javax_swing_text_Element',  function (parent) {
if (parent.isLeaf$()) {
return parent;
}var childCount=parent.getElementCount$();
if (childCount == 0) {
return parent;
}return p$2.getDeepestLeaf$javax_swing_text_Element.apply(this, [parent.getElement$I(childCount - 1)]);
}, p$2);
;
(function(){/*c*/var C$=Clazz.newClass(P$.ElementIterator, "StackItem", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'Cloneable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['childIndex'],'O',['item','javax.swing.text.Element']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_Element',  function (elem) {
;C$.$init$.apply(this);
this.item=elem;
this.childIndex=-1;
}, 1);

Clazz.newMeth(C$, 'incrementIndex',  function () {
++this.childIndex;
}, p$1);

Clazz.newMeth(C$, 'getElement',  function () {
return this.item;
}, p$1);

Clazz.newMeth(C$, 'getIndex',  function () {
return this.childIndex;
}, p$1);

Clazz.newMeth(C$, 'clone$',  function () {
return Clazz.clone(this);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:18 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
