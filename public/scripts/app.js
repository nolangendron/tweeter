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

const data = [
  {
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
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

const renderTweets = function (tweets) {
  for (const user of data) {
    $('#tweets-container').append(createTweetElement(user));
  }
}

const createTweetElement = function(obj) {
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


renderTweets(data);


});
