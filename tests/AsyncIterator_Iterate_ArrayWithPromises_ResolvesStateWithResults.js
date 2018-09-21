//AsyncIterator_Iterate_ArrayWithPromises_ResolvesStateWithResults.js: Testing logic.

define([
	"AsyncIterator",
	"promise"
], function(
	AsyncIterator,
	promise
) {
	return {
		"Async": true,
		"Name":"AsyncIterator_Iterate_ArrayWithPromises_ResolvesStateWithResults",
		"Input": new AsyncIterator({
			"Set": [ 1, 2, 3 ],
			"Function": function( Input ) {
				return promise(function( resolve ) {
					resolve( Input );
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
		"ExpectedOutput": {"Set":[1,2,3],"Position":3,"Results":[1,2,3],"Errors":[],"Validation":[],"MustPassAll":false},
		"Comparator": {
			"Object": true,
			"Debug": false
		}
	};
});
