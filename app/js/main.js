require.config({
	paths: {
		// 'accounting'                     : 'libs/accounting/accounting',
		// 'backbone'                       : 'libs/backbone/backbone',
		// 'bootbox'                        : 'libs/bootbox/bootbox',
		// 'bootstrap-button'               : 'libs/bootstrap/js/bootstrap-button',
		// 'bootstrap-collapse'             : 'libs/bootstrap/js/bootstrap-collapse',
		// 'bootstrap-datetimepicker'       : 'libs/bootstrap-datetimepicker/src/js/bootstrap-datetimepicker',
		// 'bootstrap-datetimepicker.pt-br' : 'libs/bootstrap-datetimepicker/src/js/locales/bootstrap-datetimepicker.pt-BR',
		// 'bootstrap-dropdown'             : 'libs/bootstrap/js/bootstrap-dropdown',
		// 'bootstrap-modal'                : 'libs/bootstrap/js/bootstrap-modal',
		// 'bootstrap-popover'              : 'libs/bootstrap/js/bootstrap-popover',
		// 'bootstrap-tab'                  : 'libs/bootstrap/js/bootstrap-tab',
		// 'bootstrap-tooltip'              : 'libs/bootstrap/js/bootstrap-tooltip',
		// 'bootstrap-transition'           : 'libs/bootstrap/js/bootstrap-transition',
		'config'                         : 'config',
		// 'dynatree'                       : 'libs/dynatree/src/jquery.dynatree',
		// 'form2js'                        : 'libs/form2js/src/form2js',
		// 'handlebars'                     : 'libs/handlebars/handlebars.runtime',
		// 'jquery'                         : 'libs/jquery/jquery',
		// 'jquery.printElement'            : 'libs/jquery.printElement',
		// 'jquery-ui'                      : 'libs/dynatree/jquery/jquery-ui.custom',
		// 'marionette'                     : 'libs/backbone.marionette/lib/backbone.marionette',
		// 'maskedinput'                    : 'libs/jquery.maskedinput/jquery.maskedinput',
		// 'socket.io'                      : 'libs/socket.io-client/dist/socket.io',
		'templates'                      : '../templates/templates',
		// 'tablesorter'                    : 'libs/jquery.tablesorter/js/jquery.tablesorter',
		// 'underscore'                     : 'libs/underscore/underscore',
		// 'uploadify'                      : 'libs/jquery.uploadify.min'


		// LIBS
		'underscore': 'libs/underscore-min',
		'jquery': 'libs/jquery-min',
		'backbone': 'libs/backbone-min',
		'markup': 'libs/markup-min',
		'bootstrap': 'libs/bootstrap-min',

		// App modules
		'AboutView': 'views/about',
		'AboutView': 'views/error',
		'AboutView': 'views/featured'
	},
	shim: {
		// 'underscore': {
		// 	exports: '_'
		// },
		// 'backbone': {
		// 	deps: ['jquery', 'underscore'],
		// 	exports: 'Backbone'
		// },
		// 'marionette': {
		// 	deps: ['jquery', 'underscore', 'backbone'],
		// 	exports: 'Marionette'
		// },
		// 'handlebars': {
		// 	exports: 'Handlebars'
		// },
		'config': {
			exports: 'config'
		},
		'templates': {
			deps: ['handlebars']
		},
		// 	'bootstrap-dropdown': {
		// 		deps: ['jquery']
		// 	},
		// 	'bootstrap-button': {
		// 		deps: ['jquery']
		// 	},
		// 	'bootstrap-transition': {
		// 		deps: ['jquery']
		// 	},
		// 	'bootstrap-collapse': {
		// 		deps: ['bootstrap-transition']
		// 	},
		// 	'bootstrap-modal': {
		// 		deps: ['jquery']
		// 	},
		// 	'bootstrap-datetimepicker': {
		//      deps: ['jquery']
		//  },
		// 'bootstrap-datetimepicker.pt-br': {
		//      deps: ['bootstrap-datetimepicker']
		//  },
		// 	'bootstrap-tab': {
		// 		deps: ['jquery']
		// 	},
		// 	'bootstrap-tooltip': {
		// 		deps: ['jquery']
		// 	},
		// 	'bootstrap-popover': {
		// 		deps: ['bootstrap-tooltip']
		// 	},
		// 	'bootbox': {
		// 		deps: ['bootstrap-modal']
		// 	},
		// 	'jquery-ui': {
		// 		deps: ['jquery']
		// 	},
		// 	'dynatree': {
		// 		deps: ['jquery-ui']
		// 	},
		// 	'tablesorter': {
		// 		deps: ['jquery']
		// 	},
		// 	'maskedinput': {
		// 		deps: ['jquery']
		// 	},
		// 	'uploadify': {
		// 		deps: ['jquery']
		// 	},
		// 	'jquery.printElement': {
		// 		deps: ['jquery']
		// 	}

		'underscore': {
			exports: '_'
		},
		'backbone': {
			deps: ['jquery', 'underscore'],
			exports: 'Backbone'
		}
	}
});

// TODO put everybody in router.js
// require(['router', 'backbone'], function(AppRouter, Backbone) {
require(['controllers/home', 'backbone'], function(Home, Backbone) {
	// appRouter = new AppRouter();
	// Backbone.history.start();

	// app.init function:
	// solve multiple events problem
	Backbone.View.prototype.close = function () {
		this.remove();
		this.unbind();
	};

	// cache
	// this.genericCollection = new YAWECAPP.GenericCollection();
	// this.featuredCollection = new YAWECAPP.FeaturedCollection();

	// start routers
	// new YAWECAPP.HomeController();
	new Home();

	// this.genericModel = new YAWECAPP.GenericModel();

	Backbone.history.start();
	// FIXME not working out of box! Need use jquery to trigger url change! :(
	// Backbone.history.start({ pushState: true });
});
