/*

Version : 1.0.1
Dev : itassistors
Date : 19 Oct 2018

*/

angular.module('BingeBuffer',[]).controller('globalIcoController',['$scope', function($scope){
	$scope.toggleSearchbar = function(){
		
		
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
		
	};
	
	$scope.toggleAuthBubble = function() {
	
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
	
	};
}]);

