//AsyncIterator.js: Data logic.

define([
        "jquery",
        "underscore",
        "backbone",
        "log",
	"Functions/AsyncStepper",
	"Functions/Iterate"
], function(
        $,
        _,
        Backbone,
        log,
	AsyncStepper,
	Iterate
) {
        return Backbone.Model.extend({
                "initialize": function() {
			//log("AsyncIterator initialized successfully!");
                },

		defaults: function() {
			return {
				"Set": [],
				"Position": 0,
				"Results": [],
				"Errors": [],
				"Validation": [],
				"MustPassAll": false	
			};
		},

		"AsyncStepper": AsyncStepper,
		"Iterate": Iterate
        });
});

