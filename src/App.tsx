import {FC} from 'react';
import '/src/styles/App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import LoginPage from "./pages/LoginPage.tsx";

const App: FC = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="*" element={<LoginPage/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App;
