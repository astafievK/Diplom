import { FC } from 'react';
import '../../flickity.css';
import Flickity from 'react-flickity-component';
import EmployerCard from '../PageEmployers/EmployerCard.tsx';



export const SliderEmployers: FC = () => {
    return (
        <Flickity
            className={'slider'}
            elementType={'div'}
            disableImagesLoaded={false}
            options={{
                initialIndex: 3,
                wrapAround: true,
                autoPlay: 2000,
                pauseAutoPlayOnHover: true,
                imagesLoaded: true,
                pageDots: false,
                adaptiveHeight: true,
                selectedAttraction: 0.2,
                friction: 0.8,
                groupCells: 1,
            }}
            static
        >
            <EmployerCard employerId={1}/>
            <EmployerCard employerId={2}/>
            <EmployerCard employerId={3}/>
            <EmployerCard employerId={4}/>
            <EmployerCard employerId={5}/>
            <EmployerCard employerId={6}/>
            <EmployerCard employerId={7}/>
            <EmployerCard employerId={8}/>
            <EmployerCard employerId={9}/>
        </Flickity>
    );
}
