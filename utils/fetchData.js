const qs = require('qs');

const CMS_ENDPOINT = process.env.CMS_ENDPOINT;

const fetchData = async (endpoint, params) => {

    let loading = false;
    let data = null;
    let error = null;
    // let populateEveryField = populateAll ? "?populate=*" : null;

    let { populateAll, filter, sort, limit } = params;

    // extract populate all 
    // filters
    // sort
    // limit
    // to form query

    const parsedQuery = qs.stringify({
        populate: '*',
        sort: ['createdAt:desc'],
        filters: {
            isFeatured: {
                $eq: true
            }
        }
    }, {
        encodeValuesOnly: true,
    });

    try {

        try {
            loading = true;
            const response = await fetch(`${CMS_ENDPOINT}/${endpoint}?populate=*`);
            let rawData = await response.json()
            data = rawData.data;
        } catch (err) {
            error = err;
        }

    } finally {
        loading = false;
    }

    return { loading, data, error }
}

export default fetchData;