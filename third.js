const http = require("http")
const fs = require("fs")

const requestListener = async (req, res) => {
    if (req.url === "/") {
        fs.readFileSync("index.html", "utf8").then((contents) => {
            const dateString = new Date().toTimeString();
            const contentsWithTime = contents.replace("*TIME*", dateString);
            res.setHeader("Contest-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        });
    } else {
        fs.readFile(__dirname + req.url, "utf8").then((contents) => {
            const contents = new Date().toTimeString();
            res.setHeader("Contest-Type", "text/javascript");
            res.writeHead(200);
            res.end(contents);
        }).catch((err) => {
            res.writeHead(404);
            res.end();
        });
    }
};

// const requestListener = async (req, res) => {
//     const contents = fs.readFileSync("index.html", "utf8");
//         res.setHeader("Contest-Type", "text/html");
//         res.writeHead(200);
//         res.end(contents);
// };

const server = http.createServer(requestListener);
const host = "localhost";
const port = 8001;

server.listen(prototype, host, () => {

    console.log(`Server is running on http://${host}:${port}`);
});