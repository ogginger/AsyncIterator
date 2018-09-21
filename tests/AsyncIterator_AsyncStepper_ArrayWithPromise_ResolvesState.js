//AsyncIterator_AsyncStepper_ArrayWithPromise_ResolvesState.js: Testing logic.

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
		"Name":"AsyncIterator_AsyncStepper_ArrayWithPromise_ResolvesState",
		"Input": new AsyncIterator({
			"Set": [ 1 ],
			"Function": function( Input ) {
				return promise(function( resolve ) {
					resolve( Input );
				});
			}
		}),
		"Function": function( Input ) {
			return promise(function( resolve ) {
				Input.AsyncStepper().then(function( State ) {
					resolve( State );
				});
			});
		},
		"ExpectedOutput": {"Set":[1],"Position":1,"Results":[1],"Errors":[],"Validation":[],"MustPassAll":false},
		"Comparator": {
			"Debug": false,
			"Object": true
		}
	};
});
