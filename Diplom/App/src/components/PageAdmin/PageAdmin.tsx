import {FC} from "react";
import AdminLeftMenu from "./AdminLeftMenu.tsx";
import AdminBottomMenu from "./AdminBottomMenu.tsx";

const PageAdmin: FC = () => {
    return(
        <div
            className="page-admin__wrapper"
        >
            <AdminLeftMenu/>
            <AdminBottomMenu/>
            <div className="page admin">
                <h1>Панель управления</h1>
            </div>
        </div>
    )
}

export default PageAdmin