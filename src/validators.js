(function(exports) {
	'use strict';


	// all validators return either true or false
	// true if they pass
	// false if they don't
	exports.validators = {
		// returns true if val is a string
		// returns false for anything else
		isString: function(val) {
			return typeof val === 'string' ? true : false;
		},
		// returns true if any value is provided
		// returns false if null or undefined is given
		required: function(val) {
			return (val !== null && val !== undefined) ? true : false;
		},
		lengthAtLeast: function(val, targetLength) {
			return val.length >= targetLength;
		},
		lengthAtMost: function(val, targetLength) {
			return val.length <= targetLength;
		}

	};
})(this);