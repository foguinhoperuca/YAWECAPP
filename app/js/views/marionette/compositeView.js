define([
    'jquery'
    , 'markup'
		, 'marionette'
    , 'app'
    , 'collections/meme'
		, 'text!../../../templates/marionette/itemView.tpl'
		, 'text!../../../templates/marionette/compositeView.tpl'
], function ($, Markup, Marionette, App, MemeCollection, ItemViewTemplate, CompositeViewTemplate){
    var item = Marionette.ItemView.extend({
				// template: App.getTemplate('marionette/itemView'),
				template: Markup.up(ItemViewTemplate),
				// template: ItemViewTemplate,
				tagName: 'span',

				onRender: function() {
						console.log("onRender");

						var page = Markup.up(this.template);
						console.log("el is:");

						// $(this.el).html(page);

						// console.log(this.el);

						return this;
				}
    });

// TODO composite view not working!!!
		var CompositeView = Marionette.CompositeView.extend({
				// template: Markup.up(CompositeViewTemplate),
				template: App.getTemplate('marionette/compositeView'),
				itemView: item,
				itemViewContainer: '#divMeme',
				className: 'box',
				collection: new MemeCollection(),

				initialize: function() {
						// var page = Markup.up(this.template);

						// this.itemViewContainer = '#spanMeme';

						console.log(this.template);

						var page = this.template;
						$(this.el).html(page);

						console.log("this.el");
						console.log(this.el);

						console.log(this.collection);

						// return this;
				}


		});

    return CompositeView;

		// return itemView;
});
