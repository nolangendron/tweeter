/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {


const renderTweets = function (tweets) {
  for (const user of tweets) {
    $('#tweets-container').prepend(createTweetElement(user));
  }
}

const createTweetElement = function(obj) {
    const $article = $('<article>').addClass('tweet');
    const $header = $('<header>').addClass('tweet-header').appendTo($article);
      $('<img>').attr('src', obj.user.avatars.small).addClass('tweet-icon').appendTo($header);
      $('<h2>').text(obj.user.name).appendTo($header);
      $('<span>').text(obj.user.handle).appendTo($header);
    const $section = $('<section>').addClass('tweet-message').appendTo($article);
      $('<p>').text(obj.content.text).appendTo($section);
    const $footer = $('<footer>').addClass('tweet-footer').appendTo($article);
      $('<span>').text(moment(obj.created_at).startOf('minute').fromNow()).appendTo($footer);
      $('<img>').attr('src', 'https://img.icons8.com/material-rounded/24/000000/like.png').addClass('icon').appendTo($footer);
      $('<img>').attr('src', 'https://img.icons8.com/material/24/000000/refresh.png').addClass('icon').appendTo($footer);
      $('<img>').attr('src', 'https://img.icons8.com/material/24/000000/filled-flag.png').addClass('icon').appendTo($footer);

  return $article;
};

const loadTweets = function () {
  $.getJSON('/tweets', (data) => {
    renderTweets(data);
  })
};

loadTweets();

$('#new-tweet').on('submit', (event) => {
  event.preventDefault();
  const tweetText = $('textarea').val();
  if (tweetText.length === 0) {
    $('#err-blank-tweet').slideDown('fast');
    $('textarea').on('keydown', (event) => {
      $('#err-blank-tweet').hide();
    })
  } else if (tweetText.length > 140) {
      $('#err-characters-exceeded').slideDown('fast');
      $('textarea').on('keydown', (event) => {
      $('#err-characters-exceeded').hide();
    })
  } else {
      $.post('/tweets', $('#new-tweet').serialize(), (newTweet) => {
        loadTweets();
        $('.new-tweet textarea').val('').closest('.new-tweet').find('.counter').text(140);
    }
  )}
});

  $('.new-tweet').hide();

  $('button').on('click', (event) => {
    $('.new-tweet').slideToggle();
    $('textarea').focus();
    $('body').scrollTop(0);
  })
});
