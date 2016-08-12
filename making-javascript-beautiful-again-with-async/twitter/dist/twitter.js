'use strict';

var _twit = require('twit');

var _twit2 = _interopRequireDefault(_twit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var twitter = new _twit2.default({
  consumer_key: 'REPLACE_ME',
  consumer_secret: 'REPLACE_ME',
  access_token: 'REPLACE_ME',
  access_token_secret: 'REPLACE_ME'
});

module.exports = twitter;