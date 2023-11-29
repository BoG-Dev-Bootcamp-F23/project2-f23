import Image from "next/image"
import style from "../styles/SideBar.module.css";
import Account from "./Account"
import AllAnimals from "../images/AllAnimals.png"
import AllTraining from "../images/AllTraining.png"
import AllUsers from "../images/AllUsers.png"
import Animals from "../images/Animals.png"
import TrainingLogs from "../images/TrainingLogs.png"

export default function SideBar(props) {
    const { display, setDisplay, user, login, setLogin } = props;
    return (
        <div className={style.sidebarContainer}>
            <div className={display === 0? style.activateSidebarButton : style.sidebarButton} onClick = {() => {
                setDisplay(0);
            }}>
                <Image src = {TrainingLogs} alt="Training Logs"/>
                <p> Training logs</p>
            </div>
            <div className={display === 1? style.activateSidebarButton : style.sidebarButton} onClick = {() => {
                setDisplay(1);
            }}>
                <Image src = {Animals} alt="Animals"/>
                <p> Animals</p>
            </div>
            {user.admin? (
                <div className={style.adminOnly}>
                    <p> Admin access</p>
                    <div className={display === 2? style.activateSidebarButton : style.sidebarButton} onClick = {() => {
                        setDisplay(2);
                    }}>
                        <Image src = {AllTraining} alt="All Training" />
                        <p> All training</p>
                    </div>
                    <div className={display === 3? style.activateSidebarButton : style.sidebarButton} onClick = {() => {
                        setDisplay(3);
                    }}>
                        <Image src = {AllAnimals} alt="All Animals" />
                        <p> All animals</p>
                    </div>
                    <div className={display === 4? style.activateSidebarButton : style.sidebarButton} onClick = {() => {
                        setDisplay(4);
                    }}>
                        <Image src = {AllUsers} alt="All Users"/>
                        <p> All users</p>
                    </div>
                </div>
            ): null}
            
            <Account user={user} login={login} setLogin={setLogin}/>
        </div>
    );
}