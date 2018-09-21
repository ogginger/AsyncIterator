//AsyncIterator_Iterate_DoesntPassValidation_RejectsError.js: Testing logic.

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
		"Name":"AsyncIterator_Iterate_DoesntPassValidation_RejectsError",
		"Input": new AsyncIterator({
			"Set": [ true, false ],
			"Function": function( Input ) {
				return promise(function( resolve ) {
					resolve( Input );
				});
			},
			"Validation": [function( Input ) {
				if ( Input ) {
					return true;
				} else {
					throw { "Message": "Error" };
				}
			}]
		}),
		"Function": function( Input ) {
			return promise(function( resolve ) {
				var bThrewError = false;
				Input.Iterate().catch(function( Error ) {
					if ( Error.Error.Message === "Error" ) {
						bThrewError = true;
					}
				}).finally(function() {
					resolve( bThrewError );
				});
			});
			
		},
		"ExpectedOutput": true
	};
});
