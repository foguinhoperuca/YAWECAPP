// var YAWECAPP = {
//     init: function() {
// 		console.log("Do nothing - init");
//     },

// getTemplate: function(template) {
// 	return  $.ajax({
// 		type: "GET",
// 		url: "app/templates/" + template + ".tpl",
// 		async: false
// 	}).responseText;
// },

// showView: function (selector, view) {
// 	if (this.currentView) {
// 		this.currentView.close();
// 	}
// 	$(selector).html(view.el);
// 	this.currentView = view;
// 	return view;
// },

// callTooltip: function(view) {
// 	view.$('.tooltip-top').tooltip({
// 		placement: 'top'
// 	});
// 	view.$('.tooltip-right').tooltip({
// 		placement: 'right'
// 	});
// 	view.$('.tooltip-bottom').tooltip({
// 		placement: 'bottom'
// 	});
// 	view.$('.tooltip-left').tooltip({
// 		placement: 'left'
// 	});
// },

// getBaseURL: function(app) {
// 	if (app == undefined)
// 		app = "yawecapp";

// 	var baseURL = "http://local." + app + "/" + BACKEND + "/";
// 	return baseURL;
// }
// };

// jQuery(document).ready(function() {
//     YAWECAPP.init();
// });

var YAWECAPP;

define(
	['jquery'],
	function (JQuery){

		var App = {

			getFeatured: function() {
				// return _.map(this.EmployeeCollection.where({id: id}), function(obj){ return obj.attributes; });
				return this.FeaturedCollection;
			},

			getTemplate: function(template) {
				return  $.ajax({
					type: "GET",
					url: "app/templates/" + template + ".tpl",
					async: false
				}).responseText;
			},

			showView: function (selector, view) {
				if (this.currentView) {
					this.currentView.close();
				}
				$(selector).html(view.el);
				this.currentView = view;
				return view;
			},

			callTooltip: function(view) {
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
			},

			getBaseURL: function(app) {
				if (app == undefined)
					app = "yawecapp";

				var baseURL = "http://local." + app + "/" + BACKEND + "/";
				return baseURL;
			},

			showView: function (selector, view) {
				if (this.currentView) {
					this.currentView.close();
				}

				$(selector).html(view.el);
				this.currentView = view;

				return view;
			}
		};

		return App;
	}
);
