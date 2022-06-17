
// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', function ($scope) {
    
}]);

var Person = function (firstname, lastname){     //OBJECT

    this.firstname=firstname;
    this.lastname=lastname;

}
function logPerson(person) //FUNCTION  INJECTING DEPENDENCY
{
    console.log(person);
}
var john= new Person('John','Doe');
logPerson(john); //CALL FUNCTION 



