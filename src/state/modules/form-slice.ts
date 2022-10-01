import { createSlice } from '@reduxjs/toolkit';

import { FormState } from './form-state.types';

const initialState: FormState = {
    data: {},
    currentStep: 0,
    maxStep: 0,
};

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setFormValue: ( state, { payload } ) => {
            state.data[payload.key] = payload.value; 

            return state;
        },
    },
});

export const { setFormValue } = formSlice.actions;
