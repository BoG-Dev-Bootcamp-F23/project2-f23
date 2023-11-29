import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
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
                        <div className={style.right_header_create}>
                            <Image src={create} onClick = {() => {
                                setDisplay(5);
                            }}/>
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
                        <div className={style.createButton}>
                            <Image src={create} onClick = {() => {
                                setDisplay(6);
                            }}/>
                            <p>Create New</p>
                        </div>
                    </div>            
                    <AnimalList animals={animals.filter(animal => animal.name.includes(searchTerm) && animal.owner === userID)} users={users}/>
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
                    <AnimalList animals={animals.filter(animal => animal.name.includes(searchTerm))} users={users}/>
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
            return <CreateTrainingLog display={display} setDisplay={setDisplay} userID={userID} animals={animals}/>
        case 6:
            return <CreateAnimal display={display} setDisplay={setDisplay} userID={userID}/>
    }
} 

export default function MainPage(props) {
    // State for storing animals and training logs
    // const user = props.user;
    // const user = null;
    // let user;
    // const admin = props.admin;
    // const userID = props.userID;
    
    const router = useRouter();
    const {userID, admin} = router.query;
    const [loading, setLoading] = useState(true);
    const [display, setDisplay] = useState(0);
    const [login, setLogin] = useState(1);

    const [user, setUser] = useState([]);
    const [users, setUsers] = useState([]);
    const [animals, setAnimals] = useState([]);
    const [trainingLogs, setTrainingLogs] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');

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

    useEffect(() => {
        console.log(userID);
        setUser(users.filter(user => user._id === userID)[0]);
        console.log(users.filter(user => user._id === userID));
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
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            {loading?(
                <div className = "loading">
                    <h1> Loading ... </h1>
                </div>
            ):(
                <div className={style.body}>
                    <div className={style.left}>
                        {user?<Sidebar display={display} setDisplay={setDisplay} user = {user} login={login} setLogin={setLogin}/> : null}
                        {/* { login? router.push('/login') : null} */}
                    </div>
                    <div className={style.right}>
                        {renderComponent(display, setDisplay, animals, trainingLogs, users, searchTerm, userID)}
                    </div>
                </div>
            )}
        </div>
        </>
    );
}
