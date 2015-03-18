var assert = chai.assert;

describe('Math operations', function () {
    describe('+', function () {
        it('should add up two numbers to be the sum of each other', function () {
            // exercise the targeted function
            var sum = 4 + 3;
            // assert that it worked
            assert.equal(sum, 7);
        });

        it('shouldn\'t change a value if you are adding 0 ' , function () {
            var sum = 3 + 0;

            assert.equal(sum, 3);
        });
    });
});