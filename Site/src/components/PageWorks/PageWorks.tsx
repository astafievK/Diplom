import {FC} from "react";
import WorksPhotosTiles from "./WorksPhotosTiles.tsx";

const PageWorks: FC = () => {
    return(
        <div className="page works">
            <h1>Работы мастеров</h1>
            <WorksPhotosTiles/>
        </div>
    )
}

export default PageWorks