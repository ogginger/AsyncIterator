//AsyncIterator_Iterate_ArrayWithRejectingPromises_ResolvesStateWithErrors.js: Testing logic.

define([
	"AsyncIterator",
	"promise"
], function(
	AsyncIterator,
	promise
) {
	return {
		"Async": true,
		"Name":"AsyncIterator_Iterate_ArrayWithRejectingPromises_ResolvesStateWithErrors",
		"Input": new AsyncIterator({
			"Set": [ 1,2,3 ],
			"Function": function( Input ) {
				return promise(function( resolve, reject ) {
					reject( Input );
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
		"ExpectedOutput": {"Set":[1,2,3],"Position":3,"Results":[],"Errors":[{"Position":0,"Error":1},{"Position":1,"Error":2},{"Position":2,"Error":3}],"Validation":[],"MustPassAll":false},
		"Comparator": {
			"Object": true,
			"Debug": false
		}
	};
});
