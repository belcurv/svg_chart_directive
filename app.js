(function () {
    'use strict';

    angular.module('svgApp', [])

    // XML-ish namespace for created SVG elements
    .constant('ns', 'http://www.w3.org/2000/svg')

    .controller('svgController', ['$scope', function ($scope) {

        $scope.fireState = {
            FVrate: 0.06,
            FVpmt: 10000,
            FVpv: 50000,
            FVnper: 23
        };

        $scope.requiredRate = 0.05;
    
    }]);

}());