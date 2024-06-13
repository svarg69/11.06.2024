// console.log("Привет")
// $(".block1").addClass("block2")
// $(".block1").removeClass("block2")


// $(".block2").click(function(){
//     $(".block1").toggleClass("block2")
//     $(".block1").show(800)
//     $(".block1").hide(800)
//     $("block1").toggle(300)
//     $(this).next().toggleClass("block2")
// this означает что обращение идет к тому блоку на которое и повешено событие, функшн
//     $(this).prev().toggleClass("block2")
//     $(this).parent().toggleClass("block2")
//     $(this).closest("html").find(".block3").toggleClass(".block4")
//     $(this).siblings().toggleClass("block4")
//     плагины slick slider
// })


$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });

  AOS.init();  

  $('select').niceSelect();

  MicroModal.init(
    {
      disableScroll: true
    }
  );
