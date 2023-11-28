import Image from "next/image"

import Account from "./Account"
import AllAnimals from "../images/AllAnimals.png"
import AllTraining from "../images/AllTraining.png"
import AllUsers from "../images/AllUsers.png"
import Animals from "../images/Animals.png"
import TrainingLogs from "../images/TrainingLogs.png"

export default function SideBar(props) {
    const { display, setDisplay, user, login, setLogin } = props;
    return (
        <div>
            <div className={display === 0? "activate-sidebar-button" : "sidebar-button"} onClick = {() => {
                setDisplay(0);
            }}>
                <Image src = {TrainingLogs} />
                <p> Training logs</p>
            </div>
            <div className={display === 1? "activate-sidebar-button" : "sidebar-button"} onClick = {() => {
                setDisplay(1);
            }}>
                <Image src = {Animals} />
                <p> Animals</p>
            </div>
            {user.admin? (
                <div className="AdminOnly">
                    <p> Admin access</p>
                    <div className={display === 2? "activate-sidebar-button" : "sidebar-button"} onClick = {() => {
                        setDisplay(2);
                    }}>
                        <Image src = {AllTraining} />
                        <p> All training</p>
                    </div>
                    <div className={display === 3? "activate-sidebar-button" : "sidebar-button"} onClick = {() => {
                        setDisplay(3);
                    }}>
                        <Image src = {AllAnimals} />
                        <p> All animals</p>
                    </div>
                    <div className={display === 4? "activate-sidebar-button" : "sidebar-button"} onClick = {() => {
                        setDisplay(4);
                    }}>
                        <Image src = {AllUsers} />
                        <p> All users</p>
                    </div>
                </div>
            ): null}
            
            <Account user={user} login={login} setLogin={setLogin}/>
        </div>
    );
}