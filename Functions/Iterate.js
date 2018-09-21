//Iterate.js: Functional Logic.

define([
	"promise",
	"log"
], function(
	promise,
	log
) {
  return function( Input ) {
		var xAsyncIterator = this;
		return promise(function( resolve, reject ) {
			xAsyncIterator.AsyncStepper().then(function( State ) {
				xAsyncIterator.Iterate().then(function( State ) {
					resolve( State );
				}).catch(function( Error ) {
					reject( Error );
				});
			}).catch(function( Error ) {
				if ( Error.Message === "End of set." ) {
					resolve( xAsyncIterator );
				} else {
					reject( Error );
				}
			});
		});
  };
});
