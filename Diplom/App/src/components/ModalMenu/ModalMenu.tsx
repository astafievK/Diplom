import {FC} from "react";
import {Link} from "react-router-dom";
import {useTypedSelector} from "../../store/hooks/redux.ts";
const ModalMenu: FC = () => {
    const {isOpen} = useTypedSelector(state => state.mobileMenuReducer);

    return (
        <div className={"mobile-menu__modal" + (isOpen ? ' active' : '')}>
            <div className="mobile-nav__wrapper">
                <nav className="mobile-nav main-panel">
                    <Link className={"mobile-nav__link"} to={"employers"}>Мастера</Link>
                    <Link className={"mobile-nav__link"} to={"works"}>Работы</Link>
                    <Link className={"mobile-nav__link"} to={"services"}>Услуги</Link>
                    <Link className={"mobile-nav__link"} to={"products"}>Товары</Link>
                    <Link className={"mobile-nav__link"} to={"time"}>Выбрать время</Link>
                    <Link className={"mobile-nav__link"} to={"contacts"}>Контакты</Link>
                </nav>
                <nav className="mobile-nav user-panel">
                    <Link className={"mobile-nav__link"} to={"orders-history"}>История заказов</Link>
                    <Link className={"mobile-nav__link"} to={"services-history"}>История услуг</Link>
                    <Link className={"mobile-nav__link cart"} to={"cart"}>
                        <div className="count">
                            <span>10</span>
                        </div>
                        <span>Корзина</span>
                    </Link>
                    <Link to={"admin"} className={"mobile-nav__link"}>Панель администратора</Link>
                </nav>
                <Link to={"profile"} className="mobile-nav__link profile">
                    <span className="name">Кирилл</span>
                    <span className="surname">Астафьев</span>
                    <span className="sep">•</span>
                    <span className="role">Клиент</span>
                </Link>
            </div>
        </div>
    )
}
export default ModalMenu