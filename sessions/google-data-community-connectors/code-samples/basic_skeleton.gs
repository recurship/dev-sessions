
function getConfig(request) {
    var config = {
        configParams: [
            // Any user configuration options for the connector.
        ]
    };
    return config;
}


var exampleSchema = [
    {
        // The schema for the given request, providing information on the organization and type of data.
    }
];

function getSchema(request) {
    return {schema: exampleSchema};
}


function getData(request) {

    // Fetch the data with UrlFetchApp, e.g.:
    var url = "https://example.com/api/";
    var response = UrlFetchApp.fetch(url);

    // Prepare the schema for the fields requested.
    // ...

    // Prepare the tabular data.
    // ...

    // Return the tabular data for the given request.
    return {
        schema: dataSchema,
        rows: data
    };
}


function getAuthType() {
    // Returns the authentication method required.
    var response = {
        "type": "NONE"
    };
    return response;
}