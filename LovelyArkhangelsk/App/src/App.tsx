import './index.css';
import {
    Outlet,
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './store/store.ts';
import { PersistGate } from 'redux-persist/integration/react';
import Header from './components/Header/Header.tsx';
import PageHome from './components/PageHome/PageHome.tsx';
import PageProfile from './components/PageProfile/PageProfile.tsx';
import PageLogin from './components/PageLogin/PageLogin.tsx';
import PageTime from './components/PageTime/PageTime.tsx';
import PageOrdersHistory from './components/PageOrdersHistory/PageOrdersHistory.tsx';
import PageServicesHistory from './components/PageServicesHistory/PageServicesHistory.tsx';
import PageAdmin from './components/PageAdmin/PageAdmin.tsx';
import PageWorks from './components/PageWorks/PageWorks.tsx';
import PageCart from './components/PageCart/PageCart.tsx';
import PageProducts from './components/PageProducts/PageProducts.tsx';
import PageServices from './components/PageServices/PageServices.tsx';
import ModalMenu from './components/Modals/ModalMenu/ModalMenu.tsx';
import { AnimatePresence } from 'framer-motion';
import { Footer } from './components/Footer/Footer.tsx';
import { PageEmployee } from './components/PageEmployee/PageEmployee.tsx';
import { ModalAddEmployer } from './components/Modals/ModalAddEmployee/ModalAddEmployer.tsx';
import { ModalEditEmployee } from './components/Modals/ModalEditEmployee/ModalEditEmployee.tsx';
import { ModalAddService } from './components/Modals/ModalAddService/ModalAddService.tsx';
import { useTypedSelector } from './store/hooks/redux.ts';
import { ModalEditService } from './components/Modals/ModalEditService/ModalEditService.tsx';
import { PageCreateAccount } from './components/PageCreateAccount/PageCreateAccount.tsx';
import PageEmployees from './components/PageEmployees/PageEmployees.tsx';
import { ModalPriceList } from './components/Modals/ModalPriceList/ModalPriceList.tsx';

const Root = () => {
    const addEmployerIsOpen = useTypedSelector(state => state.addEmployeeModalReducer)
    const editEmployerIsOpen = useTypedSelector(state => state.editEmployeeModalReducer)
    const addServiceIsOpen = useTypedSelector(state => state.addServiceModalReducer)
    const editServiceIsOpen = useTypedSelector(state => state.editServiceModalReducer)
    const priceListIsOpen = useTypedSelector(state => state.priceListModalReducer)

    return (
        <>
            <Header />
            <main>
                <AnimatePresence>
                    <Outlet />
                </AnimatePresence>
            </main>
            <Footer />
            <ModalMenu />
            {
                //<ModalWorkPhoto />
            }
            {
                priceListIsOpen.isPriceListOpen && <ModalPriceList />
            }
            {
                addEmployerIsOpen.isOpen && <ModalAddEmployer />
            }
            {
                editEmployerIsOpen.isOpen && <ModalEditEmployee />
            }
            {
                addServiceIsOpen.isOpen && <ModalAddService />
            }
            {
                editServiceIsOpen.isOpen && <ModalEditService />
            }
        </>
    );
};

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route path="" element={<PageHome />} />
            <Route path="/employees" element={<PageEmployees />} />
            <Route path="/employees/:idEmployee" element={<PageEmployee />} />
            <Route path="/login" element={<PageLogin />} />
            <Route path="/create" element={<PageCreateAccount />} />
            <Route path="/admin" element={<PageAdmin />} />
            <Route path="/profile" element={<PageProfile />} />
            <Route path="/time" element={<PageTime />} />
            <Route path="/works" element={<PageWorks />} />
            <Route path="/orders-history" element={<PageOrdersHistory />} />
            <Route path="/services-history" element={<PageServicesHistory />} />
            <Route path="/cart" element={<PageCart />} />
            <Route path="/services" element={<PageServices />} />
            <Route path="/products" element={<PageProducts />} />
            <Route path="*" element={<span>Страница не найдена</span>}/>
        </Route>
    ),
);

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <RouterProvider router={router} />
            </PersistGate>
        </Provider>
    );
}

export default App;
