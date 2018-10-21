/*

Version : 1.0.1
Dev : itassistors
Date : 19 Oct 2018

*/

var bingeBufferApp = angular.module('BingeBuffer',[]);

bingeBufferApp.controller('globalController', ['$scope', function($scope){
	
	$scope.clickActivator = function(bundle){
		
		if( bundle == 'searchSwitch' )
		{
			$('.searchbar-wrapper').slideToggle(500);
		
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
			$('.auth-bubble').slideToggle(500);
		
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
		
	};
	
}]);

