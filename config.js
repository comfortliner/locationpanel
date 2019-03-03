exports.database = {
	type: 'mongodb',
	hostname: 'localhost',
	port: 27017,
	database: 'locationpanel'
};

var argv = require('yargs')
        .usage('Usage: $0 [--port INTEGER [8080]]')
        .argv;

exports.server = {
	port: argv.port || 8080,
	baseurl: argv.baseurl || '/'
};
