$(".top_view").length>0&&(this.num_images=$(".top_view").find("img").size(),this.num_loaded_images=0,this.is_autoplaying=!1,$(".top_view").slick({slidesToShow:3,lazyLoad:"progressive"}),self=this,$(".top_view").on("lazyLoaded",function(e,i,t,n){self.num_loaded_images<self.num_images&&(self.num_loaded_images+=1),self.is_autoplaying||self.num_loaded_images!==self.num_images||($(".top_view").slick("slickPlay"),self.is_autoplaying=!0)})),$(function(){$(".top_view").length>0&&$(".top_view").slick({arrows:!0,infinite:!0,autoplay:!0,autoplaySpeed:4e3,dots:!1,slidesToShow:1,slidesToScroll:1,centerMode:!0,centerPadding:"30%",responsive:[{breakpoint:780,settings:{centerPadding:"20%"}},{breakpoint:580,settings:{centerPadding:"10%"}}]})}),$(function(){var e=0;$('a[href^="#"]').click(function(){var e=$(this).attr("href"),i=$("#"==e||""==e?"html":e);if(i.length>0){var t=i.offset().top-0;return $("html, body").animate({scrollTop:t},550,"swing"),!1}})}),$(function(){if($("#pageup").length>0){var e=$("#pageup");e.hide(),$(window).scroll(function(){$(this).scrollTop()>100?e.fadeIn():e.fadeOut()}),e.click(function(){return $("body,html").animate({scrollTop:0},500),!1})}}),$(document).ready(function(){$(".drawer").length>0&&$(".drawer").drawer({class:{nav:"drawer header nav",toggle:"toggle",overlay:"drawer-overlay",open:"drawer-open",close:"drawer-close",dropdown:"drawer-dropdown"},iscroll:{mouseWheel:!0,preventDefault:!1},showOverlay:!0})}),function($){$(function(){var e=$("header");$(window).scroll(function(){$(window).scrollTop()>50?e.addClass("fixed"):e.removeClass("fixed")})})}(jQuery),$(function(){function e(){var e=parseInt($(window).width());i.each(function(){var i=$(this);e>=s?i.attr("src",i.attr("src").replace(t,n)):i.attr("src",i.attr("src").replace(n,t))})}if($(".js-image-switch").length>0){var i=$(".js-image-switch"),t="_sp.",n="_pc.",s=768;e();var l;$(window).on("resize",function(){clearTimeout(l),l=setTimeout(function(){e()},200)})}}),$(function(){$("ul.slider").length>0&&$("ul.slider").owlCarousel({items:4,itemsDesktop:[1199,3],itemsDesktopSmall:!1,itemsTablet:[780,3],itemsMobile:[479,2]})}),$(function(){$(".open").length>0&&($(".open").prevAll(".set_list").hide(),$(".open").click(function(){$(this).nextAll(".set_list").is(":hidden")?($(this).nextAll(".set_list").slideDown(),$(this).addClass("close")):($(this).nextAll(".set_list").slideUp(),$(this).removeClass("close"))}))}),$(function(){$(".area_open").length>0&&($(".area_open").prevAll(".area_list").hide(),$(".area_open").click(function(){$(this).nextAll(".area_list").is(":hidden")?($(this).nextAll(".area_list").slideDown(),$(this).addClass("area_close")):($(this).nextAll(".area_list").slideUp(),$(this).removeClass("area_close"))}))}),$(function(){$(".conditions_open").length>0&&($(".conditions_open").prevAll(".conditions_search_detail").hide(),$(".conditions_open").click(function(){$(this).nextAll(".conditions_search_detail").is(":hidden")?($(this).nextAll(".conditions_search_detail").slideDown(),$(this).addClass("conditions_close")):($(this).nextAll(".conditions_search_detail").slideUp(),$(this).removeClass("conditions_close"))}))}),$(function(){$("dl.accordion dt").length>0&&$("dl.accordion dt").click(function(){$(this).next("dd").slideToggle(),$(this).next("dd").siblings("dd").slideUp(),$(this).toggleClass("open"),$(this).siblings("dt").removeClass("open")})}),$(function(){var e=10;$('a[href^="#"]').click(function(){var e=$(this).attr("href"),i=$("#"==e||""==e?"html":e);if(i.length>0){var t=i.offset().top-10;return $("html, body").animate({scrollTop:t},550,"swing"),!1}})}),$(function(){$("#file").change(function(){$("#result img").remove();var e=$(this).prop("files")[0];if(e.type.match("image.*")){var i=new FileReader;i.onloadend=function(){$("#result").html('<img src="'+i.result+'"/>')},i.readAsDataURL(e)}}),$("#file2").change(function(){$("#result2 img").remove();var e=$(this).prop("files")[0];if(e.type.match("image.*")){var i=new FileReader;i.onloadend=function(){$("#result2").html('<img src="'+i.result+'"/>')},i.readAsDataURL(e)}}),$("#file3").change(function(){$("#result3 img").remove();var e=$(this).prop("files")[0];if(e.type.match("image.*")){var i=new FileReader;i.onloadend=function(){$("#result3").html('<img src="'+i.result+'"/>')},i.readAsDataURL(e)}}),$("#file4").change(function(){$("#result4 img").remove();var e=$(this).prop("files")[0];if(e.type.match("image.*")){var i=new FileReader;i.onloadend=function(){$("#result4").html('<img src="'+i.result+'"/>')},i.readAsDataURL(e)}})}),$(function(){$("#list_open").length>0&&$("#list_open dt").on("click",function(){$(this).next().slideToggle(),$(this).toggleClass("changed")})}),$(function(){$(".foo").length>0&&$(".foo").flatpickr({locale:"ja",enableTime:!0})});