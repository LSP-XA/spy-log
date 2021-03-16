---
home: true
heroImage: /images/hero.png
heroText:
tagline:
actionText: Get Started →
actionLink: /nav.01.guide/
features:
  - title:
    details:
  - title:
    details:
  - title:
    details:
footer: MIT Licensed | Copyright © 2021-present Spark
---

### A simple log tool in bowsers

```ts
import Log from 'spy-log';

const logger = new Log('request');

logger.log('request start');
logger.stage('pending');
logger.log('waiting for response...');
logger.stage('success');
logger.log('got response!');
```

### Group logs in complex/async task

```ts
import Log from 'spy-log';

async function subTask(logger) {
  logger.info('massage in suntask');
  await request('http://example.com', logger.group('getExample'));
  logger.end();
}

const logger = new Log('main');

logger.log('main start');
subTask(logger.group('subtask'));
```
