import { useState, useEffect } from 'react';
import styles from "../styles/Testing.module.css";
import Sidebar from "@/components/Sidebar";
import UserCard from '@/components/UserCard';
import Header from '@/components/Header';
import Link from 'next/link';

export default function side() {

    return (
        <div className={styles.container}>
            {/* <Sidebar></Sidebar> */}
            {/* <UserCard></UserCard>
            <UserCard></UserCard>
            <UserCard></UserCard> */}
            <Header></Header>
            
        </div>
    );
}