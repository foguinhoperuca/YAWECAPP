define([
		'backbone'
		, 'app'
		, 'views/marionette/itemView'
		, 'views/marionette/compositeView'
		, 'views/marionette/collectionView'
], function (Backbone, App, ItemView, CompositeView, CollectionView) {
		var MarionetteController = Backbone.Router.extend({
				routes: {
						'marionette/itemView': 'itemView',
						'marionette/compositeView': 'compositeView',
						'marionette/collectionView': 'collectionView'
				},

				itemView: function() {
						// Pass itemView
						App.mainRegion.show(new ItemView());
						// App.showView('#main', new AboutView().render());
				},

				compositeView: function() {
						// App.showView('#main', new AboutView().render());
						App.mainRegion.show(new CompositeView());
				},

				collectionView: function() {
						// App.showView('#main', new AboutView().render());
						App.mainRegion.show(new CollectionView());
				}
		});

		return MarionetteController;
});
