import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from "../contexts/useAuth"

import { parseCookies } from 'nookies';
import jwt from 'jsonwebtoken';

import Image from "next/image.js"
import style from "../styles/MainPage.module.css"
import Head from 'next/head';

import create from "../images/create.png"

import Sidebar from '../components/SideBar.js';
import SearchBar from '../components/SearchBar.js'

import UserList from '../components/UserList.js'
import AnimalList from '../components/AnimalList.js';
import TrainingLogList from '../components/TrainingLogList.js';

import CreateAnimal from "../components/CreateAnimal"
import CreateTrainingLog from "../components/CreateTrainingLog"
import EditTrainingLog from "../components/EditTrainingLog"
// import api from '../services/api'; // Your API service file

const adminAPI = 'http://localhost:3000/api/admin/'
const userAPI = 'http://localhost:3000/api/user/'
const animalAPI = 'http://localhost:3000/api/animal/'
const trainingAPI = 'http://localhost:3000/api/training/'

function renderComponent(display, setDisplay, animals, trainingLogs, users, searchTerm, userID) {
    switch (display) {
        case 0:
            return (
                <div>
                    <div className={style.right_header_yescreate}>
                        <p> Training logs</p>
                        <div className={style.createButton} onClick = {() => {
                            setDisplay(5);
                        }}>
                            <Image src={create} alt="training log"/>
                            <p>Create New</p>
                        </div>
                    </div>
                    <TrainingLogList logs={trainingLogs.filter(log => log.title.includes(searchTerm) && log.user === userID)} />
                </div>
            );
        case 1:
            return (
                <div>
                    <div className={style.right_header_yescreate}>
                        <p> Animals</p>
                        <div className={style.createButton} onClick = {() => {
                            setDisplay(6);
                        }} >
                            <Image src={create} alt="animal picture"/>
                            <p>Create New</p>
                        </div>
                    </div>            
                    <AnimalList animals={animals.filter(animal => animal.name.includes(searchTerm) && animal.owner === userID)} />
                </div>
            );
        case 2:
            return (
                <div>
                    <div className={style.right_header_nocreate}>
                        <p>All training logs</p>
                    </div>
                    <TrainingLogList logs={trainingLogs.filter(log => log.title.includes(searchTerm))} />
                </div>
            );
        case 3:
            return (
                <div>
                    <div className={style.right_header_nocreate}>
                        <p>All animals</p>
                    </div>
                    <AnimalList animals={animals.filter(animal => animal.name.includes(searchTerm))} />
                </div>
            );
        case 4:
            return (
                <div>
                    <div className={style.right_header_nocreate}>
                        <p>All users</p>
                    </div>
                    <UserList users={users.filter(user => user.fullName.includes(searchTerm))} />
                </div>
            );
        case 5:
            return <CreateTrainingLog />
        case 6:
            return <CreateAnimal />
        case 7:
            return <EditTrainingLog />
    }
} 

export default function DashboardPage( {userID}) {
    // State for storing animals and training logs
    // const user = props.user;
    // const user = null;
    // let user;
    // const admin = props.admin;
    // const userID = props.userID;
    
    const router = useRouter();
    const {loginUser, setLoginUser, users, setUsers, animals, setAnimals, trainingLogs, setTrainingLogs, display, setDisplay, editLog, setEditLog, searchTerm, setSearchTerm} = useAuth();

    setLoginUser(userID);
    const [loading, setLoading] = useState(true);
    const [login, setLogin] = useState(1);

    const [user, setUser] = useState([]);


    // Fetch animals and training logs from the API
    useEffect(() => {
        const fetchAnimals = async () => {
            const response = await fetch(adminAPI + 'animals');
            const data = await response.json();
            setAnimals(data);
        };

        const fetchTrainingLogs = async () => {
            const response = await fetch(adminAPI + 'training');
            const data = await response.json();
            setTrainingLogs(data);
        };

        const fetchUsers = async () => {
            const response = await fetch(adminAPI + 'users');
            const data = await response.json();
            console.log(data);
            setUsers(data);
        };

        setLoading(true);
        fetchUsers();
        fetchAnimals();
        fetchTrainingLogs();
        setLoading(false);
        // user = users.filter(user => user._id === userID);
    }, []);

    /* Use cookies
    useEffect(() => {
        console.log(useruserID);
        setUser(users.filter(user => user._id === useruserID)[0]);
        console.log(users.filter(user => user._id === useruserID));
    }, [users]);
    */

    /*Use context hook */
    useEffect(() => {
        console.log(loginUser);
        setUser(users.filter(user => user._id === loginUser)[0]);
        console.log(users.filter(user => user._id === loginUser));
    }, [users]);

    useEffect(() => {
        const fetchAnimals = async () => {
            const response = await fetch(adminAPI + 'animals');
            const data = await response.json();
            setAnimals(data);
        };

        const fetchTrainingLogs = async () => {
            const response = await fetch(adminAPI + 'training');
            const data = await response.json();
            setTrainingLogs(data);
        };

        const fetchUsers = async () => {
            const response = await fetch(adminAPI + 'users');
            const data = await response.json();
            console.log(data);
            setUsers(data);
        };

        setLoading(true);
        fetchUsers();
        fetchAnimals();
        fetchTrainingLogs();
        setLoading(false);
    }, [display]);

    return (
        <>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;500;700&display=swap" rel="stylesheet" />
        </Head>
        <div className={style.dashboard}>
            <SearchBar />
            {
                // useruserID? ( 
                loginUser? (
                    loading?(
                        <div className = {style.loading}>
                            <h1> Loading ... </h1>
                        </div>
                    ):(
                        <div className={style.body}>
                            <div className={style.left}>
                                {user?<Sidebar /> : null}
                                {/* { login? router.push('/login') : null} */}
                            </div>
                            <div className={style.right}>
                                {/* {renderComponent(display, setDisplay, animals, trainingLogs, users, searchTerm, useruserID, editLog, setEditLog)} */}
                                {renderComponent(display, setDisplay, animals, trainingLogs, users, searchTerm, loginUser, editLog, setEditLog)}
                            </div>
                        </div>
                    )
                ) : (
                    <div className={style.notLoggedIn}>
                        <h1>You're not logged in!</h1>
                        <h3 onClick={() => {
                            router.push({
                                pathname: '/login'
                            })
                        }}>Click to go back to log in page</h3>
                    </div>
                )
            }

        </div>
        </>
    );
}


export async function getServerSideProps(context) {
    const cookies = parseCookies(context);
    const token = cookies.token;


    try {
        if (token) {
            // console.log()
            const decoded = jwt.verify(token, 'q40paegianopgw4pn4gnagrhp38pn'); // Replace with your JWT secret key

            // const {loginUser, setLoginUser} = useAuth();
            console.log(decoded.userID);
            // setLoginUser(decoded.userID);
            // Token is valid, render the page
            return { props: { userID: decoded.userID } };
        }
    } catch (error) {
        return { props: {userID: null}};
        // Token validation failed
    }

    // return { props: {userID: null}};
    // Redirect to login if not authenticated
    return {
        redirect: {
            destination: '/login',
            permanent: false,
        },
    };
}