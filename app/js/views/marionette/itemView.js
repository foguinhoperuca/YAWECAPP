define([
		'jquery'
		, 'markup'
		, 'marionette'
		, 'app'
		, 'text!../../../templates/marionette/itemView.tpl'
		, 'models/meme'
], function ($, Markup, Marionette, App, ItemViewTemplate, MemeModel){
		var ItemView = Marionette.ItemView.extend({
				template: ItemViewTemplate,
				tagName: 'div',
				className: 'box',
				model: new MemeModel()
		});

		return ItemView;
});
