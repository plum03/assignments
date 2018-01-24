module.exports = () => {
    json: () => {
        return (req, res, next) => {
            req.body = JSON.stringify("data");
            next();
        }
    },
    xml: () => {
        // incomplete code - for illustrating middleware concepts only - NOT a comprehensive overview
    }
}
