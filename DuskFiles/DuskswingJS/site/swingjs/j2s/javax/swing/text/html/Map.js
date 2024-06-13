(function(){var P$=Clazz.newPackage("javax.swing.text.html"),I$=[[0,'javax.swing.text.html.Map',['javax.swing.text.html.HTML','.Attribute'],'java.util.Vector','javax.swing.text.AttributeSet',['javax.swing.text.html.Map','.RectangleRegionContainment'],['javax.swing.text.html.Map','.CircleRegionContainment'],['javax.swing.text.html.Map','.PolygonRegionContainment'],['javax.swing.text.html.Map','.DefaultRegionContainment'],'java.util.StringTokenizer']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Map", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'java.io.Serializable');
C$.$classes$=[['RegionContainment',8],['RectangleRegionContainment',8],['PolygonRegionContainment',8],['CircleRegionContainment',8],['DefaultRegionContainment',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['name'],'O',['areaAttributes','java.util.Vector','+areas']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (name) {
;C$.$init$.apply(this);
this.name=name;
}, 1);

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'addArea$javax_swing_text_AttributeSet',  function (as) {
if (as == null ) {
return;
}if (this.areaAttributes == null ) {
this.areaAttributes=Clazz.new_($I$(3,1).c$$I,[2]);
}this.areaAttributes.addElement$O(as.copyAttributes$());
});

Clazz.newMeth(C$, 'removeArea$javax_swing_text_AttributeSet',  function (as) {
if (as != null  && this.areaAttributes != null  ) {
var numAreas=(this.areas != null ) ? this.areas.size$() : 0;
for (var counter=this.areaAttributes.size$() - 1; counter >= 0; counter--) {
if (this.areaAttributes.elementAt$I(counter).isEqual$javax_swing_text_AttributeSet(as)) {
this.areaAttributes.removeElementAt$I(counter);
if (counter < numAreas) {
this.areas.removeElementAt$I(counter);
}}}
}});

Clazz.newMeth(C$, 'getAreas$',  function () {
var numAttributes=(this.areaAttributes != null ) ? this.areaAttributes.size$() : 0;
if (numAttributes != 0) {
var retValue=Clazz.array($I$(4), [numAttributes]);
this.areaAttributes.copyInto$OA(retValue);
return retValue;
}return null;
});

Clazz.newMeth(C$, 'getArea$I$I$I$I',  function (x, y, width, height) {
var numAttributes=(this.areaAttributes != null ) ? this.areaAttributes.size$() : 0;
if (numAttributes > 0) {
var numAreas=(this.areas != null ) ? this.areas.size$() : 0;
if (this.areas == null ) {
this.areas=Clazz.new_($I$(3,1).c$$I,[numAttributes]);
}for (var counter=0; counter < numAttributes; counter++) {
if (counter >= numAreas) {
this.areas.addElement$O(this.createRegionContainment$javax_swing_text_AttributeSet(this.areaAttributes.elementAt$I(counter)));
}var rc=this.areas.elementAt$I(counter);
if (rc != null  && rc.contains$I$I$I$I(x, y, width, height) ) {
return this.areaAttributes.elementAt$I(counter);
}}
}return null;
});

Clazz.newMeth(C$, 'createRegionContainment$javax_swing_text_AttributeSet',  function (attributes) {
var shape=attributes.getAttribute$O($I$(2).SHAPE);
if (shape == null ) {
shape="rect";
}if (Clazz.instanceOf(shape, "java.lang.String")) {
var shapeString=(shape).toLowerCase$();
var rc=null;
try {
if (shapeString.equals$O("rect")) {
rc=Clazz.new_($I$(5,1).c$$javax_swing_text_AttributeSet,[attributes]);
} else if (shapeString.equals$O("circle")) {
rc=Clazz.new_($I$(6,1).c$$javax_swing_text_AttributeSet,[attributes]);
} else if (shapeString.equals$O("poly")) {
rc=Clazz.new_($I$(7,1).c$$javax_swing_text_AttributeSet,[attributes]);
} else if (shapeString.equals$O("default")) {
rc=$I$(8).sharedInstance$();
}} catch (re) {
if (Clazz.exceptionOf(re,"RuntimeException")){
rc=null;
} else {
throw re;
}
}
return rc;
}return null;
});

Clazz.newMeth(C$, 'extractCoords$O',  function (stringCoords) {
if (stringCoords == null  || !(Clazz.instanceOf(stringCoords, "java.lang.String")) ) {
return null;
}var st=Clazz.new_($I$(9,1).c$$S$S,[stringCoords, ", \t\n\r"]);
var retValue=null;
var numCoords=0;
while (st.hasMoreElements$()){
var token=st.nextToken$();
var scale;
if (token.endsWith$S("%")) {
scale=-1;
token=token.substring$I$I(0, token.length$() - 1);
} else {
scale=1;
}try {
var intValue=Integer.parseInt$S(token);
if (retValue == null ) {
retValue=Clazz.array(Integer.TYPE, [4]);
} else if (numCoords == retValue.length) {
var temp=Clazz.array(Integer.TYPE, [retValue.length * 2]);
System.arraycopy$O$I$O$I$I(retValue, 0, temp, 0, retValue.length);
retValue=temp;
}retValue[numCoords++]=intValue * scale;
} catch (nfe) {
if (Clazz.exceptionOf(nfe,"NumberFormatException")){
return null;
} else {
throw nfe;
}
}
}
if (numCoords > 0 && numCoords != retValue.length ) {
var temp=Clazz.array(Integer.TYPE, [numCoords]);
System.arraycopy$O$I$O$I$I(retValue, 0, temp, 0, numCoords);
retValue=temp;
}return retValue;
}, 1);
;
(function(){/*i*/var C$=Clazz.newInterface(P$.Map, "RegionContainment", function(){
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Map, "RectangleRegionContainment", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['javax.swing.text.html.Map','javax.swing.text.html.Map.RegionContainment']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['lastWidth','lastHeight','x0','y0','x1','y1'],'O',['percents','float[]']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_AttributeSet',  function (as) {
;C$.$init$.apply(this);
var coords=$I$(1,"extractCoords$O",[as.getAttribute$O($I$(2).COORDS)]);
this.percents=null;
if (coords == null  || coords.length != 4 ) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Unable to parse rectangular area"]);
} else {
this.x0=coords[0];
this.y0=coords[1];
this.x1=coords[2];
this.y1=coords[3];
if (this.x0 < 0 || this.y0 < 0  || this.x1 < 0  || this.y1 < 0 ) {
this.percents=Clazz.array(Float.TYPE, [4]);
this.lastWidth=this.lastHeight=-1;
for (var counter=0; counter < 4; counter++) {
if (coords[counter] < 0) {
this.percents[counter]=Math.abs(coords[counter]) / 100.0;
} else {
this.percents[counter]=-1.0;
}}
}}}, 1);

Clazz.newMeth(C$, 'contains$I$I$I$I',  function (x, y, width, height) {
if (this.percents == null ) {
return this.contains$I$I(x, y);
}if (this.lastWidth != width || this.lastHeight != height ) {
this.lastWidth=width;
this.lastHeight=height;
if (this.percents[0] != -1.0 ) {
this.x0=((this.percents[0] * width)|0);
}if (this.percents[1] != -1.0 ) {
this.y0=((this.percents[1] * height)|0);
}if (this.percents[2] != -1.0 ) {
this.x1=((this.percents[2] * width)|0);
}if (this.percents[3] != -1.0 ) {
this.y1=((this.percents[3] * height)|0);
}}return this.contains$I$I(x, y);
});

Clazz.newMeth(C$, 'contains$I$I',  function (x, y) {
return ((x >= this.x0 && x <= this.x1 ) && (y >= this.y0 && y <= this.y1 ) );
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Map, "PolygonRegionContainment", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.awt.Polygon', [['javax.swing.text.html.Map','javax.swing.text.html.Map.RegionContainment']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['lastWidth','lastHeight'],'O',['percentValues','float[]','percentIndexs','int[]']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_AttributeSet',  function (as) {
Clazz.super_(C$, this);
var coords=$I$(1,"extractCoords$O",[as.getAttribute$O($I$(2).COORDS)]);
if (coords == null  || coords.length == 0  || coords.length % 2 != 0 ) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Unable to parse polygon area"]);
} else {
var numPercents=0;
this.lastWidth=this.lastHeight=-1;
for (var counter=coords.length - 1; counter >= 0; counter--) {
if (coords[counter] < 0) {
++numPercents;
}}
if (numPercents > 0) {
this.percentIndexs=Clazz.array(Integer.TYPE, [numPercents]);
this.percentValues=Clazz.array(Float.TYPE, [numPercents]);
for (var counter=coords.length - 1, pCounter=0; counter >= 0; counter--) {
if (coords[counter] < 0) {
this.percentValues[pCounter]=coords[counter] / -100.0;
this.percentIndexs[pCounter]=counter;
++pCounter;
}}
} else {
this.percentIndexs=null;
this.percentValues=null;
}this.npoints=(coords.length/2|0);
this.xpoints=Clazz.array(Integer.TYPE, [this.npoints]);
this.ypoints=Clazz.array(Integer.TYPE, [this.npoints]);
for (var counter=0; counter < this.npoints; counter++) {
this.xpoints[counter]=coords[counter + counter];
this.ypoints[counter]=coords[counter + counter + 1 ];
}
}}, 1);

Clazz.newMeth(C$, 'contains$I$I$I$I',  function (x, y, width, height) {
if (this.percentValues == null  || (this.lastWidth == width && this.lastHeight == height ) ) {
return this.contains$I$I(x, y);
}this.bounds=null;
this.lastWidth=width;
this.lastHeight=height;
var fWidth=width;
var fHeight=height;
for (var counter=this.percentValues.length - 1; counter >= 0; counter--) {
if (this.percentIndexs[counter] % 2 == 0) {
this.xpoints[(this.percentIndexs[counter]/2|0)]=((this.percentValues[counter] * fWidth)|0);
} else {
this.ypoints[(this.percentIndexs[counter]/2|0)]=((this.percentValues[counter] * fHeight)|0);
}}
return this.contains$I$I(x, y);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Map, "CircleRegionContainment", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['javax.swing.text.html.Map','javax.swing.text.html.Map.RegionContainment']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['x','y','radiusSquared','lastWidth','lastHeight'],'O',['percentValues','float[]']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_AttributeSet',  function (as) {
;C$.$init$.apply(this);
var coords=$I$(1,"extractCoords$O",[as.getAttribute$O($I$(2).COORDS)]);
if (coords == null  || coords.length != 3 ) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Unable to parse circular area"]);
}this.x=coords[0];
this.y=coords[1];
this.radiusSquared=coords[2] * coords[2];
if (coords[0] < 0 || coords[1] < 0  || coords[2] < 0 ) {
this.lastWidth=this.lastHeight=-1;
this.percentValues=Clazz.array(Float.TYPE, [3]);
for (var counter=0; counter < 3; counter++) {
if (coords[counter] < 0) {
this.percentValues[counter]=coords[counter] / -100.0;
} else {
this.percentValues[counter]=-1.0;
}}
} else {
this.percentValues=null;
}}, 1);

Clazz.newMeth(C$, 'contains$I$I$I$I',  function (x, y, width, height) {
if (this.percentValues != null  && (this.lastWidth != width || this.lastHeight != height ) ) {
var newRad=(Math.min(width, height)/2|0);
this.lastWidth=width;
this.lastHeight=height;
if (this.percentValues[0] != -1.0 ) {
this.x=((this.percentValues[0] * width)|0);
}if (this.percentValues[1] != -1.0 ) {
this.y=((this.percentValues[1] * height)|0);
}if (this.percentValues[2] != -1.0 ) {
this.radiusSquared=((this.percentValues[2] * Math.min(width, height))|0);
this.radiusSquared*=this.radiusSquared;
}}return (((x - this.x) * (x - this.x) + (y - this.y) * (y - this.y)) <= this.radiusSquared);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Map, "DefaultRegionContainment", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['javax.swing.text.html.Map','javax.swing.text.html.Map.RegionContainment']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['si','javax.swing.text.html.Map.DefaultRegionContainment']]]

Clazz.newMeth(C$, 'sharedInstance$',  function () {
if (C$.si == null ) {
C$.si=Clazz.new_(C$);
}return C$.si;
}, 1);

Clazz.newMeth(C$, 'contains$I$I$I$I',  function (x, y, width, height) {
return (x <= width && x >= 0  && y >= 0  && y <= width );
});

C$.$static$=function(){C$.$static$=0;
C$.si=null;
};

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:29 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
