'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _readline = require('readline');

var _readline2 = _interopRequireDefault(_readline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserInput = function () {
    function UserInput() {
        (0, _classCallCheck3.default)(this, UserInput);
    }

    (0, _createClass3.default)(UserInput, [{
        key: 'get',
        value: function get(questionText) {
            return new _promise2.default(function (resolve, reject) {
                var rl = _readline2.default.createInterface({
                    input: process.stdin,
                    output: process.stdout
                });

                rl.question(questionText, function (answerText) {
                    resolve(answerText);
                    rl.close();
                });
            });
        }
    }]);
    return UserInput;
}();

module.exports = new UserInput();