const { ServerManager } = require("./src/tools");

const deployPages = require("./pages.js");
const config = require("./config.json");
const Connection = require("./src/connection.js");

if (!(config.server instanceof Object)) throw new Error("Para inicializar o servidor, configure o arquivo config.json.");
if (typeof config.server.hostname !== "string" || typeof config.server.port !== "number") throw new TypeError("Configure os parâmetros hostname (string) e port (number) corretamente.");

const server = new ServerManager();
deployPages(server);

server.setAPI("database", Connection);

process.stdin.on("data", async data => {
    data = data.toString("utf-8").replace("\r\n", "").trim().split(" ");

    const command = data[0];
    const params = data.slice(1);
    let nextparam = params[1];

    switch (command) {
        case "pages":
            if (nextparam === undefined) console.table(
                [...server.pages.values()]
            );
            if (nextparam === "reload") deployPages(server);
            break;
        case "query":
            const query = params.join(" ");
            console.table((await new Connection().query(query)).result);
            break;
        case "exit":
            process.exit();
        default:
            break;
    }
});

server.listen(config.server.port, config.server.hostname);