/**
 * Created by Nathy on 02-05-2016.
 */

//Generar nuestro modulo
var app = angular.module('LoginFormModule',[]);

//Controlle
app.controller('LoginFormController', function($scope,$http) {
    
//Modelo, ntidad generada para sustentar vista
$scope.formModel ={};
    
    //function que llama al Submit.
    $scope.onSubmit = function () {
        console.log(" Llegue,! Primer submit con AngularJs");
        console.log($scope.formModel);
        //llamadas Http
        
    }

});
