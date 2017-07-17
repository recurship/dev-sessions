/**
 * Created by abdulmoiz on 7/2/2017.
 */
function fetchData(callback){
    setTimeout(() => callback('some data'), 200);
}


describe('wrong async testing', () => {
    // Don't do this! (Buggy One)
    test('the data is some data', () => {
        function callback(data) {
            expect(data).toBe('some other data');
        }
        fetchData(callback);
    });
});
describe('correct async testing', () => {
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
        return expect(fetchData(666)).resolves.toBe('some resource');
    });
    test('should rejects promise with error', () => {
        return expect(fetchData(0)).rejects.toMatchObject({"error": "error: Resource not found!"});
    });

    test('should resolve promise with data', async () => {
        const data = await fetchData(666);
        expect(data).toBe('some resource');
    });
    test('the fetch fails with an error', async () => {
        try {
            await fetchData();
        } catch (e) {
            expect(e).toMatchObject({"error": "error: Resource not found!"});
        }
    });
});
