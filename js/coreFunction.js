var loadOwl = 0
function shortCodeNld(e, t, a) {
    for (var s = e.split("$"), o = /[^{\}]+(?=})/g, r = 0; r < s.length; r++) {
        var i = s[r].split("=");
        if (i[0].trim() == t) return null != (a = i[1]).match(o) && String(a.match(o)).trim()
    }
    return !1
}
function msgError() {
    return '<span class="error-msg"><b>Error:</b>&nbsp;No Results Found</span>'
}
function beforeLoader() {
    return '<div class="loader"></div>'
}
function getFeedUrl(e, t, a, s) {
    switch (a) {
        case "recent":
            s = "/feeds/posts/default?alt=json&max-results=" + t;
            break;
        case "random":
            var index = Math.floor((Math.random() * t) + 1);
            s = '/feeds/posts/default?max-results=' + t + '&start-index=' + index + '&alt=json';
            break;
        case "comments":
            s = "list1" == e ? "/feeds/comments/default?alt=json&max-results=" + t : "/feeds/posts/default/-/" + a + "?alt=json&max-results=" + t;
            break;
        default:
            s = "/feeds/posts/default/-/" + a + "?alt=json&max-results=" + t
    }
    return s
}
function getPostLink(e, t) {
    for (var a = 0; a < e[t].link.length; a++)
        if ("alternate" == e[t].link[a].rel) {
            var s = data.view.isMobile == "true" ? e[t].link[a].href + "?m=1" : e[t].link[a].href;
            break
        } return s
}
function getPostTitle(e, t, a) {
    return e[t].title.$t || exportnld.noTitle
}
function getPostTag(e, t, a) {
    if (e[t].category && 1 == exportnld.postLabels) {
        for (var k = 0; k < e[t].category.length; k++) {
            l = e[t].category[k].term;
        }
        if (NLDtst.lbel.lbO.length == NLDtst.lbel.lbR.length){
          for (var i = 0; i < NLDtst.lbel.lbO.length && i < NLDtst.lbel.lbR.length; i++) {
              if (l == NLDtst.lbel.lbO[i]) {
                  l = l.replace(NLDtst.lbel.lbO[i], NLDtst.lbel.lbR[i]);
              }
          }
        }
    }
    return e[t].category && 1 == exportnld.postLabels ? '<span class="entry-tag">' + l + "</span>" : ""
}
function getPostAuthor(e, t, a) {
    var n = e[t].author[0].name.$t,
        code = '<span class="entry-author">' + n + '</span>';
    return code;
}
function nldOwlSlider(e) {
    if (loadOwl == 0) {
        loadOwl = 1
        loadJs('https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js', 'olCarousel', 'body', function () {
            e.find(".owl-carousel").owlCarousel({
                item: 3,
                rtl: false,
                loop: !0,
                center: !0,
                smartSpeed: 500,
                autoplay: 0,
                autoplayTimeout: 5e3,
                autoplaySpeed: 500,
                autoplayHoverPause: !0,
                nav: !0,
                navText: ['<i class="rbi rbi-angle-left"></i><span>Trước</span>', '<i class="rbi rbi-angle-right"></i><span>Tiếp</span>'],
                navClass: ['rb-owl-prev', 'rb-owl-next'],
                navElement: 'div role="presentation"',
                dots: !0,
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    992: {
                        items: 3
                    }
                }
            })
        })
    } else {
        e.find(".owl-carousel").owlCarousel({
            item: 3,
            rtl: false,
            loop: !0,
            center: !0,
            smartSpeed: 500,
            autoplay: 0,
            autoplayTimeout: 5e3,
            autoplaySpeed: 500,
            autoplayHoverPause: !0,
            nav: !0,
            navText: ['<i class="rbi rbi-angle-left"></i><span>Trước</span>', '<i class="rbi rbi-angle-right"></i><span>Tiếp</span>'],
            navClass: ['rb-owl-prev', 'rb-owl-next'],
            navElement: 'div role="presentation"',
            dots: !0,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        })
    }
    $('.owl-dot').each(function () {
        let idx = $(this).index() + 1;
        $(this).attr('aria-label', 'Go to slide ' + idx);
    })
    $("span.entry-thumb").lazynld()
}
function getPostDate(e, t, a, s, o) {
    var r = e[t].published.$t,
        i = r.substring(0, 4),
        e = r.substring(5, 7),
        t = r.substring(8, 10),
        i = dateFormat.replace("{m}", monthNames[parseInt(e, 10) - 1]).replace("{d}", t).replace("{y}", i);
    return o = "" != a && 1 == exportnld.postLabels ? '<span class="on sp">-</span>' : "", 1 == exportnld.postDate ? '<span class="entry-time">' + o + '<time class="published" datetime="' + r + '">' + i + "</time></span>" : ""
}
function getPostMeta(e, t, a) {
    return 1 == exportnld.postLabels || 1 == exportnld.postDate ? '<div class="entry-meta mi">' + t + e + "</div>" : ""
}
function getPostMeta(e, t, a) {
    return 1 == exportnld.postLabels || 1 == exportnld.postDate ? '<div class="entry-meta mi">' + t + e + "</div>" : ""
}
function getFirstImage(e, t) {
    var a = $("<div>").html(e).find("img:first").attr("src"),
        s = a.lastIndexOf("/") || 0,
        o = a.lastIndexOf("/", s - 1) || 0,
        e = a.substring(0, o),
        o = a.substring(o, s),
        s = a.substring(s);
    return (o.match(/\/s[0-9]+/g) || o.match(/\/w[0-9]+/g) || "/d" == o) && (o = "/w72-h72-p-k-no-nu"), e + o + s
}
function getPostImage(e, t, a, s) {
    var o = e[t].content.$t;
    return a = e[t].media$thumbnail ? e[t].media$thumbnail.url : "https://resources.blogblog.com/img/blank.gif", -1 < o.indexOf(o.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g)) ? !(-1 < o.indexOf("<img")) || o.indexOf(o.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g)) < o.indexOf("<img") ? a.replace("img.youtube.com", "i.ytimg.com").replace("/default.", "/maxresdefault.") : getFirstImage(o) : -1 < o.indexOf("<img") ? getFirstImage(o) : "https://resources.blogblog.com/img/blank.gif"
}
function getPostImageType(e, t) {
    return e.match("i.ytimg.com") ? "is-video" : "is-image"
}
function getPostComments(e, t, a, s) {
    var o = e[t].author[0].name.$t,
        r = e[t].author[0].gd$image.src.replace("/s113", "/s72-c").replace("/s220", "/s72-c"),
        e = e[t].content.$t.replace(/<\S[^>]*>/g, " ")
    if (e.length > 100) {
        e = e.substring(0, 100) + "&hellip;"
    }
    return (r.match("//img1.blogblog.com/img/blank.gif") || r.match("//img1.blogblog.com/img/b16-rounded.gif")) && (r = "//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/w72-h72-p-k-no-nu-rw-e30/avatar.jpg"), '<div class="cmm1-item item-' + t + '"><a class="entry-inner wrap-all-link" href="' + a + '" title="' + o + '"><span class="entry-image-wrap cmm-avatar"><span class="entry-thumb" data-image="' + r + '"></span></span><div class="entry-header"><h2 class="entry-title cmm-title">' + o + '</h2><p class="cmm-snippet excerpt">' + e + "</p></div></a></div>"
}
function getAjax(f, h, e, p) {
    switch (h) {
        case "msimple":
        case "trending":
        case "list1":
        case "randompost":
        case "listpost":
        case "carouselpost":
        case "mcarouselpost":
        case "sectionpost":
        case "featuredpost":
        case "related":
            0 == p && (p = "geterror404");
            var t = getFeedUrl(h, e, p);
            $.ajax({
                url: t,
                type: "GET",
                dataType: "json",
                cache: !0,
                beforeSend: function (e) {
                    switch (h) {
                        case "trending":
                        case "list1":
                        case "featuredpost":
                        case "sectionpost":
                        case "mcarouselpost":
                        case "carouselpost":
                        case "listpost":
                        case "randompost":
                            f.html(beforeLoader());
                            break;
                        case "related":
                            f.html(beforeLoader()).parent().addClass("show-nld")
                    }
                },
                success: function (e) {
                    var t = "";
                    switch (h) {
                        case "msimple":
                            t = '<div class="ul mega-items">';
                            break;
                        case "trending":
                            t = '<div class="trending-items">';
                            break;
                        case "list1":
                            t = "comments" != p ? '<div class="list1-items sidebar-posts">' : '<div class="cmm1-items">';
                            break;
                        case "featuredpost":
                            t = '<div class="featuredpost-inner">';
                            break;
                        case "listpost":
                            t = '<div class="listpost-inner">';
                            break;
                        case "sectionpost":
                            t = '<div class="sectionpost-inner">';
                            break;
                        case "mcarouselpost":
                            t = '<div class="mcarouselpost-inner owl-carousel">';
                            break;
                        case "carouselpost":
                            t = '<div class="carouselpost-inner owl-carousel">';
                            break;
                        case "randompost":
                            t = '<div class="randompost-inner">';
                            break;
                        case "related":
                            t = '<div class="related-posts">'
                    }
                    if (null != (e = e.feed.entry))
                        for (var a = 0, s = e; a < s.length; a++) {
                            var o = getPostLink(s, a),
                                r = getPostTitle(s, a),
                                i = getPostTag(s, a),
                                g = getPostAuthor(s, a),
                                n = getPostDate(s, a, i),
                                l = getPostImage(s, a),
                                c = getPostImageType(l, a),
                                d = getPostMeta(n, i),
                                m = "";
                            switch (h) {
                                case "msimple":
                                    m += '<div class="mega-item post"><div class="mega-content"><a title="' + r + '" class="entry-image-wrap ' + c + '" href="' + o + '"><span class="entry-thumb" data-image="' + l + '"></span></a><h2 class="entry-title"><a href="' + o + '" title="' + r + '">' + r + "</a></h2></div></div>";
                                    break;
                                case "trending":
                                    m += 0 === a ? '<div class="trending-left"><div class="trending-item item-' + a + '"><a title="' + r + '" class="entry-image-wrap ' + c + '" href="' + o + '"><span class="entry-thumb" data-image="' + l + '"></span></a><div class="entry-header">' + d + '<h2 class="entry-title"><a title="' + r + '" href="' + o + '">' + r + '</a></h2></div></div></div><div class="trending-right">' : '<div class="trending-item item-' + a + '"><a title="' + r + '" class="entry-image-wrap ' + c + '" href="' + o + '"><span class="entry-thumb lazy" data-image="' + l + '"></span></a><div class="entry-header">' + d + '<h2 class="entry-title"><a title="' + r + '" href="' + o + '">' + r + "</a></h2></div></div>";
                                    break;
                                case "list1":
                                    m += "comments" === p ? getPostComments(s, a, o) : '<div class="list1-item post item-' + a + '"><a title="' + r + '" class="entry-image-wrap ' + c + '" href="' + o + '"><span class="entry-thumb" data-image="' + l + '"></span></a><div class="entry-header"><h2 class="entry-title"><a href="' + o + '" title="' + r + '">' + r + '</a></h2></div></div>';
                                    break;
                                case "mcarouselpost":
                                    m += '<div class="mcarouselpost-item post item-' + a + '"><div class="entry-feat-mobile"><a title="' + r + '" class="entry-image-wrap ' + c + '" href="' + o + '"><span class="entry-thumb" data-image="' + l + '"></span></a><div class="entry-overlay"><div class="entry-holder"><aside class="category-info">' + i + '</aside><div class="entry-header"><h3 class="entry-title"><a href="' + o + '" title="' + r + '">' + r + "</a></h3></div></div></div></div></div>";
                                    break;
                                case "carouselpost":
                                    m += 0 === a % 2 ? '<div class="carouselpost-item post item-' + a + '"><div class="entry-feat-slide"><a title="' + r + '" class="entry-image-wrap ' + c + '" href="' + o + '"><span class="entry-thumb" data-image="' + l + '"></span></a></div><div class="entry-content-wrap"><aside class="category-info">' + i + '</aside><div class="entry-header"><h3 class="entry-title"><a href="' + o + '" title="' + r + '">' + r + '</a></h3></div></div></div>' : '<div class="carouselpost-item reverse-post post item-' + a + '"><div class="entry-feat-slide"><a title="' + r + '" class="entry-image-wrap ' + c + '" href="' + o + '"><span class="entry-thumb" data-image="' + l + '"></span></a></div><div class="entry-content-wrap"><aside class="category-info">' + i + '</aside><div class="entry-header"><h3 class="entry-title"><a href="' + o + '" title="' + r + '">' + r + '</a></h3></div></div></div>';
                                    break;
                                case "listpost":
                                    m += 0 === a ? '<div class="listpost-item feat-post post item-' + a + '"><a title="' + r + '" class="entry-image-wrap ' + c + '" href="' + o + '"><span class="entry-thumb" data-image="' + l + '"></span></a><div class="list-overlay"><div class="list-holder"><aside class="category-info">' + i + '</aside><div class="entry-header"><h2 class="entry-title"><a href="' + o + '" title="' + r + '">' + r + '</a></h2></div></div></div></div>' : '<div class="listpost-item list-post post item-' + a + '"><div class="entry-header"><span class="list-dot"><i class="list-dot-info"></i></span><h2 class="entry-title"><a href="' + o + '" title="' + r + '">' + r + '</a></h2></div></div>';
                                    break;
                                case "sectionpost":
                                    m += '<div class="sectionpost-item post item-' + a + '"><div class="entry-holder"><div class="entry-feat-section"><a title="' + r + '" class="entry-image-wrap ' + c + '" href="' + o + '"><span class="entry-thumb" data-image="' + l + '"></span></a></div><aside class="category-info">' + i + '</aside></div><div class="entry-header"><h4 class="entry-title"><a href="' + o + '" title="' + r + '">' + r + '</a></h4></div></div>';
                                    break;
                                case "featuredpost":
                                    m += '<div class="randompost-item post item-' + a + '"><div class="entry-holder"><a title="' + r + '" class="entry-image-wrap ' + c + '" href="' + o + '"><span class="entry-thumb" data-image="' + l + '"></span></a><aside class="category-info">' + i + '</aside></div><div class="entry-header"><h2 class="entry-title"><a href="' + o + '" title="' + r + '">' + r + '</a></h2></div><div class="entry-footer"><div class="post-meta-info"><span class="meta-info-author">' + g + '</span><span class="meta-info-date">' + n + '</span></div><a class="meta-link" title="' + r + '" href="' + o + '"><span>Đọc tiếp</span><i class="rbi rbi-arrow-right"></i></a></div></div>';
                                    break;
                                case "randompost":
                                    m += '<div class="randompost-item post item-' + a + '"><div class="entry-holder"><a title="' + r + '" class="entry-image-wrap ' + c + '" href="' + o + '"><span class="entry-thumb" data-image="' + l + '"></span></a><aside class="category-info">' + i + '</aside></div><div class="entry-header"><h2 class="entry-title"><a href="' + o + '" title="' + r + '">' + r + '</a></h2></div></div>';
                                    break;
                                case "related":
                                    m += '<div class="related-item post item-' + a + '"><div class="entry-holder"><a title="' + r + '" class="entry-image-wrap ' + c + '" href="' + o + '"><span class="entry-thumb" data-image="' + l + '"></span></a><aside class="category-info">' + i + '</aside></div><div class="entry-header"><h2 class="entry-title"><a href="' + o + '" title="' + r + '">' + r + "</a></h2></div></div>"
                            }
                            t += m
                        } else t = "msimple" === h ? '<div class="ul mega-items no-items">' + msgError() + "</div>" : msgError();
                    "msimple" === h ? (t += "</div>", f.append(t).addClass("msimple"), f.find("a:first").attr("href", function (e, t) {
                        return "recent" === p ? t.replace(t, "/search") : t.replace(t, "/search/label/" + p)
                    })) : (t += "</div>", f.html(t)), ("carouselpost" === h || "mcarouselpost" === h) && nldOwlSlider(f), f.find("span.entry-thumb").lazynld(), f.find(".entry-time .published").timeago()
                },
                error: function () {
                    "msimple" === h ? f.append('<div class="ul mega-items no-items">' + msgError() + "</div>") : f.html(msgError())
                }
            })
    }
}
function ajaxMega(e, t, a, s, o) {
    if (o.match("getmega")) {
        if ("msimple" == t) return getAjax(e, t, a, s);
        e.append('<div class="ul mega-items no-items">' + msgError() + "</div>")
    }
}
function ajaxTrending(e, t, a, s, o) {
    if (o.match("gettrending")) {
        if ("trending" == t) return getAjax(e, t, a, s);
        e.html(msgError()).parent().addClass("show-nld")
    }
}
function ajaxBlock(e, t, a, s, o) {
    if (o.match("getcontent")) {
        if ("mcarouselpost" == t || "carouselpost" == t || "featuredpost" == t || "sectionpost" == t || "listpost" == t || "randompost" == t) return getAjax(e, t, a, s);
        e.html(msgError())
    }
}
function ajaxWidget(e, t, a, s, o) {
    if (o.match("getwidget")) {
        if ("list1" == t) return getAjax(e, t, a, s);

        e.html(msgError())
    }
}
function ajaxRelated(e, t, a, s, o) {
    if (o.match("getrelated")) return getAjax(e, t, a, s)
}
function disqusComments(e) {
    var t = document.createElement("script");
    t.type = "text/javascript", t.async = !0, t.src = "//" + e + ".disqus.com/blogger_item.js", (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(t)
}
function initParallax(wrapper, posTop, elHeight, percent) {
    var scrollTop = $(document).scrollTop();
    if (Math.abs(scrollTop - posTop) <= elHeight) {
        var parallaxMove = Math.round((scrollTop - posTop) / percent);
        wrapper.css('transform', 'translate3d(0,' + parallaxMove + 'px, 0)');
        wrapper.css('-webkit-transform', 'translate3d(0,' + parallaxMove + 'px, 0)')
    }
}
function parallaxCalcAnimation(wrapper, posTop, elHeight, percent) {
    var scrollTop = $(document).scrollTop();
    if (Math.abs(scrollTop - posTop) <= elHeight) {
        var parallaxMove = Math.round((scrollTop - posTop) / percent);
        wrapper.css('transform', 'translate3d(0,' + parallaxMove + 'px, 0)');
        wrapper.css('-webkit-transform', 'translate3d(0,' + parallaxMove + 'px, 0)')
    }
}