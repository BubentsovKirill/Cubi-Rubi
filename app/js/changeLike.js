var Like = function(){
    var changeLike = function(){
        var likeButton = $('.like');
        likeButton.on('click', function(event){
           for(var i = 0; i < likeButton.length; i++){
                if(likeButton[i] === event.target){
                    var elem = $(likeButton[i]);
                    if(elem.hasClass('like-not-pick')){
                        elem.removeClass('like-not-pick').addClass('like-pick')
                    }
                    else{
                        elem.removeClass('like-pick').addClass('like-not-pick')
                    }
                }
            }
        })
    }

    return {
        initChangeLike:function(){
            changeLike();
        },
        init: function(){
            this.initChangeLike();

        }
    }
}();