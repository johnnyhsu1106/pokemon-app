import { createContext, useContext } from 'react'
import useViewport from '../hooks/useViewport';

const ViewportContext = createContext(null);

const useViewportContext = () => {
  const viewportContext = useContext(ViewportContext);

  if (viewportContext === null) {
    throw new Error('useViewportContext must be used within ViewportProvider');
  }

  return viewportContext;
}

const ViewportProvider = ({ children }) => {
  const width = useViewport();
  
  const value = {
    isMobile: width <= 980
  };

  return (
    <ViewportContext.Provider value={value}>
      {children}
    </ViewportContext.Provider>
  )
}

export { useViewportContext, ViewportProvider };
