import { configureStore } from '@reduxjs/toolkit';
// import userReducer from './features/userSlice/userSlice';
import { jobApi } from '../lib/service/jobsService'
// import { bankApi } from '../lib/service/BankService';
// import { userApi } from '../lib/service/UserService';
// import { loanApi } from '../lib/service/LoanService';
// import { companyApi } from '../lib/service/CompanyService';

// import { CreditCardInfoApi } from './service/CardService';

// import {authenticationApi} from '../lib/service/authentication';


export const store = configureStore({
  reducer: {
    // user: userReducer,  // Add the user reducer
    [jobApi.reducerPath]: jobApi.reducer,
    // [bankApi.reducerPath]: bankApi.reducer,
    // [userApi.reducerPath]: userApi.reducer,
    // [loanApi.reducerPath]: loanApi.reducer,
    // [companyApi.reducerPath]: companyApi.reducer,
    // [CreditCardInfoApi.reducerPath]: CreditCardInfoApi.reducer,
    // [authenticationApi.reducerPath]: authenticationApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
        jobApi.middleware,
    //   bankApi.middleware,
    //   userApi.middleware,
    //   loanApi.middleware,
    //   companyApi.middleware,
    //   CreditCardInfoApi.middleware,
    //   authenticationApi.middleware,
    ),
});

export type AppStore = typeof store;export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
