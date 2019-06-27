//testsuite.js: Testing Logic.

define([
  "promise",
  "TestSuite",
  "log",
  "AsyncIterator",
	"tests/AsyncIterator_AsyncStepper_ArrayWithPromise_ResolvesState",
	"tests/AsyncIterator_AsyncStepper_EmptySet_RejectsEndOfSet",
	"tests/AsyncIterator_AsyncStepper_ArrayWithRejectingPromise_ResolvesStateWithError",
	"tests/AsyncIterator_AsyncStepper_ArrayWithRejectingPromiseAndResolvingPromise_ResolvesStateWithResultAndError",
	"tests/AsyncIterator_Iterate_ArrayWithPromises_ResolvesStateWithResults",
	"tests/AsyncIterator_Iterate_ArrayWithPassingAndRejectingPromises_ResolvesStateWithResultsAndErrors",
	"tests/AsyncIterator_Iterate_ArrayWithRejectingPromises_ResolvesStateWithErrors",
	"tests/AsyncIterator_AsyncStepper_DoesntPassValidation_RejectsWithError",
	"tests/AsyncIterator_AsyncStepper_MustPassTrue_PromiseFails_RejectsWithError",
	"tests/AsyncIterator_Iterate_MustPassAllTrue_FirstPromisePassesSecondPromiseFails_RejectsError",
	"tests/AsyncIterator_Iterate_DoesntPassValidation_RejectsError"
], function(
  promise,
  TestSuite,
  log,
  AsyncIterator,
	AsyncIterator_AsyncStepper_ArrayWithPromise_ResolvesState,
	AsyncIterator_AsyncStepper_EmptySet_RejectsEndOfSet,
	AsyncIterator_AsyncStepper_ArrayWithRejectingPromise_ResolvesStateWithError,
	AsyncIterator_AsyncStepper_ArrayWithRejectingPromiseAndResolvingPromise_ResolvesStateWithResultAndError,
	AsyncIterator_Iterate_ArrayWithPromises_ResolvesStateWithResults,
	AsyncIterator_Iterate_ArrayWithPassingAndRejectingPromises_ResolvesStateWithResultsAndErrors,
	AsyncIterator_Iterate_ArrayWithRejectingPromises_ResolvesStateWithErrors,
	AsyncIterator_AsyncStepper_DoesntPassValidation_RejectsWithError,
	AsyncIterator_AsyncStepper_MustPassTrue_PromiseFails_RejectsWithError,
	AsyncIterator_Iterate_MustPassAllTrue_FirstPromisePassesSecondPromiseFails_RejectsError,
	AsyncIterator_Iterate_DoesntPassValidation_RejectsError
) {
  return TestSuite.extend({
    "initialize": function() {
      log("testsuite initialized successfully!");
      var xTestSuite = this;
      xTestSuite.set( "MethodUnderTest", "AsyncIterator" );

	/*AsyncStepper
        xTestSuite.add( AsyncIterator_AsyncStepper_ArrayWithPromise_ResolvesState ); 
	xTestSuite.add( AsyncIterator_AsyncStepper_EmptySet_RejectsEndOfSet );
	xTestSuite.add( AsyncIterator_AsyncStepper_ArrayWithRejectingPromise_ResolvesStateWithError );
	xTestSuite.add( AsyncIterator_AsyncStepper_ArrayWithRejectingPromiseAndResolvingPromise_ResolvesStateWithResultAndError );
	xTestSuite.add( AsyncIterator_AsyncStepper_DoesntPassValidation_RejectsWithError );
	xTestSuite.add( AsyncIterator_AsyncStepper_MustPassTrue_PromiseFails_RejectsWithError );
	///

	///Iterate
	xTestSuite.add( AsyncIterator_Iterate_ArrayWithPromises_ResolvesStateWithResults );
	xTestSuite.add( AsyncIterator_Iterate_ArrayWithPassingAndRejectingPromises_ResolvesStateWithResultsAndErrors );
	xTestSuite.add( AsyncIterator_Iterate_ArrayWithRejectingPromises_ResolvesStateWithErrors );
	xTestSuite.add( AsyncIterator_Iterate_MustPassAllTrue_FirstPromisePassesSecondPromiseFails_RejectsError );
	xTestSuite.add( AsyncIterator_Iterate_DoesntPassValidation_RejectsError );
	//*/	
	
	xTestSuite.test();
    }	
  });
});
