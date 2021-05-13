'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

if (typeof windows !== 'undefined' && windows.web3 !== 'undefined') {
    web3 = new _web2.default(windows.web3.currentProvider);
} else {
    var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/d7dde0fa90274c6d873d75e84505f624');

    web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93cyIsImN1cnJlbnRQcm92aWRlciIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVA7Ozs7OztBQUVBLElBQUksWUFBSjs7QUFFQSxJQUFJLE9BQU8sQUFBUCxZQUFtQixBQUFuQixlQUFrQyxRQUFRLEFBQVIsU0FBaUIsQUFBdkQsYUFBb0UsQUFDaEU7V0FBTyxBQUFJLEFBQUosa0JBQVMsUUFBUSxBQUFSLEtBQWEsQUFBdEIsQUFBUCxBQUNIO0FBRkQsT0FFTyxBQUNIO1FBQU0sV0FBVyxJQUFJLGNBQUssQUFBTCxVQUFlLEFBQW5CLGFBQ2IsQUFEYSxBQUFqQixBQUlBOztXQUFPLEFBQUksQUFBSixrQkFBUyxBQUFULEFBQVAsQUFDSDtBQUVEOztrQkFBZSxBQUFmIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiRDovRGVza3RvcC9raWNrc3RhcnQifQ==