import TrainingCard from "./TrainingCard.js"

export default function TrainingLogList({ logs }) {
    return (
        <div>
            {logs.map(log => (
                <TrainingCard log={log}/>
            ))}
        </div>
    );
}