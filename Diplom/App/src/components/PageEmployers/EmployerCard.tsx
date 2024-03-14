import {FC} from "react";
import {Link} from "react-router-dom";
import EmployerCardCategory from "./EmployerCardCategory.tsx";

const EmployerCard: FC = () => {
    return(
        <Link className={"employer-card"} to={"/"}>
            <div className="photo-wrapper">
                <img className={"employer-card__photo"} src={"../../src/assets/images/no-photo.jpg"} alt={"Изображение мастера"}/>
            </div>
            <div className="employer-card__info">
                <div className="bio">
                    <span className={"fullname"}>Астафьев Кирилл Александрович</span>
                    <span className={"experience"}>Стаж: 10 лет</span>
                    <span className={"works-count"}>192 работы</span>
                    <div className="categories">
                        <EmployerCardCategory title={"Маникюр"}/>
                        <EmployerCardCategory title={"Наращивание"}/>
                        <EmployerCardCategory title={"Маникюр"}/>
                        <EmployerCardCategory title={"Маникюр"}/>
                        <EmployerCardCategory title={"Маникюр"}/>
                        <EmployerCardCategory title={"Маникюр"}/>
                        <EmployerCardCategory title={"Маникюр"}/>
                        <EmployerCardCategory title={"Маникюр"}/>
                        <EmployerCardCategory title={"Маникюр"}/>
                    </div>
                </div>
                <span className="advice">нажмите, чтобы увидеть портфолио</span>
            </div>
        </Link>
    )
}

export default EmployerCard