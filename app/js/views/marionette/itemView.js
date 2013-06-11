define([
    'jquery'
    , 'markup'
		, 'marionette'
    , 'app'
		, 'text!../../../templates/marionette/itemView.tpl'
], function ($, Markup, Marionette, App, Template){
    var ItemView = Marionette.ItemView.extend({
				// template: App.getTemplate('marionette/itemView'),
				template: Template,
				tagName: 'div',
				className: 'box',

				render: function() {
						var page = Markup.up(this.template);
						$(this.el).html(page);

						return this;
				}
    });

    return ItemView;
});
