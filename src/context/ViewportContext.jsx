import { createContext, useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types';


const BREAKPOINT = 980;
const ViewportContext = createContext(null);

const useViewportContext = () => {
  const viewportContext = useContext(ViewportContext);
  
  if (viewportContext === null) {
    throw new Error('useViewportContext must be used within ViewportProvider');
  }

  return viewportContext;
};

const ViewportProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  }, []);

  const value = {
    isMobile: width <= BREAKPOINT
  };

  return (
    <ViewportContext.Provider value={value}>
      {children}
    </ViewportContext.Provider>
  )
};

ViewportProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export { useViewportContext, ViewportProvider };
