(function(angular) {
    
    function mainMenuController($scope){
        $scope.isCollapsed = true;
        this.menuItems = [
            {
            title: 'All our products',
            link: '#'
            },
            {
            title: 'Inspiration for the office',
            link: '#'
            },
            {
            title: 'About OS',
            link: '#'
            }
        ];
    }

    angular.module('officeSupplyApp').component('mainMenu', {
        templateUrl: '/components/mainMenu/mainMenuView.html',
        controller: mainMenuController
    });
})(window.angular);