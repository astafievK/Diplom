import {FC} from "react";
import WorkPhotoTile from "./WorkPhotoTile.tsx";
import {motion} from "framer-motion";
import { useGetWorksImagesQuery } from '../../api/methods/imageApi.ts';

const PageWorks: FC = () => {
    const {data=[]} = useGetWorksImagesQuery()

    return(
        <motion.div
            className="page works-container"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.3 }}
        >
            <h1>Работы мастеров</h1>
            <div className={"works-photos-tiles"}>
                {
                    data.map((photo, key) => (
                        <WorkPhotoTile key={key} idEmployee={photo.idEmployee} idImage={photo.idImage}/>
                    ))
                }
            </div>
        </motion.div>
    )
}

export default PageWorks