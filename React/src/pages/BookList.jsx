import {useEffect, useState} from 'react'
import axios from  '../config/axios'
import BookTable from '../components/BookTable'
import PropTypes from 'prop-types'
import { BookContext } from '../context/BookContext'

function BookList({owner}) {

  const [bookList, setBookList] = useState([])

  const getTasks = async () => {
    try {
       const res = await axios.get("/libros")
       setBookList(res.data)
    }catch(e){
      console.log(e)
    }
  }

  useEffect( () => {getTasks()}, [])

  return (
    <BookContext.Provider value={{}}>
    {owner}s TaskList
    <BookTable books={bookList}/>
  </BookContext.Provider>
  )
}

BookList.propTypes = {
  owner: PropTypes.string
}

export default BookList