import UserCard from "./UserCard"
import styles from '../styles/UserList.module.css';

export default function UserList({ users }) {
    return (
        <div className={styles.listContainer}>
            {users.map(user => (
                <UserCard key={user._id} user={user}/>
            ))}
        </div>
    );
}