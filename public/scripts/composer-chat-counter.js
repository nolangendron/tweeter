$(document).ready(function() {
  const maxTweetLength = 140;
  $('#tweet-text').on('keyup', function() {
    let counter = $(this).siblings('.counter');
    let lengthCounter = $(this).val().length;
    lengthCounter = maxTweetLength - lengthCounter;
    $(counter).text(lengthCounter);
    if (lengthCounter < 0) {
      $(counter).addClass('counterRed');
    } else {
      $(counter).removeClass('counterRed');
      }
    })
  });




