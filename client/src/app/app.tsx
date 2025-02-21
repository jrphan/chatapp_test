import router from '../routes';
import { RouterProvider } from 'react-router-dom';
import { GlobalStyles } from '../styles/GlobalStyles';
import { ThemeProviderWrapper } from '../context/ThemeContext';

const App = () => {
  return (
    <ThemeProviderWrapper>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProviderWrapper>
  );
};

export default App;
