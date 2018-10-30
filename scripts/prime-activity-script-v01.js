/*

Version : 1.0.1
Dev : itassistors
Date : 19 Oct 2018

*/

var bingeBufferApp = angular.module('BingeBuffer',[]);

bingeBufferApp.controller('globalController', ['$scope', function($scope){
	
	$scope.clickActivator = function(bundle){
		
		console.log("Click Event Triggered");
		
		if( bundle == 'searchSwitch' )
		{
			$('.searchbar-wrapper').slideToggle(250);
		
			if( $scope.switchSearch == undefined )
			{
				$('.outer-search-ico').attr('style','color: #FF2F52');
				$scope.switchSearch = 0;
			}
			else if( $scope.switchSearch == 0 )
			{
				$('.outer-search-ico').attr('style','color: #939393');
				$scope.switchSearch = undefined;
			}
		}
		else if( bundle == 'authSwitch' )
		{
			
			var authBubble = "";
			
			if( $(window).width() <= 1000 )
			{
				authBubble = $('.res-auth-primary-wrapper');
				authBubble.slideToggle(250, function(){
					authBubble.css('display','flex !important');
				});
			}
			else
			{
				authBubble = $('.auth-bubble');
				authBubble.slideToggle(250);
			}
			
			
		
			if( $scope.authSwitch == undefined )
			{
				$('.user-ico').attr('style','color: #2873FF');
				$scope.authSwitch = 0;
			}
			else if( $scope.authSwitch == 0 )
			{
				$('.user-ico').attr('style','color: #939393');
				$scope.authSwitch = undefined;
			}
		}
		else if( bundle == 'categorySwitch' )
		{
			$('.category-list-wrapper').toggle("slide", {direction: 'up'}, 300);
			
			if( $scope.catSwitch == undefined )
			{
				$('.category-menu').attr('style','color: #000');
				$scope.catSwitch = 0;
			}
			else if( $scope.catSwitch == 0 )
			{
				$('.category-menu').removeAttr('style');
				$scope.catSwitch = undefined;
			}
		}
		
		else if( bundle == 'sideMenu' )
		{
			$('.side-menu-wrapper').toggle("slide", {direction: 'left'}, 300);
			
		}
		
		else if( bundle == 'sideCategorySwitch' )
		{
			$('.side-cat-wrapper').toggle("slide", {direction: 'up'}, 300);
		}
		
		else if( bundle == 'floatBubble')
		{
			$('.float-action-icon-wrapper').toggle("slide", {direction: 'down'}, 300);
		}
		
	};
	
}]);


bingeBufferApp.controller('authController',['$scope', function($scope){
	
	
	
	firebase.initializeApp(config);
	$scope.authClick = function(authOption){
		
		if( authOption == 'google' )
		{
			var googleProvider = new firebase.auth.GoogleAuthProvider();
			
			googleProvider.addScope("https://www.googleapis.com/auth/plus.login");
			googleProvider.addScope("https://www.googleapis.com/auth/userinfo.email");
			
			firebase.auth().signInWithRedirect(googleProvider).then( function(result){
					console.log(firebase.UserInfo.displayName);
			});
		}
		
	};
	
}]);


$(window).resize( function(){
	
	if( $(window).width() >= 1000 && Modernizr.mq( '(min-width: 1000px)' ) )
	{
		$('.side-menu-wrapper').css('display','none');
	}
	
});

/*
$(document).ready( function(){
	if( $(window).width() <= 1000 && Modernizr.mq( '(max-width: 1000px)' ) )
	{
		$('.auth-bubble').hide();
		$('.auth-bubble').css('display','inline-flex');

		console.log("Media");
	}
});

*/



