import {FC} from "react";
import {Link} from "react-router-dom";

export const Footer: FC = () => {
        return(
        <footer className={"footer-wrapper"}>
            <div className="phone-wrapper">
                <span>+79118727440</span>
            </div>
            <div className="title-wrapper">
                <Link to={"/"}>Lovely Arkhangelsk</Link>
            </div>
            <div className="address-wrapper">
                <span>г. Архангельск</span>
                <span>д. Часовенское 31, строение 2</span>
                <span>10:00-19:00 Каждый день</span>
            </div>
        </footer>
        )
}