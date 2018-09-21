//AsyncIterator_AsyncStepper.js: Data logic.

define([
	"promise",
	"AsyncValidate",
	"log"
], function(
	promise,
	AsyncValidate,
	log
) {
  return function() {
    var xAsyncIterator = this;
    return promise(function( resolve, reject ) {

	var bResolved = false;
	var nPosition = xAsyncIterator.get("Position");
	var xSet = xAsyncIterator.get("Set");
	var xFunction = xAsyncIterator.get("Function");
	var xResults = xAsyncIterator.get("Results");
	var xErrors = xAsyncIterator.get("Errors"); 
	var xValidation = xAsyncIterator.get("Validation");

	if ( nPosition >= xSet.length ) {
		reject({ "Message": "End of set." });
	} else {
		xFunction( xSet[nPosition] ).then(function( Result ) {
			bResolved = true;
			xResults.push( Result );
		}).catch(function( Error ) {
			xErrors.push({
				"Position": nPosition,
				"Error": Error
			});
		}).finally(function() {
			if ( bResolved ) {
				AsyncValidate({
					"Data": xResults[xResults.length - 1],
					"Validation": xValidation
				}).then(function() {
					xAsyncIterator.set( "Position", nPosition + 1 );
					resolve( xAsyncIterator );
				}).catch(function( Error ) {
					reject({
						"Position": nPosition,
						"Result": xResults[xResults.length - 1],
						"Error": Error
					});
				});
			} else if ( xAsyncIterator.get("MustPassAll") === true ) {
				reject( xErrors[xErrors.length - 1] );
			} else {
				xAsyncIterator.set( "Position", nPosition + 1 );
                            	resolve( xAsyncIterator );
			}
		});	
	}
    });
  };
});

