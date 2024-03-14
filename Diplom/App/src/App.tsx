import './index.css'
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Provider } from 'react-redux';
import {persistor, store} from "./store/store.ts";
import {PersistGate} from "redux-persist/integration/react";
import Header from "./components/Header/Header.tsx";
import PageHome from "./components/PageHome/PageHome.tsx";
import PageProfile from "./components/PageProfile/PageProfile.tsx";
import PageLogin from "./components/PageLogin/PageLogin.tsx";
import PageTime from "./components/PageTime/PageTime.tsx";
import PageOrdersHistory from "./components/PageOrdersHistory/PageOrdersHistory.tsx";
import PageServicesHistory from "./components/PageServicesHistory/PageServicesHistory.tsx";
import PageAdmin from "./components/PageAdmin/PageAdmin.tsx";
import PageWorks from "./components/PageWorks/PageWorks.tsx";
import PageEmployers from "./components/PageEmployers/PageEmployers.tsx";
import PageCart from "./components/PageCart/PageCart.tsx";
import PageProducts from "./components/PageProducts/PageProducts.tsx";
import PageServices from "./components/PageServices/PageServices.tsx";
import PageContacts from "./components/PageContacts/PageContacts.tsx";

const Root = () => {
  return (
      <>
          <Header/>
          <main>
              <Outlet/>
          </main>
      </>
  )
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route path="" element={
                <>
                    <PageHome/>
                </>
            } />
            <Route path="/employers" element={
                <>
                    <PageEmployers/>
                </>
            } />
            <Route path="/login" element={
                <>
                    <PageLogin/>
                </>
            } />
            <Route path="/admin" element={
                <>
                    <PageAdmin/>
                </>
            } />
            <Route path="/profile" element={
                <>
                    <PageProfile/>
                </>
            } />
            <Route path="/time" element={
                <>
                    <PageTime/>
                </>
            } />
            <Route path="/works" element={
                <>
                    <PageWorks/>
                </>
            } />
            <Route path="/orders-history" element={
                <>
                    <PageOrdersHistory/>
                </>
            } />
            <Route path="/services-history" element={
                <>
                    <PageServicesHistory/>
                </>
            } />
            <Route path="/cart" element={
                <>
                    <PageCart/>
                </>
            } />
            <Route path="/services" element={
                <>
                    <PageServices/>
                </>
            } />
            <Route path="/products" element={
                <>
                    <PageProducts/>
                </>
            } />
            <Route path="/contacts" element={
                <>
                    <PageContacts/>
                </>
            } />
        </Route>
    ))


function App() {
  return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
  )
}

export default App
