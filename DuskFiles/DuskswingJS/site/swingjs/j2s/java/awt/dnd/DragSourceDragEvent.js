(function(){var P$=Clazz.newPackage("java.awt.dnd"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "DragSourceDragEvent", null, 'java.awt.dnd.DragSourceEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.targetActions=0;
this.dropAction=0;
this.gestureModifiers=0;
},1);

C$.$fields$=[['Z',['invalidModifiers'],'I',['targetActions','dropAction','gestureModifiers']]]

Clazz.newMeth(C$, 'c$$java_awt_dnd_DragSourceContext$I$I$I',  function (dsc, dropAction, action, modifiers) {
;C$.superclazz.c$$java_awt_dnd_DragSourceContext.apply(this,[dsc]);C$.$init$.apply(this);
this.targetActions=action;
this.gestureModifiers=modifiers;
this.dropAction=dropAction;
if ((modifiers & ~(16383)) != 0) {
this.invalidModifiers=true;
} else if ((this.getGestureModifiers$() != 0) && (this.getGestureModifiersEx$() == 0) ) {
p$1.setNewModifiers.apply(this, []);
} else if ((this.getGestureModifiers$() == 0) && (this.getGestureModifiersEx$() != 0) ) {
p$1.setOldModifiers.apply(this, []);
} else {
this.invalidModifiers=true;
}}, 1);

Clazz.newMeth(C$, 'c$$java_awt_dnd_DragSourceContext$I$I$I$I$I',  function (dsc, dropAction, action, modifiers, x, y) {
;C$.superclazz.c$$java_awt_dnd_DragSourceContext$I$I.apply(this,[dsc, x, y]);C$.$init$.apply(this);
this.targetActions=action;
this.gestureModifiers=modifiers;
this.dropAction=dropAction;
if ((modifiers & ~(16383)) != 0) {
this.invalidModifiers=true;
} else if ((this.getGestureModifiers$() != 0) && (this.getGestureModifiersEx$() == 0) ) {
p$1.setNewModifiers.apply(this, []);
} else if ((this.getGestureModifiers$() == 0) && (this.getGestureModifiersEx$() != 0) ) {
p$1.setOldModifiers.apply(this, []);
} else {
this.invalidModifiers=true;
}}, 1);

Clazz.newMeth(C$, 'getTargetActions$',  function () {
return this.targetActions;
});

Clazz.newMeth(C$, 'getGestureModifiers$',  function () {
return this.invalidModifiers ? this.gestureModifiers : this.gestureModifiers & 63;
});

Clazz.newMeth(C$, 'getGestureModifiersEx$',  function () {
return this.invalidModifiers ? this.gestureModifiers : this.gestureModifiers & 16320;
});

Clazz.newMeth(C$, 'getUserAction$',  function () {
return this.dropAction;
});

Clazz.newMeth(C$, 'getDropAction$',  function () {
return this.targetActions & this.getDragSourceContext$().getSourceActions$();
});

Clazz.newMeth(C$, 'setNewModifiers',  function () {
if ((this.gestureModifiers & 16) != 0) {
this.gestureModifiers|=1024;
}if ((this.gestureModifiers & 8) != 0) {
this.gestureModifiers|=2048;
}if ((this.gestureModifiers & 4) != 0) {
this.gestureModifiers|=4096;
}if ((this.gestureModifiers & 1) != 0) {
this.gestureModifiers|=64;
}if ((this.gestureModifiers & 2) != 0) {
this.gestureModifiers|=128;
}if ((this.gestureModifiers & 32) != 0) {
this.gestureModifiers|=8192;
}}, p$1);

Clazz.newMeth(C$, 'setOldModifiers',  function () {
if ((this.gestureModifiers & 1024) != 0) {
this.gestureModifiers|=16;
}if ((this.gestureModifiers & 2048) != 0) {
this.gestureModifiers|=8;
}if ((this.gestureModifiers & 4096) != 0) {
this.gestureModifiers|=4;
}if ((this.gestureModifiers & 64) != 0) {
this.gestureModifiers|=1;
}if ((this.gestureModifiers & 128) != 0) {
this.gestureModifiers|=2;
}if ((this.gestureModifiers & 8192) != 0) {
this.gestureModifiers|=32;
}}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:08 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
