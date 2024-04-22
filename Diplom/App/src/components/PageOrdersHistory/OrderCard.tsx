import {FC} from "react";
import OrderProductCard from "./OrderProductCard.tsx";

interface OrderCardProps {
    date: string
    summ: number
    code: number
    status: string
}

const OrderCard: FC<OrderCardProps> = (props) => {
    return (
        <div className={"order-card"}>
            <span className={"card-header__wrapper"}>
                <span className="card-header__title">
                    <span className={"code"}>Заказ {props.code}</span>
                    <span className={"date"}>от {props.date}</span>
                </span>
                <div className="card-header__info">
                    <span className={"summary"}>{props.summ} руб.</span>
                    <div
                        className={`status ${props.status === "Получен" ? "success" : props.status === "В процессе" ? "waiting" : "canceled"}`}>{props.status}</div>
                </div>
            </span>
            <OrderProductCard
                imagePath={"/images/no-photo.jpg"}
                productTitle={"Гель-лак <Ух-ты> "}
                code={"123123"}
                count={"4"}
            />
        </div>
    )
}

export default OrderCard