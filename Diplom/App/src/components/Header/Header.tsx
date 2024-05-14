import {FC} from "react";
import {Link} from "react-router-dom";
import {useAppDispatch, useTypedSelector} from "../../store/hooks/redux.ts";
import { swap, setIsOpen } from '../../api/slices/mobileMenuSlice.ts';

const Header: FC = () => {
    const dispatch = useAppDispatch()
    const { isOpen } = useTypedSelector(state => state.mobileMenuReducer);

    return (
        <header className={'header-wrapper' + (isOpen ? ' opened' : '')} id={"headerWrapper"}>
            <div className={"user-panel"}>
                <Link className="fullname user-panel__item" to={"/profile"}>Мой профиль</Link>
                <Link className={"user-panel__item "} to={"/login"}>Авторизация</Link>
                <Link className={"service-history user-panel__item"} to={"services-history"}>История услуг</Link>
                <Link to={"admin"} className={"admin user-panel__item"}>Панель администратора</Link>
            </div>
            <div className="main-panel">
                <nav className={"nav"}>
                    <Link className={"nav-item"} to={"employers"}>Мастера</Link>
                    <Link className={"nav-item"} to={"works"}>Работы</Link>
                    <Link className={"logo-wrapper"} to={""} onClick={() => {
                        dispatch(setIsOpen(false));
                    }}>
                        <img src={"/images/logo-new.png"} alt={""}/>
                        <div className="label-wrapper">
                            <span>Lovely</span>
                            <span>Arkhangelsk</span>
                        </div>
                    </Link>
                    <Link className={"nav-item"} to={"services"}>Услуги</Link>
                    <Link className={"nav-item"} to={"time"}>Записаться</Link>
                </nav>

                <button className={"burger" + (isOpen ? ' active' : '')} id={"burgerBtn"} onClick={() => {
                    dispatch(swap())
                    isOpen
                        ? document.getElementById('body')!.classList.remove('scroll-locked')
                        : document.getElementById('body')!.classList.add('scroll-locked')
                }}></button>
            </div>
        </header>
    )
}

export default Header