var assert = chai.assert;

/*

Do not edit any of the tests, your only job is to remove any jQuery functionality
from src/simple-query.js and have these tests still be passing

*/

describe('simpleQuery', function () {
	describe('.addClass(element, class)', function () {
		it('should add the specified class to the passed in element', function () {
			var element = document.createElement('div');
			simpleQuery.addClass(element, 'big-and-shiny');
			
			assert.isTrue($(element).hasClass('big-and-shiny'));
		});
	});

	describe('.removeClass(element, class)', function () {
		it('should remove the specified class from the passed in element', function () {
			var element = document.createElement('div');
			$(element).addClass('boring')
			simpleQuery.removeClass(element, 'boring');

			assert.isFalse($(element).hasClass('boring'));
		});	
	});
	
	
	describe('.toggleClass(element, class)', function () {
		it('should add a class if it isn\'t on the element', function () {
			var element = document.createElement('div');
			simpleQuery.toggleClass(element, 'looks-sweet');

			assert.isTrue($(element).hasClass('looks-sweet'));
		});

		it('should remove it class if the element has it already', function () {
			var element = document.createElement('div');
			$(element).addClass('shiny');
			simpleQuery.toggleClass(element, 'shiny');

			assert.isFalse($(element).hasClass('shiny'));
		});

		it('shouldn\'t effect other classes already there', function () {
			var element = document.createElement('div');
			$(element).addClass('fancy');
			$(element).addClass('shiny');
			simpleQuery.toggleClass(element, 'shiny');

			assert.isFalse($(element).hasClass('shiny'));
			assert.isTrue($(element).hasClass('fancy'));
		});
	});

	describe('.css(element, cssProperty, cssValue)', function () {
		it('should set the css on the element', function () {
			var element = document.createElement('div');
			
			simpleQuery.css(element, 'height', '100px');

			assert.equal($(element).css('height'), '100px');
		});
	});

	describe('.css(element, {cssProperty: cssValue, cssProperty: cssValue})', function () {
		it('should set all of the properties specified in the object', function () {
			var element = document.createElement('div');

			simpleQuery.css(element, {
				'background-color': 'red',
				'height': '100px',
				'display': 'inline'
			});

			assert.equal($(element).css('height'), '100px');
			assert.equal($(element).css('background-color'), 'red');
			assert.equal($(element).css('display'), 'inline');
		});
	});
});
