import { FC, useState } from 'react';
import {Link} from "react-router-dom";
import {useAppDispatch, useTypedSelector} from "../../store/hooks/redux.ts";
import { swap, setIsOpen } from '../../api/slices/mobileMenuSlice.ts';
import { logout } from '../../api/slices/authSlice.ts';

const Header: FC = () => {
    const [listIsVisible, setListIsVisible] = useState(false)
    const dispatch = useAppDispatch()
    const { isOpen } = useTypedSelector(state => state.mobileMenuReducer);
    const { user } = useTypedSelector(state => state.auth)

    const handleDropdownItemClick = () => {
        setListIsVisible(false)
    }

    return (
        <>
            <header className={'header-wrapper'} id={'headerWrapper'}>
                <div className="main-panel">
                    <nav className={'nav'}>
                        <Link className={'nav-item'} to={'/'}>Главная</Link>
                        <Link className={'nav-item'} to={'employees'}>Мастера</Link>
                        <Link className={'nav-item'} to={'works'}>Работы</Link>
                        <Link className={'logo-wrapper'} to={''} onClick={() => {
                            dispatch(setIsOpen(false));
                        }}>
                            <img src={'/images/logo-new.png'} alt={''} />
                            <div className="label-wrapper">
                                <span>Lovely</span>
                                <span>Arkhangelsk</span>
                            </div>
                        </Link>
                        <Link className={'nav-item'} to={'services'}>Услуги</Link>
                        <Link className={'nav-item'} to={'time'}>Записаться</Link>
                        {
                            !user
                            && <Link to={'login'} className="nav-item">Войти</Link>
                        }
                        {
                            user &&
                            <div className={`nav-item dropdown-profile${listIsVisible ? ' expanded' : ""}`} id={"dropdownProfile"} onClick={() => setListIsVisible(!listIsVisible)}>
                                <span className={`name`}>{user.name}</span>

                                <div className={`dropdown-content${listIsVisible ? ' visible' : ""}`}>
                                    {
                                        <Link to={'services-history'} className="dropdown-content__item" onClick={handleDropdownItemClick}>История услуг</Link>
                                    }
                                    {
                                        !user &&
                                        <Link to={'/login'} className="dropdown-content__item" onClick={handleDropdownItemClick}>Авторизация</Link>
                                    }
                                    {
                                        user && user.role && user.role.title === 'Мастер' &&
                                        <Link to={`/employees/${user.idEmployee}`} className="dropdown-content__item" onClick={handleDropdownItemClick}>Мое портфолио</Link>
                                    }
                                    {
                                        user && user.role && user.role.title === 'Администратор' && (
                                            <Link to={'/admin'} className="dropdown-content__item" onClick={handleDropdownItemClick}>Панель администратора</Link>
                                        )
                                    }
                                    {
                                        user &&
                                        <button className="dropdown-content__item exit"
                                                onClick={() => {
                                                    handleDropdownItemClick()
                                                    dispatch(logout());
                                                }}>Выйти из аккаунта</button>
                                    }
                                </div>
                            </div>
                        }
                    </nav>

                    <button className={'burger' + (isOpen ? ' active' : '')} id={'burgerBtn'} onClick={() => {
                        dispatch(swap());
                        isOpen
                            ? document.getElementById('body')!.classList.remove('scroll-locked')
                            : document.getElementById('body')!.classList.add('scroll-locked')
                    }}></button>
                </div>
            </header>
        </>
    )
}

export default Header