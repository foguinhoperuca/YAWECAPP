YAWECAPP.FeaturedCollection = Backbone.Collection.extend({

    url: "data/featured.json",

    initialize: function() {
	this.fetch({async: false});
    },

    parse: function(data) {
	return data.featured;
    }
});
