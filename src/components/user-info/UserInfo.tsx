import Image from "next/image";
import css from './UserInfo.module.scss';

const UserInfo = () => {
    return (
        <div className={css.UserInfo}>
            <div>
                <div>Mugiwara</div>
                <div>🟢 - Online</div>
            </div>
            <Image
                src='/icons/userIcon.png'
                alt='user.icon'
                width={40}
                height={40}
            />
            <Image
                src='/icons/logoutIcon.png'
                alt='logout icon'
                width={40}
                height={40}
            />
        </div>
    );
}

export default UserInfo;