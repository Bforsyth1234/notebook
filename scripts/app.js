/**
 * Created by bforsyth on 6/14/2016.
 */
var notebookApp = angular.module('notebookApp', ['angularTrix', 'ngRoute', 'ngStorage']);

notebookApp.controller('notebookController', function notebookController($scope, $location, $localStorage, $sessionStorage) {
    $scope.$location = $location;
    /*Change the page based on the page you are on*/
    $scope.nextPage = function (editor, $scope) {
        switch ($location.path()) {
            case '/':
                $location.path('/page-two').replace();
                break;
            case '/page-two':
                $location.path('/page-three').replace();
                break;
            case '/page-three':
                $location.path('/page-four').replace();
                break;
            case '/page-four':
                $location.path('/page-five').replace();
                break;
            case '/page-five':
                $location.path('/').replace();
                break;

        }
    }
    /*When the user changes the page assign it to session storage*/
    $scope.trixChange = function(e, editor) {
        switch ($location.path()) {
            case '/':
                $sessionStorage.pageOneData = $scope.trix;
                $scope.$storage = $sessionStorage;
                break;
            case '/page-two':
                $sessionStorage.pageTwoData = $scope.trix;
                $scope.$storage = $sessionStorage;
                break;
            case '/page-three':
                $sessionStorage.pageThreeData = $scope.trix;
                $scope.$storage = $sessionStorage;
                break;
            case '/page-four':
                $sessionStorage.pageFourData = $scope.trix;
                $scope.$storage = $sessionStorage;
                break;
            case '/page-five':
                console.log('page-five');
                $sessionStorage.pageFiveData = $scope.trix;
                $scope.$storage = $sessionStorage;
                console.log($sessionStorage.pageFiveData);
                break;

        }
    }
    /*When page loads check for previous data if it exists then load data*/
    $scope.trixInitialize = function(e, editor) {
    switch ($location.path()) {
        case '/':
            if($sessionStorage.pageOneData) {
                editor.insertHTML($sessionStorage.pageOneData);
                $sessionStorage.pageOneData = $scope.trix;
                $scope.$storage = $sessionStorage;
            }
            break;
        case '/page-two':
            if($sessionStorage.pageTwoData) {
                editor.insertHTML($sessionStorage.pageTwoData);
                $sessionStorage.pageTwoData = $scope.trix;
                $scope.$storage = $sessionStorage;
            }
            break;
        case '/page-three':
            if($sessionStorage.pageThreeData) {
                editor.insertHTML($sessionStorage.pageThreeData);
                $sessionStorage.pageThreeData = $scope.trix;
                $scope.$storage = $sessionStorage;
            }
            break;
        case '/page-four':
            if($sessionStorage.pageFourData) {
                editor.insertHTML($sessionStorage.pageFourData);
                $sessionStorage.pageFourData = $scope.trix;
                $scope.$storage = $sessionStorage;
            }
            break;
        case '/page-five':
            if($sessionStorage.pageFiveData) {
                editor.insertHTML($sessionStorage.pageFiveData);
                $scope.$storage = $sessionStorage;
            }
            break;
    }
}
})
.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/page.html',
            controller: 'notebookController'
        })
        .when('/page-two', {
            templateUrl: 'views/page.html',
            controller: 'notebookController'
        })
        .when('/page-three', {
            templateUrl: 'views/page.html',
            controller: 'notebookController'
        })
        .when('/page-four', {
            templateUrl: 'views/page.html',
            controller: 'notebookController'
        })
        .when('/page-five', {
            templateUrl: 'views/page.html',
            controller: 'notebookController'
        })
})