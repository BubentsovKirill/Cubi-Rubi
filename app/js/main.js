var Layout = function(){
   var showCatalogBlock = function(){
    var catalogButton = $('.catalogButton, .catalogButton-mobile');
    var catalogBlock = $('.catalog');
    var catalogButtonArrow = $('.catalogButton span, .catalogButton-mobile span');
    catalogButton.on('click',function(event){
        event.preventDefault();
        if($('.enter').hasClass('visible')){
            $('.enter').removeClass('visible').addClass('hidden')
        }
        if($('.registration').hasClass('visible')){
            $('.registration').removeClass('visible').addClass('hidden')
        }
        if(catalogBlock.hasClass('hidden')){
            catalogBlock.removeClass('hidden').addClass('visible');
            catalogButtonArrow.removeClass('catalog-close').addClass('catalog-open');

        }
        else{
            catalogBlock.removeClass('visible').addClass('hidden');
            catalogButtonArrow.removeClass('catalog-open').addClass('catalog-close');
        }
    })
   };

   var showEnterForm = function(){
       var enterAccountButton = $('.enter-account, .enter-mobile');
       var enterForm = $('.enter');
       var registrationOpenButton = $('.registation-open');
       var reistrationForm = $('.registration');
       var enterOpenButton = $('.enter-open');
       enterAccountButton.on('click',function(event){
           if(reistrationForm.addClass('visible')){
               reistrationForm.removeClass('visible').addClass('hidden');
           }
           if($('.catalog').addClass('visible')){
               $('.catalog').removeClass('visible').addClass('hidden');
               $('.mobile-menu-button').children('i').removeClass('fa-times').addClass('fa-bars');
           }
           $('.mobile-menu').removeClass('visible').addClass('hidden');
           event.preventDefault();
           enterForm.removeClass('hidden').addClass('visible');
       })
       registrationOpenButton.on('click',function(event){
           event.preventDefault();
           enterForm.removeClass('visible').addClass('hidden');
           reistrationForm.removeClass('hidden').addClass('visible');
       })
       enterOpenButton.on('click',function(event){
           event.preventDefault();
           reistrationForm.removeClass('visible').addClass('hidden');
           enterForm.removeClass('hidden').addClass('visible');
       })
   };

   var closeEnterForm = function(){
       var closeButton = $('.close-enter-button');
       var enterForm = $('.enter');
       closeButton.on('click',function(){
           enterForm.removeClass('visible').addClass('hidden')
       })
   };

   var closeRegistationFrom = function(){
       var closeButton = $('.close-registration-button');
       var reistrationForm = $('.registration');
       closeButton.on('click', function(){
           reistrationForm.removeClass('visible').addClass('hidden')
       })
   };

   var openMobileMenu = function(){
       var menuButton = $('.mobile-menu-button');
       var menuMobile = $('.mobile-menu');
       menuButton.on('click', function () {
           if(menuMobile.hasClass('hidden')){
               $('.registration').removeClass('visible').addClass('hidden');
               $('.enter').removeClass('visible').addClass('hidden');;
               menuMobile.removeClass('hidden').addClass('visible');
               menuButton.children('span').removeClass('mobile-menu-close').addClass('mobile-menu-open');
               $('.mobile-search-block').removeClass('visible').addClass('hidden');
               $('.search-button').removeClass('search-icon-active').addClass('search-icon-passive');
               $('.mobile-search-block input').val('');
           }
           else{
               menuMobile.removeClass('visible').addClass('hidden');
               menuButton.children('span').removeClass('mobile-menu-open').addClass('mobile-menu-close');
           }
       })
    };

   var openSearchBlock = function(){
       var searchBlock = $('.search-form');
       var searchButton = $('.search-button');
       searchButton.on('click', function(){
           if(searchBlock.hasClass('hidden')){
               document.querySelector('body').style.overflow = 'hidden';
               searchBlock.removeClass('hidden').addClass('visible');
               searchButton.removeClass('search-button');
               searchButton.addClass('search-button-active');
           }
           else{
               document.querySelector('body').style.overflow = 'auto';
               searchBlock.removeClass('visible').addClass('hidden');
                 searchButton.removeClass('search-button-active');
               searchButton.addClass('search-button');
           }
       })
   };

   var mobileCatalog = function(){
       var fadeButton = $('#fadeButton');
       var fadeBlock = $('#fadeBlock');

       fadeButton.on('click', function(){
           fadeBlock.fadeToggle(200);
       })
   };

   var catalogBlock = function(){
       var fadeBlock = $('.catalog-items');
       var fadeButton = $('#showButton');

       fadeButton.on('click', function(){
           fadeBlock.fadeToggle(200)
       })
   }

   return {
       initCatalogBlock : function(){
           catalogBlock();
       },
       initMobileCatalog : function(){
           mobileCatalog();
       },
       initOpenSearchBlock: function(){
           openSearchBlock();
       },
       initOpenMobileMenu : function(){
           openMobileMenu();
       },
       initCloseRegistationFrom: function(){
           closeRegistationFrom();
       },
       initCloseEnterForm: function(){
           closeEnterForm();
       },
       initShowCatalogBlock: function(){
            showCatalogBlock();
       },
       initShowEnterForm: function () {
           showEnterForm()
       },
       init: function(){
            this.initCatalogBlock();
            this.initMobileCatalog();
            this.initOpenSearchBlock();
            this.initOpenMobileMenu();
            this.initCloseRegistationFrom();
            this.initCloseEnterForm();
            this.initShowCatalogBlock();
            this.initShowEnterForm();
       }
   }
}();