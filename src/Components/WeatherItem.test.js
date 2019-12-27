
describe('WeatherItem', () => {
    // Tell Jest wo wait until the done callback is called before finishing the test
    it('fetches data from server when server returns a successful response', done => {
        // eslint-disable-next-line no-unused-vars
        const api_call = fetch(`https://openweathermap.org/current`);

        const mockSuccessResponse = {};
        // Promise.resolve the test to a mockSuccessResponse object
        const mockJsonPromise = Promise.resolve(mockSuccessResponse);
        const mockFetchPromise = Promise.resolve({
            json: () => mockJsonPromise,
        });
        // Spy on window.fetch and mock it’s implementation to return the Promise object described
        jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
        // Clear tht mock
        global.fetch.mockClear();
        // Invoke done to tell jest that the test is complete
        done();

    });
});