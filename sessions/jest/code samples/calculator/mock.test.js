function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
        callback(items[index]);
    }
}

describe('Testing mock functionality', () => {
        test('testing the mock one', () => {
        const mockCallback = jest.fn();
        forEach([0, 1], mockCallback);

        // The mock function is called twice
        expect(mockCallback.mock.calls.length).toBe(2);

        // The first argument of the first call to the function was 0
        expect(mockCallback.mock.calls[0][0]).toBe(0);

        // The first argument of the second call to the function was 1
        expect(mockCallback.mock.calls[1][0]).toBe(1);


    });


    /*
     *
     // The function was called exactly once
     expect(someMockFunction.mock.calls.length).toBe(1);

     // The first arg of the first call to the function was 'first arg'
     expect(someMockFunction.mock.calls[0][0]).toBe('first arg');

     // The second arg of the first call to the function was 'second arg'
     expect(someMockFunction.mock.calls[0][1]).toBe('second arg');

     // This function was instantiated exactly twice
     expect(someMockFunction.mock.instances.length).toBe(2);

     // The object returned by the first instantiation of this function
     // had a `name` property whose value was set to 'test'
     expect(someMockFunction.mock.instances[0].name).toEqual('test');
     *
     *
     * */


    /*
     *
     * const myMock = jest.fn();
     console.log(myMock());
     // > undefined

     myMock.mockReturnValueOnce(10)
     .mockReturnValueOnce('x')
     .mockReturnValue(true);

     console.log(myMock(), myMock(), myMock(), myMock());
     // > 10, 'x', true, true
     *
     * */

    /*
     *
     * const myMockFn = jest.fn(cb => cb(null, true));

     myMockFn((err, val) => console.log(val));
     // > true

     myMockFn((err, val) => console.log(val));
     // > true
     * */


    /*
     *
     * // foo.js
     module.exports = function() {
     // some implementation;
     };

     // test.js
     jest.mock('../foo'); // this happens automatically with automocking
     const foo = require('../foo');

     // foo is a mock function
     foo.mockImplementation(() => 42);
     foo();
     // > 42
     *
     * */

});
