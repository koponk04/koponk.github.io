function stickyShare(){var e=$(".share-wrapper");scrollValue>e.offset().top&&(alert("jjoni"),$("share-fix").addClass(".scrolled"))}var scrollValue=$(window).scrollTop();$(window).bind("scroll",function(){var e=$(".notice-app").height();$(window).scrollTop()>e?($("#site-header").addClass("fixed"),$(".mobile-menu-wrapper").addClass("fixed")):($("#site-header").removeClass("fixed"),$(".mobile-menu-wrapper").removeClass("fixed"))});