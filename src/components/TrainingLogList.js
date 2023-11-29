import TrainingCard from "./TrainingCard.js"
import { useAuth } from "../contexts/useAuth.js"

export default function TrainingLogList({ logs }) {
    return (
        <div>
            {logs.map(log => (
                <TrainingCard log={log}/>
            ))}
        </div>
    );
}