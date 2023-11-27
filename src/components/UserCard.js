import styles from '@/styles/UserCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function UserCard({userId, userName, admin}) {
    // {admin = true}
    {userName = "Sahi Pasagada"}
    return (

            <div className={styles.userInfoContainer}>
                
                <div className={styles.userLeft}>
                    <div className={styles.userLogo}>{userName.charAt(0).toUpperCase()}</div>

                    <div className={styles.userTopAndBottom}>
                        <div className={styles.userTop}>
                            <div className={styles.userName}>{userName}</div>
                        </div>
                        <div className={styles.userBottom}>
                            <div className={styles.userType}><b>{admin ? "Admin" : "User"}</b></div>
                            <div className={styles.userType}><b>·</b></div>
                            <div className={styles.userType}>Atlanta, Georgia</div>
                        </div>
                    </div>
                    
                    
                </div>

                {/* <Link href='../'>
                        <Image src={logoutIcon} width={40} height={40} className={styles.icon}/>
                </Link> */}


            </div>




    

    )
}

