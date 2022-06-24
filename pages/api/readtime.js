
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
    // console.log(req.method)
    if (req.method === "POST") {
        const value = req.body.value

        try {
            const estimate = await getWordCount(value)
            await res.status(200).json({ estimate: estimate })
        } catch (err) {
            console.log(err)
            await res.json({ error: "Failed to calculate read time" })
        }
    } else {
        await res.status(400).json({ error: `Invalid request method: ${req.method}` })
    }
    // console.log("req", req.body.value)
    // const estimate = await getWordCount(req.body)
    // await res.status(200).json({ estimate: estimate || "2" })

}

