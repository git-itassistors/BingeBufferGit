/*

Version : 1.0.1
Dev : itassistors
Date : 19 Oct 2018

*/

$(document).ready( function() {
	
	$('.search-ico').ready( function() {
		$('.search-ico').click( function() {
			$('.searchbar-wrapper').css('display','block');
			$('.outer-search-ico').hide();
			$('.search-txt').css('width','auto');
		});
	});
	
});

