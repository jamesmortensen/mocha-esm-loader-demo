
// These lines make "require" available
// see https://www.kindacode.com/article/node-js-how-to-use-import-and-require-in-the-same-file/
import { createRequire } from 'module';
global.require = createRequire(import.meta.url);

const { expect } = require('chai');
const fs = require('fs');


console.log('Executing Test suites 1 and 2');
describe('Tests - 1', () => {

    var results = [
        'pass',
        'pass',
        'pass',
        'pass',
        'pass',
        'pass',
        'fail',
        'fail',
        'fail',
        'fail'
    ];

    // force everything to pass, for now.
    results = results.filter((res) => res === 'pass');

    for (var i = 0; i < results.length; i++) {

        it('should do something ' + i, ((_i) => {
            return function () {
                expect('pass').to.equal(results[_i]);
            }
        })(i));
    }

});

describe('Tests - 2', () => {

    var results = [
        'pass',
        'pass',
        'pass',
        'pass',
        'pass',
        'pass',
        'pass',
        'fail',
        'fail',
        'fail'
    ];

    // force everything to pass, for now.
    results = results.filter((res) => res === 'pass');

    for (var i = 0; i < results.length; i++) {

        it('should do something ' + i, ((_i) => {
            return function () {
                expect('pass').to.equal(results[_i]);
            }
        })(i));
    }
});
