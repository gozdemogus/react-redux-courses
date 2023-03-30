import { createSlice, nanoid } from '@reduxjs/toolkit';

const courseSlice = createSlice({
    name: 'course',
    initialState: {
        searchTerm: '',
        data: []
    },
    reducers: {
        addCourse(state, action) {
            //debugger
            state.data.push({
                name: action.payload.name,
                description: action.payload.description,
                cost: action.payload.cost,
                id: nanoid()
            })
        },
        removeCourse(state, action) {
            //debugger
            const updatedCourses = state.data.filter((course) => {
                return course.id !== action.payload;
            });
            state.data = updatedCourses;
        }
    }

});

//methodu kullanmak icin disari aciyoruz
export const { addCourse, removeCourse } = courseSlice.actions;

//store.js'de configure ederken bu export edilmis deger kullaniliyor
export const courseReducer = courseSlice.reducer;