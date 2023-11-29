import AnimalCard from '@/components/AnimalCard'
import { AuthContext } from '@/contexts/useAuth';
import { useState } from "react";
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
	const [userID, setUserID] = useState("");
	const [admin, setAdmin] = useState(false);
	const [fullName, setFullName] = useState("");

	return (
		<AuthContext.Provider value={{ userID, setUserID, admin, setAdmin, fullName, setFullName }}>
			<Component {...pageProps} />
		</AuthContext.Provider>
	);
}
