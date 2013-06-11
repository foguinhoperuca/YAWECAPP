define([
		'jquery'
		, 'markup'
		, 'marionette'
		, 'app'
		, 'collections/meme'
		, 'text!../../../templates/marionette/compositeItemView.tpl'
		, 'text!../../../templates/marionette/compositeView.tpl'
], function ($, Markup, Marionette, App, MemeCollection, ItemViewTemplate, CompositeViewTemplate){
		var itemView = Marionette.ItemView.extend({
				template: ItemViewTemplate,
				tagName: 'div'
		});

		var CompositeView = Marionette.CompositeView.extend({
				template: CompositeViewTemplate,
				itemView: itemView,
				itemViewContainer: '#divMeme',
				className: 'box',
				tagName: 'div',
				collection: new MemeCollection()
		});

		return CompositeView;
});
