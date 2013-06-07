define(
	['backbone',
	 'markup',
	 'app'
	],
	function (Backbone, Markup, App){
		var FeaturedView = Backbone.View.extend({
			tagName: 'div',
			className: 'box',
			render: function() {
				// var template = Mark.up( YAWECAPP.getTemplate('featured') );
				// $(this.el).html( template );
				// return this;

				// var data = this.collection.toJSON();
				// var featured = data[0];
				// var template = Mark.up(App.getTemplate("featured"), featured);
				var template = Mark.up(App.getTemplate("featured"));

				// $('.carousel').carousel();

				$(this.el).html(template);
				return this;
			}
		});

		return FeaturedView;
	}
);
