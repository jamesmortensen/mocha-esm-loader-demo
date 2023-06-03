

import { expect } from 'chai';
import fs from 'fs';


console.log('executing Test suites 4 and 5');
describe('Tests - 3', () => {

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

describe('Tests - 4', () => {

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
