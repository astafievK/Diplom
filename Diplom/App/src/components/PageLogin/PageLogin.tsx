import {FC} from "react";
import { motion } from "framer-motion"
import {Link} from "react-router-dom";

const PageLogin: FC = () => {
    return(
        <motion.div
            className="page login"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
        >
            <div className={"auth-form__wrapper"}>
                <Link className={"label"} to={"/"}> Lovely Arkhangelsk</Link>
                <form className={"auth-form"}>
                    <input type={"tel"} id={"authLogin"} placeholder={"телефон"}
                    />
                    <div className="sep"></div>
                    <input type={"password"} id={"authPassword"} placeholder={"пароль"}
                    />
                    <input type={"submit"} id={"authSubmit"} value={">"}/>
                </form>
                <Link className={"recover"} to={"recover"}>восстановить</Link>
            </div>
        </motion.div>
    )
}

export default PageLogin