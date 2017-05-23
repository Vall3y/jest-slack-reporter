const readPkg = require('read-pkg');
const request = require('request');

module.exports = testResults => {
  const packagedData = readPkg.sync(process.cwd());
  const config = packagedData.jestJsonReporter || {};

  const webhookUrl = config.webhookUrl;
  if (!webhookUrl) {
    throw new Error("Please add a slack webhookUrl field under jest-slack-reporter on your package.json");
  }

  const errText = `<!here> Just a quick heads up, *${testResults.numFailedTests}* tests have failed :(
  Please take a look. Peace`;

  const passingText = `Sweet, all tests have passed`;

  const text = testResults.numFailedTests > 0 ? errText : passingText;

  const options = {
    uri: webhookUrl,
    method: 'POST',
    json: { text },
    mrkdwn: true,
  };

  request(options);

  return testResults;
};
