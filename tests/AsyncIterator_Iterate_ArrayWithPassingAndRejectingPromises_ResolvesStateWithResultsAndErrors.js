//AsyncIterator_Iterate_ArrayWithPassingAndRejectingPromises_ResolvesStateWithResultsAndErrors.js: Testing logic.

define([
	"AsyncIterator",
	"promise"
], function(
	AsyncIterator,
	promise
) {
	return {
		"Async": true,
		"Name":"AsyncIterator_Iterate_ArrayWithPassingAndRejectingPromises_ResolvesStateWithResultsAndErrors",
		"Input": new AsyncIterator({
			"Set": [ true, false, true ],
			"Function": function( Input ) {
				return promise(function( resolve, reject ) {
					if ( Input ) {
						resolve( Input );
					} else {
						reject( Input );
					}
				});
			}
		}),
		"Function": function( Input ) {
			return promise(function( resolve ) {
				Input.Iterate().then(function( State ) {
					resolve( State );
				});
			});
		},
		"ExpectedOutput": {"Set":[true,false,true],"Position":3,"Results":[true,true],"Errors":[{"Position":1,"Error":false}],"Validation":[],"MustPassAll":false},
		"Comparator": {
			"Debug": false,
			"Object": true
		}
	};
});
