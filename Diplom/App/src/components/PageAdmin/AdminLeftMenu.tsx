import {FC} from "react";

const AdminLeftMenu: FC = () => {
    return(
        <div className="left-menu__wrapper">
            <nav className="left-menu">
                <div className="left-menu__item">
                    <span>Статистика</span>
                </div>
                <div className="left-menu__item">
                    <span>Сотрудники</span>
                </div>
                <div className="left-menu__item">
                    <span>Товары</span>
                </div>
                <div className="left-menu__item">
                    <span>Клиенты</span>
                </div>
            </nav>
        </div>
    )
}

export default AdminLeftMenu