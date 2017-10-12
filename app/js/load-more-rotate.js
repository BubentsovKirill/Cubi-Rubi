var RotateLoadMore = function(){
    var rotateBlock = function(){
        var block = $('.load-more-block span');
        var button = $('.load-more-block a');
        button.on('click', function (event) {
            event.preventDefault();
            block.removeClass('full-rotate');
            block.addClass('full-rotate');
            if(block.hasClass('full-rotate')){
                setTimeout(function(){
                    block.removeClass('full-rotate');
                }, 3000)
            }
        })
    }
    return {
        initRotateBlock: function(){
            rotateBlock();
        },
        init: function () {
            this.initRotateBlock();
        }
    }
}();