export default function view(csv: string) {
    if (csv !== "") {
        return csv 
    }
    return "failure to view file"
}