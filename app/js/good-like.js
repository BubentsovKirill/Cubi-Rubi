var GoodLike = function(){
    var changeLike = function(){
       var like = $('.like');
       like.on('click', function(event){
           event.preventDefault();
           if($(this).hasClass('like-not-pick')){
               $(this).removeClass('like-not-pick').addClass('like-pick');
           }
           else{
               $(this).removeClass('like-pick').addClass('like-not-pick');
           }
       })
    }
    return {
        initChangeLike: function(){
            changeLike();
        },
        init: function () {
            this.initChangeLike();
        }
    }
}();