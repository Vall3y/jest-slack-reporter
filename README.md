# Jest JSON Reporter

Jest reporter that notifies a slack channel via Incoming Webhook integration

## Set up

1. Set up a [Slack Incoming Webhook integration](https://my.slack.com/services/new/incoming-hebhook/)
2. Add the Webhook URL to `package.json` under `jestSlackReporter`

```
"jestSlackReporter": {
  "webhookUrl": "https://hooks.slack.com/services/XXXXXXXXX/XXXXXXXXX/XXXXXXXXXXXXXXXXXX"
},
```

3. Set `jest-slack-reporter` as the jest `testResultsProcessor`

```
...
"jest": {
  "testResultsProcessor": "./node_modules/jest-slack-reporter"
},
...
