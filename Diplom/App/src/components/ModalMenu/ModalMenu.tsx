import {FC} from "react";
import {Link} from "react-router-dom";
import {useAppDispatch, useTypedSelector} from "../../store/hooks/redux.ts";
import {close} from "../../api/slices/mobileMenuSlice.ts";

const ModalMenu: FC = () => {
    const dispatch = useAppDispatch()
    const {isOpen} = useTypedSelector(state => state.mobileMenuReducer);

    return (
        <div className={"mobile-menu__modal" + (isOpen ? ' active' : '')}>
            <div className="menu">
                <Link className={"menu-link"} to={"profile"} onClick={() => { dispatch(close()) }}>Профиль</Link>
                <Link className={"menu-link"} to={"cart"} onClick={() => { dispatch(close()) }}>Корзина</Link>
                <Link className={"menu-link"} to={"employers"} onClick={() => { dispatch(close()) }}>Мастера</Link>
                <Link className={"menu-link"} to={"works"} onClick={() => { dispatch(close()) }}>Работы</Link>
                <Link className={"menu-link"} to={"services"} onClick={() => { dispatch(close()) }}>Услуги</Link>
                <Link className={"menu-link"} to={"products"} onClick={() => { dispatch(close()) }}>Товары</Link>
                <Link className={"menu-link"} to={"time"} onClick={() => { dispatch(close()) }}>Записаться</Link>
                <Link className={"menu-link"} to={"contacts"} onClick={() => { dispatch(close()) }}>Контакты</Link>
                <Link className={"menu-link"} to={"orders-history"} onClick={() => { dispatch(close()) }}>Мои заказы</Link>
                <Link className={"menu-link"} to={"services-history"} onClick={() => { dispatch(close()) }}>Мои услуги</Link>
                <Link className={"menu-link admin"} to={"admin"} onClick={() => { dispatch(close()) }}>Админ-ие</Link>
                <Link className={"menu-link login"} to={"login"} onClick={() => { dispatch(close()) }}>Вход</Link>
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