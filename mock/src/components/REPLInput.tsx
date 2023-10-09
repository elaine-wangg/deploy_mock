import '../styles/main.css';
import { Dispatch, SetStateAction, useState} from 'react';
import { ControlledInput } from './ControlledInput';

interface REPLInputProps{
  history: string[],
  setHistory: Dispatch<SetStateAction<string[]>>
}
// You can use a custom interface or explicit fields or both! An alternative to the current function header might be:
// REPLInput(history: string[], setHistory: Dispatch<SetStateAction<string[]>>)
export function REPLInput(props : REPLInputProps) {

    const [commandString, setCommandString] = useState<string>('');
    const [count, setCount] = useState(0);
    const [mode, setMode] = useState("brief")
    const [action, setAction] = useState("")
    
    function handleSubmit(commandString: string) {
      setCount(count + 1)
      if (mode === "brief") {
        props.setHistory([...props.history, evaluteCommand(commandString)])
      }
      if (mode === "verbose") {
        var command = "Command: " + commandString
        var output = "Output: " + evaluteCommand(commandString)  
        props.setHistory([...props.history, command, output])
      }
      setCommandString('')
      if (action === "load_file") {
        
      }
    }

    function evaluteCommand(commandString: string): string {
      if (commandString === "brief mode") {
        setMode("brief")
        return "mode set to brief"
      } else if (commandString === "verbose mode") {
        setMode("verbose")
        return "mode set to verbose"
      } else if (commandString.substring(0, 9) === ("load_file")) {
        setAction("load_file")
        return "loaded file"
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
            <button onClick={() => handleSubmit(commandString)}>Submit</button>
        </div>
    );
  }