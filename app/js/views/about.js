define(
	['backbone',
	 'markup',
	 'app'
	],
	function (Backbone, Markup, App){
		var AboutView = Backbone.View.extend({
			tagName: 'div',
			className: 'box',
			render: function() {
				// FIXME use Markup (define) instead global Mark
				var template = Mark.up(App.getTemplate('about'));

				$(this.el).html( template );
				return this;
			}
		});

		return AboutView;
	}
);
