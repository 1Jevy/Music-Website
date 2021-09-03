window._wpemojiSettings = {
    "baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/13.1.0\/72x72\/",
    "ext": ".png",
    "svgUrl": "https:\/\/s.w.org\/images\/core\/emoji\/13.1.0\/svg\/",
    "svgExt": ".svg",
    "source": {
        "concatemoji": "https:\/\/ckmusicpromos.com\/wp-includes\/js\/wp-emoji-release.min.js?ver=5.8"
    }
};
! function(e, a, t) {
    var n, r, o, i = a.createElement("canvas"),
        p = i.getContext && i.getContext("2d");

    function s(e, t) {
        var a = String.fromCharCode;
        p.clearRect(0, 0, i.width, i.height), p.fillText(a.apply(this, e), 0, 0);
        e = i.toDataURL();
        return p.clearRect(0, 0, i.width, i.height), p.fillText(a.apply(this, t), 0, 0), e === i.toDataURL()
    }

    function c(e) {
        var t = a.createElement("script");
        t.src = e, t.defer = t.type = "text/javascript", a.getElementsByTagName("head")[0].appendChild(t)
    }
    for (o = Array("flag", "emoji"), t.supports = {
            everything: !0,
            everythingExceptFlag: !0
        }, r = 0; r < o.length; r++) t.supports[o[r]] = function(e) {
        if (!p || !p.fillText) return !1;
        switch (p.textBaseline = "top", p.font = "600 32px Arial", e) {
            case "flag":
                return s([127987, 65039, 8205, 9895, 65039], [127987, 65039, 8203, 9895, 65039]) ? !1 : !s([55356, 56826, 55356, 56819], [55356, 56826, 8203, 55356, 56819]) && !s([55356, 57332, 56128, 56423, 56128, 56418, 56128, 56421, 56128, 56430, 56128, 56423, 56128, 56447], [55356, 57332, 8203, 56128, 56423, 8203, 56128, 56418, 8203, 56128, 56421, 8203, 56128, 56430, 8203, 56128, 56423, 8203, 56128, 56447]);
            case "emoji":
                return !s([10084, 65039, 8205, 55357, 56613], [10084, 65039, 8203, 55357, 56613])
        }
        return !1
    }(o[r]), t.supports.everything = t.supports.everything && t.supports[o[r]], "flag" !== o[r] && (t.supports.everythingExceptFlag = t.supports.everythingExceptFlag && t.supports[o[r]]);
    t.supports.everythingExceptFlag = t.supports.everythingExceptFlag && !t.supports.flag, t.DOMReady = !1, t.readyCallback = function() {
        t.DOMReady = !0
    }, t.supports.everything || (n = function() {
        t.readyCallback()
    }, a.addEventListener ? (a.addEventListener("DOMContentLoaded", n, !1), e.addEventListener("load", n, !1)) : (e.attachEvent("onload", n), a.attachEvent("onreadystatechange", function() {
        "complete" === a.readyState && t.readyCallback()
    })), (n = t.source || {}).concatemoji ? c(n.concatemoji) : n.wpemoji && n.twemoji && (c(n.twemoji), c(n.wpemoji)))
}(window, document, window._wpemojiSettings);

/* <![CDATA[ */
var cnArgs = {
    "ajaxUrl": "https:\/\/cmbmusicpromos.com\/wp-admin\/admin-ajax.php",
    "nonce": "802d14c91f",
    "hideEffect": "fade",
    "position": "bottom",
    "onScroll": "0",
    "onScrollOffset": "100",
    "onClick": "0",
    "cookieName": "cookie_notice_accepted",
    "cookieTime": "2592000",
    "cookieTimeRejected": "2592000",
    "cookiePath": "\/",
    "cookieDomain": "",
    "redirection": "0",
    "cache": "1",
    "refuse": "0",
    "revokeCookies": "0",
    "revokeCookiesOpt": "automatic",
    "secure": "1"
};
/* ]]> */

window.tdb_globals = {
    "wpRestNonce": "a4e5936e3d",
    "wpRestUrl": "https:\/\/cmbmusicpromos.com\/wp-json\/",
    "permalinkStructure": "\/%postname%\/",
    "isAjax": false,
    "isAdminBarShowing": false,
    "autoloadScrollPercent": 50
};

window.OneSignal = window.OneSignal || [];

OneSignal.push(function() {
    OneSignal.SERVICE_WORKER_UPDATER_PATH = "OneSignalSDKUpdaterWorker.js.php";
    OneSignal.SERVICE_WORKER_PATH = "OneSignalSDKWorker.js.php";
    OneSignal.SERVICE_WORKER_PARAM = {
        scope: "/"
    };
    OneSignal.setDefaultNotificationUrl("https://cmbmusicpromos.com");
    var oneSignal_options = {};
    window._oneSignalInitOptions = oneSignal_options;

    oneSignal_options['wordpress'] = true;
    oneSignal_options['appId'] = 'a4d3d755-c088-4eb5-9fe6-e09818eebc8b';
    oneSignal_options['allowLocalhostAsSecureOrigin'] = true;
    oneSignal_options['welcomeNotification'] = {};
    oneSignal_options['welcomeNotification']['title'] = "";
    oneSignal_options['welcomeNotification']['message'] = "";
    oneSignal_options['path'] = "https://cmbmusicpromos.com/wp-content/plugins/onesignal-free-web-push-notifications/sdk_files/";
    oneSignal_options['safari_web_id'] = "web.onesignal.auto.613528e9-2930-4b07-a098-5a9518822d98";
    oneSignal_options['persistNotification'] = true;
    oneSignal_options['promptOptions'] = {};
    oneSignal_options['notifyButton'] = {};
    oneSignal_options['notifyButton']['enable'] = true;
    oneSignal_options['notifyButton']['position'] = 'bottom-right';
    oneSignal_options['notifyButton']['theme'] = 'default';
    oneSignal_options['notifyButton']['size'] = 'medium';
    oneSignal_options['notifyButton']['showCredit'] = true;
    oneSignal_options['notifyButton']['text'] = {};
    OneSignal.init(window._oneSignalInitOptions);
    OneSignal.showSlidedownPrompt();
});

function documentInitOneSignal() {
    var oneSignal_elements = document.getElementsByClassName("OneSignal-prompt");

    var oneSignalLinkClickHandler = function(event) {
        OneSignal.push(['registerForPushNotifications']);
        event.preventDefault();
    };
    for (var i = 0; i < oneSignal_elements.length; i++)
        oneSignal_elements[i].addEventListener('click', oneSignalLinkClickHandler, false);
}

if (document.readyState === 'complete') {
    documentInitOneSignal();
} else {
    window.addEventListener("load", function(event) {
        documentInitOneSignal();
    });
}

var tdBlocksArray = []; //here we store all the items for the current page

//td_block class - each ajax block uses a object of this class for requests
function tdBlock() {
    this.id = '';
    this.block_type = 1; //block type id (1-234 etc)
    this.atts = '';
    this.td_column_number = '';
    this.td_current_page = 1; //
    this.post_count = 0; //from wp
    this.found_posts = 0; //from wp
    this.max_num_pages = 0; //from wp
    this.td_filter_value = ''; //current live filter value
    this.is_ajax_running = false;
    this.td_user_action = ''; // load more or infinite loader (used by the animation)
    this.header_color = '';
    this.ajax_pagination_infinite_stop = ''; //show load more at page x
}


// td_js_generator - mini detector
(function() {
    var htmlTag = document.getElementsByTagName("html")[0];

    if (navigator.userAgent.indexOf("MSIE 10.0") > -1) {
        htmlTag.className += ' ie10';
    }

    if (!!navigator.userAgent.match(/Trident.*rv\:11\./)) {
        htmlTag.className += ' ie11';
    }

    if (navigator.userAgent.indexOf("Edge") > -1) {
        htmlTag.className += ' ieEdge';
    }

    if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent)) {
        htmlTag.className += ' td-md-is-ios';
    }

    var user_agent = navigator.userAgent.toLowerCase();
    if (user_agent.indexOf("android") > -1) {
        htmlTag.className += ' td-md-is-android';
    }

    if (-1 !== navigator.userAgent.indexOf('Mac OS X')) {
        htmlTag.className += ' td-md-is-os-x';
    }

    if (/chrom(e|ium)/.test(navigator.userAgent.toLowerCase())) {
        htmlTag.className += ' td-md-is-chrome';
    }

    if (-1 !== navigator.userAgent.indexOf('Firefox')) {
        htmlTag.className += ' td-md-is-firefox';
    }

    if (-1 !== navigator.userAgent.indexOf('Safari') && -1 === navigator.userAgent.indexOf('Chrome')) {
        htmlTag.className += ' td-md-is-safari';
    }

    if (-1 !== navigator.userAgent.indexOf('IEMobile')) {
        htmlTag.className += ' td-md-is-iemobile';
    }

})();


// JS generated by theme

var tdLocalCache = {};

(function() {
    "use strict";

    tdLocalCache = {
        data: {},
        remove: function(resource_id) {
            delete tdLocalCache.data[resource_id];
        },
        exist: function(resource_id) {
            return tdLocalCache.data.hasOwnProperty(resource_id) && tdLocalCache.data[resource_id] !== null;
        },
        get: function(resource_id) {
            return tdLocalCache.data[resource_id];
        },
        set: function(resource_id, cachedData) {
            tdLocalCache.remove(resource_id);
            tdLocalCache.data[resource_id] = cachedData;
        }
    };
})();



var td_viewport_interval_list = [{
    "limitBottom": 767,
    "sidebarWidth": 228
}, {
    "limitBottom": 1018,
    "sidebarWidth": 300
}, {
    "limitBottom": 1140,
    "sidebarWidth": 324
}];
var tdc_is_installed = "yes";
var td_ajax_url = "https:\/\/cmbmusicpromos.com\/wp-admin\/admin-ajax.php?td_theme_name=Newspaper&v=11";
var td_get_template_directory_uri = "https:\/\/cmbmusicpromos.com\/wp-content\/plugins\/td-composer\/legacy\/common";
var tds_snap_menu = "";
var tds_logo_on_sticky = "";
var tds_header_style = "11";
var td_please_wait = "Please wait...";
var td_email_user_pass_incorrect = "User or password incorrect!";
var td_email_user_incorrect = "Email or username incorrect!";
var td_email_incorrect = "Email incorrect!";
var tds_more_articles_on_post_enable = "show";
var tds_more_articles_on_post_time_to_wait = "";
var tds_more_articles_on_post_pages_distance_from_top = 0;
var tds_theme_color_site_wide = "#4db2ec";
var tds_smart_sidebar = "";
var tdThemeName = "Newspaper";
var td_magnific_popup_translation_tPrev = "Previous (Left arrow key)";
var td_magnific_popup_translation_tNext = "Next (Right arrow key)";
var td_magnific_popup_translation_tCounter = "%curr% of %total%";
var td_magnific_popup_translation_ajax_tError = "The content from %url% could not be loaded.";
var td_magnific_popup_translation_image_tError = "The image #%curr% could not be loaded.";
var tdBlockNonce = "c329f99762";
var tdDateNamesI18n = {
    "month_names": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    "month_names_short": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    "day_names": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "day_names_short": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
};
var td_ad_background_click_link = "";
var td_ad_background_click_target = ""