//AsyncIterator_AsyncStepper_ArrayWithRejectingPromises_ResolvesStateWithError.js: Testing logic.

define([
	"AsyncIterator",
	"promise"
], function(
	AsyncIterator,
	promise
) {
	return {
		"Async": true,
		"Name":"AsyncIterator_AsyncStepper_ArrayWithRejectingPromises_ResolvesStateWithError",
		"Input": new AsyncIterator({
			"Set": [ 1 ],
			"Function": function( Input ) {
				return promise(function( resolve, reject ) {
					reject({ "Message": "Error" });
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
		"ExpectedOutput": {"Set":[1],"Position":1,"Results":[],"Errors":[{"Position":0,"Error":{"Message":"Error"}}],"Validation":[],"MustPassAll":false},
		"Comparator": {
			"Debug": false,
			"Object": true
		}
	};
});
