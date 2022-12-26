import react from 'react'
const Mycontext=react.createContext();

export const ContextProvider=Mycontext.Provider;
export const ContextConsumer=Mycontext.Consumer;