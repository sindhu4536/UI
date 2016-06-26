var myapp = angular.module('myapp', ['ngRoute']);

    // configure our routes
    myapp.config(function($routeProvider) {
        $routeProvider.when('/home', {
                templateUrl : 'views/home.html',
                controller: 'myctrl',
                title:'Home'
            }).when('/profile/:name', {
                templateUrl : 'views/profile.html',
                controller: 'profile',
                title:'Profile'
            }).otherwise('/home');
    });

    myapp.run(['$rootScope', function ($rootScope) {
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            $rootScope.mytitle = current.$$route.title;

        });

    }]);

    myapp.controller("myctrl", function ($scope,$http) {
        $scope.home = "Home from cotroller";
        $http.get("http://services.groupkt.com/state/get/IND/all").success(function (response) {
            alert(response.RestResponse.result);
            $scope.stateinfo = response.RestResponse.result;
        }).error(function(err){
           alert("error");
        });
        
        
});
    myapp.controller("profile", function ($scope,$routeParams,$http) {
        $scope.profile = "profile from cotroller";
        var statename = $routeParams.name;
        $http.get("http://services.groupkt.com/state/search/IND?text=" +statename).success(function (response) {
            alert(response.RestResponse.result);
            $scope.singlestateinfo = response.RestResponse.result;
        }).error(function(err){
            alert("error");
        })
            
});
    