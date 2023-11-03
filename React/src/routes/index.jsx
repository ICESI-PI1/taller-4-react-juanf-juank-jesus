import { Route, Routes, BrowserRouter } from 'react-router-dom';

import BookList from '../pages/BookList';
import Login from '../pages/Login';
import MenuPage from '../pages/MenuPage'; // Asegúrate de importar MenuPage

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/*" element={<Login />} />    
            <Route path="/books" element={<BookList />} />     
            <Route path="/auth" element={<Login />} />    
            <Route path="/MenuPage" element={<MenuPage />} />             
        </Routes>
    </BrowserRouter>
);

export default Router;
