import {FC} from "react";
import {setSection} from "../../api/slices/adminPanelSlice.ts";
import {useAppDispatch} from "../../store/hooks/redux.ts";

const AdminBottomMenu: FC = () => {
    const dispatch = useAppDispatch()

    return (
        <div className="bottom-menu__wrapper">
            <nav className="bottom-menu">
                <div className="bottom-menu__item" onClick={() => dispatch(setSection("statistic"))}>
                    <img src={"/images/bottom-menu/statistic.png"} alt={""}/>
                    <span>Статистика</span>
                </div>
                <div className="bottom-menu__item" onClick={() => dispatch(setSection("employers"))}>
                    <img src={"/images/bottom-menu/employers.png"} alt={""}/>
                    <span>Сотрудники</span>
                </div>
                <div className="bottom-menu__item" onClick={() => dispatch(setSection("products"))}>
                    <img src={"/images/bottom-menu/products.png"} alt={""}/>
                    <span>Товары</span>
                </div>
                <div className="bottom-menu__item" onClick={() => dispatch(setSection("clients"))}>
                    <img src={"/images/bottom-menu/clients.png"} alt={""}/>
                    <span>Клиенты</span>
                </div>
            </nav>
        </div>
    )
}

export default AdminBottomMenu