import {Route, Routes, BrowserRouter  } from  'react-router-dom';

import BookList from '../pages/BookList'
import Login from '../pages/Login';

const  Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/books" element={<BookList />}/>
        </Routes>
        <Routes>
            <Route path="/auth" element={<Login />}/>
        </Routes>
    </BrowserRouter>
)

export default Router