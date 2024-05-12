import {FC} from "react";
import AdminLeftMenu from "./AdminLeftMenu.tsx";
import AdminBottomMenu from "./AdminBottomMenu.tsx";
import {useTypedSelector} from "../../store/hooks/redux.ts";
import {SectionStatistic} from "./SectionStatistic/SectionStatistic.tsx";
import {SectionEmployers} from "./SectionEmployers/SectionEmployers.tsx";
import {SectionClients} from "./SectionClients/SectionClients.tsx";
import { SectionServices } from './SectionServices/SectionServices.tsx';

const PageAdmin: FC = () => {
    const {sectionName} = useTypedSelector(state => state.adminPanelReducer);

    return(
        <div
            className="page-admin__wrapper"
        >
            <AdminLeftMenu/>
            <AdminBottomMenu/>
            <div className="page admin-container">
                {
                    sectionName == "statistic" ? <SectionStatistic/> :
                        sectionName == "employers" ? <SectionEmployers/> :
                            sectionName == "services" ? <SectionServices/> :
                                <SectionClients/>
                }
            </div>
        </div>
    )
}

export default PageAdmin