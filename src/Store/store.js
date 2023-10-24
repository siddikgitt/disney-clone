import userReducer from './User/userSlice'
import {configureStore} from '@reduxjs/toolkit'
import movieReducer from './Movie/movieSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
    }
})
