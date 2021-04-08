import React,{createContext, useRef, useState} from 'react';

export const Context = createContext();
const ContextProvider = ({ children }) => {
  const aboutme = useRef(null);
  const projects = useRef(null);
  const workex = useRef(null);
  const skills = useRef(null);
  const interests = useRef(null);
  const volunteering = useRef(null);
  const contact = useRef(null);

  const [ activePage, setActivePage ] = useState('home')
  return (
    <Context.Provider value={{
      aboutme,
      workex,
      projects,
      skills,
      interests,
      volunteering,
      contact,
      activePage, setActivePage
    }}>
      {children}
    </Context.Provider>
  )
};

export default ContextProvider;