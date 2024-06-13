import {FC} from "react";
import {useAppDispatch, useTypedSelector} from "../../store/hooks/redux.ts";
import {setSection} from "../../api/slices/adminPanelSlice.ts";

const AdminLeftMenu: FC = () => {
    const dispatch = useAppDispatch()
    const {sectionName} = useTypedSelector(state => state.adminPanelReducer);

    return (
        <div className="left-menu__wrapper">
            <nav className="left-menu">
                <div className={`left-menu__item ${sectionName == "statistic" ? "selected" : ""}`}
                     onClick={() => dispatch(setSection("statistic"))}>
                    <span>Статистика</span>
                </div>
                <div className={`left-menu__item ${sectionName == "employers" ? "selected" : ""}`}
                     onClick={() => dispatch(setSection("employers"))}>
                    <span>Сотрудники</span>
                </div>
                <div className={`left-menu__item ${sectionName == "services" ? "selected" : ""}`}
                     onClick={() => dispatch(setSection("services"))}>
                    <span>Услуги</span>
                </div>
                <div className={`left-menu__item ${sectionName == "clients" ? "selected" : ""}`}
                     onClick={() => dispatch(setSection("clients"))}>
                    <span>Клиенты</span>
                </div>
            </nav>
        </div>
    )
}

export default AdminLeftMenu