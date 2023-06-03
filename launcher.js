import Mocha from 'mocha';
import DetailedLogger from 'detailed-logger';
const logger = new DetailedLogger();
logger.setLevel('log');

// library that loads ESM-spec files.
import MochaEsmLoader from 'mocha-esm-loader';

// These lines make "require" available
// see https://www.kindacode.com/article/node-js-how-to-use-import-and-require-in-the-same-file/
import { createRequire } from 'module';
global.require = createRequire(import.meta.url);

const Reporter = (await import('./custom-esm-reporter.js')).default;

const mocha = new Mocha({
    reporter: "mocha-multi",
    reporterOptions: {
        spec: "-",
        "custom-esm-reporter": {
            "constructorFn": Reporter,
            "stdout": "-",
            "options": {
                "option1": "value1",
                "option2": "value2",
                "logger": logger
            }
        }
    }
});

const mochaEsmLoader = new MochaEsmLoader(mocha, logger);
await mochaEsmLoader.import();

const suiteRun = mocha.run();

process.on('exit', (code) => {
    process.exit(suiteRun.stats.failures);
});
