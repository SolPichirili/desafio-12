const minimist = require('minimist');

const options = {
    default: {port: 8080},
    alias: {p: 'port'}
}

const portProcess = minimist(process.argv.slice(2), options);

module.exports = portProcess;