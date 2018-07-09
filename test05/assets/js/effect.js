// 使用していない記述は削除してください。

// 該当なしでも
	if ( $('.top_view').length > 0 ) {
		
	// ロードすべき画像数
	this.num_images = $('.top_view').find("img").size();
	// ロードされた画像数
	this.num_loaded_images = 0;
	// 自動再生中ならtrue
	this.is_autoplaying = false

	$('.top_view').slick({
	  slidesToShow: 3,
	  lazyLoad: 'progressive'
	});

	self = this;
	// 画像がロードされるたびに呼ばれるイベントlazyLoaded
	$('.top_view').on("lazyLoaded", function(event, slick, image, imageSource) {
		  if (self.num_loaded_images < self.num_images) {
			// ロードされた画像をカウント
			self.num_loaded_images += 1;
		  }
		  if (!self.is_autoplaying && (self.num_loaded_images === self.num_images)) {
			// まだ自動再生中でなく、すべての画像が読み込まれたら、自動再生を開始する
			$('.top_view').slick("slickPlay");
			self.is_autoplaying = true;
		  }
	});
}



// トップスライダーの起動
$(function(){
	// 該当なしでも
	if ( $('.top_view').length > 0 ) {
		$('.top_view').slick({
			arrows: true,
			infinite: true,
			autoplay: true,
            // adaptiveHeight: true,
			autoplaySpeed: 4000,
			dots: false,
			slidesToShow: 1, // いくつスライドが見えている状態か
			slidesToScroll: 1,　// スライドする数
			centerMode: true, //要素を中央寄せ
			centerPadding: '30%',
			
			responsive: [{
				breakpoint: 780,
					settings: {
						centerPadding: '20%',
				}
			},{
				breakpoint: 580,
					settings: {
						centerPadding: '10%',
					}
				}
			]
		});
	}
});



// スクロールエフェクト
$(function () {
    var headerHight = 0; //ヘッダの高さ
    $('a[href^="#"]').click(function(){
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        if ( target.length > 0 ) {
            var position = target.offset().top-headerHight;
            $("html, body").animate({scrollTop:position}, 550, "swing");
            return false;
        }
    });
})



// ページトップボタンの表示
$(function() {
	// 該当なしでも
		if ( $('#pageup').length > 0 ) {
		var topBtn = $('#pageup');    
		topBtn.hide();
		//スクロールが100に達したらボタン表示
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				topBtn.fadeIn();
			} else {
				topBtn.fadeOut();
			}
		});
		//スクロールしてトップ
		topBtn.click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 500);
			return false;
		});
	}
});



// ドロワーメニューの起動設定
$(document).ready(function() {

	// 該当なしでも
	if ( $('.drawer').length > 0 ) {

		$('.drawer').drawer({
			class: {
				nav: 'drawer header nav',
				toggle: 'toggle',
				overlay: 'drawer-overlay',
				open: 'drawer-open',
				close: 'drawer-close',
				dropdown: 'drawer-dropdown'
			},
			iscroll: {
				// Configuring the iScroll
				// https://github.com/cubiq/iscroll#configuring-the-iscroll
				mouseWheel: true,
				preventDefault: false
			},
			showOverlay: true
		});
	}
});



//ヘッダーの固定エフェクト
(function($) {
    $(function() {
        var $header = $('header');
        $(window).scroll(function() {
            if ($(window).scrollTop() > 50) {
                $header.addClass('fixed');
            } else {
                $header.removeClass('fixed');
            }
        });
    });
})(jQuery);



// レスポンシブ画像切り替え imgにclass「js-image-switch」
$(function() {
	// 該当なしでも
	if ( $('.js-image-switch').length > 0 ) {
		
		var $elem = $('.js-image-switch');
		var sp = '_sp.';
		var pc = '_pc.';
		// 画像を切り替えるウィンドウサイズ
		var replaceWidth = 768;

		function imageSwitch() {
			var windowWidth = parseInt($(window).width());
			$elem.each(function() {
				var $this = $(this);
				if(windowWidth >= replaceWidth) {
				$this.attr('src', $this.attr('src').replace(sp, pc));
				} else {
					$this.attr('src', $this.attr('src').replace(pc, sp));
				}
			});
		}
		imageSwitch();

		var resizeTimer;
		$(window).on('resize', function() {
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(function() {
				imageSwitch();
			}, 200);
		});
	}
});



// スライダーの起動
$(function() {
	
	// 該当なしでも
	if ( $('ul.slider').length > 0 ) {
		
		$('ul.slider').owlCarousel({
			items : 4,
			itemsDesktop :[1199,3],
			itemsDesktopSmall : false,
			itemsTablet: [780,3],
			itemsMobile : [479,2]
		});
	}
});



// 検索ページのアコーディオン設定
$(function () {
    if ( $('.open').length > 0 ) {
        $('.open').prevAll(".set_list").hide();
        $('.open').click(function () {
            if ($(this).nextAll(".set_list").is(':hidden')) {
                $(this).nextAll(".set_list").slideDown();
                $(this).addClass('close');
            } else {
                $(this).nextAll(".set_list").slideUp();
                $(this).removeClass('close');
            }
        });
    }
});

$(function () {
    if ( $('.area_open').length > 0 ) {
        $('.area_open').prevAll(".area_list").hide();
        $('.area_open').click(function () {
            if ($(this).nextAll(".area_list").is(':hidden')) {
                $(this).nextAll(".area_list").slideDown();
                $(this).addClass('area_close');
            } else {
                $(this).nextAll(".area_list").slideUp();
                $(this).removeClass('area_close');
            }
        });
    }
});



$(function () {
    if ( $('.conditions_open').length > 0 ) {
        $('.conditions_open').prevAll(".conditions_search_detail").hide();
        $('.conditions_open').click(function () {
            if ($(this).nextAll(".conditions_search_detail").is(':hidden')) {
                $(this).nextAll(".conditions_search_detail").slideDown();
                $(this).addClass('conditions_close');
            } else {
                $(this).nextAll(".conditions_search_detail").slideUp();
                $(this).removeClass('conditions_close');
            }
        });
    }
    
});



// アコーディオンの起動
$(function(){
	
	// 該当なしでも
	if ( $('dl.accordion dt').length > 0 ) {
		
		$("dl.accordion dt").click(function(){
			$(this).next("dd").slideToggle();
			$(this).next("dd").siblings("dd").slideUp();
			$(this).toggleClass("open");    
			$(this).siblings("dt").removeClass("open");
		});
	}
});



// スクロールエフェクト
$(function () {
    var headerHight = 10; //ヘッダの高さ
    $('a[href^="#"]').click(function(){
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        if ( target.length > 0 ) {
            var position = target.offset().top-headerHight;
            $("html, body").animate({scrollTop:position}, 550, "swing");
            return false;
        }
    });
})


// input image
$(function(){
    $('#file').change(function(){
        $('#result img').remove();
        var file = $(this).prop('files')[0];
        if(!file.type.match('image.*')){
            return;
        }
        var fileReader = new FileReader();
        fileReader.onloadend = function() {
            $('#result').html('<img src="' + fileReader.result + '"/>');
        }
        fileReader.readAsDataURL(file);
    });
    
    $('#file2').change(function(){
        $('#result2 img').remove();
        var file = $(this).prop('files')[0];
        if(!file.type.match('image.*')){
            return;
        }
        var fileReader = new FileReader();
        fileReader.onloadend = function() {
            $('#result2').html('<img src="' + fileReader.result + '"/>');
        }
        fileReader.readAsDataURL(file);
    });
    
    $('#file3').change(function(){
        $('#result3 img').remove();
        var file = $(this).prop('files')[0];
        if(!file.type.match('image.*')){
            return;
        }
        var fileReader = new FileReader();
        fileReader.onloadend = function() {
            $('#result3').html('<img src="' + fileReader.result + '"/>');
        }
        fileReader.readAsDataURL(file);
    });
    
    $('#file4').change(function(){
        $('#result4 img').remove();
        var file = $(this).prop('files')[0];
        if(!file.type.match('image.*')){
            return;
        }
        var fileReader = new FileReader();
        fileReader.onloadend = function() {
            $('#result4').html('<img src="' + fileReader.result + '"/>');
        }
        fileReader.readAsDataURL(file);
    });
});




// よくある質問の回答開く
$(function(){
    if ( $('#list_open').length > 0 ) {
    	
        $("#list_open dt").on("click", function() {
            $(this).next().slideToggle();
            $(this).toggleClass("changed");
        });
    }
});




// カレンダー
$(function () {
    if ( $('.foo').length > 0 ) {
        $(".foo").flatpickr(
            {
                // dateFormat: 'Y年m月d日',
                locale: 'ja',
                enableTime: true
            }
        );
    }
});


// 検索モーダル

// $(function () {
// $('[data-remodal-id=modal]').remodal();
// });