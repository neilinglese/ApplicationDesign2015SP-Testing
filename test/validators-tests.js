var assert = chai.assert;

describe('validators', function () {
	
	describe('isString()', function () {
        it('should return true when passed a string', function () {
            assert.isTrue(validators.isString('osanetuha'));       
        });   

        it('should returnt false when passed a number', function () {
            assert.isFalse(validators.isString(234));
        });
    });

});
