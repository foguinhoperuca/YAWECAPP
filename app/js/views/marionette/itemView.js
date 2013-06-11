define([
    'jquery'
    , 'markup'
		, 'marionette'
    , 'app'
		, 'text!../../../templates/marionette/itemView.tpl'
		, 'models/meme'
], function ($, Markup, Marionette, App, ItemViewTemplate, MemeModel){
    var ItemView = Marionette.ItemView.extend({
				// template: App.getTemplate('marionette/itemView'),
				template: ItemViewTemplate,
				tagName: 'div',
				className: 'box',

				initialize: function() {
						this.model = new MemeModel();
				},

				onRender: function() {
						// var page = Markup.up(this.template);
						// $(this.el).html(page);

						// return this;

						// console.log(this.template);

						// console.log("render itemView simple");
				}
    });

    return ItemView;
});
