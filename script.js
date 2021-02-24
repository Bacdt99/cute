$('#click').click(function() {
  $('#mail').html("Mình gặp nhau nữa nhaaa ♥");
  $('*').addClass('password');
}).on('focusout', () => {
  $('*').removeClass('password');
});;