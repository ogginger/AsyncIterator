//AsyncIterator_AsyncStepper_MustPassAllTrue_PromiseFails_RejectsWithError.js: Testing logic.

define([
	"AsyncIterator",
	"promise",
	"log"
], function(
	AsyncIterator,
	promise,
	log
) {
	return {
		"Async": true,
		"Name":"AsyncIterator_AsyncStepper_MustPassAllTrue_PromiseFails_RejectsWithError",
		"Input": new AsyncIterator({
			"Set": [ 1 ],
			"Function": function( Input ) {
				return promise(function( resolve, reject ) {
					reject({
						"Data": Input,
						"Message": "Error"
					});
				});
			},
			"MustPassAll": true
		}),
		"Function": function( Input ) {
			return promise(function( resolve ) {
				var bThrewError = false;
				
				Input.AsyncStepper().catch(function( Error ) {
					if ( Error.Error.Message === "Error" ) {
						bThrewError = true;
					}
				}).finally(function() {
					resolve( bThrewError );
				});
			});
		},
		"ExpectedOutput": true,
		"Comparator": {
			"Debug": false
		} 
	};
});
