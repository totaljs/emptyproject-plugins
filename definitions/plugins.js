// List of all plugins
MAIN.plugins = [];

ON('ready', function() {
	for (var key in F.plugins)
		MAIN.plugins.push(F.plugins[key]);
	MAIN.plugins.quicksort('position');
});