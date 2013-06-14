define([
		'marionette'
		, 'app'
		, 'collections/featured'
		, 'text!../../templates/featuredCarousel.tpl'
		, 'text!../../templates/featured.tpl'
], function (Marionette, App, FeaturedCollection, ItemViewTemplate, CompositeViewTemplate){
		var itemView = Marionette.ItemView.extend({
				template: ItemViewTemplate,
				tagName: 'div',
				className: 'item'

				, initialize: function() {
						console.log("template is item:");
						console.log(this.template);
				}

		});

		var CompositeView = Marionette.CompositeView.extend({
				template: CompositeViewTemplate,
				tagName: 'div',
				className: 'box',
				collection: new FeaturedCollection(),
				itemView: itemView,
				itemViewContainer: '#featuredCarousel',
				initialize: function() {
						var coll = new FeaturedCollection();
						console.log("initialize coll");
						console.log(coll);

						this.model = coll.at(0);
						console.log("model is:");
						console.log(this.model);

						console.log("template is:");
						console.log(this.template);
				}
				
		});

		return CompositeView;
});
