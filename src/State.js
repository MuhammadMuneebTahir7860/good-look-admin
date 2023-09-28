import React, { createContext, useReducer } from "react";

let AppContext = createContext('');

const initialState = {
    openFormModal: false,
    modalUpdateFlag: false,
}
let reducer = (state, action) => {
    switch (action.type) {
        case "setModal": {
            return {
                ...state,
                modalUpdateFlag: action?.payload?.modalUpdateFlag || false,
                openFormModal: action?.payload?.openFormModal,
            }
        }
    }
    return state;
};

function AppContextProvider(props) {
    const fullInitialState = {
        ...initialState,
    }

    let [
        state,
        dispatch
    ] = useReducer(reducer, fullInitialState);
    let value = { state, dispatch };


    return (
        <AppContext.Provider
            value={value}
        >
            {props.children}
        </AppContext.Provider>
    );
}

let AppContextConsumer = AppContext.Consumer;

export {
    AppContext,
    AppContextProvider,
    AppContextConsumer
};
