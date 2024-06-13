import { FC, useEffect } from 'react';
import { PriceRow } from './PriceRow.tsx';
import { setPriceListIsOpen } from '../../../api/slices/priceListModalSlice.ts';
import { useAppDispatch, useTypedSelector } from '../../../store/hooks/redux.ts';
import { useGetServiceTitleQuery } from '../../../api/methods/serviceApi.ts';
import { useGetPriceListQuery } from '../../../api/methods/employeeHasServiceApi.ts';
import {motion} from "framer-motion";

export const ModalPriceList: FC = () => {
    const dispatch = useAppDispatch();
    const { isPriceListOpen, priceListIdService } = useTypedSelector(state => state.priceListModalReducer);
    const { data: serviceTitle, refetch: refetchTitle } = useGetServiceTitleQuery({idService: priceListIdService})
    const { data, refetch: refetchPrices } = useGetPriceListQuery({idService: priceListIdService})

    useEffect(() => {
        refetchTitle()
        refetchPrices()
    }, [refetchTitle, refetchPrices]);

    const handleCrossSpoilerClick = () => {
        dispatch(setPriceListIsOpen(false))
    }

    return (
        <motion.div
            className={"modal price-list__modal" + (isPriceListOpen ? ' active' : '')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="container">
                <h2>Прайс-лист</h2>
                <h3>{serviceTitle?.title}</h3>
                <div className="rows">
                    {
                        data?.map((item, key) => (
                            <PriceRow
                                key={key}
                                idEmployee={item.idEmployee}
                                idService={item.idService}
                                name={item.name}
                                surname={item.surname}
                                price={item.price}/>
                        ))
                    }
                </div>
                <div className="advice">нажмите, чтобы записаться</div>
                <div className="cross" onClick={handleCrossSpoilerClick}></div>
            </div>
            <div className="spoiler" onClick={handleCrossSpoilerClick}>

            </div>
        </motion.div>
    )
}