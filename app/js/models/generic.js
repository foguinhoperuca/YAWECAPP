YAWECAPP.GenericModel = Backbone.Model.extend({
    // defaults: {
    //     id: null,
    //     name: null,
    // 	cpf: null,
    // 	dateConfirmation: null
    // }

    initialize: function(params) {
	// this.url = "http://admin.micasa.localhost/micasa-admin-backend/pessoa/" + params.cpf;
	// this.url = "http://pms-165297/micasa-admin-backend/pessoa/" + params.cpf;
	// this.url = YAWECAPP.getBaseURL() + "pessoa/" + params.cpf + "/casamento";
	this.url = YAWECAPP.getBaseURL() + "generic/";
    }
});
