define([
    'jquery'
    , 'backbone'
    , 'app'
    , 'markup'
    , 'collections/featured'
], function ($, Backbone, App, Markup, FeaturedCollection){
    var FeaturedView = Backbone.View.extend({
	tagName: 'div',
	className: 'box',
	render: function() {
	    var data = new FeaturedCollection().toJSON();
	    var featured = data[0];
	    var template = Markup.up(App.getTemplate("featured"), featured);

	    // $('.carousel').carousel();

	    $(this.el).html(template);
	    return this;
	}
    });

    return FeaturedView;
});
