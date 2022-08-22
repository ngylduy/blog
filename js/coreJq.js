$("#nldmag-pro-main-nav").menunld(), $('#nldmag-pro-main-nav .widget').addClass('show-menu'), $("html").each(function () {
    var e = $(this);
    1 != darkMode && 0 != userDarkMode && ("dark" == localStorage.themeColor && e.addClass("is-dark"), $(".darkmode-toggle").on("click", function () {
        "dark" != localStorage.themeColor ? (e.addClass("is-dark"), localStorage.themeColor = "dark") : (e.removeClass("is-dark"), localStorage.themeColor = "light")
    }))
}), data.view.isSingleItem && $(".post-body b").each(function () {
    var e = $(this),
        t = e.text(),
        a = t.toLowerCase().trim();
    a.match(/(?:\$ads\=\{1\})/g) && e.replaceWith('<div id="nldmag-pro-new-before-ad"/>'), a.match(/(?:\$ads\=\{2\})/g) && e.replaceWith('<div id="nldmag-pro-new-after-ad"/>'), a.match("{tocnld}") && (t = 0 != shortCodeNld(t, "title") ? shortCodeNld(t, "title") : "Table of Contents", e.replaceWith('<div class="tocnld-wrap"><div class="tocnld-inner"><a href="javascript:;" class="tocnld-title" role="button" title="' + t + '"><span class="tocnld-title-text">' + t + '</span></a><ol id="tocnld"></ol></div></div>'), $(".tocnld-title").each(function (e) {
        (e = $(this)).on("click", function () {
            e.toggleClass("is-expanded"), $("#tocnld").slideToggle(170)
        })
    }), $("#tocnld").toc({
        content: "#post-body",
        headings: "h2,h3,h4"
    }), $("#tocnld li a").each(function (e) {
        (e = $(this)).click(function () {
            return $("html,body").animate({
                scrollTop: $(e.attr("href")).offset().top - 20
            }, 500), !1
        })
    })), a.match("{contactform}") && (e.replaceWith('<div class="contact-form"/>'), $(".contact-form").append($("#ContactForm1"))), a.match("{leftsidebar}") && e.replaceWith("<style>.is-single #content-wrapper > .container{flex-direction:row-reverse}.rtl .is-single #content-wrapper > .container{flex-direction:row}</style>"), a.match("{rightsidebar}") && e.replaceWith("<style>.is-single #content-wrapper > .container{flex-direction:row}.rtl .is-single #content-wrapper > .container{flex-direction:row-reverse}</style>"), a.match("{fullwidth}") && e.replaceWith("<style>.is-single #main-wrapper{width:100%}.is-single #sidebar-wrapper,.single-left-section{display:none}.item-post .blog-entry-header .entry-meta,.item-post #breadcrumb{justify-content:center}.entry-meta .entry-greetings{display:flex;display:-webkit-flex;align-items:center;flex-flow:row wrap;min-height:1.375rem}.entry-meta .entry-greetings:before{width:0;height:6px;margin-right:7px;margin-left:7px;content:'';letter-spacing:0;opacity:.2;border-left:2px solid}.item-post h1.entry-title{max-width:700px;margin-right:auto;margin-left:auto;text-align:center}.single-tagline{padding-left:0;max-width:700px;margin-right:auto;margin-left:auto;text-align:center}.single-tagline:before{content:none}.is-single.is-post #post-body{max-width:100%;width:100%}.entry-content-wrap,.post-footer,.nldmag-pro-blog-post-comments,.post-nav{max-width:780px;float:none;margin-right:auto;margin-left:auto;clear:both}.post-share{max-width:780px;float:none;margin-right:auto;margin-left:auto;clear:both;display:table}.item-post .blog-entry-header{padding:0;border:unset}</style>"), a.match("{featureimage}") && e.replaceWith("<style>.content-header{position:relative;list-style:none;overflow:hidden;width:100%;padding:0;border-radius:10px;background:#0a0a0a}.item-post .blog-entry-header{margin:0 auto;padding:10% 5%;z-index:1;border-bottom:unset}.single-tagline{display:none}.feat-wrap img{opacity:.5;filter:blur(2px);position:absolute;z-index:0;top:0;left:0;overflow:hidden;width:100%;height:100%;margin:0;padding:0;object-fit:cover;display:block;pointer-events:none}.entry-feat{position:unset;margin-top:0;transform:unset;-webkit-transform:unset}.feat-wrap{position:unset}#breadcrumb a,.item-post .has-meta h1.entry-title,.item-post .blog-entry-header .entry-meta{color:#fff}</style>"), a.match("{nofeatured}") && e.replaceWith("<style>.item-post .blog-entry-header{border-bottom:unset;background-image:linear-gradient(to right,rgba(0,0,0,.04) 66.666%,rgba(255,255,255,0) 0%);background-repeat:repeat-x;background-position:bottom;background-size:35px 5px;padding:0 0 25px}</style>") && ($('.entry-feat').remove()), a.match("{parallaxthumb}") && e.replaceWith("<style>.content-header{position:relative;float:left;width:100%;overflow:visible;margin:0;display:block;padding:0}#outer-wrapper > div.content-header > div.entry-header.blog-entry-header.has-meta{position:absolute;z-index:1;top:0;right:0;bottom:0;left:0;display:flex;display:-webkit-flex;flex-flow:column nowrap;justify-content:flex-end;width:1110px;margin:0 auto;padding:0 0 30px}.entry-feat{position:relative;display:block;overflow:hidden;height:70vh;min-height:600px;background-color:#0a0a0a;pointer-events:none;z-index:0;margin:0}#outer-wrapper > div.content-header > div.entry-header.blog-entry-header.has-meta > div{justify-content:space-between;flex-flow:row nowrap;margin-top:15px;flex:inherit;color:#fff}#outer-wrapper > div.content-header > div.entry-header.blog-entry-header.has-meta > div > div.align-left,#outer-wrapper > div.content-header > div.entry-header.blog-entry-header.has-meta > div > div.align-right{display:flex;flex-wrap:wrap;align-items:center}.feat-wrap{position:relative;top:0;display:block;width:100%;height:120%;-webkit-transition:-webkit-transform 0;transition:transform 0;will-change:transform}.feat-wrap img{position:absolute;width:100%;height:100%;border-radius:0;opacity:.4;top:auto;right:auto;bottom:auto;left:auto}#outer-wrapper > div.content-header > div.entry-header.blog-entry-header.has-meta > h1,#breadcrumb a{color:#fff}#before-ad .widget{margin:0}.is-post .navbar-wrap .is-main-nav{border-bottom:unset}#header-ads-wrap{display:none}.single-tagline{max-width:700px}.single-tagline h6.h4{color:#fff}.single-tagline:before{opacity:.7}@media only screen and (min-width:1200px){#outer-wrapper > div.content-header > div.entry-header.blog-entry-header.has-meta > h1{font-size:3.2rem;max-width:900px}}@media (max-width:1170px){#outer-wrapper > div.content-header > div.entry-header.blog-entry-header.has-meta{width:100%;padding:0 15px 30px}}@media only screen and (max-width:991px){.entry-feat{height:50vh;min-height:250px}}@media (max-width:480px){.single-tagline{margin-bottom:0}}</style>") && ($(document).ready(function () { $(".content-header").insertBefore("#content-wrapper"), $('.entry-feat').each(function () { var el = $(this); var wrapper = el.find('.feat-wrap'); var posTop = el.offset().top; var elHeight = el.height(); initParallax(wrapper, posTop, elHeight, 4); setTimeout(function () { el.addClass('loaded-parallax') }, 500); if (window.addEventListener) { window.addEventListener('scroll', function () { parallaxCalcAnimation(wrapper, posTop, elHeight, 4) }, !1) } else if (window.attachEvent) { window.attachEvent('onscroll', function () { parallaxCalcAnimation(wrapper, posTop, elHeight, 4) }) } }) }))
}), data.view.isSingleItem && $(".post-body h2 strike").each(function () {
    var a = $(this).parent(),
        s = document.querySelector(".post-body h2 strike").innerHTML;
    document.querySelector("h1.entry-title").innerHTML = s
    a.remove()
}), $(".sidebar .social-icons li a").each(function () {
    var e = $(this),
        t = e.attr("href").trim().split("#");
    null != t[1] && e.append('<span class="text">' + t[1] + "</span>"), e.attr("href", t[0])
}), data.view.isSingleItem && $("#nldmag-pro-main-before-ad .widget").each(function () {
    var e = $(this);
    e.length && e.appendTo($("#before-ad"))
}), data.view.isSingleItem && $("#nldmag-pro-main-after-ad .widget").each(function () {
    var e = $(this);
    e.length && e.appendTo($("#after-ad"))
}), data.view.isSingleItem && $("#nldmag-pro-post-footer-ads .widget").each(function () {
    var e = $(this);
    e.length && e.appendTo($("#post-footer-ads"))
}), $(".entry-share-links .window-nld,.nldmag-pro-share-links .window-nld,.share-content .window-nld").on("click", function () {
    var e = (o = $(this)).data("url"),
        t = o.data("width"),
        a = o.data("height"),
        s = window.screen.width,
        o = window.screen.height,
        s = Math.round(s / 2 - t / 2),
        o = Math.round(o / 2 - a / 2);
    window.open(e, "_blank", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=" + t + ",height=" + a + ",left=" + s + ",top=" + o).focus()
}), data.view.isPost && $(".nldmag-pro-blog-post-comments").each(function () {
    1 != darkMode && "dark" == localStorage.themeColor && (fbCommentsTheme = "dark");
    var e = $(this),
        t = e.data("shortcode"),
        a = "comments-system-" + (r = shortCodeNld(t, "type"));
    switch (r) {
        case "disqus":
            var o = shortCodeNld(t, "shortname");
            0 != o && (disqus_shortname = o), disqusComments(disqus_shortname), e.addClass(a).show();
            break;
        case "facebook":
            e.addClass(a).find("#comments").html('<div class="fb-comments" data-width="100%" data-href="' + disqus_blogger_current_url + '" order_by="time" data-colorscheme="' + fbCommentsTheme + '" data-numposts="5" data-lazy="true"></div>'), e.show();
            break;
        case "hide":
            e.hide();
            break;
        default:
            e.addClass("comments-system-blogger").show(), $(".entry-meta .entry-comments-link").addClass("show")
    }
}),
Defer(function () {
    $(".entry-image-wrap .entry-thumb,.author-avatar-wrap .author-avatar,#footer-fbm .Image").lazynld(), $(".nldmag-pro-share-links").each(function () {
        var e = $(this);
        e.find(".show-hid a").on("click", function () {
            e.toggleClass("show-hidden")
        })
    }), $("#nldmag-pro-main-nav-menu li.mega-menu").each(function (e, t) {
        var a = $(this),
            s = a.find("a").data("shortcode");
        null != s && (e = s.toLowerCase(), ajaxMega(a, "msimple", 5, shortCodeNld(s, "label"), e))
    }), $(".nldmag-pro-widget-ready .HTML .widget-content").each(function (t, a, s) {
        var o = $(this),
            r = $(window),
            e = o.data("shortcode");
        null != e && (t = e.toLowerCase(), a = shortCodeNld(e, "results"), s = shortCodeNld(e, "label"), r.on("scroll", function e() {
            r.scrollTop() + r.height() >= o.offset().top && (r.off("scroll", e), ajaxWidget(o, "list1", a, s, t))
        }).trigger("scroll"))
    }), $(".content-section-wrap .HTML .widget-content").each(function (t, a, s) {
        var o = $(this),
            r = $(window),
            e = o.data("shortcode");
        null != e && (mtc = e.toLowerCase(), a = shortCodeNld(e, "results"), s = shortCodeNld(e, "label"), "colLeft" != (t = shortCodeNld(e, "type")) && "colRight" != t || o.parent().addClass("column-style type-" + t), r.on("scroll", function e() {
            r.scrollTop() + r.height() >= o.offset().top && (r.off("scroll", e), ajaxBlock(o, t, a, s, mtc))
        }).trigger("scroll"))
    }), $("#nldmag-pro-related-posts .HTML").each(function (i, n) {
        var l = $(this).data("shortcode");
        null != l && $("#related-wrap").each(function (t, a) {
            var e = $(this),
                s = $(window),
                o = e.find(".nldmag-pro-related-content"),
                r = (i = shortCodeNld(l, "title"), n = shortCodeNld(l, "results"), [i, n]);
            t = 0 != r[1] ? r[1] : 4, 0 != r[0] && e.find(".related-title .title").text(r[0]), a = e.find(".related-tag").data("label"), s.on("scroll", function e() {
                s.scrollTop() + s.height() >= o.offset().top && (s.off("scroll", e), ajaxRelated(o, "related", t, a, "getrelated"))
            }).trigger("scroll")
        })
    }), $("#nldmag-pro-mobile-menu").each(function () {
        var e = $(this),
            t = $("#nldmag-pro-main-nav-menu").clone();
        t.attr("id", "main-mobile-nav"), t.find(".mega-items").remove(), t.find(".mega-menu > a").each(function (e, t) {
            var a = $(this),
                s = a.data("shortcode");
            null != s && (t = "recent" == (e = shortCodeNld(s.trim(), "label")) ? "/search" : "/search/label/" + e, a.attr("href", t))
        }), t.appendTo(e), $(".mobile-menu-toggle, .hide-nldmag-pro-mobile-menu, .overlay").on("click", function () {
            $("body").toggleClass("nav-active")
        }), $(".nldmag-pro-mobile-menu .has-sub").append('<div class="submenu-toggle"/>'), $(".nldmag-pro-mobile-menu .mega-menu").find(".submenu-toggle").remove(), $(".nldmag-pro-mobile-menu ul li .submenu-toggle").on("click", function (e) {
            $(this).parent().hasClass("has-sub") && (e.preventDefault(), ($(this).parent().hasClass("show") ? $(this).parent().removeClass("show").find("> .m-sub") : $(this).parent().addClass("show").children(".m-sub")).slideToggle(170))
        })
    }), $(".mm-footer .mm-menu").each(function () {
        var e = $(this);
        $("#footer-menu ul.link-list").clone().appendTo(e)
    }), $(".slide-header-inner .mm-social").each(function () {
        var e = $(this),
            t = $(".footer-widget-inner .section ul.social").clone();
        t.removeClass("social-bg-hover"), t.appendTo(e)
    }), $(".show-search").off('click').on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        var target = $(this).next('.main-search-wrap');
        $(this).toggleClass('close');
        $('body').find('.show-searchform').not(target).removeClass('show-searchform');
        target.toggleClass('show-searchform');
    }), $(".section-sticky-holder").each(function () {
        var navOuter = $('.header-inner');
        var showPos = navOuter.offset().top + navOuter.height() + 70;
        var e, o = $(this);
        if (1 == fixedMenu && 0 < o.length && $(window).width() >= 992) {
            $(this).css('top', '-' + $(this).height() + 'px');
            $(window).scroll(function () {
                var e = $(this).scrollTop();
                showPos < e ? o.addClass("is-show") : (e < showPos || e <= 1) && o.removeClass("is-show") && $('body').find('.show-searchform').removeClass('show-searchform') && $('body').find('.show-search').removeClass('close')
            })
        }
    }), $('#nldmag-pro-main-nav-menu').each(function () {
        var rbMenus = $(this);
        if (rbMenus.length > 0) {
            rbMenus.each(function () {
                var menu = $(this);
                var subMenus = menu.find('.sub-menu');
                if (subMenus.length > 0) {
                    $(subMenus).each(function () {
                        var subItem = $(this);
                        var itemItem = subItem.children('li').children('a');
                        var index = 0;
                        $(itemItem).each(function () {
                            var item = $(this);
                            var delay = 200 + 35 * index;
                            item.css('transition-delay', delay + 'ms');
                            item.css('-webkit-transition-delay', delay + 'ms');
                            index++
                        })
                        var subMenuss = subMenus.find('.sub-menu2');
                        if (subMenuss.length > 0) {
                            $(subMenuss).each(function () {
                                var subItems = $(this);
                                var itemItems = subItems.children('li').children('a');
                                var indexs = 0;
                                $(itemItems).each(function () {
                                    var items = $(this);
                                    var delays = 200 + 35 * indexs;
                                    items.css('transition-delay', delays + 'ms');
                                    items.css('-webkit-transition-delays', delays + 'ms');
                                    indexs++
                                })
                            })
                        }
                    })
                }
            })
        }
    }), data.view.isSingleItem && loadJs('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/highlight.min.js', 'hl-jspl', 'body', function () {
        $(".post-body pre").each(function () {
            var e = $(this),
                t = (e.text().toLowerCase().trim(), e.html()),
                a = e.attr("class") || "html",
                u = e.attr("data-text");
            g = e.is("[data-text]") ? 'data-text="' + u + '"' : '';
            e.is("[class]") && e.replaceWith('<div class="pre ' + a + '" ' + g + '><pre class="' + a + '">' + t + "</pre></div>") && hljs.highlightBlock(e) && e.addEventListener("dblclick", function () { var e = getSelection(), o = document.createRange(); o.selectNodeContents(this), e.removeAllRanges(), e.addRange(o), document.execCommand("copy"), e.removeAllRanges(), toastNotif(NLDtst.preCopy.copiedMes) }, !1)
        })
    }), data.view.isSingleItem && $(".post-body a").each(function () {
        var e = $(this),
            t = (o = e.html()).toLowerCase(),
            a = shortCodeNld(o, "text"),
            s = shortCodeNld(o, "icon"),
            o = shortCodeNld(o, "color");
        t.match("getbutton") && 0 != a && (e.addClass("button btn").text(a), 0 != s && e.addClass(s), 0 != o && e.addClass("colored-button").attr("style", "background-color:" + o + ";"))
    }), data.view.isSingleItem && $(".post-body blockquote").each(function () {
        var e, t, a = $(this),
            s = a.text().toLowerCase().trim(),
            o = a.html();
        s.match("{alertsuccess}") && (e = o.replace("{alertSuccess}", ""), a.replaceWith('<div class="alert-message alert-success">' + e + "</div>")), s.match("{alertinfo}") && (e = o.replace("{alertInfo}", ""), a.replaceWith('<div class="alert-message alert-info">' + e + "</div>")), s.match("{alertwarning}") && (t = o.replace("{alertWarning}", ""), a.replaceWith('<div class="alert-message alert-warning">' + t + "</div>")), s.match("{alerterror}") && (t = o.replace("{alertError}", ""), a.replaceWith('<div class="alert-message alert-error">' + t + "</div>")), s.match("{codebox}") && (o = o.replace("{codeBox}", ""), a.replaceWith('<pre class="code-box">' + o + "</pre>"))
    }), data.view.isSingleItem && $("#post-body iframe").each(function () {
        var e = $(this);
        e.attr("src").match("www.youtube.com") && e.wrap('<div class="responsive-video-wrap"/>')
    }), $(".section-sticky-holder aside.main-menu-wrap").each(function () {
        var e = $(this),
            t = $("#nldmag-pro-main-nav").clone();
        t.appendTo(e),
            $(".section-sticky-holder #nldmag-pro-main-nav-menu li.mega-menu").each(function (e, t) {
                var a = $(this),
                    s = a.find("a").data("shortcode");
                null != s && (e = s.toLowerCase(), ajaxMega(a, "msimple", 5, shortCodeNld(s, "label"), e))
            });
    }), data.view.isMobile && $(".mobile-sticky-nav").each(function () {
        var navOuter = $('.header-inner');
        var showPos = navOuter.offset().top + navOuter.height() + 70;
        var e, o = $(this);
        if (1 == fixedMenu && 0 < o.length && $(window).width() < 992) {
            $(this).css('top', '-' + $(this).height() + 'px');
            $(window).scroll(function () {
                var e = $(this).scrollTop();
                showPos < e ? o.addClass("is-show") : (e < showPos || e <= 1) && o.removeClass("is-show")
            })
        }
    }), $(".is-single #main-wrapper, .is-single #sidebar-wrapper").each(function (e) {
        1 == fixedSidebar && (e = 1 == fixedSidebar ? 88 : 40, $(this).theiaStickySidebar({
            containerSelector: "#content-wrapper > .container",
            additionalMarginTop: e,
            additionalMarginBottom: 40
        }))
    }), data.view.isMultipleItems && $("#nldmag-pro-load-more-link").each(function () {
        var a = $(this).data("load");
        a && $("#nldmag-pro-load-more-link").show(), $("#nldmag-pro-load-more-link").on("click", function (e) {
            $("#nldmag-pro-load-more-link").hide(), $.ajax({
                url: a,
                success: function (e) {
                    var t = $(e).find(".blog-posts");
                    t.find(".index-post").addClass("post-animated post-fadeInUp"), $(".blog-posts").append(t.html()), (a = $(e).find("#nldmag-pro-load-more-link").data("load")) ? $("#nldmag-pro-load-more-link").show() : ($("#nldmag-pro-load-more-link").hide(), $("#blog-pager .no-more").addClass("show")), loadPostVw()
                },
                beforeSend: function () {
                    $("#blog-pager .loading").show()
                },
                complete: function () {
                    $("#blog-pager .loading").hide(), $(".index-post .entry-image-wrap .entry-thumb").lazynld(), $(".entry-time .published").timeago();
                }
            }), e.preventDefault()
        })
    }), $("#nldmag-pro-cookie-nld").each(function () {
        var a = $(this),
            e = a.find(".widget.Text").data("shortcode");
        null != e && (ok = shortCodeNld(e, "ok"), days = shortCodeNld(e, "days"), 0 != ok && a.find("#nldmag-pro-cookie-nld-accept").text(ok), days = 0 != days ? Number(days) : 7), 0 < a.length && ("1" !== $.cookie("nldmag_pro_cookie_nld_consent") && (a.css("display", "block"), setTimeout(function () {
            a.addClass("is-visible")
        }, 10)), $("#nldmag-pro-cookie-nld-accept").off("click").on("click", function (e) {
            var t = {};
            t.expires = days, t.path = "/", e.preventDefault(), e.stopPropagation(), $.cookie("nldmag_pro_cookie_nld_consent", "1", t), a.removeClass("is-visible"), setTimeout(function () {
                a.css("display", "none")
            }, 500)
        }), cookieChoices = {})
    }), $("#back-top").each(function () {
        var e = $(this);
        $(window).on("scroll", function () {
            100 <= $(this).scrollTop() ? e.fadeIn(170) : e.fadeOut(170), e.offset().top >= $("#footer-wrapper").offset().top - 34 ? e.addClass("on-footer") : e.removeClass("on-footer")
        }), e.on("click", function () {
            $("html, body").animate({
                scrollTop: 0
            }, 800)
        })
    }), $(".entry-time .published").each(function () {
        $(this).timeago();
    }), $('.nb-newsletter-form').submit(function (e) {
        var target = $(this);
        var responseWrap = target.closest('body').find('.newsletter-response');
        responseWrap.find('.is-show').removeClass('is-show');
        var privacy = target.find(':checkbox[name="nb_privacy"]');
        if (privacy != null && privacy.length > 0) {
            var privacyVal = privacy.prop('checked');
            if (!privacyVal) {
                responseWrap.find('.privacy-error').addClass('is-show showing');
                setTimeout(function () { responseWrap.find('.is-show').removeClass('is-show'); }, 4000);
                return !1
            }
        }
    }), data.view.isPost && $('#greetings').each(function () {
        var curHr = new Date().getHours();
        var welMes = ["Have a Sweet Dreams!", "Good Morning!", "Good Afternoon!", "Good Evening!", "Good Night!", "It's time to sleep!"];
        let welText = "";
        if (curHr < 4) welText = welMes[0];
        else if (curHr < 12) welText = welMes[1];
        else if (curHr < 17) welText = welMes[2];
        else if (curHr < 19) welText = welMes[3];
        else if (curHr < 22) welText = welMes[4];
        else welText = welMes[5];
        $(this).attr('data-text', welText);
    }), data.view.isSingleItem && $('.comments-system-blogger').length > 0 && $('#comments').each(function () {
        var data_embed = $(this).attr('data-embed'), data_allow_comments = $(this).attr('data-allow-comments'),
            elem = document.querySelector('.commentForm'), l = '', id = '', li = '', frame = null, a = '', c = '&parentID=', u = '';
        const oghff = $("#comment-editor-src").attr("href");
        if (data_embed == 'true' && data_allow_comments == 'true') {
            if (url.indexOf('#comments') != -1 || url.indexOf('?showComment') != -1 || url.indexOf('?commentPage') != -1) {
                $(elem).append('<iframe class="blogger-iframe-colorize blogger-comment-from-post" id="comment-editor" name="comment-editor" src="" title="comment iframe"></iframe>')
                $.getScript('https://www.blogger.com/static/v1/jsbin/2567313873-comment_from_post_iframe.js').done(function () {
                    BLOG_CMT_createIframe('https://www.blogger.com/rpc_relay.html')
                    $(elem).removeClass('loader')
                })
            } else {
                var load_iframe = 0
                function append_iframe() {
                    if (load_iframe == 0) {
                        load_iframe = 1
                        $(elem).removeClass('loader')
                        $(elem).append('<iframe class="blogger-iframe-colorize blogger-comment-from-post" id="comment-editor" name="comment-editor" src="" title="comment iframe"></iframe>')
                        $.getScript('https://www.blogger.com/static/v1/jsbin/2567313873-comment_from_post_iframe.js').done(function () {
                            BLOG_CMT_createIframe('https://www.blogger.com/rpc_relay.html')
                        })
                    }
                }
                $(window).on('scroll', function () {
                    if ($(this).scrollTop() >= $('.post-footer').position().top - 50) {
                        append_iframe()
                    }
                })
            }
            $('.comment a.comment-reply').click(function (e) {
                l = $('#comment-editor').attr('src')
                $('.calcel-reply').remove()
                $('.comment-actions').removeAttr('style')
                var $this = $(this),
                    id = $this.attr('data-comment-id')
                a = c + id
                if (frame == null) {
                    frame = $('#comment-editor');
                    if (frame != null) {
                        u = frame.attr('src').split(c)
                    }
                }
                l = u[0]
                li = $this.parent().parent().parent().attr('id')
                $('#comment-editor').attr('src', l + a)
                $this.parent().hide()
                $(elem).appendTo($('#' + li + '>.comment-replybox-single'))
                $('#' + li + '>.comment-replybox-single').append('<div class="calcel-reply"><button aria-label="Hủy" class="theme-button simple" type="button">Hủy trả lời</button></div>')
                $('.calcel-reply').click(function () {
                    $(this).remove()
                    $('.comment-actions').removeAttr('style')
                    $(elem).appendTo($('.comment-form'))
                    $('#comment-editor')[
                        0
                    ].src = oghff
                    $('html,body').animate({ scrollTop: $(elem).offset().top - $('#sticky-nav > div > div').height() }, 1000)
                })
            })
            $('.toplevel-thread>ol>li>.comment-replies').each(function () {
                if ($(this).find('.comment-thread>ol>div>li').length > 0) {
                    $(this).before('<div class="view-replies"><span class="has-hover">Xem ' + $(this).find('.comment-thread>ol>div>li').length + ' câu trả lời</span></div>')
                }
                $('.comment .view-replies>span').click(function () {
                    $(this).parent().hide()
                    $(this).parent().next().removeClass('hidden')
                })
            })
            if (url.indexOf('?showComment') != -1) {
                if (url.indexOf('#c') != -1) {
                    var li = '#' + url.substring(url.indexOf('#c') + 1, url.length)
                    $(li).parents('li').find('.view-replies').hide()
                    $(li).parents('.comment-replies').removeClass('hidden')
                    $('html,body').animate({ scrollTop: $(li).offset().top - $('#sticky-nav > div > div').height() }, 1000)
                }
            }
            if (url.indexOf('#comments') != -1) {
                $('html,body').animate({ scrollTop: $(elem).offset().top - $('#sticky-nav > div > div').height() }, 1000)
            }
        }
    }), data.view.isSingleItem && $(".comments .comment-header .datetime a").each(function () {
        var gettimes = $(this);
        var timeagos = gettimes.html();
        var timeagos = timeagos.replace("SA", "AM");
        var timeagos = timeagos.replace("CH", "PM");
        gettimes.attr("datetime", timeagos)
        gettimes.html(jQuery.timeago(timeagos))
    }), data.view.isSingleItem && $("p.comment-content").each(function () {
        var e = $(this);
        e.replaceText(/(https:\/\/\S+(\.png|\.jpeg|\.jpg|\.gif))/g, '<img src="$1"/>'), e.replaceText(/(?:https:\/\/)?(?:www\.)?(?:youtube\.com)\/(?:watch\?v=)?(.+)/g, '<div class="responsive-video-wrap"><iframe id="youtube" width="100%" height="358" src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>')
    })
}, 100)
