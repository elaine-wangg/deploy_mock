import '../styles/main.css';

interface REPLHistoryProps{
    history: string[][]
}

function checkForBrief(input: string[]) {
    if (input[0] === "brief") {
        if (input[1] === "view") {
            let csv = JSON.parse(input[2])
            return (
                <table className="border">
                    {csv.map((row: string[]) => createTableRow(row))}
                </table>
            )
        } else {
            return (
                <p>Output: {input[2]}</p>
            );
        }
    } else {
        if (input[0] === "view") {
            let csv = JSON.parse(input[1])
            return (
                <div>
                    <div>
                        <p>Command: {input[0]}</p>
                        <p>Output:</p>
                    </div>
                    <div className="repl-history">
                        <table className="border">
                            {csv.map((row: string[]) => createTableRow(row))}
                        </table>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <p>Command: {input[0]}</p>
                    <p>Output: {input[1]}</p>
                </div>)
        }
    }
}

function createTableRow(row: string[]) {
    return (
        <tr>
            {row.map((item) => <td className="border">{item}</td>)}
        </tr>
    )
}

export function REPLHistory(props : REPLHistoryProps) {
    return (
        <div className="repl-history">
            {props.history.map((history) => checkForBrief(history))}           
        </div>
    );
}