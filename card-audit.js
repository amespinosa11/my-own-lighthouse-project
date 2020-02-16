'use strict';

const Audit = require('lighthouse').Audit;

const MAX_CARD_TIME = 2000;

class LoadAudit extends Audit {
    static get meta() {
        return {
            category: 'MyPerformance',
            name: 'card-audit',
            description: 'Schedule card initialized and ready',
            failureDescription: 'Schedule Card slow to initialize',
            helpText: 'Used to measure time from navigationStart to when the schedule' +
            ' card is shown.',
            id: 'card-audit',
            title: 'test',
            requiredArtifacts: ['TimeToCard']
        };
    }

    static audit(artifacts) {
        console.log(artifacts);
        const loadedTime = artifacts.TimeToCard;
        console.log(loadedTime);

        const belowThreshold = loadedTime <= MAX_CARD_TIME;

        return {
            rawValue: loadedTime,
            score: Number(belowThreshold)
        };
    }
}

module.exports = LoadAudit;