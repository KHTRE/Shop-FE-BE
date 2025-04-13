import { JwtPayload } from 'jwt-decode';
import React, { ReactNode, useCallback, useMemo, useState } from 'react';

export type AppState = {
  user: JwtPayload | undefined;
  isAuth: boolean;
};

type ContextType = {
  appState: AppState,
  setAppState: React.Dispatch<React.SetStateAction<AppState>>,
  
  setUser: (user: JwtPayload | undefined) => void;
  setIsAuth: (isAuth: boolean) => void;
}; 

const emptyState: AppState = {
  user: undefined,
  isAuth: false,
};

export const Context = React.createContext<ContextType>({
  appState: emptyState,
  setAppState: () => {},
  setUser: () => {},
  setIsAuth: () => {},
});

export const ContextProvider = ({ children }: {children: ReactNode}) => {
  const [appState, setAppState] = useState(emptyState);

  const setUser = useCallback((user: JwtPayload | undefined) => {
    console.log(' user: ', user);
    setAppState(prev => ({
      ...prev,
      user, 
    }));
  }, []); 

  const setIsAuth = useCallback((isAuth: boolean) => {
    setAppState(prev => ({
      ...prev,
      isAuth, 
    }));
  }, []); 


  const contextValue = useMemo(() => ({
    appState,
    setUser,
    setIsAuth,
    setAppState,
  }), [appState, setIsAuth, setUser]);

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
};