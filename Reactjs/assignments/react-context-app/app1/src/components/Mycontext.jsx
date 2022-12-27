import  React  from "react";


const Mycontext=React.createContext();
export const ContextProvider=Mycontext.Provider;
export const ContextConsumer=Mycontext.Consumer;