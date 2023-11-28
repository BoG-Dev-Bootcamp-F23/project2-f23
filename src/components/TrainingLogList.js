import TrainingCard from "./TrainingCard.js"

export default function TrainingLogList({ logs }) {
    console.log(logs);
    return (
        <div>
            {logs.map(log => (
                <TrainingCard log={log}/>
            ))}
        </div>
    );
}