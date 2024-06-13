(function(){var P$=Clazz.newPackage("javax.swing.text.html"),p$1={},I$=[[0,'java.util.StringTokenizer',['javax.swing.text.html.HTML','.Attribute'],'javax.swing.SizeRequirements']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FrameSetView", null, 'javax.swing.text.BoxView');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['percentTotals','absoluteTotals','relativeTotals'],'O',['$children','String[]','percentChildren','int[]','+absoluteChildren','+relativeChildren']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_Element$I',  function (elem, axis) {
;C$.superclazz.c$$javax_swing_text_Element$I.apply(this,[elem, axis]);C$.$init$.apply(this);
this.$children=null;
}, 1);

Clazz.newMeth(C$, 'parseRowColSpec$javax_swing_text_html_HTML_Attribute',  function (key) {
var attributes=this.getElement$().getAttributes$();
var spec="*";
if (attributes != null ) {
if (attributes.getAttribute$O(key) != null ) {
spec=attributes.getAttribute$O(key);
}}var tokenizer=Clazz.new_($I$(1,1).c$$S$S,[spec, ","]);
var nTokens=tokenizer.countTokens$();
var n=this.getViewCount$();
var items=Clazz.array(String, [Math.max(nTokens, n)]);
var i=0;
for (; i < nTokens; i++) {
items[i]=tokenizer.nextToken$().trim$();
if (items[i].equals$O("100%")) {
items[i]="*";
}}
for (; i < items.length; i++) {
items[i]="*";
}
return items;
}, p$1);

Clazz.newMeth(C$, 'init',  function () {
if (this.getAxis$() == 1) {
this.$children=p$1.parseRowColSpec$javax_swing_text_html_HTML_Attribute.apply(this, [$I$(2).ROWS]);
} else {
this.$children=p$1.parseRowColSpec$javax_swing_text_html_HTML_Attribute.apply(this, [$I$(2).COLS]);
}this.percentChildren=Clazz.array(Integer.TYPE, [this.$children.length]);
this.relativeChildren=Clazz.array(Integer.TYPE, [this.$children.length]);
this.absoluteChildren=Clazz.array(Integer.TYPE, [this.$children.length]);
for (var i=0; i < this.$children.length; i++) {
this.percentChildren[i]=-1;
this.relativeChildren[i]=-1;
this.absoluteChildren[i]=-1;
if (this.$children[i].endsWith$S("*")) {
if (this.$children[i].length$() > 1) {
this.relativeChildren[i]=Integer.parseInt$S(this.$children[i].substring$I$I(0, this.$children[i].length$() - 1));
this.relativeTotals+=this.relativeChildren[i];
} else {
this.relativeChildren[i]=1;
this.relativeTotals+=1;
}} else if (this.$children[i].indexOf$I("%") != -1) {
this.percentChildren[i]=p$1.parseDigits$S.apply(this, [this.$children[i]]);
this.percentTotals+=this.percentChildren[i];
} else {
this.absoluteChildren[i]=Integer.parseInt$S(this.$children[i]);
}}
if (this.percentTotals > 100) {
for (var i=0; i < this.percentChildren.length; i++) {
if (this.percentChildren[i] > 0) {
this.percentChildren[i]=((this.percentChildren[i] * 100)/this.percentTotals|0);
}}
this.percentTotals=100;
}}, p$1);

Clazz.newMeth(C$, 'layoutMajorAxis$I$I$IA$IA',  function (targetSpan, axis, offsets, spans) {
if (this.$children == null ) {
p$1.init.apply(this, []);
}$I$(3,"calculateTiledPositions$I$javax_swing_SizeRequirements$javax_swing_SizeRequirementsA$IA$IA",[targetSpan, null, this.getChildRequests$I$I(targetSpan, axis), offsets, spans]);
});

Clazz.newMeth(C$, 'getChildRequests$I$I',  function (targetSpan, axis) {
var span=Clazz.array(Integer.TYPE, [this.$children.length]);
p$1.spread$I$IA.apply(this, [targetSpan, span]);
var n=this.getViewCount$();
var reqs=Clazz.array($I$(3), [n]);
for (var i=0, sIndex=0; i < n; i++) {
var v=this.getView$I(i);
if ((Clazz.instanceOf(v, "javax.swing.text.html.FrameView")) || (Clazz.instanceOf(v, "javax.swing.text.html.FrameSetView")) ) {
reqs[i]=Clazz.new_([(v.getMinimumSpan$I(axis)|0), span[sIndex], (v.getMaximumSpan$I(axis)|0), 0.5],$I$(3,1).c$$I$I$I$F);
++sIndex;
} else {
var min=(v.getMinimumSpan$I(axis)|0);
var pref=(v.getPreferredSpan$I(axis)|0);
var max=(v.getMaximumSpan$I(axis)|0);
var a=v.getAlignment$I(axis);
reqs[i]=Clazz.new_($I$(3,1).c$$I$I$I$F,[min, pref, max, a]);
}}
return reqs;
});

Clazz.newMeth(C$, 'spread$I$IA',  function (targetSpan, span) {
if (targetSpan == 0) {
return;
}var tempSpace=0;
var remainingSpace=targetSpan;
for (var i=0; i < span.length; i++) {
if (this.absoluteChildren[i] > 0) {
span[i]=this.absoluteChildren[i];
remainingSpace-=span[i];
}}
tempSpace=remainingSpace;
for (var i=0; i < span.length; i++) {
if (this.percentChildren[i] > 0 && tempSpace > 0 ) {
span[i]=((this.percentChildren[i] * tempSpace)/100|0);
remainingSpace-=span[i];
} else if (this.percentChildren[i] > 0 && tempSpace <= 0 ) {
span[i]=(targetSpan/span.length|0);
remainingSpace-=span[i];
}}
if (remainingSpace > 0 && this.relativeTotals > 0 ) {
for (var i=0; i < span.length; i++) {
if (this.relativeChildren[i] > 0) {
span[i]=((remainingSpace * this.relativeChildren[i])/this.relativeTotals|0);
}}
} else if (remainingSpace > 0) {
var vTotal=(targetSpan - remainingSpace);
var tempPercents=Clazz.array(Float.TYPE, [span.length]);
remainingSpace=targetSpan;
for (var i=0; i < span.length; i++) {
tempPercents[i]=(span[i] / vTotal) * 100.0;
span[i]=(((targetSpan * tempPercents[i]) / 100.0)|0);
remainingSpace-=span[i];
}
var i=0;
while (remainingSpace != 0){
if (remainingSpace < 0) {
--span[i++];
++remainingSpace;
} else {
++span[i++];
--remainingSpace;
}if (i == span.length) i=0;
}
}}, p$1);

Clazz.newMeth(C$, 'parseDigits$S',  function (mixedStr) {
var result=0;
for (var i=0; i < mixedStr.length$(); i++) {
var ch=mixedStr.charAt$I(i);
if (Character.isDigit$C(ch)) {
result=(result * 10) + Character.digit$C$I(ch, 10);
}}
return result;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:26 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
