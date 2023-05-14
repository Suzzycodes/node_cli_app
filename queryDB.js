import fs from "fs";

export default function queryDB(externalFunction) {
  try {
    let info = [];

    if (fs.existsSync("db.json")) {
      fs.readFile("db.json", function (err, data) {
        if (err) {
          console.log("Error reading db.json", err);
          return;
        }

        info = JSON.parse(data.toString());
        console.log(info);

        if (externalFunction) {
          externalFunction(info);
        }
      });
    } else {
      if (externalFunction) {
        externalFunction(info);
      }
    }
  } catch (error) {
    console.error(`Something happened: ${error.message}`);
  }
}
