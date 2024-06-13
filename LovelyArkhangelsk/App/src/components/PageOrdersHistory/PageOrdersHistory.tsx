import {FC} from "react";
import {motion} from "framer-motion";
import OrderCard from "./OrderCard.tsx";

const PageOrdersHistory: FC = () => {
    return (

        <motion.div
            className="page orders-container"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.3 }}
        >
            <h1>История заказов</h1>
            <div className="orders">
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