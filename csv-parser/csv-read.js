import { CsvParser } from "./csv-parser";
import fs from "fs";

const csvFile = fs.readFileSync("/src/projects-csv/Coool Project Database.csv");
const csvData = csvFile.toString();

start();

export async function start() {
	console.log("Inside Start()");
	CsvParser.rowParser(csvData);
}
