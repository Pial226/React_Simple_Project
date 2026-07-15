import { useState } from 'react';
import './App.css'
import Header from './components/header/Header'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/Bookmarks/BookMarks'


function App() {
   const[bookmarks, setBookmarks]=useState([]);
   const [readingTime , setReadingTime] = useState(0);
   const handleAddToBookmark =blog=>{
      const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);

   };
   const handleMarkAsRead = (id, time) => {
     const timeValue = Number(time) || 0;
     setReadingTime(prevTime => prevTime + timeValue);
     const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
     setBookmarks(remainingBookmarks);
   }


  return (
    
    <>
   <Header></Header>
   <div className='md:flex max-w-7xl mx-auto'>
   <Blogs  handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
   <BookMarks bookmarks={bookmarks} readingTime={readingTime}></BookMarks>
    </div>
    </>
  )
}

export default App
/*Blogs আর BookMarks কে একটা <div className='md:flex'> এর ভেতরে রাখা হয়েছে — মানে মিডিয়াম স্ক্রিনে এই দুইটা পাশাপাশি (flex) দেখাবে।*/
