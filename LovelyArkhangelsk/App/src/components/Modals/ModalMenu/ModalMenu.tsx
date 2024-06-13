import {FC} from "react";
import {Link} from "react-router-dom";
import {useAppDispatch, useTypedSelector} from "../../../store/hooks/redux.ts";
import {setIsOpen} from "../../../api/slices/mobileMenuSlice.ts";
import { logout } from '../../../api/slices/authSlice.ts';

const ModalMenu: FC = () => {
    const dispatch = useAppDispatch()
    const {isOpen} = useTypedSelector(state => state.mobileMenuReducer);
    const { user } = useTypedSelector(state => state.auth)


    return (
        <div className={"modal mobile-menu__modal" + (isOpen ? ' active' : '')}>
            <div className="container">
                <div className="menu">
                    <Link className={"menu-link"} to={"/"} onClick={() => {
                        dispatch(setIsOpen(false))
                    }}>Главная</Link>
                    <Link className={"menu-link"} to={"employees"} onClick={() => {
                        dispatch(setIsOpen(false))
                    }}>Мастера</Link>
                    <Link className={"menu-link"} to={"works"} onClick={() => {
                        dispatch(setIsOpen(false))
                    }}>Работы</Link>
                    <Link className={"menu-link"} to={"services"} onClick={() => {
                        dispatch(setIsOpen(false))
                    }}>Услуги</Link>
                    <Link className={"menu-link"} to={"time"} onClick={() => {
                        dispatch(setIsOpen(false))
                    }}>Записаться</Link>
                    {
                        user && user.role && user.role.title === 'Мастер' &&
                        <Link className={"menu-link"} to={`/employees/${user.idEmployee}`} onClick={() => {
                            dispatch(setIsOpen(false))
                        }}>Мое портфолио</Link>
                    }
                    {
                        user && user.role && user.role.title === 'Администратор' && (
                            <Link className={"menu-link"} to={"admin"} onClick={() => {
                                dispatch(setIsOpen(false))
                            }}>Админ-ие</Link>
                        )
                    }
                    {
                        !user &&  <Link className={"menu-link login-logout"} to={"login"} onClick={() => {
                            dispatch(setIsOpen(false))
                        }}>Вход</Link>
                    }
                    {
                        user &&  <button className={"menu-link login-logout"} onClick={() => {
                            dispatch(logout())
                        }}>Выход</button>
                    }

                </div>
                <div className="address">
                    <span>г. Архангельск</span>
                    <span>д. Часовенское 31, строение 2</span>
                    <span>10:00-19:00 Каждый день</span>
                    <span>+79118727440</span>
                </div>
            </div>
            <div className="spoiler">

            </div>
        </div>
    )
}
export default ModalMenu