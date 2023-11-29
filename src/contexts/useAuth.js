import { useContext, createContext } from "react";

export const AuthContext = createContext(null);

export function useAuth() {
    return useContext(AuthContext);
}




// function App() {
//     const [userID, setUserID] = useState();

//     return (
//         <AuthContext.Provider value={{ userID, setUserID}}>
//             <InputComponent></InputComponent>
//             <DisplayComponent>
//             </DisplayComponent>
//         </AuthContext.Provider>
//     );
// }


// export default function InputComponent() {
//     const {userID, setUserID} = useAuth();
//     return (

//     );
// }

// export default function DisplayComponent() {
//     const {userID, setUserID} = useAuth();

// }

// js-cookies

// const cookisOptions: CookieAttributes = {
//     expires: 30,
// }

// Cookies.set("accessToken", accessToken, cookieOptions);

// const tokenCookie = Cookies.get("accessToken");
