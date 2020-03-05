const path = require("path");
const fs = require("fs");
const dbPath = path.join(__dirname, "/src/env.js");

const db = {
  read(path = dbPath) {
    return new Promise((resolve, reject) => {
      fs.readFile(path, { flag: "a+" }, (error, data) => {
        if (error) return reject(error);
        let env;
        try {
          env = JSON.parse(data.toString());
        } catch (errorCaptured) {
          env = {};
        }
        resolve(env);
      });
    });
  },
  write(env, path = dbPath) {
    return new Promise((resolve, reject) => {
      console.log(env)
      fs.writeFile(path, env, error => {
        if (error) return reject(error);
        resolve();
      });
    });
  },
};
module.exports = db;