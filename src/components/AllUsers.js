import UserCard from '@/components/UserCard'
import Header from '@/components/Header'
import { useEffect, useState } from "react";
import styles from "@/styles/AllUsers.module.css";

export default function AllUsers(props) {
    const [ users, setUsers ] = useState([]);
    const {currentSearch} = props;

    useEffect(() => {
        async function getAllUsers() {
            const response = await fetch("/api/admin/users");
            const data = await response.json();
            setUsers(data);
        }
        getAllUsers();
    }, [])
    return (
        <div className={styles.all_users_container}>
            <Header title="All Users" createComp={false}/>
            <div className={styles.user_card_container}>
                {users?.map((data) => {
                    return (
                        <UserCard key={data._id} data={data} currentSearch={currentSearch}/>
                    )
                })}
            </div>
        </div>
        
    )
}
