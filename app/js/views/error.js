define([
    'jquery'
    , 'backbone'
    , 'markup'
    , 'app'
], function ($, Backbone, Markup, App){
    var ErrorView = Backbone.View.extend({
	tagName: 'div',
	className: 'box',
	render: function() {
	    var numberMemes = 10;
	    var random = Math.floor((Math.random() * numberMemes) + 1);
	    var context = {
		image: {
		    error: random
		}
	    };

	    var template = App.getTemplate('error');
	    var page = Markup.up(template, context);
	    $(this.el).html(page);

	    return this;
	}
    });

    return ErrorView;
});
