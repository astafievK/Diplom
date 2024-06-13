// Импорт необходимых библиотек и компонентов
import {FC} from "react";
import AdminLeftMenu from "./AdminLeftMenu.tsx";
import AdminBottomMenu from "./AdminBottomMenu.tsx";
import {useTypedSelector} from "../../store/hooks/redux.ts";
import {SectionStatistic} from "./SectionStatistic/SectionStatistic.tsx";
import {SectionEmployers} from "./SectionEmployers/SectionEmployers.tsx";
import {SectionClients} from "./SectionClients/SectionClients.tsx";
import {SectionServices} from './SectionServices/SectionServices.tsx';
import { Navigate } from 'react-router-dom';
import {motion} from "framer-motion";

// Инициализация компонента
const PageAdmin: FC = () => {
    const {sectionName} = useTypedSelector(state => state.adminPanelReducer);
    const {user} = useTypedSelector(state => state.auth)

    return(
        <>
            {
                // Если пользователь не авторизован или у него нет прав администратора, перенаправить на страницу авторизации
               (!user || (user.role.title !== 'Администратор')) && <Navigate to='/login' />
            }
            <div
                className="page-admin__wrapper"
            >
                <AdminLeftMenu />
                <AdminBottomMenu />
                <motion.div
                    className="page admin-container"
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0.3 }}
                >
                    {
                        // Проверка переменной на выбранный пункт бокового меню
                        sectionName == "statistic" ? <SectionStatistic /> :
                            sectionName == "employers" ? <SectionEmployers /> :
                                sectionName == "services" ? <SectionServices /> :
                                    <SectionClients />
                    }
                </motion.div>
            </div>
        </>
    )
}

// Экспорт созданного комопнента для использования в будущем
export default PageAdmin