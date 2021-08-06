$(function(){
    let winW = $(window).width();
    $(window).trigger("resize");

    //nav 호버하면 bg 보이기
    $('.nav').hover(() => {
        $('.sub-nav').toggleClass('on');
        $('.sub-bg').slideToggle(300);
    })

    //scroll 이벤트
    $(window).scroll( ()=> {
        sct = $(window).scrollTop();
        if(winW >= 1367) {
            if(sct >= 100) { $('.service .scroll-up').addClass('on'); }
            if(sct >= 700) { $('.autocalc h2').addClass('on'); }
            if(sct >= 900) { $('.autocalc ul').addClass('on'); }
            if(sct >= 1700) { $('.notice .inner>div').addClass('on'); }
            if(sct >= 1800) { $('.notice ul').addClass('on'); }
            if(sct >= 2500) { $('.guide .inner>div').addClass('on'); }
            if(sct >= 2700) { $('.guide ul').addClass('on'); }
        }else if(winW <= 1366 && winW >=1025) {
            if(sct >= 400) { $('.autocalc h2').addClass('on'); }
            if(sct >= 500) { $('.autocalc ul').addClass('on'); }
            if(sct >= 1200) { $('.notice .inner>div').addClass('on'); }
            if(sct >= 1400) { $('.notice ul').addClass('on'); }
            if(sct >= 1900) { $('.guide .inner>div').addClass('on'); }
            if(sct >= 2100) { $('.guide ul').addClass('on'); }
        }else if(winW <= 1024 && winW >=768) {
            if(sct >= 400) { $('.autocalc h2').addClass('on'); }
            if(sct >= 500) { $('.autocalc ul').addClass('on'); }
            if(sct >= 1100) { $('.notice .inner>div').addClass('on'); }
            if(sct >= 1200) { $('.notice ul').addClass('on'); }
            if(sct >= 1700) { $('.guide .inner>div').addClass('on'); }
            if(sct >= 1800) { $('.guide ul').addClass('on'); }
        }else if(winW <= 767) {
            if(sct >= 300) { $('.autocalc h2').addClass('on'); }
            if(sct >= 400) { $('.autocalc ul').addClass('on'); }
            if(sct >= 800) { $('.notice .inner>div').addClass('on'); }
            if(sct >= 900) { $('.notice ul').addClass('on'); }
            if(sct >= 1200) { $('.guide .inner>div').addClass('on'); }
            if(sct >= 1300) { $('.guide ul').addClass('on'); }
        }
    });
    //scroll 이벤트 끝

    //창크기 조절 이벤트
    $(window).resize(() => {
        let winW = $(window).width();
        console.log(winW);

        if(winW >= 1026) {
            //sitemap btn클릭
            $('.sitemap-btn').click(()=> { $('.sitemap').fadeIn(300); });
            $('.sitemap-close').click(()=> { $('.sitemap').fadeOut(300); });
            //sitemap의 scroll-y 여부
            $('.sitemap').addClass('scrollon');
            $('body').addClass('on');
        }
        else {
            $('.sitemap-btn').click(()=> {
                $('.sitemap').css('right','0');
                $('body').addClass('on');
            });
            $('.sitemap-close').click(()=> {
                $('.sitemap').css('right','-100%');
                $('body').removeClass('on');
            });
            
            $('.sitemap').removeClass('scrollon');
        };
       
    });
    //창크기 조절 이벤트 끝

    if(winW <= 1025)
        $('.sitemap-list>li').click(function() {
        $(this).children('ul').slideToggle(300);
        $(this).children('span').toggleClass('on');
    });
    
    if(winW >= 1026) {
        $('.sitemap-btn').click(()=> { $('.sitemap').fadeIn(300); });
        $('.sitemap-close').click(()=> { $('.sitemap').fadeOut(300); });
        $('.sitemap').addClass('scrollon');
        $('body').addClass('on');
    }
    else {
        $('.sitemap-btn').click(()=> { $('.sitemap').css('right','0'); });
        $('.sitemap-close').click(()=> { $('.sitemap').css('right','-100%'); });
        $('.sitemap').removeClass('scrollon');
        $('body').removeClass('on');
    };


})