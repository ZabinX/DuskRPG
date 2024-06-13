(function(){var P$=Clazz.newPackage("java.util.logging"),p$1={},I$=[[0,'java.util.HashSet','java.io.FileOutputStream','java.io.BufferedOutputStream',['java.util.logging.FileHandler','.MeteredStream'],'java.util.logging.LogManager','java.util.logging.Level','java.util.logging.XMLFormatter','java.nio.file.Files',['java.util.logging.FileHandler','.InitializationErrorManager'],'java.nio.file.Paths','java.nio.channels.FileChannel','java.nio.file.OpenOption','java.nio.file.StandardOpenOption','java.nio.file.LinkOption','java.io.File','java.util.logging.ErrorManager','java.security.AccessController']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FileHandler", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.logging.StreamHandler');
C$.$classes$=[['MeteredStream',2],['InitializationErrorManager',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['append'],'I',['limit','count'],'S',['pattern','lockFileName'],'O',['meter','java.util.logging.FileHandler.MeteredStream','lockFileChannel','java.nio.channels.FileChannel','files','java.io.File[]']]
,['O',['locks','java.util.Set']]]

Clazz.newMeth(C$, 'open$java_io_File$Z',  function (fname, append) {
var len=0;
if (append) {
len=Long.$ival(fname.length$());
}var fout=Clazz.new_([fname.toString(), append],$I$(2,1).c$$S$Z);
var bout=Clazz.new_($I$(3,1).c$$java_io_OutputStream,[fout]);
this.meter=Clazz.new_($I$(4,1).c$$java_io_OutputStream$I,[this, null, bout, len]);
this.setOutputStream$java_io_OutputStream(this.meter);
}, p$1);

Clazz.newMeth(C$, 'configure',  function () {
var manager=$I$(5).getLogManager$();
var cname=this.getClass$().getName$();
this.pattern=manager.getStringProperty$S$S(cname + ".pattern", "%h/java%u.log");
this.limit=manager.getIntProperty$S$I(cname + ".limit", 0);
if (this.limit < 0) {
this.limit=0;
}this.count=manager.getIntProperty$S$I(cname + ".count", 1);
if (this.count <= 0) {
this.count=1;
}this.append=manager.getBooleanProperty$S$Z(cname + ".append", false);
this.setLevel$java_util_logging_Level(manager.getLevelProperty$S$java_util_logging_Level(cname + ".level", $I$(6).ALL));
this.setFilter$java_util_logging_Filter(manager.getFilterProperty$S$java_util_logging_Filter(cname + ".filter", null));
this.setFormatter$java_util_logging_Formatter(manager.getFormatterProperty$S$java_util_logging_Formatter(cname + ".formatter", Clazz.new_($I$(7,1))));
try {
this.setEncoding$S(manager.getStringProperty$S$S(cname + ".encoding", null));
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
try {
this.setEncoding$S(null);
} catch (ex2) {
if (Clazz.exceptionOf(ex2,"Exception")){
} else {
throw ex2;
}
}
} else {
throw ex;
}
}
}, p$1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.checkPermission$();
p$1.configure.apply(this, []);
p$1.openFiles.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (pattern) {
Clazz.super_(C$, this);
if (pattern.length$() < 1) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}this.checkPermission$();
p$1.configure.apply(this, []);
this.pattern=pattern;
this.limit=0;
this.count=1;
p$1.openFiles.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$$S$Z',  function (pattern, append) {
Clazz.super_(C$, this);
if (pattern.length$() < 1) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}this.checkPermission$();
p$1.configure.apply(this, []);
this.pattern=pattern;
this.limit=0;
this.count=1;
this.append=append;
p$1.openFiles.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$$S$I$I',  function (pattern, limit, count) {
Clazz.super_(C$, this);
if (limit < 0 || count < 1  || pattern.length$() < 1 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}this.checkPermission$();
p$1.configure.apply(this, []);
this.pattern=pattern;
this.limit=limit;
this.count=count;
p$1.openFiles.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$$S$I$I$Z',  function (pattern, limit, count, append) {
Clazz.super_(C$, this);
if (limit < 0 || count < 1  || pattern.length$() < 1 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}this.checkPermission$();
p$1.configure.apply(this, []);
this.pattern=pattern;
this.limit=limit;
this.count=count;
this.append=append;
p$1.openFiles.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'isParentWritable$java_nio_file_Path',  function (path) {
var parent=path.getParent$();
if (parent == null ) {
parent=path.toAbsolutePath$().getParent$();
}return parent != null  && $I$(8).isWritable$java_nio_file_Path(parent) ;
}, p$1);

Clazz.newMeth(C$, 'openFiles',  function () {
var manager=$I$(5).getLogManager$();
manager.checkPermission$();
if (this.count < 1) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["file count = " + this.count]);
}if (this.limit < 0) {
this.limit=0;
}var em=Clazz.new_($I$(9,1));
this.setErrorManager$java_util_logging_ErrorManager(em);
var unique=-1;
for (; ; ) {
++unique;
if (unique > 100) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Couldn't get lock for " + this.pattern]);
}this.lockFileName=p$1.generate$S$I$I.apply(this, [this.pattern, 0, unique]).toString() + ".lck";
{
if (C$.locks.contains$O(this.lockFileName)) {
continue;
}var lockFilePath=$I$(10,"get$S$SA",[this.lockFileName, Clazz.array(String, -1, [])]);
var channel=null;
var retries=-1;
var fileCreated=false;
while (channel == null  && retries++ < 1 ){
try {
channel=$I$(11,"open$java_nio_file_Path$java_nio_file_OpenOptionA",[lockFilePath, Clazz.array($I$(12), -1, [$I$(13).CREATE_NEW, $I$(13).WRITE])]);
fileCreated=true;
} catch (ix) {
if (Clazz.exceptionOf(ix,"java.nio.file.FileAlreadyExistsException")){
if ($I$(8,"isRegularFile$java_nio_file_Path$java_nio_file_LinkOptionA",[lockFilePath, Clazz.array($I$(14), -1, [$I$(14).NOFOLLOW_LINKS])]) && p$1.isParentWritable$java_nio_file_Path.apply(this, [lockFilePath]) ) {
try {
channel=$I$(11,"open$java_nio_file_Path$java_nio_file_OpenOptionA",[lockFilePath, Clazz.array($I$(12), -1, [$I$(13).WRITE, $I$(13).APPEND])]);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.nio.file.NoSuchFileException")){
var x = e$$;
{
continue;
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var x = e$$;
{
break;
}
} else {
throw e$$;
}
}
} else {
break;
}} else {
throw ix;
}
}
}
if (channel == null ) continue;
this.lockFileChannel=channel;
var available;
try {
available=this.lockFileChannel.tryLock$() != null ;
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var ix = e$$;
{
available=fileCreated;
}
} else if (Clazz.exceptionOf(e$$,"java.nio.channels.OverlappingFileLockException")){
var x = e$$;
{
available=false;
}
} else {
throw e$$;
}
}
if (available) {
C$.locks.add$O(this.lockFileName);
break;
}this.lockFileChannel.close$();
}}
this.files=Clazz.array($I$(15), [this.count]);
for (var i=0; i < this.count; i++) {
this.files[i]=p$1.generate$S$I$I.apply(this, [this.pattern, i, unique]);
}
if (this.append) {
p$1.open$java_io_File$Z.apply(this, [this.files[0], true]);
} else {
p$1.rotate.apply(this, []);
}var ex=em.lastException;
if (ex != null ) {
if (Clazz.instanceOf(ex, "java.io.IOException")) {
throw ex;
} else if (Clazz.instanceOf(ex, "java.lang.SecurityException")) {
throw ex;
} else {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Exception: " + ex]);
}}this.setErrorManager$java_util_logging_ErrorManager(Clazz.new_($I$(16,1)));
}, p$1);

Clazz.newMeth(C$, 'generate$S$I$I',  function (pattern, generation, unique) {
var file=null;
var word="";
var ix=0;
var sawg=false;
var sawu=false;
while (ix < pattern.length$()){
var ch=pattern.charAt$I(ix);
++ix;
var ch2=String.fromCharCode(0);
if (ix < pattern.length$()) {
ch2=Character.toLowerCase$C(pattern.charAt$I(ix));
}if (ch == "/") {
if (file == null ) {
file=Clazz.new_($I$(15,1).c$$S,[word]);
} else {
file=Clazz.new_($I$(15,1).c$$java_io_File$S,[file, word]);
}word="";
continue;
} else if (ch == "%") {
if (ch2 == "t") {
var tmpDir=System.getProperty$S("java.io.tmpdir");
if (tmpDir == null ) {
tmpDir=System.getProperty$S("user.home");
}file=Clazz.new_($I$(15,1).c$$S,[tmpDir]);
++ix;
word="";
continue;
} else if (ch2 == "h") {
file=Clazz.new_([System.getProperty$S("user.home")],$I$(15,1).c$$S);
if (C$.isSetUID$()) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["can\'t use %h in set UID program"]);
}++ix;
word="";
continue;
} else if (ch2 == "g") {
word=word + generation;
sawg=true;
++ix;
continue;
} else if (ch2 == "u") {
word=word + unique;
sawu=true;
++ix;
continue;
} else if (ch2 == "%") {
word=word + "%";
++ix;
continue;
}}word=word + ch;
}
if (this.count > 1 && !sawg ) {
word=word + "." + generation ;
}if (unique > 0 && !sawu ) {
word=word + "." + unique ;
}if (word.length$() > 0) {
if (file == null ) {
file=Clazz.new_($I$(15,1).c$$S,[word]);
} else {
file=Clazz.new_($I$(15,1).c$$java_io_File$S,[file, word]);
}}return file;
}, p$1);

Clazz.newMeth(C$, 'rotate',  function () {
var oldLevel=this.getLevel$();
this.setLevel$java_util_logging_Level($I$(6).OFF);
C$.superclazz.prototype.close$.apply(this, []);
for (var i=this.count - 2; i >= 0; i--) {
var f1=this.files[i];
var f2=this.files[i + 1];
if (f1.exists$()) {
if (f2.exists$()) {
f2.delete$();
}f1.renameTo$java_io_File(f2);
}}
try {
p$1.open$java_io_File$Z.apply(this, [this.files[0], false]);
} catch (ix) {
if (Clazz.exceptionOf(ix,"java.io.IOException")){
this.reportError$S$Exception$I(null, ix, 4);
} else {
throw ix;
}
}
this.setLevel$java_util_logging_Level(oldLevel);
}, p$1);

Clazz.newMeth(C$, 'publish$java_util_logging_LogRecord',  function (record) {
if (!this.isLoggable$java_util_logging_LogRecord(record)) {
return;
}C$.superclazz.prototype.publish$java_util_logging_LogRecord.apply(this, [record]);
this.flush$();
if (this.limit > 0 && this.meter.written >= this.limit ) {
$I$(17,"doPrivileged$java_security_PrivilegedAction",[((P$.FileHandler$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "FileHandler$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
p$1.rotate.apply(this.b$['java.util.logging.FileHandler'], []);
return null;
});
})()
), Clazz.new_(P$.FileHandler$1.$init$,[this, null]))]);
}});

Clazz.newMeth(C$, 'close$',  function () {
C$.superclazz.prototype.close$.apply(this, []);
if (this.lockFileName == null ) {
return;
}try {
this.lockFileChannel.close$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
{
C$.locks.remove$O(this.lockFileName);
}Clazz.new_($I$(15,1).c$$S,[this.lockFileName]).delete$();
this.lockFileName=null;
this.lockFileChannel=null;
});

Clazz.newMeth(C$, 'isSetUID$',  function () {
alert('native method must be replaced! isSetUID');
}
, 2);

C$.$static$=function(){C$.$static$=0;
C$.locks=Clazz.new_($I$(1,1));
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.FileHandler, "MeteredStream", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.io.OutputStream');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['written'],'O',['out','java.io.OutputStream']]]

Clazz.newMeth(C$, 'c$$java_io_OutputStream$I',  function (out, written) {
Clazz.super_(C$, this);
this.out=out;
this.written=written;
}, 1);

Clazz.newMeth(C$, 'write$I',  function (b) {
this.out.write$I(b);
++this.written;
});

Clazz.newMeth(C$, 'write$BA',  function (buff) {
this.out.write$BA(buff);
this.written+=buff.length;
});

Clazz.newMeth(C$, 'write$BA$I$I',  function (buff, off, len) {
this.out.write$BA$I$I(buff, off, len);
this.written+=len;
});

Clazz.newMeth(C$, 'flush$',  function () {
this.out.flush$();
});

Clazz.newMeth(C$, 'close$',  function () {
this.out.close$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.FileHandler, "InitializationErrorManager", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.logging.ErrorManager');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['lastException','Exception']]]

Clazz.newMeth(C$, 'error$S$Exception$I',  function (msg, ex, code) {
this.lastException=ex;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:39 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
