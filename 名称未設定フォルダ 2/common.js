/* マウスオン時に画像を切り替える */
$ (function () {
	$ ("img.rollover-image").each (function () {
		$ ("<img />").attr ("src", this.src.replace (/\.([^.]+)$/, "_hover." + "$1")).appendTo ("body").hide ();
	});
	$ ("a:has(img.rollover-image)").hover (function () {
		$ ("img.rollover-image:not([src*='_hover.'])", this).each (function () {
			this.src = this.src.replace (/\.([^.]+)$/, "_hover." + "$1");
		});
	}, function () {
		$ ("img.rollover-image", this).each (function () {
			this.src = this.src.replace (/_hover\.([^.]+)$/, "." + "$1");
		});
	});
	$ ("input.rollover-image").each (function () {
		$ ("<img />").attr ("src", this.src.replace (/\.([^.]+)$/, "_hover." + "$1")).appendTo ("body").hide ();
		$ (this).hover (function () {
			this.src = this.src.replace (/\.([^.]+)$/, "_hover." + "$1");
		}, function () {
			this.src = this.src.replace (/_hover\.([^.]+)$/, "." + "$1");
		});
	});
});


/* マウスオン時に画像を透過させる */
$(function(){
		$("img.rollover-alpha").hover(function(){
		$(this).fadeTo("fast", 0.5);
	},function(){
		$(this).fadeTo("fast", 1.0);
	});
});


/* ナビゲーションをスクロールしても定位置に固定させる */
$(function() {
    var offset = $("#sidebar").offset();
    var topPadding = 15;
    $(window).scroll(function() {
        if ($(window).scrollTop() > offset.top) {
            $("#sidebar").stop().animate({
                marginTop: $(window).scrollTop() - offset.top + topPadding{
            });
        } else {
            $("#sidebar").stop().animate({
                marginTop: 0
            });
        }
    });
});


/* 画像を自動で切り替える */
$ (function() {
	$("img.cycle").cycle({
		fx: 'fade',
		speed:  'fast',
		timeout: 1000
	});
});

/* サムネイルクリックで画像を切り替える */
$ (function () {
	$ ("ul.thumbnail-list li a").click ( function () {
		$ ("p.thumbnail img", $(this).parent().parent().parent().parent()).attr ("src", $ (this).attr ("href"));
		return false;
	});
});

/* モーダルウインドウで画像を表示 */
$ (function() {
	$ ("a.modal-image").fancybox({
		'overlayColor'	: '#000',
		'overlayOpacity': 0.6,
		'padding'			: 0,
		'transitionIn'	: 'elastic',
		'transitionOut'	: 'none',
		'titlePosition'	: 'outside'
	});
});

/* モーダルウインドウでページを表示 */
$ (function() {
	$ ("a.modal-iframe").fancybox({
		'type' : 'iframe',
		'width' : 800,
		'height' : 600,
		'framewidth' : 800,
		'frameheight' : 600,
		'padding' : 0,
		'margin' : 0,
		'modal' : false,
		'autoDimensions' : false,
		'autoScale' : false,
		'overlayOpacity' : 0.6,
		'overlayColor' : '#000'
	});
});
