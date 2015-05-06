module.exports = require('./lib');
module.exports.run = function(options) {
	var program = require('./bin/cmd');
	if (options.bootstrap) {
		program.bootstrap = options.bootstrap;
	}
	if (options.config) {
		program._config = options.config;
	}
	return program;
};