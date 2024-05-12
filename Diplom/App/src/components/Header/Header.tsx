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
                <div className="fullname user-panel__item">
                    <span className="name">Кирилл</span>
                    <span className="surname">Астафьев</span>
                    <span className="sep">•</span>
                    <span className="role">Клиент</span>
                </div>
                <Link className={"service-history user-panel__item"} to={"services-history"}>История услуг</Link>
                <Link to={"admin"} className={"admin user-panel__item"}>Панель администратора</Link>
            </div>
            <div className="main-panel">
                <Link className={"logo-wrapper"} to={""} onClick={() => {
                    dispatch(setIsOpen(false));
                }}>
                    <img src="/images/logo.png" alt={"123"}></img>
                    <div className="label-wrapper">
                        <span>Lovely</span>
                        <span>Arkhangelsk</span>
                    </div>
                </Link>
                <nav className={"nav"}>
                    <Link className={"nav-item"} to={"employers"}>Мастера</Link>
                    <Link className={"nav-item"} to={"works"}>Работы</Link>
                    <Link className={"nav-item"} to={"services"}>Услуги</Link>
                    <Link className={"nav-item"} to={"time"}>Записаться</Link>
                </nav>

                <Link to={"login"} className={"login-button"}>
                    <span>Войти</span>
                    <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M20 23L12 23C11.4477 23 11 22.5523 11 22C11 21.4477 11.4477 21 12 21L20 21C20.5523 21 21 20.5523 21 20L21 4C21 3.44771 20.5523 3 20 3L12 3C11.4477 3 11 2.55228 11 2C11 1.44772 11.4477 1 12 1L20 0.999999C21.6569 0.999999 23 2.34315 23 4L23 20C23 21.6569 21.6569 23 20 23Z" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M18.6881 10.6901C19.3396 11.4418 19.3396 12.5581 18.6881 13.3098L14.5114 18.1291C13.2988 19.5282 11 18.6707 11 16.8193L11 15L5 15C3.89543 15 3 14.1046 3 13L3 11C3 9.89541 3.89543 8.99998 5 8.99998L11 8.99998L11 7.18071C11 5.3293 13.2988 4.47176 14.5114 5.87085L18.6881 10.6901ZM16.6091 12.6549C16.9348 12.279 16.9348 11.7209 16.6091 11.345L13 7.18071L13 9.49998C13 10.3284 12.3284 11 11.5 11L5 11L5 13L11.5 13C12.3284 13 13 13.6716 13 14.5L13 16.8193L16.6091 12.6549Z" />
                    </svg>
                </Link>

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