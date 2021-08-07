/* eslint-disable max-len */
/** @format */
const fs = require('fs');
const fetch = require('node-fetch');
const lodash = require('lodash');
const report = require('../reports/cucumber_report.json');

// Get TestName

const date = new Date();
const runExecutionName = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}-${date.getHours()}-${date.getMinutes()}`;

// Authentication to Tedboard
const auth =
  'Basic ' + new Buffer('dikshita' + ':' + 'dikshitaasdasd').toString('base64');

const postScenariosToTedboard = (index, report) => {
  if (!report[index]) {
    return;
  }
  const feature = report[index];
  const scenarios = feature.elements;
  const testRunId = 'Sprint-2';
  const browserName = 'chrome';
  const browserVersion = '91.0.1';
  const featureName = feature.name;

  const scenarioPromises = scenarios.map(scenario => {
    let errorMsg = 'Test Assertion successful';
    let status = 'passed';

    scenario.steps.forEach(step => {
      if (step.result.status === 'failed') {
        errorMsg = step.result.error_message;
        status = 'failed';
      }
    });
    const body = {
      accesskey: '_d2sda0',
      signature: '_099b02d6asd',
      name: testRunId,
      testname: scenario.name,
      suitename: featureName,
      status: lodash.capitalize(status),
      message: errorMsg,
      timestamp: Math.floor(new Date().getTime() / 1000),
      user_agent: {
        browser: browserName,
        b_version: browserVersion
      },
      type: 'UI'
    };

    return fetch('https://app.tedboard.com/api/automation/create', {
      method: 'POST',
      headers: {
        Authorization: auth,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
  });

  return Promise.all(scenarioPromises).then(response => {
    console.log('Posted successfully on tedboard');
    postScenariosToTedboard(index + 1, report);
  });
};

// Retrieve report features
const readScenarios = async () => {
  postScenariosToTedboard(0, report);
  // const starterPromise = Promise.resolve(null);
  // await report.reduce((p, feature) => {
  //   return p.then(() => {
  //     return postScenariosToTedboard(0, feature);
  //   });
  // }, starterPromise);
};

readScenarios();
