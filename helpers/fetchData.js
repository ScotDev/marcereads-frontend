const CMS_ENDPOINT = process.env.CMS_ENDPOINT;

const fetchData = async (endpoint, populateAll, query, sort) => {

    let loading = false;
    let data = null;
    let error = null;
    let populateEveryField = populateAll ? "?populate=*" : null;
    try {

        try {
            loading = true;
            const response = await fetch(`${CMS_ENDPOINT}/${endpoint}${populateEveryField}`);
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