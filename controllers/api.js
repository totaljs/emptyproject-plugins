exports.install = function() {
	ROUTE('+SOCKET /', socket);
};

function socket() {
	var self = this;
	MAIN.ws = self;
	self.api('api');
	self.autodestroy(() => MAIN.ws = null);
}