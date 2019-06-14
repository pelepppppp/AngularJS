application.controller("indexController", function ($scope) {
    $scope.people = [];

    //  to add a person
    $scope.enroll = function () {
        $scope.people.push({
            Name: $scope.name,
            Address: $scope.address,
            Age: $scope.age
        });
        $scope.clearFields();
    };

    //  to remove a person
    $scope.remove = function (index) {
        $scope.people.splice(index, 1);
    }


    //  to update info
    $scope.update = function (index, name, address, age) {
        $scope.name = angular.copy(name);
        $scope.address = angular.copy(address);
        $scope.age = angular.copy(age);
        $scope.selectedIndex = index;
    };

    //  function for updatePerson()
    $scope.updatePerson = function () {
        $scope.people[$scope.selectedIndex].Name = $scope.name;
        $scope.people[$scope.selectedIndex].Address = $scope.address;
        $scope.people[$scope.selectedIndex].Age = $scope.age;
        $scope.clearFields();

    };
    $scope.clearFields = function () {
        $scope.name = "";
        $scope.address = "";
        $scope.age = "";
    }
})
.controller("aboutUsController", function ($scope) {
    $scope.aboutUsMessage = "I am 22 years old."
})
.controller("faqController", function ($scope) {
    $scope.faqMessage = "Harry Potter!"
})