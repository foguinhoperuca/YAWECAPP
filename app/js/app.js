define([
		'jquery'
		, 'markup'
		, 'bootstrap'
		, 'backbone'
		, 'marionette'
		, 'config'
], function ($, Markup, Bootstrap, Backbone, Marionette, Config){
		var App = new Marionette.Application();

		App.addRegions({
				mainRegion: '#main',
				menuRegion: '#menu',
				footerRegion: '#footer'
		});

		Marionette.Renderer.render = function(template, data) {
				return Markup.up(template, data);
		};

		App.getFeatured = function() {
				// return _.map(this.EmployeeCollection.where({id: id}), function(obj){ return obj.attributes; });
				return this.FeaturedCollection;
		};

		// TODO create a global function to load tpl usig requirejs but without text plugin.
		App.getTemplate = function(template) {
				return  $.ajax({
						type: "GET",
						url: "app/templates/" + template + ".tpl",
						async: false
				}).responseText;
		};

		App.showView = function (selector, view) {
				if (this.currentView) {
						this.currentView.close();
				}

				$(selector).html(view.el);
				this.currentView = view;

				return view;
		};

		App.callTooltip = function(view) {
				view.$('.tooltip-top').tooltip({
						placement: 'top'
				});
				view.$('.tooltip-right').tooltip({
						placement: 'right'
				});
				view.$('.tooltip-bottom').tooltip({
						placement: 'bottom'
				});
				view.$('.tooltip-left').tooltip({
						placement: 'left'
				});
		};

		App.getBaseURL = function(app) {
				if (app == undefined)
						app = "yawecapp";

				var baseURL = "http://local." + app + "/" + Config.backend + "/";
				return baseURL;
		};

		App.ConfigureAjaxBackbone = function () {
				arguments[0].async = false;
				arguments[0].cache = false;

				return Backbone.$.ajax.apply(Backbone.$, arguments);
		};

		return App;
});
