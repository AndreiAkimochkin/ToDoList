import thunkMiddleware from 'redux-thunk'
import {configureStore} from '@reduxjs/toolkit'
import {rootReducer} from "./reducers";



// объединяя reducer-ы с помощью combineReducers,
// непосредственно создаём store
//export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store


if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', ()=> {
      store.replaceReducer(rootReducer)
    })
}
