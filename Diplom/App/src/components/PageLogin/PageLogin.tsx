import {FC} from "react";
import { motion } from "framer-motion"

const PageLogin: FC = () => {
    return(
        <motion.div
            className="page login-container"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
        >
            <div className={"auth-form__wrapper"}>
                <span className={"label"}>Вход</span>
                <form className={"auth-form"}>
                    <input type={"tel"} id={"authLogin"} placeholder={"телефон"} required={true}/>
                    <div className="sep"></div>
                    <input type={"password"} id={"authPassword"} placeholder={"пароль"} required={true}/>
                    <input type={"submit"} id={"authSubmit"} value={">"}/>
                </form>
            </div>
        </motion.div>
    )
}

export default PageLogin