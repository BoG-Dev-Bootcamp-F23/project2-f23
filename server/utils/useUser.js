'use client';
import { useState, useEffect, useContext } from 'react';
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

/*
    useContext() demo:

    Create contexts folder and put useAuth.js in it


    useAuth.js:


    import { useContext, createContext } from 'react';

    export const AuthContext = createContext(null);

    export function useAuth() {
        return useContext(AuthContext);
    }


    Inside component:


    const [userID, setUserID] = useState();

    return (
        <AuthContext.Provider value={{userID, setUserID}}>
            // all components in here have access to userID and setUserID
        </AuthContext.Provider>
    );

    Create InputComponent which is in AuthContext

    export default function InputComponent() {
        const { userID, setUserID } = useAuth();

        return (
            <input onChange{(e) => {setUserID(e.target.value)}} value={userID}></input>
        )
    }

*/