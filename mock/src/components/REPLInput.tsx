import '../styles/main.css';
import { Dispatch, SetStateAction, useState} from 'react';
import { ControlledInput } from './ControlledInput';
import BadCSV from '../data/BadCSV';
import BasicHeaderCSV from '../data/BasicHeaderCSV';
import BasicNoHeaderCSV from '../data/BasicNoHeaderCSV';
import EmptyCSV from '../data/EmptyCSV';

interface REPLInputProps{
  history: string[][],
  setHistory: Dispatch<SetStateAction<string[][]>>
}
// You can use a custom interface or explicit fields or both! An alternative to the current function header might be:
// REPLInput(history: string[], setHistory: Dispatch<SetStateAction<string[]>>)
export function REPLInput(props : REPLInputProps) {

    const [commandString, setCommandString] = useState<string>('')
    const [mode, setMode] = useState("brief")
    const [csv, setCSV] = useState<Array<Array<string>>>()
    const [action, setAction] = useState<string>('')
    const [column, setColumn] = useState("")
    const [value, setValue] = useState("")
    const [header, setHeader] = useState("")
    const [searcher, setSearcher] = useState<Array<String>>()
    const [result, setResult] = useState<Array<Array<string>>>()

    const fileMap = new Map<string, Array<Array<string>>>()
    fileMap.set("mock/src/data/BadCSV.ts", BadCSV)
    fileMap.set("mock/src/data/BasicHeaderCSV.ts", BasicHeaderCSV)
    fileMap.set("mock/src/data/BasicNoHeaderCSV.ts", BasicNoHeaderCSV)
    fileMap.set("mock/src/data/EmptyCSV.ts", EmptyCSV)
    
    function handleMode(commandString: string) {
      let output = "Output: " + evaluateCommand(commandString)
      if (mode === "brief") {
        props.setHistory([...props.history, ["brief", commandString, output]])
      }
      if (mode === "verbose") {
        var command = "Command: " + commandString
        props.setHistory([...props.history, [command, output]])
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
      } else if (commandString.substring(0, 9) === ("load_file")) {
        var file_path = commandString.substring(10, commandString.length)
        if (fileMap.has(file_path)){
          setCSV(fileMap.get(file_path));
          return "successfully loaded file: " + file_path
        }
        return "failure to load file: " + file_path
      } else if (commandString === ("view")) {
        if (csv) {
          return JSON.stringify(csv)
        }
        return "failure to view file"
      } else if (commandString.substring(0, 6) === ("search column =")){
        var input = commandString.split("=")
        setColumn(input[1].substring(0, input[1].length - 6))
        if (input[1].substring(input[1].length - 6,) === "value "){
          setValue(input[2].substring(0, input[2].length - 7))
          if (input[2].substring(input[2].length - 6,) === "header "){
            setHeader(input[3])
            setSearcher([column, value, header])
            return "" + searcher
          }
        }
        return "failure to search" // change this
      } else {
        return "unknown command"
      }
    }
    
    return (
        <div className="repl-input">
            <fieldset>
              <legend>Enter a command:</legend>
              <ControlledInput value={commandString} setValue={setCommandString} ariaLabel={"Command input"}/>
            </fieldset>
            <button onClick={() => handleMode(commandString)}>Submit</button>
        </div>
    );
  }