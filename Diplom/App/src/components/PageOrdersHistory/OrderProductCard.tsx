import {FC} from "react";

interface OrderProductCardProps {
    imagePath: string
    productTitle: string
    code: string
    count: string
    price: number
}

const OrderProductCard: FC<OrderProductCardProps> = (props) => {
    return(
        <div className={"product-card"}>
            <div className="image-wrapper">
                <img src={props.imagePath} alt={"123"}/>
            </div>
            <span className="info">
                <span className="title">{props.productTitle}</span>
                <span className="code">{props.code}</span>
                <span className="count">{props.count} шт.</span>
                <span className="price">Цена: {props.price} руб.</span>
            </span>
        </div>
    )
}

export default OrderProductCard