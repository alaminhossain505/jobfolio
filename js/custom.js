  $(function(){
        // windows scrol
      $(window).scroll(function(){
        var scrolling = $(this).scrollTop();

        // back-to-top btn hide show js 
        if(scrolling > 500){
            $('.back-to-top i').fadeIn();
        }else{
            $('.back-to-top i').fadeOut();
        };

        // nav-fix
        if(scrolling > 300){
            $('nav').addClass('nav-fix');
        }else{
            $('nav').removeClass('nav-fix');
        };
    });

     // back-to-top
     $('.back-to-top i').click(function(){
      $('html,.banner-bg').animate({
          scrollTop : 0,
      },1000)
    });

    // js for form btn 
    $('#banner ul li').on('click', function () {
      $(this).addClass('active').siblings().removeClass('active');
    });

    // slider video js 
    $('.venobox').venobox({
      closeBackground:'#58d2f5',
      closeColor:'#000',
      spinner:'three-bounce',
      spinColor:'#58d2f5',
    });

    // slider for img 
    $('.slider-part').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,
      dots:true,
      autoplaySpeed: 2000,
      asNavFor:('.slider-text-part'),
    });

      // slider for text 
    $('.slider-text-part').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,
      autoplaySpeed: 2000,
    });

    // counter js for numbers 
    $('.counter').counterUp({
      delay: 20,
      time: 5000
    });
  });
