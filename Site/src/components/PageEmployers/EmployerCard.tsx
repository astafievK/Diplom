import {FC} from "react";
import {Link} from "react-router-dom";

const EmployerCard: FC = () => {
    return(
        <Link className={"employer-card"} to={"/"}>
            <img className={"employer-card__photo"} src={"../../src/assets/images/no-photo.jpg"} alt={"Изображение мастера"}/>
            <div className="employer-card__info">
                <span className={"fullname"}>Астафьев Кирилл Александрович</span>
                <span className={"experience"}>Стаж: 10 лет</span>
                <span className={"works-count"}>192 работы</span>
                <span className="advice">нажмите, чтобы увидеть портфолио</span>
            </div>
        </Link>
    )
}

export default EmployerCard