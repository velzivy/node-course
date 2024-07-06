module.exports = (req, res) => {
    const parseUrl = new URL(req.url)
    console.log(parseUrl)
}