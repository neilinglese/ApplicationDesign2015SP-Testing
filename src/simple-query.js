(function(exports) {
	'use strict';

	// Your task is to ditch the jQuery from here and just use pure javascript.
	// I'd recommend the Mozilla Web API Docs for Element (and google of course)
	// https://developer.mozilla.org/en-US/docs/Web/API/Element

	exports.simpleQuery = {
		addClass: function(element, className) {
			element.classList.add(className)
		},
		removeClass: function(element, className) {
			element.classList.remove(className)
		},
		toggleClass: function(element, className) {
			element.classList.toggle(className)
		},
		css: function() {
			// read about the arguments object in javascript, very handy....
			// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
			//var args = Array.prototype.slice.call(arguments);
			var element = arguments[0];
			switch(arguments.length) {
				case 2: 
				var styles = arguments[1];
					for (var prop in styles)
					{
						console.log(prop);
						element.style[prop] = styles[prop];
					}
					
					
					break;
				case 3:
					element.style[arguments[1]] = arguments[2];
					break;
				default:
					throw 'simpleQuery.css() called with bad arguments';
			}
		}

	};
})(this);