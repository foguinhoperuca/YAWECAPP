define([
    'jquery'
    , 'markup'
		, 'marionette'
    , 'app'
		, 'text!../../../templates/marionette/collectionView.tpl'
], function ($, Markup, Marionette, App, Template){
    var CompositeView = Marionette.ItemView.extend({
				template: Template,
				tagName: 'div',
				className: 'box',

				render: function() {
						var page = Markup.up(this.template);
						$(this.el).html(page);

						return this;
				}
    });

    return CompositeView;
});
