Package.describe({
  summary: "DataTable - jQuery plugin for sortable, pagable data"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files([
    'lib/jquery.dataTables.js',
	'lib/DT_bootstrap.js',
    'lib/jquery.dataTables.css',
	'lib/DT_bootstrap.css',
    'lib/back_disabled.png',
    'lib/back_enabled.png',
	'lib/back_enabled_hover.png',
	'lib/forward_disabled.png',
	'lib/forward_enabled.png',
	'lib/forward_enabled_hover.png',
	'lib/sort_asc.png',
	'lib/sort_asc_disabled.png',
	'lib/sort_both.png',
	'lib/sort_desc.png',
	'lib/sort_desc_disabled.png',
  ], 'client'
  );
});