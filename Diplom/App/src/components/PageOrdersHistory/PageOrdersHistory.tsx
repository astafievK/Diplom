import {FC} from "react";
import {motion} from "framer-motion";
import OrderCard from "./OrderCard.tsx";

const PageOrdersHistory: FC = () => {
    return (
        <motion.div
            className="page orders"
            initial={{y: -100, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            exit={{y: 100, opacity: 0}}
        >
            <h1>История заказов</h1>
            <div className="orders-container">
                <OrderCard
                    date={"12.01.2023"}
                    summ={1500}
                    code={594837}
                    status={"Получен"}
                />
                <OrderCard
                    date={"12.01.2023"}
                    summ={1500}
                    code={594837}
                    status={"В процессе"}
                />
                <OrderCard
                    date={"12.01.2023"}
                    summ={1500}
                    code={594837}
                    status={"Отменен"}
                />
            </div>
        </motion.div>
    )
}

export default PageOrdersHistory