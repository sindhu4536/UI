var myapp = angular.module('myapp', ['ngRoute']);

    // configure our routes
    myapp.config(function($routeProvider) {
        $routeProvider.when('/login', {
                templateUrl : 'views/login.html',
                controller: 'myctrl',
                title:'Login form'
            }).when('/home', {
                templateUrl : 'views/home.html',
                controller: 'myctrl',
                title:'Home'
            }).when('/profile', {
                templateUrl : 'views/profile.html',
                controller: 'myctrl',
                title:'Profile'
            }).otherwise('/home');
    });

    myapp.run(['$rootScope', function ($rootScope) {
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            $rootScope.mytitle = current.$$route.title;

        });

    }]);

    myapp.controller("myctrl", function ($scope,$location) {
        $scope.home = "Home from cotroller";
        
        $scope.profile = "Profile from controller";
        $scope.userLogin = function(){
            if($scope.loginid == "admin" && $scope.pswd=="admin123"){
                $location.path('/home');
             }
            else{
                alert("Login failed please try again");
            }
        };
});