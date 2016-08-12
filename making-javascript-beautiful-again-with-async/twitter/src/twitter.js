import Twitter from 'twit';

var twitter = new Twitter({
  consumer_key:         'REPLACE_ME',
  consumer_secret:      'REPLACE_ME',
  access_token:         'REPLACE_ME',
  access_token_secret:  'REPLACE_ME'
});

module.exports = twitter;
