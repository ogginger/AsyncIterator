//AsyncIterator_AsyncStepper_ArrayWithRejectingPromiseAndResolvingPromise_ResolveStateWithResultAndError.js: Testing logic.

define([
	"AsyncIterator",
	"promise"
], function(
	AsyncIterator,
	promise
) {
	return {
		"Async": true,
		"Name":"AsyncIterator_AsyncStepper_ArrayWithRejectingPromiseAndResolvingPromise_ResolveStateWithResultAndError",
		"Input": new AsyncIterator({
			"Set": [ 1, 2 ],
			"Function": function( Input ) {
				return promise(function( resolve, reject ) {
					if ( Input === 1 ) {
						resolve( true );
					} else {
						reject( false );
					}
				});
			}
		}),
		"Function": function( Input ) {
			return promise(function( resolve ) {
				Input.AsyncStepper().then(function( State ) {
					return State.AsyncStepper();
				}).then(function( State ) {
					resolve( State );
				});
			});
		},
		"ExpectedOutput": {"Set":[1,2],"Position":2,"Results":[true],"Errors":[{"Position":1,"Error":false}],"Validation":[],"MustPassAll":false},
		"Comparator": {
			"Debug": false,
			"Object": true
		}
	};
});
