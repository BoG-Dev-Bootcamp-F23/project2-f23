import '@/styles/globals.css'
import { useState } from 'react'
import {AuthContext} from "../contexts/useAuth"

export default function App({ Component, pageProps }) {
  const [loginUser, setLoginUser] = useState();

  return (<AuthContext.Provider value={{ loginUser, setLoginUser }}>
     <Component {...pageProps} />
  </AuthContext.Provider>);
}
