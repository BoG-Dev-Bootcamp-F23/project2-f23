'use client';
import { useState, useEffect } from 'react';
import verifyUser from '../mongodb/actions/verifyUser';

export function useUser(input) {
    const [id, setID] = useState({});
    const [admin, setAdmin] = useState({});

    const getUserData = async (user) => {
            console.log(user);
            const response = await fetch("../src/pages/api/user/verify", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            console.log("past fetch");
            const data = await response.json();
            setID(data.id);
            setAdmin(data.admin);
    }
    getUserData(input);
    return { id, admin };
}

export default useUser;