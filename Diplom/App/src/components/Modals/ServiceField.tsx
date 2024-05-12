import React, { FC } from 'react';

interface ServiceFieldProps {
    serviceId: number
    serviceTitle: string
    isSelected: boolean
}

export const ServiceField: FC<ServiceFieldProps> = (props) => {
    //const employerId = props.employerId
    const serviceId = props.serviceId
    const serviceTitle = props.serviceTitle
    const isSelected = props.isSelected

    const handleServiceButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.currentTarget.classList.toggle('selected');
        console.log(serviceId)
    };

    return (
        <div className="service">
            <button
                className={`service-button ${isSelected ? 'selected' : ''}`}
                onClick={(e) => handleServiceButtonClick(e)}
            >
                {serviceTitle}
            </button>

            <input type="text" className="price-field" placeholder={"руб."} />
        </div>
    );
};