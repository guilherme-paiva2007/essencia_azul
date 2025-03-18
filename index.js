const { ServerManager } = require("./src/tools");

const deployPages = require("./pages.js");

const server = new ServerManager();
deployPages(server);

process.stdin.on("data", data => {
    data = data.toString("utf-8").replace("\r\n", "").trim();

    if (data === "pages") console.table([...server.pages.values()].map(
        p => ({ path: p.path, ["content-type"]: p.contentType, file: p.filelocation })
    ));
    if (data === "pages reload") deployPages(server);
});

server.listen(8080, "0.0.0.0");