
require("dotenv").config()
let http_module = require("http");

let { exec } = require("child_process");

let portNo = process.env.PORT

http_module.createServer(function (req, res) {
    if (req.url == "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(`
        <h1>Home Page</h1>
        <ul>
            <li><a href="/about">Go to About Us Page</a></li>
            <li><a href="/contact">Go to Contact Us Page</a></li>
            <li><a href="/blog">Go to Blog Page</a></li>
        </ul>
        `);
        res.end()
    } else if (req.url == "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(`
        <h1>About Page</h1>
        <ul>
            <li><a href="/">Go back to Home Page</a></li>
            <li><a href="/contact">Go to Contact Us Page</a></li>
            <li><a href="/blog">Go to Blog Page</a></li>
        </ul>
        `);
        res.end()
    } else if (req.url == "/contact") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(`
        <h1>Contact Page</h1>
        <ul>
            <li><a href="/">Go back to Home Page</a></li>
            <li><a href="/about">Go back to About Us Page</a></li>
            <li><a href="/blog">Go to Blog Page</a></li>
        </ul>
        `);
        res.end()
    } else if (req.url == "/blog") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(`
        <h1>Blog Page</h1>
        <ul>
            <li><a href="/">Go back to Home Page</a></li>
            <li><a href="/about">Go back to About Us Page</a></li>
            <li><a href="/contact">Go back to Contact Us Page</a></li>
        </ul>
        `);
        res.end()
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write(`
        <h1 style="color: red">Page Not Found</h1>
        `);
        res.end()
    }

    res.end()
}).listen(portNo, () => {
    console.log(`Server is running on port + http://localhost:${portNo}`)
    let url = `http://localhost:${portNo}`
    if (process.platform === "win32") {
        exec(`start ${url}`)
    }
})