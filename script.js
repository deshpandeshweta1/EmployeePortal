 angular.module('EmployeeApp', [])
   .controller('EmpCtrl', function($scope, $http) {

     //getEmployee button click event, calls employee.json
     function getEmp() {
       $http.get('employee.json').success(function(data) {
         $scope.employee = data;
       });
     }
     
     $scope.getEmployees = getEmp();
     
     //getSalary button click event, calls salary.json
      function getSal() {
       $http.get('salary.json').success(function(data) {
         $scope.salary = data;
       });
     }
     
     $scope.getSalary = getSal();

     //getEmployeeAndSalary button click event, calls employee.json and salary.json concurrently 
     //and then data is merged into object3 depending on EmployeeID and displayed in view.
     var object1 = "";
     var object2 = "";
     $scope.getEmployeeAndSalary = function() {
       $http.get('employee.json').success(function(data1) {
         $scope.object1 = data1;

       });
       $http.get('salary.json').success(function(data2) {
         $scope.object2 = data2;
       });

       //Since two get calls are async used watch, 
       //so that merging of data is done after both calls are completed.
       $scope.$watch('object1', function() {
         $scope.$watch('object2', function() {
           var object3 = [];
           angular.forEach($scope.object1, function(value1) {
             angular.forEach($scope.object2, function(value2) {
               if (value1.EmployeeID == value2.EmployeeID) {
                 var test = {
                   EmployeeID: value1.EmployeeID,
                   FirstName: value1.FirstName,
                   LastName: value1.LastName,
                   Salary: value2.Salary
                 }
                 object3.push(test);
               }
             });

           });
           $scope.empDetails = object3;

         }, true);

       }, true);
     }
   });