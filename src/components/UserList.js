import UserCard from "./UserCard"

export default function UserList({ users }) {
    return (
        <div>
            {users.map(user => (
                <UserCard user={user}/>
            ))}
        </div>
    );
}