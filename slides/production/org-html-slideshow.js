function e(a) {
  throw a;
}
var g = void 0, k = !0, l = null, m = !1;
function aa() {
  return function(a) {
    return a
  }
}
function n(a) {
  return function() {
    return this[a]
  }
}
function p(a) {
  return function() {
    return a
  }
}
var q, ba = this;
function ca(a) {
  for(var a = a.split("."), b = ba, c;c = a.shift();) {
    if(b[c] != l) {
      b = b[c]
    }else {
      return l
    }
  }
  return b
}
function da() {
}
function r(a) {
  var b = typeof a;
  if("object" == b) {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }
      if(a instanceof Object) {
        return b
      }
      var c = Object.prototype.toString.call(a);
      if("[object Window]" == c) {
        return"object"
      }
      if("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == b && "undefined" == typeof a.call) {
      return"object"
    }
  }
  return b
}
function ea(a) {
  return a !== g
}
function fa(a) {
  return"array" == r(a)
}
function ga(a) {
  var b = r(a);
  return"array" == b || "object" == b && "number" == typeof a.length
}
function ha(a) {
  return"string" == typeof a
}
function ia(a) {
  return"function" == r(a)
}
function ka(a) {
  a = r(a);
  return"object" == a || "array" == a || "function" == a
}
function la(a) {
  return a[ma] || (a[ma] = ++na)
}
var ma = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36), na = 0;
function pa(a, b, c) {
  return a.call.apply(a.bind, arguments)
}
function qa(a, b, c) {
  var d = b || ba;
  if(2 < arguments.length) {
    var f = Array.prototype.slice.call(arguments, 2);
    return function() {
      var b = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(b, f);
      return a.apply(d, b)
    }
  }
  return function() {
    return a.apply(d, arguments)
  }
}
function ra(a, b, c) {
  ra = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? pa : qa;
  return ra.apply(l, arguments)
}
function sa(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = Array.prototype.slice.call(arguments);
    b.unshift.apply(b, c);
    return a.apply(this, b)
  }
}
var ta = Date.now || function() {
  return+new Date
};
function va(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.Ca = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a
}
;function wa(a) {
  this.stack = Error().stack || "";
  a && (this.message = "" + a)
}
va(wa, Error);
wa.prototype.name = "CustomError";
function xa(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = ("" + arguments[c]).replace(/\$/g, "$$$$"), a = a.replace(/\%s/, d)
  }
  return a
}
var ya = /(\.\d+)|(\d+)|(\D+)/g;
function za(a, b) {
  if(a == b) {
    return 0
  }
  if(!a) {
    return-1
  }
  if(!b) {
    return 1
  }
  for(var c = a.toLowerCase().match(ya), d = b.toLowerCase().match(ya), f = Math.min(c.length, d.length), h = 0;h < f;h++) {
    var i = c[h], j = d[h];
    if(i != j) {
      return c = parseInt(i, 10), !isNaN(c) && (d = parseInt(j, 10), !isNaN(d) && c - d) ? c - d : i < j ? -1 : 1
    }
  }
  return c.length != d.length ? c.length - d.length : a < b ? -1 : 1
}
var Aa = /^[a-zA-Z0-9\-_.!~*'()]*$/;
function Ba(a) {
  a = "" + a;
  return!Aa.test(a) ? encodeURIComponent(a) : a
}
function Ca(a) {
  return decodeURIComponent(a.replace(/\+/g, " "))
}
function Da(a) {
  if(!Ea.test(a)) {
    return a
  }
  -1 != a.indexOf("&") && (a = a.replace(Fa, "&amp;"));
  -1 != a.indexOf("<") && (a = a.replace(Ga, "&lt;"));
  -1 != a.indexOf(">") && (a = a.replace(Ha, "&gt;"));
  -1 != a.indexOf('"') && (a = a.replace(Ia, "&quot;"));
  return a
}
var Fa = /&/g, Ga = /</g, Ha = />/g, Ia = /\"/g, Ea = /[&<>\"]/, Ja = {"\x00":"\\0", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\x0B", '"':'\\"', "\\":"\\\\"}, Ka = {"'":"\\'"};
function La(a) {
  a = "" + a;
  if(a.quote) {
    return a.quote()
  }
  for(var b = ['"'], c = 0;c < a.length;c++) {
    var d = a.charAt(c), f = d.charCodeAt(0), h = b, i = c + 1, j;
    if(!(j = Ja[d])) {
      if(!(31 < f && 127 > f)) {
        if(d in Ka) {
          d = Ka[d]
        }else {
          if(d in Ja) {
            d = Ka[d] = Ja[d]
          }else {
            f = d;
            j = d.charCodeAt(0);
            if(31 < j && 127 > j) {
              f = d
            }else {
              if(256 > j) {
                if(f = "\\x", 16 > j || 256 < j) {
                  f += "0"
                }
              }else {
                f = "\\u", 4096 > j && (f += "0")
              }
              f += j.toString(16).toUpperCase()
            }
            d = Ka[d] = f
          }
        }
      }
      j = d
    }
    h[i] = j
  }
  b.push('"');
  return b.join("")
}
function Na(a, b) {
  for(var c = 0, d = ("" + a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = ("" + b).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), h = Math.max(d.length, f.length), i = 0;0 == c && i < h;i++) {
    var j = d[i] || "", o = f[i] || "", s = RegExp("(\\d*)(\\D*)", "g"), x = RegExp("(\\d*)(\\D*)", "g");
    do {
      var u = s.exec(j) || ["", "", ""], y = x.exec(o) || ["", "", ""];
      if(0 == u[0].length && 0 == y[0].length) {
        break
      }
      c = ((0 == u[1].length ? 0 : parseInt(u[1], 10)) < (0 == y[1].length ? 0 : parseInt(y[1], 10)) ? -1 : (0 == u[1].length ? 0 : parseInt(u[1], 10)) > (0 == y[1].length ? 0 : parseInt(y[1], 10)) ? 1 : 0) || ((0 == u[2].length) < (0 == y[2].length) ? -1 : (0 == u[2].length) > (0 == y[2].length) ? 1 : 0) || (u[2] < y[2] ? -1 : u[2] > y[2] ? 1 : 0)
    }while(0 == c)
  }
  return c
}
function Oa(a) {
  for(var b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296
  }
  return b
}
var Pa = {};
function Qa(a) {
  return Pa[a] || (Pa[a] = ("" + a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase()
  }))
}
;function Ra(a, b) {
  b.unshift(a);
  wa.call(this, xa.apply(l, b));
  b.shift()
}
va(Ra, wa);
Ra.prototype.name = "AssertionError";
function Sa(a, b) {
  e(new Ra("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
}
;var Ta = Array.prototype, Ua = Ta.indexOf ? function(a, b, c) {
  return Ta.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = c == l ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if(ha(a)) {
    return!ha(b) || 1 != b.length ? -1 : a.indexOf(b, c)
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
}, Va = Ta.forEach ? function(a, b, c) {
  Ta.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = ha(a) ? a.split("") : a, h = 0;h < d;h++) {
    h in f && b.call(c, f[h], h, a)
  }
};
function Wa(a) {
  return Ta.concat.apply(Ta, arguments)
}
function Xa(a) {
  if(fa(a)) {
    return Wa(a)
  }
  for(var b = [], c = 0, d = a.length;c < d;c++) {
    b[c] = a[c]
  }
  return b
}
function Ya(a) {
  return fa(a) ? Wa(a) : Xa(a)
}
function Za(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = arguments[c], f;
    if(fa(d) || (f = ga(d)) && d.hasOwnProperty("callee")) {
      a.push.apply(a, d)
    }else {
      if(f) {
        for(var h = a.length, i = d.length, j = 0;j < i;j++) {
          a[h + j] = d[j]
        }
      }else {
        a.push(d)
      }
    }
  }
}
function $a(a, b, c, d) {
  Ta.splice.apply(a, ab(arguments, 1))
}
function ab(a, b, c) {
  return 2 >= arguments.length ? Ta.slice.call(a, b) : Ta.slice.call(a, b, c)
}
;function bb(a) {
  return(a = a.className) && "function" == typeof a.split ? a.split(/\s+/) : []
}
function cb(a, b) {
  var c = bb(a), d = ab(arguments, 1), f;
  f = c;
  for(var h = 0, i = 0;i < d.length;i++) {
    0 <= Ua(f, d[i]) || (f.push(d[i]), h++)
  }
  f = h == d.length;
  a.className = c.join(" ");
  return f
}
function db(a, b) {
  for(var c = bb(a), d = ab(arguments, 1), f = c, h = 0, i = 0;i < f.length;i++) {
    0 <= Ua(d, f[i]) && ($a(f, i--, 1), h++)
  }
  a.className = c.join(" ")
}
;function eb() {
}
eb.prototype.jd = m;
eb.prototype.ib = function() {
  this.jd || (this.jd = k, this.T())
};
eb.prototype.T = function() {
};
var fb, gb, hb, ib;
function jb() {
  return ba.navigator ? ba.navigator.userAgent : l
}
ib = hb = gb = fb = m;
var kb;
if(kb = jb()) {
  var lb = ba.navigator;
  fb = 0 == kb.indexOf("Opera");
  gb = !fb && -1 != kb.indexOf("MSIE");
  hb = !fb && -1 != kb.indexOf("WebKit");
  ib = !fb && !hb && "Gecko" == lb.product
}
var mb = fb, t = gb, nb = ib, ob = hb, pb = ba.navigator, qb = -1 != (pb && pb.platform || "").indexOf("Mac"), sb;
a: {
  var tb = "", ub;
  if(mb && ba.opera) {
    var vb = ba.opera.version, tb = "function" == typeof vb ? vb() : vb
  }else {
    if(nb ? ub = /rv\:([^\);]+)(\)|;)/ : t ? ub = /MSIE\s+([^\);]+)(\)|;)/ : ob && (ub = /WebKit\/(\S+)/), ub) {
      var wb = ub.exec(jb()), tb = wb ? wb[1] : ""
    }
  }
  if(t) {
    var xb, yb = ba.document;
    xb = yb ? yb.documentMode : g;
    if(xb > parseFloat(tb)) {
      sb = "" + xb;
      break a
    }
  }
  sb = tb
}
var zb = {};
function Ab(a) {
  return zb[a] || (zb[a] = 0 <= Na(sb, a))
}
;var Bb;
!t || Ab("9");
var Cb = t && !Ab("8");
function Db(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
va(Db, eb);
q = Db.prototype;
q.T = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
q.Va = m;
q.Mb = k;
q.stopPropagation = function() {
  this.Va = k
};
q.preventDefault = function() {
  this.Mb = m
};
var Eb = {he:"click", me:"dblclick", Ge:"mousedown", Ke:"mouseup", Je:"mouseover", Ie:"mouseout", He:"mousemove", Ve:"selectstart", Be:"keypress", Ae:"keydown", Ce:"keyup", fe:"blur", ue:"focus", ne:"deactivate", ve:t ? "focusin" : "DOMFocusIn", we:t ? "focusout" : "DOMFocusOut", ge:"change", Ue:"select", We:"submit", ze:"input", Qe:"propertychange", re:"dragstart", oe:"dragenter", qe:"dragover", pe:"dragleave", se:"drop", $e:"touchstart", Ze:"touchmove", Ye:"touchend", Xe:"touchcancel", je:"contextmenu", 
te:"error", ye:"help", De:"load", Ee:"losecapture", Re:"readystatechange", Se:"resize", Te:"scroll", af:"unload", xe:"hashchange", Me:"pagehide", Ne:"pageshow", Pe:"popstate", ke:"copy", Oe:"paste", le:"cut", Fe:"message", ie:"connect"};
var Fb = new Function("a", "return a");
function Gb(a, b) {
  a && this.Fb(a, b)
}
va(Gb, Db);
q = Gb.prototype;
q.target = l;
q.relatedTarget = l;
q.offsetX = 0;
q.offsetY = 0;
q.clientX = 0;
q.clientY = 0;
q.screenX = 0;
q.screenY = 0;
q.button = 0;
q.keyCode = 0;
q.charCode = 0;
q.ctrlKey = m;
q.altKey = m;
q.shiftKey = m;
q.metaKey = m;
q.Ga = l;
q.Fb = function(a, b) {
  var c = this.type = a.type;
  Db.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(nb) {
      try {
        Fb(d.nodeName)
      }catch(f) {
        d = l
      }
    }
  }else {
    "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement)
  }
  this.relatedTarget = d;
  this.offsetX = a.offsetX !== g ? a.offsetX : a.layerX;
  this.offsetY = a.offsetY !== g ? a.offsetY : a.layerY;
  this.clientX = a.clientX !== g ? a.clientX : a.pageX;
  this.clientY = a.clientY !== g ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.state = a.state;
  this.Ga = a;
  delete this.Mb;
  delete this.Va
};
q.stopPropagation = function() {
  Gb.Ca.stopPropagation.call(this);
  this.Ga.stopPropagation ? this.Ga.stopPropagation() : this.Ga.cancelBubble = k
};
q.preventDefault = function() {
  Gb.Ca.preventDefault.call(this);
  var a = this.Ga;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = m, Cb) {
      try {
        if(a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
q.T = function() {
  Gb.Ca.T.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.Ga = l
};
function Hb() {
}
var Ib = 0;
q = Hb.prototype;
q.key = 0;
q.tb = m;
q.Xc = m;
q.Fb = function(a, b, c, d, f, h) {
  ia(a) ? this.ld = k : a && a.handleEvent && ia(a.handleEvent) ? this.ld = m : e(Error("Invalid listener argument"));
  this.Kb = a;
  this.sd = b;
  this.src = c;
  this.type = d;
  this.capture = !!f;
  this.Gc = h;
  this.Xc = m;
  this.key = ++Ib;
  this.tb = m
};
q.handleEvent = function(a) {
  return this.ld ? this.Kb.call(this.Gc || this.src, a) : this.Kb.handleEvent.call(this.Kb, a)
};
function Jb(a, b) {
  this.pd = b;
  this.Sa = [];
  a > this.pd && e(Error("[goog.structs.SimplePool] Initial cannot be greater than max"));
  for(var c = 0;c < a;c++) {
    this.Sa.push(this.ua ? this.ua() : {})
  }
}
va(Jb, eb);
Jb.prototype.ua = l;
Jb.prototype.hd = l;
function Kb(a) {
  return a.Sa.length ? a.Sa.pop() : a.ua ? a.ua() : {}
}
function Lb(a, b) {
  a.Sa.length < a.pd ? a.Sa.push(b) : Mb(a, b)
}
function Mb(a, b) {
  if(a.hd) {
    a.hd(b)
  }else {
    if(ka(b)) {
      if(ia(b.ib)) {
        b.ib()
      }else {
        for(var c in b) {
          delete b[c]
        }
      }
    }
  }
}
Jb.prototype.T = function() {
  Jb.Ca.T.call(this);
  for(var a = this.Sa;a.length;) {
    Mb(this, a.pop())
  }
  delete this.Sa
};
var Nb, Ob = (Nb = "ScriptEngine" in ba && "JScript" == ba.ScriptEngine()) ? ba.ScriptEngineMajorVersion() + "." + ba.ScriptEngineMinorVersion() + "." + ba.ScriptEngineBuildVersion() : "0";
var Pb, Qb, Rb, Sb, Tb, Ub, Vb, Wb, Xb, Yb, Zb;
(function() {
  function a() {
    return{G:0, ia:0}
  }
  function b() {
    return[]
  }
  function c() {
    function a(b) {
      return i.call(a.src, a.key, b)
    }
    return a
  }
  function d() {
    return new Hb
  }
  function f() {
    return new Gb
  }
  var h = Nb && !(0 <= Na(Ob, "5.7")), i;
  Ub = function(a) {
    i = a
  };
  if(h) {
    Pb = function() {
      return Kb(j)
    };
    Qb = function(a) {
      Lb(j, a)
    };
    Rb = function() {
      return Kb(o)
    };
    Sb = function(a) {
      Lb(o, a)
    };
    Tb = function() {
      return Kb(s)
    };
    Vb = function() {
      Lb(s, c())
    };
    Wb = function() {
      return Kb(x)
    };
    Xb = function(a) {
      Lb(x, a)
    };
    Yb = function() {
      return Kb(u)
    };
    Zb = function(a) {
      Lb(u, a)
    };
    var j = new Jb(0, 600);
    j.ua = a;
    var o = new Jb(0, 600);
    o.ua = b;
    var s = new Jb(0, 600);
    s.ua = c;
    var x = new Jb(0, 600);
    x.ua = d;
    var u = new Jb(0, 600);
    u.ua = f
  }else {
    Pb = a, Qb = da, Rb = b, Sb = da, Tb = c, Vb = da, Wb = d, Xb = da, Yb = f, Zb = da
  }
})();
function $b(a, b) {
  for(var c in a) {
    b.call(g, a[c], c, a)
  }
}
function ac(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = a[d]
  }
  return b
}
function bc(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = d
  }
  return b
}
function cc(a) {
  var b = {}, c;
  for(c in a) {
    b[c] = a[c]
  }
  return b
}
var dc = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function ec(a, b) {
  for(var c, d, f = 1;f < arguments.length;f++) {
    d = arguments[f];
    for(c in d) {
      a[c] = d[c]
    }
    for(var h = 0;h < dc.length;h++) {
      c = dc[h], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
}
;var fc = {}, gc = {}, hc = {}, ic = {};
function jc(a, b, c, d, f) {
  if(b) {
    if(fa(b)) {
      for(var h = 0;h < b.length;h++) {
        jc(a, b[h], c, d, f)
      }
      return l
    }
    var d = !!d, i = gc;
    b in i || (i[b] = Pb());
    i = i[b];
    d in i || (i[d] = Pb(), i.G++);
    var i = i[d], j = la(a), o;
    i.ia++;
    if(i[j]) {
      o = i[j];
      for(h = 0;h < o.length;h++) {
        if(i = o[h], i.Kb == c && i.Gc == f) {
          if(i.tb) {
            break
          }
          return o[h].key
        }
      }
    }else {
      o = i[j] = Rb(), i.G++
    }
    h = Tb();
    h.src = a;
    i = Wb();
    i.Fb(c, h, a, b, d, f);
    c = i.key;
    h.key = c;
    o.push(i);
    fc[c] = i;
    hc[j] || (hc[j] = Rb());
    hc[j].push(i);
    a.addEventListener ? (a == ba || !a.gd) && a.addEventListener(b, h, d) : a.attachEvent(b in ic ? ic[b] : ic[b] = "on" + b, h);
    return c
  }
  e(Error("Invalid event type"))
}
function kc(a, b, c, d, f) {
  if(fa(b)) {
    for(var h = 0;h < b.length;h++) {
      kc(a, b[h], c, d, f)
    }
  }else {
    d = !!d;
    a: {
      h = gc;
      if(b in h && (h = h[b], d in h && (h = h[d], a = la(a), h[a]))) {
        a = h[a];
        break a
      }
      a = l
    }
    if(a) {
      for(h = 0;h < a.length;h++) {
        if(a[h].Kb == c && a[h].capture == d && a[h].Gc == f) {
          lc(a[h].key);
          break
        }
      }
    }
  }
}
function lc(a) {
  if(fc[a]) {
    var b = fc[a];
    if(!b.tb) {
      var c = b.src, d = b.type, f = b.sd, h = b.capture;
      c.removeEventListener ? (c == ba || !c.gd) && c.removeEventListener(d, f, h) : c.detachEvent && c.detachEvent(d in ic ? ic[d] : ic[d] = "on" + d, f);
      c = la(c);
      f = gc[d][h][c];
      if(hc[c]) {
        var i = hc[c], j = Ua(i, b);
        0 <= j && Ta.splice.call(i, j, 1);
        0 == i.length && delete hc[c]
      }
      b.tb = k;
      f.rd = k;
      mc(d, h, c, f);
      delete fc[a]
    }
  }
}
function mc(a, b, c, d) {
  if(!d.Zb && d.rd) {
    for(var f = 0, h = 0;f < d.length;f++) {
      if(d[f].tb) {
        var i = d[f].sd;
        i.src = l;
        Vb(i);
        Xb(d[f])
      }else {
        f != h && (d[h] = d[f]), h++
      }
    }
    d.length = h;
    d.rd = m;
    if(0 == h && (Sb(d), delete gc[a][b][c], gc[a][b].G--, 0 == gc[a][b].G && (Qb(gc[a][b]), delete gc[a][b], gc[a].G--), 0 == gc[a].G)) {
      Qb(gc[a]), delete gc[a]
    }
  }
}
function nc(a) {
  var b, c = 0, d = b == l;
  b = !!b;
  if(a == l) {
    $b(hc, function(a) {
      for(var f = a.length - 1;0 <= f;f--) {
        var h = a[f];
        if(d || b == h.capture) {
          lc(h.key), c++
        }
      }
    })
  }else {
    if(a = la(a), hc[a]) {
      for(var a = hc[a], f = a.length - 1;0 <= f;f--) {
        var h = a[f];
        if(d || b == h.capture) {
          lc(h.key), c++
        }
      }
    }
  }
}
function oc(a, b, c, d, f) {
  var h = 1, b = la(b);
  if(a[b]) {
    a.ia--;
    a = a[b];
    a.Zb ? a.Zb++ : a.Zb = 1;
    try {
      for(var i = a.length, j = 0;j < i;j++) {
        var o = a[j];
        o && !o.tb && (h &= pc(o, f) !== m)
      }
    }finally {
      a.Zb--, mc(c, d, b, a)
    }
  }
  return Boolean(h)
}
function pc(a, b) {
  var c = a.handleEvent(b);
  a.Xc && lc(a.key);
  return c
}
Ub(function(a, b) {
  if(!fc[a]) {
    return k
  }
  var c = fc[a], d = c.type, f = gc;
  if(!(d in f)) {
    return k
  }
  var f = f[d], h, i;
  Bb === g && (Bb = t && !ba.addEventListener);
  if(Bb) {
    h = b || ca("window.event");
    var j = k in f, o = m in f;
    if(j) {
      if(0 > h.keyCode || h.returnValue != g) {
        return k
      }
      a: {
        var s = m;
        if(0 == h.keyCode) {
          try {
            h.keyCode = -1;
            break a
          }catch(x) {
            s = k
          }
        }
        if(s || h.returnValue == g) {
          h.returnValue = k
        }
      }
    }
    s = Yb();
    s.Fb(h, this);
    h = k;
    try {
      if(j) {
        for(var u = Rb(), y = s.currentTarget;y;y = y.parentNode) {
          u.push(y)
        }
        i = f[k];
        i.ia = i.G;
        for(var G = u.length - 1;!s.Va && 0 <= G && i.ia;G--) {
          s.currentTarget = u[G], h &= oc(i, u[G], d, k, s)
        }
        if(o) {
          i = f[m];
          i.ia = i.G;
          for(G = 0;!s.Va && G < u.length && i.ia;G++) {
            s.currentTarget = u[G], h &= oc(i, u[G], d, m, s)
          }
        }
      }else {
        h = pc(c, s)
      }
    }finally {
      u && (u.length = 0, Sb(u)), s.ib(), Zb(s)
    }
    return h
  }
  d = new Gb(b, this);
  try {
    h = pc(c, d)
  }finally {
    d.ib()
  }
  return h
});
function qc() {
}
va(qc, eb);
q = qc.prototype;
q.gd = k;
q.Mc = l;
q.addEventListener = function(a, b, c, d) {
  jc(this, a, b, c, d)
};
q.removeEventListener = function(a, b, c, d) {
  kc(this, a, b, c, d)
};
q.dispatchEvent = function(a) {
  var b = a.type || a, c = gc;
  if(b in c) {
    if(ha(a)) {
      a = new Db(a, this)
    }else {
      if(a instanceof Db) {
        a.target = a.target || this
      }else {
        var d = a, a = new Db(b, this);
        ec(a, d)
      }
    }
    var d = 1, f, c = c[b], b = k in c, h;
    if(b) {
      f = [];
      for(h = this;h;h = h.Mc) {
        f.push(h)
      }
      h = c[k];
      h.ia = h.G;
      for(var i = f.length - 1;!a.Va && 0 <= i && h.ia;i--) {
        a.currentTarget = f[i], d &= oc(h, f[i], a.type, k, a) && a.Mb != m
      }
    }
    if(m in c) {
      if(h = c[m], h.ia = h.G, b) {
        for(i = 0;!a.Va && i < f.length && h.ia;i++) {
          a.currentTarget = f[i], d &= oc(h, f[i], a.type, m, a) && a.Mb != m
        }
      }else {
        for(f = this;!a.Va && f && h.ia;f = f.Mc) {
          a.currentTarget = f, d &= oc(h, f, a.type, m, a) && a.Mb != m
        }
      }
    }
    a = Boolean(d)
  }else {
    a = k
  }
  return a
};
q.T = function() {
  qc.Ca.T.call(this);
  nc(this);
  this.Mc = l
};
function rc(a, b) {
  this.Ib = a || 1;
  this.Nb = b || sc;
  this.dc = ra(this.de, this);
  this.Jc = ta()
}
va(rc, qc);
rc.prototype.enabled = m;
var sc = ba.window;
q = rc.prototype;
q.V = l;
q.setInterval = function(a) {
  this.Ib = a;
  this.V && this.enabled ? (this.stop(), this.start()) : this.V && this.stop()
};
q.de = function() {
  if(this.enabled) {
    var a = ta() - this.Jc;
    0 < a && a < 0.8 * this.Ib ? this.V = this.Nb.setTimeout(this.dc, this.Ib - a) : (this.dispatchEvent(tc), this.enabled && (this.V = this.Nb.setTimeout(this.dc, this.Ib), this.Jc = ta()))
  }
};
q.start = function() {
  this.enabled = k;
  this.V || (this.V = this.Nb.setTimeout(this.dc, this.Ib), this.Jc = ta())
};
q.stop = function() {
  this.enabled = m;
  this.V && (this.Nb.clearTimeout(this.V), this.V = l)
};
q.T = function() {
  rc.Ca.T.call(this);
  this.stop();
  delete this.Nb
};
var tc = "tick";
function uc(a, b) {
  this.ca = Nb ? [] : "";
  a != l && this.append.apply(this, arguments)
}
uc.prototype.set = function(a) {
  this.clear();
  this.append(a)
};
Nb ? (uc.prototype.fc = 0, uc.prototype.append = function(a, b, c) {
  b == l ? this.ca[this.fc++] = a : (this.ca.push.apply(this.ca, arguments), this.fc = this.ca.length);
  return this
}) : uc.prototype.append = function(a, b, c) {
  this.ca += a;
  if(b != l) {
    for(var d = 1;d < arguments.length;d++) {
      this.ca += arguments[d]
    }
  }
  return this
};
uc.prototype.clear = function() {
  if(Nb) {
    this.fc = this.ca.length = 0
  }else {
    this.ca = ""
  }
};
uc.prototype.toString = function() {
  if(Nb) {
    var a = this.ca.join("");
    this.clear();
    a && this.append(a);
    return a
  }
  return this.ca
};
g;
g;
g;
g;
g;
g;
function v(a) {
  return a != l && a !== m
}
g;
function w(a, b) {
  return a[r(b)] ? k : a._ ? k : m
}
g;
function z(a, b) {
  return Error(["No protocol method ", a, " defined for type ", r(b), ": ", b].join(""))
}
var vc = function() {
  var a = l, a = function(b, c) {
    switch(arguments.length) {
      case 1:
        return Array(b);
      case 2:
        return a.b(c)
    }
    e("Invalid arity: " + arguments.length)
  };
  a.b = function(a) {
    return Array(a)
  };
  a.a = function(b, c) {
    return a.b(c)
  };
  return a
}();
g;
g;
g;
g;
g;
var wc = {};
function xc(a) {
  if(a ? a.w : a) {
    a = a.w(a)
  }else {
    var b;
    var c = xc[r(a)];
    c ? b = c : (c = xc._) ? b = c : e(z("ICounted.-count", a));
    a = b.call(l, a)
  }
  return a
}
g;
g;
function yc(a) {
  if(a ? a.M : a) {
    a = a.M(a)
  }else {
    var b;
    var c = yc[r(a)];
    c ? b = c : (c = yc._) ? b = c : e(z("IEmptyableCollection.-empty", a));
    a = b.call(l, a)
  }
  return a
}
g;
g;
var zc = {};
function Ac(a, b) {
  var c;
  if(a ? a.D : a) {
    c = a.D(a, b)
  }else {
    var d = Ac[r(a)];
    d ? c = d : (d = Ac._) ? c = d : e(z("ICollection.-conj", a));
    c = c.call(l, a, b)
  }
  return c
}
g;
g;
var Bc = {}, A = function() {
  function a(a, b, c) {
    if(a ? a.N : a) {
      a = a.N(a, b, c)
    }else {
      var i;
      var j = A[r(a)];
      j ? i = j : (j = A._) ? i = j : e(z("IIndexed.-nth", a));
      a = i.call(l, a, b, c)
    }
    return a
  }
  function b(a, b) {
    var c;
    if(a ? a.S : a) {
      c = a.S(a, b)
    }else {
      var i = A[r(a)];
      i ? c = i : (i = A._) ? c = i : e(z("IIndexed.-nth", a));
      c = c.call(l, a, b)
    }
    return c
  }
  var c = l, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.a = b;
  c.c = a;
  return c
}();
g;
g;
var Cc = {};
g;
g;
var Dc = {};
function B(a) {
  if(a ? a.$ : a) {
    a = a.$(a)
  }else {
    var b;
    var c = B[r(a)];
    c ? b = c : (c = B._) ? b = c : e(z("ISeq.-first", a));
    a = b.call(l, a)
  }
  return a
}
function C(a) {
  if(a ? a.X : a) {
    a = a.X(a)
  }else {
    var b;
    var c = C[r(a)];
    c ? b = c : (c = C._) ? b = c : e(z("ISeq.-rest", a));
    a = b.call(l, a)
  }
  return a
}
g;
g;
var Ec = {};
function Fc(a) {
  if(a ? a.Ea : a) {
    a = a.Ea(a)
  }else {
    var b;
    var c = Fc[r(a)];
    c ? b = c : (c = Fc._) ? b = c : e(z("INext.-next", a));
    a = b.call(l, a)
  }
  return a
}
g;
g;
var D = function() {
  function a(a, b, c) {
    if(a ? a.r : a) {
      a = a.r(a, b, c)
    }else {
      var i;
      var j = D[r(a)];
      j ? i = j : (j = D._) ? i = j : e(z("ILookup.-lookup", a));
      a = i.call(l, a, b, c)
    }
    return a
  }
  function b(a, b) {
    var c;
    if(a ? a.B : a) {
      c = a.B(a, b)
    }else {
      var i = D[r(a)];
      i ? c = i : (i = D._) ? c = i : e(z("ILookup.-lookup", a));
      c = c.call(l, a, b)
    }
    return c
  }
  var c = l, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.a = b;
  c.c = a;
  return c
}();
g;
g;
function Gc(a, b) {
  var c;
  if(a ? a.ab : a) {
    c = a.ab(a, b)
  }else {
    var d = Gc[r(a)];
    d ? c = d : (d = Gc._) ? c = d : e(z("IAssociative.-contains-key?", a));
    c = c.call(l, a, b)
  }
  return c
}
function Hc(a, b, c) {
  if(a ? a.R : a) {
    a = a.R(a, b, c)
  }else {
    var d;
    var f = Hc[r(a)];
    f ? d = f : (f = Hc._) ? d = f : e(z("IAssociative.-assoc", a));
    a = d.call(l, a, b, c)
  }
  return a
}
g;
g;
var Ic = {};
function Jc(a, b) {
  var c;
  if(a ? a.cb : a) {
    c = a.cb(a, b)
  }else {
    var d = Jc[r(a)];
    d ? c = d : (d = Jc._) ? c = d : e(z("IMap.-dissoc", a));
    c = c.call(l, a, b)
  }
  return c
}
g;
g;
var Kc = {};
function Lc(a) {
  if(a ? a.Tb : a) {
    a = a.Tb(a)
  }else {
    var b;
    var c = Lc[r(a)];
    c ? b = c : (c = Lc._) ? b = c : e(z("IMapEntry.-key", a));
    a = b.call(l, a)
  }
  return a
}
function Mc(a) {
  if(a ? a.Ub : a) {
    a = a.Ub(a)
  }else {
    var b;
    var c = Mc[r(a)];
    c ? b = c : (c = Mc._) ? b = c : e(z("IMapEntry.-val", a));
    a = b.call(l, a)
  }
  return a
}
g;
g;
var Nc = {};
g;
g;
function Oc(a) {
  if(a ? a.sa : a) {
    a = a.sa(a)
  }else {
    var b;
    var c = Oc[r(a)];
    c ? b = c : (c = Oc._) ? b = c : e(z("IStack.-peek", a));
    a = b.call(l, a)
  }
  return a
}
g;
g;
var Pc = {};
function Qc(a, b, c) {
  if(a ? a.gb : a) {
    a = a.gb(a, b, c)
  }else {
    var d;
    var f = Qc[r(a)];
    f ? d = f : (f = Qc._) ? d = f : e(z("IVector.-assoc-n", a));
    a = d.call(l, a, b, c)
  }
  return a
}
g;
g;
function E(a) {
  if(a ? a.Sb : a) {
    a = a.Sb(a)
  }else {
    var b;
    var c = E[r(a)];
    c ? b = c : (c = E._) ? b = c : e(z("IDeref.-deref", a));
    a = b.call(l, a)
  }
  return a
}
g;
g;
g;
g;
var Rc = {};
function Sc(a) {
  if(a ? a.I : a) {
    a = a.I(a)
  }else {
    var b;
    var c = Sc[r(a)];
    c ? b = c : (c = Sc._) ? b = c : e(z("IMeta.-meta", a));
    a = b.call(l, a)
  }
  return a
}
g;
g;
function Tc(a, b) {
  var c;
  if(a ? a.K : a) {
    c = a.K(a, b)
  }else {
    var d = Tc[r(a)];
    d ? c = d : (d = Tc._) ? c = d : e(z("IWithMeta.-with-meta", a));
    c = c.call(l, a, b)
  }
  return c
}
g;
g;
var Uc = {}, Vc = function() {
  function a(a, b, c) {
    if(a ? a.ra : a) {
      a = a.ra(a, b, c)
    }else {
      var i;
      var j = Vc[r(a)];
      j ? i = j : (j = Vc._) ? i = j : e(z("IReduce.-reduce", a));
      a = i.call(l, a, b, c)
    }
    return a
  }
  function b(a, b) {
    var c;
    if(a ? a.qa : a) {
      c = a.qa(a, b)
    }else {
      var i = Vc[r(a)];
      i ? c = i : (i = Vc._) ? c = i : e(z("IReduce.-reduce", a));
      c = c.call(l, a, b)
    }
    return c
  }
  var c = l, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.a = b;
  c.c = a;
  return c
}();
g;
g;
g;
g;
function Wc(a, b) {
  var c;
  if(a ? a.A : a) {
    c = a.A(a, b)
  }else {
    var d = Wc[r(a)];
    d ? c = d : (d = Wc._) ? c = d : e(z("IEquiv.-equiv", a));
    c = c.call(l, a, b)
  }
  return c
}
g;
g;
function Xc(a) {
  if(a ? a.F : a) {
    a = a.F(a)
  }else {
    var b;
    var c = Xc[r(a)];
    c ? b = c : (c = Xc._) ? b = c : e(z("IHash.-hash", a));
    a = b.call(l, a)
  }
  return a
}
g;
g;
var Yc = {};
function Zc(a) {
  if(a ? a.z : a) {
    a = a.z(a)
  }else {
    var b;
    var c = Zc[r(a)];
    c ? b = c : (c = Zc._) ? b = c : e(z("ISeqable.-seq", a));
    a = b.call(l, a)
  }
  return a
}
g;
g;
var $c = {};
g;
g;
g;
g;
g;
g;
var ad = {};
function bd(a) {
  if(a ? a.yb : a) {
    a = a.yb(a)
  }else {
    var b;
    var c = bd[r(a)];
    c ? b = c : (c = bd._) ? b = c : e(z("IReversible.-rseq", a));
    a = b.call(l, a)
  }
  return a
}
g;
g;
g;
g;
var cd = {};
function dd(a, b) {
  var c;
  if(a ? a.C : a) {
    c = a.C(a, b)
  }else {
    var d = dd[r(a)];
    d ? c = d : (d = dd._) ? c = d : e(z("IPrintable.-pr-seq", a));
    c = c.call(l, a, b)
  }
  return c
}
g;
g;
g;
g;
function ed(a, b, c) {
  if(a ? a.fd : a) {
    a = a.fd(a, b, c)
  }else {
    var d;
    var f = ed[r(a)];
    f ? d = f : (f = ed._) ? d = f : e(z("IWatchable.-notify-watches", a));
    a = d.call(l, a, b, c)
  }
  return a
}
function fd(a, b, c) {
  if(a ? a.ed : a) {
    a = a.ed(a, b, c)
  }else {
    var d;
    var f = fd[r(a)];
    f ? d = f : (f = fd._) ? d = f : e(z("IWatchable.-add-watch", a));
    a = d.call(l, a, b, c)
  }
  return a
}
g;
g;
var gd = {};
function hd(a) {
  if(a ? a.bb : a) {
    a = a.bb(a)
  }else {
    var b;
    var c = hd[r(a)];
    c ? b = c : (c = hd._) ? b = c : e(z("IEditableCollection.-as-transient", a));
    a = b.call(l, a)
  }
  return a
}
g;
g;
function id(a, b) {
  var c;
  if(a ? a.fb : a) {
    c = a.fb(a, b)
  }else {
    var d = id[r(a)];
    d ? c = d : (d = id._) ? c = d : e(z("ITransientCollection.-conj!", a));
    c = c.call(l, a, b)
  }
  return c
}
function jd(a) {
  if(a ? a.zb : a) {
    a = a.zb(a)
  }else {
    var b;
    var c = jd[r(a)];
    c ? b = c : (c = jd._) ? b = c : e(z("ITransientCollection.-persistent!", a));
    a = b.call(l, a)
  }
  return a
}
g;
g;
function kd(a, b, c) {
  if(a ? a.eb : a) {
    a = a.eb(a, b, c)
  }else {
    var d;
    var f = kd[r(a)];
    f ? d = f : (f = kd._) ? d = f : e(z("ITransientAssociative.-assoc!", a));
    a = d.call(l, a, b, c)
  }
  return a
}
g;
g;
g;
g;
g;
g;
g;
g;
var ld = {};
function md(a, b) {
  var c;
  if(a ? a.bd : a) {
    c = a.bd(a, b)
  }else {
    var d = md[r(a)];
    d ? c = d : (d = md._) ? c = d : e(z("IComparable.-compare", a));
    c = c.call(l, a, b)
  }
  return c
}
g;
g;
function nd(a) {
  if(a ? a.Zc : a) {
    a = a.Zc()
  }else {
    var b;
    var c = nd[r(a)];
    c ? b = c : (c = nd._) ? b = c : e(z("IChunk.-drop-first", a));
    a = b.call(l, a)
  }
  return a
}
g;
g;
var od = {};
function pd(a) {
  if(a ? a.jc : a) {
    a = a.jc(a)
  }else {
    var b;
    var c = pd[r(a)];
    c ? b = c : (c = pd._) ? b = c : e(z("IChunkedSeq.-chunked-first", a));
    a = b.call(l, a)
  }
  return a
}
function qd(a) {
  if(a ? a.Rb : a) {
    a = a.Rb(a)
  }else {
    var b;
    var c = qd[r(a)];
    c ? b = c : (c = qd._) ? b = c : e(z("IChunkedSeq.-chunked-rest", a));
    a = b.call(l, a)
  }
  return a
}
g;
g;
g;
g;
g;
var K = function() {
  function a(a, b) {
    var c = a === b;
    return c ? c : Wc(a, b)
  }
  var b = l, c = function() {
    function a(b, d, j) {
      var o = l;
      ea(j) && (o = F(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, o)
    }
    function c(a, d, f) {
      for(;;) {
        if(v(b.a(a, d))) {
          if(H(f)) {
            a = d, d = I(f), f = H(f)
          }else {
            return b.a(d, I(f))
          }
        }else {
          return m
        }
      }
    }
    a.o = 2;
    a.n = function(a) {
      var b = I(a), d = I(H(a)), a = J(H(a));
      return c(b, d, a)
    };
    a.e = c;
    return a
  }(), b = function(b, f, h) {
    switch(arguments.length) {
      case 1:
        return k;
      case 2:
        return a.call(this, b, f);
      default:
        return c.e(b, f, F(arguments, 2))
    }
    e("Invalid arity: " + arguments.length)
  };
  b.o = 2;
  b.n = c.n;
  b.b = p(k);
  b.a = a;
  b.e = c.e;
  return b
}();
g;
g;
g;
Xc["null"] = p(0);
D["null"] = function() {
  var a = l;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return l;
      case 3:
        return d
    }
    e("Invalid arity: " + arguments.length)
  }
}();
Hc["null"] = function(a, b, c) {
  return sd.e(F([b, c], 0))
};
Ec["null"] = k;
Fc["null"] = p(l);
zc["null"] = k;
Ac["null"] = function(a, b) {
  return L.b(b)
};
Uc["null"] = k;
Vc["null"] = function() {
  var a = l;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return c.Q ? c.Q() : c.call(l);
      case 3:
        return d
    }
    e("Invalid arity: " + arguments.length)
  }
}();
cd["null"] = k;
dd["null"] = function() {
  return L.b("nil")
};
Nc["null"] = k;
wc["null"] = k;
xc["null"] = p(0);
Oc["null"] = p(l);
Dc["null"] = k;
B["null"] = p(l);
C["null"] = function() {
  return L.Q()
};
Wc["null"] = function(a, b) {
  return b == l
};
Tc["null"] = p(l);
Rc["null"] = k;
Sc["null"] = p(l);
Bc["null"] = k;
A["null"] = function() {
  var a = l;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return l;
      case 3:
        return d
    }
    e("Invalid arity: " + arguments.length)
  }
}();
yc["null"] = p(l);
Ic["null"] = k;
Jc["null"] = p(l);
Date.prototype.A = function(a, b) {
  return a.toString() === b.toString()
};
Xc.number = aa();
Wc.number = function(a, b) {
  return a === b
};
Xc["boolean"] = function(a) {
  return a === k ? 1 : 0
};
Xc._ = function(a) {
  return la(a)
};
g;
g;
var ud = function() {
  function a(a, b, c, d) {
    for(var o = xc(a);;) {
      if(d < o) {
        c = b.a ? b.a(c, A.a(a, d)) : b.call(l, c, A.a(a, d));
        if(N(td, c)) {
          return E(c)
        }
        d += 1
      }else {
        return c
      }
    }
  }
  function b(a, b, c) {
    for(var d = xc(a), o = 0;;) {
      if(o < d) {
        c = b.a ? b.a(c, A.a(a, o)) : b.call(l, c, A.a(a, o));
        if(N(td, c)) {
          return E(c)
        }
        o += 1
      }else {
        return c
      }
    }
  }
  function c(a, b) {
    var c = xc(a);
    if(0 === c) {
      return b.Q ? b.Q() : b.call(l)
    }
    for(var d = A.a(a, 0), o = 1;;) {
      if(o < c) {
        d = b.a ? b.a(d, A.a(a, o)) : b.call(l, d, A.a(a, o));
        if(N(td, d)) {
          return E(d)
        }
        o += 1
      }else {
        return d
      }
    }
  }
  var d = l, d = function(d, h, i, j) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, i);
      case 4:
        return a.call(this, d, h, i, j)
    }
    e("Invalid arity: " + arguments.length)
  };
  d.a = c;
  d.c = b;
  d.p = a;
  return d
}();
g;
g;
g;
g;
g;
function vd(a, b) {
  this.W = a;
  this.t = b;
  this.q = 0;
  this.k = 166199546
}
q = vd.prototype;
q.F = function(a) {
  return wd(a)
};
q.Ea = function() {
  return this.t + 1 < this.W.length ? new vd(this.W, this.t + 1) : l
};
q.D = function(a, b) {
  return O(b, a)
};
q.yb = function(a) {
  var b = a.w(a);
  return 0 < b ? new xd(a, b - 1, l) : P
};
q.toString = function() {
  return Q.e(F([this], 0))
};
q.qa = function(a, b) {
  return yd(this.W) ? ud.p(this.W, b, this.W[this.t], this.t + 1) : ud.p(a, b, this.W[this.t], 0)
};
q.ra = function(a, b, c) {
  return yd(this.W) ? ud.p(this.W, b, c, this.t) : ud.p(a, b, c, 0)
};
q.z = aa();
q.w = function() {
  return this.W.length - this.t
};
q.$ = function() {
  return this.W[this.t]
};
q.X = function() {
  return this.t + 1 < this.W.length ? new vd(this.W, this.t + 1) : L.Q()
};
q.A = function(a, b) {
  return zd(a, b)
};
q.S = function(a, b) {
  var c = b + this.t;
  return c < this.W.length ? this.W[c] : l
};
q.N = function(a, b, c) {
  a = b + this.t;
  return a < this.W.length ? this.W[a] : c
};
vd;
var Ad = function() {
  function a(a, b) {
    return 0 === a.length ? l : new vd(a, b)
  }
  function b(a) {
    return c.a(a, 0)
  }
  var c = l, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.b = b;
  c.a = a;
  return c
}(), F = function() {
  function a(a, b) {
    return Ad.a(a, b)
  }
  function b(a) {
    return Ad.a(a, 0)
  }
  var c = l, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.b = b;
  c.a = a;
  return c
}();
Uc.array = k;
Vc.array = function() {
  var a = l;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return ud.a(a, c);
      case 3:
        return ud.c(a, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
D.array = function() {
  var a = l;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return a[c];
      case 3:
        return A.c(a, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
Bc.array = k;
A.array = function() {
  var a = l;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return c < a.length ? a[c] : l;
      case 3:
        return c < a.length ? a[c] : d
    }
    e("Invalid arity: " + arguments.length)
  }
}();
wc.array = k;
xc.array = function(a) {
  return a.length
};
Yc.array = k;
Zc.array = function(a) {
  return F.a(a, 0)
};
function xd(a, b, c) {
  this.ic = a;
  this.t = b;
  this.h = c;
  this.q = 0;
  this.k = 31850570
}
q = xd.prototype;
q.F = function(a) {
  return wd(a)
};
q.D = function(a, b) {
  return O(b, a)
};
q.toString = function() {
  return Q.e(F([this], 0))
};
q.z = aa();
q.w = function() {
  return this.t + 1
};
q.$ = function() {
  return A.a(this.ic, this.t)
};
q.X = function() {
  return 0 < this.t ? new xd(this.ic, this.t - 1, l) : P
};
q.A = function(a, b) {
  return zd(a, b)
};
q.K = function(a, b) {
  return new xd(this.ic, this.t, b)
};
q.I = n("h");
xd;
function R(a) {
  if(a == l) {
    a = l
  }else {
    var b;
    b = a ? ((b = a.k & 32) ? b : a.bf) ? k : a.k ? m : w(Cc, a) : w(Cc, a);
    a = b ? a : Zc(a)
  }
  return a
}
function I(a) {
  if(a == l) {
    return l
  }
  var b;
  b = a ? ((b = a.k & 64) ? b : a.lc) ? k : a.k ? m : w(Dc, a) : w(Dc, a);
  if(b) {
    return B(a)
  }
  a = R(a);
  return a == l ? l : B(a)
}
function J(a) {
  if(a != l) {
    var b;
    b = a ? ((b = a.k & 64) ? b : a.lc) ? k : a.k ? m : w(Dc, a) : w(Dc, a);
    if(b) {
      return C(a)
    }
    a = R(a);
    return a != l ? C(a) : P
  }
  return P
}
function H(a) {
  if(a == l) {
    a = l
  }else {
    var b;
    b = a ? ((b = a.k & 128) ? b : a.ff) ? k : a.k ? m : w(Ec, a) : w(Ec, a);
    a = b ? Fc(a) : R(J(a))
  }
  return a
}
function Bd(a) {
  return I(H(a))
}
function Cd(a) {
  for(;;) {
    var b = H(a);
    if(b != l) {
      a = b
    }else {
      return I(a)
    }
  }
}
Wc._ = function(a, b) {
  return a === b
};
function Dd(a) {
  return v(a) ? m : k
}
var Ed = function() {
  var a = l, b = function() {
    function b(a, c, i) {
      var j = l;
      ea(i) && (j = F(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, j)
    }
    function d(b, c, d) {
      for(;;) {
        if(v(d)) {
          b = a.a(b, c), c = I(d), d = H(d)
        }else {
          return a.a(b, c)
        }
      }
    }
    b.o = 2;
    b.n = function(a) {
      var b = I(a), c = I(H(a)), a = J(H(a));
      return d(b, c, a)
    };
    b.e = d;
    return b
  }(), a = function(a, d, f) {
    switch(arguments.length) {
      case 2:
        return Ac(a, d);
      default:
        return b.e(a, d, F(arguments, 2))
    }
    e("Invalid arity: " + arguments.length)
  };
  a.o = 2;
  a.n = b.n;
  a.a = function(a, b) {
    return Ac(a, b)
  };
  a.e = b.e;
  return a
}();
g;
function S(a) {
  if(yd(a)) {
    a = xc(a)
  }else {
    a: {
      for(var a = R(a), b = 0;;) {
        if(yd(a)) {
          a = b + xc(a);
          break a
        }
        a = H(a);
        b += 1
      }
      a = g
    }
  }
  return a
}
g;
var Gd = function() {
  function a(a, b, h) {
    return a == l ? h : 0 === b ? R(a) ? I(a) : h : Fd(a) ? A.c(a, b, h) : R(a) ? c.c(H(a), b - 1, h) : h
  }
  function b(a, b) {
    a == l && e(Error("Index out of bounds"));
    if(0 === b) {
      if(R(a)) {
        return I(a)
      }
      e(Error("Index out of bounds"))
    }
    if(Fd(a)) {
      return A.a(a, b)
    }
    if(R(a)) {
      return c.a(H(a), b - 1)
    }
    e(Error("Index out of bounds"))
  }
  var c = l, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.a = b;
  c.c = a;
  return c
}(), T = function() {
  function a(a, b, c) {
    if(a != l) {
      var i;
      i = a ? ((i = a.k & 16) ? i : a.xb) ? k : a.k ? m : w(Bc, a) : w(Bc, a);
      a = i ? A.c(a, Math.floor(b), c) : Gd.c(a, Math.floor(b), c)
    }else {
      a = c
    }
    return a
  }
  function b(a, b) {
    var c;
    a == l ? c = l : (c = a ? ((c = a.k & 16) ? c : a.xb) ? k : a.k ? m : w(Bc, a) : w(Bc, a), c = c ? A.a(a, Math.floor(b)) : Gd.a(a, Math.floor(b)));
    return c
  }
  var c = l, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.a = b;
  c.c = a;
  return c
}(), Hd = function() {
  var a = l, b = function() {
    function b(a, c, i, j) {
      var o = l;
      ea(j) && (o = F(Array.prototype.slice.call(arguments, 3), 0));
      return d.call(this, a, c, i, o)
    }
    function d(b, c, d, j) {
      for(;;) {
        if(b = a.c(b, c, d), v(j)) {
          c = I(j), d = Bd(j), j = H(H(j))
        }else {
          return b
        }
      }
    }
    b.o = 3;
    b.n = function(a) {
      var b = I(a), c = I(H(a)), j = I(H(H(a))), a = J(H(H(a)));
      return d(b, c, j, a)
    };
    b.e = d;
    return b
  }(), a = function(a, d, f, h) {
    switch(arguments.length) {
      case 3:
        return Hc(a, d, f);
      default:
        return b.e(a, d, f, F(arguments, 3))
    }
    e("Invalid arity: " + arguments.length)
  };
  a.o = 3;
  a.n = b.n;
  a.c = function(a, b, f) {
    return Hc(a, b, f)
  };
  a.e = b.e;
  return a
}(), Id = function() {
  var a = l, b = function() {
    function b(a, c, i) {
      var j = l;
      ea(i) && (j = F(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, j)
    }
    function d(b, c, d) {
      for(;;) {
        if(b = a.a(b, c), v(d)) {
          c = I(d), d = H(d)
        }else {
          return b
        }
      }
    }
    b.o = 2;
    b.n = function(a) {
      var b = I(a), c = I(H(a)), a = J(H(a));
      return d(b, c, a)
    };
    b.e = d;
    return b
  }(), a = function(a, d, f) {
    switch(arguments.length) {
      case 1:
        return a;
      case 2:
        return Jc(a, d);
      default:
        return b.e(a, d, F(arguments, 2))
    }
    e("Invalid arity: " + arguments.length)
  };
  a.o = 2;
  a.n = b.n;
  a.b = aa();
  a.a = function(a, b) {
    return Jc(a, b)
  };
  a.e = b.e;
  return a
}();
function Jd(a, b) {
  return Tc(a, b)
}
function Kd(a) {
  var b;
  b = a ? ((b = a.k & 131072) ? b : a.Gd) ? k : a.k ? m : w(Rc, a) : w(Rc, a);
  return b ? Sc(a) : l
}
var Ld = {}, Md = 0, Nd = function() {
  function a(a, b) {
    var c = ha(a);
    if(c ? b : c) {
      if(255 < Md && (Ld = {}, Md = 0), c = Ld[a], c == l) {
        c = Oa(a), Ld[a] = c, Md += 1
      }
    }else {
      c = Xc(a)
    }
    return c
  }
  function b(a) {
    return c.a(a, k)
  }
  var c = l, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.b = b;
  c.a = a;
  return c
}();
function Od(a) {
  if(a == l) {
    a = m
  }else {
    if(a) {
      var b = a.k & 8, a = (b ? b : a.cf) ? k : a.k ? m : w(zc, a)
    }else {
      a = w(zc, a)
    }
  }
  return a
}
function Pd(a) {
  if(a == l) {
    a = m
  }else {
    if(a) {
      var b = a.k & 4096, a = (b ? b : a.jf) ? k : a.k ? m : w(Nc, a)
    }else {
      a = w(Nc, a)
    }
  }
  return a
}
function yd(a) {
  if(a) {
    var b = a.k & 2, a = (b ? b : a.kc) ? k : a.k ? m : w(wc, a)
  }else {
    a = w(wc, a)
  }
  return a
}
function Fd(a) {
  if(a) {
    var b = a.k & 16, a = (b ? b : a.xb) ? k : a.k ? m : w(Bc, a)
  }else {
    a = w(Bc, a)
  }
  return a
}
function Qd(a) {
  if(a == l) {
    a = m
  }else {
    if(a) {
      var b = a.k & 1024, a = (b ? b : a.ef) ? k : a.k ? m : w(Ic, a)
    }else {
      a = w(Ic, a)
    }
  }
  return a
}
function Rd(a) {
  if(a) {
    var b = a.k & 16384, a = (b ? b : a.kf) ? k : a.k ? m : w(Pc, a)
  }else {
    a = w(Pc, a)
  }
  return a
}
function Sd(a) {
  return a ? v(v(l) ? l : a.ad) ? k : a.Id ? m : w(od, a) : w(od, a)
}
function Td(a) {
  var b = [];
  $b(a, function(a, d) {
    return b.push(d)
  });
  return b
}
function Ud(a, b, c, d, f) {
  for(;0 !== f;) {
    c[d] = a[b], d += 1, f -= 1, b += 1
  }
}
var Vd = {};
function N(a, b) {
  return b instanceof a
}
function Wd(a) {
  if(a == l) {
    a = m
  }else {
    if(a) {
      var b = a.k & 64, a = (b ? b : a.lc) ? k : a.k ? m : w(Dc, a)
    }else {
      a = w(Dc, a)
    }
  }
  return a
}
function Xd(a) {
  return v(a) ? k : m
}
function Yd(a) {
  var b = ha(a);
  b ? (b = "\ufdd0" === a.charAt(0), a = !(b ? b : "\ufdd1" === a.charAt(0))) : a = b;
  return a
}
function Zd(a) {
  var b = ha(a);
  return b ? "\ufdd0" === a.charAt(0) : b
}
function $d(a) {
  var b = ha(a);
  return b ? "\ufdd1" === a.charAt(0) : b
}
function ae(a, b) {
  return D.c(a, b, Vd) === Vd ? m : k
}
function be(a, b) {
  if(a === b) {
    return 0
  }
  if(a == l) {
    return-1
  }
  if(b == l) {
    return 1
  }
  if((a == l ? l : a.constructor) === (b == l ? l : b.constructor)) {
    return(a ? v(v(l) ? l : a.Ed) || (a.Id ? 0 : w(ld, a)) : w(ld, a)) ? md(a, b) : a > b ? 1 : a < b ? -1 : 0
  }
  e(Error("compare on non-nil objects of different types"))
}
var ce = function() {
  function a(a, b, c, i) {
    for(;;) {
      var j = be(T.a(a, i), T.a(b, i)), o = 0 === j;
      if(o ? i + 1 < c : o) {
        i += 1
      }else {
        return j
      }
    }
  }
  function b(a, b) {
    var h = S(a), i = S(b);
    return h < i ? -1 : h > i ? 1 : c.p(a, b, h, 0)
  }
  var c = l, c = function(c, f, h, i) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 4:
        return a.call(this, c, f, h, i)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.a = b;
  c.p = a;
  return c
}();
g;
var ee = function() {
  function a(a, b, c) {
    for(c = R(c);;) {
      if(c) {
        b = a.a ? a.a(b, I(c)) : a.call(l, b, I(c));
        if(N(td, b)) {
          return E(b)
        }
        c = H(c)
      }else {
        return b
      }
    }
  }
  function b(a, b) {
    var c = R(b);
    return c ? de.c(a, I(c), H(c)) : a.Q ? a.Q() : a.call(l)
  }
  var c = l, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.a = b;
  c.c = a;
  return c
}();
g;
var de = function() {
  function a(a, b, c) {
    var i;
    i = c ? ((i = c.k & 524288) ? i : c.Hd) ? k : c.k ? m : w(Uc, c) : w(Uc, c);
    return i ? Vc.c(c, a, b) : ee.c(a, b, c)
  }
  function b(a, b) {
    var c;
    c = b ? ((c = b.k & 524288) ? c : b.Hd) ? k : b.k ? m : w(Uc, b) : w(Uc, b);
    return c ? Vc.a(b, a) : ee.a(a, b)
  }
  var c = l, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.a = b;
  c.c = a;
  return c
}();
function td(a) {
  this.m = a;
  this.q = 0;
  this.k = 32768
}
td.prototype.Sb = n("m");
td;
function fe(a) {
  return 0 <= a ? Math.floor.b ? Math.floor.b(a) : Math.floor.call(l, a) : Math.ceil.b ? Math.ceil.b(a) : Math.ceil.call(l, a)
}
function ge(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24
}
var he = function() {
  function a(a) {
    return a == l ? "" : a.toString()
  }
  var b = l, c = function() {
    function a(b, d) {
      var j = l;
      ea(d) && (j = F(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, j)
    }
    function c(a, d) {
      return function(a, c) {
        for(;;) {
          if(v(c)) {
            var d = a.append(b.b(I(c))), f = H(c), a = d, c = f
          }else {
            return b.b(a)
          }
        }
      }.call(l, new uc(b.b(a)), d)
    }
    a.o = 1;
    a.n = function(a) {
      var b = I(a), a = J(a);
      return c(b, a)
    };
    a.e = c;
    return a
  }(), b = function(b, f) {
    switch(arguments.length) {
      case 0:
        return"";
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, F(arguments, 1))
    }
    e("Invalid arity: " + arguments.length)
  };
  b.o = 1;
  b.n = c.n;
  b.Q = p("");
  b.b = a;
  b.e = c.e;
  return b
}(), U = function() {
  function a(a) {
    return $d(a) ? a.substring(2, a.length) : Zd(a) ? he.e(":", F([a.substring(2, a.length)], 0)) : a == l ? "" : a.toString()
  }
  var b = l, c = function() {
    function a(b, d) {
      var j = l;
      ea(d) && (j = F(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, j)
    }
    function c(a, d) {
      return function(a, c) {
        for(;;) {
          if(v(c)) {
            var d = a.append(b.b(I(c))), f = H(c), a = d, c = f
          }else {
            return he.b(a)
          }
        }
      }.call(l, new uc(b.b(a)), d)
    }
    a.o = 1;
    a.n = function(a) {
      var b = I(a), a = J(a);
      return c(b, a)
    };
    a.e = c;
    return a
  }(), b = function(b, f) {
    switch(arguments.length) {
      case 0:
        return"";
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, F(arguments, 1))
    }
    e("Invalid arity: " + arguments.length)
  };
  b.o = 1;
  b.n = c.n;
  b.Q = p("");
  b.b = a;
  b.e = c.e;
  return b
}(), ie = function() {
  var a = l, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return a.substring(c);
      case 3:
        return a.substring(c, d)
    }
    e("Invalid arity: " + arguments.length)
  };
  a.a = function(a, c) {
    return a.substring(c)
  };
  a.c = function(a, c, d) {
    return a.substring(c, d)
  };
  return a
}(), je = function() {
  function a(a, b) {
    return c.b(he.e(a, F(["/", b], 0)))
  }
  function b(a) {
    return Zd(a) ? a : $d(a) ? he.e("\ufdd0", F(["'", ie.a(a, 2)], 0)) : he.e("\ufdd0", F(["'", a], 0))
  }
  var c = l, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.b = b;
  c.a = a;
  return c
}();
function zd(a, b) {
  var c;
  c = b ? ((c = b.k & 16777216) ? c : b.hf) ? k : b.k ? m : w($c, b) : w($c, b);
  if(c) {
    a: {
      c = R(a);
      for(var d = R(b);;) {
        if(c == l) {
          c = d == l;
          break a
        }
        if(d != l && K.a(I(c), I(d))) {
          c = H(c), d = H(d)
        }else {
          c = m;
          break a
        }
      }
      c = g
    }
  }else {
    c = l
  }
  return Xd(c)
}
function wd(a) {
  return de.c(function(a, c) {
    var d = Nd.a(c, m);
    return a ^ d + 2654435769 + (a << 6) + (a >> 2)
  }, Nd.a(I(a), m), H(a))
}
g;
g;
function ke(a) {
  for(var b = 0, a = R(a);;) {
    if(a) {
      var c = I(a), b = (b + (Nd.b(Lc(c)) ^ Nd.b(Mc(c)))) % 4503599627370496, a = H(a)
    }else {
      return b
    }
  }
}
function le(a) {
  for(var b = 0, a = R(a);;) {
    if(a) {
      var c = I(a), b = (b + Nd.b(c)) % 4503599627370496, a = H(a)
    }else {
      return b
    }
  }
}
g;
function me(a, b, c, d, f) {
  this.h = a;
  this.lb = b;
  this.za = c;
  this.count = d;
  this.l = f;
  this.q = 0;
  this.k = 65413358
}
q = me.prototype;
q.F = function(a) {
  var b = this.l;
  return b != l ? b : this.l = a = wd(a)
};
q.Ea = function() {
  return 1 === this.count ? l : this.za
};
q.D = function(a, b) {
  return new me(this.h, b, a, this.count + 1, l)
};
q.toString = function() {
  return Q.e(F([this], 0))
};
q.z = aa();
q.w = n("count");
q.sa = n("lb");
q.$ = n("lb");
q.X = function() {
  return 1 === this.count ? P : this.za
};
q.A = function(a, b) {
  return zd(a, b)
};
q.K = function(a, b) {
  return new me(b, this.lb, this.za, this.count, this.l)
};
q.I = n("h");
q.M = function() {
  return P
};
me;
function ne(a) {
  this.h = a;
  this.q = 0;
  this.k = 65413326
}
q = ne.prototype;
q.F = p(0);
q.Ea = p(l);
q.D = function(a, b) {
  return new me(this.h, b, l, 1, l)
};
q.toString = function() {
  return Q.e(F([this], 0))
};
q.z = p(l);
q.w = p(0);
q.sa = p(l);
q.$ = p(l);
q.X = function() {
  return P
};
q.A = function(a, b) {
  return zd(a, b)
};
q.K = function(a, b) {
  return new ne(b)
};
q.I = n("h");
q.M = aa();
ne;
var P = new ne(l);
function oe(a) {
  if(a) {
    var b = a.k & 134217728, a = (b ? b : a.gf) ? k : a.k ? m : w(ad, a)
  }else {
    a = w(ad, a)
  }
  return a
}
var L = function() {
  function a(a, b, c) {
    return Ed.a(d.a(b, c), a)
  }
  function b(a, b) {
    return Ed.a(d.b(b), a)
  }
  function c(a) {
    return Ed.a(P, a)
  }
  var d = l, f = function() {
    function a(c, d, f, h) {
      var u = l;
      ea(h) && (u = F(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, d, f, u)
    }
    function b(a, c, d, f) {
      return Ed.a(Ed.a(Ed.a(de.c(Ed, P, oe(f) ? bd(f) : de.c(Ed, P, f)), d), c), a)
    }
    a.o = 3;
    a.n = function(a) {
      var c = I(a), d = I(H(a)), f = I(H(H(a))), a = J(H(H(a)));
      return b(c, d, f, a)
    };
    a.e = b;
    return a
  }(), d = function(d, i, j, o) {
    switch(arguments.length) {
      case 0:
        return P;
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, i);
      case 3:
        return a.call(this, d, i, j);
      default:
        return f.e(d, i, j, F(arguments, 3))
    }
    e("Invalid arity: " + arguments.length)
  };
  d.o = 3;
  d.n = f.n;
  d.Q = function() {
    return P
  };
  d.b = c;
  d.a = b;
  d.c = a;
  d.e = f.e;
  return d
}();
function pe(a, b, c, d) {
  this.h = a;
  this.lb = b;
  this.za = c;
  this.l = d;
  this.q = 0;
  this.k = 65405164
}
q = pe.prototype;
q.F = function(a) {
  var b = this.l;
  return b != l ? b : this.l = a = wd(a)
};
q.Ea = function() {
  return this.za == l ? l : Zc(this.za)
};
q.D = function(a, b) {
  return new pe(l, b, a, this.l)
};
q.toString = function() {
  return Q.e(F([this], 0))
};
q.z = aa();
q.$ = n("lb");
q.X = function() {
  return this.za == l ? P : this.za
};
q.A = function(a, b) {
  return zd(a, b)
};
q.K = function(a, b) {
  return new pe(b, this.lb, this.za, this.l)
};
q.I = n("h");
q.M = function() {
  return Tc(P, this.h)
};
pe;
function O(a, b) {
  var c = b == l;
  c || (c = b ? ((c = b.k & 64) ? c : b.lc) ? k : b.k ? m : w(Dc, b) : w(Dc, b));
  return c ? new pe(l, a, b, l) : new pe(l, a, R(b), l)
}
Uc.string = k;
Vc.string = function() {
  var a = l;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return ud.a(a, c);
      case 3:
        return ud.c(a, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
D.string = function() {
  var a = l;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return A.a(a, c);
      case 3:
        return A.c(a, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
Bc.string = k;
A.string = function() {
  var a = l;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return c < xc(a) ? a.charAt(c) : l;
      case 3:
        return c < xc(a) ? a.charAt(c) : d
    }
    e("Invalid arity: " + arguments.length)
  }
}();
wc.string = k;
xc.string = function(a) {
  return a.length
};
Yc.string = k;
Zc.string = function(a) {
  return Ad.a(a, 0)
};
Xc.string = function(a) {
  return Oa(a)
};
function qe(a) {
  this.nd = a;
  this.q = 0;
  this.k = 1
}
qe.prototype.call = function(a, b) {
  if(b == l) {
    return l
  }
  var c = b.Ba;
  return c == l ? D.c(b, this.nd, l) : c[this.nd]
};
qe.prototype.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
qe;
String.prototype.call = function() {
  var a = l;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return D.c(c, this.toString(), l);
      case 3:
        return D.c(c, this.toString(), d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
String.prototype.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
String.prototype.apply = function(a, b) {
  return 2 > S(b) ? D.c(b[0], a, l) : D.c(b[0], a, b[1])
};
function re(a) {
  var b = a.x;
  if(a.Nc) {
    return b
  }
  a.x = b.Q ? b.Q() : b.call(l);
  a.Nc = k;
  return a.x
}
function V(a, b, c, d) {
  this.h = a;
  this.Nc = b;
  this.x = c;
  this.l = d;
  this.q = 0;
  this.k = 31850700
}
q = V.prototype;
q.F = function(a) {
  var b = this.l;
  return b != l ? b : this.l = a = wd(a)
};
q.Ea = function(a) {
  return Zc(a.X(a))
};
q.D = function(a, b) {
  return O(b, a)
};
q.toString = function() {
  return Q.e(F([this], 0))
};
q.z = function(a) {
  return R(re(a))
};
q.$ = function(a) {
  return I(re(a))
};
q.X = function(a) {
  return J(re(a))
};
q.A = function(a, b) {
  return zd(a, b)
};
q.K = function(a, b) {
  return new V(b, this.Nc, this.x, this.l)
};
q.I = n("h");
q.M = function() {
  return Tc(P, this.h)
};
V;
g;
function se(a, b) {
  this.ec = a;
  this.end = b;
  this.q = 0;
  this.k = 2
}
se.prototype.w = n("end");
se.prototype.add = function(a) {
  this.ec[this.end] = a;
  return this.end += 1
};
se.prototype.Da = function() {
  var a = new te(this.ec, 0, this.end);
  this.ec = l;
  return a
};
se;
function te(a, b, c) {
  this.g = a;
  this.U = b;
  this.end = c;
  this.q = 0;
  this.k = 524306
}
q = te.prototype;
q.qa = function(a, b) {
  return ud.p(a, b, this.g[this.U], this.U + 1)
};
q.ra = function(a, b, c) {
  return ud.p(a, b, c, this.U)
};
q.Zc = function() {
  this.U === this.end && e(Error("-drop-first of empty chunk"));
  return new te(this.g, this.U + 1, this.end)
};
q.S = function(a, b) {
  return this.g[this.U + b]
};
q.N = function(a, b, c) {
  return((a = 0 <= b) ? b < this.end - this.U : a) ? this.g[this.U + b] : c
};
q.w = function() {
  return this.end - this.U
};
te;
var ue = function() {
  function a(a, b, c) {
    return new te(a, b, c)
  }
  function b(a, b) {
    return d.c(a, b, a.length)
  }
  function c(a) {
    return d.c(a, 0, a.length)
  }
  var d = l, d = function(d, h, i) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, h);
      case 3:
        return a.call(this, d, h, i)
    }
    e("Invalid arity: " + arguments.length)
  };
  d.b = c;
  d.a = b;
  d.c = a;
  return d
}();
function ve(a, b, c) {
  this.Da = a;
  this.La = b;
  this.h = c;
  this.q = 0;
  this.k = 27656296
}
q = ve.prototype;
q.D = function(a, b) {
  return O(b, a)
};
q.z = aa();
q.$ = function() {
  return A.a(this.Da, 0)
};
q.X = function() {
  return 1 < xc(this.Da) ? new ve(nd(this.Da), this.La, this.h) : this.La == l ? P : this.La
};
q.$c = function() {
  return this.La == l ? l : this.La
};
q.A = function(a, b) {
  return zd(a, b)
};
q.K = function(a, b) {
  return new ve(this.Da, this.La, b)
};
q.I = n("h");
q.ad = k;
q.jc = n("Da");
q.Rb = function() {
  return this.La == l ? P : this.La
};
ve;
function we(a, b) {
  return 0 === xc(a) ? b : new ve(a, b, l)
}
function xe(a) {
  for(var b = [];;) {
    if(R(a)) {
      b.push(I(a)), a = H(a)
    }else {
      return b
    }
  }
}
function ye(a, b) {
  if(yd(a)) {
    return S(a)
  }
  for(var c = a, d = b, f = 0;;) {
    var h;
    h = (h = 0 < d) ? R(c) : h;
    if(v(h)) {
      c = H(c), d -= 1, f += 1
    }else {
      return f
    }
  }
}
var Ae = function ze(b) {
  return b == l ? l : H(b) == l ? R(I(b)) : O(I(b), ze(H(b)))
}, Be = function() {
  function a(a, b) {
    return new V(l, m, function() {
      var c = R(a);
      return c ? Sd(c) ? we(pd(c), d.a(qd(c), b)) : O(I(c), d.a(J(c), b)) : b
    }, l)
  }
  function b(a) {
    return new V(l, m, function() {
      return a
    }, l)
  }
  function c() {
    return new V(l, m, p(l), l)
  }
  var d = l, f = function() {
    function a(c, d, f) {
      var h = l;
      ea(f) && (h = F(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, h)
    }
    function b(a, c, f) {
      var h = function y(a, b) {
        return new V(l, m, function() {
          var c = R(a);
          return c ? Sd(c) ? we(pd(c), y(qd(c), b)) : O(I(c), y(J(c), b)) : v(b) ? y(I(b), H(b)) : l
        }, l)
      };
      return h.a ? h.a(d.a(a, c), f) : h.call(l, d.a(a, c), f)
    }
    a.o = 2;
    a.n = function(a) {
      var c = I(a), d = I(H(a)), a = J(H(a));
      return b(c, d, a)
    };
    a.e = b;
    return a
  }(), d = function(d, i, j) {
    switch(arguments.length) {
      case 0:
        return c.call(this);
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, d, i);
      default:
        return f.e(d, i, F(arguments, 2))
    }
    e("Invalid arity: " + arguments.length)
  };
  d.o = 2;
  d.n = f.n;
  d.Q = c;
  d.b = b;
  d.a = a;
  d.e = f.e;
  return d
}(), Ce = function() {
  function a(a, b, c, d) {
    return O(a, O(b, O(c, d)))
  }
  function b(a, b, c) {
    return O(a, O(b, c))
  }
  var c = l, d = function() {
    function a(c, d, f, s, x) {
      var u = l;
      ea(x) && (u = F(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, f, s, u)
    }
    function b(a, c, d, f, h) {
      return O(a, O(c, O(d, O(f, Ae(h)))))
    }
    a.o = 4;
    a.n = function(a) {
      var c = I(a), d = I(H(a)), f = I(H(H(a))), x = I(H(H(H(a)))), a = J(H(H(H(a))));
      return b(c, d, f, x, a)
    };
    a.e = b;
    return a
  }(), c = function(c, h, i, j, o) {
    switch(arguments.length) {
      case 1:
        return R(c);
      case 2:
        return O(c, h);
      case 3:
        return b.call(this, c, h, i);
      case 4:
        return a.call(this, c, h, i, j);
      default:
        return d.e(c, h, i, j, F(arguments, 4))
    }
    e("Invalid arity: " + arguments.length)
  };
  c.o = 4;
  c.n = d.n;
  c.b = function(a) {
    return R(a)
  };
  c.a = function(a, b) {
    return O(a, b)
  };
  c.c = b;
  c.p = a;
  c.e = d.e;
  return c
}();
function De(a) {
  return hd(a)
}
function Ee(a) {
  return jd(a)
}
function Fe(a, b, c) {
  return kd(a, b, c)
}
g;
function Ge(a, b, c) {
  var d = R(c);
  if(0 === b) {
    return a.Q ? a.Q() : a.call(l)
  }
  var c = B(d), f = C(d);
  if(1 === b) {
    return a.b ? a.b(c) : a.b ? a.b(c) : a.call(l, c)
  }
  var d = B(f), h = C(f);
  if(2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(l, c, d)
  }
  var f = B(h), i = C(h);
  if(3 === b) {
    return a.c ? a.c(c, d, f) : a.c ? a.c(c, d, f) : a.call(l, c, d, f)
  }
  var h = B(i), j = C(i);
  if(4 === b) {
    return a.p ? a.p(c, d, f, h) : a.p ? a.p(c, d, f, h) : a.call(l, c, d, f, h)
  }
  i = B(j);
  j = C(j);
  if(5 === b) {
    return a.ea ? a.ea(c, d, f, h, i) : a.ea ? a.ea(c, d, f, h, i) : a.call(l, c, d, f, h, i)
  }
  var a = B(j), o = C(j);
  if(6 === b) {
    return a.Fa ? a.Fa(c, d, f, h, i, a) : a.Fa ? a.Fa(c, d, f, h, i, a) : a.call(l, c, d, f, h, i, a)
  }
  var j = B(o), s = C(o);
  if(7 === b) {
    return a.Ab ? a.Ab(c, d, f, h, i, a, j) : a.Ab ? a.Ab(c, d, f, h, i, a, j) : a.call(l, c, d, f, h, i, a, j)
  }
  var o = B(s), x = C(s);
  if(8 === b) {
    return a.yc ? a.yc(c, d, f, h, i, a, j, o) : a.yc ? a.yc(c, d, f, h, i, a, j, o) : a.call(l, c, d, f, h, i, a, j, o)
  }
  var s = B(x), u = C(x);
  if(9 === b) {
    return a.zc ? a.zc(c, d, f, h, i, a, j, o, s) : a.zc ? a.zc(c, d, f, h, i, a, j, o, s) : a.call(l, c, d, f, h, i, a, j, o, s)
  }
  var x = B(u), y = C(u);
  if(10 === b) {
    return a.nc ? a.nc(c, d, f, h, i, a, j, o, s, x) : a.nc ? a.nc(c, d, f, h, i, a, j, o, s, x) : a.call(l, c, d, f, h, i, a, j, o, s, x)
  }
  var u = B(y), G = C(y);
  if(11 === b) {
    return a.oc ? a.oc(c, d, f, h, i, a, j, o, s, x, u) : a.oc ? a.oc(c, d, f, h, i, a, j, o, s, x, u) : a.call(l, c, d, f, h, i, a, j, o, s, x, u)
  }
  var y = B(G), M = C(G);
  if(12 === b) {
    return a.pc ? a.pc(c, d, f, h, i, a, j, o, s, x, u, y) : a.pc ? a.pc(c, d, f, h, i, a, j, o, s, x, u, y) : a.call(l, c, d, f, h, i, a, j, o, s, x, u, y)
  }
  var G = B(M), ja = C(M);
  if(13 === b) {
    return a.qc ? a.qc(c, d, f, h, i, a, j, o, s, x, u, y, G) : a.qc ? a.qc(c, d, f, h, i, a, j, o, s, x, u, y, G) : a.call(l, c, d, f, h, i, a, j, o, s, x, u, y, G)
  }
  var M = B(ja), oa = C(ja);
  if(14 === b) {
    return a.rc ? a.rc(c, d, f, h, i, a, j, o, s, x, u, y, G, M) : a.rc ? a.rc(c, d, f, h, i, a, j, o, s, x, u, y, G, M) : a.call(l, c, d, f, h, i, a, j, o, s, x, u, y, G, M)
  }
  var ja = B(oa), ua = C(oa);
  if(15 === b) {
    return a.sc ? a.sc(c, d, f, h, i, a, j, o, s, x, u, y, G, M, ja) : a.sc ? a.sc(c, d, f, h, i, a, j, o, s, x, u, y, G, M, ja) : a.call(l, c, d, f, h, i, a, j, o, s, x, u, y, G, M, ja)
  }
  var oa = B(ua), Ma = C(ua);
  if(16 === b) {
    return a.tc ? a.tc(c, d, f, h, i, a, j, o, s, x, u, y, G, M, ja, oa) : a.tc ? a.tc(c, d, f, h, i, a, j, o, s, x, u, y, G, M, ja, oa) : a.call(l, c, d, f, h, i, a, j, o, s, x, u, y, G, M, ja, oa)
  }
  var ua = B(Ma), rb = C(Ma);
  if(17 === b) {
    return a.uc ? a.uc(c, d, f, h, i, a, j, o, s, x, u, y, G, M, ja, oa, ua) : a.uc ? a.uc(c, d, f, h, i, a, j, o, s, x, u, y, G, M, ja, oa, ua) : a.call(l, c, d, f, h, i, a, j, o, s, x, u, y, G, M, ja, oa, ua)
  }
  var Ma = B(rb), rd = C(rb);
  if(18 === b) {
    return a.vc ? a.vc(c, d, f, h, i, a, j, o, s, x, u, y, G, M, ja, oa, ua, Ma) : a.vc ? a.vc(c, d, f, h, i, a, j, o, s, x, u, y, G, M, ja, oa, ua, Ma) : a.call(l, c, d, f, h, i, a, j, o, s, x, u, y, G, M, ja, oa, ua, Ma)
  }
  rb = B(rd);
  rd = C(rd);
  if(19 === b) {
    return a.wc ? a.wc(c, d, f, h, i, a, j, o, s, x, u, y, G, M, ja, oa, ua, Ma, rb) : a.wc ? a.wc(c, d, f, h, i, a, j, o, s, x, u, y, G, M, ja, oa, ua, Ma, rb) : a.call(l, c, d, f, h, i, a, j, o, s, x, u, y, G, M, ja, oa, ua, Ma, rb)
  }
  var wf = B(rd);
  C(rd);
  if(20 === b) {
    return a.xc ? a.xc(c, d, f, h, i, a, j, o, s, x, u, y, G, M, ja, oa, ua, Ma, rb, wf) : a.xc ? a.xc(c, d, f, h, i, a, j, o, s, x, u, y, G, M, ja, oa, ua, Ma, rb, wf) : a.call(l, c, d, f, h, i, a, j, o, s, x, u, y, G, M, ja, oa, ua, Ma, rb, wf)
  }
  e(Error("Only up to 20 arguments supported on functions"))
}
g;
var He = function() {
  function a(a, b, c, d, f) {
    b = Ce.p(b, c, d, f);
    c = a.o;
    return v(a.n) ? (d = ye(b, c + 1), d <= c ? Ge(a, d, b) : a.n(b)) : a.apply(a, xe(b))
  }
  function b(a, b, c, d) {
    b = Ce.c(b, c, d);
    c = a.o;
    return v(a.n) ? (d = ye(b, c + 1), d <= c ? Ge(a, d, b) : a.n(b)) : a.apply(a, xe(b))
  }
  function c(a, b, c) {
    b = Ce.a(b, c);
    c = a.o;
    if(v(a.n)) {
      var d = ye(b, c + 1);
      return d <= c ? Ge(a, d, b) : a.n(b)
    }
    return a.apply(a, xe(b))
  }
  function d(a, b) {
    var c = a.o;
    if(v(a.n)) {
      var d = ye(b, c + 1);
      return d <= c ? Ge(a, d, b) : a.n(b)
    }
    return a.apply(a, xe(b))
  }
  var f = l, h = function() {
    function a(c, d, f, h, i, G) {
      var M = l;
      ea(G) && (M = F(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, f, h, i, M)
    }
    function b(a, c, d, f, h, i) {
      c = O(c, O(d, O(f, O(h, Ae(i)))));
      d = a.o;
      return v(a.n) ? (f = ye(c, d + 1), f <= d ? Ge(a, f, c) : a.n(c)) : a.apply(a, xe(c))
    }
    a.o = 5;
    a.n = function(a) {
      var c = I(a), d = I(H(a)), f = I(H(H(a))), h = I(H(H(H(a)))), i = I(H(H(H(H(a))))), a = J(H(H(H(H(a)))));
      return b(c, d, f, h, i, a)
    };
    a.e = b;
    return a
  }(), f = function(f, j, o, s, x, u) {
    switch(arguments.length) {
      case 2:
        return d.call(this, f, j);
      case 3:
        return c.call(this, f, j, o);
      case 4:
        return b.call(this, f, j, o, s);
      case 5:
        return a.call(this, f, j, o, s, x);
      default:
        return h.e(f, j, o, s, x, F(arguments, 5))
    }
    e("Invalid arity: " + arguments.length)
  };
  f.o = 5;
  f.n = h.n;
  f.a = d;
  f.c = c;
  f.p = b;
  f.ea = a;
  f.e = h.e;
  return f
}(), Ie = function() {
  function a(a, b) {
    return!K.a(a, b)
  }
  function b() {
    return m
  }
  var c = l, d = function() {
    function a(c, d, f) {
      var s = l;
      ea(f) && (s = F(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, s)
    }
    function b(a, c, d) {
      return Dd(He.p(K, a, c, d))
    }
    a.o = 2;
    a.n = function(a) {
      var c = I(a), d = I(H(a)), a = J(H(a));
      return b(c, d, a)
    };
    a.e = b;
    return a
  }(), c = function(c, h, i) {
    switch(arguments.length) {
      case 1:
        return b.call(this);
      case 2:
        return a.call(this, c, h);
      default:
        return d.e(c, h, F(arguments, 2))
    }
    e("Invalid arity: " + arguments.length)
  };
  c.o = 2;
  c.n = d.n;
  c.b = b;
  c.a = a;
  c.e = d.e;
  return c
}();
function Je(a, b) {
  for(;;) {
    if(R(b) == l) {
      return k
    }
    if(v(a.b ? a.b(I(b)) : a.call(l, I(b)))) {
      var c = a, d = H(b), a = c, b = d
    }else {
      return m
    }
  }
}
function Ke(a, b) {
  for(;;) {
    if(R(b)) {
      var c = a.b ? a.b(I(b)) : a.call(l, I(b));
      if(v(c)) {
        return c
      }
      var c = a, d = H(b), a = c, b = d
    }else {
      return l
    }
  }
}
function Le(a) {
  return a
}
var Me = function() {
  function a(a, b, c, f) {
    return new V(l, m, function() {
      var s = R(b), x = R(c), u = R(f);
      return(s ? x ? u : x : s) ? O(a.c ? a.c(I(s), I(x), I(u)) : a.call(l, I(s), I(x), I(u)), d.p(a, J(s), J(x), J(u))) : l
    }, l)
  }
  function b(a, b, c) {
    return new V(l, m, function() {
      var f = R(b), s = R(c);
      return(f ? s : f) ? O(a.a ? a.a(I(f), I(s)) : a.call(l, I(f), I(s)), d.c(a, J(f), J(s))) : l
    }, l)
  }
  function c(a, b) {
    return new V(l, m, function() {
      var c = R(b);
      if(c) {
        if(Sd(c)) {
          for(var f = pd(c), s = S(f), x = new se(vc.b(s), 0), u = 0;;) {
            if(u < s) {
              var y = a.b ? a.b(A.a(f, u)) : a.call(l, A.a(f, u));
              x.add(y);
              u += 1
            }else {
              break
            }
          }
          return we(x.Da(), d.a(a, qd(c)))
        }
        return O(a.b ? a.b(I(c)) : a.call(l, I(c)), d.a(a, J(c)))
      }
      return l
    }, l)
  }
  var d = l, f = function() {
    function a(c, d, f, h, u) {
      var y = l;
      ea(u) && (y = F(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, f, h, y)
    }
    function b(a, c, f, h, i) {
      var y = function M(a) {
        return new V(l, m, function() {
          var b = d.a(R, a);
          return Je(Le, b) ? O(d.a(I, b), M(d.a(J, b))) : l
        }, l)
      };
      return d.a(function(b) {
        return He.a(a, b)
      }, y.b ? y.b(Ed.e(i, h, F([f, c], 0))) : y.call(l, Ed.e(i, h, F([f, c], 0))))
    }
    a.o = 4;
    a.n = function(a) {
      var c = I(a), d = I(H(a)), f = I(H(H(a))), h = I(H(H(H(a)))), a = J(H(H(H(a))));
      return b(c, d, f, h, a)
    };
    a.e = b;
    return a
  }(), d = function(d, i, j, o, s) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, i);
      case 3:
        return b.call(this, d, i, j);
      case 4:
        return a.call(this, d, i, j, o);
      default:
        return f.e(d, i, j, o, F(arguments, 4))
    }
    e("Invalid arity: " + arguments.length)
  };
  d.o = 4;
  d.n = f.n;
  d.a = c;
  d.c = b;
  d.p = a;
  d.e = f.e;
  return d
}(), Oe = function Ne(b, c) {
  return new V(l, m, function() {
    if(0 < b) {
      var d = R(c);
      return d ? O(I(d), Ne(b - 1, J(d))) : l
    }
    return l
  }, l)
};
function Pe(a, b) {
  function c(a, b) {
    for(;;) {
      var c = R(b), i = 0 < a;
      if(v(i ? c : i)) {
        i = a - 1, c = J(c), a = i, b = c
      }else {
        return c
      }
    }
  }
  return new V(l, m, function() {
    return c.a ? c.a(a, b) : c.call(l, a, b)
  }, l)
}
function Qe(a) {
  function b(a, b) {
    for(;;) {
      var c = R(b), i;
      i = (i = c) ? a.b ? a.b(I(c)) : a.call(l, I(c)) : i;
      if(v(i)) {
        i = a, c = J(c), a = i, b = c
      }else {
        return c
      }
    }
  }
  var c = E(Re);
  return new V(l, m, function() {
    return b.a ? b.a(a, c) : b.call(l, a, c)
  }, l)
}
var Se = function() {
  function a(a, b) {
    return Oe(a, c.b(b))
  }
  function b(a) {
    return new V(l, m, function() {
      return O(a, c.b(a))
    }, l)
  }
  var c = l, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.b = b;
  c.a = a;
  return c
}(), Te = function() {
  function a(a, c) {
    return new V(l, m, function() {
      var h = R(a), i = R(c);
      return(h ? i : h) ? O(I(h), O(I(i), b.a(J(h), J(i)))) : l
    }, l)
  }
  var b = l, c = function() {
    function a(b, d, j) {
      var o = l;
      ea(j) && (o = F(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, o)
    }
    function c(a, d, f) {
      return new V(l, m, function() {
        var c = Me.a(R, Ed.e(f, d, F([a], 0)));
        return Je(Le, c) ? Be.a(Me.a(I, c), He.a(b, Me.a(J, c))) : l
      }, l)
    }
    a.o = 2;
    a.n = function(a) {
      var b = I(a), d = I(H(a)), a = J(H(a));
      return c(b, d, a)
    };
    a.e = c;
    return a
  }(), b = function(b, f, h) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, f);
      default:
        return c.e(b, f, F(arguments, 2))
    }
    e("Invalid arity: " + arguments.length)
  };
  b.o = 2;
  b.n = c.n;
  b.a = a;
  b.e = c.e;
  return b
}();
function Ue(a, b) {
  return Pe(1, Te.a(Se.b(a), b))
}
function Ve(a) {
  var b = function d(a, b) {
    return new V(l, m, function() {
      var i = R(a);
      return i ? O(I(i), d(J(i), b)) : R(b) ? d(I(b), J(b)) : l
    }, l)
  };
  return b.a ? b.a(l, a) : b.call(l, l, a)
}
var We = function() {
  function a(a, b) {
    return Ve(Me.a(a, b))
  }
  var b = l, c = function() {
    function a(c, d, j) {
      var o = l;
      ea(j) && (o = F(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, o)
    }
    function b(a, c, d) {
      return Ve(He.p(Me, a, c, d))
    }
    a.o = 2;
    a.n = function(a) {
      var c = I(a), d = I(H(a)), a = J(H(a));
      return b(c, d, a)
    };
    a.e = b;
    return a
  }(), b = function(b, f, h) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, f);
      default:
        return c.e(b, f, F(arguments, 2))
    }
    e("Invalid arity: " + arguments.length)
  };
  b.o = 2;
  b.n = c.n;
  b.a = a;
  b.e = c.e;
  return b
}(), Ye = function Xe(b, c) {
  return new V(l, m, function() {
    var d = R(c);
    if(d) {
      if(Sd(d)) {
        for(var f = pd(d), h = S(f), i = new se(vc.b(h), 0), j = 0;;) {
          if(j < h) {
            if(v(b.b ? b.b(A.a(f, j)) : b.call(l, A.a(f, j)))) {
              var o = A.a(f, j);
              i.add(o)
            }
            j += 1
          }else {
            break
          }
        }
        return we(i.Da(), Xe(b, qd(d)))
      }
      f = I(d);
      d = J(d);
      return v(b.b ? b.b(f) : b.call(l, f)) ? O(f, Xe(b, d)) : Xe(b, d)
    }
    return l
  }, l)
};
function Ze(a, b) {
  var c;
  c = a ? ((c = a.q & 1) ? c : a.df) ? k : a.q ? m : w(gd, a) : w(gd, a);
  return c ? Ee(de.c(id, hd(a), b)) : de.c(Ac, a, b)
}
var $e = function() {
  function a(a, b, c, j) {
    return new V(l, m, function() {
      var o = R(j);
      if(o) {
        var s = Oe(a, o);
        return a === S(s) ? O(s, d.p(a, b, c, Pe(b, o))) : L.b(Oe(a, Be.a(s, c)))
      }
      return l
    }, l)
  }
  function b(a, b, c) {
    return new V(l, m, function() {
      var j = R(c);
      if(j) {
        var o = Oe(a, j);
        return a === S(o) ? O(o, d.c(a, b, Pe(b, j))) : l
      }
      return l
    }, l)
  }
  function c(a, b) {
    return d.c(a, a, b)
  }
  var d = l, d = function(d, h, i, j) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, i);
      case 4:
        return a.call(this, d, h, i, j)
    }
    e("Invalid arity: " + arguments.length)
  };
  d.a = c;
  d.c = b;
  d.p = a;
  return d
}();
function af(a, b, c) {
  this.h = a;
  this.Z = b;
  this.l = c;
  this.q = 0;
  this.k = 32400159
}
q = af.prototype;
q.F = function(a) {
  var b = this.l;
  return b != l ? b : this.l = a = wd(a)
};
q.B = function(a, b) {
  return a.N(a, b, l)
};
q.r = function(a, b, c) {
  return a.N(a, b, c)
};
q.R = function(a, b, c) {
  a = this.Z.slice();
  a[b] = c;
  return new af(this.h, a, l)
};
q.call = function() {
  var a = l;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.B(this, c);
      case 3:
        return this.r(this, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.D = function(a, b) {
  var c = this.Z.slice();
  c.push(b);
  return new af(this.h, c, l)
};
q.toString = function() {
  return Q.e(F([this], 0))
};
q.qa = function(a, b) {
  return ud.a(this.Z, b)
};
q.ra = function(a, b, c) {
  return ud.c(this.Z, b, c)
};
q.z = function() {
  var a = this;
  if(0 < a.Z.length) {
    var b = function d(b) {
      return new V(l, m, function() {
        return b < a.Z.length ? O(a.Z[b], d(b + 1)) : l
      }, l)
    };
    return b.b ? b.b(0) : b.call(l, 0)
  }
  return l
};
q.w = function() {
  return this.Z.length
};
q.sa = function() {
  var a = this.Z.length;
  return 0 < a ? this.Z[a - 1] : l
};
q.gb = function(a, b, c) {
  return a.R(a, b, c)
};
q.A = function(a, b) {
  return zd(a, b)
};
q.K = function(a, b) {
  return new af(b, this.Z, this.l)
};
q.I = n("h");
q.S = function(a, b) {
  var c = 0 <= b;
  return(c ? b < this.Z.length : c) ? this.Z[b] : l
};
q.N = function(a, b, c) {
  return((a = 0 <= b) ? b < this.Z.length : a) ? this.Z[b] : c
};
q.M = function() {
  return Tc(bf, this.h)
};
af;
var bf = new af(l, [], 0);
function cf(a, b) {
  this.v = a;
  this.g = b
}
cf;
function df(a) {
  a = a.j;
  return 32 > a ? 0 : a - 1 >>> 5 << 5
}
function ef(a, b, c) {
  for(;;) {
    if(0 === b) {
      return c
    }
    var d = new cf(a, vc.b(32));
    d.g[0] = c;
    c = d;
    b -= 5
  }
}
var gf = function ff(b, c, d, f) {
  var h = new cf(d.v, d.g.slice()), i = b.j - 1 >>> c & 31;
  5 === c ? h.g[i] = f : (d = d.g[i], b = d != l ? ff(b, c - 5, d, f) : ef(l, c - 5, f), h.g[i] = b);
  return h
};
function hf(a, b) {
  var c = 0 <= b;
  if(c ? b < a.j : c) {
    if(b >= df(a)) {
      return a.aa
    }
    for(var c = a.root, d = a.shift;;) {
      if(0 < d) {
        var f = d - 5, c = c.g[b >>> d & 31], d = f
      }else {
        return c.g
      }
    }
  }else {
    e(Error([U("No item "), U(b), U(" in vector of length "), U(a.j)].join("")))
  }
}
var kf = function jf(b, c, d, f, h) {
  var i = new cf(d.v, d.g.slice());
  if(0 === c) {
    i.g[f & 31] = h
  }else {
    var j = f >>> c & 31, b = jf(b, c - 5, d.g[j], f, h);
    i.g[j] = b
  }
  return i
};
g;
g;
g;
g;
g;
g;
g;
function lf(a, b, c, d, f, h) {
  this.h = a;
  this.j = b;
  this.shift = c;
  this.root = d;
  this.aa = f;
  this.l = h;
  this.q = 1;
  this.k = 167668511
}
q = lf.prototype;
q.bb = function() {
  var a = this.j, b = this.shift, c = new cf({}, this.root.g.slice()), d = this.aa, f = vc.b(32);
  Ud(d, 0, f, 0, d.length);
  return new mf(a, b, c, f)
};
q.F = function(a) {
  var b = this.l;
  return b != l ? b : this.l = a = wd(a)
};
q.B = function(a, b) {
  return a.N(a, b, l)
};
q.r = function(a, b, c) {
  return a.N(a, b, c)
};
q.R = function(a, b, c) {
  var d = 0 <= b;
  if(d ? b < this.j : d) {
    return df(a) <= b ? (a = this.aa.slice(), a[b & 31] = c, new lf(this.h, this.j, this.shift, this.root, a, l)) : new lf(this.h, this.j, this.shift, kf(a, this.shift, this.root, b, c), this.aa, l)
  }
  if(b === this.j) {
    return a.D(a, c)
  }
  e(Error([U("Index "), U(b), U(" out of bounds  [0,"), U(this.j), U("]")].join("")))
};
q.call = function() {
  var a = l;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.B(this, c);
      case 3:
        return this.r(this, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.D = function(a, b) {
  if(32 > this.j - df(a)) {
    var c = this.aa.slice();
    c.push(b);
    return new lf(this.h, this.j + 1, this.shift, this.root, c, l)
  }
  var d = this.j >>> 5 > 1 << this.shift, c = d ? this.shift + 5 : this.shift;
  if(d) {
    d = new cf(l, vc.b(32));
    d.g[0] = this.root;
    var f = ef(l, this.shift, new cf(l, this.aa));
    d.g[1] = f
  }else {
    d = gf(a, this.shift, this.root, new cf(l, this.aa))
  }
  return new lf(this.h, this.j + 1, c, d, [b], l)
};
q.yb = function(a) {
  return 0 < this.j ? new xd(a, this.j - 1, l) : P
};
q.Tb = function(a) {
  return a.S(a, 0)
};
q.Ub = function(a) {
  return a.S(a, 1)
};
q.toString = function() {
  return Q.e(F([this], 0))
};
q.qa = function(a, b) {
  return ud.a(a, b)
};
q.ra = function(a, b, c) {
  return ud.c(a, b, c)
};
q.z = function(a) {
  return 0 === this.j ? l : nf.c(a, 0, 0)
};
q.w = n("j");
q.sa = function(a) {
  return 0 < this.j ? a.S(a, this.j - 1) : l
};
q.gb = function(a, b, c) {
  return a.R(a, b, c)
};
q.A = function(a, b) {
  return zd(a, b)
};
q.K = function(a, b) {
  return new lf(b, this.j, this.shift, this.root, this.aa, this.l)
};
q.I = n("h");
q.S = function(a, b) {
  return hf(a, b)[b & 31]
};
q.N = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.j : d) ? a.S(a, b) : c
};
q.M = function() {
  return Tc(of, this.h)
};
lf;
var pf = new cf(l, vc.b(32)), of = new lf(l, 0, 5, pf, [], 0);
function W(a) {
  var b = a.length;
  if(32 > b) {
    return new lf(l, b, 5, pf, a, l)
  }
  for(var c = a.slice(0, 32), d = 32, f = hd(new lf(l, 32, 5, pf, c, l));;) {
    if(d < b) {
      c = d + 1, f = id(f, a[d]), d = c
    }else {
      return jd(f)
    }
  }
}
function qf(a) {
  return jd(de.c(id, hd(of), a))
}
var rf = function() {
  function a(a) {
    var c = l;
    ea(a) && (c = F(Array.prototype.slice.call(arguments, 0), 0));
    return qf(c)
  }
  a.o = 0;
  a.n = function(a) {
    a = R(a);
    return qf(a)
  };
  a.e = function(a) {
    return qf(a)
  };
  return a
}();
function sf(a, b, c, d, f) {
  this.$a = a;
  this.xa = b;
  this.t = c;
  this.U = d;
  this.h = f;
  this.q = 0;
  this.k = 27525356
}
q = sf.prototype;
q.Ea = function(a) {
  return this.U + 1 < this.xa.length ? (a = nf.p(this.$a, this.xa, this.t, this.U + 1), a == l ? l : a) : a.$c(a)
};
q.D = function(a, b) {
  return O(b, a)
};
q.z = aa();
q.$ = function() {
  return this.xa[this.U]
};
q.X = function(a) {
  return this.U + 1 < this.xa.length ? (a = nf.p(this.$a, this.xa, this.t, this.U + 1), a == l ? P : a) : a.Rb(a)
};
q.$c = function() {
  var a = this.xa.length, a = this.t + a < xc(this.$a) ? nf.c(this.$a, this.t + a, 0) : l;
  return a == l ? l : a
};
q.A = function(a, b) {
  return zd(a, b)
};
q.K = function(a, b) {
  return nf.ea(this.$a, this.xa, this.t, this.U, b)
};
q.M = function() {
  return Tc(of, this.h)
};
q.ad = k;
q.jc = function() {
  return ue.a(this.xa, this.U)
};
q.Rb = function() {
  var a = this.xa.length, a = this.t + a < xc(this.$a) ? nf.c(this.$a, this.t + a, 0) : l;
  return a == l ? P : a
};
sf;
var nf = function() {
  function a(a, b, c, d, o) {
    return new sf(a, b, c, d, o)
  }
  function b(a, b, c, j) {
    return d.ea(a, b, c, j, l)
  }
  function c(a, b, c) {
    return d.ea(a, hf(a, b), b, c, l)
  }
  var d = l, d = function(d, h, i, j, o) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, h, i);
      case 4:
        return b.call(this, d, h, i, j);
      case 5:
        return a.call(this, d, h, i, j, o)
    }
    e("Invalid arity: " + arguments.length)
  };
  d.c = c;
  d.p = b;
  d.ea = a;
  return d
}();
function tf(a, b, c, d, f) {
  this.h = a;
  this.Za = b;
  this.start = c;
  this.end = d;
  this.l = f;
  this.q = 0;
  this.k = 32400159
}
q = tf.prototype;
q.F = function(a) {
  var b = this.l;
  return b != l ? b : this.l = a = wd(a)
};
q.B = function(a, b) {
  return a.N(a, b, l)
};
q.r = function(a, b, c) {
  return a.N(a, b, c)
};
q.R = function(a, b, c) {
  a = this.start + b;
  return new tf(this.h, Hc(this.Za, a, c), this.start, this.end > a + 1 ? this.end : a + 1, l)
};
q.call = function() {
  var a = l;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.B(this, c);
      case 3:
        return this.r(this, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.D = function(a, b) {
  return new tf(this.h, Qc(this.Za, this.end, b), this.start, this.end + 1, l)
};
q.toString = function() {
  return Q.e(F([this], 0))
};
q.qa = function(a, b) {
  return ud.a(a, b)
};
q.ra = function(a, b, c) {
  return ud.c(a, b, c)
};
q.z = function() {
  var a = this, b = function d(b) {
    return b === a.end ? l : O(A.a(a.Za, b), new V(l, m, function() {
      return d(b + 1)
    }, l))
  };
  return b.b ? b.b(a.start) : b.call(l, a.start)
};
q.w = function() {
  return this.end - this.start
};
q.sa = function() {
  return A.a(this.Za, this.end - 1)
};
q.gb = function(a, b, c) {
  return a.R(a, b, c)
};
q.A = function(a, b) {
  return zd(a, b)
};
q.K = function(a, b) {
  return new tf(b, this.Za, this.start, this.end, this.l)
};
q.I = n("h");
q.S = function(a, b) {
  return A.a(this.Za, this.start + b)
};
q.N = function(a, b, c) {
  return A.c(this.Za, this.start + b, c)
};
q.M = function() {
  return Tc(bf, this.h)
};
tf;
var vf = function uf(b, c, d, f) {
  var d = b.root.v === d.v ? d : new cf(b.root.v, d.g.slice()), h = b.j - 1 >>> c & 31;
  if(5 === c) {
    b = f
  }else {
    var i = d.g[h], b = i != l ? uf(b, c - 5, i, f) : ef(b.root.v, c - 5, f)
  }
  d.g[h] = b;
  return d
};
function mf(a, b, c, d) {
  this.j = a;
  this.shift = b;
  this.root = c;
  this.aa = d;
  this.k = 275;
  this.q = 22
}
q = mf.prototype;
q.call = function() {
  var a = l;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.B(this, c);
      case 3:
        return this.r(this, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.B = function(a, b) {
  return a.N(a, b, l)
};
q.r = function(a, b, c) {
  return a.N(a, b, c)
};
q.S = function(a, b) {
  if(this.root.v) {
    return hf(a, b)[b & 31]
  }
  e(Error("nth after persistent!"))
};
q.N = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.j : d) ? a.S(a, b) : c
};
q.w = function() {
  if(this.root.v) {
    return this.j
  }
  e(Error("count after persistent!"))
};
function xf(a, b, c, d) {
  if(a.root.v) {
    if(function() {
      var b = 0 <= c;
      return b ? c < a.j : b
    }()) {
      if(df(b) <= c) {
        a.aa[c & 31] = d
      }else {
        var f = function i(b, f) {
          var s = a.root.v === f.v ? f : new cf(a.root.v, f.g.slice());
          if(0 === b) {
            s.g[c & 31] = d
          }else {
            var x = c >>> b & 31, u = i(b - 5, s.g[x]);
            s.g[x] = u
          }
          return s
        }.call(l, a.shift, a.root);
        a.root = f
      }
      return b
    }
    if(c === a.j) {
      return b.fb(b, d)
    }
    e(Error([U("Index "), U(c), U(" out of bounds for TransientVector of length"), U(a.j)].join("")))
  }
  e(Error("assoc! after persistent!"))
}
q.eb = function(a, b, c) {
  return xf(a, a, b, c)
};
q.fb = function(a, b) {
  if(this.root.v) {
    if(32 > this.j - df(a)) {
      this.aa[this.j & 31] = b
    }else {
      var c = new cf(this.root.v, this.aa), d = vc.b(32);
      d[0] = b;
      this.aa = d;
      if(this.j >>> 5 > 1 << this.shift) {
        var d = vc.b(32), f = this.shift + 5;
        d[0] = this.root;
        d[1] = ef(this.root.v, this.shift, c);
        this.root = new cf(this.root.v, d);
        this.shift = f
      }else {
        this.root = vf(a, this.shift, this.root, c)
      }
    }
    this.j += 1;
    return a
  }
  e(Error("conj! after persistent!"))
};
q.zb = function(a) {
  if(this.root.v) {
    this.root.v = l;
    var a = this.j - df(a), b = vc.b(a);
    Ud(this.aa, 0, b, 0, a);
    return new lf(l, this.j, this.shift, this.root, b, l)
  }
  e(Error("persistent! called twice"))
};
mf;
function yf(a, b, c, d) {
  this.h = a;
  this.da = b;
  this.Na = c;
  this.l = d;
  this.q = 0;
  this.k = 31850572
}
q = yf.prototype;
q.F = function(a) {
  var b = this.l;
  return b != l ? b : this.l = a = wd(a)
};
q.D = function(a, b) {
  return O(b, a)
};
q.toString = function() {
  return Q.e(F([this], 0))
};
q.z = aa();
q.$ = function() {
  return B(this.da)
};
q.X = function(a) {
  var b = H(this.da);
  return b ? new yf(this.h, b, this.Na, l) : this.Na == l ? a.M(a) : new yf(this.h, this.Na, l, l)
};
q.A = function(a, b) {
  return zd(a, b)
};
q.K = function(a, b) {
  return new yf(b, this.da, this.Na, this.l)
};
q.I = n("h");
q.M = function() {
  return Tc(P, this.h)
};
yf;
function zf(a, b, c, d, f) {
  this.h = a;
  this.count = b;
  this.da = c;
  this.Na = d;
  this.l = f;
  this.q = 0;
  this.k = 31858766
}
q = zf.prototype;
q.F = function(a) {
  var b = this.l;
  return b != l ? b : this.l = a = wd(a)
};
q.D = function(a, b) {
  var c;
  v(this.da) ? (c = this.Na, c = new zf(this.h, this.count + 1, this.da, Ed.a(v(c) ? c : of, b), l)) : c = new zf(this.h, this.count + 1, Ed.a(this.da, b), of, l);
  return c
};
q.toString = function() {
  return Q.e(F([this], 0))
};
q.z = function() {
  var a = R(this.Na), b = this.da;
  return v(v(b) ? b : a) ? new yf(l, this.da, R(a), l) : l
};
q.w = n("count");
q.sa = function() {
  return B(this.da)
};
q.$ = function() {
  return I(this.da)
};
q.X = function(a) {
  return J(R(a))
};
q.A = function(a, b) {
  return zd(a, b)
};
q.K = function(a, b) {
  return new zf(b, this.count, this.da, this.Na, this.l)
};
q.I = n("h");
q.M = function() {
  return Af
};
zf;
var Af = new zf(l, 0, l, of, 0);
function Bf() {
  this.q = 0;
  this.k = 2097152
}
Bf.prototype.A = p(m);
Bf;
var Cf = new Bf;
function Df(a, b) {
  return Xd(Qd(b) ? S(a) === S(b) ? Je(Le, Me.a(function(a) {
    return K.a(D.c(b, I(a), Cf), Bd(a))
  }, a)) : l : l)
}
function Ef(a, b, c) {
  for(var d = c.length, f = 0;;) {
    if(f < d) {
      if(b === c[f]) {
        return f
      }
      f += a
    }else {
      return l
    }
  }
}
function Ff(a, b) {
  var c = Nd.b(a), d = Nd.b(b);
  return c < d ? -1 : c > d ? 1 : 0
}
function Gf(a, b, c) {
  for(var d = a.keys, f = d.length, h = a.Ba, i = Jd(Hf, Kd(a)), a = 0, i = hd(i);;) {
    if(a < f) {
      var j = d[a], a = a + 1, i = kd(i, j, h[j])
    }else {
      return Ee(kd(i, b, c))
    }
  }
}
function If(a, b) {
  for(var c = {}, d = b.length, f = 0;;) {
    if(f < d) {
      var h = b[f];
      c[h] = a[h];
      f += 1
    }else {
      break
    }
  }
  return c
}
function Jf(a, b, c, d, f) {
  this.h = a;
  this.keys = b;
  this.Ba = c;
  this.Ob = d;
  this.l = f;
  this.q = 1;
  this.k = 15075087
}
q = Jf.prototype;
q.bb = function(a) {
  return De(Ze(sd(), a))
};
q.F = function(a) {
  var b = this.l;
  return b != l ? b : this.l = a = ke(a)
};
q.B = function(a, b) {
  return a.r(a, b, l)
};
q.r = function(a, b, c) {
  return((a = ha(b)) ? Ef(1, b, this.keys) != l : a) ? this.Ba[b] : c
};
q.R = function(a, b, c) {
  if(ha(b)) {
    var d = this.Ob > Kf;
    if(d ? d : this.keys.length >= Kf) {
      return Gf(a, b, c)
    }
    if(Ef(1, b, this.keys) != l) {
      return a = If(this.Ba, this.keys), a[b] = c, new Jf(this.h, this.keys, a, this.Ob + 1, l)
    }
    a = If(this.Ba, this.keys);
    d = this.keys.slice();
    a[b] = c;
    d.push(b);
    return new Jf(this.h, d, a, this.Ob + 1, l)
  }
  return Gf(a, b, c)
};
q.ab = function(a, b) {
  var c = ha(b);
  return(c ? Ef(1, b, this.keys) != l : c) ? k : m
};
q.call = function() {
  var a = l;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.B(this, c);
      case 3:
        return this.r(this, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.D = function(a, b) {
  return Rd(b) ? a.R(a, A.a(b, 0), A.a(b, 1)) : de.c(Ac, a, b)
};
q.toString = function() {
  return Q.e(F([this], 0))
};
q.z = function() {
  var a = this;
  return 0 < a.keys.length ? Me.a(function(b) {
    return rf.e(F([b, a.Ba[b]], 0))
  }, a.keys.sort(Ff)) : l
};
q.w = function() {
  return this.keys.length
};
q.A = function(a, b) {
  return Df(a, b)
};
q.K = function(a, b) {
  return new Jf(b, this.keys, this.Ba, this.Ob, this.l)
};
q.I = n("h");
q.M = function() {
  return Tc(Lf, this.h)
};
q.cb = function(a, b) {
  var c = ha(b);
  if(c ? Ef(1, b, this.keys) != l : c) {
    var c = this.keys.slice(), d = If(this.Ba, this.keys);
    c.splice(Ef(1, b, c), 1);
    delete d[b];
    return new Jf(this.h, c, d, this.Ob + 1, l)
  }
  return a
};
Jf;
var Lf = new Jf(l, [], {}, 0, 0), Kf = 32;
function Mf(a, b) {
  return new Jf(l, a, b, 0, l)
}
function Nf(a, b, c, d) {
  this.h = a;
  this.count = b;
  this.la = c;
  this.l = d;
  this.q = 0;
  this.k = 15075087
}
q = Nf.prototype;
q.F = function(a) {
  var b = this.l;
  return b != l ? b : this.l = a = ke(a)
};
q.B = function(a, b) {
  return a.r(a, b, l)
};
q.r = function(a, b, c) {
  a = this.la[Nd.b(b)];
  b = v(a) ? Ef(2, b, a) : l;
  return v(b) ? a[b + 1] : c
};
q.R = function(a, b, c) {
  var a = Nd.b(b), d = this.la[a];
  if(v(d)) {
    var d = d.slice(), f = cc(this.la);
    f[a] = d;
    a = Ef(2, b, d);
    if(v(a)) {
      return d[a + 1] = c, new Nf(this.h, this.count, f, l)
    }
    d.push(b, c);
    return new Nf(this.h, this.count + 1, f, l)
  }
  d = cc(this.la);
  d[a] = [b, c];
  return new Nf(this.h, this.count + 1, d, l)
};
q.ab = function(a, b) {
  var c = this.la[Nd.b(b)];
  return v(v(c) ? Ef(2, b, c) : l) ? k : m
};
q.call = function() {
  var a = l;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.B(this, c);
      case 3:
        return this.r(this, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.D = function(a, b) {
  return Rd(b) ? a.R(a, A.a(b, 0), A.a(b, 1)) : de.c(Ac, a, b)
};
q.toString = function() {
  return Q.e(F([this], 0))
};
q.z = function() {
  var a = this;
  if(0 < a.count) {
    var b = Td(a.la).sort();
    return We.a(function(b) {
      return Me.a(qf, $e.a(2, a.la[b]))
    }, b)
  }
  return l
};
q.w = n("count");
q.A = function(a, b) {
  return Df(a, b)
};
q.K = function(a, b) {
  return new Nf(b, this.count, this.la, this.l)
};
q.I = n("h");
q.M = function() {
  return Tc(Of, this.h)
};
q.cb = function(a, b) {
  var c = Nd.b(b), d = this.la[c], f = v(d) ? Ef(2, b, d) : l;
  if(Dd(f)) {
    return a
  }
  var h = cc(this.la);
  3 > d.length ? delete h[c] : (d = d.slice(), d.splice(f, 2), h[c] = d);
  return new Nf(this.h, this.count - 1, h, l)
};
Nf;
var Of = new Nf(l, 0, {}, 0);
function Pf(a, b) {
  for(var c = a.g, d = c.length, f = 0;;) {
    if(d <= f) {
      return-1
    }
    if(K.a(c[f], b)) {
      return f
    }
    f += 2
  }
}
g;
function Qf(a, b, c, d) {
  this.h = a;
  this.j = b;
  this.g = c;
  this.l = d;
  this.q = 1;
  this.k = 16123663
}
q = Qf.prototype;
q.bb = function() {
  return new Rf({}, this.g.length, this.g.slice())
};
q.F = function(a) {
  var b = this.l;
  return b != l ? b : this.l = a = ke(a)
};
q.B = function(a, b) {
  return a.r(a, b, l)
};
q.r = function(a, b, c) {
  a = Pf(a, b);
  return-1 === a ? c : this.g[a + 1]
};
q.R = function(a, b, c) {
  var d = this, f = Pf(a, b);
  return-1 === f ? d.j < Sf ? new Qf(d.h, d.j + 1, function() {
    var a = d.g.slice();
    a.push(b);
    a.push(c);
    return a
  }(), l) : Ee(Fe(De(Ze(Hf, a)), b, c)) : c === d.g[f + 1] ? a : new Qf(d.h, d.j, function() {
    var a = d.g.slice();
    a[f + 1] = c;
    return a
  }(), l)
};
q.ab = function(a, b) {
  return-1 !== Pf(a, b)
};
q.call = function() {
  var a = l;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.B(this, c);
      case 3:
        return this.r(this, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.D = function(a, b) {
  return Rd(b) ? a.R(a, A.a(b, 0), A.a(b, 1)) : de.c(Ac, a, b)
};
q.toString = function() {
  return Q.e(F([this], 0))
};
q.z = function() {
  var a = this;
  if(0 < a.j) {
    var b = a.g.length, c = function f(c) {
      return new V(l, m, function() {
        return c < b ? O(W([a.g[c], a.g[c + 1]]), f(c + 2)) : l
      }, l)
    };
    return c.b ? c.b(0) : c.call(l, 0)
  }
  return l
};
q.w = n("j");
q.A = function(a, b) {
  return Df(a, b)
};
q.K = function(a, b) {
  return new Qf(b, this.j, this.g, this.l)
};
q.I = n("h");
q.M = function() {
  return Tc(Tf, this.h)
};
q.cb = function(a, b) {
  if(0 <= Pf(a, b)) {
    var c = this.g.length, d = c - 2;
    if(0 === d) {
      return a.M(a)
    }
    for(var d = vc.b(d), f = 0, h = 0;;) {
      if(f >= c) {
        return new Qf(this.h, this.j - 1, d, l)
      }
      K.a(b, this.g[f]) || (d[h] = this.g[f], d[h + 1] = this.g[f + 1], h += 2);
      f += 2
    }
  }else {
    return a
  }
};
Qf;
var Tf = new Qf(l, 0, [], l), Sf = 16;
function Uf(a, b) {
  for(var c = S(a), d = 0, f = hd(Tf);;) {
    if(d < c) {
      var h = d + 1, f = kd(f, a[d], b[d]), d = h
    }else {
      return jd(f)
    }
  }
}
g;
function Rf(a, b, c) {
  this.jb = a;
  this.Ka = b;
  this.g = c;
  this.q = 14;
  this.k = 258
}
q = Rf.prototype;
q.eb = function(a, b, c) {
  if(v(this.jb)) {
    var d = Pf(a, b);
    if(-1 === d) {
      if(this.Ka + 2 <= 2 * Sf) {
        return this.Ka += 2, this.g.push(b), this.g.push(c), a
      }
      var f;
      a: {
        for(var a = this.Ka, d = this.g, h = hd(Lf), i = 0;;) {
          if(i < a) {
            h = kd(h, d[i], d[i + 1]), i += 2
          }else {
            f = h;
            break a
          }
        }
      }
      return kd(f, b, c)
    }
    c !== this.g[d + 1] && (this.g[d + 1] = c);
    return a
  }
  e(Error("assoc! after persistent!"))
};
q.fb = function(a, b) {
  if(v(this.jb)) {
    var c;
    c = b ? ((c = b.k & 2048) ? c : b.Fd) ? k : b.k ? m : w(Kc, b) : w(Kc, b);
    if(c) {
      return a.eb(a, Lc(b), Mc(b))
    }
    c = R(b);
    for(var d = a;;) {
      var f = I(c);
      if(v(f)) {
        c = H(c), d = d.eb(d, Lc(f), Mc(f))
      }else {
        return d
      }
    }
  }else {
    e(Error("conj! after persistent!"))
  }
};
q.zb = function() {
  if(v(this.jb)) {
    return this.jb = m, new Qf(l, fe((this.Ka - this.Ka % 2) / 2), this.g, l)
  }
  e(Error("persistent! called twice"))
};
q.B = function(a, b) {
  return a.r(a, b, l)
};
q.r = function(a, b, c) {
  if(v(this.jb)) {
    return a = Pf(a, b), -1 === a ? c : this.g[a + 1]
  }
  e(Error("lookup after persistent!"))
};
q.w = function() {
  if(v(this.jb)) {
    return fe((this.Ka - this.Ka % 2) / 2)
  }
  e(Error("count after persistent!"))
};
Rf;
g;
function Vf(a) {
  this.m = a
}
Vf;
g;
g;
g;
g;
g;
g;
function Wf(a, b) {
  return ha(a) ? a === b : K.a(a, b)
}
var Xf = function() {
  function a(a, b, c, i, j) {
    a = a.slice();
    a[b] = c;
    a[i] = j;
    return a
  }
  function b(a, b, c) {
    a = a.slice();
    a[b] = c;
    return a
  }
  var c = l, c = function(c, f, h, i, j) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, f, h);
      case 5:
        return a.call(this, c, f, h, i, j)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.c = b;
  c.ea = a;
  return c
}();
function Yf(a, b) {
  var c = vc.b(a.length - 2);
  Ud(a, 0, c, 0, 2 * b);
  Ud(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c
}
var Zf = function() {
  function a(a, b, c, i, j, o) {
    a = a.kb(b);
    a.g[c] = i;
    a.g[j] = o;
    return a
  }
  function b(a, b, c, i) {
    a = a.kb(b);
    a.g[c] = i;
    return a
  }
  var c = l, c = function(c, f, h, i, j, o) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, f, h, i);
      case 6:
        return a.call(this, c, f, h, i, j, o)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.p = b;
  c.Fa = a;
  return c
}();
g;
function $f(a, b, c) {
  this.v = a;
  this.H = b;
  this.g = c
}
q = $f.prototype;
q.ha = function(a, b, c, d, f, h) {
  var i = 1 << (c >>> b & 31), j = ge(this.H & i - 1);
  if(0 === (this.H & i)) {
    var o = ge(this.H);
    if(2 * o < this.g.length) {
      a = this.kb(a);
      b = a.g;
      h.m = k;
      a: {
        c = 2 * (o - j);
        h = 2 * j + (c - 1);
        for(o = 2 * (j + 1) + (c - 1);;) {
          if(0 === c) {
            break a
          }
          b[o] = b[h];
          o -= 1;
          c -= 1;
          h -= 1
        }
      }
      b[2 * j] = d;
      b[2 * j + 1] = f;
      a.H |= i;
      return a
    }
    if(16 <= o) {
      j = vc.b(32);
      j[c >>> b & 31] = ag.ha(a, b + 5, c, d, f, h);
      for(f = d = 0;;) {
        if(32 > d) {
          0 !== (this.H >>> d & 1) && (j[d] = this.g[f] != l ? ag.ha(a, b + 5, Nd.b(this.g[f]), this.g[f], this.g[f + 1], h) : this.g[f + 1], f += 2), d += 1
        }else {
          break
        }
      }
      return new bg(a, o + 1, j)
    }
    b = vc.b(2 * (o + 4));
    Ud(this.g, 0, b, 0, 2 * j);
    b[2 * j] = d;
    b[2 * j + 1] = f;
    Ud(this.g, 2 * j, b, 2 * (j + 1), 2 * (o - j));
    h.m = k;
    d = this.kb(a);
    d.g = b;
    d.H |= i;
    return d
  }
  o = this.g[2 * j];
  i = this.g[2 * j + 1];
  if(o == l) {
    return d = i.ha(a, b + 5, c, d, f, h), d === i ? this : Zf.p(this, a, 2 * j + 1, d)
  }
  if(Wf(d, o)) {
    return f === i ? this : Zf.p(this, a, 2 * j + 1, f)
  }
  h.m = k;
  return Zf.Fa(this, a, 2 * j, l, 2 * j + 1, cg.Ab(a, b + 5, o, i, c, d, f))
};
q.Gb = function() {
  return dg.b(this.g)
};
q.kb = function(a) {
  if(a === this.v) {
    return this
  }
  var b = ge(this.H), c = vc.b(0 > b ? 4 : 2 * (b + 1));
  Ud(this.g, 0, c, 0, 2 * b);
  return new $f(a, this.H, c)
};
q.Hb = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if(0 === (this.H & d)) {
    return this
  }
  var f = ge(this.H & d - 1), h = this.g[2 * f], i = this.g[2 * f + 1];
  return h == l ? (a = i.Hb(a + 5, b, c), a === i ? this : a != l ? new $f(l, this.H, Xf.c(this.g, 2 * f + 1, a)) : this.H === d ? l : new $f(l, this.H ^ d, Yf(this.g, f))) : Wf(c, h) ? new $f(l, this.H ^ d, Yf(this.g, f)) : this
};
q.ga = function(a, b, c, d, f) {
  var h = 1 << (b >>> a & 31), i = ge(this.H & h - 1);
  if(0 === (this.H & h)) {
    var j = ge(this.H);
    if(16 <= j) {
      i = vc.b(32);
      i[b >>> a & 31] = ag.ga(a + 5, b, c, d, f);
      for(d = c = 0;;) {
        if(32 > c) {
          0 !== (this.H >>> c & 1) && (i[c] = this.g[d] != l ? ag.ga(a + 5, Nd.b(this.g[d]), this.g[d], this.g[d + 1], f) : this.g[d + 1], d += 2), c += 1
        }else {
          break
        }
      }
      return new bg(l, j + 1, i)
    }
    a = vc.b(2 * (j + 1));
    Ud(this.g, 0, a, 0, 2 * i);
    a[2 * i] = c;
    a[2 * i + 1] = d;
    Ud(this.g, 2 * i, a, 2 * (i + 1), 2 * (j - i));
    f.m = k;
    return new $f(l, this.H | h, a)
  }
  h = this.g[2 * i];
  j = this.g[2 * i + 1];
  if(h == l) {
    return f = j.ga(a + 5, b, c, d, f), f === j ? this : new $f(l, this.H, Xf.c(this.g, 2 * i + 1, f))
  }
  if(Wf(c, h)) {
    return d === j ? this : new $f(l, this.H, Xf.c(this.g, 2 * i + 1, d))
  }
  f.m = k;
  return new $f(l, this.H, Xf.ea(this.g, 2 * i, l, 2 * i + 1, cg.Fa(a + 5, h, j, b, c, d)))
};
q.Ha = function(a, b, c, d) {
  var f = 1 << (b >>> a & 31);
  if(0 === (this.H & f)) {
    return d
  }
  var h = ge(this.H & f - 1), f = this.g[2 * h], h = this.g[2 * h + 1];
  return f == l ? h.Ha(a + 5, b, c, d) : Wf(c, f) ? h : d
};
$f;
var ag = new $f(l, 0, vc.b(0));
function bg(a, b, c) {
  this.v = a;
  this.j = b;
  this.g = c
}
q = bg.prototype;
q.ha = function(a, b, c, d, f, h) {
  var i = c >>> b & 31, j = this.g[i];
  if(j == l) {
    return a = Zf.p(this, a, i, ag.ha(a, b + 5, c, d, f, h)), a.j += 1, a
  }
  b = j.ha(a, b + 5, c, d, f, h);
  return b === j ? this : Zf.p(this, a, i, b)
};
q.Gb = function() {
  return eg.b(this.g)
};
q.kb = function(a) {
  return a === this.v ? this : new bg(a, this.j, this.g.slice())
};
q.Hb = function(a, b, c) {
  var d = b >>> a & 31, f = this.g[d];
  if(f != l) {
    a = f.Hb(a + 5, b, c);
    if(a === f) {
      d = this
    }else {
      if(a == l) {
        if(8 >= this.j) {
          a: {
            for(var f = this.g, a = 2 * (this.j - 1), b = vc.b(a), c = 0, h = 1, i = 0;;) {
              if(c < a) {
                var j = c !== d;
                if(j ? f[c] != l : j) {
                  b[h] = f[c], h += 2, i |= 1 << c
                }
                c += 1
              }else {
                d = new $f(l, i, b);
                break a
              }
            }
            d = g
          }
        }else {
          d = new bg(l, this.j - 1, Xf.c(this.g, d, a))
        }
      }else {
        d = new bg(l, this.j, Xf.c(this.g, d, a))
      }
    }
    return d
  }
  return this
};
q.ga = function(a, b, c, d, f) {
  var h = b >>> a & 31, i = this.g[h];
  if(i == l) {
    return new bg(l, this.j + 1, Xf.c(this.g, h, ag.ga(a + 5, b, c, d, f)))
  }
  a = i.ga(a + 5, b, c, d, f);
  return a === i ? this : new bg(l, this.j, Xf.c(this.g, h, a))
};
q.Ha = function(a, b, c, d) {
  var f = this.g[b >>> a & 31];
  return f != l ? f.Ha(a + 5, b, c, d) : d
};
bg;
function fg(a, b, c) {
  for(var b = 2 * b, d = 0;;) {
    if(d < b) {
      if(Wf(c, a[d])) {
        return d
      }
      d += 2
    }else {
      return-1
    }
  }
}
function gg(a, b, c, d) {
  this.v = a;
  this.ta = b;
  this.j = c;
  this.g = d
}
q = gg.prototype;
q.ha = function(a, b, c, d, f, h) {
  if(c === this.ta) {
    b = fg(this.g, this.j, d);
    if(-1 === b) {
      if(this.g.length > 2 * this.j) {
        return a = Zf.Fa(this, a, 2 * this.j, d, 2 * this.j + 1, f), h.m = k, a.j += 1, a
      }
      c = this.g.length;
      b = vc.b(c + 2);
      Ud(this.g, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = f;
      h.m = k;
      h = this.j + 1;
      a === this.v ? (this.g = b, this.j = h, a = this) : a = new gg(this.v, this.ta, h, b);
      return a
    }
    return this.g[b + 1] === f ? this : Zf.p(this, a, b + 1, f)
  }
  return(new $f(a, 1 << (this.ta >>> b & 31), [l, this, l, l])).ha(a, b, c, d, f, h)
};
q.Gb = function() {
  return dg.b(this.g)
};
q.kb = function(a) {
  if(a === this.v) {
    return this
  }
  var b = vc.b(2 * (this.j + 1));
  Ud(this.g, 0, b, 0, 2 * this.j);
  return new gg(a, this.ta, this.j, b)
};
q.Hb = function(a, b, c) {
  a = fg(this.g, this.j, c);
  return-1 === a ? this : 1 === this.j ? l : new gg(l, this.ta, this.j - 1, Yf(this.g, fe((a - a % 2) / 2)))
};
q.ga = function(a, b, c, d, f) {
  return b === this.ta ? (a = fg(this.g, this.j, c), -1 === a ? (a = this.g.length, b = vc.b(a + 2), Ud(this.g, 0, b, 0, a), b[a] = c, b[a + 1] = d, f.m = k, new gg(l, this.ta, this.j + 1, b)) : K.a(this.g[a], d) ? this : new gg(l, this.ta, this.j, Xf.c(this.g, a + 1, d))) : (new $f(l, 1 << (this.ta >>> a & 31), [l, this])).ga(a, b, c, d, f)
};
q.Ha = function(a, b, c, d) {
  a = fg(this.g, this.j, c);
  return 0 > a ? d : Wf(c, this.g[a]) ? this.g[a + 1] : d
};
gg;
var cg = function() {
  function a(a, b, c, i, j, o, s) {
    var x = Nd.b(c);
    if(x === j) {
      return new gg(l, x, 2, [c, i, o, s])
    }
    var u = new Vf(m);
    return ag.ha(a, b, x, c, i, u).ha(a, b, j, o, s, u)
  }
  function b(a, b, c, i, j, o) {
    var s = Nd.b(b);
    if(s === i) {
      return new gg(l, s, 2, [b, c, j, o])
    }
    var x = new Vf(m);
    return ag.ga(a, s, b, c, x).ga(a, i, j, o, x)
  }
  var c = l, c = function(c, f, h, i, j, o, s) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, f, h, i, j, o);
      case 7:
        return a.call(this, c, f, h, i, j, o, s)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.Fa = b;
  c.Ab = a;
  return c
}();
function hg(a, b, c, d, f) {
  this.h = a;
  this.Ma = b;
  this.t = c;
  this.Aa = d;
  this.l = f;
  this.q = 0;
  this.k = 31850572
}
q = hg.prototype;
q.F = function(a) {
  var b = this.l;
  return b != l ? b : this.l = a = wd(a)
};
q.D = function(a, b) {
  return O(b, a)
};
q.toString = function() {
  return Q.e(F([this], 0))
};
q.z = aa();
q.$ = function() {
  return this.Aa == l ? W([this.Ma[this.t], this.Ma[this.t + 1]]) : I(this.Aa)
};
q.X = function() {
  return this.Aa == l ? dg.c(this.Ma, this.t + 2, l) : dg.c(this.Ma, this.t, H(this.Aa))
};
q.A = function(a, b) {
  return zd(a, b)
};
q.K = function(a, b) {
  return new hg(b, this.Ma, this.t, this.Aa, this.l)
};
q.I = n("h");
q.M = function() {
  return Tc(P, this.h)
};
hg;
var dg = function() {
  function a(a, b, c) {
    if(c == l) {
      for(c = a.length;;) {
        if(b < c) {
          if(a[b] != l) {
            return new hg(l, a, b, l, l)
          }
          var i = a[b + 1];
          if(v(i) && (i = i.Gb(), v(i))) {
            return new hg(l, a, b + 2, i, l)
          }
          b += 2
        }else {
          return l
        }
      }
    }else {
      return new hg(l, a, b, c, l)
    }
  }
  function b(a) {
    return c.c(a, 0, l)
  }
  var c = l, c = function(c, f, h) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.b = b;
  c.c = a;
  return c
}();
function ig(a, b, c, d, f) {
  this.h = a;
  this.Ma = b;
  this.t = c;
  this.Aa = d;
  this.l = f;
  this.q = 0;
  this.k = 31850572
}
q = ig.prototype;
q.F = function(a) {
  var b = this.l;
  return b != l ? b : this.l = a = wd(a)
};
q.D = function(a, b) {
  return O(b, a)
};
q.toString = function() {
  return Q.e(F([this], 0))
};
q.z = aa();
q.$ = function() {
  return I(this.Aa)
};
q.X = function() {
  return eg.p(l, this.Ma, this.t, H(this.Aa))
};
q.A = function(a, b) {
  return zd(a, b)
};
q.K = function(a, b) {
  return new ig(b, this.Ma, this.t, this.Aa, this.l)
};
q.I = n("h");
q.M = function() {
  return Tc(P, this.h)
};
ig;
var eg = function() {
  function a(a, b, c, i) {
    if(i == l) {
      for(i = b.length;;) {
        if(c < i) {
          var j = b[c];
          if(v(j) && (j = j.Gb(), v(j))) {
            return new ig(a, b, c + 1, j, l)
          }
          c += 1
        }else {
          return l
        }
      }
    }else {
      return new ig(a, b, c, i, l)
    }
  }
  function b(a) {
    return c.p(l, a, 0, l)
  }
  var c = l, c = function(c, f, h, i) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 4:
        return a.call(this, c, f, h, i)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.b = b;
  c.p = a;
  return c
}();
g;
function jg(a, b, c, d, f, h) {
  this.h = a;
  this.j = b;
  this.root = c;
  this.Y = d;
  this.ba = f;
  this.l = h;
  this.q = 1;
  this.k = 16123663
}
q = jg.prototype;
q.bb = function() {
  return new kg({}, this.root, this.j, this.Y, this.ba)
};
q.F = function(a) {
  var b = this.l;
  return b != l ? b : this.l = a = ke(a)
};
q.B = function(a, b) {
  return a.r(a, b, l)
};
q.r = function(a, b, c) {
  return b == l ? this.Y ? this.ba : c : this.root == l ? c : this.root.Ha(0, Nd.b(b), b, c)
};
q.R = function(a, b, c) {
  if(b == l) {
    var d = this.Y;
    return(d ? c === this.ba : d) ? a : new jg(this.h, this.Y ? this.j : this.j + 1, this.root, k, c, l)
  }
  d = new Vf(m);
  c = (this.root == l ? ag : this.root).ga(0, Nd.b(b), b, c, d);
  return c === this.root ? a : new jg(this.h, d.m ? this.j + 1 : this.j, c, this.Y, this.ba, l)
};
q.ab = function(a, b) {
  return b == l ? this.Y : this.root == l ? m : this.root.Ha(0, Nd.b(b), b, Vd) !== Vd
};
q.call = function() {
  var a = l;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.B(this, c);
      case 3:
        return this.r(this, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.D = function(a, b) {
  return Rd(b) ? a.R(a, A.a(b, 0), A.a(b, 1)) : de.c(Ac, a, b)
};
q.toString = function() {
  return Q.e(F([this], 0))
};
q.z = function() {
  if(0 < this.j) {
    var a = this.root != l ? this.root.Gb() : l;
    return this.Y ? O(W([l, this.ba]), a) : a
  }
  return l
};
q.w = n("j");
q.A = function(a, b) {
  return Df(a, b)
};
q.K = function(a, b) {
  return new jg(b, this.j, this.root, this.Y, this.ba, this.l)
};
q.I = n("h");
q.M = function() {
  return Tc(Hf, this.h)
};
q.cb = function(a, b) {
  if(b == l) {
    return this.Y ? new jg(this.h, this.j - 1, this.root, m, l, l) : a
  }
  if(this.root == l) {
    return a
  }
  var c = this.root.Hb(0, Nd.b(b), b);
  return c === this.root ? a : new jg(this.h, this.j - 1, c, this.Y, this.ba, l)
};
jg;
var Hf = new jg(l, 0, l, m, l, 0);
function kg(a, b, c, d, f) {
  this.v = a;
  this.root = b;
  this.count = c;
  this.Y = d;
  this.ba = f;
  this.q = 14;
  this.k = 258
}
q = kg.prototype;
q.eb = function(a, b, c) {
  return lg(a, b, c)
};
q.fb = function(a, b) {
  var c;
  a: {
    if(a.v) {
      var d;
      d = b ? ((d = b.k & 2048) ? d : b.Fd) ? k : b.k ? m : w(Kc, b) : w(Kc, b);
      if(d) {
        c = lg(a, Lc(b), Mc(b))
      }else {
        d = R(b);
        for(var f = a;;) {
          var h = I(d);
          if(v(h)) {
            d = H(d), f = lg(f, Lc(h), Mc(h))
          }else {
            c = f;
            break a
          }
        }
      }
    }else {
      e(Error("conj! after persistent"))
    }
  }
  return c
};
q.zb = function(a) {
  var b;
  a.v ? (a.v = l, b = new jg(l, a.count, a.root, a.Y, a.ba, l)) : e(Error("persistent! called twice"));
  return b
};
q.B = function(a, b) {
  return b == l ? this.Y ? this.ba : l : this.root == l ? l : this.root.Ha(0, Nd.b(b), b)
};
q.r = function(a, b, c) {
  return b == l ? this.Y ? this.ba : c : this.root == l ? c : this.root.Ha(0, Nd.b(b), b, c)
};
q.w = function() {
  if(this.v) {
    return this.count
  }
  e(Error("count after persistent!"))
};
function lg(a, b, c) {
  if(a.v) {
    if(b == l) {
      if(a.ba !== c && (a.ba = c), !a.Y) {
        a.count += 1, a.Y = k
      }
    }else {
      var d = new Vf(m), b = (a.root == l ? ag : a.root).ha(a.v, 0, Nd.b(b), b, c, d);
      b !== a.root && (a.root = b);
      d.m && (a.count += 1)
    }
    return a
  }
  e(Error("assoc! after persistent!"))
}
kg;
function mg(a, b, c) {
  for(var d = b;;) {
    if(a != l) {
      b = c ? a.left : a.right, d = Ed.a(d, a), a = b
    }else {
      return d
    }
  }
}
function ng(a, b, c, d, f) {
  this.h = a;
  this.stack = b;
  this.Qb = c;
  this.j = d;
  this.l = f;
  this.q = 0;
  this.k = 31850570
}
q = ng.prototype;
q.F = function(a) {
  var b = this.l;
  return b != l ? b : this.l = a = wd(a)
};
q.D = function(a, b) {
  return O(b, a)
};
q.toString = function() {
  return Q.e(F([this], 0))
};
q.z = aa();
q.w = function(a) {
  return 0 > this.j ? S(H(a)) + 1 : this.j
};
q.$ = function() {
  return Oc(this.stack)
};
q.X = function() {
  var a = I(this.stack), a = mg(this.Qb ? a.right : a.left, H(this.stack), this.Qb);
  return a != l ? new ng(l, a, this.Qb, this.j - 1, l) : P
};
q.A = function(a, b) {
  return zd(a, b)
};
q.K = function(a, b) {
  return new ng(b, this.stack, this.Qb, this.j, this.l)
};
q.I = n("h");
ng;
g;
g;
function og(a, b, c, d) {
  return N(X, c) ? N(X, c.left) ? new X(c.key, c.m, c.left.pa(), new Y(a, b, c.right, d, l), l) : N(X, c.right) ? new X(c.right.key, c.right.m, new Y(c.key, c.m, c.left, c.right.left, l), new Y(a, b, c.right.right, d, l), l) : new Y(a, b, c, d, l) : new Y(a, b, c, d, l)
}
function pg(a, b, c, d) {
  return N(X, d) ? N(X, d.right) ? new X(d.key, d.m, new Y(a, b, c, d.left, l), d.right.pa(), l) : N(X, d.left) ? new X(d.left.key, d.left.m, new Y(a, b, c, d.left.left, l), new Y(d.key, d.m, d.left.right, d.right, l), l) : new Y(a, b, c, d, l) : new Y(a, b, c, d, l)
}
function qg(a, b, c, d) {
  if(N(X, c)) {
    return new X(a, b, c.pa(), d, l)
  }
  if(N(Y, d)) {
    return pg(a, b, c, d.Lb())
  }
  var f = N(X, d);
  if(f ? N(Y, d.left) : f) {
    return new X(d.left.key, d.left.m, new Y(a, b, c, d.left.left, l), pg(d.key, d.m, d.left.right, d.right.Lb()), l)
  }
  e(Error("red-black tree invariant violation"))
}
function rg(a, b, c, d) {
  if(N(X, d)) {
    return new X(a, b, c, d.pa(), l)
  }
  if(N(Y, c)) {
    return og(a, b, c.Lb(), d)
  }
  var f = N(X, c);
  if(f ? N(Y, c.right) : f) {
    return new X(c.right.key, c.right.m, og(c.key, c.m, c.left.Lb(), c.right.left), new Y(a, b, c.right.right, d, l), l)
  }
  e(Error("red-black tree invariant violation"))
}
function Y(a, b, c, d, f) {
  this.key = a;
  this.m = b;
  this.left = c;
  this.right = d;
  this.l = f;
  this.q = 0;
  this.k = 32402207
}
q = Y.prototype;
q.F = function(a) {
  var b = this.l;
  return b != l ? b : this.l = a = wd(a)
};
q.B = function(a, b) {
  return a.N(a, b, l)
};
q.r = function(a, b, c) {
  return a.N(a, b, c)
};
q.R = function(a, b, c) {
  return Hd.c(W([this.key, this.m]), b, c)
};
q.call = function() {
  var a = l;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.B(this, c);
      case 3:
        return this.r(this, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.D = function(a, b) {
  return W([this.key, this.m, b])
};
q.Tb = n("key");
q.Ub = n("m");
q.Uc = function(a) {
  return a.Wc(this)
};
q.Lb = function() {
  return new X(this.key, this.m, this.left, this.right, l)
};
q.replace = function(a, b, c, d) {
  return new Y(a, b, c, d, l)
};
q.Tc = function(a) {
  return a.Vc(this)
};
q.Vc = function(a) {
  return new Y(a.key, a.m, this, a.right, l)
};
q.toString = function() {
  return function() {
    switch(arguments.length) {
      case 0:
        return Q.e(F([this], 0))
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.Wc = function(a) {
  return new Y(a.key, a.m, a.left, this, l)
};
q.pa = function() {
  return this
};
q.qa = function(a, b) {
  return ud.a(a, b)
};
q.ra = function(a, b, c) {
  return ud.c(a, b, c)
};
q.z = function() {
  return L.a(this.key, this.m)
};
q.w = p(2);
q.sa = n("m");
q.gb = function(a, b, c) {
  return Qc(W([this.key, this.m]), b, c)
};
q.A = function(a, b) {
  return zd(a, b)
};
q.K = function(a, b) {
  return Jd(W([this.key, this.m]), b)
};
q.I = p(l);
q.S = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.m : l
};
q.N = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.m : c
};
q.M = function() {
  return of
};
Y;
function X(a, b, c, d, f) {
  this.key = a;
  this.m = b;
  this.left = c;
  this.right = d;
  this.l = f;
  this.q = 0;
  this.k = 32402207
}
q = X.prototype;
q.F = function(a) {
  var b = this.l;
  return b != l ? b : this.l = a = wd(a)
};
q.B = function(a, b) {
  return a.N(a, b, l)
};
q.r = function(a, b, c) {
  return a.N(a, b, c)
};
q.R = function(a, b, c) {
  return Hd.c(W([this.key, this.m]), b, c)
};
q.call = function() {
  var a = l;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.B(this, c);
      case 3:
        return this.r(this, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.D = function(a, b) {
  return W([this.key, this.m, b])
};
q.Tb = n("key");
q.Ub = n("m");
q.Uc = function(a) {
  return new X(this.key, this.m, this.left, a, l)
};
q.Lb = function() {
  e(Error("red-black tree invariant violation"))
};
q.replace = function(a, b, c, d) {
  return new X(a, b, c, d, l)
};
q.Tc = function(a) {
  return new X(this.key, this.m, a, this.right, l)
};
q.Vc = function(a) {
  return N(X, this.left) ? new X(this.key, this.m, this.left.pa(), new Y(a.key, a.m, this.right, a.right, l), l) : N(X, this.right) ? new X(this.right.key, this.right.m, new Y(this.key, this.m, this.left, this.right.left, l), new Y(a.key, a.m, this.right.right, a.right, l), l) : new Y(a.key, a.m, this, a.right, l)
};
q.toString = function() {
  return function() {
    switch(arguments.length) {
      case 0:
        return Q.e(F([this], 0))
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.Wc = function(a) {
  return N(X, this.right) ? new X(this.key, this.m, new Y(a.key, a.m, a.left, this.left, l), this.right.pa(), l) : N(X, this.left) ? new X(this.left.key, this.left.m, new Y(a.key, a.m, a.left, this.left.left, l), new Y(this.key, this.m, this.left.right, this.right, l), l) : new Y(a.key, a.m, a.left, this, l)
};
q.pa = function() {
  return new Y(this.key, this.m, this.left, this.right, l)
};
q.qa = function(a, b) {
  return ud.a(a, b)
};
q.ra = function(a, b, c) {
  return ud.c(a, b, c)
};
q.z = function() {
  return L.a(this.key, this.m)
};
q.w = p(2);
q.sa = n("m");
q.gb = function(a, b, c) {
  return Qc(W([this.key, this.m]), b, c)
};
q.A = function(a, b) {
  return zd(a, b)
};
q.K = function(a, b) {
  return Jd(W([this.key, this.m]), b)
};
q.I = p(l);
q.S = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.m : l
};
q.N = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.m : c
};
q.M = function() {
  return of
};
X;
var tg = function sg(b, c, d, f, h) {
  if(c == l) {
    return new X(d, f, l, l, l)
  }
  var i = b.a ? b.a(d, c.key) : b.call(l, d, c.key);
  if(0 === i) {
    return h[0] = c, l
  }
  if(0 > i) {
    return b = sg(b, c.left, d, f, h), b != l ? c.Tc(b) : l
  }
  b = sg(b, c.right, d, f, h);
  return b != l ? c.Uc(b) : l
}, vg = function ug(b, c) {
  if(b == l) {
    return c
  }
  if(c == l) {
    return b
  }
  if(N(X, b)) {
    if(N(X, c)) {
      var d = ug(b.right, c.left);
      return N(X, d) ? new X(d.key, d.m, new X(b.key, b.m, b.left, d.left, l), new X(c.key, c.m, d.right, c.right, l), l) : new X(b.key, b.m, b.left, new X(c.key, c.m, d, c.right, l), l)
    }
    return new X(b.key, b.m, b.left, ug(b.right, c), l)
  }
  if(N(X, c)) {
    return new X(c.key, c.m, ug(b, c.left), c.right, l)
  }
  d = ug(b.right, c.left);
  return N(X, d) ? new X(d.key, d.m, new Y(b.key, b.m, b.left, d.left, l), new Y(c.key, c.m, d.right, c.right, l), l) : qg(b.key, b.m, b.left, new Y(c.key, c.m, d, c.right, l))
}, xg = function wg(b, c, d, f) {
  if(c != l) {
    var h = b.a ? b.a(d, c.key) : b.call(l, d, c.key);
    if(0 === h) {
      return f[0] = c, vg(c.left, c.right)
    }
    if(0 > h) {
      var i = wg(b, c.left, d, f);
      return function() {
        var b = i != l;
        return b ? b : f[0] != l
      }() ? N(Y, c.left) ? qg(c.key, c.m, i, c.right) : new X(c.key, c.m, i, c.right, l) : l
    }
    var j = wg(b, c.right, d, f);
    return function() {
      var b = j != l;
      return b ? b : f[0] != l
    }() ? N(Y, c.right) ? rg(c.key, c.m, c.left, j) : new X(c.key, c.m, c.left, j, l) : l
  }
  return l
}, zg = function yg(b, c, d, f) {
  var h = c.key, i = b.a ? b.a(d, h) : b.call(l, d, h);
  return 0 === i ? c.replace(h, f, c.left, c.right) : 0 > i ? c.replace(h, c.m, yg(b, c.left, d, f), c.right) : c.replace(h, c.m, c.left, yg(b, c.right, d, f))
};
g;
function Ag(a, b, c, d, f) {
  this.fa = a;
  this.Xa = b;
  this.j = c;
  this.h = d;
  this.l = f;
  this.q = 0;
  this.k = 418776847
}
q = Ag.prototype;
q.F = function(a) {
  var b = this.l;
  return b != l ? b : this.l = a = ke(a)
};
q.B = function(a, b) {
  return a.r(a, b, l)
};
q.r = function(a, b, c) {
  a = Bg(a, b);
  return a != l ? a.m : c
};
q.R = function(a, b, c) {
  var d = [l], f = tg(this.fa, this.Xa, b, c, d);
  return f == l ? (d = T.a(d, 0), K.a(c, d.m) ? a : new Ag(this.fa, zg(this.fa, this.Xa, b, c), this.j, this.h, l)) : new Ag(this.fa, f.pa(), this.j + 1, this.h, l)
};
q.ab = function(a, b) {
  return Bg(a, b) != l
};
q.call = function() {
  var a = l;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.B(this, c);
      case 3:
        return this.r(this, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.D = function(a, b) {
  return Rd(b) ? a.R(a, A.a(b, 0), A.a(b, 1)) : de.c(Ac, a, b)
};
q.yb = function() {
  return 0 < this.j ? new ng(l, mg(this.Xa, l, m), m, this.j, l) : l
};
q.toString = function() {
  return Q.e(F([this], 0))
};
function Bg(a, b) {
  for(var c = a.Xa;;) {
    if(c != l) {
      var d = a.fa.a ? a.fa.a(b, c.key) : a.fa.call(l, b, c.key);
      if(0 === d) {
        return c
      }
      c = 0 > d ? c.left : c.right
    }else {
      return l
    }
  }
}
q.z = function() {
  return 0 < this.j ? new ng(l, mg(this.Xa, l, k), k, this.j, l) : l
};
q.w = n("j");
q.A = function(a, b) {
  return Df(a, b)
};
q.K = function(a, b) {
  return new Ag(this.fa, this.Xa, this.j, b, this.l)
};
q.I = n("h");
q.M = function() {
  return Tc(Cg, this.h)
};
q.cb = function(a, b) {
  var c = [l], d = xg(this.fa, this.Xa, b, c);
  return d == l ? T.a(c, 0) == l ? a : new Ag(this.fa, l, 0, this.h, l) : new Ag(this.fa, d.pa(), this.j - 1, this.h, l)
};
Ag;
var Cg = new Ag(be, l, 0, l, 0), sd = function() {
  function a(a) {
    var d = l;
    ea(a) && (d = F(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    for(var a = R(a), b = hd(Hf);;) {
      if(a) {
        var f = H(H(a)), b = Fe(b, I(a), Bd(a)), a = f
      }else {
        return jd(b)
      }
    }
  }
  a.o = 0;
  a.n = function(a) {
    a = R(a);
    return b(a)
  };
  a.e = b;
  return a
}(), Dg = function() {
  function a(a) {
    var d = l;
    ea(a) && (d = F(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    for(var a = R(a), b = Cg;;) {
      if(a) {
        var f = H(H(a)), b = Hd.c(b, I(a), Bd(a)), a = f
      }else {
        return b
      }
    }
  }
  a.o = 0;
  a.n = function(a) {
    a = R(a);
    return b(a)
  };
  a.e = b;
  return a
}();
function Eg(a) {
  return Lc(a)
}
var Fg = function() {
  function a(a) {
    var d = l;
    ea(a) && (d = F(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    return v(Ke(Le, a)) ? de.a(function(a, b) {
      return Ed.a(v(a) ? a : Lf, b)
    }, a) : l
  }
  a.o = 0;
  a.n = function(a) {
    a = R(a);
    return b(a)
  };
  a.e = b;
  return a
}();
g;
function Gg(a, b, c) {
  this.h = a;
  this.Db = b;
  this.l = c;
  this.q = 1;
  this.k = 15077647
}
q = Gg.prototype;
q.bb = function() {
  return new Hg(hd(this.Db))
};
q.F = function(a) {
  var b = this.l;
  return b != l ? b : this.l = a = le(a)
};
q.B = function(a, b) {
  return a.r(a, b, l)
};
q.r = function(a, b, c) {
  return v(Gc(this.Db, b)) ? b : c
};
q.call = function() {
  var a = l;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.B(this, c);
      case 3:
        return this.r(this, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.D = function(a, b) {
  return new Gg(this.h, Hd.c(this.Db, b, l), l)
};
q.toString = function() {
  return Q.e(F([this], 0))
};
q.z = function() {
  return R(Me.a(I, this.Db))
};
q.w = function(a) {
  return S(R(a))
};
q.A = function(a, b) {
  var c = Pd(b);
  return c ? (c = S(a) === S(b)) ? Je(function(b) {
    return ae(a, b)
  }, b) : c : c
};
q.K = function(a, b) {
  return new Gg(b, this.Db, this.l)
};
q.I = n("h");
q.M = function() {
  return Tc(Ig, this.h)
};
Gg;
var Ig = new Gg(l, sd(), 0);
function Hg(a) {
  this.Wa = a;
  this.k = 259;
  this.q = 34
}
q = Hg.prototype;
q.call = function() {
  var a = l;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return D.c(this.Wa, c, Vd) === Vd ? l : c;
      case 3:
        return D.c(this.Wa, c, Vd) === Vd ? d : c
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.B = function(a, b) {
  return a.r(a, b, l)
};
q.r = function(a, b, c) {
  return D.c(this.Wa, b, Vd) === Vd ? c : b
};
q.w = function() {
  return S(this.Wa)
};
q.fb = function(a, b) {
  this.Wa = kd(this.Wa, b, l);
  return a
};
q.zb = function() {
  return new Gg(l, jd(this.Wa), l)
};
Hg;
function Jg(a, b, c) {
  this.h = a;
  this.wb = b;
  this.l = c;
  this.q = 0;
  this.k = 417730831
}
q = Jg.prototype;
q.F = function(a) {
  var b = this.l;
  return b != l ? b : this.l = a = le(a)
};
q.B = function(a, b) {
  return a.r(a, b, l)
};
q.r = function(a, b, c) {
  return v(Gc(this.wb, b)) ? b : c
};
q.call = function() {
  var a = l;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.B(this, c);
      case 3:
        return this.r(this, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.D = function(a, b) {
  return new Jg(this.h, Hd.c(this.wb, b, l), l)
};
q.yb = function() {
  return Me.a(Eg, bd(this.wb))
};
q.toString = function() {
  return Q.e(F([this], 0))
};
q.z = function() {
  return R(Me.a(I, this.wb))
};
q.w = function() {
  return S(this.wb)
};
q.A = function(a, b) {
  var c = Pd(b);
  return c ? (c = S(a) === S(b)) ? Je(function(b) {
    return ae(a, b)
  }, b) : c : c
};
q.K = function(a, b) {
  return new Jg(b, this.wb, this.l)
};
q.I = n("h");
q.M = function() {
  return Tc(Kg, this.h)
};
Jg;
var Kg = new Jg(l, Dg(), 0);
function Lg(a) {
  for(var b = R(a), c = hd(Ig);;) {
    if(R(b)) {
      a = H(b), b = I(b), c = id(c, b), b = a
    }else {
      return jd(c)
    }
  }
}
function Mg(a) {
  if(Yd(a)) {
    return a
  }
  var b = Zd(a);
  if(b ? b : $d(a)) {
    return b = a.lastIndexOf("/"), 0 > b ? ie.a(a, 2) : ie.a(a, b + 1)
  }
  e(Error([U("Doesn't support name: "), U(a)].join("")))
}
function Ng(a) {
  var b = Zd(a);
  if(b ? b : $d(a)) {
    return b = a.lastIndexOf("/"), -1 < b ? ie.c(a, 2, b) : l
  }
  e(Error([U("Doesn't support namespace: "), U(a)].join("")))
}
var Pg = function Og(b, c) {
  return new V(l, m, function() {
    var d = R(c);
    return d ? v(b.b ? b.b(I(d)) : b.call(l, I(d))) ? O(I(d), Og(b, J(d))) : l : l
  }, l)
};
function Qg(a, b, c, d, f) {
  this.h = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.l = f;
  this.q = 0;
  this.k = 32375006
}
q = Qg.prototype;
q.F = function(a) {
  var b = this.l;
  return b != l ? b : this.l = a = wd(a)
};
q.Ea = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new Qg(this.h, this.start + this.step, this.end, this.step, l) : l : this.start + this.step > this.end ? new Qg(this.h, this.start + this.step, this.end, this.step, l) : l
};
q.D = function(a, b) {
  return O(b, a)
};
q.toString = function() {
  return Q.e(F([this], 0))
};
q.qa = function(a, b) {
  return ud.a(a, b)
};
q.ra = function(a, b, c) {
  return ud.c(a, b, c)
};
q.z = function(a) {
  return 0 < this.step ? this.start < this.end ? a : l : this.start > this.end ? a : l
};
q.w = function(a) {
  return Dd(a.z(a)) ? 0 : Math.ceil((this.end - this.start) / this.step)
};
q.$ = n("start");
q.X = function(a) {
  return a.z(a) != l ? new Qg(this.h, this.start + this.step, this.end, this.step, l) : P
};
q.A = function(a, b) {
  return zd(a, b)
};
q.K = function(a, b) {
  return new Qg(b, this.start, this.end, this.step, this.l)
};
q.I = n("h");
q.S = function(a, b) {
  if(b < a.w(a)) {
    return this.start + b * this.step
  }
  var c = this.start > this.end;
  if(c ? 0 === this.step : c) {
    return this.start
  }
  e(Error("Index out of bounds"))
};
q.N = function(a, b, c) {
  c = b < a.w(a) ? this.start + b * this.step : ((a = this.start > this.end) ? 0 === this.step : a) ? this.start : c;
  return c
};
q.M = function() {
  return Tc(P, this.h)
};
Qg;
var Rg = function() {
  function a(a, b, c) {
    return new Qg(l, a, b, c, l)
  }
  function b(a, b) {
    return f.c(a, b, 1)
  }
  function c(a) {
    return f.c(0, a, 1)
  }
  function d() {
    return f.c(0, Number.MAX_VALUE, 1)
  }
  var f = l, f = function(f, i, j) {
    switch(arguments.length) {
      case 0:
        return d.call(this);
      case 1:
        return c.call(this, f);
      case 2:
        return b.call(this, f, i);
      case 3:
        return a.call(this, f, i, j)
    }
    e("Invalid arity: " + arguments.length)
  };
  f.Q = d;
  f.b = c;
  f.a = b;
  f.c = a;
  return f
}(), Sg = function() {
  function a(a, b) {
    for(;;) {
      var c = R(b);
      if(v(c ? 0 < a : c)) {
        var c = a - 1, i = H(b), a = c, b = i
      }else {
        return l
      }
    }
  }
  function b(a) {
    for(;;) {
      if(R(a)) {
        a = H(a)
      }else {
        return l
      }
    }
  }
  var c = l, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.b = b;
  c.a = a;
  return c
}(), Tg = function() {
  function a(a, b) {
    Sg.a(a, b);
    return b
  }
  function b(a) {
    Sg.b(a);
    return a
  }
  var c = l, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.b = b;
  c.a = a;
  return c
}();
function Ug(a, b) {
  var c = a.exec(b);
  return c == l ? l : 1 === S(c) ? I(c) : qf(c)
}
function Z(a, b, c, d, f, h) {
  return Be.e(W([b]), Ve(Ue(W([c]), Me.a(function(b) {
    return a.a ? a.a(b, f) : a.call(l, b, f)
  }, h))), F([W([d])], 0))
}
var $ = function Vg(b, c) {
  return b == l ? L.b("nil") : g === b ? L.b("#<undefined>") : Be.a(v(function() {
    var d = D.c(c, "\ufdd0'meta", l);
    return v(d) ? (d = b ? ((d = b.k & 131072) ? d : b.Gd) ? k : b.k ? m : w(Rc, b) : w(Rc, b), v(d) ? Kd(b) : d) : d
  }()) ? Be.e(W(["^"]), Vg(Kd(b), c), F([W([" "])], 0)) : l, function() {
    var c = b != l;
    return c ? b.mf : c
  }() ? b.lf(b) : function() {
    var c;
    c = b ? ((c = b.k & 536870912) ? c : b.J) ? k : b.k ? m : w(cd, b) : w(cd, b);
    return c
  }() ? dd(b, c) : v(b instanceof RegExp) ? L.c('#"', b.source, '"') : L.c("#<", "" + U(b), ">"))
}, Q = function() {
  function a(a) {
    var d = l;
    ea(a) && (d = F(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    var b = Mf(["\ufdd0'flush-on-newline", "\ufdd0'readably", "\ufdd0'meta", "\ufdd0'dup"], {"\ufdd0'flush-on-newline":k, "\ufdd0'readably":k, "\ufdd0'meta":m, "\ufdd0'dup":m}), f = I(a), h = new uc;
    if(a = R(a)) {
      for(var i = I(a);;) {
        i !== f && h.append(" ");
        var j = R($(i, b));
        if(j) {
          for(i = I(j);;) {
            if(h.append(i), i = H(j)) {
              j = i, i = I(j)
            }else {
              break
            }
          }
        }
        if(a = H(a)) {
          i = a, a = I(i), j = i, i = a, a = j
        }else {
          break
        }
      }
    }
    return"" + U(h)
  }
  a.o = 0;
  a.n = function(a) {
    a = R(a);
    return b(a)
  };
  a.e = b;
  return a
}();
Nf.prototype.J = k;
Nf.prototype.C = function(a, b) {
  return Z(function(a) {
    return Z($, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
cd.number = k;
dd.number = function(a) {
  return L.b("" + U(a))
};
vd.prototype.J = k;
vd.prototype.C = function(a, b) {
  return Z($, "(", " ", ")", b, a)
};
tf.prototype.J = k;
tf.prototype.C = function(a, b) {
  return Z($, "[", " ", "]", b, a)
};
ve.prototype.J = k;
ve.prototype.C = function(a, b) {
  return Z($, "(", " ", ")", b, a)
};
Ag.prototype.J = k;
Ag.prototype.C = function(a, b) {
  return Z(function(a) {
    return Z($, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
Qf.prototype.J = k;
Qf.prototype.C = function(a, b) {
  return Z(function(a) {
    return Z($, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
zf.prototype.J = k;
zf.prototype.C = function(a, b) {
  return Z($, "#queue [", " ", "]", b, R(a))
};
V.prototype.J = k;
V.prototype.C = function(a, b) {
  return Z($, "(", " ", ")", b, a)
};
xd.prototype.J = k;
xd.prototype.C = function(a, b) {
  return Z($, "(", " ", ")", b, a)
};
Jg.prototype.J = k;
Jg.prototype.C = function(a, b) {
  return Z($, "#{", " ", "}", b, a)
};
cd["boolean"] = k;
dd["boolean"] = function(a) {
  return L.b("" + U(a))
};
cd.string = k;
dd.string = function(a, b) {
  return Zd(a) ? L.b([U(":"), U(function() {
    var b = Ng(a);
    return v(b) ? [U(b), U("/")].join("") : l
  }()), U(Mg(a))].join("")) : $d(a) ? L.b([U(function() {
    var b = Ng(a);
    return v(b) ? [U(b), U("/")].join("") : l
  }()), U(Mg(a))].join("")) : L.b(v((new qe("\ufdd0'readably")).call(l, b)) ? La(a) : a)
};
hg.prototype.J = k;
hg.prototype.C = function(a, b) {
  return Z($, "(", " ", ")", b, a)
};
X.prototype.J = k;
X.prototype.C = function(a, b) {
  return Z($, "[", " ", "]", b, a)
};
sf.prototype.J = k;
sf.prototype.C = function(a, b) {
  return Z($, "(", " ", ")", b, a)
};
jg.prototype.J = k;
jg.prototype.C = function(a, b) {
  return Z(function(a) {
    return Z($, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
af.prototype.J = k;
af.prototype.C = function(a, b) {
  return Z($, "[", " ", "]", b, a)
};
Gg.prototype.J = k;
Gg.prototype.C = function(a, b) {
  return Z($, "#{", " ", "}", b, a)
};
lf.prototype.J = k;
lf.prototype.C = function(a, b) {
  return Z($, "[", " ", "]", b, a)
};
me.prototype.J = k;
me.prototype.C = function(a, b) {
  return Z($, "(", " ", ")", b, a)
};
cd.array = k;
dd.array = function(a, b) {
  return Z($, "#<Array [", ", ", "]>", b, a)
};
cd["function"] = k;
dd["function"] = function(a) {
  return L.c("#<", "" + U(a), ">")
};
ne.prototype.J = k;
ne.prototype.C = function() {
  return L.b("()")
};
Y.prototype.J = k;
Y.prototype.C = function(a, b) {
  return Z($, "[", " ", "]", b, a)
};
Date.prototype.J = k;
Date.prototype.C = function(a) {
  function b(a, b) {
    for(var f = "" + U(a);;) {
      if(S(f) < b) {
        f = [U("0"), U(f)].join("")
      }else {
        return f
      }
    }
  }
  return L.b([U('#inst "'), U(a.getUTCFullYear()), U("-"), U(b.a ? b.a(a.getUTCMonth() + 1, 2) : b.call(l, a.getUTCMonth() + 1, 2)), U("-"), U(b.a ? b.a(a.getUTCDate(), 2) : b.call(l, a.getUTCDate(), 2)), U("T"), U(b.a ? b.a(a.getUTCHours(), 2) : b.call(l, a.getUTCHours(), 2)), U(":"), U(b.a ? b.a(a.getUTCMinutes(), 2) : b.call(l, a.getUTCMinutes(), 2)), U(":"), U(b.a ? b.a(a.getUTCSeconds(), 2) : b.call(l, a.getUTCSeconds(), 2)), U("."), U(b.a ? b.a(a.getUTCMilliseconds(), 3) : b.call(l, a.getUTCMilliseconds(), 
  3)), U("-"), U('00:00"')].join(""))
};
pe.prototype.J = k;
pe.prototype.C = function(a, b) {
  return Z($, "(", " ", ")", b, a)
};
Qg.prototype.J = k;
Qg.prototype.C = function(a, b) {
  return Z($, "(", " ", ")", b, a)
};
ig.prototype.J = k;
ig.prototype.C = function(a, b) {
  return Z($, "(", " ", ")", b, a)
};
Jf.prototype.J = k;
Jf.prototype.C = function(a, b) {
  return Z(function(a) {
    return Z($, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
ng.prototype.J = k;
ng.prototype.C = function(a, b) {
  return Z($, "(", " ", ")", b, a)
};
lf.prototype.Ed = k;
lf.prototype.bd = function(a, b) {
  return ce.a(a, b)
};
function Wg(a, b, c, d) {
  this.state = a;
  this.h = b;
  this.ee = c;
  this.Sc = d;
  this.q = 0;
  this.k = 2690809856
}
q = Wg.prototype;
q.F = function(a) {
  return la(a)
};
q.fd = function(a, b, c) {
  var d = R(this.Sc);
  if(d) {
    var f = I(d);
    T.c(f, 0, l);
    for(T.c(f, 1, l);;) {
      var h = f, f = T.c(h, 0, l), h = T.c(h, 1, l);
      h.p ? h.p(f, a, b, c) : h.call(l, f, a, b, c);
      if(d = H(d)) {
        f = d, d = I(f), h = f, f = d, d = h
      }else {
        return l
      }
    }
  }else {
    return l
  }
};
q.ed = function(a, b, c) {
  return a.Sc = Hd.c(this.Sc, b, c)
};
q.C = function(a, b) {
  return Be.e(W(["#<Atom: "]), dd(this.state, b), F([">"], 0))
};
q.I = n("h");
q.Sb = n("state");
q.A = function(a, b) {
  return a === b
};
Wg;
var Xg = function() {
  function a(a) {
    return new Wg(a, l, l, l)
  }
  var b = l, c = function() {
    function a(c, d) {
      var j = l;
      ea(d) && (j = F(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, j)
    }
    function b(a, c) {
      var d = Wd(c) ? He.a(sd, c) : c, f = D.c(d, "\ufdd0'validator", l), d = D.c(d, "\ufdd0'meta", l);
      return new Wg(a, d, f, l)
    }
    a.o = 1;
    a.n = function(a) {
      var c = I(a), a = J(a);
      return b(c, a)
    };
    a.e = b;
    return a
  }(), b = function(b, f) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, F(arguments, 1))
    }
    e("Invalid arity: " + arguments.length)
  };
  b.o = 1;
  b.n = c.n;
  b.b = a;
  b.e = c.e;
  return b
}();
function Yg(a, b) {
  var c = a.ee;
  v(c) && !v(c.b ? c.b(b) : c.call(l, b)) && e(Error([U("Assert failed: "), U("Validator rejected reference state"), U("\n"), U(Q.e(F([Jd(L("\ufdd1'validate", "\ufdd1'new-value"), sd("\ufdd0'line", 6394))], 0)))].join("")));
  c = a.state;
  a.state = b;
  ed(a, c, b);
  return b
}
var Zg = function() {
  function a(a, b, c, d, f) {
    return Yg(a, b.p ? b.p(a.state, c, d, f) : b.call(l, a.state, c, d, f))
  }
  function b(a, b, c, d) {
    return Yg(a, b.c ? b.c(a.state, c, d) : b.call(l, a.state, c, d))
  }
  function c(a, b, c) {
    return Yg(a, b.a ? b.a(a.state, c) : b.call(l, a.state, c))
  }
  function d(a, b) {
    return Yg(a, b.b ? b.b(a.state) : b.call(l, a.state))
  }
  var f = l, h = function() {
    function a(c, d, f, h, i, G) {
      var M = l;
      ea(G) && (M = F(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, f, h, i, M)
    }
    function b(a, c, d, f, h, i) {
      return Yg(a, He.e(c, a.state, d, f, h, F([i], 0)))
    }
    a.o = 5;
    a.n = function(a) {
      var c = I(a), d = I(H(a)), f = I(H(H(a))), h = I(H(H(H(a)))), i = I(H(H(H(H(a))))), a = J(H(H(H(H(a)))));
      return b(c, d, f, h, i, a)
    };
    a.e = b;
    return a
  }(), f = function(f, j, o, s, x, u) {
    switch(arguments.length) {
      case 2:
        return d.call(this, f, j);
      case 3:
        return c.call(this, f, j, o);
      case 4:
        return b.call(this, f, j, o, s);
      case 5:
        return a.call(this, f, j, o, s, x);
      default:
        return h.e(f, j, o, s, x, F(arguments, 5))
    }
    e("Invalid arity: " + arguments.length)
  };
  f.o = 5;
  f.n = h.n;
  f.a = d;
  f.c = c;
  f.p = b;
  f.ea = a;
  f.e = h.e;
  return f
}();
function $g(a, b) {
  this.state = a;
  this.Ec = b;
  this.q = 0;
  this.k = 1073774592
}
$g.prototype.Sb = function() {
  var a = this;
  return(new qe("\ufdd0'value")).call(l, Zg.a(a.state, function(b) {
    var b = Wd(b) ? He.a(sd, b) : b, c = D.c(b, "\ufdd0'done", l);
    return v(c) ? b : Mf(["\ufdd0'done", "\ufdd0'value"], {"\ufdd0'done":k, "\ufdd0'value":a.Ec.Q ? a.Ec.Q() : a.Ec.call(l)})
  }))
};
$g;
var ah = function() {
  function a(a, d) {
    var f = l;
    ea(d) && (f = F(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, f)
  }
  function b(a, b) {
    var f = Wd(b) ? He.a(sd, b) : b, f = D.c(f, "\ufdd0'keywordize-keys", l), h = v(f) ? je : U, f = function j(a) {
      return Wd(a) ? Tg.b(Me.a(j, a)) : Od(a) ? Ze(yc(a), Me.a(j, a)) : v(fa(a)) ? qf(Me.a(j, a)) : (a == l ? l : a.constructor) === Object ? Ze(Lf, function() {
        var b = function u(b) {
          return new V(l, m, function() {
            for(;;) {
              if(R(b)) {
                var c = I(b);
                return O(W([h.b ? h.b(c) : h.call(l, c), j(a[c])]), u(J(b)))
              }
              return l
            }
          }, l)
        };
        return b.b ? b.b(Td(a)) : b.call(l, Td(a))
      }()) : a
    };
    return f.b ? f.b(a) : f.call(l, a)
  }
  a.o = 1;
  a.n = function(a) {
    var d = I(a), a = J(a);
    return b(d, a)
  };
  a.e = b;
  return a
}(), bh = Xg.b(Mf(["\ufdd0'parents", "\ufdd0'descendants", "\ufdd0'ancestors"], {"\ufdd0'parents":Lf, "\ufdd0'descendants":Lf, "\ufdd0'ancestors":Lf})), ch = function() {
  function a(a, b, h) {
    var i = K.a(b, h);
    if(!i && !(i = ae((new qe("\ufdd0'ancestors")).call(l, a).call(l, b), h)) && (i = Rd(h))) {
      if(i = Rd(b)) {
        if(i = S(h) === S(b)) {
          for(var i = k, j = 0;;) {
            var o = Dd(i);
            if(o ? o : j === S(h)) {
              return i
            }
            i = c.c(a, b.b ? b.b(j) : b.call(l, j), h.b ? h.b(j) : h.call(l, j));
            j += 1
          }
        }else {
          return i
        }
      }else {
        return i
      }
    }else {
      return i
    }
  }
  function b(a, b) {
    return c.c(E(bh), a, b)
  }
  var c = l, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.a = b;
  c.c = a;
  return c
}(), dh = function() {
  function a(a, b) {
    var c = D.c((new qe("\ufdd0'parents")).call(l, a), b, l);
    return R(c) ? c : l
  }
  function b(a) {
    return c.a(E(bh), a)
  }
  var c = l, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.b = b;
  c.a = a;
  return c
}();
function eh(a, b, c, d) {
  Zg.a(a, function() {
    return E(b)
  });
  Zg.a(c, function() {
    return E(d)
  })
}
var gh = function fh(b, c, d) {
  var f = E(d).call(l, b), f = v(v(f) ? f.b ? f.b(c) : f.call(l, c) : f) ? k : l;
  if(v(f)) {
    return f
  }
  f = function() {
    for(var f = dh.b(c);;) {
      if(0 < S(f)) {
        fh(b, I(f), d), f = J(f)
      }else {
        return l
      }
    }
  }();
  if(v(f)) {
    return f
  }
  f = function() {
    for(var f = dh.b(b);;) {
      if(0 < S(f)) {
        fh(I(f), c, d), f = J(f)
      }else {
        return l
      }
    }
  }();
  return v(f) ? f : m
};
function hh(a, b, c) {
  c = gh(a, b, c);
  return v(c) ? c : ch.a(a, b)
}
var jh = function ih(b, c, d, f, h, i, j) {
  var o = de.c(function(d, f) {
    var i = T.c(f, 0, l);
    T.c(f, 1, l);
    if(ch.a(c, i)) {
      var j;
      j = (j = d == l) ? j : hh(i, I(d), h);
      j = v(j) ? f : d;
      v(hh(I(j), i, h)) || e(Error([U("Multiple methods in multimethod '"), U(b), U("' match dispatch value: "), U(c), U(" -> "), U(i), U(" and "), U(I(j)), U(", and neither is preferred")].join("")));
      return j
    }
    return d
  }, l, E(f));
  if(v(o)) {
    if(K.a(E(j), E(d))) {
      return Zg.p(i, Hd, c, Bd(o)), Bd(o)
    }
    eh(i, f, j, d);
    return ih(b, c, d, f, h, i, j)
  }
  return l
};
g;
function kh(a, b) {
  var c;
  if(a ? a.dd : a) {
    c = a.dd(0, b)
  }else {
    var d = kh[r(a)];
    d ? c = d : (d = kh._) ? c = d : e(z("IMultiFn.-get-method", a));
    c = c.call(l, a, b)
  }
  return c
}
function lh(a, b) {
  var c;
  if(a ? a.cd : a) {
    c = a.cd(a, b)
  }else {
    var d = lh[r(a)];
    d ? c = d : (d = lh._) ? c = d : e(z("IMultiFn.-dispatch", a));
    c = c.call(l, a, b)
  }
  return c
}
g;
function mh(a, b, c, d, f, h, i, j) {
  this.name = a;
  this.Kd = b;
  this.Jd = c;
  this.Hc = d;
  this.Lc = f;
  this.Xd = h;
  this.Kc = i;
  this.gc = j;
  this.k = 4194304;
  this.q = 64
}
mh.prototype.F = function(a) {
  return la(a)
};
mh.prototype.dd = function(a, b) {
  K.a(E(this.gc), E(this.Hc)) || eh(this.Kc, this.Lc, this.gc, this.Hc);
  var c = E(this.Kc).call(l, b);
  if(v(c)) {
    return c
  }
  c = jh(this.name, b, this.Hc, this.Lc, this.Xd, this.Kc, this.gc);
  return v(c) ? c : E(this.Lc).call(l, this.Jd)
};
mh.prototype.cd = function(a, b) {
  var c = He.a(this.Kd, b), d = kh(a, c);
  v(d) || e(Error([U("No method in multimethod '"), U(Mg), U("' for dispatch value: "), U(c)].join("")));
  return He.a(d, b)
};
mh;
mh.prototype.call = function() {
  function a(a, b) {
    var f = l;
    ea(b) && (f = F(Array.prototype.slice.call(arguments, 1), 0));
    return lh(this, f)
  }
  function b(a, b) {
    return lh(this, b)
  }
  a.o = 1;
  a.n = function(a) {
    I(a);
    a = J(a);
    return b(0, a)
  };
  a.e = b;
  return a
}();
mh.prototype.apply = function(a, b) {
  return lh(this, b)
};
function nh(a) {
  this.Rc = a;
  this.q = 0;
  this.k = 543162368
}
nh.prototype.F = function(a) {
  return Oa(Q.e(F([a], 0)))
};
nh.prototype.C = function() {
  return L.b([U('#uuid "'), U(this.Rc), U('"')].join(""))
};
nh.prototype.A = function(a, b) {
  return this.Rc === b.Rc
};
nh.prototype.toString = function() {
  return Q.e(F([this], 0))
};
nh;
function oh(a) {
  if("function" == typeof a.Ta) {
    return a.Ta()
  }
  if(ha(a)) {
    return a.split("")
  }
  if(ga(a)) {
    for(var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d])
    }
    return b
  }
  return ac(a)
}
function ph(a, b, c) {
  if("function" == typeof a.forEach) {
    a.forEach(b, c)
  }else {
    if(ga(a) || ha(a)) {
      Va(a, b, c)
    }else {
      var d;
      if("function" == typeof a.nb) {
        d = a.nb()
      }else {
        if("function" != typeof a.Ta) {
          if(ga(a) || ha(a)) {
            d = [];
            for(var f = a.length, h = 0;h < f;h++) {
              d.push(h)
            }
          }else {
            d = bc(a)
          }
        }else {
          d = g
        }
      }
      for(var f = oh(a), h = f.length, i = 0;i < h;i++) {
        b.call(c, f[i], d && d[i], a)
      }
    }
  }
}
;function qh(a, b) {
  this.oa = {};
  this.L = [];
  var c = arguments.length;
  if(1 < c) {
    c % 2 && e(Error("Uneven number of arguments"));
    for(var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1])
    }
  }else {
    if(a) {
      a instanceof qh ? (c = a.nb(), d = a.Ta()) : (c = bc(a), d = ac(a));
      for(var f = 0;f < c.length;f++) {
        this.set(c[f], d[f])
      }
    }
  }
}
q = qh.prototype;
q.G = 0;
q.Ta = function() {
  rh(this);
  for(var a = [], b = 0;b < this.L.length;b++) {
    a.push(this.oa[this.L[b]])
  }
  return a
};
q.nb = function() {
  rh(this);
  return this.L.concat()
};
q.Pa = function(a) {
  return sh(this.oa, a)
};
q.clear = function() {
  this.oa = {};
  this.G = this.L.length = 0
};
q.remove = function(a) {
  return sh(this.oa, a) ? (delete this.oa[a], this.G--, this.L.length > 2 * this.G && rh(this), k) : m
};
function rh(a) {
  if(a.G != a.L.length) {
    for(var b = 0, c = 0;b < a.L.length;) {
      var d = a.L[b];
      sh(a.oa, d) && (a.L[c++] = d);
      b++
    }
    a.L.length = c
  }
  if(a.G != a.L.length) {
    for(var f = {}, c = b = 0;b < a.L.length;) {
      d = a.L[b], sh(f, d) || (a.L[c++] = d, f[d] = 1), b++
    }
    a.L.length = c
  }
}
q.get = function(a, b) {
  return sh(this.oa, a) ? this.oa[a] : b
};
q.set = function(a, b) {
  sh(this.oa, a) || (this.G++, this.L.push(a));
  this.oa[a] = b
};
q.hb = function() {
  return new qh(this)
};
function sh(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
;function th(a) {
  return uh(a || arguments.callee.caller, [])
}
function uh(a, b) {
  var c = [];
  if(0 <= Ua(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && 50 > b.length) {
      c.push(vh(a) + "(");
      for(var d = a.arguments, f = 0;f < d.length;f++) {
        0 < f && c.push(", ");
        var h;
        h = d[f];
        switch(typeof h) {
          case "object":
            h = h ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            h = "" + h;
            break;
          case "boolean":
            h = h ? "true" : "false";
            break;
          case "function":
            h = (h = vh(h)) ? h : "[fn]";
            break;
          default:
            h = typeof h
        }
        40 < h.length && (h = h.substr(0, 40) + "...");
        c.push(h)
      }
      b.push(a);
      c.push(")\n");
      try {
        c.push(uh(a.caller, b))
      }catch(i) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function vh(a) {
  a = "" + a;
  if(!wh[a]) {
    var b = /function ([^\(]+)/.exec(a);
    wh[a] = b ? b[1] : "[Anonymous]"
  }
  return wh[a]
}
var wh = {};
function xh(a, b, c, d, f) {
  this.reset(a, b, c, d, f)
}
xh.prototype.Dc = l;
xh.prototype.Cc = l;
var yh = 0;
xh.prototype.reset = function(a, b, c, d, f) {
  "number" == typeof f || yh++;
  this.zd = d || ta();
  this.Ua = a;
  this.qd = b;
  this.Rd = c;
  delete this.Dc;
  delete this.Cc
};
xh.prototype.vd = function(a) {
  this.Ua = a
};
function zh(a) {
  this.Sd = a
}
zh.prototype.ac = l;
zh.prototype.Ua = l;
zh.prototype.hc = l;
zh.prototype.Cb = l;
function Ah(a, b) {
  this.name = a;
  this.value = b
}
Ah.prototype.toString = n("name");
var Bh = new Ah("SHOUT", 1200), Ch = new Ah("SEVERE", 1E3), Dh = new Ah("WARNING", 900), Eh = new Ah("INFO", 800), Fh = new Ah("CONFIG", 700);
q = zh.prototype;
q.getParent = n("ac");
q.vd = function(a) {
  this.Ua = a
};
function Gh(a) {
  if(a.Ua) {
    return a.Ua
  }
  if(a.ac) {
    return Gh(a.ac)
  }
  Sa("Root logger has no level set.");
  return l
}
q.log = function(a, b, c) {
  if(a.value >= Gh(this).value) {
    a = this.Md(a, b, c);
    ba.console && ba.console.markTimeline && ba.console.markTimeline("log:" + a.qd);
    for(b = this;b;) {
      var c = b, d = a;
      if(c.Cb) {
        for(var f = 0, h = g;h = c.Cb[f];f++) {
          h(d)
        }
      }
      b = b.getParent()
    }
  }
};
q.Md = function(a, b, c) {
  var d = new xh(a, "" + b, this.Sd);
  if(c) {
    d.Dc = c;
    var f;
    var h = arguments.callee.caller;
    try {
      var i;
      var j = ca("window.location.href");
      if(ha(c)) {
        i = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:j, stack:"Not available"}
      }else {
        var o, s, x = m;
        try {
          o = c.lineNumber || c.of || "Not available"
        }catch(u) {
          o = "Not available", x = k
        }
        try {
          s = c.fileName || c.filename || c.sourceURL || j
        }catch(y) {
          s = "Not available", x = k
        }
        i = x || !c.lineNumber || !c.fileName || !c.stack ? {message:c.message, name:c.name, lineNumber:o, fileName:s, stack:c.stack || "Not available"} : c
      }
      f = "Message: " + Da(i.message) + '\nUrl: <a href="view-source:' + i.fileName + '" target="_new">' + i.fileName + "</a>\nLine: " + i.lineNumber + "\n\nBrowser stack:\n" + Da(i.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + Da(th(h) + "-> ")
    }catch(G) {
      f = "Exception trying to expose exception! You win, we lose. " + G
    }
    d.Cc = f
  }
  return d
};
q.info = function(a, b) {
  this.log(Eh, a, b)
};
var Hh = {}, Ih = l;
function Jh() {
  Ih || (Ih = new zh(""), Hh[""] = Ih, Ih.vd(Fh))
}
function Kh(a) {
  Jh();
  var b;
  if(!(b = Hh[a])) {
    b = new zh(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = Kh(a.substr(0, c));
    c.hc || (c.hc = {});
    c.hc[d] = b;
    b.ac = c;
    Hh[a] = b
  }
  return b
}
;var Lh = !t || Ab("9");
!nb && !t || t && Ab("9") || nb && Ab("1.9.1");
t && Ab("9");
function Mh(a) {
  return ha(a) ? document.getElementById(a) : a
}
function Nh(a, b, c) {
  var d = document, c = c || d, a = a && "*" != a ? a.toUpperCase() : "";
  if(c.querySelectorAll && (c.querySelector && (!ob || "CSS1Compat" == document.compatMode || Ab("528"))) && (a || b)) {
    return c.querySelectorAll(a + (b ? "." + b : ""))
  }
  if(b && c.getElementsByClassName) {
    c = c.getElementsByClassName(b);
    if(a) {
      for(var d = {}, f = 0, h = 0, i;i = c[h];h++) {
        a == i.nodeName && (d[f++] = i)
      }
      d.length = f;
      return d
    }
    return c
  }
  c = c.getElementsByTagName(a || "*");
  if(b) {
    d = {};
    for(h = f = 0;i = c[h];h++) {
      a = i.className, "function" == typeof a.split && 0 <= Ua(a.split(/\s+/), b) && (d[f++] = i)
    }
    d.length = f;
    return d
  }
  return c
}
function Oh(a, b) {
  $b(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in Ph ? a.setAttribute(Ph[d], b) : a[d] = b
  })
}
var Ph = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function Qh(a, b, c) {
  var d = arguments, f = document, h = d[0], i = d[1];
  if(!Lh && i && (i.name || i.type)) {
    h = ["<", h];
    i.name && h.push(' name="', Da(i.name), '"');
    if(i.type) {
      h.push(' type="', Da(i.type), '"');
      var j = {};
      ec(j, i);
      i = j;
      delete i.type
    }
    h.push(">");
    h = h.join("")
  }
  h = f.createElement(h);
  i && (ha(i) ? h.className = i : fa(i) ? cb.apply(l, [h].concat(i)) : Oh(h, i));
  2 < d.length && Rh(f, h, d);
  return h
}
function Rh(a, b, c) {
  function d(c) {
    c && b.appendChild(ha(c) ? a.createTextNode(c) : c)
  }
  for(var f = 2;f < c.length;f++) {
    var h = c[f];
    ga(h) && !(ka(h) && 0 < h.nodeType) ? Va(Sh(h) ? Xa(h) : h, d) : d(h)
  }
}
function Th(a) {
  var b = document, c = b.createElement("div");
  t ? (c.innerHTML = "<br>" + a, c.removeChild(c.firstChild)) : c.innerHTML = a;
  if(1 == c.childNodes.length) {
    return c.removeChild(c.firstChild)
  }
  for(a = b.createDocumentFragment();c.firstChild;) {
    a.appendChild(c.firstChild)
  }
  return a
}
function Uh(a) {
  if("outerHTML" in a) {
    return a.outerHTML
  }
  var b = (9 == a.nodeType ? a : a.ownerDocument || a.document).createElement("div");
  b.appendChild(a.cloneNode(k));
  return b.innerHTML
}
function Sh(a) {
  if(a && "number" == typeof a.length) {
    if(ka(a)) {
      return"function" == typeof a.item || "string" == typeof a.item
    }
    if(ia(a)) {
      return"function" == typeof a.item
    }
  }
  return m
}
;function Vh(a, b, c, d, f) {
  if(!t && (!ob || !Ab("525"))) {
    return k
  }
  if(qb && f) {
    return Wh(a)
  }
  if(f && !d || !c && (17 == b || 18 == b) || t && d && b == a) {
    return m
  }
  switch(a) {
    case 13:
      return k;
    case 27:
      return!ob
  }
  return Wh(a)
}
function Wh(a) {
  if(48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || ob && 0 == a) {
    return k
  }
  switch(a) {
    case 32:
    ;
    case 63:
    ;
    case 107:
    ;
    case 109:
    ;
    case 110:
    ;
    case 111:
    ;
    case 186:
    ;
    case 189:
    ;
    case 187:
    ;
    case 188:
    ;
    case 190:
    ;
    case 191:
    ;
    case 192:
    ;
    case 222:
    ;
    case 219:
    ;
    case 220:
    ;
    case 221:
      return k;
    default:
      return m
  }
}
;var Xh = {Le:"navigate"};
function Yh(a, b) {
  Db.call(this, "navigate");
  this.Ad = a;
  this.md = b
}
va(Yh, Db);
function Zh(a, b) {
  this.P = a || window;
  this.cc = b || l;
  jc(this.P, "popstate", this.$b, m, this);
  jc(this.P, "hashchange", this.$b, m, this)
}
va(Zh, qc);
function $h() {
  var a = window;
  return!(!a.history || !a.history.pushState)
}
q = Zh.prototype;
q.va = m;
q.Qc = k;
q.bc = "/";
q.ub = function(a) {
  a != this.va && (this.va = a) && this.dispatchEvent(new Yh(this.ka(), m))
};
q.ka = function() {
  if(this.Qc) {
    var a = this.P.location.href, b = a.indexOf("#");
    return 0 > b ? "" : a.substring(b + 1)
  }
  return this.cc ? this.cc.pf(this.bc, this.P.location) : this.P.location.pathname.substr(this.bc.length)
};
q.Oc = function(a, b) {
  a != this.ka() && (this.P.history.pushState(l, b || this.P.document.title || "", this.Qc ? "#" + a : this.cc ? this.cc.nf(a, this.bc, this.P.location) : this.bc + a + this.P.location.search), this.dispatchEvent(new Yh(a, m)))
};
q.T = function() {
  kc(this.P, "popstate", this.$b, m, this);
  this.Qc && kc(this.P, "hashchange", this.$b, m, this)
};
q.$b = function() {
  this.va && this.dispatchEvent(new Yh(this.ka(), k))
};
function ai(a) {
  this.Pd = a
}
va(ai, eb);
var bi = new Jb(0, 100), ci = [];
function di(a, b, c, d) {
  fa(c) || (ci[0] = c, c = ci);
  for(var f = 0;f < c.length;f++) {
    var h = a, i = jc(b, c[f], d || a, m, a.Pd || a);
    h.L ? h.L[i] = k : h.Jb ? (h.L = Kb(bi), h.L[h.Jb] = k, h.Jb = l, h.L[i] = k) : h.Jb = i
  }
}
function ei(a) {
  if(a.L) {
    for(var b in a.L) {
      lc(b), delete a.L[b]
    }
    Lb(bi, a.L);
    a.L = l
  }else {
    a.Jb && lc(a.Jb)
  }
}
ai.prototype.T = function() {
  ai.Ca.T.call(this);
  ei(this)
};
ai.prototype.handleEvent = function() {
  e(Error("EventHandler.handleEvent not implemented"))
};
function fi(a, b, c, d) {
  a && !b && e(Error("Can't use invisible history without providing a blank page."));
  var f;
  c ? f = c : (f = "history_state" + gi, document.write(xa(hi, f, f)), f = Mh(f));
  this.Eb = f;
  this.P = c ? (9 == c.nodeType ? c : c.ownerDocument || c.document) ? (9 == c.nodeType ? c : c.ownerDocument || c.document).parentWindow || (9 == c.nodeType ? c : c.ownerDocument || c.document).defaultView : window : window;
  this.Dd = this.P.location.href.split("#")[0] + "#";
  this.Wb = b;
  t && !b && (this.Wb = "https" == window.location.protocol ? "https:///" : 'javascript:""');
  this.V = new rc(ii);
  this.Ya = !a;
  this.Ra = new ai(this);
  if(a || t && !ji) {
    d ? a = d : (a = "history_iframe" + gi, b = this.Wb ? 'src="' + Da(this.Wb) + '"' : "", document.write(xa(ki, a, b)), a = Mh(a)), this.ma = a, this.Bd = k
  }
  t && !ji && (di(this.Ra, this.P, "load", this.Td), this.wd = this.Bc = m);
  this.Ya ? li(this, this.ka(), k) : mi(this, this.Eb.value);
  gi++
}
va(fi, qc);
fi.prototype.va = m;
fi.prototype.qb = m;
fi.prototype.ob = l;
var ji = t && 8 <= document.documentMode || nb && Ab("1.9.2") || ob && Ab("532.1");
q = fi.prototype;
q.pb = l;
q.T = function() {
  fi.Ca.T.call(this);
  this.Ra.ib();
  this.ub(m)
};
q.ub = function(a) {
  if(a != this.va) {
    if(t && !ji && !this.Bc) {
      this.wd = a
    }else {
      if(a) {
        if(mb ? di(this.Ra, this.P.document, ni, this.Wd) : nb && di(this.Ra, this.P, "pageshow", this.Vd), ji && this.Ya) {
          di(this.Ra, this.P, "hashchange", this.Ud), this.va = k, this.dispatchEvent(new Yh(this.ka(), m))
        }else {
          if(!t || this.Bc) {
            di(this.Ra, this.V, tc, ra(this.Yc, this, k)), this.va = k, t || (this.ob = this.ka()), this.V.start(), this.dispatchEvent(new Yh(this.ka(), m))
          }
        }
      }else {
        this.va = m, ei(this.Ra), this.V.stop()
      }
    }
  }
};
q.Td = function() {
  this.Bc = k;
  this.Eb.value && mi(this, this.Eb.value, k);
  this.ub(this.wd)
};
q.Vd = function(a) {
  a.Ga.persisted && (this.ub(m), this.ub(k))
};
q.Ud = function() {
  var a = oi(this.P);
  a != this.ob && pi(this, a, k)
};
q.ka = function() {
  return this.pb != l ? this.pb : this.Ya ? oi(this.P) : qi(this) || ""
};
q.Oc = function(a, b) {
  this.ka() != a && (this.Ya ? (li(this, a, m), ji || t && mi(this, a, m, b), this.va && this.Yc(m)) : (mi(this, a, m), this.pb = this.ob = this.Eb.value = a, this.dispatchEvent(new Yh(a, m))))
};
function oi(a) {
  var a = a.location.href, b = a.indexOf("#");
  return 0 > b ? "" : a.substring(b + 1)
}
function li(a, b, c) {
  b = a.Dd + (b || "");
  a = a.P.location;
  b != a.href && (c ? a.replace(b) : a.href = b)
}
function mi(a, b, c, d) {
  if(a.Bd || b != qi(a)) {
    if(a.Bd = m, b = Ba(b), t) {
      var f = ob ? a.ma.document || a.ma.contentWindow.document : a.ma.contentDocument || a.ma.contentWindow.document;
      f.open("text/html", c ? "replace" : g);
      f.write(xa(ri, Da(d || a.P.document.title), b));
      f.close()
    }else {
      if(b = a.Wb + "#" + b, a = a.ma.contentWindow) {
        c ? a.location.replace(b) : a.location.href = b
      }
    }
  }
}
function qi(a) {
  if(t) {
    return a = ob ? a.ma.document || a.ma.contentWindow.document : a.ma.contentDocument || a.ma.contentWindow.document, a.body ? Ca(a.body.innerHTML) : l
  }
  var b = a.ma.contentWindow;
  if(b) {
    var c;
    try {
      c = Ca(oi(b))
    }catch(d) {
      return a.qb || (a.qb != k && a.V.setInterval(si), a.qb = k), l
    }
    a.qb && (a.qb != m && a.V.setInterval(ii), a.qb = m);
    return c || l
  }
  return l
}
q.Yc = function(a) {
  if(this.Ya) {
    var b = oi(this.P);
    b != this.ob && pi(this, b, a)
  }
  if(!this.Ya || t && !ji) {
    if(b = qi(this) || "", this.pb == l || b == this.pb) {
      this.pb = l, b != this.ob && pi(this, b, a)
    }
  }
};
function pi(a, b, c) {
  a.ob = a.Eb.value = b;
  a.Ya ? (t && !ji && mi(a, b), li(a, b)) : mi(a, b);
  a.dispatchEvent(new Yh(a.ka(), c))
}
q.Wd = function() {
  this.V.stop();
  this.V.start()
};
var ni = ["mousedown", "keydown", "mousemove"], ri = "<title>%s</title><body>%s</body>", ki = '<iframe id="%s" style="display:none" %s></iframe>', hi = '<input type="text" name="%s" id="%s" style="display:none" />', gi = 0, ii = 150, si = 1E4;
g;
function ti(a) {
  if(a ? a.Vb : a) {
    a = a.Vb(a)
  }else {
    var b;
    var c = ti[r(a)];
    c ? b = c : (c = ti._) ? b = c : e(z("EventType.event-types", a));
    a = b.call(l, a)
  }
  return a
}
g;
Element.prototype.Vb = function() {
  return Ze(Lf, Me.a(function(a) {
    var b = T.c(a, 0, l), a = T.c(a, 1, l);
    return W([je.b(b.toLowerCase()), a])
  }, Fg.e(F([ah(Eb)], 0))))
};
qc.prototype.Vb = function() {
  return Ze(Lf, Me.a(function(a) {
    var b = T.c(a, 0, l), a = T.c(a, 1, l);
    return W([je.b(b.toLowerCase()), a])
  }, Fg.e(F([ah(Eb)], 0))))
};
var ui = function() {
  function a(a, b, c, i) {
    return jc(a, D.c(ti(a), b, b), c, i)
  }
  function b(a, b, h) {
    return c.p(a, b, h, m)
  }
  var c = l, c = function(c, f, h, i) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, f, h);
      case 4:
        return a.call(this, c, f, h, i)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.c = b;
  c.p = a;
  return c
}();
fi.prototype.Vb = function() {
  return Ze(Lf, Me.a(function(a) {
    var b = T.c(a, 0, l), a = T.c(a, 1, l);
    return W([je.b(b.toLowerCase()), a])
  }, ah(Xh)))
};
function vi(a, b) {
  var c = Array.prototype.slice.call(arguments), d = c.shift();
  "undefined" == typeof d && e(Error("[goog.string.format] Template required"));
  return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(a, b, d, j, o, s, x, u) {
    if("%" == s) {
      return"%"
    }
    var y = c.shift();
    "undefined" == typeof y && e(Error("[goog.string.format] Not enough arguments"));
    arguments[0] = y;
    return wi[s].apply(l, arguments)
  })
}
var wi = {s:function(a, b, c) {
  return isNaN(c) || a.length >= c ? a : a = -1 < b.indexOf("-", 0) ? a + Array(c - a.length + 1).join(" ") : Array(c - a.length + 1).join(" ") + a
}, f:function(a, b, c, d, f) {
  d = a.toString();
  isNaN(f) || "" == f || (d = a.toFixed(f));
  var h;
  h = 0 > a ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
  0 <= a && (d = h + d);
  if(isNaN(c) || d.length >= c) {
    return d
  }
  d = isNaN(f) ? Math.abs(a).toString() : Math.abs(a).toFixed(f);
  a = c - d.length - h.length;
  return d = 0 <= b.indexOf("-", 0) ? h + d + Array(a + 1).join(" ") : h + Array(a + 1).join(0 <= b.indexOf("0", 0) ? "0" : " ") + d
}, d:function(a, b, c, d, f, h, i, j) {
  a = parseInt(a, 10);
  return wi.f(a, b, c, d, 0, h, i, j)
}};
wi.i = wi.d;
wi.u = wi.d;
var xi = {}, yi = document.createElement("div");
yi.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
var zi = K.a(yi.firstChild.nodeType, 3), Ai = K.a(yi.getElementsByTagName("tbody").length, 0);
K.a(yi.getElementsByTagName("link").length, 0);
function Bi(a) {
  var b = Ci;
  if(Yd(b)) {
    return a.replace(RegExp(("" + b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), "<$1></$2>")
  }
  if(v(b.hasOwnProperty("source"))) {
    return a.replace(RegExp(b.source, "g"), "<$1></$2>")
  }
  e([U("Invalid match arg: "), U(b)].join(""))
}
;function Di(a) {
  var b = Mh("c-panel");
  ha("opacity") ? Ei(b, a, "opacity") : $b("opacity", sa(Ei, b))
}
function Ei(a, b, c) {
  a.style[Qa(c)] = b
}
function Fi(a, b) {
  a.style.display = b ? "" : "none"
}
;var Gi = /<|&#?\w+;/, Hi = /^\s+/, Ci = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i, Ii = /<([\w:]+)/, Ji = /<tbody/i, Ki = W([1, "<select multiple='multiple'>", "</select>"]), Li = W([1, "<table>", "</table>"]), Mi = W([3, "<table><tbody><tr>", "</tr></tbody></table>"]), Ni = Mf("col \ufdd0'default tfoot caption optgroup legend area td thead th option tbody tr colgroup".split(" "), {col:W([2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"]), "\ufdd0'default":W([0, 
"", ""]), tfoot:Li, caption:Li, optgroup:Ki, legend:W([1, "<fieldset>", "</fieldset>"]), area:W([1, "<map>", "</map>"]), td:Mi, thead:Li, th:Mi, option:Ki, tbody:Li, tr:W([2, "<table><tbody>", "</tbody></table>"]), colgroup:Li});
function Oi(a, b) {
  var c = Dd(Ug(Ji, b)), d = function() {
    var a = K.a(xi.rf, "table");
    return a ? c : a
  }() ? function() {
    var b = a.firstChild;
    return v(b) ? a.firstChild.childNodes : b
  }() : function() {
    var a = K.a(xi.qf, "<table>");
    return a ? c : a
  }() ? divchildNodes : of;
  if(d = R(d)) {
    for(var f = I(d);;) {
      if(function() {
        var a = K.a(f.nodeName, "tbody");
        return a ? K.a(f.childNodes.length, 0) : a
      }() && f.parentNode.removeChild(f), d = H(d)) {
        var h = d, f = d = I(h), d = h
      }else {
        break
      }
    }
  }
}
function Pi(a) {
  var b = Bi(a), a = ("" + U(Bd(Ug(Ii, b)))).toLowerCase(), a = D.c(Ni, a, (new qe("\ufdd0'default")).call(l, Ni)), c = T.c(a, 0, l), d = T.c(a, 1, l), f = T.c(a, 2, l), a = function() {
    var a;
    a = document.createElement("div");
    a.innerHTML = [U(d), U(b), U(f)].join("");
    for(var i = c;;) {
      if(0 < i) {
        i -= 1, a = a.lastChild
      }else {
        return a
      }
    }
  }();
  v(Ai) && Oi(a, b);
  v(function() {
    var a = Dd(zi);
    return a ? Ug(Hi, b) : a
  }()) && a.insertBefore(document.createTextNode(I(Ug(Hi, b))), a.firstChild);
  return a.childNodes
}
g;
function Qi(a) {
  if(a ? a.Ld : a) {
    a = a.Ld(a)
  }else {
    var b;
    var c = Qi[r(a)];
    c ? b = c : (c = Qi._) ? b = c : e(z("DomContent.single-node", a));
    a = b.call(l, a)
  }
  return a
}
g;
function Ri(a) {
  return Mh(Mg(a))
}
g;
g;
var Si = function() {
  function a(a, b) {
    return b < a.length ? new V(l, m, function() {
      return O(a.item(b), c.a(a, b + 1))
    }, l) : l
  }
  function b(a) {
    return c.a(a, 0)
  }
  var c = l, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.b = b;
  c.a = a;
  return c
}(), Ti = function() {
  function a(a, b) {
    return b < a.length ? new V(l, m, function() {
      return O(a[b], c.a(a, b + 1))
    }, l) : l
  }
  function b(a) {
    return c.a(a, 0)
  }
  var c = l, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.b = b;
  c.a = a;
  return c
}();
function Ui(a) {
  return v(a.item) ? Si.b(a) : Ti.b(a)
}
Qi._ = function(a) {
  if(a == l) {
    a = l
  }else {
    var b;
    b = a ? ((b = a.k & 8388608) ? b : a.mc) ? k : a.k ? m : w(Yc, a) : w(Yc, a);
    a = b ? I(a) : v(v(a) ? a.length : a) ? a.item(0) : a
  }
  return a
};
Qi.string = function(a) {
  return Qi(v(Ug(Gi, a)) ? Pi(a) : document.createTextNode(a))
};
v("undefined" != typeof NodeList) && (q = NodeList.prototype, q.mc = k, q.z = function(a) {
  return Ui(a)
}, q.xb = k, q.S = function(a, b) {
  return a.item(b)
}, q.N = function(a, b, c) {
  return a.length <= b ? c : T.a(a, b)
}, q.kc = k, q.w = function(a) {
  return a.length
});
v("undefined" != typeof StaticNodeList) && (q = StaticNodeList.prototype, q.mc = k, q.z = function(a) {
  return Ui(a)
}, q.xb = k, q.S = function(a, b) {
  return a.item(b)
}, q.N = function(a, b, c) {
  return a.length <= b ? c : T.a(a, b)
}, q.kc = k, q.w = function(a) {
  return a.length
});
v("undefined" != typeof HTMLCollection) && (q = HTMLCollection.prototype, q.mc = k, q.z = function(a) {
  return Ui(a)
}, q.xb = k, q.S = function(a, b) {
  return a.item(b)
}, q.N = function(a, b, c) {
  return a.length <= b ? c : T.a(a, b)
}, q.kc = k, q.w = function(a) {
  return a.length
});
function Vi() {
  this.ud = ta()
}
var Wi = new Vi;
Vi.prototype.set = function(a) {
  this.ud = a
};
Vi.prototype.reset = function() {
  this.set(ta())
};
Vi.prototype.get = n("ud");
function Xi(a) {
  this.Yd = a || "";
  this.ce = Wi
}
q = Xi.prototype;
q.xd = k;
q.ae = k;
q.$d = k;
q.yd = m;
q.be = m;
function Yi(a) {
  return 10 > a ? "0" + a : "" + a
}
function Zi(a, b) {
  var c = (a.zd - b) / 1E3, d = c.toFixed(3), f = 0;
  if(1 > c) {
    f = 2
  }else {
    for(;100 > c;) {
      f++, c *= 10
    }
  }
  for(;0 < f--;) {
    d = " " + d
  }
  return d
}
function $i(a) {
  Xi.call(this, a)
}
va($i, Xi);
function aj() {
  this.Zd = ra(this.Cd, this);
  this.Fc = new $i;
  this.Fc.xd = m;
  this.kd = this.Fc.yd = m;
  this.od = ""
}
aj.prototype.Cd = function(a) {
  var b;
  b = this.Fc;
  var c = [];
  c.push(b.Yd, " ");
  if(b.xd) {
    var d = new Date(a.zd);
    c.push("[", Yi(d.getFullYear() - 2E3) + Yi(d.getMonth() + 1) + Yi(d.getDate()) + " " + Yi(d.getHours()) + ":" + Yi(d.getMinutes()) + ":" + Yi(d.getSeconds()) + "." + Yi(Math.floor(d.getMilliseconds() / 10)), "] ")
  }
  b.ae && c.push("[", Zi(a, b.ce.get()), "s] ");
  b.$d && c.push("[", a.Rd, "] ");
  b.be && c.push("[", a.Ua.name, "] ");
  c.push(a.qd, "\n");
  b.yd && a.Dc && c.push(a.Cc, "\n");
  b = c.join("");
  if(window.console && window.console.firebug) {
    switch(a.Ua) {
      case Bh:
        window.console.info(b);
        break;
      case Ch:
        window.console.error(b);
        break;
      case Dh:
        window.console.warn(b);
        break;
      default:
        window.console.debug(b)
    }
  }else {
    window.console ? window.console.log(b) : window.opera ? window.opera.postError(b) : this.od += b
  }
};
var bj = Xg.b(Lf), cj = function() {
  function a(a, b, c) {
    a = Mf(["\ufdd0'max-count", "\ufdd0'event-pred", "\ufdd0'reactor"], {"\ufdd0'max-count":a, "\ufdd0'event-pred":b, "\ufdd0'reactor":c});
    Zg.p(bj, Hd, a, 0);
    return a
  }
  function b(a, b) {
    return c.c(l, a, b)
  }
  var c = l, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.a = b;
  c.c = a;
  return c
}(), dj = function() {
  function a(a, b) {
    var c = Ye(function(b) {
      var c = T.c(b, 0, l), c = Wd(c) ? He.a(sd, c) : c, c = D.c(c, "\ufdd0'event-pred", l);
      T.c(b, 1, l);
      return c.b ? c.b(a) : c.call(l, a)
    }, E(bj)), i = R(c);
    if(i) {
      c = I(i);
      T.c(c, 0, l);
      T.c(c, 1, l);
      for(var j = i;;) {
        var i = c, c = T.c(i, 0, l), i = T.c(i, 1, l), o = c, o = Wd(o) ? He.a(sd, o) : o, s = D.c(o, "\ufdd0'reactor", l), x = D.c(o, "\ufdd0'max-count", l), u = i + 1;
        s.a ? s.a(a, b) : s.call(l, a, b);
        v(function() {
          var a = x;
          return v(a) ? x <= u : a
        }()) ? Zg.c(bj, Id, c) : Zg.p(bj, Hd, c, u);
        if(c = H(j)) {
          i = c, c = I(i), j = i
        }else {
          return l
        }
      }
    }else {
      return l
    }
  }
  function b(a) {
    return c.a(a, l)
  }
  var c = l, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.b = b;
  c.a = a;
  return c
}();
var ej = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function fj(a, b) {
  var c;
  a instanceof fj ? (this.vb(b == l ? a.na : b), gj(this, a.Oa), hj(this, a.Pb), ij(this, a.Qa), jj(this, a.sb), kj(this, a.rb), lj(this, a.ya.hb()), mj(this, a.mb)) : a && (c = ("" + a).match(ej)) ? (this.vb(!!b), gj(this, c[1] || "", k), hj(this, c[2] || "", k), ij(this, c[3] || "", k), jj(this, c[4]), kj(this, c[5] || "", k), lj(this, c[6] || "", k), mj(this, c[7] || "", k)) : (this.vb(!!b), this.ya = new nj(l, this, this.na))
}
q = fj.prototype;
q.Oa = "";
q.Pb = "";
q.Qa = "";
q.sb = l;
q.rb = "";
q.mb = "";
q.Qd = m;
q.na = m;
q.toString = function() {
  if(this.ja) {
    return this.ja
  }
  var a = [];
  this.Oa && a.push(oj(this.Oa, pj), ":");
  this.Qa && (a.push("//"), this.Pb && a.push(oj(this.Pb, pj), "@"), a.push(ha(this.Qa) ? encodeURIComponent(this.Qa) : l), this.sb != l && a.push(":", "" + this.sb));
  this.rb && (this.Qa && "/" != this.rb.charAt(0) && a.push("/"), a.push(oj(this.rb, qj)));
  var b = "" + this.ya;
  b && a.push("?", b);
  this.mb && a.push("#", oj(this.mb, rj));
  return this.ja = a.join("")
};
q.hb = function() {
  var a = this.Oa, b = this.Pb, c = this.Qa, d = this.sb, f = this.rb, h = this.ya.hb(), i = this.mb, j = new fj(l, this.na);
  a && gj(j, a);
  b && hj(j, b);
  c && ij(j, c);
  d && jj(j, d);
  f && kj(j, f);
  h && lj(j, h);
  i && mj(j, i);
  return j
};
function gj(a, b, c) {
  sj(a);
  delete a.ja;
  a.Oa = c ? b ? decodeURIComponent(b) : "" : b;
  a.Oa && (a.Oa = a.Oa.replace(/:$/, ""))
}
function hj(a, b, c) {
  sj(a);
  delete a.ja;
  a.Pb = c ? b ? decodeURIComponent(b) : "" : b
}
function ij(a, b, c) {
  sj(a);
  delete a.ja;
  a.Qa = c ? b ? decodeURIComponent(b) : "" : b
}
function jj(a, b) {
  sj(a);
  delete a.ja;
  b ? (b = Number(b), (isNaN(b) || 0 > b) && e(Error("Bad port number " + b)), a.sb = b) : a.sb = l
}
function kj(a, b, c) {
  sj(a);
  delete a.ja;
  a.rb = c ? b ? decodeURIComponent(b) : "" : b
}
function lj(a, b, c) {
  sj(a);
  delete a.ja;
  b instanceof nj ? (a.ya = b, a.ya.Pc = a, a.ya.vb(a.na)) : (c || (b = oj(b, tj)), a.ya = new nj(b, a, a.na))
}
function uj() {
  var a = window.location;
  return(a instanceof fj ? a.hb() : new fj(a, g)).mb
}
function mj(a, b, c) {
  sj(a);
  delete a.ja;
  a.mb = c ? b ? decodeURIComponent(b) : "" : b
}
function sj(a) {
  a.Qd && e(Error("Tried to modify a read-only Uri"))
}
q.vb = function(a) {
  this.na = a;
  this.ya && this.ya.vb(a);
  return this
};
var vj = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;
function oj(a, b) {
  var c = l;
  ha(a) && (c = a, vj.test(c) || (c = encodeURI(a)), 0 <= c.search(b) && (c = c.replace(b, wj)));
  return c
}
function wj(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var pj = /[#\/\?@]/g, qj = /[\#\?]/g, tj = /[\#\?@]/g, rj = /#/g;
function nj(a, b, c) {
  this.wa = a || l;
  this.Pc = b || l;
  this.na = !!c
}
function xj(a) {
  if(!a.O && (a.O = new qh, a.wa)) {
    for(var b = a.wa.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), f = l, h = l;
      0 <= d ? (f = b[c].substring(0, d), h = b[c].substring(d + 1)) : f = b[c];
      f = Ca(f);
      f = yj(a, f);
      a.add(f, h ? Ca(h) : "")
    }
  }
}
q = nj.prototype;
q.O = l;
q.G = l;
q.add = function(a, b) {
  xj(this);
  zj(this);
  a = yj(this, a);
  if(this.Pa(a)) {
    var c = this.O.get(a);
    fa(c) ? c.push(b) : this.O.set(a, [c, b])
  }else {
    this.O.set(a, b)
  }
  this.G++;
  return this
};
q.remove = function(a) {
  xj(this);
  a = yj(this, a);
  if(this.O.Pa(a)) {
    zj(this);
    var b = this.O.get(a);
    fa(b) ? this.G -= b.length : this.G--;
    return this.O.remove(a)
  }
  return m
};
q.clear = function() {
  zj(this);
  this.O && this.O.clear();
  this.G = 0
};
q.Pa = function(a) {
  xj(this);
  a = yj(this, a);
  return this.O.Pa(a)
};
q.nb = function() {
  xj(this);
  for(var a = this.O.Ta(), b = this.O.nb(), c = [], d = 0;d < b.length;d++) {
    var f = a[d];
    if(fa(f)) {
      for(var h = 0;h < f.length;h++) {
        c.push(b[d])
      }
    }else {
      c.push(b[d])
    }
  }
  return c
};
q.Ta = function(a) {
  xj(this);
  if(a) {
    if(a = yj(this, a), this.Pa(a)) {
      var b = this.O.get(a);
      if(fa(b)) {
        return b
      }
      a = [];
      a.push(b)
    }else {
      a = []
    }
  }else {
    for(var b = this.O.Ta(), a = [], c = 0;c < b.length;c++) {
      var d = b[c];
      fa(d) ? Za(a, d) : a.push(d)
    }
  }
  return a
};
q.set = function(a, b) {
  xj(this);
  zj(this);
  a = yj(this, a);
  if(this.Pa(a)) {
    var c = this.O.get(a);
    fa(c) ? this.G -= c.length : this.G--
  }
  this.O.set(a, b);
  this.G++;
  return this
};
q.get = function(a, b) {
  xj(this);
  a = yj(this, a);
  if(this.Pa(a)) {
    var c = this.O.get(a);
    return fa(c) ? c[0] : c
  }
  return b
};
q.toString = function() {
  if(this.wa) {
    return this.wa
  }
  if(!this.O) {
    return""
  }
  for(var a = [], b = 0, c = this.O.nb(), d = 0;d < c.length;d++) {
    var f = c[d], h = Ba(f), f = this.O.get(f);
    if(fa(f)) {
      for(var i = 0;i < f.length;i++) {
        0 < b && a.push("&"), a.push(h), "" !== f[i] && a.push("=", Ba(f[i])), b++
      }
    }else {
      0 < b && a.push("&"), a.push(h), "" !== f && a.push("=", Ba(f)), b++
    }
  }
  return this.wa = a.join("")
};
function zj(a) {
  delete a.Ac;
  delete a.wa;
  a.Pc && delete a.Pc.ja
}
q.hb = function() {
  var a = new nj;
  this.Ac && (a.Ac = this.Ac);
  this.wa && (a.wa = this.wa);
  this.O && (a.O = this.O.hb());
  return a
};
function yj(a, b) {
  var c = "" + b;
  a.na && (c = c.toLowerCase());
  return c
}
q.vb = function(a) {
  a && !this.na && (xj(this), zj(this), ph(this.O, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.add(d, a))
  }, this));
  this.na = a
};
function Aj(a, b) {
  a && (this.Yb && this.detach(), this.Bb = a, this.Xb = jc(this.Bb, "keypress", this, b), this.Ic = jc(this.Bb, "keydown", this.Nd, b, this), this.Yb = jc(this.Bb, "keyup", this.Od, b, this))
}
va(Aj, qc);
q = Aj.prototype;
q.Bb = l;
q.Xb = l;
q.Ic = l;
q.Yb = l;
q.Ja = -1;
q.Ia = -1;
var Bj = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, Cj = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, Dj = {61:187, 
59:186}, Ej = t || ob && Ab("525");
q = Aj.prototype;
q.Nd = function(a) {
  if(ob && (17 == this.Ja && !a.ctrlKey || 18 == this.Ja && !a.altKey)) {
    this.Ia = this.Ja = -1
  }
  Ej && !Vh(a.keyCode, this.Ja, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.Ia = nb && a.keyCode in Dj ? Dj[a.keyCode] : a.keyCode
};
q.Od = function() {
  this.Ia = this.Ja = -1
};
q.handleEvent = function(a) {
  var b = a.Ga, c, d;
  t && "keypress" == a.type ? (c = this.Ia, d = 13 != c && 27 != c ? b.keyCode : 0) : ob && "keypress" == a.type ? (c = this.Ia, d = 0 <= b.charCode && 63232 > b.charCode && Wh(c) ? b.charCode : 0) : mb ? (c = this.Ia, d = Wh(c) ? b.keyCode : 0) : (c = b.keyCode || this.Ia, d = b.charCode || 0, qb && (63 == d && !c) && (c = 191));
  var f = c, h = b.keyIdentifier;
  c ? 63232 <= c && c in Bj ? f = Bj[c] : 25 == c && a.shiftKey && (f = 9) : h && h in Cj && (f = Cj[h]);
  a = f == this.Ja;
  this.Ja = f;
  b = new Fj(f, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.ib()
  }
};
q.detach = function() {
  this.Xb && (lc(this.Xb), lc(this.Ic), lc(this.Yb), this.Yb = this.Ic = this.Xb = l);
  this.Bb = l;
  this.Ia = this.Ja = -1
};
q.T = function() {
  Aj.Ca.T.call(this);
  this.detach()
};
function Fj(a, b, c, d) {
  d && this.Fb(d, g);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
va(Fj, Gb);
var Gj = {}, Hj = Xg.b(Lf), Re = Xg.b(l), Ij = Xg.b(m), Jj = Xg.b(Lf), Kj = Xg.b(l), Lj = Xg.b(l), Mj = Xg.b(l), Nj = Xg.b(l), Oj = function() {
  function a(a) {
    var d = l;
    ea(a) && (d = F(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    return Kh("org_html_slideshow.main").info(He.a(Q, a))
  }
  a.o = 0;
  a.n = function(a) {
    a = R(a);
    return b(a)
  };
  a.e = b;
  return a
}(), Pj = function() {
  function a(a, b, c) {
    return Ya(Nh(a, b, c))
  }
  function b(a, b) {
    return Ya(Nh(a, b, g))
  }
  function c(a) {
    return Ya(Nh(a, g, g))
  }
  var d = l, d = function(d, h, i) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, h);
      case 3:
        return a.call(this, d, h, i)
    }
    e("Invalid arity: " + arguments.length)
  };
  d.b = c;
  d.a = b;
  d.c = a;
  return d
}(), Qj = function() {
  function a(a, b) {
    return I(Pj.c("head", l, b)).appendChild(a)
  }
  function b(a) {
    return c.a(a, l)
  }
  var c = l, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.b = b;
  c.a = a;
  return c
}();
function Rj(a) {
  return function(b) {
    v(b) && (b.preventDefault(), b.stopPropagation());
    return dj.a(a, b)
  }
}
function Sj(a) {
  v(a) && Fi(Qi(a), k)
}
function Tj(a) {
  v(a) && Fi(Qi(a), m)
}
function Uj(a) {
  return Lg(Me.a(function(a) {
    return Qi(a).getAttribute(Mg("href"))
  }, Ye(function(b) {
    var c = K.a("stylesheet", Qi(b).getAttribute(Mg("rel")));
    return c ? K.a(a, Qi(b).getAttribute(Mg("media"))) : c
  }, Pj.b("link"))))
}
function Vj(a) {
  var b = R(Ye(function(b) {
    var c = K.a("stylesheet", Qi(b).getAttribute(Mg("rel")));
    return c ? ae(a, Qi(b).getAttribute(Mg("href"))) : c
  }, Pj.b("link")));
  if(b) {
    for(var c = I(b);;) {
      if(c.parentNode.removeChild(c), c = H(b)) {
        b = c, c = I(b)
      }else {
        break
      }
    }
  }
}
var Wj = function() {
  function a(a, b) {
    var c = R(a);
    if(c) {
      for(var i = I(c);;) {
        if(Qj.a(function() {
          var a = Qh("link");
          a.setAttribute("rel", "stylesheet");
          a.setAttribute("type", "text/css");
          a.setAttribute("href", i);
          return a
        }(), b), c = H(c)) {
          var j = c, i = c = I(j), c = j
        }else {
          return l
        }
      }
    }else {
      return l
    }
  }
  function b(a) {
    return c.a(a, l)
  }
  var c = l, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.b = b;
  c.a = a;
  return c
}();
function Xj(a, b) {
  if(v("none" != b.style.display)) {
    return Fi(b, m), db(a, "unfolded"), cb(a, "folded")
  }
  Fi(b, k);
  db(a, "folded");
  return cb(a, "unfolded")
}
function Yj(a) {
  a.preventDefault();
  var a = a.currentTarget, b = I(Pj.c("div", l, Zj.b ? Zj.b(a) : Zj.call(l, a)));
  return Xj(a, b)
}
function Zj(a) {
  for(;;) {
    if(K.a("DIV", a.nodeName)) {
      return a
    }
    a = a.parentNode
  }
}
var $j = Lg(Me.a(function(a) {
  return[U("H"), U(a)].join("")
}, Rg.a(1, 9)));
function ak(a) {
  var a = a.cloneNode(k), b = R(Pj.c("div", l, a));
  if(b) {
    for(var c = I(b);;) {
      if(v(Ke(function(a) {
        return function(b) {
          b = [U("outline-"), U(b)].join("");
          return 0 <= Ua(bb(a), b)
        }
      }(c, b), Rg.a(1, 9))) && c.parentNode.removeChild(c), c = H(b)) {
        b = c, c = I(b)
      }else {
        break
      }
    }
  }
  return a
}
function bk(a) {
  a = I(Ye(function(a) {
    var c = K.a("DIV", a.nodeName);
    return c ? 0 <= Ua(bb(a), "notes") : c
  }, a.children));
  return v(a) ? Uh(a) : ""
}
function ck(a) {
  return Ke(function(b) {
    return K.a(a, (new qe("\ufdd0'id")).call(l, b)) ? b : l
  }, E(Re))
}
function dk(a) {
  return Bd(Qe(function(b) {
    return 0 < za(a, (new qe("\ufdd0'id")).call(l, b))
  }))
}
function ek() {
  var a = uj(), b = ck(a);
  if(v(b)) {
    return b
  }
  a = (b = R(a)) ? dk(a) : b;
  return v(a) ? a : I(E(Re))
}
function fk(a) {
  var b = Wd(a) ? He.a(sd, a) : a, a = D.c(b, "\ufdd0'html", l), b = D.c(b, "\ufdd0'id", l);
  Oj.e(F(["Entering show-slide: ", b], 0));
  E(Mj).Oc(Mg(b));
  b = Mh("current-slide");
  b.innerHTML = a;
  b = I(Pj.c("div", "slide", b));
  a = I(Pj.c("ul", l, b));
  b = b.className.replace(RegExp("[\\r\\n\\t]", "g"), " ");
  b = -1 < [U(" "), U(b), U(" ")].join("").indexOf([U(" "), U("animate"), U(" ")].join(""));
  v(b) && Yg(Jj, Mf(["\ufdd0'state", "\ufdd0'hidden", "\ufdd0'visible"], {"\ufdd0'state":"\ufdd0'animating", "\ufdd0'hidden":Pj.c("li", l, a), "\ufdd0'visible":of}));
  return gk.Q ? gk.Q() : gk.call(l)
}
function hk() {
  Oj.e(F([Jd(L("\ufdd1'toggle-mode"), sd("\ufdd0'line", 337))], 0));
  return Zg.a(Ij, Dd)
}
function ik(a) {
  var b = Wd(a) ? He.a(sd, a) : a, a = D.c(b, "\ufdd0'visible", l), b = D.c(b, "\ufdd0'hidden", l), c = I(b);
  return Mf(["\ufdd0'state", "\ufdd0'hidden", "\ufdd0'visible"], {"\ufdd0'state":H(b) ? "\ufdd0'animating" : "\ufdd0'done", "\ufdd0'hidden":H(b), "\ufdd0'visible":Be.a(a, W([c]))})
}
fd(Jj, "\ufdd0'update-bullets", function(a, b, c, d) {
  if(b = R((new qe("\ufdd0'hidden")).call(l, d))) {
    for(a = I(b);;) {
      if(Tj(a), a = H(b)) {
        b = a, a = I(b)
      }else {
        break
      }
    }
  }
  if(a = R((new qe("\ufdd0'visible")).call(l, d))) {
    for(d = I(a);;) {
      if(Sj(d), d = H(a)) {
        a = d, d = I(a)
      }else {
        return l
      }
    }
  }else {
    return l
  }
});
fd(Ij, "\ufdd0'change-mode", function() {
  return dj.b("\ufdd0'change-mode")
});
function jk() {
  var a = ek(), b = Bd(Qe(function(b) {
    return Ie.a(a, b)
  }));
  if(K.a("\ufdd0'animating", (new qe("\ufdd0'state")).call(l, E(Jj)))) {
    return Zg.a(Jj, ik)
  }
  v(b) && fk(b);
  return Zg.a(Lj, function(a) {
    return a == l ? (new Date).getTime() : a
  })
}
function kk() {
  var a = ek(), b = Cd(Pg(function(b) {
    return Ie.a(a, b)
  }, E(Re)));
  Yg(Jj, Mf(["\ufdd0'state"], {"\ufdd0'state":"\ufdd0'done"}));
  return v(b) ? fk(b) : l
}
var lk = Uf([84, 36], ["\ufdd0'toggle-mode", "\ufdd0'go-to-top"]), mk = Uf([32, 84, 35, 80, 37, 34, 13, 33, 78, 40, 38, 39, 3, 36], "\ufdd0'show-next-slide \ufdd0'toggle-mode \ufdd0'show-last-slide \ufdd0'show-prev-slide \ufdd0'show-prev-slide \ufdd0'show-next-slide \ufdd0'show-next-slide \ufdd0'show-prev-slide \ufdd0'show-next-slide \ufdd0'show-next-slide \ufdd0'show-prev-slide \ufdd0'show-next-slide \ufdd0'show-next-slide \ufdd0'show-first-slide".split(" "));
function nk(a) {
  var b = a.keyCode, c = v(E(Ij)) ? mk : lk, b = D.c(c, b, l);
  return v(b) ? (dj.b(b), a.preventDefault(), a.stopPropagation()) : l
}
function ok() {
  return v(E(Kj)) ? v(E(Kj).closed) ? Yg(Kj, l) : E(Kj) : l
}
function pk(a) {
  var a = a.document.getElementById("presenter-elapsed-time"), b;
  v(E(Lj)) ? (b = (new Date).getTime() - E(Lj), b = vi("%d:%02d:%02d", b / 36E5, b / 6E4 % 60, b / 1E3 % 60)) : b = "0:00:00";
  return a.innerHTML = b
}
var rk = function qk() {
  var b = ok();
  if(v(b)) {
    var c = new Date, d = c.getHours();
    b.document.getElementById("presenter-clock-time").innerHTML = vi('<span>%d:%02d:%02d<span id="presenter-clock-time-ampm"> %s</span></span>', 12 < d ? d - 12 : d, c.getMinutes(), c.getSeconds(), 12 <= d ? "pm" : "am");
    pk(b);
    return window.setTimeout(qk, 1E3)
  }
  return l
};
function gk() {
  var a = ok();
  if(v(a)) {
    var b = ek(), c = Wd(b) ? He.a(sd, b) : b, b = D.c(c, "\ufdd0'notes-html", l), c = D.c(c, "\ufdd0'html", l);
    a.document.getElementById("presenter-current-slide").innerHTML = c;
    a.document.getElementById("presenter-notes-container").innerHTML = b;
    return a.document.getElementById("presenter-next-slide").innerHTML = (new qe("\ufdd0'html")).call(l, dk((new qe("\ufdd0'id")).call(l, ek())))
  }
  return l
}
function sk(a) {
  var a = Wd(a) ? He.a(sd, a) : a, b = D.c(a, "\ufdd0'navigation?", l);
  D.c(a, "\ufdd0'type", l);
  var c = D.c(a, "\ufdd0'token", l);
  Oj.e(F([W(["\ufdd0'history-handler", W(["\ufdd0'm", a])])], 0));
  if(v(b)) {
    if(K.a(Mg(c), "")) {
      return v(E(Ij)) ? (Oj.e(F([W(["\ufdd0'history-handler", "\ufdd0'leave-slideshow-mode"])], 0)), Yg(Nj, l), hk()) : l
    }
    a = Mg(c);
    b = E(Nj);
    c = ck(a);
    c = Wd(c) ? He.a(sd, c) : c;
    c = D.c(c, "\ufdd0'html", l);
    Oj.e(F([W(["\ufdd0'history-handler", "\ufdd0'id", a, "\ufdd0'current-id", b])], 0));
    v(E(Ij)) || (Oj.e(F([W(["\ufdd0'history-handler", "\ufdd0'enter-slideshow-mode"])], 0)), hk());
    K.a(a, b) || (Oj.e(F([W(["\ufdd0'history-handler", "\ufdd0'set-current-slide", a])], 0)), Yg(Nj, a), Mh("current-slide").innerHTML = c);
    return gk()
  }
  return l
}
var tk = new aj;
if(k != tk.kd) {
  var uk;
  Jh();
  uk = Ih;
  var vk = tk.Zd;
  uk.Cb || (uk.Cb = []);
  uk.Cb.push(vk);
  tk.kd = k
}
Oj.e(F(["Application started"], 0));
Oj.e(F(["Preparing document"], 0));
Zg.e(Hj, Hd, "projection", Uj("projection"), "screen", F([Uj("screen"), "common", Uj(l), "presenter", Uj("presenter")], 0));
Vj(D.c(E(Hj), "projection", l));
Vj(D.c(E(Hj), "presenter", l));
a: {
  var wk = R(Pj.b("img"));
  if(wk) {
    for(var xk = I(wk), yk = wk;;) {
      var zk = xk.parentNode;
      K.a("P", zk.nodeName) && cb(zk, "image");
      var Ak = H(yk);
      if(Ak) {
        var Bk = Ak, Ck = I(Bk), Dk = Bk, xk = Ck, yk = Dk
      }else {
        break a
      }
    }
  }
}
a: {
  var Ek = R(Pj.a("span", "tag"));
  if(Ek) {
    for(var Fk = I(Ek), Gk = Ek;;) {
      var Hk = Zj(Fk), Ik = R(Pj.c("span", l, Fk));
      if(Ik) {
        for(var Jk = I(Ik), Kk = Ik;;) {
          cb(Hk, bb(Jk));
          var Lk = H(Kk);
          if(Lk) {
            var Mk = Lk, Nk = I(Mk), Ok = Mk, Jk = Nk, Kk = Ok
          }else {
            break
          }
        }
      }
      var Pk = H(Gk);
      if(Pk) {
        var Qk = Pk, Rk = I(Qk), Sk = Qk, Fk = Rk, Gk = Sk
      }else {
        break a
      }
    }
  }
}
a: {
  var Tk = R(Rg.a(1, 9));
  if(Tk) {
    for(var Uk = I(Tk), Vk = Tk;;) {
      var Wk = R(Pj.a("div", [U("outline-text-"), U(Uk)].join("")));
      if(Wk) {
        for(var Xk = I(Wk), Yk = Wk;;) {
          cb(Xk, "outline-text");
          var Zk = H(Yk);
          if(Zk) {
            var $k = Zk, al = I($k), bl = $k, Xk = al, Yk = bl
          }else {
            break
          }
        }
      }
      var cl = H(Vk);
      if(cl) {
        var dl = cl, el = I(dl), fl = dl, Uk = el, Vk = fl
      }else {
        break a
      }
    }
  }
}
a: {
  var gl = R(Rg.a(1, 9));
  if(gl) {
    for(var hl = I(gl), il = gl;;) {
      var jl = R(Pj.b([U("h"), U(hl)].join("")));
      if(jl) {
        for(var kl = I(jl), ll = jl;;) {
          kl.innerHTML = kl.innerHTML.replace(RegExp("&nbsp;", "g"), "");
          var ml = H(ll);
          if(ml) {
            var nl = ml, ol = I(nl), pl = nl, kl = ol, ll = pl
          }else {
            break
          }
        }
      }
      var ql = H(il);
      if(ql) {
        var rl = ql, sl = I(rl), tl = rl, hl = sl, il = tl
      }else {
        break a
      }
    }
  }
}
a: {
  var ul = R(qf(Me.a(function(a) {
    return Mf(["\ufdd0'head-elem", "\ufdd0'body-elem"], {"\ufdd0'head-elem":a.parentNode.parentNode, "\ufdd0'body-elem":I(Pj.c("div", l, Zj.b ? Zj.b(a) : Zj.call(l, a)))})
  }, Pj.a("span", "fold"))));
  if(ul) {
    var vl = I(ul), wl = Wd(vl) ? He.a(sd, vl) : vl;
    D.c(wl, "\ufdd0'body-elem", l);
    D.c(wl, "\ufdd0'head-elem", l);
    for(var xl = vl, yl = ul;;) {
      var zl = xl, Al = Wd(zl) ? He.a(sd, zl) : zl, Bl = D.c(Al, "\ufdd0'body-elem", l), Cl = D.c(Al, "\ufdd0'head-elem", l), Dl = yl;
      Xj(Cl, Bl);
      var El = Th(' <a href="#" class="show-hide"><span>show/hide</span></a>');
      Cl.appendChild(El);
      Pj.c("a", "show-hide", Cl);
      jc(Cl, "click", Yj);
      var Fl = H(Dl);
      if(Fl) {
        var Gl = Fl, Hl = I(Gl), Il = Gl, xl = Hl, yl = Il
      }else {
        break a
      }
    }
  }
}
I(Pj.b("body")).appendChild(Th('<div id="current-slide"></div>'));
Tj(Ri("current-slide"));
Yg(Re, qf(Me.a(function(a) {
  var b;
  a: {
    for(var c = a;;) {
      if(ae($j, c.nodeName)) {
        b = c;
        break a
      }
      var d = c.firstChild;
      v(d) ? c = d : (d = c.nextSibling, v(d) ? c = d : (c = c.parentNode, c = v(c) ? c.nextSibling : l))
    }
  }
  return Mf(["\ufdd0'id", "\ufdd0'html", "\ufdd0'notes-html"], {"\ufdd0'id":b.id, "\ufdd0'html":Uh(ak(a)), "\ufdd0'notes-html":bk(a)})
}, Pj.a("div", "slide"))));
Oj.e(F([Jd(L("\ufdd1'count", "\ufdd1'slides"), sd("\ufdd0'line", 637)), S(E(Re))], 0));
Oj.e(F(["Installing key handler"], 0));
cj.a(Lg(["\ufdd0'show-next-slide"]), function() {
  return jk()
});
cj.a(Lg(["\ufdd0'show-prev-slide"]), function() {
  return kk()
});
cj.a(Lg(["\ufdd0'show-first-slide"]), function() {
  return fk(I(E(Re)))
});
cj.a(Lg(["\ufdd0'show-last-slide"]), function() {
  return fk(Cd(E(Re)))
});
cj.a(Lg(["\ufdd0'toggle-mode"]), function() {
  return hk()
});
cj.a(Lg(["\ufdd0'go-to-top"]), function() {
  E(Mj).Oc(Mg("top"));
  return Gj.window.scrollTo(0, 0)
});
cj.a(Lg(["\ufdd0'show-control-panel"]), function() {
  return Di(0.75)
});
cj.a(Lg(["\ufdd0'hide-control-panel"]), function() {
  return Di(0)
});
cj.a(Lg(["\ufdd0'change-mode"]), function() {
  var a;
  v(E(Ij)) ? (Oj.e(F([Jd(L("\ufdd1'enter-slideshow-mode"), sd("\ufdd0'line", 311))], 0)), Tj(Ri("preamble")), Tj(Ri("content")), Tj(Ri("postamble")), Vj(D.c(E(Hj), "screen", l)), Wj.b(D.c(E(Hj), "projection", l)), Sj(Ri("current-slide")), a = fk(ek())) : (Oj.e(F([Jd(L("\ufdd1'leave-slideshow-mode"), sd("\ufdd0'line", 321))], 0)), Tj(Ri("current-slide")), Vj(D.c(E(Hj), "projection", l)), Wj.b(D.c(E(Hj), "screen", l)), Sj(Ri("preamble")), Sj(Ri("content")), Sj(Ri("postamble")), a = Mh(uj()), a = v(a) ? 
  a.scrollIntoView() : l);
  return a
});
cj.a(Lg(["\ufdd0'show-presenter-window"]), function() {
  var a;
  a = ok();
  if(v(a)) {
    a = a.focus()
  }else {
    var b = Mf(["\ufdd0'target", "\ufdd0'toolbar", "\ufdd0'location", "\ufdd0'statusbar", "\ufdd0'menubar"], {"\ufdd0'target":"PRESENTERDISPLAY", "\ufdd0'toolbar":m, "\ufdd0'location":m, "\ufdd0'statusbar":m, "\ufdd0'menubar":m}).Ba;
    b || (b = {});
    var c = window;
    a = "undefined" != typeof"".href ? "".href : "";
    var d = b.target || "".target, f = [], h;
    for(h in b) {
      switch(h) {
        case "width":
        ;
        case "height":
        ;
        case "top":
        ;
        case "left":
          f.push(h + "=" + b[h]);
          break;
        case "target":
        ;
        case "noreferrer":
          break;
        default:
          f.push(h + "=" + (b[h] ? 1 : 0))
      }
    }
    h = f.join(",");
    if(b.noreferrer) {
      if(b = c.open("", d, h)) {
        t && -1 != a.indexOf(";") && (a = "'" + a.replace(/'/g, "%27") + "'"), a = Da(a), b.document.write('<META HTTP-EQUIV="refresh" content="0; url=' + a + '">'), b.document.close()
      }
    }else {
      b = c.open(a, d, h)
    }
    Yg(Kj, b);
    a = E(Kj).document;
    a.write('\n<html>\n  <head>\n  </head>\n  <body class="presenter-display">\n    <div id="presenter-slide-preview">\n      <div id="presenter-current-slide-container">\n        <span class="presenter-label">Current Slide</span>\n        <div id="presenter-current-slide">\n        </div>\n      </div>\n      <div id="presenter-next-slide-container">\n        <span class="presenter-label">Next Slide</span>\n        <div id="presenter-next-slide">\n        </div>\n      </div>\n     </div>\n     <div id="presenter-notes-container"></div>\n     <div id="presenter-times" class="presenter-label">\n       <div id="presenter-elapsed-time-container">\n          <span id="presenter-elapsed-time">0:00:00</span>\n          <span id="presenter-elapsed-time-reset-container">\n            <a href="#" id="presenter-elapsed-time-reset">reset</a>\n          </span>\n       </div>\n       <div id="presenter-clock-time"><span></span></div>\n     </div>\n  </body>\n</html>\n');
    Wj.a(D.c(E(Hj), "common", l), a);
    Wj.a(D.c(E(Hj), "projection", l), a);
    Wj.a(D.c(E(Hj), "presenter", l), a);
    jc(new Aj(a), "key", nk);
    jc(a.getElementById("presenter-elapsed-time-reset"), "click", Rj("\ufdd0'reset-elapsed-time"));
    gk();
    a = rk()
  }
  return a
});
cj.a(Lg(["\ufdd0'reset-elapsed-time"]), function() {
  Yg(Lj, l);
  var a = ok();
  return v(a) ? pk(a) : l
});
I(Pj.b("body")).appendChild(Th('<div id="c-panel">\n<a id="c-toggle" href="#">\n  <span class="label">Toggle slide-show mode</span>\n  <span class="key">T</span>\n</a>\n<a id="c-first" href="#">\n  <span class="label">First slide</span>\n  <span class="key">Home</span>\n</a>\n<a id="c-prev" href="#">\n  <span class="label">Previous slide</span>\n  <span class="key">P</span>\n</a>\n<a id="c-next" href="#">\n  <span class="label">Next slide</span>\n  <span class="key">N</span>\n</a>\n<a id="c-last" href="#">\n  <span class="label">Last slide</span>\n  <span class="key">End</span>\n</a>\n<a id="c-presenter-window" href="#">\n  <span class="label">Open presenter preview</span>\n</a>\n</div>'));
var Jl = Mh("c-panel");
dj.b("\ufdd0'show-control-panel");
var Kl = Rj("\ufdd0'hide-control-panel");
ia(Kl) || (Kl && "function" == typeof Kl.handleEvent ? Kl = ra(Kl.handleEvent, Kl) : e(Error("Invalid listener argument")));
sc.setTimeout(Kl, 3E3);
jc(Jl, "mouseover", Rj("\ufdd0'show-control-panel"));
jc(Jl, "mouseout", Rj("\ufdd0'hide-control-panel"));
jc(Mh("c-toggle"), "click", Rj("\ufdd0'toggle-mode"));
jc(Mh("c-first"), "click", Rj("\ufdd0'show-first-slide"));
jc(Mh("c-prev"), "click", Rj("\ufdd0'show-prev-slide"));
jc(Mh("c-next"), "click", Rj("\ufdd0'show-next-slide"));
jc(Mh("c-last"), "click", Rj("\ufdd0'show-last-slide"));
jc(Mh("c-presenter-window"), "click", Rj("\ufdd0'show-presenter-window"));
jc(new Aj(document), "key", nk);
Oj.e(F(["Installing history handler"], 0));
Yg(Mj, function() {
  var a = v($h()) ? new Zh : new fi;
  ui.c(a, "navigate", function(a) {
    return sk.b ? sk.b(Mf(["\ufdd0'token", "\ufdd0'type", "\ufdd0'navigation?"], {"\ufdd0'token":je.b(a.Ad), "\ufdd0'type":a.type, "\ufdd0'navigation?":a.md})) : sk.call(l, Mf(["\ufdd0'token", "\ufdd0'type", "\ufdd0'navigation?"], {"\ufdd0'token":je.b(a.Ad), "\ufdd0'type":a.type, "\ufdd0'navigation?":a.md}))
  });
  a.ub(k);
  return a
}());
