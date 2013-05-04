YAWECAPP.GenericCollection = Backbone.Collection.extend({

    url: "data/generic.json",

    initialize: function() {
	this.fetch({async: false});
    },

    parse: function(data) {
	return data.featured;
    }
});
