const mysql = require("mysql");
const Namespace = require("./tools/namespace.js");

var Connection = ( function() {
    const Connection = class Connection {
        constructor() {
            delete require.cache[require.resolve("../config.json")];
            const config = require("../config.json");

            if (!(config.database instanceof Object)) throw new TypeError("Configure corretamente o acesso ao banco de dados no arquivo config.json.");
            if (
                typeof config.database.hostname !== "string" ||
                typeof config.database.username !== "string" ||
                typeof config.database.password !== "string" ||
                typeof config.database.database !== "string"
            ) throw new TypeError("Configure corretamente o acesso ao banco de dados no arquivo config.json.");
            
            this.connection = mysql.createConnection({
                host: config.database.hostname,
                user: config.database.username,
                password: config.database.password,
                database: config.database.database
            });
        }

        query(query, params) {
            const promise = new Promise((resolve, reject) => {
                this.connection.connect(err => {
                    if (err) {
                        reject(err);
                        return console.error(err);
                    }
                    this.connection.query(query, params, (err, result, fields) => {
                        if (err) {
                            reject(err);
                            return console.error(err);
                        }
                        resolve({ err, result, fields })
                    });
                });
            });
            return promise;
        }

        format(sql, values, stringifyObjects, timeZone) {
            return this.connection.format(sql, values, stringifyObjects, timeZone);
        }

        destroy() { this.connection.destroy() }

        end() { this.connection.end(err => { if (err) console.error(err) } ) }
    }

    return Connection;
} )();

Namespace(Connection, "Connection");

module.exports = Connection;