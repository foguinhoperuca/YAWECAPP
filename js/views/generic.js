YAWECAPP.GenericView = Backbone.View.extend({
    tagName: 'div',
    className: 'box',

    render: function(tpl) {
	if (tpl == undefined)
	    this.navigate("error", {trigger: true});

        var template = Mark.up(YAWECAPP.getTemplate(tpl));
        $(this.el).html(template);

        return this;
    },

    events: {
	'click #btnSearch': 'search'
    },

    // TODO move it to generic model.
    search: function(ev) {
	ev.preventDefault();
	
	// var cpf = $('#inputSearch').val();

	// var person = new YAWECAPP.PersonManagementModel({cpf: cpf});
	// person.fetch({async: false});

	// console.log(person);
	// var template;
	// if (!person.get("message")) {
	//     var temp = person.get("dateConfirmation")['$'].split(' ');
	//     var dateConfirmation = temp[0].split('-');
	//     dateConfirmation = dateConfirmation[2] + "/" + dateConfirmation[1] + "/" + dateConfirmation[0];
	//     var time = temp[1].split('.');

	//     person.set("date", dateConfirmation);
	//     person.set("time", time[0]);

	//     template = Mark.up(YAWECAPP.getTemplate("person/search"), person.toJSON());
	// } else {
	//     template = '<div class="alert alert-warning">' + person.get("message") + '</div>';
	// }
        // $('#divSearch').html( template );
    }    
});
