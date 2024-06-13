(function(){var P$=Clazz.newPackage("sun.font"),p$1={},I$=[[0,'java.awt.BasicStroke',['java.awt.geom.Line2D','.Float'],'java.awt.geom.GeneralPath','java.util.concurrent.ConcurrentHashMap',['sun.font.Underline','.StandardUnderline'],'java.awt.font.TextAttribute',['sun.font.Underline','.IMGrayUnderline']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Underline", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['StandardUnderline',26],['IMGrayUnderline',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['UNDERLINES','java.util.concurrent.ConcurrentHashMap','UNDERLINE_LIST','sun.font.Underline[]']]]

Clazz.newMeth(C$, 'getUnderline$O',  function (value) {
if (value == null ) {
return null;
}return C$.UNDERLINES.get$O(value);
}, 1);

Clazz.newMeth(C$, 'getUnderline$I',  function (index) {
return index < 0 ? null : C$.UNDERLINE_LIST[index];
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.UNDERLINES=Clazz.new_($I$(4,1).c$$I,[6]);
{
var uls=Clazz.array(C$, [6]);
uls[0]=Clazz.new_($I$(5,1).c$$F$F$FA$Z,[0, 1, null, true]);
C$.UNDERLINES.put$O$O($I$(6).UNDERLINE_ON, uls[0]);
uls[1]=Clazz.new_($I$(5,1).c$$F$F$FA$Z,[1, 1, null, false]);
C$.UNDERLINES.put$O$O($I$(6).UNDERLINE_LOW_ONE_PIXEL, uls[1]);
uls[2]=Clazz.new_($I$(5,1).c$$F$F$FA$Z,[1, 2, null, false]);
C$.UNDERLINES.put$O$O($I$(6).UNDERLINE_LOW_TWO_PIXEL, uls[2]);
uls[3]=Clazz.new_([1, 1, Clazz.array(Float.TYPE, -1, [1, 1]), false],$I$(5,1).c$$F$F$FA$Z);
C$.UNDERLINES.put$O$O($I$(6).UNDERLINE_LOW_DOTTED, uls[3]);
uls[4]=Clazz.new_($I$(7,1));
C$.UNDERLINES.put$O$O($I$(6).UNDERLINE_LOW_GRAY, uls[4]);
uls[5]=Clazz.new_([1, 1, Clazz.array(Float.TYPE, -1, [4, 4]), false],$I$(5,1).c$$F$F$FA$Z);
C$.UNDERLINES.put$O$O($I$(6).UNDERLINE_LOW_DASHED, uls[5]);
C$.UNDERLINE_LIST=uls;
};
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.Underline, "StandardUnderline", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'sun.font.Underline');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['useThickness'],'F',['shift','thicknessMultiplier'],'O',['dashPattern','float[]','cachedStroke','java.awt.BasicStroke']]]

Clazz.newMeth(C$, 'c$$F$F$FA$Z',  function (shift, thicknessMultiplier, dashPattern, useThickness) {
Clazz.super_(C$, this);
this.shift=shift;
this.thicknessMultiplier=thicknessMultiplier;
this.dashPattern=dashPattern;
this.useThickness=useThickness;
this.cachedStroke=null;
}, 1);

Clazz.newMeth(C$, 'createStroke$F',  function (lineThickness) {
if (this.dashPattern == null ) {
return Clazz.new_($I$(1,1).c$$F$I$I,[lineThickness, 0, 0]);
} else {
return Clazz.new_($I$(1,1).c$$F$I$I$F$FA$F,[lineThickness, 0, 0, 10.0, this.dashPattern, 0]);
}}, p$1);

Clazz.newMeth(C$, 'getLineThickness$F',  function (thickness) {
if (this.useThickness) {
return thickness * this.thicknessMultiplier;
} else {
return 1.0 * this.thicknessMultiplier;
}}, p$1);

Clazz.newMeth(C$, 'getStroke$F',  function (thickness) {
var lineThickness=p$1.getLineThickness$F.apply(this, [thickness]);
var stroke=this.cachedStroke;
if (stroke == null  || stroke.getLineWidth$() != lineThickness  ) {
stroke=p$1.createStroke$F.apply(this, [lineThickness]);
this.cachedStroke=stroke;
}return stroke;
}, p$1);

Clazz.newMeth(C$, 'drawUnderline$java_awt_Graphics2D$F$F$F$F',  function (g2d, thickness, x1, x2, y) {
var saveStroke=g2d.getStroke$();
g2d.setStroke$java_awt_Stroke(p$1.getStroke$F.apply(this, [thickness]));
g2d.draw$java_awt_Shape(Clazz.new_($I$(2,1).c$$F$F$F$F,[x1, y + this.shift, x2, y + this.shift]));
g2d.setStroke$java_awt_Stroke(saveStroke);
});

Clazz.newMeth(C$, 'getLowerDrawLimit$F',  function (thickness) {
return this.shift + p$1.getLineThickness$F.apply(this, [thickness]);
});

Clazz.newMeth(C$, 'getUnderlineShape$F$F$F$F',  function (thickness, x1, x2, y) {
var ulStroke=p$1.getStroke$F.apply(this, [thickness]);
var line=Clazz.new_($I$(2,1).c$$F$F$F$F,[x1, y + this.shift, x2, y + this.shift]);
return ulStroke.createStrokedShape$java_awt_Shape(line);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Underline, "IMGrayUnderline", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'sun.font.Underline');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['stroke','java.awt.BasicStroke']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.stroke=Clazz.new_([1.0, 0, 0, 10.0, Clazz.array(Float.TYPE, -1, [1, 1]), 0],$I$(1,1).c$$F$I$I$F$FA$F);
}, 1);

Clazz.newMeth(C$, 'drawUnderline$java_awt_Graphics2D$F$F$F$F',  function (g2d, thickness, x1, x2, y) {
var saveStroke=g2d.getStroke$();
g2d.setStroke$java_awt_Stroke(this.stroke);
var drawLine=Clazz.new_($I$(2,1).c$$F$F$F$F,[x1, y, x2, y]);
g2d.draw$java_awt_Shape(drawLine);
drawLine.y1+=1.0;
drawLine.y2+=1.0;
drawLine.x1+=1.0;
g2d.draw$java_awt_Shape(drawLine);
g2d.setStroke$java_awt_Stroke(saveStroke);
});

Clazz.newMeth(C$, 'getLowerDrawLimit$F',  function (thickness) {
return 2.0;
});

Clazz.newMeth(C$, 'getUnderlineShape$F$F$F$F',  function (thickness, x1, x2, y) {
var gp=Clazz.new_($I$(3,1));
var line=Clazz.new_($I$(2,1).c$$F$F$F$F,[x1, y, x2, y]);
gp.append$java_awt_Shape$Z(this.stroke.createStrokedShape$java_awt_Shape(line), false);
line.y1+=1.0;
line.y2+=1.0;
line.x1+=1.0;
gp.append$java_awt_Shape$Z(this.stroke.createStrokedShape$java_awt_Shape(line), false);
return gp;
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:45 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
