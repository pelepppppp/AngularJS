angular.module("myApp", ["ngRoute"])
.config(function($routeProvider){
    $routeProvider
    .when("/",{
        controller: "indexController",
        controllerAs: "index",
        templateUrl: "views/index.html"
    })
    .when("/aboutUs",{
        controller: "aboutUsController",
        controllerAs: "aboutUs",
        templateUrl: "views/aboutUs.html"
    })
    .when("/faq",{
        controller: "faqController",
        controllerAs: "faq",
        templateUrl: "views/faq.html"
    })
    .otherwise({redirectTo: "/"})
})

.controller("indexController", function($scope){
    $scope.people = [];

    //  to add a person
    $scope.enroll = function(){
        $scope.people.push({
            Name: $scope.name,
            Address: $scope.address,
            Age: $scope.age
        });

        $scope.name = "";
        $scope.address = "";
        $scope.age = "";
    };

    //  to remove a person
    $scope.remove = function(){
        $scope.people.splice($scope.toRemove, 1);
        $scope.toRemove = null;
    };
    
    //  to update info
    $scope.update = function(name, address, age){
        $scope.name = angular.copy(name);
    };

    //  function for updatePerson()
    $scope.updatePerson = function(){

    };


})
.controller("aboutUsController", function($scope){
    $scope.aboutUsMessage = "I am 22 years old."
})
.controller("faqController", function($scope){
    $scope.faqMessage = "Harry Potter!"
})