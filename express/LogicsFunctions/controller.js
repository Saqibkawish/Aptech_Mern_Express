let Index = async function (res, res) {
    res.send("<h1>Index Page</h1>");
    res.end();
}

let About = async function (res, res) {
    res.send("<h1>About Us Page</h1>");
    res.end();
}

let Contact = async function (res, res) {
    res.send("<h1>Contact Us Page</h1>");
    res.end();
}
let Service = async function (res, res) {
    res.send("<h1>Service Page</h1>");
    res.end();
}

module.exports = {
    Index,
    About,
    Contact,
    Service
};