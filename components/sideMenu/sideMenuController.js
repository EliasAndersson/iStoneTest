(function(angular) {
    
    function sideMenuController($scope){
        this.sideMenuItems = [
            {
                title: 'Paper clip',
                link: '#'
            },
            {
                title: 'Post-it notes',
                link: '#'
            },
            {
                title: 'Staples',
                link: '#'
            },
            {
                title: 'Hole punches',
                link: '#'
            },
            {
                title: 'Binders',
                link: '#'
            },
            {
                title: 'Staplers',
                link: '#'
            },
            {
                title: 'Laminators',
                link: '#'
            },
            {
                title: 'Writing utensils',
                link: '#'
            },
            {
                title: 'Paper',
                link: '#'
            },
            {
                title: 'Computers',
                link: '#'
            },
            {
                title: 'Printers',
                link: '#'
            },
            {
                title: 'Fax machines',
                link: '#'
            },
            {
                title: 'Photocopiers',
                link: '#'
            },
            {
                title: 'Cash registers',
                link: '#'
            },
            {
                title: 'Office furniture',
                link: '#'
            },
            {
                title: 'Chairs',
                link: '#'
            },
            {
                title: 'Cubicles',
                link: '#'
            },
            {
                title: 'Filing cabinet',
                link: '#'
            },
            {
                title: 'Armoire desks',
                link: '#'
            },
        ];
    }

    angular.module('officeSupplyApp').component('sideMenu', {
        templateUrl: '/components/sideMenu/sideMenuView.html',
        controller: sideMenuController
    });
})(window.angular);