import styles from '@/styles/Sidebar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import trainingIcon from '@/images/trainingIcon.png'
import animalIcon from '@/images/animalIcon.png'
import adminTraining from '@/images/adminTraining.png'
import adminAnimals from '@/images/adminAnimals.png'
import adminUsers from '@/images/adminUsers.png'
import logoutIcon from '@/images/logoutIcon.png'

export default function Sidebar({userId, userName, admin, updatePanel, activePanel}) {
    // {admin = true}
    {userName = "Sahi Pasagada"}
    return (
        <div className={styles.sideBarContainer}>
            
            <div className={styles.userContainer}>
                <div className={styles.activePanel}>
                    <Image src={trainingIcon} width={30} height={30} className={styles.icon}></Image>
                    Training logs</div>
                <div className={styles.inactivePanel}>
                    <Image src={animalIcon} width={30} height={30} className={styles.icon}></Image>
                    Animals</div>
                {/* <div className={"Training logs" === activePanel ? styles.activePanel : styles.inactivePanel} 
                    onClick={() => {
                        updatePanel("Training logs");
                    }}
                >Training Logs</div>
                <div className={"Animals" === activePanel ? styles.activePanel : styles.inactivePanel} 
                    onClick={() => {
                        updatePanel("Animals");
                    }}
                >Animals</div> */}
            </div>

            {admin ? <div className={styles.adminContainer}>
                <p className={styles.adminHeader}>Admin Access</p>
                <div className={styles.inactivePanel}>
                    <Image src={adminTraining} width={30} height={30} className={styles.icon}></Image>
                    All Training</div>
                <div className={styles.inactivePanel}>
                    <Image src={adminAnimals} width={30} height={30} className={styles.icon}></Image>
                    All Animals</div>
                <div className={styles.inactivePanel}>
                    <Image src={adminUsers} width={30} height={30} className={styles.icon}></Image>
                    All Users</div>
            </div> : <div className={styles.noAdmin}></div>}

            <div className={styles.userInfoContainer}>
                
                <div className={styles.userLeft}>
                    <div className={styles.userLogo}>{userName.charAt(0).toUpperCase()}</div>

                    <div className={styles.userTopAndBottom}>
                        <div className={styles.userTop}>
                            <div className={styles.userName}>{userName}</div>
                        </div>
                        <div className={styles.userBottom}>
                            <div className={styles.userType}>{admin ? "Admin" : "User"}</div>
                        </div>
                    </div>
                    
                    
                </div>

                <Link href='../'>
                        <Image src={logoutIcon} width={40} height={40} className={styles.icon}/>
                </Link>


            </div>



            {/* <p className="select">Select your starting station</p>
            <div className={"All Stations" === activeStation ? 'navBarElementHighlight' : 'navBarElement'}
                onClick={() => {
                    updateStation("All Stations");
                }}
            >All Stations</div>

            {stationData?.map((station) => {
                return (
                    <div className={station === activeStation ? 'navBarElementHighlight' : 'navBarElement'}
                        onClick={() => {
                            updateStation(station);
                        }}
                    >{station}</div>
                )
            })} */}



        </div>

    )
}

