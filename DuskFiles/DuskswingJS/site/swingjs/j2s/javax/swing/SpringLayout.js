(function(){var P$=Clazz.newPackage("javax.swing"),p$1={},p$2={},p$3={},I$=[[0,'javajs.util.Lst','javax.swing.Spring','javax.swing.SpringLayout',['java.awt.Component','.BaselineResizeBehavior'],['javax.swing.Spring','.SpringMap'],'java.util.HashMap','java.util.HashSet','java.awt.Dimension',['javax.swing.SpringLayout','.Constraints'],'java.util.Collections',['javax.swing.SpringLayout','.SpringProxy']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SpringLayout", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'java.awt.LayoutManager2');
C$.$classes$=[['Constraints',9],['SpringProxy',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.componentConstraints=Clazz.new_($I$(6,1));
this.cyclicReference=$I$(2).constant$I(-2147483648);
},1);

C$.$fields$=[['O',['componentConstraints','java.util.Map','cyclicReference','javax.swing.Spring','cyclicSprings','java.util.Set','+acyclicSprings']]
,['O',['ALL_HORIZONTAL','String[]','+ALL_VERTICAL']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'resetCyclicStatuses',  function () {
this.cyclicSprings=Clazz.new_($I$(7,1));
this.acyclicSprings=Clazz.new_($I$(7,1));
}, p$3);

Clazz.newMeth(C$, 'setParent$java_awt_Container',  function (p) {
p$3.resetCyclicStatuses.apply(this, []);
var pc=this.getConstraints$java_awt_Component(p);
pc.setX$javax_swing_Spring($I$(2).constant$I(0));
pc.setY$javax_swing_Spring($I$(2).constant$I(0));
var width=pc.getWidth$();
if (Clazz.instanceOf(width, "javax.swing.Spring.WidthSpring") && (width).c === p  ) {
pc.setWidth$javax_swing_Spring($I$(2).constant$I$I$I(0, 0, 2147483647));
}var height=pc.getHeight$();
if (Clazz.instanceOf(height, "javax.swing.Spring.HeightSpring") && (height).c === p  ) {
pc.setHeight$javax_swing_Spring($I$(2).constant$I$I$I(0, 0, 2147483647));
}}, p$3);

Clazz.newMeth(C$, 'isCyclic$javax_swing_Spring',  function (s) {
if (s == null ) {
return false;
}if (this.cyclicSprings.contains$O(s)) {
return true;
}if (this.acyclicSprings.contains$O(s)) {
return false;
}this.cyclicSprings.add$O(s);
var result=s.isCyclic$javax_swing_SpringLayout(this);
if (!result) {
this.acyclicSprings.add$O(s);
this.cyclicSprings.remove$O(s);
} else {
System.err.println$S(s + " is cyclic. ");
}return result;
});

Clazz.newMeth(C$, 'abandonCycles$javax_swing_Spring',  function (s) {
return this.isCyclic$javax_swing_Spring(s) ? this.cyclicReference : s;
}, p$3);

Clazz.newMeth(C$, 'addLayoutComponent$S$java_awt_Component',  function (name, c) {
});

Clazz.newMeth(C$, 'removeLayoutComponent$java_awt_Component',  function (c) {
this.componentConstraints.remove$O(c);
});

Clazz.newMeth(C$, 'addInsets$I$I$java_awt_Container',  function (width, height, p) {
var i=p.getInsets$();
return Clazz.new_($I$(8,1).c$$I$I,[width + i.left + i.right , height + i.top + i.bottom ]);
}, 1);

Clazz.newMeth(C$, 'minimumLayoutSize$java_awt_Container',  function (parent) {
p$3.setParent$java_awt_Container.apply(this, [parent]);
var pc=this.getConstraints$java_awt_Component(parent);
return C$.addInsets$I$I$java_awt_Container(p$3.abandonCycles$javax_swing_Spring.apply(this, [pc.getWidth$()]).getMinimumValue$(), p$3.abandonCycles$javax_swing_Spring.apply(this, [pc.getHeight$()]).getMinimumValue$(), parent);
});

Clazz.newMeth(C$, 'preferredLayoutSize$java_awt_Container',  function (parent) {
p$3.setParent$java_awt_Container.apply(this, [parent]);
var pc=this.getConstraints$java_awt_Component(parent);
return C$.addInsets$I$I$java_awt_Container(p$3.abandonCycles$javax_swing_Spring.apply(this, [pc.getWidth$()]).getPreferredValue$(), p$3.abandonCycles$javax_swing_Spring.apply(this, [pc.getHeight$()]).getPreferredValue$(), parent);
});

Clazz.newMeth(C$, 'maximumLayoutSize$java_awt_Container',  function (parent) {
p$3.setParent$java_awt_Container.apply(this, [parent]);
var pc=this.getConstraints$java_awt_Component(parent);
return C$.addInsets$I$I$java_awt_Container(p$3.abandonCycles$javax_swing_Spring.apply(this, [pc.getWidth$()]).getMaximumValue$(), p$3.abandonCycles$javax_swing_Spring.apply(this, [pc.getHeight$()]).getMaximumValue$(), parent);
});

Clazz.newMeth(C$, 'addLayoutComponent$java_awt_Component$O',  function (component, constraints) {
if (Clazz.instanceOf(constraints, "javax.swing.SpringLayout.Constraints")) {
p$3.putConstraints$java_awt_Component$javax_swing_SpringLayout_Constraints.apply(this, [component, constraints]);
}});

Clazz.newMeth(C$, 'getLayoutAlignmentX$java_awt_Container',  function (p) {
return 0.5;
});

Clazz.newMeth(C$, 'getLayoutAlignmentY$java_awt_Container',  function (p) {
return 0.5;
});

Clazz.newMeth(C$, 'invalidateLayout$java_awt_Container',  function (p) {
});

Clazz.newMeth(C$, 'putConstraint$S$java_awt_Component$I$S$java_awt_Component',  function (e1, c1, pad, e2, c2) {
this.putConstraint$S$java_awt_Component$javax_swing_Spring$S$java_awt_Component(e1, c1, $I$(2).constant$I(pad), e2, c2);
});

Clazz.newMeth(C$, 'putConstraint$S$java_awt_Component$javax_swing_Spring$S$java_awt_Component',  function (e1, c1, s, e2, c2) {
p$3.putConstraint$S$java_awt_Component$javax_swing_Spring.apply(this, [e1, c1, $I$(2,"sum$javax_swing_Spring$javax_swing_Spring",[s, this.getConstraint$S$java_awt_Component(e2, c2)])]);
});

Clazz.newMeth(C$, 'putConstraint$S$java_awt_Component$javax_swing_Spring',  function (e, c, s) {
if (s != null ) {
this.getConstraints$java_awt_Component(c).setConstraint$S$javax_swing_Spring(e, s);
}}, p$3);

Clazz.newMeth(C$, 'applyDefaults$java_awt_Component$javax_swing_SpringLayout_Constraints',  function (c, constraints) {
if (constraints == null ) {
constraints=Clazz.new_($I$(9,1));
}if (constraints.c == null ) {
constraints.c=c;
}if (constraints.horizontalHistory.size$() < 2) {
p$3.applyDefaults$javax_swing_SpringLayout_Constraints$S$javax_swing_Spring$S$javax_swing_Spring$java_util_List.apply(this, [constraints, "West", $I$(2).constant$I(0), "Width", $I$(2).width$java_awt_Component(c), constraints.horizontalHistory]);
}if (constraints.verticalHistory.size$() < 2) {
p$3.applyDefaults$javax_swing_SpringLayout_Constraints$S$javax_swing_Spring$S$javax_swing_Spring$java_util_List.apply(this, [constraints, "North", $I$(2).constant$I(0), "Height", $I$(2).height$java_awt_Component(c), constraints.verticalHistory]);
}return constraints;
}, p$3);

Clazz.newMeth(C$, 'applyDefaults$javax_swing_SpringLayout_Constraints$S$javax_swing_Spring$S$javax_swing_Spring$java_util_List',  function (constraints, name1, spring1, name2, spring2, history) {
if (history.size$() == 0) {
constraints.setConstraint$S$javax_swing_Spring(name1, spring1);
constraints.setConstraint$S$javax_swing_Spring(name2, spring2);
} else {
if (constraints.getConstraint$S(name2) == null ) {
constraints.setConstraint$S$javax_swing_Spring(name2, spring2);
} else {
constraints.setConstraint$S$javax_swing_Spring(name1, spring1);
}$I$(10).rotate$java_util_List$I(history, 1);
}}, p$3);

Clazz.newMeth(C$, 'putConstraints$java_awt_Component$javax_swing_SpringLayout_Constraints',  function (component, constraints) {
this.componentConstraints.put$O$O(component, p$3.applyDefaults$java_awt_Component$javax_swing_SpringLayout_Constraints.apply(this, [component, constraints]));
}, p$3);

Clazz.newMeth(C$, 'getConstraints$java_awt_Component',  function (c) {
var result=this.componentConstraints.get$O(c);
if (result == null ) {
if (Clazz.instanceOf(c, "javax.swing.JComponent")) {
var cp=(c).getClientProperty$O(Clazz.getClass(C$));
if (Clazz.instanceOf(cp, "javax.swing.SpringLayout.Constraints")) {
return p$3.applyDefaults$java_awt_Component$javax_swing_SpringLayout_Constraints.apply(this, [c, cp]);
}}result=Clazz.new_($I$(9,1));
p$3.putConstraints$java_awt_Component$javax_swing_SpringLayout_Constraints.apply(this, [c, result]);
}return result;
});

Clazz.newMeth(C$, 'getConstraint$S$java_awt_Component',  function (edgeName, c) {
edgeName=edgeName.intern$();
return Clazz.new_($I$(11,1).c$$S$java_awt_Component$javax_swing_SpringLayout,[edgeName, c, this]);
});

Clazz.newMeth(C$, 'layoutContainer$java_awt_Container',  function (parent) {
p$3.setParent$java_awt_Container.apply(this, [parent]);
var n=parent.getComponentCount$();
this.getConstraints$java_awt_Component(parent).reset$();
for (var i=0; i < n; i++) {
this.getConstraints$java_awt_Component(parent.getComponent$I(i)).reset$();
}
var insets=parent.getInsets$();
var pc=this.getConstraints$java_awt_Component(parent);
p$3.abandonCycles$javax_swing_Spring.apply(this, [pc.getX$()]).setValue$I(0);
p$3.abandonCycles$javax_swing_Spring.apply(this, [pc.getY$()]).setValue$I(0);
p$3.abandonCycles$javax_swing_Spring.apply(this, [pc.getWidth$()]).setValue$I(parent.getWidth$() - insets.left - insets.right );
p$3.abandonCycles$javax_swing_Spring.apply(this, [pc.getHeight$()]).setValue$I(parent.getHeight$() - insets.top - insets.bottom );
for (var i=0; i < n; i++) {
var c=parent.getComponent$I(i);
var cc=this.getConstraints$java_awt_Component(c);
var x=p$3.abandonCycles$javax_swing_Spring.apply(this, [cc.getX$()]).getValue$();
var y=p$3.abandonCycles$javax_swing_Spring.apply(this, [cc.getY$()]).getValue$();
var width=p$3.abandonCycles$javax_swing_Spring.apply(this, [cc.getWidth$()]).getValue$();
var height=p$3.abandonCycles$javax_swing_Spring.apply(this, [cc.getHeight$()]).getValue$();
c.setBounds$I$I$I$I(insets.left + x, insets.top + y, width, height);
}
});

C$.$static$=function(){C$.$static$=0;
C$.ALL_HORIZONTAL=Clazz.array(String, -1, ["West", "Width", "East", "HorizontalCenter"]);
C$.ALL_VERTICAL=Clazz.array(String, -1, ["North", "Height", "South", "VerticalCenter", "Baseline"]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.SpringLayout, "Constraints", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.horizontalHistory=Clazz.new_($I$(1,1));
this.verticalHistory=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['x','javax.swing.Spring','+y','+width','+height','+east','+south','+horizontalCenter','+verticalCenter','+baseline','horizontalHistory','javajs.util.Lst','+verticalHistory','c','java.awt.Component']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_Spring$javax_swing_Spring',  function (x, y) {
;C$.$init$.apply(this);
this.setX$javax_swing_Spring(x);
this.setY$javax_swing_Spring(y);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_Spring$javax_swing_Spring$javax_swing_Spring$javax_swing_Spring',  function (x, y, width, height) {
;C$.$init$.apply(this);
this.setX$javax_swing_Spring(x);
this.setY$javax_swing_Spring(y);
this.setWidth$javax_swing_Spring(width);
this.setHeight$javax_swing_Spring(height);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Component',  function (c) {
;C$.$init$.apply(this);
this.c=c;
this.setX$javax_swing_Spring($I$(2,"constant$I",[c.getX$()]));
this.setY$javax_swing_Spring($I$(2,"constant$I",[c.getY$()]));
this.setWidth$javax_swing_Spring($I$(2).width$java_awt_Component(c));
this.setHeight$javax_swing_Spring($I$(2).height$java_awt_Component(c));
}, 1);

Clazz.newMeth(C$, 'pushConstraint$S$javax_swing_Spring$Z',  function (name, value, horizontal) {
var valid=true;
var history=horizontal ? this.horizontalHistory : this.verticalHistory;
if (history.contains$O(name)) {
history.remove$O(name);
valid=false;
} else if (history.size$() == 2 && value != null  ) {
history.removeItemAt$I(0);
valid=false;
}if (value != null ) {
history.addLast$O(name);
}if (!valid) {
var all=horizontal ? $I$(3).ALL_HORIZONTAL : $I$(3).ALL_VERTICAL;
for (var i=0; i < all.length; i++) {
var s=all[i];
if (!history.contains$O(s)) {
this.setConstraint$S$javax_swing_Spring(s, null);
}}
}}, p$1);

Clazz.newMeth(C$, 'sum$javax_swing_Spring$javax_swing_Spring',  function (s1, s2) {
return (s1 == null  || s2 == null  ) ? null : $I$(2).sum$javax_swing_Spring$javax_swing_Spring(s1, s2);
}, p$1);

Clazz.newMeth(C$, 'difference$javax_swing_Spring$javax_swing_Spring',  function (s1, s2) {
return (s1 == null  || s2 == null  ) ? null : $I$(2).difference$javax_swing_Spring$javax_swing_Spring(s1, s2);
}, p$1);

Clazz.newMeth(C$, 'scale$javax_swing_Spring$F',  function (s, factor) {
return (s == null ) ? null : $I$(2).scale$javax_swing_Spring$F(s, factor);
}, p$1);

Clazz.newMeth(C$, 'getBaselineFromHeight$I',  function (height) {
if (height < 0) {
return -this.c.getBaseline$I$I(this.c.getPreferredSize$().width, -height);
}return this.c.getBaseline$I$I(this.c.getPreferredSize$().width, height);
}, p$1);

Clazz.newMeth(C$, 'getHeightFromBaseLine$I',  function (baseline) {
var prefSize=this.c.getPreferredSize$();
var prefHeight=prefSize.height;
var prefBaseline=this.c.getBaseline$I$I(prefSize.width, prefHeight);
if (prefBaseline == baseline) {
return prefHeight;
}switch (this.c.getBaselineResizeBehavior$()) {
case $I$(4).CONSTANT_DESCENT:
return prefHeight + (baseline - prefBaseline);
case $I$(4).CENTER_OFFSET:
return prefHeight + 2 * (baseline - prefBaseline);
case $I$(4).CONSTANT_ASCENT:
default:
}
return -2147483648;
}, p$1);

Clazz.newMeth(C$, 'heightToRelativeBaseline$javax_swing_Spring',  function (s) {
return ((P$.SpringLayout$Constraints$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "SpringLayout$Constraints$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['javax.swing.Spring','.SpringMap']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'map$I',  function (i) {
return p$1.getBaselineFromHeight$I.apply(this.b$['javax.swing.SpringLayout.Constraints'], [i]);
});

Clazz.newMeth(C$, 'inv$I',  function (i) {
return p$1.getHeightFromBaseLine$I.apply(this.b$['javax.swing.SpringLayout.Constraints'], [i]);
});
})()
), Clazz.new_($I$(5,1).c$$javax_swing_Spring,[this, null, s],P$.SpringLayout$Constraints$1));
}, p$1);

Clazz.newMeth(C$, 'relativeBaselineToHeight$javax_swing_Spring',  function (s) {
return ((P$.SpringLayout$Constraints$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "SpringLayout$Constraints$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['javax.swing.Spring','.SpringMap']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'map$I',  function (i) {
return p$1.getHeightFromBaseLine$I.apply(this.b$['javax.swing.SpringLayout.Constraints'], [i]);
});

Clazz.newMeth(C$, 'inv$I',  function (i) {
return p$1.getBaselineFromHeight$I.apply(this.b$['javax.swing.SpringLayout.Constraints'], [i]);
});
})()
), Clazz.new_($I$(5,1).c$$javax_swing_Spring,[this, null, s],P$.SpringLayout$Constraints$2));
}, p$1);

Clazz.newMeth(C$, 'defined$java_util_List$S$S',  function (history, s1, s2) {
return history.contains$O(s1) && history.contains$O(s2) ;
}, p$1);

Clazz.newMeth(C$, 'setX$javax_swing_Spring',  function (x) {
this.x=x;
p$1.pushConstraint$S$javax_swing_Spring$Z.apply(this, ["West", x, true]);
});

Clazz.newMeth(C$, 'getX$',  function () {
if (this.x == null ) {
if (p$1.defined$java_util_List$S$S.apply(this, [this.horizontalHistory, "East", "Width"])) {
this.x=p$1.difference$javax_swing_Spring$javax_swing_Spring.apply(this, [this.east, this.width]);
} else if (p$1.defined$java_util_List$S$S.apply(this, [this.horizontalHistory, "HorizontalCenter", "Width"])) {
this.x=p$1.difference$javax_swing_Spring$javax_swing_Spring.apply(this, [this.horizontalCenter, p$1.scale$javax_swing_Spring$F.apply(this, [this.width, 0.5])]);
} else if (p$1.defined$java_util_List$S$S.apply(this, [this.horizontalHistory, "HorizontalCenter", "East"])) {
this.x=p$1.difference$javax_swing_Spring$javax_swing_Spring.apply(this, [p$1.scale$javax_swing_Spring$F.apply(this, [this.horizontalCenter, 2.0]), this.east]);
}}return this.x;
});

Clazz.newMeth(C$, 'setY$javax_swing_Spring',  function (y) {
this.y=y;
p$1.pushConstraint$S$javax_swing_Spring$Z.apply(this, ["North", y, false]);
});

Clazz.newMeth(C$, 'getY$',  function () {
if (this.y == null ) {
if (p$1.defined$java_util_List$S$S.apply(this, [this.verticalHistory, "South", "Height"])) {
this.y=p$1.difference$javax_swing_Spring$javax_swing_Spring.apply(this, [this.south, this.height]);
} else if (p$1.defined$java_util_List$S$S.apply(this, [this.verticalHistory, "VerticalCenter", "Height"])) {
this.y=p$1.difference$javax_swing_Spring$javax_swing_Spring.apply(this, [this.verticalCenter, p$1.scale$javax_swing_Spring$F.apply(this, [this.height, 0.5])]);
} else if (p$1.defined$java_util_List$S$S.apply(this, [this.verticalHistory, "VerticalCenter", "South"])) {
this.y=p$1.difference$javax_swing_Spring$javax_swing_Spring.apply(this, [p$1.scale$javax_swing_Spring$F.apply(this, [this.verticalCenter, 2.0]), this.south]);
} else if (p$1.defined$java_util_List$S$S.apply(this, [this.verticalHistory, "Baseline", "Height"])) {
this.y=p$1.difference$javax_swing_Spring$javax_swing_Spring.apply(this, [this.baseline, p$1.heightToRelativeBaseline$javax_swing_Spring.apply(this, [this.height])]);
} else if (p$1.defined$java_util_List$S$S.apply(this, [this.verticalHistory, "Baseline", "South"])) {
this.y=p$1.scale$javax_swing_Spring$F.apply(this, [p$1.difference$javax_swing_Spring$javax_swing_Spring.apply(this, [this.baseline, p$1.heightToRelativeBaseline$javax_swing_Spring.apply(this, [this.south])]), 2.0]);
}}return this.y;
});

Clazz.newMeth(C$, 'setWidth$javax_swing_Spring',  function (width) {
this.width=width;
p$1.pushConstraint$S$javax_swing_Spring$Z.apply(this, ["Width", width, true]);
});

Clazz.newMeth(C$, 'getWidth$',  function () {
if (this.width == null ) {
if (this.horizontalHistory.contains$O("East")) {
this.width=p$1.difference$javax_swing_Spring$javax_swing_Spring.apply(this, [this.east, this.getX$()]);
} else if (this.horizontalHistory.contains$O("HorizontalCenter")) {
this.width=p$1.scale$javax_swing_Spring$F.apply(this, [p$1.difference$javax_swing_Spring$javax_swing_Spring.apply(this, [this.horizontalCenter, this.getX$()]), 2.0]);
}}return this.width;
});

Clazz.newMeth(C$, 'setHeight$javax_swing_Spring',  function (height) {
this.height=height;
p$1.pushConstraint$S$javax_swing_Spring$Z.apply(this, ["Height", height, false]);
});

Clazz.newMeth(C$, 'getHeight$',  function () {
if (this.height == null ) {
if (this.verticalHistory.contains$O("South")) {
this.height=p$1.difference$javax_swing_Spring$javax_swing_Spring.apply(this, [this.south, this.getY$()]);
} else if (this.verticalHistory.contains$O("VerticalCenter")) {
this.height=p$1.scale$javax_swing_Spring$F.apply(this, [p$1.difference$javax_swing_Spring$javax_swing_Spring.apply(this, [this.verticalCenter, this.getY$()]), 2.0]);
} else if (this.verticalHistory.contains$O("Baseline")) {
this.height=p$1.relativeBaselineToHeight$javax_swing_Spring.apply(this, [p$1.difference$javax_swing_Spring$javax_swing_Spring.apply(this, [this.baseline, this.getY$()])]);
}}return this.height;
});

Clazz.newMeth(C$, 'setEast$javax_swing_Spring',  function (east) {
this.east=east;
p$1.pushConstraint$S$javax_swing_Spring$Z.apply(this, ["East", east, true]);
}, p$1);

Clazz.newMeth(C$, 'getEast',  function () {
if (this.east == null ) {
this.east=p$1.sum$javax_swing_Spring$javax_swing_Spring.apply(this, [this.getX$(), this.getWidth$()]);
}return this.east;
}, p$1);

Clazz.newMeth(C$, 'setSouth$javax_swing_Spring',  function (south) {
this.south=south;
p$1.pushConstraint$S$javax_swing_Spring$Z.apply(this, ["South", south, false]);
}, p$1);

Clazz.newMeth(C$, 'getSouth',  function () {
if (this.south == null ) {
this.south=p$1.sum$javax_swing_Spring$javax_swing_Spring.apply(this, [this.getY$(), this.getHeight$()]);
}return this.south;
}, p$1);

Clazz.newMeth(C$, 'getHorizontalCenter',  function () {
if (this.horizontalCenter == null ) {
this.horizontalCenter=p$1.sum$javax_swing_Spring$javax_swing_Spring.apply(this, [this.getX$(), p$1.scale$javax_swing_Spring$F.apply(this, [this.getWidth$(), 0.5])]);
}return this.horizontalCenter;
}, p$1);

Clazz.newMeth(C$, 'setHorizontalCenter$javax_swing_Spring',  function (horizontalCenter) {
this.horizontalCenter=horizontalCenter;
p$1.pushConstraint$S$javax_swing_Spring$Z.apply(this, ["HorizontalCenter", horizontalCenter, true]);
}, p$1);

Clazz.newMeth(C$, 'getVerticalCenter',  function () {
if (this.verticalCenter == null ) {
this.verticalCenter=p$1.sum$javax_swing_Spring$javax_swing_Spring.apply(this, [this.getY$(), p$1.scale$javax_swing_Spring$F.apply(this, [this.getHeight$(), 0.5])]);
}return this.verticalCenter;
}, p$1);

Clazz.newMeth(C$, 'setVerticalCenter$javax_swing_Spring',  function (verticalCenter) {
this.verticalCenter=verticalCenter;
p$1.pushConstraint$S$javax_swing_Spring$Z.apply(this, ["VerticalCenter", verticalCenter, false]);
}, p$1);

Clazz.newMeth(C$, 'getBaseline',  function () {
if (this.baseline == null ) {
this.baseline=p$1.sum$javax_swing_Spring$javax_swing_Spring.apply(this, [this.getY$(), p$1.heightToRelativeBaseline$javax_swing_Spring.apply(this, [this.getHeight$()])]);
}return this.baseline;
}, p$1);

Clazz.newMeth(C$, 'setBaseline$javax_swing_Spring',  function (baseline) {
this.baseline=baseline;
p$1.pushConstraint$S$javax_swing_Spring$Z.apply(this, ["Baseline", baseline, false]);
}, p$1);

Clazz.newMeth(C$, 'setConstraint$S$javax_swing_Spring',  function (edgeName, s) {
edgeName=edgeName.intern$();
if (edgeName == "West") {
this.setX$javax_swing_Spring(s);
} else if (edgeName == "North") {
this.setY$javax_swing_Spring(s);
} else if (edgeName == "East") {
p$1.setEast$javax_swing_Spring.apply(this, [s]);
} else if (edgeName == "South") {
p$1.setSouth$javax_swing_Spring.apply(this, [s]);
} else if (edgeName == "HorizontalCenter") {
p$1.setHorizontalCenter$javax_swing_Spring.apply(this, [s]);
} else if (edgeName == "Width") {
this.setWidth$javax_swing_Spring(s);
} else if (edgeName == "Height") {
this.setHeight$javax_swing_Spring(s);
} else if (edgeName == "VerticalCenter") {
p$1.setVerticalCenter$javax_swing_Spring.apply(this, [s]);
} else if (edgeName == "Baseline") {
p$1.setBaseline$javax_swing_Spring.apply(this, [s]);
}});

Clazz.newMeth(C$, 'getConstraint$S',  function (edgeName) {
edgeName=edgeName.intern$();
return (edgeName == "West") ? this.getX$() : (edgeName == "North") ? this.getY$() : (edgeName == "East") ? p$1.getEast.apply(this, []) : (edgeName == "South") ? p$1.getSouth.apply(this, []) : (edgeName == "Width") ? this.getWidth$() : (edgeName == "Height") ? this.getHeight$() : (edgeName == "HorizontalCenter") ? p$1.getHorizontalCenter.apply(this, []) : (edgeName == "VerticalCenter") ? p$1.getVerticalCenter.apply(this, []) : (edgeName == "Baseline") ? p$1.getBaseline.apply(this, []) : null;
});

Clazz.newMeth(C$, 'reset$',  function () {
var allSprings=Clazz.array($I$(2), -1, [this.x, this.y, this.width, this.height, this.east, this.south, this.horizontalCenter, this.verticalCenter, this.baseline]);
for (var i=0; i < allSprings.length; i++) {
var s=allSprings[i];
if (s != null ) {
s.setValue$I(-2147483648);
}}
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SpringLayout, "SpringProxy", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.Spring');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['edgeName'],'O',['c','java.awt.Component','l','javax.swing.SpringLayout']]]

Clazz.newMeth(C$, 'c$$S$java_awt_Component$javax_swing_SpringLayout',  function (edgeName, c, l) {
Clazz.super_(C$, this);
this.edgeName=edgeName;
this.c=c;
this.l=l;
}, 1);

Clazz.newMeth(C$, 'getConstraint',  function () {
return this.l.getConstraints$java_awt_Component(this.c).getConstraint$S(this.edgeName);
}, p$2);

Clazz.newMeth(C$, 'getMinimumValue$',  function () {
return p$2.getConstraint.apply(this, []).getMinimumValue$();
});

Clazz.newMeth(C$, 'getPreferredValue$',  function () {
return p$2.getConstraint.apply(this, []).getPreferredValue$();
});

Clazz.newMeth(C$, 'getMaximumValue$',  function () {
return p$2.getConstraint.apply(this, []).getMaximumValue$();
});

Clazz.newMeth(C$, 'getValue$',  function () {
return p$2.getConstraint.apply(this, []).getValue$();
});

Clazz.newMeth(C$, 'setValue$I',  function (size) {
p$2.getConstraint.apply(this, []).setValue$I(size);
});

Clazz.newMeth(C$, 'isCyclic$javax_swing_SpringLayout',  function (l) {
return l.isCyclic$javax_swing_Spring(p$2.getConstraint.apply(this, []));
});

Clazz.newMeth(C$, 'toString',  function () {
return "SpringProxy for " + this.edgeName + " edge of " + this.c.getName$() + "." ;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:02 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
