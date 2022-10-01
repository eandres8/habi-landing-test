import { configureStore } from '@reduxjs/toolkit';

import { formSlice } from './modules/form-slice';
import { FormState } from './modules/form.types';

export type AppState = {
    form: FormState;
};

export const store = configureStore({
    reducer: {
        form: formSlice.reducer,
    },
});
