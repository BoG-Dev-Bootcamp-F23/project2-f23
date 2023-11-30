import TrainingCard from "./TrainingCard.js"
import { useAuth } from "../contexts/useAuth.js"
import style from "../styles/TrainingList.module.css"

export default function TrainingLogList({ logs }) {
    return (
        <div className={style.trainingLogListContainer}>
            {logs.map(log => (
                <TrainingCard key={log._id} log={log}/>
            ))}
        </div>
    );
}