(function(){var P$=java.util,I$=[[0,'java.util.Objects']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "Iterator");
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'remove$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["remove"]);
});

Clazz.newMeth(C$, 'forEachRemaining$java_util_function_Consumer',  function (action) {
$I$(1).requireNonNull$O(action);
while (this.hasNext$())action.accept$O(this.next$());

});
};})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:33 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
