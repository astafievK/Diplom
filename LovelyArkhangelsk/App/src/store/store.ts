import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { baseApi } from '../api/api.ts';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { setupListeners } from '@reduxjs/toolkit/query';
import mobileMenuSlice from '../api/slices/mobileMenuSlice.ts';
import adminPanelSlice from '../api/slices/adminPanelSlice.ts';
import timeFormSlice from '../api/slices/timeFormSlice.ts';
import workModalSlice from '../api/slices/workModalSlice.ts';
import addEmployerModalSlice from '../api/slices/addEmployerModalSlice.ts';
import addServiceModalSlice from '../api/slices/addServiceModalSlice.ts';
import editServiceModalSlice from '../api/slices/editServiceModalSlice.ts';
import authSlice from '../api/slices/authSlice.ts';
import editEmployerModalSlice from '../api/slices/editEmployeeModalSlice.ts';
import priceListModalSlice from '../api/slices/priceListModalSlice.ts';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: [
        'mobileMenuReducer',
        'workModalReducer',
        'timeFormReducer',
        'addEmployeeModalReducer',
        'editEmployeeModalReducer',
        'addServiceModalReducer',
        'editServiceModalReducer',
        'priceListModalReducer'
    ],
};

const rootReducer = combineReducers({
    [baseApi.reducerPath]: baseApi.reducer,
    mobileMenuReducer: mobileMenuSlice,
    adminPanelReducer: adminPanelSlice,
    timeFormReducer: timeFormSlice,
    workModalReducer: workModalSlice,
    addEmployeeModalReducer: addEmployerModalSlice,
    editEmployeeModalReducer: editEmployerModalSlice,
    addServiceModalReducer: addServiceModalSlice,
    editServiceModalReducer: editServiceModalSlice,
    priceListModalReducer: priceListModalSlice,
    auth: authSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const setupStore = () => {
    const store = configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: false,
            }).concat(baseApi.middleware),
    });

    const persistor = persistStore(store, {}, () => {});

    setupListeners(store.dispatch);

    return { store, persistor };
};

export const { store, persistor } = setupStore();
export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
