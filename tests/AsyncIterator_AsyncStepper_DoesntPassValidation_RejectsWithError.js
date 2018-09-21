//AsyncIterator_AsyncStepper_DoesntPassValidation_RejectsWithError.js: Testing logic.

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
		"Name":"AsyncIterator_AsyncStepper_DoesntPassValidation_RejectsWithError",
		"Input": new AsyncIterator({
			"Set": [ 1 ],
			"Function": function( Input ) {
				return promise(function( resolve ) {
					resolve( Input );
				});
			},
			"Validation": [
				function( Input ) {
					throw { "Message": "Error" };	
				}
			]
			
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
			"Debug": false,
			"Object": false
		}
	};
});
