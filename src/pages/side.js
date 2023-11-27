import { useState, useEffect } from 'react';
import styles from "../styles/Testing.module.css";
import Sidebar from "@/components/Sidebar";
import Link from 'next/link';

export default function side() {

    return (
        <div className={styles.container}>
            <Sidebar></Sidebar>
            
        </div>
    );
}