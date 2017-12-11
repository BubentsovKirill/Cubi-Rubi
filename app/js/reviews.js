var Reviews = function(){
    
    var ToggleReviews = function(){
        var shop = $('#shop');
        var items = $('#items');
        var shopButton = $('.shop-reviews');
        var itemsButton = $('.items-reviews'); 
        shopButton.on('click', function(){
            shop.removeClass('hidden');
            shopButton.removeClass('not-active').addClass('active');
            itemsButton.removeClass('active').addClass('not-active');
            items.addClass('hidden');
        });
        itemsButton.on('click', function(){
            items.removeClass('hidden');
            itemsButton.removeClass('not-active').addClass('active');
            shopButton.removeClass('active').addClass('not-active');
            shop.addClass('hidden');
        })

    }

    return {
        initToggleReviews: function(){
            ToggleReviews();
        },
        init: function () {
            this.initToggleReviews();
        }
    }
}();