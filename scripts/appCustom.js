window.Modernizr = function(aw, av, au) {
        function T(b) {
            am.cssText = b
        }

        function S(d, c) {
            return T(ai.join(d + ";") + (c || ""))
        }

        function R(d, c) {
            return typeof d === c
        }

        function Q(d, c) {
            return !!~("" + d).indexOf(c)
        }

        function P(f, c) {
            for (var h in f) {
                var g = f[h];
                if (!Q(g, "-") && am[g] !== au) {
                    return c == "pfx" ? g : !0
                }
            }
            return !1
        }

        function O(g, c, j) {
            for (var i in g) {
                var h = c[g[i]];
                if (h !== au) {
                    return j === !1 ? g[i] : R(h, "function") ? h.bind(j || c) : h
                }
            }
            return !1
        }

        function N(g, f, j) {
            var i = g.charAt(0).toUpperCase() + g.slice(1),
                h = (g + " " + ag.join(i + " ") + i).split(" ");
            return R(f, "string") || R(f, "undefined") ? P(h, f) : (h = (g + " " + af.join(i + " ") + i).split(" "), O(h, f, j))
        }

        function M() {
            ar.input = function(g) {
                for (var f = 0, b = g.length; f < b; f++) {
                    ab[g[f]] = g[f] in al
                }
                return ab.list && (ab.list = !!av.createElement("datalist") && !!aw.HTMLDataListElement), ab
            }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), ar.inputtypes = function(b) {
                for (var l = 0, k, j, g, c = b.length; l < c; l++) {
                    al.setAttribute("type", j = b[l]), k = al.type !== "text", k && (al.value = ak, al.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(j) && al.style.WebkitAppearance !== au ? (ap.appendChild(al), g = av.defaultView, k = g.getComputedStyle && g.getComputedStyle(al, null).WebkitAppearance !== "textfield" && al.offsetHeight !== 0, ap.removeChild(al)) : /^(search|tel)$/.test(j) || (/^(url|email)$/.test(j) ? k = al.checkValidity && al.checkValidity() === !1 : k = al.value != ak)), ac[b[l]] = !!k
                }
                return ac
            }("search tel url email datetime date month week time datetime-local number range color".split(" "))
        }
        var at = "2.8.3",
            ar = {},
            aq = !0,
            ap = av.documentElement,
            ao = "modernizr",
            an = av.createElement(ao),
            am = an.style,
            al = av.createElement("input"),
            ak = ":)",
            aj = {}.toString,
            ai = " -webkit- -moz- -o- -ms- ".split(" "),
            ah = "Webkit Moz O ms",
            ag = ah.split(" "),
            af = ah.toLowerCase().split(" "),
            ae = {
                svg: "http://www.w3.org/2000/svg"
            },
            ad = {},
            ac = {},
            ab = {},
            aa = [],
            Z = aa.slice,
            Y, X = function(v, u, t, s) {
                var r, q, p, o, h = av.createElement("div"),
                    g = av.body,
                    b = g || av.createElement("body");
                if (parseInt(t, 10)) {
                    while (t--) {
                        p = av.createElement("div"), p.id = s ? s[t] : ao + (t + 1), h.appendChild(p)
                    }
                }
                return r = ["&#173;", '<style id="s', ao, '">', v, "</style>"].join(""), h.id = ao, (g ? h : b).innerHTML += r, b.appendChild(h), g || (b.style.background = "", b.style.overflow = "hidden", o = ap.style.overflow, ap.style.overflow = "hidden", ap.appendChild(b)), q = u(h, v), g ? h.parentNode.removeChild(h) : (b.parentNode.removeChild(b), ap.style.overflow = o), !!q
            },
            W = function() {
                function c(i, h) {
                    h = h || av.createElement(b[i] || "div"), i = "on" + i;
                    var g = i in h;
                    return g || (h.setAttribute || (h = av.createElement("div")), h.setAttribute && h.removeAttribute && (h.setAttribute(i, ""), g = R(h[i], "function"), R(h[i], "undefined") || (h[i] = au), h.removeAttribute(i))), h = null, g
                }
                var b = {
                    select: "input",
                    change: "input",
                    submit: "form",
                    reset: "form",
                    error: "img",
                    load: "img",
                    abort: "img"
                };
                return c
            }(),
            V = {}.hasOwnProperty,
            U;
        !R(V, "undefined") && !R(V.call, "undefined") ? U = function(d, c) {
            return V.call(d, c)
        } : U = function(d, c) {
            return c in d && R(d.constructor.prototype[c], "undefined")
        }, Function.prototype.bind || (Function.prototype.bind = function(f) {
            var i = this;
            if (typeof i != "function") {
                throw new TypeError
            }
            var h = Z.call(arguments, 1),
                g = function() {
                    if (this instanceof g) {
                        var b = function() {};
                        b.prototype = i.prototype;
                        var d = new b,
                            c = i.apply(d, h.concat(Z.call(arguments)));
                        return Object(c) === c ? c : d
                    }
                    return i.apply(f, h.concat(Z.call(arguments)))
                };
            return g
        }), ad.flexbox = function() {
            return N("flexWrap")
        }, ad.flexboxlegacy = function() {
            return N("boxDirection")
        }, ad.canvas = function() {
            var b = av.createElement("canvas");
            return !!b.getContext && !!b.getContext("2d")
        }, ad.canvastext = function() {
            return !!ar.canvas && !!R(av.createElement("canvas").getContext("2d").fillText, "function")
        }, ad.webgl = function() {
            return !!aw.WebGLRenderingContext
        }, ad.touch = function() {
            var b;
            return "ontouchstart" in aw || aw.DocumentTouch && av instanceof DocumentTouch ? b = !0 : X(["@media (", ai.join("touch-enabled),("), ao, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(c) {
                b = c.offsetTop === 9
            }), b
        }, ad.geolocation = function() {
            return "geolocation" in navigator
        }, ad.postmessage = function() {
            return !!aw.postMessage
        }, ad.websqldatabase = function() {
            return !!aw.openDatabase
        }, ad.indexedDB = function() {
            return !!N("indexedDB", aw)
        }, ad.hashchange = function() {
            return W("hashchange", aw) && (av.documentMode === au || av.documentMode > 7)
        }, ad.history = function() {
            return !!aw.history && !!history.pushState
        }, ad.draganddrop = function() {
            var b = av.createElement("div");
            return "draggable" in b || "ondragstart" in b && "ondrop" in b
        }, ad.websockets = function() {
            return "WebSocket" in aw || "MozWebSocket" in aw
        }, ad.rgba = function() {
            return T("background-color:rgba(150,255,150,.5)"), Q(am.backgroundColor, "rgba")
        }, ad.hsla = function() {
            return T("background-color:hsla(120,40%,100%,.5)"), Q(am.backgroundColor, "rgba") || Q(am.backgroundColor, "hsla")
        }, ad.multiplebgs = function() {
            return T("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(am.background)
        }, ad.backgroundsize = function() {
            return N("backgroundSize")
        }, ad.borderimage = function() {
            return N("borderImage")
        }, ad.borderradius = function() {
            return N("borderRadius")
        }, ad.boxshadow = function() {
            return N("boxShadow")
        }, ad.textshadow = function() {
            return av.createElement("div").style.textShadow === ""
        }, ad.opacity = function() {
            return S("opacity:.55"), /^0.55$/.test(am.opacity)
        }, ad.cssanimations = function() {
            return N("animationName")
        }, ad.csscolumns = function() {
            return N("columnCount")
        }, ad.cssgradients = function() {
            var e = "background-image:",
                d = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
                f = "linear-gradient(left top,#9f9, white);";
            return T((e + "-webkit- ".split(" ").join(d + e) + ai.join(f + e)).slice(0, -e.length)), Q(am.backgroundImage, "gradient")
        }, ad.cssreflections = function() {
            return N("boxReflect")
        }, ad.csstransforms = function() {
            return !!N("transform")
        }, ad.csstransforms3d = function() {
            var b = !!N("perspective");
            return b && "webkitPerspective" in ap.style && X("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(d, e) {
                b = d.offsetLeft === 9 && d.offsetHeight === 3
            }), b
        }, ad.csstransitions = function() {
            return N("transition")
        }, ad.fontface = function() {
            var b;
            return X('@font-face {font-family:"font";src:url("https://")}', function(l, k) {
                var j = av.getElementById("smodernizr"),
                    i = j.sheet || j.styleSheet,
                    h = i ? i.cssRules && i.cssRules[0] ? i.cssRules[0].cssText : i.cssText || "" : "";
                b = /src/i.test(h) && h.indexOf(k.split(" ")[0]) === 0
            }), b
        }, ad.generatedcontent = function() {
            var b;
            return X(["#", ao, "{font:0/0 a}#", ao, ':after{content:"', ak, '";visibility:hidden;font:3px/1 a}'].join(""), function(c) {
                b = c.offsetHeight >= 3
            }), b
        }, ad.video = function() {
            var b = av.createElement("video"),
                f = !1;
            try {
                if (f = !!b.canPlayType) {
                    f = new Boolean(f), f.ogg = b.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), f.h264 = b.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), f.webm = b.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")
                }
            } catch (e) {}
            return f
        }, ad.audio = function() {
            var b = av.createElement("audio"),
                f = !1;
            try {
                if (f = !!b.canPlayType) {
                    f = new Boolean(f), f.ogg = b.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), f.mp3 = b.canPlayType("audio/mpeg;").replace(/^no$/, ""), f.wav = b.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), f.m4a = (b.canPlayType("audio/x-m4a;") || b.canPlayType("audio/aac;")).replace(/^no$/, "")
                }
            } catch (e) {}
            return f
        }, ad.localstorage = function() {
            try {
                return localStorage.setItem(ao, ao), localStorage.removeItem(ao), !0
            } catch (b) {
                return !1
            }
        }, ad.sessionstorage = function() {
            try {
                return sessionStorage.setItem(ao, ao), sessionStorage.removeItem(ao), !0
            } catch (b) {
                return !1
            }
        }, ad.webworkers = function() {
            return !!aw.Worker
        }, ad.applicationcache = function() {
            return !!aw.applicationCache
        }, ad.svg = function() {
            return !!av.createElementNS && !!av.createElementNS(ae.svg, "svg").createSVGRect
        }, ad.inlinesvg = function() {
            var b = av.createElement("div");
            return b.innerHTML = "<svg/>", (b.firstChild && b.firstChild.namespaceURI) == ae.svg
        }, ad.smil = function() {
            return !!av.createElementNS && /SVGAnimate/.test(aj.call(av.createElementNS(ae.svg, "animate")))
        }, ad.svgclippaths = function() {
            return !!av.createElementNS && /SVGClipPath/.test(aj.call(av.createElementNS(ae.svg, "clipPath")))
        };
        for (var L in ad) {
            U(ad, L) && (Y = L.toLowerCase(), ar[Y] = ad[L](), aa.push((ar[Y] ? "" : "no-") + Y))
        }
        return ar.input || M(), ar.addTest = function(e, c) {
                if (typeof e == "object") {
                    for (var f in e) {
                        U(e, f) && ar.addTest(f, e[f])
                    }
                } else {
                    e = e.toLowerCase();
                    if (ar[e] !== au) {
                        return ar
                    }
                    c = typeof c == "function" ? c() : c, typeof aq != "undefined" && aq && (ap.className += " " + (c ? "" : "no-") + e), ar[e] = c
                }
                return ar
            }, T(""), an = al = null,
            function(ax, K) {
                function A(f, e) {
                    var h = f.createElement("p"),
                        g = f.getElementsByTagName("head")[0] || f.documentElement;
                    return h.innerHTML = "x<style>" + e + "</style>", g.insertBefore(h.lastChild, g.firstChild)
                }

                function z() {
                    var b = t.elements;
                    return typeof b == "string" ? b.split(" ") : b
                }

                function y(d) {
                    var c = C[d[E]];
                    return c || (c = {}, D++, d[E] = D, C[D] = c), c
                }

                function x(b, h, f) {
                    h || (h = K);
                    if (B) {
                        return h.createElement(b)
                    }
                    f || (f = y(h));
                    var e;
                    return f.cache[b] ? e = f.cache[b].cloneNode() : G.test(b) ? e = (f.cache[b] = f.createElem(b)).cloneNode() : e = f.createElem(b), e.canHaveChildren && !H.test(b) && !e.tagUrn ? f.frag.appendChild(e) : e
                }

                function w(b, l) {
                    b || (b = K);
                    if (B) {
                        return b.createDocumentFragment()
                    }
                    l = l || y(b);
                    var k = l.frag.cloneNode(),
                        j = 0,
                        i = z(),
                        h = i.length;
                    for (; j < h; j++) {
                        k.createElement(i[j])
                    }
                    return k
                }

                function v(d, c) {
                    c.cache || (c.cache = {}, c.createElem = d.createElement, c.createFrag = d.createDocumentFragment, c.frag = c.createFrag()), d.createElement = function(b) {
                        return t.shivMethods ? x(b, d, c) : c.createElem(b)
                    }, d.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + z().join().replace(/[\w\-]+/g, function(b) {
                        return c.createElem(b), c.frag.createElement(b), 'c("' + b + '")'
                    }) + ");return n}")(t, c.frag)
                }

                function u(b) {
                    b || (b = K);
                    var d = y(b);
                    return t.shivCSS && !F && !d.hasCSS && (d.hasCSS = !!A(b, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), B || v(b, d), b
                }
                var J = "3.7.0",
                    I = ax.html5 || {},
                    H = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    G = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    F, E = "_html5shiv",
                    D = 0,
                    C = {},
                    B;
                (function() {
                    try {
                        var b = K.createElement("a");
                        b.innerHTML = "<xyz></xyz>", F = "hidden" in b, B = b.childNodes.length == 1 || function() {
                            K.createElement("a");
                            var c = K.createDocumentFragment();
                            return typeof c.cloneNode == "undefined" || typeof c.createDocumentFragment == "undefined" || typeof c.createElement == "undefined"
                        }()
                    } catch (d) {
                        F = !0, B = !0
                    }
                })();
                var t = {
                    elements: I.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                    version: J,
                    shivCSS: I.shivCSS !== !1,
                    supportsUnknownElements: B,
                    shivMethods: I.shivMethods !== !1,
                    type: "default",
                    shivDocument: u,
                    createElement: x,
                    createDocumentFragment: w
                };
                ax.html5 = t, u(K)
            }(this, av), ar._version = at, ar._prefixes = ai, ar._domPrefixes = af, ar._cssomPrefixes = ag, ar.hasEvent = W, ar.testProp = function(b) {
                return P([b])
            }, ar.testAllProps = N, ar.testStyles = X, ap.className = ap.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (aq ? " js " + aa.join(" ") : ""), ar
    }(this, this.document),
    function(ad, ac, ab) {
        function aa(b) {
            return "[object Function]" == P.call(b)
        }

        function Z(b) {
            return "string" == typeof b
        }

        function Y() {}

        function X(b) {
            return !b || "loaded" == b || "complete" == b || "uninitialized" == b
        }

        function W() {
            var b = O.shift();
            M = 1, b ? b.t ? R(function() {
                ("c" == b.t ? L.injectCss : L.injectJs)(b.s, 0, b.a, b.x, b.e, 1)
            }, 0) : (b(), W()) : M = 0
        }

        function V(w, v, t, s, q, p, n) {
            function m(c) {
                if (!g && X(h.readyState) && (x.r = g = 1, !M && W(), h.onload = h.onreadystatechange = null, c)) {
                    "img" != w && R(function() {
                        I.removeChild(h)
                    }, 50);
                    for (var e in D[v]) {
                        D[v].hasOwnProperty(e) && D[v][e].onload()
                    }
                }
            }
            var n = n || L.errorTimeout,
                h = ac.createElement(w),
                g = 0,
                b = 0,
                x = {
                    t: t,
                    s: v,
                    e: q,
                    a: p,
                    x: n
                };
            1 === D[v] && (b = 1, D[v] = []), "object" == w ? h.data = v : (h.src = v, h.type = w), h.width = h.height = "0", h.onerror = h.onload = h.onreadystatechange = function() {
                m.call(this, b)
            }, O.splice(s, 0, x), "img" != w && (b || 2 === D[v] ? (I.insertBefore(h, J ? null : Q), R(m, n)) : D[v].push(h))
        }

        function U(g, e, j, i, h) {
            return M = 0, e = e || "j", Z(g) ? V("c" == e ? G : H, g, e, this.i++, j, i, h) : (O.splice(this.i++, 0, g), 1 == O.length && W()), this
        }

        function T() {
            var b = L;
            return b.loader = {
                load: U,
                i: 0
            }, b
        }
        var S = ac.documentElement,
            R = ad.setTimeout,
            Q = ac.getElementsByTagName("script")[0],
            P = {}.toString,
            O = [],
            M = 0,
            K = "MozAppearance" in S.style,
            J = K && !!ac.createRange().compareNode,
            I = J ? S : Q.parentNode,
            S = ad.opera && "[object Opera]" == P.call(ad.opera),
            S = !!ac.attachEvent && !S,
            H = K ? "object" : S ? "script" : "img",
            G = S ? "script" : H,
            F = Array.isArray || function(b) {
                return "[object Array]" == P.call(b)
            },
            E = [],
            D = {},
            C = {
                timeout: function(d, c) {
                    return c.length && (d.timeout = c[0]), d
                }
            },
            N, L;
        L = function(e) {
            function c(i) {
                var i = i.split("!"),
                    h = E.length,
                    q = i.pop(),
                    p = i.length,
                    q = {
                        url: q,
                        origUrl: q,
                        prefixes: i
                    },
                    o, l, j;
                for (l = 0; l < p; l++) {
                    j = i[l].split("="), (o = C[j.shift()]) && (q = o(q, j))
                }
                for (l = 0; l < h; l++) {
                    q = E[l](q)
                }
                return q
            }

            function n(b, s, r, q, p) {
                var o = c(b),
                    l = o.autoCallback;
                o.url.split(".").pop().split("?").shift(), o.bypass || (s && (s = aa(s) ? s : s[b] || s[q] || s[b.split("/").pop().split("?")[0]]), o.instead ? o.instead(b, s, r, q, p) : (D[o.url] ? o.noexec = !0 : D[o.url] = 1, r.load(o.url, o.forceCSS || !o.forceJS && "css" == o.url.split(".").pop().split("?").shift() ? "c" : ab, o.noexec, o.attrs, o.timeout), (aa(s) || aa(l)) && r.load(function() {
                    T(), s && s(o.origUrl, p, q), l && l(o.origUrl, p, q), D[o.url] = 2
                })))
            }

            function m(w, v) {
                function u(b, h) {
                    if (b) {
                        if (Z(b)) {
                            h || (r = function() {
                                var i = [].slice.call(arguments);
                                q.apply(this, i), p()
                            }), n(b, r, v, 0, t)
                        } else {
                            if (Object(b) === b) {
                                for (g in o = function() {
                                        var i = 0,
                                            j;
                                        for (j in b) {
                                            b.hasOwnProperty(j) && i++
                                        }
                                        return i
                                    }(), b) {
                                    b.hasOwnProperty(g) && (!h && !--o && (aa(r) ? r = function() {
                                        var i = [].slice.call(arguments);
                                        q.apply(this, i), p()
                                    } : r[g] = function(i) {
                                        return function() {
                                            var j = [].slice.call(arguments);
                                            i && i.apply(this, j), p()
                                        }
                                    }(q[g])), n(b[g], r, v, g, t))
                                }
                            }
                        }
                    } else {
                        !h && p()
                    }
                }
                var t = !!w.test,
                    s = w.load || w.both,
                    r = w.callback || Y,
                    q = r,
                    p = w.complete || Y,
                    o, g;
                u(t ? w.yep : w.nope, !!s), s && u(s)
            }
            var k, f, d = this.yepnope.loader;
            if (Z(e)) {
                n(e, 0, d, 0)
            } else {
                if (F(e)) {
                    for (k = 0; k < e.length; k++) {
                        f = e[k], Z(f) ? n(f, 0, d, 0) : F(f) ? L(f) : Object(f) === f && m(f, d)
                    }
                } else {
                    Object(e) === e && m(e, d)
                }
            }
        }, L.addPrefix = function(d, c) {
            C[d] = c
        }, L.addFilter = function(b) {
            E.push(b)
        }, L.errorTimeout = 10000, null == ac.readyState && ac.addEventListener && (ac.readyState = "loading", ac.addEventListener("DOMContentLoaded", N = function() {
            ac.removeEventListener("DOMContentLoaded", N, 0), ac.readyState = "complete"
        }, 0)), ad.yepnope = T(), ad.yepnope.executeStack = W, ad.yepnope.injectJs = function(r, q, p, n, m, h) {
            var g = ac.createElement("script"),
                f, b, n = n || L.errorTimeout;
            g.src = r;
            for (b in p) {
                g.setAttribute(b, p[b])
            }
            q = h ? W : q || Y, g.onreadystatechange = g.onload = function() {
                !f && X(g.readyState) && (f = 1, q(), g.onload = g.onreadystatechange = null)
            }, R(function() {
                f || (f = 1, q(1))
            }, n), m ? g.onload() : Q.parentNode.insertBefore(g, Q)
        }, ad.yepnope.injectCss = function(b, n, m, l, k, h) {
            var l = ac.createElement("link"),
                f, n = h ? W : n || Y;
            l.href = b, l.rel = "stylesheet", l.type = "text/css";
            for (f in m) {
                l.setAttribute(f, m[f])
            }
            k || (Q.parentNode.insertBefore(l, Q), R(n, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    };
Modernizr.addTest("ipad", function() {
    return !!navigator.userAgent.match(/iPad/i)
});
Modernizr.addTest("iphone", function() {
    return !!navigator.userAgent.match(/iPhone/i)
});
Modernizr.addTest("ipod", function() {
    return !!navigator.userAgent.match(/iPod/i)
});
Modernizr.addTest("android", function() {
    return !!navigator.userAgent.match(/android/i)
});
Modernizr.addTest("mac", function() {
    return !!navigator.userAgent.match(/Mac/i)
});
Modernizr.addTest("appleios", function() {
    return (Modernizr.ipad || Modernizr.ipod || Modernizr.iphone)
});
/*! jQuery v1.11.2 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
;
! function(d, c) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = d.document ? c(d, !0) : function(b) {
        if (!b.document) {
            throw new Error("jQuery requires a window with a document")
        }
        return c(b)
    } : c(d)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = c.slice,
        e = c.concat,
        f = c.push,
        g = c.indexOf,
        h = {},
        i = h.toString,
        j = h.hasOwnProperty,
        k = {},
        l = "1.11.2",
        m = function(a, b) {
            return new m.fn.init(a, b)
        },
        n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        o = /^-ms-/,
        p = /-([\da-z])/gi,
        q = function(a, b) {
            return b.toUpperCase()
        };
    m.fn = m.prototype = {
        jquery: l,
        constructor: m,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        },
        pushStack: function(a) {
            var b = m.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a, b) {
            return m.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(m.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, m.extend = m.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || m.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
            if (null != (e = arguments[h])) {
                for (d in e) {
                    a = g[d], c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c))
                }
            }
        }
        return g
    }, m.extend({
        expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === m.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === m.type(a)
        },
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            return !m.isArray(a) && a - parseFloat(a) + 1 >= 0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) {
                return !1
            }
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a)) {
                return !1
            }
            try {
                if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) {
                    return !1
                }
            } catch (c) {
                return !1
            }
            if (k.ownLast) {
                for (b in a) {
                    return j.call(a, b)
                }
            }
            for (b in a) {}
            return void 0 === b || j.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        },
        globalEval: function(b) {
            b && m.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function(a) {
            return a.replace(o, "ms-").replace(p, q)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, c) {
            var d, e = 0,
                f = a.length,
                g = r(a);
            if (c) {
                if (g) {
                    for (; f > e; e++) {
                        if (d = b.apply(a[e], c), d === !1) {
                            break
                        }
                    }
                } else {
                    for (e in a) {
                        if (d = b.apply(a[e], c), d === !1) {
                            break
                        }
                    }
                }
            } else {
                if (g) {
                    for (; f > e; e++) {
                        if (d = b.call(a[e], e, a[e]), d === !1) {
                            break
                        }
                    }
                } else {
                    for (e in a) {
                        if (d = b.call(a[e], e, a[e]), d === !1) {
                            break
                        }
                    }
                }
            }
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(n, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (g) {
                    return g.call(b, a, c)
                }
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++) {
                    if (c in b && b[c] === a) {
                        return c
                    }
                }
            }
            return -1
        },
        merge: function(a, b) {
            var c = +b.length,
                d = 0,
                e = a.length;
            while (c > d) {
                a[e++] = b[d++]
            }
            if (c !== c) {
                while (void 0 !== b[d]) {
                    a[e++] = b[d++]
                }
            }
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) {
                d = !b(a[f], f), d !== h && e.push(a[f])
            }
            return e
        },
        map: function(a, b, c) {
            var d, f = 0,
                g = a.length,
                h = r(a),
                i = [];
            if (h) {
                for (; g > f; f++) {
                    d = b(a[f], f, c), null != d && i.push(d)
                }
            } else {
                for (f in a) {
                    d = b(a[f], f, c), null != d && i.push(d)
                }
            }
            return e.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e, f;
            return "string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), e = function() {
                return a.apply(b || this, c.concat(d.call(arguments)))
            }, e.guid = a.guid = a.guid || m.guid++, e) : void 0
        },
        now: function() {
            return +new Date
        },
        support: k
    }), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });

    function r(a) {
        var b = a.length,
            c = m.type(a);
        return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var s = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = hb(),
            z = hb(),
            A = hb(),
            B = function(a, b) {
                return a === b && (l = !0), 0
            },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++) {
                    if (a[c] === b) {
                        return c
                    }
                }
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = M.replace("w", "w#"),
            O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
            P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
            Q = new RegExp(L + "+", "g"),
            R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            S = new RegExp("^" + L + "*," + L + "*"),
            T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            V = new RegExp(P),
            W = new RegExp("^" + N + "$"),
            X = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + O),
                PSEUDO: new RegExp("^" + P),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            $ = /^[^{]+\{\s*\[native \w/,
            _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ab = /[+~]/,
            bb = /'|\\/g,
            cb = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            db = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            eb = function() {
                m()
            };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (fb) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b))
                } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]) {}
                    a.length = c - 1
                }
            }
        }

        function gb(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) {
                return d
            }
            if (!e && p) {
                if (11 !== k && (f = _.exec(a))) {
                    if (j = f[1]) {
                        if (9 === k) {
                            if (h = b.getElementById(j), !h || !h.parentNode) {
                                return d
                            }
                            if (h.id === j) {
                                return d.push(h), d
                            }
                        } else {
                            if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) {
                                return d.push(h), d
                            }
                        }
                    } else {
                        if (f[2]) {
                            return H.apply(d, b.getElementsByTagName(a)), d
                        }
                        if ((j = f[3]) && c.getElementsByClassName) {
                            return H.apply(d, b.getElementsByClassName(j)), d
                        }
                    }
                }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                        while (l--) {
                            o[l] = s + rb(o[l])
                        }
                        w = ab.test(a) && pb(b.parentNode) || b, x = o.join(",")
                    }
                    if (x) {
                        try {
                            return H.apply(d, w.querySelectorAll(x)), d
                        } catch (y) {} finally {
                            r || b.removeAttribute("id")
                        }
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }

        function hb() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function ib(a) {
            return a[u] = !0, a
        }

        function jb(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function kb(a, b) {
            var c = a.split("|"),
                e = a.length;
            while (e--) {
                d.attrHandle[c[e]] = b
            }
        }

        function lb(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) {
                return d
            }
            if (c) {
                while (c = c.nextSibling) {
                    if (c === b) {
                        return -1
                    }
                }
            }
            return a ? 1 : -1
        }

        function mb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function nb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function ob(a) {
            return ib(function(b) {
                return b = +b, ib(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) {
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                    }
                })
            })
        }

        function pb(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = gb.support = {}, f = gb.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = gb.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", eb, !1) : e.attachEvent && e.attachEvent("onunload", eb)), p = !f(g), c.attributes = jb(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = jb(function(a) {
                return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = jb(function(a) {
                return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(cb, db);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(cb, db);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) {
                        1 === c.nodeType && d.push(c)
                    }
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (jb(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), jb(function(a) {
                var b = g.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && jb(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b) {
                    while (b = b.parentNode) {
                        if (b === a) {
                            return !0
                        }
                    }
                }
                return !1
            }, B = b ? function(a, b) {
                if (a === b) {
                    return l = !0, 0
                }
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) {
                    return l = !0, 0
                }
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    h = [a],
                    i = [b];
                if (!e || !f) {
                    return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0
                }
                if (e === f) {
                    return lb(a, b)
                }
                c = a;
                while (c = c.parentNode) {
                    h.unshift(c)
                }
                c = b;
                while (c = c.parentNode) {
                    i.unshift(c)
                }
                while (h[d] === i[d]) {
                    d++
                }
                return d ? lb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
            }, g) : n
        }, gb.matches = function(a, b) {
            return gb(a, null, null, b)
        }, gb.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) {
                try {
                    var d = s.call(a, b);
                    if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) {
                        return d
                    }
                } catch (e) {}
            }
            return gb(b, n, null, [a]).length > 0
        }, gb.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, gb.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, gb.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, gb.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) {
                    b === a[f] && (e = d.push(f))
                }
                while (e--) {
                    a.splice(d[e], 1)
                }
            }
            return k = null, a
        }, e = gb.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) {
                        return a.textContent
                    }
                    for (a = a.firstChild; a; a = a.nextSibling) {
                        c += e(a)
                    }
                } else {
                    if (3 === f || 4 === f) {
                        return a.nodeValue
                    }
                }
            } else {
                while (b = a[d++]) {
                    c += e(b)
                }
            }
            return c
        }, d = gb.selectors = {
            cacheLength: 50,
            createPseudo: ib,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || gb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && gb.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(cb, db).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = gb.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p]) {
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) {
                                            return !1
                                        }
                                    }
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [w, n, m];
                                        break
                                    }
                                }
                            } else {
                                if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) {
                                    m = j[1]
                                } else {
                                    while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
                                        if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) {
                                            break
                                        }
                                    }
                                }
                            }
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || gb.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ib(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) {
                            d = J(a, f[g]), a[d] = !(c[d] = f[g])
                        }
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ib(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(R, "$1"));
                    return d[u] ? ib(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--) {
                            (f = g[h]) && (a[h] = !(b[h] = f))
                        }
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: ib(function(a) {
                    return function(b) {
                        return gb(a, b).length > 0
                    }
                }),
                contains: ib(function(a) {
                    return a = a.replace(cb, db),
                        function(b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                }),
                lang: ib(function(a) {
                    return W.test(a || "") || gb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(),
                        function(b) {
                            var c;
                            do {
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) {
                                    return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-")
                                }
                            } while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) {
                        if (a.nodeType < 6) {
                            return !1
                        }
                    }
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Z.test(a.nodeName)
                },
                input: function(a) {
                    return Y.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: ob(function() {
                    return [0]
                }),
                last: ob(function(a, b) {
                    return [b - 1]
                }),
                eq: ob(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: ob(function(a, b) {
                    for (var c = 0; b > c; c += 2) {
                        a.push(c)
                    }
                    return a
                }),
                odd: ob(function(a, b) {
                    for (var c = 1; b > c; c += 2) {
                        a.push(c)
                    }
                    return a
                }),
                lt: ob(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c;
                        --d >= 0;
                    ) {
                        a.push(d)
                    }
                    return a
                }),
                gt: ob(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c;
                        ++d < b;
                    ) {
                        a.push(d)
                    }
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) {
            d.pseudos[b] = mb(b)
        }
        for (b in {
                submit: !0,
                reset: !0
            }) {
            d.pseudos[b] = nb(b)
        }

        function qb() {}
        qb.prototype = d.filters = d.pseudos, d.setFilters = new qb, g = gb.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) {
                return b ? 0 : k.slice(0)
            }
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) {
                    !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                        value: c,
                        type: g,
                        matches: e
                    }), h = h.slice(c.length))
                }
                if (!c) {
                    break
                }
            }
            return b ? h.length : h ? gb.error(a) : z(a, i).slice(0)
        };

        function rb(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) {
                d += a[b].value
            }
            return d
        }

        function sb(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d]) {
                    if (1 === b.nodeType || e) {
                        return a(b, c, f)
                    }
                }
            } : function(b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    while (b = b[d]) {
                        if ((1 === b.nodeType || e) && a(b, c, g)) {
                            return !0
                        }
                    }
                } else {
                    while (b = b[d]) {
                        if (1 === b.nodeType || e) {
                            if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) {
                                return j[2] = h[2]
                            }
                            if (i[d] = j, j[2] = a(b, c, g)) {
                                return !0
                            }
                        }
                    }
                }
            }
        }

        function tb(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--) {
                    if (!a[e](b, c, d)) {
                        return !1
                    }
                }
                return !0
            } : a[0]
        }

        function ub(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) {
                gb(a, b[d], c)
            }
            return c
        }

        function vb(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) {
                (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h))
            }
            return g
        }

        function wb(a, b, c, d, e, f) {
            return d && !d[u] && (d = wb(d)), e && !e[u] && (e = wb(e, f)), ib(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || ub(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : vb(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = vb(r, n), d(j, [], h, i), k = j.length;
                    while (k--) {
                        (l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                    }
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--) {
                                (l = r[k]) && j.push(q[k] = l)
                            }
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--) {
                            (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                        }
                    }
                } else {
                    r = vb(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
                }
            })
        }

        function xb(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sb(function(a) {
                    return a === b
                }, h, !0), l = sb(function(a) {
                    return J(b, a) > -1
                }, h, !0), m = [function(a, c, d) {
                    var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                    return b = null, e
                }]; f > i; i++) {
                if (c = d.relative[a[i].type]) {
                    m = [sb(tb(m), c)]
                } else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++) {
                            if (d.relative[a[e].type]) {
                                break
                            }
                        }
                        return wb(i > 1 && tb(m), i > 1 && rb(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(R, "$1"), c, e > i && xb(a.slice(i, e)), f > e && xb(a = a.slice(e)), f > e && rb(a))
                    }
                    m.push(c)
                }
            }
            return tb(m)
        }

        function yb(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, m, o, p = 0,
                        q = "0",
                        r = f && [],
                        s = [],
                        t = j,
                        u = f || e && d.find.TAG("*", k),
                        v = w += null == t ? 1 : Math.random() || 0.1,
                        x = u.length;
                    for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                        if (e && l) {
                            m = 0;
                            while (o = a[m++]) {
                                if (o(l, g, h)) {
                                    i.push(l);
                                    break
                                }
                            }
                            k && (w = v)
                        }
                        c && ((l = !o && l) && p--, f && r.push(l))
                    }
                    if (p += q, c && q !== p) {
                        m = 0;
                        while (o = b[m++]) {
                            o(r, s, g, h)
                        }
                        if (f) {
                            if (p > 0) {
                                while (q--) {
                                    r[q] || s[q] || (s[q] = F.call(i))
                                }
                            }
                            s = vb(s)
                        }
                        H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && gb.uniqueSort(i)
                    }
                    return k && (w = v, j = t), r
                };
            return c ? ib(f) : f
        }
        return h = gb.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) {
                    f = xb(b[c]), f[u] ? d.push(f) : e.push(f)
                }
                f = A(a, yb(e, d)), f.selector = a
            }
            return f
        }, i = gb.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b) {
                        return e
                    }
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) {
                        break
                    }
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && pb(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && rb(j), !a) {
                            return H.apply(e, f), e
                        }
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, ab.test(a) && pb(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = jb(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), jb(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || kb("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && jb(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || kb("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), jb(function(a) {
            return null == a.getAttribute("disabled")
        }) || kb(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), gb
    }(a);
    m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;
    var t = m.expr.match.needsContext,
        u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        v = /^.[^:#\[\.,]*$/;

    function w(a, b, c) {
        if (m.isFunction(b)) {
            return m.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            })
        }
        if (b.nodeType) {
            return m.grep(a, function(a) {
                return a === b !== c
            })
        }
        if ("string" == typeof b) {
            if (v.test(b)) {
                return m.filter(b, a, c)
            }
            b = m.filter(b, a)
        }
        return m.grep(a, function(a) {
            return m.inArray(a, b) >= 0 !== c
        })
    }
    m.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, m.fn.extend({
        find: function(a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) {
                return this.pushStack(m(a).filter(function() {
                    for (b = 0; e > b; b++) {
                        if (m.contains(d[b], this)) {
                            return !0
                        }
                    }
                }))
            }
            for (b = 0; e > b; b++) {
                m.find(a, d[b], c)
            }
            return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function(a) {
            return this.pushStack(w(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(w(this, a || [], !0))
        },
        is: function(a) {
            return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length
        }
    });
    var x, y = a.document,
        z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        A = m.fn.init = function(a, b) {
            var c, d;
            if (!a) {
                return this
            }
            if ("string" == typeof a) {
                if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) {
                    return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a)
                }
                if (c[1]) {
                    if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(c[1]) && m.isPlainObject(b)) {
                        for (c in b) {
                            m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c])
                        }
                    }
                    return this
                }
                if (d = y.getElementById(c[2]), d && d.parentNode) {
                    if (d.id !== c[2]) {
                        return x.find(a)
                    }
                    this.length = 1, this[0] = d
                }
                return this.context = y, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), m.makeArray(a, this))
        };
    A.prototype = m.fn, x = m(y);
    var B = /^(?:parents|prev(?:Until|All))/,
        C = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    m.extend({
        dir: function(a, b, c) {
            var d = [],
                e = a[b];
            while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c))) {
                1 === e.nodeType && d.push(e), e = e[b]
            }
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) {
                1 === a.nodeType && a !== b && c.push(a)
            }
            return c
        }
    }), m.fn.extend({
        has: function(a) {
            var b, c = m(a, this),
                d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++) {
                    if (m.contains(this, c[b])) {
                        return !0
                    }
                }
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++) {
                for (c = this[d]; c && c !== b; c = c.parentNode) {
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
                }
            }
            return this.pushStack(f.length > 1 ? m.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(m.unique(m.merge(this.get(), m(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function D(a, b) {
        do {
            a = a[b]
        } while (a && 1 !== a.nodeType);
        return a
    }
    m.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return m.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return m.dir(a, "parentNode", c)
        },
        next: function(a) {
            return D(a, "nextSibling")
        },
        prev: function(a) {
            return D(a, "previousSibling")
        },
        nextAll: function(a) {
            return m.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return m.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return m.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return m.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return m.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return m.sibling(a.firstChild)
        },
        contents: function(a) {
            return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes)
        }
    }, function(a, b) {
        m.fn[a] = function(c, d) {
            var e = m.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = m.filter(d, e)), this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var E = /\S+/g,
        F = {};

    function G(a) {
        var b = F[a] = {};
        return m.each(a.match(E) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    m.Callbacks = function(a) {
        a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);
        var b, c, d, e, f, g, h = [],
            i = !a.once && [],
            j = function(l) {
                for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++) {
                    if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                        c = !1;
                        break
                    }
                }
                b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
            },
            k = {
                add: function() {
                    if (h) {
                        var d = h.length;
                        ! function f(b) {
                            m.each(b, function(b, c) {
                                var d = m.type(c);
                                "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c)
                            })
                        }(arguments), b ? e = h.length : c && (g = d, j(c))
                    }
                    return this
                },
                remove: function() {
                    return h && m.each(arguments, function(a, c) {
                        var d;
                        while ((d = m.inArray(c, h, d)) > -1) {
                            h.splice(d, 1), b && (e >= d && e--, f >= d && f--)
                        }
                    }), this
                },
                has: function(a) {
                    return a ? m.inArray(a, h) > -1 : !(!h || !h.length)
                },
                empty: function() {
                    return h = [], e = 0, this
                },
                disable: function() {
                    return h = i = c = void 0, this
                },
                disabled: function() {
                    return !h
                },
                lock: function() {
                    return i = void 0, c || k.disable(), this
                },
                locked: function() {
                    return !i
                },
                fireWith: function(a, c) {
                    return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this
                },
                fire: function() {
                    return k.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return k
    }, m.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", m.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", m.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", m.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return m.Deferred(function(c) {
                            m.each(b, function(b, f) {
                                var g = m.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? m.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, m.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0,
                c = d.call(arguments),
                e = c.length,
                f = 1 !== e || a && m.isFunction(a.promise) ? e : 0,
                g = 1 === f ? a : m.Deferred(),
                h = function(a, b, c) {
                    return function(e) {
                        b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, k;
            if (e > 1) {
                for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) {
                    c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f
                }
            }
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var H;
    m.fn.ready = function(a) {
        return m.ready.promise().done(a), this
    }, m.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? m.readyWait++ : m.ready(!0)
        },
        ready: function(a) {
            if (a === !0 ? !--m.readyWait : !m.isReady) {
                if (!y.body) {
                    return setTimeout(m.ready)
                }
                m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]), m.fn.triggerHandler && (m(y).triggerHandler("ready"), m(y).off("ready")))
            }
        }
    });

    function I() {
        y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J))
    }

    function J() {
        (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), m.ready())
    }
    m.ready.promise = function(b) {
        if (!H) {
            if (H = m.Deferred(), "complete" === y.readyState) {
                setTimeout(m.ready)
            } else {
                if (y.addEventListener) {
                    y.addEventListener("DOMContentLoaded", J, !1), a.addEventListener("load", J, !1)
                } else {
                    y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
                    var c = !1;
                    try {
                        c = null == a.frameElement && y.documentElement
                    } catch (d) {}
                    c && c.doScroll && ! function e() {
                        if (!m.isReady) {
                            try {
                                c.doScroll("left")
                            } catch (a) {
                                return setTimeout(e, 50)
                            }
                            I(), m.ready()
                        }
                    }()
                }
            }
        }
        return H.promise(b)
    };
    var K = "undefined",
        L;
    for (L in m(k)) {
        break
    }
    k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = !1, m(function() {
            var a, b, c, d;
            c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
        }),
        function() {
            var a = y.createElement("div");
            if (null == k.deleteExpando) {
                k.deleteExpando = !0;
                try {
                    delete a.test
                } catch (b) {
                    k.deleteExpando = !1
                }
            }
            a = null
        }(), m.acceptData = function(a) {
            var b = m.noData[(a.nodeName + " ").toLowerCase()],
                c = +a.nodeType || 1;
            return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
        };
    var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        N = /([A-Z])/g;

    function O(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(N, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c
                } catch (e) {}
                m.data(a, b, c)
            } else {
                c = void 0
            }
        }
        return c
    }

    function P(a) {
        var b;
        for (b in a) {
            if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b) {
                return !1
            }
        }
        return !0
    }

    function Q(a, b, d, e) {
        if (m.acceptData(a)) {
            var f, g, h = m.expando,
                i = a.nodeType,
                j = i ? m.cache : a,
                k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) {
                return k || (k = i ? a[h] = c.pop() || m.guid++ : h), j[k] || (j[k] = i ? {} : {
                    toJSON: m.noop
                }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, f
            }
        }
    }

    function R(a, b, c) {
        if (m.acceptData(a)) {
            var d, e, f = a.nodeType,
                g = f ? m.cache : a,
                h = f ? a[m.expando] : m.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    while (e--) {
                        delete d[b[e]]
                    }
                    if (c ? !P(d) : !m.isEmptyObject(d)) {
                        return
                    }
                }(c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
            }
        }
    }
    m.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a)
        },
        data: function(a, b, c) {
            return Q(a, b, c)
        },
        removeData: function(a, b) {
            return R(a, b)
        },
        _data: function(a, b, c) {
            return Q(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return R(a, b, !0)
        }
    }), m.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
                    c = g.length;
                    while (c--) {
                        g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), O(f, d, e[d])))
                    }
                    m._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                m.data(this, a)
            }) : arguments.length > 1 ? this.each(function() {
                m.data(this, a, b)
            }) : f ? O(f, a, m.data(f, a)) : void 0
        },
        removeData: function(a) {
            return this.each(function() {
                m.removeData(this, a)
            })
        }
    }), m.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = m.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = m._queueHooks(a, b),
                g = function() {
                    m.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return m._data(a, c) || m._data(a, c, {
                empty: m.Callbacks("once memory").add(function() {
                    m._removeData(a, b + "queue"), m._removeData(a, c)
                })
            })
        }
    }), m.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = m.queue(this, a, b);
                m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                m.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = m.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) {
                c = m._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h))
            }
            return h(), e.promise(b)
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = ["Top", "Right", "Bottom", "Left"],
        U = function(a, b) {
            return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a)
        },
        V = m.access = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === m.type(c)) {
                e = !0;
                for (h in c) {
                    m.access(a, b, h, c[h], !0, f, g)
                }
            } else {
                if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                        return j.call(m(a), c)
                    })), b)) {
                    for (; i > h; h++) {
                        b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)))
                    }
                }
            }
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        W = /^(?:checkbox|radio)$/i;
    ! function() {
        var a = y.createElement("input"),
            b = y.createElement("div"),
            c = y.createDocumentFragment();
        if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName("tbody").length, k.htmlSerialize = !!b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function() {
                k.noCloneEvent = !1
            }), b.cloneNode(!0).click()), null == k.deleteExpando) {
            k.deleteExpando = !0;
            try {
                delete b.test
            } catch (d) {
                k.deleteExpando = !1
            }
        }
    }(),
    function() {
        var b, c, d = y.createElement("div");
        for (b in {
                submit: !0,
                change: !0,
                focusin: !0
            }) {
            c = "on" + b, (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === !1)
        }
        d = null
    }();
    var X = /^(?:input|select|textarea)$/i,
        Y = /^key/,
        Z = /^(?:mouse|pointer|contextmenu)|click/,
        $ = /^(?:focusinfocus|focusoutblur)$/,
        _ = /^([^.]*)(?:\.(.+)|)$/;

    function ab() {
        return !0
    }

    function bb() {
        return !1
    }

    function cb() {
        try {
            return y.activeElement
        } catch (a) {}
    }
    m.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
                    return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments)
                }, k.elem = a), b = (b || "").match(E) || [""], h = b.length;
                while (h--) {
                    f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = m.event.special[o] || {}, l = m.extend({
                        type: o,
                        origType: q,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && m.expr.match.needsContext.test(e),
                        namespace: p.join(".")
                    }, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), m.event.global[o] = !0)
                }
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(E) || [""], j = b.length;
                while (j--) {
                    if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length;
                        while (f--) {
                            g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g))
                        }
                        i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), delete k[o])
                    } else {
                        for (o in k) {
                            m.event.remove(a, o + b[j], c, d, !0)
                        }
                    }
                }
                m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, k, l, n, o = [d || y],
                p = j.call(b, "type") ? b.type : b,
                q = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : m.makeArray(c, [b]), k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
                if (!e && !k.noBubble && !m.isWindow(d)) {
                    for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode) {
                        o.push(h), l = h
                    }
                    l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a)
                }
                n = 0;
                while ((h = o[n++]) && !b.isPropagationStopped()) {
                    b.type = n > 1 ? i : k.bindType || p, f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault())
                }
                if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
                    l = d[g], l && (d[g] = null), m.event.triggered = p;
                    try {
                        d[p]()
                    } catch (r) {}
                    m.event.triggered = void 0, l && (d[g] = l)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = m.event.fix(a);
            var b, c, e, f, g, h = [],
                i = d.call(arguments),
                j = (m._data(this, "events") || {})[a.type] || [],
                k = m.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = m.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, g = 0;
                    while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped()) {
                        (!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()))
                    }
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type)) {
                for (; i != this; i = i.parentNode || this) {
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (e = [], f = 0; h > f; f++) {
                            d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [i]).length), e[c] && e.push(d)
                        }
                        e.length && g.push({
                            elem: i,
                            handlers: e
                        })
                    }
                }
            }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        fix: function(a) {
            if (a[m.expando]) {
                return a
            }
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length;
            while (b--) {
                c = d[b], a[c] = f[c]
            }
            return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button,
                    g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== cb() && this.focus) {
                        try {
                            return this.focus(), !1
                        } catch (a) {}
                    }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === cb() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return m.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = m.extend(new m.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, m.removeEvent = y.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c))
    }, m.Event = function(a, b) {
        return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ab : bb) : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void(this[m.expando] = !0)) : new m.Event(a, b)
    }, m.Event.prototype = {
        isDefaultPrevented: bb,
        isPropagationStopped: bb,
        isImmediatePropagationStopped: bb,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = ab, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = ab, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ab, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, m.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        m.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), k.submitBubbles || (m.event.special.submit = {
        setup: function() {
            return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target,
                    c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0;
                c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function(a) {
                    a._submit_bubble = !0
                }), m._data(c, "submitBubbles", !0))
            })
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function() {
            return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit")
        }
    }), k.changeBubbles || (m.event.special.change = {
        setup: function() {
            return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }), m.event.add(this, "click._change", function(a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate("change", this, a, !0)
            })), !1) : void m.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0)
                }), m._data(b, "changeBubbles", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return m.event.remove(this, "._change"), !X.test(this.nodeName)
        }
    }), k.focusinBubbles || m.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            m.event.simulate(b, a.target, m.event.fix(a), !0)
        };
        m.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = m._data(d, b);
                e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = m._data(d, b) - 1;
                e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b))
            }
        }
    }), m.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (f in a) {
                    this.on(f, b, c, a[f], e)
                }
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) {
                d = bb
            } else {
                if (!d) {
                    return this
                }
            }
            return 1 === e && (g = d, d = function(a) {
                return m().off(a), g.apply(this, arguments)
            }, d.guid = g.guid || (g.guid = m.guid++)), this.each(function() {
                m.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) {
                return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this
            }
            if ("object" == typeof a) {
                for (e in a) {
                    this.off(e, b, a[e])
                }
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = bb), this.each(function() {
                m.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                m.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? m.event.trigger(a, b, c, !0) : void 0
        }
    });

    function db(a) {
        var b = eb.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement) {
            while (b.length) {
                c.createElement(b.pop())
            }
        }
        return c
    }
    var eb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        fb = / jQuery\d+="(?:null|\d+)"/g,
        gb = new RegExp("<(?:" + eb + ")[\\s/>]", "i"),
        hb = /^\s+/,
        ib = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        jb = /<([\w:]+)/,
        kb = /<tbody/i,
        lb = /<|&#?\w+;/,
        mb = /<(?:script|style|link)/i,
        nb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ob = /^$|\/(?:java|ecma)script/i,
        pb = /^true\/(.*)/,
        qb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        rb = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        sb = db(y),
        tb = sb.appendChild(y.createElement("div"));
    rb.optgroup = rb.option, rb.tbody = rb.tfoot = rb.colgroup = rb.caption = rb.thead, rb.th = rb.td;

    function ub(a, b) {
        var c, d, e = 0,
            f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || "*") : void 0;
        if (!f) {
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) {
                !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ub(d, b))
            }
        }
        return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f
    }

    function vb(a) {
        W.test(a.type) && (a.defaultChecked = a.checked)
    }

    function wb(a, b) {
        return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function xb(a) {
        return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a
    }

    function yb(a) {
        var b = pb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function zb(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) {
            m._data(c, "globalEval", !b || m._data(b[d], "globalEval"))
        }
    }

    function Ab(a, b) {
        if (1 === b.nodeType && m.hasData(a)) {
            var c, d, e, f = m._data(a),
                g = m._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h) {
                    for (d = 0, e = h[c].length; e > d; d++) {
                        m.event.add(b, c, h[c][d])
                    }
                }
            }
            g.data && (g.data = m.extend({}, g.data))
        }
    }

    function Bb(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) {
                e = m._data(b);
                for (d in e.events) {
                    m.removeEvent(b, d, e.handle)
                }
                b.removeAttribute(m.expando)
            }
            "script" === c && b.text !== a.text ? (xb(b).text = a.text, yb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }
    m.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h, i = m.contains(a.ownerDocument, a);
            if (k.html5Clone || m.isXMLDoc(a) || !gb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (tb.innerHTML = a.outerHTML, tb.removeChild(f = tb.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a))) {
                for (d = ub(f), h = ub(a), g = 0; null != (e = h[g]);
                    ++g) {
                    d[g] && Bb(e, d[g])
                }
            }
            if (b) {
                if (c) {
                    for (h = h || ub(a), d = d || ub(f), g = 0; null != (e = h[g]); g++) {
                        Ab(e, d[g])
                    }
                } else {
                    Ab(a, f)
                }
            }
            return d = ub(f, "script"), d.length > 0 && zb(d, !i && ub(a, "script")), d = h = e = null, f
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, l, n = a.length, o = db(b), p = [], q = 0; n > q; q++) {
                if (f = a[q], f || 0 === f) {
                    if ("object" === m.type(f)) {
                        m.merge(p, f.nodeType ? [f] : f)
                    } else {
                        if (lb.test(f)) {
                            h = h || o.appendChild(b.createElement("div")), i = (jb.exec(f) || ["", ""])[1].toLowerCase(), l = rb[i] || rb._default, h.innerHTML = l[1] + f.replace(ib, "<$1></$2>") + l[2], e = l[0];
                            while (e--) {
                                h = h.lastChild
                            }
                            if (!k.leadingWhitespace && hb.test(f) && p.push(b.createTextNode(hb.exec(f)[0])), !k.tbody) {
                                f = "table" !== i || kb.test(f) ? "<table>" !== l[1] || kb.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length;
                                while (e--) {
                                    m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j)
                                }
                            }
                            m.merge(p, h.childNodes), h.textContent = "";
                            while (h.firstChild) {
                                h.removeChild(h.firstChild)
                            }
                            h = o.lastChild
                        } else {
                            p.push(b.createTextNode(f))
                        }
                    }
                }
            }
            h && o.removeChild(h), k.appendChecked || m.grep(ub(p, "input"), vb), q = 0;
            while (f = p[q++]) {
                if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), h = ub(o.appendChild(f), "script"), g && zb(h), c)) {
                    e = 0;
                    while (f = h[e++]) {
                        ob.test(f.type || "") && c.push(f)
                    }
                }
            }
            return h = null, o
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++) {
                if ((b || m.acceptData(d)) && (f = d[i], g = f && j[f])) {
                    if (g.events) {
                        for (e in g.events) {
                            n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle)
                        }
                    }
                    j[f] && (delete j[f], l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null, c.push(f))
                }
            }
        }
    }), m.fn.extend({
        text: function(a) {
            return V(this, function(a) {
                return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wb(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wb(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++) {
                b || 1 !== c.nodeType || m.cleanData(ub(c)), c.parentNode && (b && m.contains(c.ownerDocument, c) && zb(ub(c, "script")), c.parentNode.removeChild(c))
            }
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && m.cleanData(ub(a, !1));
                while (a.firstChild) {
                    a.removeChild(a.firstChild)
                }
                a.options && m.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return m.clone(this, a, b)
            })
        },
        html: function(a) {
            return V(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a) {
                    return 1 === b.nodeType ? b.innerHTML.replace(fb, "") : void 0
                }
                if (!("string" != typeof a || mb.test(a) || !k.htmlSerialize && gb.test(a) || !k.leadingWhitespace && hb.test(a) || rb[(jb.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(ib, "<$1></$2>");
                    try {
                        for (; d > c; c++) {
                            b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ub(b, !1)), b.innerHTML = a)
                        }
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, m.cleanData(ub(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0,
                l = this.length,
                n = this,
                o = l - 1,
                p = a[0],
                q = m.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && nb.test(p)) {
                return this.each(function(c) {
                    var d = n.eq(c);
                    q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
                })
            }
            if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
                for (g = m.map(ub(i, "script"), xb), f = g.length; l > j; j++) {
                    d = i, j !== o && (d = m.clone(d, !0, !0), f && m.merge(g, ub(d, "script"))), b.call(this[j], d, j)
                }
                if (f) {
                    for (h = g[g.length - 1].ownerDocument, m.map(g, yb), j = 0; f > j; j++) {
                        d = g[j], ob.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qb, "")))
                    }
                }
                i = c = null
            }
            return this
        }
    }), m.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        m.fn[a] = function(a) {
            for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++) {
                c = d === h ? this : this.clone(!0), m(g[d])[b](c), f.apply(e, c.get())
            }
            return this.pushStack(e)
        }
    });
    var Cb, Db = {};

    function Eb(b, c) {
        var d, e = m(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display");
        return e.detach(), f
    }

    function Fb(a) {
        var b = y,
            c = Db[a];
        return c || (c = Eb(a, b), "none" !== c && c || (Cb = (Cb || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Cb[0].contentWindow || Cb[0].contentDocument).document, b.write(), b.close(), c = Eb(a, b), Cb.detach()), Db[a] = c), c
    }! function() {
        var a;
        k.shrinkWrapBlocks = function() {
            if (null != a) {
                return a
            }
            a = !1;
            var b, c, d;
            return c = y.getElementsByTagName("body")[0], c && c.style ? (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(y.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0
        }
    }();
    var Gb = /^margin/,
        Hb = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
        Ib, Jb, Kb = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ib = function(b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
    }, Jb = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ib(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), Hb.test(g) && Gb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
    }) : y.documentElement.currentStyle && (Ib = function(a) {
        return a.currentStyle
    }, Jb = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ib(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Hb.test(g) && !Kb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
    });

    function Lb(a, b) {
        return {
            get: function() {
                var c = a();
                if (null != c) {
                    return c ? void delete this.get : (this.get = b).apply(this, arguments)
                }
            }
        }
    }! function() {
        var b, c, d, e, f, g, h;
        if (b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = d && d.style) {
            c.cssText = "float:left;opacity:.5", k.opacity = "0.5" === c.opacity, k.cssFloat = !!c.cssFloat, b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === b.style.backgroundClip, k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, m.extend(k, {
                reliableHiddenOffsets: function() {
                    return null == g && i(), g
                },
                boxSizingReliable: function() {
                    return null == f && i(), f
                },
                pixelPosition: function() {
                    return null == e && i(), e
                },
                reliableMarginRight: function() {
                    return null == h && i(), h
                }
            });

            function i() {
                var b, c, d, i;
                c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", e = f = !1, h = !0, a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top, f = "4px" === (a.getComputedStyle(b, null) || {
                    width: "4px"
                }).width, i = b.appendChild(y.createElement("div")), i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", b.style.width = "1px", h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight), b.removeChild(i)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = b.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", g = 0 === i[0].offsetHeight, g && (i[0].style.display = "", i[1].style.display = "none", g = 0 === i[0].offsetHeight), c.removeChild(d))
            }
        }
    }(), m.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) {
            g[f] = a.style[f], a.style[f] = b[f]
        }
        e = c.apply(a, d || []);
        for (f in b) {
            a.style[f] = g[f]
        }
        return e
    };
    var Mb = /alpha\([^)]*\)/i,
        Nb = /opacity\s*=\s*([^)]*)/,
        Ob = /^(none|table(?!-c[ea]).+)/,
        Pb = new RegExp("^(" + S + ")(.*)$", "i"),
        Qb = new RegExp("^([+-])=(" + S + ")", "i"),
        Rb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Sb = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Tb = ["Webkit", "O", "Moz", "ms"];

    function Ub(a, b) {
        if (b in a) {
            return b
        }
        var c = b.charAt(0).toUpperCase() + b.slice(1),
            d = b,
            e = Tb.length;
        while (e--) {
            if (b = Tb[e] + c, b in a) {
                return b
            }
        }
        return d
    }

    function Vb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) {
            d = a[g], d.style && (f[g] = m._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fb(d.nodeName)))) : (e = U(d), (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display"))))
        }
        for (g = 0; h > g; g++) {
            d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"))
        }
        return a
    }

    function Wb(a, b, c) {
        var d = Pb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function Xb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) {
            "margin" === c && (g += m.css(a, c + T[f], !0, e)), d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)), "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e), "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e)))
        }
        return g
    }

    function Yb(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Ib(a),
            g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Jb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Hb.test(e)) {
                return e
            }
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Xb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    m.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Jb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": k.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = m.camelCase(b),
                    i = a.style;
                if (b = m.cssProps[h] || (m.cssProps[h] = Ub(i, h)), g = m.cssHooks[b] || m.cssHooks[h], void 0 === c) {
                    return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b]
                }
                if (f = typeof c, "string" === f && (e = Qb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) {
                    try {
                        i[b] = c
                    } catch (j) {}
                }
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = m.camelCase(b);
            return b = m.cssProps[h] || (m.cssProps[h] = Ub(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Jb(a, b, d)), "normal" === f && b in Sb && (f = Sb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f
        }
    }), m.each(["height", "width"], function(a, b) {
        m.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Ob.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Rb, function() {
                    return Yb(a, b, d)
                }) : Yb(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && Ib(a);
                return Wb(a, c, d ? Xb(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), k.opacity || (m.cssHooks.opacity = {
        get: function(a, b) {
            return Nb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === m.trim(f.replace(Mb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Mb.test(f) ? f.replace(Mb, e) : f + " " + e)
        }
    }), m.cssHooks.marginRight = Lb(k.reliableMarginRight, function(a, b) {
        return b ? m.swap(a, {
            display: "inline-block"
        }, Jb, [a, "marginRight"]) : void 0
    }), m.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        m.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) {
                    e[a + T[d] + b] = f[d] || f[d - 2] || f[0]
                }
                return e
            }
        }, Gb.test(a) || (m.cssHooks[a + b].set = Wb)
    }), m.fn.extend({
        css: function(a, b) {
            return V(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (m.isArray(b)) {
                    for (d = Ib(a), e = b.length; e > g; g++) {
                        f[b[g]] = m.css(a, b[g], !1, d)
                    }
                    return f
                }
                return void 0 !== c ? m.style(a, b, c) : m.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return Vb(this, !0)
        },
        hide: function() {
            return Vb(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                U(this) ? m(this).show() : m(this).hide()
            })
        }
    });

    function Zb(a, b, c, d, e) {
        return new Zb.prototype.init(a, b, c, d, e)
    }
    m.Tween = Zb, Zb.prototype = {
        constructor: Zb,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (m.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Zb.propHooks[this.prop];
            return a && a.get ? a.get(this) : Zb.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Zb.propHooks[this.prop];
            return this.pos = b = this.options.duration ? m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Zb.propHooks._default.set(this), this
        }
    }, Zb.prototype.init.prototype = Zb.prototype, Zb.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, Zb.propHooks.scrollTop = Zb.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, m.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return 0.5 - Math.cos(a * Math.PI) / 2
        }
    }, m.fx = Zb.prototype.init, m.fx.step = {};
    var $b, _b, ac = /^(?:toggle|show|hide)$/,
        bc = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
        cc = /queueHooks$/,
        dc = [ic],
        ec = {
            "*": [function(a, b) {
                var c = this.createTween(a, b),
                    d = c.cur(),
                    e = bc.exec(b),
                    f = e && e[3] || (m.cssNumber[a] ? "" : "px"),
                    g = (m.cssNumber[a] || "px" !== f && +d) && bc.exec(m.css(c.elem, a)),
                    h = 1,
                    i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do {
                        h = h || ".5", g /= h, m.style(c.elem, a, g + f)
                    } while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };

    function fc() {
        return setTimeout(function() {
            $b = void 0
        }), $b = m.now()
    }

    function gc(a, b) {
        var c, d = {
                height: a
            },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) {
            c = T[e], d["margin" + c] = d["padding" + c] = a
        }
        return b && (d.opacity = d.width = a), d
    }

    function hc(a, b, c) {
        for (var d, e = (ec[b] || []).concat(ec["*"]), f = 0, g = e.length; g > f; f++) {
            if (d = e[f].call(c, b, a)) {
                return d
            }
        }
    }

    function ic(a, b, c) {
        var d, e, f, g, h, i, j, l, n = this,
            o = {},
            p = a.style,
            q = a.nodeType && U(a),
            r = m._data(a, "fxshow");
        c.queue || (h = m._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, n.always(function() {
            n.always(function() {
                h.unqueued--, m.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = m.css(a, "display"), l = "none" === j ? m._data(a, "olddisplay") || Fb(a.nodeName) : j, "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fb(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", k.shrinkWrapBlocks() || n.always(function() {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
        }));
        for (d in b) {
            if (e = b[d], ac.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d]) {
                        continue
                    }
                    q = !0
                }
                o[d] = r && r[d] || m.style(a, d)
            } else {
                j = void 0
            }
        }
        if (m.isEmptyObject(o)) {
            "inline" === ("none" === j ? Fb(a.nodeName) : j) && (p.display = j)
        } else {
            r ? "hidden" in r && (q = r.hidden) : r = m._data(a, "fxshow", {}), f && (r.hidden = !q), q ? m(a).show() : n.done(function() {
                m(a).hide()
            }), n.done(function() {
                var b;
                m._removeData(a, "fxshow");
                for (b in o) {
                    m.style(a, b, o[b])
                }
            });
            for (d in o) {
                g = hc(q ? r[d] : 0, d, n), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
            }
        }
    }

    function jc(a, b) {
        var c, d, e, f, g;
        for (c in a) {
            if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) {
                    c in a || (a[c] = f[c], b[c] = e)
                }
            } else {
                b[d] = e
            }
        }
    }

    function kc(a, b, c) {
        var d, e, f = 0,
            g = dc.length,
            h = m.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) {
                    return !1
                }
                for (var b = $b || fc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) {
                    j.tweens[g].run(f)
                }
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: m.extend({}, b),
                opts: m.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: $b || fc(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) {
                        return this
                    }
                    for (e = !0; d > c; c++) {
                        j.tweens[c].run(1)
                    }
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (jc(k, j.opts.specialEasing); g > f; f++) {
            if (d = dc[f].call(j, a, k, j.opts)) {
                return d
            }
        }
        return m.map(k, hc, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    m.Animation = m.extend(kc, {
            tweener: function(a, b) {
                m.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                for (var c, d = 0, e = a.length; e > d; d++) {
                    c = a[d], ec[c] = ec[c] || [], ec[c].unshift(b)
                }
            },
            prefilter: function(a, b) {
                b ? dc.unshift(a) : dc.push(a)
            }
        }), m.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? m.extend({}, a) : {
                complete: c || !c && b || m.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !m.isFunction(b) && b
            };
            return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue)
            }, d
        }, m.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(U).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = m.isEmptyObject(a),
                    f = m.speed(b, c, d),
                    g = function() {
                        var b = kc(this, m.extend({}, a), f);
                        (e || m._data(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = m.timers,
                        g = m._data(this);
                    if (e) {
                        g[e] && g[e].stop && d(g[e])
                    } else {
                        for (e in g) {
                            g[e] && g[e].stop && cc.test(e) && d(g[e])
                        }
                    }
                    for (e = f.length; e--;) {
                        f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1))
                    }(b || !c) && m.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = m._data(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = m.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
                        f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1))
                    }
                    for (b = 0; g > b; b++) {
                        d[b] && d[b].finish && d[b].finish.call(this)
                    }
                    delete c.finish
                })
            }
        }), m.each(["toggle", "show", "hide"], function(a, b) {
            var c = m.fn[b];
            m.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gc(b, !0), a, d, e)
            }
        }), m.each({
            slideDown: gc("show"),
            slideUp: gc("hide"),
            slideToggle: gc("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            m.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), m.timers = [], m.fx.tick = function() {
            var a, b = m.timers,
                c = 0;
            for ($b = m.now(); c < b.length; c++) {
                a = b[c], a() || b[c] !== a || b.splice(c--, 1)
            }
            b.length || m.fx.stop(), $b = void 0
        }, m.fx.timer = function(a) {
            m.timers.push(a), a() ? m.fx.start() : m.timers.pop()
        }, m.fx.interval = 13, m.fx.start = function() {
            _b || (_b = setInterval(m.fx.tick, m.fx.interval))
        }, m.fx.stop = function() {
            clearInterval(_b), _b = null
        }, m.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, m.fn.delay = function(a, b) {
            return a = m.fx ? m.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        function() {
            var a, b, c, d, e;
            b = y.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !== b.className, k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" === d.getAttribute("href"), k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement("form").enctype, c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), k.radioValue = "t" === a.value
        }();
    var lc = /\r/g;
    m.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            if (arguments.length) {
                return d = m.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                })
            }
            if (e) {
                return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(lc, "") : null == c ? "" : c)
            }
        }
    }), m.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = m.find.attr(a, "value");
                    return null != b ? b : m.trim(m.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
                        if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
                            if (b = m(c).val(), f) {
                                return b
                            }
                            g.push(b)
                        }
                    }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = m.makeArray(b),
                        g = e.length;
                    while (g--) {
                        if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0) {
                            try {
                                d.selected = c = !0
                            } catch (h) {
                                d.scrollHeight
                            }
                        } else {
                            d.selected = !1
                        }
                    }
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), m.each(["radio", "checkbox"], function() {
        m.valHooks[this] = {
            set: function(a, b) {
                return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0
            }
        }, k.checkOn || (m.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var mc, nc, oc = m.expr.attrHandle,
        pc = /^(?:checked|selected)$/i,
        qc = k.getSetAttribute,
        rc = k.input;
    m.fn.extend({
        attr: function(a, b) {
            return V(this, m.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                m.removeAttr(this, a)
            })
        }
    }), m.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) {
                return typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nc : mc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void m.removeAttr(a, b))
            }
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(E);
            if (f && 1 === a.nodeType) {
                while (c = f[e++]) {
                    d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rc && qc || !pc.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""), a.removeAttribute(qc ? c : d)
                }
            }
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), nc = {
        set: function(a, b, c) {
            return b === !1 ? m.removeAttr(a, c) : rc && qc || !pc.test(c) ? a.setAttribute(!qc && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, m.each(m.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = oc[b] || m.find.attr;
        oc[b] = rc && qc || !pc.test(b) ? function(a, b, d) {
            var e, f;
            return d || (f = oc[b], oc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, oc[b] = f), e
        } : function(a, b, c) {
            return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), rc && qc || (m.attrHooks.value = {
        set: function(a, b, c) {
            return m.nodeName(a, "input") ? void(a.defaultValue = b) : mc && mc.set(a, b, c)
        }
    }), qc || (mc = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    }, oc.id = oc.name = oc.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, m.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },
        set: mc.set
    }, m.attrHooks.contenteditable = {
        set: function(a, b, c) {
            mc.set(a, "" === b ? !1 : b, c)
        }
    }, m.each(["width", "height"], function(a, b) {
        m.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    })), k.style || (m.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var sc = /^(?:input|select|textarea|button|object)$/i,
        tc = /^(?:a|area)$/i;
    m.fn.extend({
        prop: function(a, b) {
            return V(this, m.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = m.propFix[a] || a, this.each(function() {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {}
            })
        }
    }), m.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) {
                return f = 1 !== g || !m.isXMLDoc(a), f && (b = m.propFix[b] || b, e = m.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
            }
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = m.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : sc.test(a.nodeName) || tc.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    }), k.hrefNormalized || m.each(["href", "src"], function(a, b) {
        m.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }), k.optSelected || (m.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        m.propFix[this.toLowerCase()] = this
    }), k.enctype || (m.propFix.enctype = "encoding");
    var uc = /[\t\r\n\f]/g;
    m.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = "string" == typeof a && a;
            if (m.isFunction(a)) {
                return this.each(function(b) {
                    m(this).addClass(a.call(this, b, this.className))
                })
            }
            if (j) {
                for (b = (a || "").match(E) || []; i > h; h++) {
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : " ")) {
                        f = 0;
                        while (e = b[f++]) {
                            d.indexOf(" " + e + " ") < 0 && (d += e + " ")
                        }
                        g = m.trim(d), c.className !== g && (c.className = g)
                    }
                }
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = 0 === arguments.length || "string" == typeof a && a;
            if (m.isFunction(a)) {
                return this.each(function(b) {
                    m(this).removeClass(a.call(this, b, this.className))
                })
            }
            if (j) {
                for (b = (a || "").match(E) || []; i > h; h++) {
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : "")) {
                        f = 0;
                        while (e = b[f++]) {
                            while (d.indexOf(" " + e + " ") >= 0) {
                                d = d.replace(" " + e + " ", " ")
                            }
                        }
                        g = a ? m.trim(d) : "", c.className !== g && (c.className = g)
                    }
                }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function(c) {
                m(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function() {
                if ("string" === c) {
                    var b, d = 0,
                        e = m(this),
                        f = a.match(E) || [];
                    while (b = f[d++]) {
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                    }
                } else {
                    (c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "")
                }
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) {
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(uc, " ").indexOf(b) >= 0) {
                    return !0
                }
            }
            return !1
        }
    }), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        m.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), m.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var vc = m.now(),
        wc = /\?/,
        xc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    m.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse) {
            return a.JSON.parse(b + "")
        }
        var c, d = null,
            e = m.trim(b + "");
        return e && !m.trim(e.replace(xc, function(a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : m.error("Invalid JSON: " + b)
    }, m.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b) {
            return null
        }
        try {
            a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), c
    };
    var yc, zc, Ac = /#.*$/,
        Bc = /([?&])_=[^&]*/,
        Cc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Dc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Ec = /^(?:GET|HEAD)$/,
        Fc = /^\/\//,
        Gc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Hc = {},
        Ic = {},
        Jc = "*/".concat("*");
    try {
        zc = location.href
    } catch (Kc) {
        zc = y.createElement("a"), zc.href = "", zc = zc.href
    }
    yc = Gc.exec(zc.toLowerCase()) || [];

    function Lc(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(E) || [];
            if (m.isFunction(c)) {
                while (d = f[e++]) {
                    "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
                }
            }
        }
    }

    function Mc(a, b, c, d) {
        var e = {},
            f = a === Ic;

        function g(h) {
            var i;
            return e[h] = !0, m.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Nc(a, b) {
        var c, d, e = m.ajaxSettings.flatOptions || {};
        for (d in b) {
            void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d])
        }
        return c && m.extend(!0, a, c), a
    }

    function Oc(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) {
            i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"))
        }
        if (e) {
            for (g in h) {
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
            }
        }
        if (i[0] in c) {
            f = i[0]
        } else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Pc(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1]) {
            for (g in a.converters) {
                j[g.toLowerCase()] = a.converters[g]
            }
        }
        f = k.shift();
        while (f) {
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) {
                if ("*" === f) {
                    f = i
                } else {
                    if ("*" !== i && i !== f) {
                        if (g = j[i + " " + f] || j["* " + f], !g) {
                            for (e in j) {
                                if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                    g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                                    break
                                }
                            }
                        }
                        if (g !== !0) {
                            if (g && a["throws"]) {
                                b = g(b)
                            } else {
                                try {
                                    b = g(b)
                                } catch (l) {
                                    return {
                                        state: "parsererror",
                                        error: g ? l : "No conversion from " + i + " to " + f
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return {
            state: "success",
            data: b
        }
    }
    m.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: zc,
            type: "GET",
            isLocal: Dc.test(yc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Jc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": m.parseJSON,
                "text xml": m.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Nc(Nc(a, m.ajaxSettings), b) : Nc(m.ajaxSettings, a)
        },
        ajaxPrefilter: Lc(Hc),
        ajaxTransport: Lc(Ic),
        ajax: function(a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b),
                l = k.context || k,
                n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event,
                o = m.Deferred(),
                p = m.Callbacks("once memory"),
                q = k.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === t) {
                            if (!j) {
                                j = {};
                                while (b = Cc.exec(f)) {
                                    j[b[1].toLowerCase()] = b[2]
                                }
                            }
                            b = j[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === t ? f : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return t || (k.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a) {
                            if (2 > t) {
                                for (b in a) {
                                    q[b] = [q[b], a[b]]
                                }
                            } else {
                                v.always(a[v.status])
                            }
                        }
                        return this
                    },
                    abort: function(a) {
                        var b = a || u;
                        return i && i.abort(b), x(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zc) + "").replace(Ac, "").replace(Fc, yc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (c = Gc.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yc[1] && c[2] === yc[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yc[3] || ("http:" === yc[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)), Mc(Hc, k, b, v), 2 === t) {
                return v
            }
            h = m.event && k.global, h && 0 === m.active++ && m.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Ec.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (wc.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Bc.test(e) ? e.replace(Bc, "$1_=" + vc++) : e + (wc.test(e) ? "&" : "?") + "_=" + vc++)), k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]), m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jc + "; q=0.01" : "") : k.accepts["*"]);
            for (d in k.headers) {
                v.setRequestHeader(d, k.headers[d])
            }
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) {
                return v.abort()
            }
            u = "abort";
            for (d in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) {
                v[d](k[d])
            }
            if (i = Mc(Ic, k, b, v)) {
                v.readyState = 1, h && n.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function() {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, i.send(r, x)
                } catch (w) {
                    if (!(2 > t)) {
                        throw w
                    }
                    x(-1, w)
                }
            } else {
                x(-1, "No Transport")
            }

            function x(a, b, c, d) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Oc(k, v, c)), u = Pc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (m.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (m.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (n.trigger("ajaxComplete", [v, k]), --m.active || m.event.trigger("ajaxStop")))
            }
            return v
        },
        getJSON: function(a, b, c) {
            return m.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return m.get(a, void 0, b, "script")
        }
    }), m.each(["get", "post"], function(a, b) {
        m[b] = function(a, c, d, e) {
            return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), m._evalUrl = function(a) {
        return m.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, m.fn.extend({
        wrapAll: function(a) {
            if (m.isFunction(a)) {
                return this.each(function(b) {
                    m(this).wrapAll(a.call(this, b))
                })
            }
            if (this[0]) {
                var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType) {
                        a = a.firstChild
                    }
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return this.each(m.isFunction(a) ? function(b) {
                m(this).wrapInner(a.call(this, b))
            } : function() {
                var b = m(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = m.isFunction(a);
            return this.each(function(c) {
                m(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                m.nodeName(this, "body") || m(this).replaceWith(this.childNodes)
            }).end()
        }
    }), m.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display"))
    }, m.expr.filters.visible = function(a) {
        return !m.expr.filters.hidden(a)
    };
    var Qc = /%20/g,
        Rc = /\[\]$/,
        Sc = /\r?\n/g,
        Tc = /^(?:submit|button|image|reset|file)$/i,
        Uc = /^(?:input|select|textarea|keygen)/i;

    function Vc(a, b, c, d) {
        var e;
        if (m.isArray(b)) {
            m.each(b, function(b, e) {
                c || Rc.test(a) ? d(a, e) : Vc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
            })
        } else {
            if (c || "object" !== m.type(b)) {
                d(a, b)
            } else {
                for (e in b) {
                    Vc(a + "[" + e + "]", b[e], c, d)
                }
            }
        }
    }
    m.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = m.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a)) {
            m.each(a, function() {
                e(this.name, this.value)
            })
        } else {
            for (c in a) {
                Vc(c, a[c], b, e)
            }
        }
        return d.join("&").replace(Qc, "+")
    }, m.fn.extend({
        serialize: function() {
            return m.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = m.prop(this, "elements");
                return a ? m.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !m(this).is(":disabled") && Uc.test(this.nodeName) && !Tc.test(a) && (this.checked || !W.test(a))
            }).map(function(a, b) {
                var c = m(this).val();
                return null == c ? null : m.isArray(c) ? m.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Sc, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Sc, "\r\n")
                }
            }).get()
        }
    }), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zc() || $c()
    } : Zc;
    var Wc = 0,
        Xc = {},
        Yc = m.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in Xc) {
            Xc[a](void 0, !0)
        }
    }), k.cors = !!Yc && "withCredentials" in Yc, Yc = k.ajax = !!Yc, Yc && m.ajaxTransport(function(a) {
        if (!a.crossDomain || k.cors) {
            var b;
            return {
                send: function(c, d) {
                    var e, f = a.xhr(),
                        g = ++Wc;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) {
                        for (e in a.xhrFields) {
                            f[e] = a.xhrFields[e]
                        }
                    }
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c) {
                        void 0 !== c[e] && f.setRequestHeader(e, c[e] + "")
                    }
                    f.send(a.hasContent && a.data || null), b = function(c, e) {
                        var h, i, j;
                        if (b && (e || 4 === f.readyState)) {
                            if (delete Xc[g], b = void 0, f.onreadystatechange = m.noop, e) {
                                4 !== f.readyState && f.abort()
                            } else {
                                j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                                try {
                                    i = f.statusText
                                } catch (k) {
                                    i = ""
                                }
                                h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                            }
                        }
                        j && d(h, i, j, f.getAllResponseHeaders())
                    }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xc[g] = b : b()
                },
                abort: function() {
                    b && b(void 0, !0)
                }
            }
        }
    });

    function Zc() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function $c() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    m.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return m.globalEval(a), a
            }
        }
    }), m.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), m.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = y.head || m("head")[0] || y.documentElement;
            return {
                send: function(d, e) {
                    b = y.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var _c = [],
        ad = /(=)\?(?=&|$)|\?\?/;
    m.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = _c.pop() || m.expando + "_" + vc++;
            return this[a] = !0, a
        }
    }), m.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (ad.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ad.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(ad, "$1" + e) : b.jsonp !== !1 && (b.url += (wc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || m.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _c.push(e)), g && m.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), m.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) {
            return null
        }
        "boolean" == typeof b && (c = b, b = !1), b = b || y;
        var d = u.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e), e && e.length && m(e).remove(), m.merge([], d.childNodes))
    };
    var bd = m.fn.load;
    m.fn.load = function(a, b, c) {
        if ("string" != typeof a && bd) {
            return bd.apply(this, arguments)
        }
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && m.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: b
        }).done(function(a) {
            e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, e || [a.responseText, b, a])
        }), this
    }, m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        m.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), m.expr.filters.animated = function(a) {
        return m.grep(m.timers, function(b) {
            return a === b.elem
        }).length
    };
    var cd = a.document.documentElement;

    function dd(a) {
        return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    m.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = m.css(a, "position"),
                l = m(a),
                n = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = m.css(a, "top"), i = m.css(a, "left"), j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), m.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), null != b.left && (n.left = b.left - h.left + e), "using" in b ? b.using.call(a, n) : l.css(n)
        }
    }, m.fn.extend({
        offset: function(a) {
            if (arguments.length) {
                return void 0 === a ? this : this.each(function(b) {
                    m.offset.setOffset(this, a, b)
                })
            }
            var b, c, d = {
                    top: 0,
                    left: 0
                },
                e = this[0],
                f = e && e.ownerDocument;
            if (f) {
                return b = f.documentElement, m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()), c = dd(f), {
                    top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                    left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
                }) : d
            }
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                        top: 0,
                        left: 0
                    },
                    d = this[0];
                return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], "html") || (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0), c.left += m.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - m.css(d, "marginTop", !0),
                    left: b.left - c.left - m.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || cd;
                while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position")) {
                    a = a.offsetParent
                }
                return a || cd
            })
        }
    }), m.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        m.fn[a] = function(d) {
            return V(this, function(a, d, e) {
                var f = dd(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }), m.each(["top", "left"], function(a, b) {
        m.cssHooks[b] = Lb(k.pixelPosition, function(a, c) {
            return c ? (c = Jb(a, b), Hb.test(c) ? m(a).position()[b] + "px" : c) : void 0
        })
    }), m.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        m.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            m.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return V(this, function(b, c, d) {
                    var e;
                    return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), m.fn.size = function() {
        return this.length
    }, m.fn.andSelf = m.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return m
    });
    var ed = a.jQuery,
        fd = a.$;
    return m.noConflict = function(b) {
        return a.$ === m && (a.$ = fd), b && a.jQuery === m && (a.jQuery = ed), m
    }, typeof b === K && (a.jQuery = a.$ = m), m
});
/*! jQuery UI - v1.9.2 - 2012-11-23
 * http://jqueryui.com
 * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.effect.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js, jquery.ui.menu.js, jquery.ui.progressbar.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.slider.js, jquery.ui.sortable.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js
 * Copyright (c) 2012 jQuery Foundation and other contributors Licensed MIT */
(function(c, g) {
    var b = 0,
        f = /^ui-id-\d+$/;
    c.ui = c.ui || {};
    if (c.ui.version) {
        return
    }
    c.extend(c.ui, {
        version: "1.9.2",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    });
    c.fn.extend({
        _focus: c.fn.focus,
        focus: function(h, i) {
            return typeof h === "number" ? this.each(function() {
                var j = this;
                setTimeout(function() {
                    c(j).focus();
                    if (i) {
                        i.call(j)
                    }
                }, h)
            }) : this._focus.apply(this, arguments)
        },
        scrollParent: function() {
            var h;
            if ((c.ui.ie && (/(static|relative)/).test(this.css("position"))) || (/absolute/).test(this.css("position"))) {
                h = this.parents().filter(function() {
                    return (/(relative|absolute|fixed)/).test(c.css(this, "position")) && (/(auto|scroll)/).test(c.css(this, "overflow") + c.css(this, "overflow-y") + c.css(this, "overflow-x"))
                }).eq(0)
            } else {
                h = this.parents().filter(function() {
                    return (/(auto|scroll)/).test(c.css(this, "overflow") + c.css(this, "overflow-y") + c.css(this, "overflow-x"))
                }).eq(0)
            }
            return (/fixed/).test(this.css("position")) || !h.length ? c(document) : h
        },
        zIndex: function(k) {
            if (k !== g) {
                return this.css("zIndex", k)
            }
            if (this.length) {
                var i = c(this[0]),
                    h, j;
                while (i.length && i[0] !== document) {
                    h = i.css("position");
                    if (h === "absolute" || h === "relative" || h === "fixed") {
                        j = parseInt(i.css("zIndex"), 10);
                        if (!isNaN(j) && j !== 0) {
                            return j
                        }
                    }
                    i = i.parent()
                }
            }
            return 0
        },
        uniqueId: function() {
            return this.each(function() {
                if (!this.id) {
                    this.id = "ui-id-" + (++b)
                }
            })
        },
        removeUniqueId: function() {
            return this.each(function() {
                if (f.test(this.id)) {
                    c(this).removeAttr("id")
                }
            })
        }
    });

    function e(j, h) {
        var l, k, i, m = j.nodeName.toLowerCase();
        if ("area" === m) {
            l = j.parentNode;
            k = l.name;
            if (!j.href || !k || l.nodeName.toLowerCase() !== "map") {
                return false
            }
            i = c("img[usemap=#" + k + "]")[0];
            return !!i && d(i)
        }
        return (/input|select|textarea|button|object/.test(m) ? !j.disabled : "a" === m ? j.href || h : h) && d(j)
    }

    function d(h) {
        return c.expr.filters.visible(h) && !c(h).parents().andSelf().filter(function() {
            return c.css(this, "visibility") === "hidden"
        }).length
    }
    c.extend(c.expr[":"], {
        data: c.expr.createPseudo ? c.expr.createPseudo(function(h) {
            return function(i) {
                return !!c.data(i, h)
            }
        }) : function(k, j, h) {
            return !!c.data(k, h[3])
        },
        focusable: function(h) {
            return e(h, !isNaN(c.attr(h, "tabindex")))
        },
        tabbable: function(j) {
            var h = c.attr(j, "tabindex"),
                i = isNaN(h);
            return (i || h >= 0) && e(j, !i)
        }
    });
    c(function() {
        var h = document.body,
            i = h.appendChild(i = document.createElement("div"));
        i.offsetHeight;
        c.extend(i.style, {
            minHeight: "100px",
            height: "auto",
            padding: 0,
            borderWidth: 0
        });
        c.support.minHeight = i.offsetHeight === 100;
        c.support.selectstart = "onselectstart" in i;
        h.removeChild(i).style.display = "none"
    });
    if (!c("<a>").outerWidth(1).jquery) {
        c.each(["Width", "Height"], function(k, h) {
            var j = h === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
                l = h.toLowerCase(),
                n = {
                    innerWidth: c.fn.innerWidth,
                    innerHeight: c.fn.innerHeight,
                    outerWidth: c.fn.outerWidth,
                    outerHeight: c.fn.outerHeight
                };

            function m(p, o, i, q) {
                c.each(j, function() {
                    o -= parseFloat(c.css(p, "padding" + this)) || 0;
                    if (i) {
                        o -= parseFloat(c.css(p, "border" + this + "Width")) || 0
                    }
                    if (q) {
                        o -= parseFloat(c.css(p, "margin" + this)) || 0
                    }
                });
                return o
            }
            c.fn["inner" + h] = function(i) {
                if (i === g) {
                    return n["inner" + h].call(this)
                }
                return this.each(function() {
                    c(this).css(l, m(this, i) + "px")
                })
            };
            c.fn["outer" + h] = function(i, o) {
                if (typeof i !== "number") {
                    return n["outer" + h].call(this, i)
                }
                return this.each(function() {
                    c(this).css(l, m(this, i, true, o) + "px")
                })
            }
        })
    }
    if (c("<a>").data("a-b", "a").removeData("a-b").data("a-b")) {
        c.fn.removeData = (function(h) {
            return function(i) {
                if (arguments.length) {
                    return h.call(this, c.camelCase(i))
                } else {
                    return h.call(this)
                }
            }
        })(c.fn.removeData)
    }(function() {
        var h = /msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase()) || [];
        c.ui.ie = h.length ? true : false;
        c.ui.ie6 = parseFloat(h[1], 10) === 6
    })();
    c.fn.extend({
        disableSelection: function() {
            return this.bind((c.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(h) {
                h.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    });
    c.extend(c.ui, {
        plugin: {
            add: function(j, k, m) {
                var h, l = c.ui[j].prototype;
                for (h in m) {
                    l.plugins[h] = l.plugins[h] || [];
                    l.plugins[h].push([k, m[h]])
                }
            },
            call: function(h, k, j) {
                var l, m = h.plugins[k];
                if (!m || !h.element[0].parentNode || h.element[0].parentNode.nodeType === 11) {
                    return
                }
                for (l = 0; l < m.length; l++) {
                    if (h.options[m[l][0]]) {
                        m[l][1].apply(h.element, j)
                    }
                }
            }
        },
        contains: c.contains,
        hasScroll: function(k, i) {
            if (c(k).css("overflow") === "hidden") {
                return false
            }
            var h = (i && i === "left") ? "scrollLeft" : "scrollTop",
                j = false;
            if (k[h] > 0) {
                return true
            }
            k[h] = 1;
            j = (k[h] > 0);
            k[h] = 0;
            return j
        },
        isOverAxis: function(i, h, j) {
            return (i > h) && (i < (h + j))
        },
        isOver: function(m, i, l, k, h, j) {
            return c.ui.isOverAxis(m, l, h) && c.ui.isOverAxis(i, k, j)
        }
    })
})(jQuery);
(function(c, f) {
    var b = 0,
        e = Array.prototype.slice,
        d = c.cleanData;
    c.cleanData = function(g) {
        for (var h = 0, j;
            (j = g[h]) != null; h++) {
            try {
                c(j).triggerHandler("remove")
            } catch (k) {}
        }
        d(g)
    };
    c.widget = function(h, k, g) {
        var n, m, j, l, i = h.split(".")[0];
        h = h.split(".")[1];
        n = i + "-" + h;
        if (!g) {
            g = k;
            k = c.Widget
        }
        c.expr[":"][n.toLowerCase()] = function(o) {
            return !!c.data(o, n)
        };
        c[i] = c[i] || {};
        m = c[i][h];
        j = c[i][h] = function(o, p) {
            if (!this._createWidget) {
                return new j(o, p)
            }
            if (arguments.length) {
                this._createWidget(o, p)
            }
        };
        c.extend(j, m, {
            version: g.version,
            _proto: c.extend({}, g),
            _childConstructors: []
        });
        l = new k();
        l.options = c.widget.extend({}, l.options);
        c.each(g, function(p, o) {
            if (c.isFunction(o)) {
                g[p] = (function() {
                    var q = function() {
                            return k.prototype[p].apply(this, arguments)
                        },
                        r = function(s) {
                            return k.prototype[p].apply(this, s)
                        };
                    return function() {
                        var u = this._super,
                            s = this._superApply,
                            t;
                        this._super = q;
                        this._superApply = r;
                        t = o.apply(this, arguments);
                        this._super = u;
                        this._superApply = s;
                        return t
                    }
                })()
            }
        });
        j.prototype = c.widget.extend(l, {
            widgetEventPrefix: m ? l.widgetEventPrefix : h
        }, g, {
            constructor: j,
            namespace: i,
            widgetName: h,
            widgetBaseClass: n,
            widgetFullName: n
        });
        if (m) {
            c.each(m._childConstructors, function(p, q) {
                var o = q.prototype;
                c.widget(o.namespace + "." + o.widgetName, j, q._proto)
            });
            delete m._childConstructors
        } else {
            k._childConstructors.push(j)
        }
        c.widget.bridge(h, j)
    };
    c.widget.extend = function(l) {
        var h = e.call(arguments, 1),
            k = 0,
            g = h.length,
            i, j;
        for (; k < g; k++) {
            for (i in h[k]) {
                j = h[k][i];
                if (h[k].hasOwnProperty(i) && j !== f) {
                    if (c.isPlainObject(j)) {
                        l[i] = c.isPlainObject(l[i]) ? c.widget.extend({}, l[i], j) : c.widget.extend({}, j)
                    } else {
                        l[i] = j
                    }
                }
            }
        }
        return l
    };
    c.widget.bridge = function(h, g) {
        var i = g.prototype.widgetFullName || h;
        c.fn[h] = function(l) {
            var j = typeof l === "string",
                k = e.call(arguments, 1),
                m = this;
            l = !j && k.length ? c.widget.extend.apply(null, [l].concat(k)) : l;
            if (j) {
                this.each(function() {
                    var o, n = c.data(this, i);
                    if (!n) {
                        return c.error("cannot call methods on " + h + " prior to initialization; attempted to call method '" + l + "'")
                    }
                    if (!c.isFunction(n[l]) || l.charAt(0) === "_") {
                        return c.error("no such method '" + l + "' for " + h + " widget instance")
                    }
                    o = n[l].apply(n, k);
                    if (o !== n && o !== f) {
                        m = o && o.jquery ? m.pushStack(o.get()) : o;
                        return false
                    }
                })
            } else {
                this.each(function() {
                    var n = c.data(this, i);
                    if (n) {
                        n.option(l || {})._init()
                    } else {
                        c.data(this, i, new g(l, this))
                    }
                })
            }
            return m
        }
    };
    c.Widget = function() {};
    c.Widget._childConstructors = [];
    c.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: false,
            create: null
        },
        _createWidget: function(g, h) {
            h = c(h || this.defaultElement || this)[0];
            this.element = c(h);
            this.uuid = b++;
            this.eventNamespace = "." + this.widgetName + this.uuid;
            this.options = c.widget.extend({}, this.options, this._getCreateOptions(), g);
            this.bindings = c();
            this.hoverable = c();
            this.focusable = c();
            if (h !== this) {
                c.data(h, this.widgetName, this);
                c.data(h, this.widgetFullName, this);
                this._on(true, this.element, {
                    remove: function(i) {
                        if (i.target === h) {
                            this.destroy()
                        }
                    }
                });
                this.document = c(h.style ? h.ownerDocument : h.document || h);
                this.window = c(this.document[0].defaultView || this.document[0].parentWindow)
            }
            this._create();
            this._trigger("create", null, this._getCreateEventData());
            this._init()
        },
        _getCreateOptions: c.noop,
        _getCreateEventData: c.noop,
        _create: c.noop,
        _init: c.noop,
        destroy: function() {
            this._destroy();
            this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(c.camelCase(this.widgetFullName));
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled");
            this.bindings.unbind(this.eventNamespace);
            this.hoverable.removeClass("ui-state-hover");
            this.focusable.removeClass("ui-state-focus")
        },
        _destroy: c.noop,
        widget: function() {
            return this.element
        },
        option: function(k, l) {
            var g = k,
                m, j, h;
            if (arguments.length === 0) {
                return c.widget.extend({}, this.options)
            }
            if (typeof k === "string") {
                g = {};
                m = k.split(".");
                k = m.shift();
                if (m.length) {
                    j = g[k] = c.widget.extend({}, this.options[k]);
                    for (h = 0; h < m.length - 1; h++) {
                        j[m[h]] = j[m[h]] || {};
                        j = j[m[h]]
                    }
                    k = m.pop();
                    if (l === f) {
                        return j[k] === f ? null : j[k]
                    }
                    j[k] = l
                } else {
                    if (l === f) {
                        return this.options[k] === f ? null : this.options[k]
                    }
                    g[k] = l
                }
            }
            this._setOptions(g);
            return this
        },
        _setOptions: function(g) {
            var h;
            for (h in g) {
                this._setOption(h, g[h])
            }
            return this
        },
        _setOption: function(g, h) {
            this.options[g] = h;
            if (g === "disabled") {
                this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!h).attr("aria-disabled", h);
                this.hoverable.removeClass("ui-state-hover");
                this.focusable.removeClass("ui-state-focus")
            }
            return this
        },
        enable: function() {
            return this._setOption("disabled", false)
        },
        disable: function() {
            return this._setOption("disabled", true)
        },
        _on: function(j, i, h) {
            var k, g = this;
            if (typeof j !== "boolean") {
                h = i;
                i = j;
                j = false
            }
            if (!h) {
                h = i;
                i = this.element;
                k = this.widget()
            } else {
                i = k = c(i);
                this.bindings = this.bindings.add(i)
            }
            c.each(h, function(q, p) {
                function n() {
                    if (!j && (g.options.disabled === true || c(this).hasClass("ui-state-disabled"))) {
                        return
                    }
                    return (typeof p === "string" ? g[p] : p).apply(g, arguments)
                }
                if (typeof p !== "string") {
                    n.guid = p.guid = p.guid || n.guid || c.guid++
                }
                var o = q.match(/^(\w+)\s*(.*)$/),
                    m = o[1] + g.eventNamespace,
                    l = o[2];
                if (l) {
                    k.delegate(l, m, n)
                } else {
                    i.bind(m, n)
                }
            })
        },
        _off: function(h, g) {
            g = (g || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
            h.unbind(g).undelegate(g)
        },
        _delay: function(j, i) {
            function h() {
                return (typeof j === "string" ? g[j] : j).apply(g, arguments)
            }
            var g = this;
            return setTimeout(h, i || 0)
        },
        _hoverable: function(g) {
            this.hoverable = this.hoverable.add(g);
            this._on(g, {
                mouseenter: function(h) {
                    c(h.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(h) {
                    c(h.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(g) {
            this.focusable = this.focusable.add(g);
            this._on(g, {
                focusin: function(h) {
                    c(h.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(h) {
                    c(h.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(g, h, i) {
            var l, k, j = this.options[g];
            i = i || {};
            h = c.Event(h);
            h.type = (g === this.widgetEventPrefix ? g : this.widgetEventPrefix + g).toLowerCase();
            h.target = this.element[0];
            k = h.originalEvent;
            if (k) {
                for (l in k) {
                    if (!(l in h)) {
                        h[l] = k[l]
                    }
                }
            }
            this.element.trigger(h, i);
            return !(c.isFunction(j) && j.apply(this.element[0], [h].concat(i)) === false || h.isDefaultPrevented())
        }
    };
    c.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(h, g) {
        c.Widget.prototype["_" + h] = function(k, j, m) {
            if (typeof j === "string") {
                j = {
                    effect: j
                }
            }
            var l, i = !j ? h : j === true || typeof j === "number" ? g : j.effect || g;
            j = j || {};
            if (typeof j === "number") {
                j = {
                    duration: j
                }
            }
            l = !c.isEmptyObject(j);
            j.complete = m;
            if (j.delay) {
                k.delay(j.delay)
            }
            if (l && c.effects && (c.effects.effect[i] || c.uiBackCompat !== false && c.effects[i])) {
                k[h](j)
            } else {
                if (i !== h && k[i]) {
                    k[i](j.duration, j.easing, m)
                } else {
                    k.queue(function(n) {
                        c(this)[h]();
                        if (m) {
                            m.call(k[0])
                        }
                        n()
                    })
                }
            }
        }
    });
    if (c.uiBackCompat !== false) {
        c.Widget.prototype._getCreateOptions = function() {
            return c.metadata && c.metadata.get(this.element[0])[this.widgetName]
        }
    }
})(jQuery);
(function(c, d) {
    var b = false;
    c(document).mouseup(function(f) {
        b = false
    });
    c.widget("ui.mouse", {
        version: "1.9.2",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var e = this;
            this.element.bind("mousedown." + this.widgetName, function(f) {
                return e._mouseDown(f)
            }).bind("click." + this.widgetName, function(f) {
                if (true === c.data(f.target, e.widgetName + ".preventClickEvent")) {
                    c.removeData(f.target, e.widgetName + ".preventClickEvent");
                    f.stopImmediatePropagation();
                    return false
                }
            });
            this.started = false
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName);
            if (this._mouseMoveDelegate) {
                c(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
            }
        },
        _mouseDown: function(g) {
            if (b) {
                return
            }(this._mouseStarted && this._mouseUp(g));
            this._mouseDownEvent = g;
            var f = this,
                h = (g.which === 1),
                e = (typeof this.options.cancel === "string" && g.target.nodeName ? c(g.target).closest(this.options.cancel).length : false);
            if (!h || e || !this._mouseCapture(g)) {
                return true
            }
            this.mouseDelayMet = !this.options.delay;
            if (!this.mouseDelayMet) {
                this._mouseDelayTimer = setTimeout(function() {
                    f.mouseDelayMet = true
                }, this.options.delay)
            }
            if (this._mouseDistanceMet(g) && this._mouseDelayMet(g)) {
                this._mouseStarted = (this._mouseStart(g) !== false);
                if (!this._mouseStarted) {
                    g.preventDefault();
                    return true
                }
            }
            if (true === c.data(g.target, this.widgetName + ".preventClickEvent")) {
                c.removeData(g.target, this.widgetName + ".preventClickEvent")
            }
            this._mouseMoveDelegate = function(i) {
                return f._mouseMove(i)
            };
            this._mouseUpDelegate = function(i) {
                return f._mouseUp(i)
            };
            c(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate);
            g.preventDefault();
            b = true;
            return true
        },
        _mouseMove: function(e) {
            if (c.ui.ie && !(document.documentMode >= 9) && !e.button) {
                return this._mouseUp(e)
            }
            if (this._mouseStarted) {
                this._mouseDrag(e);
                return e.preventDefault()
            }
            if (this._mouseDistanceMet(e) && this._mouseDelayMet(e)) {
                this._mouseStarted = (this._mouseStart(this._mouseDownEvent, e) !== false);
                (this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e))
            }
            return !this._mouseStarted
        },
        _mouseUp: function(e) {
            c(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
            if (this._mouseStarted) {
                this._mouseStarted = false;
                if (e.target === this._mouseDownEvent.target) {
                    c.data(e.target, this.widgetName + ".preventClickEvent", true)
                }
                this._mouseStop(e)
            }
            return false
        },
        _mouseDistanceMet: function(e) {
            return (Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance)
        },
        _mouseDelayMet: function(e) {
            return this.mouseDelayMet
        },
        _mouseStart: function(e) {},
        _mouseDrag: function(e) {},
        _mouseStop: function(e) {},
        _mouseCapture: function(e) {
            return true
        }
    })
})(jQuery);
(function(f, d) {
    f.ui = f.ui || {};
    var j, k = Math.max,
        o = Math.abs,
        m = Math.round,
        e = /left|center|right/,
        h = /top|center|bottom/,
        b = /[\+\-]\d+%?/,
        l = /^\w+/,
        c = /%$/,
        g = f.fn.position;

    function n(r, q, p) {
        return [parseInt(r[0], 10) * (c.test(r[0]) ? q / 100 : 1), parseInt(r[1], 10) * (c.test(r[1]) ? p / 100 : 1)]
    }

    function i(p, q) {
        return parseInt(f.css(p, q), 10) || 0
    }
    f.position = {
        scrollbarWidth: function() {
            if (j !== d) {
                return j
            }
            var q, p, s = f("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                r = s.children()[0];
            f("body").append(s);
            q = r.offsetWidth;
            s.css("overflow", "scroll");
            p = r.offsetWidth;
            if (q === p) {
                p = s[0].clientWidth
            }
            s.remove();
            return (j = q - p)
        },
        getScrollInfo: function(t) {
            var s = t.isWindow ? "" : t.element.css("overflow-x"),
                r = t.isWindow ? "" : t.element.css("overflow-y"),
                q = s === "scroll" || (s === "auto" && t.width < t.element[0].scrollWidth),
                p = r === "scroll" || (r === "auto" && t.height < t.element[0].scrollHeight);
            return {
                width: q ? f.position.scrollbarWidth() : 0,
                height: p ? f.position.scrollbarWidth() : 0
            }
        },
        getWithinInfo: function(q) {
            var r = f(q || window),
                p = f.isWindow(r[0]);
            return {
                element: r,
                isWindow: p,
                offset: r.offset() || {
                    left: 0,
                    top: 0
                },
                scrollLeft: r.scrollLeft(),
                scrollTop: r.scrollTop(),
                width: p ? r.width() : r.outerWidth(),
                height: p ? r.height() : r.outerHeight()
            }
        }
    };
    f.fn.position = function(z) {
        if (!z || !z.of) {
            return g.apply(this, arguments)
        }
        z = f.extend({}, z);
        var A, w, t, y, s, v = f(z.of),
            r = f.position.getWithinInfo(z.within),
            p = f.position.getScrollInfo(r),
            u = v[0],
            x = (z.collision || "flip").split(" "),
            q = {};
        if (u.nodeType === 9) {
            w = v.width();
            t = v.height();
            y = {
                top: 0,
                left: 0
            }
        } else {
            if (f.isWindow(u)) {
                w = v.width();
                t = v.height();
                y = {
                    top: v.scrollTop(),
                    left: v.scrollLeft()
                }
            } else {
                if (u.preventDefault) {
                    z.at = "left top";
                    w = t = 0;
                    y = {
                        top: u.pageY,
                        left: u.pageX
                    }
                } else {
                    w = v.outerWidth();
                    t = v.outerHeight();
                    y = v.offset()
                }
            }
        }
        s = f.extend({}, y);
        f.each(["my", "at"], function() {
            var D = (z[this] || "").split(" "),
                C, B;
            if (D.length === 1) {
                D = e.test(D[0]) ? D.concat(["center"]) : h.test(D[0]) ? ["center"].concat(D) : ["center", "center"]
            }
            D[0] = e.test(D[0]) ? D[0] : "center";
            D[1] = h.test(D[1]) ? D[1] : "center";
            C = b.exec(D[0]);
            B = b.exec(D[1]);
            q[this] = [C ? C[0] : 0, B ? B[0] : 0];
            z[this] = [l.exec(D[0])[0], l.exec(D[1])[0]]
        });
        if (x.length === 1) {
            x[1] = x[0]
        }
        if (z.at[0] === "right") {
            s.left += w
        } else {
            if (z.at[0] === "center") {
                s.left += w / 2
            }
        }
        if (z.at[1] === "bottom") {
            s.top += t
        } else {
            if (z.at[1] === "center") {
                s.top += t / 2
            }
        }
        A = n(q.at, w, t);
        s.left += A[0];
        s.top += A[1];
        return this.each(function() {
            var C, L, E = f(this),
                G = E.outerWidth(),
                D = E.outerHeight(),
                F = i(this, "marginLeft"),
                B = i(this, "marginTop"),
                K = G + F + i(this, "marginRight") + p.width,
                J = D + B + i(this, "marginBottom") + p.height,
                H = f.extend({}, s),
                I = n(q.my, E.outerWidth(), E.outerHeight());
            if (z.my[0] === "right") {
                H.left -= G
            } else {
                if (z.my[0] === "center") {
                    H.left -= G / 2
                }
            }
            if (z.my[1] === "bottom") {
                H.top -= D
            } else {
                if (z.my[1] === "center") {
                    H.top -= D / 2
                }
            }
            H.left += I[0];
            H.top += I[1];
            if (!f.support.offsetFractions) {
                H.left = m(H.left);
                H.top = m(H.top)
            }
            C = {
                marginLeft: F,
                marginTop: B
            };
            f.each(["left", "top"], function(N, M) {
                if (f.ui.position[x[N]]) {
                    f.ui.position[x[N]][M](H, {
                        targetWidth: w,
                        targetHeight: t,
                        elemWidth: G,
                        elemHeight: D,
                        collisionPosition: C,
                        collisionWidth: K,
                        collisionHeight: J,
                        offset: [A[0] + I[0], A[1] + I[1]],
                        my: z.my,
                        at: z.at,
                        within: r,
                        elem: E
                    })
                }
            });
            if (f.fn.bgiframe) {
                E.bgiframe()
            }
            if (z.using) {
                L = function(P) {
                    var R = y.left - H.left,
                        O = R + w - G,
                        Q = y.top - H.top,
                        N = Q + t - D,
                        M = {
                            target: {
                                element: v,
                                left: y.left,
                                top: y.top,
                                width: w,
                                height: t
                            },
                            element: {
                                element: E,
                                left: H.left,
                                top: H.top,
                                width: G,
                                height: D
                            },
                            horizontal: O < 0 ? "left" : R > 0 ? "right" : "center",
                            vertical: N < 0 ? "top" : Q > 0 ? "bottom" : "middle"
                        };
                    if (w < G && o(R + O) < w) {
                        M.horizontal = "center"
                    }
                    if (t < D && o(Q + N) < t) {
                        M.vertical = "middle"
                    }
                    if (k(o(R), o(O)) > k(o(Q), o(N))) {
                        M.important = "horizontal"
                    } else {
                        M.important = "vertical"
                    }
                    z.using.call(this, P, M)
                }
            }
            E.offset(f.extend(H, {
                using: L
            }))
        })
    };
    f.ui.position = {
        fit: {
            left: function(t, s) {
                var r = s.within,
                    v = r.isWindow ? r.scrollLeft : r.offset.left,
                    x = r.width,
                    u = t.left - s.collisionPosition.marginLeft,
                    w = v - u,
                    q = u + s.collisionWidth - x - v,
                    p;
                if (s.collisionWidth > x) {
                    if (w > 0 && q <= 0) {
                        p = t.left + w + s.collisionWidth - x - v;
                        t.left += w - p
                    } else {
                        if (q > 0 && w <= 0) {
                            t.left = v
                        } else {
                            if (w > q) {
                                t.left = v + x - s.collisionWidth
                            } else {
                                t.left = v
                            }
                        }
                    }
                } else {
                    if (w > 0) {
                        t.left += w
                    } else {
                        if (q > 0) {
                            t.left -= q
                        } else {
                            t.left = k(t.left - u, t.left)
                        }
                    }
                }
            },
            top: function(s, r) {
                var q = r.within,
                    w = q.isWindow ? q.scrollTop : q.offset.top,
                    x = r.within.height,
                    u = s.top - r.collisionPosition.marginTop,
                    v = w - u,
                    t = u + r.collisionHeight - x - w,
                    p;
                if (r.collisionHeight > x) {
                    if (v > 0 && t <= 0) {
                        p = s.top + v + r.collisionHeight - x - w;
                        s.top += v - p
                    } else {
                        if (t > 0 && v <= 0) {
                            s.top = w
                        } else {
                            if (v > t) {
                                s.top = w + x - r.collisionHeight
                            } else {
                                s.top = w
                            }
                        }
                    }
                } else {
                    if (v > 0) {
                        s.top += v
                    } else {
                        if (t > 0) {
                            s.top -= t
                        } else {
                            s.top = k(s.top - u, s.top)
                        }
                    }
                }
            }
        },
        flip: {
            left: function(v, u) {
                var t = u.within,
                    z = t.offset.left + t.scrollLeft,
                    C = t.width,
                    r = t.isWindow ? t.scrollLeft : t.offset.left,
                    w = v.left - u.collisionPosition.marginLeft,
                    A = w - r,
                    q = w + u.collisionWidth - C - r,
                    y = u.my[0] === "left" ? -u.elemWidth : u.my[0] === "right" ? u.elemWidth : 0,
                    B = u.at[0] === "left" ? u.targetWidth : u.at[0] === "right" ? -u.targetWidth : 0,
                    s = -2 * u.offset[0],
                    p, x;
                if (A < 0) {
                    p = v.left + y + B + s + u.collisionWidth - C - z;
                    if (p < 0 || p < o(A)) {
                        v.left += y + B + s
                    }
                } else {
                    if (q > 0) {
                        x = v.left - u.collisionPosition.marginLeft + y + B + s - r;
                        if (x > 0 || o(x) < q) {
                            v.left += y + B + s
                        }
                    }
                }
            },
            top: function(u, t) {
                var s = t.within,
                    B = s.offset.top + s.scrollTop,
                    C = s.height,
                    p = s.isWindow ? s.scrollTop : s.offset.top,
                    w = u.top - t.collisionPosition.marginTop,
                    y = w - p,
                    v = w + t.collisionHeight - C - p,
                    z = t.my[1] === "top",
                    x = z ? -t.elemHeight : t.my[1] === "bottom" ? t.elemHeight : 0,
                    D = t.at[1] === "top" ? t.targetHeight : t.at[1] === "bottom" ? -t.targetHeight : 0,
                    r = -2 * t.offset[1],
                    A, q;
                if (y < 0) {
                    q = u.top + x + D + r + t.collisionHeight - C - B;
                    if ((u.top + x + D + r) > y && (q < 0 || q < o(y))) {
                        u.top += x + D + r
                    }
                } else {
                    if (v > 0) {
                        A = u.top - t.collisionPosition.marginTop + x + D + r - p;
                        if ((u.top + x + D + r) > v && (A > 0 || o(A) < v)) {
                            u.top += x + D + r
                        }
                    }
                }
            }
        },
        flipfit: {
            left: function() {
                f.ui.position.flip.left.apply(this, arguments);
                f.ui.position.fit.left.apply(this, arguments)
            },
            top: function() {
                f.ui.position.flip.top.apply(this, arguments);
                f.ui.position.fit.top.apply(this, arguments)
            }
        }
    };
    (function() {
        var t, v, q, s, r, p = document.getElementsByTagName("body")[0],
            u = document.createElement("div");
        t = document.createElement(p ? "div" : "body");
        q = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        };
        if (p) {
            f.extend(q, {
                position: "absolute",
                left: "-1000px",
                top: "-1000px"
            })
        }
        for (r in q) {
            t.style[r] = q[r]
        }
        t.appendChild(u);
        v = p || document.documentElement;
        v.insertBefore(t, v.firstChild);
        u.style.cssText = "position: absolute; left: 10.7432222px;";
        s = f(u).offset().left;
        f.support.offsetFractions = s > 10 && s < 11;
        t.innerHTML = "";
        v.removeChild(t)
    })();
    if (f.uiBackCompat !== false) {
        (function(q) {
            var p = q.fn.position;
            q.fn.position = function(s) {
                if (!s || !s.offset) {
                    return p.call(this, s)
                }
                var t = s.offset.split(" "),
                    r = s.at.split(" ");
                if (t.length === 1) {
                    t[1] = t[0]
                }
                if (/^\d/.test(t[0])) {
                    t[0] = "+" + t[0]
                }
                if (/^\d/.test(t[1])) {
                    t[1] = "+" + t[1]
                }
                if (r.length === 1) {
                    if (/left|center|right/.test(r[0])) {
                        r[1] = "center"
                    } else {
                        r[1] = r[0];
                        r[0] = "center"
                    }
                }
                return p.call(this, q.extend(s, {
                    at: r[0] + t[0] + " " + r[1] + t[1],
                    offset: d
                }))
            }
        }(jQuery))
    }
}(jQuery));
(function(e, f) {
    var c = 0,
        d = {},
        b = {};
    d.height = d.paddingTop = d.paddingBottom = d.borderTopWidth = d.borderBottomWidth = "hide";
    b.height = b.paddingTop = b.paddingBottom = b.borderTopWidth = b.borderBottomWidth = "show";
    e.widget("ui.accordion", {
        version: "1.9.2",
        options: {
            active: 0,
            animate: {},
            collapsible: false,
            event: "click",
            header: "> li > :first-child,> :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },
            activate: null,
            beforeActivate: null
        },
        _create: function() {
            var h = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++c),
                g = this.options;
            this.prevShow = this.prevHide = e();
            this.element.addClass("ui-accordion ui-widget ui-helper-reset");
            this.headers = this.element.find(g.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all");
            this._hoverable(this.headers);
            this._focusable(this.headers);
            this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide();
            if (!g.collapsible && (g.active === false || g.active == null)) {
                g.active = 0
            }
            if (g.active < 0) {
                g.active += this.headers.length
            }
            this.active = this._findActive(g.active).addClass("ui-accordion-header-active ui-state-active").toggleClass("ui-corner-all ui-corner-top");
            this.active.next().addClass("ui-accordion-content-active").show();
            this._createIcons();
            this.refresh();
            this.element.attr("role", "tablist");
            this.headers.attr("role", "tab").each(function(m) {
                var n = e(this),
                    l = n.attr("id"),
                    j = n.next(),
                    k = j.attr("id");
                if (!l) {
                    l = h + "-header-" + m;
                    n.attr("id", l)
                }
                if (!k) {
                    k = h + "-panel-" + m;
                    j.attr("id", k)
                }
                n.attr("aria-controls", k);
                j.attr("aria-labelledby", l)
            }).next().attr("role", "tabpanel");
            this.headers.not(this.active).attr({
                "aria-selected": "false",
                tabIndex: -1
            }).next().attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }).hide();
            if (!this.active.length) {
                this.headers.eq(0).attr("tabIndex", 0)
            } else {
                this.active.attr({
                    "aria-selected": "true",
                    tabIndex: 0
                }).next().attr({
                    "aria-expanded": "true",
                    "aria-hidden": "false"
                })
            }
            this._on(this.headers, {
                keydown: "_keydown"
            });
            this._on(this.headers.next(), {
                keydown: "_panelKeyDown"
            });
            this._setupEvents(g.event)
        },
        _getCreateEventData: function() {
            return {
                header: this.active,
                content: !this.active.length ? e() : this.active.next()
            }
        },
        _createIcons: function() {
            var g = this.options.icons;
            if (g) {
                e("<span>").addClass("ui-accordion-header-icon ui-icon " + g.header).prependTo(this.headers);
                this.active.children(".ui-accordion-header-icon").removeClass(g.header).addClass(g.activeHeader);
                this.headers.addClass("ui-accordion-icons")
            }
        },
        _destroyIcons: function() {
            this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
        },
        _destroy: function() {
            var g;
            this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");
            this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function() {
                if (/^ui-accordion/.test(this.id)) {
                    this.removeAttribute("id")
                }
            });
            this._destroyIcons();
            g = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function() {
                if (/^ui-accordion/.test(this.id)) {
                    this.removeAttribute("id")
                }
            });
            if (this.options.heightStyle !== "content") {
                g.css("height", "")
            }
        },
        _setOption: function(g, h) {
            if (g === "active") {
                this._activate(h);
                return
            }
            if (g === "event") {
                if (this.options.event) {
                    this._off(this.headers, this.options.event)
                }
                this._setupEvents(h)
            }
            this._super(g, h);
            if (g === "collapsible" && !h && this.options.active === false) {
                this._activate(0)
            }
            if (g === "icons") {
                this._destroyIcons();
                if (h) {
                    this._createIcons()
                }
            }
            if (g === "disabled") {
                this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!h)
            }
        },
        _keydown: function(j) {
            if (j.altKey || j.ctrlKey) {
                return
            }
            var k = e.ui.keyCode,
                i = this.headers.length,
                g = this.headers.index(j.target),
                h = false;
            switch (j.keyCode) {
                case k.RIGHT:
                case k.DOWN:
                    h = this.headers[(g + 1) % i];
                    break;
                case k.LEFT:
                case k.UP:
                    h = this.headers[(g - 1 + i) % i];
                    break;
                case k.SPACE:
                case k.ENTER:
                    this._eventHandler(j);
                    break;
                case k.HOME:
                    h = this.headers[0];
                    break;
                case k.END:
                    h = this.headers[i - 1];
                    break
            }
            if (h) {
                e(j.target).attr("tabIndex", -1);
                e(h).attr("tabIndex", 0);
                h.focus();
                j.preventDefault()
            }
        },
        _panelKeyDown: function(g) {
            if (g.keyCode === e.ui.keyCode.UP && g.ctrlKey) {
                e(g.currentTarget).prev().focus()
            }
        },
        refresh: function() {
            var i, j, g = this.options.heightStyle,
                h = this.element.parent();
            if (g === "fill") {
                if (!e.support.minHeight) {
                    j = h.css("overflow");
                    h.css("overflow", "hidden")
                }
                i = h.height();
                this.element.siblings(":visible").each(function() {
                    var l = e(this),
                        k = l.css("position");
                    if (k === "absolute" || k === "fixed") {
                        return
                    }
                    i -= l.outerHeight(true)
                });
                if (j) {
                    h.css("overflow", j)
                }
                this.headers.each(function() {
                    i -= e(this).outerHeight(true)
                });
                this.headers.next().each(function() {
                    e(this).height(Math.max(0, i - e(this).innerHeight() + e(this).height()))
                }).css("overflow", "auto")
            } else {
                if (g === "auto") {
                    i = 0;
                    this.headers.next().each(function() {
                        i = Math.max(i, e(this).css("height", "").height())
                    }).height(i)
                }
            }
        },
        _activate: function(g) {
            var h = this._findActive(g)[0];
            if (h === this.active[0]) {
                return
            }
            h = h || this.active[0];
            this._eventHandler({
                target: h,
                currentTarget: h,
                preventDefault: e.noop
            })
        },
        _findActive: function(g) {
            return typeof g === "number" ? this.headers.eq(g) : e()
        },
        _setupEvents: function(h) {
            var g = {};
            if (!h) {
                return
            }
            e.each(h.split(" "), function(j, i) {
                g[i] = "_eventHandler"
            });
            this._on(this.headers, g)
        },
        _eventHandler: function(g) {
            var o = this.options,
                j = this.active,
                k = e(g.currentTarget),
                m = k[0] === j[0],
                h = m && o.collapsible,
                i = h ? e() : k.next(),
                l = j.next(),
                n = {
                    oldHeader: j,
                    oldPanel: l,
                    newHeader: h ? e() : k,
                    newPanel: i
                };
            g.preventDefault();
            if ((m && !o.collapsible) || (this._trigger("beforeActivate", g, n) === false)) {
                return
            }
            o.active = h ? false : this.headers.index(k);
            this.active = m ? e() : k;
            this._toggle(n);
            j.removeClass("ui-accordion-header-active ui-state-active");
            if (o.icons) {
                j.children(".ui-accordion-header-icon").removeClass(o.icons.activeHeader).addClass(o.icons.header)
            }
            if (!m) {
                k.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top");
                if (o.icons) {
                    k.children(".ui-accordion-header-icon").removeClass(o.icons.header).addClass(o.icons.activeHeader)
                }
                k.next().addClass("ui-accordion-content-active")
            }
        },
        _toggle: function(i) {
            var g = i.newPanel,
                h = this.prevShow.length ? this.prevShow : i.oldPanel;
            this.prevShow.add(this.prevHide).stop(true, true);
            this.prevShow = g;
            this.prevHide = h;
            if (this.options.animate) {
                this._animate(g, h, i)
            } else {
                h.hide();
                g.show();
                this._toggleComplete(i)
            }
            h.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            });
            h.prev().attr("aria-selected", "false");
            if (g.length && h.length) {
                h.prev().attr("tabIndex", -1)
            } else {
                if (g.length) {
                    this.headers.filter(function() {
                        return e(this).attr("tabIndex") === 0
                    }).attr("tabIndex", -1)
                }
            }
            g.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }).prev().attr({
                "aria-selected": "true",
                tabIndex: 0
            })
        },
        _animate: function(g, o, k) {
            var n, m, j, l = this,
                p = 0,
                q = g.length && (!o.length || (g.index() < o.index())),
                i = this.options.animate || {},
                r = q && i.down || i,
                h = function() {
                    l._toggleComplete(k)
                };
            if (typeof r === "number") {
                j = r
            }
            if (typeof r === "string") {
                m = r
            }
            m = m || r.easing || i.easing;
            j = j || r.duration || i.duration;
            if (!o.length) {
                return g.animate(b, j, m, h)
            }
            if (!g.length) {
                return o.animate(d, j, m, h)
            }
            n = g.show().outerHeight();
            o.animate(d, {
                duration: j,
                easing: m,
                step: function(s, t) {
                    t.now = Math.round(s)
                }
            });
            g.hide().animate(b, {
                duration: j,
                easing: m,
                complete: h,
                step: function(s, t) {
                    t.now = Math.round(s);
                    if (t.prop !== "height") {
                        p += t.now
                    } else {
                        if (l.options.heightStyle !== "content") {
                            t.now = Math.round(n - o.outerHeight() - p);
                            p = 0
                        }
                    }
                }
            })
        },
        _toggleComplete: function(h) {
            var g = h.oldPanel;
            g.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all");
            if (g.length) {
                g.parent()[0].className = g.parent()[0].className
            }
            this._trigger("activate", null, h)
        }
    });
    if (e.uiBackCompat !== false) {
        (function(h, g) {
            h.extend(g.options, {
                navigation: false,
                navigationFilter: function() {
                    return this.href.toLowerCase() === location.href.toLowerCase()
                }
            });
            var i = g._create;
            g._create = function() {
                if (this.options.navigation) {
                    var k = this,
                        m = this.element.find(this.options.header),
                        j = m.next(),
                        l = m.add(j).find("a").filter(this.options.navigationFilter)[0];
                    if (l) {
                        m.add(j).each(function(n) {
                            if (h.contains(this, l)) {
                                k.options.active = Math.floor(n / 2);
                                return false
                            }
                        })
                    }
                }
                i.call(this)
            }
        }(jQuery, jQuery.ui.accordion.prototype));
        (function(i, g) {
            i.extend(g.options, {
                heightStyle: null,
                autoHeight: true,
                clearStyle: false,
                fillSpace: false
            });
            var j = g._create,
                h = g._setOption;
            i.extend(g, {
                _create: function() {
                    this.options.heightStyle = this.options.heightStyle || this._mergeHeightStyle();
                    j.call(this)
                },
                _setOption: function(k) {
                    if (k === "autoHeight" || k === "clearStyle" || k === "fillSpace") {
                        this.options.heightStyle = this._mergeHeightStyle()
                    }
                    h.apply(this, arguments)
                },
                _mergeHeightStyle: function() {
                    var k = this.options;
                    if (k.fillSpace) {
                        return "fill"
                    }
                    if (k.clearStyle) {
                        return "content"
                    }
                    if (k.autoHeight) {
                        return "auto"
                    }
                }
            })
        }(jQuery, jQuery.ui.accordion.prototype));
        (function(i, h) {
            i.extend(h.options.icons, {
                activeHeader: null,
                headerSelected: "ui-icon-triangle-1-s"
            });
            var g = h._createIcons;
            h._createIcons = function() {
                if (this.options.icons) {
                    this.options.icons.activeHeader = this.options.icons.activeHeader || this.options.icons.headerSelected
                }
                g.call(this)
            }
        }(jQuery, jQuery.ui.accordion.prototype));
        (function(i, h) {
            h.activate = h._activate;
            var g = h._findActive;
            h._findActive = function(j) {
                if (j === -1) {
                    j = false
                }
                if (j && typeof j !== "number") {
                    j = this.headers.index(this.headers.filter(j));
                    if (j === -1) {
                        j = false
                    }
                }
                return g.call(this, j)
            }
        }(jQuery, jQuery.ui.accordion.prototype));
        jQuery.ui.accordion.prototype.resize = jQuery.ui.accordion.prototype.refresh;
        (function(i, h) {
            i.extend(h.options, {
                change: null,
                changestart: null
            });
            var g = h._trigger;
            h._trigger = function(k, l, m) {
                var j = g.apply(this, arguments);
                if (!j) {
                    return false
                }
                if (k === "beforeActivate") {
                    j = g.call(this, "changestart", l, {
                        oldHeader: m.oldHeader,
                        oldContent: m.oldPanel,
                        newHeader: m.newHeader,
                        newContent: m.newPanel
                    })
                } else {
                    if (k === "activate") {
                        j = g.call(this, "change", l, {
                            oldHeader: m.oldHeader,
                            oldContent: m.oldPanel,
                            newHeader: m.newHeader,
                            newContent: m.newPanel
                        })
                    }
                }
                return j
            }
        }(jQuery, jQuery.ui.accordion.prototype));
        (function(h, g) {
            h.extend(g.options, {
                animate: null,
                animated: "slide"
            });
            var i = g._create;
            g._create = function() {
                var j = this.options;
                if (j.animate === null) {
                    if (!j.animated) {
                        j.animate = false
                    } else {
                        if (j.animated === "slide") {
                            j.animate = 300
                        } else {
                            if (j.animated === "bounceslide") {
                                j.animate = {
                                    duration: 200,
                                    down: {
                                        easing: "easeOutBounce",
                                        duration: 1000
                                    }
                                }
                            } else {
                                j.animate = j.animated
                            }
                        }
                    }
                }
                i.call(this)
            }
        }(jQuery, jQuery.ui.accordion.prototype))
    }
})(jQuery);
(function(b, c) {
    var d = 0;
    b.widget("ui.autocomplete", {
        version: "1.9.2",
        defaultElement: "<input>",
        options: {
            appendTo: "body",
            autoFocus: false,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        pending: 0,
        _create: function() {
            var f, e, g;
            this.isMultiLine = this._isMultiLine();
            this.valueMethod = this.element[this.element.is("input,textarea") ? "val" : "text"];
            this.isNewMenu = true;
            this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off");
            this._on(this.element, {
                keydown: function(h) {
                    if (this.element.prop("readOnly")) {
                        f = true;
                        g = true;
                        e = true;
                        return
                    }
                    f = false;
                    g = false;
                    e = false;
                    var i = b.ui.keyCode;
                    switch (h.keyCode) {
                        case i.PAGE_UP:
                            f = true;
                            this._move("previousPage", h);
                            break;
                        case i.PAGE_DOWN:
                            f = true;
                            this._move("nextPage", h);
                            break;
                        case i.UP:
                            f = true;
                            this._keyEvent("previous", h);
                            break;
                        case i.DOWN:
                            f = true;
                            this._keyEvent("next", h);
                            break;
                        case i.ENTER:
                        case i.NUMPAD_ENTER:
                            if (this.menu.active) {
                                f = true;
                                h.preventDefault();
                                this.menu.select(h)
                            }
                            break;
                        case i.TAB:
                            if (this.menu.active) {
                                this.menu.select(h)
                            }
                            break;
                        case i.ESCAPE:
                            if (this.menu.element.is(":visible")) {
                                this._value(this.term);
                                this.close(h);
                                h.preventDefault()
                            }
                            break;
                        default:
                            e = true;
                            this._searchTimeout(h);
                            break
                    }
                },
                keypress: function(h) {
                    if (f) {
                        f = false;
                        h.preventDefault();
                        return
                    }
                    if (e) {
                        return
                    }
                    var i = b.ui.keyCode;
                    switch (h.keyCode) {
                        case i.PAGE_UP:
                            this._move("previousPage", h);
                            break;
                        case i.PAGE_DOWN:
                            this._move("nextPage", h);
                            break;
                        case i.UP:
                            this._keyEvent("previous", h);
                            break;
                        case i.DOWN:
                            this._keyEvent("next", h);
                            break
                    }
                },
                input: function(h) {
                    if (g) {
                        g = false;
                        h.preventDefault();
                        return
                    }
                    this._searchTimeout(h)
                },
                focus: function() {
                    this.selectedItem = null;
                    this.previous = this._value()
                },
                blur: function(h) {
                    if (this.cancelBlur) {
                        delete this.cancelBlur;
                        return
                    }
                    clearTimeout(this.searching);
                    this.close(h);
                    this._change(h)
                }
            });
            this._initSource();
            this.menu = b("<ul>").addClass("ui-autocomplete").appendTo(this.document.find(this.options.appendTo || "body")[0]).menu({
                input: b(),
                role: null
            }).zIndex(this.element.zIndex() + 1).hide().data("menu");
            this._on(this.menu.element, {
                mousedown: function(h) {
                    h.preventDefault();
                    this.cancelBlur = true;
                    this._delay(function() {
                        delete this.cancelBlur
                    });
                    var i = this.menu.element[0];
                    if (!b(h.target).closest(".ui-menu-item").length) {
                        this._delay(function() {
                            var j = this;
                            this.document.one("mousedown", function(k) {
                                if (k.target !== j.element[0] && k.target !== i && !b.contains(i, k.target)) {
                                    j.close()
                                }
                            })
                        })
                    }
                },
                menufocus: function(i, j) {
                    if (this.isNewMenu) {
                        this.isNewMenu = false;
                        if (i.originalEvent && /^mouse/.test(i.originalEvent.type)) {
                            this.menu.blur();
                            this.document.one("mousemove", function() {
                                b(i.target).trigger(i.originalEvent)
                            });
                            return
                        }
                    }
                    var h = j.item.data("ui-autocomplete-item") || j.item.data("item.autocomplete");
                    if (false !== this._trigger("focus", i, {
                            item: h
                        })) {
                        if (i.originalEvent && /^key/.test(i.originalEvent.type)) {
                            this._value(h.value)
                        }
                    } else {
                        this.liveRegion.text(h.value)
                    }
                },
                menuselect: function(j, k) {
                    var i = k.item.data("ui-autocomplete-item") || k.item.data("item.autocomplete"),
                        h = this.previous;
                    if (this.element[0] !== this.document[0].activeElement) {
                        this.element.focus();
                        this.previous = h;
                        this._delay(function() {
                            this.previous = h;
                            this.selectedItem = i
                        })
                    }
                    if (false !== this._trigger("select", j, {
                            item: i
                        })) {
                        this._value(i.value)
                    }
                    this.term = this._value();
                    this.close(j);
                    this.selectedItem = i
                }
            });
            this.liveRegion = b("<span>", {
                role: "status",
                "aria-live": "polite"
            }).addClass("ui-helper-hidden-accessible").insertAfter(this.element);
            if (b.fn.bgiframe) {
                this.menu.element.bgiframe()
            }
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching);
            this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete");
            this.menu.element.remove();
            this.liveRegion.remove()
        },
        _setOption: function(e, f) {
            this._super(e, f);
            if (e === "source") {
                this._initSource()
            }
            if (e === "appendTo") {
                this.menu.element.appendTo(this.document.find(f || "body")[0])
            }
            if (e === "disabled" && f && this.xhr) {
                this.xhr.abort()
            }
        },
        _isMultiLine: function() {
            if (this.element.is("textarea")) {
                return true
            }
            if (this.element.is("input")) {
                return false
            }
            return this.element.prop("isContentEditable")
        },
        _initSource: function() {
            var g, e, f = this;
            if (b.isArray(this.options.source)) {
                g = this.options.source;
                this.source = function(i, h) {
                    h(b.ui.autocomplete.filter(g, i.term))
                }
            } else {
                if (typeof this.options.source === "string") {
                    e = this.options.source;
                    this.source = function(i, h) {
                        if (f.xhr) {
                            f.xhr.abort()
                        }
                        f.xhr = b.ajax({
                            url: e,
                            data: i,
                            dataType: "json",
                            success: function(j) {
                                h(j)
                            },
                            error: function() {
                                h([])
                            }
                        })
                    }
                } else {
                    this.source = this.options.source
                }
            }
        },
        _searchTimeout: function(e) {
            clearTimeout(this.searching);
            this.searching = this._delay(function() {
                if (this.term !== this._value()) {
                    this.selectedItem = null;
                    this.search(null, e)
                }
            }, this.options.delay)
        },
        search: function(f, e) {
            f = f != null ? f : this._value();
            this.term = this._value();
            if (f.length < this.options.minLength) {
                return this.close(e)
            }
            if (this._trigger("search", e) === false) {
                return
            }
            return this._search(f)
        },
        _search: function(e) {
            this.pending++;
            this.element.addClass("ui-autocomplete-loading");
            this.cancelSearch = false;
            this.source({
                term: e
            }, this._response())
        },
        _response: function() {
            var f = this,
                e = ++d;
            return function(g) {
                if (e === d) {
                    f.__response(g)
                }
                f.pending--;
                if (!f.pending) {
                    f.element.removeClass("ui-autocomplete-loading")
                }
            }
        },
        __response: function(e) {
            if (e) {
                e = this._normalize(e)
            }
            this._trigger("response", null, {
                content: e
            });
            if (!this.options.disabled && e && e.length && !this.cancelSearch) {
                this._suggest(e);
                this._trigger("open")
            } else {
                this._close()
            }
        },
        close: function(e) {
            this.cancelSearch = true;
            this._close(e)
        },
        _close: function(e) {
            if (this.menu.element.is(":visible")) {
                this.menu.element.hide();
                this.menu.blur();
                this.isNewMenu = true;
                this._trigger("close", e)
            }
        },
        _change: function(e) {
            if (this.previous !== this._value()) {
                this._trigger("change", e, {
                    item: this.selectedItem
                })
            }
        },
        _normalize: function(e) {
            if (e.length && e[0].label && e[0].value) {
                return e
            }
            return b.map(e, function(f) {
                if (typeof f === "string") {
                    return {
                        label: f,
                        value: f
                    }
                }
                return b.extend({
                    label: f.label || f.value,
                    value: f.value || f.label
                }, f)
            })
        },
        _suggest: function(e) {
            var f = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
            this._renderMenu(f, e);
            this.menu.refresh();
            f.show();
            this._resizeMenu();
            f.position(b.extend({
                of: this.element
            }, this.options.position));
            if (this.options.autoFocus) {
                this.menu.next()
            }
        },
        _resizeMenu: function() {
            var e = this.menu.element;
            e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(f, e) {
            var g = this;
            b.each(e, function(h, i) {
                g._renderItemData(f, i)
            })
        },
        _renderItemData: function(e, f) {
            return this._renderItem(e, f).data("ui-autocomplete-item", f)
        },
        _renderItem: function(e, f) {
            return b("<li>").append(b("<a>").text(f.label)).appendTo(e)
        },
        _move: function(f, e) {
            if (!this.menu.element.is(":visible")) {
                this.search(null, e);
                return
            }
            if (this.menu.isFirstItem() && /^previous/.test(f) || this.menu.isLastItem() && /^next/.test(f)) {
                this._value(this.term);
                this.menu.blur();
                return
            }
            this.menu[f](e)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(f, e) {
            if (!this.isMultiLine || this.menu.element.is(":visible")) {
                this._move(f, e);
                e.preventDefault()
            }
        }
    });
    b.extend(b.ui.autocomplete, {
        escapeRegex: function(e) {
            return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(g, e) {
            var f = new RegExp(b.ui.autocomplete.escapeRegex(e), "i");
            return b.grep(g, function(h) {
                return f.test(h.label || h.value || h)
            })
        }
    });
    b.widget("ui.autocomplete", b.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(e) {
                    return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(f) {
            var e;
            this._superApply(arguments);
            if (this.options.disabled || this.cancelSearch) {
                return
            }
            if (f && f.length) {
                e = this.options.messages.results(f.length)
            } else {
                e = this.options.messages.noResults
            }
            this.liveRegion.text(e)
        }
    })
}(jQuery));
(function(g, c) {
    var l, f, b, i, j = "ui-button ui-widget ui-state-default ui-corner-all",
        d = "ui-state-hover ui-state-active ",
        h = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
        k = function() {
            var m = g(this).find(":ui-button");
            setTimeout(function() {
                m.button("refresh")
            }, 1)
        },
        e = function(n) {
            var m = n.name,
                o = n.form,
                p = g([]);
            if (m) {
                if (o) {
                    p = g(o).find("[name='" + m + "']")
                } else {
                    p = g("[name='" + m + "']", n.ownerDocument).filter(function() {
                        return !this.form
                    })
                }
            }
            return p
        };
    g.widget("ui.button", {
        version: "1.9.2",
        defaultElement: "<button>",
        options: {
            disabled: null,
            text: true,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, k);
            if (typeof this.options.disabled !== "boolean") {
                this.options.disabled = !!this.element.prop("disabled")
            } else {
                this.element.prop("disabled", this.options.disabled)
            }
            this._determineButtonType();
            this.hasTitle = !!this.buttonElement.attr("title");
            var p = this,
                n = this.options,
                q = this.type === "checkbox" || this.type === "radio",
                o = !q ? "ui-state-active" : "",
                m = "ui-state-focus";
            if (n.label === null) {
                n.label = (this.type === "input" ? this.buttonElement.val() : this.buttonElement.html())
            }
            this._hoverable(this.buttonElement);
            this.buttonElement.addClass(j).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
                if (n.disabled) {
                    return
                }
                if (this === l) {
                    g(this).addClass("ui-state-active")
                }
            }).bind("mouseleave" + this.eventNamespace, function() {
                if (n.disabled) {
                    return
                }
                g(this).removeClass(o)
            }).bind("click" + this.eventNamespace, function(r) {
                if (n.disabled) {
                    r.preventDefault();
                    r.stopImmediatePropagation()
                }
            });
            this.element.bind("focus" + this.eventNamespace, function() {
                p.buttonElement.addClass(m)
            }).bind("blur" + this.eventNamespace, function() {
                p.buttonElement.removeClass(m)
            });
            if (q) {
                this.element.bind("change" + this.eventNamespace, function() {
                    if (i) {
                        return
                    }
                    p.refresh()
                });
                this.buttonElement.bind("mousedown" + this.eventNamespace, function(r) {
                    if (n.disabled) {
                        return
                    }
                    i = false;
                    f = r.pageX;
                    b = r.pageY
                }).bind("mouseup" + this.eventNamespace, function(r) {
                    if (n.disabled) {
                        return
                    }
                    if (f !== r.pageX || b !== r.pageY) {
                        i = true
                    }
                })
            }
            if (this.type === "checkbox") {
                this.buttonElement.bind("click" + this.eventNamespace, function() {
                    if (n.disabled || i) {
                        return false
                    }
                    g(this).toggleClass("ui-state-active");
                    p.buttonElement.attr("aria-pressed", p.element[0].checked)
                })
            } else {
                if (this.type === "radio") {
                    this.buttonElement.bind("click" + this.eventNamespace, function() {
                        if (n.disabled || i) {
                            return false
                        }
                        g(this).addClass("ui-state-active");
                        p.buttonElement.attr("aria-pressed", "true");
                        var r = p.element[0];
                        e(r).not(r).map(function() {
                            return g(this).button("widget")[0]
                        }).removeClass("ui-state-active").attr("aria-pressed", "false")
                    })
                } else {
                    this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                        if (n.disabled) {
                            return false
                        }
                        g(this).addClass("ui-state-active");
                        l = this;
                        p.document.one("mouseup", function() {
                            l = null
                        })
                    }).bind("mouseup" + this.eventNamespace, function() {
                        if (n.disabled) {
                            return false
                        }
                        g(this).removeClass("ui-state-active")
                    }).bind("keydown" + this.eventNamespace, function(r) {
                        if (n.disabled) {
                            return false
                        }
                        if (r.keyCode === g.ui.keyCode.SPACE || r.keyCode === g.ui.keyCode.ENTER) {
                            g(this).addClass("ui-state-active")
                        }
                    }).bind("keyup" + this.eventNamespace, function() {
                        g(this).removeClass("ui-state-active")
                    });
                    if (this.buttonElement.is("a")) {
                        this.buttonElement.keyup(function(r) {
                            if (r.keyCode === g.ui.keyCode.SPACE) {
                                g(this).click()
                            }
                        })
                    }
                }
            }
            this._setOption("disabled", n.disabled);
            this._resetButton()
        },
        _determineButtonType: function() {
            var m, o, n;
            if (this.element.is("[type=checkbox]")) {
                this.type = "checkbox"
            } else {
                if (this.element.is("[type=radio]")) {
                    this.type = "radio"
                } else {
                    if (this.element.is("input")) {
                        this.type = "input"
                    } else {
                        this.type = "button"
                    }
                }
            }
            if (this.type === "checkbox" || this.type === "radio") {
                m = this.element.parents().last();
                o = "label[for='" + this.element.attr("id") + "']";
                this.buttonElement = m.find(o);
                if (!this.buttonElement.length) {
                    m = m.length ? m.siblings() : this.element.siblings();
                    this.buttonElement = m.filter(o);
                    if (!this.buttonElement.length) {
                        this.buttonElement = m.find(o)
                    }
                }
                this.element.addClass("ui-helper-hidden-accessible");
                n = this.element.is(":checked");
                if (n) {
                    this.buttonElement.addClass("ui-state-active")
                }
                this.buttonElement.prop("aria-pressed", n)
            } else {
                this.buttonElement = this.element
            }
        },
        widget: function() {
            return this.buttonElement
        },
        _destroy: function() {
            this.element.removeClass("ui-helper-hidden-accessible");
            this.buttonElement.removeClass(j + " " + d + " " + h).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
            if (!this.hasTitle) {
                this.buttonElement.removeAttr("title")
            }
        },
        _setOption: function(m, n) {
            this._super(m, n);
            if (m === "disabled") {
                if (n) {
                    this.element.prop("disabled", true)
                } else {
                    this.element.prop("disabled", false)
                }
                return
            }
            this._resetButton()
        },
        refresh: function() {
            var m = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            if (m !== this.options.disabled) {
                this._setOption("disabled", m)
            }
            if (this.type === "radio") {
                e(this.element[0]).each(function() {
                    if (g(this).is(":checked")) {
                        g(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true")
                    } else {
                        g(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
                    }
                })
            } else {
                if (this.type === "checkbox") {
                    if (this.element.is(":checked")) {
                        this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true")
                    } else {
                        this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false")
                    }
                }
            }
        },
        _resetButton: function() {
            if (this.type === "input") {
                if (this.options.label) {
                    this.element.val(this.options.label)
                }
                return
            }
            var q = this.buttonElement.removeClass(h),
                o = g("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(q.empty()).text(),
                n = this.options.icons,
                m = n.primary && n.secondary,
                p = [];
            if (n.primary || n.secondary) {
                if (this.options.text) {
                    p.push("ui-button-text-icon" + (m ? "s" : (n.primary ? "-primary" : "-secondary")))
                }
                if (n.primary) {
                    q.prepend("<span class='ui-button-icon-primary ui-icon " + n.primary + "'></span>")
                }
                if (n.secondary) {
                    q.append("<span class='ui-button-icon-secondary ui-icon " + n.secondary + "'></span>")
                }
                if (!this.options.text) {
                    p.push(m ? "ui-button-icons-only" : "ui-button-icon-only");
                    if (!this.hasTitle) {
                        q.attr("title", g.trim(o))
                    }
                }
            } else {
                p.push("ui-button-text-only")
            }
            q.addClass(p.join(" "))
        }
    });
    g.widget("ui.buttonset", {
        version: "1.9.2",
        options: {
            items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(button)"
        },
        _create: function() {
            this.element.addClass("ui-buttonset")
        },
        _init: function() {
            this.refresh()
        },
        _setOption: function(m, n) {
            if (m === "disabled") {
                this.buttons.button("option", m, n)
            }
            this._super(m, n)
        },
        refresh: function() {
            var m = this.element.css("direction") === "rtl";
            this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
                return g(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(m ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(m ? "ui-corner-left" : "ui-corner-right").end().end()
        },
        _destroy: function() {
            this.element.removeClass("ui-buttonset");
            this.buttons.map(function() {
                return g(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
        }
    })
}(jQuery));
(function($, undefined) {
    $.extend($.ui, {
        datepicker: {
            version: "1.9.2"
        }
    });
    var PROP_NAME = "datepicker";
    var dpuuid = new Date().getTime();
    var instActive;

    function Datepicker() {
        this.debug = false;
        this._curInst = null;
        this._keyEvent = false;
        this._disabledInputs = [];
        this._datepickerShowing = false;
        this._inDialog = false;
        this._mainDivId = "ui-datepicker-div";
        this._inlineClass = "ui-datepicker-inline";
        this._appendClass = "ui-datepicker-append";
        this._triggerClass = "ui-datepicker-trigger";
        this._dialogClass = "ui-datepicker-dialog";
        this._disableClass = "ui-datepicker-disabled";
        this._unselectableClass = "ui-datepicker-unselectable";
        this._currentClass = "ui-datepicker-current-day";
        this._dayOverClass = "ui-datepicker-days-cell-over";
        this.regional = [];
        this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ""
        };
        this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: false,
            hideIfNoPrevNext: false,
            navigationAsDateFormat: false,
            gotoCurrent: false,
            changeMonth: false,
            changeYear: false,
            yearRange: "c-10:c+10",
            showOtherMonths: false,
            selectOtherMonths: false,
            showWeek: false,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: true,
            showButtonPanel: false,
            autoSize: false,
            disabled: false
        };
        $.extend(this._defaults, this.regional[""]);
        this.dpDiv = bindHover($('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
    }
    $.extend(Datepicker.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        log: function() {
            if (this.debug) {
                console.log.apply("", arguments)
            }
        },
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(settings) {
            extendRemove(this._defaults, settings || {});
            return this
        },
        _attachDatepicker: function(target, settings) {
            var inlineSettings = null;
            for (var attrName in this._defaults) {
                var attrValue = target.getAttribute("date:" + attrName);
                if (attrValue) {
                    inlineSettings = inlineSettings || {};
                    try {
                        inlineSettings[attrName] = eval(attrValue)
                    } catch (err) {
                        inlineSettings[attrName] = attrValue
                    }
                }
            }
            var nodeName = target.nodeName.toLowerCase();
            var inline = (nodeName == "div" || nodeName == "span");
            if (!target.id) {
                this.uuid += 1;
                target.id = "dp" + this.uuid
            }
            var inst = this._newInst($(target), inline);
            inst.settings = $.extend({}, settings || {}, inlineSettings || {});
            if (nodeName == "input") {
                this._connectDatepicker(target, inst)
            } else {
                if (inline) {
                    this._inlineDatepicker(target, inst)
                }
            }
        },
        _newInst: function(target, inline) {
            var id = target[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1");
            return {
                id: id,
                input: target,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: inline,
                dpDiv: (!inline ? this.dpDiv : bindHover($('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')))
            }
        },
        _connectDatepicker: function(target, inst) {
            var input = $(target);
            inst.append = $([]);
            inst.trigger = $([]);
            if (input.hasClass(this.markerClassName)) {
                return
            }
            this._attachments(input, inst);
            input.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function(event, key, value) {
                inst.settings[key] = value
            }).bind("getData.datepicker", function(event, key) {
                return this._get(inst, key)
            });
            this._autoSize(inst);
            $.data(target, PROP_NAME, inst);
            if (inst.settings.disabled) {
                this._disableDatepicker(target)
            }
        },
        _attachments: function(input, inst) {
            var appendText = this._get(inst, "appendText");
            var isRTL = this._get(inst, "isRTL");
            if (inst.append) {
                inst.append.remove()
            }
            if (appendText) {
                inst.append = $('<span class="' + this._appendClass + '">' + appendText + "</span>");
                input[isRTL ? "before" : "after"](inst.append)
            }
            input.unbind("focus", this._showDatepicker);
            if (inst.trigger) {
                inst.trigger.remove()
            }
            var showOn = this._get(inst, "showOn");
            if (showOn == "focus" || showOn == "both") {
                input.focus(this._showDatepicker)
            }
            if (showOn == "button" || showOn == "both") {
                var buttonText = this._get(inst, "buttonText");
                var buttonImage = this._get(inst, "buttonImage");
                inst.trigger = $(this._get(inst, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({
                    src: buttonImage,
                    alt: buttonText,
                    title: buttonText
                }) : $('<button type="button"></button>').addClass(this._triggerClass).html(buttonImage == "" ? buttonText : $("<img/>").attr({
                    src: buttonImage,
                    alt: buttonText,
                    title: buttonText
                })));
                input[isRTL ? "before" : "after"](inst.trigger);
                inst.trigger.click(function() {
                    if ($.datepicker._datepickerShowing && $.datepicker._lastInput == input[0]) {
                        $.datepicker._hideDatepicker()
                    } else {
                        if ($.datepicker._datepickerShowing && $.datepicker._lastInput != input[0]) {
                            $.datepicker._hideDatepicker();
                            $.datepicker._showDatepicker(input[0])
                        } else {
                            $.datepicker._showDatepicker(input[0])
                        }
                    }
                    return false
                })
            }
        },
        _autoSize: function(inst) {
            if (this._get(inst, "autoSize") && !inst.inline) {
                var date = new Date(2009, 12 - 1, 20);
                var dateFormat = this._get(inst, "dateFormat");
                if (dateFormat.match(/[DM]/)) {
                    var findMax = function(names) {
                        var max = 0;
                        var maxI = 0;
                        for (var i = 0; i < names.length; i++) {
                            if (names[i].length > max) {
                                max = names[i].length;
                                maxI = i
                            }
                        }
                        return maxI
                    };
                    date.setMonth(findMax(this._get(inst, (dateFormat.match(/MM/) ? "monthNames" : "monthNamesShort"))));
                    date.setDate(findMax(this._get(inst, (dateFormat.match(/DD/) ? "dayNames" : "dayNamesShort"))) + 20 - date.getDay())
                }
                inst.input.attr("size", this._formatDate(inst, date).length)
            }
        },
        _inlineDatepicker: function(target, inst) {
            var divSpan = $(target);
            if (divSpan.hasClass(this.markerClassName)) {
                return
            }
            divSpan.addClass(this.markerClassName).append(inst.dpDiv).bind("setData.datepicker", function(event, key, value) {
                inst.settings[key] = value
            }).bind("getData.datepicker", function(event, key) {
                return this._get(inst, key)
            });
            $.data(target, PROP_NAME, inst);
            this._setDate(inst, this._getDefaultDate(inst), true);
            this._updateDatepicker(inst);
            this._updateAlternate(inst);
            if (inst.settings.disabled) {
                this._disableDatepicker(target)
            }
            inst.dpDiv.css("display", "block")
        },
        _dialogDatepicker: function(input, date, onSelect, settings, pos) {
            var inst = this._dialogInst;
            if (!inst) {
                this.uuid += 1;
                var id = "dp" + this.uuid;
                this._dialogInput = $('<input type="text" id="' + id + '" style="position: absolute; top: -100px; width: 0px;"/>');
                this._dialogInput.keydown(this._doKeyDown);
                $("body").append(this._dialogInput);
                inst = this._dialogInst = this._newInst(this._dialogInput, false);
                inst.settings = {};
                $.data(this._dialogInput[0], PROP_NAME, inst)
            }
            extendRemove(inst.settings, settings || {});
            date = (date && date.constructor == Date ? this._formatDate(inst, date) : date);
            this._dialogInput.val(date);
            this._pos = (pos ? (pos.length ? pos : [pos.pageX, pos.pageY]) : null);
            if (!this._pos) {
                var browserWidth = document.documentElement.clientWidth;
                var browserHeight = document.documentElement.clientHeight;
                var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
                var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
                this._pos = [(browserWidth / 2) - 100 + scrollX, (browserHeight / 2) - 150 + scrollY]
            }
            this._dialogInput.css("left", (this._pos[0] + 20) + "px").css("top", this._pos[1] + "px");
            inst.settings.onSelect = onSelect;
            this._inDialog = true;
            this.dpDiv.addClass(this._dialogClass);
            this._showDatepicker(this._dialogInput[0]);
            if ($.blockUI) {
                $.blockUI(this.dpDiv)
            }
            $.data(this._dialogInput[0], PROP_NAME, inst);
            return this
        },
        _destroyDatepicker: function(target) {
            var $target = $(target);
            var inst = $.data(target, PROP_NAME);
            if (!$target.hasClass(this.markerClassName)) {
                return
            }
            var nodeName = target.nodeName.toLowerCase();
            $.removeData(target, PROP_NAME);
            if (nodeName == "input") {
                inst.append.remove();
                inst.trigger.remove();
                $target.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)
            } else {
                if (nodeName == "div" || nodeName == "span") {
                    $target.removeClass(this.markerClassName).empty()
                }
            }
        },
        _enableDatepicker: function(target) {
            var $target = $(target);
            var inst = $.data(target, PROP_NAME);
            if (!$target.hasClass(this.markerClassName)) {
                return
            }
            var nodeName = target.nodeName.toLowerCase();
            if (nodeName == "input") {
                target.disabled = false;
                inst.trigger.filter("button").each(function() {
                    this.disabled = false
                }).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                })
            } else {
                if (nodeName == "div" || nodeName == "span") {
                    var inline = $target.children("." + this._inlineClass);
                    inline.children().removeClass("ui-state-disabled");
                    inline.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", false)
                }
            }
            this._disabledInputs = $.map(this._disabledInputs, function(value) {
                return (value == target ? null : value)
            })
        },
        _disableDatepicker: function(target) {
            var $target = $(target);
            var inst = $.data(target, PROP_NAME);
            if (!$target.hasClass(this.markerClassName)) {
                return
            }
            var nodeName = target.nodeName.toLowerCase();
            if (nodeName == "input") {
                target.disabled = true;
                inst.trigger.filter("button").each(function() {
                    this.disabled = true
                }).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                })
            } else {
                if (nodeName == "div" || nodeName == "span") {
                    var inline = $target.children("." + this._inlineClass);
                    inline.children().addClass("ui-state-disabled");
                    inline.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", true)
                }
            }
            this._disabledInputs = $.map(this._disabledInputs, function(value) {
                return (value == target ? null : value)
            });
            this._disabledInputs[this._disabledInputs.length] = target
        },
        _isDisabledDatepicker: function(target) {
            if (!target) {
                return false
            }
            for (var i = 0; i < this._disabledInputs.length; i++) {
                if (this._disabledInputs[i] == target) {
                    return true
                }
            }
            return false
        },
        _getInst: function(target) {
            try {
                return $.data(target, PROP_NAME)
            } catch (err) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function(target, name, value) {
            var inst = this._getInst(target);
            if (arguments.length == 2 && typeof name == "string") {
                return (name == "defaults" ? $.extend({}, $.datepicker._defaults) : (inst ? (name == "all" ? $.extend({}, inst.settings) : this._get(inst, name)) : null))
            }
            var settings = name || {};
            if (typeof name == "string") {
                settings = {};
                settings[name] = value
            }
            if (inst) {
                if (this._curInst == inst) {
                    this._hideDatepicker()
                }
                var date = this._getDateDatepicker(target, true);
                var minDate = this._getMinMaxDate(inst, "min");
                var maxDate = this._getMinMaxDate(inst, "max");
                extendRemove(inst.settings, settings);
                if (minDate !== null && settings.dateFormat !== undefined && settings.minDate === undefined) {
                    inst.settings.minDate = this._formatDate(inst, minDate)
                }
                if (maxDate !== null && settings.dateFormat !== undefined && settings.maxDate === undefined) {
                    inst.settings.maxDate = this._formatDate(inst, maxDate)
                }
                this._attachments($(target), inst);
                this._autoSize(inst);
                this._setDate(inst, date);
                this._updateAlternate(inst);
                this._updateDatepicker(inst)
            }
        },
        _changeDatepicker: function(target, name, value) {
            this._optionDatepicker(target, name, value)
        },
        _refreshDatepicker: function(target) {
            var inst = this._getInst(target);
            if (inst) {
                this._updateDatepicker(inst)
            }
        },
        _setDateDatepicker: function(target, date) {
            var inst = this._getInst(target);
            if (inst) {
                this._setDate(inst, date);
                this._updateDatepicker(inst);
                this._updateAlternate(inst)
            }
        },
        _getDateDatepicker: function(target, noDefault) {
            var inst = this._getInst(target);
            if (inst && !inst.inline) {
                this._setDateFromField(inst, noDefault)
            }
            return (inst ? this._getDate(inst) : null)
        },
        _doKeyDown: function(event) {
            var inst = $.datepicker._getInst(event.target);
            var handled = true;
            var isRTL = inst.dpDiv.is(".ui-datepicker-rtl");
            inst._keyEvent = true;
            if ($.datepicker._datepickerShowing) {
                switch (event.keyCode) {
                    case 9:
                        $.datepicker._hideDatepicker();
                        handled = false;
                        break;
                    case 13:
                        var sel = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", inst.dpDiv);
                        if (sel[0]) {
                            $.datepicker._selectDay(event.target, inst.selectedMonth, inst.selectedYear, sel[0])
                        }
                        var onSelect = $.datepicker._get(inst, "onSelect");
                        if (onSelect) {
                            var dateStr = $.datepicker._formatDate(inst);
                            onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst])
                        } else {
                            $.datepicker._hideDatepicker()
                        }
                        return false;
                        break;
                    case 27:
                        $.datepicker._hideDatepicker();
                        break;
                    case 33:
                        $.datepicker._adjustDate(event.target, (event.ctrlKey ? -$.datepicker._get(inst, "stepBigMonths") : -$.datepicker._get(inst, "stepMonths")), "M");
                        break;
                    case 34:
                        $.datepicker._adjustDate(event.target, (event.ctrlKey ? +$.datepicker._get(inst, "stepBigMonths") : +$.datepicker._get(inst, "stepMonths")), "M");
                        break;
                    case 35:
                        if (event.ctrlKey || event.metaKey) {
                            $.datepicker._clearDate(event.target)
                        }
                        handled = event.ctrlKey || event.metaKey;
                        break;
                    case 36:
                        if (event.ctrlKey || event.metaKey) {
                            $.datepicker._gotoToday(event.target)
                        }
                        handled = event.ctrlKey || event.metaKey;
                        break;
                    case 37:
                        if (event.ctrlKey || event.metaKey) {
                            $.datepicker._adjustDate(event.target, (isRTL ? +1 : -1), "D")
                        }
                        handled = event.ctrlKey || event.metaKey;
                        if (event.originalEvent.altKey) {
                            $.datepicker._adjustDate(event.target, (event.ctrlKey ? -$.datepicker._get(inst, "stepBigMonths") : -$.datepicker._get(inst, "stepMonths")), "M")
                        }
                        break;
                    case 38:
                        if (event.ctrlKey || event.metaKey) {
                            $.datepicker._adjustDate(event.target, -7, "D")
                        }
                        handled = event.ctrlKey || event.metaKey;
                        break;
                    case 39:
                        if (event.ctrlKey || event.metaKey) {
                            $.datepicker._adjustDate(event.target, (isRTL ? -1 : +1), "D")
                        }
                        handled = event.ctrlKey || event.metaKey;
                        if (event.originalEvent.altKey) {
                            $.datepicker._adjustDate(event.target, (event.ctrlKey ? +$.datepicker._get(inst, "stepBigMonths") : +$.datepicker._get(inst, "stepMonths")), "M")
                        }
                        break;
                    case 40:
                        if (event.ctrlKey || event.metaKey) {
                            $.datepicker._adjustDate(event.target, +7, "D")
                        }
                        handled = event.ctrlKey || event.metaKey;
                        break;
                    default:
                        handled = false
                }
            } else {
                if (event.keyCode == 36 && event.ctrlKey) {
                    $.datepicker._showDatepicker(this)
                } else {
                    handled = false
                }
            }
            if (handled) {
                event.preventDefault();
                event.stopPropagation()
            }
        },
        _doKeyPress: function(event) {
            var inst = $.datepicker._getInst(event.target);
            if ($.datepicker._get(inst, "constrainInput")) {
                var chars = $.datepicker._possibleChars($.datepicker._get(inst, "dateFormat"));
                var chr = String.fromCharCode(event.charCode == undefined ? event.keyCode : event.charCode);
                return event.ctrlKey || event.metaKey || (chr < " " || !chars || chars.indexOf(chr) > -1)
            }
        },
        _doKeyUp: function(event) {
            var inst = $.datepicker._getInst(event.target);
            if (inst.input.val() != inst.lastVal) {
                try {
                    var date = $.datepicker.parseDate($.datepicker._get(inst, "dateFormat"), (inst.input ? inst.input.val() : null), $.datepicker._getFormatConfig(inst));
                    if (date) {
                        $.datepicker._setDateFromField(inst);
                        $.datepicker._updateAlternate(inst);
                        $.datepicker._updateDatepicker(inst)
                    }
                } catch (err) {
                    $.datepicker.log(err)
                }
            }
            return true
        },
        _showDatepicker: function(input) {
            input = input.target || input;
            if (input.nodeName.toLowerCase() != "input") {
                input = $("input", input.parentNode)[0]
            }
            if ($.datepicker._isDisabledDatepicker(input) || $.datepicker._lastInput == input) {
                return
            }
            var inst = $.datepicker._getInst(input);
            if ($.datepicker._curInst && $.datepicker._curInst != inst) {
                $.datepicker._curInst.dpDiv.stop(true, true);
                if (inst && $.datepicker._datepickerShowing) {
                    $.datepicker._hideDatepicker($.datepicker._curInst.input[0])
                }
            }
            var beforeShow = $.datepicker._get(inst, "beforeShow");
            var beforeShowSettings = beforeShow ? beforeShow.apply(input, [input, inst]) : {};
            if (beforeShowSettings === false) {
                return
            }
            extendRemove(inst.settings, beforeShowSettings);
            inst.lastVal = null;
            $.datepicker._lastInput = input;
            $.datepicker._setDateFromField(inst);
            if ($.datepicker._inDialog) {
                input.value = ""
            }
            if (!$.datepicker._pos) {
                $.datepicker._pos = $.datepicker._findPos(input);
                $.datepicker._pos[1] += input.offsetHeight
            }
            var isFixed = false;
            $(input).parents().each(function() {
                isFixed |= $(this).css("position") == "fixed";
                return !isFixed
            });
            var offset = {
                left: $.datepicker._pos[0],
                top: $.datepicker._pos[1]
            };
            $.datepicker._pos = null;
            inst.dpDiv.empty();
            inst.dpDiv.css({
                position: "absolute",
                display: "block",
                top: "-1000px"
            });
            $.datepicker._updateDatepicker(inst);
            offset = $.datepicker._checkOffset(inst, offset, isFixed);
            inst.dpDiv.css({
                position: ($.datepicker._inDialog && $.blockUI ? "static" : (isFixed ? "fixed" : "absolute")),
                display: "none",
                left: offset.left + "px",
                top: offset.top + "px"
            });
            if (!inst.inline) {
                var showAnim = $.datepicker._get(inst, "showAnim");
                var duration = $.datepicker._get(inst, "duration");
                var postProcess = function() {
                    var cover = inst.dpDiv.find("iframe.ui-datepicker-cover");
                    if (!!cover.length) {
                        var borders = $.datepicker._getBorders(inst.dpDiv);
                        cover.css({
                            left: -borders[0],
                            top: -borders[1],
                            width: inst.dpDiv.outerWidth(),
                            height: inst.dpDiv.outerHeight()
                        })
                    }
                };
                inst.dpDiv.zIndex($(input).zIndex() + 1);
                $.datepicker._datepickerShowing = true;
                if ($.effects && ($.effects.effect[showAnim] || $.effects[showAnim])) {
                    inst.dpDiv.show(showAnim, $.datepicker._get(inst, "showOptions"), duration, postProcess)
                } else {
                    inst.dpDiv[showAnim || "show"]((showAnim ? duration : null), postProcess)
                }
                if (!showAnim || !duration) {
                    postProcess()
                }
                if (inst.input.is(":visible") && !inst.input.is(":disabled")) {
                    inst.input.focus()
                }
                $.datepicker._curInst = inst
            }
        },
        _updateDatepicker: function(inst) {
            this.maxRows = 4;
            var borders = $.datepicker._getBorders(inst.dpDiv);
            instActive = inst;
            inst.dpDiv.empty().append(this._generateHTML(inst));
            this._attachHandlers(inst);
            var cover = inst.dpDiv.find("iframe.ui-datepicker-cover");
            if (!!cover.length) {
                cover.css({
                    left: -borders[0],
                    top: -borders[1],
                    width: inst.dpDiv.outerWidth(),
                    height: inst.dpDiv.outerHeight()
                })
            }
            inst.dpDiv.find("." + this._dayOverClass + " a").mouseover();
            var numMonths = this._getNumberOfMonths(inst);
            var cols = numMonths[1];
            var width = 17;
            inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
            if (cols > 1) {
                inst.dpDiv.addClass("ui-datepicker-multi-" + cols).css("width", (width * cols) + "em")
            }
            inst.dpDiv[(numMonths[0] != 1 || numMonths[1] != 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi");
            inst.dpDiv[(this._get(inst, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");
            if (inst == $.datepicker._curInst && $.datepicker._datepickerShowing && inst.input && inst.input.is(":visible") && !inst.input.is(":disabled") && inst.input[0] != document.activeElement) {
                inst.input.focus()
            }
            if (inst.yearshtml) {
                var origyearshtml = inst.yearshtml;
                setTimeout(function() {
                    if (origyearshtml === inst.yearshtml && inst.yearshtml) {
                        inst.dpDiv.find("select.ui-datepicker-year:first").replaceWith(inst.yearshtml)
                    }
                    origyearshtml = inst.yearshtml = null
                }, 0)
            }
        },
        _getBorders: function(elem) {
            var convert = function(value) {
                return {
                    thin: 1,
                    medium: 2,
                    thick: 3
                }[value] || value
            };
            return [parseFloat(convert(elem.css("border-left-width"))), parseFloat(convert(elem.css("border-top-width")))]
        },
        _checkOffset: function(inst, offset, isFixed) {
            var dpWidth = inst.dpDiv.outerWidth();
            var dpHeight = inst.dpDiv.outerHeight();
            var inputWidth = inst.input ? inst.input.outerWidth() : 0;
            var inputHeight = inst.input ? inst.input.outerHeight() : 0;
            var viewWidth = document.documentElement.clientWidth + (isFixed ? 0 : $(document).scrollLeft());
            var viewHeight = document.documentElement.clientHeight + (isFixed ? 0 : $(document).scrollTop());
            offset.left -= (this._get(inst, "isRTL") ? (dpWidth - inputWidth) : 0);
            offset.left -= (isFixed && offset.left == inst.input.offset().left) ? $(document).scrollLeft() : 0;
            offset.top -= (isFixed && offset.top == (inst.input.offset().top + inputHeight)) ? $(document).scrollTop() : 0;
            offset.left -= Math.min(offset.left, (offset.left + dpWidth > viewWidth && viewWidth > dpWidth) ? Math.abs(offset.left + dpWidth - viewWidth) : 0);
            offset.top -= Math.min(offset.top, (offset.top + dpHeight > viewHeight && viewHeight > dpHeight) ? Math.abs(dpHeight + inputHeight) : 0);
            return offset
        },
        _findPos: function(obj) {
            var inst = this._getInst(obj);
            var isRTL = this._get(inst, "isRTL");
            while (obj && (obj.type == "hidden" || obj.nodeType != 1 || $.expr.filters.hidden(obj))) {
                obj = obj[isRTL ? "previousSibling" : "nextSibling"]
            }
            var position = $(obj).offset();
            return [position.left, position.top]
        },
        _hideDatepicker: function(input) {
            var inst = this._curInst;
            if (!inst || (input && inst != $.data(input, PROP_NAME))) {
                return
            }
            if (this._datepickerShowing) {
                var showAnim = this._get(inst, "showAnim");
                var duration = this._get(inst, "duration");
                var postProcess = function() {
                    $.datepicker._tidyDialog(inst)
                };
                if ($.effects && ($.effects.effect[showAnim] || $.effects[showAnim])) {
                    inst.dpDiv.hide(showAnim, $.datepicker._get(inst, "showOptions"), duration, postProcess)
                } else {
                    inst.dpDiv[(showAnim == "slideDown" ? "slideUp" : (showAnim == "fadeIn" ? "fadeOut" : "hide"))]((showAnim ? duration : null), postProcess)
                }
                if (!showAnim) {
                    postProcess()
                }
                this._datepickerShowing = false;
                var onClose = this._get(inst, "onClose");
                if (onClose) {
                    onClose.apply((inst.input ? inst.input[0] : null), [(inst.input ? inst.input.val() : ""), inst])
                }
                this._lastInput = null;
                if (this._inDialog) {
                    this._dialogInput.css({
                        position: "absolute",
                        left: "0",
                        top: "-100px"
                    });
                    if ($.blockUI) {
                        $.unblockUI();
                        $("body").append(this.dpDiv)
                    }
                }
                this._inDialog = false
            }
        },
        _tidyDialog: function(inst) {
            inst.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(event) {
            if (!$.datepicker._curInst) {
                return
            }
            var $target = $(event.target),
                inst = $.datepicker._getInst($target[0]);
            if ((($target[0].id != $.datepicker._mainDivId && $target.parents("#" + $.datepicker._mainDivId).length == 0 && !$target.hasClass($.datepicker.markerClassName) && !$target.closest("." + $.datepicker._triggerClass).length && $.datepicker._datepickerShowing && !($.datepicker._inDialog && $.blockUI))) || ($target.hasClass($.datepicker.markerClassName) && $.datepicker._curInst != inst)) {
                $.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(id, offset, period) {
            var target = $(id);
            var inst = this._getInst(target[0]);
            if (this._isDisabledDatepicker(target[0])) {
                return
            }
            this._adjustInstDate(inst, offset + (period == "M" ? this._get(inst, "showCurrentAtPos") : 0), period);
            this._updateDatepicker(inst)
        },
        _gotoToday: function(id) {
            var target = $(id);
            var inst = this._getInst(target[0]);
            if (this._get(inst, "gotoCurrent") && inst.currentDay) {
                inst.selectedDay = inst.currentDay;
                inst.drawMonth = inst.selectedMonth = inst.currentMonth;
                inst.drawYear = inst.selectedYear = inst.currentYear
            } else {
                var date = new Date();
                inst.selectedDay = date.getDate();
                inst.drawMonth = inst.selectedMonth = date.getMonth();
                inst.drawYear = inst.selectedYear = date.getFullYear()
            }
            this._notifyChange(inst);
            this._adjustDate(target)
        },
        _selectMonthYear: function(id, select, period) {
            var target = $(id);
            var inst = this._getInst(target[0]);
            inst["selected" + (period == "M" ? "Month" : "Year")] = inst["draw" + (period == "M" ? "Month" : "Year")] = parseInt(select.options[select.selectedIndex].value, 10);
            this._notifyChange(inst);
            this._adjustDate(target)
        },
        _selectDay: function(id, month, year, td) {
            var target = $(id);
            if ($(td).hasClass(this._unselectableClass) || this._isDisabledDatepicker(target[0])) {
                return
            }
            var inst = this._getInst(target[0]);
            inst.selectedDay = inst.currentDay = $("a", td).html();
            inst.selectedMonth = inst.currentMonth = month;
            inst.selectedYear = inst.currentYear = year;
            this._selectDate(id, this._formatDate(inst, inst.currentDay, inst.currentMonth, inst.currentYear))
        },
        _clearDate: function(id) {
            var target = $(id);
            var inst = this._getInst(target[0]);
            this._selectDate(target, "")
        },
        _selectDate: function(id, dateStr) {
            var target = $(id);
            var inst = this._getInst(target[0]);
            dateStr = (dateStr != null ? dateStr : this._formatDate(inst));
            if (inst.input) {
                inst.input.val(dateStr)
            }
            this._updateAlternate(inst);
            var onSelect = this._get(inst, "onSelect");
            if (onSelect) {
                onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst])
            } else {
                if (inst.input) {
                    inst.input.trigger("change")
                }
            }
            if (inst.inline) {
                this._updateDatepicker(inst)
            } else {
                this._hideDatepicker();
                this._lastInput = inst.input[0];
                if (typeof(inst.input[0]) != "object") {
                    inst.input.focus()
                }
                this._lastInput = null
            }
        },
        _updateAlternate: function(inst) {
            var altField = this._get(inst, "altField");
            if (altField) {
                var altFormat = this._get(inst, "altFormat") || this._get(inst, "dateFormat");
                var date = this._getDate(inst);
                var dateStr = this.formatDate(altFormat, date, this._getFormatConfig(inst));
                $(altField).each(function() {
                    $(this).val(dateStr)
                })
            }
        },
        noWeekends: function(date) {
            var day = date.getDay();
            return [(day > 0 && day < 6), ""]
        },
        iso8601Week: function(date) {
            var checkDate = new Date(date.getTime());
            checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
            var time = checkDate.getTime();
            checkDate.setMonth(0);
            checkDate.setDate(1);
            return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1
        },
        parseDate: function(format, value, settings) {
            if (format == null || value == null) {
                throw "Invalid arguments"
            }
            value = (typeof value == "object" ? value.toString() : value + "");
            if (value == "") {
                return null
            }
            var shortYearCutoff = (settings ? settings.shortYearCutoff : null) || this._defaults.shortYearCutoff;
            shortYearCutoff = (typeof shortYearCutoff != "string" ? shortYearCutoff : new Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10));
            var dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort;
            var dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames;
            var monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort;
            var monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames;
            var year = -1;
            var month = -1;
            var day = -1;
            var doy = -1;
            var literal = false;
            var lookAhead = function(match) {
                var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
                if (matches) {
                    iFormat++
                }
                return matches
            };
            var getNumber = function(match) {
                var isDoubled = lookAhead(match);
                var size = (match == "@" ? 14 : (match == "!" ? 20 : (match == "y" && isDoubled ? 4 : (match == "o" ? 3 : 2))));
                var digits = new RegExp("^\\d{1," + size + "}");
                var num = value.substring(iValue).match(digits);
                if (!num) {
                    throw "Missing number at position " + iValue
                }
                iValue += num[0].length;
                return parseInt(num[0], 10)
            };
            var getName = function(match, shortNames, longNames) {
                var names = $.map(lookAhead(match) ? longNames : shortNames, function(v, k) {
                    return [
                        [k, v]
                    ]
                }).sort(function(a, b) {
                    return -(a[1].length - b[1].length)
                });
                var index = -1;
                $.each(names, function(i, pair) {
                    var name = pair[1];
                    if (value.substr(iValue, name.length).toLowerCase() == name.toLowerCase()) {
                        index = pair[0];
                        iValue += name.length;
                        return false
                    }
                });
                if (index != -1) {
                    return index + 1
                } else {
                    throw "Unknown name at position " + iValue
                }
            };
            var checkLiteral = function() {
                if (value.charAt(iValue) != format.charAt(iFormat)) {
                    throw "Unexpected literal at position " + iValue
                }
                iValue++
            };
            var iValue = 0;
            for (var iFormat = 0; iFormat < format.length; iFormat++) {
                if (literal) {
                    if (format.charAt(iFormat) == "'" && !lookAhead("'")) {
                        literal = false
                    } else {
                        checkLiteral()
                    }
                } else {
                    switch (format.charAt(iFormat)) {
                        case "d":
                            day = getNumber("d");
                            break;
                        case "D":
                            getName("D", dayNamesShort, dayNames);
                            break;
                        case "o":
                            doy = getNumber("o");
                            break;
                        case "m":
                            month = getNumber("m");
                            break;
                        case "M":
                            month = getName("M", monthNamesShort, monthNames);
                            break;
                        case "y":
                            year = getNumber("y");
                            break;
                        case "@":
                            var date = new Date(getNumber("@"));
                            year = date.getFullYear();
                            month = date.getMonth() + 1;
                            day = date.getDate();
                            break;
                        case "!":
                            var date = new Date((getNumber("!") - this._ticksTo1970) / 10000);
                            year = date.getFullYear();
                            month = date.getMonth() + 1;
                            day = date.getDate();
                            break;
                        case "'":
                            if (lookAhead("'")) {
                                checkLiteral()
                            } else {
                                literal = true
                            }
                            break;
                        default:
                            checkLiteral()
                    }
                }
            }
            if (iValue < value.length) {
                var extra = value.substr(iValue);
                if (!/^\s+/.test(extra)) {
                    throw "Extra/unparsed characters found in date: " + extra
                }
            }
            if (year == -1) {
                year = new Date().getFullYear()
            } else {
                if (year < 100) {
                    year += new Date().getFullYear() - new Date().getFullYear() % 100 + (year <= shortYearCutoff ? 0 : -100)
                }
            }
            if (doy > -1) {
                month = 1;
                day = doy;
                do {
                    var dim = this._getDaysInMonth(year, month - 1);
                    if (day <= dim) {
                        break
                    }
                    month++;
                    day -= dim
                } while (true)
            }
            var date = this._daylightSavingAdjust(new Date(year, month - 1, day));
            if (date.getFullYear() != year || date.getMonth() + 1 != month || date.getDate() != day) {
                throw "Invalid date"
            }
            return date
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: (((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000),
        formatDate: function(format, date, settings) {
            if (!date) {
                return ""
            }
            var dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort;
            var dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames;
            var monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort;
            var monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames;
            var lookAhead = function(match) {
                var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
                if (matches) {
                    iFormat++
                }
                return matches
            };
            var formatNumber = function(match, value, len) {
                var num = "" + value;
                if (lookAhead(match)) {
                    while (num.length < len) {
                        num = "0" + num
                    }
                }
                return num
            };
            var formatName = function(match, value, shortNames, longNames) {
                return (lookAhead(match) ? longNames[value] : shortNames[value])
            };
            var output = "";
            var literal = false;
            if (date) {
                for (var iFormat = 0; iFormat < format.length; iFormat++) {
                    if (literal) {
                        if (format.charAt(iFormat) == "'" && !lookAhead("'")) {
                            literal = false
                        } else {
                            output += format.charAt(iFormat)
                        }
                    } else {
                        switch (format.charAt(iFormat)) {
                            case "d":
                                output += formatNumber("d", date.getDate(), 2);
                                break;
                            case "D":
                                output += formatName("D", date.getDay(), dayNamesShort, dayNames);
                                break;
                            case "o":
                                output += formatNumber("o", Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000), 3);
                                break;
                            case "m":
                                output += formatNumber("m", date.getMonth() + 1, 2);
                                break;
                            case "M":
                                output += formatName("M", date.getMonth(), monthNamesShort, monthNames);
                                break;
                            case "y":
                                output += (lookAhead("y") ? date.getFullYear() : (date.getYear() % 100 < 10 ? "0" : "") + date.getYear() % 100);
                                break;
                            case "@":
                                output += date.getTime();
                                break;
                            case "!":
                                output += date.getTime() * 10000 + this._ticksTo1970;
                                break;
                            case "'":
                                if (lookAhead("'")) {
                                    output += "'"
                                } else {
                                    literal = true
                                }
                                break;
                            default:
                                output += format.charAt(iFormat)
                        }
                    }
                }
            }
            return output
        },
        _possibleChars: function(format) {
            var chars = "";
            var literal = false;
            var lookAhead = function(match) {
                var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
                if (matches) {
                    iFormat++
                }
                return matches
            };
            for (var iFormat = 0; iFormat < format.length; iFormat++) {
                if (literal) {
                    if (format.charAt(iFormat) == "'" && !lookAhead("'")) {
                        literal = false
                    } else {
                        chars += format.charAt(iFormat)
                    }
                } else {
                    switch (format.charAt(iFormat)) {
                        case "d":
                        case "m":
                        case "y":
                        case "@":
                            chars += "0123456789";
                            break;
                        case "D":
                        case "M":
                            return null;
                        case "'":
                            if (lookAhead("'")) {
                                chars += "'"
                            } else {
                                literal = true
                            }
                            break;
                        default:
                            chars += format.charAt(iFormat)
                    }
                }
            }
            return chars
        },
        _get: function(inst, name) {
            return inst.settings[name] !== undefined ? inst.settings[name] : this._defaults[name]
        },
        _setDateFromField: function(inst, noDefault) {
            if (inst.input.val() == inst.lastVal) {
                return
            }
            var dateFormat = this._get(inst, "dateFormat");
            var dates = inst.lastVal = inst.input ? inst.input.val() : null;
            var date, defaultDate;
            date = defaultDate = this._getDefaultDate(inst);
            var settings = this._getFormatConfig(inst);
            try {
                date = this.parseDate(dateFormat, dates, settings) || defaultDate
            } catch (event) {
                this.log(event);
                dates = (noDefault ? "" : dates)
            }
            inst.selectedDay = date.getDate();
            inst.drawMonth = inst.selectedMonth = date.getMonth();
            inst.drawYear = inst.selectedYear = date.getFullYear();
            inst.currentDay = (dates ? date.getDate() : 0);
            inst.currentMonth = (dates ? date.getMonth() : 0);
            inst.currentYear = (dates ? date.getFullYear() : 0);
            this._adjustInstDate(inst)
        },
        _getDefaultDate: function(inst) {
            return this._restrictMinMax(inst, this._determineDate(inst, this._get(inst, "defaultDate"), new Date()))
        },
        _determineDate: function(inst, date, defaultDate) {
            var offsetNumeric = function(offset) {
                var date = new Date();
                date.setDate(date.getDate() + offset);
                return date
            };
            var offsetString = function(offset) {
                try {
                    return $.datepicker.parseDate($.datepicker._get(inst, "dateFormat"), offset, $.datepicker._getFormatConfig(inst))
                } catch (e) {}
                var date = (offset.toLowerCase().match(/^c/) ? $.datepicker._getDate(inst) : null) || new Date();
                var year = date.getFullYear();
                var month = date.getMonth();
                var day = date.getDate();
                var pattern = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g;
                var matches = pattern.exec(offset);
                while (matches) {
                    switch (matches[2] || "d") {
                        case "d":
                        case "D":
                            day += parseInt(matches[1], 10);
                            break;
                        case "w":
                        case "W":
                            day += parseInt(matches[1], 10) * 7;
                            break;
                        case "m":
                        case "M":
                            month += parseInt(matches[1], 10);
                            day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
                            break;
                        case "y":
                        case "Y":
                            year += parseInt(matches[1], 10);
                            day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
                            break
                    }
                    matches = pattern.exec(offset)
                }
                return new Date(year, month, day)
            };
            var newDate = (date == null || date === "" ? defaultDate : (typeof date == "string" ? offsetString(date) : (typeof date == "number" ? (isNaN(date) ? defaultDate : offsetNumeric(date)) : new Date(date.getTime()))));
            newDate = (newDate && newDate.toString() == "Invalid Date" ? defaultDate : newDate);
            if (newDate) {
                newDate.setHours(0);
                newDate.setMinutes(0);
                newDate.setSeconds(0);
                newDate.setMilliseconds(0)
            }
            return this._daylightSavingAdjust(newDate)
        },
        _daylightSavingAdjust: function(date) {
            if (!date) {
                return null
            }
            date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
            return date
        },
        _setDate: function(inst, date, noChange) {
            var clear = !date;
            var origMonth = inst.selectedMonth;
            var origYear = inst.selectedYear;
            var newDate = this._restrictMinMax(inst, this._determineDate(inst, date, new Date()));
            inst.selectedDay = inst.currentDay = newDate.getDate();
            inst.drawMonth = inst.selectedMonth = inst.currentMonth = newDate.getMonth();
            inst.drawYear = inst.selectedYear = inst.currentYear = newDate.getFullYear();
            if ((origMonth != inst.selectedMonth || origYear != inst.selectedYear) && !noChange) {
                this._notifyChange(inst)
            }
            this._adjustInstDate(inst);
            if (inst.input) {
                inst.input.val(clear ? "" : this._formatDate(inst))
            }
        },
        _getDate: function(inst) {
            var startDate = (!inst.currentYear || (inst.input && inst.input.val() == "") ? null : this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay)));
            return startDate
        },
        _attachHandlers: function(inst) {
            var stepMonths = this._get(inst, "stepMonths");
            var id = "#" + inst.id.replace(/\\\\/g, "\\");
            inst.dpDiv.find("[data-handler]").map(function() {
                var handler = {
                    prev: function() {
                        window["DP_jQuery_" + dpuuid].datepicker._adjustDate(id, -stepMonths, "M")
                    },
                    next: function() {
                        window["DP_jQuery_" + dpuuid].datepicker._adjustDate(id, +stepMonths, "M")
                    },
                    hide: function() {
                        window["DP_jQuery_" + dpuuid].datepicker._hideDatepicker()
                    },
                    today: function() {
                        window["DP_jQuery_" + dpuuid].datepicker._gotoToday(id)
                    },
                    selectDay: function() {
                        window["DP_jQuery_" + dpuuid].datepicker._selectDay(id, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this);
                        return false
                    },
                    selectMonth: function() {
                        window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(id, this, "M");
                        return false
                    },
                    selectYear: function() {
                        window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(id, this, "Y");
                        return false
                    }
                };
                $(this).bind(this.getAttribute("data-event"), handler[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(inst) {
            var today = new Date();
            today = this._daylightSavingAdjust(new Date(today.getFullYear(), today.getMonth(), today.getDate()));
            var isRTL = this._get(inst, "isRTL");
            var showButtonPanel = this._get(inst, "showButtonPanel");
            var hideIfNoPrevNext = this._get(inst, "hideIfNoPrevNext");
            var navigationAsDateFormat = this._get(inst, "navigationAsDateFormat");
            var numMonths = this._getNumberOfMonths(inst);
            var showCurrentAtPos = this._get(inst, "showCurrentAtPos");
            var stepMonths = this._get(inst, "stepMonths");
            var isMultiMonth = (numMonths[0] != 1 || numMonths[1] != 1);
            var currentDate = this._daylightSavingAdjust((!inst.currentDay ? new Date(9999, 9, 9) : new Date(inst.currentYear, inst.currentMonth, inst.currentDay)));
            var minDate = this._getMinMaxDate(inst, "min");
            var maxDate = this._getMinMaxDate(inst, "max");
            var drawMonth = inst.drawMonth - showCurrentAtPos;
            var drawYear = inst.drawYear;
            if (drawMonth < 0) {
                drawMonth += 12;
                drawYear--
            }
            if (maxDate) {
                var maxDraw = this._daylightSavingAdjust(new Date(maxDate.getFullYear(), maxDate.getMonth() - (numMonths[0] * numMonths[1]) + 1, maxDate.getDate()));
                maxDraw = (minDate && maxDraw < minDate ? minDate : maxDraw);
                while (this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1)) > maxDraw) {
                    drawMonth--;
                    if (drawMonth < 0) {
                        drawMonth = 11;
                        drawYear--
                    }
                }
            }
            inst.drawMonth = drawMonth;
            inst.drawYear = drawYear;
            var prevText = this._get(inst, "prevText");
            prevText = (!navigationAsDateFormat ? prevText : this.formatDate(prevText, this._daylightSavingAdjust(new Date(drawYear, drawMonth - stepMonths, 1)), this._getFormatConfig(inst)));
            var prev = (this._canAdjustMonth(inst, -1, drawYear, drawMonth) ? '<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="' + prevText + '"><span class="ui-icon ui-icon-circle-triangle-' + (isRTL ? "e" : "w") + '">' + prevText + "</span></a>" : (hideIfNoPrevNext ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + prevText + '"><span class="ui-icon ui-icon-circle-triangle-' + (isRTL ? "e" : "w") + '">' + prevText + "</span></a>"));
            var nextText = this._get(inst, "nextText");
            nextText = (!navigationAsDateFormat ? nextText : this.formatDate(nextText, this._daylightSavingAdjust(new Date(drawYear, drawMonth + stepMonths, 1)), this._getFormatConfig(inst)));
            var next = (this._canAdjustMonth(inst, +1, drawYear, drawMonth) ? '<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="' + nextText + '"><span class="ui-icon ui-icon-circle-triangle-' + (isRTL ? "w" : "e") + '">' + nextText + "</span></a>" : (hideIfNoPrevNext ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + nextText + '"><span class="ui-icon ui-icon-circle-triangle-' + (isRTL ? "w" : "e") + '">' + nextText + "</span></a>"));
            var currentText = this._get(inst, "currentText");
            var gotoDate = (this._get(inst, "gotoCurrent") && inst.currentDay ? currentDate : today);
            currentText = (!navigationAsDateFormat ? currentText : this.formatDate(currentText, gotoDate, this._getFormatConfig(inst)));
            var controls = (!inst.inline ? '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">' + this._get(inst, "closeText") + "</button>" : "");
            var buttonPanel = (showButtonPanel) ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (isRTL ? controls : "") + (this._isInRange(inst, gotoDate) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">' + currentText + "</button>" : "") + (isRTL ? "" : controls) + "</div>" : "";
            var firstDay = parseInt(this._get(inst, "firstDay"), 10);
            firstDay = (isNaN(firstDay) ? 0 : firstDay);
            var showWeek = this._get(inst, "showWeek");
            var dayNames = this._get(inst, "dayNames");
            var dayNamesShort = this._get(inst, "dayNamesShort");
            var dayNamesMin = this._get(inst, "dayNamesMin");
            var monthNames = this._get(inst, "monthNames");
            var monthNamesShort = this._get(inst, "monthNamesShort");
            var beforeShowDay = this._get(inst, "beforeShowDay");
            var showOtherMonths = this._get(inst, "showOtherMonths");
            var selectOtherMonths = this._get(inst, "selectOtherMonths");
            var calculateWeek = this._get(inst, "calculateWeek") || this.iso8601Week;
            var defaultDate = this._getDefaultDate(inst);
            var html = "";
            for (var row = 0; row < numMonths[0]; row++) {
                var group = "";
                this.maxRows = 4;
                for (var col = 0; col < numMonths[1]; col++) {
                    var selectedDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, inst.selectedDay));
                    var cornerClass = " ui-corner-all";
                    var calender = "";
                    if (isMultiMonth) {
                        calender += '<div class="ui-datepicker-group';
                        if (numMonths[1] > 1) {
                            switch (col) {
                                case 0:
                                    calender += " ui-datepicker-group-first";
                                    cornerClass = " ui-corner-" + (isRTL ? "right" : "left");
                                    break;
                                case numMonths[1] - 1:
                                    calender += " ui-datepicker-group-last";
                                    cornerClass = " ui-corner-" + (isRTL ? "left" : "right");
                                    break;
                                default:
                                    calender += " ui-datepicker-group-middle";
                                    cornerClass = "";
                                    break
                            }
                        }
                        calender += '">'
                    }
                    calender += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + cornerClass + '">' + (/all|left/.test(cornerClass) && row == 0 ? (isRTL ? next : prev) : "") + (/all|right/.test(cornerClass) && row == 0 ? (isRTL ? prev : next) : "") + this._generateMonthYearHeader(inst, drawMonth, drawYear, minDate, maxDate, row > 0 || col > 0, monthNames, monthNamesShort) + '</div><table class="ui-datepicker-calendar"><thead><tr>';
                    var thead = (showWeek ? '<th class="ui-datepicker-week-col">' + this._get(inst, "weekHeader") + "</th>" : "");
                    for (var dow = 0; dow < 7; dow++) {
                        var day = (dow + firstDay) % 7;
                        thead += "<th" + ((dow + firstDay + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + '><span title="' + dayNames[day] + '">' + dayNamesMin[day] + "</span></th>"
                    }
                    calender += thead + "</tr></thead><tbody>";
                    var daysInMonth = this._getDaysInMonth(drawYear, drawMonth);
                    if (drawYear == inst.selectedYear && drawMonth == inst.selectedMonth) {
                        inst.selectedDay = Math.min(inst.selectedDay, daysInMonth)
                    }
                    var leadDays = (this._getFirstDayOfMonth(drawYear, drawMonth) - firstDay + 7) % 7;
                    var curRows = Math.ceil((leadDays + daysInMonth) / 7);
                    var numRows = (isMultiMonth ? this.maxRows > curRows ? this.maxRows : curRows : curRows);
                    this.maxRows = numRows;
                    var printDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1 - leadDays));
                    for (var dRow = 0; dRow < numRows; dRow++) {
                        calender += "<tr>";
                        var tbody = (!showWeek ? "" : '<td class="ui-datepicker-week-col">' + this._get(inst, "calculateWeek")(printDate) + "</td>");
                        for (var dow = 0; dow < 7; dow++) {
                            var daySettings = (beforeShowDay ? beforeShowDay.apply((inst.input ? inst.input[0] : null), [printDate]) : [true, ""]);
                            var otherMonth = (printDate.getMonth() != drawMonth);
                            var unselectable = (otherMonth && !selectOtherMonths) || !daySettings[0] || (minDate && printDate < minDate) || (maxDate && printDate > maxDate);
                            tbody += '<td class="' + ((dow + firstDay + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (otherMonth ? " ui-datepicker-other-month" : "") + ((printDate.getTime() == selectedDate.getTime() && drawMonth == inst.selectedMonth && inst._keyEvent) || (defaultDate.getTime() == printDate.getTime() && defaultDate.getTime() == selectedDate.getTime()) ? " " + this._dayOverClass : "") + (unselectable ? " " + this._unselectableClass + " ui-state-disabled" : "") + (otherMonth && !showOtherMonths ? "" : " " + daySettings[1] + (printDate.getTime() == currentDate.getTime() ? " " + this._currentClass : "") + (printDate.getTime() == today.getTime() ? " ui-datepicker-today" : "")) + '"' + ((!otherMonth || showOtherMonths) && daySettings[2] ? ' title="' + daySettings[2] + '"' : "") + (unselectable ? "" : ' data-handler="selectDay" data-event="click" data-month="' + printDate.getMonth() + '" data-year="' + printDate.getFullYear() + '"') + ">" + (otherMonth && !showOtherMonths ? "&#xa0;" : (unselectable ? '<span class="ui-state-default">' + printDate.getDate() + "</span>" : '<a class="ui-state-default' + (printDate.getTime() == today.getTime() ? " ui-state-highlight" : "") + (printDate.getTime() == currentDate.getTime() ? " ui-state-active" : "") + (otherMonth ? " ui-priority-secondary" : "") + '" href="#">' + printDate.getDate() + "</a>")) + "</td>";
                            printDate.setDate(printDate.getDate() + 1);
                            printDate = this._daylightSavingAdjust(printDate)
                        }
                        calender += tbody + "</tr>"
                    }
                    drawMonth++;
                    if (drawMonth > 11) {
                        drawMonth = 0;
                        drawYear++
                    }
                    calender += "</tbody></table>" + (isMultiMonth ? "</div>" + ((numMonths[0] > 0 && col == numMonths[1] - 1) ? '<div class="ui-datepicker-row-break"></div>' : "") : "");
                    group += calender
                }
                html += group
            }
            html += buttonPanel + ($.ui.ie6 && !inst.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : "");
            inst._keyEvent = false;
            return html
        },
        _generateMonthYearHeader: function(inst, drawMonth, drawYear, minDate, maxDate, secondary, monthNames, monthNamesShort) {
            var changeMonth = this._get(inst, "changeMonth");
            var changeYear = this._get(inst, "changeYear");
            var showMonthAfterYear = this._get(inst, "showMonthAfterYear");
            var html = '<div class="ui-datepicker-title">';
            var monthHtml = "";
            if (secondary || !changeMonth) {
                monthHtml += '<span class="ui-datepicker-month">' + monthNames[drawMonth] + "</span>"
            } else {
                var inMinYear = (minDate && minDate.getFullYear() == drawYear);
                var inMaxYear = (maxDate && maxDate.getFullYear() == drawYear);
                monthHtml += '<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';
                for (var month = 0; month < 12; month++) {
                    if ((!inMinYear || month >= minDate.getMonth()) && (!inMaxYear || month <= maxDate.getMonth())) {
                        monthHtml += '<option value="' + month + '"' + (month == drawMonth ? ' selected="selected"' : "") + ">" + monthNamesShort[month] + "</option>"
                    }
                }
                monthHtml += "</select>"
            }
            if (!showMonthAfterYear) {
                html += monthHtml + (secondary || !(changeMonth && changeYear) ? "&#xa0;" : "")
            }
            if (!inst.yearshtml) {
                inst.yearshtml = "";
                if (secondary || !changeYear) {
                    html += '<span class="ui-datepicker-year">' + drawYear + "</span>"
                } else {
                    var years = this._get(inst, "yearRange").split(":");
                    var thisYear = new Date().getFullYear();
                    var determineYear = function(value) {
                        var year = (value.match(/c[+-].*/) ? drawYear + parseInt(value.substring(1), 10) : (value.match(/[+-].*/) ? thisYear + parseInt(value, 10) : parseInt(value, 10)));
                        return (isNaN(year) ? thisYear : year)
                    };
                    var year = determineYear(years[0]);
                    var endYear = Math.max(year, determineYear(years[1] || ""));
                    year = (minDate ? Math.max(year, minDate.getFullYear()) : year);
                    endYear = (maxDate ? Math.min(endYear, maxDate.getFullYear()) : endYear);
                    inst.yearshtml += '<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">';
                    for (; year <= endYear; year++) {
                        inst.yearshtml += '<option value="' + year + '"' + (year == drawYear ? ' selected="selected"' : "") + ">" + year + "</option>"
                    }
                    inst.yearshtml += "</select>";
                    html += inst.yearshtml;
                    inst.yearshtml = null
                }
            }
            html += this._get(inst, "yearSuffix");
            if (showMonthAfterYear) {
                html += (secondary || !(changeMonth && changeYear) ? "&#xa0;" : "") + monthHtml
            }
            html += "</div>";
            return html
        },
        _adjustInstDate: function(inst, offset, period) {
            var year = inst.drawYear + (period == "Y" ? offset : 0);
            var month = inst.drawMonth + (period == "M" ? offset : 0);
            var day = Math.min(inst.selectedDay, this._getDaysInMonth(year, month)) + (period == "D" ? offset : 0);
            var date = this._restrictMinMax(inst, this._daylightSavingAdjust(new Date(year, month, day)));
            inst.selectedDay = date.getDate();
            inst.drawMonth = inst.selectedMonth = date.getMonth();
            inst.drawYear = inst.selectedYear = date.getFullYear();
            if (period == "M" || period == "Y") {
                this._notifyChange(inst)
            }
        },
        _restrictMinMax: function(inst, date) {
            var minDate = this._getMinMaxDate(inst, "min");
            var maxDate = this._getMinMaxDate(inst, "max");
            var newDate = (minDate && date < minDate ? minDate : date);
            newDate = (maxDate && newDate > maxDate ? maxDate : newDate);
            return newDate
        },
        _notifyChange: function(inst) {
            var onChange = this._get(inst, "onChangeMonthYear");
            if (onChange) {
                onChange.apply((inst.input ? inst.input[0] : null), [inst.selectedYear, inst.selectedMonth + 1, inst])
            }
        },
        _getNumberOfMonths: function(inst) {
            var numMonths = this._get(inst, "numberOfMonths");
            return (numMonths == null ? [1, 1] : (typeof numMonths == "number" ? [1, numMonths] : numMonths))
        },
        _getMinMaxDate: function(inst, minMax) {
            return this._determineDate(inst, this._get(inst, minMax + "Date"), null)
        },
        _getDaysInMonth: function(year, month) {
            return 32 - this._daylightSavingAdjust(new Date(year, month, 32)).getDate()
        },
        _getFirstDayOfMonth: function(year, month) {
            return new Date(year, month, 1).getDay()
        },
        _canAdjustMonth: function(inst, offset, curYear, curMonth) {
            var numMonths = this._getNumberOfMonths(inst);
            var date = this._daylightSavingAdjust(new Date(curYear, curMonth + (offset < 0 ? offset : numMonths[0] * numMonths[1]), 1));
            if (offset < 0) {
                date.setDate(this._getDaysInMonth(date.getFullYear(), date.getMonth()))
            }
            return this._isInRange(inst, date)
        },
        _isInRange: function(inst, date) {
            var minDate = this._getMinMaxDate(inst, "min");
            var maxDate = this._getMinMaxDate(inst, "max");
            return ((!minDate || date.getTime() >= minDate.getTime()) && (!maxDate || date.getTime() <= maxDate.getTime()))
        },
        _getFormatConfig: function(inst) {
            var shortYearCutoff = this._get(inst, "shortYearCutoff");
            shortYearCutoff = (typeof shortYearCutoff != "string" ? shortYearCutoff : new Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10));
            return {
                shortYearCutoff: shortYearCutoff,
                dayNamesShort: this._get(inst, "dayNamesShort"),
                dayNames: this._get(inst, "dayNames"),
                monthNamesShort: this._get(inst, "monthNamesShort"),
                monthNames: this._get(inst, "monthNames")
            }
        },
        _formatDate: function(inst, day, month, year) {
            if (!day) {
                inst.currentDay = inst.selectedDay;
                inst.currentMonth = inst.selectedMonth;
                inst.currentYear = inst.selectedYear
            }
            var date = (day ? (typeof day == "object" ? day : this._daylightSavingAdjust(new Date(year, month, day))) : this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay)));
            return this.formatDate(this._get(inst, "dateFormat"), date, this._getFormatConfig(inst))
        }
    });

    function bindHover(dpDiv) {
        var selector = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return dpDiv.delegate(selector, "mouseout", function() {
            $(this).removeClass("ui-state-hover");
            if (this.className.indexOf("ui-datepicker-prev") != -1) {
                $(this).removeClass("ui-datepicker-prev-hover")
            }
            if (this.className.indexOf("ui-datepicker-next") != -1) {
                $(this).removeClass("ui-datepicker-next-hover")
            }
        }).delegate(selector, "mouseover", function() {
            if (!$.datepicker._isDisabledDatepicker(instActive.inline ? dpDiv.parent()[0] : instActive.input[0])) {
                $(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
                $(this).addClass("ui-state-hover");
                if (this.className.indexOf("ui-datepicker-prev") != -1) {
                    $(this).addClass("ui-datepicker-prev-hover")
                }
                if (this.className.indexOf("ui-datepicker-next") != -1) {
                    $(this).addClass("ui-datepicker-next-hover")
                }
            }
        })
    }

    function extendRemove(target, props) {
        $.extend(target, props);
        for (var name in props) {
            if (props[name] == null || props[name] == undefined) {
                target[name] = props[name]
            }
        }
        return target
    }
    $.fn.datepicker = function(options) {
        if (!this.length) {
            return this
        }
        if (!$.datepicker.initialized) {
            $(document).mousedown($.datepicker._checkExternalClick).find(document.body).append($.datepicker.dpDiv);
            $.datepicker.initialized = true
        }
        var otherArgs = Array.prototype.slice.call(arguments, 1);
        if (typeof options == "string" && (options == "isDisabled" || options == "getDate" || options == "widget")) {
            return $.datepicker["_" + options + "Datepicker"].apply($.datepicker, [this[0]].concat(otherArgs))
        }
        if (options == "option" && arguments.length == 2 && typeof arguments[1] == "string") {
            return $.datepicker["_" + options + "Datepicker"].apply($.datepicker, [this[0]].concat(otherArgs))
        }
        return this.each(function() {
            typeof options == "string" ? $.datepicker["_" + options + "Datepicker"].apply($.datepicker, [this].concat(otherArgs)) : $.datepicker._attachDatepicker(this, options)
        })
    };
    $.datepicker = new Datepicker();
    $.datepicker.initialized = false;
    $.datepicker.uuid = new Date().getTime();
    $.datepicker.version = "1.9.2";
    window["DP_jQuery_" + dpuuid] = $
})(jQuery);
(function(e, f) {
    var c = "ui-dialog ui-widget ui-widget-content ui-corner-all ",
        b = {
            buttons: true,
            height: true,
            maxHeight: true,
            maxWidth: true,
            minHeight: true,
            minWidth: true,
            width: true
        },
        d = {
            maxHeight: true,
            maxWidth: true,
            minHeight: true,
            minWidth: true
        };
    e.widget("ui.dialog", {
        version: "1.9.2",
        options: {
            autoOpen: true,
            buttons: {},
            closeOnEscape: true,
            closeText: "close",
            dialogClass: "",
            draggable: true,
            hide: null,
            height: "auto",
            maxHeight: false,
            maxWidth: false,
            minHeight: 150,
            minWidth: 150,
            modal: false,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(h) {
                    var g = e(this).css(h).offset().top;
                    if (g < 0) {
                        e(this).css("top", h.top - g)
                    }
                }
            },
            resizable: true,
            show: null,
            stack: true,
            title: "",
            width: 300,
            zIndex: 1000
        },
        _create: function() {
            this.originalTitle = this.element.attr("title");
            if (typeof this.originalTitle !== "string") {
                this.originalTitle = ""
            }
            this.oldPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            };
            this.options.title = this.options.title || this.originalTitle;
            var l = this,
                k = this.options,
                n = k.title || "&#160;",
                i, m, g, j, h;
            i = (this.uiDialog = e("<div>")).addClass(c + k.dialogClass).css({
                display: "none",
                outline: 0,
                zIndex: k.zIndex
            }).attr("tabIndex", -1).keydown(function(o) {
                if (k.closeOnEscape && !o.isDefaultPrevented() && o.keyCode && o.keyCode === e.ui.keyCode.ESCAPE) {
                    l.close(o);
                    o.preventDefault()
                }
            }).mousedown(function(o) {
                l.moveToTop(false, o)
            }).appendTo("body");
            this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(i);
            m = (this.uiDialogTitlebar = e("<div>")).addClass("ui-dialog-titlebar  ui-widget-header  ui-corner-all  ui-helper-clearfix").bind("mousedown", function() {
                i.focus()
            }).prependTo(i);
            g = e("<a href='#'></a>").addClass("ui-dialog-titlebar-close  ui-corner-all").attr("role", "button").click(function(o) {
                o.preventDefault();
                l.close(o)
            }).appendTo(m);
            (this.uiDialogTitlebarCloseText = e("<span>")).addClass("ui-icon ui-icon-closethick").text(k.closeText).appendTo(g);
            j = e("<span>").uniqueId().addClass("ui-dialog-title").html(n).prependTo(m);
            h = (this.uiDialogButtonPane = e("<div>")).addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");
            (this.uiButtonSet = e("<div>")).addClass("ui-dialog-buttonset").appendTo(h);
            i.attr({
                role: "dialog",
                "aria-labelledby": j.attr("id")
            });
            m.find("*").add(m).disableSelection();
            this._hoverable(g);
            this._focusable(g);
            if (k.draggable && e.fn.draggable) {
                this._makeDraggable()
            }
            if (k.resizable && e.fn.resizable) {
                this._makeResizable()
            }
            this._createButtons(k.buttons);
            this._isOpen = false;
            if (e.fn.bgiframe) {
                i.bgiframe()
            }
            this._on(i, {
                keydown: function(q) {
                    if (!k.modal || q.keyCode !== e.ui.keyCode.TAB) {
                        return
                    }
                    var p = e(":tabbable", i),
                        r = p.filter(":first"),
                        o = p.filter(":last");
                    if (q.target === o[0] && !q.shiftKey) {
                        r.focus(1);
                        return false
                    } else {
                        if (q.target === r[0] && q.shiftKey) {
                            o.focus(1);
                            return false
                        }
                    }
                }
            })
        },
        _init: function() {
            if (this.options.autoOpen) {
                this.open()
            }
        },
        _destroy: function() {
            var h, g = this.oldPosition;
            if (this.overlay) {
                this.overlay.destroy()
            }
            this.uiDialog.hide();
            this.element.removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");
            this.uiDialog.remove();
            if (this.originalTitle) {
                this.element.attr("title", this.originalTitle)
            }
            h = g.parent.children().eq(g.index);
            if (h.length && h[0] !== this.element[0]) {
                h.before(this.element)
            } else {
                g.parent.append(this.element)
            }
        },
        widget: function() {
            return this.uiDialog
        },
        close: function(j) {
            var i = this,
                h, g;
            if (!this._isOpen) {
                return
            }
            if (false === this._trigger("beforeClose", j)) {
                return
            }
            this._isOpen = false;
            if (this.overlay) {
                this.overlay.destroy()
            }
            if (this.options.hide) {
                this._hide(this.uiDialog, this.options.hide, function() {
                    i._trigger("close", j)
                })
            } else {
                this.uiDialog.hide();
                this._trigger("close", j)
            }
            e.ui.dialog.overlay.resize();
            if (this.options.modal) {
                h = 0;
                e(".ui-dialog").each(function() {
                    if (this !== i.uiDialog[0]) {
                        g = e(this).css("z-index");
                        if (!isNaN(g)) {
                            h = Math.max(h, g)
                        }
                    }
                });
                e.ui.dialog.maxZ = h
            }
            return this
        },
        isOpen: function() {
            return this._isOpen
        },
        moveToTop: function(j, i) {
            var h = this.options,
                g;
            if ((h.modal && !j) || (!h.stack && !h.modal)) {
                return this._trigger("focus", i)
            }
            if (h.zIndex > e.ui.dialog.maxZ) {
                e.ui.dialog.maxZ = h.zIndex
            }
            if (this.overlay) {
                e.ui.dialog.maxZ += 1;
                e.ui.dialog.overlay.maxZ = e.ui.dialog.maxZ;
                this.overlay.$el.css("z-index", e.ui.dialog.overlay.maxZ)
            }
            g = {
                scrollTop: this.element.scrollTop(),
                scrollLeft: this.element.scrollLeft()
            };
            e.ui.dialog.maxZ += 1;
            this.uiDialog.css("z-index", e.ui.dialog.maxZ);
            this.element.attr(g);
            this._trigger("focus", i);
            return this
        },
        open: function() {
            if (this._isOpen) {
                return
            }
            var i, h = this.options,
                g = this.uiDialog;
            this._size();
            this._position(h.position);
            g.show(h.show);
            this.overlay = h.modal ? new e.ui.dialog.overlay(this) : null;
            this.moveToTop(true);
            i = this.element.find(":tabbable");
            if (!i.length) {
                i = this.uiDialogButtonPane.find(":tabbable");
                if (!i.length) {
                    i = g
                }
            }
            i.eq(0).focus();
            this._isOpen = true;
            this._trigger("open");
            return this
        },
        _createButtons: function(i) {
            var h = this,
                g = false;
            this.uiDialogButtonPane.remove();
            this.uiButtonSet.empty();
            if (typeof i === "object" && i !== null) {
                e.each(i, function() {
                    return !(g = true)
                })
            }
            if (g) {
                e.each(i, function(j, l) {
                    var k, m;
                    l = e.isFunction(l) ? {
                        click: l,
                        text: j
                    } : l;
                    l = e.extend({
                        type: "button"
                    }, l);
                    m = l.click;
                    l.click = function() {
                        m.apply(h.element[0], arguments)
                    };
                    k = e("<button></button>", l).appendTo(h.uiButtonSet);
                    if (e.fn.button) {
                        k.button()
                    }
                });
                this.uiDialog.addClass("ui-dialog-buttons");
                this.uiDialogButtonPane.appendTo(this.uiDialog)
            } else {
                this.uiDialog.removeClass("ui-dialog-buttons")
            }
        },
        _makeDraggable: function() {
            var i = this,
                h = this.options;

            function g(j) {
                return {
                    position: j.position,
                    offset: j.offset
                }
            }
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(j, k) {
                    e(this).addClass("ui-dialog-dragging");
                    i._trigger("dragStart", j, g(k))
                },
                drag: function(j, k) {
                    i._trigger("drag", j, g(k))
                },
                stop: function(j, k) {
                    h.position = [k.position.left - i.document.scrollLeft(), k.position.top - i.document.scrollTop()];
                    e(this).removeClass("ui-dialog-dragging");
                    i._trigger("dragStop", j, g(k));
                    e.ui.dialog.overlay.resize()
                }
            })
        },
        _makeResizable: function(k) {
            k = (k === f ? this.options.resizable : k);
            var l = this,
                j = this.options,
                g = this.uiDialog.css("position"),
                i = typeof k === "string" ? k : "n,e,s,w,se,sw,ne,nw";

            function h(m) {
                return {
                    originalPosition: m.originalPosition,
                    originalSize: m.originalSize,
                    position: m.position,
                    size: m.size
                }
            }
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: j.maxWidth,
                maxHeight: j.maxHeight,
                minWidth: j.minWidth,
                minHeight: this._minHeight(),
                handles: i,
                start: function(m, n) {
                    e(this).addClass("ui-dialog-resizing");
                    l._trigger("resizeStart", m, h(n))
                },
                resize: function(m, n) {
                    l._trigger("resize", m, h(n))
                },
                stop: function(m, n) {
                    e(this).removeClass("ui-dialog-resizing");
                    j.height = e(this).height();
                    j.width = e(this).width();
                    l._trigger("resizeStop", m, h(n));
                    e.ui.dialog.overlay.resize()
                }
            }).css("position", g).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
        },
        _minHeight: function() {
            var g = this.options;
            if (g.height === "auto") {
                return g.minHeight
            } else {
                return Math.min(g.minHeight, g.height)
            }
        },
        _position: function(h) {
            var i = [],
                j = [0, 0],
                g;
            if (h) {
                if (typeof h === "string" || (typeof h === "object" && "0" in h)) {
                    i = h.split ? h.split(" ") : [h[0], h[1]];
                    if (i.length === 1) {
                        i[1] = i[0]
                    }
                    e.each(["left", "top"], function(l, k) {
                        if (+i[l] === i[l]) {
                            j[l] = i[l];
                            i[l] = k
                        }
                    });
                    h = {
                        my: i[0] + (j[0] < 0 ? j[0] : "+" + j[0]) + " " + i[1] + (j[1] < 0 ? j[1] : "+" + j[1]),
                        at: i.join(" ")
                    }
                }
                h = e.extend({}, e.ui.dialog.prototype.options.position, h)
            } else {
                h = e.ui.dialog.prototype.options.position
            }
            g = this.uiDialog.is(":visible");
            if (!g) {
                this.uiDialog.show()
            }
            this.uiDialog.position(h);
            if (!g) {
                this.uiDialog.hide()
            }
        },
        _setOptions: function(i) {
            var j = this,
                g = {},
                h = false;
            e.each(i, function(k, l) {
                j._setOption(k, l);
                if (k in b) {
                    h = true
                }
                if (k in d) {
                    g[k] = l
                }
            });
            if (h) {
                this._size()
            }
            if (this.uiDialog.is(":data(resizable)")) {
                this.uiDialog.resizable("option", g)
            }
        },
        _setOption: function(i, j) {
            var h, k, g = this.uiDialog;
            switch (i) {
                case "buttons":
                    this._createButtons(j);
                    break;
                case "closeText":
                    this.uiDialogTitlebarCloseText.text("" + j);
                    break;
                case "dialogClass":
                    g.removeClass(this.options.dialogClass).addClass(c + j);
                    break;
                case "disabled":
                    if (j) {
                        g.addClass("ui-dialog-disabled")
                    } else {
                        g.removeClass("ui-dialog-disabled")
                    }
                    break;
                case "draggable":
                    h = g.is(":data(draggable)");
                    if (h && !j) {
                        g.draggable("destroy")
                    }
                    if (!h && j) {
                        this._makeDraggable()
                    }
                    break;
                case "position":
                    this._position(j);
                    break;
                case "resizable":
                    k = g.is(":data(resizable)");
                    if (k && !j) {
                        g.resizable("destroy")
                    }
                    if (k && typeof j === "string") {
                        g.resizable("option", "handles", j)
                    }
                    if (!k && j !== false) {
                        this._makeResizable(j)
                    }
                    break;
                case "title":
                    e(".ui-dialog-title", this.uiDialogTitlebar).html("" + (j || "&#160;"));
                    break
            }
            this._super(i, j)
        },
        _size: function() {
            var h, k, j, i = this.options,
                g = this.uiDialog.is(":visible");
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                height: 0
            });
            if (i.minWidth > i.width) {
                i.width = i.minWidth
            }
            h = this.uiDialog.css({
                height: "auto",
                width: i.width
            }).outerHeight();
            k = Math.max(0, i.minHeight - h);
            if (i.height === "auto") {
                if (e.support.minHeight) {
                    this.element.css({
                        minHeight: k,
                        height: "auto"
                    })
                } else {
                    this.uiDialog.show();
                    j = this.element.css("height", "auto").height();
                    if (!g) {
                        this.uiDialog.hide()
                    }
                    this.element.height(Math.max(j, k))
                }
            } else {
                this.element.height(Math.max(i.height - h, 0))
            }
            if (this.uiDialog.is(":data(resizable)")) {
                this.uiDialog.resizable("option", "minHeight", this._minHeight())
            }
        }
    });
    e.extend(e.ui.dialog, {
        uuid: 0,
        maxZ: 0,
        getTitleId: function(g) {
            var h = g.attr("id");
            if (!h) {
                this.uuid += 1;
                h = this.uuid
            }
            return "ui-dialog-title-" + h
        },
        overlay: function(g) {
            this.$el = e.ui.dialog.overlay.create(g)
        }
    });
    e.extend(e.ui.dialog.overlay, {
        instances: [],
        oldInstances: [],
        maxZ: 0,
        events: e.map("focus,mousedown,mouseup,keydown,keypress,click".split(","), function(g) {
            return g + ".dialog-overlay"
        }).join(" "),
        create: function(h) {
            if (this.instances.length === 0) {
                setTimeout(function() {
                    if (e.ui.dialog.overlay.instances.length) {
                        e(document).bind(e.ui.dialog.overlay.events, function(i) {
                            if (e(i.target).zIndex() < e.ui.dialog.overlay.maxZ) {
                                return false
                            }
                        })
                    }
                }, 1);
                e(window).bind("resize.dialog-overlay", e.ui.dialog.overlay.resize)
            }
            var g = (this.oldInstances.pop() || e("<div>").addClass("ui-widget-overlay"));
            e(document).bind("keydown.dialog-overlay", function(i) {
                var j = e.ui.dialog.overlay.instances;
                if (j.length !== 0 && j[j.length - 1] === g && h.options.closeOnEscape && !i.isDefaultPrevented() && i.keyCode && i.keyCode === e.ui.keyCode.ESCAPE) {
                    h.close(i);
                    i.preventDefault()
                }
            });
            g.appendTo(document.body).css({
                width: this.width(),
                height: this.height()
            });
            if (e.fn.bgiframe) {
                g.bgiframe()
            }
            this.instances.push(g);
            return g
        },
        destroy: function(g) {
            var h = e.inArray(g, this.instances),
                i = 0;
            if (h !== -1) {
                this.oldInstances.push(this.instances.splice(h, 1)[0])
            }
            if (this.instances.length === 0) {
                e([document, window]).unbind(".dialog-overlay")
            }
            g.height(0).width(0).remove();
            e.each(this.instances, function() {
                i = Math.max(i, this.css("z-index"))
            });
            this.maxZ = i
        },
        height: function() {
            var h, g;
            if (e.ui.ie) {
                h = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
                g = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight);
                if (h < g) {
                    return e(window).height() + "px"
                } else {
                    return h + "px"
                }
            } else {
                return e(document).height() + "px"
            }
        },
        width: function() {
            var g, h;
            if (e.ui.ie) {
                g = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
                h = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);
                if (g < h) {
                    return e(window).width() + "px"
                } else {
                    return g + "px"
                }
            } else {
                return e(document).width() + "px"
            }
        },
        resize: function() {
            var g = e([]);
            e.each(e.ui.dialog.overlay.instances, function() {
                g = g.add(this)
            });
            g.css({
                width: 0,
                height: 0
            }).css({
                width: e.ui.dialog.overlay.width(),
                height: e.ui.dialog.overlay.height()
            })
        }
    });
    e.extend(e.ui.dialog.overlay.prototype, {
        destroy: function() {
            e.ui.dialog.overlay.destroy(this.$el)
        }
    })
}(jQuery));
(function(b, c) {
    b.widget("ui.draggable", b.ui.mouse, {
        version: "1.9.2",
        widgetEventPrefix: "drag",
        options: {
            addClasses: true,
            appendTo: "parent",
            axis: false,
            connectToSortable: false,
            containment: false,
            cursor: "auto",
            cursorAt: false,
            grid: false,
            handle: false,
            helper: "original",
            iframeFix: false,
            opacity: false,
            refreshPositions: false,
            revert: false,
            revertDuration: 500,
            scope: "default",
            scroll: true,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: false,
            snapMode: "both",
            snapTolerance: 20,
            stack: false,
            zIndex: false
        },
        _create: function() {
            if (this.options.helper == "original" && !(/^(?:r|a|f)/).test(this.element.css("position"))) {
                this.element[0].style.position = "relative"
            }(this.options.addClasses && this.element.addClass("ui-draggable"));
            (this.options.disabled && this.element.addClass("ui-draggable-disabled"));
            this._mouseInit()
        },
        _destroy: function() {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
            this._mouseDestroy()
        },
        _mouseCapture: function(d) {
            var e = this.options;
            if (this.helper || e.disabled || b(d.target).is(".ui-resizable-handle")) {
                return false
            }
            this.handle = this._getHandle(d);
            if (!this.handle) {
                return false
            }
            b(e.iframeFix === true ? "iframe" : e.iframeFix).each(function() {
                b('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1000
                }).css(b(this).offset()).appendTo("body")
            });
            return true
        },
        _mouseStart: function(d) {
            var e = this.options;
            this.helper = this._createHelper(d);
            this.helper.addClass("ui-draggable-dragging");
            this._cacheHelperProportions();
            if (b.ui.ddmanager) {
                b.ui.ddmanager.current = this
            }
            this._cacheMargins();
            this.cssPosition = this.helper.css("position");
            this.scrollParent = this.helper.scrollParent();
            this.offset = this.positionAbs = this.element.offset();
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            };
            b.extend(this.offset, {
                click: {
                    left: d.pageX - this.offset.left,
                    top: d.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            });
            this.originalPosition = this.position = this._generatePosition(d);
            this.originalPageX = d.pageX;
            this.originalPageY = d.pageY;
            (e.cursorAt && this._adjustOffsetFromHelper(e.cursorAt));
            if (e.containment) {
                this._setContainment()
            }
            if (this._trigger("start", d) === false) {
                this._clear();
                return false
            }
            this._cacheHelperProportions();
            if (b.ui.ddmanager && !e.dropBehaviour) {
                b.ui.ddmanager.prepareOffsets(this, d)
            }
            this._mouseDrag(d, true);
            if (b.ui.ddmanager) {
                b.ui.ddmanager.dragStart(this, d)
            }
            return true
        },
        _mouseDrag: function(d, f) {
            this.position = this._generatePosition(d);
            this.positionAbs = this._convertPositionTo("absolute");
            if (!f) {
                var e = this._uiHash();
                if (this._trigger("drag", d, e) === false) {
                    this._mouseUp({});
                    return false
                }
                this.position = e.position
            }
            if (!this.options.axis || this.options.axis != "y") {
                this.helper[0].style.left = this.position.left + "px"
            }
            if (!this.options.axis || this.options.axis != "x") {
                this.helper[0].style.top = this.position.top + "px"
            }
            if (b.ui.ddmanager) {
                b.ui.ddmanager.drag(this, d)
            }
            return false
        },
        _mouseStop: function(f) {
            var h = false;
            if (b.ui.ddmanager && !this.options.dropBehaviour) {
                h = b.ui.ddmanager.drop(this, f)
            }
            if (this.dropped) {
                h = this.dropped;
                this.dropped = false
            }
            var d = this.element[0],
                g = false;
            while (d && (d = d.parentNode)) {
                if (d == document) {
                    g = true
                }
            }
            if (!g && this.options.helper === "original") {
                return false
            }
            if ((this.options.revert == "invalid" && !h) || (this.options.revert == "valid" && h) || this.options.revert === true || (b.isFunction(this.options.revert) && this.options.revert.call(this.element, h))) {
                var e = this;
                b(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                    if (e._trigger("stop", f) !== false) {
                        e._clear()
                    }
                })
            } else {
                if (this._trigger("stop", f) !== false) {
                    this._clear()
                }
            }
            return false
        },
        _mouseUp: function(d) {
            b("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this)
            });
            if (b.ui.ddmanager) {
                b.ui.ddmanager.dragStop(this, d)
            }
            return b.ui.mouse.prototype._mouseUp.call(this, d)
        },
        cancel: function() {
            if (this.helper.is(".ui-draggable-dragging")) {
                this._mouseUp({})
            } else {
                this._clear()
            }
            return this
        },
        _getHandle: function(d) {
            var e = !this.options.handle || !b(this.options.handle, this.element).length ? true : false;
            b(this.options.handle, this.element).find("*").andSelf().each(function() {
                if (this == d.target) {
                    e = true
                }
            });
            return e
        },
        _createHelper: function(e) {
            var f = this.options;
            var d = b.isFunction(f.helper) ? b(f.helper.apply(this.element[0], [e])) : (f.helper == "clone" ? this.element.clone().removeAttr("id") : this.element);
            if (!d.parents("body").length) {
                d.appendTo((f.appendTo == "parent" ? this.element[0].parentNode : f.appendTo))
            }
            if (d[0] != this.element[0] && !(/(fixed|absolute)/).test(d.css("position"))) {
                d.css("position", "absolute")
            }
            return d
        },
        _adjustOffsetFromHelper: function(d) {
            if (typeof d == "string") {
                d = d.split(" ")
            }
            if (b.isArray(d)) {
                d = {
                    left: +d[0],
                    top: +d[1] || 0
                }
            }
            if ("left" in d) {
                this.offset.click.left = d.left + this.margins.left
            }
            if ("right" in d) {
                this.offset.click.left = this.helperProportions.width - d.right + this.margins.left
            }
            if ("top" in d) {
                this.offset.click.top = d.top + this.margins.top
            }
            if ("bottom" in d) {
                this.offset.click.top = this.helperProportions.height - d.bottom + this.margins.top
            }
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var d = this.offsetParent.offset();
            if (this.cssPosition == "absolute" && this.scrollParent[0] != document && b.contains(this.scrollParent[0], this.offsetParent[0])) {
                d.left += this.scrollParent.scrollLeft();
                d.top += this.scrollParent.scrollTop()
            }
            if ((this.offsetParent[0] == document.body) || (this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && b.ui.ie)) {
                d = {
                    top: 0,
                    left: 0
                }
            }
            return {
                top: d.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: d.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if (this.cssPosition == "relative") {
                var d = this.element.position();
                return {
                    top: d.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: d.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            } else {
                return {
                    top: 0,
                    left: 0
                }
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: (parseInt(this.element.css("marginLeft"), 10) || 0),
                top: (parseInt(this.element.css("marginTop"), 10) || 0),
                right: (parseInt(this.element.css("marginRight"), 10) || 0),
                bottom: (parseInt(this.element.css("marginBottom"), 10) || 0)
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var g = this.options;
            if (g.containment == "parent") {
                g.containment = this.helper[0].parentNode
            }
            if (g.containment == "document" || g.containment == "window") {
                this.containment = [g.containment == "document" ? 0 : b(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, g.containment == "document" ? 0 : b(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, (g.containment == "document" ? 0 : b(window).scrollLeft()) + b(g.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (g.containment == "document" ? 0 : b(window).scrollTop()) + (b(g.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]
            }
            if (!(/^(document|window|parent)$/).test(g.containment) && g.containment.constructor != Array) {
                var h = b(g.containment);
                var e = h[0];
                if (!e) {
                    return
                }
                var f = h.offset();
                var d = (b(e).css("overflow") != "hidden");
                this.containment = [(parseInt(b(e).css("borderLeftWidth"), 10) || 0) + (parseInt(b(e).css("paddingLeft"), 10) || 0), (parseInt(b(e).css("borderTopWidth"), 10) || 0) + (parseInt(b(e).css("paddingTop"), 10) || 0), (d ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(b(e).css("borderLeftWidth"), 10) || 0) - (parseInt(b(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (d ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(b(e).css("borderTopWidth"), 10) || 0) - (parseInt(b(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom];
                this.relative_container = h
            } else {
                if (g.containment.constructor == Array) {
                    this.containment = g.containment
                }
            }
        },
        _convertPositionTo: function(h, j) {
            if (!j) {
                j = this.position
            }
            var f = h == "absolute" ? 1 : -1;
            var g = this.options,
                e = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && b.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                i = (/(html|body)/i).test(e[0].tagName);
            return {
                top: (j.top + this.offset.relative.top * f + this.offset.parent.top * f - ((this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : (i ? 0 : e.scrollTop())) * f)),
                left: (j.left + this.offset.relative.left * f + this.offset.parent.left * f - ((this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : i ? 0 : e.scrollLeft()) * f))
            }
        },
        _generatePosition: function(e) {
            var f = this.options,
                m = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && b.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                j = (/(html|body)/i).test(m[0].tagName);
            var i = e.pageX;
            var h = e.pageY;
            if (this.originalPosition) {
                var d;
                if (this.containment) {
                    if (this.relative_container) {
                        var l = this.relative_container.offset();
                        d = [this.containment[0] + l.left, this.containment[1] + l.top, this.containment[2] + l.left, this.containment[3] + l.top]
                    } else {
                        d = this.containment
                    }
                    if (e.pageX - this.offset.click.left < d[0]) {
                        i = d[0] + this.offset.click.left
                    }
                    if (e.pageY - this.offset.click.top < d[1]) {
                        h = d[1] + this.offset.click.top
                    }
                    if (e.pageX - this.offset.click.left > d[2]) {
                        i = d[2] + this.offset.click.left
                    }
                    if (e.pageY - this.offset.click.top > d[3]) {
                        h = d[3] + this.offset.click.top
                    }
                }
                if (f.grid) {
                    var k = f.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / f.grid[1]) * f.grid[1] : this.originalPageY;
                    h = d ? (!(k - this.offset.click.top < d[1] || k - this.offset.click.top > d[3]) ? k : (!(k - this.offset.click.top < d[1]) ? k - f.grid[1] : k + f.grid[1])) : k;
                    var g = f.grid[0] ? this.originalPageX + Math.round((i - this.originalPageX) / f.grid[0]) * f.grid[0] : this.originalPageX;
                    i = d ? (!(g - this.offset.click.left < d[0] || g - this.offset.click.left > d[2]) ? g : (!(g - this.offset.click.left < d[0]) ? g - f.grid[0] : g + f.grid[0])) : g
                }
            }
            return {
                top: (h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ((this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : (j ? 0 : m.scrollTop())))),
                left: (i - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ((this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : j ? 0 : m.scrollLeft())))
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging");
            if (this.helper[0] != this.element[0] && !this.cancelHelperRemoval) {
                this.helper.remove()
            }
            this.helper = null;
            this.cancelHelperRemoval = false
        },
        _trigger: function(d, e, f) {
            f = f || this._uiHash();
            b.ui.plugin.call(this, d, [e, f]);
            if (d == "drag") {
                this.positionAbs = this._convertPositionTo("absolute")
            }
            return b.Widget.prototype._trigger.call(this, d, e, f)
        },
        plugins: {},
        _uiHash: function(d) {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    });
    b.ui.plugin.add("draggable", "connectToSortable", {
        start: function(e, g) {
            var f = b(this).data("draggable"),
                h = f.options,
                d = b.extend({}, g, {
                    item: f.element
                });
            f.sortables = [];
            b(h.connectToSortable).each(function() {
                var i = b.data(this, "sortable");
                if (i && !i.options.disabled) {
                    f.sortables.push({
                        instance: i,
                        shouldRevert: i.options.revert
                    });
                    i.refreshPositions();
                    i._trigger("activate", e, d)
                }
            })
        },
        stop: function(e, g) {
            var f = b(this).data("draggable"),
                d = b.extend({}, g, {
                    item: f.element
                });
            b.each(f.sortables, function() {
                if (this.instance.isOver) {
                    this.instance.isOver = 0;
                    f.cancelHelperRemoval = true;
                    this.instance.cancelHelperRemoval = false;
                    if (this.shouldRevert) {
                        this.instance.options.revert = true
                    }
                    this.instance._mouseStop(e);
                    this.instance.options.helper = this.instance.options._helper;
                    if (f.options.helper == "original") {
                        this.instance.currentItem.css({
                            top: "auto",
                            left: "auto"
                        })
                    }
                } else {
                    this.instance.cancelHelperRemoval = false;
                    this.instance._trigger("deactivate", e, d)
                }
            })
        },
        drag: function(e, h) {
            var g = b(this).data("draggable"),
                d = this;
            var f = function(k) {
                var q = this.offset.click.top,
                    p = this.offset.click.left;
                var i = this.positionAbs.top,
                    m = this.positionAbs.left;
                var l = k.height,
                    n = k.width;
                var r = k.top,
                    j = k.left;
                return b.ui.isOver(i + q, m + p, r, j, l, n)
            };
            b.each(g.sortables, function(k) {
                var j = false;
                var l = this;
                this.instance.positionAbs = g.positionAbs;
                this.instance.helperProportions = g.helperProportions;
                this.instance.offset.click = g.offset.click;
                if (this.instance._intersectsWith(this.instance.containerCache)) {
                    j = true;
                    b.each(g.sortables, function() {
                        this.instance.positionAbs = g.positionAbs;
                        this.instance.helperProportions = g.helperProportions;
                        this.instance.offset.click = g.offset.click;
                        if (this != l && this.instance._intersectsWith(this.instance.containerCache) && b.ui.contains(l.instance.element[0], this.instance.element[0])) {
                            j = false
                        }
                        return j
                    })
                }
                if (j) {
                    if (!this.instance.isOver) {
                        this.instance.isOver = 1;
                        this.instance.currentItem = b(d).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", true);
                        this.instance.options._helper = this.instance.options.helper;
                        this.instance.options.helper = function() {
                            return h.helper[0]
                        };
                        e.target = this.instance.currentItem[0];
                        this.instance._mouseCapture(e, true);
                        this.instance._mouseStart(e, true, true);
                        this.instance.offset.click.top = g.offset.click.top;
                        this.instance.offset.click.left = g.offset.click.left;
                        this.instance.offset.parent.left -= g.offset.parent.left - this.instance.offset.parent.left;
                        this.instance.offset.parent.top -= g.offset.parent.top - this.instance.offset.parent.top;
                        g._trigger("toSortable", e);
                        g.dropped = this.instance.element;
                        g.currentItem = g.element;
                        this.instance.fromOutside = g
                    }
                    if (this.instance.currentItem) {
                        this.instance._mouseDrag(e)
                    }
                } else {
                    if (this.instance.isOver) {
                        this.instance.isOver = 0;
                        this.instance.cancelHelperRemoval = true;
                        this.instance.options.revert = false;
                        this.instance._trigger("out", e, this.instance._uiHash(this.instance));
                        this.instance._mouseStop(e, true);
                        this.instance.options.helper = this.instance.options._helper;
                        this.instance.currentItem.remove();
                        if (this.instance.placeholder) {
                            this.instance.placeholder.remove()
                        }
                        g._trigger("fromSortable", e);
                        g.dropped = false
                    }
                }
            })
        }
    });
    b.ui.plugin.add("draggable", "cursor", {
        start: function(e, f) {
            var d = b("body"),
                g = b(this).data("draggable").options;
            if (d.css("cursor")) {
                g._cursor = d.css("cursor")
            }
            d.css("cursor", g.cursor)
        },
        stop: function(d, e) {
            var f = b(this).data("draggable").options;
            if (f._cursor) {
                b("body").css("cursor", f._cursor)
            }
        }
    });
    b.ui.plugin.add("draggable", "opacity", {
        start: function(e, f) {
            var d = b(f.helper),
                g = b(this).data("draggable").options;
            if (d.css("opacity")) {
                g._opacity = d.css("opacity")
            }
            d.css("opacity", g.opacity)
        },
        stop: function(d, e) {
            var f = b(this).data("draggable").options;
            if (f._opacity) {
                b(e.helper).css("opacity", f._opacity)
            }
        }
    });
    b.ui.plugin.add("draggable", "scroll", {
        start: function(e, f) {
            var d = b(this).data("draggable");
            if (d.scrollParent[0] != document && d.scrollParent[0].tagName != "HTML") {
                d.overflowOffset = d.scrollParent.offset()
            }
        },
        drag: function(f, g) {
            var e = b(this).data("draggable"),
                h = e.options,
                d = false;
            if (e.scrollParent[0] != document && e.scrollParent[0].tagName != "HTML") {
                if (!h.axis || h.axis != "x") {
                    if ((e.overflowOffset.top + e.scrollParent[0].offsetHeight) - f.pageY < h.scrollSensitivity) {
                        e.scrollParent[0].scrollTop = d = e.scrollParent[0].scrollTop + h.scrollSpeed
                    } else {
                        if (f.pageY - e.overflowOffset.top < h.scrollSensitivity) {
                            e.scrollParent[0].scrollTop = d = e.scrollParent[0].scrollTop - h.scrollSpeed
                        }
                    }
                }
                if (!h.axis || h.axis != "y") {
                    if ((e.overflowOffset.left + e.scrollParent[0].offsetWidth) - f.pageX < h.scrollSensitivity) {
                        e.scrollParent[0].scrollLeft = d = e.scrollParent[0].scrollLeft + h.scrollSpeed
                    } else {
                        if (f.pageX - e.overflowOffset.left < h.scrollSensitivity) {
                            e.scrollParent[0].scrollLeft = d = e.scrollParent[0].scrollLeft - h.scrollSpeed
                        }
                    }
                }
            } else {
                if (!h.axis || h.axis != "x") {
                    if (f.pageY - b(document).scrollTop() < h.scrollSensitivity) {
                        d = b(document).scrollTop(b(document).scrollTop() - h.scrollSpeed)
                    } else {
                        if (b(window).height() - (f.pageY - b(document).scrollTop()) < h.scrollSensitivity) {
                            d = b(document).scrollTop(b(document).scrollTop() + h.scrollSpeed)
                        }
                    }
                }
                if (!h.axis || h.axis != "y") {
                    if (f.pageX - b(document).scrollLeft() < h.scrollSensitivity) {
                        d = b(document).scrollLeft(b(document).scrollLeft() - h.scrollSpeed)
                    } else {
                        if (b(window).width() - (f.pageX - b(document).scrollLeft()) < h.scrollSensitivity) {
                            d = b(document).scrollLeft(b(document).scrollLeft() + h.scrollSpeed)
                        }
                    }
                }
            }
            if (d !== false && b.ui.ddmanager && !h.dropBehaviour) {
                b.ui.ddmanager.prepareOffsets(e, f)
            }
        }
    });
    b.ui.plugin.add("draggable", "snap", {
        start: function(e, f) {
            var d = b(this).data("draggable"),
                g = d.options;
            d.snapElements = [];
            b(g.snap.constructor != String ? (g.snap.items || ":data(draggable)") : g.snap).each(function() {
                var i = b(this);
                var h = i.offset();
                if (this != d.element[0]) {
                    d.snapElements.push({
                        item: this,
                        width: i.outerWidth(),
                        height: i.outerHeight(),
                        top: h.top,
                        left: h.left
                    })
                }
            })
        },
        drag: function(v, q) {
            var h = b(this).data("draggable"),
                s = h.options;
            var z = s.snapTolerance;
            var y = q.offset.left,
                x = y + h.helperProportions.width,
                g = q.offset.top,
                f = g + h.helperProportions.height;
            for (var w = h.snapElements.length - 1; w >= 0; w--) {
                var u = h.snapElements[w].left,
                    p = u + h.snapElements[w].width,
                    n = h.snapElements[w].top,
                    B = n + h.snapElements[w].height;
                if (!((u - z < y && y < p + z && n - z < g && g < B + z) || (u - z < y && y < p + z && n - z < f && f < B + z) || (u - z < x && x < p + z && n - z < g && g < B + z) || (u - z < x && x < p + z && n - z < f && f < B + z))) {
                    if (h.snapElements[w].snapping) {
                        (h.options.snap.release && h.options.snap.release.call(h.element, v, b.extend(h._uiHash(), {
                            snapItem: h.snapElements[w].item
                        })))
                    }
                    h.snapElements[w].snapping = false;
                    continue
                }
                if (s.snapMode != "inner") {
                    var e = Math.abs(n - f) <= z;
                    var A = Math.abs(B - g) <= z;
                    var k = Math.abs(u - x) <= z;
                    var m = Math.abs(p - y) <= z;
                    if (e) {
                        q.position.top = h._convertPositionTo("relative", {
                            top: n - h.helperProportions.height,
                            left: 0
                        }).top - h.margins.top
                    }
                    if (A) {
                        q.position.top = h._convertPositionTo("relative", {
                            top: B,
                            left: 0
                        }).top - h.margins.top
                    }
                    if (k) {
                        q.position.left = h._convertPositionTo("relative", {
                            top: 0,
                            left: u - h.helperProportions.width
                        }).left - h.margins.left
                    }
                    if (m) {
                        q.position.left = h._convertPositionTo("relative", {
                            top: 0,
                            left: p
                        }).left - h.margins.left
                    }
                }
                var j = (e || A || k || m);
                if (s.snapMode != "outer") {
                    var e = Math.abs(n - g) <= z;
                    var A = Math.abs(B - f) <= z;
                    var k = Math.abs(u - y) <= z;
                    var m = Math.abs(p - x) <= z;
                    if (e) {
                        q.position.top = h._convertPositionTo("relative", {
                            top: n,
                            left: 0
                        }).top - h.margins.top
                    }
                    if (A) {
                        q.position.top = h._convertPositionTo("relative", {
                            top: B - h.helperProportions.height,
                            left: 0
                        }).top - h.margins.top
                    }
                    if (k) {
                        q.position.left = h._convertPositionTo("relative", {
                            top: 0,
                            left: u
                        }).left - h.margins.left
                    }
                    if (m) {
                        q.position.left = h._convertPositionTo("relative", {
                            top: 0,
                            left: p - h.helperProportions.width
                        }).left - h.margins.left
                    }
                }
                if (!h.snapElements[w].snapping && (e || A || k || m || j)) {
                    (h.options.snap.snap && h.options.snap.snap.call(h.element, v, b.extend(h._uiHash(), {
                        snapItem: h.snapElements[w].item
                    })))
                }
                h.snapElements[w].snapping = (e || A || k || m || j)
            }
        }
    });
    b.ui.plugin.add("draggable", "stack", {
        start: function(e, f) {
            var h = b(this).data("draggable").options;
            var g = b.makeArray(b(h.stack)).sort(function(j, i) {
                return (parseInt(b(j).css("zIndex"), 10) || 0) - (parseInt(b(i).css("zIndex"), 10) || 0)
            });
            if (!g.length) {
                return
            }
            var d = parseInt(g[0].style.zIndex) || 0;
            b(g).each(function(j) {
                this.style.zIndex = d + j
            });
            this[0].style.zIndex = d + g.length
        }
    });
    b.ui.plugin.add("draggable", "zIndex", {
        start: function(e, f) {
            var d = b(f.helper),
                g = b(this).data("draggable").options;
            if (d.css("zIndex")) {
                g._zIndex = d.css("zIndex")
            }
            d.css("zIndex", g.zIndex)
        },
        stop: function(d, e) {
            var f = b(this).data("draggable").options;
            if (f._zIndex) {
                b(e.helper).css("zIndex", f._zIndex)
            }
        }
    })
})(jQuery);
(function(b, c) {
    b.widget("ui.droppable", {
        version: "1.9.2",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: false,
            addClasses: true,
            greedy: false,
            hoverClass: false,
            scope: "default",
            tolerance: "intersect"
        },
        _create: function() {
            var e = this.options,
                d = e.accept;
            this.isover = 0;
            this.isout = 1;
            this.accept = b.isFunction(d) ? d : function(f) {
                return f.is(d)
            };
            this.proportions = {
                width: this.element[0].offsetWidth,
                height: this.element[0].offsetHeight
            };
            b.ui.ddmanager.droppables[e.scope] = b.ui.ddmanager.droppables[e.scope] || [];
            b.ui.ddmanager.droppables[e.scope].push(this);
            (e.addClasses && this.element.addClass("ui-droppable"))
        },
        _destroy: function() {
            var d = b.ui.ddmanager.droppables[this.options.scope];
            for (var e = 0; e < d.length; e++) {
                if (d[e] == this) {
                    d.splice(e, 1)
                }
            }
            this.element.removeClass("ui-droppable ui-droppable-disabled")
        },
        _setOption: function(d, e) {
            if (d == "accept") {
                this.accept = b.isFunction(e) ? e : function(f) {
                    return f.is(e)
                }
            }
            b.Widget.prototype._setOption.apply(this, arguments)
        },
        _activate: function(e) {
            var d = b.ui.ddmanager.current;
            if (this.options.activeClass) {
                this.element.addClass(this.options.activeClass)
            }(d && this._trigger("activate", e, this.ui(d)))
        },
        _deactivate: function(e) {
            var d = b.ui.ddmanager.current;
            if (this.options.activeClass) {
                this.element.removeClass(this.options.activeClass)
            }(d && this._trigger("deactivate", e, this.ui(d)))
        },
        _over: function(e) {
            var d = b.ui.ddmanager.current;
            if (!d || (d.currentItem || d.element)[0] == this.element[0]) {
                return
            }
            if (this.accept.call(this.element[0], (d.currentItem || d.element))) {
                if (this.options.hoverClass) {
                    this.element.addClass(this.options.hoverClass)
                }
                this._trigger("over", e, this.ui(d))
            }
        },
        _out: function(e) {
            var d = b.ui.ddmanager.current;
            if (!d || (d.currentItem || d.element)[0] == this.element[0]) {
                return
            }
            if (this.accept.call(this.element[0], (d.currentItem || d.element))) {
                if (this.options.hoverClass) {
                    this.element.removeClass(this.options.hoverClass)
                }
                this._trigger("out", e, this.ui(d))
            }
        },
        _drop: function(e, f) {
            var d = f || b.ui.ddmanager.current;
            if (!d || (d.currentItem || d.element)[0] == this.element[0]) {
                return false
            }
            var g = false;
            this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function() {
                var h = b.data(this, "droppable");
                if (h.options.greedy && !h.options.disabled && h.options.scope == d.options.scope && h.accept.call(h.element[0], (d.currentItem || d.element)) && b.ui.intersect(d, b.extend(h, {
                        offset: h.element.offset()
                    }), h.options.tolerance)) {
                    g = true;
                    return false
                }
            });
            if (g) {
                return false
            }
            if (this.accept.call(this.element[0], (d.currentItem || d.element))) {
                if (this.options.activeClass) {
                    this.element.removeClass(this.options.activeClass)
                }
                if (this.options.hoverClass) {
                    this.element.removeClass(this.options.hoverClass)
                }
                this._trigger("drop", e, this.ui(d));
                return this.element
            }
            return false
        },
        ui: function(d) {
            return {
                draggable: (d.currentItem || d.element),
                helper: d.helper,
                position: d.position,
                offset: d.positionAbs
            }
        }
    });
    b.ui.intersect = function(s, k, p) {
        if (!k.offset) {
            return false
        }
        var f = (s.positionAbs || s.position.absolute).left,
            e = f + s.helperProportions.width,
            o = (s.positionAbs || s.position.absolute).top,
            n = o + s.helperProportions.height;
        var h = k.offset.left,
            d = h + k.proportions.width,
            q = k.offset.top,
            m = q + k.proportions.height;
        switch (p) {
            case "fit":
                return (h <= f && e <= d && q <= o && n <= m);
                break;
            case "intersect":
                return (h < f + (s.helperProportions.width / 2) && e - (s.helperProportions.width / 2) < d && q < o + (s.helperProportions.height / 2) && n - (s.helperProportions.height / 2) < m);
                break;
            case "pointer":
                var i = ((s.positionAbs || s.position.absolute).left + (s.clickOffset || s.offset.click).left),
                    j = ((s.positionAbs || s.position.absolute).top + (s.clickOffset || s.offset.click).top),
                    g = b.ui.isOver(j, i, q, h, k.proportions.height, k.proportions.width);
                return g;
                break;
            case "touch":
                return ((o >= q && o <= m) || (n >= q && n <= m) || (o < q && n > m)) && ((f >= h && f <= d) || (e >= h && e <= d) || (f < h && e > d));
                break;
            default:
                return false;
                break
        }
    };
    b.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function(g, k) {
            var d = b.ui.ddmanager.droppables[g.options.scope] || [];
            var h = k ? k.type : null;
            var l = (g.currentItem || g.element).find(":data(droppable)").andSelf();
            droppablesLoop: for (var f = 0; f < d.length; f++) {
                if (d[f].options.disabled || (g && !d[f].accept.call(d[f].element[0], (g.currentItem || g.element)))) {
                    continue
                }
                for (var e = 0; e < l.length; e++) {
                    if (l[e] == d[f].element[0]) {
                        d[f].proportions.height = 0;
                        continue droppablesLoop
                    }
                }
                d[f].visible = d[f].element.css("display") != "none";
                if (!d[f].visible) {
                    continue
                }
                if (h == "mousedown") {
                    d[f]._activate.call(d[f], k)
                }
                d[f].offset = d[f].element.offset();
                d[f].proportions = {
                    width: d[f].element[0].offsetWidth,
                    height: d[f].element[0].offsetHeight
                }
            }
        },
        drop: function(d, e) {
            var f = false;
            b.each(b.ui.ddmanager.droppables[d.options.scope] || [], function() {
                if (!this.options) {
                    return
                }
                if (!this.options.disabled && this.visible && b.ui.intersect(d, this, this.options.tolerance)) {
                    f = this._drop.call(this, e) || f
                }
                if (!this.options.disabled && this.visible && this.accept.call(this.element[0], (d.currentItem || d.element))) {
                    this.isout = 1;
                    this.isover = 0;
                    this._deactivate.call(this, e)
                }
            });
            return f
        },
        dragStart: function(d, e) {
            d.element.parentsUntil("body").bind("scroll.droppable", function() {
                if (!d.options.refreshPositions) {
                    b.ui.ddmanager.prepareOffsets(d, e)
                }
            })
        },
        drag: function(d, e) {
            if (d.options.refreshPositions) {
                b.ui.ddmanager.prepareOffsets(d, e)
            }
            b.each(b.ui.ddmanager.droppables[d.options.scope] || [], function() {
                if (this.options.disabled || this.greedyChild || !this.visible) {
                    return
                }
                var h = b.ui.intersect(d, this, this.options.tolerance);
                var j = !h && this.isover == 1 ? "isout" : (h && this.isover == 0 ? "isover" : null);
                if (!j) {
                    return
                }
                var i;
                if (this.options.greedy) {
                    var g = this.options.scope;
                    var f = this.element.parents(":data(droppable)").filter(function() {
                        return b.data(this, "droppable").options.scope === g
                    });
                    if (f.length) {
                        i = b.data(f[0], "droppable");
                        i.greedyChild = (j == "isover" ? 1 : 0)
                    }
                }
                if (i && j == "isover") {
                    i.isover = 0;
                    i.isout = 1;
                    i._out.call(i, e)
                }
                this[j] = 1;
                this[j == "isout" ? "isover" : "isout"] = 0;
                this[j == "isover" ? "_over" : "_out"].call(this, e);
                if (i && j == "isout") {
                    i.isout = 0;
                    i.isover = 1;
                    i._over.call(i, e)
                }
            })
        },
        dragStop: function(d, e) {
            d.element.parentsUntil("body").unbind("scroll.droppable");
            if (!d.options.refreshPositions) {
                b.ui.ddmanager.prepareOffsets(d, e)
            }
        }
    }
})(jQuery);
(jQuery.effects || (function(c, e) {
    var b = c.uiBackCompat !== false,
        d = "ui-effects-";
    c.effects = {
        effect: {}
    };
    /*!
     * jQuery Color Animations v2.0.0
     * http://jquery.com/
     *
     * Copyright 2012 jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * Date: Mon Aug 13 13:41:02 2012 -0500
     */
    (function(t, i) {
        var p = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "),
            m = /^([\-+])=\s*(\d+\.?\d*)/,
            l = [{
                re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                parse: function(u) {
                    return [u[1], u[2], u[3], u[4]]
                }
            }, {
                re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                parse: function(u) {
                    return [u[1] * 2.55, u[2] * 2.55, u[3] * 2.55, u[4]]
                }
            }, {
                re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                parse: function(u) {
                    return [parseInt(u[1], 16), parseInt(u[2], 16), parseInt(u[3], 16)]
                }
            }, {
                re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                parse: function(u) {
                    return [parseInt(u[1] + u[1], 16), parseInt(u[2] + u[2], 16), parseInt(u[3] + u[3], 16)]
                }
            }, {
                re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                space: "hsla",
                parse: function(u) {
                    return [u[1], u[2] / 100, u[3] / 100, u[4]]
                }
            }],
            j = t.Color = function(v, w, u, x) {
                return new t.Color.fn.parse(v, w, u, x)
            },
            o = {
                rgba: {
                    props: {
                        red: {
                            idx: 0,
                            type: "byte"
                        },
                        green: {
                            idx: 1,
                            type: "byte"
                        },
                        blue: {
                            idx: 2,
                            type: "byte"
                        }
                    }
                },
                hsla: {
                    props: {
                        hue: {
                            idx: 0,
                            type: "degrees"
                        },
                        saturation: {
                            idx: 1,
                            type: "percent"
                        },
                        lightness: {
                            idx: 2,
                            type: "percent"
                        }
                    }
                }
            },
            s = {
                "byte": {
                    floor: true,
                    max: 255
                },
                percent: {
                    max: 1
                },
                degrees: {
                    mod: 360,
                    floor: true
                }
            },
            r = j.support = {},
            g = t("<p>")[0],
            f, q = t.each;
        g.style.cssText = "background-color:rgba(1,1,1,.5)";
        r.rgba = g.style.backgroundColor.indexOf("rgba") > -1;
        q(o, function(u, v) {
            v.cache = "_" + u;
            v.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            }
        });

        function n(v, x, w) {
            var u = s[x.type] || {};
            if (v == null) {
                return (w || !x.def) ? null : x.def
            }
            v = u.floor ? ~~v : parseFloat(v);
            if (isNaN(v)) {
                return x.def
            }
            if (u.mod) {
                return (v + u.mod) % u.mod
            }
            return 0 > v ? 0 : u.max < v ? u.max : v
        }

        function k(u) {
            var w = j(),
                v = w._rgba = [];
            u = u.toLowerCase();
            q(l, function(B, C) {
                var z, A = C.re.exec(u),
                    y = A && C.parse(A),
                    x = C.space || "rgba";
                if (y) {
                    z = w[x](y);
                    w[o[x].cache] = z[o[x].cache];
                    v = w._rgba = z._rgba;
                    return false
                }
            });
            if (v.length) {
                if (v.join() === "0,0,0,0") {
                    t.extend(v, f.transparent)
                }
                return w
            }
            return f[u]
        }
        j.fn = t.extend(j.prototype, {
            parse: function(A, y, u, z) {
                if (A === i) {
                    this._rgba = [null, null, null, null];
                    return this
                }
                if (A.jquery || A.nodeType) {
                    A = t(A).css(y);
                    y = i
                }
                var x = this,
                    w = t.type(A),
                    v = this._rgba = [];
                if (y !== i) {
                    A = [A, y, u, z];
                    w = "array"
                }
                if (w === "string") {
                    return this.parse(k(A) || f._default)
                }
                if (w === "array") {
                    q(o.rgba.props, function(B, C) {
                        v[C.idx] = n(A[C.idx], C)
                    });
                    return this
                }
                if (w === "object") {
                    if (A instanceof j) {
                        q(o, function(B, C) {
                            if (A[C.cache]) {
                                x[C.cache] = A[C.cache].slice()
                            }
                        })
                    } else {
                        q(o, function(C, D) {
                            var B = D.cache;
                            q(D.props, function(E, F) {
                                if (!x[B] && D.to) {
                                    if (E === "alpha" || A[E] == null) {
                                        return
                                    }
                                    x[B] = D.to(x._rgba)
                                }
                                x[B][F.idx] = n(A[E], F, true)
                            });
                            if (x[B] && c.inArray(null, x[B].slice(0, 3)) < 0) {
                                x[B][3] = 1;
                                if (D.from) {
                                    x._rgba = D.from(x[B])
                                }
                            }
                        })
                    }
                    return this
                }
            },
            is: function(w) {
                var u = j(w),
                    x = true,
                    v = this;
                q(o, function(y, A) {
                    var B, z = u[A.cache];
                    if (z) {
                        B = v[A.cache] || A.to && A.to(v._rgba) || [];
                        q(A.props, function(C, D) {
                            if (z[D.idx] != null) {
                                x = (z[D.idx] === B[D.idx]);
                                return x
                            }
                        })
                    }
                    return x
                });
                return x
            },
            _space: function() {
                var u = [],
                    v = this;
                q(o, function(w, x) {
                    if (v[x.cache]) {
                        u.push(w)
                    }
                });
                return u.pop()
            },
            transition: function(v, B) {
                var w = j(v),
                    x = w._space(),
                    y = o[x],
                    z = this.alpha() === 0 ? j("transparent") : this,
                    A = z[y.cache] || y.to(z._rgba),
                    u = A.slice();
                w = w[y.cache];
                q(y.props, function(F, H) {
                    var E = H.idx,
                        D = A[E],
                        C = w[E],
                        G = s[H.type] || {};
                    if (C === null) {
                        return
                    }
                    if (D === null) {
                        u[E] = C
                    } else {
                        if (G.mod) {
                            if (C - D > G.mod / 2) {
                                D += G.mod
                            } else {
                                if (D - C > G.mod / 2) {
                                    D -= G.mod
                                }
                            }
                        }
                        u[E] = n((C - D) * B + D, H)
                    }
                });
                return this[x](u)
            },
            blend: function(x) {
                if (this._rgba[3] === 1) {
                    return this
                }
                var w = this._rgba.slice(),
                    v = w.pop(),
                    u = j(x)._rgba;
                return j(t.map(w, function(y, z) {
                    return (1 - v) * u[z] + v * y
                }))
            },
            toRgbaString: function() {
                var v = "rgba(",
                    u = t.map(this._rgba, function(w, x) {
                        return w == null ? (x > 2 ? 1 : 0) : w
                    });
                if (u[3] === 1) {
                    u.pop();
                    v = "rgb("
                }
                return v + u.join() + ")"
            },
            toHslaString: function() {
                var v = "hsla(",
                    u = t.map(this.hsla(), function(w, x) {
                        if (w == null) {
                            w = x > 2 ? 1 : 0
                        }
                        if (x && x < 3) {
                            w = Math.round(w * 100) + "%"
                        }
                        return w
                    });
                if (u[3] === 1) {
                    u.pop();
                    v = "hsl("
                }
                return v + u.join() + ")"
            },
            toHexString: function(u) {
                var v = this._rgba.slice(),
                    w = v.pop();
                if (u) {
                    v.push(~~(w * 255))
                }
                return "#" + t.map(v, function(x) {
                    x = (x || 0).toString(16);
                    return x.length === 1 ? "0" + x : x
                }).join("")
            },
            toString: function() {
                return this._rgba[3] === 0 ? "transparent" : this.toRgbaString()
            }
        });
        j.fn.parse.prototype = j.fn;

        function h(w, v, u) {
            u = (u + 1) % 1;
            if (u * 6 < 1) {
                return w + (v - w) * u * 6
            }
            if (u * 2 < 1) {
                return v
            }
            if (u * 3 < 2) {
                return w + (v - w) * ((2 / 3) - u) * 6
            }
            return w
        }
        o.hsla.to = function(w) {
            if (w[0] == null || w[1] == null || w[2] == null) {
                return [null, null, null, w[3]]
            }
            var u = w[0] / 255,
                z = w[1] / 255,
                A = w[2] / 255,
                C = w[3],
                B = Math.max(u, z, A),
                x = Math.min(u, z, A),
                D = B - x,
                E = B + x,
                v = E * 0.5,
                y, F;
            if (x === B) {
                y = 0
            } else {
                if (u === B) {
                    y = (60 * (z - A) / D) + 360
                } else {
                    if (z === B) {
                        y = (60 * (A - u) / D) + 120
                    } else {
                        y = (60 * (u - z) / D) + 240
                    }
                }
            }
            if (v === 0 || v === 1) {
                F = v
            } else {
                if (v <= 0.5) {
                    F = D / E
                } else {
                    F = D / (2 - E)
                }
            }
            return [Math.round(y) % 360, F, v, C == null ? 1 : C]
        };
        o.hsla.from = function(y) {
            if (y[0] == null || y[1] == null || y[2] == null) {
                return [null, null, null, y[3]]
            }
            var x = y[0] / 360,
                w = y[1],
                v = y[2],
                u = y[3],
                z = v <= 0.5 ? v * (1 + w) : v + w - v * w,
                A = 2 * v - z;
            return [Math.round(h(A, z, x + (1 / 3)) * 255), Math.round(h(A, z, x) * 255), Math.round(h(A, z, x - (1 / 3)) * 255), u]
        };
        q(o, function(v, x) {
            var w = x.props,
                u = x.cache,
                z = x.to,
                y = x.from;
            j.fn[v] = function(E) {
                if (z && !this[u]) {
                    this[u] = z(this._rgba)
                }
                if (E === i) {
                    return this[u].slice()
                }
                var B, D = t.type(E),
                    A = (D === "array" || D === "object") ? E : arguments,
                    C = this[u].slice();
                q(w, function(F, H) {
                    var G = A[D === "object" ? F : H.idx];
                    if (G == null) {
                        G = C[H.idx]
                    }
                    C[H.idx] = n(G, H)
                });
                if (y) {
                    B = j(y(C));
                    B[u] = C;
                    return B
                } else {
                    return j(C)
                }
            };
            q(w, function(A, B) {
                if (j.fn[A]) {
                    return
                }
                j.fn[A] = function(F) {
                    var H = t.type(F),
                        E = (A === "alpha" ? (this._hsla ? "hsla" : "rgba") : v),
                        D = this[E](),
                        G = D[B.idx],
                        C;
                    if (H === "undefined") {
                        return G
                    }
                    if (H === "function") {
                        F = F.call(this, G);
                        H = t.type(F)
                    }
                    if (F == null && B.empty) {
                        return this
                    }
                    if (H === "string") {
                        C = m.exec(F);
                        if (C) {
                            F = G + parseFloat(C[2]) * (C[1] === "+" ? 1 : -1)
                        }
                    }
                    D[B.idx] = F;
                    return this[E](D)
                }
            })
        });
        q(p, function(u, v) {
            t.cssHooks[v] = {
                set: function(A, B) {
                    var x, z, w = "";
                    if (t.type(B) !== "string" || (x = k(B))) {
                        B = j(x || B);
                        if (!r.rgba && B._rgba[3] !== 1) {
                            z = v === "backgroundColor" ? A.parentNode : A;
                            while ((w === "" || w === "transparent") && z && z.style) {
                                try {
                                    w = t.css(z, "backgroundColor");
                                    z = z.parentNode
                                } catch (C) {}
                            }
                            B = B.blend(w && w !== "transparent" ? w : "_default")
                        }
                        B = B.toRgbaString()
                    }
                    try {
                        A.style[v] = B
                    } catch (y) {}
                }
            };
            t.fx.step[v] = function(w) {
                if (!w.colorInit) {
                    w.start = j(w.elem, v);
                    w.end = j(w.end);
                    w.colorInit = true
                }
                t.cssHooks[v].set(w.elem, w.start.transition(w.end, w.pos))
            }
        });
        t.cssHooks.borderColor = {
            expand: function(v) {
                var u = {};
                q(["Top", "Right", "Bottom", "Left"], function(x, w) {
                    u["border" + w + "Color"] = v
                });
                return u
            }
        };
        f = t.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    })(jQuery);
    (function() {
        var g = ["add", "remove", "toggle"],
            h = {
                border: 1,
                borderBottom: 1,
                borderColor: 1,
                borderLeft: 1,
                borderRight: 1,
                borderTop: 1,
                borderWidth: 1,
                margin: 1,
                padding: 1
            };
        c.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(j, k) {
            c.fx.step[k] = function(l) {
                if (l.end !== "none" && !l.setAttr || l.pos === 1 && !l.setAttr) {
                    jQuery.style(l.elem, k, l.end);
                    l.setAttr = true
                }
            }
        });

        function i() {
            var l = this.ownerDocument.defaultView ? this.ownerDocument.defaultView.getComputedStyle(this, null) : this.currentStyle,
                m = {},
                k, j;
            if (l && l.length && l[0] && l[l[0]]) {
                j = l.length;
                while (j--) {
                    k = l[j];
                    if (typeof l[k] === "string") {
                        m[c.camelCase(k)] = l[k]
                    }
                }
            } else {
                for (k in l) {
                    if (typeof l[k] === "string") {
                        m[k] = l[k]
                    }
                }
            }
            return m
        }

        function f(j, l) {
            var n = {},
                k, m;
            for (k in l) {
                m = l[k];
                if (j[k] !== m) {
                    if (!h[k]) {
                        if (c.fx.step[k] || !isNaN(parseFloat(m))) {
                            n[k] = m
                        }
                    }
                }
            }
            return n
        }
        c.effects.animateClass = function(j, k, n, m) {
            var l = c.speed(k, n, m);
            return this.queue(function() {
                var q = c(this),
                    o = q.attr("class") || "",
                    p, r = l.children ? q.find("*").andSelf() : q;
                r = r.map(function() {
                    var s = c(this);
                    return {
                        el: s,
                        start: i.call(this)
                    }
                });
                p = function() {
                    c.each(g, function(s, t) {
                        if (j[t]) {
                            q[t + "Class"](j[t])
                        }
                    })
                };
                p();
                r = r.map(function() {
                    this.end = i.call(this.el[0]);
                    this.diff = f(this.start, this.end);
                    return this
                });
                q.attr("class", o);
                r = r.map(function() {
                    var u = this,
                        s = c.Deferred(),
                        t = jQuery.extend({}, l, {
                            queue: false,
                            complete: function() {
                                s.resolve(u)
                            }
                        });
                    this.el.animate(this.diff, t);
                    return s.promise()
                });
                c.when.apply(c, r.get()).done(function() {
                    p();
                    c.each(arguments, function() {
                        var s = this.el;
                        c.each(this.diff, function(t) {
                            s.css(t, "")
                        })
                    });
                    l.complete.call(q[0])
                })
            })
        };
        c.fn.extend({
            _addClass: c.fn.addClass,
            addClass: function(k, j, m, l) {
                return j ? c.effects.animateClass.call(this, {
                    add: k
                }, j, m, l) : this._addClass(k)
            },
            _removeClass: c.fn.removeClass,
            removeClass: function(k, j, m, l) {
                return j ? c.effects.animateClass.call(this, {
                    remove: k
                }, j, m, l) : this._removeClass(k)
            },
            _toggleClass: c.fn.toggleClass,
            toggleClass: function(l, k, j, n, m) {
                if (typeof k === "boolean" || k === e) {
                    if (!j) {
                        return this._toggleClass(l, k)
                    } else {
                        return c.effects.animateClass.call(this, (k ? {
                            add: l
                        } : {
                            remove: l
                        }), j, n, m)
                    }
                } else {
                    return c.effects.animateClass.call(this, {
                        toggle: l
                    }, k, j, n)
                }
            },
            switchClass: function(j, l, k, n, m) {
                return c.effects.animateClass.call(this, {
                    add: l,
                    remove: j
                }, k, n, m)
            }
        })
    })();
    (function() {
        c.extend(c.effects, {
            version: "1.9.2",
            save: function(j, k) {
                for (var h = 0; h < k.length; h++) {
                    if (k[h] !== null) {
                        j.data(d + k[h], j[0].style[k[h]])
                    }
                }
            },
            restore: function(j, l) {
                var k, h;
                for (h = 0; h < l.length; h++) {
                    if (l[h] !== null) {
                        k = j.data(d + l[h]);
                        if (k === e) {
                            k = ""
                        }
                        j.css(l[h], k)
                    }
                }
            },
            setMode: function(h, i) {
                if (i === "toggle") {
                    i = h.is(":hidden") ? "show" : "hide"
                }
                return i
            },
            getBaseline: function(i, j) {
                var k, h;
                switch (i[0]) {
                    case "top":
                        k = 0;
                        break;
                    case "middle":
                        k = 0.5;
                        break;
                    case "bottom":
                        k = 1;
                        break;
                    default:
                        k = i[0] / j.height
                }
                switch (i[1]) {
                    case "left":
                        h = 0;
                        break;
                    case "center":
                        h = 0.5;
                        break;
                    case "right":
                        h = 1;
                        break;
                    default:
                        h = i[1] / j.width
                }
                return {
                    x: h,
                    y: k
                }
            },
            createWrapper: function(i) {
                if (i.parent().is(".ui-effects-wrapper")) {
                    return i.parent()
                }
                var j = {
                        width: i.outerWidth(true),
                        height: i.outerHeight(true),
                        "float": i.css("float")
                    },
                    m = c("<div></div>").addClass("ui-effects-wrapper").css({
                        fontSize: "100%",
                        background: "transparent",
                        border: "none",
                        margin: 0,
                        padding: 0
                    }),
                    h = {
                        width: i.width(),
                        height: i.height()
                    },
                    l = document.activeElement;
                try {
                    l.id
                } catch (k) {
                    l = document.body
                }
                i.wrap(m);
                if (i[0] === l || c.contains(i[0], l)) {
                    c(l).focus()
                }
                m = i.parent();
                if (i.css("position") === "static") {
                    m.css({
                        position: "relative"
                    });
                    i.css({
                        position: "relative"
                    })
                } else {
                    c.extend(j, {
                        position: i.css("position"),
                        zIndex: i.css("z-index")
                    });
                    c.each(["top", "left", "bottom", "right"], function(n, o) {
                        j[o] = i.css(o);
                        if (isNaN(parseInt(j[o], 10))) {
                            j[o] = "auto"
                        }
                    });
                    i.css({
                        position: "relative",
                        top: 0,
                        left: 0,
                        right: "auto",
                        bottom: "auto"
                    })
                }
                i.css(h);
                return m.css(j).show()
            },
            removeWrapper: function(h) {
                var i = document.activeElement;
                if (h.parent().is(".ui-effects-wrapper")) {
                    h.parent().replaceWith(h);
                    if (h[0] === i || c.contains(h[0], i)) {
                        c(i).focus()
                    }
                }
                return h
            },
            setTransition: function(i, k, h, j) {
                j = j || {};
                c.each(k, function(m, l) {
                    var n = i.cssUnit(l);
                    if (n[0] > 0) {
                        j[l] = n[0] * h + n[1]
                    }
                });
                return j
            }
        });

        function f(i, h, j, k) {
            if (c.isPlainObject(i)) {
                h = i;
                i = i.effect
            }
            i = {
                effect: i
            };
            if (h == null) {
                h = {}
            }
            if (c.isFunction(h)) {
                k = h;
                j = null;
                h = {}
            }
            if (typeof h === "number" || c.fx.speeds[h]) {
                k = j;
                j = h;
                h = {}
            }
            if (c.isFunction(j)) {
                k = j;
                j = null
            }
            if (h) {
                c.extend(i, h)
            }
            j = j || h.duration;
            i.duration = c.fx.off ? 0 : typeof j === "number" ? j : j in c.fx.speeds ? c.fx.speeds[j] : c.fx.speeds._default;
            i.complete = k || h.complete;
            return i
        }

        function g(h) {
            if (!h || typeof h === "number" || c.fx.speeds[h]) {
                return true
            }
            if (typeof h === "string" && !c.effects.effect[h]) {
                if (b && c.effects[h]) {
                    return false
                }
                return true
            }
            return false
        }
        c.fn.extend({
            effect: function() {
                var j = f.apply(this, arguments),
                    m = j.mode,
                    h = j.queue,
                    i = c.effects.effect[j.effect],
                    k = !i && b && c.effects[j.effect];
                if (c.fx.off || !(i || k)) {
                    if (m) {
                        return this[m](j.duration, j.complete)
                    } else {
                        return this.each(function() {
                            if (j.complete) {
                                j.complete.call(this)
                            }
                        })
                    }
                }

                function l(p) {
                    var q = c(this),
                        o = j.complete,
                        r = j.mode;

                    function n() {
                        if (c.isFunction(o)) {
                            o.call(q[0])
                        }
                        if (c.isFunction(p)) {
                            p()
                        }
                    }
                    if (q.is(":hidden") ? r === "hide" : r === "show") {
                        n()
                    } else {
                        i.call(q[0], j, n)
                    }
                }
                if (i) {
                    return h === false ? this.each(l) : this.queue(h || "fx", l)
                } else {
                    return k.call(this, {
                        options: j,
                        duration: j.duration,
                        callback: j.complete,
                        mode: j.mode
                    })
                }
            },
            _show: c.fn.show,
            show: function(i) {
                if (g(i)) {
                    return this._show.apply(this, arguments)
                } else {
                    var h = f.apply(this, arguments);
                    h.mode = "show";
                    return this.effect.call(this, h)
                }
            },
            _hide: c.fn.hide,
            hide: function(i) {
                if (g(i)) {
                    return this._hide.apply(this, arguments)
                } else {
                    var h = f.apply(this, arguments);
                    h.mode = "hide";
                    return this.effect.call(this, h)
                }
            },
            __toggle: c.fn.toggle,
            toggle: function(i) {
                if (g(i) || typeof i === "boolean" || c.isFunction(i)) {
                    return this.__toggle.apply(this, arguments)
                } else {
                    var h = f.apply(this, arguments);
                    h.mode = "toggle";
                    return this.effect.call(this, h)
                }
            },
            cssUnit: function(h) {
                var i = this.css(h),
                    j = [];
                c.each(["em", "px", "%", "pt"], function(k, l) {
                    if (i.indexOf(l) > 0) {
                        j = [parseFloat(i), l]
                    }
                });
                return j
            }
        })
    })();
    (function() {
        var f = {};
        c.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(h, g) {
            f[g] = function(i) {
                return Math.pow(i, h + 2)
            }
        });
        c.extend(f, {
            Sine: function(g) {
                return 1 - Math.cos(g * Math.PI / 2)
            },
            Circ: function(g) {
                return 1 - Math.sqrt(1 - g * g)
            },
            Elastic: function(g) {
                return g === 0 || g === 1 ? g : -Math.pow(2, 8 * (g - 1)) * Math.sin(((g - 1) * 80 - 7.5) * Math.PI / 15)
            },
            Back: function(g) {
                return g * g * (3 * g - 2)
            },
            Bounce: function(i) {
                var g, h = 4;
                while (i < ((g = Math.pow(2, --h)) - 1) / 11) {}
                return 1 / Math.pow(4, 3 - h) - 7.5625 * Math.pow((g * 3 - 2) / 22 - i, 2)
            }
        });
        c.each(f, function(h, g) {
            c.easing["easeIn" + h] = g;
            c.easing["easeOut" + h] = function(i) {
                return 1 - g(1 - i)
            };
            c.easing["easeInOut" + h] = function(i) {
                return i < 0.5 ? g(i * 2) / 2 : 1 - g(i * -2 + 2) / 2
            }
        })
    })()
})(jQuery));
(function(c, e) {
    var b = /up|down|vertical/,
        d = /up|left|vertical|horizontal/;
    c.effects.effect.blind = function(h, n) {
        var i = c(this),
            r = ["position", "top", "bottom", "left", "right", "height", "width"],
            p = c.effects.setMode(i, h.mode || "hide"),
            s = h.direction || "up",
            k = b.test(s),
            j = k ? "height" : "width",
            q = k ? "top" : "left",
            u = d.test(s),
            m = {},
            t = p === "show",
            g, f, l;
        if (i.parent().is(".ui-effects-wrapper")) {
            c.effects.save(i.parent(), r)
        } else {
            c.effects.save(i, r)
        }
        i.show();
        g = c.effects.createWrapper(i).css({
            overflow: "hidden"
        });
        f = g[j]();
        l = parseFloat(g.css(q)) || 0;
        m[j] = t ? f : 0;
        if (!u) {
            i.css(k ? "bottom" : "right", 0).css(k ? "top" : "left", "auto").css({
                position: "absolute"
            });
            m[q] = t ? l : f + l
        }
        if (t) {
            g.css(j, 0);
            if (!u) {
                g.css(q, l + f)
            }
        }
        g.animate(m, {
            duration: h.duration,
            easing: h.easing,
            queue: false,
            complete: function() {
                if (p === "hide") {
                    i.hide()
                }
                c.effects.restore(i, r);
                c.effects.removeWrapper(i);
                n()
            }
        })
    }
})(jQuery);
(function(b, c) {
    b.effects.effect.bounce = function(n, m) {
        var d = b(this),
            e = ["position", "top", "bottom", "left", "right", "height", "width"],
            l = b.effects.setMode(d, n.mode || "effect"),
            k = l === "hide",
            w = l === "show",
            x = n.direction || "up",
            f = n.distance,
            j = n.times || 5,
            y = j * 2 + (w || k ? 1 : 0),
            v = n.duration / y,
            q = n.easing,
            g = (x === "up" || x === "down") ? "top" : "left",
            p = (x === "up" || x === "left"),
            u, h, t, r = d.queue(),
            s = r.length;
        if (w || k) {
            e.push("opacity")
        }
        b.effects.save(d, e);
        d.show();
        b.effects.createWrapper(d);
        if (!f) {
            f = d[g === "top" ? "outerHeight" : "outerWidth"]() / 3
        }
        if (w) {
            t = {
                opacity: 1
            };
            t[g] = 0;
            d.css("opacity", 0).css(g, p ? -f * 2 : f * 2).animate(t, v, q)
        }
        if (k) {
            f = f / Math.pow(2, j - 1)
        }
        t = {};
        t[g] = 0;
        for (u = 0; u < j; u++) {
            h = {};
            h[g] = (p ? "-=" : "+=") + f;
            d.animate(h, v, q).animate(t, v, q);
            f = k ? f * 2 : f / 2
        }
        if (k) {
            h = {
                opacity: 0
            };
            h[g] = (p ? "-=" : "+=") + f;
            d.animate(h, v, q)
        }
        d.queue(function() {
            if (k) {
                d.hide()
            }
            b.effects.restore(d, e);
            b.effects.removeWrapper(d);
            m()
        });
        if (s > 1) {
            r.splice.apply(r, [1, 0].concat(r.splice(s, y + 1)))
        }
        d.dequeue()
    }
})(jQuery);
(function(b, c) {
    b.effects.effect.clip = function(g, j) {
        var h = b(this),
            n = ["position", "top", "bottom", "left", "right", "height", "width"],
            m = b.effects.setMode(h, g.mode || "hide"),
            q = m === "show",
            p = g.direction || "vertical",
            l = p === "vertical",
            r = l ? "height" : "width",
            k = l ? "top" : "left",
            i = {},
            e, f, d;
        b.effects.save(h, n);
        h.show();
        e = b.effects.createWrapper(h).css({
            overflow: "hidden"
        });
        f = (h[0].tagName === "IMG") ? e : h;
        d = f[r]();
        if (q) {
            f.css(r, 0);
            f.css(k, d / 2)
        }
        i[r] = q ? d : 0;
        i[k] = q ? 0 : d / 2;
        f.animate(i, {
            queue: false,
            duration: g.duration,
            easing: g.easing,
            complete: function() {
                if (!q) {
                    h.hide()
                }
                b.effects.restore(h, n);
                b.effects.removeWrapper(h);
                j()
            }
        })
    }
})(jQuery);
(function(b, c) {
    b.effects.effect.drop = function(e, i) {
        var f = b(this),
            k = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
            j = b.effects.setMode(f, e.mode || "hide"),
            m = j === "show",
            l = e.direction || "left",
            g = (l === "up" || l === "down") ? "top" : "left",
            n = (l === "up" || l === "left") ? "pos" : "neg",
            h = {
                opacity: m ? 1 : 0
            },
            d;
        b.effects.save(f, k);
        f.show();
        b.effects.createWrapper(f);
        d = e.distance || f[g === "top" ? "outerHeight" : "outerWidth"](true) / 2;
        if (m) {
            f.css("opacity", 0).css(g, n === "pos" ? -d : d)
        }
        h[g] = (m ? (n === "pos" ? "+=" : "-=") : (n === "pos" ? "-=" : "+=")) + d;
        f.animate(h, {
            queue: false,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                if (j === "hide") {
                    f.hide()
                }
                b.effects.restore(f, k);
                b.effects.removeWrapper(f);
                i()
            }
        })
    }
})(jQuery);
(function(b, c) {
    b.effects.effect.explode = function(t, s) {
        var l = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3,
            e = l,
            d = b(this),
            n = b.effects.setMode(d, t.mode || "hide"),
            x = n === "show",
            h = d.show().css("visibility", "hidden").offset(),
            u = Math.ceil(d.outerWidth() / e),
            r = Math.ceil(d.outerHeight() / l),
            k = [],
            w, v, f, q, p, m;

        function y() {
            k.push(this);
            if (k.length === l * e) {
                g()
            }
        }
        for (w = 0; w < l; w++) {
            q = h.top + w * r;
            m = w - (l - 1) / 2;
            for (v = 0; v < e; v++) {
                f = h.left + v * u;
                p = v - (e - 1) / 2;
                d.clone().appendTo("body").wrap("<div></div>").css({
                    position: "absolute",
                    visibility: "visible",
                    left: -v * u,
                    top: -w * r
                }).parent().addClass("ui-effects-explode").css({
                    position: "absolute",
                    overflow: "hidden",
                    width: u,
                    height: r,
                    left: f + (x ? p * u : 0),
                    top: q + (x ? m * r : 0),
                    opacity: x ? 0 : 1
                }).animate({
                    left: f + (x ? 0 : p * u),
                    top: q + (x ? 0 : m * r),
                    opacity: x ? 1 : 0
                }, t.duration || 500, t.easing, y)
            }
        }

        function g() {
            d.css({
                visibility: "visible"
            });
            b(k).remove();
            if (!x) {
                d.hide()
            }
            s()
        }
    }
})(jQuery);
(function(b, c) {
    b.effects.effect.fade = function(g, d) {
        var e = b(this),
            f = b.effects.setMode(e, g.mode || "toggle");
        e.animate({
            opacity: f
        }, {
            queue: false,
            duration: g.duration,
            easing: g.easing,
            complete: d
        })
    }
})(jQuery);
(function(b, c) {
    b.effects.effect.fold = function(f, j) {
        var g = b(this),
            p = ["position", "top", "bottom", "left", "right", "height", "width"],
            l = b.effects.setMode(g, f.mode || "hide"),
            s = l === "show",
            m = l === "hide",
            u = f.size || 15,
            n = /([0-9]+)%/.exec(u),
            t = !!f.horizFirst,
            k = s !== t,
            h = k ? ["width", "height"] : ["height", "width"],
            i = f.duration / 2,
            e, d, r = {},
            q = {};
        b.effects.save(g, p);
        g.show();
        e = b.effects.createWrapper(g).css({
            overflow: "hidden"
        });
        d = k ? [e.width(), e.height()] : [e.height(), e.width()];
        if (n) {
            u = parseInt(n[1], 10) / 100 * d[m ? 0 : 1]
        }
        if (s) {
            e.css(t ? {
                height: 0,
                width: u
            } : {
                height: u,
                width: 0
            })
        }
        r[h[0]] = s ? d[0] : u;
        q[h[1]] = s ? d[1] : 0;
        e.animate(r, i, f.easing).animate(q, i, f.easing, function() {
            if (m) {
                g.hide()
            }
            b.effects.restore(g, p);
            b.effects.removeWrapper(g);
            j()
        })
    }
})(jQuery);
(function(b, c) {
    b.effects.effect.highlight = function(i, d) {
        var f = b(this),
            e = ["backgroundImage", "backgroundColor", "opacity"],
            h = b.effects.setMode(f, i.mode || "show"),
            g = {
                backgroundColor: f.css("backgroundColor")
            };
        if (h === "hide") {
            g.opacity = 0
        }
        b.effects.save(f, e);
        f.show().css({
            backgroundImage: "none",
            backgroundColor: i.color || "#ffff99"
        }).animate(g, {
            queue: false,
            duration: i.duration,
            easing: i.easing,
            complete: function() {
                if (h === "hide") {
                    f.hide()
                }
                b.effects.restore(f, e);
                d()
            }
        })
    }
})(jQuery);
(function(b, c) {
    b.effects.effect.pulsate = function(d, h) {
        var f = b(this),
            l = b.effects.setMode(f, d.mode || "show"),
            q = l === "show",
            m = l === "hide",
            r = (q || l === "hide"),
            n = ((d.times || 5) * 2) + (r ? 1 : 0),
            g = d.duration / n,
            p = 0,
            k = f.queue(),
            e = k.length,
            j;
        if (q || !f.is(":visible")) {
            f.css("opacity", 0).show();
            p = 1
        }
        for (j = 1; j < n; j++) {
            f.animate({
                opacity: p
            }, g, d.easing);
            p = 1 - p
        }
        f.animate({
            opacity: p
        }, g, d.easing);
        f.queue(function() {
            if (m) {
                f.hide()
            }
            h()
        });
        if (e > 1) {
            k.splice.apply(k, [1, 0].concat(k.splice(e, n + 1)))
        }
        f.dequeue()
    }
})(jQuery);
(function(b, c) {
    b.effects.effect.puff = function(k, d) {
        var i = b(this),
            j = b.effects.setMode(i, k.mode || "hide"),
            g = j === "hide",
            h = parseInt(k.percent, 10) || 150,
            f = h / 100,
            e = {
                height: i.height(),
                width: i.width(),
                outerHeight: i.outerHeight(),
                outerWidth: i.outerWidth()
            };
        b.extend(k, {
            effect: "scale",
            queue: false,
            fade: true,
            mode: j,
            complete: d,
            percent: g ? h : 100,
            from: g ? e : {
                height: e.height * f,
                width: e.width * f,
                outerHeight: e.outerHeight * f,
                outerWidth: e.outerWidth * f
            }
        });
        i.effect(k)
    };
    b.effects.effect.scale = function(d, g) {
        var e = b(this),
            m = b.extend(true, {}, d),
            h = b.effects.setMode(e, d.mode || "effect"),
            i = parseInt(d.percent, 10) || (parseInt(d.percent, 10) === 0 ? 0 : (h === "hide" ? 0 : 100)),
            k = d.direction || "both",
            l = d.origin,
            f = {
                height: e.height(),
                width: e.width(),
                outerHeight: e.outerHeight(),
                outerWidth: e.outerWidth()
            },
            j = {
                y: k !== "horizontal" ? (i / 100) : 1,
                x: k !== "vertical" ? (i / 100) : 1
            };
        m.effect = "size";
        m.queue = false;
        m.complete = g;
        if (h !== "effect") {
            m.origin = l || ["middle", "center"];
            m.restore = true
        }
        m.from = d.from || (h === "show" ? {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        } : f);
        m.to = {
            height: f.height * j.y,
            width: f.width * j.x,
            outerHeight: f.outerHeight * j.y,
            outerWidth: f.outerWidth * j.x
        };
        if (m.fade) {
            if (h === "show") {
                m.from.opacity = 0;
                m.to.opacity = 1
            }
            if (h === "hide") {
                m.from.opacity = 1;
                m.to.opacity = 0
            }
        }
        e.effect(m)
    };
    b.effects.effect.size = function(m, l) {
        var r, j, k, d = b(this),
            q = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
            p = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
            n = ["width", "height", "overflow"],
            h = ["fontSize"],
            t = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
            e = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
            i = b.effects.setMode(d, m.mode || "effect"),
            s = m.restore || i !== "effect",
            w = m.scale || "both",
            u = m.origin || ["middle", "center"],
            v = d.css("position"),
            f = s ? q : p,
            g = {
                height: 0,
                width: 0,
                outerHeight: 0,
                outerWidth: 0
            };
        if (i === "show") {
            d.show()
        }
        r = {
            height: d.height(),
            width: d.width(),
            outerHeight: d.outerHeight(),
            outerWidth: d.outerWidth()
        };
        if (m.mode === "toggle" && i === "show") {
            d.from = m.to || g;
            d.to = m.from || r
        } else {
            d.from = m.from || (i === "show" ? g : r);
            d.to = m.to || (i === "hide" ? g : r)
        }
        k = {
            from: {
                y: d.from.height / r.height,
                x: d.from.width / r.width
            },
            to: {
                y: d.to.height / r.height,
                x: d.to.width / r.width
            }
        };
        if (w === "box" || w === "both") {
            if (k.from.y !== k.to.y) {
                f = f.concat(t);
                d.from = b.effects.setTransition(d, t, k.from.y, d.from);
                d.to = b.effects.setTransition(d, t, k.to.y, d.to)
            }
            if (k.from.x !== k.to.x) {
                f = f.concat(e);
                d.from = b.effects.setTransition(d, e, k.from.x, d.from);
                d.to = b.effects.setTransition(d, e, k.to.x, d.to)
            }
        }
        if (w === "content" || w === "both") {
            if (k.from.y !== k.to.y) {
                f = f.concat(h).concat(n);
                d.from = b.effects.setTransition(d, h, k.from.y, d.from);
                d.to = b.effects.setTransition(d, h, k.to.y, d.to)
            }
        }
        b.effects.save(d, f);
        d.show();
        b.effects.createWrapper(d);
        d.css("overflow", "hidden").css(d.from);
        if (u) {
            j = b.effects.getBaseline(u, r);
            d.from.top = (r.outerHeight - d.outerHeight()) * j.y;
            d.from.left = (r.outerWidth - d.outerWidth()) * j.x;
            d.to.top = (r.outerHeight - d.to.outerHeight) * j.y;
            d.to.left = (r.outerWidth - d.to.outerWidth) * j.x
        }
        d.css(d.from);
        if (w === "content" || w === "both") {
            t = t.concat(["marginTop", "marginBottom"]).concat(h);
            e = e.concat(["marginLeft", "marginRight"]);
            n = q.concat(t).concat(e);
            d.find("*[width]").each(function() {
                var x = b(this),
                    o = {
                        height: x.height(),
                        width: x.width(),
                        outerHeight: x.outerHeight(),
                        outerWidth: x.outerWidth()
                    };
                if (s) {
                    b.effects.save(x, n)
                }
                x.from = {
                    height: o.height * k.from.y,
                    width: o.width * k.from.x,
                    outerHeight: o.outerHeight * k.from.y,
                    outerWidth: o.outerWidth * k.from.x
                };
                x.to = {
                    height: o.height * k.to.y,
                    width: o.width * k.to.x,
                    outerHeight: o.height * k.to.y,
                    outerWidth: o.width * k.to.x
                };
                if (k.from.y !== k.to.y) {
                    x.from = b.effects.setTransition(x, t, k.from.y, x.from);
                    x.to = b.effects.setTransition(x, t, k.to.y, x.to)
                }
                if (k.from.x !== k.to.x) {
                    x.from = b.effects.setTransition(x, e, k.from.x, x.from);
                    x.to = b.effects.setTransition(x, e, k.to.x, x.to)
                }
                x.css(x.from);
                x.animate(x.to, m.duration, m.easing, function() {
                    if (s) {
                        b.effects.restore(x, n)
                    }
                })
            })
        }
        d.animate(d.to, {
            queue: false,
            duration: m.duration,
            easing: m.easing,
            complete: function() {
                if (d.to.opacity === 0) {
                    d.css("opacity", d.from.opacity)
                }
                if (i === "hide") {
                    d.hide()
                }
                b.effects.restore(d, f);
                if (!s) {
                    if (v === "static") {
                        d.css({
                            position: "relative",
                            top: d.to.top,
                            left: d.to.left
                        })
                    } else {
                        b.each(["top", "left"], function(o, x) {
                            d.css(x, function(z, B) {
                                var A = parseInt(B, 10),
                                    y = o ? d.to.left : d.to.top;
                                if (B === "auto") {
                                    return y + "px"
                                }
                                return A + y + "px"
                            })
                        })
                    }
                }
                b.effects.removeWrapper(d);
                l()
            }
        })
    }
})(jQuery);
(function(b, c) {
    b.effects.effect.shake = function(m, l) {
        var d = b(this),
            e = ["position", "top", "bottom", "left", "right", "height", "width"],
            k = b.effects.setMode(d, m.mode || "effect"),
            v = m.direction || "left",
            f = m.distance || 20,
            j = m.times || 3,
            w = j * 2 + 1,
            r = Math.round(m.duration / w),
            h = (v === "up" || v === "down") ? "top" : "left",
            g = (v === "up" || v === "left"),
            u = {},
            t = {},
            s = {},
            q, n = d.queue(),
            p = n.length;
        b.effects.save(d, e);
        d.show();
        b.effects.createWrapper(d);
        u[h] = (g ? "-=" : "+=") + f;
        t[h] = (g ? "+=" : "-=") + f * 2;
        s[h] = (g ? "-=" : "+=") + f * 2;
        d.animate(u, r, m.easing);
        for (q = 1; q < j; q++) {
            d.animate(t, r, m.easing).animate(s, r, m.easing)
        }
        d.animate(t, r, m.easing).animate(u, r / 2, m.easing).queue(function() {
            if (k === "hide") {
                d.hide()
            }
            b.effects.restore(d, e);
            b.effects.removeWrapper(d);
            l()
        });
        if (p > 1) {
            n.splice.apply(n, [1, 0].concat(n.splice(p, w + 1)))
        }
        d.dequeue()
    }
})(jQuery);
(function(b, c) {
    b.effects.effect.slide = function(f, j) {
        var g = b(this),
            l = ["position", "top", "bottom", "left", "right", "width", "height"],
            k = b.effects.setMode(g, f.mode || "show"),
            n = k === "show",
            m = f.direction || "left",
            h = (m === "up" || m === "down") ? "top" : "left",
            e = (m === "up" || m === "left"),
            d, i = {};
        b.effects.save(g, l);
        g.show();
        d = f.distance || g[h === "top" ? "outerHeight" : "outerWidth"](true);
        b.effects.createWrapper(g).css({
            overflow: "hidden"
        });
        if (n) {
            g.css(h, e ? (isNaN(d) ? "-" + d : -d) : d)
        }
        i[h] = (n ? (e ? "+=" : "-=") : (e ? "-=" : "+=")) + d;
        g.animate(i, {
            queue: false,
            duration: f.duration,
            easing: f.easing,
            complete: function() {
                if (k === "hide") {
                    g.hide()
                }
                b.effects.restore(g, l);
                b.effects.removeWrapper(g);
                j()
            }
        })
    }
})(jQuery);
(function(b, c) {
    b.effects.effect.transfer = function(e, i) {
        var g = b(this),
            l = b(e.to),
            p = l.css("position") === "fixed",
            k = b("body"),
            m = p ? k.scrollTop() : 0,
            n = p ? k.scrollLeft() : 0,
            d = l.offset(),
            h = {
                top: d.top - m,
                left: d.left - n,
                height: l.innerHeight(),
                width: l.innerWidth()
            },
            j = g.offset(),
            f = b('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(e.className).css({
                top: j.top - m,
                left: j.left - n,
                height: g.innerHeight(),
                width: g.innerWidth(),
                position: p ? "fixed" : "absolute"
            }).animate(h, e.duration, e.easing, function() {
                f.remove();
                i()
            })
    }
})(jQuery);
(function(c, d) {
    var b = false;
    c.widget("ui.menu", {
        version: "1.9.2",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-carat-1-e"
            },
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element;
            this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            }).bind("click" + this.eventNamespace, c.proxy(function(e) {
                if (this.options.disabled) {
                    e.preventDefault()
                }
            }, this));
            if (this.options.disabled) {
                this.element.addClass("ui-state-disabled").attr("aria-disabled", "true")
            }
            this._on({
                "mousedown .ui-menu-item > a": function(e) {
                    e.preventDefault()
                },
                "click .ui-state-disabled > a": function(e) {
                    e.preventDefault()
                },
                "click .ui-menu-item:has(a)": function(e) {
                    var f = c(e.target).closest(".ui-menu-item");
                    if (!b && f.not(".ui-state-disabled").length) {
                        b = true;
                        this.select(e);
                        if (f.has(".ui-menu").length) {
                            this.expand(e)
                        } else {
                            if (!this.element.is(":focus")) {
                                this.element.trigger("focus", [true]);
                                if (this.active && this.active.parents(".ui-menu").length === 1) {
                                    clearTimeout(this.timer)
                                }
                            }
                        }
                    }
                },
                "mouseenter .ui-menu-item": function(e) {
                    var f = c(e.currentTarget);
                    f.siblings().children(".ui-state-active").removeClass("ui-state-active");
                    this.focus(e, f)
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(g, e) {
                    var f = this.active || this.element.children(".ui-menu-item").eq(0);
                    if (!e) {
                        this.focus(g, f)
                    }
                },
                blur: function(e) {
                    this._delay(function() {
                        if (!c.contains(this.element[0], this.document[0].activeElement)) {
                            this.collapseAll(e)
                        }
                    })
                },
                keydown: "_keydown"
            });
            this.refresh();
            this._on(this.document, {
                click: function(e) {
                    if (!c(e.target).closest(".ui-menu").length) {
                        this.collapseAll(e)
                    }
                    b = false
                }
            })
        },
        _destroy: function() {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").andSelf().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
            this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                var e = c(this);
                if (e.data("ui-menu-submenu-carat")) {
                    e.remove()
                }
            });
            this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },
        _keydown: function(k) {
            var f, j, l, i, h, e = true;

            function g(m) {
                return m.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            }
            switch (k.keyCode) {
                case c.ui.keyCode.PAGE_UP:
                    this.previousPage(k);
                    break;
                case c.ui.keyCode.PAGE_DOWN:
                    this.nextPage(k);
                    break;
                case c.ui.keyCode.HOME:
                    this._move("first", "first", k);
                    break;
                case c.ui.keyCode.END:
                    this._move("last", "last", k);
                    break;
                case c.ui.keyCode.UP:
                    this.previous(k);
                    break;
                case c.ui.keyCode.DOWN:
                    this.next(k);
                    break;
                case c.ui.keyCode.LEFT:
                    this.collapse(k);
                    break;
                case c.ui.keyCode.RIGHT:
                    if (this.active && !this.active.is(".ui-state-disabled")) {
                        this.expand(k)
                    }
                    break;
                case c.ui.keyCode.ENTER:
                case c.ui.keyCode.SPACE:
                    this._activate(k);
                    break;
                case c.ui.keyCode.ESCAPE:
                    this.collapse(k);
                    break;
                default:
                    e = false;
                    j = this.previousFilter || "";
                    l = String.fromCharCode(k.keyCode);
                    i = false;
                    clearTimeout(this.filterTimer);
                    if (l === j) {
                        i = true
                    } else {
                        l = j + l
                    }
                    h = new RegExp("^" + g(l), "i");
                    f = this.activeMenu.children(".ui-menu-item").filter(function() {
                        return h.test(c(this).children("a").text())
                    });
                    f = i && f.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : f;
                    if (!f.length) {
                        l = String.fromCharCode(k.keyCode);
                        h = new RegExp("^" + g(l), "i");
                        f = this.activeMenu.children(".ui-menu-item").filter(function() {
                            return h.test(c(this).children("a").text())
                        })
                    }
                    if (f.length) {
                        this.focus(k, f);
                        if (f.length > 1) {
                            this.previousFilter = l;
                            this.filterTimer = this._delay(function() {
                                delete this.previousFilter
                            }, 1000)
                        } else {
                            delete this.previousFilter
                        }
                    } else {
                        delete this.previousFilter
                    }
            }
            if (e) {
                k.preventDefault()
            }
        },
        _activate: function(e) {
            if (!this.active.is(".ui-state-disabled")) {
                if (this.active.children("a[aria-haspopup='true']").length) {
                    this.expand(e)
                } else {
                    this.select(e)
                }
            }
        },
        refresh: function() {
            var g, f = this.options.icons.submenu,
                e = this.element.find(this.options.menus);
            e.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var j = c(this),
                    i = j.prev("a"),
                    h = c("<span>").addClass("ui-menu-icon ui-icon " + f).data("ui-menu-submenu-carat", true);
                i.attr("aria-haspopup", "true").prepend(h);
                j.attr("aria-labelledby", i.attr("id"))
            });
            g = e.add(this.element);
            g.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                tabIndex: -1,
                role: this._itemRole()
            });
            g.children(":not(.ui-menu-item)").each(function() {
                var h = c(this);
                if (!/[^\-—–\s]/.test(h.text())) {
                    h.addClass("ui-widget-content ui-menu-divider")
                }
            });
            g.children(".ui-state-disabled").attr("aria-disabled", "true");
            if (this.active && !c.contains(this.element[0], this.active[0])) {
                this.blur()
            }
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role]
        },
        focus: function(f, e) {
            var h, g;
            this.blur(f, f && f.type === "focus");
            this._scrollIntoView(e);
            this.active = e.first();
            g = this.active.children("a").addClass("ui-state-focus");
            if (this.options.role) {
                this.element.attr("aria-activedescendant", g.attr("id"))
            }
            this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active");
            if (f && f.type === "keydown") {
                this._close()
            } else {
                this.timer = this._delay(function() {
                    this._close()
                }, this.delay)
            }
            h = e.children(".ui-menu");
            if (h.length && (/^mouse/.test(f.type))) {
                this._startOpening(h)
            }
            this.activeMenu = e.parent();
            this._trigger("focus", f, {
                item: e
            })
        },
        _scrollIntoView: function(h) {
            var k, g, i, e, f, j;
            if (this._hasScroll()) {
                k = parseFloat(c.css(this.activeMenu[0], "borderTopWidth")) || 0;
                g = parseFloat(c.css(this.activeMenu[0], "paddingTop")) || 0;
                i = h.offset().top - this.activeMenu.offset().top - k - g;
                e = this.activeMenu.scrollTop();
                f = this.activeMenu.height();
                j = h.height();
                if (i < 0) {
                    this.activeMenu.scrollTop(e + i)
                } else {
                    if (i + j > f) {
                        this.activeMenu.scrollTop(e + i - f + j)
                    }
                }
            }
        },
        blur: function(f, e) {
            if (!e) {
                clearTimeout(this.timer)
            }
            if (!this.active) {
                return
            }
            this.active.children("a").removeClass("ui-state-focus");
            this.active = null;
            this._trigger("blur", f, {
                item: this.active
            })
        },
        _startOpening: function(e) {
            clearTimeout(this.timer);
            if (e.attr("aria-hidden") !== "true") {
                return
            }
            this.timer = this._delay(function() {
                this._close();
                this._open(e)
            }, this.delay)
        },
        _open: function(f) {
            var e = c.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer);
            this.element.find(".ui-menu").not(f.parents(".ui-menu")).hide().attr("aria-hidden", "true");
            f.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(e)
        },
        collapseAll: function(f, e) {
            clearTimeout(this.timer);
            this.timer = this._delay(function() {
                var g = e ? this.element : c(f && f.target).closest(this.element.find(".ui-menu"));
                if (!g.length) {
                    g = this.element
                }
                this._close(g);
                this.blur(f);
                this.activeMenu = g
            }, this.delay)
        },
        _close: function(e) {
            if (!e) {
                e = this.active ? this.active.parent() : this.element
            }
            e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
        },
        collapse: function(f) {
            var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            if (e && e.length) {
                this._close();
                this.focus(f, e)
            }
        },
        expand: function(f) {
            var e = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
            if (e && e.length) {
                this._open(e.parent());
                this._delay(function() {
                    this.focus(f, e)
                })
            }
        },
        next: function(e) {
            this._move("next", "first", e)
        },
        previous: function(e) {
            this._move("prev", "last", e)
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function(h, f, g) {
            var e;
            if (this.active) {
                if (h === "first" || h === "last") {
                    e = this.active[h === "first" ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1)
                } else {
                    e = this.active[h + "All"](".ui-menu-item").eq(0)
                }
            }
            if (!e || !e.length || !this.active) {
                e = this.activeMenu.children(".ui-menu-item")[f]()
            }
            this.focus(g, e)
        },
        nextPage: function(g) {
            var f, h, e;
            if (!this.active) {
                this.next(g);
                return
            }
            if (this.isLastItem()) {
                return
            }
            if (this._hasScroll()) {
                h = this.active.offset().top;
                e = this.element.height();
                this.active.nextAll(".ui-menu-item").each(function() {
                    f = c(this);
                    return f.offset().top - h - e < 0
                });
                this.focus(g, f)
            } else {
                this.focus(g, this.activeMenu.children(".ui-menu-item")[!this.active ? "first" : "last"]())
            }
        },
        previousPage: function(g) {
            var f, h, e;
            if (!this.active) {
                this.next(g);
                return
            }
            if (this.isFirstItem()) {
                return
            }
            if (this._hasScroll()) {
                h = this.active.offset().top;
                e = this.element.height();
                this.active.prevAll(".ui-menu-item").each(function() {
                    f = c(this);
                    return f.offset().top - h + e > 0
                });
                this.focus(g, f)
            } else {
                this.focus(g, this.activeMenu.children(".ui-menu-item").first())
            }
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function(e) {
            this.active = this.active || c(e.target).closest(".ui-menu-item");
            var f = {
                item: this.active
            };
            if (!this.active.has(".ui-menu").length) {
                this.collapseAll(e, true)
            }
            this._trigger("select", e, f)
        }
    })
}(jQuery));
(function(b, c) {
    b.widget("ui.progressbar", {
        version: "1.9.2",
        options: {
            value: 0,
            max: 100
        },
        min: 0,
        _create: function() {
            this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                role: "progressbar",
                "aria-valuemin": this.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._value()
            });
            this.valueDiv = b("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);
            this.oldValue = this._value();
            this._refreshValue()
        },
        _destroy: function() {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
            this.valueDiv.remove()
        },
        value: function(d) {
            if (d === c) {
                return this._value()
            }
            this._setOption("value", d);
            return this
        },
        _setOption: function(d, e) {
            if (d === "value") {
                this.options.value = e;
                this._refreshValue();
                if (this._value() === this.options.max) {
                    this._trigger("complete")
                }
            }
            this._super(d, e)
        },
        _value: function() {
            var d = this.options.value;
            if (typeof d !== "number") {
                d = 0
            }
            return Math.min(this.options.max, Math.max(this.min, d))
        },
        _percentage: function() {
            return 100 * this._value() / this.options.max
        },
        _refreshValue: function() {
            var e = this.value(),
                d = this._percentage();
            if (this.oldValue !== e) {
                this.oldValue = e;
                this._trigger("change")
            }
            this.valueDiv.toggle(e > this.min).toggleClass("ui-corner-right", e === this.options.max).width(d.toFixed(0) + "%");
            this.element.attr("aria-valuenow", e)
        }
    })
})(jQuery);
(function(d, e) {
    d.widget("ui.resizable", d.ui.mouse, {
        version: "1.9.2",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: false,
            animate: false,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: false,
            autoHide: false,
            containment: false,
            ghost: false,
            grid: false,
            handles: "e,s,se",
            helper: false,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 1000
        },
        _create: function() {
            var j = this,
                l = this.options;
            this.element.addClass("ui-resizable");
            d.extend(this, {
                _aspectRatio: !!(l.aspectRatio),
                aspectRatio: l.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: l.helper || l.ghost || l.animate ? l.helper || "ui-resizable-helper" : null
            });
            if (this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)) {
                this.element.wrap(d('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left")
                }));
                this.element = this.element.parent().data("resizable", this.element.data("resizable"));
                this.elementIsWrapper = true;
                this.element.css({
                    marginLeft: this.originalElement.css("marginLeft"),
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom")
                });
                this.originalElement.css({
                    marginLeft: 0,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0
                });
                this.originalResizeStyle = this.originalElement.css("resize");
                this.originalElement.css("resize", "none");
                this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                }));
                this.originalElement.css({
                    margin: this.originalElement.css("margin")
                });
                this._proportionallyResize()
            }
            this.handles = l.handles || (!d(".ui-resizable-handle", this.element).length ? "e,s,se" : {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            });
            if (this.handles.constructor == String) {
                if (this.handles == "all") {
                    this.handles = "n,e,s,w,se,sw,ne,nw"
                }
                var m = this.handles.split(",");
                this.handles = {};
                for (var g = 0; g < m.length; g++) {
                    var k = d.trim(m[g]),
                        f = "ui-resizable-" + k;
                    var h = d('<div class="ui-resizable-handle ' + f + '"></div>');
                    h.css({
                        zIndex: l.zIndex
                    });
                    if ("se" == k) {
                        h.addClass("ui-icon ui-icon-gripsmall-diagonal-se")
                    }
                    this.handles[k] = ".ui-resizable-" + k;
                    this.element.append(h)
                }
            }
            this._renderAxis = function(r) {
                r = r || this.element;
                for (var o in this.handles) {
                    if (this.handles[o].constructor == String) {
                        this.handles[o] = d(this.handles[o], this.element).show()
                    }
                    if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
                        var p = d(this.handles[o], this.element),
                            q = 0;
                        q = /sw|ne|nw|se|n|s/.test(o) ? p.outerHeight() : p.outerWidth();
                        var n = ["padding", /ne|nw|n/.test(o) ? "Top" : /se|sw|s/.test(o) ? "Bottom" : /^e$/.test(o) ? "Right" : "Left"].join("");
                        r.css(n, q);
                        this._proportionallyResize()
                    }
                    if (!d(this.handles[o]).length) {
                        continue
                    }
                }
            };
            this._renderAxis(this.element);
            this._handles = d(".ui-resizable-handle", this.element).disableSelection();
            this._handles.mouseover(function() {
                if (!j.resizing) {
                    if (this.className) {
                        var i = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)
                    }
                    j.axis = i && i[1] ? i[1] : "se"
                }
            });
            if (l.autoHide) {
                this._handles.hide();
                d(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                    if (l.disabled) {
                        return
                    }
                    d(this).removeClass("ui-resizable-autohide");
                    j._handles.show()
                }).mouseleave(function() {
                    if (l.disabled) {
                        return
                    }
                    if (!j.resizing) {
                        d(this).addClass("ui-resizable-autohide");
                        j._handles.hide()
                    }
                })
            }
            this._mouseInit()
        },
        _destroy: function() {
            this._mouseDestroy();
            var f = function(h) {
                d(h).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            if (this.elementIsWrapper) {
                f(this.element);
                var g = this.element;
                this.originalElement.css({
                    position: g.css("position"),
                    width: g.outerWidth(),
                    height: g.outerHeight(),
                    top: g.css("top"),
                    left: g.css("left")
                }).insertAfter(g);
                g.remove()
            }
            this.originalElement.css("resize", this.originalResizeStyle);
            f(this.originalElement);
            return this
        },
        _mouseCapture: function(g) {
            var h = false;
            for (var f in this.handles) {
                if (d(this.handles[f])[0] == g.target) {
                    h = true
                }
            }
            return !this.options.disabled && h
        },
        _mouseStart: function(h) {
            var k = this.options,
                g = this.element.position(),
                f = this.element;
            this.resizing = true;
            this.documentScroll = {
                top: d(document).scrollTop(),
                left: d(document).scrollLeft()
            };
            if (f.is(".ui-draggable") || (/absolute/).test(f.css("position"))) {
                f.css({
                    position: "absolute",
                    top: g.top,
                    left: g.left
                })
            }
            this._renderProxy();
            var l = c(this.helper.css("left")),
                i = c(this.helper.css("top"));
            if (k.containment) {
                l += d(k.containment).scrollLeft() || 0;
                i += d(k.containment).scrollTop() || 0
            }
            this.offset = this.helper.offset();
            this.position = {
                left: l,
                top: i
            };
            this.size = this._helper ? {
                width: f.outerWidth(),
                height: f.outerHeight()
            } : {
                width: f.width(),
                height: f.height()
            };
            this.originalSize = this._helper ? {
                width: f.outerWidth(),
                height: f.outerHeight()
            } : {
                width: f.width(),
                height: f.height()
            };
            this.originalPosition = {
                left: l,
                top: i
            };
            this.sizeDiff = {
                width: f.outerWidth() - f.width(),
                height: f.outerHeight() - f.height()
            };
            this.originalMousePosition = {
                left: h.pageX,
                top: h.pageY
            };
            this.aspectRatio = (typeof k.aspectRatio == "number") ? k.aspectRatio : ((this.originalSize.width / this.originalSize.height) || 1);
            var j = d(".ui-resizable-" + this.axis).css("cursor");
            d("body").css("cursor", j == "auto" ? this.axis + "-resize" : j);
            f.addClass("ui-resizable-resizing");
            this._propagate("start", h);
            return true
        },
        _mouseDrag: function(f) {
            var h = this.helper,
                g = this.options,
                m = {},
                l = this,
                j = this.originalMousePosition,
                n = this.axis;
            var q = (f.pageX - j.left) || 0,
                p = (f.pageY - j.top) || 0;
            var i = this._change[n];
            if (!i) {
                return false
            }
            var k = i.apply(this, [f, q, p]);
            this._updateVirtualBoundaries(f.shiftKey);
            if (this._aspectRatio || f.shiftKey) {
                k = this._updateRatio(k, f)
            }
            k = this._respectSize(k, f);
            this._propagate("resize", f);
            h.css({
                top: this.position.top + "px",
                left: this.position.left + "px",
                width: this.size.width + "px",
                height: this.size.height + "px"
            });
            if (!this._helper && this._proportionallyResizeElements.length) {
                this._proportionallyResize()
            }
            this._updateCache(k);
            this._trigger("resize", f, this.ui());
            return false
        },
        _mouseStop: function(i) {
            this.resizing = false;
            var j = this.options,
                m = this;
            if (this._helper) {
                var h = this._proportionallyResizeElements,
                    f = h.length && (/textarea/i).test(h[0].nodeName),
                    g = f && d.ui.hasScroll(h[0], "left") ? 0 : m.sizeDiff.height,
                    l = f ? 0 : m.sizeDiff.width;
                var p = {
                        width: (m.helper.width() - l),
                        height: (m.helper.height() - g)
                    },
                    k = (parseInt(m.element.css("left"), 10) + (m.position.left - m.originalPosition.left)) || null,
                    n = (parseInt(m.element.css("top"), 10) + (m.position.top - m.originalPosition.top)) || null;
                if (!j.animate) {
                    this.element.css(d.extend(p, {
                        top: n,
                        left: k
                    }))
                }
                m.helper.height(m.size.height);
                m.helper.width(m.size.width);
                if (this._helper && !j.animate) {
                    this._proportionallyResize()
                }
            }
            d("body").css("cursor", "auto");
            this.element.removeClass("ui-resizable-resizing");
            this._propagate("stop", i);
            if (this._helper) {
                this.helper.remove()
            }
            return false
        },
        _updateVirtualBoundaries: function(h) {
            var k = this.options,
                j, i, g, l, f;
            f = {
                minWidth: b(k.minWidth) ? k.minWidth : 0,
                maxWidth: b(k.maxWidth) ? k.maxWidth : Infinity,
                minHeight: b(k.minHeight) ? k.minHeight : 0,
                maxHeight: b(k.maxHeight) ? k.maxHeight : Infinity
            };
            if (this._aspectRatio || h) {
                j = f.minHeight * this.aspectRatio;
                g = f.minWidth / this.aspectRatio;
                i = f.maxHeight * this.aspectRatio;
                l = f.maxWidth / this.aspectRatio;
                if (j > f.minWidth) {
                    f.minWidth = j
                }
                if (g > f.minHeight) {
                    f.minHeight = g
                }
                if (i < f.maxWidth) {
                    f.maxWidth = i
                }
                if (l < f.maxHeight) {
                    f.maxHeight = l
                }
            }
            this._vBoundaries = f
        },
        _updateCache: function(f) {
            var g = this.options;
            this.offset = this.helper.offset();
            if (b(f.left)) {
                this.position.left = f.left
            }
            if (b(f.top)) {
                this.position.top = f.top
            }
            if (b(f.height)) {
                this.size.height = f.height
            }
            if (b(f.width)) {
                this.size.width = f.width
            }
        },
        _updateRatio: function(i, h) {
            var j = this.options,
                k = this.position,
                g = this.size,
                f = this.axis;
            if (b(i.height)) {
                i.width = (i.height * this.aspectRatio)
            } else {
                if (b(i.width)) {
                    i.height = (i.width / this.aspectRatio)
                }
            }
            if (f == "sw") {
                i.left = k.left + (g.width - i.width);
                i.top = null
            }
            if (f == "nw") {
                i.top = k.top + (g.height - i.height);
                i.left = k.left + (g.width - i.width)
            }
            return i
        },
        _respectSize: function(m, h) {
            var k = this.helper,
                j = this._vBoundaries,
                s = this._aspectRatio || h.shiftKey,
                r = this.axis,
                u = b(m.width) && j.maxWidth && (j.maxWidth < m.width),
                n = b(m.height) && j.maxHeight && (j.maxHeight < m.height),
                i = b(m.width) && j.minWidth && (j.minWidth > m.width),
                t = b(m.height) && j.minHeight && (j.minHeight > m.height);
            if (i) {
                m.width = j.minWidth
            }
            if (t) {
                m.height = j.minHeight
            }
            if (u) {
                m.width = j.maxWidth
            }
            if (n) {
                m.height = j.maxHeight
            }
            var g = this.originalPosition.left + this.originalSize.width,
                q = this.position.top + this.size.height;
            var l = /sw|nw|w/.test(r),
                f = /nw|ne|n/.test(r);
            if (i && l) {
                m.left = g - j.minWidth
            }
            if (u && l) {
                m.left = g - j.maxWidth
            }
            if (t && f) {
                m.top = q - j.minHeight
            }
            if (n && f) {
                m.top = q - j.maxHeight
            }
            var p = !m.width && !m.height;
            if (p && !m.left && m.top) {
                m.top = null
            } else {
                if (p && !m.top && m.left) {
                    m.left = null
                }
            }
            return m
        },
        _proportionallyResize: function() {
            var l = this.options;
            if (!this._proportionallyResizeElements.length) {
                return
            }
            var h = this.helper || this.element;
            for (var g = 0; g < this._proportionallyResizeElements.length; g++) {
                var j = this._proportionallyResizeElements[g];
                if (!this.borderDif) {
                    var f = [j.css("borderTopWidth"), j.css("borderRightWidth"), j.css("borderBottomWidth"), j.css("borderLeftWidth")],
                        k = [j.css("paddingTop"), j.css("paddingRight"), j.css("paddingBottom"), j.css("paddingLeft")];
                    this.borderDif = d.map(f, function(m, o) {
                        var n = parseInt(m, 10) || 0,
                            p = parseInt(k[o], 10) || 0;
                        return n + p
                    })
                }
                j.css({
                    height: (h.height() - this.borderDif[0] - this.borderDif[2]) || 0,
                    width: (h.width() - this.borderDif[1] - this.borderDif[3]) || 0
                })
            }
        },
        _renderProxy: function() {
            var f = this.element,
                i = this.options;
            this.elementOffset = f.offset();
            if (this._helper) {
                this.helper = this.helper || d('<div style="overflow:hidden;"></div>');
                var g = (d.ui.ie6 ? 1 : 0),
                    h = (d.ui.ie6 ? 2 : -1);
                this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() + h,
                    height: this.element.outerHeight() + h,
                    position: "absolute",
                    left: this.elementOffset.left - g + "px",
                    top: this.elementOffset.top - g + "px",
                    zIndex: ++i.zIndex
                });
                this.helper.appendTo("body").disableSelection()
            } else {
                this.helper = this.element
            }
        },
        _change: {
            e: function(h, g, f) {
                return {
                    width: this.originalSize.width + g
                }
            },
            w: function(i, g, f) {
                var k = this.options,
                    h = this.originalSize,
                    j = this.originalPosition;
                return {
                    left: j.left + g,
                    width: h.width - g
                }
            },
            n: function(i, g, f) {
                var k = this.options,
                    h = this.originalSize,
                    j = this.originalPosition;
                return {
                    top: j.top + f,
                    height: h.height - f
                }
            },
            s: function(h, g, f) {
                return {
                    height: this.originalSize.height + f
                }
            },
            se: function(h, g, f) {
                return d.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [h, g, f]))
            },
            sw: function(h, g, f) {
                return d.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [h, g, f]))
            },
            ne: function(h, g, f) {
                return d.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [h, g, f]))
            },
            nw: function(h, g, f) {
                return d.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [h, g, f]))
            }
        },
        _propagate: function(g, f) {
            d.ui.plugin.call(this, g, [f, this.ui()]);
            (g != "resize" && this._trigger(g, f, this.ui()))
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    });
    d.ui.plugin.add("resizable", "alsoResize", {
        start: function(g, h) {
            var f = d(this).data("resizable"),
                j = f.options;
            var i = function(k) {
                d(k).each(function() {
                    var l = d(this);
                    l.data("resizable-alsoresize", {
                        width: parseInt(l.width(), 10),
                        height: parseInt(l.height(), 10),
                        left: parseInt(l.css("left"), 10),
                        top: parseInt(l.css("top"), 10)
                    })
                })
            };
            if (typeof(j.alsoResize) == "object" && !j.alsoResize.parentNode) {
                if (j.alsoResize.length) {
                    j.alsoResize = j.alsoResize[0];
                    i(j.alsoResize)
                } else {
                    d.each(j.alsoResize, function(k) {
                        i(k)
                    })
                }
            } else {
                i(j.alsoResize)
            }
        },
        resize: function(h, j) {
            var g = d(this).data("resizable"),
                k = g.options,
                i = g.originalSize,
                m = g.originalPosition;
            var l = {
                    height: (g.size.height - i.height) || 0,
                    width: (g.size.width - i.width) || 0,
                    top: (g.position.top - m.top) || 0,
                    left: (g.position.left - m.left) || 0
                },
                f = function(n, o) {
                    d(n).each(function() {
                        var r = d(this),
                            s = d(this).data("resizable-alsoresize"),
                            q = {},
                            p = o && o.length ? o : r.parents(j.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                        d.each(p, function(t, v) {
                            var u = (s[v] || 0) + (l[v] || 0);
                            if (u && u >= 0) {
                                q[v] = u || null
                            }
                        });
                        r.css(q)
                    })
                };
            if (typeof(k.alsoResize) == "object" && !k.alsoResize.nodeType) {
                d.each(k.alsoResize, function(n, o) {
                    f(n, o)
                })
            } else {
                f(k.alsoResize)
            }
        },
        stop: function(f, g) {
            d(this).removeData("resizable-alsoresize")
        }
    });
    d.ui.plugin.add("resizable", "animate", {
        stop: function(j, q) {
            var n = d(this).data("resizable"),
                k = n.options;
            var i = n._proportionallyResizeElements,
                f = i.length && (/textarea/i).test(i[0].nodeName),
                g = f && d.ui.hasScroll(i[0], "left") ? 0 : n.sizeDiff.height,
                m = f ? 0 : n.sizeDiff.width;
            var h = {
                    width: (n.size.width - m),
                    height: (n.size.height - g)
                },
                l = (parseInt(n.element.css("left"), 10) + (n.position.left - n.originalPosition.left)) || null,
                p = (parseInt(n.element.css("top"), 10) + (n.position.top - n.originalPosition.top)) || null;
            n.element.animate(d.extend(h, p && l ? {
                top: p,
                left: l
            } : {}), {
                duration: k.animateDuration,
                easing: k.animateEasing,
                step: function() {
                    var o = {
                        width: parseInt(n.element.css("width"), 10),
                        height: parseInt(n.element.css("height"), 10),
                        top: parseInt(n.element.css("top"), 10),
                        left: parseInt(n.element.css("left"), 10)
                    };
                    if (i && i.length) {
                        d(i[0]).css({
                            width: o.width,
                            height: o.height
                        })
                    }
                    n._updateCache(o);
                    n._propagate("resize", j)
                }
            })
        }
    });
    d.ui.plugin.add("resizable", "containment", {
        start: function(g, t) {
            var r = d(this).data("resizable"),
                k = r.options,
                m = r.element;
            var h = k.containment,
                l = (h instanceof d) ? h.get(0) : (/parent/.test(h)) ? m.parent().get(0) : h;
            if (!l) {
                return
            }
            r.containerElement = d(l);
            if (/document/.test(h) || h == document) {
                r.containerOffset = {
                    left: 0,
                    top: 0
                };
                r.containerPosition = {
                    left: 0,
                    top: 0
                };
                r.parentData = {
                    element: d(document),
                    left: 0,
                    top: 0,
                    width: d(document).width(),
                    height: d(document).height() || document.body.parentNode.scrollHeight
                }
            } else {
                var q = d(l),
                    j = [];
                d(["Top", "Right", "Left", "Bottom"]).each(function(p, o) {
                    j[p] = c(q.css("padding" + o))
                });
                r.containerOffset = q.offset();
                r.containerPosition = q.position();
                r.containerSize = {
                    height: (q.innerHeight() - j[3]),
                    width: (q.innerWidth() - j[1])
                };
                var s = r.containerOffset,
                    f = r.containerSize.height,
                    n = r.containerSize.width,
                    i = (d.ui.hasScroll(l, "left") ? l.scrollWidth : n),
                    u = (d.ui.hasScroll(l) ? l.scrollHeight : f);
                r.parentData = {
                    element: l,
                    left: s.left,
                    top: s.top,
                    width: i,
                    height: u
                }
            }
        },
        resize: function(h, s) {
            var n = d(this).data("resizable"),
                j = n.options,
                g = n.containerSize,
                r = n.containerOffset,
                p = n.size,
                q = n.position,
                t = n._aspectRatio || h.shiftKey,
                f = {
                    top: 0,
                    left: 0
                },
                i = n.containerElement;
            if (i[0] != document && (/static/).test(i.css("position"))) {
                f = r
            }
            if (q.left < (n._helper ? r.left : 0)) {
                n.size.width = n.size.width + (n._helper ? (n.position.left - r.left) : (n.position.left - f.left));
                if (t) {
                    n.size.height = n.size.width / n.aspectRatio
                }
                n.position.left = j.helper ? r.left : 0
            }
            if (q.top < (n._helper ? r.top : 0)) {
                n.size.height = n.size.height + (n._helper ? (n.position.top - r.top) : n.position.top);
                if (t) {
                    n.size.width = n.size.height * n.aspectRatio
                }
                n.position.top = n._helper ? r.top : 0
            }
            n.offset.left = n.parentData.left + n.position.left;
            n.offset.top = n.parentData.top + n.position.top;
            var m = Math.abs((n._helper ? n.offset.left - f.left : (n.offset.left - f.left)) + n.sizeDiff.width),
                u = Math.abs((n._helper ? n.offset.top - f.top : (n.offset.top - r.top)) + n.sizeDiff.height);
            var l = n.containerElement.get(0) == n.element.parent().get(0),
                k = /relative|absolute/.test(n.containerElement.css("position"));
            if (l && k) {
                m -= n.parentData.left
            }
            if (m + n.size.width >= n.parentData.width) {
                n.size.width = n.parentData.width - m;
                if (t) {
                    n.size.height = n.size.width / n.aspectRatio
                }
            }
            if (u + n.size.height >= n.parentData.height) {
                n.size.height = n.parentData.height - u;
                if (t) {
                    n.size.width = n.size.height * n.aspectRatio
                }
            }
        },
        stop: function(g, q) {
            var m = d(this).data("resizable"),
                i = m.options,
                n = m.position,
                p = m.containerOffset,
                f = m.containerPosition,
                j = m.containerElement;
            var k = d(m.helper),
                s = k.offset(),
                r = k.outerWidth() - m.sizeDiff.width,
                l = k.outerHeight() - m.sizeDiff.height;
            if (m._helper && !i.animate && (/relative/).test(j.css("position"))) {
                d(this).css({
                    left: s.left - f.left - p.left,
                    width: r,
                    height: l
                })
            }
            if (m._helper && !i.animate && (/static/).test(j.css("position"))) {
                d(this).css({
                    left: s.left - f.left - p.left,
                    width: r,
                    height: l
                })
            }
        }
    });
    d.ui.plugin.add("resizable", "ghost", {
        start: function(h, i) {
            var g = d(this).data("resizable"),
                j = g.options,
                f = g.size;
            g.ghost = g.originalElement.clone();
            g.ghost.css({
                opacity: 0.25,
                display: "block",
                position: "relative",
                height: f.height,
                width: f.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass(typeof j.ghost == "string" ? j.ghost : "");
            g.ghost.appendTo(g.helper)
        },
        resize: function(g, h) {
            var f = d(this).data("resizable"),
                i = f.options;
            if (f.ghost) {
                f.ghost.css({
                    position: "relative",
                    height: f.size.height,
                    width: f.size.width
                })
            }
        },
        stop: function(g, h) {
            var f = d(this).data("resizable"),
                i = f.options;
            if (f.ghost && f.helper) {
                f.helper.get(0).removeChild(f.ghost.get(0))
            }
        }
    });
    d.ui.plugin.add("resizable", "grid", {
        resize: function(f, p) {
            var l = d(this).data("resizable"),
                i = l.options,
                m = l.size,
                j = l.originalSize,
                k = l.originalPosition,
                q = l.axis,
                n = i._aspectRatio || f.shiftKey;
            i.grid = typeof i.grid == "number" ? [i.grid, i.grid] : i.grid;
            var h = Math.round((m.width - j.width) / (i.grid[0] || 1)) * (i.grid[0] || 1),
                g = Math.round((m.height - j.height) / (i.grid[1] || 1)) * (i.grid[1] || 1);
            if (/^(se|s|e)$/.test(q)) {
                l.size.width = j.width + h;
                l.size.height = j.height + g
            } else {
                if (/^(ne)$/.test(q)) {
                    l.size.width = j.width + h;
                    l.size.height = j.height + g;
                    l.position.top = k.top - g
                } else {
                    if (/^(sw)$/.test(q)) {
                        l.size.width = j.width + h;
                        l.size.height = j.height + g;
                        l.position.left = k.left - h
                    } else {
                        l.size.width = j.width + h;
                        l.size.height = j.height + g;
                        l.position.top = k.top - g;
                        l.position.left = k.left - h
                    }
                }
            }
        }
    });
    var c = function(f) {
        return parseInt(f, 10) || 0
    };
    var b = function(f) {
        return !isNaN(parseInt(f, 10))
    }
})(jQuery);
(function(b, c) {
    b.widget("ui.selectable", b.ui.mouse, {
        version: "1.9.2",
        options: {
            appendTo: "body",
            autoRefresh: true,
            distance: 0,
            filter: "*",
            tolerance: "touch"
        },
        _create: function() {
            var d = this;
            this.element.addClass("ui-selectable");
            this.dragged = false;
            var e;
            this.refresh = function() {
                e = b(d.options.filter, d.element[0]);
                e.addClass("ui-selectee");
                e.each(function() {
                    var f = b(this);
                    var g = f.offset();
                    b.data(this, "selectable-item", {
                        element: this,
                        $element: f,
                        left: g.left,
                        top: g.top,
                        right: g.left + f.outerWidth(),
                        bottom: g.top + f.outerHeight(),
                        startselected: false,
                        selected: f.hasClass("ui-selected"),
                        selecting: f.hasClass("ui-selecting"),
                        unselecting: f.hasClass("ui-unselecting")
                    })
                })
            };
            this.refresh();
            this.selectees = e.addClass("ui-selectee");
            this._mouseInit();
            this.helper = b("<div class='ui-selectable-helper'></div>")
        },
        _destroy: function() {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item");
            this.element.removeClass("ui-selectable ui-selectable-disabled");
            this._mouseDestroy()
        },
        _mouseStart: function(f) {
            var e = this;
            this.opos = [f.pageX, f.pageY];
            if (this.options.disabled) {
                return
            }
            var d = this.options;
            this.selectees = b(d.filter, this.element[0]);
            this._trigger("start", f);
            b(d.appendTo).append(this.helper);
            this.helper.css({
                left: f.clientX,
                top: f.clientY,
                width: 0,
                height: 0
            });
            if (d.autoRefresh) {
                this.refresh()
            }
            this.selectees.filter(".ui-selected").each(function() {
                var g = b.data(this, "selectable-item");
                g.startselected = true;
                if (!f.metaKey && !f.ctrlKey) {
                    g.$element.removeClass("ui-selected");
                    g.selected = false;
                    g.$element.addClass("ui-unselecting");
                    g.unselecting = true;
                    e._trigger("unselecting", f, {
                        unselecting: g.element
                    })
                }
            });
            b(f.target).parents().andSelf().each(function() {
                var h = b.data(this, "selectable-item");
                if (h) {
                    var g = (!f.metaKey && !f.ctrlKey) || !h.$element.hasClass("ui-selected");
                    h.$element.removeClass(g ? "ui-unselecting" : "ui-selected").addClass(g ? "ui-selecting" : "ui-unselecting");
                    h.unselecting = !g;
                    h.selecting = g;
                    h.selected = g;
                    if (g) {
                        e._trigger("selecting", f, {
                            selecting: h.element
                        })
                    } else {
                        e._trigger("unselecting", f, {
                            unselecting: h.element
                        })
                    }
                    return false
                }
            })
        },
        _mouseDrag: function(k) {
            var j = this;
            this.dragged = true;
            if (this.options.disabled) {
                return
            }
            var f = this.options;
            var e = this.opos[0],
                i = this.opos[1],
                d = k.pageX,
                h = k.pageY;
            if (e > d) {
                var g = d;
                d = e;
                e = g
            }
            if (i > h) {
                var g = h;
                h = i;
                i = g
            }
            this.helper.css({
                left: e,
                top: i,
                width: d - e,
                height: h - i
            });
            this.selectees.each(function() {
                var l = b.data(this, "selectable-item");
                if (!l || l.element == j.element[0]) {
                    return
                }
                var m = false;
                if (f.tolerance == "touch") {
                    m = (!(l.left > d || l.right < e || l.top > h || l.bottom < i))
                } else {
                    if (f.tolerance == "fit") {
                        m = (l.left > e && l.right < d && l.top > i && l.bottom < h)
                    }
                }
                if (m) {
                    if (l.selected) {
                        l.$element.removeClass("ui-selected");
                        l.selected = false
                    }
                    if (l.unselecting) {
                        l.$element.removeClass("ui-unselecting");
                        l.unselecting = false
                    }
                    if (!l.selecting) {
                        l.$element.addClass("ui-selecting");
                        l.selecting = true;
                        j._trigger("selecting", k, {
                            selecting: l.element
                        })
                    }
                } else {
                    if (l.selecting) {
                        if ((k.metaKey || k.ctrlKey) && l.startselected) {
                            l.$element.removeClass("ui-selecting");
                            l.selecting = false;
                            l.$element.addClass("ui-selected");
                            l.selected = true
                        } else {
                            l.$element.removeClass("ui-selecting");
                            l.selecting = false;
                            if (l.startselected) {
                                l.$element.addClass("ui-unselecting");
                                l.unselecting = true
                            }
                            j._trigger("unselecting", k, {
                                unselecting: l.element
                            })
                        }
                    }
                    if (l.selected) {
                        if (!k.metaKey && !k.ctrlKey && !l.startselected) {
                            l.$element.removeClass("ui-selected");
                            l.selected = false;
                            l.$element.addClass("ui-unselecting");
                            l.unselecting = true;
                            j._trigger("unselecting", k, {
                                unselecting: l.element
                            })
                        }
                    }
                }
            });
            return false
        },
        _mouseStop: function(f) {
            var e = this;
            this.dragged = false;
            var d = this.options;
            b(".ui-unselecting", this.element[0]).each(function() {
                var g = b.data(this, "selectable-item");
                g.$element.removeClass("ui-unselecting");
                g.unselecting = false;
                g.startselected = false;
                e._trigger("unselected", f, {
                    unselected: g.element
                })
            });
            b(".ui-selecting", this.element[0]).each(function() {
                var g = b.data(this, "selectable-item");
                g.$element.removeClass("ui-selecting").addClass("ui-selected");
                g.selecting = false;
                g.selected = true;
                g.startselected = true;
                e._trigger("selected", f, {
                    selected: g.element
                })
            });
            this._trigger("stop", f);
            this.helper.remove();
            return false
        }
    })
})(jQuery);
(function(c, d) {
    var b = 5;
    c.widget("ui.slider", c.ui.mouse, {
        version: "1.9.2",
        widgetEventPrefix: "slide",
        options: {
            animate: false,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: false,
            step: 1,
            value: 0,
            values: null
        },
        _create: function() {
            var g, e, k = this.options,
                j = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                h = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
                f = [];
            this._keySliding = false;
            this._mouseSliding = false;
            this._animateOff = true;
            this._handleIndex = null;
            this._detectOrientation();
            this._mouseInit();
            this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all" + (k.disabled ? " ui-slider-disabled ui-disabled" : ""));
            this.range = c([]);
            if (k.range) {
                if (k.range === true) {
                    if (!k.values) {
                        k.values = [this._valueMin(), this._valueMin()]
                    }
                    if (k.values.length && k.values.length !== 2) {
                        k.values = [k.values[0], k.values[0]]
                    }
                }
                this.range = c("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + ((k.range === "min" || k.range === "max") ? " ui-slider-range-" + k.range : ""))
            }
            e = (k.values && k.values.length) || 1;
            for (g = j.length; g < e; g++) {
                f.push(h)
            }
            this.handles = j.add(c(f.join("")).appendTo(this.element));
            this.handle = this.handles.eq(0);
            this.handles.add(this.range).filter("a").click(function(i) {
                i.preventDefault()
            }).mouseenter(function() {
                if (!k.disabled) {
                    c(this).addClass("ui-state-hover")
                }
            }).mouseleave(function() {
                c(this).removeClass("ui-state-hover")
            }).focus(function() {
                if (!k.disabled) {
                    c(".ui-slider .ui-state-focus").removeClass("ui-state-focus");
                    c(this).addClass("ui-state-focus")
                } else {
                    c(this).blur()
                }
            }).blur(function() {
                c(this).removeClass("ui-state-focus")
            });
            this.handles.each(function(l) {
                c(this).data("ui-slider-handle-index", l)
            });
            this._on(this.handles, {
                keydown: function(o) {
                    var p, m, l, n, i = c(o.target).data("ui-slider-handle-index");
                    switch (o.keyCode) {
                        case c.ui.keyCode.HOME:
                        case c.ui.keyCode.END:
                        case c.ui.keyCode.PAGE_UP:
                        case c.ui.keyCode.PAGE_DOWN:
                        case c.ui.keyCode.UP:
                        case c.ui.keyCode.RIGHT:
                        case c.ui.keyCode.DOWN:
                        case c.ui.keyCode.LEFT:
                            o.preventDefault();
                            if (!this._keySliding) {
                                this._keySliding = true;
                                c(o.target).addClass("ui-state-active");
                                p = this._start(o, i);
                                if (p === false) {
                                    return
                                }
                            }
                            break
                    }
                    n = this.options.step;
                    if (this.options.values && this.options.values.length) {
                        m = l = this.values(i)
                    } else {
                        m = l = this.value()
                    }
                    switch (o.keyCode) {
                        case c.ui.keyCode.HOME:
                            l = this._valueMin();
                            break;
                        case c.ui.keyCode.END:
                            l = this._valueMax();
                            break;
                        case c.ui.keyCode.PAGE_UP:
                            l = this._trimAlignValue(m + ((this._valueMax() - this._valueMin()) / b));
                            break;
                        case c.ui.keyCode.PAGE_DOWN:
                            l = this._trimAlignValue(m - ((this._valueMax() - this._valueMin()) / b));
                            break;
                        case c.ui.keyCode.UP:
                        case c.ui.keyCode.RIGHT:
                            if (m === this._valueMax()) {
                                return
                            }
                            l = this._trimAlignValue(m + n);
                            break;
                        case c.ui.keyCode.DOWN:
                        case c.ui.keyCode.LEFT:
                            if (m === this._valueMin()) {
                                return
                            }
                            l = this._trimAlignValue(m - n);
                            break
                    }
                    this._slide(o, i, l)
                },
                keyup: function(l) {
                    var i = c(l.target).data("ui-slider-handle-index");
                    if (this._keySliding) {
                        this._keySliding = false;
                        this._stop(l, i);
                        this._change(l, i);
                        c(l.target).removeClass("ui-state-active")
                    }
                }
            });
            this._refreshValue();
            this._animateOff = false
        },
        _destroy: function() {
            this.handles.remove();
            this.range.remove();
            this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all");
            this._mouseDestroy()
        },
        _mouseCapture: function(g) {
            var k, n, f, i, m, p, j, e, l = this,
                h = this.options;
            if (h.disabled) {
                return false
            }
            this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            };
            this.elementOffset = this.element.offset();
            k = {
                x: g.pageX,
                y: g.pageY
            };
            n = this._normValueFromMouse(k);
            f = this._valueMax() - this._valueMin() + 1;
            this.handles.each(function(o) {
                var q = Math.abs(n - l.values(o));
                if (f > q) {
                    f = q;
                    i = c(this);
                    m = o
                }
            });
            if (h.range === true && this.values(1) === h.min) {
                m += 1;
                i = c(this.handles[m])
            }
            p = this._start(g, m);
            if (p === false) {
                return false
            }
            this._mouseSliding = true;
            this._handleIndex = m;
            i.addClass("ui-state-active").focus();
            j = i.offset();
            e = !c(g.target).parents().andSelf().is(".ui-slider-handle");
            this._clickOffset = e ? {
                left: 0,
                top: 0
            } : {
                left: g.pageX - j.left - (i.width() / 2),
                top: g.pageY - j.top - (i.height() / 2) - (parseInt(i.css("borderTopWidth"), 10) || 0) - (parseInt(i.css("borderBottomWidth"), 10) || 0) + (parseInt(i.css("marginTop"), 10) || 0)
            };
            if (!this.handles.hasClass("ui-state-hover")) {
                this._slide(g, m, n)
            }
            this._animateOff = true;
            return true
        },
        _mouseStart: function() {
            return true
        },
        _mouseDrag: function(g) {
            var e = {
                    x: g.pageX,
                    y: g.pageY
                },
                f = this._normValueFromMouse(e);
            this._slide(g, this._handleIndex, f);
            return false
        },
        _mouseStop: function(e) {
            this.handles.removeClass("ui-state-active");
            this._mouseSliding = false;
            this._stop(e, this._handleIndex);
            this._change(e, this._handleIndex);
            this._handleIndex = null;
            this._clickOffset = null;
            this._animateOff = false;
            return false
        },
        _detectOrientation: function() {
            this.orientation = (this.options.orientation === "vertical") ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(f) {
            var e, i, h, g, j;
            if (this.orientation === "horizontal") {
                e = this.elementSize.width;
                i = f.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)
            } else {
                e = this.elementSize.height;
                i = f.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)
            }
            h = (i / e);
            if (h > 1) {
                h = 1
            }
            if (h < 0) {
                h = 0
            }
            if (this.orientation === "vertical") {
                h = 1 - h
            }
            g = this._valueMax() - this._valueMin();
            j = this._valueMin() + h * g;
            return this._trimAlignValue(j)
        },
        _start: function(g, f) {
            var e = {
                handle: this.handles[f],
                value: this.value()
            };
            if (this.options.values && this.options.values.length) {
                e.value = this.values(f);
                e.values = this.values()
            }
            return this._trigger("start", g, e)
        },
        _slide: function(i, h, g) {
            var e, f, j;
            if (this.options.values && this.options.values.length) {
                e = this.values(h ? 0 : 1);
                if ((this.options.values.length === 2 && this.options.range === true) && ((h === 0 && g > e) || (h === 1 && g < e))) {
                    g = e
                }
                if (g !== this.values(h)) {
                    f = this.values();
                    f[h] = g;
                    j = this._trigger("slide", i, {
                        handle: this.handles[h],
                        value: g,
                        values: f
                    });
                    e = this.values(h ? 0 : 1);
                    if (j !== false) {
                        this.values(h, g, true)
                    }
                }
            } else {
                if (g !== this.value()) {
                    j = this._trigger("slide", i, {
                        handle: this.handles[h],
                        value: g
                    });
                    if (j !== false) {
                        this.value(g)
                    }
                }
            }
        },
        _stop: function(g, f) {
            var e = {
                handle: this.handles[f],
                value: this.value()
            };
            if (this.options.values && this.options.values.length) {
                e.value = this.values(f);
                e.values = this.values()
            }
            this._trigger("stop", g, e)
        },
        _change: function(g, f) {
            if (!this._keySliding && !this._mouseSliding) {
                var e = {
                    handle: this.handles[f],
                    value: this.value()
                };
                if (this.options.values && this.options.values.length) {
                    e.value = this.values(f);
                    e.values = this.values()
                }
                this._trigger("change", g, e)
            }
        },
        value: function(e) {
            if (arguments.length) {
                this.options.value = this._trimAlignValue(e);
                this._refreshValue();
                this._change(null, 0);
                return
            }
            return this._value()
        },
        values: function(f, j) {
            var h, e, g;
            if (arguments.length > 1) {
                this.options.values[f] = this._trimAlignValue(j);
                this._refreshValue();
                this._change(null, f);
                return
            }
            if (arguments.length) {
                if (c.isArray(arguments[0])) {
                    h = this.options.values;
                    e = arguments[0];
                    for (g = 0; g < h.length; g += 1) {
                        h[g] = this._trimAlignValue(e[g]);
                        this._change(null, g)
                    }
                    this._refreshValue()
                } else {
                    if (this.options.values && this.options.values.length) {
                        return this._values(f)
                    } else {
                        return this.value()
                    }
                }
            } else {
                return this._values()
            }
        },
        _setOption: function(f, g) {
            var e, h = 0;
            if (c.isArray(this.options.values)) {
                h = this.options.values.length
            }
            c.Widget.prototype._setOption.apply(this, arguments);
            switch (f) {
                case "disabled":
                    if (g) {
                        this.handles.filter(".ui-state-focus").blur();
                        this.handles.removeClass("ui-state-hover");
                        this.handles.prop("disabled", true);
                        this.element.addClass("ui-disabled")
                    } else {
                        this.handles.prop("disabled", false);
                        this.element.removeClass("ui-disabled")
                    }
                    break;
                case "orientation":
                    this._detectOrientation();
                    this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation);
                    this._refreshValue();
                    break;
                case "value":
                    this._animateOff = true;
                    this._refreshValue();
                    this._change(null, 0);
                    this._animateOff = false;
                    break;
                case "values":
                    this._animateOff = true;
                    this._refreshValue();
                    for (e = 0; e < h; e += 1) {
                        this._change(null, e)
                    }
                    this._animateOff = false;
                    break;
                case "min":
                case "max":
                    this._animateOff = true;
                    this._refreshValue();
                    this._animateOff = false;
                    break
            }
        },
        _value: function() {
            var e = this.options.value;
            e = this._trimAlignValue(e);
            return e
        },
        _values: function(e) {
            var h, g, f;
            if (arguments.length) {
                h = this.options.values[e];
                h = this._trimAlignValue(h);
                return h
            } else {
                g = this.options.values.slice();
                for (f = 0; f < g.length; f += 1) {
                    g[f] = this._trimAlignValue(g[f])
                }
                return g
            }
        },
        _trimAlignValue: function(h) {
            if (h <= this._valueMin()) {
                return this._valueMin()
            }
            if (h >= this._valueMax()) {
                return this._valueMax()
            }
            var e = (this.options.step > 0) ? this.options.step : 1,
                g = (h - this._valueMin()) % e,
                f = h - g;
            if (Math.abs(g) * 2 >= e) {
                f += (g > 0) ? e : (-e)
            }
            return parseFloat(f.toFixed(5))
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.options.max
        },
        _refreshValue: function() {
            var j, i, m, k, n, h = this.options.range,
                g = this.options,
                l = this,
                f = (!this._animateOff) ? g.animate : false,
                e = {};
            if (this.options.values && this.options.values.length) {
                this.handles.each(function(o) {
                    i = (l.values(o) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100;
                    e[l.orientation === "horizontal" ? "left" : "bottom"] = i + "%";
                    c(this).stop(1, 1)[f ? "animate" : "css"](e, g.animate);
                    if (l.options.range === true) {
                        if (l.orientation === "horizontal") {
                            if (o === 0) {
                                l.range.stop(1, 1)[f ? "animate" : "css"]({
                                    left: i + "%"
                                }, g.animate)
                            }
                            if (o === 1) {
                                l.range[f ? "animate" : "css"]({
                                    width: (i - j) + "%"
                                }, {
                                    queue: false,
                                    duration: g.animate
                                })
                            }
                        } else {
                            if (o === 0) {
                                l.range.stop(1, 1)[f ? "animate" : "css"]({
                                    bottom: (i) + "%"
                                }, g.animate)
                            }
                            if (o === 1) {
                                l.range[f ? "animate" : "css"]({
                                    height: (i - j) + "%"
                                }, {
                                    queue: false,
                                    duration: g.animate
                                })
                            }
                        }
                    }
                    j = i
                })
            } else {
                m = this.value();
                k = this._valueMin();
                n = this._valueMax();
                i = (n !== k) ? (m - k) / (n - k) * 100 : 0;
                e[this.orientation === "horizontal" ? "left" : "bottom"] = i + "%";
                this.handle.stop(1, 1)[f ? "animate" : "css"](e, g.animate);
                if (h === "min" && this.orientation === "horizontal") {
                    this.range.stop(1, 1)[f ? "animate" : "css"]({
                        width: i + "%"
                    }, g.animate)
                }
                if (h === "max" && this.orientation === "horizontal") {
                    this.range[f ? "animate" : "css"]({
                        width: (100 - i) + "%"
                    }, {
                        queue: false,
                        duration: g.animate
                    })
                }
                if (h === "min" && this.orientation === "vertical") {
                    this.range.stop(1, 1)[f ? "animate" : "css"]({
                        height: i + "%"
                    }, g.animate)
                }
                if (h === "max" && this.orientation === "vertical") {
                    this.range[f ? "animate" : "css"]({
                        height: (100 - i) + "%"
                    }, {
                        queue: false,
                        duration: g.animate
                    })
                }
            }
        }
    })
}(jQuery));
(function(b, c) {
    b.widget("ui.sortable", b.ui.mouse, {
        version: "1.9.2",
        widgetEventPrefix: "sort",
        ready: false,
        options: {
            appendTo: "parent",
            axis: false,
            connectWith: false,
            containment: false,
            cursor: "auto",
            cursorAt: false,
            dropOnEmpty: true,
            forcePlaceholderSize: false,
            forceHelperSize: false,
            grid: false,
            handle: false,
            helper: "original",
            items: "> *",
            opacity: false,
            placeholder: false,
            revert: false,
            scroll: true,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1000
        },
        _create: function() {
            var d = this.options;
            this.containerCache = {};
            this.element.addClass("ui-sortable");
            this.refresh();
            this.floating = this.items.length ? d.axis === "x" || (/left|right/).test(this.items[0].item.css("float")) || (/inline|table-cell/).test(this.items[0].item.css("display")) : false;
            this.offset = this.element.offset();
            this._mouseInit();
            this.ready = true
        },
        _destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled");
            this._mouseDestroy();
            for (var d = this.items.length - 1; d >= 0; d--) {
                this.items[d].item.removeData(this.widgetName + "-item")
            }
            return this
        },
        _setOption: function(d, e) {
            if (d === "disabled") {
                this.options[d] = e;
                this.widget().toggleClass("ui-sortable-disabled", !!e)
            } else {
                b.Widget.prototype._setOption.apply(this, arguments)
            }
        },
        _mouseCapture: function(g, h) {
            var f = this;
            if (this.reverting) {
                return false
            }
            if (this.options.disabled || this.options.type == "static") {
                return false
            }
            this._refreshItems(g);
            var e = null,
                d = b(g.target).parents().each(function() {
                    if (b.data(this, f.widgetName + "-item") == f) {
                        e = b(this);
                        return false
                    }
                });
            if (b.data(g.target, f.widgetName + "-item") == f) {
                e = b(g.target)
            }
            if (!e) {
                return false
            }
            if (this.options.handle && !h) {
                var i = false;
                b(this.options.handle, e).find("*").andSelf().each(function() {
                    if (this == g.target) {
                        i = true
                    }
                });
                if (!i) {
                    return false
                }
            }
            this.currentItem = e;
            this._removeCurrentsFromItems();
            return true
        },
        _mouseStart: function(f, g, d) {
            var h = this.options;
            this.currentContainer = this;
            this.refreshPositions();
            this.helper = this._createHelper(f);
            this._cacheHelperProportions();
            this._cacheMargins();
            this.scrollParent = this.helper.scrollParent();
            this.offset = this.currentItem.offset();
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            };
            b.extend(this.offset, {
                click: {
                    left: f.pageX - this.offset.left,
                    top: f.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            });
            this.helper.css("position", "absolute");
            this.cssPosition = this.helper.css("position");
            this.originalPosition = this._generatePosition(f);
            this.originalPageX = f.pageX;
            this.originalPageY = f.pageY;
            (h.cursorAt && this._adjustOffsetFromHelper(h.cursorAt));
            this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            };
            if (this.helper[0] != this.currentItem[0]) {
                this.currentItem.hide()
            }
            this._createPlaceholder();
            if (h.containment) {
                this._setContainment()
            }
            if (h.cursor) {
                if (b("body").css("cursor")) {
                    this._storedCursor = b("body").css("cursor")
                }
                b("body").css("cursor", h.cursor)
            }
            if (h.opacity) {
                if (this.helper.css("opacity")) {
                    this._storedOpacity = this.helper.css("opacity")
                }
                this.helper.css("opacity", h.opacity)
            }
            if (h.zIndex) {
                if (this.helper.css("zIndex")) {
                    this._storedZIndex = this.helper.css("zIndex")
                }
                this.helper.css("zIndex", h.zIndex)
            }
            if (this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML") {
                this.overflowOffset = this.scrollParent.offset()
            }
            this._trigger("start", f, this._uiHash());
            if (!this._preserveHelperProportions) {
                this._cacheHelperProportions()
            }
            if (!d) {
                for (var e = this.containers.length - 1; e >= 0; e--) {
                    this.containers[e]._trigger("activate", f, this._uiHash(this))
                }
            }
            if (b.ui.ddmanager) {
                b.ui.ddmanager.current = this
            }
            if (b.ui.ddmanager && !h.dropBehaviour) {
                b.ui.ddmanager.prepareOffsets(this, f)
            }
            this.dragging = true;
            this.helper.addClass("ui-sortable-helper");
            this._mouseDrag(f);
            return true
        },
        _mouseDrag: function(h) {
            this.position = this._generatePosition(h);
            this.positionAbs = this._convertPositionTo("absolute");
            if (!this.lastPositionAbs) {
                this.lastPositionAbs = this.positionAbs
            }
            if (this.options.scroll) {
                var j = this.options,
                    d = false;
                if (this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML") {
                    if ((this.overflowOffset.top + this.scrollParent[0].offsetHeight) - h.pageY < j.scrollSensitivity) {
                        this.scrollParent[0].scrollTop = d = this.scrollParent[0].scrollTop + j.scrollSpeed
                    } else {
                        if (h.pageY - this.overflowOffset.top < j.scrollSensitivity) {
                            this.scrollParent[0].scrollTop = d = this.scrollParent[0].scrollTop - j.scrollSpeed
                        }
                    }
                    if ((this.overflowOffset.left + this.scrollParent[0].offsetWidth) - h.pageX < j.scrollSensitivity) {
                        this.scrollParent[0].scrollLeft = d = this.scrollParent[0].scrollLeft + j.scrollSpeed
                    } else {
                        if (h.pageX - this.overflowOffset.left < j.scrollSensitivity) {
                            this.scrollParent[0].scrollLeft = d = this.scrollParent[0].scrollLeft - j.scrollSpeed
                        }
                    }
                } else {
                    if (h.pageY - b(document).scrollTop() < j.scrollSensitivity) {
                        d = b(document).scrollTop(b(document).scrollTop() - j.scrollSpeed)
                    } else {
                        if (b(window).height() - (h.pageY - b(document).scrollTop()) < j.scrollSensitivity) {
                            d = b(document).scrollTop(b(document).scrollTop() + j.scrollSpeed)
                        }
                    }
                    if (h.pageX - b(document).scrollLeft() < j.scrollSensitivity) {
                        d = b(document).scrollLeft(b(document).scrollLeft() - j.scrollSpeed)
                    } else {
                        if (b(window).width() - (h.pageX - b(document).scrollLeft()) < j.scrollSensitivity) {
                            d = b(document).scrollLeft(b(document).scrollLeft() + j.scrollSpeed)
                        }
                    }
                }
                if (d !== false && b.ui.ddmanager && !j.dropBehaviour) {
                    b.ui.ddmanager.prepareOffsets(this, h)
                }
            }
            this.positionAbs = this._convertPositionTo("absolute");
            if (!this.options.axis || this.options.axis != "y") {
                this.helper[0].style.left = this.position.left + "px"
            }
            if (!this.options.axis || this.options.axis != "x") {
                this.helper[0].style.top = this.position.top + "px"
            }
            for (var f = this.items.length - 1; f >= 0; f--) {
                var g = this.items[f],
                    e = g.item[0],
                    k = this._intersectsWithPointer(g);
                if (!k) {
                    continue
                }
                if (g.instance !== this.currentContainer) {
                    continue
                }
                if (e != this.currentItem[0] && this.placeholder[k == 1 ? "next" : "prev"]()[0] != e && !b.contains(this.placeholder[0], e) && (this.options.type == "semi-dynamic" ? !b.contains(this.element[0], e) : true)) {
                    this.direction = k == 1 ? "down" : "up";
                    if (this.options.tolerance == "pointer" || this._intersectsWithSides(g)) {
                        this._rearrange(h, g)
                    } else {
                        break
                    }
                    this._trigger("change", h, this._uiHash());
                    break
                }
            }
            this._contactContainers(h);
            if (b.ui.ddmanager) {
                b.ui.ddmanager.drag(this, h)
            }
            this._trigger("sort", h, this._uiHash());
            this.lastPositionAbs = this.positionAbs;
            return false
        },
        _mouseStop: function(e, f) {
            if (!e) {
                return
            }
            if (b.ui.ddmanager && !this.options.dropBehaviour) {
                b.ui.ddmanager.drop(this, e)
            }
            if (this.options.revert) {
                var d = this;
                var g = this.placeholder.offset();
                this.reverting = true;
                b(this.helper).animate({
                    left: g.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),
                    top: g.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
                }, parseInt(this.options.revert, 10) || 500, function() {
                    d._clear(e)
                })
            } else {
                this._clear(e, f)
            }
            return false
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                });
                if (this.options.helper == "original") {
                    this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
                } else {
                    this.currentItem.show()
                }
                for (var d = this.containers.length - 1; d >= 0; d--) {
                    this.containers[d]._trigger("deactivate", null, this._uiHash(this));
                    if (this.containers[d].containerCache.over) {
                        this.containers[d]._trigger("out", null, this._uiHash(this));
                        this.containers[d].containerCache.over = 0
                    }
                }
            }
            if (this.placeholder) {
                if (this.placeholder[0].parentNode) {
                    this.placeholder[0].parentNode.removeChild(this.placeholder[0])
                }
                if (this.options.helper != "original" && this.helper && this.helper[0].parentNode) {
                    this.helper.remove()
                }
                b.extend(this, {
                    helper: null,
                    dragging: false,
                    reverting: false,
                    _noFinalSort: null
                });
                if (this.domPosition.prev) {
                    b(this.domPosition.prev).after(this.currentItem)
                } else {
                    b(this.domPosition.parent).prepend(this.currentItem)
                }
            }
            return this
        },
        serialize: function(f) {
            var d = this._getItemsAsjQuery(f && f.connected);
            var e = [];
            f = f || {};
            b(d).each(function() {
                var g = (b(f.item || this).attr(f.attribute || "id") || "").match(f.expression || (/(.+)[-=_](.+)/));
                if (g) {
                    e.push((f.key || g[1] + "[]") + "=" + (f.key && f.expression ? g[1] : g[2]))
                }
            });
            if (!e.length && f.key) {
                e.push(f.key + "=")
            }
            return e.join("&")
        },
        toArray: function(f) {
            var d = this._getItemsAsjQuery(f && f.connected);
            var e = [];
            f = f || {};
            d.each(function() {
                e.push(b(f.item || this).attr(f.attribute || "id") || "")
            });
            return e
        },
        _intersectsWith: function(n) {
            var f = this.positionAbs.left,
                e = f + this.helperProportions.width,
                m = this.positionAbs.top,
                k = m + this.helperProportions.height;
            var g = n.left,
                d = g + n.width,
                o = n.top,
                j = o + n.height;
            var p = this.offset.click.top,
                i = this.offset.click.left;
            var h = (m + p) > o && (m + p) < j && (f + i) > g && (f + i) < d;
            if (this.options.tolerance == "pointer" || this.options.forcePointerForContainers || (this.options.tolerance != "pointer" && this.helperProportions[this.floating ? "width" : "height"] > n[this.floating ? "width" : "height"])) {
                return h
            } else {
                return (g < f + (this.helperProportions.width / 2) && e - (this.helperProportions.width / 2) < d && o < m + (this.helperProportions.height / 2) && k - (this.helperProportions.height / 2) < j)
            }
        },
        _intersectsWithPointer: function(f) {
            var g = (this.options.axis === "x") || b.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, f.top, f.height),
                e = (this.options.axis === "y") || b.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, f.left, f.width),
                i = g && e,
                d = this._getDragVerticalDirection(),
                h = this._getDragHorizontalDirection();
            if (!i) {
                return false
            }
            return this.floating ? (((h && h == "right") || d == "down") ? 2 : 1) : (d && (d == "down" ? 2 : 1))
        },
        _intersectsWithSides: function(g) {
            var e = b.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, g.top + (g.height / 2), g.height),
                f = b.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, g.left + (g.width / 2), g.width),
                d = this._getDragVerticalDirection(),
                h = this._getDragHorizontalDirection();
            if (this.floating && h) {
                return ((h == "right" && f) || (h == "left" && !f))
            } else {
                return d && ((d == "down" && e) || (d == "up" && !e))
            }
        },
        _getDragVerticalDirection: function() {
            var d = this.positionAbs.top - this.lastPositionAbs.top;
            return d != 0 && (d > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var d = this.positionAbs.left - this.lastPositionAbs.left;
            return d != 0 && (d > 0 ? "right" : "left")
        },
        refresh: function(d) {
            this._refreshItems(d);
            this.refreshPositions();
            return this
        },
        _connectWith: function() {
            var d = this.options;
            return d.connectWith.constructor == String ? [d.connectWith] : d.connectWith
        },
        _getItemsAsjQuery: function(k) {
            var d = [];
            var f = [];
            var h = this._connectWith();
            if (h && k) {
                for (var g = h.length - 1; g >= 0; g--) {
                    var m = b(h[g]);
                    for (var e = m.length - 1; e >= 0; e--) {
                        var l = b.data(m[e], this.widgetName);
                        if (l && l != this && !l.options.disabled) {
                            f.push([b.isFunction(l.options.items) ? l.options.items.call(l.element) : b(l.options.items, l.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), l])
                        }
                    }
                }
            }
            f.push([b.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : b(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
            for (var g = f.length - 1; g >= 0; g--) {
                f[g][0].each(function() {
                    d.push(this)
                })
            }
            return b(d)
        },
        _removeCurrentsFromItems: function() {
            var d = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = b.grep(this.items, function(f) {
                for (var e = 0; e < d.length; e++) {
                    if (d[e] == f.item[0]) {
                        return false
                    }
                }
                return true
            })
        },
        _refreshItems: function(d) {
            this.items = [];
            this.containers = [this];
            var l = this.items;
            var h = [
                [b.isFunction(this.options.items) ? this.options.items.call(this.element[0], d, {
                    item: this.currentItem
                }) : b(this.options.items, this.element), this]
            ];
            var n = this._connectWith();
            if (n && this.ready) {
                for (var g = n.length - 1; g >= 0; g--) {
                    var o = b(n[g]);
                    for (var f = o.length - 1; f >= 0; f--) {
                        var k = b.data(o[f], this.widgetName);
                        if (k && k != this && !k.options.disabled) {
                            h.push([b.isFunction(k.options.items) ? k.options.items.call(k.element[0], d, {
                                item: this.currentItem
                            }) : b(k.options.items, k.element), k]);
                            this.containers.push(k)
                        }
                    }
                }
            }
            for (var g = h.length - 1; g >= 0; g--) {
                var m = h[g][1];
                var e = h[g][0];
                for (var f = 0, p = e.length; f < p; f++) {
                    var q = b(e[f]);
                    q.data(this.widgetName + "-item", m);
                    l.push({
                        item: q,
                        instance: m,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
                }
            }
        },
        refreshPositions: function(d) {
            if (this.offsetParent && this.helper) {
                this.offset.parent = this._getParentOffset()
            }
            for (var f = this.items.length - 1; f >= 0; f--) {
                var g = this.items[f];
                if (g.instance != this.currentContainer && this.currentContainer && g.item[0] != this.currentItem[0]) {
                    continue
                }
                var e = this.options.toleranceElement ? b(this.options.toleranceElement, g.item) : g.item;
                if (!d) {
                    g.width = e.outerWidth();
                    g.height = e.outerHeight()
                }
                var h = e.offset();
                g.left = h.left;
                g.top = h.top
            }
            if (this.options.custom && this.options.custom.refreshContainers) {
                this.options.custom.refreshContainers.call(this)
            } else {
                for (var f = this.containers.length - 1; f >= 0; f--) {
                    var h = this.containers[f].element.offset();
                    this.containers[f].containerCache.left = h.left;
                    this.containers[f].containerCache.top = h.top;
                    this.containers[f].containerCache.width = this.containers[f].element.outerWidth();
                    this.containers[f].containerCache.height = this.containers[f].element.outerHeight()
                }
            }
            return this
        },
        _createPlaceholder: function(e) {
            e = e || this;
            var f = e.options;
            if (!f.placeholder || f.placeholder.constructor == String) {
                var d = f.placeholder;
                f.placeholder = {
                    element: function() {
                        var g = b(document.createElement(e.currentItem[0].nodeName)).addClass(d || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
                        if (!d) {
                            g.style.visibility = "hidden"
                        }
                        return g
                    },
                    update: function(g, h) {
                        if (d && !f.forcePlaceholderSize) {
                            return
                        }
                        if (!h.height()) {
                            h.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10))
                        }
                        if (!h.width()) {
                            h.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10))
                        }
                    }
                }
            }
            e.placeholder = b(f.placeholder.element.call(e.element, e.currentItem));
            e.currentItem.after(e.placeholder);
            f.placeholder.update(e, e.placeholder)
        },
        _contactContainers: function(d) {
            var f = null,
                o = null;
            for (var k = this.containers.length - 1; k >= 0; k--) {
                if (b.contains(this.currentItem[0], this.containers[k].element[0])) {
                    continue
                }
                if (this._intersectsWith(this.containers[k].containerCache)) {
                    if (f && b.contains(this.containers[k].element[0], f.element[0])) {
                        continue
                    }
                    f = this.containers[k];
                    o = k
                } else {
                    if (this.containers[k].containerCache.over) {
                        this.containers[k]._trigger("out", d, this._uiHash(this));
                        this.containers[k].containerCache.over = 0
                    }
                }
            }
            if (!f) {
                return
            }
            if (this.containers.length === 1) {
                this.containers[o]._trigger("over", d, this._uiHash(this));
                this.containers[o].containerCache.over = 1
            } else {
                var n = 10000;
                var l = null;
                var m = this.containers[o].floating ? "left" : "top";
                var p = this.containers[o].floating ? "width" : "height";
                var e = this.positionAbs[m] + this.offset.click[m];
                for (var g = this.items.length - 1; g >= 0; g--) {
                    if (!b.contains(this.containers[o].element[0], this.items[g].item[0])) {
                        continue
                    }
                    if (this.items[g].item[0] == this.currentItem[0]) {
                        continue
                    }
                    var q = this.items[g].item.offset()[m];
                    var h = false;
                    if (Math.abs(q - e) > Math.abs(q + this.items[g][p] - e)) {
                        h = true;
                        q += this.items[g][p]
                    }
                    if (Math.abs(q - e) < n) {
                        n = Math.abs(q - e);
                        l = this.items[g];
                        this.direction = h ? "up" : "down"
                    }
                }
                if (!l && !this.options.dropOnEmpty) {
                    return
                }
                this.currentContainer = this.containers[o];
                l ? this._rearrange(d, l, null, true) : this._rearrange(d, null, this.containers[o].element, true);
                this._trigger("change", d, this._uiHash());
                this.containers[o]._trigger("change", d, this._uiHash(this));
                this.options.placeholder.update(this.currentContainer, this.placeholder);
                this.containers[o]._trigger("over", d, this._uiHash(this));
                this.containers[o].containerCache.over = 1
            }
        },
        _createHelper: function(e) {
            var f = this.options;
            var d = b.isFunction(f.helper) ? b(f.helper.apply(this.element[0], [e, this.currentItem])) : (f.helper == "clone" ? this.currentItem.clone() : this.currentItem);
            if (!d.parents("body").length) {
                b(f.appendTo != "parent" ? f.appendTo : this.currentItem[0].parentNode)[0].appendChild(d[0])
            }
            if (d[0] == this.currentItem[0]) {
                this._storedCSS = {
                    width: this.currentItem[0].style.width,
                    height: this.currentItem[0].style.height,
                    position: this.currentItem.css("position"),
                    top: this.currentItem.css("top"),
                    left: this.currentItem.css("left")
                }
            }
            if (d[0].style.width == "" || f.forceHelperSize) {
                d.width(this.currentItem.width())
            }
            if (d[0].style.height == "" || f.forceHelperSize) {
                d.height(this.currentItem.height())
            }
            return d
        },
        _adjustOffsetFromHelper: function(d) {
            if (typeof d == "string") {
                d = d.split(" ")
            }
            if (b.isArray(d)) {
                d = {
                    left: +d[0],
                    top: +d[1] || 0
                }
            }
            if ("left" in d) {
                this.offset.click.left = d.left + this.margins.left
            }
            if ("right" in d) {
                this.offset.click.left = this.helperProportions.width - d.right + this.margins.left
            }
            if ("top" in d) {
                this.offset.click.top = d.top + this.margins.top
            }
            if ("bottom" in d) {
                this.offset.click.top = this.helperProportions.height - d.bottom + this.margins.top
            }
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var d = this.offsetParent.offset();
            if (this.cssPosition == "absolute" && this.scrollParent[0] != document && b.contains(this.scrollParent[0], this.offsetParent[0])) {
                d.left += this.scrollParent.scrollLeft();
                d.top += this.scrollParent.scrollTop()
            }
            if ((this.offsetParent[0] == document.body) || (this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && b.ui.ie)) {
                d = {
                    top: 0,
                    left: 0
                }
            }
            return {
                top: d.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: d.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if (this.cssPosition == "relative") {
                var d = this.currentItem.position();
                return {
                    top: d.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: d.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            } else {
                return {
                    top: 0,
                    left: 0
                }
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: (parseInt(this.currentItem.css("marginLeft"), 10) || 0),
                top: (parseInt(this.currentItem.css("marginTop"), 10) || 0)
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var g = this.options;
            if (g.containment == "parent") {
                g.containment = this.helper[0].parentNode
            }
            if (g.containment == "document" || g.containment == "window") {
                this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, b(g.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (b(g.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]
            }
            if (!(/^(document|window|parent)$/).test(g.containment)) {
                var e = b(g.containment)[0];
                var f = b(g.containment).offset();
                var d = (b(e).css("overflow") != "hidden");
                this.containment = [f.left + (parseInt(b(e).css("borderLeftWidth"), 10) || 0) + (parseInt(b(e).css("paddingLeft"), 10) || 0) - this.margins.left, f.top + (parseInt(b(e).css("borderTopWidth"), 10) || 0) + (parseInt(b(e).css("paddingTop"), 10) || 0) - this.margins.top, f.left + (d ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(b(e).css("borderLeftWidth"), 10) || 0) - (parseInt(b(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, f.top + (d ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(b(e).css("borderTopWidth"), 10) || 0) - (parseInt(b(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
            }
        },
        _convertPositionTo: function(h, j) {
            if (!j) {
                j = this.position
            }
            var f = h == "absolute" ? 1 : -1;
            var g = this.options,
                e = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && b.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                i = (/(html|body)/i).test(e[0].tagName);
            return {
                top: (j.top + this.offset.relative.top * f + this.offset.parent.top * f - ((this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : (i ? 0 : e.scrollTop())) * f)),
                left: (j.left + this.offset.relative.left * f + this.offset.parent.left * f - ((this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : i ? 0 : e.scrollLeft()) * f))
            }
        },
        _generatePosition: function(g) {
            var j = this.options,
                d = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && b.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                k = (/(html|body)/i).test(d[0].tagName);
            if (this.cssPosition == "relative" && !(this.scrollParent[0] != document && this.scrollParent[0] != this.offsetParent[0])) {
                this.offset.relative = this._getRelativeOffset()
            }
            var f = g.pageX;
            var e = g.pageY;
            if (this.originalPosition) {
                if (this.containment) {
                    if (g.pageX - this.offset.click.left < this.containment[0]) {
                        f = this.containment[0] + this.offset.click.left
                    }
                    if (g.pageY - this.offset.click.top < this.containment[1]) {
                        e = this.containment[1] + this.offset.click.top
                    }
                    if (g.pageX - this.offset.click.left > this.containment[2]) {
                        f = this.containment[2] + this.offset.click.left
                    }
                    if (g.pageY - this.offset.click.top > this.containment[3]) {
                        e = this.containment[3] + this.offset.click.top
                    }
                }
                if (j.grid) {
                    var i = this.originalPageY + Math.round((e - this.originalPageY) / j.grid[1]) * j.grid[1];
                    e = this.containment ? (!(i - this.offset.click.top < this.containment[1] || i - this.offset.click.top > this.containment[3]) ? i : (!(i - this.offset.click.top < this.containment[1]) ? i - j.grid[1] : i + j.grid[1])) : i;
                    var h = this.originalPageX + Math.round((f - this.originalPageX) / j.grid[0]) * j.grid[0];
                    f = this.containment ? (!(h - this.offset.click.left < this.containment[0] || h - this.offset.click.left > this.containment[2]) ? h : (!(h - this.offset.click.left < this.containment[0]) ? h - j.grid[0] : h + j.grid[0])) : h
                }
            }
            return {
                top: (e - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ((this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : (k ? 0 : d.scrollTop())))),
                left: (f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ((this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : k ? 0 : d.scrollLeft())))
            }
        },
        _rearrange: function(h, g, e, f) {
            e ? e[0].appendChild(this.placeholder[0]) : g.item[0].parentNode.insertBefore(this.placeholder[0], (this.direction == "down" ? g.item[0] : g.item[0].nextSibling));
            this.counter = this.counter ? ++this.counter : 1;
            var d = this.counter;
            this._delay(function() {
                if (d == this.counter) {
                    this.refreshPositions(!f)
                }
            })
        },
        _clear: function(e, f) {
            this.reverting = false;
            var g = [];
            if (!this._noFinalSort && this.currentItem.parent().length) {
                this.placeholder.before(this.currentItem)
            }
            this._noFinalSort = null;
            if (this.helper[0] == this.currentItem[0]) {
                for (var d in this._storedCSS) {
                    if (this._storedCSS[d] == "auto" || this._storedCSS[d] == "static") {
                        this._storedCSS[d] = ""
                    }
                }
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else {
                this.currentItem.show()
            }
            if (this.fromOutside && !f) {
                g.push(function(h) {
                    this._trigger("receive", h, this._uiHash(this.fromOutside))
                })
            }
            if ((this.fromOutside || this.domPosition.prev != this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent != this.currentItem.parent()[0]) && !f) {
                g.push(function(h) {
                    this._trigger("update", h, this._uiHash())
                })
            }
            if (this !== this.currentContainer) {
                if (!f) {
                    g.push(function(h) {
                        this._trigger("remove", h, this._uiHash())
                    });
                    g.push((function(h) {
                        return function(i) {
                            h._trigger("receive", i, this._uiHash(this))
                        }
                    }).call(this, this.currentContainer));
                    g.push((function(h) {
                        return function(i) {
                            h._trigger("update", i, this._uiHash(this))
                        }
                    }).call(this, this.currentContainer))
                }
            }
            for (var d = this.containers.length - 1; d >= 0; d--) {
                if (!f) {
                    g.push((function(h) {
                        return function(i) {
                            h._trigger("deactivate", i, this._uiHash(this))
                        }
                    }).call(this, this.containers[d]))
                }
                if (this.containers[d].containerCache.over) {
                    g.push((function(h) {
                        return function(i) {
                            h._trigger("out", i, this._uiHash(this))
                        }
                    }).call(this, this.containers[d]));
                    this.containers[d].containerCache.over = 0
                }
            }
            if (this._storedCursor) {
                b("body").css("cursor", this._storedCursor)
            }
            if (this._storedOpacity) {
                this.helper.css("opacity", this._storedOpacity)
            }
            if (this._storedZIndex) {
                this.helper.css("zIndex", this._storedZIndex == "auto" ? "" : this._storedZIndex)
            }
            this.dragging = false;
            if (this.cancelHelperRemoval) {
                if (!f) {
                    this._trigger("beforeStop", e, this._uiHash());
                    for (var d = 0; d < g.length; d++) {
                        g[d].call(this, e)
                    }
                    this._trigger("stop", e, this._uiHash())
                }
                this.fromOutside = false;
                return false
            }
            if (!f) {
                this._trigger("beforeStop", e, this._uiHash())
            }
            this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
            if (this.helper[0] != this.currentItem[0]) {
                this.helper.remove()
            }
            this.helper = null;
            if (!f) {
                for (var d = 0; d < g.length; d++) {
                    g[d].call(this, e)
                }
                this._trigger("stop", e, this._uiHash())
            }
            this.fromOutside = false;
            return true
        },
        _trigger: function() {
            if (b.Widget.prototype._trigger.apply(this, arguments) === false) {
                this.cancel()
            }
        },
        _uiHash: function(d) {
            var e = d || this;
            return {
                helper: e.helper,
                placeholder: e.placeholder || b([]),
                position: e.position,
                originalPosition: e.originalPosition,
                offset: e.positionAbs,
                item: e.currentItem,
                sender: d ? d.element : null
            }
        }
    })
})(jQuery);
(function(c) {
    function b(d) {
        return function() {
            var e = this.element.val();
            d.apply(this, arguments);
            this._refresh();
            if (e !== this.element.val()) {
                this._trigger("change")
            }
        }
    }
    c.widget("ui.spinner", {
        version: "1.9.2",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: true,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._setOption("max", this.options.max);
            this._setOption("min", this.options.min);
            this._setOption("step", this.options.step);
            this._value(this.element.val(), true);
            this._draw();
            this._on(this._events);
            this._refresh();
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _getCreateOptions: function() {
            var d = {},
                e = this.element;
            c.each(["min", "max", "step"], function(f, g) {
                var h = e.attr(g);
                if (h !== undefined && h.length) {
                    d[g] = h
                }
            });
            return d
        },
        _events: {
            keydown: function(d) {
                if (this._start(d) && this._keydown(d)) {
                    d.preventDefault()
                }
            },
            keyup: "_stop",
            focus: function() {
                this.previous = this.element.val()
            },
            blur: function(d) {
                if (this.cancelBlur) {
                    delete this.cancelBlur;
                    return
                }
                this._refresh();
                if (this.previous !== this.element.val()) {
                    this._trigger("change", d)
                }
            },
            mousewheel: function(d, e) {
                if (!e) {
                    return
                }
                if (!this.spinning && !this._start(d)) {
                    return false
                }
                this._spin((e > 0 ? 1 : -1) * this.options.step, d);
                clearTimeout(this.mousewheelTimer);
                this.mousewheelTimer = this._delay(function() {
                    if (this.spinning) {
                        this._stop(d)
                    }
                }, 100);
                d.preventDefault()
            },
            "mousedown .ui-spinner-button": function(e) {
                var d;
                d = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val();

                function f() {
                    var g = this.element[0] === this.document[0].activeElement;
                    if (!g) {
                        this.element.focus();
                        this.previous = d;
                        this._delay(function() {
                            this.previous = d
                        })
                    }
                }
                e.preventDefault();
                f.call(this);
                this.cancelBlur = true;
                this._delay(function() {
                    delete this.cancelBlur;
                    f.call(this)
                });
                if (this._start(e) === false) {
                    return
                }
                this._repeat(null, c(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function(d) {
                if (!c(d.currentTarget).hasClass("ui-state-active")) {
                    return
                }
                if (this._start(d) === false) {
                    return false
                }
                this._repeat(null, c(d.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, d)
            },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _draw: function() {
            var d = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
            this.element.attr("role", "spinbutton");
            this.buttons = d.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all");
            if (this.buttons.height() > Math.ceil(d.height() * 0.5) && d.height() > 0) {
                d.height(d.height())
            }
            if (this.options.disabled) {
                this.disable()
            }
        },
        _keydown: function(e) {
            var d = this.options,
                f = c.ui.keyCode;
            switch (e.keyCode) {
                case f.UP:
                    this._repeat(null, 1, e);
                    return true;
                case f.DOWN:
                    this._repeat(null, -1, e);
                    return true;
                case f.PAGE_UP:
                    this._repeat(null, d.page, e);
                    return true;
                case f.PAGE_DOWN:
                    this._repeat(null, -d.page, e);
                    return true
            }
            return false
        },
        _uiSpinnerHtml: function() {
            return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
        },
        _buttonHtml: function() {
            return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;</span></a>"
        },
        _start: function(d) {
            if (!this.spinning && this._trigger("start", d) === false) {
                return false
            }
            if (!this.counter) {
                this.counter = 1
            }
            this.spinning = true;
            return true
        },
        _repeat: function(e, d, f) {
            e = e || 500;
            clearTimeout(this.timer);
            this.timer = this._delay(function() {
                this._repeat(40, d, f)
            }, e);
            this._spin(d * this.options.step, f)
        },
        _spin: function(e, d) {
            var f = this.value() || 0;
            if (!this.counter) {
                this.counter = 1
            }
            f = this._adjustValue(f + e * this._increment(this.counter));
            if (!this.spinning || this._trigger("spin", d, {
                    value: f
                }) !== false) {
                this._value(f);
                this.counter++
            }
        },
        _increment: function(d) {
            var e = this.options.incremental;
            if (e) {
                return c.isFunction(e) ? e(d) : Math.floor(d * d * d / 50000 - d * d / 500 + 17 * d / 200 + 1)
            }
            return 1
        },
        _precision: function() {
            var d = this._precisionOf(this.options.step);
            if (this.options.min !== null) {
                d = Math.max(d, this._precisionOf(this.options.min))
            }
            return d
        },
        _precisionOf: function(e) {
            var f = e.toString(),
                d = f.indexOf(".");
            return d === -1 ? 0 : f.length - d - 1
        },
        _adjustValue: function(f) {
            var e, g, d = this.options;
            e = d.min !== null ? d.min : 0;
            g = f - e;
            g = Math.round(g / d.step) * d.step;
            f = e + g;
            f = parseFloat(f.toFixed(this._precision()));
            if (d.max !== null && f > d.max) {
                return d.max
            }
            if (d.min !== null && f < d.min) {
                return d.min
            }
            return f
        },
        _stop: function(d) {
            if (!this.spinning) {
                return
            }
            clearTimeout(this.timer);
            clearTimeout(this.mousewheelTimer);
            this.counter = 0;
            this.spinning = false;
            this._trigger("stop", d)
        },
        _setOption: function(d, e) {
            if (d === "culture" || d === "numberFormat") {
                var f = this._parse(this.element.val());
                this.options[d] = e;
                this.element.val(this._format(f));
                return
            }
            if (d === "max" || d === "min" || d === "step") {
                if (typeof e === "string") {
                    e = this._parse(e)
                }
            }
            this._super(d, e);
            if (d === "disabled") {
                if (e) {
                    this.element.prop("disabled", true);
                    this.buttons.button("disable")
                } else {
                    this.element.prop("disabled", false);
                    this.buttons.button("enable")
                }
            }
        },
        _setOptions: b(function(d) {
            this._super(d);
            this._value(this.element.val())
        }),
        _parse: function(d) {
            if (typeof d === "string" && d !== "") {
                d = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(d, 10, this.options.culture) : +d
            }
            return d === "" || isNaN(d) ? null : d
        },
        _format: function(d) {
            if (d === "") {
                return ""
            }
            return window.Globalize && this.options.numberFormat ? Globalize.format(d, this.options.numberFormat, this.options.culture) : d
        },
        _refresh: function() {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            })
        },
        _value: function(f, d) {
            var e;
            if (f !== "") {
                e = this._parse(f);
                if (e !== null) {
                    if (!d) {
                        e = this._adjustValue(e)
                    }
                    f = this._format(e)
                }
            }
            this.element.val(f);
            this._refresh()
        },
        _destroy: function() {
            this.element.removeClass("ui-spinner-input").prop("disabled", false).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
            this.uiSpinner.replaceWith(this.element)
        },
        stepUp: b(function(d) {
            this._stepUp(d)
        }),
        _stepUp: function(d) {
            this._spin((d || 1) * this.options.step)
        },
        stepDown: b(function(d) {
            this._stepDown(d)
        }),
        _stepDown: function(d) {
            this._spin((d || 1) * -this.options.step)
        },
        pageUp: b(function(d) {
            this._stepUp((d || 1) * this.options.page)
        }),
        pageDown: b(function(d) {
            this._stepDown((d || 1) * this.options.page)
        }),
        value: function(d) {
            if (!arguments.length) {
                return this._parse(this.element.val())
            }
            b(this._value).call(this, d)
        },
        widget: function() {
            return this.uiSpinner
        }
    })
}(jQuery));
(function(d, f) {
    var b = 0,
        g = /#.*$/;

    function e() {
        return ++b
    }

    function c(h) {
        return h.hash.length > 1 && h.href.replace(g, "") === location.href.replace(g, "").replace(/\s/g, "%20")
    }
    d.widget("ui.tabs", {
        version: "1.9.2",
        delay: 300,
        options: {
            active: null,
            collapsible: false,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _create: function() {
            var i = this,
                h = this.options,
                j = h.active,
                k = location.hash.substring(1);
            this.running = false;
            this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", h.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function(l) {
                if (d(this).is(".ui-state-disabled")) {
                    l.preventDefault()
                }
            }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                if (d(this).closest("li").is(".ui-state-disabled")) {
                    this.blur()
                }
            });
            this._processTabs();
            if (j === null) {
                if (k) {
                    this.tabs.each(function(l, m) {
                        if (d(m).attr("aria-controls") === k) {
                            j = l;
                            return false
                        }
                    })
                }
                if (j === null) {
                    j = this.tabs.index(this.tabs.filter(".ui-tabs-active"))
                }
                if (j === null || j === -1) {
                    j = this.tabs.length ? 0 : false
                }
            }
            if (j !== false) {
                j = this.tabs.index(this.tabs.eq(j));
                if (j === -1) {
                    j = h.collapsible ? false : 0
                }
            }
            h.active = j;
            if (!h.collapsible && h.active === false && this.anchors.length) {
                h.active = 0
            }
            if (d.isArray(h.disabled)) {
                h.disabled = d.unique(h.disabled.concat(d.map(this.tabs.filter(".ui-state-disabled"), function(l) {
                    return i.tabs.index(l)
                }))).sort()
            }
            if (this.options.active !== false && this.anchors.length) {
                this.active = this._findActive(this.options.active)
            } else {
                this.active = d()
            }
            this._refresh();
            if (this.active.length) {
                this.load(h.active)
            }
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: !this.active.length ? d() : this._getPanelForTab(this.active)
            }
        },
        _tabKeydown: function(j) {
            var i = d(this.document[0].activeElement).closest("li"),
                h = this.tabs.index(i),
                k = true;
            if (this._handlePageNav(j)) {
                return
            }
            switch (j.keyCode) {
                case d.ui.keyCode.RIGHT:
                case d.ui.keyCode.DOWN:
                    h++;
                    break;
                case d.ui.keyCode.UP:
                case d.ui.keyCode.LEFT:
                    k = false;
                    h--;
                    break;
                case d.ui.keyCode.END:
                    h = this.anchors.length - 1;
                    break;
                case d.ui.keyCode.HOME:
                    h = 0;
                    break;
                case d.ui.keyCode.SPACE:
                    j.preventDefault();
                    clearTimeout(this.activating);
                    this._activate(h);
                    return;
                case d.ui.keyCode.ENTER:
                    j.preventDefault();
                    clearTimeout(this.activating);
                    this._activate(h === this.options.active ? false : h);
                    return;
                default:
                    return
            }
            j.preventDefault();
            clearTimeout(this.activating);
            h = this._focusNextTab(h, k);
            if (!j.ctrlKey) {
                i.attr("aria-selected", "false");
                this.tabs.eq(h).attr("aria-selected", "true");
                this.activating = this._delay(function() {
                    this.option("active", h)
                }, this.delay)
            }
        },
        _panelKeydown: function(h) {
            if (this._handlePageNav(h)) {
                return
            }
            if (h.ctrlKey && h.keyCode === d.ui.keyCode.UP) {
                h.preventDefault();
                this.active.focus()
            }
        },
        _handlePageNav: function(h) {
            if (h.altKey && h.keyCode === d.ui.keyCode.PAGE_UP) {
                this._activate(this._focusNextTab(this.options.active - 1, false));
                return true
            }
            if (h.altKey && h.keyCode === d.ui.keyCode.PAGE_DOWN) {
                this._activate(this._focusNextTab(this.options.active + 1, true));
                return true
            }
        },
        _findNextTab: function(i, j) {
            var h = this.tabs.length - 1;

            function k() {
                if (i > h) {
                    i = 0
                }
                if (i < 0) {
                    i = h
                }
                return i
            }
            while (d.inArray(k(), this.options.disabled) !== -1) {
                i = j ? i + 1 : i - 1
            }
            return i
        },
        _focusNextTab: function(h, i) {
            h = this._findNextTab(h, i);
            this.tabs.eq(h).focus();
            return h
        },
        _setOption: function(h, i) {
            if (h === "active") {
                this._activate(i);
                return
            }
            if (h === "disabled") {
                this._setupDisabled(i);
                return
            }
            this._super(h, i);
            if (h === "collapsible") {
                this.element.toggleClass("ui-tabs-collapsible", i);
                if (!i && this.options.active === false) {
                    this._activate(0)
                }
            }
            if (h === "event") {
                this._setupEvents(i)
            }
            if (h === "heightStyle") {
                this._setupHeightStyle(i)
            }
        },
        _tabId: function(h) {
            return h.attr("aria-controls") || "ui-tabs-" + e()
        },
        _sanitizeSelector: function(h) {
            return h ? h.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function() {
            var i = this.options,
                h = this.tablist.children(":has(a[href])");
            i.disabled = d.map(h.filter(".ui-state-disabled"), function(j) {
                return h.index(j)
            });
            this._processTabs();
            if (i.active === false || !this.anchors.length) {
                i.active = false;
                this.active = d()
            } else {
                if (this.active.length && !d.contains(this.tablist[0], this.active[0])) {
                    if (this.tabs.length === i.disabled.length) {
                        i.active = false;
                        this.active = d()
                    } else {
                        this._activate(this._findNextTab(Math.max(0, i.active - 1), false))
                    }
                } else {
                    i.active = this.tabs.index(this.active)
                }
            }
            this._refresh()
        },
        _refresh: function() {
            this._setupDisabled(this.options.disabled);
            this._setupEvents(this.options.event);
            this._setupHeightStyle(this.options.heightStyle);
            this.tabs.not(this.active).attr({
                "aria-selected": "false",
                tabIndex: -1
            });
            this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            });
            if (!this.active.length) {
                this.tabs.eq(0).attr("tabIndex", 0)
            } else {
                this.active.addClass("ui-tabs-active ui-state-active").attr({
                    "aria-selected": "true",
                    tabIndex: 0
                });
                this._getPanelForTab(this.active).show().attr({
                    "aria-expanded": "true",
                    "aria-hidden": "false"
                })
            }
        },
        _processTabs: function() {
            var h = this;
            this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist");
            this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                role: "tab",
                tabIndex: -1
            });
            this.anchors = this.tabs.map(function() {
                return d("a", this)[0]
            }).addClass("ui-tabs-anchor").attr({
                role: "presentation",
                tabIndex: -1
            });
            this.panels = d();
            this.anchors.each(function(o, m) {
                var j, k, n, l = d(m).uniqueId().attr("id"),
                    p = d(m).closest("li"),
                    q = p.attr("aria-controls");
                if (c(m)) {
                    j = m.hash;
                    k = h.element.find(h._sanitizeSelector(j))
                } else {
                    n = h._tabId(p);
                    j = "#" + n;
                    k = h.element.find(j);
                    if (!k.length) {
                        k = h._createPanel(n);
                        k.insertAfter(h.panels[o - 1] || h.tablist)
                    }
                    k.attr("aria-live", "polite")
                }
                if (k.length) {
                    h.panels = h.panels.add(k)
                }
                if (q) {
                    p.data("ui-tabs-aria-controls", q)
                }
                p.attr({
                    "aria-controls": j.substring(1),
                    "aria-labelledby": l
                });
                k.attr("aria-labelledby", l)
            });
            this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
        },
        _getList: function() {
            return this.element.find("ol,ul").eq(0)
        },
        _createPanel: function(h) {
            return d("<div>").attr("id", h).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", true)
        },
        _setupDisabled: function(k) {
            if (d.isArray(k)) {
                if (!k.length) {
                    k = false
                } else {
                    if (k.length === this.anchors.length) {
                        k = true
                    }
                }
            }
            for (var j = 0, h;
                (h = this.tabs[j]); j++) {
                if (k === true || d.inArray(j, k) !== -1) {
                    d(h).addClass("ui-state-disabled").attr("aria-disabled", "true")
                } else {
                    d(h).removeClass("ui-state-disabled").removeAttr("aria-disabled")
                }
            }
            this.options.disabled = k
        },
        _setupEvents: function(i) {
            var h = {
                click: function(j) {
                    j.preventDefault()
                }
            };
            if (i) {
                d.each(i.split(" "), function(k, j) {
                    h[j] = "_eventHandler"
                })
            }
            this._off(this.anchors.add(this.tabs).add(this.panels));
            this._on(this.anchors, h);
            this._on(this.tabs, {
                keydown: "_tabKeydown"
            });
            this._on(this.panels, {
                keydown: "_panelKeydown"
            });
            this._focusable(this.tabs);
            this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(h) {
            var j, k, i = this.element.parent();
            if (h === "fill") {
                if (!d.support.minHeight) {
                    k = i.css("overflow");
                    i.css("overflow", "hidden")
                }
                j = i.height();
                this.element.siblings(":visible").each(function() {
                    var m = d(this),
                        l = m.css("position");
                    if (l === "absolute" || l === "fixed") {
                        return
                    }
                    j -= m.outerHeight(true)
                });
                if (k) {
                    i.css("overflow", k)
                }
                this.element.children().not(this.panels).each(function() {
                    j -= d(this).outerHeight(true)
                });
                this.panels.each(function() {
                    d(this).height(Math.max(0, j - d(this).innerHeight() + d(this).height()))
                }).css("overflow", "auto")
            } else {
                if (h === "auto") {
                    j = 0;
                    this.panels.each(function() {
                        j = Math.max(j, d(this).height("").height())
                    }).height(j)
                }
            }
        },
        _eventHandler: function(h) {
            var q = this.options,
                l = this.active,
                m = d(h.currentTarget),
                k = m.closest("li"),
                o = k[0] === l[0],
                i = o && q.collapsible,
                j = i ? d() : this._getPanelForTab(k),
                n = !l.length ? d() : this._getPanelForTab(l),
                p = {
                    oldTab: l,
                    oldPanel: n,
                    newTab: i ? d() : k,
                    newPanel: j
                };
            h.preventDefault();
            if (k.hasClass("ui-state-disabled") || k.hasClass("ui-tabs-loading") || this.running || (o && !q.collapsible) || (this._trigger("beforeActivate", h, p) === false)) {
                return
            }
            q.active = i ? false : this.tabs.index(k);
            this.active = o ? d() : k;
            if (this.xhr) {
                this.xhr.abort()
            }
            if (!n.length && !j.length) {
                d.error("jQuery UI Tabs: Mismatching fragment identifier.")
            }
            if (j.length) {
                this.load(this.tabs.index(k), h)
            }
            this._toggle(h, p)
        },
        _toggle: function(n, m) {
            var l = this,
                h = m.newPanel,
                k = m.oldPanel;
            this.running = true;

            function j() {
                l.running = false;
                l._trigger("activate", n, m)
            }

            function i() {
                m.newTab.closest("li").addClass("ui-tabs-active ui-state-active");
                if (h.length && l.options.show) {
                    l._show(h, l.options.show, j)
                } else {
                    h.show();
                    j()
                }
            }
            if (k.length && this.options.hide) {
                this._hide(k, this.options.hide, function() {
                    m.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
                    i()
                })
            } else {
                m.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
                k.hide();
                i()
            }
            k.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            });
            m.oldTab.attr("aria-selected", "false");
            if (h.length && k.length) {
                m.oldTab.attr("tabIndex", -1)
            } else {
                if (h.length) {
                    this.tabs.filter(function() {
                        return d(this).attr("tabIndex") === 0
                    }).attr("tabIndex", -1)
                }
            }
            h.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            });
            m.newTab.attr({
                "aria-selected": "true",
                tabIndex: 0
            })
        },
        _activate: function(i) {
            var h, j = this._findActive(i);
            if (j[0] === this.active[0]) {
                return
            }
            if (!j.length) {
                j = this.active
            }
            h = j.find(".ui-tabs-anchor")[0];
            this._eventHandler({
                target: h,
                currentTarget: h,
                preventDefault: d.noop
            })
        },
        _findActive: function(h) {
            return h === false ? d() : this.tabs.eq(h)
        },
        _getIndex: function(h) {
            if (typeof h === "string") {
                h = this.anchors.index(this.anchors.filter("[href$='" + h + "']"))
            }
            return h
        },
        _destroy: function() {
            if (this.xhr) {
                this.xhr.abort()
            }
            this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible");
            this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role");
            this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeData("href.tabs").removeData("load.tabs").removeUniqueId();
            this.tabs.add(this.panels).each(function() {
                if (d.data(this, "ui-tabs-destroy")) {
                    d(this).remove()
                } else {
                    d(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
                }
            });
            this.tabs.each(function() {
                var h = d(this),
                    i = h.data("ui-tabs-aria-controls");
                if (i) {
                    h.attr("aria-controls", i)
                } else {
                    h.removeAttr("aria-controls")
                }
            });
            this.panels.show();
            if (this.options.heightStyle !== "content") {
                this.panels.css("height", "")
            }
        },
        enable: function(h) {
            var i = this.options.disabled;
            if (i === false) {
                return
            }
            if (h === f) {
                i = false
            } else {
                h = this._getIndex(h);
                if (d.isArray(i)) {
                    i = d.map(i, function(j) {
                        return j !== h ? j : null
                    })
                } else {
                    i = d.map(this.tabs, function(j, k) {
                        return k !== h ? k : null
                    })
                }
            }
            this._setupDisabled(i)
        },
        disable: function(h) {
            var i = this.options.disabled;
            if (i === true) {
                return
            }
            if (h === f) {
                i = true
            } else {
                h = this._getIndex(h);
                if (d.inArray(h, i) !== -1) {
                    return
                }
                if (d.isArray(i)) {
                    i = d.merge([h], i).sort()
                } else {
                    i = [h]
                }
            }
            this._setupDisabled(i)
        },
        load: function(j, n) {
            j = this._getIndex(j);
            var m = this,
                k = this.tabs.eq(j),
                i = k.find(".ui-tabs-anchor"),
                h = this._getPanelForTab(k),
                l = {
                    tab: k,
                    panel: h
                };
            if (c(i[0])) {
                return
            }
            this.xhr = d.ajax(this._ajaxSettings(i, n, l));
            if (this.xhr && this.xhr.statusText !== "canceled") {
                k.addClass("ui-tabs-loading");
                h.attr("aria-busy", "true");
                this.xhr.success(function(o) {
                    setTimeout(function() {
                        h.html(o);
                        m._trigger("load", n, l)
                    }, 1)
                }).complete(function(p, o) {
                    setTimeout(function() {
                        if (o === "abort") {
                            m.panels.stop(false, true)
                        }
                        k.removeClass("ui-tabs-loading");
                        h.removeAttr("aria-busy");
                        if (p === m.xhr) {
                            delete m.xhr
                        }
                    }, 1)
                })
            }
        },
        _ajaxSettings: function(h, k, j) {
            var i = this;
            return {
                url: h.attr("href"),
                beforeSend: function(m, l) {
                    return i._trigger("beforeLoad", k, d.extend({
                        jqXHR: m,
                        ajaxSettings: l
                    }, j))
                }
            }
        },
        _getPanelForTab: function(h) {
            var i = d(h).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + i))
        }
    });
    if (d.uiBackCompat !== false) {
        d.ui.tabs.prototype._ui = function(i, h) {
            return {
                tab: i,
                panel: h,
                index: this.anchors.index(i)
            }
        };
        d.widget("ui.tabs", d.ui.tabs, {
            url: function(i, h) {
                this.anchors.eq(i).attr("href", h)
            }
        });
        d.widget("ui.tabs", d.ui.tabs, {
            options: {
                ajaxOptions: null,
                cache: false
            },
            _create: function() {
                this._super();
                var h = this;
                this._on({
                    tabsbeforeload: function(i, j) {
                        if (d.data(j.tab[0], "cache.tabs")) {
                            i.preventDefault();
                            return
                        }
                        j.jqXHR.success(function() {
                            if (h.options.cache) {
                                d.data(j.tab[0], "cache.tabs", true)
                            }
                        })
                    }
                })
            },
            _ajaxSettings: function(i, j, k) {
                var h = this.options.ajaxOptions;
                return d.extend({}, h, {
                    error: function(n, l) {
                        try {
                            h.error(n, l, k.tab.closest("li").index(), k.tab[0])
                        } catch (m) {}
                    }
                }, this._superApply(arguments))
            },
            _setOption: function(h, i) {
                if (h === "cache" && i === false) {
                    this.anchors.removeData("cache.tabs")
                }
                this._super(h, i)
            },
            _destroy: function() {
                this.anchors.removeData("cache.tabs");
                this._super()
            },
            url: function(h) {
                this.anchors.eq(h).removeData("cache.tabs");
                this._superApply(arguments)
            }
        });
        d.widget("ui.tabs", d.ui.tabs, {
            abort: function() {
                if (this.xhr) {
                    this.xhr.abort()
                }
            }
        });
        d.widget("ui.tabs", d.ui.tabs, {
            options: {
                spinner: "<em>Loading&#8230;</em>"
            },
            _create: function() {
                this._super();
                this._on({
                    tabsbeforeload: function(j, k) {
                        if (j.target !== this.element[0] || !this.options.spinner) {
                            return
                        }
                        var i = k.tab.find("span"),
                            h = i.html();
                        i.html(this.options.spinner);
                        k.jqXHR.complete(function() {
                            i.html(h)
                        })
                    }
                })
            }
        });
        d.widget("ui.tabs", d.ui.tabs, {
            options: {
                enable: null,
                disable: null
            },
            enable: function(j) {
                var i = this.options,
                    h;
                if (j && i.disabled === true || (d.isArray(i.disabled) && d.inArray(j, i.disabled) !== -1)) {
                    h = true
                }
                this._superApply(arguments);
                if (h) {
                    this._trigger("enable", null, this._ui(this.anchors[j], this.panels[j]))
                }
            },
            disable: function(j) {
                var i = this.options,
                    h;
                if (j && i.disabled === false || (d.isArray(i.disabled) && d.inArray(j, i.disabled) === -1)) {
                    h = true
                }
                this._superApply(arguments);
                if (h) {
                    this._trigger("disable", null, this._ui(this.anchors[j], this.panels[j]))
                }
            }
        });
        d.widget("ui.tabs", d.ui.tabs, {
            options: {
                add: null,
                remove: null,
                tabTemplate: "<li><a href='#{href}'><span>#{label}</span></a></li>"
            },
            add: function(m, l, k) {
                if (k === f) {
                    k = this.anchors.length
                }
                var n, i, j = this.options,
                    h = d(j.tabTemplate.replace(/#\{href\}/g, m).replace(/#\{label\}/g, l)),
                    o = !m.indexOf("#") ? m.replace("#", "") : this._tabId(h);
                h.addClass("ui-state-default ui-corner-top").data("ui-tabs-destroy", true);
                h.attr("aria-controls", o);
                n = k >= this.tabs.length;
                i = this.element.find("#" + o);
                if (!i.length) {
                    i = this._createPanel(o);
                    if (n) {
                        if (k > 0) {
                            i.insertAfter(this.panels.eq(-1))
                        } else {
                            i.appendTo(this.element)
                        }
                    } else {
                        i.insertBefore(this.panels[k])
                    }
                }
                i.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").hide();
                if (n) {
                    h.appendTo(this.tablist)
                } else {
                    h.insertBefore(this.tabs[k])
                }
                j.disabled = d.map(j.disabled, function(p) {
                    return p >= k ? ++p : p
                });
                this.refresh();
                if (this.tabs.length === 1 && j.active === false) {
                    this.option("active", 0)
                }
                this._trigger("add", null, this._ui(this.anchors[k], this.panels[k]));
                return this
            },
            remove: function(j) {
                j = this._getIndex(j);
                var i = this.options,
                    k = this.tabs.eq(j).remove(),
                    h = this._getPanelForTab(k).remove();
                if (k.hasClass("ui-tabs-active") && this.anchors.length > 2) {
                    this._activate(j + (j + 1 < this.anchors.length ? 1 : -1))
                }
                i.disabled = d.map(d.grep(i.disabled, function(l) {
                    return l !== j
                }), function(l) {
                    return l >= j ? --l : l
                });
                this.refresh();
                this._trigger("remove", null, this._ui(k.find("a")[0], h[0]));
                return this
            }
        });
        d.widget("ui.tabs", d.ui.tabs, {
            length: function() {
                return this.anchors.length
            }
        });
        d.widget("ui.tabs", d.ui.tabs, {
            options: {
                idPrefix: "ui-tabs-"
            },
            _tabId: function(i) {
                var h = i.is("li") ? i.find("a[href]") : i;
                h = h[0];
                return d(h).closest("li").attr("aria-controls") || h.title && h.title.replace(/\s/g, "_").replace(/[^\w\u00c0-\uFFFF\-]/g, "") || this.options.idPrefix + e()
            }
        });
        d.widget("ui.tabs", d.ui.tabs, {
            options: {
                panelTemplate: "<div></div>"
            },
            _createPanel: function(h) {
                return d(this.options.panelTemplate).attr("id", h).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", true)
            }
        });
        d.widget("ui.tabs", d.ui.tabs, {
            _create: function() {
                var h = this.options;
                if (h.active === null && h.selected !== f) {
                    h.active = h.selected === -1 ? false : h.selected
                }
                this._super();
                h.selected = h.active;
                if (h.selected === false) {
                    h.selected = -1
                }
            },
            _setOption: function(i, j) {
                if (i !== "selected") {
                    return this._super(i, j)
                }
                var h = this.options;
                this._super("active", j === -1 ? false : j);
                h.selected = h.active;
                if (h.selected === false) {
                    h.selected = -1
                }
            },
            _eventHandler: function() {
                this._superApply(arguments);
                this.options.selected = this.options.active;
                if (this.options.selected === false) {
                    this.options.selected = -1
                }
            }
        });
        d.widget("ui.tabs", d.ui.tabs, {
            options: {
                show: null,
                select: null
            },
            _create: function() {
                this._super();
                if (this.options.active !== false) {
                    this._trigger("show", null, this._ui(this.active.find(".ui-tabs-anchor")[0], this._getPanelForTab(this.active)[0]))
                }
            },
            _trigger: function(k, l, m) {
                var j, h, i = this._superApply(arguments);
                if (!i) {
                    return false
                }
                if (k === "beforeActivate") {
                    j = m.newTab.length ? m.newTab : m.oldTab;
                    h = m.newPanel.length ? m.newPanel : m.oldPanel;
                    i = this._super("select", l, {
                        tab: j.find(".ui-tabs-anchor")[0],
                        panel: h[0],
                        index: j.closest("li").index()
                    })
                } else {
                    if (k === "activate" && m.newTab.length) {
                        i = this._super("show", l, {
                            tab: m.newTab.find(".ui-tabs-anchor")[0],
                            panel: m.newPanel[0],
                            index: m.newTab.closest("li").index()
                        })
                    }
                }
                return i
            }
        });
        d.widget("ui.tabs", d.ui.tabs, {
            select: function(h) {
                h = this._getIndex(h);
                if (h === -1) {
                    if (this.options.collapsible && this.options.selected !== -1) {
                        h = this.options.selected
                    } else {
                        return
                    }
                }
                this.anchors.eq(h).trigger(this.options.event + this.eventNamespace)
            }
        });
        (function() {
            var h = 0;
            d.widget("ui.tabs", d.ui.tabs, {
                options: {
                    cookie: null
                },
                _create: function() {
                    var i = this.options,
                        j;
                    if (i.active == null && i.cookie) {
                        j = parseInt(this._cookie(), 10);
                        if (j === -1) {
                            j = false
                        }
                        i.active = j
                    }
                    this._super()
                },
                _cookie: function(j) {
                    var i = [this.cookie || (this.cookie = this.options.cookie.name || "ui-tabs-" + (++h))];
                    if (arguments.length) {
                        i.push(j === false ? -1 : j);
                        i.push(this.options.cookie)
                    }
                    return d.cookie.apply(null, i)
                },
                _refresh: function() {
                    this._super();
                    if (this.options.cookie) {
                        this._cookie(this.options.active, this.options.cookie)
                    }
                },
                _eventHandler: function() {
                    this._superApply(arguments);
                    if (this.options.cookie) {
                        this._cookie(this.options.active, this.options.cookie)
                    }
                },
                _destroy: function() {
                    this._super();
                    if (this.options.cookie) {
                        this._cookie(null, this.options.cookie)
                    }
                }
            })
        })();
        d.widget("ui.tabs", d.ui.tabs, {
            _trigger: function(i, j, k) {
                var h = d.extend({}, k);
                if (i === "load") {
                    h.panel = h.panel[0];
                    h.tab = h.tab.find(".ui-tabs-anchor")[0]
                }
                return this._super(i, j, h)
            }
        });
        d.widget("ui.tabs", d.ui.tabs, {
            options: {
                fx: null
            },
            _getFx: function() {
                var i, h, j = this.options.fx;
                if (j) {
                    if (d.isArray(j)) {
                        i = j[0];
                        h = j[1]
                    } else {
                        i = h = j
                    }
                }
                return j ? {
                    show: h,
                    hide: i
                } : null
            },
            _toggle: function(o, n) {
                var m = this,
                    h = n.newPanel,
                    k = n.oldPanel,
                    l = this._getFx();
                if (!l) {
                    return this._super(o, n)
                }
                m.running = true;

                function j() {
                    m.running = false;
                    m._trigger("activate", o, n)
                }

                function i() {
                    n.newTab.closest("li").addClass("ui-tabs-active ui-state-active");
                    if (h.length && l.show) {
                        h.animate(l.show, l.show.duration, function() {
                            j()
                        })
                    } else {
                        h.show();
                        j()
                    }
                }
                if (k.length && l.hide) {
                    k.animate(l.hide, l.hide.duration, function() {
                        n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
                        i()
                    })
                } else {
                    n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
                    k.hide();
                    i()
                }
            }
        })
    }
})(jQuery);
(function(e) {
    var c = 0;

    function d(g, h) {
        var f = (g.attr("aria-describedby") || "").split(/\s+/);
        f.push(h);
        g.data("ui-tooltip-id", h).attr("aria-describedby", e.trim(f.join(" ")))
    }

    function b(h) {
        var i = h.data("ui-tooltip-id"),
            g = (h.attr("aria-describedby") || "").split(/\s+/),
            f = e.inArray(i, g);
        if (f !== -1) {
            g.splice(f, 1)
        }
        h.removeData("ui-tooltip-id");
        g = e.trim(g.join(" "));
        if (g) {
            h.attr("aria-describedby", g)
        } else {
            h.removeAttr("aria-describedby")
        }
    }
    e.widget("ui.tooltip", {
        version: "1.9.2",
        options: {
            content: function() {
                return e(this).attr("title")
            },
            hide: true,
            items: "[title]:not([disabled])",
            position: {
                my: "left top+15",
                at: "left bottom",
                collision: "flipfit flip"
            },
            show: true,
            tooltipClass: null,
            track: false,
            close: null,
            open: null
        },
        _create: function() {
            this._on({
                mouseover: "open",
                focusin: "open"
            });
            this.tooltips = {};
            this.parents = {};
            if (this.options.disabled) {
                this._disable()
            }
        },
        _setOption: function(f, h) {
            var g = this;
            if (f === "disabled") {
                this[h ? "_disable" : "_enable"]();
                this.options[f] = h;
                return
            }
            this._super(f, h);
            if (f === "content") {
                e.each(this.tooltips, function(j, i) {
                    g._updateContent(i)
                })
            }
        },
        _disable: function() {
            var f = this;
            e.each(this.tooltips, function(i, g) {
                var h = e.Event("blur");
                h.target = h.currentTarget = g[0];
                f.close(h, true)
            });
            this.element.find(this.options.items).andSelf().each(function() {
                var g = e(this);
                if (g.is("[title]")) {
                    g.data("ui-tooltip-title", g.attr("title")).attr("title", "")
                }
            })
        },
        _enable: function() {
            this.element.find(this.options.items).andSelf().each(function() {
                var f = e(this);
                if (f.data("ui-tooltip-title")) {
                    f.attr("title", f.data("ui-tooltip-title"))
                }
            })
        },
        open: function(g) {
            var f = this,
                h = e(g ? g.target : this.element).closest(this.options.items);
            if (!h.length || h.data("ui-tooltip-id")) {
                return
            }
            if (h.attr("title")) {
                h.data("ui-tooltip-title", h.attr("title"))
            }
            h.data("ui-tooltip-open", true);
            if (g && g.type === "mouseover") {
                h.parents().each(function() {
                    var j = e(this),
                        i;
                    if (j.data("ui-tooltip-open")) {
                        i = e.Event("blur");
                        i.target = i.currentTarget = this;
                        f.close(i, true)
                    }
                    if (j.attr("title")) {
                        j.uniqueId();
                        f.parents[this.id] = {
                            element: this,
                            title: j.attr("title")
                        };
                        j.attr("title", "")
                    }
                })
            }
            this._updateContent(h, g)
        },
        _updateContent: function(k, j) {
            var i, f = this.options.content,
                h = this,
                g = j ? j.type : null;
            if (typeof f === "string") {
                return this._open(j, k, f)
            }
            i = f.call(k[0], function(l) {
                if (!k.data("ui-tooltip-open")) {
                    return
                }
                h._delay(function() {
                    if (j) {
                        j.type = g
                    }
                    this._open(j, k, l)
                })
            });
            if (i) {
                this._open(j, k, i)
            }
        },
        _open: function(j, l, i) {
            var k, h, g, m = e.extend({}, this.options.position);
            if (!i) {
                return
            }
            k = this._find(l);
            if (k.length) {
                k.find(".ui-tooltip-content").html(i);
                return
            }
            if (l.is("[title]")) {
                if (j && j.type === "mouseover") {
                    l.attr("title", "")
                } else {
                    l.removeAttr("title")
                }
            }
            k = this._tooltip(l);
            d(l, k.attr("id"));
            k.find(".ui-tooltip-content").html(i);

            function f(n) {
                m.of = n;
                if (k.is(":hidden")) {
                    return
                }
                k.position(m)
            }
            if (this.options.track && j && /^mouse/.test(j.type)) {
                this._on(this.document, {
                    mousemove: f
                });
                f(j)
            } else {
                k.position(e.extend({
                    of: l
                }, this.options.position))
            }
            k.hide();
            this._show(k, this.options.show);
            if (this.options.show && this.options.show.delay) {
                g = setInterval(function() {
                    if (k.is(":visible")) {
                        f(m.of);
                        clearInterval(g)
                    }
                }, e.fx.interval)
            }
            this._trigger("open", j, {
                tooltip: k
            });
            h = {
                keyup: function(n) {
                    if (n.keyCode === e.ui.keyCode.ESCAPE) {
                        var o = e.Event(n);
                        o.currentTarget = l[0];
                        this.close(o, true)
                    }
                },
                remove: function() {
                    this._removeTooltip(k)
                }
            };
            if (!j || j.type === "mouseover") {
                h.mouseleave = "close"
            }
            if (!j || j.type === "focusin") {
                h.focusout = "close"
            }
            this._on(true, l, h)
        },
        close: function(g) {
            var f = this,
                i = e(g ? g.currentTarget : this.element),
                h = this._find(i);
            if (this.closing) {
                return
            }
            if (i.data("ui-tooltip-title")) {
                i.attr("title", i.data("ui-tooltip-title"))
            }
            b(i);
            h.stop(true);
            this._hide(h, this.options.hide, function() {
                f._removeTooltip(e(this))
            });
            i.removeData("ui-tooltip-open");
            this._off(i, "mouseleave focusout keyup");
            if (i[0] !== this.element[0]) {
                this._off(i, "remove")
            }
            this._off(this.document, "mousemove");
            if (g && g.type === "mouseleave") {
                e.each(this.parents, function(k, j) {
                    e(j.element).attr("title", j.title);
                    delete f.parents[k]
                })
            }
            this.closing = true;
            this._trigger("close", g, {
                tooltip: h
            });
            this.closing = false
        },
        _tooltip: function(f) {
            var h = "ui-tooltip-" + c++,
                g = e("<div>").attr({
                    id: h,
                    role: "tooltip"
                }).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
            e("<div>").addClass("ui-tooltip-content").appendTo(g);
            g.appendTo(this.document[0].body);
            if (e.fn.bgiframe) {
                g.bgiframe()
            }
            this.tooltips[h] = f;
            return g
        },
        _find: function(f) {
            var g = f.data("ui-tooltip-id");
            return g ? e("#" + g) : e()
        },
        _removeTooltip: function(f) {
            f.remove();
            delete this.tooltips[f.attr("id")]
        },
        _destroy: function() {
            var f = this;
            e.each(this.tooltips, function(i, g) {
                var h = e.Event("blur");
                h.target = h.currentTarget = g[0];
                f.close(h, true);
                e("#" + i).remove();
                if (g.data("ui-tooltip-title")) {
                    g.attr("title", g.data("ui-tooltip-title"));
                    g.removeData("ui-tooltip-title")
                }
            })
        }
    });
    e(document).ready(function() {
        e(window).scroll(function() {
            if (e(this).scrollTop() > 200) {
                e(".go-top").fadeIn(500)
            } else {
                e(".go-top").fadeOut(300)
            }
        });
        e(".go-top").click(function(f) {
            f.preventDefault();
            e("html, body").animate({
                scrollTop: 0
            }, 300)
        })
    })
}(jQuery));
(function() {
    var b, d, c;
    $.fn.access = function(e) {
        var h, g, f;
        if (e) {
            f = $("<span />");
            f.insertBefore(this);
            f.attr("tabindex", "-1").on("blur focusout", function() {
                return $(this).remove()
            }).focus()
        } else {
            h = "original-tabindex";
            g = $(this);
            g.data(h, g.attr("tabindex") || false);
            g.attr("tabindex", "-1").on("blur focusout", function() {
                if (g.data(h) !== false) {
                    return g.attr("tabindex", g.data(h))
                } else {
                    g.removeAttr("tabindex");
                    g.off("blur focusout");
                    return g.data(h, false)
                }
            }).focus()
        }
        return this
    };
    b = null;
    $.announce = function(g, e) {
        var f, h;
        e = e || "polite";
        f = $("#a11y_announcer").attr("aria-live", "off");
        h = function() {
            f.html("");
            b = null
        };
        f.attr("aria-live", e);
        f.html(g);
        clearTimeout(b);
        b = setTimeout(h, 500);
        return this
    };
    c = function(e) {
        return $.expr.filters.visible(e) && !$(e).parents().addBack().filter(function() {
            return $.css(this, "visibility") === "hidden"
        }).length
    };
    d = function(g, e) {
        var f, i, h, j;
        j = g.nodeName.toLowerCase();
        if ("area" === j) {
            i = g.parentNode;
            h = i.name;
            if (!g.href || !h || i.nodeName.toLowerCase() !== "map") {
                return false
            }
            f = $("img[usemap=#" + h + "]")[0];
            return !!f && c(f)
        }
        return (/input|select|textarea|button|object/.test(j) ? !g.disabled : "a" === j ? g.href || e : e) && c(g)
    };
    $.extend($.expr[":"], {
        data: ($.expr.createPseudo ? $.expr.createPseudo(function(e) {
            return function(f) {
                return !!$.data(f, e)
            }
        }) : function(g, f, e) {
            return !!$.data(g, e[3])
        }),
        focusable: function(e) {
            return d(e, !isNaN($.attr(e, "tabindex")))
        },
        tabbable: function(g) {
            var f, e;
            e = $.attr(g, "tabindex");
            f = isNaN(e);
            return (f || e >= 0) && d(g, !f)
        }
    })
}).call(this); + function(c) {
    function d(g) {
        return this.each(function() {
            var h = c(this),
                e = h.data("bs.affix"),
                i = "object" == typeof g && g;
            e || h.data("bs.affix", e = new b(this, i)), "string" == typeof g && e[g]()
        })
    }
    var b = function(g, h) {
        this.options = c.extend({}, b.DEFAULTS, h), this.$target = c(this.options.target).on("scroll.bs.affix.data-api", c.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", c.proxy(this.checkPositionWithEventLoop, this)), this.$element = c(g), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    b.VERSION = "3.3.4", b.RESET = "affix affix-top affix-bottom", b.DEFAULTS = {
        offset: 0,
        target: window
    }, b.prototype.getState = function(w, u, p, j) {
        var x = this.$target.scrollTop(),
            k = this.$element.offset(),
            v = this.$target.height();
        if (null != p && "top" == this.affixed) {
            return p > x ? "top" : !1
        }
        if ("bottom" == this.affixed) {
            return null != p ? x + this.unpin <= k.top ? !1 : "bottom" : w - j >= x + v ? !1 : "bottom"
        }
        var g = null == this.affixed,
            m = g ? x : k.top,
            q = g ? v : u;
        return null != p && p >= x ? "top" : null != j && m + q >= w - j ? "bottom" : !1
    }, b.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) {
            return this.pinnedOffset
        }
        this.$element.removeClass(b.RESET).addClass("affix");
        var g = this.$target.scrollTop(),
            h = this.$element.offset();
        return this.pinnedOffset = h.top - g
    }, b.prototype.checkPositionWithEventLoop = function() {
        setTimeout(c.proxy(this.checkPosition, this), 1)
    }, b.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var p = this.$element.height(),
                q = this.options.offset,
                k = q.top,
                t = q.bottom,
                i = c(document.body).height();
            "object" != typeof q && (t = k = q), "function" == typeof k && (k = q.top(this.$element)), "function" == typeof t && (t = q.bottom(this.$element));
            var m = this.getState(i, p, k, t);
            if (this.affixed != m) {
                null != this.unpin && this.$element.css("top", "");
                var g = "affix" + (m ? "-" + m : ""),
                    j = c.Event(g + ".bs.affix");
                if (this.$element.trigger(j), j.isDefaultPrevented()) {
                    return
                }
                this.affixed = m, this.unpin = "bottom" == m ? this.getPinnedOffset() : null, this.$element.removeClass(b.RESET).addClass(g).trigger(g.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == m && this.$element.offset({
                top: i - p - t
            })
        }
    };
    var f = c.fn.affix;
    c.fn.affix = d, c.fn.affix.Constructor = b, c.fn.affix.noConflict = function() {
        return c.fn.affix = f, this
    }, c(window).on("load", function() {
        c('[data-spy="affix"]').each(function() {
            var e = c(this),
                g = e.data();
            g.offset = g.offset || {}, null != g.offsetBottom && (g.offset.bottom = g.offsetBottom), null != g.offsetTop && (g.offset.top = g.offsetTop), d.call(e, g)
        })
    })
}(jQuery), + function(c) {
    function f(h) {
        return this.each(function() {
            var e = c(this),
                j = e.data("bs.alert");
            j || e.data("bs.alert", j = new g(this)), "string" == typeof h && j[h].call(e)
        })
    }
    var b = '[data-dismiss="alert"]',
        g = function(h) {
            c(h).on("click", b, this.close)
        };
    g.VERSION = "3.3.4", g.TRANSITION_DURATION = 150, g.prototype.close = function(l) {
        function j() {
            h.detach().trigger("closed.bs.alert").remove()
        }
        var k = c(this),
            m = k.attr("data-target");
        m || (m = k.attr("href"), m = m && m.replace(/.*(?=#[^\s]*$)/, ""));
        var h = c(m);
        l && l.preventDefault(), h.length || (h = k.closest(".alert")), h.trigger(l = c.Event("close.bs.alert")), l.isDefaultPrevented() || (h.removeClass("in"), c.support.transition && h.hasClass("fade") ? h.one("bsTransitionEnd", j).emulateTransitionEnd(g.TRANSITION_DURATION) : j())
    };
    var d = c.fn.alert;
    c.fn.alert = f, c.fn.alert.Constructor = g, c.fn.alert.noConflict = function() {
        return c.fn.alert = d, this
    }, c(document).on("click.bs.alert.data-api", b, g.prototype.close)
}(jQuery), + function(c) {
    function d(g) {
        return this.each(function() {
            var h = c(this),
                e = h.data("bs.button"),
                i = "object" == typeof g && g;
            e || h.data("bs.button", e = new b(this, i)), "toggle" == g ? e.toggle() : g && e.setState(g)
        })
    }
    var b = function(g, h) {
        this.$element = c(g), this.options = c.extend({}, b.DEFAULTS, h), this.isLoading = !1
    };
    b.VERSION = "3.3.5", b.DEFAULTS = {
        loadingText: "loading..."
    }, b.prototype.setState = function(j) {
        var g = "disabled",
            k = this.$element,
            h = k.is("input") ? "val" : "html",
            l = k.data();
        j += "Text", null == l.resetText && k.data("resetText", k[h]()), setTimeout(c.proxy(function() {
            k[h](null == l[j] ? this.options[j] : l[j]), "loadingText" == j ? (this.isLoading = !0, k.addClass(g).attr(g, g)) : this.isLoading && (this.isLoading = !1, k.removeClass(g).removeAttr(g))
        }, this), 0)
    }, b.prototype.toggle = function() {
        var h = !0,
            j = this.$element.closest('[data-toggle="buttons"]');
        if (j.length) {
            var g = this.$element.find("input");
            "radio" == g.prop("type") ? (g.prop("checked") && (h = !1), j.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == g.prop("type") && (g.prop("checked") !== this.$element.hasClass("active") && (h = !1), this.$element.toggleClass("active")), g.prop("checked", this.$element.hasClass("active")), h && g.trigger("change")
        } else {
            this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
        }
    };
    var f = c.fn.button;
    c.fn.button = d, c.fn.button.Constructor = b, c.fn.button.noConflict = function() {
        return c.fn.button = f, this
    }, c(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        var g = c(e.target);
        g.hasClass("btn") || (g = g.closest(".btn")), d.call(g, "toggle"), c(e.target).is('input[type="radio"]') || c(e.target).is('input[type="checkbox"]') || e.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(g) {
        c(g.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(g.type))
    })
}(jQuery), + function(c) {
    function f(h) {
        return this.each(function() {
            var j = c(this),
                i = j.data("bs.carousel"),
                k = c.extend({}, b.DEFAULTS, j.data(), "object" == typeof h && h),
                e = "string" == typeof h ? h : k.slide;
            i || j.data("bs.carousel", i = new b(this, k)), "number" == typeof h ? i.to(h) : e ? i[e]() : k.interval && i.pause().cycle()
        })
    }
    var b = function(j, h) {
        this.$element = c(j), this.$indicators = this.$element.find(".carousel-indicators"), this.options = h, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", c.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", c.proxy(this.pause, this)).on("mouseleave.bs.carousel", c.proxy(this.cycle, this))
    };
    b.VERSION = "3.3.4", b.TRANSITION_DURATION = 600, b.DEFAULTS = {
        interval: 5000,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, b.prototype.keydown = function(e) {
        if (!/input|textarea/i.test(e.target.tagName)) {
            switch (e.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            e.preventDefault()
        }
    }, b.prototype.cycle = function(h) {
        return h || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(c.proxy(this.next, this), this.options.interval)), this
    }, b.prototype.getItemIndex = function(e) {
        return this.$items = e.parent().children(".item"), this.$items.index(e || this.$active)
    }, b.prototype.getItemForDirection = function(j, l) {
        var h = this.getItemIndex(l),
            m = "prev" == j && 0 === h || "next" == j && h == this.$items.length - 1;
        if (m && !this.options.wrap) {
            return l
        }
        var k = "prev" == j ? -1 : 1,
            p = (h + k) % this.$items.length;
        return this.$items.eq(p)
    }, b.prototype.to = function(j) {
        var k = this,
            h = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return j > this.$items.length - 1 || 0 > j ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            k.to(j)
        }) : h == j ? this.pause().cycle() : this.slide(j > h ? "next" : "prev", this.$items.eq(j))
    }, b.prototype.pause = function(h) {
        return h || (this.paused = !0), this.$element.find(".next, .prev").length && c.support.transition && (this.$element.trigger(c.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, b.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, b.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, b.prototype.slide = function(u, k) {
        var y = this.$element.find(".item.active"),
            m = k || this.getItemForDirection(u, y),
            x = this.interval,
            i = "next" == u ? "left" : "right",
            q = this;
        if (m.hasClass("active")) {
            return this.sliding = !1
        }
        var t = m[0],
            v = c.Event("slide.bs.carousel", {
                relatedTarget: t,
                direction: i
            });
        if (this.$element.trigger(v), !v.isDefaultPrevented()) {
            if (this.sliding = !0, x && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var j = c(this.$indicators.children()[this.getItemIndex(m)]);
                j && j.addClass("active")
            }
            var w = c.Event("slid.bs.carousel", {
                relatedTarget: t,
                direction: i
            });
            return c.support.transition && this.$element.hasClass("slide") ? (m.addClass(u), m[0].offsetWidth, y.addClass(i), m.addClass(i), y.one("bsTransitionEnd", function() {
                m.removeClass([u, i].join(" ")).addClass("active"), y.removeClass(["active", i].join(" ")), q.sliding = !1, setTimeout(function() {
                    q.$element.trigger(w)
                }, 0)
            }).emulateTransitionEnd(b.TRANSITION_DURATION)) : (y.removeClass("active"), m.addClass("active"), this.sliding = !1, this.$element.trigger(w)), x && this.cycle(), this
        }
    };
    var g = c.fn.carousel;
    c.fn.carousel = f, c.fn.carousel.Constructor = b, c.fn.carousel.noConflict = function() {
        return c.fn.carousel = g, this
    };
    var d = function(h) {
        var l, j = c(this),
            m = c(j.attr("data-target") || (l = j.attr("href")) && l.replace(/.*(?=#[^\s]+$)/, ""));
        if (m.hasClass("carousel")) {
            var e = c.extend({}, m.data(), j.data()),
                k = j.attr("data-slide-to");
            k && (e.interval = !1), f.call(m, e), k && m.data("bs.carousel").to(k), h.preventDefault()
        }
    };
    c(document).on("click.bs.carousel.data-api", "[data-slide]", d).on("click.bs.carousel.data-api", "[data-slide-to]", d), c(window).on("load", function() {
        c('[data-ride="carousel"]').each(function() {
            var e = c(this);
            f.call(e, e.data())
        })
    })
}(jQuery), + function(c) {
    function f(j) {
        var h, k = j.attr("data-target") || (h = j.attr("href")) && h.replace(/.*(?=#[^\s]+$)/, "");
        return c(k)
    }

    function b(h) {
        return this.each(function() {
            var e = c(this),
                j = e.data("bs.collapse"),
                k = c.extend({}, g.DEFAULTS, e.data(), "object" == typeof h && h);
            !j && k.toggle && /show|hide/.test(h) && (k.toggle = !1), j || e.data("bs.collapse", j = new g(this, k)), "string" == typeof h && j[h]()
        })
    }
    var g = function(j, h) {
        this.$element = c(j), this.options = c.extend({}, g.DEFAULTS, h), this.$trigger = c('[data-toggle="collapse"][href="#' + j.id + '"],[data-toggle="collapse"][data-target="#' + j.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    g.VERSION = "3.3.4", g.TRANSITION_DURATION = 350, g.DEFAULTS = {
        toggle: !0
    }, g.prototype.dimension = function() {
        var e = this.$element.hasClass("width");
        return e ? "width" : "height"
    }, g.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var m, j = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(j && j.length && (m = j.data("bs.collapse"), m && m.transitioning))) {
                var o = c.Event("show.bs.collapse");
                if (this.$element.trigger(o), !o.isDefaultPrevented()) {
                    j && j.length && (b.call(j, "hide"), m || j.data("bs.collapse", null));
                    var i = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[i](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var k = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[i](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!c.support.transition) {
                        return k.call(this)
                    }
                    var h = c.camelCase(["scroll", i].join("-"));
                    this.$element.one("bsTransitionEnd", c.proxy(k, this)).emulateTransitionEnd(g.TRANSITION_DURATION)[i](this.$element[0][h])
                }
            }
        }
    }, g.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var k = c.Event("hide.bs.collapse");
            if (this.$element.trigger(k), !k.isDefaultPrevented()) {
                var h = this.dimension();
                this.$element[h](this.$element[h]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var j = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return c.support.transition ? void this.$element[h](0).one("bsTransitionEnd", c.proxy(j, this)).emulateTransitionEnd(g.TRANSITION_DURATION) : j.call(this)
            }
        }
    }, g.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, g.prototype.getParent = function() {
        return c(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(c.proxy(function(e, j) {
            var h = c(j);
            this.addAriaAndCollapsedClass(f(h), h)
        }, this)).end()
    }, g.prototype.addAriaAndCollapsedClass = function(j, k) {
        var h = j.hasClass("in");
        j.attr("aria-expanded", h), k.toggleClass("collapsed", !h).attr("aria-expanded", h)
    };
    var d = c.fn.collapse;
    c.fn.collapse = b, c.fn.collapse.Constructor = g, c.fn.collapse.noConflict = function() {
        return c.fn.collapse = d, this
    }, c(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(j) {
        var h = c(this);
        h.attr("data-target") || j.preventDefault();
        var k = f(h),
            e = k.data("bs.collapse"),
            i = e ? "toggle" : h.data();
        b.call(k, i)
    })
}(jQuery), + function(d) {
    function h(i) {
        i && 3 === i.which || (d(f).remove(), d(k).each(function() {
            var l = d(this),
                e = c(l),
                m = {
                    relatedTarget: this
                };
            e.hasClass("open") && (e.trigger(i = d.Event("hide.bs.dropdown", m)), i.isDefaultPrevented() || (l.attr("aria-expanded", "false"), e.removeClass("open").trigger("hidden.bs.dropdown", m)))
        }))
    }

    function c(m) {
        var l = m.attr("data-target");
        l || (l = m.attr("href"), l = l && /#[A-Za-z]/.test(l) && l.replace(/.*(?=#[^\s]*$)/, ""));
        var n = l && d(l);
        return n && n.length ? n : m.parent()
    }

    function j(i) {
        return this.each(function() {
            var e = d(this),
                l = e.data("bs.dropdown");
            l || e.data("bs.dropdown", l = new b(this)), "string" == typeof i && l[i].call(e)
        })
    }
    var f = ".dropdown-backdrop",
        k = '[data-toggle="dropdown"]',
        b = function(i) {
            d(i).on("click.bs.dropdown", this.toggle)
        };
    b.VERSION = "3.3.4", b.prototype.toggle = function(m) {
        var i = d(this);
        if (!i.is(".disabled, :disabled")) {
            var p = c(i),
                e = p.hasClass("open");
            if (h(), !e) {
                "ontouchstart" in document.documentElement && !p.closest(".navbar-nav").length && d('<div class="dropdown-backdrop"/>').insertAfter(d(this)).on("click", h);
                var l = {
                    relatedTarget: this
                };
                if (p.trigger(m = d.Event("show.bs.dropdown", l)), m.isDefaultPrevented()) {
                    return
                }
                i.trigger("focus").attr("aria-expanded", "true"), p.toggleClass("open").trigger("shown.bs.dropdown", l)
            }
            return !1
        }
    }, b.prototype.keydown = function(t) {
        if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName)) {
            var u = d(this);
            if (t.preventDefault(), t.stopPropagation(), !u.is(".disabled, :disabled")) {
                var p = c(u),
                    m = p.hasClass("open");
                if (!m && 27 != t.which || m && 27 == t.which) {
                    return 27 == t.which && p.find(k).trigger("focus"), u.trigger("click")
                }
                var q = " li:not(.disabled):visible a",
                    i = p.find('[role="menu"]' + q + ', [role="listbox"]' + q);
                if (i.length) {
                    var n = i.index(t.target);
                    38 == t.which && n > 0 && n--, 40 == t.which && n < i.length - 1 && n++, ~n || (n = 0), i.eq(n).trigger("focus")
                }
            }
        }
    };
    var g = d.fn.dropdown;
    d.fn.dropdown = j, d.fn.dropdown.Constructor = b, d.fn.dropdown.noConflict = function() {
        return d.fn.dropdown = g, this
    }, d(document).on("click.bs.dropdown.data-api", h).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
        e.stopPropagation()
    }).on("click.bs.dropdown.data-api", k, b.prototype.toggle).on("keydown.bs.dropdown.data-api", k, b.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', b.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', b.prototype.keydown)
}(jQuery), + function(c) {
    function f(h) {
        return this.each(function() {
            var i = c(this),
                e = i.data("bs.tab");
            e || i.data("bs.tab", e = new b(this)), "string" == typeof h && e[h]()
        })
    }
    var b = function(h) {
        this.element = c(h)
    };
    b.VERSION = "3.3.4", b.TRANSITION_DURATION = 150, b.prototype.show = function() {
        var m = this.element,
            j = m.closest("ul:not(.dropdown-menu)"),
            p = m.data("target");
        if (p || (p = m.attr("href"), p = p && p.replace(/.*(?=#[^\s]*$)/, "")), !m.parent("li").hasClass("active")) {
            var k = j.find(".active:last a"),
                q = c.Event("hide.bs.tab", {
                    relatedTarget: m[0]
                }),
                h = c.Event("show.bs.tab", {
                    relatedTarget: k[0]
                });
            if (k.trigger(q), m.trigger(h), !h.isDefaultPrevented() && !q.isDefaultPrevented()) {
                var l = c(p);
                this.activate(m.closest("li"), j), this.activate(l, l.parent(), function() {
                    k.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: m[0]
                    }), m.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: k[0]
                    })
                })
            }
        }
    }, b.prototype.activate = function(k, l, i) {
        function m() {
            h.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), k.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), j ? (k[0].offsetWidth, k.addClass("in")) : k.removeClass("fade"), k.parent(".dropdown-menu").length && k.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), i && i()
        }
        var h = l.find("> .active"),
            j = i && c.support.transition && (h.length && h.hasClass("fade") || !!l.find("> .fade").length);
        h.length && j ? h.one("bsTransitionEnd", m).emulateTransitionEnd(b.TRANSITION_DURATION) : m(), h.removeClass("in")
    };
    var g = c.fn.tab;
    c.fn.tab = f, c.fn.tab.Constructor = b, c.fn.tab.noConflict = function() {
        return c.fn.tab = g, this
    };
    var d = function(e) {
        e.preventDefault(), f.call(c(this), "show")
    };
    c(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', d).on("click.bs.tab.data-api", '[data-toggle="pill"]', d)
}(jQuery), + function(b) {
    function c() {
        var f = document.createElement("bootstrap"),
            g = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var d in g) {
            if (void 0 !== f.style[d]) {
                return {
                    end: g[d]
                }
            }
        }
        return !1
    }
    b.fn.emulateTransitionEnd = function(g) {
        var d = !1,
            h = this;
        b(this).one("bsTransitionEnd", function() {
            d = !0
        });
        var f = function() {
            d || b(h).trigger(b.support.transition.end)
        };
        return setTimeout(f, g), this
    }, b(function() {
        b.support.transition = c(), b.support.transition && (b.event.special.bsTransitionEnd = {
            bindType: b.support.transition.end,
            delegateType: b.support.transition.end,
            handle: function(d) {
                return b(d.target).is(this) ? d.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function(c) {
    function d(e, g) {
        this.$body = c(document.body), this.$scrollElement = c(c(e).is(document.body) ? window : e), this.options = c.extend({}, d.DEFAULTS, g), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", c.proxy(this.process, this)), this.refresh(), this.process()
    }

    function b(e) {
        return this.each(function() {
            var h = c(this),
                g = h.data("bs.scrollspy"),
                i = "object" == typeof e && e;
            g || h.data("bs.scrollspy", g = new d(this, i)), "string" == typeof e && g[e]()
        })
    }
    d.VERSION = "3.3.4", d.DEFAULTS = {
        offset: 10
    }, d.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, d.prototype.refresh = function() {
        var h = this,
            g = "offset",
            j = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), c.isWindow(this.$scrollElement[0]) || (g = "position", j = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var k = c(this),
                i = k.data("target") || k.attr("href"),
                l = /^#./.test(i) && c(i);
            return l && l.length && l.is(":visible") && [
                [l[g]().top + j, i]
            ] || null
        }).sort(function(i, k) {
            return i[0] - k[0]
        }).each(function() {
            h.offsets.push(this[0]), h.targets.push(this[1])
        })
    }, d.prototype.process = function() {
        var j, l = this.$scrollElement.scrollTop() + this.options.offset,
            h = this.getScrollHeight(),
            m = this.options.offset + h - this.$scrollElement.height(),
            k = this.offsets,
            p = this.targets,
            g = this.activeTarget;
        if (this.scrollHeight != h && this.refresh(), l >= m) {
            return g != (j = p[p.length - 1]) && this.activate(j)
        }
        if (g && l < k[0]) {
            return this.activeTarget = null, this.clear()
        }
        for (j = k.length; j--;) {
            g != p[j] && l >= k[j] && (void 0 === k[j + 1] || l < k[j + 1]) && this.activate(p[j])
        }
    }, d.prototype.activate = function(h) {
        this.activeTarget = h, this.clear();
        var g = this.selector + '[data-target="' + h + '"],' + this.selector + '[href="' + h + '"]',
            j = c(g).parents("li").addClass("active");
        j.parent(".dropdown-menu").length && (j = j.closest("li.dropdown").addClass("active")), j.trigger("activate.bs.scrollspy")
    }, d.prototype.clear = function() {
        c(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var f = c.fn.scrollspy;
    c.fn.scrollspy = b, c.fn.scrollspy.Constructor = d, c.fn.scrollspy.noConflict = function() {
        return c.fn.scrollspy = f, this
    }, c(window).on("load.bs.scrollspy.data-api", function() {
        c('[data-spy="scroll"]').each(function() {
            var g = c(this);
            b.call(g, g.data())
        })
    })
}(jQuery), + function(c) {
    function d(g, h) {
        return this.each(function() {
            var i = c(this),
                j = i.data("bs.modal"),
                e = c.extend({}, b.DEFAULTS, i.data(), "object" == typeof g && g);
            j || i.data("bs.modal", j = new b(this, e)), "string" == typeof g ? j[g](h) : e.show && j.show(h)
        })
    }
    var b = function(h, g) {
        this.options = g, this.$body = c(document.body), this.$element = c(h), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, c.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    b.VERSION = "3.3.4", b.TRANSITION_DURATION = 300, b.BACKDROP_TRANSITION_DURATION = 150, b.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, b.prototype.toggle = function(e) {
        return this.isShown ? this.hide() : this.show(e)
    }, b.prototype.show = function(h) {
        var i = this,
            g = c.Event("show.bs.modal", {
                relatedTarget: h
            });
        this.$element.trigger(g), this.isShown || g.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', c.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            i.$element.one("mouseup.dismiss.bs.modal", function(j) {
                c(j.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var e = c.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), e && i.$element[0].offsetWidth, i.$element.addClass("in").attr("aria-hidden", !1), i.enforceFocus();
            var j = c.Event("shown.bs.modal", {
                relatedTarget: h
            });
            e ? i.$dialog.one("bsTransitionEnd", function() {
                i.$element.trigger("focus").trigger(j)
            }).emulateTransitionEnd(b.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(j)
        }))
    }, b.prototype.hide = function(g) {
        g && g.preventDefault(), g = c.Event("hide.bs.modal"), this.$element.trigger(g), this.isShown && !g.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), c(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), c.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", c.proxy(this.hideModal, this)).emulateTransitionEnd(b.TRANSITION_DURATION) : this.hideModal())
    }, b.prototype.enforceFocus = function() {}, b.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", c.proxy(function(e) {
            27 == e.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, b.prototype.resize = function() {
        this.isShown ? c(window).on("resize.bs.modal", c.proxy(this.handleUpdate, this)) : c(window).off("resize.bs.modal")
    }, b.prototype.hideModal = function() {
        var e = this;
        this.$element.hide(), this.backdrop(function() {
            e.$body.removeClass("modal-open"), e.resetAdjustments(), e.resetScrollbar(), e.$element.trigger("hidden.bs.modal")
        })
    }, b.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, b.prototype.backdrop = function(i) {
        var j = this,
            h = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var k = c.support.transition && h;
            if (this.$backdrop = c('<div class="modal-backdrop ' + h + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", c.proxy(function(e) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), k && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !i) {
                return
            }
            k ? this.$backdrop.one("bsTransitionEnd", i).emulateTransitionEnd(b.BACKDROP_TRANSITION_DURATION) : i()
        } else {
            if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                var g = function() {
                    j.removeBackdrop(), i && i()
                };
                c.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(b.BACKDROP_TRANSITION_DURATION) : g()
            } else {
                i && i()
            }
        }
    }, b.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, b.prototype.adjustDialog = function() {
        var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
        })
    }, b.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, b.prototype.checkScrollbar = function() {
        var g = window.innerWidth;
        if (!g) {
            var h = document.documentElement.getBoundingClientRect();
            g = h.right - Math.abs(h.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < g, this.scrollbarWidth = this.measureScrollbar()
    }, b.prototype.setScrollbar = function() {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth)
    }, b.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, b.prototype.measureScrollbar = function() {
        var g = document.createElement("div");
        g.className = "modal-scrollbar-measure", this.$body.append(g);
        var h = g.offsetWidth - g.clientWidth;
        return this.$body[0].removeChild(g), h
    };
    var f = c.fn.modal;
    c.fn.modal = d, c.fn.modal.Constructor = b, c.fn.modal.noConflict = function() {
        return c.fn.modal = f, this
    }, c(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(g) {
        var j = c(this),
            h = j.attr("href"),
            k = c(j.attr("data-target") || h && h.replace(/.*(?=#[^\s]+$)/, "")),
            e = k.data("bs.modal") ? "toggle" : c.extend({
                remote: !/#/.test(h) && h
            }, k.data(), j.data());
        j.is("a") && g.preventDefault(), k.one("show.bs.modal", function(i) {
            i.isDefaultPrevented() || k.one("hidden.bs.modal", function() {
                j.is(":visible") && j.trigger("focus")
            })
        }), d.call(k, e, this)
    })
}(jQuery), + function(c) {
    function d(g) {
        return this.each(function() {
            var h = c(this),
                e = h.data("bs.tooltip"),
                i = "object" == typeof g && g;
            (e || !/destroy|hide/.test(g)) && (e || h.data("bs.tooltip", e = new b(this, i)), "string" == typeof g && e[g]())
        })
    }
    var b = function(g, h) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.init("tooltip", g, h)
    };
    b.VERSION = "3.3.4", b.TRANSITION_DURATION = 150, b.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, b.prototype.init = function(p, j, q) {
        if (this.enabled = !0, this.type = p, this.$element = c(j), this.options = this.getOptions(q), this.$viewport = this.options.viewport && c(this.options.viewport.selector || this.options.viewport), this.$element[0] instanceof document.constructor && !this.options.selector) {
            throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!")
        }
        for (var k = this.options.trigger.split(" "), t = k.length; t--;) {
            var h = k[t];
            if ("click" == h) {
                this.$element.on("click." + this.type, this.options.selector, c.proxy(this.toggle, this))
            } else {
                if ("manual" != h) {
                    var m = "hover" == h ? "mouseenter" : "focusin",
                        g = "hover" == h ? "mouseleave" : "focusout";
                    this.$element.on(m + "." + this.type, this.options.selector, c.proxy(this.enter, this)), this.$element.on(g + "." + this.type, this.options.selector, c.proxy(this.leave, this))
                }
            }
        }
        this.options.selector ? this._options = c.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, b.prototype.getDefaults = function() {
        return b.DEFAULTS
    }, b.prototype.getOptions = function(g) {
        return g = c.extend({}, this.getDefaults(), this.$element.data(), g), g.delay && "number" == typeof g.delay && (g.delay = {
            show: g.delay,
            hide: g.delay
        }), g
    }, b.prototype.getDelegateOptions = function() {
        var h = {},
            g = this.getDefaults();
        return this._options && c.each(this._options, function(e, i) {
            g[e] != i && (h[e] = i)
        }), h
    }, b.prototype.enter = function(h) {
        var g = h instanceof this.constructor ? h : c(h.currentTarget).data("bs." + this.type);
        return g && g.$tip && g.$tip.is(":visible") ? void(g.hoverState = "in") : (g || (g = new this.constructor(h.currentTarget, this.getDelegateOptions()), c(h.currentTarget).data("bs." + this.type, g)), clearTimeout(g.timeout), g.hoverState = "in", g.options.delay && g.options.delay.show ? void(g.timeout = setTimeout(function() {
            "in" == g.hoverState && g.show()
        }, g.options.delay.show)) : g.show())
    }, b.prototype.leave = function(h) {
        var g = h instanceof this.constructor ? h : c(h.currentTarget).data("bs." + this.type);
        return g || (g = new this.constructor(h.currentTarget, this.getDelegateOptions()), c(h.currentTarget).data("bs." + this.type, g)), clearTimeout(g.timeout), g.hoverState = "out", g.options.delay && g.options.delay.hide ? void(g.timeout = setTimeout(function() {
            "out" == g.hoverState && g.hide()
        }, g.options.delay.hide)) : g.hide()
    }, b.prototype.show = function() {
        var A = c.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(A);
            var k = c.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (A.isDefaultPrevented() || !k) {
                return
            }
            var G = this,
                q = this.tip(),
                D = this.getUID(this.type);
            this.setContent(), q.attr("id", D), this.$element.attr("aria-describedby", D), this.options.animation && q.addClass("fade");
            var i = "function" == typeof this.options.placement ? this.options.placement.call(this, q[0], this.$element[0]) : this.options.placement,
                w = /\s?auto?\s?/i,
                x = w.test(i);
            x && (i = i.replace(w, "") || "top"), q.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(i).data("bs." + this.type, this), this.options.container ? q.appendTo(this.options.container) : q.insertAfter(this.$element);
            var B = this.getPosition(),
                j = q[0].offsetWidth,
                C = q[0].offsetHeight;
            if (x) {
                var z = i,
                    F = this.options.container ? c(this.options.container) : this.$element.parent(),
                    y = this.getPosition(F);
                i = "bottom" == i && B.bottom + C > y.bottom ? "top" : "top" == i && B.top - C < y.top ? "bottom" : "right" == i && B.right + j > y.width ? "left" : "left" == i && B.left - j < y.left ? "right" : i, q.removeClass(z).addClass(i)
            }
            var t = this.getCalculatedOffset(i, B, j, C);
            this.applyPlacement(t, i);
            var E = function() {
                var e = G.hoverState;
                G.$element.trigger("shown.bs." + G.type), G.hoverState = null, "out" == e && G.leave(G)
            };
            c.support.transition && this.$tip.hasClass("fade") ? q.one("bsTransitionEnd", E).emulateTransitionEnd(b.TRANSITION_DURATION) : E()
        }
    }, b.prototype.applyPlacement = function(w, t) {
        var k = this.tip(),
            A = k[0].offsetWidth,
            m = k[0].offsetHeight,
            z = parseInt(k.css("margin-top"), 10),
            g = parseInt(k.css("margin-left"), 10);
        isNaN(z) && (z = 0), isNaN(g) && (g = 0), w.top = w.top + z, w.left = w.left + g, c.offset.setOffset(k[0], c.extend({
            using: function(e) {
                k.css({
                    top: Math.round(e.top),
                    left: Math.round(e.left)
                })
            }
        }, w), 0), k.addClass("in");
        var q = k[0].offsetWidth,
            u = k[0].offsetHeight;
        "top" == t && u != m && (w.top = w.top + m - u);
        var x = this.getViewportAdjustedDelta(t, w, q, u);
        x.left ? w.left += x.left : w.top += x.top;
        var j = /top|bottom/.test(t),
            y = j ? 2 * x.left - A + q : 2 * x.top - m + u,
            v = j ? "offsetWidth" : "offsetHeight";
        k.offset(w), this.replaceArrow(y, k[0][v], j)
    }, b.prototype.replaceArrow = function(h, j, g) {
        this.arrow().css(g ? "left" : "top", 50 * (1 - h / j) + "%").css(g ? "top" : "left", "")
    }, b.prototype.setContent = function() {
        var g = this.tip(),
            h = this.getTitle();
        g.find(".tooltip-inner")[this.options.html ? "html" : "text"](h), g.removeClass("fade in top bottom left right")
    }, b.prototype.hide = function(i) {
        function j() {
            "in" != h.hoverState && k.detach(), h.$element.removeAttr("aria-describedby").trigger("hidden.bs." + h.type), i && i()
        }
        var h = this,
            k = c(this.$tip),
            g = c.Event("hide.bs." + this.type);
        return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (k.removeClass("in"), c.support.transition && k.hasClass("fade") ? k.one("bsTransitionEnd", j).emulateTransitionEnd(b.TRANSITION_DURATION) : j(), this.hoverState = null, this)
    }, b.prototype.fixTitle = function() {
        var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
    }, b.prototype.hasContent = function() {
        return this.getTitle()
    }, b.prototype.getPosition = function(l) {
        l = l || this.$element;
        var h = l[0],
            m = "BODY" == h.tagName,
            j = h.getBoundingClientRect();
        null == j.width && (j = c.extend({}, j, {
            width: j.right - j.left,
            height: j.bottom - j.top
        }));
        var p = m ? {
                top: 0,
                left: 0
            } : l.offset(),
            g = {
                scroll: m ? document.documentElement.scrollTop || document.body.scrollTop : l.scrollTop()
            },
            k = m ? {
                width: c(window).width(),
                height: c(window).height()
            } : null;
        return c.extend({}, j, g, k, p)
    }, b.prototype.getCalculatedOffset = function(h, j, g, k) {
        return "bottom" == h ? {
            top: j.top + j.height,
            left: j.left + j.width / 2 - g / 2
        } : "top" == h ? {
            top: j.top - k,
            left: j.left + j.width / 2 - g / 2
        } : "left" == h ? {
            top: j.top + j.height / 2 - k / 2,
            left: j.left - g
        } : {
            top: j.top + j.height / 2 - k / 2,
            left: j.left + j.width
        }
    }, b.prototype.getViewportAdjustedDelta = function(x, u, p, j) {
        var y = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) {
            return y
        }
        var k = this.options.viewport && this.options.viewport.padding || 0,
            w = this.getPosition(this.$viewport);
        if (/right|left/.test(x)) {
            var g = u.top - k - w.scroll,
                m = u.top + k - w.scroll + j;
            g < w.top ? y.top = w.top - g : m > w.top + w.height && (y.top = w.top + w.height - m)
        } else {
            var q = u.left - k,
                v = u.left + k + p;
            q < w.left ? y.left = w.left - q : v > w.width && (y.left = w.left + w.width - v)
        }
        return y
    }, b.prototype.getTitle = function() {
        var h, j = this.$element,
            g = this.options;
        return h = j.attr("data-original-title") || ("function" == typeof g.title ? g.title.call(j[0]) : g.title)
    }, b.prototype.getUID = function(e) {
        do {
            e += ~~(1000000 * Math.random())
        } while (document.getElementById(e));
        return e
    }, b.prototype.tip = function() {
        return this.$tip = this.$tip || c(this.options.template)
    }, b.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, b.prototype.enable = function() {
        this.enabled = !0
    }, b.prototype.disable = function() {
        this.enabled = !1
    }, b.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, b.prototype.toggle = function(h) {
        var g = this;
        h && (g = c(h.currentTarget).data("bs." + this.type), g || (g = new this.constructor(h.currentTarget, this.getDelegateOptions()), c(h.currentTarget).data("bs." + this.type, g))), g.tip().hasClass("in") ? g.leave(g) : g.enter(g)
    }, b.prototype.destroy = function() {
        var e = this;
        clearTimeout(this.timeout), this.hide(function() {
            e.$element.off("." + e.type).removeData("bs." + e.type)
        })
    };
    var f = c.fn.tooltip;
    c.fn.tooltip = d, c.fn.tooltip.Constructor = b, c.fn.tooltip.noConflict = function() {
        return c.fn.tooltip = f, this
    }
}(jQuery), + function(c) {
    function d(g) {
        return this.each(function() {
            var h = c(this),
                e = h.data("bs.popover"),
                i = "object" == typeof g && g;
            (e || !/destroy|hide/.test(g)) && (e || h.data("bs.popover", e = new b(this, i)), "string" == typeof g && e[g]())
        })
    }
    var b = function(g, h) {
        this.init("popover", g, h)
    };
    if (!c.fn.tooltip) {
        throw new Error("Popover requires tooltip.js")
    }
    b.VERSION = "3.3.4", b.DEFAULTS = c.extend({}, c.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), b.prototype = c.extend({}, c.fn.tooltip.Constructor.prototype), b.prototype.constructor = b, b.prototype.getDefaults = function() {
        return b.DEFAULTS
    }, b.prototype.setContent = function() {
        var h = this.tip(),
            j = this.getTitle(),
            g = this.getContent();
        h.find(".popover-title")[this.options.html ? "html" : "text"](j), h.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof g ? "html" : "append" : "text"](g), h.removeClass("fade top bottom left right in"), h.find(".popover-title").html() || h.find(".popover-title").hide()
    }, b.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, b.prototype.getContent = function() {
        var g = this.$element,
            h = this.options;
        return g.attr("data-content") || ("function" == typeof h.content ? h.content.call(g[0]) : h.content)
    }, b.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var f = c.fn.popover;
    c.fn.popover = d, c.fn.popover.Constructor = b, c.fn.popover.noConflict = function() {
        return c.fn.popover = f, this
    }
}(jQuery);
(function(d, c) {
    var b = d.Widget.prototype._createWidget;
    d.Widget.prototype.breakpoints = {
        XS: 1,
        SM: 2,
        MD: 3,
        LG: 4,
        screenXSMin: 320,
        screenXSMax: 767,
        screenSMMin: 768,
        screenSMMax: 991,
        screenMDMin: 992,
        screenMDMax: 1199,
        screenLGMin: 1200
    };
    d.Widget.prototype.breakpoint = 0;
    d.Widget.prototype._resizeTimeout = 0;
    d.Widget.prototype._resize = d.noop;
    d.Widget.prototype._breakpointChange = d.noop;
    d.Widget.prototype._mobileBreakpoint = d.noop;
    d.Widget.prototype._desktopBreakpoint = d.noop;
    d.Widget.prototype._XSBreakpoint = d.noop;
    d.Widget.prototype._SMBreakpoint = d.noop;
    d.Widget.prototype._MDBreakpoint = d.noop;
    d.Widget.prototype._LGBreakpoint = d.noop;
    d.Widget.prototype.getBreakpoint = function() {
        var f = this.breakpoints,
            e = c.innerWidth;
        if (e < f.screenSMMin) {
            return f.XS
        }
        if (e > f.screenXSMax && e < f.screenMDMin) {
            return f.SM
        } else {
            if (e > f.screenSMMax && e < f.screenLGMin) {
                return f.MD
            } else {
                return f.LG
            }
        }
    };
    d.Widget.prototype._resizeHandler = function(e) {
        c.clearTimeout(this._resizeTimeout);
        this._resizeTimeout = c.setTimeout(function() {
            if (this.breakpoint !== this.getBreakpoint()) {
                this.breakpoint = this.getBreakpoint();
                this._fireBreakpoint(this.breakpoint)
            }
            this._resize(e)
        }.bind(this), 100)
    };
    d.Widget.prototype._fireBreakpoint = function(e) {
        var f = [this._XSBreakpoint, this._SMBreakpoint, this._MDBreakpoint, this._LGBreakpoint];
        f[e - 1](this);
        if (e === this.breakpoints.XS) {
            this._mobileBreakpoint()
        } else {
            this._desktopBreakpoint()
        }
    };
    d.Widget.prototype._createWidget = function() {
        this.breakpoint = this.getBreakpoint();
        b.apply(this, arguments);
        d(c).on("resize", this._resizeHandler.bind(this));
        this._fireBreakpoint(this.breakpoint)
    }
})(jQuery, window);
(function(d, c) {
    var b = d.Widget.prototype._createWidget;
    d.Widget.prototype.$overflower = null;
    d.Widget.prototype.swipable = false;
    d.Widget.prototype.scrolling = false;
    d.Widget.prototype.pos = null;
    d.Widget.prototype.resizeTimeout = null;
    d.Widget.prototype.TIMEOUT_THROTTLE = 200;
    d.Widget.prototype.ANIMATION_THROTTLE = 275;
    d.Widget.prototype.checkSwipe = function() {
        var e = 0;
        if (this.element.find(".overflower-item").first().css("float") == "left") {
            this.swipable = false;
            this.swipeOff();
            return
        }
        this.element.find(".overflower-item").each(function() {
            e += d(this).outerWidth()
        });
        this.swipable = (this.element.width() < e);
        if (this.swipable) {
            this.swipeOn()
        } else {
            this.swipeOff()
        }
    };
    d.Widget.prototype.swipeOn = function() {
        this.element.find(".overflower").swipe("enable");
        this.element.addClass("swipable")
    };
    d.Widget.prototype.swipeOff = function() {
        this.element.find(".overflower").swipe("disable");
        this.element.removeClass("swipable")
    };
    d.Widget.prototype.shiftToItem = function(f, e) {
        var g;
        switch (e) {
            case "right":
                g = f.position().left - this.$overflower.width() + f.outerWidth();
                break;
            case "left":
                g = f.position().left;
                break;
            case "center":
                g = f.position().left - ((this.$overflower.width() - f.outerWidth()) / 2);
                break;
            default:
                break
        }
        this.$overflower.animate({
            scrollLeft: g
        }, {
            duration: this.ANIMATION_THROTTLE,
            complete: d.proxy(function() {
                this.adjustOverflowIndicator(f.data("overflow-index"))
            }, this)
        })
    };
    d.Widget.prototype.shiftPrev = function() {
        var e = null;
        this.$overflower.find(".overflower-item").each(function(f) {
            if (d(this).offset().left < 0) {
                e = d(this)
            }
        });
        if (e) {
            this.shiftToItem(e, "right")
        }
        return false
    };
    d.Widget.prototype.shiftNext = function() {
        var e = null;
        var f = this.$overflower.offset().left + this.$overflower.width();
        this.$overflower.find(".overflower-item").each(function() {
            if (d(this).offset().left + d(this).width() > f) {
                e = d(this);
                return false
            }
        });
        if (e) {
            this.shiftToItem(e, "left")
        }
        return false
    };
    d.Widget.prototype.bindOverflowIndicators = function() {
        this.element.find(".overflow-indicators .overflow-indicators-list a").bind("click", d.proxy(this.overflowIndicatorTrigger, this))
    };
    d.Widget.prototype.bindOverflowPaddles = function() {
        var e = this.$overflower.find(".overflow-paddles");
        if (e.length > 0) {
            this.element.find(".overflow-paddles .overflow-paddle-left").bind("click", d.proxy(this.shiftPrev, this));
            this.element.find(".overflow-paddles .overflow-paddle-right").bind("click", d.proxy(this.shiftNext, this));
            this.element.addClass("has-paddles");
            this.resetOverflowPaddles()
        }
    };
    d.Widget.prototype.resetOverflowPaddles = function() {
        var e = this.$overflower.find(".overflow-paddles");
        if (this.swipable) {
            e.removeClass("hide")
        } else {
            e.addClass("hide")
        }
    };
    d.Widget.prototype.overflowIndicatorTrigger = function(g) {
        var f = this.element.find(".overflower-item").eq(d(g.target).parent("li").data("overflow-index"));
        if (f.length == 1) {
            this.shiftToItem(f, "center")
        }
        return false
    };
    d.Widget.prototype.adjustOverflowIndicator = function(e) {
        var f = this.element.find(".overflow-indicators li").removeClass("active");
        f.eq(e).addClass("active")
    };
    d.Widget.prototype.cancelClickIfScrolling = function(f) {
        if (this.scrolling) {
            this.scrolling = false;
            f.preventDefault();
            return false
        }
    };
    d.Widget.prototype.afterSipeEnd = d.noop;
    d.Widget.prototype.swipeEnd = function() {
        this.scrolling = false;
        var f = this.$overflower.scrollLeft() + (this.$overflower.width() / 2);
        var e = 0;
        this.element.find(".overflower-item").each(function(h) {
            var g = d(this).position().left + d(this).outerWidth();
            if (g > f) {
                e = h;
                return false
            }
        });
        this.adjustOverflowIndicator(e);
        this.afterSipeEnd(this)
    };
    d.Widget.prototype.swipeStatus = function(g, e, h, i, f) {
        if (e === "start") {
            this.pos = this.$overflower.scrollLeft()
        } else {
            if (e === "move") {
                this.scrolling = true;
                if (h === "left") {
                    this.$overflower.scrollLeft(this.pos + i)
                } else {
                    if (h === "right") {
                        this.$overflower.scrollLeft(this.pos - i)
                    }
                }
            } else {
                if (e === "cancel" || e === "end") {
                    setTimeout(d.proxy(this.swipeEnd, this), this.TIMEOUT_THROTTLE)
                }
            }
        }
    };
    d.Widget.prototype.applyTouchSwipe = function() {
        this.$overflower.swipe({
            allowPageScroll: "vertical",
            excludedElements: "button, input, select, textarea, .noSwipe",
            threshold: 10,
            triggerOnTouchLeave: true,
            swipeStatus: d.proxy(this.swipeStatus, this)
        });
        this.$overflower.find("a").on("click", d.proxy(this.cancelClickIfScrolling, this))
    }
})(jQuery, window);
(function(b) {
    if (typeof define === "function" && define.amd && define.amd.jQuery) {
        define(["jquery"], b)
    } else {
        b(jQuery)
    }
}(function(g) {
    var q = "left",
        p = "right",
        f = "up",
        y = "down",
        d = "in",
        A = "out",
        n = "none",
        t = "auto",
        m = "swipe",
        u = "pinch",
        B = "tap",
        k = "doubletap",
        c = "longtap",
        z = "hold",
        E = "horizontal",
        v = "vertical",
        j = "all",
        s = 10,
        h = "start",
        l = "move",
        i = "end",
        r = "cancel",
        b = "ontouchstart" in window,
        w = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled,
        e = window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
        C = "TouchSwipe";
    var o = {
        fingers: 1,
        threshold: 75,
        cancelThreshold: null,
        pinchThreshold: 20,
        maxTimeThreshold: null,
        fingerReleaseThreshold: 250,
        longTapThreshold: 500,
        doubleTapThreshold: 200,
        swipe: null,
        swipeLeft: null,
        swipeRight: null,
        swipeUp: null,
        swipeDown: null,
        swipeStatus: null,
        pinchIn: null,
        pinchOut: null,
        pinchStatus: null,
        click: null,
        tap: null,
        doubleTap: null,
        longTap: null,
        hold: null,
        triggerOnTouchEnd: true,
        triggerOnTouchLeave: false,
        allowPageScroll: "auto",
        fallbackToMouseEvents: true,
        excludedElements: "label, button, input, select, textarea, a, .noSwipe"
    };
    g.fn.swipe = function(H) {
        var G = g(this),
            F = G.data(C);
        if (F && typeof H === "string") {
            if (F[H]) {
                return F[H].apply(this, Array.prototype.slice.call(arguments, 1))
            } else {
                g.error("Method " + H + " does not exist on jQuery.swipe")
            }
        } else {
            if (!F && (typeof H === "object" || !H)) {
                return x.apply(this, arguments)
            }
        }
        return G
    };
    g.fn.swipe.defaults = o;
    g.fn.swipe.phases = {
        PHASE_START: h,
        PHASE_MOVE: l,
        PHASE_END: i,
        PHASE_CANCEL: r
    };
    g.fn.swipe.directions = {
        LEFT: q,
        RIGHT: p,
        UP: f,
        DOWN: y,
        IN: d,
        OUT: A
    };
    g.fn.swipe.pageScroll = {
        NONE: n,
        HORIZONTAL: E,
        VERTICAL: v,
        AUTO: t
    };
    g.fn.swipe.fingers = {
        ONE: 1,
        TWO: 2,
        THREE: 3,
        ALL: j
    };

    function x(F) {
        if (F && (F.allowPageScroll === undefined && (F.swipe !== undefined || F.swipeStatus !== undefined))) {
            F.allowPageScroll = n
        }
        if (F.click !== undefined && F.tap === undefined) {
            F.tap = F.click
        }
        if (!F) {
            F = {}
        }
        F = g.extend({}, g.fn.swipe.defaults, F);
        return this.each(function() {
            var H = g(this);
            var G = H.data(C);
            if (!G) {
                G = new D(this, F);
                H.data(C, G)
            }
        })
    }

    function D(a5, aw) {
        var aA = (b || e || !aw.fallbackToMouseEvents),
            K = aA ? (e ? (w ? "MSPointerDown" : "pointerdown") : "touchstart") : "mousedown",
            az = aA ? (e ? (w ? "MSPointerMove" : "pointermove") : "touchmove") : "mousemove",
            V = aA ? (e ? (w ? "MSPointerUp" : "pointerup") : "touchend") : "mouseup",
            T = aA ? null : "mouseleave",
            aE = (e ? (w ? "MSPointerCancel" : "pointercancel") : "touchcancel");
        var ah = 0,
            aQ = null,
            ac = 0,
            a2 = 0,
            a0 = 0,
            H = 1,
            ar = 0,
            aK = 0,
            N = null;
        var aS = g(a5);
        var aa = "start";
        var X = 0;
        var aR = null;
        var U = 0,
            a3 = 0,
            a6 = 0,
            ae = 0,
            O = 0;
        var aX = null,
            ag = null;
        try {
            aS.bind(K, aO);
            aS.bind(aE, ba)
        } catch (al) {
            g.error("events not supported " + K + "," + aE + " on jQuery.swipe")
        }
        this.enable = function() {
            aS.bind(K, aO);
            aS.bind(aE, ba);
            return aS
        };
        this.disable = function() {
            aL();
            return aS
        };
        this.destroy = function() {
            aL();
            aS.data(C, null);
            aS = null
        };
        this.option = function(bd, bc) {
            if (aw[bd] !== undefined) {
                if (bc === undefined) {
                    return aw[bd]
                } else {
                    aw[bd] = bc
                }
            } else {
                g.error("Option " + bd + " does not exist on jQuery.swipe.options")
            }
            return null
        };

        function aO(be) {
            if (aC()) {
                return
            }
            if (g(be.target).closest(aw.excludedElements, aS).length > 0) {
                return
            }
            var bf = be.originalEvent ? be.originalEvent : be;
            var bd, bc = b ? bf.touches[0] : bf;
            aa = h;
            if (b) {
                X = bf.touches.length
            } else {
                be.preventDefault()
            }
            ah = 0;
            aQ = null;
            aK = null;
            ac = 0;
            a2 = 0;
            a0 = 0;
            H = 1;
            ar = 0;
            aR = ak();
            N = ab();
            S();
            if (!b || (X === aw.fingers || aw.fingers === j) || aY()) {
                aj(0, bc);
                U = au();
                if (X == 2) {
                    aj(1, bf.touches[1]);
                    a2 = a0 = av(aR[0].start, aR[1].start)
                }
                if (aw.swipeStatus || aw.pinchStatus) {
                    bd = P(bf, aa)
                }
            } else {
                bd = false
            }
            if (bd === false) {
                aa = r;
                P(bf, aa);
                return bd
            } else {
                if (aw.hold) {
                    ag = setTimeout(g.proxy(function() {
                        aS.trigger("hold", [bf.target]);
                        if (aw.hold) {
                            bd = aw.hold.call(aS, bf, bf.target)
                        }
                    }, this), aw.longTapThreshold)
                }
                ap(true)
            }
            return null
        }

        function a4(bf) {
            var bi = bf.originalEvent ? bf.originalEvent : bf;
            if (aa === i || aa === r || an()) {
                return
            }
            var be, bd = b ? bi.touches[0] : bi;
            var bg = aI(bd);
            a3 = au();
            if (b) {
                X = bi.touches.length
            }
            if (aw.hold) {
                clearTimeout(ag)
            }
            aa = l;
            if (X == 2) {
                if (a2 == 0) {
                    aj(1, bi.touches[1]);
                    a2 = a0 = av(aR[0].start, aR[1].start)
                } else {
                    aI(bi.touches[1]);
                    a0 = av(aR[0].end, aR[1].end);
                    aK = at(aR[0].end, aR[1].end)
                }
                H = a8(a2, a0);
                ar = Math.abs(a2 - a0)
            }
            if ((X === aw.fingers || aw.fingers === j) || !b || aY()) {
                aQ = aM(bg.start, bg.end);
                am(bf, aQ);
                ah = aT(bg.start, bg.end);
                ac = aN();
                aJ(aQ, ah);
                if (aw.swipeStatus || aw.pinchStatus) {
                    be = P(bi, aa)
                }
                if (!aw.triggerOnTouchEnd || aw.triggerOnTouchLeave) {
                    var bc = true;
                    if (aw.triggerOnTouchLeave) {
                        var bh = aZ(this);
                        bc = F(bg.end, bh)
                    }
                    if (!aw.triggerOnTouchEnd && bc) {
                        aa = aD(l)
                    } else {
                        if (aw.triggerOnTouchLeave && !bc) {
                            aa = aD(i)
                        }
                    }
                    if (aa == r || aa == i) {
                        P(bi, aa)
                    }
                }
            } else {
                aa = r;
                P(bi, aa)
            }
            if (be === false) {
                aa = r;
                P(bi, aa)
            }
        }

        function M(bc) {
            var bd = bc.originalEvent;
            if (b) {
                if (bd.touches.length > 0) {
                    G();
                    return true
                }
            }
            if (an()) {
                X = ae
            }
            a3 = au();
            ac = aN();
            if (bb() || !ao()) {
                aa = r;
                P(bd, aa)
            } else {
                if (aw.triggerOnTouchEnd || (aw.triggerOnTouchEnd == false && aa === l)) {
                    bc.preventDefault();
                    aa = i;
                    P(bd, aa)
                } else {
                    if (!aw.triggerOnTouchEnd && a7()) {
                        aa = i;
                        aG(bd, aa, B)
                    } else {
                        if (aa === l) {
                            aa = r;
                            P(bd, aa)
                        }
                    }
                }
            }
            ap(false);
            return null
        }

        function ba() {
            X = 0;
            a3 = 0;
            U = 0;
            a2 = 0;
            a0 = 0;
            H = 1;
            S();
            ap(false)
        }

        function L(bc) {
            var bd = bc.originalEvent;
            if (aw.triggerOnTouchLeave) {
                aa = aD(i);
                P(bd, aa)
            }
        }

        function aL() {
            aS.unbind(K, aO);
            aS.unbind(aE, ba);
            aS.unbind(az, a4);
            aS.unbind(V, M);
            if (T) {
                aS.unbind(T, L)
            }
            ap(false)
        }

        function aD(bg) {
            var bf = bg;
            var be = aB();
            var bd = ao();
            var bc = bb();
            if (!be || bc) {
                bf = r
            } else {
                if (bd && bg == l && (!aw.triggerOnTouchEnd || aw.triggerOnTouchLeave)) {
                    bf = i
                } else {
                    if (!bd && bg == i && aw.triggerOnTouchLeave) {
                        bf = r
                    }
                }
            }
            return bf
        }

        function P(be, bc) {
            var bd = undefined;
            if (J() || W()) {
                bd = aG(be, bc, m)
            } else {
                if ((Q() || aY()) && bd !== false) {
                    bd = aG(be, bc, u)
                }
            }
            if (aH() && bd !== false) {
                bd = aG(be, bc, k)
            } else {
                if (aq() && bd !== false) {
                    bd = aG(be, bc, c)
                } else {
                    if (ai() && bd !== false) {
                        bd = aG(be, bc, B)
                    }
                }
            }
            if (bc === r) {
                ba(be)
            }
            if (bc === i) {
                if (b) {
                    if (be.touches.length == 0) {
                        ba(be)
                    }
                } else {
                    ba(be)
                }
            }
            return bd
        }

        function aG(bf, bc, be) {
            var bd = undefined;
            if (be == m) {
                aS.trigger("swipeStatus", [bc, aQ || null, ah || 0, ac || 0, X, aR]);
                if (aw.swipeStatus) {
                    bd = aw.swipeStatus.call(aS, bf, bc, aQ || null, ah || 0, ac || 0, X, aR);
                    if (bd === false) {
                        return false
                    }
                }
                if (bc == i && aW()) {
                    aS.trigger("swipe", [aQ, ah, ac, X, aR]);
                    if (aw.swipe) {
                        bd = aw.swipe.call(aS, bf, aQ, ah, ac, X, aR);
                        if (bd === false) {
                            return false
                        }
                    }
                    switch (aQ) {
                        case q:
                            aS.trigger("swipeLeft", [aQ, ah, ac, X, aR]);
                            if (aw.swipeLeft) {
                                bd = aw.swipeLeft.call(aS, bf, aQ, ah, ac, X, aR)
                            }
                            break;
                        case p:
                            aS.trigger("swipeRight", [aQ, ah, ac, X, aR]);
                            if (aw.swipeRight) {
                                bd = aw.swipeRight.call(aS, bf, aQ, ah, ac, X, aR)
                            }
                            break;
                        case f:
                            aS.trigger("swipeUp", [aQ, ah, ac, X, aR]);
                            if (aw.swipeUp) {
                                bd = aw.swipeUp.call(aS, bf, aQ, ah, ac, X, aR)
                            }
                            break;
                        case y:
                            aS.trigger("swipeDown", [aQ, ah, ac, X, aR]);
                            if (aw.swipeDown) {
                                bd = aw.swipeDown.call(aS, bf, aQ, ah, ac, X, aR)
                            }
                            break
                    }
                }
            }
            if (be == u) {
                aS.trigger("pinchStatus", [bc, aK || null, ar || 0, ac || 0, X, H, aR]);
                if (aw.pinchStatus) {
                    bd = aw.pinchStatus.call(aS, bf, bc, aK || null, ar || 0, ac || 0, X, H, aR);
                    if (bd === false) {
                        return false
                    }
                }
                if (bc == i && a9()) {
                    switch (aK) {
                        case d:
                            aS.trigger("pinchIn", [aK || null, ar || 0, ac || 0, X, H, aR]);
                            if (aw.pinchIn) {
                                bd = aw.pinchIn.call(aS, bf, aK || null, ar || 0, ac || 0, X, H, aR)
                            }
                            break;
                        case A:
                            aS.trigger("pinchOut", [aK || null, ar || 0, ac || 0, X, H, aR]);
                            if (aw.pinchOut) {
                                bd = aw.pinchOut.call(aS, bf, aK || null, ar || 0, ac || 0, X, H, aR)
                            }
                            break
                    }
                }
            }
            if (be == B) {
                if (bc === r || bc === i) {
                    clearTimeout(aX);
                    clearTimeout(ag);
                    if (Z() && !I()) {
                        O = au();
                        aX = setTimeout(g.proxy(function() {
                            O = null;
                            aS.trigger("tap", [bf.target]);
                            if (aw.tap) {
                                bd = aw.tap.call(aS, bf, bf.target)
                            }
                        }, this), aw.doubleTapThreshold)
                    } else {
                        O = null;
                        aS.trigger("tap", [bf.target]);
                        if (aw.tap) {
                            bd = aw.tap.call(aS, bf, bf.target)
                        }
                    }
                }
            } else {
                if (be == k) {
                    if (bc === r || bc === i) {
                        clearTimeout(aX);
                        O = null;
                        aS.trigger("doubletap", [bf.target]);
                        if (aw.doubleTap) {
                            bd = aw.doubleTap.call(aS, bf, bf.target)
                        }
                    }
                } else {
                    if (be == c) {
                        if (bc === r || bc === i) {
                            clearTimeout(aX);
                            O = null;
                            aS.trigger("longtap", [bf.target]);
                            if (aw.longTap) {
                                bd = aw.longTap.call(aS, bf, bf.target)
                            }
                        }
                    }
                }
            }
            return bd
        }

        function ao() {
            var bc = true;
            if (aw.threshold !== null) {
                bc = ah >= aw.threshold
            }
            return bc
        }

        function bb() {
            var bc = false;
            if (aw.cancelThreshold !== null && aQ !== null) {
                bc = (aU(aQ) - ah) >= aw.cancelThreshold
            }
            return bc
        }

        function af() {
            if (aw.pinchThreshold !== null) {
                return ar >= aw.pinchThreshold
            }
            return true
        }

        function aB() {
            var bc;
            if (aw.maxTimeThreshold) {
                if (ac >= aw.maxTimeThreshold) {
                    bc = false
                } else {
                    bc = true
                }
            } else {
                bc = true
            }
            return bc
        }

        function am(bc, bd) {
            if (aw.allowPageScroll === n || aY()) {
                bc.preventDefault()
            } else {
                var be = aw.allowPageScroll === t;
                switch (bd) {
                    case q:
                        if ((aw.swipeLeft && be) || (!be && aw.allowPageScroll != E)) {
                            bc.preventDefault()
                        }
                        break;
                    case p:
                        if ((aw.swipeRight && be) || (!be && aw.allowPageScroll != E)) {
                            bc.preventDefault()
                        }
                        break;
                    case f:
                        if ((aw.swipeUp && be) || (!be && aw.allowPageScroll != v)) {
                            bc.preventDefault()
                        }
                        break;
                    case y:
                        if ((aw.swipeDown && be) || (!be && aw.allowPageScroll != v)) {
                            bc.preventDefault()
                        }
                        break
                }
            }
        }

        function a9() {
            var bd = aP();
            var bc = Y();
            var be = af();
            return bd && bc && be
        }

        function aY() {
            return !!(aw.pinchStatus || aw.pinchIn || aw.pinchOut)
        }

        function Q() {
            return !!(a9() && aY())
        }

        function aW() {
            var bf = aB();
            var bh = ao();
            var be = aP();
            var bc = Y();
            var bd = bb();
            var bg = !bd && bc && be && bh && bf;
            return bg
        }

        function W() {
            return !!(aw.swipe || aw.swipeStatus || aw.swipeLeft || aw.swipeRight || aw.swipeUp || aw.swipeDown)
        }

        function J() {
            return !!(aW() && W())
        }

        function aP() {
            return ((X === aw.fingers || aw.fingers === j) || !b)
        }

        function Y() {
            return aR[0].end.x !== 0
        }

        function a7() {
            return !!(aw.tap)
        }

        function Z() {
            return !!(aw.doubleTap)
        }

        function aV() {
            return !!(aw.longTap)
        }

        function R() {
            if (O == null) {
                return false
            }
            var bc = au();
            return (Z() && ((bc - O) <= aw.doubleTapThreshold))
        }

        function I() {
            return R()
        }

        function ay() {
            return ((X === 1 || !b) && (isNaN(ah) || ah < aw.threshold))
        }

        function a1() {
            return ((ac > aw.longTapThreshold) && (ah < s))
        }

        function ai() {
            return !!(ay() && a7())
        }

        function aH() {
            return !!(R() && Z())
        }

        function aq() {
            return !!(a1() && aV())
        }

        function G() {
            a6 = au();
            ae = event.touches.length + 1
        }

        function S() {
            a6 = 0;
            ae = 0
        }

        function an() {
            var bc = false;
            if (a6) {
                var bd = au() - a6;
                if (bd <= aw.fingerReleaseThreshold) {
                    bc = true
                }
            }
            return bc
        }

        function aC() {
            return !!(aS.data(C + "_intouch") === true)
        }

        function ap(bc) {
            if (bc === true) {
                aS.bind(az, a4);
                aS.bind(V, M);
                if (T) {
                    aS.bind(T, L)
                }
            } else {
                aS.unbind(az, a4, false);
                aS.unbind(V, M, false);
                if (T) {
                    aS.unbind(T, L, false)
                }
            }
            aS.data(C + "_intouch", bc === true)
        }

        function aj(bd, bc) {
            var be = bc.identifier !== undefined ? bc.identifier : 0;
            aR[bd].identifier = be;
            aR[bd].start.x = aR[bd].end.x = bc.pageX || bc.clientX;
            aR[bd].start.y = aR[bd].end.y = bc.pageY || bc.clientY;
            return aR[bd]
        }

        function aI(bc) {
            var be = bc.identifier !== undefined ? bc.identifier : 0;
            var bd = ad(be);
            bd.end.x = bc.pageX || bc.clientX;
            bd.end.y = bc.pageY || bc.clientY;
            return bd
        }

        function ad(bd) {
            for (var bc = 0; bc < aR.length; bc++) {
                if (aR[bc].identifier == bd) {
                    return aR[bc]
                }
            }
        }

        function ak() {
            var bc = [];
            for (var bd = 0; bd <= 5; bd++) {
                bc.push({
                    start: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    },
                    identifier: 0
                })
            }
            return bc
        }

        function aJ(bc, bd) {
            bd = Math.max(bd, aU(bc));
            N[bc].distance = bd
        }

        function aU(bc) {
            if (N[bc]) {
                return N[bc].distance
            }
            return undefined
        }

        function ab() {
            var bc = {};
            bc[q] = ax(q);
            bc[p] = ax(p);
            bc[f] = ax(f);
            bc[y] = ax(y);
            return bc
        }

        function ax(bc) {
            return {
                direction: bc,
                distance: 0
            }
        }

        function aN() {
            return a3 - U
        }

        function av(bf, be) {
            var bd = Math.abs(bf.x - be.x);
            var bc = Math.abs(bf.y - be.y);
            return Math.round(Math.sqrt(bd * bd + bc * bc))
        }

        function a8(bc, bd) {
            var be = (bd / bc) * 1;
            return be.toFixed(2)
        }

        function at() {
            if (H < 1) {
                return A
            } else {
                return d
            }
        }

        function aT(bd, bc) {
            return Math.round(Math.sqrt(Math.pow(bc.x - bd.x, 2) + Math.pow(bc.y - bd.y, 2)))
        }

        function aF(bf, bd) {
            var bc = bf.x - bd.x;
            var bh = bd.y - bf.y;
            var be = Math.atan2(bh, bc);
            var bg = Math.round(be * 180 / Math.PI);
            if (bg < 0) {
                bg = 360 - Math.abs(bg)
            }
            return bg
        }

        function aM(bd, bc) {
            var be = aF(bd, bc);
            if ((be <= 45) && (be >= 0)) {
                return q
            } else {
                if ((be <= 360) && (be >= 315)) {
                    return q
                } else {
                    if ((be >= 135) && (be <= 225)) {
                        return p
                    } else {
                        if ((be > 45) && (be < 135)) {
                            return y
                        } else {
                            return f
                        }
                    }
                }
            }
        }

        function au() {
            var bc = new Date();
            return bc.getTime()
        }

        function aZ(bc) {
            bc = g(bc);
            var be = bc.offset();
            var bd = {
                left: be.left,
                right: be.left + bc.outerWidth(),
                top: be.top,
                bottom: be.top + bc.outerHeight()
            };
            return bd
        }

        function F(bc, bd) {
            return (bc.x > bd.left && bc.x < bd.right && bc.y > bd.top && bc.y < bd.bottom)
        }
    }
}));
$.widget("visa.aria", {
    _airaExpanded: [{
        name: "aria-expanded",
        value: true
    }, {
        name: "aria-selected",
        value: true
    }, {
        name: "aria-collapsed",
        value: false
    }],
    _ariaCollapsed: [{
        name: "aria-expanded",
        value: false
    }, {
        name: "aria-selected",
        value: false
    }, {
        name: "aria-collapsed",
        value: true
    }],
    _create: function() {},
    _setAriaProperties: function(b) {
        if (!this.element.length) {
            return
        }
        $.each(b, function(c, d) {
            if (typeof this.element.attr(d.name) !== "undefined") {
                this.element.attr(d.name, d.value)
            }
        }.bind(this))
    },
    setExpanded: function() {
        this._setAriaProperties(this._airaExpanded)
    },
    setCollapsed: function() {
        this._setAriaProperties(this._ariaCollapsed)
    },
    setFocusOnCollapsible: function() {
        this.element.on("shown.bs.collapse", $.proxy(function() {
            this.element.access()
        }, this))
    }
});
$.widget("visa.focusFancyEle", {
    _$fancyEle: null,
    _create: function() {
        this._$fancyEle = $("input:checkbox, form input:radio");
        this._$fancyEle.each(function() {
            $(this).focus(function() {
                var b = $(this).next("label");
                $(b).toggleClass("focus-ele")
            })
        });
        this._$fancyEle.each(function() {
            $(this).blur(function() {
                var b = $(this).next("label");
                $(b).toggleClass("focus-ele")
            })
        })
    }
});
$(document).ready(function() {
    $(document).focusFancyEle();
    if ($(".visa-collapsible").length) {
        $(".visa-collapsible").aria().aria("setFocusOnCollapsible")
    }
    $(".modal").on("show.bs.modal", function() {
        var b = $(this);
        setModalBackToMessage(b)
    })
});

function setModalBackToMessage(d) {
    var f = d.find(".modal-title");
    var e = document.title;
    var c = "Back";
    var b = [];
    if (e !== undefined && e.trim() !== "" && !f.hasClass("visaStartUp")) {
        b = e.split("|");
        if (b !== undefined) {
            lastIndex = b.length - 1;
            c = "Back to " + b[lastIndex]
        }
    }
    if (!f.hasClass("visaStartUp")) {
        f.text(c)
    }
}

function set_cookie(d) {
    var c = document.domain;
    var b = c ? ("; domain=" + c) : "";
    document.cookie = "domaincookie =" + encodeURIComponent(d) + "; max-age=" + 60 * 60 * 24 * 365 + "; path=/" + b
}

function set_alertcookie(b) {
    var d = document.domain;
    var c = d ? ("; domain=" + d) : "";
    var e = parseInt(b, 10);
    document.cookie = "globalalertcookie = true; max-age=" + 60 * 60 * 24 * e + "; path=/" + c
}

function get_cookie(b) {
    var c = document.cookie;
    if (c.length != 0) {
        var d = getCookieVal(b, c);
        return d
    }
    return ""
}

function delete_cookie(b) {
    var d = document.domain;
    var c = d ? ("; domain=" + d) : "";
    document.cookie = b + "=; max-age=0; path=/" + c
}

function getCookieVal(b, c) {
    var e = [];
    e = c.split(";"), requiredVal = "", a = [];
    if (e && e.length > 0) {
        for (var d = 0; d < e.length; d++) {
            if (e[d]) {
                a = e[d].split("=");
                if (a[0].trim() === b) {
                    requiredVal = a[1];
                    break
                }
            }
        }
    }
    return requiredVal
}(function() {
    function c() {
        var e = $(".modal-dialog.modal-country"),
            f = $(window),
            d = f.width(),
            g = $(".modal-dialog.modal-country").find(".con");
        if (g && g.length === 3) {
            if (d > 768) {
                e.removeClass("mod-dialog-coun-sm")
            } else {
                if (d < 768) {
                    e.addClass("mod-dialog-coun-sm")
                }
            }
        }
    }
    var b = $(".modal-dialog.modal-country").find(".con");
    if (b && b.length === 3) {
        c()
    }
    $(window).resize(function() {
        var d = $(".modal-dialog.modal-country").find(".con");
        if (d && d.length === 3) {
            c()
        }
    })
})();
(function(i) {
    var c = -1,
        h = -1;
    var f = function(j) {
        return parseFloat(j) || 0
    };
    var g = function(n) {
        var j = 1,
            l = i(n),
            k = null,
            m = [];
        l.each(function() {
            var o = i(this),
                q = o.offset().top - f(o.css("margin-top")),
                p = m.length > 0 ? m[m.length - 1] : null;
            if (p === null) {
                m.push(o)
            } else {
                if (Math.floor(Math.abs(k - q)) <= j) {
                    m[m.length - 1] = p.add(o)
                } else {
                    m.push(o)
                }
            }
            k = q
        });
        return m
    };
    var e = function(j) {
        var k = {
            byRow: true,
            property: "height",
            target: null,
            remove: false
        };
        if (typeof j === "object") {
            return i.extend(k, j)
        }
        if (typeof j === "boolean") {
            k.byRow = j
        } else {
            if (j === "remove") {
                k.remove = true
            }
        }
        return k
    };
    var b = i.fn.matchHeight = function(j) {
        var l = e(j);
        if (l.remove) {
            var k = this;
            this.css(l.property, "");
            i.each(b._groups, function(m, n) {
                n.elements = n.elements.not(k)
            });
            return this
        }
        if (this.length <= 1 && !l.target) {
            return this
        }
        b._groups.push({
            elements: this,
            options: l
        });
        b._apply(this, l);
        return this
    };
    b._groups = [];
    b._throttle = 80;
    b._maintainScroll = false;
    b._beforeUpdate = null;
    b._afterUpdate = null;
    b._apply = function(p, l) {
        var n = e(l),
            m = i(p),
            o = [m];
        var q = i(window).scrollTop(),
            k = i("html").outerHeight(true);
        var j = m.parents().filter(":hidden");
        j.each(function() {
            var r = i(this);
            r.data("style-cache", r.attr("style"))
        });
        j.css("display", "block");
        if (n.byRow && !n.target) {
            m.each(function() {
                var r = i(this),
                    s = r.css("display");
                if (s !== "inline-block" && s !== "inline-flex") {
                    s = "block"
                }
                r.data("style-cache", r.attr("style"));
                r.css({
                    display: s,
                    "padding-top": "0",
                    "padding-bottom": "0",
                    "margin-top": "0",
                    "margin-bottom": "0",
                    "border-top-width": "0",
                    "border-bottom-width": "0",
                    height: "100px"
                })
            });
            o = g(m);
            m.each(function() {
                var r = i(this);
                r.attr("style", r.data("style-cache") || "")
            })
        }
        i.each(o, function(t, u) {
            var s = i(u),
                r = 0;
            if (!n.target) {
                if (n.byRow && s.length <= 1) {
                    s.css(n.property, "");
                    return
                }
                s.each(function() {
                    var v = i(this),
                        x = v.css("display");
                    if (x !== "inline-block" && x !== "inline-flex") {
                        x = "block"
                    }
                    var w = {
                        display: x
                    };
                    w[n.property] = "";
                    v.css(w);
                    if (v.outerHeight(false) > r) {
                        r = v.outerHeight(false)
                    }
                    v.css("display", "")
                })
            } else {
                r = n.target.outerHeight(false)
            }
            s.each(function() {
                var w = i(this),
                    v = 0;
                if (n.target && w.is(n.target)) {
                    return
                }
                if (w.css("box-sizing") !== "border-box") {
                    v += f(w.css("border-top-width")) + f(w.css("border-bottom-width"));
                    v += f(w.css("padding-top")) + f(w.css("padding-bottom"))
                }
                w.css(n.property, (r - v) + "px")
            })
        });
        j.each(function() {
            var r = i(this);
            r.attr("style", r.data("style-cache") || null)
        });
        if (b._maintainScroll) {
            i(window).scrollTop((q / k) * i("html").outerHeight(true))
        }
        return this
    };
    b._applyDataApi = function() {
        var j = {};
        i("[data-match-height], [data-mh]").each(function() {
            var l = i(this),
                k = l.attr("data-mh") || l.attr("data-match-height");
            if (k in j) {
                j[k] = j[k].add(l)
            } else {
                j[k] = l
            }
        });
        i.each(j, function() {
            this.matchHeight(true)
        })
    };
    var d = function(j) {
        if (b._beforeUpdate) {
            b._beforeUpdate(j, b._groups)
        }
        i.each(b._groups, function() {
            b._apply(this.elements, this.options)
        });
        if (b._afterUpdate) {
            b._afterUpdate(j, b._groups)
        }
    };
    b._update = function(l, k) {
        if (k && k.type === "resize") {
            var j = i(window).width();
            if (j === c) {
                return
            }
            c = j
        }
        if (!l) {
            d(k)
        } else {
            if (h === -1) {
                h = setTimeout(function() {
                    d(k);
                    h = -1
                }, b._throttle)
            }
        }
    };
    i(b._applyDataApi);
    i(window).bind("load", function(j) {
        b._update(false, j)
    });
    i(window).bind("resize orientationchange", function(j) {
        b._update(true, j)
    })
})(jQuery);
$.widget("visa.navbar", {
    _toggle: "[data-toggle=dropdown]",
    _collapse: "[data-toggle=collapse]",
    _prevSreenSize: "",
    _$tierMenus: null,
    _$desktopNav: null,
    _$indicator: null,
    _$indicatorBar: null,
    _indicatorBarWidth: 5000,
    _$searchForm: null,
    _$mobileToggleBtns: null,
    _$dropdowns: null,
    _$selectedL1Nav: {},
    _isMobile: function() {
        return window.innerWidth < 768
    },
    _hasDataTarget: function(c) {
        var b = false;
        if (typeof c.attr("data-target") !== "undefined") {
            b = true
        }
        return b
    },
    _setSelectedL1Nav: function() {
        if (!this._isMobile() && this._$selectedL1Nav.length) {
            this._$selectedL1Nav.addClass("active");
            this._setIndicatorPos(this._$selectedL1Nav)
        }
    },
    _removeOpenSubNavs: function() {
        var b = this;
        var c = b._$dropdowns.filter(".open").removeClass(".open");
        if (c.length) {
            c.find(b._toggle).aria().data("visa-aria").setCollapsed()
        }
        b._collapseInactiveMenu(b._$mobileToggleBtns, $("<div></div>"));
        b._collapseInactiveMenu(b._$desktopNav, $("<div></div>"));
        b._setSelectedL1Nav()
    },
    _initDropdownClick: function() {
        var b = this;
        this._$dropdowns = this.element.find(".dropdown");
        this._$dropdowns.on("shown.bs.dropdown", function(f) {
            var d = $(this);
            var c = d.find(b._toggle);
            c.aria().data("visa-aria").setExpanded()
        });
        this._$dropdowns.on("click", ".dropdown-menu", function(c) {
            c.stopPropagation()
        })
    },
    _mobileNav: function() {
        var b = this;
        this._$mobileToggleBtns = this.element.find(".navbar-toggle button");
        this._$mobileToggleBtns.on("click", function() {
            b._collapseInactiveMenu(b._$mobileToggleBtns, $(this))
        })
    },
    _collapseInactiveMenu: function(b, d) {
        var c = this;
        b.each(function(f, g) {
            var e = $(g);
            if (c._hasDataTarget(e) && d.get(0) !== e.get(0) && (!e.hasClass("collapsed") || e.hasClass("active"))) {
                if (e.hasClass("nav-link-primary")) {
                    c._closeActivePrimaryNav(e)
                } else {
                    e.addClass("collapsed").removeClass("active").aria().data("visa-aria").setCollapsed();
                    $(e.attr("data-target")).removeClass("in").aria().data("visa-aria").setCollapsed()
                }
            }
        })
    },
    _resetIndicator: function() {
        this._$indicator.hide();
        this._$indicator.css({
            left: 2500
        });
        this._$indicatorBar.css({
            backgroundPosition: "2500px 0"
        })
    },
    _setIndicatorPos: function(i) {
        var f = this._$indicator.width();
        if (i.length >= 1) {
            var j = i.innerWidth(),
                d = i.offset(),
                b = d.left - $(window).scrollLeft(),
                g = (b + (j / 2));
            var e = i.offset(),
                c = e.left - $(window).scrollLeft(),
                h = (c + (j / 2) + (this._indicatorBarWidth / 2)) + "px 0";
           
            this._$indicator.css({
                left: g
            });
            this._$indicatorBar.css({
                backgroundPosition: h
            });
            if (this._isMobile()) {
                this._$indicator.css({
                    visibility: "hidden"
                })
            } else {
                this._$indicator.css({
                    visibility: "visible"
                })
            }
            this._$indicator.show()
        }
    },
    _handleResize: function() {
        if (this._isMobile()) {
            if (this._prevSreenSize !== "mobile") {
                this._prevSreenSize = "mobile";
                this._removeOpenSubNavs();
                this._resetIndicator()
            }
        } else {
            if (this._prevSreenSize !== "desktop") {
                this._prevSreenSize = "desktop";
                this._removeOpenSubNavs()
            } else {
                var b = this._$desktopNav.filter(".active"),
                    c = this._$desktopNav.filter(".navActive");
                if (b.length) {
                    this._setIndicatorPos(b)
                } else {
                    if (c.length) {
                        this._setIndicatorPos(c)
                    } else {
                        this._resetIndicator()
                    }
                }
            }
        }
    },
    _handleLinkToggle: function(c, b) {
        var d = this;
        
        window.setTimeout(function() {
            if (!c.hasClass("collapsed") && d._hasDataTarget(c)) {
                c.addClass("active").aria().data("visa-aria").setExpanded();
               
                if (b === "primary") {
                    d._setIndicatorPos(c)
                }
            } else {
                if (b === "primary") {
                    if (c.hasClass("navActive")) {
                        d._setIndicatorPos($(".navbar").find(".navActive"))
                    } else {
                        d._resetIndicator();
                        d._setIndicatorPos($(".navbar").find(".navActive"))
                    }
                    d._closeActivePrimaryNav(c);
                    d._setSelectedL1Nav()
                } else {
                    c.removeClass("active").aria().data("visa-aria").setCollapsed()
                }
            }
        }, 200)
    },
    _handleMenuClickEvent: function(b) {
       
        var c = this;
        var d = b.find(".tier-menu-secondary .nav .nav-link-second");
        d.on("click", function(e) {
            
            var f = $(this);
            c._collapseInactiveMenu(d, f);
            c._handleLinkToggle(f, "secondary");
            if (c._hasDataTarget(f)) {
                e.preventDefault()
            }
        })
    },
    _removeActiveLink: function(b) {
        b.removeClass("active").addClass("collapsed").aria().data("visa-aria").setCollapsed()
    },
    _closeActiveTier: function(b) {
        b.removeClass("in").aria().data("visa-aria").setCollapsed()
    },
    _closeActivePrimaryNav: function(e) {
        var f = this;
        if (!e.length || !this._hasDataTarget(e)) {
            return
        }
        this._removeActiveLink(e);
        var d = $(e.attr("data-target"));
        this._closeActiveTier(d);
        var c = d.find(".tier-menu-secondary .active");
        if (!c.length || !this._hasDataTarget(c)) {
            return
        }
        this._removeActiveLink(c);
        var b = $(c.attr("data-target"));
        this._closeActiveTier(b)
    },
    _initNavSecond: function() {
        var b = this;
        this._$tierMenus.each(function() {
            b._handleMenuClickEvent($(this))
        })
    },
    _initPrimaryNav: function() {
        var b = this;
        this._$desktopNav.on("click", function(c) {
         
            var d = $(this);
            b._collapseInactiveMenu(b._$desktopNav, d);
            b._handleLinkToggle(d, "primary");
            if (b._hasDataTarget(d)) {
                c.preventDefault()
            }
        })
    },
    _initSearchForm: function() {
        var c = this._$searchForm.find(".form-control-search");
        var b = this._$searchForm.find(".btn-clear");
        this._$searchForm.on("click", ".btn-clear", function(d) {
            c.val("");
            c.focus();
            d.preventDefault()
        });
        c.on("keyup", function() {
            if ($(this).val()) {
                if ($(".btn-search-go").outerWidth() > 0) {
                    var d = $(".btn-search-go").outerWidth();
                    if ($("html").attr("dir") === "rtl") {
                        $(".btn-clear").css("left", d).css("right", "auto")
                    } else {
                        $(".btn-clear").css("right", d).css("left", "auto")
                    }
                }
                b.removeClass("hide")
            } else {
                b.addClass("hide")
            }
        });
        this._$searchForm.on("shown.bs.collapse", function(d) {
            c.focus()
        })
    },
    _initNav: function() {
        this._$tierMenus = this.element.find(".tier-menu");
        this._$desktopNav = this.element.find(".navbar-nav-desktop .nav-link-primary");
        this._$indicator = $(".nav-indicator");
        this._$indicatorBar = $(".nav-indicator-bar");
        this._$searchForm = this.element.find(".navbar-search-form");
        this._$selectedL1Nav = this._$desktopNav.filter(".active");
        this._initPrimaryNav();
        this._initNavSecond();
        this._initSearchForm();
        window.setTimeout(function() {
            this._setSelectedL1Nav()
        }.bind(this), 200);
        window.onload = function() {
            var f, g = "",
                e = "",
                d = 0,
                c = this,
                b = location.pathname;
            if ((b.split("/")[1] == "content")) {
                f = (b.split("/")[3].indexOf("_") != -1) ? b.split("/")[5] : b.split("/")[6]
            } else {
                f = b.split("/")[1].length == 5 ? b.split("/")[2] : b.split("/")[1]
            }
            if (f != undefined) {
                $("ol.navbar-nav-desktop > li > a").each(function() {
                    e = $(this).data("target");
                    
                    e = e.slice(1);
                    if (e == f) {
                        g = e;
                        $(this).addClass("navActive");
                        c._setIndicatorPos($(this))
                    }
                })
            }
        }.bind(this)
    },
    _create: function() {
        this._initDropdownClick();
        this._mobileNav();
        this._initNav();
        $(window).on("resize", this._handleResize.bind(this))
    }
    });
$(document).ready(function() {
    $(".visa-navbar").navbar()
});
/*!
Copyright (c) 2011, 2012 Julien Wajsberg <felash@gmail.com>
All rights reserved.

Official repository: https://github.com/julienw/jquery-trap-input
License is there: https://github.com/julienw/jquery-trap-input/blob/master/LICENSE
This is version 1.2.0.
*/
(function(f, d) {
    var c = "trap.isTrapping";

    function e(o) {
        if (o.keyCode === 9) {
            var p = !!(o.shiftKey);
            if (g(this, o.target, p)) {
                o.preventDefault();
                o.stopPropagation()
            }
        }
    }

    function g(o, q, w) {
        var u = k(o),
            x = q,
            t, r, p, s;
        do {
            t = u.index(x);
            r = t + 1;
            p = t - 1;
            s = u.length - 1;
            switch (t) {
                case -1:
                    return false;
                case 0:
                    p = s;
                    break;
                case s:
                    r = 0;
                    break
            }
            if (w) {
                r = p
            }
            x = u.get(r);
            try {
                x.focus()
            } catch (v) {}
        } while (q === q.ownerDocument.activeElement && x);
        return true
    }

    function l() {
        return this.tabIndex > 0
    }

    function h() {
        return !this.tabIndex
    }

    function m(p, o) {
        return (p.t - o.t) || (p.i - o.i)
    }

    function k(p) {
        var r = f(p);
        var o = [],
            q = 0;
        n.enable && n.enable();
        r.find("a[href], link[href], [draggable=true], [contenteditable=true], :input:enabled, [tabindex=0], iframe").filter(":visible").filter(h).each(function(s, t) {
            o.push({
                v: t,
                t: 0,
                i: q++
            })
        });
        r.find("[tabindex]").filter(":visible").filter(l).each(function(s, t) {
            o.push({
                v: t,
                t: t.tabIndex,
                i: q++
            })
        });
        n.disable && n.disable();
        o = f.map(o.sort(m), function(s) {
            return s.v
        });
        return f(o)
    }

    function j() {
        this.keydown(e);
        this.data(c, true);
        return this
    }

    function b() {
        this.unbind("keydown", e);
        this.removeData(c);
        return this
    }

    function i() {
        return !!this.data(c)
    }
    f.fn.extend({
        trap: j,
        untrap: b,
        isTrapping: i
    });
    var n = {};
    if (f.find.find && f.find.attr !== f.attr) {
        (function() {
            var p = "tabindex";
            var o = f.expr.attrHandle;

            function s(u) {
                var t = u.getAttributeNode(p);
                return t && t.specified ? parseInt(t.value, 10) : d
            }

            function r() {
                o[p] = o.tabIndex = s
            }

            function q() {
                delete o[p];
                delete o.tabIndex
            }
            n = {
                enable: r,
                disable: q
            }
        })()
    }
})(jQuery);