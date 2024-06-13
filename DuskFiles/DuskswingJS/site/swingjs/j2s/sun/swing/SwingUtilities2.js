(function(){var P$=Clazz.newPackage("sun.swing"),p$1={},I$=[[0,'java.util.HashMap',['sun.swing.SwingUtilities2','.BearingCacheEntry'],'java.util.HashSet','java.awt.font.FontRenderContext','sun.swing.StringUIClientPropertyKey','java.lang.ref.SoftReference','java.text.AttributedString','java.awt.font.LineBreakMeasurer','java.awt.font.TextLayout','java.awt.font.TextHitInfo','javax.swing.SwingUtilities','sun.font.FontDesignMetrics','StringBuffer','javax.swing.UIManager',['sun.swing.SwingUtilities2','.Section'],'javax.swing.tree.TreePath']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SwingUtilities2", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['AATextInfo',0],['BearingCacheEntry',10],['Section',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['I',['strongBearingCacheNextIndex'],'O',['LAF_STATE_KEY','java.lang.Object','strongBearingCache','sun.swing.SwingUtilities2.BearingCacheEntry[]','softBearingCache','java.util.Set','DEFAULT_FRC','java.awt.font.FontRenderContext','AA_TEXT_PROPERTY_KEY','java.lang.Object','+SKIP_CLICK_COUNT','+COMPONENT_UI_PROPERTY_KEY','BASICMENUITEMUI_MAX_TEXT_OFFSET','sun.swing.StringUIClientPropertyKey','charsBufferLock','java.lang.Object','charsBuffer','char[]']]]

Clazz.newMeth(C$, 'isComplexLayout$CA$I$I',  function (text, start, limit) {
return false;
}, 1);

Clazz.newMeth(C$, 'drawTextAntialiased$javax_swing_JComponent',  function (c) {
return null;
}, 1);

Clazz.newMeth(C$, 'getLeftSideBearing$javax_swing_JComponent$java_awt_FontMetrics$S',  function (c, fm, string) {
if ((string == null ) || (string.length$() == 0) ) {
return 0;
}return C$.getLeftSideBearing$javax_swing_JComponent$java_awt_FontMetrics$C(c, fm, string.charAt$I(0));
}, 1);

Clazz.newMeth(C$, 'getLeftSideBearing$javax_swing_JComponent$java_awt_FontMetrics$C',  function (c, fm, firstChar) {
return 0;
}, 1);

Clazz.newMeth(C$, 'getRightSideBearing$javax_swing_JComponent$java_awt_FontMetrics$S',  function (c, fm, string) {
if ((string == null ) || (string.length$() == 0) ) {
return 0;
}return C$.getRightSideBearing$javax_swing_JComponent$java_awt_FontMetrics$C(c, fm, string.charAt$I(string.length$() - 1));
}, 1);

Clazz.newMeth(C$, 'getRightSideBearing$javax_swing_JComponent$java_awt_FontMetrics$C',  function (c, fm, lastChar) {
return C$.getBearing$javax_swing_JComponent$java_awt_FontMetrics$C$Z(c, fm, lastChar, false);
}, 1);

Clazz.newMeth(C$, 'getBearing$javax_swing_JComponent$java_awt_FontMetrics$C$Z',  function (comp, fm, c, isLeftBearing) {
if (fm == null ) {
if (comp == null ) {
return 0;
} else {
fm=comp.getFontMetrics$java_awt_Font(comp.getFont$());
}}{
var entry=null;
var searchKey=Clazz.new_($I$(2,1).c$$java_awt_FontMetrics,[fm]);
for (var cacheEntry, $cacheEntry = 0, $$cacheEntry = C$.strongBearingCache; $cacheEntry<$$cacheEntry.length&&((cacheEntry=($$cacheEntry[$cacheEntry])),1);$cacheEntry++) {
if (searchKey.equals$O(cacheEntry)) {
entry=cacheEntry;
break;
}}
if (entry == null ) {
var iter=C$.softBearingCache.iterator$();
while (iter.hasNext$()){
var cacheEntry=iter.next$().get$();
if (cacheEntry == null ) {
iter.remove$();
continue;
}if (searchKey.equals$O(cacheEntry)) {
entry=cacheEntry;
C$.putEntryInStrongCache$sun_swing_SwingUtilities2_BearingCacheEntry(entry);
break;
}}
}if (entry == null ) {
entry=searchKey;
C$.cacheEntry$sun_swing_SwingUtilities2_BearingCacheEntry(entry);
}return (isLeftBearing) ? entry.getLeftSideBearing$C(c) : entry.getRightSideBearing$C(c);
}}, 1);

Clazz.newMeth(C$, 'cacheEntry$sun_swing_SwingUtilities2_BearingCacheEntry',  function (entry) {
var oldestEntry=C$.strongBearingCache[C$.strongBearingCacheNextIndex];
if (oldestEntry != null ) {
C$.softBearingCache.add$O(Clazz.new_($I$(6,1).c$$O,[oldestEntry]));
}C$.putEntryInStrongCache$sun_swing_SwingUtilities2_BearingCacheEntry(entry);
}, 1);

Clazz.newMeth(C$, 'putEntryInStrongCache$sun_swing_SwingUtilities2_BearingCacheEntry',  function (entry) {
C$.strongBearingCache[C$.strongBearingCacheNextIndex]=entry;
C$.strongBearingCacheNextIndex=(C$.strongBearingCacheNextIndex + 1) % 10;
}, 1);

Clazz.newMeth(C$, 'getFontMetrics$javax_swing_JComponent$java_awt_Graphics',  function (c, g) {
if (c != null ) {
return c.getFontMetrics$java_awt_Font(g.getFont$());
}return g.getFont$().getFontMetrics$();
}, 1);

Clazz.newMeth(C$, 'getFontMetrics$javax_swing_JComponent$java_awt_Graphics$java_awt_Font',  function (c, g, font) {
if (c != null ) {
return c.getFontMetrics$java_awt_Font(font);
}return font.getFontMetrics$();
}, 1);

Clazz.newMeth(C$, 'stringWidth$javax_swing_JComponent$java_awt_FontMetrics$S',  function (c, fm, string) {
if (string == null  || string.equals$O("") ) {
return 0;
}return fm.stringWidth$S(string);
}, 1);

Clazz.newMeth(C$, 'clipStringIfNecessary$javax_swing_JComponent$java_awt_FontMetrics$S$I',  function (c, fm, string, availTextWidth) {
if ((string == null ) || (string.equals$O("")) ) {
return "";
}var textWidth=C$.stringWidth$javax_swing_JComponent$java_awt_FontMetrics$S(c, fm, string);
if (textWidth > availTextWidth) {
return C$.clipString$javax_swing_JComponent$java_awt_FontMetrics$S$I(c, fm, string, availTextWidth);
}return string;
}, 1);

Clazz.newMeth(C$, 'clipString$javax_swing_JComponent$java_awt_FontMetrics$S$I',  function (c, fm, string, availTextWidth) {
var clipString="...";
var stringLength=string.length$();
availTextWidth-=C$.stringWidth$javax_swing_JComponent$java_awt_FontMetrics$S(c, fm, clipString);
if (availTextWidth <= 0) {
return clipString;
}var needsTextLayout=false;
{
if (C$.charsBuffer == null  || C$.charsBuffer.length < stringLength ) {
C$.charsBuffer=string.toCharArray$();
} else {
string.getChars$I$I$CA$I(0, stringLength, C$.charsBuffer, 0);
}needsTextLayout=C$.isComplexLayout$CA$I$I(C$.charsBuffer, 0, stringLength);
if (!needsTextLayout) {
var width=0;
for (var nChars=0; nChars < stringLength; nChars++) {
width+=fm.charWidth$C(C$.charsBuffer[nChars]);
if (width > availTextWidth) {
string=string.substring$I$I(0, nChars);
break;
}}
}}if (needsTextLayout) {
var frc=C$.getFontRenderContext$java_awt_Component$java_awt_FontMetrics(c, fm);
var aString=Clazz.new_($I$(7,1).c$$S,[string]);
var measurer=Clazz.new_([aString.getIterator$(), frc],$I$(8,1).c$$java_text_AttributedCharacterIterator$java_awt_font_FontRenderContext);
var nChars=measurer.nextOffset$F(availTextWidth);
string=string.substring$I$I(0, nChars);
}return string + clipString;
}, 1);

Clazz.newMeth(C$, 'drawString$javax_swing_JComponent$java_awt_Graphics$S$I$I',  function (c, g, text, x, y) {
if (text == null  || text.length$() <= 0 ) {
return;
}g.drawString$S$I$I(text, x, y);
}, 1);

Clazz.newMeth(C$, 'drawStringUnderlineCharAt$javax_swing_JComponent$java_awt_Graphics$S$I$I$I',  function (c, g, text, underlinedIndex, x, y) {
if (text == null  || text.length$() <= 0 ) {
return;
}C$.drawString$javax_swing_JComponent$java_awt_Graphics$S$I$I(c, g, text, x, y);
var textLength=text.length$();
if (underlinedIndex >= 0 && underlinedIndex < textLength ) {
var underlineRectY=y;
var underlineRectHeight=1;
var underlineRectX=0;
var underlineRectWidth=0;
var isPrinting=C$.isPrinting$java_awt_Graphics(g);
var needsTextLayout=isPrinting;
if (!needsTextLayout) {
{
if (C$.charsBuffer == null  || C$.charsBuffer.length < textLength ) {
C$.charsBuffer=text.toCharArray$();
} else {
text.getChars$I$I$CA$I(0, textLength, C$.charsBuffer, 0);
}needsTextLayout=C$.isComplexLayout$CA$I$I(C$.charsBuffer, 0, textLength);
}}if (!needsTextLayout) {
var fm=g.getFontMetrics$();
underlineRectX=x + C$.stringWidth$javax_swing_JComponent$java_awt_FontMetrics$S(c, fm, text.substring$I$I(0, underlinedIndex));
underlineRectWidth=fm.charWidth$C(text.charAt$I(underlinedIndex));
} else {
var g2d=C$.getGraphics2D$java_awt_Graphics(g);
if (g2d != null ) {
var layout=Clazz.new_([text, g2d.getFont$(), g2d.getFontRenderContext$()],$I$(9,1).c$$S$java_awt_Font$java_awt_font_FontRenderContext);
if (isPrinting) {
var screenWidth=g2d.getFont$().getStringBounds$S$java_awt_font_FontRenderContext(text, C$.DEFAULT_FRC).getWidth$();
layout=layout.getJustifiedLayout$F(screenWidth);
}var leading=$I$(10).leading$I(underlinedIndex);
var trailing=$I$(10).trailing$I(underlinedIndex);
var shape=layout.getVisualHighlightShape$java_awt_font_TextHitInfo$java_awt_font_TextHitInfo(leading, trailing);
var rect=shape.getBounds$();
underlineRectX=x + rect.x;
underlineRectWidth=rect.width;
}}g.fillRect$I$I$I$I(underlineRectX, underlineRectY + 1, underlineRectWidth, underlineRectHeight);
}}, 1);

Clazz.newMeth(C$, 'loc2IndexFileList$javax_swing_JList$java_awt_Point',  function (list, point) {
var index=list.locationToIndex$java_awt_Point(point);
if (index != -1) {
var bySize=list.getClientProperty$O("List.isFileList");
if (Clazz.instanceOf(bySize, "java.lang.Boolean") && (bySize).booleanValue$() && !C$.pointIsInActualBounds$javax_swing_JList$I$java_awt_Point(list, index, point)  ) {
index=-1;
}}return index;
}, 1);

Clazz.newMeth(C$, 'pointIsInActualBounds$javax_swing_JList$I$java_awt_Point',  function (list, index, point) {
var renderer=list.getCellRenderer$();
var dataModel=list.getModel$();
var value=dataModel.getElementAt$I(index);
var item=renderer.getListCellRendererComponent$javax_swing_JList$O$I$Z$Z(list, value, index, false, false);
var itemSize=item.getPreferredSize$();
var cellBounds=list.getCellBounds$I$I(index, index);
if (!item.getComponentOrientation$().isLeftToRight$()) {
cellBounds.x+=(cellBounds.width - itemSize.width);
}cellBounds.width=itemSize.width;
return cellBounds.contains$java_awt_Point(point);
}, 1);

Clazz.newMeth(C$, 'pointOutsidePrefSize$javax_swing_JTable$I$I$java_awt_Point',  function (table, row, column, p) {
if (table.convertColumnIndexToModel$I(column) != 0 || row == -1 ) {
return true;
}var tcr=table.getCellRenderer$I$I(row, column);
var value=table.getValueAt$I$I(row, column);
var cell=tcr.getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I(table, value, false, false, row, column);
var itemSize=cell.getPreferredSize$();
var cellBounds=table.getCellRect$I$I$Z(row, column, false);
cellBounds.width=itemSize.width;
cellBounds.height=itemSize.height;
if (p.x > cellBounds.x + cellBounds.width || p.y > cellBounds.y + cellBounds.height ) {
return true;
}return false;
}, 1);

Clazz.newMeth(C$, 'setLeadAnchorWithoutSelection$javax_swing_ListSelectionModel$I$I',  function (model, lead, anchor) {
if (anchor == -1) {
anchor=lead;
}if (lead == -1) {
model.setAnchorSelectionIndex$I(-1);
model.setLeadSelectionIndex$I(-1);
} else {
if (model.isSelectedIndex$I(lead)) {
model.addSelectionInterval$I$I(lead, lead);
} else {
model.removeSelectionInterval$I$I(lead, lead);
}model.setAnchorSelectionIndex$I(anchor);
}}, 1);

Clazz.newMeth(C$, 'shouldIgnore$java_awt_event_MouseEvent$javax_swing_JComponent',  function (me, c) {
return c == null  || !c.isEnabled$()  || !$I$(11).isLeftMouseButton$java_awt_event_MouseEvent(me)  || me.isConsumed$() ;
}, 1);

Clazz.newMeth(C$, 'adjustFocus$javax_swing_JComponent',  function (c) {
if (!c.hasFocus$() && c.isRequestFocusEnabled$() ) {
c.requestFocus$();
}}, 1);

Clazz.newMeth(C$, 'drawChars$javax_swing_JComponent$java_awt_Graphics$CA$I$I$I$I',  function (c, g, data, offset, length, x, y) {
if (length <= 0) {
return x;
}var nextX=x + C$.getFontMetrics$javax_swing_JComponent$java_awt_Graphics(c, g).charsWidth$CA$I$I(data, offset, length);
g.drawChars$CA$I$I$I$I(data, offset, length, x, y);
return nextX;
}, 1);

Clazz.newMeth(C$, 'drawString$javax_swing_JComponent$java_awt_Graphics$java_text_AttributedCharacterIterator$I$I',  function (c, g, iterator, x, y) {
var retVal;
var isPrinting=C$.isPrinting$java_awt_Graphics(g);
var col=g.getColor$();
if (isPrinting) {
if (Clazz.instanceOf(col, "sun.swing.PrintColorUIResource")) {
g.setColor$java_awt_Color((col).getPrintColor$());
}}var g2d=C$.getGraphics2D$java_awt_Graphics(g);
if (g2d == null ) {
g.drawString$java_text_AttributedCharacterIterator$I$I(iterator, x, y);
retVal=x;
} else {
var frc;
frc=g2d.getFontRenderContext$();
var layout=Clazz.new_($I$(9,1).c$$java_text_AttributedCharacterIterator$java_awt_font_FontRenderContext,[iterator, frc]);
if (isPrinting) {
var deviceFRC=g2d.getFontRenderContext$();
if (!C$.isFontRenderContextPrintCompatible$java_awt_font_FontRenderContext$java_awt_font_FontRenderContext(frc, deviceFRC)) {
var screenWidth=layout.getAdvance$();
layout=Clazz.new_($I$(9,1).c$$java_text_AttributedCharacterIterator$java_awt_font_FontRenderContext,[iterator, deviceFRC]);
layout=layout.getJustifiedLayout$F(screenWidth);
}}layout.draw$java_awt_Graphics2D$F$F(g2d, x, y);
retVal=layout.getAdvance$();
}if (isPrinting) {
g.setColor$java_awt_Color(col);
}return retVal;
}, 1);

Clazz.newMeth(C$, 'isFontRenderContextPrintCompatible$java_awt_font_FontRenderContext$java_awt_font_FontRenderContext',  function (frc1, frc2) {
if (frc1 === frc2 ) {
return true;
}if (frc1 == null  || frc2 == null  ) {
return false;
}if (frc1.getFractionalMetricsHint$() !== frc2.getFractionalMetricsHint$() ) {
return false;
}if (!frc1.isTransformed$() && !frc2.isTransformed$() ) {
return true;
}var mat1=Clazz.array(Double.TYPE, [4]);
var mat2=Clazz.array(Double.TYPE, [4]);
frc1.getTransform$().getMatrix$DA(mat1);
frc2.getTransform$().getMatrix$DA(mat2);
return mat1[0] == mat2[0]  && mat1[1] == mat2[1]   && mat1[2] == mat2[2]   && mat1[3] == mat2[3]  ;
}, 1);

Clazz.newMeth(C$, 'getGraphics2D$java_awt_Graphics',  function (g) {
if (Clazz.instanceOf(g, "java.awt.Graphics2D")) {
return g;
} else {
return null;
}}, 1);

Clazz.newMeth(C$, 'getFontRenderContext$java_awt_Component',  function (c) {
if (c == null ) {
return C$.DEFAULT_FRC;
} else {
return c.getFontMetrics$java_awt_Font(c.getFont$()).getFontRenderContext$();
}}, 1);

Clazz.newMeth(C$, 'getFontRenderContext$java_awt_Component$java_awt_FontMetrics',  function (c, fm) {
return (fm != null ) ? fm.getFontRenderContext$() : C$.getFontRenderContext$java_awt_Component(c);
}, 1);

Clazz.newMeth(C$, 'getFontMetrics$javax_swing_JComponent$java_awt_Font',  function (c, font) {
return $I$(12).getMetrics$java_awt_Font(font);
}, 1);

Clazz.newMeth(C$, 'isPrinting$java_awt_Graphics',  function (g) {
return false;
}, 1);

Clazz.newMeth(C$, 'useSelectedTextColor$javax_swing_text_Highlighter_Highlight$javax_swing_text_JTextComponent',  function (h, c) {
var painter=h.getPainter$();
var painterClass=painter.getClass$().getName$();
if (painterClass.indexOf$S("javax.swing.text.DefaultHighlighter") != 0 && painterClass.indexOf$S("com.sun.java.swing.plaf.windows.WindowsTextUI") != 0 ) {
return false;
}try {
var defPainter=painter;
if (defPainter.getColor$() != null  && !defPainter.getColor$().equals$O(c.getSelectionColor$()) ) {
return false;
}} catch (e) {
if (Clazz.exceptionOf(e,"ClassCastException")){
return false;
} else {
throw e;
}
}
return true;
}, 1);

Clazz.newMeth(C$, 'canAccessSystemClipboard$',  function () {
var canAccess=false;
return canAccess;
}, 1);

Clazz.newMeth(C$, 'canCurrentEventAccessSystemClipboard$',  function () {
return false;
}, 1);

Clazz.newMeth(C$, 'displayPropertiesToCSS$java_awt_Font$java_awt_Color',  function (font, fg) {
var rule=Clazz.new_($I$(13,1).c$$S,["body {"]);
if (font != null ) {
rule.append$S(" font-family: ");
rule.append$S(font.getFamily$());
rule.append$S(" ; ");
rule.append$S(" font-size: ");
rule.append$S("" + font.getSize$());
rule.append$S("pt ;");
if (font.isBold$()) {
rule.append$S(" font-weight: 700 ; ");
}if (font.isItalic$()) {
rule.append$S(" font-style: italic ; ");
}}if (fg != null ) {
rule.append$S(" color: #");
if (fg.getRed$() < 16) {
rule.append$C("0");
}rule.append$S(Integer.toHexString$I(fg.getRed$()));
if (fg.getGreen$() < 16) {
rule.append$C("0");
}rule.append$S(Integer.toHexString$I(fg.getGreen$()));
if (fg.getBlue$() < 16) {
rule.append$C("0");
}rule.append$S(Integer.toHexString$I(fg.getBlue$()));
rule.append$S(" ; ");
}rule.append$S(" }");
return rule.toString();
}, 1);

Clazz.newMeth(C$, 'makeIcon$Class$Class$S',  function (baseClass, rootClass, imageFile) {
return null;
}, 1);

Clazz.newMeth(C$, 'isLocalDisplay$',  function () {
return true;
}, 1);

Clazz.newMeth(C$, 'getUIDefaultsInt$O',  function (key) {
return C$.getUIDefaultsInt$O$I(key, 0);
}, 1);

Clazz.newMeth(C$, 'getUIDefaultsInt$O$java_util_Locale',  function (key, l) {
return C$.getUIDefaultsInt$O$java_util_Locale$I(key, l, 0);
}, 1);

Clazz.newMeth(C$, 'getUIDefaultsInt$O$I',  function (key, defaultValue) {
return C$.getUIDefaultsInt$O$java_util_Locale$I(key, null, defaultValue);
}, 1);

Clazz.newMeth(C$, 'getUIDefaultsInt$O$java_util_Locale$I',  function (key, l, defaultValue) {
var value=$I$(14).get$O$java_util_Locale(key, l);
if (Clazz.instanceOf(value, "java.lang.Integer")) {
return (value).intValue$();
}if (Clazz.instanceOf(value, "java.lang.String")) {
try {
return Integer.parseInt$S(value);
} catch (nfe) {
if (Clazz.exceptionOf(nfe,"NumberFormatException")){
} else {
throw nfe;
}
}
}return defaultValue;
}, 1);

Clazz.newMeth(C$, 'compositeRequestFocus$java_awt_Component',  function (component) {
if (Clazz.instanceOf(component, "java.awt.Container")) {
var container=component;
if (container.isFocusCycleRoot$()) {
var policy=container.getFocusTraversalPolicy$();
var comp=policy.getDefaultComponent$java_awt_Container(container);
if (comp != null ) {
comp.requestFocus$();
return comp;
}}var rootAncestor=container.getFocusCycleRootAncestor$();
if (rootAncestor != null ) {
var policy=rootAncestor.getFocusTraversalPolicy$();
var comp=policy.getComponentAfter$java_awt_Container$java_awt_Component(rootAncestor, container);
if (comp != null  && $I$(11).isDescendingFrom$java_awt_Component$java_awt_Component(comp, container) ) {
comp.requestFocus$();
return comp;
}}}if (component.isFocusable$()) {
component.requestFocus$();
return component;
}return null;
}, 1);

Clazz.newMeth(C$, 'tabbedPaneChangeFocusTo$java_awt_Component',  function (comp) {
if (comp != null ) {
if (comp.isFocusTraversable$()) {
C$.compositeRequestFocus$java_awt_Component(comp);
return true;
} else if (Clazz.instanceOf(comp, "javax.swing.JComponent") && (comp).requestDefaultFocus$() ) {
return true;
}}return false;
}, 1);

Clazz.newMeth(C$, 'setSkipClickCount$java_awt_Component$I',  function (comp, count) {
if (Clazz.instanceOf(comp, "javax.swing.text.JTextComponent") && Clazz.instanceOf((comp).getCaret$(), "javax.swing.text.DefaultCaret") ) {
(comp).putClientProperty$O$O(C$.SKIP_CLICK_COUNT, Integer.valueOf$I(count));
}}, 1);

Clazz.newMeth(C$, 'liesIn$java_awt_Rectangle$java_awt_Point$Z$Z$Z',  function (rect, p, horizontal, ltr, three) {
var p0;
var pComp;
var length;
var forward;
if (horizontal) {
p0=rect.x;
pComp=p.x;
length=rect.width;
forward=ltr;
} else {
p0=rect.y;
pComp=p.y;
length=rect.height;
forward=true;
}if (three) {
var boundary=(length >= 30) ? 10 : (length/3|0);
if (pComp < p0 + boundary) {
return forward ? $I$(15).LEADING : $I$(15).TRAILING;
} else if (pComp >= p0 + length - boundary) {
return forward ? $I$(15).TRAILING : $I$(15).LEADING;
}return $I$(15).MIDDLE;
} else {
var middle=p0 + (length/2|0);
if (forward) {
return pComp >= middle ? $I$(15).TRAILING : $I$(15).LEADING;
} else {
return pComp < middle ? $I$(15).TRAILING : $I$(15).LEADING;
}}}, 1);

Clazz.newMeth(C$, 'liesInHorizontal$java_awt_Rectangle$java_awt_Point$Z$Z',  function (rect, p, ltr, three) {
return C$.liesIn$java_awt_Rectangle$java_awt_Point$Z$Z$Z(rect, p, true, ltr, three);
}, 1);

Clazz.newMeth(C$, 'liesInVertical$java_awt_Rectangle$java_awt_Point$Z',  function (rect, p, three) {
return C$.liesIn$java_awt_Rectangle$java_awt_Point$Z$Z$Z(rect, p, false, false, three);
}, 1);

Clazz.newMeth(C$, 'getTreePath$javax_swing_event_TreeModelEvent$javax_swing_tree_TreeModel',  function (event, model) {
var path=event.getTreePath$();
if ((path == null ) && (model != null ) ) {
var root=model.getRoot$();
if (root != null ) {
path=Clazz.new_($I$(16,1).c$$O,[root]);
}}return path;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.LAF_STATE_KEY= Clazz.new_();
C$.strongBearingCache=Clazz.array($I$(2), [10]);
C$.strongBearingCacheNextIndex=0;
C$.softBearingCache=Clazz.new_($I$(3,1));
C$.DEFAULT_FRC=Clazz.new_($I$(4,1).c$$java_awt_geom_AffineTransform$Z$Z,[null, false, false]);
C$.AA_TEXT_PROPERTY_KEY= Clazz.new_();
C$.SKIP_CLICK_COUNT= Clazz.new_();
C$.COMPONENT_UI_PROPERTY_KEY= Clazz.new_();
C$.BASICMENUITEMUI_MAX_TEXT_OFFSET=Clazz.new_($I$(5,1).c$$S,["maxTextOffset"]);
C$.charsBufferLock= Clazz.new_();
C$.charsBuffer=Clazz.array(Character.TYPE, [100]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.SwingUtilities2, "AATextInfo", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SwingUtilities2, "BearingCacheEntry", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['fontMetrics','java.awt.FontMetrics','font','java.awt.Font','frc','java.awt.font.FontRenderContext','cache','java.util.Map']]]

Clazz.newMeth(C$, 'c$$java_awt_FontMetrics',  function (fontMetrics) {
;C$.$init$.apply(this);
this.fontMetrics=fontMetrics;
this.font=fontMetrics.getFont$();
this.frc=fontMetrics.getFontRenderContext$();
this.cache=Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'getLeftSideBearing$C',  function (aChar) {
var bearing=this.cache.get$O(Character.valueOf$C(aChar));
if (bearing == null ) {
bearing=Short.valueOf$H(p$1.calcBearing$C.apply(this, [aChar]));
this.cache.put$O$O(Character.valueOf$C(aChar), bearing);
}return (((65280 & (bearing).$c())|0) >>> 8) - 127;
});

Clazz.newMeth(C$, 'getRightSideBearing$C',  function (aChar) {
var bearing=this.cache.get$O(Character.valueOf$C(aChar));
if (bearing == null ) {
bearing=Short.valueOf$H(p$1.calcBearing$C.apply(this, [aChar]));
this.cache.put$O$O(Character.valueOf$C(aChar), bearing);
}return ((255 & (bearing).$c())|0) - 127;
});

Clazz.newMeth(C$, 'calcBearing$C',  function (aChar) {
var width=this.fontMetrics.charWidth$C(aChar);
var lsb=(width/2|0);
var rsb=(width/2|0);
if (lsb < -127 || lsb > 127 ) {
lsb=0;
}if (rsb < -127 || rsb > 127 ) {
rsb=0;
}return ($s$[0] = (((lsb + 127) << 8) + (rsb + 127)), $s$[0]);
}, p$1);

Clazz.newMeth(C$, 'equals$O',  function (entry) {
if (entry === this ) {
return true;
}if (!(Clazz.instanceOf(entry, "sun.swing.SwingUtilities2.BearingCacheEntry"))) {
return false;
}var oEntry=entry;
return (this.font.equals$O(oEntry.font) && this.frc.equals$java_awt_font_FontRenderContext(oEntry.frc) );
});

Clazz.newMeth(C$, 'hashCode$',  function () {
var result=17;
if (this.font != null ) {
result=37 * result + this.font.hashCode$();
}if (this.frc != null ) {
result=37 * result + this.frc.hashCode$();
}return result;
});
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})()
;
(function(){/*e*/var C$=Clazz.newClass(P$.SwingUtilities2, "Section", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "LEADING", 0, []);
Clazz.newEnumConst($vals, C$.c$, "MIDDLE", 1, []);
Clazz.newEnumConst($vals, C$.c$, "TRAILING", 2, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:50 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
