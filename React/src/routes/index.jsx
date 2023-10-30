import {Route, Routes, BrowserRouter  } from  'react-router-dom';

import BookList from '../pages/BookList'

const  Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/books" element={<BookList />}/>
        </Routes>
    </BrowserRouter>
)

export default Router