import React, {FC} from "react";

const WorkPhotoTile: FC = () => {
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const allTiles = document.querySelectorAll('.works-photos-tiles .tile-wrapper');
        const currentTile = event.currentTarget;
        if(currentTile.classList.contains('active')){
            currentTile.classList.remove('active');
        }
        else{
            allTiles.forEach(tile => tile.classList.remove('active'));
            currentTile.classList.add('active');
        }
    };

    return (
        <div className={'tile-wrapper'} onClick={handleClick}>
            <img src={"../../src/assets/images/no-photo.jpg"} alt={"плитка с фото"}/>
            <div className="spoiler"></div>
        </div>
    )
}

export default WorkPhotoTile