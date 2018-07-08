(function(angular) {
    function headerController(){
    }

    angular.module('officeSupplyApp').component('mainHeader', {
        templateUrl: '/components/header/mainHeaderView.html',
        controller: headerController
    });
})(window.angular);