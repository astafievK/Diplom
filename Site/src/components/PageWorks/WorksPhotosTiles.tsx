import {FC} from "react";
import WorkPhotoTile from "./WorkPhotoTile.tsx";

const WorksPhotosTiles: FC = () => {
        return (
            <div className={"works-photos-tiles"}>
                    <WorkPhotoTile id={1}/>
                    <WorkPhotoTile id={2}/>
                    <WorkPhotoTile id={3}/>
                    <WorkPhotoTile id={4}/>
            </div>
        )
}

export default WorksPhotosTiles