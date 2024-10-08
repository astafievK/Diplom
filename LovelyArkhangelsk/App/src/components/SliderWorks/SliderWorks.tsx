import { FC, useEffect } from 'react';
import '../../flickity.css';
import Flickity from 'react-flickity-component';
import { useGetWorksImagesQuery } from '../../api/methods/imageApi.ts';
import WorkPhotoTile from '../PageWorks/WorkPhotoTile.tsx';

export const SliderWorks: FC = () => {
    const { data=[], refetch, isLoading } = useGetWorksImagesQuery()

    useEffect(() => {
        refetch();
    },[refetch])

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <Flickity
            className={'slider'}
            elementType={'div'}
            disableImagesLoaded={false}
            options={{
                initialIndex: 2,
                wrapAround: true,
                autoPlay: 2000,
                pauseAutoPlayOnHover: true,
                imagesLoaded: true,
                pageDots: false,
                selectedAttraction: 0.2,
                friction: 0.8,
                groupCells: 1,
                setGallerySize: false,
            }}
            static
        >
            {
                data.map((photo, key) => (
                    <WorkPhotoTile key={key} idEmployee={photo.idEmployee} idImage={photo.idImage}/>
                ))
            }
        </Flickity>
    );
}
