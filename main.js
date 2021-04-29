 // swiper js
  var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });


  // ########### scrollTop
  var mybutton =document.getElementById("mybtn");
window.onscroll=function() {scrollfunction()};
function scrollfunction(){
if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){ mybutton.style.display ="block";}
else{mybutton.style.display ="none";}}
function topFunction(){
document.body.scrollTop=0;
document.documentElement.scrollTop=0;}

// navbar

$(document).ready(function() {
	$(window).scroll(function() {
		if ($(window).scrollTop()>300) {
	$('.navbar').addClass('active');
		}else {
			$('.navbar').removeClass('active');
		}
	})
	})


// countaing
$(document).ready(function(){

  $('.counter').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');

    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },

    {

      duration: 3000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
      }
    });
  });

});


 AOS.init({
  		duration:1000
  });