/*

Version : 1.0.1
Dev : itassistors
Date : 19 Oct 2018

*/

$(document).ready( function() {

	$('.search-ico').ready( function() {
		$('.search-ico').click( function() {
			$('.searchbar-wrapper').slideDown();
			$('.searchbar-wrapper').fadeIn(500);
			$('.outer-search-ico').hide();

			$('.outer-search-ico').replaceWith('<i class="fas search-ico fas-global-ico close-searchbar fa-2x fa-times" style="color:#939393;" onclick="closeSearch()"></i>');

		});
	});

});


function closeSearch()
{
	console.log("IN");
	$('.searchbar-wrapper').slideUp();
	$(".searchbar-wrapper").fadeOut();
	$('.close-searchbar').replaceWith('<i class="fas fa-search fa-2x search-ico fas-global-ico outer-search-ico" style="color:#939393;"></i>');
}
