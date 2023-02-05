$(document).ready(function() {
	$('ul li:nth-child(3n)').addClass('third-item');
	$('ul li:first-child').addClass('first-item');
	$('ul li:last-child').addClass('last-item');
	$('.wrapper .box01:last-child,.wrapper .box02:last-child').addClass('last-item');
	$('ul li').addClass('odd-item');
	$('ul li:nth-child(2n)').removeClass('odd-item').addClass('even-item');
	$('.simple-list02 li:nth-child(4n)').addClass('fourth-child');
//	$('.tooltip').tooltip();
	
});
$('.clickall').click(function() {
		var $status = $(this).next('ul').height();
		var $ul = $(this).next('ul');
	if($status == 0) {
		$ul.height('auto');
		$(this).text("Hide Menu");
	}
	else {
		$ul.height(0);
		$(this).text("Show Menu");
	}
});
$(function(){
	$('.menu-cantainer ul li').hover(
		function () {
			// hide the css default behavir
			$(this).children('div').css('display', 'none');
			//show its submenu
			$(this).children('div').slideDown(15);
		}, 
		function () {
			//hide its submenu
			$(this).children('div').slideUp(15);	
		}
	);
});

