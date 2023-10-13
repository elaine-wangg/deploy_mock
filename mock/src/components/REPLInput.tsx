import "../styles/main.css";
import { Dispatch, SetStateAction, useState } from "react";
import { ControlledInput } from "./ControlledInput";
import load_file from "./load/load";
import view from "./view/view";
import search from "./search/search";

interface REPLInputProps {
  history: string[][];
  setHistory: Dispatch<SetStateAction<string[][]>>;
}

export function REPLInput(props: REPLInputProps) {
  const [commandString, setCommandString] = useState<string>("");
  const [mode, setMode] = useState("brief");
  const [csv, setCSV] = useState("");

  function handleMode(commandString: string) {
    let output = evaluateCommand(commandString);
    if (mode === "brief") {
      props.setHistory([...props.history, ["brief", commandString, output]]);
    } if (mode === "verbose") {
      props.setHistory([...props.history, [commandString, output]]);
    }
    setCommandString("");
  }

  function evaluateCommand(commandString: string): string {
    if (commandString === "mode brief") {
      setMode("brief")
      return "mode set to brief"
    } else if (commandString === "mode verbose") {
      setMode("verbose")
      return "mode set to verbose"
    } else if (commandString.substring(0, 9) === "load_file") {
      let file_path = commandString.substring(10, commandString.length);
      let load_result = load_file(file_path)
      setCSV(load_result[1])
      return load_result[0]
    } else if (commandString === "view") {
      return view(csv)
    } else if (commandString.substring(0, 15) === "search column =") {
      return search(csv, commandString)
    } else {
      return "unknown command"
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
