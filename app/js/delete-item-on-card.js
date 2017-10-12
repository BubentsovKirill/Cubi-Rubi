var DeleteCardItem = function(){
    var deleteItem = function () {
        var button = $('.delete-item');
        button.on('click', function(event){
            var parent = $(event.target).parent();
            parent.parent().remove();
        })
    }

    return {
        initDeleteItem: function(){
            deleteItem();
        },
        init: function(){
            this.initDeleteItem();
        }
    }
}();

