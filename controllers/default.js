exports.install = function() {
	ROUTE('+GET /*', index);
	FILE(pluginfiles);
};

function index() {

	var self = this;
	var plugins = [];

	for (var item of MAIN.plugins) {
		if (self.user.sa || !item.visible || item.visible(self.user)) {
			var obj = {};
			obj.id = item.id;
			obj.name = TRANSLATOR(self.user.language || '', item.name);
			obj.icon = item.icon;
			obj.import = item.import;
			plugins.push(obj);
		}
	}

	self.view('index', plugins);
}

function pluginfiles(req, res, is) {

	if (is)
		return req.url[1] === '_';

	var path = req.uri.pathname;
	var index = path.indexOf('/', 2);
	var name = path.substring(2, index);

	if (F.plugins[name]) {
		var file = path.substring(index + 1);
		var filename = PATH.root('/plugins/' + name + '/public/' + file);
		res.file(filename);
	} else
		res.throw404();
}