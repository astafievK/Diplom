import {FC} from "react";
import WorkPhotoTile from "./WorkPhotoTile.tsx";

const PageWorks: FC = () => {
    return(
        <div className="page works">
            <h1>Работы мастеров</h1>
            <div className={"works-photos-tiles"}>
                <WorkPhotoTile/>
                <WorkPhotoTile/>
                <WorkPhotoTile/>
                <WorkPhotoTile/>
                <WorkPhotoTile/>
                <WorkPhotoTile/>
                <WorkPhotoTile/>
                <WorkPhotoTile/>
                <WorkPhotoTile/>
                <WorkPhotoTile/>
                <WorkPhotoTile/>
            </div>
        </div>
    )
}

export default PageWorks