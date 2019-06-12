/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}
console.log(tweetData.handle)

const createTweetElement = function(obj) {
  var $article = $('<article>').addClass('tweet');
    var $header = $('<header>').addClass('tweet-header').appendTo($article);
      $('<img>').attr('src', tweetData.user.avatars.small).addClass('tweet-icon').appendTo($header);
      $('<h2>').text(tweetData.user.name).appendTo($header);
      $('<span>').text(tweetData.user.handle).appendTo($header);
    var $section = $('<section>').addClass('tweet-message').appendTo($article);
      $('<p>').text(tweetData.content.text).appendTo($section);
    var $footer = $('<footer>').addClass('tweet-footer').appendTo($article);
      $('<span>').text(tweetData.created_at).appendTo($footer);
      $('<img>').attr('src', 'https://img.icons8.com/material-rounded/24/000000/like.png').addClass('icon').appendTo($footer);
      $('<img>').attr('src', 'https://img.icons8.com/material/24/000000/refresh.png').addClass('icon').appendTo($footer);
      $('<img>').attr('src', 'https://img.icons8.com/material/24/000000/filled-flag.png').addClass('icon').appendTo($footer);

return $article;
};

var $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.





});
