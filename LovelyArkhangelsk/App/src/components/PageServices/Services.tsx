import { FC, useEffect } from 'react';
import ServiceCard from './ServiceCard.tsx';
import { useGetServicesQuery } from '../../api/methods/serviceApi.ts';

interface ServicesProps {
    isAdmin: boolean
}

export const Services: FC<ServicesProps> = (props) => {
    const {data=[], refetch} = useGetServicesQuery()

    useEffect(() => {
        refetch()
    }, [refetch])

    return (
        <div className="services">
            {
                data.map((service) => (
                    <ServiceCard key={service.idService} idService={service.idService} title={service.title} isAdmin={props.isAdmin}/>
                ))
            }
        </div>
    )
}