const qs = require('qs');

const CMS_ENDPOINT = process.env.CMS_ENDPOINT;

const fetchData = async (endpoint, ...args) => {

    let loading = true;
    let data = null;
    let error = null;
    let query;

    // paramaters/args situation is a bit crude and not explicit, this should be refactored later on
    //  for now, args[0] = isFeatured, args[1] = reviews, args[3] = guides

    // console.log("params: ", args[0], endpoint)

    const featuredQuery = qs.stringify({
        // populate: '*',
        // Default sort for all content is by creation date. If we implement client-side user filtering then this can be modified
        sort: ['createdAt:desc', 'isFeatured:desc'],
        filters: {
            isFeatured: {
                $eq: true
            }
        },
        pagination: {
            start: 0,
            limit: 1,
        },
    }, {
        encodeValuesOnly: true,
    });

    const reviewsQuery = qs.stringify({
        sort: ['createdAt:desc', 'isFeatured:desc'],
        filters: {
            type: {
                $eq: 'review'
            }
        },
        pagination: {
            start: 0,
            limit: 6,
        },
    }, {
        encodeValuesOnly: true,
    });

    const guidesQuery = qs.stringify({
        sort: ['createdAt:desc', 'isFeatured:desc'],
        filters: {
            type: {
                $eq: 'guide'
            }
        },
        pagination: {
            start: 0,
            limit: 6,
        },
    }, {
        encodeValuesOnly: true,
    });
    // const standardQuery = qs.stringify({
    //     sort: ['createdAt:desc', 'isFeatured:desc'],
    // }, {
    //     encodeValuesOnly: true,
    // });


    if (args.length == 0 || typeof args[0] == undefined) {
        // query = `&?${standardQuery}`;
        query = "";
    } else if (args.length == 1 && args[0] == true) {
        query = `&?${featuredQuery}`;
        // I will need to add pagination before release
    } else if (args.length == 2 && args[1] == true) {
        query = `&?${reviewsQuery}`;

    } else if (args.length == 3 && args[2] == true) {
        query = `&?${guidesQuery}`;
    }

    // console.log(query)

    // loading "state" does nothing here.

    try {
        loading = true;
        const response = await fetch(`${CMS_ENDPOINT}/${endpoint}?populate=*${query}`);
        let rawData = await response.json()
        data = rawData.data;
    } catch (err) {
        error = err;
    } finally {

        loading = false;
    }

    // console.log(endpoint, data)

    return { loading, data, error }
}

export default fetchData;