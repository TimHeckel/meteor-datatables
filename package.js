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
    'lib/images/back_disabled.png',
    'lib/images/back_enabled.png',
	'lib/images/back_enabled_hover.png',
	'lib/images/forward_disabled.png',
	'lib/images/forward_enabled.png',
	'lib/images/forward_enabled_hover.png',
	'lib/images/sort_asc.png',
	'lib/images/sort_asc_disabled.png',
	'lib/images/sort_both.png',
	'lib/images/sort_desc.png',
	'lib/images/sort_desc_disabled.png',
  ], 'client'
  );
});