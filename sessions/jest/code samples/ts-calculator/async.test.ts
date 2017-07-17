/**
 * Created by abdulmoiz on 7/2/2017.
 */
function fetchData(callback){
    setTimeout(() => callback('some other data'), 200);
}
describe('wrong async testing', () => {
    // Don't do this! (Buggy One)
    test('the data is some data', () => {
        function callback(data) {
            expect(data).toBe('some data');
        }
        fetchData(callback);
    });
});
/*

describe.skip('correct async testing', () => {
    //Correct one
    test('the data is some data', done => {
        function callback(data) {
            expect(data).toEqual('some data');
            done();
        }

        fetchData(callback);
    });
});

describe('Testing promises', () => {
    function fetchData(resourceId){
        return new Promise((resolve, reject) => {
            const idMapping = {666: 'some resource'};// dummy available resources
            setTimeout(
                () => idMapping[resourceId] ? resolve(idMapping[resourceId]) : reject({
                    error: 'error: Resource not found!'
                }),
                200
            );
        });
    }
    test('should resolve promise with data', () => {
        expect.assertions(2);
        return expect(fetchData(666)).resolves.toBe('some resource');
    });
    test('should rejects promise with error', () => {
        expect.assertions(1);
        return expect(fetchData()).rejects.toMatchObject({"error": "error: Resource not found!"});
    });
    test('should resolve promise with data', async () => {
        expect.assertions(1);
        const data = await fetchData(666);
        expect(data).toBe('some resource');
    });
    test('the fetch fails with an error', async () => {
        expect.assertions(1);
        try {
            await fetchData();
        } catch (e) {
            expect(e).toMatchObject({"error": "error: Resource not found!"});
        }
    });
});*/
