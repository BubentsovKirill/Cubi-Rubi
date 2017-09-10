var PopularSlider = function(){
    var showCaption = function(){
        var item = $('#popular-carousel .item');
        var captions = $('#popular-carousel .caption div');
        $('#popular-carousel').on('slid.bs.carousel',function(){
           var target = $('#popular-carousel .active');
           for(var i = 0 ; i < captions.length; i++){
               var capTarget = $(captions[i]);
               capTarget.removeClass('visible').addClass('hidden');
               if(capTarget.data('number') == target.data('number')){
                   capTarget.removeClass('hidden').addClass('visible')
               }
           }
        })
    }
    return {
        initShowCaption: function(){
            showCaption();
        },
        init: function () {
            this.initShowCaption()
        }
    }
}();