import {FC} from "react";

const ProductCard: FC = () => {
    return(
        <div className="product-card">
            <div className="photo-wrapper">
                <img className={"employer-card__photo"} src={"/images/no-photo.jpg"} alt={"Изображение мастера"}/>
            </div>
            <div className="employer-card__info">
                <div className="info">
                    <div className="color"></div>
                    <div className="size">25 мл</div>
                </div>
                <span className="advice">нажмите, чтобы увидеть портфолио</span>
            </div>
        </div>
    )
}

export default ProductCard