import { combineReducers, createStore } from "redux";

const initialState = {
    isLoading: false,
};

const rootReducer = combineReducers({
    appState : () => initialState,
});

export const store = createStore(rootReducer);