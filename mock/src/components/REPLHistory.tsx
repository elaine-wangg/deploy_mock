import '../styles/main.css';

interface REPLHistoryProps{
    history: string[][]
}

function checkForBrief(input: string[]) {
    if (input[0] === "brief") {
        if (input[2] === "mode set to verbose" || input[1].substring(0, 9) === "load_file") {
            return (
                <p>{input[2]}</p>
            );
        } else if (input[1] === "view") {
            let csv = JSON.parse(input[2].substring(8,))
            return (
                <table>
                    {csv.map((row: string[]) => createTableRow(row))}
                </table>
            )
        }
    } else {
        if (input[1] === "mode set to brief" || input[0].substring(9, 18) === "load_file") {
            return (
                <div>
                    <p>{input[0]}</p>
                    <p>{input[1]}</p>
                </div>)
        } else if (input[0].substring(9, 12) === "view") {
            let csv = JSON.parse(input[1])
            return (
                <div>
                    <p>{input[0]}</p>
                    <table>
                        {csv.map((row: string[]) => createTableRow(row))}
                    </table>
                </div>
            )
        }
    }
}

function createTableRow(row: string[]) {
    return (
        <tr>
            {row.map((item) => <td>{item}</td>)}
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