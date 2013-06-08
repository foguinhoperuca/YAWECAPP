define([
    'jquery'
    // FIXME sometimes, bootstrp is loading before jquery. How to fix ir?
    , 'bootstrap'
    , 'backbone'
    , 'config'
], function ($, Bootstrap, Backbone, Config){
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

	    var baseURL = "http://local." + app + "/" + Config.backend + "/";
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

	,ConfigureAjaxBackbone: function () {
	    arguments[0].async = false;
	    arguments[0].cache = false;

	    return Backbone.$.ajax.apply(Backbone.$, arguments);
	}
    };

    return App;
});
