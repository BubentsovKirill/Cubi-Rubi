var ToggleFilterButton = function(){
    var toggleButton = function(){
       var button = $('#advanced');
       button.on('click', function(){
           if($(this).hasClass('filter-close')){
               $(this).removeClass('filter-close').addClass('filter-open');
           }
           else{
               $(this).removeClass('filter-open').addClass('filter-close');
           }
       })
    }
    return {
        initToggleButton: function(){
            toggleButton();
        },
        init: function () {
            this.initToggleButton();
        }
    }
}();