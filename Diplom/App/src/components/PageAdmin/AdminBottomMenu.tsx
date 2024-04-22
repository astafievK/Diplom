import {FC} from "react";

const AdminBottomMenu: FC = () => {
    return (
        <div className="bottom-menu__wrapper">
            <nav className="bottom-menu">
                <div className="bottom-menu__item">
                    <img src={"/images/bottom-menu/statistic.png"} alt={""}/>
                    <span>Статистика</span>
                </div>
                <div className="bottom-menu__item">
                    <img src={"/images/bottom-menu/employers.png"} alt={""}/>
                    <span>Сотрудники</span>
                </div>
                <div className="bottom-menu__item">
                    <img src={"/images/bottom-menu/products.png"} alt={""}/>
                    <span>Товары</span>
                </div>
                <div className="bottom-menu__item">
                    <img src={"/images/bottom-menu/clients.png"} alt={""}/>
                    <span>Клиенты</span>
                </div>
            </nav>
        </div>
    )
}

export default AdminBottomMenu