define(
	['backbone',
	 'markup',
	 'app'
	],
	function (Backbone, Markup, App){
		var ErrorView = Backbone.View.extend({
			tagName: 'div',
			className: 'box',
			render: function() {
				var numberMemes = 10;
				var random = Math.floor((Math.random() * numberMemes) + 1);
				var context = {
					image: {
						number: random
					}
				};

				var template = App.getTemplate('error');
				// FIXME use Markup (define) instead global Mark
				var page = Mark.up(template, context);
				$(this.el).html(page);

				return this;
			}
		});

		return ErrorView;
	}
);
