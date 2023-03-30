import {createSlice} from '@reduxjs/toolkit'

const formSlice = createSlice({
    name: 'form',
    initialState: {
        name: '',
        description: '',
        cost: 0
    },
    reducers:{

    }

});


//store.js'de configure ederken bu export edilmis deger kullaniliyor
export const formReducer = formSlice.reducer;