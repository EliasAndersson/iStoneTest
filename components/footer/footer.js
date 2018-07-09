(function(angular) {
    function footerController(){
        this.bestsellerItems = [
            {
                title: 'A4',
                link: '#'
            },
            {
                title: 'A5',
                link: '#'
            },
            {
                title: 'Pens',
                link: '#'
            },
            {
                title: 'Staplers',
                link: '#'
            }
        ];
    }

    angular.module('officeSupplyApp').component('footer', {
        templateUrl: '/components/footer/footerView.html',
        controller: footerController
    });
})(window.angular);