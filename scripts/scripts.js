const mediaQuery = window.matchMedia('(min-width: 768px)')
// Check if the media query is true
if (mediaQuery.matches) {
$(function() {
    $(window).scroll(function () {
       if ($(this).scrollTop() > 500) {
          $('body').addClass('changeColor')
       } else {
          $('body').removeClass('changeColor')
       }
    });
 });
 $(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 1100) {
         $('body').addClass('changeColor2')
      } else {
         $('body').removeClass('changeColor2')
      }
   });
});
$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 1800) {
         $('body').addClass('changeColor3')
      } else {
         $('body').removeClass('changeColor3')
      }
   });
});
$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 2500) {
         $('body').addClass('changeColor4')
      } else {
         $('body').removeClass('changeColor4')
      }
   });
});

} else {
$(function() {
    $(window).scroll(function () {
       if ($(this).scrollTop() > 400) {
          $('body').addClass('changeColor')
       } else {
          $('body').removeClass('changeColor')
       }
    });
 });
 $(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 900) {
         $('body').addClass('changeColor2')
      } else {
         $('body').removeClass('changeColor2')
      }
   });
});
$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 1400) {
         $('body').addClass('changeColor3')
      } else {
         $('body').removeClass('changeColor3')
      }
   });
});
$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 1900) {
         $('body').addClass('changeColor4')
      } else {
         $('body').removeClass('changeColor4')
      }
   });
});
}