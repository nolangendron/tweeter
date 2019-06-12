/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

// calculate time ago
function timeAgo(ts) {
    const d = new Date();
    const nowTs = Math.floor(d.getTime() / 1000);
    const seconds = nowTs - ts;

    if (seconds > 2 * 24 * 3600) {
        return "a few days ago";
    }
    if (seconds > 24 * 3600) {
        return "yesterday";
    }

    if (seconds > 3600) {
        return "a few hours ago";
    }
    if (seconds > 1800) {
        return "Half an hour ago";
    }
    if (seconds > 60) {
        return Math.floor(seconds / 60) + " minutes ago";
    }
    return "A long time ago"
}

const renderTweets = function (tweets) {
  for (const user of tweets) {
    $('#tweets-container').append(createTweetElement(user));
  }
}

const createTweetElement = function(obj) {
  console.log(obj);
  var $article = $('<article>').addClass('tweet');
    var $header = $('<header>').addClass('tweet-header').appendTo($article);
      $('<img>').attr('src', obj.user.avatars.small).addClass('tweet-icon').appendTo($header);
      $('<h2>').text(obj.user.name).appendTo($header);
      $('<span>').text(obj.user.handle).appendTo($header);
    var $section = $('<section>').addClass('tweet-message').appendTo($article);
      $('<p>').text(obj.content.text).appendTo($section);
    var $footer = $('<footer>').addClass('tweet-footer').appendTo($article);
      $('<span>').text(timeAgo(obj.create_at)).appendTo($footer);
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
  let tweetText = $('textarea').val();
  if (tweetText.length === 0) {
    alert('Tweet must contain at least one character');
  } else if (tweetText.length > 140) {
    alert('Tweet exceeds 140 characters');
  } else {
  $.post('/tweets', $('#new-tweet').serialize(), (newTweet) => {
    createTweetElement(newTweet);
  })
}
});


});
