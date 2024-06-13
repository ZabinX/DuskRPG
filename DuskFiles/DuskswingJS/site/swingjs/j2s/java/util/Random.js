(function(){var P$=java.util,I$=[];
/*c*/var C$=Clazz.newClass(P$, "Random", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.haveNextNextGaussian=false;
this.nextNextGaussian=0;
},1);

C$.$fields$=[['Z',['haveNextNextGaussian'],'D',['nextNextGaussian'],'J',['seed']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.setSeed$J(System.currentTimeMillis$());
}, 1);

Clazz.newMeth(C$, 'c$$J',  function (seed) {
;C$.$init$.apply(this);
this.setSeed$J(seed);
}, 1);

Clazz.newMeth(C$, 'next$I',  function (bits) {
this.seed=Long.$and((Long.$add(Long.$mul(this.seed,25214903917),11)),(281474976710655));
return Long.$ival((Long.$usr(this.seed,(48 - bits))));
});

Clazz.newMeth(C$, 'nextBoolean$',  function () {
{
return Math.random () > 0.5;
}
});

Clazz.newMeth(C$, 'nextBytes$BA',  function (buf) {
{
var rand=0;
var count=0;
var loop=0;
while (count < buf.length){
if (loop == 0) {
rand=this.nextInt$();
loop=3;
} else {
--loop;
}buf[count++]=(rand|0);
rand>>=8;
}
}});

Clazz.newMeth(C$, 'nextDouble$',  function () {
{
return Math.random ();
}
});

Clazz.newMeth(C$, 'nextFloat$',  function () {
{
return Math.random ();
}
});

Clazz.newMeth(C$, 'nextGaussian$',  function () {
if (this.haveNextNextGaussian) {
this.haveNextNextGaussian=false;
return this.nextNextGaussian;
}var v1;
var v2;
var s;
do {
v1=2 * this.nextDouble$() - 1;
v2=2 * this.nextDouble$() - 1;
s=v1 * v1 + v2 * v2;
} while (s >= 1 );
var norm=Math.sqrt(-2 * Math.log(s) / s);
this.nextNextGaussian=v2 * norm;
this.haveNextNextGaussian=true;
return v1 * norm;
});

Clazz.newMeth(C$, 'nextInt$',  function () {
{
return Math.random()*0x100000000 | 0;
}
});

Clazz.newMeth(C$, 'nextInt$I',  function (n) {
if (n > 0) {
{
return Math.random() * n|0
}
}throw Clazz.new_(Clazz.load('IllegalArgumentException'));
});

Clazz.newMeth(C$, 'nextLong$',  function () {
return Long.$add((Long.$sl(this.next$I(32),32)),this.next$I(32));
});

Clazz.newMeth(C$, 'setSeed$J',  function (seed) {

Math.seedrandom(seed);
});

C$.$static$=function(){C$.$static$=0;
{

(function (pool, math, width, chunks, significance, overflow, startdenom) { var copyright = "Copyright 2010 David Bau, all rights reserved. (BSD)" //
// seedrandom()
// This is the seedrandom function described above.
//
math['seedrandom'] = function seedrandom(seed, use_entropy) { var key = [];
var arc4;
// Flatten the seed string or build one from local entropy if needed.
seed = mixkey(flatten( use_entropy ? [seed, pool] : arguments.length ? seed : [new Date().getTime(), pool, window], 3), key);
// Use the seed to initialize an ARC4 generator.
arc4 = new ARC4(key);
// Mix the randomness into accumulated entropy.
mixkey(arc4.S, pool);
// Override Math.random
// This function returns a random double in [0, 1) that contains
// randomness in every bit of the mantissa of the IEEE 754 value.
math['random'] = function random() {  // Closure to return a random double:
var n = arc4.g(chunks);             // Start with a numerator n < 2 ^ 48
var d = startdenom;                 //   and denominator d = 2 ^ 48.
var x = 0;                          //   and no 'extra last byte'.
while (n < significance) {          // Fill up all significant digits by
n = (n + x) * width;              //   shifting numerator and
d *= width;                       //   denominator and generating a
x = arc4.g(1);                    //   new least-significant-byte.
} while (n >= overflow) {             // To avoid rounding up, before adding
n /= 2;                           //   last byte, shift everything
d /= 2;                           //   right using integer math until
x >>>= 1;                         //   we have exactly the desired bits.
} return (n + x) / d;                 // Form the number within [0, 1).
};
// Return the seed that was used
return seed;
};
//
// ARC4
//
// An ARC4 implementation.  The constructor takes a key in the form of
// an array of at most (width) integers that should be 0 <= x < (width).
//
// The g(count) method returns a pseudorandom integer that concatenates
// the next (count) outputs from ARC4.  Its return value is a number x
// that is in the range 0 <= x < (width ^ count).
//
function ARC4(key) { var t, u, me = this, keylen = key.length;
var i = 0, j = me.i = me.j = me.m = 0;
me.S = [];
me.c = [];
// The empty key [] is treated as [0].
if (!keylen) { key = [keylen++]; } // Set up S using the standard key scheduling algorithm.
while (i < width) { me.S[i] = i++; } for (i = 0; i < width; i++) { t = me.S[i];
j = lowbits(j + t + key[i % keylen]);
u = me.S[j];
me.S[i] = u;
me.S[j] = t;
} // The "g" method returns the next (count) outputs as one number.
me.g = function getnext(count) { var s = me.S;
var i = lowbits(me.i + 1); var t = s[i];
var j = lowbits(me.j + t); var u = s[j];
s[i] = u;
s[j] = t;
var r = s[lowbits(t + u)];
while (--count) { i = lowbits(i + 1); t = s[i];
j = lowbits(j + t); u = s[j];
s[i] = u;
s[j] = t;
r = r * width + s[lowbits(t + u)];
} me.i = i;
me.j = j;
return r;
};
// For robust unpredictability discard an initial batch of values.
// See http://www.rsa.com/rsalabs/node.asp?id=2009
me.g(width);
} //
// flatten()
// Converts an object tree to nested arrays of strings.
//
function flatten(obj, depth, result, prop) { result = [];
if (depth && typeof(obj) == 'object') { for (prop in obj) { if (prop.indexOf('S') < 5) {    // Avoid FF3 bug (local/sessionStorage)
try { result.push(flatten(obj[prop], depth - 1)); } catch (e) {} } } } return result.length ? result : '' + obj;
} //
// mixkey()
// Mixes a string seed into a key that is an array of integers, and
// returns a shortened string seed that is equivalent to the result key.
//
function mixkey(seed, key, smear, j) { seed += '';                         // Ensure the seed is a string
smear = 0;
for (j = 0; j < seed.length; j++) { key[lowbits(j)] = lowbits((smear ^= key[lowbits(j)] * 19) + seed.charCodeAt(j));
} seed = '';
for (j in key) { seed += String.fromCharCode(key[j]); } return seed;
} //
// lowbits()
// A quick "n mod width" for width a power of 2.
//
function lowbits(n) { return n & (width - 1); } //
// The following constants are related to IEEE 754 limits.
//
startdenom = math.pow(width, chunks);
significance = math.pow(2, significance);
overflow = significance * 2;
//
// When seedrandom.js is loaded, we immediately mix a few bits
// from the built-in RNG into the entropy pool.  Because we do
// not want to intefere with determinstic PRNG state later,
// seedrandom will not call math.random on its own again after
// initialization.
//
mixkey(math.random(), pool);
// End anonymous scope, and pass initial values.
})( [],   // pool: entropy pool starts empty
Math, // math: package containing random, pow, and seedrandom
256,  // width: each RC4 output is 0 <= x < 256
6,    // chunks: at least six RC4 outputs for each double
52    // significance: there are 52 significant digits in a double
);
};
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:34 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
