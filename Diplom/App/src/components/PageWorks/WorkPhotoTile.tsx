import {FC} from "react";

const WorkPhotoTile: FC = () => {
    return (
        <div className={'tile-wrapper'}>
            <img src={"/images/no-photo.jpg"} alt={"плитка с фото"}/>
            <div className="spoiler"></div>
        </div>
    )
}

export default WorkPhotoTile