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

// TODO use marionetejs layout here
// define([
// 		'marionette'
// 		, 'collections/featured'
// 		, 'text!../../templates/featured.tpl'
// ], function (Marionette, FeaturedCollection, Template)  {
// 		var ItemView = Marionette.ItemView.extend({
// 				template: Template,
// 				tagName: 'div',
// 				className: 'box',
// 				// collection: new FeaturedCollection()

// 				initialize: function() {
// 						var data = new FeaturedCollection().toJSON();
// 						console.log(data);
// 						console.log(data[0]);

// 						this.collection = data[0];
// 						console.log(this.collection);
// 				}
// 		});

// 		return ItemView;
// });
