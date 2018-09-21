//AsyncIterator_Iterate_MustPassAllTrue_FirstPromisePassesSecondPromiseFails_RejectsError.js: Testing logic.

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
		"Name":"AsyncIterator_Iterate_MustPassAllTrue_FirstPromisePassesSecondPromiseFails_RejectsError",
		"Input": new AsyncIterator({
			"Set": [ true, false ],
			"Function": function( Input ) {
				return promise(function( resolve, reject ) {
					if ( Input ) {
						resolve( Input );
					} else {
						reject({
							"Data": Input,
							"Message": "Error"
						});
					}
				});
			},
			"MustPassAll": true 
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
		"ExpectedOutput": true,
		"Comparator": {
			"Object": false,
			"Debug": false
		}
	};
});
