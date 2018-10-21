/*

Version : 1.0.1
Dev : itassistors
Date : 19 Oct 2018

*/

angular.module('BingeBuffer',[]).controller('searchController',['$scope', function($scope){
	$scope.toggleSearchbar = function(){
		
		console.log($scope.switchSearch);
		
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
			console.log($scope.switchSearch);
		}
		
	};
}]);