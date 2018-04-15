//This Google Data Studio Community Connector uses API from Fixer.io (http://fixer.io/) to fetch exchange rates.
//Rates are quoted against the Euro by default. Quote against a different currency by setting the Base Currency in 
//your configuration while setting it up with Data Studio.


function getConfig(request) {
    return {
        'configParams': [
            {
                type: 'INFO',
                name: 'Base_Currency_Info',
                text: 'By default Euro is the Base Currency to compare other currencies with.'
            },
            {
                'type': 'SELECT_SINGLE',
                'name': 'BASE_CURRENCY',
                'displayName': 'Select Base Currency:',
                'helpText': 'Select the Base Currency for comparison.',
                'options': [
                    {label: 'Australian Dollar', value: 'AUD'},
                    {label: 'Bulgarian Lev', value: 'BGN'},
                    {label: 'Canadian Dollar', value: 'CAD'},
                    {label: 'Swiss Franc', value: 'CHF'},
                    {label: 'Euro', value: 'EUR'},
                    {label: 'US Dollar', value: 'USD'}
                ]
            },
            {
                'type': 'SELECT_MULTIPLE',
                'name': 'INTERESTING_CURRENCIES',
                'displayName': 'Select Currencies to compare:',
                'helpText': 'Select the list of Currencies you want to compare.',
                'options': [
                    {label: 'Australian Dollar', value: 'AUD'},
                    {label: 'Bulgarian Lev', value: 'BGN'},
                    {label: 'Canadian Dollar', value: 'CAD'},
                    {label: 'Swiss Franc', value: 'CHF'},
                    {label: 'Euro', value: 'EUR'},
                    {label: 'US Dollar', value: 'USD'}
                ]
            }
        ]
    };
}

var FixerIODataSchema = [
    // The schema for the given request, providing information on the organization and type of data.
    {
        name: 'date',
        label: 'Date',
        dataType: 'STRING',
        semantics: {conceptType: 'DIMENSION'}
    },
    {
        name: 'AUD',
        label: 'Australian Dollar',
        dataType: 'NUMBER',
        semantics: {conceptType: 'DIMENSION'}
    },
    {
        name: 'BGN',
        label: 'Bulgarian Lev ',
        dataType: 'NUMBER',
        semantics: {conceptType: 'DIMENSION'}
    },
    {
        name: 'CAD',
        label: 'Canadian Dollar',
        dataType: 'NUMBER',
        semantics: {conceptType: 'DIMENSION'}
    },
    {
        name: 'CHF',
        label: 'Swiss Franc',
        dataType: 'NUMBER',
        semantics: {conceptType: 'DIMENSION'}
    },
    {
        name: 'EUR',
        label: 'Euro',
        dataType: 'NUMBER',
        semantics: {conceptType: 'DIMENSION'}
    },
    {
        name: 'USD',
        label: 'US Dollar',
        dataType: 'NUMBER',
        semantics: {conceptType: 'DIMENSION'}
    }
];

function getSchema(request) {
    var baseCurrency = request.configParams['BASE_CURRENCY'] || 'EUR';
    var listOfCurrencies = request.configParams['INTERESTING_CURRENCIES'].split(',');

    //Adjusting the schema as per the configurations set by user
    FixerIODataSchema = FixerIODataSchema.map(function (i) {
        if (i.name === baseCurrency) {
            i['semantics'] = {
                conceptType: 'METRIC',
                isReaggregatable: true
            };
        }
        return i;
    });

    // Filtering currencies picked by user using multi-select and base currency options
    FixerIODataSchema = FixerIODataSchema.filter(function (i) {
        if (listOfCurrencies.indexOf(i.name) > -1 || i.name === baseCurrency) {
            return i;
        }
    });

    return {
        schema: FixerIODataSchema
    };
}

function getData(request) {
    var baseCurrency = request.configParams['BASE_CURRENCY'] || 'EUR';

    // Prepare the schema for the fields requested.
    var dataSchema = [];
    dataSchema = request.fields.map(function (i) {
        var item = FixerIODataSchema.filter (function (j) {
            if (i.name === j.name) {
                return j;
            }
        });
        return item[0];
    });

    // Fetch the data
    var response = JSON.parse(makeRequest(baseCurrency));

    // Prepare the tabular data.
    var rows = makeTabularData(response, dataSchema, baseCurrency);

    // Return the tabular data for the given request.
    return {
        schema: dataSchema,
        rows: rows
    };
}

function makeRequest(baseCurrency) {
    // Fetch the data with UrlFetchApp, e.g.:
    var url = 'http://api.fixer.io/latest?base=' + baseCurrency;
    return UrlFetchApp.fetch(url);
}

function makeTabularData(responseData, schema, baseCurrency) {
    var data = [], values = [], rates = responseData['rates'];
    values = schema.map(function (field) {
        switch (field.name) {
            case 'date':
                return responseData['date'];
            case 'AUD':
                if (baseCurrency === 'AUD') return 1;
                else return rates['AUD'];
            case 'BGN':
                if (baseCurrency === 'BGN') return 1;
                else return rates['BGN'];
            case 'CAD':
                if (baseCurrency === 'CAD') return 1;
                else return rates['CAD'];
            case 'CHF':
                if (baseCurrency === 'CHF') return 1;
                else return rates['CHF'];
            case 'EUR':
                if (baseCurrency === 'EUR') return 1;
                else return rates['EUR'];
            case 'USD':
                if (baseCurrency === 'USD') return 1;
                else return rates['USD'];
            default:
                return '';
        }
    });
    data.push({
        values: values
    });
    return data;
}

function getAuthType() {
    // Returns the authentication method required.
    return {
        'type': 'NONE'
    };
}
