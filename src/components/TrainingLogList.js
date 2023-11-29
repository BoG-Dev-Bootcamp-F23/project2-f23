import TrainingCard from "./TrainingCard.js"

export default function TrainingLogList({ logs, setEditLog, setDisplay }) {
    console.log(logs);
    return (
        <div>
            {logs.map(log => (
                <TrainingCard log={log} setEditLog={setEditLog} setDisplay={setDisplay}/>
            ))}
        </div>
    );
}