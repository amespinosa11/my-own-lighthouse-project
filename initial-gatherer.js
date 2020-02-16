'use strict';

const Gatherer = require('lighthouse').Gatherer;

class InitialTime extends Gatherer {
    afterPass(options) {
        const driver = options.driver;

        return driver.evaluateAsync('window.initialLoadTime')
            .then(initialLoadTime => {
                if (!initialLoadTime) {

                    throw new Error('Unable to find card load metrics in page');
                }
                return initialLoadTime;
            });
    }
}

module.exports = InitialTime;