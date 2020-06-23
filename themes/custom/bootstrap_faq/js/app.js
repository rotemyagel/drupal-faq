(function ($) {

  $('.card').on('shown.bs.collapse', function () {
    $(this).removeClass('card-close');
    $(this).addClass('card-open');
  })

  $('.card').on('hidden.bs.collapse', function () {
    $(this).removeClass('card-open');
    $(this).addClass('card-close');
  })

})(jQuery)
