(function(angular) {
    function headerController(){
    }

    angular.module('officeSupplyApp').component('header', {
        templateUrl: '/components/header/headerView.html',
        controller: headerController
    });
})(window.angular);