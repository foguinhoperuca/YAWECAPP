YAWECAPP.AboutView = Backbone.View.extend({
    tagName: 'div',
    className: 'box',
    render: function() {
        var template = Mark.up(YAWECAPP.getTemplate('about'));

        $(this.el).html( template );
        return this;
    }
});
