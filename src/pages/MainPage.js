import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Sidebar from '../components/SideBar.js';
import SearchBar from '../components/SearchBar.js'

import UserList from '../components/UserList.js'
import AnimalList from '../components/AnimalList.js';
import TrainingLogList from '../components/TrainingLogList.js';
// import api from '../services/api'; // Your API service file

const adminAPI = 'http://localhost:3000/api/admin/'
const userAPI = 'http://localhost:3000/api/user/'
const animalAPI = 'http://localhost:3000/api/animal/'
const trainingAPI = 'http://localhost:3000/api/training/'

function renderComponent(display, animals, trainingLogs, users, searchTerm, userID) {
    switch (display) {
        case 0:
            return <TrainingLogList logs={trainingLogs.filter(log => log.title.includes(searchTerm) && log.user === userID)} create={1} />
        case 1:
            return <AnimalList animals={animals.filter(animal => animal.name.includes(searchTerm) && animal.owner === userID)} create={1} />
        case 2:
            return <TrainingLogList logs={trainingLogs.filter(log => log.title.includes(searchTerm))} create={0} />
        case 3:
            return <AnimalList animals={animals.filter(animal => animal.name.includes(searchTerm))} create={0} />
        case 4:
            return <UserList users={users.filter(user => user.fullname.includes(searchTerm))} create={0} />
    }
} 

export default function MainPage(props) {
    // State for storing animals and training logs
    // const user = props.user;
    // const user = null;

    const admin = props.admin;
    const userID = props.userID;

    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [display, setDisplay] = useState(0);
    const [login, setLogin] = useState(1);

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
            setUsers(data);
        };

        console.log("qweqrw");
        setLoading(true);
        fetchUsers();
        console.log("dasf");
        fetchAnimals();
        fetchTrainingLogs();
        setLoading(false);
    }, []);

    const user = users[0];
    console.log("hihi");
    return (
        <div className="dashboard">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            {loading?(
                <div className = "loading">
                    <h1> Loading ... </h1>
                </div>
            ):(
                <div className="body">
                    <div className="left">
                        <Sidebar display={display} setDisplay={setDisplay} userID = {userID} login={login} setLogin={setLogin}/>
                        {/* { login? router.push('/login') : null} */}
                    </div>
                    <div className="right">
                        {renderComponent(display, animals, trainingLogs, users, searchTerm, userID)}
                    </div>
                </div>
            )}
        </div>
    );
}
