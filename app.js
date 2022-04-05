let paymount = $('#payment')
let content = $('.content-1')
let closedMenu =$('#closed-menu')
let openMenu = $('#open-menu')
let contentSecondary = $('#content-2')

$(closedMenu).click(function () {
  content.addClass("closed");
  contentSecondary.addClass('closed')
});

$(openMenu).click(function () {
    content.removeClass("closed");
    contentSecondary.removeClass('closed')
  });

$(function () {
  const header = $("#header");
  const intro = $("#intro");
  const introH = intro.innerHeight();
  let scrollPos = $(window).scrollTop();

  $(window).on("scroll load resize", function () {
    scrollPos = $(this).scrollTop();

    if (scrollPos > introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  });

  $('[data-scroll]').on('click', function(event) {
    event.preventDefault();

    let = blockId = $(this).data('scroll');
    let = elementOffset = $(blockId).offset().top;
    $('html, body').animate({
        scrollTop: elementOffset - 120
    }, 1000);
});

});



