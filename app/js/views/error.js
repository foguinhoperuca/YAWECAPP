YAWECAPP.ErrorView = Backbone.View.extend({
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

	var template = YAWECAPP.getTemplate('error');
        var page = Mark.up(template, context);
        $(this.el).html(page);

        return this;
    }
});
