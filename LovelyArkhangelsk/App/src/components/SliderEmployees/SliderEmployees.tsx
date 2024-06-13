import { FC, useEffect } from 'react';
import '../../flickity.css';
import Flickity from 'react-flickity-component';
import EmployeeCard from '../PageEmployees/EmployeeCard.tsx';
import { useGetEmployeesQuery } from '../../api/methods/employeeApi.ts';

export const SliderEmployees: FC = () => {
    const {data=[], refetch, isLoading} = useGetEmployeesQuery()

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
                initialIndex: 2,
                wrapAround: true,
                autoPlay: 2000,
                pauseAutoPlayOnHover: true,
                imagesLoaded: true,
                pageDots: false,
                selectedAttraction: 0.2,
                friction: 0.8,
                groupCells: 1,
            }}
            static
        >
            {
                data &&
                data.map((user, key) => (
                    <EmployeeCard key={key} idEmployee={user.employee!.idEmployee}/>
                ))
            }
        </Flickity>
    );
}
