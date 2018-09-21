//build.js: Configuration file for optimizing the AsyncIterator function. 
/*
*/ 
({
    paths: {
	"jquery": "empty:",
	"underscore": "lib/underscore.min",
	"backbone": "lib/backbone.min",
	"rsvp": "lib/rsvp.min",
	"promise": "lib/promise.min",
	"log": "lib/log.min",
	"AsyncValidate": "lib/async_validate.min",
	"validate": "lib/validate.min",
	"AsyncStepper": "Functions/AsyncStepper",
	"Iterate": "Functions/Iterate"
	
    },
    exclude: [ 
	"log", 
	"rsvp", 
	"promise", 
	"backbone", 
	"underscore", 
	"jquery",
	"AsyncValidate",
	"validate" 
    ],
    name: "AsyncIterator",
    out: "async_iterator.min.js"
})
