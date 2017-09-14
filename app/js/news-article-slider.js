var NewsArticlesSlider = function(){
    function addVisible(elem){
        elem.removeClass('hidden').addClass('visible');
    }
    function removeVisible(elem){
        elem.removeClass('visible').addClass('hidden');
    }
    var captionsInfo = $('#news-article-carousel .slide-place .info-article-item');
    var captionsDesc = $('#news-article-carousel .news-article-description .new-article-description');
    var showCaption = function(){
        $('#news-article-carousel').on('slid.bs.carousel',function(){
            var target = $('#news-article-carousel .slide-place .active');
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