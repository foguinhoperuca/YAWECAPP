define([
		'marionette'
		, 'app'
		, 'text!../../templates/menu.tpl'
], function (Marionette, App, MenuTemplate){
		var MenuView = Marionette.ItemView.extend({
				template: MenuTemplate,
				tagName: 'div',
				className: 'navbar navbar-inverse navbar-static-top'
		});

		return MenuView;
});
