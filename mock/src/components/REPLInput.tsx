import '../styles/main.css';
import { Dispatch, SetStateAction, useState} from 'react';
import { ControlledInput } from './ControlledInput';
import BadCSV from '../data/BadCSV';
import BasicHeaderCSV from '../data/BasicHeaderCSV';
import BasicNoHeaderCSV from '../data/BasicNoHeaderCSV';
import EmptyCSV from '../data/EmptyCSV';

interface REPLInputProps{
  history: string[],
  setHistory: Dispatch<SetStateAction<string[]>>
}
// You can use a custom interface or explicit fields or both! An alternative to the current function header might be:
// REPLInput(history: string[], setHistory: Dispatch<SetStateAction<string[]>>)
export function REPLInput(props : REPLInputProps) {

    const [commandString, setCommandString] = useState<string>('')
    const [mode, setMode] = useState("brief")
    const [action, setAction] = useState("")
    const [csv, setCSV] = useState<Array<Array<string>>>()

    const fileMap = new Map<string, Array<Array<string>>>();
    fileMap.set("mock/src/data/BadCSV.ts", BadCSV)
    fileMap.set("mock/src/data/BasicHeaderCSV.ts", BasicHeaderCSV)
    fileMap.set("mock/src/data/BasicNoHeaderCSV.ts", BasicNoHeaderCSV)
    fileMap.set("mock/src/data/EmptyCSV.ts", EmptyCSV)
    
    function handleMode(commandString: string) {
      if (mode === "brief") {
        //handleAction(commandString)
        props.setHistory([...props.history, evaluteCommand(commandString)])
      }
      if (mode === "verbose") {
        var command = "Command: " + commandString + ", "
        var output = "Output: " + evaluteCommand(commandString)
        // TODO: must be on separate lines !! 
        //handleAction(commandString)
        props.setHistory([...props.history, command +  <br /> + output])
      }
      setCommandString("");
    }

    // function handleAction(commandString: string){
    //   if (action === "load_file") {
    //     props.setHistory([...props.history, evaluteCommand(commandString)]);
    //   }
    //   if (action === "view_file") {
    //     props.setHistory([...props.history, evaluteCommand(commandString)]);
    //   }
    // }

    function evaluteCommand(commandString: string): string {
      if (commandString === "mode brief") {
        setMode("brief")
        return "mode set to brief"
      } else if (commandString === "mode verbose") {
        setMode("verbose")
        return "mode set to verbose"
      } else if (commandString.substring(0, 9) === ("load_file")) {
        setAction("load_file")
        var file_path = commandString.substring(10, commandString.length)
        if (fileMap.has(file_path)){
          setCSV(fileMap.get(file_path));
          return "successfully loaded file: " + file_path
        }
        return "failure to load file: " + file_path
      } else if (commandString === ("view")) {
        setAction("view")
        if (csv){
          // TODO: csv must be in a table format
          return "file: " + csv 
        }
        return "failure to view file"
      } else {
        return "unknown command"
      }
    }
    /**
     * We suggest breaking down this component into smaller components, think about the individual pieces 
     * of the REPL and how they connect to each other...
     */
    return (
        <div className="repl-input">
            {/* This is a comment within the JSX. Notice that it's a TypeScript comment wrapped in
            braces, so that React knows it should be interpreted as TypeScript */}
            {/* I opted to use this HTML tag; you don't need to. It structures multiple input fields
            into a single unit, which makes it easier for screenreaders to navigate. */}
            <fieldset>
              <legend>Enter a command:</legend>
              <ControlledInput value={commandString} setValue={setCommandString} ariaLabel={"Command input"}/>
            </fieldset>
            {/* TODO WITH TA: Build a handleSubmit function that increments count and displays the text in the button */}
            {/* TODO: Currently this button just counts up, can we make it push the contents of the input box to the history?*/}
            <button onClick={() => handleMode(commandString)}>Submit</button>
        </div>
    );
  }