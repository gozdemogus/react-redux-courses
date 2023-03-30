import { createSlice } from '@reduxjs/toolkit'

const courseSlice = createSlice({
    name: 'course',
    initialState: {
        searchTerm: '',
        data: []
    },
    reducers: {

    }

});


//store.js'de configure ederken bu export edilmis deger kullaniliyor
export const courseReducer = courseSlice.reducer;