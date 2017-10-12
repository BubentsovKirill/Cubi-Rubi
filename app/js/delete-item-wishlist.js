var DeleteWishItem = function(){
    var removeItem = function () {
       var deleteButton = $('.wish-item .delete-item');
       deleteButton.on('click',function(event){
           event.preventDefault();
           var parent = $(event.target).parent();
           parent.remove();
       })
    };
    return {
        initRemoveItem: function(){
            removeItem();
        },
        init: function(){
            this.initRemoveItem();
        }
    }
}();

