(function(angular) {
    function mainContentController(){
        this.productColors = [
            'White',
            'Blue',
            'Red',
            'Pink'
        ];

        $('.product-thumbnails img').click(function(){
            $('.featured-image').attr('src',$(this).attr('src'));
        });

        $('.read-more-btn').click(function(){
            $('.product-text').css('max-height', '400px');
        });

        $('.buy-btn').click(function(){
            var currentSumText = $('.cart-sum').text();
            var currentSum = currentSumText.split(" ");
            var currentSumNumber = parseFloat(currentSum[0]);

            var productPriceText = $('.current-price').text().split(" ");
            var productPriceNumber = parseFloat(productPriceText[0]);

            var newCartSum = currentSumNumber + productPriceNumber;

            $('.cart-sum').text(newCartSum + " kr");

            var currentNoItems = $('.cart-product-count');
            var itemCount = parseInt(currentNoItems.text());
            itemCount++;
            currentNoItems.text(itemCount);
        });
    }

    angular.module('officeSupplyApp').component('mainContent', {
        templateUrl: '/components/mainContent/mainContentView.html',
        controller: mainContentController
    });
})(window.angular);