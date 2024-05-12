import {FC} from "react";
import {Link} from "react-router-dom";
import {useAppDispatch, useTypedSelector} from "../../../store/hooks/redux.ts";
import {setIsOpen} from "../../../api/slices/mobileMenuSlice.ts";

const ModalMenu: FC = () => {
    const dispatch = useAppDispatch()
    const {isOpen} = useTypedSelector(state => state.mobileMenuReducer);

    return (
        <div className={"mobile-menu__modal" + (isOpen ? ' active' : '')}>
            <div className="menu">
                <Link className={"menu-link"} to={"/"} onClick={() => { dispatch(setIsOpen(false)) }}>Главная</Link>
                <Link className={"menu-link"} to={"employers"} onClick={() => { dispatch(setIsOpen(false))}}>Мастера</Link>
                <Link className={"menu-link"} to={"works"} onClick={() => { dispatch(setIsOpen(false))}}>Работы</Link>
                <Link className={"menu-link"} to={"services"} onClick={() => { dispatch(setIsOpen(false))}}>Услуги</Link>
                <Link className={"menu-link"} to={"time"} onClick={() => { dispatch(setIsOpen(false))}}>Записаться</Link>
                <Link className={"menu-link"} to={"admin"} onClick={() => { dispatch(setIsOpen(false))}}>Админ-ие</Link>
                <Link className={"menu-link"} to={"login"} onClick={() => { dispatch(setIsOpen(false))}}>Вход</Link>
            </div>
            <div className="address">
                <span>г. Архангельск</span>
                <span>д. Часовенское 31, строение 2</span>
                <span>10:00-19:00 Каждый день</span>
                <span>+79118727440</span>
            </div>
        </div>
    )
}
export default ModalMenu