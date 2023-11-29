import Image from "next/image"
import style from "../styles/SideBar.module.css";
import AllAnimals from "../images/AllAnimals.png"
import AllTraining from "../images/AllTraining.png"
import AllUsers from "../images/AllUsers.png"
import Animals from "../images/Animals.png"
import TrainingLogs from "../images/TrainingLogs.png"
import logoutIcon from '../images/logout.png';

export default function SideBar(props) {
    const { display, setDisplay, user } = props;
    const admin = user.admin ? "Admin" : "User";
    return (
        <div className={style.sidebarContainer}>
            <div className={style.noAdmin}>
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
            <div className={style.userFooter}>
                <div className={style.nameFooter}>
                    <div className ={style.icon}>
                        <p className={style.initial}> {user.fullName.toUpperCase()[0]} </p>
                    </div>
                    <div className={style.content}>
                        <p className={style.name}> {user.fullName} </p>
                        <p className={style.footer}> {admin}</p>
                    </div>
                </div>
                <div className = {style.logout}>
                <Image src={logoutIcon} alt="Log Out" onClick = {() => {
                    router.push('/Login');
                }}/>
            </div>
            </div>
        </div>
    );
}