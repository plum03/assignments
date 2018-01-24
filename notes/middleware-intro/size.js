module.exports = (database) => {
    // add size property to res

    // returns a function that takes database as an arg
    // return statement is the middleware part of this function, module.exports is a wrapper (IN THIS EXAMPLE -- not always the case)
    return (req, res, next) => {
        res.size = database.length;
        next();
    }
}