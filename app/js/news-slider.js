var NewsSlider = function(){
    function addVisible(elem){
        elem.removeClass('hidden').addClass('visible');
    }
    function removeVisible(elem){
        elem.removeClass('visible').addClass('hidden');
    }
    var captionsInfo = $('#news-carousel .slide-place .info-item');
    var captionsDesc = $('#news-carousel .news-description .new-description');
    var showCaption = function(){
        $('#news-carousel').on('slid.bs.carousel',function(){
            var target = $('#news-carousel .slide-place .active');
            for(var i = 0; i < captionsInfo.length; i++){
                var capInfo = $(captionsInfo[i]);
                removeVisible(capInfo);
                if(capInfo.data('number') == target.data('number')){
                    addVisible(capInfo);
                }
            }
            for(var i = 0; i < captionsDesc.length; i++){
                var capDesk = $(captionsDesc[i]);
                removeVisible(capDesk);
                if(capDesk.data('number') == target.data('number')){
                    addVisible(capDesk);
                }
            }
        })
    }
    return {
        initshowCaption: function(){
            showCaption();
        },
        init: function () {
           this.initshowCaption();
        }
    }
}();