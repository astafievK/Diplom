import {FC} from "react";
import WorkPhotoTile from "./WorkPhotoTile.tsx";
import {motion} from "framer-motion";

const PageWorks: FC = () => {
    return(
        <motion.div
            className="page works-container"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
        >
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
        </motion.div>
    )
}

export default PageWorks