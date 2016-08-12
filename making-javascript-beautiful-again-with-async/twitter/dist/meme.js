'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _memeMaker = require('meme-maker');

var _memeMaker2 = _interopRequireDefault(_memeMaker);

var _htmlEntities = require('html-entities');

var _htmlEntities2 = _interopRequireDefault(_htmlEntities);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var entities = new _htmlEntities2.default.AllHtmlEntities();

var Meme = function () {
    function Meme() {
        (0, _classCallCheck3.default)(this, Meme);
    }

    (0, _createClass3.default)(Meme, [{
        key: 'create',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(caption) {
                var _this = this;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                return _context.abrupt('return', new _promise2.default(function (resolve, reject) {
                                    caption = caption.replace('RT @chuck_facts:', '');
                                    caption = entities.decode(caption);

                                    var _split = _this.split(caption);

                                    var topText = _split.topText;
                                    var bottomText = _split.bottomText;


                                    var infile = 'images/chuck-norris.jpg';
                                    var outfile = 'images/chuck-norris-out.jpg';

                                    (0, _memeMaker2.default)({
                                        topText: topText,
                                        bottomText: bottomText,
                                        image: infile,
                                        outfile: outfile,
                                        fontSize: 60,
                                        strokeWeight: 1
                                    }, function (error) {
                                        if (error) {
                                            reject(error);
                                        } else {
                                            resolve(outfile);
                                        }
                                    });
                                }));

                            case 1:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function create(_x) {
                return _ref.apply(this, arguments);
            }

            return create;
        }()
    }, {
        key: 'split',
        value: function split(text) {
            var half = Math.floor(text.length / 2);
            var mid = text.lastIndexOf(' ', half);

            return {
                topText: text.slice(0, mid),
                bottomText: text.slice(mid + 1)
            };
        }
    }]);
    return Meme;
}();

module.exports = new Meme();