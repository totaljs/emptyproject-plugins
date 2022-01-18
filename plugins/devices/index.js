exports.icon = 'fa fa-microchip';
exports.name = '@(Devices)';
exports.position = 1;
exports.permissions = [{ id: 'devices_read', name: 'Devices: read' }, { id: 'devices_save', name: 'Devices: save' }, { id: 'devices_remove', name: 'Devices: remove' }];
exports.visible = user => user.sa || user.permissions.includes('devices_read');
// exports.import = '/some-resource.html';

exports.install = function() {
	ROUTE('+API    @api    -devices_list                *Devices           --> list');
	ROUTE('+API    @api    -devices_read/{id}/          *Devices           --> read');
	ROUTE('+API    @api    +devices_save                *Devices           --> save');
	ROUTE('+API    @api    -devices_remove/{id}         *Devices           --> remove');
};

NEWSCHEMA('Devices', function(schema) {

	schema.define('id', 'UID');
	schema.define('name', 'String(50)');
	schema.define('location', 'String(200)');
	schema.define('reference', 'String(100)');
	schema.define('sn', 'String(80)');
	schema.define('note', 'String(1000)');
	schema.define('notes', 'String');
	schema.define('isdisabled', 'Boolean');

	schema.setList(function($) {

		if (UNAUTHORIZED($, 'devices_read'))
			return;

		$.callback([]);
	});

	schema.setRead(function($) {

		if (UNAUTHORIZED($, 'devices_read'))
			return;

		$.invalid('Not implemented');
	});

	schema.setSave(function($, model) {

		if (UNAUTHORIZED($, 'devices_save'))
			return;

		$.invalid('Not implemented');
	});

	schema.setRemove(function($) {

		if (UNAUTHORIZED($, 'devices_remove'))
			return;

		$.invalid('Not implemented');
	});

});