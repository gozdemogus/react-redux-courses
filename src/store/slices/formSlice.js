import { createSlice } from '@reduxjs/toolkit'
import { addCourse } from './courseSlice';

const formSlice = createSlice({
    name: 'form',
    initialState: {
        name: '',
        description: '',
        cost: 0
    },
    reducers: {
        changeName(state, action) {
            //gonderilen deger action.payload'dan geliyor
            //console.log("payload:", action.payload);
            state.name = action.payload;
        },
        changeDescription(state, action) {
            state.description = action.payload;
        },
        changeCost(state, action) {
            state.cost = action.payload;
        }
    },
    //ekleme islemi tamamlandıktan sonra formun icini temizlemek icin
    extraReducers(builder){
        //hangi actiondan sonra? addCourse
        builder.addCase(addCourse,(state,action)=> {
            state.name= '';
            state.description= '';
            state.cost= 0
        })
    }
});

//actions icinde
export const { changeName, changeDescription, changeCost } = formSlice.actions;

//store.js'de configure ederken bu export edilmis deger kullaniliyor
export const formReducer = formSlice.reducer;
