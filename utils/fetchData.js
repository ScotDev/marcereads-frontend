const qs = require('qs');

const CMS_ENDPOINT = process.env.CMS_ENDPOINT;

const fetchData = async (endpoint, ...args) => {
    // console.log(args)

    let loading = true;
    let data = null;
    let metaData = {};
    let error = null;
    let query;
    let startPage;

    // paramaters/args situation is a bit crude and not explicit, this should be refactored later on
    //  for now, args[0] = isFeatured, args[1] = reviews, args[3] = guides

    const reviewsQuery = qs.stringify({
        sort: ['createdAt:desc', 'isFeatured:desc'],
        filters: {
            type: {
                $eq: 'review'
            }
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
    }, {
        encodeValuesOnly: true,
    });

    const standardQuery = qs.stringify({
        sort: ['createdAt:desc'],
        // pagination: {
        //     page: startPage,
        //     pageSize: 6,
        //     // limit: 6
        // },
    }, {
        encodeValuesOnly: true,
    });

    // Find better way to parse args
    if (args.length == 0 || typeof args[0] == undefined) {
        query = "";
        // query = "&?pagination[page]=1&pagination[pageSize]=6"
    } else if (args.length == 1 && typeof args[0] === "number") {
        console.log("standard")
        startPage = args[0]
        query = `&?${standardQuery}`;
    } else if (args.length == 2 && args[1] == true) {
        query = `&?${reviewsQuery}`;
    } else if (args.length == 3 && args[2] == true) {
        query = `&?${guidesQuery}`;
    }


    // loading "state" does nothing here.

    try {
        loading = true;
        const response = await fetch(`${CMS_ENDPOINT}/${endpoint}?populate=*${query}`);
        let rawData = await response.json()

        data = rawData.data;
        // maybe return just meta.pagination as object to be parsed further down
        metaData = rawData.meta.pagination
        // itemCount = rawData.meta.pagination.total;
        // currentPage = rawData.meta.pagination.page;
        // console.log(endpoint, rawData)

    } catch (err) {
        error = err;
        console.log(err)
    } finally {
        loading = false;
    }

    return { loading, data, metaData, error }
}

export default fetchData;


// redo queries to remove qs.