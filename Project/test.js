    <div ng-controller="ExampleController"> 
      <form novalidate class="simple-form"> 
         Name: <input type="text" ng-model="user.name" /><br /> 
         E-mail: <input type="email" ng-model="user.email" /><br /> 
         Gender: 
            <input type="radio" ng-model="user.gender" value="male" />male 
            <input type="radio" ng-model="user.gender" value="female"/>female<br /> 
           <input type="button" ng-click="reset()" value="Reset" /> 
           <input type="submit" ng-click="update(user)" value="Save" /> </form> 
     
    <pre>user = {{user | json}}</pre> 
    <pre>master = {{master | json}}</pre> 
    </div> 
    <script> 
    angular.module('formExample', []) .controller('ExampleController', ['$scope', function($scope) {
         $scope.master = {}; 
         $scope.update = function(user) {
           $scope.master = angular.copy(user); 
         }; 
         $scope.reset = function() {
            $scope.user = angular.copy($scope.master); 
         }; 
        $scope.reset(); 
      }]); 
    </script>