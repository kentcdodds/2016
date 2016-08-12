'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var tweetToMeme = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var twitterHandle, tweets, firstTweet, filename;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return _userInput2.default.get('What twitter handle do you want?');

                    case 2:
                        twitterHandle = _context.sent;
                        _context.next = 5;
                        return _twitter2.default.get('statuses/user_timeline', { screen_name: twitterHandle });

                    case 5:
                        tweets = _context.sent;

                        if (!(tweets.data.error != null)) {
                            _context.next = 10;
                            break;
                        }

                        console.error(tweets.data.error);
                        _context.next = 20;
                        break;

                    case 10:
                        if (!(tweets.data.errors != null)) {
                            _context.next = 14;
                            break;
                        }

                        console.error(tweets.data.errors);
                        _context.next = 20;
                        break;

                    case 14:
                        firstTweet = tweets.data[0];


                        console.log(firstTweet.text);

                        _context.next = 18;
                        return _meme2.default.create(firstTweet.text);

                    case 18:
                        filename = _context.sent;

                        console.log('Generated your image!!! ' + filename);

                    case 20:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function tweetToMeme() {
        return _ref.apply(this, arguments);
    };
}();

var _userInput = require('./userInput');

var _userInput2 = _interopRequireDefault(_userInput);

var _twitter = require('./twitter');

var _twitter2 = _interopRequireDefault(_twitter);

var _meme = require('./meme');

var _meme2 = _interopRequireDefault(_meme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

tweetToMeme();