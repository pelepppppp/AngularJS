application.controller("myController", function($scope){
    $scope.Submit = function(){
        var name = document.getElementById('name').value + ". ";
        var birthday = document.getElementById('month').value + " " + document.getElementById('day').value + ", "+ document.getElementById('year').value + "!";
        var hi = "Hello";
        var bd = "Your birthday is"
        $scope.greet = hi;
        $scope.yourName = name;
        $scope.words = bd;
        $scope.birthday = birthday ;
    }
});