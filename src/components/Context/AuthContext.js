import { createContext, useEffect, useReducer } from "react";

const initial_state = {

    user: localStorage.getItem("user") !== null ? 
    JSON.parse(localStorage.getItem("user")) : null,
    loading: false,
    error: null,
    token: localStorage.getItem("token") || null,
    role: localStorage.getItem("role") || null,

};

export const Authcontext = createContext(initial_state) 

const AuthReducer = (state, action)=>{

    switch (action.type) {

        case "LOGIN_START":
        return {
            user: null,
            token: null,
            loading : false,
            role: null,
            error: null
        };

        case "LOGIN_SUCCESS":
        return {
            user: action.payload,
            token: action.token,
            loading : false,
            role : action.role,
            error: null
        };


        case "LOGIN_FAILURE":
        return {
            user: null,
            loading : false,
            error: action.payload
        };

        case "REGISTER_SUCCESS":
        return {
            user: null,
            loading : false,
            error: null
        };

        case "LOGOUT":            
        return {
            user: null,
            token: null,
            loading : false,
            role : null,
            error: null
        };

        default: 
           return state;     
    }

};

export const AuthcontextProvider = ({  children }) => {

const [state, dispatch] = useReducer(AuthReducer, initial_state)


useEffect(() => {

    localStorage.setItem("user", JSON.stringify(state.user));
    localStorage.setItem("token", state.token);
    localStorage.setItem("role", state.role);

}, [state]);


   return (
    <Authcontext.Provider 
    value={{

        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
        
    }}>
        {children}
    </Authcontext.Provider>
   )

}