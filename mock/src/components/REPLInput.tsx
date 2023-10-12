import "../styles/main.css";
import { Dispatch, SetStateAction, useState } from "react";
import { ControlledInput } from "./ControlledInput";
import BadCSV from "../data/csv/BadCSV";
import BasicHeaderCSV from "../data/csv/BasicHeaderCSV";
import BasicNoHeaderCSV from "../data/csv/BasicNoHeaderCSV";
import EmptyCSV from "../data/csv/EmptyCSV";
import searchResult from "../data/search/searchResults";

interface REPLInputProps {
  history: string[][];
  setHistory: Dispatch<SetStateAction<string[][]>>;
}

export function REPLInput(props: REPLInputProps) {
  const [commandString, setCommandString] = useState<string>("");
  const [mode, setMode] = useState("brief");
  const [csv, setCSV] = useState<Array<Array<string>>>();
  const [column, setColumn] = useState("");
  const [value, setValue] = useState("");
  const [header, setHeader] = useState("");
  const [searcher, setSearcher] = useState<Array<String>>();

  const fileMap = new Map<string, Array<Array<string>>>();
  fileMap.set("mock/src/data/csv/BadCSV.ts", BadCSV);
  fileMap.set("mock/src/data/csv/BasicHeaderCSV.ts", BasicHeaderCSV);
  fileMap.set("mock/src/data/csv/BasicNoHeaderCSV.ts", BasicNoHeaderCSV);
  fileMap.set("mock/src/data/csv/EmptyCSV.ts", EmptyCSV);

  function handleMode(commandString: string) {
    let output = evaluateCommand(commandString);
    if (mode === "brief") {
      props.setHistory([...props.history, ["brief", commandString, output]]);
    }
    if (mode === "verbose") {
      props.setHistory([...props.history, [commandString, output]]);
    }
    setCommandString("");
  }

  function evaluateCommand(commandString: string): string {
    if (commandString === "mode brief") {
      setMode("brief");
      return "mode set to brief";
    } else if (commandString === "mode verbose") {
      setMode("verbose");
      return "mode set to verbose";
    } else if (commandString.substring(0, 9) === "load_file") {
      var file_path = commandString.substring(10, commandString.length);
      if (
        fileMap.has(file_path) &&
        file_path != "mock/src/data/csv/BadCSV.ts"
      ) {
        setCSV(fileMap.get(file_path));
        return "successfully loaded file: " + file_path;
      }
      return "failure to load file: " + file_path;
    } else if (commandString === "view") {
      if (csv) {
        return JSON.stringify(csv);
      }
      return "failure to view file";
    } else if (commandString.substring(0, 15) === "search column =") {
      if (commandString.substring(0, 15) === "search column =") {
        var input = commandString.split("=");
        setColumn(input[1].substring(1, input[1].length - 7));
        if (input[1].substring(input[1].length - 6) === "value ") {
          setValue(input[2].substring(1, input[2].length - 8));
          if (input[2].substring(input[2].length - 7) === "header ") {
            setHeader(input[3].substring(1));
            setSearcher([column, value, header]);
            // return "column = " + column + "value = " + value + "header = " + header
            return "" + searchResult.get([column, value, header]);
          }
        }
      }
      return "failure to search";
    } else {
      return "unknown command";
    }
  }

  return (
    <div className="repl-input">
      <fieldset>
        <legend>Enter a command:</legend>
        <ControlledInput
          value={commandString}
          setValue={setCommandString}
          ariaLabel={"Command input"}
        />
      </fieldset>
      <button onClick={() => handleMode(commandString)}>Submit</button>
    </div>
  );
}
