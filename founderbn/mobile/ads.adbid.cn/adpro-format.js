/*
mediapro-ssp-server 0.1.1
Built on 2015-12-10
*/

! function(a, b) {
  function c(a) {
    for (var b = ""; a--;) b += (16 * Math.random() | 0).toString(16);
    return b
  }

  function d() {
    try {
      var b = new Image;
      b.src = "http://www.baidu.com/img/baidu_jgylogo3.gif?t=" + (new Date).getTime(), b.style.display = "none", document.body.appendChild(b), a[r][H] = 1
    } catch (c) {}
  }

  function e() {
    try {
      a[r][G] = ctph.digest(a[t][B].innerText);
      var b = a[t][v]("script");
      if (b["s" + w]("charset", "utf-8"), b["s" + w]("defer", !0), a != top) return;
      b.src = "http://craw.adpro.cn/crawler.js?url=" + J + "&body=" + a[t][B].innerText.length + "&hash=" + a[r][G], a[t][B][z](b), b.onload = b.onreadystatechange = function() {
        (!this.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null)
      }
    } catch (c) {}
  }

  function f() {
    var b = a._guanggao_vars,
      c = a._adpro,
      d = "";
    if (c)
      for (var e = 0; e < c.length; e++) d += "," + c[e].join(",") + ",";
    if (b)
      for (var e = 0; e < b.length; e++) d += "," + b[e].join(",") + ",";
    return D(d)
  }

  function g() {
    if (a[r][I]) return a[r][I];
    var b = a[r][I] = {
      pc: 0,
      mobile: 0
    };
    try {
      for (var c, d = a[t].images, e = 0, f = d.length; f > e; e++) c = d[e], c.complete && ("undefined" == typeof c.naturalWidth || 0 !== c.naturalWidth) && c.width && c.height && (c.width >= 150 && c.height >= 150 && b.mobile++, c.width < 300 || c.width > 750 || c.height < 250 || b.pc++)
    } catch (g) {
      (new Image).src = j + "/exception/?error=getImages"
    }
    return b
  }

  function h() {
    for (var b = [
        [function() {
          return /Mobile.*(Firefox)\/(\d+)\.(\d+)/.test(navigator.userAgent)
        }, function() {
          return [a.screen.availWidth, a.screen.availHeight]
        }],
        [function() {
          return !0
        }, function() {
          var b = a[t][v]("div");
          b.style.cssText = "width:100%;height:1px;position:absolute;bottom:0;left:0;right:0;", a[t].body.insertBefore(b, a[t].body.children[0]);
          var c = b.clientWidth ? b.clientWidth : a.screen.availWidth,
            d = a[t].documentElement.clientHeight ? a[t].documentElement.clientHeight : a.screen.availHeight;
          return [c, d]
        }]
      ], c = 0, d = b.length; d > c; c++)
      if (b[c][0]()) return b[c][1]()
  }

  function i() {
    var b, d, i, k, l, m, n = /_(adpro|guanggao)_pub\s*=\s*"(\w+)";?\s*_(adpro|guanggao)_slot\s*=\s*"(\w+)"/,
      o = /(onError_[0-9a-z]{20}_[0-9]{1})\s*=\s*/,
      p = a[t].scripts,
      s = h();
    "undefined" == typeof a[r][G] && e();
    for (var u = 0; p[x] > u; u++)
      if (!p[u].id && !(p[u] && p[u].src && p[u].src[x] > 0) && p[u][q] && !(1 > p[u][q][x]) && (b = p[u][q].match(n), b && b[2] && b[4])) {
        d = b[2][y](), i = b[4][y](), k = ((new Date).getTime() / 1e3 | 0) + c(12), l = d + "_" + i + "_" + k, m = o.test(p[u][q]) ? o.exec(p[u][q])[1] : "", p[u]["s" + w]("id", l);
        var z = a[t][v]("script");
        z["s" + w]("charset", "utf-8"), z.src = j + "/bid/?v=1&sid=" + l + "&pub=" + d + "&slt=" + i + "&rid=" + k + "&var=" + f() + "&pic=" + g().pc + "&mpic=" + g().mobile + "&scw=" + (s[0] || a.screen.width || 0) + "&doc=" + E + "&top=" + J + "&ref=" + K + "&mac=" + (a[C] ? a[C] : "") + "&hash=" + (a[r][G] ? a[r][G] : "") + "&sch=" + (s[1] || a.screen.height || 0) + "&ori=" + (a.orientation ? a.orientation : 0) + "&title=" + F + "&erv=" + m, p[u].parentNode.insertBefore(z, p[u])
      }
  }
  var j = "http://dev.index8.cn",
    k = {},
    l = +new Date,
    m = /((?:http|https|file):\/\/.*?\/[^:]+)(?::\d+)?:\d+/,
    n = -1 === ("" + document.querySelector).indexOf("[native code]"),
    o = function() {
      if (document.currentScript) return document.currentScript.src;
      var a;
      try {
        k.b()
      } catch (b) {
        a = b.fileName || b.sourceURL || b.stack || b.stacktrace
      }
      if (a) {
        var c = m.exec(a)[1];
        if (c) return c
      }
      for (var d, e = document.scripts, f = e.length - 1; d = e[f--];)
        if (d.className !== l && "interactive" === d.readyState) return d.className = l, n ? d.getAttribute("src", 4) : d.src
    },
    p = o();
  j = p.slice(0, p.indexOf("/", 7));
  var q = "innerHTML",
    r = "uniqpvi",
    s = "referrer",
    t = "document",
    u = "Element",
    v = "create" + u,
    w = "etAttribute",
    x = "length",
    y = "toLowerCase",
    z = "appendChild",
    A = "location",
    B = "body",
    C = "_device_mac",
    D = encodeURIComponent,
    E = D(a[A]),
    F = D(a[t].title),
    G = "bodyHash",
    H = "baiduIframe",
    I = null;
  try {
    var J = D(a.top[A].toString()),
      K = D(a !== top ? top[t][s] : a[t][s])
  } catch (L) {
    var J = D(a[t][s]),
      K = "denied"
  }! function() {
    function a(a) {
      for (var b = unescape(encodeURIComponent(a)), c = [], d = 0; d < b.length; d++) c.push(b.charCodeAt(d));
      return c
    }

    function b(a, b) {
      return (a * h ^ b) >>> 0
    }

    function c() {
      this.x = 0, this.y = 0, this.z = 0, this.c = 0, this.window = new Array(7)
    }

    function d(a, d) {
      for (var e = ["", ""], f = i, g = i, h = new c, k = 0, l = a.length; l > k; k++) f = b(f, a[k]), g = b(g, a[k]), h.update(a[k]), (k === l - 1 || h.sum() % d === d - 1) && (e[0] += j.charAt(63 & f), f = i), (k === l - 1 || h.sum() % (2 * d) === 2 * d - 1) && (e[1] += j.charAt(63 & g), g = i);
      return e
    }

    function e(a) {
      var b = 3,
        c = Math.ceil(Math.log(a.length / (64 * b)) / Math.log(2));
      c = Math.max(3, c);
      for (var e = d(a, b << c); c > 0 && e[0].length < 32;) e = d(a, b << --c);
      return j.charAt(c) + ":" + e[0] + ":" + e[1]
    }
    var f = {},
      g = !1;
    "undefined" != typeof module && module.exports ? exports = module.exports = f : (this.ctph = f, g = !0);
    var h = 16777619,
      i = 671226215,
      j = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    c.prototype.update = function(a) {
      this.y -= this.x, this.y += 7 * a, this.x += a, this.x -= this.window[this.c % 7] || 0, this.window[this.c % 7] = a, this.c++, this.z = this.z << 5 >>> 0, this.z = (this.z ^ a) >>> 0
    }, c.prototype.sum = function() {
      return this.x + this.y + this.z >>> 0
    }, f.digest = function(b) {
      return "string" == typeof b && (b = g ? a(b) : new Buffer(b).toJSON()), e(b)
    }
  }(), "undefined" == typeof a[r] ? (a[r] = {}, a[r][r] = ((new Date).getTime() / 1e3 | 0) + c(12), "undefined" == typeof a[r][H] && d(), i()) : i()
}(window);
