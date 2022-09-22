import React, {createContext, useReducer} from 'react';
import AppReducer from "./AppReducer";

const initialState = {
    posts: [
        {
            id: 1,
            title: "work 1",
            description: "study" 
        },
        {
            id: 2,
            title: "work 2",
            description: "groccery" 
        }
    ]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Action
    const addPost = (post) => {
        dispatch({
            type: "ADD_POST",
            payload: post
        })
    };

    return(
        <GlobalContext.Provider value={{
            posts: state.posts,
            addPost
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

