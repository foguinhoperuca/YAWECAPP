var YAWECAPP = {
    init: function() {
	// solve multiple events problem
	Backbone.View.prototype.close = function () {
	    this.remove();
	    this.unbind();
	};

	// cache
	this.genericCollection = new YAWECAPP.GenericCollection();
	this.featuredCollection = new YAWECAPP.FeaturedCollection();

	// start routers
	new YAWECAPP.HomeController();

	this.genericModel = new YAWECAPP.GenericModel();

	Backbone.history.start();
	// FIXME not working out of box! Need use jquery to trigger url change! :(
	// Backbone.history.start({ pushState: true });
    },

    getFeatured: function() {
	// return _.map(this.EmployeeCollection.where({id: id}), function(obj){ return obj.attributes; });
	return this.FeaturedCollection;
    },

    getTemplate: function(template) {
	return  $.ajax({
	    type: "GET",
	    url: "templates/" + template + ".tpl",
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
    }
};

jQuery(document).ready(function() {
    YAWECAPP.init();
});
