import React, { createContext, useContext, useState } from 'react';

interface MySuccessMessageContextData {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MySuccessMessageContext = createContext<MySuccessMessageContextData>(
  {} as MySuccessMessageContextData,
);

const MySuccessMessageProvider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MySuccessMessageContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MySuccessMessageContext.Provider>
  );
};

function useSuccessMessage(): MySuccessMessageContextData {
  const context = useContext(MySuccessMessageContext);

  if (!context) {
    throw new Error(
      'useSuccessMessage must be used within an MySuccessMessageProvider',
    );
  }

  return context;
}

export { MySuccessMessageProvider, useSuccessMessage };
