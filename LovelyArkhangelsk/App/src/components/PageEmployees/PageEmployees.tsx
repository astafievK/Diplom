import { FC, useEffect } from 'react';
import EmployeeCard from "./EmployeeCard.tsx";
import {motion} from "framer-motion";
import { useGetEmployeesQuery } from '../../api/methods/employeeApi.ts';

const PageEmployees: FC = () => {
    const {data=[], refetch} = useGetEmployeesQuery()

    useEffect(() => {
        refetch();
    }, [refetch]);

    return(
        <motion.div
            className="page employers-container"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.3 }}
        >
            <h1>Наши мастера</h1>
            <div className={"employers-wrapper"}>
                {
                    data &&
                    data.map((user, key) => (
                        <EmployeeCard key={key} idEmployee={user.employee!.idEmployee}/>
                    ))
                }
                {
                    !data && <h2>Скоро тут будет много мастеров</h2>
                }
            </div>
        </motion.div>
    )
}

export default PageEmployees