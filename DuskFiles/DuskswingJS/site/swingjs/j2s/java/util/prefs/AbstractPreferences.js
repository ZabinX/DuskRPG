(function(){var P$=Clazz.newPackage("java.util.prefs"),p$1={},I$=[[0,'java.util.prefs.AbstractPreferences','java.util.LinkedList','java.util.HashMap','java.util.prefs.PreferenceChangeListener','java.util.prefs.NodeChangeListener','java.util.Objects','java.util.prefs.Base64','java.util.TreeSet','java.util.StringTokenizer','java.security.AccessController','java.util.prefs.Preferences',['java.util.prefs.AbstractPreferences','.EventDispatchThread'],'java.util.prefs.PreferenceChangeEvent',['java.util.prefs.AbstractPreferences','.NodeAddedEvent'],['java.util.prefs.AbstractPreferences','.NodeRemovedEvent'],'java.util.prefs.XmlSupport']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AbstractPreferences", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.prefs.Preferences');
C$.$classes$=[['NodeAddedEvent',2],['NodeRemovedEvent',2],['EventDispatchThread',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.newNode=false;
this.kidCache=Clazz.new_($I$(3,1));
this.removed=false;
this.prefListeners=Clazz.array($I$(4), [0]);
this.nodeListeners=Clazz.array($I$(5), [0]);
this.lock= Clazz.new_();
},1);

C$.$fields$=[['Z',['newNode','removed'],'S',['name','absolutePath'],'O',['parent','java.util.prefs.AbstractPreferences','+root','kidCache','java.util.Map','prefListeners','java.util.prefs.PreferenceChangeListener[]','nodeListeners','java.util.prefs.NodeChangeListener[]','lock','java.lang.Object']]
,['O',['EMPTY_STRING_ARRAY','String[]','EMPTY_ABSTRACT_PREFS_ARRAY','java.util.prefs.AbstractPreferences[]','eventQueue','java.util.List','eventDispatchThread','Thread']]]

Clazz.newMeth(C$, 'c$$java_util_prefs_AbstractPreferences$S',  function (parent, name) {
Clazz.super_(C$, this);
if (parent == null ) {
if (!name.equals$O("")) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Root name '" + name + "' must be \"\"" ]);
this.absolutePath="/";
this.root=this;
} else {
if (name.indexOf$I("/") != -1) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Name '" + name + "' contains '/'" ]);
if (name.equals$O("")) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal name: empty string"]);
this.root=parent.root;
this.absolutePath=(parent === this.root  ? "/" + name : parent.absolutePath$() + "/" + name );
}this.name=name;
this.parent=parent;
}, 1);

Clazz.newMeth(C$, 'put$S$S',  function (key, value) {
if (key == null  || value == null  ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (key.length$() > 80) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Key too long: " + key]);
if (value.length$() > 8192) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Value too long: " + value]);
{
if (this.removed) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Node has been removed."]);
this.putSpi$S$S(key, value);
p$1.enqueuePreferenceChangeEvent$S$S.apply(this, [key, value]);
}});

Clazz.newMeth(C$, 'get$S$S',  function (key, def) {
if (key == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["Null key"]);
{
if (this.removed) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Node has been removed."]);
var result=null;
try {
result=this.getSpi$S(key);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
return (result == null  ? def : result);
}});

Clazz.newMeth(C$, 'remove$S',  function (key) {
$I$(6).requireNonNull$O$S(key, "Specified key cannot be null");
{
if (this.removed) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Node has been removed."]);
this.removeSpi$S(key);
p$1.enqueuePreferenceChangeEvent$S$S.apply(this, [key, null]);
}});

Clazz.newMeth(C$, 'clear$',  function () {
{
var keys=this.keys$();
for (var i=0; i < keys.length; i++) this.remove$S(keys[i]);

}});

Clazz.newMeth(C$, 'putInt$S$I',  function (key, value) {
this.put$S$S(key, Integer.toString$I(value));
});

Clazz.newMeth(C$, 'getInt$S$I',  function (key, def) {
var result=def;
try {
var value=this.get$S$S(key, null);
if (value != null ) result=Integer.parseInt$S(value);
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
} else {
throw e;
}
}
return result;
});

Clazz.newMeth(C$, 'putLong$S$J',  function (key, value) {
this.put$S$S(key, Long.toString$J(value));
});

Clazz.newMeth(C$, 'getLong$S$J',  function (key, def) {
var result=def;
try {
var value=this.get$S$S(key, null);
if (value != null ) result=Long.parseLong$S(value);
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
} else {
throw e;
}
}
return result;
});

Clazz.newMeth(C$, 'putBoolean$S$Z',  function (key, value) {
this.put$S$S(key, String.valueOf$Z(value));
});

Clazz.newMeth(C$, 'getBoolean$S$Z',  function (key, def) {
var result=def;
var value=this.get$S$S(key, null);
if (value != null ) {
if (value.equalsIgnoreCase$S("true")) result=true;
 else if (value.equalsIgnoreCase$S("false")) result=false;
}return result;
});

Clazz.newMeth(C$, 'putFloat$S$F',  function (key, value) {
this.put$S$S(key, Float.toString$F(value));
});

Clazz.newMeth(C$, 'getFloat$S$F',  function (key, def) {
var result=def;
try {
var value=this.get$S$S(key, null);
if (value != null ) result=Float.parseFloat$S(value);
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
} else {
throw e;
}
}
return result;
});

Clazz.newMeth(C$, 'putDouble$S$D',  function (key, value) {
this.put$S$S(key, Double.toString$D(value));
});

Clazz.newMeth(C$, 'getDouble$S$D',  function (key, def) {
var result=def;
try {
var value=this.get$S$S(key, null);
if (value != null ) result=Double.parseDouble$S(value);
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
} else {
throw e;
}
}
return result;
});

Clazz.newMeth(C$, 'putByteArray$S$BA',  function (key, value) {
this.put$S$S(key, $I$(7).byteArrayToBase64$BA(value));
});

Clazz.newMeth(C$, 'getByteArray$S$BA',  function (key, def) {
var result=def;
var value=this.get$S$S(key, null);
try {
if (value != null ) result=$I$(7).base64ToByteArray$S(value);
} catch (e) {
if (Clazz.exceptionOf(e,"RuntimeException")){
} else {
throw e;
}
}
return result;
});

Clazz.newMeth(C$, 'keys$',  function () {
{
if (this.removed) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Node has been removed."]);
return this.keysSpi$();
}});

Clazz.newMeth(C$, 'childrenNames$',  function () {
{
if (this.removed) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Node has been removed."]);
var s=Clazz.new_([this.kidCache.keySet$()],$I$(8,1).c$$java_util_Collection);
for (var kid, $kid = 0, $$kid = this.childrenNamesSpi$(); $kid<$$kid.length&&((kid=($$kid[$kid])),1);$kid++) s.add$O(kid);

return s.toArray$OA(C$.EMPTY_STRING_ARRAY);
}});

Clazz.newMeth(C$, 'cachedChildren$',  function () {
return this.kidCache.values$().toArray$OA(C$.EMPTY_ABSTRACT_PREFS_ARRAY);
});

Clazz.newMeth(C$, 'parent$',  function () {
{
if (this.removed) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Node has been removed."]);
return this.parent;
}});

Clazz.newMeth(C$, 'node$S',  function (path) {
{
if (this.removed) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Node has been removed."]);
if (path.equals$O("")) return this;
if (path.equals$O("/")) return this.root;
if (path.charAt$I(0) != "/") return p$1.node$java_util_StringTokenizer.apply(this, [Clazz.new_($I$(9,1).c$$S$S$Z,[path, "/", true])]);
}return p$1.node$java_util_StringTokenizer.apply(this.root, [Clazz.new_([path.substring$I(1), "/", true],$I$(9,1).c$$S$S$Z)]);
});

Clazz.newMeth(C$, 'node$java_util_StringTokenizer',  function (path) {
var token=path.nextToken$();
if (token.equals$O("/")) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Consecutive slashes in path"]);
{
var child=this.kidCache.get$O(token);
if (child == null ) {
if (token.length$() > 80) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Node name " + token + " too long" ]);
child=this.childSpi$S(token);
if (child.newNode) p$1.enqueueNodeAddedEvent$java_util_prefs_Preferences.apply(this, [child]);
this.kidCache.put$O$O(token, child);
}if (!path.hasMoreTokens$()) return child;
path.nextToken$();
if (!path.hasMoreTokens$()) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Path ends with slash"]);
return p$1.node$java_util_StringTokenizer.apply(child, [path]);
}}, p$1);

Clazz.newMeth(C$, 'nodeExists$S',  function (path) {
{
if (path.equals$O("")) return !this.removed;
if (this.removed) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Node has been removed."]);
if (path.equals$O("/")) return true;
if (path.charAt$I(0) != "/") return p$1.nodeExists$java_util_StringTokenizer.apply(this, [Clazz.new_($I$(9,1).c$$S$S$Z,[path, "/", true])]);
}return p$1.nodeExists$java_util_StringTokenizer.apply(this.root, [Clazz.new_([path.substring$I(1), "/", true],$I$(9,1).c$$S$S$Z)]);
});

Clazz.newMeth(C$, 'nodeExists$java_util_StringTokenizer',  function (path) {
var token=path.nextToken$();
if (token.equals$O("/")) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Consecutive slashes in path"]);
{
var child=this.kidCache.get$O(token);
if (child == null ) child=this.getChild$S(token);
if (child == null ) return false;
if (!path.hasMoreTokens$()) return true;
path.nextToken$();
if (!path.hasMoreTokens$()) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Path ends with slash"]);
return p$1.nodeExists$java_util_StringTokenizer.apply(child, [path]);
}}, p$1);

Clazz.newMeth(C$, 'removeNode$',  function () {
if (this === this.root ) throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Can\'t remove the root!"]);
{
p$1.removeNode2.apply(this, []);
this.parent.kidCache.remove$O(this.name);
}});

Clazz.newMeth(C$, 'removeNode2',  function () {
{
if (this.removed) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Node already removed."]);
var kidNames=this.childrenNamesSpi$();
for (var i=0; i < kidNames.length; i++) if (!this.kidCache.containsKey$O(kidNames[i])) this.kidCache.put$O$O(kidNames[i], this.childSpi$S(kidNames[i]));

for (var i=this.kidCache.values$().iterator$(); i.hasNext$(); ) {
try {
p$1.removeNode2.apply(i.next$(), []);
i.remove$();
} catch (x) {
if (Clazz.exceptionOf(x,"java.util.prefs.BackingStoreException")){
} else {
throw x;
}
}
}
this.removeNodeSpi$();
this.removed=true;
p$1.enqueueNodeRemovedEvent$java_util_prefs_Preferences.apply(this.parent, [this]);
}}, p$1);

Clazz.newMeth(C$, 'name$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'absolutePath$',  function () {
return this.absolutePath;
});

Clazz.newMeth(C$, 'isUserNode$',  function () {
return $I$(10,"doPrivileged$java_security_PrivilegedAction",[((P$.AbstractPreferences$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AbstractPreferences$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
return Boolean.valueOf$Z(this.b$['java.util.prefs.AbstractPreferences'].root === $I$(11).userRoot$() );
});
})()
), Clazz.new_(P$.AbstractPreferences$1.$init$,[this, null]))]).booleanValue$();
});

Clazz.newMeth(C$, 'addPreferenceChangeListener$java_util_prefs_PreferenceChangeListener',  function (pcl) {
if (pcl == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["Change listener is null."]);
{
if (this.removed) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Node has been removed."]);
var old=this.prefListeners;
this.prefListeners=Clazz.array($I$(4), [old.length + 1]);
System.arraycopy$O$I$O$I$I(old, 0, this.prefListeners, 0, old.length);
this.prefListeners[old.length]=pcl;
}C$.startEventDispatchThreadIfNecessary$();
});

Clazz.newMeth(C$, 'removePreferenceChangeListener$java_util_prefs_PreferenceChangeListener',  function (pcl) {
{
if (this.removed) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Node has been removed."]);
if ((this.prefListeners == null ) || (this.prefListeners.length == 0) ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Listener not registered."]);
var newPl=Clazz.array($I$(4), [this.prefListeners.length - 1]);
var i=0;
while (i < newPl.length && this.prefListeners[i] !== pcl  )newPl[i]=this.prefListeners[i++];

if (i == newPl.length && this.prefListeners[i] !== pcl  ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Listener not registered."]);
while (i < newPl.length)newPl[i]=this.prefListeners[++i];

this.prefListeners=newPl;
}});

Clazz.newMeth(C$, 'addNodeChangeListener$java_util_prefs_NodeChangeListener',  function (ncl) {
if (ncl == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["Change listener is null."]);
{
if (this.removed) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Node has been removed."]);
if (this.nodeListeners == null ) {
this.nodeListeners=Clazz.array($I$(5), [1]);
this.nodeListeners[0]=ncl;
} else {
var old=this.nodeListeners;
this.nodeListeners=Clazz.array($I$(5), [old.length + 1]);
System.arraycopy$O$I$O$I$I(old, 0, this.nodeListeners, 0, old.length);
this.nodeListeners[old.length]=ncl;
}}C$.startEventDispatchThreadIfNecessary$();
});

Clazz.newMeth(C$, 'removeNodeChangeListener$java_util_prefs_NodeChangeListener',  function (ncl) {
{
if (this.removed) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Node has been removed."]);
if ((this.nodeListeners == null ) || (this.nodeListeners.length == 0) ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Listener not registered."]);
var i=0;
while (i < this.nodeListeners.length && this.nodeListeners[i] !== ncl  )++i;

if (i == this.nodeListeners.length) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Listener not registered."]);
var newNl=Clazz.array($I$(5), [this.nodeListeners.length - 1]);
if (i != 0) System.arraycopy$O$I$O$I$I(this.nodeListeners, 0, newNl, 0, i);
if (i != newNl.length) System.arraycopy$O$I$O$I$I(this.nodeListeners, i + 1, newNl, i, newNl.length - i);
this.nodeListeners=newNl;
}});

Clazz.newMeth(C$, 'getChild$S',  function (nodeName) {
{
var kidNames=this.childrenNames$();
for (var i=0; i < kidNames.length; i++) if (kidNames[i].equals$O(nodeName)) return this.childSpi$S(kidNames[i]);

}return null;
});

Clazz.newMeth(C$, 'toString',  function () {
return (this.isUserNode$() ? "User" : "System") + " Preference Node: " + this.absolutePath$() ;
});

Clazz.newMeth(C$, 'sync$',  function () {
p$1.sync2.apply(this, []);
});

Clazz.newMeth(C$, 'sync2',  function () {
var cachedKids;
{
if (this.removed) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Node has been removed"]);
this.syncSpi$();
cachedKids=this.cachedChildren$();
}for (var i=0; i < cachedKids.length; i++) p$1.sync2.apply(cachedKids[i], []);

}, p$1);

Clazz.newMeth(C$, 'flush$',  function () {
p$1.flush2.apply(this, []);
});

Clazz.newMeth(C$, 'flush2',  function () {
var cachedKids;
{
this.flushSpi$();
if (this.removed) return;
cachedKids=this.cachedChildren$();
}for (var i=0; i < cachedKids.length; i++) p$1.flush2.apply(cachedKids[i], []);

}, p$1);

Clazz.newMeth(C$, 'isRemoved$',  function () {
{
return this.removed;
}});

Clazz.newMeth(C$, 'startEventDispatchThreadIfNecessary$',  function () {
if (C$.eventDispatchThread == null ) {
C$.eventDispatchThread=Clazz.new_($I$(12,1));
C$.eventDispatchThread.setDaemon$Z(true);
C$.eventDispatchThread.start$();
}}, 1);

Clazz.newMeth(C$, 'prefListeners$',  function () {
{
return this.prefListeners;
}});

Clazz.newMeth(C$, 'nodeListeners$',  function () {
{
return this.nodeListeners;
}});

Clazz.newMeth(C$, 'enqueuePreferenceChangeEvent$S$S',  function (key, newValue) {
if (this.prefListeners.length != 0) {
{
C$.eventQueue.add$O(Clazz.new_($I$(13,1).c$$java_util_prefs_Preferences$S$S,[this, key, newValue]));
C$.eventQueue.notify$();
}}}, p$1);

Clazz.newMeth(C$, 'enqueueNodeAddedEvent$java_util_prefs_Preferences',  function (child) {
if (this.nodeListeners.length != 0) {
{
C$.eventQueue.add$O(Clazz.new_($I$(14,1).c$$java_util_prefs_Preferences$java_util_prefs_Preferences,[this, null, this, child]));
C$.eventQueue.notify$();
}}}, p$1);

Clazz.newMeth(C$, 'enqueueNodeRemovedEvent$java_util_prefs_Preferences',  function (child) {
if (this.nodeListeners.length != 0) {
{
C$.eventQueue.add$O(Clazz.new_($I$(15,1).c$$java_util_prefs_Preferences$java_util_prefs_Preferences,[this, null, this, child]));
C$.eventQueue.notify$();
}}}, p$1);

Clazz.newMeth(C$, 'exportNode$java_io_OutputStream',  function (os) {
$I$(16).export$java_io_OutputStream$java_util_prefs_Preferences$Z(os, this, false);
});

Clazz.newMeth(C$, 'exportSubtree$java_io_OutputStream',  function (os) {
$I$(16).export$java_io_OutputStream$java_util_prefs_Preferences$Z(os, this, true);
});

C$.$static$=function(){C$.$static$=0;
C$.EMPTY_STRING_ARRAY=Clazz.array(String, [0]);
C$.EMPTY_ABSTRACT_PREFS_ARRAY=Clazz.array(C$, [0]);
C$.eventQueue=Clazz.new_($I$(2,1));
C$.eventDispatchThread=null;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.AbstractPreferences, "NodeAddedEvent", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.util.prefs.NodeChangeEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_util_prefs_Preferences$java_util_prefs_Preferences',  function (parent, child) {
;C$.superclazz.c$$java_util_prefs_Preferences$java_util_prefs_Preferences.apply(this,[parent, child]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AbstractPreferences, "NodeRemovedEvent", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.util.prefs.NodeChangeEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_util_prefs_Preferences$java_util_prefs_Preferences',  function (parent, child) {
;C$.superclazz.c$$java_util_prefs_Preferences$java_util_prefs_Preferences.apply(this,[parent, child]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AbstractPreferences, "EventDispatchThread", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Thread');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
while (true){
var event=null;
{
try {
while ($I$(1).eventQueue.isEmpty$())$I$(1).eventQueue.wait$();

event=$I$(1).eventQueue.remove$I(0);
} catch (e) {
if (Clazz.exceptionOf(e,"InterruptedException")){
return;
} else {
throw e;
}
}
}var src=event.getSource$();
if (Clazz.instanceOf(event, "java.util.prefs.PreferenceChangeEvent")) {
var pce=event;
var listeners=src.prefListeners$();
for (var i=0; i < listeners.length; i++) listeners[i].preferenceChange$java_util_prefs_PreferenceChangeEvent(pce);

} else {
var nce=event;
var listeners=src.nodeListeners$();
if (Clazz.instanceOf(nce, "java.util.prefs.AbstractPreferences.NodeAddedEvent")) {
for (var i=0; i < listeners.length; i++) listeners[i].childAdded$java_util_prefs_NodeChangeEvent(nce);

} else {
for (var i=0; i < listeners.length; i++) listeners[i].childRemoved$java_util_prefs_NodeChangeEvent(nce);

}}}
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:40 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
