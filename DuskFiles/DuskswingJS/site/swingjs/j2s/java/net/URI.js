(function(){var P$=Clazz.newPackage("java.net"),p$1={},p$2={},I$=[[0,'java.net.URI',['java.net.URI','.Parser'],'java.net.URL','StringBuffer','InternalError']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "URI", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['Comparable', 'java.io.Serializable']);
C$.$classes$=[['Parser',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.port=-1;
this.decodedUserInfo=null;
this.decodedAuthority=null;
this.decodedPath=null;
this.decodedQuery=null;
this.decodedFragment=null;
this.decodedSchemeSpecificPart=null;
},1);

C$.$fields$=[['I',['port','hash'],'S',['scheme','fragment','authority','userInfo','host','path','query','schemeSpecificPart','decodedUserInfo','decodedAuthority','decodedPath','decodedQuery','decodedFragment','decodedSchemeSpecificPart','string'],'O',['秘bytes','byte[]']]
,['J',['L_DIGIT','H_UPALPHA','H_LOWALPHA','H_ALPHA','L_ALPHANUM','H_ALPHANUM','L_HEX','H_HEX','L_MARK','H_MARK','L_UNRESERVED','H_UNRESERVED','L_RESERVED','H_RESERVED','L_URIC','H_URIC','L_PCHAR','H_PCHAR','L_PATH','H_PATH','L_DASH','H_DASH','L_DOT','H_DOT','L_USERINFO','H_USERINFO','L_REG_NAME','H_REG_NAME','L_SERVER','H_SERVER','L_SERVER_PERCENT','H_SERVER_PERCENT','L_LEFT_BRACKET','H_LEFT_BRACKET','L_SCHEME','H_SCHEME','L_URIC_NO_SLASH','H_URIC_NO_SLASH'],'O',['hexDigits','char[]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (str) {
;C$.$init$.apply(this);
Clazz.new_($I$(2,1).c$$S,[this, null, str]).parse$Z(false);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S$I$S$S$S',  function (scheme, userInfo, host, port, path, query, fragment) {
;C$.$init$.apply(this);
var s=p$2.toString$S$S$S$S$S$I$S$S$S.apply(this, [scheme, null, null, userInfo, host, port, path, query, fragment]);
C$.checkPath$S$S$S(s, scheme, path);
Clazz.new_($I$(2,1).c$$S,[this, null, s]).parse$Z(true);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S$S$S',  function (scheme, authority, path, query, fragment) {
;C$.$init$.apply(this);
var s=p$2.toString$S$S$S$S$S$I$S$S$S.apply(this, [scheme, null, authority, null, null, -1, path, query, fragment]);
C$.checkPath$S$S$S(s, scheme, path);
Clazz.new_($I$(2,1).c$$S,[this, null, s]).parse$Z(false);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S$S',  function (scheme, host, path, fragment) {
C$.c$$S$S$S$I$S$S$S.apply(this, [scheme, null, host, -1, path, null, fragment]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S',  function (scheme, ssp, fragment) {
;C$.$init$.apply(this);
Clazz.new_([this, null, p$2.toString$S$S$S$S$S$I$S$S$S.apply(this, [scheme, ssp, null, null, null, -1, null, null, fragment])],$I$(2,1).c$$S).parse$Z(false);
}, 1);

Clazz.newMeth(C$, 'create$S',  function (str) {
try {
return Clazz.new_(C$.c$$S,[str]);
} catch (x) {
if (Clazz.exceptionOf(x,"java.net.URISyntaxException")){
var y=Clazz.new_(Clazz.load('IllegalArgumentException'));
y.initCause$Throwable(x);
throw y;
} else {
throw x;
}
}
}, 1);

Clazz.newMeth(C$, 'parseServerAuthority$',  function () {
if ((this.host != null ) || (this.authority == null ) ) return this;
p$2.defineString.apply(this, []);
Clazz.new_($I$(2,1).c$$S,[this, null, this.string]).parse$Z(true);
return this;
});

Clazz.newMeth(C$, 'normalize$',  function () {
return C$.normalize$java_net_URI(this);
});

Clazz.newMeth(C$, 'resolve$java_net_URI',  function (uri) {
return C$.resolve$java_net_URI$java_net_URI(this, uri);
});

Clazz.newMeth(C$, 'resolve$S',  function (str) {
return this.resolve$java_net_URI(C$.create$S(str));
});

Clazz.newMeth(C$, 'relativize$java_net_URI',  function (uri) {
return C$.relativize$java_net_URI$java_net_URI(this, uri);
});

Clazz.newMeth(C$, 'toURL$',  function () {
if (!this.isAbsolute$()) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["URI is not absolute"]);
return Clazz.new_([this.toString()],$I$(3,1).c$$S);
});

Clazz.newMeth(C$, 'getScheme$',  function () {
return this.scheme;
});

Clazz.newMeth(C$, 'isAbsolute$',  function () {
return this.scheme != null ;
});

Clazz.newMeth(C$, 'isOpaque$',  function () {
return this.path == null ;
});

Clazz.newMeth(C$, 'getRawSchemeSpecificPart$',  function () {
p$2.defineSchemeSpecificPart.apply(this, []);
return this.schemeSpecificPart;
});

Clazz.newMeth(C$, 'getSchemeSpecificPart$',  function () {
if (this.decodedSchemeSpecificPart == null ) this.decodedSchemeSpecificPart=C$.decode$S(this.getRawSchemeSpecificPart$());
return this.decodedSchemeSpecificPart;
});

Clazz.newMeth(C$, 'getRawAuthority$',  function () {
return this.authority;
});

Clazz.newMeth(C$, 'getAuthority$',  function () {
if (this.decodedAuthority == null ) this.decodedAuthority=C$.decode$S(this.authority);
return this.decodedAuthority;
});

Clazz.newMeth(C$, 'getRawUserInfo$',  function () {
return this.userInfo;
});

Clazz.newMeth(C$, 'getUserInfo$',  function () {
if ((this.decodedUserInfo == null ) && (this.userInfo != null ) ) this.decodedUserInfo=C$.decode$S(this.userInfo);
return this.decodedUserInfo;
});

Clazz.newMeth(C$, 'getHost$',  function () {
return this.host;
});

Clazz.newMeth(C$, 'getPort$',  function () {
return this.port;
});

Clazz.newMeth(C$, 'getRawPath$',  function () {
return this.path;
});

Clazz.newMeth(C$, 'getPath$',  function () {
if ((this.decodedPath == null ) && (this.path != null ) ) this.decodedPath=C$.decode$S(this.path);
return this.decodedPath;
});

Clazz.newMeth(C$, 'getRawQuery$',  function () {
return this.query;
});

Clazz.newMeth(C$, 'getQuery$',  function () {
if ((this.decodedQuery == null ) && (this.query != null ) ) this.decodedQuery=C$.decode$S(this.query);
return this.decodedQuery;
});

Clazz.newMeth(C$, 'getRawFragment$',  function () {
return this.fragment;
});

Clazz.newMeth(C$, 'getFragment$',  function () {
if ((this.decodedFragment == null ) && (this.fragment != null ) ) this.decodedFragment=C$.decode$S(this.fragment);
return this.decodedFragment;
});

Clazz.newMeth(C$, 'equals$O',  function (ob) {
if (ob === this ) return true;
if (!(Clazz.instanceOf(ob, "java.net.URI"))) return false;
var that=ob;
if (this.isOpaque$() != that.isOpaque$() ) return false;
if (!C$.equalIgnoringCase$S$S(this.scheme, that.scheme)) return false;
if (!C$.equal$S$S(this.fragment, that.fragment)) return false;
if (this.isOpaque$()) return C$.equal$S$S(this.schemeSpecificPart, that.schemeSpecificPart);
if (!C$.equal$S$S(this.path, that.path)) return false;
if (!C$.equal$S$S(this.query, that.query)) return false;
if (this.authority == that.authority) return true;
if (this.host != null ) {
if (!C$.equal$S$S(this.userInfo, that.userInfo)) return false;
if (!C$.equalIgnoringCase$S$S(this.host, that.host)) return false;
if (this.port != that.port) return false;
} else if (this.authority != null ) {
if (!C$.equal$S$S(this.authority, that.authority)) return false;
} else if (this.authority != that.authority) {
return false;
}return true;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
if (this.hash != 0) return this.hash;
var h=C$.hashIgnoringCase$I$S(0, this.scheme);
h=C$.hash$I$S(h, this.fragment);
if (this.isOpaque$()) {
h=C$.hash$I$S(h, this.schemeSpecificPart);
} else {
h=C$.hash$I$S(h, this.path);
h=C$.hash$I$S(h, this.query);
if (this.host != null ) {
h=C$.hash$I$S(h, this.userInfo);
h=C$.hashIgnoringCase$I$S(h, this.host);
h+=1949 * this.port;
} else {
h=C$.hash$I$S(h, this.authority);
}}this.hash=h;
return h;
});

Clazz.newMeth(C$, ['compareTo$java_net_URI','compareTo$O'],  function (that) {
var c;
if ((c=C$.compareIgnoringCase$S$S(this.scheme, that.scheme)) != 0) return c;
if (this.isOpaque$()) {
if (that.isOpaque$()) {
if ((c=C$.compare$S$S(this.schemeSpecificPart, that.schemeSpecificPart)) != 0) return c;
return C$.compare$S$S(this.fragment, that.fragment);
}return 1;
} else if (that.isOpaque$()) {
return -1;
}if ((this.host != null ) && (that.host != null ) ) {
if ((c=C$.compare$S$S(this.userInfo, that.userInfo)) != 0) return c;
if ((c=C$.compareIgnoringCase$S$S(this.host, that.host)) != 0) return c;
if ((c=this.port - that.port) != 0) return c;
} else {
if ((c=C$.compare$S$S(this.authority, that.authority)) != 0) return c;
}if ((c=C$.compare$S$S(this.path, that.path)) != 0) return c;
if ((c=C$.compare$S$S(this.query, that.query)) != 0) return c;
return C$.compare$S$S(this.fragment, that.fragment);
});

Clazz.newMeth(C$, 'toString',  function () {
p$2.defineString.apply(this, []);
return this.string;
});

Clazz.newMeth(C$, 'toASCIIString$',  function () {
p$2.defineString.apply(this, []);
return C$.encode$S(this.string);
});

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream',  function (os) {
p$2.defineString.apply(this, []);
os.defaultWriteObject$();
}, p$2);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream',  function (is) {
this.port=-1;
is.defaultReadObject$();
try {
Clazz.new_($I$(2,1).c$$S,[this, null, this.string]).parse$Z(false);
} catch (x) {
if (Clazz.exceptionOf(x,"java.net.URISyntaxException")){
var y=Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["Invalid URI"]);
y.initCause$Throwable(x);
throw y;
} else {
throw x;
}
}
}, p$2);

Clazz.newMeth(C$, 'toLower$C',  function (c) {
if ((c >= "A") && (c <= "Z") ) return c.$c() + (32);
return c.$c();
}, 1);

Clazz.newMeth(C$, 'equal$S$S',  function (s, t) {
if (s == t) return true;
if ((s != null ) && (t != null ) ) {
if (s.length$() != t.length$()) return false;
if (s.indexOf$I("%") < 0) return s.equals$O(t);
var n=s.length$();
for (var i=0; i < n; ) {
var c=s.charAt$I(i);
var d=t.charAt$I(i);
if (c != "%") {
if (c != d) return false;
++i;
continue;
}++i;
if (C$.toLower$C(s.charAt$I(i)) != C$.toLower$C(t.charAt$I(i))) return false;
++i;
if (C$.toLower$C(s.charAt$I(i)) != C$.toLower$C(t.charAt$I(i))) return false;
++i;
}
return true;
}return false;
}, 1);

Clazz.newMeth(C$, 'equalIgnoringCase$S$S',  function (s, t) {
if (s == t) return true;
if ((s != null ) && (t != null ) ) {
var n=s.length$();
if (t.length$() != n) return false;
for (var i=0; i < n; i++) {
if (C$.toLower$C(s.charAt$I(i)) != C$.toLower$C(t.charAt$I(i))) return false;
}
return true;
}return false;
}, 1);

Clazz.newMeth(C$, 'hash$I$S',  function (hash, s) {
if (s == null ) return hash;
return hash * 127 + s.hashCode$();
}, 1);

Clazz.newMeth(C$, 'hashIgnoringCase$I$S',  function (hash, s) {
if (s == null ) return hash;
var h=hash;
var n=s.length$();
for (var i=0; i < n; i++) h=31 * h + C$.toLower$C(s.charAt$I(i));

return h;
}, 1);

Clazz.newMeth(C$, 'compare$S$S',  function (s, t) {
if (s == t) return 0;
if (s != null ) {
if (t != null ) return s.compareTo$S(t);
 else return 1;
} else {
return -1;
}}, 1);

Clazz.newMeth(C$, 'compareIgnoringCase$S$S',  function (s, t) {
if (s == t) return 0;
if (s != null ) {
if (t != null ) {
var sn=s.length$();
var tn=t.length$();
var n=sn < tn ? sn : tn;
for (var i=0; i < n; i++) {
var c=C$.toLower$C(s.charAt$I(i)) - C$.toLower$C(t.charAt$I(i));
if (c != 0) return c;
}
return sn - tn;
}return 1;
} else {
return -1;
}}, 1);

Clazz.newMeth(C$, 'checkPath$S$S$S',  function (s, scheme, path) {
if (scheme != null ) {
if ((path != null ) && ((path.length$() > 0) && (path.charAt$I(0) != "/") ) ) throw Clazz.new_(Clazz.load('java.net.URISyntaxException').c$$S$S,[s, "Relative path in absolute URI"]);
}}, 1);

Clazz.newMeth(C$, 'appendAuthority$StringBuffer$S$S$S$I',  function (sb, authority, userInfo, host, port) {
if (host != null ) {
sb.append$S("//");
if (userInfo != null ) {
sb.append$S(C$.quote$S$J$J(userInfo, C$.L_USERINFO, C$.H_USERINFO));
sb.append$C("@");
}var needBrackets=((host.indexOf$I(":") >= 0) && !host.startsWith$S("[") && !host.endsWith$S("]")  );
if (needBrackets) sb.append$C("[");
sb.append$S(host);
if (needBrackets) sb.append$C("]");
if (port != -1) {
sb.append$C(":");
sb.append$I(port);
}} else if (authority != null ) {
sb.append$S("//");
if (authority.startsWith$S("[")) {
var end=authority.indexOf$S("]");
if (end != -1 && authority.indexOf$S(":") != -1 ) {
var doquote;
var dontquote;
if (end == authority.length$()) {
dontquote=authority;
doquote="";
} else {
dontquote=authority.substring$I$I(0, end + 1);
doquote=authority.substring$I(end + 1);
}sb.append$S(dontquote);
sb.append$S(C$.quote$S$J$J(doquote, Long.$or(C$.L_REG_NAME,C$.L_SERVER), Long.$or(C$.H_REG_NAME,C$.H_SERVER)));
}} else {
sb.append$S(C$.quote$S$J$J(authority, Long.$or(C$.L_REG_NAME,C$.L_SERVER), Long.$or(C$.H_REG_NAME,C$.H_SERVER)));
}}}, p$2);

Clazz.newMeth(C$, 'appendSchemeSpecificPart$StringBuffer$S$S$S$S$I$S$S',  function (sb, opaquePart, authority, userInfo, host, port, path, query) {
if (opaquePart != null ) {
if (opaquePart.startsWith$S("//[")) {
var end=opaquePart.indexOf$S("]");
if (end != -1 && opaquePart.indexOf$S(":") != -1 ) {
var doquote;
var dontquote;
if (end == opaquePart.length$()) {
dontquote=opaquePart;
doquote="";
} else {
dontquote=opaquePart.substring$I$I(0, end + 1);
doquote=opaquePart.substring$I(end + 1);
}sb.append$S(dontquote);
sb.append$S(C$.quote$S$J$J(doquote, C$.L_URIC, C$.H_URIC));
}} else {
sb.append$S(C$.quote$S$J$J(opaquePart, C$.L_URIC, C$.H_URIC));
}} else {
p$2.appendAuthority$StringBuffer$S$S$S$I.apply(this, [sb, authority, userInfo, host, port]);
if (path != null ) sb.append$S(C$.quote$S$J$J(path, C$.L_PATH, C$.H_PATH));
if (query != null ) {
sb.append$C("?");
sb.append$S(C$.quote$S$J$J(query, C$.L_URIC, C$.H_URIC));
}}}, p$2);

Clazz.newMeth(C$, 'appendFragment$StringBuffer$S',  function (sb, fragment) {
if (fragment != null ) {
sb.append$C("#");
sb.append$S(C$.quote$S$J$J(fragment, C$.L_URIC, C$.H_URIC));
}}, p$2);

Clazz.newMeth(C$, 'toString$S$S$S$S$S$I$S$S$S',  function (scheme, opaquePart, authority, userInfo, host, port, path, query, fragment) {
var sb=Clazz.new_($I$(4,1));
if (scheme != null ) {
sb.append$S(scheme);
sb.append$C(":");
}p$2.appendSchemeSpecificPart$StringBuffer$S$S$S$S$I$S$S.apply(this, [sb, opaquePart, authority, userInfo, host, port, path, query]);
p$2.appendFragment$StringBuffer$S.apply(this, [sb, fragment]);
return sb.toString();
}, p$2);

Clazz.newMeth(C$, 'defineSchemeSpecificPart',  function () {
if (this.schemeSpecificPart != null ) return;
var sb=Clazz.new_($I$(4,1));
p$2.appendSchemeSpecificPart$StringBuffer$S$S$S$S$I$S$S.apply(this, [sb, null, this.getAuthority$(), this.getUserInfo$(), this.host, this.port, this.getPath$(), this.getQuery$()]);
if (sb.length$() == 0) return;
this.schemeSpecificPart=sb.toString();
}, p$2);

Clazz.newMeth(C$, 'defineString',  function () {
if (this.string != null ) return;
var sb=Clazz.new_($I$(4,1));
if (this.scheme != null ) {
sb.append$S(this.scheme);
sb.append$C(":");
}if (this.isOpaque$()) {
sb.append$S(this.schemeSpecificPart);
} else {
if (this.host != null ) {
sb.append$S("//");
if (this.userInfo != null ) {
sb.append$S(this.userInfo);
sb.append$C("@");
}var needBrackets=((this.host.indexOf$I(":") >= 0) && !this.host.startsWith$S("[") && !this.host.endsWith$S("]")  );
if (needBrackets) sb.append$C("[");
sb.append$S(this.host);
if (needBrackets) sb.append$C("]");
if (this.port != -1) {
sb.append$C(":");
sb.append$I(this.port);
}} else if (this.authority != null ) {
sb.append$S("//");
sb.append$S(this.authority);
}if (this.path != null ) sb.append$S(this.path);
if (this.query != null ) {
sb.append$C("?");
sb.append$S(this.query);
}}if (this.fragment != null ) {
sb.append$C("#");
sb.append$S(this.fragment);
}this.string=sb.toString();
}, p$2);

Clazz.newMeth(C$, 'resolvePath$S$S$Z',  function (base, child, absolute) {
var i=base.lastIndexOf$I("/");
var cn=child.length$();
var path="";
if (cn == 0) {
if (i >= 0) path=base.substring$I$I(0, i + 1);
} else {
var sb=Clazz.new_([base.length$() + cn],$I$(4,1).c$$I);
if (i >= 0) sb.append$S(base.substring$I$I(0, i + 1));
sb.append$S(child);
path=sb.toString();
}var np=C$.normalize$S(path);
return np;
}, 1);

Clazz.newMeth(C$, 'resolve$java_net_URI$java_net_URI',  function (base, child) {
if (child.isOpaque$() || base.isOpaque$() ) return child;
if ((child.scheme == null ) && (child.authority == null ) && child.path.equals$O("") && (child.fragment != null ) && (child.query == null )  ) {
if ((base.fragment != null ) && child.fragment.equals$O(base.fragment) ) {
return base;
}var ru=Clazz.new_(C$);
ru.scheme=base.scheme;
ru.authority=base.authority;
ru.userInfo=base.userInfo;
ru.host=base.host;
ru.port=base.port;
ru.path=base.path;
ru.fragment=child.fragment;
ru.query=base.query;
return ru;
}if (child.scheme != null ) return child;
var ru=Clazz.new_(C$);
ru.scheme=base.scheme;
ru.query=child.query;
ru.fragment=child.fragment;
if (child.authority == null ) {
ru.authority=base.authority;
ru.host=base.host;
ru.userInfo=base.userInfo;
ru.port=base.port;
var cp=(child.path == null ) ? "" : child.path;
if ((cp.length$() > 0) && (cp.charAt$I(0) == "/") ) {
ru.path=child.path;
} else {
ru.path=C$.resolvePath$S$S$Z(base.path, cp, base.isAbsolute$());
}} else {
ru.authority=child.authority;
ru.host=child.host;
ru.userInfo=child.userInfo;
ru.host=child.host;
ru.port=child.port;
ru.path=child.path;
}return ru;
}, 1);

Clazz.newMeth(C$, 'normalize$java_net_URI',  function (u) {
if (u.isOpaque$() || (u.path == null ) || (u.path.length$() == 0)  ) return u;
var np=C$.normalize$S(u.path);
if (np == u.path) return u;
var v=Clazz.new_(C$);
v.scheme=u.scheme;
v.fragment=u.fragment;
v.authority=u.authority;
v.userInfo=u.userInfo;
v.host=u.host;
v.port=u.port;
v.path=np;
v.query=u.query;
return v;
}, 1);

Clazz.newMeth(C$, 'relativize$java_net_URI$java_net_URI',  function (base, child) {
if (child.isOpaque$() || base.isOpaque$() ) return child;
if (!C$.equalIgnoringCase$S$S(base.scheme, child.scheme) || !C$.equal$S$S(base.authority, child.authority) ) return child;
var bp=C$.normalize$S(base.path);
var cp=C$.normalize$S(child.path);
if (!bp.equals$O(cp)) {
if (!bp.endsWith$S("/")) bp=bp + "/";
if (!cp.startsWith$S(bp)) return child;
}var v=Clazz.new_(C$);
v.path=cp.substring$I(bp.length$());
v.query=child.query;
v.fragment=child.fragment;
return v;
}, 1);

Clazz.newMeth(C$, 'needsNormalization$S',  function (path) {
var normal=true;
var ns=0;
var end=path.length$() - 1;
var p=0;
while (p <= end){
if (path.charAt$I(p) != "/") break;
++p;
}
if (p > 1) normal=false;
while (p <= end){
if ((path.charAt$I(p) == ".") && ((p == end) || ((path.charAt$I(p + 1) == "/") || ((path.charAt$I(p + 1) == ".") && ((p + 1 == end) || (path.charAt$I(p + 2) == "/") ) ) ) ) ) {
normal=false;
}++ns;
while (p <= end){
if (path.charAt$I(p++) != "/") continue;
while (p <= end){
if (path.charAt$I(p) != "/") break;
normal=false;
++p;
}
break;
}
}
return normal ? -1 : ns;
}, 1);

Clazz.newMeth(C$, 'split$CA$IA',  function (path, segs) {
var end=path.length - 1;
var p=0;
var i=0;
while (p <= end){
if (path[p] != "/") break;
path[p]="\u0000";
++p;
}
while (p <= end){
segs[i++]=p++;
while (p <= end){
if (path[p++] != "/") continue;
path[p - 1]="\u0000";
while (p <= end){
if (path[p] != "/") break;
path[p++]="\u0000";
}
break;
}
}
if (i != segs.length) throw Clazz.new_($I$(5,1));
}, 1);

Clazz.newMeth(C$, 'join$CA$IA',  function (path, segs) {
var ns=segs.length;
var end=path.length - 1;
var p=0;
if (path[p] == "\u0000") {
path[p++]="/";
}for (var i=0; i < ns; i++) {
var q=segs[i];
if (q == -1) continue;
if (p == q) {
while ((p <= end) && (path[p] != "\u0000") )++p;

if (p <= end) {
path[p++]="/";
}} else if (p < q) {
while ((q <= end) && (path[q] != "\u0000") )path[p++]=path[q++];

if (q <= end) {
path[p++]="/";
}} else throw Clazz.new_($I$(5,1));
}
return p;
}, 1);

Clazz.newMeth(C$, 'removeDots$CA$IA',  function (path, segs) {
var ns=segs.length;
var end=path.length - 1;
for (var i=0; i < ns; i++) {
var dots=0;
do {
var p=segs[i];
if (path[p] == ".") {
if (p == end) {
dots=1;
break;
} else if (path[p + 1] == "\u0000") {
dots=1;
break;
} else if ((path[p + 1] == ".") && ((p + 1 == end) || (path[p + 2] == "\u0000") ) ) {
dots=2;
break;
}}++i;
} while (i < ns);
if ((i > ns) || (dots == 0) ) break;
if (dots == 1) {
segs[i]=-1;
} else {
var j;
for (j=i - 1; j >= 0; j--) {
if (segs[j] != -1) break;
}
if (j >= 0) {
var q=segs[j];
if (!((path[q] == ".") && (path[q + 1] == ".") && (path[q + 2] == "\u0000")  )) {
segs[i]=-1;
segs[j]=-1;
}}}}
}, 1);

Clazz.newMeth(C$, 'maybeAddLeadingDot$CA$IA',  function (path, segs) {
if (path[0] == "\u0000") return;
var ns=segs.length;
var f=0;
while (f < ns){
if (segs[f] >= 0) break;
++f;
}
if ((f >= ns) || (f == 0) ) return;
var p=segs[f];
while ((p < path.length) && (path[p] != ":") && (path[p] != "\u0000")  )++p;

if (p >= path.length || path[p] == "\u0000" ) return;
path[0]=".";
path[1]="\u0000";
segs[0]=0;
}, 1);

Clazz.newMeth(C$, 'normalize$S',  function (ps) {
var ns=C$.needsNormalization$S(ps);
if (ns < 0) return ps;
var path=ps.toCharArray$();
var segs=Clazz.array(Integer.TYPE, [ns]);
C$.split$CA$IA(path, segs);
C$.removeDots$CA$IA(path, segs);
C$.maybeAddLeadingDot$CA$IA(path, segs);
var s= String.instantialize(path, 0, C$.join$CA$IA(path, segs));
if (s.equals$O(ps)) {
return ps;
}return s;
}, 1);

Clazz.newMeth(C$, 'lowMask$S',  function (chars) {
var n=chars.length$();
var m=0;
for (var i=0; i < n; i++) {
var c=chars.charAt$I(i);
if (c.$c() < 64 ) (m=Long.$or(m,((Long.$sl(1,c.$c())))));
}
return m;
}, 1);

Clazz.newMeth(C$, 'highMask$S',  function (chars) {
var n=chars.length$();
var m=0;
for (var i=0; i < n; i++) {
var c=chars.charAt$I(i);
if ((c.$c() >= 64 ) && (c.$c() < 128 ) ) (m=Long.$or(m,((Long.$sl(1,(c.$c() - 64))))));
}
return m;
}, 1);

Clazz.newMeth(C$, 'lowMask$C$C',  function (first, last) {
var m=0;
var f=Math.max(Math.min(first.$c(), 63), 0);
var l=Math.max(Math.min(last.$c(), 63), 0);
for (var i=f; i <= l; i++) (m=Long.$or(m,(Long.$sl(1,i))));

return m;
}, 1);

Clazz.newMeth(C$, 'highMask$C$C',  function (first, last) {
var m=0;
var f=Math.max(Math.min(first.$c(), 127), 64) - 64;
var l=Math.max(Math.min(last.$c(), 127), 64) - 64;
for (var i=f; i <= l; i++) (m=Long.$or(m,(Long.$sl(1,i))));

return m;
}, 1);

Clazz.newMeth(C$, 'match$C$J$J',  function (c, lowMask, highMask) {
if (c.$c() < 64 ) return Long.$ne((Long.$and((Long.$sl(1,c.$c())),lowMask)),0 );
if (c.$c() < 128 ) return Long.$ne((Long.$and((Long.$sl(1,(c.$c() - 64))),highMask)),0 );
return false;
}, 1);

Clazz.newMeth(C$, 'appendEscape$StringBuffer$B',  function (sb, b) {
sb.append$C("%");
sb.append$C(C$.hexDigits[(b >> 4) & 15]);
sb.append$C(C$.hexDigits[(b >> 0) & 15]);
}, 1);

Clazz.newMeth(C$, 'appendEncoded$StringBuffer$C',  function (sb, c) {
sb.append$C(c);
}, 1);

Clazz.newMeth(C$, 'quote$S$J$J',  function (s, lowMask, highMask) {
var n=s.length$();
var sb=null;
var allowNonASCII=(Long.$ne((Long.$and(lowMask,1)),0 ));
for (var i=0; i < s.length$(); i++) {
var c=s.charAt$I(i);
if (c < "\u0080") {
if (!C$.match$C$J$J(c, lowMask, highMask)) {
if (sb == null ) {
sb=Clazz.new_($I$(4,1));
sb.append$S(s.substring$I$I(0, i));
}C$.appendEscape$StringBuffer$B(sb, ($b$[0] = c.$c(), $b$[0]));
} else {
if (sb != null ) sb.append$C(c);
}} else if (allowNonASCII && (Character.isSpaceChar$C(c) || Character.isISOControl$C(c) ) ) {
if (sb == null ) {
sb=Clazz.new_($I$(4,1));
sb.append$S(s.substring$I$I(0, i));
}C$.appendEncoded$StringBuffer$C(sb, c);
} else {
if (sb != null ) sb.append$C(c);
}}
return (sb == null ) ? s : sb.toString();
}, 1);

Clazz.newMeth(C$, 'encode$S',  function (s) {
return (1?encodeURI(s):null);
}, 1);

Clazz.newMeth(C$, 'decode$S',  function (s) {
return (s!=null?decodeURI(s):null);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.L_DIGIT=C$.lowMask$C$C("0", "9");
C$.H_UPALPHA=C$.highMask$C$C("A", "Z");
C$.H_LOWALPHA=C$.highMask$C$C("a", "z");
C$.H_ALPHA=Long.$or(C$.H_LOWALPHA,C$.H_UPALPHA);
C$.L_ALPHANUM=Long.$or(C$.L_DIGIT,0);
C$.H_ALPHANUM=Long.$or(0,C$.H_ALPHA);
C$.L_HEX=C$.L_DIGIT;
C$.H_HEX=Long.$or(C$.highMask$C$C("A", "F"),C$.highMask$C$C("a", "f"));
C$.L_MARK=C$.lowMask$S("-_.!~*\'()");
C$.H_MARK=C$.highMask$S("-_.!~*\'()");
C$.L_UNRESERVED=Long.$or(C$.L_ALPHANUM,C$.L_MARK);
C$.H_UNRESERVED=Long.$or(C$.H_ALPHANUM,C$.H_MARK);
C$.L_RESERVED=C$.lowMask$S(";/?:@&=+$,[]");
C$.H_RESERVED=C$.highMask$S(";/?:@&=+$,[]");
C$.L_URIC=Long.$or(C$.L_RESERVED,C$.L_UNRESERVED , 1 );
C$.H_URIC=Long.$or(C$.H_RESERVED,C$.H_UNRESERVED , 0 );
C$.L_PCHAR=Long.$or(C$.L_UNRESERVED,1 , C$.lowMask$S(":@&=+$,") );
C$.H_PCHAR=Long.$or(C$.H_UNRESERVED,0 , C$.highMask$S(":@&=+$,") );
C$.L_PATH=Long.$or(C$.L_PCHAR,C$.lowMask$S(";/"));
C$.H_PATH=Long.$or(C$.H_PCHAR,C$.highMask$S(";/"));
C$.L_DASH=C$.lowMask$S("-");
C$.H_DASH=C$.highMask$S("-");
C$.L_DOT=C$.lowMask$S(".");
C$.H_DOT=C$.highMask$S(".");
C$.L_USERINFO=Long.$or(C$.L_UNRESERVED,1 , C$.lowMask$S(";:&=+$,") );
C$.H_USERINFO=Long.$or(C$.H_UNRESERVED,0 , C$.highMask$S(";:&=+$,") );
C$.L_REG_NAME=Long.$or(C$.L_UNRESERVED,1 , C$.lowMask$S("$,;:@&=+") );
C$.H_REG_NAME=Long.$or(C$.H_UNRESERVED,0 , C$.highMask$S("$,;:@&=+") );
C$.L_SERVER=Long.$or(C$.L_USERINFO,C$.L_ALPHANUM , C$.L_DASH , C$.lowMask$S(".:@[]") );
C$.H_SERVER=Long.$or(C$.H_USERINFO,C$.H_ALPHANUM , C$.H_DASH , C$.highMask$S(".:@[]") );
C$.L_SERVER_PERCENT=Long.$or(C$.L_SERVER,C$.lowMask$S("%"));
C$.H_SERVER_PERCENT=Long.$or(C$.H_SERVER,C$.highMask$S("%"));
C$.L_LEFT_BRACKET=C$.lowMask$S("[");
C$.H_LEFT_BRACKET=C$.highMask$S("[");
C$.L_SCHEME=Long.$or(0,C$.L_DIGIT , C$.lowMask$S("+-.") );
C$.H_SCHEME=Long.$or(C$.H_ALPHA,0 , C$.highMask$S("+-.") );
C$.L_URIC_NO_SLASH=Long.$or(C$.L_UNRESERVED,1 , C$.lowMask$S(";?:@&=+$,") );
C$.H_URIC_NO_SLASH=Long.$or(C$.H_UNRESERVED,0 , C$.highMask$S(";?:@&=+$,") );
C$.hexDigits=Clazz.array(Character.TYPE, -1, ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]);
};
var $b$ = new Int8Array(1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.URI, "Parser", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.requireServerAuthority=false;
this.ipv6byteCount=0;
},1);

C$.$fields$=[['Z',['requireServerAuthority'],'I',['ipv6byteCount'],'S',['input']]]

Clazz.newMeth(C$, 'c$$S',  function (s) {
;C$.$init$.apply(this);
this.input=s;
this.b$['java.net.URI'].string=s;
}, 1);

Clazz.newMeth(C$, 'fail$S',  function (reason) {
throw Clazz.new_(Clazz.load('java.net.URISyntaxException').c$$S$S,[this.input, reason]);
}, p$1);

Clazz.newMeth(C$, 'fail$S$I',  function (reason, p) {
throw Clazz.new_(Clazz.load('java.net.URISyntaxException').c$$S$S$I,[this.input, reason, p]);
}, p$1);

Clazz.newMeth(C$, 'failExpecting$S$I',  function (expected, p) {
p$1.fail$S$I.apply(this, ["Expected " + expected, p]);
}, p$1);

Clazz.newMeth(C$, 'failExpecting$S$S$I',  function (expected, prior, p) {
p$1.fail$S$I.apply(this, ["Expected " + expected + " following " + prior , p]);
}, p$1);

Clazz.newMeth(C$, 'substring$I$I',  function (start, end) {
return this.input.substring$I$I(start, end);
}, p$1);

Clazz.newMeth(C$, 'charAt$I',  function (p) {
return this.input.charAt$I(p);
}, p$1);

Clazz.newMeth(C$, 'at$I$I$C',  function (start, end, c) {
return (start < end) && (p$1.charAt$I.apply(this, [start]) == c) ;
}, p$1);

Clazz.newMeth(C$, 'at$I$I$S',  function (start, end, s) {
var p=start;
var sn=s.length$();
if (sn > end - p) return false;
var i=0;
while (i < sn){
if (p$1.charAt$I.apply(this, [p++]) != s.charAt$I(i)) {
break;
}++i;
}
return (i == sn);
}, p$1);

Clazz.newMeth(C$, 'scan$I$I$C',  function (start, end, c) {
if ((start < end) && (p$1.charAt$I.apply(this, [start]) == c) ) return start + 1;
return start;
}, p$1);

Clazz.newMeth(C$, 'scan$I$I$S$S',  function (start, end, err, stop) {
var p=start;
while (p < end){
var c=p$1.charAt$I.apply(this, [p]);
if (err.indexOf$I(c) >= 0) return -1;
if (stop.indexOf$I(c) >= 0) break;
++p;
}
return p;
}, p$1);

Clazz.newMeth(C$, 'scanEscape$I$I$C',  function (start, n, first) {
var p=start;
var c=first;
if (c == "%") {
if ((p + 3 <= n) && $I$(1,"match$C$J$J",[p$1.charAt$I.apply(this, [p + 1]), $I$(1).L_HEX, $I$(1).H_HEX]) && $I$(1,"match$C$J$J",[p$1.charAt$I.apply(this, [p + 2]), $I$(1).L_HEX, $I$(1).H_HEX])  ) {
return p + 3;
}p$1.fail$S$I.apply(this, ["Malformed escape pair", p]);
} else if ((c.$c() > 128 ) && !Character.isSpaceChar$C(c) && !Character.isISOControl$C(c)  ) {
return p + 1;
}return p;
}, p$1);

Clazz.newMeth(C$, 'scan$I$I$J$J',  function (start, n, lowMask, highMask) {
var p=start;
while (p < n){
var c=p$1.charAt$I.apply(this, [p]);
if ($I$(1).match$C$J$J(c, lowMask, highMask)) {
++p;
continue;
}if (Long.$ne((Long.$and(lowMask,1)),0 )) {
var q=p$1.scanEscape$I$I$C.apply(this, [p, n, c]);
if (q > p) {
p=q;
continue;
}}break;
}
return p;
}, p$1);

Clazz.newMeth(C$, 'checkChars$I$I$J$J$S',  function (start, end, lowMask, highMask, what) {
var p=p$1.scan$I$I$J$J.apply(this, [start, end, lowMask, highMask]);
if (p < end) p$1.fail$S$I.apply(this, ["Illegal character in " + what, p]);
}, p$1);

Clazz.newMeth(C$, 'checkChar$I$J$J$S',  function (p, lowMask, highMask, what) {
p$1.checkChars$I$I$J$J$S.apply(this, [p, p + 1, lowMask, highMask, what]);
}, p$1);

Clazz.newMeth(C$, 'parse$Z',  function (rsa) {
this.requireServerAuthority=rsa;
var ssp;
var n=this.input.length$();
var p=p$1.scan$I$I$S$S.apply(this, [0, n, "/?#", ":"]);
if ((p >= 0) && p$1.at$I$I$C.apply(this, [p, n, ":"]) ) {
if (p == 0) p$1.failExpecting$S$I.apply(this, ["scheme name", 0]);
p$1.checkChar$I$J$J$S.apply(this, [0, 0, $I$(1).H_ALPHA, "scheme name"]);
p$1.checkChars$I$I$J$J$S.apply(this, [1, p, $I$(1).L_SCHEME, $I$(1).H_SCHEME, "scheme name"]);
this.b$['java.net.URI'].scheme=p$1.substring$I$I.apply(this, [0, p]);
++p;
ssp=p;
if (p$1.at$I$I$C.apply(this, [p, n, "/"])) {
p=p$1.parseHierarchical$I$I.apply(this, [p, n]);
} else {
var q=p$1.scan$I$I$S$S.apply(this, [p, n, "", "#"]);
if (q <= p) p$1.failExpecting$S$I.apply(this, ["scheme-specific part", p]);
p$1.checkChars$I$I$J$J$S.apply(this, [p, q, $I$(1).L_URIC, $I$(1).H_URIC, "opaque part"]);
p=q;
}} else {
ssp=0;
p=p$1.parseHierarchical$I$I.apply(this, [0, n]);
}this.b$['java.net.URI'].schemeSpecificPart=p$1.substring$I$I.apply(this, [ssp, p]);
if (p$1.at$I$I$C.apply(this, [p, n, "#"])) {
p$1.checkChars$I$I$J$J$S.apply(this, [p + 1, n, $I$(1).L_URIC, $I$(1).H_URIC, "fragment"]);
this.b$['java.net.URI'].fragment=p$1.substring$I$I.apply(this, [p + 1, n]);
p=n;
}if (p < n) p$1.fail$S$I.apply(this, ["end of URI", p]);
});

Clazz.newMeth(C$, 'parseHierarchical$I$I',  function (start, n) {
var p=start;
if (p$1.at$I$I$C.apply(this, [p, n, "/"]) && p$1.at$I$I$C.apply(this, [p + 1, n, "/"]) ) {
p+=2;
var q=p$1.scan$I$I$S$S.apply(this, [p, n, "", "/?#"]);
if (q > p) {
p=p$1.parseAuthority$I$I.apply(this, [p, q]);
} else if (q < n) {
} else p$1.failExpecting$S$I.apply(this, ["authority", p]);
}var q=p$1.scan$I$I$S$S.apply(this, [p, n, "", "?#"]);
p$1.checkChars$I$I$J$J$S.apply(this, [p, q, $I$(1).L_PATH, $I$(1).H_PATH, "path"]);
this.b$['java.net.URI'].path=p$1.substring$I$I.apply(this, [p, q]);
p=q;
if (p$1.at$I$I$C.apply(this, [p, n, "?"])) {
++p;
q=p$1.scan$I$I$S$S.apply(this, [p, n, "", "#"]);
p$1.checkChars$I$I$J$J$S.apply(this, [p, q, $I$(1).L_URIC, $I$(1).H_URIC, "query"]);
this.b$['java.net.URI'].query=p$1.substring$I$I.apply(this, [p, q]);
p=q;
}return p;
}, p$1);

Clazz.newMeth(C$, 'parseAuthority$I$I',  function (start, n) {
var p=start;
var q=p;
var ex=null;
var serverChars;
var regChars;
if (p$1.scan$I$I$S$S.apply(this, [p, n, "", "]"]) > p) {
serverChars=(p$1.scan$I$I$J$J.apply(this, [p, n, $I$(1).L_SERVER_PERCENT, $I$(1).H_SERVER_PERCENT]) == n);
} else {
serverChars=(p$1.scan$I$I$J$J.apply(this, [p, n, $I$(1).L_SERVER, $I$(1).H_SERVER]) == n);
}regChars=(p$1.scan$I$I$J$J.apply(this, [p, n, $I$(1).L_REG_NAME, $I$(1).H_REG_NAME]) == n);
if (regChars && !serverChars ) {
this.b$['java.net.URI'].authority=p$1.substring$I$I.apply(this, [p, n]);
return n;
}if (serverChars) {
try {
q=p$1.parseServer$I$I.apply(this, [p, n]);
if (q < n) p$1.failExpecting$S$I.apply(this, ["end of authority", q]);
this.b$['java.net.URI'].authority=p$1.substring$I$I.apply(this, [p, n]);
} catch (x) {
if (Clazz.exceptionOf(x,"java.net.URISyntaxException")){
this.b$['java.net.URI'].userInfo=null;
this.b$['java.net.URI'].host=null;
this.b$['java.net.URI'].port=-1;
if (this.requireServerAuthority) {
throw x;
} else {
ex=x;
q=p;
}} else {
throw x;
}
}
}if (q < n) {
if (regChars) {
this.b$['java.net.URI'].authority=p$1.substring$I$I.apply(this, [p, n]);
} else if (ex != null ) {
throw ex;
} else {
p$1.fail$S$I.apply(this, ["Illegal character in authority", q]);
}}return n;
}, p$1);

Clazz.newMeth(C$, 'parseServer$I$I',  function (start, n) {
var p=start;
var q;
q=p$1.scan$I$I$S$S.apply(this, [p, n, "/?#", "@"]);
if ((q >= p) && p$1.at$I$I$C.apply(this, [q, n, "@"]) ) {
p$1.checkChars$I$I$J$J$S.apply(this, [p, q, $I$(1).L_USERINFO, $I$(1).H_USERINFO, "user info"]);
this.b$['java.net.URI'].userInfo=p$1.substring$I$I.apply(this, [p, q]);
p=q + 1;
}if (p$1.at$I$I$C.apply(this, [p, n, "["])) {
++p;
q=p$1.scan$I$I$S$S.apply(this, [p, n, "/?#", "]"]);
if ((q > p) && p$1.at$I$I$C.apply(this, [q, n, "]"]) ) {
var r=p$1.scan$I$I$S$S.apply(this, [p, q, "", "%"]);
if (r > p) {
p$1.parseIPv6Reference$I$I.apply(this, [p, r]);
if (r + 1 == q) {
p$1.fail$S.apply(this, ["scope id expected"]);
}p$1.checkChars$I$I$J$J$S.apply(this, [r + 1, q, $I$(1).L_ALPHANUM, $I$(1).H_ALPHANUM, "scope id"]);
} else {
p$1.parseIPv6Reference$I$I.apply(this, [p, q]);
}this.b$['java.net.URI'].host=p$1.substring$I$I.apply(this, [p - 1, q + 1]);
p=q + 1;
} else {
p$1.failExpecting$S$I.apply(this, ["closing bracket for IPv6 address", q]);
}} else {
q=p$1.parseIPv4Address$I$I.apply(this, [p, n]);
if (q <= p) q=p$1.parseHostname$I$I.apply(this, [p, n]);
p=q;
}if (p$1.at$I$I$C.apply(this, [p, n, ":"])) {
++p;
q=p$1.scan$I$I$S$S.apply(this, [p, n, "", "/"]);
if (q > p) {
p$1.checkChars$I$I$J$J$S.apply(this, [p, q, $I$(1).L_DIGIT, 0, "port number"]);
try {
this.b$['java.net.URI'].port=Integer.parseInt$S(p$1.substring$I$I.apply(this, [p, q]));
} catch (x) {
if (Clazz.exceptionOf(x,"NumberFormatException")){
p$1.fail$S$I.apply(this, ["Malformed port number", p]);
} else {
throw x;
}
}
p=q;
}}if (p < n) p$1.failExpecting$S$I.apply(this, ["port number", p]);
return p;
}, p$1);

Clazz.newMeth(C$, 'scanByte$I$I',  function (start, n) {
var p=start;
var q=p$1.scan$I$I$J$J.apply(this, [p, n, $I$(1).L_DIGIT, 0]);
if (q <= p) return q;
if (Integer.parseInt$S(p$1.substring$I$I.apply(this, [p, q])) > 255) return p;
return q;
}, p$1);

Clazz.newMeth(C$, 'scanIPv4Address$I$I$Z',  function (start, n, strict) {
var p=start;
var q;
var m=p$1.scan$I$I$J$J.apply(this, [p, n, Long.$or($I$(1).L_DIGIT,$I$(1).L_DOT), Long.$or(0,$I$(1).H_DOT)]);
if ((m <= p) || (strict && (m != n) ) ) return -1;
for (; ; ) {
if ((q=p$1.scanByte$I$I.apply(this, [p, m])) <= p) break;
p=q;
if ((q=p$1.scan$I$I$C.apply(this, [p, m, "."])) <= p) break;
p=q;
if ((q=p$1.scanByte$I$I.apply(this, [p, m])) <= p) break;
p=q;
if ((q=p$1.scan$I$I$C.apply(this, [p, m, "."])) <= p) break;
p=q;
if ((q=p$1.scanByte$I$I.apply(this, [p, m])) <= p) break;
p=q;
if ((q=p$1.scan$I$I$C.apply(this, [p, m, "."])) <= p) break;
p=q;
if ((q=p$1.scanByte$I$I.apply(this, [p, m])) <= p) break;
p=q;
if (q < m) break;
return q;
}
p$1.fail$S$I.apply(this, ["Malformed IPv4 address", q]);
return -1;
}, p$1);

Clazz.newMeth(C$, 'takeIPv4Address$I$I$S',  function (start, n, expected) {
var p=p$1.scanIPv4Address$I$I$Z.apply(this, [start, n, true]);
if (p <= start) p$1.failExpecting$S$I.apply(this, [expected, start]);
return p;
}, p$1);

Clazz.newMeth(C$, 'parseIPv4Address$I$I',  function (start, n) {
var p;
try {
p=p$1.scanIPv4Address$I$I$Z.apply(this, [start, n, false]);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.net.URISyntaxException")){
var x = e$$;
{
return -1;
}
} else if (Clazz.exceptionOf(e$$,"NumberFormatException")){
var nfe = e$$;
{
return -1;
}
} else {
throw e$$;
}
}
if (p > start && p < n ) {
if (p$1.charAt$I.apply(this, [p]) != ":") {
p=-1;
}}if (p > start) this.b$['java.net.URI'].host=p$1.substring$I$I.apply(this, [start, p]);
return p;
}, p$1);

Clazz.newMeth(C$, 'parseHostname$I$I',  function (start, n) {
var p=start;
var q;
var l=-1;
do {
q=p$1.scan$I$I$J$J.apply(this, [p, n, $I$(1).L_ALPHANUM, $I$(1).H_ALPHANUM]);
if (q <= p) break;
l=p;
if (q > p) {
p=q;
q=p$1.scan$I$I$J$J.apply(this, [p, n, Long.$or($I$(1).L_ALPHANUM,$I$(1).L_DASH), Long.$or($I$(1).H_ALPHANUM,$I$(1).H_DASH)]);
if (q > p) {
if (p$1.charAt$I.apply(this, [q - 1]) == "-") p$1.fail$S$I.apply(this, ["Illegal character in hostname", q - 1]);
p=q;
}}q=p$1.scan$I$I$C.apply(this, [p, n, "."]);
if (q <= p) break;
p=q;
} while (p < n);
if ((p < n) && !p$1.at$I$I$C.apply(this, [p, n, ":"]) ) p$1.fail$S$I.apply(this, ["Illegal character in hostname", p]);
if (l < 0) p$1.failExpecting$S$I.apply(this, ["hostname", start]);
if (l > start && !$I$(1,"match$C$J$J",[p$1.charAt$I.apply(this, [l]), 0, $I$(1).H_ALPHA]) ) {
p$1.fail$S$I.apply(this, ["Illegal character in hostname", l]);
}this.b$['java.net.URI'].host=p$1.substring$I$I.apply(this, [start, p]);
return p;
}, p$1);

Clazz.newMeth(C$, 'parseIPv6Reference$I$I',  function (start, n) {
var p=start;
var q;
var compressedZeros=false;
q=p$1.scanHexSeq$I$I.apply(this, [p, n]);
if (q > p) {
p=q;
if (p$1.at$I$I$S.apply(this, [p, n, "::"])) {
compressedZeros=true;
p=p$1.scanHexPost$I$I.apply(this, [p + 2, n]);
} else if (p$1.at$I$I$C.apply(this, [p, n, ":"])) {
p=p$1.takeIPv4Address$I$I$S.apply(this, [p + 1, n, "IPv4 address"]);
this.ipv6byteCount+=4;
}} else if (p$1.at$I$I$S.apply(this, [p, n, "::"])) {
compressedZeros=true;
p=p$1.scanHexPost$I$I.apply(this, [p + 2, n]);
}if (p < n) p$1.fail$S$I.apply(this, ["Malformed IPv6 address", start]);
if (this.ipv6byteCount > 16) p$1.fail$S$I.apply(this, ["IPv6 address too long", start]);
if (!compressedZeros && this.ipv6byteCount < 16 ) p$1.fail$S$I.apply(this, ["IPv6 address too short", start]);
if (compressedZeros && this.ipv6byteCount == 16 ) p$1.fail$S$I.apply(this, ["Malformed IPv6 address", start]);
return p;
}, p$1);

Clazz.newMeth(C$, 'scanHexPost$I$I',  function (start, n) {
var p=start;
var q;
if (p == n) return p;
q=p$1.scanHexSeq$I$I.apply(this, [p, n]);
if (q > p) {
p=q;
if (p$1.at$I$I$C.apply(this, [p, n, ":"])) {
++p;
p=p$1.takeIPv4Address$I$I$S.apply(this, [p, n, "hex digits or IPv4 address"]);
this.ipv6byteCount+=4;
}} else {
p=p$1.takeIPv4Address$I$I$S.apply(this, [p, n, "hex digits or IPv4 address"]);
this.ipv6byteCount+=4;
}return p;
}, p$1);

Clazz.newMeth(C$, 'scanHexSeq$I$I',  function (start, n) {
var p=start;
var q;
q=p$1.scan$I$I$J$J.apply(this, [p, n, $I$(1).L_HEX, $I$(1).H_HEX]);
if (q <= p) return -1;
if (p$1.at$I$I$C.apply(this, [q, n, "."])) return -1;
if (q > p + 4) p$1.fail$S$I.apply(this, ["IPv6 hexadecimal digit sequence too long", p]);
this.ipv6byteCount+=2;
p=q;
while (p < n){
if (!p$1.at$I$I$C.apply(this, [p, n, ":"])) break;
if (p$1.at$I$I$C.apply(this, [p + 1, n, ":"])) break;
++p;
q=p$1.scan$I$I$J$J.apply(this, [p, n, $I$(1).L_HEX, $I$(1).H_HEX]);
if (q <= p) p$1.failExpecting$S$I.apply(this, ["digits for an IPv6 address", p]);
if (p$1.at$I$I$C.apply(this, [q, n, "."])) {
--p;
break;
}if (q > p + 4) p$1.fail$S$I.apply(this, ["IPv6 hexadecimal digit sequence too long", p]);
this.ipv6byteCount+=2;
p=q;
}
return p;
}, p$1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:19 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
