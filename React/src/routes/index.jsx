import { Route, Routes, BrowserRouter } from 'react-router-dom';

import BookList from '../pages/BookList';
import Login from '../pages/Login';
import MenuPage from '../pages/MenuPage';
import AuthorsPage from '../pages/AuthorsPage';
import BooksPage from '../pages/BooksPage';

const Router = () => (
    <BrowserRouter>
        <Routes>    
            <Route path="/books" element={<BookList />} />     
            <Route path="/auth" element={<Login />} />    
            <Route path="/MenuPage" element={<MenuPage />} />
            <Route path="/AuthorsPage" element={<AuthorsPage />} />   
            <Route path="/BooksPage" element={<BooksPage />} />                     
        </Routes>
    </BrowserRouter>
);

export default Router;
