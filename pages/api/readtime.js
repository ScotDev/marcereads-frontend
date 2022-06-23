
const getWordCount = async (articleBody) => {
    const avgWordsPerMinute = 265;
    let readTimeEstimate;
    const words = articleBody.split(" ");
    let totalWordCount = words.length;

    let minutes;

    if (!articleBody) {
        minutes = 0
    } else if (totalWordCount <= avgWordsPerMinute) {
        minutes = 2;
    } else {
        minutes = totalWordCount / avgWordsPerMinute;
    }

    const formattedMinutes = minutes.toFixed(0)

    if (minutes === 0) {
        readTimeEstimate = false;
    } else {
        readTimeEstimate = formattedMinutes.toString()
    }

    return readTimeEstimate;
}


export default async function handler(req, res) {
    const estimate = await getWordCount(req.body)
    await res.status(200).json({ estimate: estimate })
}

