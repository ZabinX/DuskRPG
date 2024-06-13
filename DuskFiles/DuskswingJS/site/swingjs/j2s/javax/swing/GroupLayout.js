(function(){var P$=Clazz.newPackage("javax.swing"),p$1={},p$2={},p$3={},p$4={},p$5={},p$6={},p$7={},p$8={},p$9={},p$10={},p$11={},I$=[[0,['java.awt.Component','.BaselineResizeBehavior'],'java.util.ArrayList',['javax.swing.GroupLayout','.ComponentSpring'],['javax.swing.GroupLayout','.GapSpring'],['javax.swing.GroupLayout','.PreferredGapSpring'],['javax.swing.LayoutStyle','.ComponentPlacement'],['javax.swing.GroupLayout','.AutoPreferredGapSpring'],['javax.swing.GroupLayout','.ContainerAutoPreferredGapSpring'],['javax.swing.GroupLayout','.SpringDelta'],'java.util.Collections',['javax.swing.GroupLayout','.Alignment'],'javax.swing.GroupLayout',['javax.swing.GroupLayout','.AutoPreferredGapMatch'],['javax.swing.GroupLayout','.LinkInfo'],'java.util.HashMap','java.util.HashSet',['javax.swing.GroupLayout','.SequentialGroup'],['javax.swing.GroupLayout','.BaselineGroup'],['javax.swing.GroupLayout','.ParallelGroup'],'javax.swing.LayoutStyle','java.awt.Dimension',['javax.swing.GroupLayout','.ComponentInfo'],'StringBuffer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GroupLayout", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'java.awt.LayoutManager2');
C$.$classes$=[['Alignment',25],['Spring',1026],['Group',1025],['SequentialGroup',1],['SpringDelta',26],['ParallelGroup',1],['BaselineGroup',2],['ComponentSpring',18],['PreferredGapSpring',2],['GapSpring',2],['AutoPreferredGapSpring',2],['AutoPreferredGapMatch',26],['ContainerAutoPreferredGapSpring',2],['LinkInfo',10],['ComponentInfo',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['autocreatePadding','autocreateContainerPadding','springsChanged','isValid','hasPreferredPaddingSprings','honorsVisibility'],'O',['horizontalGroup','javax.swing.GroupLayout.Group','+verticalGroup','componentInfos','java.util.Map','host','java.awt.Container','tmpParallelSet','java.util.Set','layoutStyle','javax.swing.LayoutStyle']]]

Clazz.newMeth(C$, 'checkSize$I$I$I$Z',  function (min, pref, max, isComponentSpring) {
C$.checkResizeType$I$Z(min, isComponentSpring);
if (!isComponentSpring && pref < 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Pref must be >= 0"]);
} else if (isComponentSpring) {
C$.checkResizeType$I$Z(pref, true);
}C$.checkResizeType$I$Z(max, isComponentSpring);
C$.checkLessThan$I$I(min, pref);
C$.checkLessThan$I$I(pref, max);
}, 1);

Clazz.newMeth(C$, 'checkResizeType$I$Z',  function (type, isComponentSpring) {
if (type < 0 && ((isComponentSpring && type != -1  && type != -2 ) || (!isComponentSpring && type != -2 ) ) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid size"]);
}}, 1);

Clazz.newMeth(C$, 'checkLessThan$I$I',  function (min, max) {
if (min >= 0 && max >= 0  && min > max ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Following is not met: min<=pref<=max"]);
}}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Container',  function (host) {
;C$.$init$.apply(this);
if (host == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Container must be non-null"]);
}this.honorsVisibility=true;
this.host=host;
this.setHorizontalGroup$javax_swing_GroupLayout_Group(this.createParallelGroup$javax_swing_GroupLayout_Alignment$Z($I$(11).LEADING, true));
this.setVerticalGroup$javax_swing_GroupLayout_Group(this.createParallelGroup$javax_swing_GroupLayout_Alignment$Z($I$(11).LEADING, true));
this.componentInfos=Clazz.new_($I$(15,1));
this.tmpParallelSet=Clazz.new_($I$(16,1));
}, 1);

Clazz.newMeth(C$, 'setHonorsVisibility$Z',  function (honorsVisibility) {
if (this.honorsVisibility != honorsVisibility ) {
this.honorsVisibility=honorsVisibility;
this.springsChanged=true;
this.isValid=false;
p$4.invalidateHost.apply(this, []);
}});

Clazz.newMeth(C$, 'getHonorsVisibility$',  function () {
return this.honorsVisibility;
});

Clazz.newMeth(C$, 'setHonorsVisibility$java_awt_Component$Boolean',  function (component, honorsVisibility) {
if (component == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Component must be non-null"]);
}p$4.getComponentInfo$java_awt_Component.apply(this, [component]).setHonorsVisibility$Boolean(honorsVisibility);
this.springsChanged=true;
this.isValid=false;
p$4.invalidateHost.apply(this, []);
});

Clazz.newMeth(C$, 'setAutoCreateGaps$Z',  function (autoCreatePadding) {
if (this.autocreatePadding != autoCreatePadding ) {
this.autocreatePadding=autoCreatePadding;
p$4.invalidateHost.apply(this, []);
}});

Clazz.newMeth(C$, 'getAutoCreateGaps$',  function () {
return this.autocreatePadding;
});

Clazz.newMeth(C$, 'setAutoCreateContainerGaps$Z',  function (autoCreateContainerPadding) {
if (this.autocreateContainerPadding != autoCreateContainerPadding ) {
this.autocreateContainerPadding=autoCreateContainerPadding;
this.horizontalGroup=p$4.createTopLevelGroup$javax_swing_GroupLayout_Group.apply(this, [p$4.getHorizontalGroup.apply(this, [])]);
this.verticalGroup=p$4.createTopLevelGroup$javax_swing_GroupLayout_Group.apply(this, [p$4.getVerticalGroup.apply(this, [])]);
p$4.invalidateHost.apply(this, []);
}});

Clazz.newMeth(C$, 'getAutoCreateContainerGaps$',  function () {
return this.autocreateContainerPadding;
});

Clazz.newMeth(C$, 'setHorizontalGroup$javax_swing_GroupLayout_Group',  function (group) {
if (group == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Group must be non-null"]);
}this.horizontalGroup=p$4.createTopLevelGroup$javax_swing_GroupLayout_Group.apply(this, [group]);
p$4.invalidateHost.apply(this, []);
});

Clazz.newMeth(C$, 'getHorizontalGroup',  function () {
var index=0;
if (this.horizontalGroup.springs.size$() > 1) {
index=1;
}return this.horizontalGroup.springs.get$I(index);
}, p$4);

Clazz.newMeth(C$, 'setVerticalGroup$javax_swing_GroupLayout_Group',  function (group) {
if (group == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Group must be non-null"]);
}this.verticalGroup=p$4.createTopLevelGroup$javax_swing_GroupLayout_Group.apply(this, [group]);
p$4.invalidateHost.apply(this, []);
});

Clazz.newMeth(C$, 'getVerticalGroup',  function () {
var index=0;
if (this.verticalGroup.springs.size$() > 1) {
index=1;
}return this.verticalGroup.springs.get$I(index);
}, p$4);

Clazz.newMeth(C$, 'createTopLevelGroup$javax_swing_GroupLayout_Group',  function (specifiedGroup) {
var group=this.createSequentialGroup$();
if (this.getAutoCreateContainerGaps$()) {
group.addSpring$javax_swing_GroupLayout_Spring(Clazz.new_($I$(8,1),[this, null]));
group.addGroup$javax_swing_GroupLayout_Group(specifiedGroup);
group.addSpring$javax_swing_GroupLayout_Spring(Clazz.new_($I$(8,1),[this, null]));
} else {
group.addGroup$javax_swing_GroupLayout_Group(specifiedGroup);
}return group;
}, p$4);

Clazz.newMeth(C$, 'createSequentialGroup$',  function () {
return Clazz.new_($I$(17,1),[this, null]);
});

Clazz.newMeth(C$, 'createParallelGroup$',  function () {
return this.createParallelGroup$javax_swing_GroupLayout_Alignment($I$(11).LEADING);
});

Clazz.newMeth(C$, 'createParallelGroup$javax_swing_GroupLayout_Alignment',  function (alignment) {
return this.createParallelGroup$javax_swing_GroupLayout_Alignment$Z(alignment, true);
});

Clazz.newMeth(C$, 'createParallelGroup$javax_swing_GroupLayout_Alignment$Z',  function (alignment, resizable) {
if (alignment === $I$(11).BASELINE ) {
return Clazz.new_($I$(18,1).c$$Z,[this, null, resizable]);
}return Clazz.new_($I$(19,1).c$$javax_swing_GroupLayout_Alignment$Z,[this, null, alignment, resizable]);
});

Clazz.newMeth(C$, 'createBaselineGroup$Z$Z',  function (resizable, anchorBaselineToTop) {
return Clazz.new_($I$(18,1).c$$Z$Z,[this, null, resizable, anchorBaselineToTop]);
});

Clazz.newMeth(C$, 'linkSize$java_awt_ComponentA',  function (components) {
this.linkSize$I$java_awt_ComponentA(0, components);
this.linkSize$I$java_awt_ComponentA(1, components);
});

Clazz.newMeth(C$, 'linkSize$I$java_awt_ComponentA',  function (axis, components) {
if (components == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Components must be non-null"]);
}for (var counter=components.length - 1; counter >= 0; counter--) {
var c=components[counter];
if (components[counter] == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Components must be non-null"]);
}p$4.getComponentInfo$java_awt_Component.apply(this, [c]);
}
var glAxis;
if (axis == 0) {
glAxis=0;
} else if (axis == 1) {
glAxis=1;
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Axis must be one of SwingConstants.HORIZONTAL or SwingConstants.VERTICAL"]);
}var master=p$4.getComponentInfo$java_awt_Component.apply(this, [components[components.length - 1]]).getLinkInfo$I(glAxis);
for (var counter=components.length - 2; counter >= 0; counter--) {
master.add$javax_swing_GroupLayout_ComponentInfo(p$4.getComponentInfo$java_awt_Component.apply(this, [components[counter]]));
}
p$4.invalidateHost.apply(this, []);
});

Clazz.newMeth(C$, 'replace$java_awt_Component$java_awt_Component',  function (existingComponent, newComponent) {
if (existingComponent == null  || newComponent == null  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Components must be non-null"]);
}if (this.springsChanged) {
p$4.registerComponents$javax_swing_GroupLayout_Group$I.apply(this, [this.horizontalGroup, 0]);
p$4.registerComponents$javax_swing_GroupLayout_Group$I.apply(this, [this.verticalGroup, 1]);
}var info=this.componentInfos.remove$O(existingComponent);
if (info == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Component must already exist"]);
}this.host.remove$java_awt_Component(existingComponent);
if (newComponent.getParent$() !== this.host ) {
this.host.add$java_awt_Component(newComponent);
}info.setComponent$java_awt_Component(newComponent);
this.componentInfos.put$O$O(newComponent, info);
p$4.invalidateHost.apply(this, []);
});

Clazz.newMeth(C$, 'setLayoutStyle$javax_swing_LayoutStyle',  function (layoutStyle) {
this.layoutStyle=layoutStyle;
p$4.invalidateHost.apply(this, []);
});

Clazz.newMeth(C$, 'getLayoutStyle$',  function () {
return this.layoutStyle;
});

Clazz.newMeth(C$, 'getLayoutStyle0',  function () {
var layoutStyle=this.getLayoutStyle$();
if (layoutStyle == null ) {
layoutStyle=$I$(20).getInstance$();
}return layoutStyle;
}, p$4);

Clazz.newMeth(C$, 'invalidateHost',  function () {
if (Clazz.instanceOf(this.host, "javax.swing.JComponent")) {
(this.host).revalidate$();
} else {
this.host.invalidate$();
}this.host.秘repaint$();
}, p$4);

Clazz.newMeth(C$, 'addLayoutComponent$S$java_awt_Component',  function (name, component) {
});

Clazz.newMeth(C$, 'removeLayoutComponent$java_awt_Component',  function (component) {
var info=this.componentInfos.remove$O(component);
if (info != null ) {
info.dispose$();
this.springsChanged=true;
this.isValid=false;
}});

Clazz.newMeth(C$, 'preferredLayoutSize$java_awt_Container',  function (parent) {
p$4.checkParent$java_awt_Container.apply(this, [parent]);
p$4.prepare$I.apply(this, [1]);
return p$4.adjustSize$I$I.apply(this, [this.horizontalGroup.getPreferredSize$I(0), this.verticalGroup.getPreferredSize$I(1)]);
});

Clazz.newMeth(C$, 'minimumLayoutSize$java_awt_Container',  function (parent) {
p$4.checkParent$java_awt_Container.apply(this, [parent]);
p$4.prepare$I.apply(this, [0]);
return p$4.adjustSize$I$I.apply(this, [this.horizontalGroup.getMinimumSize$I(0), this.verticalGroup.getMinimumSize$I(1)]);
});

Clazz.newMeth(C$, 'layoutContainer$java_awt_Container',  function (parent) {
p$4.prepare$I.apply(this, [3]);
var insets=parent.getInsets$();
var width=parent.getWidth$() - insets.left - insets.right ;
var height=parent.getHeight$() - insets.top - insets.bottom ;
var ltr=p$4.isLeftToRight.apply(this, []);
if (this.getAutoCreateGaps$() || this.getAutoCreateContainerGaps$() || this.hasPreferredPaddingSprings  ) {
p$4.calculateAutopadding$javax_swing_GroupLayout_Group$I$I$I$I.apply(this, [this.horizontalGroup, 0, 3, 0, width]);
p$4.calculateAutopadding$javax_swing_GroupLayout_Group$I$I$I$I.apply(this, [this.verticalGroup, 1, 3, 0, height]);
}this.horizontalGroup.setSize$I$I$I(0, 0, width);
this.verticalGroup.setSize$I$I$I(1, 0, height);
for (var info, $info = this.componentInfos.values$().iterator$(); $info.hasNext$()&&((info=($info.next$())),1);) {
info.setBounds$java_awt_Insets$I$Z(insets, width, ltr);
}
});

Clazz.newMeth(C$, 'addLayoutComponent$java_awt_Component$O',  function (component, constraints) {
});

Clazz.newMeth(C$, 'maximumLayoutSize$java_awt_Container',  function (parent) {
p$4.checkParent$java_awt_Container.apply(this, [parent]);
p$4.prepare$I.apply(this, [2]);
return p$4.adjustSize$I$I.apply(this, [this.horizontalGroup.getMaximumSize$I(0), this.verticalGroup.getMaximumSize$I(1)]);
});

Clazz.newMeth(C$, 'getLayoutAlignmentX$java_awt_Container',  function (parent) {
p$4.checkParent$java_awt_Container.apply(this, [parent]);
return 0.5;
});

Clazz.newMeth(C$, 'getLayoutAlignmentY$java_awt_Container',  function (parent) {
p$4.checkParent$java_awt_Container.apply(this, [parent]);
return 0.5;
});

Clazz.newMeth(C$, 'invalidateLayout$java_awt_Container',  function (parent) {
p$4.checkParent$java_awt_Container.apply(this, [parent]);
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(parent.getTreeLock$());
{
this.isValid=false;
}});

Clazz.newMeth(C$, 'prepare$I',  function (sizeType) {
var visChanged=false;
if (!this.isValid) {
this.isValid=true;
this.horizontalGroup.setSize$I$I$I(0, -2147483648, -2147483648);
this.verticalGroup.setSize$I$I$I(1, -2147483648, -2147483648);
for (var ci, $ci = this.componentInfos.values$().iterator$(); $ci.hasNext$()&&((ci=($ci.next$())),1);) {
if (ci.updateVisibility$()) {
visChanged=true;
}ci.clearCachedSize$();
}
}if (this.springsChanged) {
p$4.registerComponents$javax_swing_GroupLayout_Group$I.apply(this, [this.horizontalGroup, 0]);
p$4.registerComponents$javax_swing_GroupLayout_Group$I.apply(this, [this.verticalGroup, 1]);
}if (this.springsChanged || visChanged ) {
p$4.checkComponents.apply(this, []);
this.horizontalGroup.removeAutopadding$();
this.verticalGroup.removeAutopadding$();
if (this.getAutoCreateGaps$()) {
p$4.insertAutopadding$Z.apply(this, [true]);
} else if (this.hasPreferredPaddingSprings || this.getAutoCreateContainerGaps$() ) {
p$4.insertAutopadding$Z.apply(this, [false]);
}this.springsChanged=false;
}if (sizeType != 3 && (this.getAutoCreateGaps$() || this.getAutoCreateContainerGaps$() || this.hasPreferredPaddingSprings  ) ) {
p$4.calculateAutopadding$javax_swing_GroupLayout_Group$I$I$I$I.apply(this, [this.horizontalGroup, 0, sizeType, 0, 0]);
p$4.calculateAutopadding$javax_swing_GroupLayout_Group$I$I$I$I.apply(this, [this.verticalGroup, 1, sizeType, 0, 0]);
}}, p$4);

Clazz.newMeth(C$, 'calculateAutopadding$javax_swing_GroupLayout_Group$I$I$I$I',  function (group, axis, sizeType, origin, size) {
group.unsetAutopadding$();
switch (sizeType) {
case 0:
size=group.getMinimumSize$I(axis);
break;
case 1:
size=group.getPreferredSize$I(axis);
break;
case 2:
size=group.getMaximumSize$I(axis);
break;
default:
break;
}
group.setSize$I$I$I(axis, origin, size);
group.calculateAutopadding$I(axis);
}, p$4);

Clazz.newMeth(C$, 'checkComponents',  function () {
for (var info, $info = this.componentInfos.values$().iterator$(); $info.hasNext$()&&((info=($info.next$())),1);) {
if (info.horizontalSpring == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,[info.component + " is not attached to a horizontal group"]);
}if (info.verticalSpring == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,[info.component + " is not attached to a vertical group"]);
}}
}, p$4);

Clazz.newMeth(C$, 'registerComponents$javax_swing_GroupLayout_Group$I',  function (group, axis) {
var springs=group.springs;
for (var counter=springs.size$() - 1; counter >= 0; counter--) {
var spring=springs.get$I(counter);
if (Clazz.instanceOf(spring, "javax.swing.GroupLayout.ComponentSpring")) {
(spring).installIfNecessary$I(axis);
} else if (Clazz.instanceOf(spring, "javax.swing.GroupLayout.Group")) {
p$4.registerComponents$javax_swing_GroupLayout_Group$I.apply(this, [spring, axis]);
}}
}, p$4);

Clazz.newMeth(C$, 'adjustSize$I$I',  function (width, height) {
var insets=this.host.getInsets$();
return Clazz.new_($I$(21,1).c$$I$I,[width + insets.left + insets.right , height + insets.top + insets.bottom ]);
}, p$4);

Clazz.newMeth(C$, 'checkParent$java_awt_Container',  function (parent) {
if (parent !== this.host ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["GroupLayout can only be used with one Container at a time"]);
}}, p$4);

Clazz.newMeth(C$, 'getComponentInfo$java_awt_Component',  function (component) {
var info=this.componentInfos.get$O(component);
if (info == null ) {
info=Clazz.new_($I$(22,1).c$$java_awt_Component,[this, null, component]);
this.componentInfos.put$O$O(component, info);
if (component.getParent$() !== this.host ) {
this.host.add$java_awt_Component(component);
}}return info;
}, p$4);

Clazz.newMeth(C$, 'insertAutopadding$Z',  function (insert) {
this.horizontalGroup.insertAutopadding$I$java_util_List$java_util_List$java_util_List$java_util_List$Z(0, Clazz.new_($I$(2,1).c$$I,[1]), Clazz.new_($I$(2,1).c$$I,[1]), Clazz.new_($I$(2,1).c$$I,[1]), Clazz.new_($I$(2,1).c$$I,[1]), insert);
this.verticalGroup.insertAutopadding$I$java_util_List$java_util_List$java_util_List$java_util_List$Z(1, Clazz.new_($I$(2,1).c$$I,[1]), Clazz.new_($I$(2,1).c$$I,[1]), Clazz.new_($I$(2,1).c$$I,[1]), Clazz.new_($I$(2,1).c$$I,[1]), insert);
}, p$4);

Clazz.newMeth(C$, 'areParallelSiblings$java_awt_Component$java_awt_Component$I',  function (source, target, axis) {
var sourceInfo=p$4.getComponentInfo$java_awt_Component.apply(this, [source]);
var targetInfo=p$4.getComponentInfo$java_awt_Component.apply(this, [target]);
var sourceSpring;
var targetSpring;
if (axis == 0) {
sourceSpring=sourceInfo.horizontalSpring;
targetSpring=targetInfo.horizontalSpring;
} else {
sourceSpring=sourceInfo.verticalSpring;
targetSpring=targetInfo.verticalSpring;
}var sourcePath=this.tmpParallelSet;
sourcePath.clear$();
var spring=sourceSpring.getParent$();
while (spring != null ){
sourcePath.add$O(spring);
spring=spring.getParent$();
}
spring=targetSpring.getParent$();
while (spring != null ){
if (sourcePath.contains$O(spring)) {
sourcePath.clear$();
while (spring != null ){
if (Clazz.instanceOf(spring, "javax.swing.GroupLayout.ParallelGroup")) {
return true;
}spring=spring.getParent$();
}
return false;
}spring=spring.getParent$();
}
sourcePath.clear$();
return false;
}, p$4);

Clazz.newMeth(C$, 'isLeftToRight',  function () {
return this.host.getComponentOrientation$().isLeftToRight$();
}, p$4);

Clazz.newMeth(C$, 'toString',  function () {
if (this.springsChanged) {
p$4.registerComponents$javax_swing_GroupLayout_Group$I.apply(this, [this.horizontalGroup, 0]);
p$4.registerComponents$javax_swing_GroupLayout_Group$I.apply(this, [this.verticalGroup, 1]);
}var buffer=Clazz.new_($I$(23,1));
buffer.append$S("HORIZONTAL\n");
p$4.createSpringDescription$StringBuffer$javax_swing_GroupLayout_Spring$S$I.apply(this, [buffer, this.horizontalGroup, "  ", 0]);
buffer.append$S("\nVERTICAL\n");
p$4.createSpringDescription$StringBuffer$javax_swing_GroupLayout_Spring$S$I.apply(this, [buffer, this.verticalGroup, "  ", 1]);
return buffer.toString();
});

Clazz.newMeth(C$, 'createSpringDescription$StringBuffer$javax_swing_GroupLayout_Spring$S$I',  function (buffer, spring, indent, axis) {
var origin="";
var padding="";
if (Clazz.instanceOf(spring, "javax.swing.GroupLayout.ComponentSpring")) {
var cSpring=spring;
origin=Integer.toString$I(cSpring.getOrigin$()) + " ";
var name=cSpring.getComponent$().getName$();
if (name != null ) {
origin="name=" + name + ", " ;
}}if (Clazz.instanceOf(spring, "javax.swing.GroupLayout.AutoPreferredGapSpring")) {
var paddingSpring=spring;
padding=", userCreated=" + paddingSpring.getUserCreated$() + ", matches=" + paddingSpring.getMatchDescription$() ;
}buffer.append$S(indent + spring.getClass$().getName$() + " " + Integer.toHexString$I(spring.hashCode$()) + " " + origin + ", size=" + spring.getSize$() + ", alignment=" + spring.getAlignment$() + " prefs=[" + spring.getMinimumSize$I(axis) + " " + spring.getPreferredSize$I(axis) + " " + spring.getMaximumSize$I(axis) + padding + "]\n" );
if (Clazz.instanceOf(spring, "javax.swing.GroupLayout.Group")) {
var springs=(spring).springs;
indent+="  ";
for (var counter=0; counter < springs.size$(); counter++) {
p$4.createSpringDescription$StringBuffer$javax_swing_GroupLayout_Spring$S$I.apply(this, [buffer, springs.get$I(counter), indent, axis]);
}
}}, p$4);
;
(function(){/*e*/var C$=Clazz.newClass(P$.GroupLayout, "Alignment", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "LEADING", 0, []);
Clazz.newEnumConst($vals, C$.c$, "TRAILING", 1, []);
Clazz.newEnumConst($vals, C$.c$, "CENTER", 2, []);
Clazz.newEnumConst($vals, C$.c$, "BASELINE", 3, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.GroupLayout, "Spring", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['size','min','max','pref'],'O',['parent','javax.swing.GroupLayout.Spring','alignment','javax.swing.GroupLayout.Alignment']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.min=this.pref=this.max=-2147483648;
}, 1);

Clazz.newMeth(C$, 'setParent$javax_swing_GroupLayout_Spring',  function (parent) {
this.parent=parent;
});

Clazz.newMeth(C$, 'getParent$',  function () {
return this.parent;
});

Clazz.newMeth(C$, 'setAlignment$javax_swing_GroupLayout_Alignment',  function (alignment) {
this.alignment=alignment;
});

Clazz.newMeth(C$, 'getAlignment$',  function () {
return this.alignment;
});

Clazz.newMeth(C$, 'getMinimumSize$I',  function (axis) {
if (this.min == -2147483648) {
this.min=this.constrain$I(this.calculateMinimumSize$I(axis));
}return this.min;
});

Clazz.newMeth(C$, 'getPreferredSize$I',  function (axis) {
if (this.pref == -2147483648) {
this.pref=this.constrain$I(this.calculatePreferredSize$I(axis));
}return this.pref;
});

Clazz.newMeth(C$, 'getMaximumSize$I',  function (axis) {
if (this.max == -2147483648) {
this.max=this.constrain$I(this.calculateMaximumSize$I(axis));
}return this.max;
});

Clazz.newMeth(C$, 'setSize$I$I$I',  function (axis, origin, size) {
this.size=size;
if (size == -2147483648) {
this.unset$();
}});

Clazz.newMeth(C$, 'unset$',  function () {
this.size=this.min=this.pref=this.max=-2147483648;
});

Clazz.newMeth(C$, 'getSize$',  function () {
return this.size;
});

Clazz.newMeth(C$, 'constrain$I',  function (value) {
return Math.min(value, 32767);
});

Clazz.newMeth(C$, 'getBaseline$',  function () {
return -1;
});

Clazz.newMeth(C$, 'getBaselineResizeBehavior$',  function () {
return $I$(1).OTHER;
});

Clazz.newMeth(C$, 'isResizable$I',  function (axis) {
var min=this.getMinimumSize$I(axis);
var pref=this.getPreferredSize$I(axis);
return (min != pref || pref != this.getMaximumSize$I(axis) );
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.GroupLayout, "Group", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['javax.swing.GroupLayout','.Spring']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['springs','java.util.List']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.springs=Clazz.new_($I$(2,1));
}, 1);

Clazz.newMeth(C$, 'addGroup$javax_swing_GroupLayout_Group',  function (group) {
return this.addSpring$javax_swing_GroupLayout_Spring(group);
});

Clazz.newMeth(C$, 'addComponent$java_awt_Component',  function (component) {
return this.addComponent$java_awt_Component$I$I$I(component, -1, -1, -1);
});

Clazz.newMeth(C$, 'addComponent$java_awt_Component$I$I$I',  function (component, min, pref, max) {
return this.addSpring$javax_swing_GroupLayout_Spring(Clazz.new_($I$(3,1).c$$java_awt_Component$I$I$I,[this, null, component, min, pref, max]));
});

Clazz.newMeth(C$, 'addGap$I',  function (size) {
return this.addGap$I$I$I(size, size, size);
});

Clazz.newMeth(C$, 'addGap$I$I$I',  function (min, pref, max) {
return this.addSpring$javax_swing_GroupLayout_Spring(Clazz.new_($I$(4,1).c$$I$I$I,[this, null, min, pref, max]));
});

Clazz.newMeth(C$, 'getSpring$I',  function (index) {
return this.springs.get$I(index);
});

Clazz.newMeth(C$, 'indexOf$javax_swing_GroupLayout_Spring',  function (spring) {
return this.springs.indexOf$O(spring);
});

Clazz.newMeth(C$, 'addSpring$javax_swing_GroupLayout_Spring',  function (spring) {
this.springs.add$O(spring);
spring.setParent$javax_swing_GroupLayout_Spring(this);
if (!(Clazz.instanceOf(spring, "javax.swing.GroupLayout.AutoPreferredGapSpring")) || !(spring).getUserCreated$() ) {
this.b$['javax.swing.GroupLayout'].springsChanged=true;
}return this;
});

Clazz.newMeth(C$, 'setSize$I$I$I',  function (axis, origin, size) {
C$.superclazz.prototype.setSize$I$I$I.apply(this, [axis, origin, size]);
if (size == -2147483648) {
for (var counter=this.springs.size$() - 1; counter >= 0; counter--) {
this.getSpring$I(counter).setSize$I$I$I(axis, origin, size);
}
} else {
this.setValidSize$I$I$I(axis, origin, size);
}});

Clazz.newMeth(C$, 'calculateMinimumSize$I',  function (axis) {
return this.calculateSize$I$I(axis, 0);
});

Clazz.newMeth(C$, 'calculatePreferredSize$I',  function (axis) {
return this.calculateSize$I$I(axis, 1);
});

Clazz.newMeth(C$, 'calculateMaximumSize$I',  function (axis) {
return this.calculateSize$I$I(axis, 2);
});

Clazz.newMeth(C$, 'calculateSize$I$I',  function (axis, type) {
var count=this.springs.size$();
if (count == 0) {
return 0;
}if (count == 1) {
return this.getSpringSize$javax_swing_GroupLayout_Spring$I$I(this.getSpring$I(0), axis, type);
}var size=this.constrain$I(this.operator$I$I(this.getSpringSize$javax_swing_GroupLayout_Spring$I$I(this.getSpring$I(0), axis, type), this.getSpringSize$javax_swing_GroupLayout_Spring$I$I(this.getSpring$I(1), axis, type)));
for (var counter=2; counter < count; counter++) {
size=this.constrain$I(this.operator$I$I(size, this.getSpringSize$javax_swing_GroupLayout_Spring$I$I(this.getSpring$I(counter), axis, type)));
}
return size;
});

Clazz.newMeth(C$, 'getSpringSize$javax_swing_GroupLayout_Spring$I$I',  function (spring, axis, type) {
switch (type) {
case 0:
return spring.getMinimumSize$I(axis);
case 1:
return spring.getPreferredSize$I(axis);
case 2:
return spring.getMaximumSize$I(axis);
}
return 0;
});

Clazz.newMeth(C$, 'removeAutopadding$',  function () {
this.unset$();
for (var counter=this.springs.size$() - 1; counter >= 0; counter--) {
var spring=this.springs.get$I(counter);
if (Clazz.instanceOf(spring, "javax.swing.GroupLayout.AutoPreferredGapSpring")) {
if ((spring).getUserCreated$()) {
(spring).reset$();
} else {
this.springs.remove$I(counter);
}} else if (Clazz.instanceOf(spring, "javax.swing.GroupLayout.Group")) {
(spring).removeAutopadding$();
}}
});

Clazz.newMeth(C$, 'unsetAutopadding$',  function () {
this.unset$();
for (var counter=this.springs.size$() - 1; counter >= 0; counter--) {
var spring=this.springs.get$I(counter);
if (Clazz.instanceOf(spring, "javax.swing.GroupLayout.AutoPreferredGapSpring")) {
(spring).unset$();
} else if (Clazz.instanceOf(spring, "javax.swing.GroupLayout.Group")) {
(spring).unsetAutopadding$();
}}
});

Clazz.newMeth(C$, 'calculateAutopadding$I',  function (axis) {
for (var counter=this.springs.size$() - 1; counter >= 0; counter--) {
var spring=this.springs.get$I(counter);
if (Clazz.instanceOf(spring, "javax.swing.GroupLayout.AutoPreferredGapSpring")) {
spring.unset$();
(spring).calculatePadding$I(axis);
} else if (Clazz.instanceOf(spring, "javax.swing.GroupLayout.Group")) {
(spring).calculateAutopadding$I(axis);
}}
this.unset$();
});

Clazz.newMeth(C$, 'willHaveZeroSize$Z',  function (treatAutopaddingAsZeroSized) {
for (var i=this.springs.size$() - 1; i >= 0; i--) {
var spring=this.springs.get$I(i);
if (!spring.willHaveZeroSize$Z(treatAutopaddingAsZeroSized)) {
return false;
}}
return true;
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.GroupLayout, "SequentialGroup", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['javax.swing.GroupLayout','.Group']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['baselineSpring','javax.swing.GroupLayout.Spring']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'addGroup$javax_swing_GroupLayout_Group',  function (group) {
return C$.superclazz.prototype.addGroup$javax_swing_GroupLayout_Group.apply(this, [group]);
});

Clazz.newMeth(C$, 'addGroup$Z$javax_swing_GroupLayout_Group',  function (useAsBaseline, group) {
C$.superclazz.prototype.addGroup$javax_swing_GroupLayout_Group.apply(this, [group]);
if (useAsBaseline) {
this.baselineSpring=group;
}return this;
});

Clazz.newMeth(C$, 'addComponent$java_awt_Component',  function (component) {
return C$.superclazz.prototype.addComponent$java_awt_Component.apply(this, [component]);
});

Clazz.newMeth(C$, 'addComponent$Z$java_awt_Component',  function (useAsBaseline, component) {
C$.superclazz.prototype.addComponent$java_awt_Component.apply(this, [component]);
if (useAsBaseline) {
this.baselineSpring=this.springs.get$I(this.springs.size$() - 1);
}return this;
});

Clazz.newMeth(C$, 'addComponent$java_awt_Component$I$I$I',  function (component, min, pref, max) {
return C$.superclazz.prototype.addComponent$java_awt_Component$I$I$I.apply(this, [component, min, pref, max]);
});

Clazz.newMeth(C$, 'addComponent$Z$java_awt_Component$I$I$I',  function (useAsBaseline, component, min, pref, max) {
C$.superclazz.prototype.addComponent$java_awt_Component$I$I$I.apply(this, [component, min, pref, max]);
if (useAsBaseline) {
this.baselineSpring=this.springs.get$I(this.springs.size$() - 1);
}return this;
});

Clazz.newMeth(C$, 'addGap$I',  function (size) {
return C$.superclazz.prototype.addGap$I.apply(this, [size]);
});

Clazz.newMeth(C$, 'addGap$I$I$I',  function (min, pref, max) {
return C$.superclazz.prototype.addGap$I$I$I.apply(this, [min, pref, max]);
});

Clazz.newMeth(C$, 'addPreferredGap$javax_swing_JComponent$javax_swing_JComponent$javax_swing_LayoutStyle_ComponentPlacement',  function (comp1, comp2, type) {
return this.addPreferredGap$javax_swing_JComponent$javax_swing_JComponent$javax_swing_LayoutStyle_ComponentPlacement$I$I(comp1, comp2, type, -1, -2);
});

Clazz.newMeth(C$, 'addPreferredGap$javax_swing_JComponent$javax_swing_JComponent$javax_swing_LayoutStyle_ComponentPlacement$I$I',  function (comp1, comp2, type, pref, max) {
if (type == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Type must be non-null"]);
}if (comp1 == null  || comp2 == null  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Components must be non-null"]);
}p$1.checkPreferredGapValues$I$I.apply(this, [pref, max]);
return this.addSpring$javax_swing_GroupLayout_Spring(Clazz.new_($I$(5,1).c$$javax_swing_JComponent$javax_swing_JComponent$javax_swing_LayoutStyle_ComponentPlacement$I$I,[this, null, comp1, comp2, type, pref, max]));
});

Clazz.newMeth(C$, 'addPreferredGap$javax_swing_LayoutStyle_ComponentPlacement',  function (type) {
return this.addPreferredGap$javax_swing_LayoutStyle_ComponentPlacement$I$I(type, -1, -1);
});

Clazz.newMeth(C$, 'addPreferredGap$javax_swing_LayoutStyle_ComponentPlacement$I$I',  function (type, pref, max) {
if (type !== $I$(6).RELATED  && type !== $I$(6).UNRELATED  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Type must be one of LayoutStyle.ComponentPlacement.RELATED or LayoutStyle.ComponentPlacement.UNRELATED"]);
}p$1.checkPreferredGapValues$I$I.apply(this, [pref, max]);
this.b$['javax.swing.GroupLayout'].hasPreferredPaddingSprings=true;
return this.addSpring$javax_swing_GroupLayout_Spring(Clazz.new_($I$(7,1).c$$javax_swing_LayoutStyle_ComponentPlacement$I$I,[this, null, type, pref, max]));
});

Clazz.newMeth(C$, 'addContainerGap$',  function () {
return this.addContainerGap$I$I(-1, -1);
});

Clazz.newMeth(C$, 'addContainerGap$I$I',  function (pref, max) {
if ((pref < 0 && pref != -1 ) || (max < 0 && max != -1  && max != -2 ) || (pref >= 0 && max >= 0  && pref > max )  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Pref and max must be either DEFAULT_VALUE or >= 0 and pref <= max"]);
}this.b$['javax.swing.GroupLayout'].hasPreferredPaddingSprings=true;
return this.addSpring$javax_swing_GroupLayout_Spring(Clazz.new_($I$(8,1).c$$I$I,[this, null, pref, max]));
});

Clazz.newMeth(C$, 'operator$I$I',  function (a, b) {
return this.constrain$I(a) + this.constrain$I(b);
});

Clazz.newMeth(C$, 'setValidSize$I$I$I',  function (axis, origin, size) {
var pref=this.getPreferredSize$I(axis);
if (size == pref) {
for (var spring, $spring = this.springs.iterator$(); $spring.hasNext$()&&((spring=($spring.next$())),1);) {
var springPref=spring.getPreferredSize$I(axis);
spring.setSize$I$I$I(axis, origin, springPref);
origin+=springPref;
}
} else if (this.springs.size$() == 1) {
var spring=this.getSpring$I(0);
spring.setSize$I$I$I(axis, origin, Math.min(Math.max(size, spring.getMinimumSize$I(axis)), spring.getMaximumSize$I(axis)));
} else if (this.springs.size$() > 1) {
p$1.setValidSizeNotPreferred$I$I$I.apply(this, [axis, origin, size]);
}});

Clazz.newMeth(C$, 'setValidSizeNotPreferred$I$I$I',  function (axis, origin, size) {
var delta=size - this.getPreferredSize$I(axis);
var useMin=(delta < 0);
var springCount=this.springs.size$();
if (useMin) {
delta*=-1;
}var resizable=p$1.buildResizableList$I$Z.apply(this, [axis, useMin]);
var resizableCount=resizable.size$();
if (resizableCount > 0) {
var sDelta=(delta/resizableCount|0);
var slop=delta - sDelta * resizableCount;
var sizes=Clazz.array(Integer.TYPE, [springCount]);
var sign=useMin ? -1 : 1;
for (var counter=0; counter < resizableCount; counter++) {
var springDelta=resizable.get$I(counter);
if ((counter + 1) == resizableCount) {
sDelta+=slop;
}springDelta.delta=Math.min(sDelta, springDelta.delta);
delta-=springDelta.delta;
if (springDelta.delta != sDelta && counter + 1 < resizableCount ) {
sDelta=(delta/(resizableCount - counter - 1 )|0);
slop=delta - sDelta * (resizableCount - counter - 1 );
}sizes[springDelta.index]=sign * springDelta.delta;
}
for (var counter=0; counter < springCount; counter++) {
var spring=this.getSpring$I(counter);
var sSize=spring.getPreferredSize$I(axis) + sizes[counter];
spring.setSize$I$I$I(axis, origin, sSize);
origin+=sSize;
}
} else {
for (var counter=0; counter < springCount; counter++) {
var spring=this.getSpring$I(counter);
var sSize;
if (useMin) {
sSize=spring.getMinimumSize$I(axis);
} else {
sSize=spring.getMaximumSize$I(axis);
}spring.setSize$I$I$I(axis, origin, sSize);
origin+=sSize;
}
}}, p$1);

Clazz.newMeth(C$, 'buildResizableList$I$Z',  function (axis, useMin) {
var size=this.springs.size$();
var sorted=Clazz.new_($I$(2,1).c$$I,[size]);
for (var counter=0; counter < size; counter++) {
var spring=this.getSpring$I(counter);
var sDelta;
if (useMin) {
sDelta=spring.getPreferredSize$I(axis) - spring.getMinimumSize$I(axis);
} else {
sDelta=spring.getMaximumSize$I(axis) - spring.getPreferredSize$I(axis);
}if (sDelta > 0) {
sorted.add$O(Clazz.new_($I$(9,1).c$$I$I,[counter, sDelta]));
}}
$I$(10).sort$java_util_List(sorted);
return sorted;
}, p$1);

Clazz.newMeth(C$, 'indexOfNextNonZeroSpring$I$Z',  function (index, treatAutopaddingAsZeroSized) {
while (index < this.springs.size$()){
var spring=this.springs.get$I(index);
if (!spring.willHaveZeroSize$Z(treatAutopaddingAsZeroSized)) {
return index;
}++index;
}
return index;
}, p$1);

Clazz.newMeth(C$, 'insertAutopadding$I$java_util_List$java_util_List$java_util_List$java_util_List$Z',  function (axis, leadingPadding, trailingPadding, leading, trailing, insert) {
var newLeadingPadding=Clazz.new_($I$(2,1).c$$java_util_Collection,[leadingPadding]);
var newTrailingPadding=Clazz.new_($I$(2,1).c$$I,[1]);
var newLeading=Clazz.new_($I$(2,1).c$$java_util_Collection,[leading]);
var newTrailing=null;
var counter=0;
while (counter < this.springs.size$()){
var spring=this.getSpring$I(counter);
if (Clazz.instanceOf(spring, "javax.swing.GroupLayout.AutoPreferredGapSpring")) {
if (newLeadingPadding.size$() == 0) {
var padding=spring;
padding.setSources$java_util_List(newLeading);
newLeading.clear$();
counter=p$1.indexOfNextNonZeroSpring$I$Z.apply(this, [counter + 1, true]);
if (counter == this.springs.size$()) {
if (!(Clazz.instanceOf(padding, "javax.swing.GroupLayout.ContainerAutoPreferredGapSpring"))) {
trailingPadding.add$O(padding);
}} else {
newLeadingPadding.clear$();
newLeadingPadding.add$O(padding);
}} else {
counter=p$1.indexOfNextNonZeroSpring$I$Z.apply(this, [counter + 1, true]);
}} else {
if (newLeading.size$() > 0 && insert ) {
var padding=Clazz.new_($I$(7,1),[this, null]);
this.springs.add$I$O(counter, padding);
continue;
}if (Clazz.instanceOf(spring, "javax.swing.GroupLayout.ComponentSpring")) {
var cSpring=spring;
if (!cSpring.isVisible$()) {
++counter;
continue;
}for (var gapSpring, $gapSpring = newLeadingPadding.iterator$(); $gapSpring.hasNext$()&&((gapSpring=($gapSpring.next$())),1);) {
gapSpring.addTarget$javax_swing_GroupLayout_ComponentSpring$I(cSpring, axis);
}
newLeading.clear$();
newLeadingPadding.clear$();
counter=p$1.indexOfNextNonZeroSpring$I$Z.apply(this, [counter + 1, false]);
if (counter == this.springs.size$()) {
trailing.add$O(cSpring);
} else {
newLeading.add$O(cSpring);
}} else if (Clazz.instanceOf(spring, "javax.swing.GroupLayout.Group")) {
if (newTrailing == null ) {
newTrailing=Clazz.new_($I$(2,1).c$$I,[1]);
} else {
newTrailing.clear$();
}newTrailingPadding.clear$();
(spring).insertAutopadding$I$java_util_List$java_util_List$java_util_List$java_util_List$Z(axis, newLeadingPadding, newTrailingPadding, newLeading, newTrailing, insert);
newLeading.clear$();
newLeadingPadding.clear$();
counter=p$1.indexOfNextNonZeroSpring$I$Z.apply(this, [counter + 1, (newTrailing.size$() == 0)]);
if (counter == this.springs.size$()) {
trailing.addAll$java_util_Collection(newTrailing);
trailingPadding.addAll$java_util_Collection(newTrailingPadding);
} else {
newLeading.addAll$java_util_Collection(newTrailing);
newLeadingPadding.addAll$java_util_Collection(newTrailingPadding);
}} else {
newLeadingPadding.clear$();
newLeading.clear$();
++counter;
}}}
});

Clazz.newMeth(C$, 'getBaseline$',  function () {
if (this.baselineSpring != null ) {
var baseline=this.baselineSpring.getBaseline$();
if (baseline >= 0) {
var size=0;
for (var spring, $spring = this.springs.iterator$(); $spring.hasNext$()&&((spring=($spring.next$())),1);) {
if (spring === this.baselineSpring ) {
return size + baseline;
} else {
size+=spring.getPreferredSize$I(1);
}}
}}return -1;
});

Clazz.newMeth(C$, 'getBaselineResizeBehavior$',  function () {
if (this.isResizable$I(1)) {
if (!this.baselineSpring.isResizable$I(1)) {
var leadingResizable=false;
for (var spring, $spring = this.springs.iterator$(); $spring.hasNext$()&&((spring=($spring.next$())),1);) {
if (spring === this.baselineSpring ) {
break;
} else if (spring.isResizable$I(1)) {
leadingResizable=true;
break;
}}
var trailingResizable=false;
for (var i=this.springs.size$() - 1; i >= 0; i--) {
var spring=this.springs.get$I(i);
if (spring === this.baselineSpring ) {
break;
}if (spring.isResizable$I(1)) {
trailingResizable=true;
break;
}}
if (leadingResizable && !trailingResizable ) {
return $I$(1).CONSTANT_DESCENT;
} else if (!leadingResizable && trailingResizable ) {
return $I$(1).CONSTANT_ASCENT;
}} else {
var brb=this.baselineSpring.getBaselineResizeBehavior$();
if (brb === $I$(1).CONSTANT_ASCENT ) {
for (var spring, $spring = this.springs.iterator$(); $spring.hasNext$()&&((spring=($spring.next$())),1);) {
if (spring === this.baselineSpring ) {
return $I$(1).CONSTANT_ASCENT;
}if (spring.isResizable$I(1)) {
return $I$(1).OTHER;
}}
} else if (brb === $I$(1).CONSTANT_DESCENT ) {
for (var i=this.springs.size$() - 1; i >= 0; i--) {
var spring=this.springs.get$I(i);
if (spring === this.baselineSpring ) {
return $I$(1).CONSTANT_DESCENT;
}if (spring.isResizable$I(1)) {
return $I$(1).OTHER;
}}
}}return $I$(1).OTHER;
}return $I$(1).CONSTANT_ASCENT;
});

Clazz.newMeth(C$, 'checkPreferredGapValues$I$I',  function (pref, max) {
if ((pref < 0 && pref != -1  && pref != -2 ) || (max < 0 && max != -1  && max != -2 ) || (pref >= 0 && max >= 0  && pref > max )  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Pref and max must be either DEFAULT_SIZE, PREFERRED_SIZE, or >= 0 and pref <= max"]);
}}, p$1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.GroupLayout, "SpringDelta", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'Comparable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['index','delta']]]

Clazz.newMeth(C$, 'c$$I$I',  function (index, delta) {
;C$.$init$.apply(this);
this.index=index;
this.delta=delta;
}, 1);

Clazz.newMeth(C$, ['compareTo$javax_swing_GroupLayout_SpringDelta','compareTo$O'],  function (o) {
return this.delta - o.delta;
});

Clazz.newMeth(C$, 'toString',  function () {
return C$.superclazz.prototype.toString.apply(this, []) + "[index=" + this.index + ", delta=" + this.delta + "]" ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.GroupLayout, "ParallelGroup", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['javax.swing.GroupLayout','.Group']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['resizable'],'O',['childAlignment','javax.swing.GroupLayout.Alignment']]]

Clazz.newMeth(C$, 'c$$javax_swing_GroupLayout_Alignment$Z',  function (childAlignment, resizable) {
Clazz.super_(C$, this);
this.childAlignment=childAlignment;
this.resizable=resizable;
}, 1);

Clazz.newMeth(C$, 'addGroup$javax_swing_GroupLayout_Group',  function (group) {
return C$.superclazz.prototype.addGroup$javax_swing_GroupLayout_Group.apply(this, [group]);
});

Clazz.newMeth(C$, 'addComponent$java_awt_Component',  function (component) {
return C$.superclazz.prototype.addComponent$java_awt_Component.apply(this, [component]);
});

Clazz.newMeth(C$, 'addComponent$java_awt_Component$I$I$I',  function (component, min, pref, max) {
return C$.superclazz.prototype.addComponent$java_awt_Component$I$I$I.apply(this, [component, min, pref, max]);
});

Clazz.newMeth(C$, 'addGap$I',  function (pref) {
return C$.superclazz.prototype.addGap$I.apply(this, [pref]);
});

Clazz.newMeth(C$, 'addGap$I$I$I',  function (min, pref, max) {
return C$.superclazz.prototype.addGap$I$I$I.apply(this, [min, pref, max]);
});

Clazz.newMeth(C$, 'addGroup$javax_swing_GroupLayout_Alignment$javax_swing_GroupLayout_Group',  function (alignment, group) {
p$2.checkChildAlignment$javax_swing_GroupLayout_Alignment.apply(this, [alignment]);
group.setAlignment$javax_swing_GroupLayout_Alignment(alignment);
return this.addSpring$javax_swing_GroupLayout_Spring(group);
});

Clazz.newMeth(C$, 'addComponent$java_awt_Component$javax_swing_GroupLayout_Alignment',  function (component, alignment) {
return this.addComponent$java_awt_Component$javax_swing_GroupLayout_Alignment$I$I$I(component, alignment, -1, -1, -1);
});

Clazz.newMeth(C$, 'addComponent$java_awt_Component$javax_swing_GroupLayout_Alignment$I$I$I',  function (component, alignment, min, pref, max) {
p$2.checkChildAlignment$javax_swing_GroupLayout_Alignment.apply(this, [alignment]);
var spring=Clazz.new_($I$(3,1).c$$java_awt_Component$I$I$I,[this, null, component, min, pref, max]);
spring.setAlignment$javax_swing_GroupLayout_Alignment(alignment);
return this.addSpring$javax_swing_GroupLayout_Spring(spring);
});

Clazz.newMeth(C$, 'isResizable$',  function () {
return this.resizable;
});

Clazz.newMeth(C$, 'operator$I$I',  function (a, b) {
return Math.max(a, b);
});

Clazz.newMeth(C$, 'calculateMinimumSize$I',  function (axis) {
if (!this.isResizable$()) {
return this.getPreferredSize$I(axis);
}return C$.superclazz.prototype.calculateMinimumSize$I.apply(this, [axis]);
});

Clazz.newMeth(C$, 'calculateMaximumSize$I',  function (axis) {
if (!this.isResizable$()) {
return this.getPreferredSize$I(axis);
}return C$.superclazz.prototype.calculateMaximumSize$I.apply(this, [axis]);
});

Clazz.newMeth(C$, 'setValidSize$I$I$I',  function (axis, origin, size) {
for (var spring, $spring = this.springs.iterator$(); $spring.hasNext$()&&((spring=($spring.next$())),1);) {
this.setChildSize$javax_swing_GroupLayout_Spring$I$I$I(spring, axis, origin, size);
}
});

Clazz.newMeth(C$, 'setChildSize$javax_swing_GroupLayout_Spring$I$I$I',  function (spring, axis, origin, size) {
var alignment=spring.getAlignment$();
var springSize=Math.min(Math.max(spring.getMinimumSize$I(axis), size), spring.getMaximumSize$I(axis));
if (alignment == null ) {
alignment=this.childAlignment;
}switch (alignment) {
case $I$(11).TRAILING:
spring.setSize$I$I$I(axis, origin + size - springSize, springSize);
break;
case $I$(11).CENTER:
spring.setSize$I$I$I(axis, origin + ((size - springSize)/2|0), springSize);
break;
default:
spring.setSize$I$I$I(axis, origin, springSize);
break;
}
});

Clazz.newMeth(C$, 'insertAutopadding$I$java_util_List$java_util_List$java_util_List$java_util_List$Z',  function (axis, leadingPadding, trailingPadding, leading, trailing, insert) {
for (var spring, $spring = this.springs.iterator$(); $spring.hasNext$()&&((spring=($spring.next$())),1);) {
if (Clazz.instanceOf(spring, "javax.swing.GroupLayout.ComponentSpring")) {
if ((spring).isVisible$()) {
for (var gapSpring, $gapSpring = leadingPadding.iterator$(); $gapSpring.hasNext$()&&((gapSpring=($gapSpring.next$())),1);) {
gapSpring.addTarget$javax_swing_GroupLayout_ComponentSpring$I(spring, axis);
}
trailing.add$O(spring);
}} else if (Clazz.instanceOf(spring, "javax.swing.GroupLayout.Group")) {
(spring).insertAutopadding$I$java_util_List$java_util_List$java_util_List$java_util_List$Z(axis, leadingPadding, trailingPadding, leading, trailing, insert);
} else if (Clazz.instanceOf(spring, "javax.swing.GroupLayout.AutoPreferredGapSpring")) {
(spring).setSources$java_util_List(leading);
trailingPadding.add$O(spring);
}}
});

Clazz.newMeth(C$, 'checkChildAlignment$javax_swing_GroupLayout_Alignment',  function (alignment) {
p$2.checkChildAlignment$javax_swing_GroupLayout_Alignment$Z.apply(this, [alignment, (Clazz.instanceOf(this, "javax.swing.GroupLayout.BaselineGroup"))]);
}, p$2);

Clazz.newMeth(C$, 'checkChildAlignment$javax_swing_GroupLayout_Alignment$Z',  function (alignment, allowsBaseline) {
if (alignment == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Alignment must be non-null"]);
}if (!allowsBaseline && alignment === $I$(11).BASELINE  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Alignment must be one of:LEADING, TRAILING or CENTER"]);
}}, p$2);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.GroupLayout, "BaselineGroup", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['javax.swing.GroupLayout','.ParallelGroup']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['allSpringsHaveBaseline','baselineAnchorSet','baselineAnchoredToTop','calcedBaseline'],'I',['prefAscent','prefDescent']]]

Clazz.newMeth(C$, 'c$$Z',  function (resizable) {
;C$.superclazz.c$$javax_swing_GroupLayout_Alignment$Z.apply(this,[$I$(11).LEADING, resizable]);C$.$init$.apply(this);
this.prefAscent=this.prefDescent=-1;
this.calcedBaseline=false;
}, 1);

Clazz.newMeth(C$, 'c$$Z$Z',  function (resizable, baselineAnchoredToTop) {
C$.c$$Z.apply(this, [resizable]);
this.baselineAnchoredToTop=baselineAnchoredToTop;
this.baselineAnchorSet=true;
}, 1);

Clazz.newMeth(C$, 'unset$',  function () {
C$.superclazz.prototype.unset$.apply(this, []);
this.prefAscent=this.prefDescent=-1;
this.calcedBaseline=false;
});

Clazz.newMeth(C$, 'setValidSize$I$I$I',  function (axis, origin, size) {
p$3.checkAxis$I.apply(this, [axis]);
if (this.prefAscent == -1) {
C$.superclazz.prototype.setValidSize$I$I$I.apply(this, [axis, origin, size]);
} else {
p$3.baselineLayout$I$I.apply(this, [origin, size]);
}});

Clazz.newMeth(C$, 'calculateSize$I$I',  function (axis, type) {
p$3.checkAxis$I.apply(this, [axis]);
if (!this.calcedBaseline) {
p$3.calculateBaselineAndResizeBehavior.apply(this, []);
}if (type == 0) {
return p$3.calculateMinSize.apply(this, []);
}if (type == 2) {
return p$3.calculateMaxSize.apply(this, []);
}if (this.allSpringsHaveBaseline) {
return this.prefAscent + this.prefDescent;
}return Math.max(this.prefAscent + this.prefDescent, C$.superclazz.prototype.calculateSize$I$I.apply(this, [axis, type]));
});

Clazz.newMeth(C$, 'calculateBaselineAndResizeBehavior',  function () {
this.prefAscent=0;
this.prefDescent=0;
var baselineSpringCount=0;
var resizeBehavior=null;
for (var spring, $spring = this.springs.iterator$(); $spring.hasNext$()&&((spring=($spring.next$())),1);) {
if (spring.getAlignment$() == null  || spring.getAlignment$() === $I$(11).BASELINE  ) {
var baseline=spring.getBaseline$();
if (baseline >= 0) {
if (spring.isResizable$I(1)) {
var brb=spring.getBaselineResizeBehavior$();
if (resizeBehavior == null ) {
resizeBehavior=brb;
} else if (brb !== resizeBehavior ) {
resizeBehavior=$I$(1).CONSTANT_ASCENT;
}}this.prefAscent=Math.max(this.prefAscent, baseline);
this.prefDescent=Math.max(this.prefDescent, spring.getPreferredSize$I(1) - baseline);
++baselineSpringCount;
}}}
if (!this.baselineAnchorSet) {
if (resizeBehavior === $I$(1).CONSTANT_DESCENT ) {
this.baselineAnchoredToTop=false;
} else {
this.baselineAnchoredToTop=true;
}}this.allSpringsHaveBaseline=(baselineSpringCount == this.springs.size$());
this.calcedBaseline=true;
}, p$3);

Clazz.newMeth(C$, 'calculateMaxSize',  function () {
var maxAscent=this.prefAscent;
var maxDescent=this.prefDescent;
var nonBaselineMax=0;
for (var spring, $spring = this.springs.iterator$(); $spring.hasNext$()&&((spring=($spring.next$())),1);) {
var baseline;
var springMax=spring.getMaximumSize$I(1);
if ((spring.getAlignment$() == null  || spring.getAlignment$() === $I$(11).BASELINE  ) && (baseline=spring.getBaseline$()) >= 0 ) {
var springPref=spring.getPreferredSize$I(1);
if (springPref != springMax) {
switch (spring.getBaselineResizeBehavior$()) {
case $I$(1).CONSTANT_ASCENT:
if (this.baselineAnchoredToTop) {
maxDescent=Math.max(maxDescent, springMax - baseline);
}break;
case $I$(1).CONSTANT_DESCENT:
if (!this.baselineAnchoredToTop) {
maxAscent=Math.max(maxAscent, springMax - springPref + baseline);
}break;
default:
break;
}
}} else {
nonBaselineMax=Math.max(nonBaselineMax, springMax);
}}
return Math.max(nonBaselineMax, maxAscent + maxDescent);
}, p$3);

Clazz.newMeth(C$, 'calculateMinSize',  function () {
var minAscent=0;
var minDescent=0;
var nonBaselineMin=0;
if (this.baselineAnchoredToTop) {
minAscent=this.prefAscent;
} else {
minDescent=this.prefDescent;
}for (var spring, $spring = this.springs.iterator$(); $spring.hasNext$()&&((spring=($spring.next$())),1);) {
var springMin=spring.getMinimumSize$I(1);
var baseline;
if ((spring.getAlignment$() == null  || spring.getAlignment$() === $I$(11).BASELINE  ) && (baseline=spring.getBaseline$()) >= 0 ) {
var springPref=spring.getPreferredSize$I(1);
var brb=spring.getBaselineResizeBehavior$();
switch (brb) {
case $I$(1).CONSTANT_ASCENT:
if (this.baselineAnchoredToTop) {
minDescent=Math.max(springMin - baseline, minDescent);
} else {
minAscent=Math.max(baseline, minAscent);
}break;
case $I$(1).CONSTANT_DESCENT:
if (!this.baselineAnchoredToTop) {
minAscent=Math.max(baseline - (springPref - springMin), minAscent);
} else {
minDescent=Math.max(springPref - baseline, minDescent);
}break;
default:
minAscent=Math.max(baseline, minAscent);
minDescent=Math.max(springPref - baseline, minDescent);
break;
}
} else {
nonBaselineMin=Math.max(nonBaselineMin, springMin);
}}
return Math.max(nonBaselineMin, minAscent + minDescent);
}, p$3);

Clazz.newMeth(C$, 'baselineLayout$I$I',  function (origin, size) {
var ascent;
var descent;
if (this.baselineAnchoredToTop) {
ascent=this.prefAscent;
descent=size - ascent;
} else {
ascent=size - this.prefDescent;
descent=this.prefDescent;
}for (var spring, $spring = this.springs.iterator$(); $spring.hasNext$()&&((spring=($spring.next$())),1);) {
var alignment=spring.getAlignment$();
if (alignment == null  || alignment === $I$(11).BASELINE  ) {
var baseline=spring.getBaseline$();
if (baseline >= 0) {
var springMax=spring.getMaximumSize$I(1);
var springPref=spring.getPreferredSize$I(1);
var height=springPref;
var y;
switch (spring.getBaselineResizeBehavior$()) {
case $I$(1).CONSTANT_ASCENT:
y=origin + ascent - baseline;
height=Math.min(descent, springMax - baseline) + baseline;
break;
case $I$(1).CONSTANT_DESCENT:
height=Math.min(ascent, springMax - springPref + baseline) + (springPref - baseline);
y=origin + ascent + (springPref - baseline)  - height;
break;
default:
y=origin + ascent - baseline;
break;
}
spring.setSize$I$I$I(1, y, height);
} else {
this.setChildSize$javax_swing_GroupLayout_Spring$I$I$I(spring, 1, origin, size);
}} else {
this.setChildSize$javax_swing_GroupLayout_Spring$I$I$I(spring, 1, origin, size);
}}
}, p$3);

Clazz.newMeth(C$, 'getBaseline$',  function () {
if (this.springs.size$() > 1) {
this.getPreferredSize$I(1);
return this.prefAscent;
} else if (this.springs.size$() == 1) {
return this.springs.get$I(0).getBaseline$();
}return -1;
});

Clazz.newMeth(C$, 'getBaselineResizeBehavior$',  function () {
if (this.springs.size$() == 1) {
return this.springs.get$I(0).getBaselineResizeBehavior$();
}if (this.baselineAnchoredToTop) {
return $I$(1).CONSTANT_ASCENT;
}return $I$(1).CONSTANT_DESCENT;
});

Clazz.newMeth(C$, 'checkAxis$I',  function (axis) {
if (axis == 0) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Baseline must be used along vertical axis"]);
}}, p$3);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.GroupLayout, "ComponentSpring", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['javax.swing.GroupLayout','.Spring']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.baseline=-1;
},1);

C$.$fields$=[['Z',['installed'],'I',['origin','$min','$pref','$max','baseline'],'O',['component','java.awt.Component']]]

Clazz.newMeth(C$, 'c$$java_awt_Component$I$I$I',  function (component, min, pref, max) {
Clazz.super_(C$, this);
this.component=component;
if (component == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Component must be non-null"]);
}$I$(12).checkSize$I$I$I$Z(min, pref, max, true);
this.$min=min;
this.$max=max;
this.$pref=pref;
p$4.getComponentInfo$java_awt_Component.apply(this.b$['javax.swing.GroupLayout'], [component]);
}, 1);

Clazz.newMeth(C$, 'calculateMinimumSize$I',  function (axis) {
if (p$5.isLinked$I.apply(this, [axis])) {
return p$5.getLinkSize$I$I.apply(this, [axis, 0]);
}return this.calculateNonlinkedMinimumSize$I(axis);
});

Clazz.newMeth(C$, 'calculatePreferredSize$I',  function (axis) {
if (p$5.isLinked$I.apply(this, [axis])) {
return p$5.getLinkSize$I$I.apply(this, [axis, 1]);
}var min=this.getMinimumSize$I(axis);
var pref=this.calculateNonlinkedPreferredSize$I(axis);
var max=this.getMaximumSize$I(axis);
return Math.min(max, Math.max(min, pref));
});

Clazz.newMeth(C$, 'calculateMaximumSize$I',  function (axis) {
if (p$5.isLinked$I.apply(this, [axis])) {
return p$5.getLinkSize$I$I.apply(this, [axis, 2]);
}return Math.max(this.getMinimumSize$I(axis), this.calculateNonlinkedMaximumSize$I(axis));
});

Clazz.newMeth(C$, 'isVisible$',  function () {
return p$4.getComponentInfo$java_awt_Component.apply(this.b$['javax.swing.GroupLayout'], [this.getComponent$()]).isVisible$();
});

Clazz.newMeth(C$, 'calculateNonlinkedMinimumSize$I',  function (axis) {
if (!this.isVisible$()) {
return 0;
}if (this.$min >= 0) {
return this.$min;
}if (this.$min == -2) {
return this.calculateNonlinkedPreferredSize$I(axis);
}return p$5.getSizeAlongAxis$I$java_awt_Dimension.apply(this, [axis, this.component.getMinimumSize$()]);
});

Clazz.newMeth(C$, 'calculateNonlinkedPreferredSize$I',  function (axis) {
if (!this.isVisible$()) {
return 0;
}if (this.$pref >= 0) {
return this.$pref;
}return p$5.getSizeAlongAxis$I$java_awt_Dimension.apply(this, [axis, this.component.getPreferredSize$()]);
});

Clazz.newMeth(C$, 'calculateNonlinkedMaximumSize$I',  function (axis) {
if (!this.isVisible$()) {
return 0;
}if (this.$max >= 0) {
return this.$max;
}if (this.$max == -2) {
return this.calculateNonlinkedPreferredSize$I(axis);
}return p$5.getSizeAlongAxis$I$java_awt_Dimension.apply(this, [axis, this.component.getMaximumSize$()]);
});

Clazz.newMeth(C$, 'getSizeAlongAxis$I$java_awt_Dimension',  function (axis, size) {
return (axis == 0) ? size.width : size.height;
}, p$5);

Clazz.newMeth(C$, 'getLinkSize$I$I',  function (axis, type) {
if (!this.isVisible$()) {
return 0;
}var ci=p$4.getComponentInfo$java_awt_Component.apply(this.b$['javax.swing.GroupLayout'], [this.component]);
return ci.getLinkSize$I$I(axis, type);
}, p$5);

Clazz.newMeth(C$, 'setSize$I$I$I',  function (axis, origin, size) {
C$.superclazz.prototype.setSize$I$I$I.apply(this, [axis, origin, size]);
this.origin=origin;
if (size == -2147483648) {
this.baseline=-1;
}});

Clazz.newMeth(C$, 'getOrigin$',  function () {
return this.origin;
});

Clazz.newMeth(C$, 'setComponent$java_awt_Component',  function (component) {
this.component=component;
});

Clazz.newMeth(C$, 'getComponent$',  function () {
return this.component;
});

Clazz.newMeth(C$, 'getBaseline$',  function () {
if (this.baseline == -1) {
var horizontalSpring=p$4.getComponentInfo$java_awt_Component.apply(this.b$['javax.swing.GroupLayout'], [this.component]).horizontalSpring;
var width=horizontalSpring.getPreferredSize$I(0);
var height=this.getPreferredSize$I(1);
if (width > 0 && height > 0 ) {
this.baseline=this.component.getBaseline$I$I(width, height);
}}return this.baseline;
});

Clazz.newMeth(C$, 'getBaselineResizeBehavior$',  function () {
return this.getComponent$().getBaselineResizeBehavior$();
});

Clazz.newMeth(C$, 'isLinked$I',  function (axis) {
return p$4.getComponentInfo$java_awt_Component.apply(this.b$['javax.swing.GroupLayout'], [this.component]).isLinked$I(axis);
}, p$5);

Clazz.newMeth(C$, 'installIfNecessary$I',  function (axis) {
if (!this.installed) {
this.installed=true;
if (axis == 0) {
p$4.getComponentInfo$java_awt_Component.apply(this.b$['javax.swing.GroupLayout'], [this.component]).horizontalSpring=this;
} else {
p$4.getComponentInfo$java_awt_Component.apply(this.b$['javax.swing.GroupLayout'], [this.component]).verticalSpring=this;
}}});

Clazz.newMeth(C$, 'willHaveZeroSize$Z',  function (treatAutopaddingAsZeroSized) {
return !this.isVisible$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.GroupLayout, "PreferredGapSpring", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['javax.swing.GroupLayout','.Spring']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['$pref','$max'],'O',['source','javax.swing.JComponent','+target','type','javax.swing.LayoutStyle.ComponentPlacement']]]

Clazz.newMeth(C$, 'c$$javax_swing_JComponent$javax_swing_JComponent$javax_swing_LayoutStyle_ComponentPlacement$I$I',  function (source, target, type, pref, max) {
Clazz.super_(C$, this);
this.source=source;
this.target=target;
this.type=type;
this.$pref=pref;
this.$max=max;
}, 1);

Clazz.newMeth(C$, 'calculateMinimumSize$I',  function (axis) {
return p$6.getPadding$I.apply(this, [axis]);
});

Clazz.newMeth(C$, 'calculatePreferredSize$I',  function (axis) {
if (this.$pref == -1 || this.$pref == -2 ) {
return this.getMinimumSize$I(axis);
}var min=this.getMinimumSize$I(axis);
var max=this.getMaximumSize$I(axis);
return Math.min(max, Math.max(min, this.$pref));
});

Clazz.newMeth(C$, 'calculateMaximumSize$I',  function (axis) {
if (this.$max == -2 || this.$max == -1 ) {
return p$6.getPadding$I.apply(this, [axis]);
}return Math.max(this.getMinimumSize$I(axis), this.$max);
});

Clazz.newMeth(C$, 'getPadding$I',  function (axis) {
var position;
if (axis == 0) {
position=3;
} else {
position=5;
}return p$4.getLayoutStyle0.apply(this.b$['javax.swing.GroupLayout'], []).getPreferredGap$javax_swing_JComponent$javax_swing_JComponent$javax_swing_LayoutStyle_ComponentPlacement$I$java_awt_Container(this.source, this.target, this.type, position, this.b$['javax.swing.GroupLayout'].host);
}, p$6);

Clazz.newMeth(C$, 'willHaveZeroSize$Z',  function (treatAutopaddingAsZeroSized) {
return false;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.GroupLayout, "GapSpring", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['javax.swing.GroupLayout','.Spring']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['$min','$pref','$max']]]

Clazz.newMeth(C$, 'c$$I$I$I',  function (min, pref, max) {
Clazz.super_(C$, this);
$I$(12).checkSize$I$I$I$Z(min, pref, max, false);
this.$min=min;
this.$pref=pref;
this.$max=max;
}, 1);

Clazz.newMeth(C$, 'calculateMinimumSize$I',  function (axis) {
if (this.$min == -2) {
return this.getPreferredSize$I(axis);
}return this.$min;
});

Clazz.newMeth(C$, 'calculatePreferredSize$I',  function (axis) {
return this.$pref;
});

Clazz.newMeth(C$, 'calculateMaximumSize$I',  function (axis) {
if (this.$max == -2) {
return this.getPreferredSize$I(axis);
}return this.$max;
});

Clazz.newMeth(C$, 'willHaveZeroSize$Z',  function (treatAutopaddingAsZeroSized) {
return false;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.GroupLayout, "AutoPreferredGapSpring", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['javax.swing.GroupLayout','.Spring']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['userCreated'],'I',['$size','lastSize','$pref','$max'],'O',['sources','java.util.List','source','javax.swing.GroupLayout.ComponentSpring','matches','java.util.List','type','javax.swing.LayoutStyle.ComponentPlacement']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.$pref=-2;
this.$max=-2;
this.type=$I$(6).RELATED;
}, 1);

Clazz.newMeth(C$, 'c$$I$I',  function (pref, max) {
Clazz.super_(C$, this);
this.$pref=pref;
this.$max=max;
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_LayoutStyle_ComponentPlacement$I$I',  function (type, pref, max) {
Clazz.super_(C$, this);
this.type=type;
this.$pref=pref;
this.$max=max;
this.userCreated=true;
}, 1);

Clazz.newMeth(C$, 'setSources$java_util_List',  function (sources) {
this.sources=Clazz.new_($I$(2,1).c$$java_util_Collection,[sources]);
});

Clazz.newMeth(C$, 'setUserCreated$Z',  function (userCreated) {
this.userCreated=userCreated;
});

Clazz.newMeth(C$, 'getUserCreated$',  function () {
return this.userCreated;
});

Clazz.newMeth(C$, 'unset$',  function () {
this.lastSize=this.getSize$();
C$.superclazz.prototype.unset$.apply(this, []);
this.$size=0;
});

Clazz.newMeth(C$, 'reset$',  function () {
this.$size=0;
this.sources=null;
this.source=null;
this.matches=null;
});

Clazz.newMeth(C$, 'calculatePadding$I',  function (axis) {
this.$size=-2147483648;
var maxPadding=-2147483648;
if (this.matches != null ) {
var p=p$4.getLayoutStyle0.apply(this.b$['javax.swing.GroupLayout'], []);
var position;
if (axis == 0) {
if (p$4.isLeftToRight.apply(this.b$['javax.swing.GroupLayout'], [])) {
position=3;
} else {
position=7;
}} else {
position=5;
}for (var i=this.matches.size$() - 1; i >= 0; i--) {
var match=this.matches.get$I(i);
maxPadding=Math.max(maxPadding, p$7.calculatePadding$javax_swing_LayoutStyle$I$javax_swing_GroupLayout_ComponentSpring$javax_swing_GroupLayout_ComponentSpring.apply(this, [p, position, match.source, match.target]));
}
}if (this.$size == -2147483648) {
this.$size=0;
}if (maxPadding == -2147483648) {
maxPadding=0;
}if (this.lastSize != -2147483648) {
this.$size+=Math.min(maxPadding, this.lastSize);
}});

Clazz.newMeth(C$, 'calculatePadding$javax_swing_LayoutStyle$I$javax_swing_GroupLayout_ComponentSpring$javax_swing_GroupLayout_ComponentSpring',  function (p, position, source, target) {
var delta=target.getOrigin$() - (source.getOrigin$() + source.getSize$());
if (delta >= 0) {
var padding;
if ((Clazz.instanceOf(source.getComponent$(), "javax.swing.JComponent")) && (Clazz.instanceOf(target.getComponent$(), "javax.swing.JComponent")) ) {
padding=p.getPreferredGap$javax_swing_JComponent$javax_swing_JComponent$javax_swing_LayoutStyle_ComponentPlacement$I$java_awt_Container(source.getComponent$(), target.getComponent$(), this.type, position, this.b$['javax.swing.GroupLayout'].host);
} else {
padding=10;
}if (padding > delta) {
this.$size=Math.max(this.$size, padding - delta);
}return padding;
}return 0;
}, p$7);

Clazz.newMeth(C$, 'addTarget$javax_swing_GroupLayout_ComponentSpring$I',  function (spring, axis) {
var oAxis=(axis == 0) ? 1 : 0;
if (this.source != null ) {
if (p$4.areParallelSiblings$java_awt_Component$java_awt_Component$I.apply(this.b$['javax.swing.GroupLayout'], [this.source.getComponent$(), spring.getComponent$(), oAxis])) {
p$7.addValidTarget$javax_swing_GroupLayout_ComponentSpring$javax_swing_GroupLayout_ComponentSpring.apply(this, [this.source, spring]);
}} else {
var component=spring.getComponent$();
for (var counter=this.sources.size$() - 1; counter >= 0; counter--) {
var source=this.sources.get$I(counter);
if (p$4.areParallelSiblings$java_awt_Component$java_awt_Component$I.apply(this.b$['javax.swing.GroupLayout'], [source.getComponent$(), component, oAxis])) {
p$7.addValidTarget$javax_swing_GroupLayout_ComponentSpring$javax_swing_GroupLayout_ComponentSpring.apply(this, [source, spring]);
}}
}});

Clazz.newMeth(C$, 'addValidTarget$javax_swing_GroupLayout_ComponentSpring$javax_swing_GroupLayout_ComponentSpring',  function (source, target) {
if (this.matches == null ) {
this.matches=Clazz.new_($I$(2,1).c$$I,[1]);
}this.matches.add$O(Clazz.new_($I$(13,1).c$$javax_swing_GroupLayout_ComponentSpring$javax_swing_GroupLayout_ComponentSpring,[source, target]));
}, p$7);

Clazz.newMeth(C$, 'calculateMinimumSize$I',  function (axis) {
return this.$size;
});

Clazz.newMeth(C$, 'calculatePreferredSize$I',  function (axis) {
if (this.$pref == -2 || this.$pref == -1 ) {
return this.$size;
}return Math.max(this.$size, this.$pref);
});

Clazz.newMeth(C$, 'calculateMaximumSize$I',  function (axis) {
if (this.$max >= 0) {
return Math.max(this.getPreferredSize$I(axis), this.$max);
}return this.$size;
});

Clazz.newMeth(C$, 'getMatchDescription$',  function () {
return (this.matches == null ) ? "" : this.matches.toString();
});

Clazz.newMeth(C$, 'toString',  function () {
return C$.superclazz.prototype.toString.apply(this, []) + this.getMatchDescription$();
});

Clazz.newMeth(C$, 'willHaveZeroSize$Z',  function (treatAutopaddingAsZeroSized) {
return treatAutopaddingAsZeroSized;
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.GroupLayout, "AutoPreferredGapMatch", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['source','javax.swing.GroupLayout.ComponentSpring','+target']]]

Clazz.newMeth(C$, 'c$$javax_swing_GroupLayout_ComponentSpring$javax_swing_GroupLayout_ComponentSpring',  function (source, target) {
;C$.$init$.apply(this);
this.source=source;
this.target=target;
}, 1);

Clazz.newMeth(C$, 'toString$javax_swing_GroupLayout_ComponentSpring',  function (spring) {
return spring.getComponent$().getName$();
}, p$8);

Clazz.newMeth(C$, 'toString',  function () {
return "[" + p$8.toString$javax_swing_GroupLayout_ComponentSpring.apply(this, [this.source]) + "-" + p$8.toString$javax_swing_GroupLayout_ComponentSpring.apply(this, [this.target]) + "]" ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.GroupLayout, "ContainerAutoPreferredGapSpring", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['javax.swing.GroupLayout','.AutoPreferredGapSpring']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['targets','java.util.List']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.setUserCreated$Z(true);
}, 1);

Clazz.newMeth(C$, 'c$$I$I',  function (pref, max) {
;C$.superclazz.c$$I$I.apply(this,[pref, max]);C$.$init$.apply(this);
this.setUserCreated$Z(true);
}, 1);

Clazz.newMeth(C$, 'addTarget$javax_swing_GroupLayout_ComponentSpring$I',  function (spring, axis) {
if (this.targets == null ) {
this.targets=Clazz.new_($I$(2,1).c$$I,[1]);
}this.targets.add$O(spring);
});

Clazz.newMeth(C$, 'calculatePadding$I',  function (axis) {
var p=p$4.getLayoutStyle0.apply(this.b$['javax.swing.GroupLayout'], []);
var maxPadding=0;
var position;
this.$size=0;
if (this.targets != null ) {
if (axis == 0) {
if (p$4.isLeftToRight.apply(this.b$['javax.swing.GroupLayout'], [])) {
position=7;
} else {
position=3;
}} else {
position=5;
}for (var i=this.targets.size$() - 1; i >= 0; i--) {
var targetSpring=this.targets.get$I(i);
var padding=10;
if (Clazz.instanceOf(targetSpring.getComponent$(), "javax.swing.JComponent")) {
padding=p.getContainerGap$javax_swing_JComponent$I$java_awt_Container(targetSpring.getComponent$(), position, this.b$['javax.swing.GroupLayout'].host);
maxPadding=Math.max(padding, maxPadding);
padding-=targetSpring.getOrigin$();
} else {
maxPadding=Math.max(padding, maxPadding);
}this.$size=Math.max(this.$size, padding);
}
} else {
if (axis == 0) {
if (p$4.isLeftToRight.apply(this.b$['javax.swing.GroupLayout'], [])) {
position=3;
} else {
position=7;
}} else {
position=5;
}if (this.sources != null ) {
for (var i=this.sources.size$() - 1; i >= 0; i--) {
var sourceSpring=this.sources.get$I(i);
maxPadding=Math.max(maxPadding, p$9.updateSize$javax_swing_LayoutStyle$javax_swing_GroupLayout_ComponentSpring$I.apply(this, [p, sourceSpring, position]));
}
} else if (this.source != null ) {
maxPadding=p$9.updateSize$javax_swing_LayoutStyle$javax_swing_GroupLayout_ComponentSpring$I.apply(this, [p, this.source, position]);
}}if (this.lastSize != -2147483648) {
this.$size+=Math.min(maxPadding, this.lastSize);
}});

Clazz.newMeth(C$, 'updateSize$javax_swing_LayoutStyle$javax_swing_GroupLayout_ComponentSpring$I',  function (p, sourceSpring, position) {
var padding=10;
if (Clazz.instanceOf(sourceSpring.getComponent$(), "javax.swing.JComponent")) {
padding=p.getContainerGap$javax_swing_JComponent$I$java_awt_Container(sourceSpring.getComponent$(), position, this.b$['javax.swing.GroupLayout'].host);
}var delta=Math.max(0, this.getParent$().getSize$() - sourceSpring.getSize$() - sourceSpring.getOrigin$() );
this.$size=Math.max(this.$size, padding - delta);
return padding;
}, p$9);

Clazz.newMeth(C$, 'getMatchDescription$',  function () {
if (this.targets != null ) {
return "leading: " + this.targets.toString();
}if (this.sources != null ) {
return "trailing: " + this.sources.toString();
}return "--";
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.GroupLayout, "LinkInfo", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['axis','size'],'O',['linked','java.util.List']]]

Clazz.newMeth(C$, 'c$$I',  function (axis) {
;C$.$init$.apply(this);
this.linked=Clazz.new_($I$(2,1));
this.size=-2147483648;
this.axis=axis;
}, 1);

Clazz.newMeth(C$, 'add$javax_swing_GroupLayout_ComponentInfo',  function (child) {
var childMaster=p$10.getLinkInfo$I$Z.apply(child, [this.axis, false]);
if (childMaster == null ) {
this.linked.add$O(child);
p$10.setLinkInfo$I$javax_swing_GroupLayout_LinkInfo.apply(child, [this.axis, this]);
} else if (childMaster !== this ) {
this.linked.addAll$java_util_Collection(childMaster.linked);
for (var childInfo, $childInfo = childMaster.linked.iterator$(); $childInfo.hasNext$()&&((childInfo=($childInfo.next$())),1);) {
p$10.setLinkInfo$I$javax_swing_GroupLayout_LinkInfo.apply(childInfo, [this.axis, this]);
}
}this.clearCachedSize$();
});

Clazz.newMeth(C$, 'remove$javax_swing_GroupLayout_ComponentInfo',  function (info) {
this.linked.remove$O(info);
p$10.setLinkInfo$I$javax_swing_GroupLayout_LinkInfo.apply(info, [this.axis, null]);
if (this.linked.size$() == 1) {
p$10.setLinkInfo$I$javax_swing_GroupLayout_LinkInfo.apply(this.linked.get$I(0), [this.axis, null]);
}this.clearCachedSize$();
});

Clazz.newMeth(C$, 'clearCachedSize$',  function () {
this.size=-2147483648;
});

Clazz.newMeth(C$, 'getSize$I',  function (axis) {
if (this.size == -2147483648) {
this.size=p$11.calculateLinkedSize$I.apply(this, [axis]);
}return this.size;
});

Clazz.newMeth(C$, 'calculateLinkedSize$I',  function (axis) {
var size=0;
for (var info, $info = this.linked.iterator$(); $info.hasNext$()&&((info=($info.next$())),1);) {
var spring;
if (axis == 0) {
spring=info.horizontalSpring;
} else {
spring=info.verticalSpring;
}size=Math.max(size, spring.calculateNonlinkedPreferredSize$I(axis));
}
return size;
}, p$11);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.GroupLayout, "ComponentInfo", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['visible'],'O',['component','java.awt.Component','horizontalSpring','javax.swing.GroupLayout.ComponentSpring','+verticalSpring','horizontalMaster','javax.swing.GroupLayout.LinkInfo','+verticalMaster','honorsVisibility','Boolean']]]

Clazz.newMeth(C$, 'c$$java_awt_Component',  function (component) {
;C$.$init$.apply(this);
this.component=component;
this.updateVisibility$();
}, 1);

Clazz.newMeth(C$, 'dispose$',  function () {
p$10.removeSpring$javax_swing_GroupLayout_Spring.apply(this, [this.horizontalSpring]);
this.horizontalSpring=null;
p$10.removeSpring$javax_swing_GroupLayout_Spring.apply(this, [this.verticalSpring]);
this.verticalSpring=null;
if (this.horizontalMaster != null ) {
this.horizontalMaster.remove$javax_swing_GroupLayout_ComponentInfo(this);
}if (this.verticalMaster != null ) {
this.verticalMaster.remove$javax_swing_GroupLayout_ComponentInfo(this);
}});

Clazz.newMeth(C$, 'setHonorsVisibility$Boolean',  function (honorsVisibility) {
this.honorsVisibility=honorsVisibility;
});

Clazz.newMeth(C$, 'removeSpring$javax_swing_GroupLayout_Spring',  function (spring) {
if (spring != null ) {
(spring.getParent$()).springs.remove$O(spring);
}}, p$10);

Clazz.newMeth(C$, 'isVisible$',  function () {
return this.visible;
});

Clazz.newMeth(C$, 'updateVisibility$',  function () {
var honorsVisibility;
if (this.honorsVisibility == null ) {
honorsVisibility=this.b$['javax.swing.GroupLayout'].getHonorsVisibility$.apply(this.b$['javax.swing.GroupLayout'], []);
} else {
honorsVisibility=(this.honorsVisibility).valueOf();
}var newVisible=(honorsVisibility) ? this.component.isVisible$() : true;
if (this.visible != newVisible ) {
this.visible=newVisible;
return true;
}return false;
});

Clazz.newMeth(C$, 'setBounds$java_awt_Insets$I$Z',  function (insets, parentWidth, ltr) {
var x=this.horizontalSpring.getOrigin$();
var w=this.horizontalSpring.getSize$();
var y=this.verticalSpring.getOrigin$();
var h=this.verticalSpring.getSize$();
if (!ltr) {
x=parentWidth - x - w ;
}this.component.setBounds$I$I$I$I(x + insets.left, y + insets.top, w, h);
});

Clazz.newMeth(C$, 'setComponent$java_awt_Component',  function (component) {
this.component=component;
if (this.horizontalSpring != null ) {
this.horizontalSpring.setComponent$java_awt_Component(component);
}if (this.verticalSpring != null ) {
this.verticalSpring.setComponent$java_awt_Component(component);
}});

Clazz.newMeth(C$, 'isLinked$I',  function (axis) {
if (axis == 0) {
return this.horizontalMaster != null ;
}return (this.verticalMaster != null );
});

Clazz.newMeth(C$, 'setLinkInfo$I$javax_swing_GroupLayout_LinkInfo',  function (axis, linkInfo) {
if (axis == 0) {
this.horizontalMaster=linkInfo;
} else {
this.verticalMaster=linkInfo;
}}, p$10);

Clazz.newMeth(C$, 'getLinkInfo$I',  function (axis) {
return p$10.getLinkInfo$I$Z.apply(this, [axis, true]);
});

Clazz.newMeth(C$, 'getLinkInfo$I$Z',  function (axis, create) {
if (axis == 0) {
if (this.horizontalMaster == null  && create ) {
Clazz.new_($I$(14,1).c$$I,[0]).add$javax_swing_GroupLayout_ComponentInfo(this);
}return this.horizontalMaster;
} else {
if (this.verticalMaster == null  && create ) {
Clazz.new_($I$(14,1).c$$I,[1]).add$javax_swing_GroupLayout_ComponentInfo(this);
}return this.verticalMaster;
}}, p$10);

Clazz.newMeth(C$, 'clearCachedSize$',  function () {
if (this.horizontalMaster != null ) {
this.horizontalMaster.clearCachedSize$();
}if (this.verticalMaster != null ) {
this.verticalMaster.clearCachedSize$();
}});

Clazz.newMeth(C$, 'getLinkSize$I$I',  function (axis, type) {
if (axis == 0) {
return this.horizontalMaster.getSize$I(axis);
} else {
return this.verticalMaster.getSize$I(axis);
}});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:52 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
