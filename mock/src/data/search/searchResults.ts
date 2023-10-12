import BadCSV from "../csv/BadCSV";
import BasicHeaderCSV from "../csv/BasicHeaderCSV";
import BasicNoHeaderCSV from "../csv/BasicNoHeaderCSV";
import EmptyCSV from "../csv/EmptyCSV";

const searchResults = new Map<string[], string[][]>();

searchResults.set(
  ["Data Type", "White", "true"],
  [["RI", "White", "$1,058.47", "395773.6521", "$1.00", "75%"]]
);

searchResults.set(
  ["1", "White", "true"],
  [["RI", "White", "$1,058.47", "395773.6521", "$1.00", "75%"]]
);

searchResults.set(
  ["", "White", "true"],
  [["RI", "White", "$1,058.47", "395773.6521", "$1.00", "75%"]]
);

searchResults.set(["State", "RI", "true"], BasicHeaderCSV);

export default searchResults;
