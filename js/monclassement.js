    
    function scrolliPhone() {
    var $leftbar  = $("#left"),
        $rightbar   = $('#right'),
        $window    = $(window),
        iphoneHeight  = $("#iphone").height() - 180;
        rightHeight = $rightbar.height(); 
        
    $window.scroll(function() {
      if($window.scrollTop() < $leftbar.offset().top) {//no scroll
        //console.log('no scroll');
        $leftbar.removeClass('fixed_container');
        $leftbar.children('#iphone').removeClass('fixed-iphone');
      } else {//fix iphone
          if ($window.scrollTop() > ( rightHeight + $leftbar.offset().top - iphoneHeight )){
            $leftbar.removeClass('fixed_container').css('height', rightHeight);
            $leftbar.children('#iphone').removeClass('fixed-iphone').css('margin-top', rightHeight - iphoneHeight );
          }
          else{// Scroll down with the iphone
            //console.log('scroll down with map');
            $leftbar.addClass('fixed_container').css('height', '');;
            $leftbar.children('#iphone').addClass('fixed-iphone').css ('margin-top', '0');;
          }
      }
    });
};