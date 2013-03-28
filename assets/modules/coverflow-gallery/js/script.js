   
// Change this variable to the class of the gallery
var galleryClass = '.gallery',
resizeDone=  false,
siteWrapper = '#site-wrapper';

if ($(galleryClass).length > 0){
    
    // Javascript for the coverflow gallerys
                
    // style objects for the js version of the fancy gallery
    var defaultLi = {
        marginTop:'52',
        marginRight:'68',
        marginBottom:'52',
        marginLeft:'68',
        'height':'306',
        'width':'380',
        'left':'0'
    },
    largeWeb = {
        'left':'239',
        'z-index':'3',
        'height':'410',
        'width':'517',
        marginTop:'0',
        marginRight:'0',
        marginBottom:'0',
        marginLeft:'0'},
    largeWebLast = $.extend({}, largeWeb, {'left':'-195'}),
    smallWebRight = $.extend({'z-index':'2'}, defaultLi, {'left':'-69'}),
    smallWebLeft = $.extend({'z-index':'1'}, defaultLi, {'left':'500'}),
    smallWebLeftLast = $.extend({}, smallWebLeft, {'left':'55'}),
    smallWebLeftSecondLast = $.extend({}, defaultLi, {'left':'100'}),
    noGalleryLi = {margin:'0', left:'auto', 'height':'300'};

    var fancyGallery = true, containerSize = $(siteWrapper).width();

    // Custom function to adjuest the slides
    function adjustSlides(slider){
       
        
        if (fancyGallery){
            
            var leftSlide = slider.animatingTo;
            
            //remove blur
            slider.slides.find('img').removeClass('blur');
            
            // left slide blur
            if(slider.slides.eq(leftSlide -1)){
                slider.slides.eq(leftSlide -1).find('img').addClass('blur');
            }
            // right slide blur
            if(slider.slides.eq(leftSlide +1)){
                slider.slides.eq(leftSlide +1).find('img').addClass('blur');
            }


            if (supports('transition')){

                // CSS3 METHOD

                slider.slides.removeClass('large-web large-web-last small-web-left small-web-right small-web-left-last');

                
                if(slider.slides.eq(leftSlide + 1)){
                    slider.slides.eq(leftSlide + 1).css('z-index', 1);
                }
                slider.slides.eq(leftSlide).css('z-index', 3);
                if(slider.slides.eq(leftSlide - 1)){
                    slider.slides.eq(leftSlide - 1).css('z-index', 1);
                }
                
                // first slide
                if (leftSlide == 0){
                    slider.slides.eq(leftSlide).addClass('large-web');
                    slider.slides.eq(leftSlide + 1).addClass('small-web-right');
                }

                // last slide
                else if (leftSlide == slider.last){
                    slider.slides.eq(leftSlide).addClass('large-web-last');
                    slider.slides.eq(leftSlide - 1).addClass('small-web-left-last');
                }
                else{
                    // anywhere in between
                    slider.slides.eq(leftSlide -1).addClass('small-web-left');
                    slider.slides.eq(leftSlide).addClass('large-web');
                    slider.slides.eq(leftSlide + 1).addClass('small-web-right');
                }
                
                slider.resize();

            }else{

                //JS METHOD
                
                // first slide
                if (leftSlide == 0){
                    slider.slides.eq(leftSlide).animate(largeWeb);
                    slider.slides.eq(leftSlide + 1).animate(smallWebRight);
                }

                // last slide
                else if (leftSlide == slider.last){
                    slider.slides.eq(leftSlide).animate(largeWebLast);
                    slider.slides.eq(leftSlide - 1).animate(smallWebLeftLast);
                }else{
                    // anywhere in between
                    slider.slides.eq(leftSlide).animate(largeWeb);
                    slider.slides.eq(leftSlide + 1).animate(smallWebRight);
                    slider.slides.eq(leftSlide - 1).animate(smallWebLeft);
                }

            }
            
        }
        

    }
    
    function checkForChange(slider){
        
        // if size has chnaged chnage the gallery
        if ($(siteWrapper).width() != containerSize){
            
            containerSize = $(siteWrapper).width();
            
            if($(siteWrapper).width() <= 940){
                
                fancyGallery = false;
                slider.slides.find('img').removeClass('blur');
                $(galleryClass).addClass('not-so-fancy');
                resetNotSoFancy(slider);

            }else{
                fancyGallery = true;
                resetFancy(slider);
                $(galleryClass).removeClass('not-so-fancy');
            }
            
            slider.doMath();
            slider.newSlides.width(slider.computedW);
            slider.setProps(slider.computedW, "setTotal");
        }else{
            
            // this is always run regardles of size change
            if (fancyGallery){
                resetFancy(slider);
            }else{
                resetNotSoFancy(slider)
            }
        }
        
        adjustSlides(slider);

    }
    
    function resetFancy(slider){
        if (!supports('transition')){
            slider.slides.animate(defaultLi);
        }else{
            slider.slides.addClass('css-slide');
        }
    }
    
    function resetNotSoFancy(slider){
        if(!supports('transition')){
            slider.slides.animate(noGalleryLi);
        }else{
            slider.slides.removeClass('small-web-left small-web-right large-web large-web-last small-web-left-last css-slide');
        }
    }

    // This function sets up the slides and the resize event for the fancy slider 
    function setUpSlides(slider){

        if($(siteWrapper).width() <= 940){
            fancyGallery = false;
            $(galleryClass).addClass('not-so-fancy');
        }else{
            $(galleryClass).removeClass('not-so-fancy');
        }

        // only need to do anything for non js
        if (!supports('transition') && fancyGallery){
            slider.slides.css(defaultLi);
        }else{
            slider.slides.addClass('css-slide');
        }

        slider.resize();
        
        adjustSlides(slider);
    }


    // init the gallery
    $(galleryClass).flexslider({
        animation:'slide',
        selector:"ul li",
        itemWidth:517,
        itemHeight:410,
        startAt:1,
        animationSpeed: isTouchDevice() ? 400 : 1000,
        start: function(slider){setUpSlides(slider);},
        before: function(slider){checkForChange(slider);}
    });
    
    //force stop flexslider resize method on focus
    $(window).unbind('resize focus');

    // centre all pagination controls for gallerys
    $.each($('.flex-control-paging'), function(index, value){
        $(this).css('margin-left', '-'+($(this).outerWidth() / 2) + 'px');
    });
}