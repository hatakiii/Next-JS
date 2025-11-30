import fs from "fs";
import path from "path";

function csvToJson(csv) {
  const lines = csv
    .trim()
    .split("\n")
    .map((l) => l.replace(/\r/g, ""));
  const headers = lines[0].split(",");
  const result = [];
  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(",");
    const obj = {};
    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = values[j];
    }
    result.push(obj);
  }
  return JSON.stringify(result, null, 2);
}

const csvFile = path.join(process.cwd(), "books.csv");
const jsonFile = path.join(process.cwd(), "books.json");

fs.readFile(csvFile, "utf8", (err, data) => {
  if (err) return console.error(err.message);
  let json;
  try {
    json = csvToJson(data);
  } catch (e) {
    return console.error(e.message);
  }
  fs.writeFile(jsonFile, json, (err) => {
    if (err) return console.error(err.message);
    console.log("JSON файл үүссэн.");
  });
});
