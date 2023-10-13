import BadCSV from "../../data/csv/BadCSV";
import BasicHeaderCSV from "../../data/csv/BasicHeaderCSV";
import BasicNoHeaderCSV from "../../data/csv/BasicNoHeaderCSV";
import EmptyCSV from "../../data/csv/EmptyCSV";

const fileMap = new Map<string, Array<Array<string>>>();
  fileMap.set("mock/src/data/csv/BadCSV.ts", BadCSV);
  fileMap.set("mock/src/data/csv/BasicHeaderCSV.ts", BasicHeaderCSV);
  fileMap.set("mock/src/data/csv/BasicNoHeaderCSV.ts", BasicNoHeaderCSV);
  fileMap.set("mock/src/data/csv/EmptyCSV.ts", EmptyCSV);

export default function load_file(file_path: string) {
    if (fileMap.has(file_path) && file_path != "mock/src/data/csv/BadCSV.ts") {
        return ["successfully loaded file: " + file_path, JSON.stringify(fileMap.get(file_path))];
      }
    return ["failure to load file: " + file_path, ""];
}