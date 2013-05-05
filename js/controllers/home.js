YAWECAPP.HomeController = Backbone.Router.extend({
    routes: {
        '': 'index',
	'about': 'about',
	'error': 'error',
	'featured': 'featured',
	'generic': 'generic'
    },

    index: function() {
        this.navigate("about", {trigger: true});
    },

    about: function() {
	YAWECAPP.showView('#main', new YAWECAPP.AboutView().render());
    },

    error: function() {
	YAWECAPP.showView('#main', new YAWECAPP.ErrorView().render());
    },

    featured: function() {
	YAWECAPP.showView('#main', new YAWECAPP.FeaturedView({collection: YAWECAPP.featuredCollection}).render());
    },

    generic: function() {
	var tpl = 'generic';
	YAWECAPP.showView('#main', new YAWECAPP.GenericView()).render(tpl);

	// var resultado = MICASAAdminApp.getResultado();
	// console.log("resultado controller is:");
	// console.log(resultado);
	// var model = MICASAAdminApp.PainelModel;

        // if (resultado == undefined) {
	//     this.navigate("error", {trigger: true});
        // } else {
	//     MICASAAdminApp.showView('#main', new MICASAAdminApp.PainelView({ collection: resultado, model: model }).render());
        // }
    }
});
