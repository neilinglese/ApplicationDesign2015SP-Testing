var assert = chai.assert;

describe('validators', function () {
	
	// write some tests!
		describe('.isString()', function () {
			it('should be true if passed a string', function () {
				assert.isTrue(validators.isString("words"));
			});
				it('should be false if not passed be a string', function () {
				assert.isFalse(validators.isString(0));
			});
		});
		
		describe('.required()', function () {
			it('should be true if passed a non null var', function () {
				assert.isTrue(validators.required("words"));
			});
				it('should be false if not passed anything', function () {
				assert.isFalse(validators.required());
			});
		});
		
		describe('.lengthAtLeast()', function () {
			it('should be true if  string is greater then number passed', function () {
				assert.isTrue(validators.lengthAtLeast("words",5));
			});
				it('should be false if not string is less then number passed', function () {
				assert.isFalse(validators.lengthAtLeast("words",7));
			});
		});
		
		describe('.lengthAtMost()', function () {
			it('should be true if  string is less then then number passed', function () {
				assert.isTrue(validators.lengthAtMost("words",5));
			});
				it('should be false if not string is greater then number passed', function () {
				assert.isFalse(validators.lengthAtMost("words",4));
			});
		});
		
});
