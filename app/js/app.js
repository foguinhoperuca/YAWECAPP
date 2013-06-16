define([
		'jquery'
		, 'markup'
		, 'bootstrap'
		, 'backbone'
		, 'marionette'
		, 'config'
], function ($, Markup, Bootstrap, Backbone, Marionette, Config){
		var App = new Marionette.Application();

		// FIXME Bootstrap var is in memory but i cant access it!

		App.addRegions({
				mainRegion: '#main',
				menuRegion: '#menu',
				footerRegion: '#footer'
		});

		Marionette.Renderer.render = function(template, data) {
				return Markup.up(template, data);
		};

		// TODO implement all, except generic, to use marionette
		App.getTemplate = function(template) {
				return  $.ajax({
						type: "GET",
						url: "app/templates/" + template + ".tpl",
						async: false
				}).responseText;
		};

		App.getBaseURL = function(app) {
				if (app == undefined)
						app = "yawecapp";

				return "http://local." + app + "/" + Config.backend + "/";
		};

		App.ConfigureAjaxBackbone = function () {
				arguments[0].async = false;
				arguments[0].cache = false;

				return Backbone.$.ajax.apply(Backbone.$, arguments);
		};

		return App;
});
