import {FC} from "react";

interface ServiceCardProps {
    title: string
    photoPath: string
}
const ServiceCard: FC<ServiceCardProps> = (props) => {
    return(
        <div className="service-card">
            <img className="service-card__photo" src={`/images/services/${props.photoPath}`} alt={"Изображение услуги"}/>
            <div className="service-card__info">
                <div className="label-wrapper">
                    <span>{props.title}</span>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard