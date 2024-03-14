import {FC, useEffect, useState} from "react";
import ButtonLogin from "../ButtonLogin/ButtonLogin.tsx";
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation.tsx";
import UserPanel from "../UserPanel/UserPanel.tsx";

const Header: FC = () => {
    const [isMoved, setIsMoved] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            if(scrollTop > 0){
                setIsMoved(true)
            } else{
                setIsMoved(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return(
        <div className={'header-wrapper' + (isMoved ? ' moved' : '')}>
            <UserPanel/>
            <div className="main-panel">
                <HeaderNavigation/>
                <ButtonLogin/>
            </div>
        </div>
    )
}

export default Header