'use strict';

const Audit = require('lighthouse').Audit;

const MAX_CARD_TIME = 3000;

class InitialLoadAudit extends Audit {
    static get meta() {
        return {
            category: 'MyPerformance',
            name: 'initial-audit',
            description: 'RATP - Loaded and ready to use',
            failureDescription: 'RATP slow to initialize',
            helpText: 'Used to measure time from first request to when the page' +
            ' is loaded',
            id: 'initial-audit',
            title: 'Initial Time to load services',
            requiredArtifacts: ['InitialTime']
        };
    }

    static audit(artifacts) {
        const loadedTime = artifacts.InitialTime;

        const belowThreshold = loadedTime <= MAX_CARD_TIME;

        return {
            rawValue: loadedTime,
            score: Number(belowThreshold)
        };
    }
}

module.exports = InitialLoadAudit;