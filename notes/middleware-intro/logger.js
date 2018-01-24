module.exports = (req, res, next) => {
    console.log("logged on " + new Date().toLocaleTimeString());
    // call next to move onto next stage
    next();
}