define([
    'jquery'
    , 'backbone'
    , 'app'
    , 'markup'
], function ($, Backbone, App, Markup){
    var AboutView = Backbone.View.extend({
	tagName: 'div',
	className: 'box',
	render: function() {
	    // FIXME use Markup (define) instead global Mark
	    var template = Markup.up(App.getTemplate('about'));

	    $(this.el).html( template );
	    return this;
	}
    });

    return AboutView;
});
