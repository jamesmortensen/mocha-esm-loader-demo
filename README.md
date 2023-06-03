# mocha-esm-loader-demo

This is a demo of the mocha-esm-loader module, which helps run Mocha programmatically with both ES module tests and an ES module launcher script.

## Run the demo

Install modules

```
$ npm install
```

Run launcher script
```
$ node launcher.js
```

Observe the customer reporter output mixed in with the spec reporter:

```
...
custom-esm-reporter.js:35: <log>: Finished test should do something 4: pass
custom-esm-reporter.js:44: <log>: EVENT_TEST_END
custom-esm-reporter.js:32: <info>: Starting test
    ✔ should do something 5
custom-esm-reporter.js:35: <log>: Finished test should do something 5: pass
custom-esm-reporter.js:44: <log>: EVENT_TEST_END
custom-esm-reporter.js:32: <info>: Starting test
    ✔ should do something 6
custom-esm-reporter.js:35: <log>: Finished test should do something 6: pass
custom-esm-reporter.js:44: <log>: EVENT_TEST_END


  26 passing (33ms)

custom-esm-reporter.js:47: <log>: EVENT_RUN_END
```

## License

Copyright (c) James Mortensen, 2023 MIT License
