import { createSlice } from '@reduxjs/toolkit'

export const typeSlice = createSlice({
    name: 'type',
    initialState: {
        item: [{ text: 'merhaba', check: null }, { text: 'kitap', check: null }, { text: 'kalem', check: null }, { text: 'uçak', check: null }, { text: 'tatil', check: null }, { text: 'güneş', check: null }, { text: 'ayak', check: null }, { text: 'telefon', check: null }, { text: 'bisiklet', check: null }, { text: 'yemek', check: null }, { text: 'deniz', check: null }, { text: 'park', check: null }, { text: 'bulut', check: null }, { text: 'bal', check: null }, { text: 'müzik', check: null }, { text: 'deneme', check: null }, { text: 'joker', check: null }, { text: 'ekmek', check: null }, { text: 'bulut', check: null }, { text: 'araba', check: null }],
        inputİd: 0,
        result: false,
        static: {
            dogru: 0,
            yanlis: 0,
        }
    },
    reducers: {
        checkİtem: (state, action) => {
            const itemV = state.item[state.inputİd]
            if (itemV.text.trim() === action.payload) {
                itemV.check = true;
                state.static.dogru += 1;
            } else {
                itemV.check = false;
                state.static.yanlis += 1;
            }
        },
        idPlus: (state, action) => {
            state.inputİd += 1;

        },
        resultUpdate: (state, action) => {
            state.result = true;
        }
    }
})

export const { checkİtem, idPlus, resultUpdate } = typeSlice.actions;

export default typeSlice.reducer;