var AccountTabs = function(){
    var tabsToggle = function () {
        var tab = $('.tabs-title li');
        var tabBlocks = $('.tabs-block .tab-block');
        tab.on('click', function (event) {
          var elem = event.target;
          var tabNumber = $(elem).data('tab');
          console.log(tabNumber);
          for(var i = 0; i < tabBlocks.length; i++){
              $(tabBlocks[i]).addClass('hidden');
              if($(tabBlocks[i]).data('tab') == tabNumber){
                  $(tabBlocks[i]).removeClass('hidden')
              }
          }
          for(var j = 0; j < tab.length; j++){
              $(tab[j]).removeClass('active').addClass('not-active');
              if($(tab[j]).data('tab') == tabNumber){
                  $(tab[j]).removeClass('not-active').addClass('active')
              }
          }
        })
    };
    return {
        initTabsToggle: function(){
            tabsToggle();
        },
        init: function(){
            this.initTabsToggle();
        }
    }
}();
