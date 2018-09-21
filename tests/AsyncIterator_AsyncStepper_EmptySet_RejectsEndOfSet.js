//AsyncIterator_AsyncStepper_EmptySet_RejectsEndOfSet.js: Testing logic.

define([
	"promise",
	"AsyncIterator",
	"bIsObjectEqual"
], function(
	promise,
	AsyncIterator,
	bIsObjectEqual
) {
	return {
		"Async": true,
		"Name":"AsyncIterator_AsyncStepper_EmptySet_RejectsEndOfSet",
		"Input": new AsyncIterator({
			"Set": []
		}),
		"Function": function( Input ) {
			return promise(function( resolve ) {
				var bThrewError = true;
				Input.AsyncStepper().catch(function( Error ) {
					if (
						bIsObjectEqual({
							"Comparator": Error,
							"Comparand": {
								"Message": "End of set."
							}
						})
					) {
						bThrewError = true
					}
				}).finally(function() {
					resolve( bThrewError );
				});
			});
		},
		"ExpectedOutput": true,
		"Comparator": {
			"Debug": false,
			"Object": true
		}
	};
});
