var AddFoto = function(){
   var addFoto = function () {
       var button = $('.add-foto');
       button.on('click', function(){
           console.log('click');
          $('input[type="value"]').click();
       })
   }
    return {
        initAddFoto: function(){
            addFoto();
        },
        init: function(){
            this.initAddFoto();
        }
    }
}();
