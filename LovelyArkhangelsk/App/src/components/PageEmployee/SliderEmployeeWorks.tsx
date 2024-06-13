import { FC, useEffect } from 'react';
import '../../flickity.css';
import Flickity from 'react-flickity-component';
import { useGetEmployeeWorksImagesQuery } from '../../api/methods/imageApi.ts';
import WorkPhotoTile from '../PageWorks/WorkPhotoTile.tsx';

interface PageEmployerProps {
    idEmployee: number
}

export const SliderEmployeeWorks: FC<PageEmployerProps> = (props) => {
    const { data=[], refetch, isLoading } = useGetEmployeeWorksImagesQuery({idEmployee: props.idEmployee})

    useEffect(() => {
        refetch();
    }, [refetch]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <Flickity
            className={'slider'}
            elementType={'div'}
            disableImagesLoaded={false}
            options={{
                initialIndex: 1,
                wrapAround: true,
                autoPlay: 2000,
                pauseAutoPlayOnHover: true,
                imagesLoaded: true,
                pageDots: false,
                adaptiveHeight: true,
                selectedAttraction: 0.2,
                friction: 0.8,
                groupCells: 2,
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
