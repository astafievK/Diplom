import { FC } from 'react';
import { motion } from 'framer-motion';
import EmployerCard from '../../PageEmployers/EmployerCard.tsx';
import { AddEmployerButton } from './AddEmployerButton.tsx';

export const SectionEmployers: FC = () => {
    return (
        <motion.div
            className="admin-section section-employers"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
        >
            <h1>Сотрудники</h1>
            <AddEmployerButton />
            <div className="employers-wrapper">
                <EmployerCard isAdmin={true} employerId={1} />
                <EmployerCard isAdmin={true} employerId={2} />
                <EmployerCard isAdmin={true} employerId={3} />
                <EmployerCard isAdmin={true} employerId={4} />
                <EmployerCard isAdmin={true} employerId={5} />
            </div>
        </motion.div>
    );
};
