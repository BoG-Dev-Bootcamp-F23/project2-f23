import React, { useState, useEffect } from 'react';
import logoutIcon from '../images/logout.png';
import Image from "next/image"
import { useRouter } from 'next/router';

export default function Account(props) {
    const user = props.user;
    const admin = props.user.admin ? "Admin" : "User";
    const login = props.login;
    const setLogin = props.setLogin;
    const router = useRouter();

    return (
        <div>
            <div className = "icon">
                <p> {user.fullName[0]} </p>
            </div>
            <div className = "name">
                <p> {user.fullName} </p>
                <p> {admin}</p>
            </div>
            <div className = "logout">
                <Image src={logoutIcon} alt="Log Out" onClick = {() => {
                    router.push('/Login');
                }}/>
            </div>
        </div>
    );
}
