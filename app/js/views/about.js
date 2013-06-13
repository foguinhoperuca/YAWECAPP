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
						var template = Markup.up(App.getTemplate('about'));

						$(this.el).html( template );
						return this;
				}
		});

		return AboutView;
});
