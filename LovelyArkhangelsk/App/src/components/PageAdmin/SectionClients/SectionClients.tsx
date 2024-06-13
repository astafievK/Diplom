import { FC, useEffect } from 'react';
import {motion} from "framer-motion";
import { useGetUsersQuery } from '../../../api/methods/userApi.ts';
import { ClientRow } from './ClientRow.tsx';

export const SectionClients: FC = () => {
    const { data, refetch } = useGetUsersQuery()

    useEffect(() => {
        refetch();
    }, []);

    return(
        <motion.div
            className="admin-section section-clients"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.3 }}
        >
            <h1>Клиенты</h1>
            <table className={"clients"}>
                <tbody>
                {data?.map((user, key) => (
                    <ClientRow key={key} idUser={user.idUser} roleTitle={user.role.title} surname={user.surname} name={user.name} patronymic={user.patronymic}/>
                ))}
                </tbody>
            </table>
        </motion.div>
    )
}
