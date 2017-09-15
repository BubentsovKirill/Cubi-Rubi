var ReviewsRating = function(){

    var rating = function(){
        var ratingStars = $('.reviews-add-comment .rating span');
        ratingStars.on('click', function(event){
            for(var i = 0; i < ratingStars.length; i++){
               $(ratingStars[i]).removeClass('pick').addClass('not-pick');
               if(ratingStars[i] === event.target){
                   var elem = $(ratingStars[i]);
                   var totalRating = elem.data('rating');
                   $('#rating').val(totalRating);
                   addStule(totalRating);
               }
            }
        })
    };

    var addStule = function(number){
        var ratingStars = $('.reviews-add-comment .rating span');
        for(var i = 0; i < ratingStars.length; i++){
            $(ratingStars[i]).removeClass('pick').addClass('not-pick');
            var data = $(ratingStars[i]).data('rating');
            if(data <= number){
                $(ratingStars[i]).removeClass('not-pick').addClass('pick')
            }
        }
    };

    return {
        initRating: function(){
            rating();
        },
        init: function () {
            this.initRating();
        }
    }
}();