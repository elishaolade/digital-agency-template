
    var optionsMenu = document.querySelector('.options');
    var arrow = document.querySelector('.accordian-arrow');
    var optionLinks = document.querySelectorAll('.option-link');
    var displayWord = document.querySelector('.word');
    var singleWork = document.querySelectorAll('.single-work');
    var portfolioImg = document.querySelectorAll('.portfolio-img');


$(document).ready(function(){

  var height = $('.itm img').css('height');
  console.log($('.itm img'));
  var width = $('.itm img').css('width');
  console.log(height);
  if(width > height){
    $('.itm img').css('width',height+'px');
    $('.itm img').css('height',width+'px');
  }

  else{
    $('.itm img').css('width',height+'px');
    $('.itm img').css('height',width+'px');
  }


  let prevScrollPos = $(this).scrollTop();
  $(window).on('scroll',function(){
    let currentScrollPos = $(this).scrollTop();
    if(prevScrollPos < currentScrollPos){
      $('header').css('top','-70px');
      console.log(prevScrollPos)
    }
    else{
      $('header').css('top','0');
    }
    prevScrollPos = currentScrollPos;

  });
  $('.accordian').on({
    click: function(e) {
      var panel = this.nextElementSibling;
      if(panel.style.maxHeight) {
        panel.style.maxHeight = null;
        $('.accordian-arrow').removeClass('active');
      }
      else {
        var p = document.querySelectorAll('.panel');
        var panels = $(this).parent().find('.panel');

        const array = Array.from(p);

        array.forEach(el => {
          if(el.style.maxHeight !== null){
            el.style.maxHeight = null;
            arrow.classList.toggle('.active');
            $('.accordian-arrow').removeClass('active');
          }
        })
        /* Set max-height to scroll height to open panel*/
        panel.style.maxHeight = panel.scrollHeight + "px";
        $(this).find('.accordian-arrow').toggleClass('active');

      }
    }
  });

  // $('.portfolio-img').on({
  //   click: function(){ console.log( $(this) ) },
  //   mouseenter: function(){
  //     $(this).parent().next().toggleClass('active');
  //     $(this).parent().next().toggleClass('active');
  //   },
  //   mouseleave:function(){
  //     $(this).parent().next().toggleClass('active');
  //   }
  // });
})

// var a = Array.from(portfolioImg);
// a.forEach(element => {
//   element.addEventListener('mouseover',function(){
//     console.log(element)
//   })
// })
