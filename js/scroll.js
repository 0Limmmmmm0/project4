// $(function(){
//     $('.slider_book').css("transform","transformX(0px)").css("opacity","1");
// });

$(function(){

    // 왼쪽에서

    $('.s1').css("transform","translateX(0px)").css("opacity","1");

    

    $(window).scroll(function(){

      var ws=$(this).scrollTop();

      // 오른쪽에서

      var s2=$('.s2').offset().top;

      if(ws>s2-700){

        $('.s2').css("transform","translateX(0px)").css("opacity","1");

      }

      // 아래에서

      var s3=$('.s3').offset().top;

      if(ws>s3-700){

        $('.s3').css("transform","translateY(0px)").css("opacity","1");

      }

      // 위에서

      var s4=$('.s4').offset().top;

      if(ws>s4-700){

        $('.s4').css("transform","translateY(0px)").css("opacity","1");

      }

      // 왼쪽위에서

      var s5=$('.s5').offset().top;

      if(ws>s5-700){

        $('.s5').css("transform","translate(0px,0px)").css("opacity","1");

      }

      // 오른쪽위에서

      var s6=$('.s6').offset().top;

      if(ws>s6-700){

        $('.s6').css("transform","translate(0px,0px)").css("opacity","1");

      }

    });

  });
