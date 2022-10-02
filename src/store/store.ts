import { configureStore } from '@reduxjs/toolkit';

import { loadState, saveState } from '../utils/local-storage';
import { formSlice } from './modules/form-slice';

const preloadedState = loadState();

export const store = configureStore({
    preloadedState,
    reducer: {
        form: formSlice.reducer,
    },
});

store.subscribe(() => {
    saveState({
        form: store.getState().form,
    });
});
