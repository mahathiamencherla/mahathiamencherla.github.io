import React,{createContext, useRef} from 'react';

export const Context = createContext();
const ContextProvider = ({ children }) => {
  const aboutme = useRef(null);
  const projects = useRef(null);
  console.log("??")
  return (
    <Context.Provider value={{
      aboutme,
      projects
    }}>
      {children}
    </Context.Provider>
  )
};

export default ContextProvider;