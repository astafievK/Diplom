import {FC} from "react";
import {setSection} from "../../api/slices/adminPanelSlice.ts";
import { useAppDispatch, useTypedSelector } from '../../store/hooks/redux.ts';

const AdminBottomMenu: FC = () => {
    const dispatch = useAppDispatch()
    const {sectionName} = useTypedSelector(state => state.adminPanelReducer);

    return (
        <div className="bottom-menu__wrapper">
            <nav className="bottom-menu">
                <div className={`bottom-menu__item ${sectionName == "statistic" ? "selected" : ""}`} onClick={() => dispatch(setSection("statistic"))}>
                    <span>Статистика</span>
                </div>
                <div className={`bottom-menu__item ${sectionName == "employers" ? "selected" : ""}`} onClick={() => dispatch(setSection("employers"))}>
                    <span>Сотрудники</span>
                </div>
                <div className={`bottom-menu__item ${sectionName == "services" ? "selected" : ""}`} onClick={() => dispatch(setSection("services"))}>
                    <span>Услуги</span>
                </div>
                <div className={`bottom-menu__item ${sectionName == "clients" ? "selected" : ""}`} onClick={() => dispatch(setSection("clients"))}>
                    <span>Клиенты</span>
                </div>
            </nav>
        </div>
    )
}

export default AdminBottomMenu