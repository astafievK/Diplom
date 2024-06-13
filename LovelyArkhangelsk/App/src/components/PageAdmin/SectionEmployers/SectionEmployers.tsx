import { FC, useEffect } from 'react';
import { motion } from 'framer-motion';
import EmployeeCard from '../../PageEmployees/EmployeeCard.tsx';
import { useGetEmployeesQuery } from '../../../api/methods/employeeApi.ts';

export const SectionEmployers: FC = () => {
    const {data=[], refetch} = useGetEmployeesQuery()

    useEffect(() => {
        refetch();
    }, [refetch]);

    return (
        <motion.div
            className="admin-section section-employers"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.3 }}
        >
            <h1>Сотрудники</h1>
            <div className="employers-wrapper">
                {
                    data &&
                    data.map((user, key) => (
                        <EmployeeCard key={key} idEmployee={user.employee!.idEmployee} isAdmin={true}/>
                    ))
                }
            </div>
        </motion.div>
    );
};
