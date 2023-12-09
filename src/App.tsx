import {FC} from 'react';
import '/src/styles/App.css';
import {BrowserRouter} from 'react-router-dom'
import AppRouter from "./components/AppRouter.tsx";

const App: FC = () => {
    const shouldShowNavbar = window.location.pathname !== '/login';
    return (
      <BrowserRouter>
          <AppRouter shouldShowNavbar={shouldShowNavbar}/>
      </BrowserRouter>
    )
}

export default App;
