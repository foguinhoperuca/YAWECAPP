define([
    'jquery'
    , 'markup'
    , 'app'
		, 'marionette'
], function ($, Markup, App, Marionette){
    // var ErrorView = Backbone.View.extend({
    var ErrorView = Marionette.ItemView.extend({
				// template: App.getTemplate('itemView'),
				tagName: 'div',
				className: 'box',

				render: function() {
						// var page = Markup.up(this.template);
						var page = Markup.up(App.getTemplate('itemView'));
						$(this.el).html(page);

						return this;
				}
    });

    return ErrorView;
});
