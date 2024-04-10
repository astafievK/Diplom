import {FC, useState} from "react";
import {Link} from "react-router-dom";
import {useAppDispatch, useTypedSelector} from "../../store/hooks/redux.ts";
import {swap} from "../../api/slices/mobileMenuSlice.ts";

const Header: FC = () => {
    const dispatch = useAppDispatch()
    const [selectedNavItem, setSelectedNavItem] = useState('');

    const {isOpen} = useTypedSelector(state => state.mobileMenuReducer);

    const handleClick = (path: string) => {
        setSelectedNavItem(path);
    }

    return(
        <div className={'header-wrapper' + (isOpen ? ' opened' : '')} id={"headerWrapper"}>
            <div className={"user-panel"}>
                <Link to={"profile"} className="fullname user-panel__item">
                    <span className="name">Кирилл</span>
                    <span className="surname">Астафьев</span>
                    <span className="sep">•</span>
                    <span className="role">Клиент</span>
                </Link>
                <Link className={"order-history user-panel__item" + (selectedNavItem === 'orders-history' ? " selected" : '')} to={"orders-history"} onClick={() => handleClick('orders-history')}>История заказов</Link>
                <Link className={"service-history user-panel__item" + (selectedNavItem === 'services-history' ? " selected" : '')} to={"services-history"} onClick={() => handleClick('services-history')}>История услуг</Link>
                <Link className={"cart user-panel__item" + (selectedNavItem === 'cart' ? " selected" : '')} to={"cart"} onClick={() => handleClick('cart')}>
                    <div className="count">
                        <span>10</span>
                    </div>
                    <span>Корзина</span>
                    <svg fill="#000000" width="30px" height="30px" viewBox="0 0 902.86 902.86">
                        <g>
                            <g>
                                <path d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z
			 M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"/>
                                <path d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717
			c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744
			c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742
			C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744
			c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z
			 M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742
			S619.162,694.432,619.162,716.897z"/>
                            </g>
                        </g>
                    </svg>
                </Link>
                <Link to={"admin"} className={"admin user-panel__item" + (selectedNavItem === 'admin' ? " selected" : '')} onClick={() => handleClick('admin')}>Панель администратора</Link>
            </div>

            <div className="main-panel">
                <Link className={"logo-wrapper" + (selectedNavItem === 'home' ? " selected" : '')} to={""} onClick={() => handleClick('home')}>
                    <img src="/images/logo.png" alt={"123"}></img>
                    <div className="label-wrapper">
                        <span>Lovely</span>
                        <span>Arkhangelsk</span>
                    </div>
                </Link>
                <nav className={"nav"}>
                    <Link className={"nav-item" + (selectedNavItem === 'employers' ? " selected" : '')} to={"employers"} onClick={() => handleClick('employers')}>
                        Мастера
                    </Link>
                    <Link className={"nav-item" + (selectedNavItem === 'works' ? " selected" : '')} to={"works"} onClick={() => handleClick('works')}>
                        Работы
                    </Link>
                    <Link className={"nav-item" + (selectedNavItem === 'services' ? " selected" : '')} to={"services"} onClick={() => handleClick('services')}>
                        Услуги
                    </Link>
                    <Link className={"nav-item" + (selectedNavItem === 'products' ? " selected" : '')} to={"products"} onClick={() => handleClick('products')}>
                        Товары
                    </Link>
                    <Link className={"nav-item" + (selectedNavItem === 'time' ? " selected" : '')} to={"time"} onClick={() => handleClick('time')}>
                        Выбрать время
                    </Link>
                    <Link className={"nav-item" + (selectedNavItem === 'contacts' ? " selected" : '')} to={"contacts"} onClick={() => handleClick('contacts')}>
                        Контакты
                    </Link>
                </nav>

                <Link to={"/login"} className={"login-button" + (selectedNavItem === 'login' ? " selected" : '')} onClick={() => handleClick('login')}>
                    <span>Войти</span>
                    <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M20 23L12 23C11.4477 23 11 22.5523 11 22C11 21.4477 11.4477 21 12 21L20 21C20.5523 21 21 20.5523 21 20L21 4C21 3.44771 20.5523 3 20 3L12 3C11.4477 3 11 2.55228 11 2C11 1.44772 11.4477 1 12 1L20 0.999999C21.6569 0.999999 23 2.34315 23 4L23 20C23 21.6569 21.6569 23 20 23Z"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M18.6881 10.6901C19.3396 11.4418 19.3396 12.5581 18.6881 13.3098L14.5114 18.1291C13.2988 19.5282 11 18.6707 11 16.8193L11 15L5 15C3.89543 15 3 14.1046 3 13L3 11C3 9.89541 3.89543 8.99998 5 8.99998L11 8.99998L11 7.18071C11 5.3293 13.2988 4.47176 14.5114 5.87085L18.6881 10.6901ZM16.6091 12.6549C16.9348 12.279 16.9348 11.7209 16.6091 11.345L13 7.18071L13 9.49998C13 10.3284 12.3284 11 11.5 11L5 11L5 13L11.5 13C12.3284 13 13 13.6716 13 14.5L13 16.8193L16.6091 12.6549Z"/>
                    </svg>
                </Link>

                <button className={"burger" + (isOpen ? ' active' : '')} id={"burgerBtn"} onClick={() => {
                    dispatch(swap())
                    isOpen
                        ? document.getElementById('body')!.classList.remove('scroll-locked')
                        : document.getElementById('body')!.classList.add('scroll-locked')
                }}></button>
            </div>
        </div>
    )
}

export default Header