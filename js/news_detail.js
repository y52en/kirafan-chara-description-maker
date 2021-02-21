
jQuery(function($) {

	// サイズ調整
	var baseWidth = 980;
	var baseHeight = 560;
	var windowWidth = window.document.body.clientWidth;
	var windowHeight = document.documentElement.clientHeight;

	if ( (baseWidth > windowWidth) || (baseHeight > windowHeight) ) {
		var scaleWidth = windowWidth / baseWidth;

		scale = scaleWidth; // スクロール可能なページは横幅に合わせる

		$('html').css('transform', 'scale('+scale+','+scale+')');
		$('html').css('transform-origin', '0 0');

		// webviewで不要な余白が表示される問題に対処
		$('html').css('height', '1px');
		$('html').css('width', '1px');
	}

	// 画像のドラッグを禁止
	$('img').on('dragstart', function(event){
		event.preventDefault();
	});

	// ブラウザ起動
	$(document).on('click', '.newsDetail .newsText a', function(){

		var href = $(this).prop('href');
		if (href.match(window.location.host + '/cat_news/|krr-.+-web.star-api.com/news/')) {
			window.location.replace(href);
			return true;
		} else {
			var msg = '<browser>' + href;
			Unity.call(msg);
			return false;
		}

	});

});
