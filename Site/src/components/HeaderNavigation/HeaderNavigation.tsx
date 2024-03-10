import {FC, useState} from "react";
import {Link} from "react-router-dom";

const HeaderNavigation: FC = () => {
    const [selectedNavItem, setSelectedNavItem] = useState('');

    const handleClick = (path: string) => {
        setSelectedNavItem(path);
    }

    return(
        <nav className={"nav"}>
            <Link className={"nav-item" + (selectedNavItem === 'home' ? " selected" : '')} to={""} onClick={() => handleClick('home')}>
                Главная
            </Link>
            <Link className={"nav-item" + (selectedNavItem === 'employers'  ? " selected" : '')} to={"employers"} onClick={() => handleClick('employers')}>
                Мастера
            </Link>
            <Link className={"nav-item" + (selectedNavItem === 'works'  ? " selected" : '')} to={"works"} onClick={() => handleClick('works')}>
                Работы
            </Link>
            <Link className={"nav-item" + (selectedNavItem === 'services'  ? " selected" : '')} to={"services"} onClick={() => handleClick('services')}>
                Услуги
            </Link>
            <Link className={"nav-item" + (selectedNavItem === 'products'  ? " selected" : '')} to={"products"} onClick={() => handleClick('products')}>
                Товары
            </Link>
            <Link className={"nav-item" + (selectedNavItem === 'time'  ? " selected" : '')} to={"time"} onClick={() => handleClick('time')}>
                Выбрать время
            </Link>
            <Link className={"nav-item" + (selectedNavItem === 'contacts'  ? " selected" : '')} to={"contacts"} onClick={() => handleClick('contacts')}>
                Контакты
            </Link>
        </nav>
    )
}

export default HeaderNavigation