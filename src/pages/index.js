import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import LoginPage from "./login.js"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <LoginPage />
  );
}


export async function getServerSideProps(context) {
  return {
      redirect: {
          destination: '/login',
          permanent: false,
      },
  };
}