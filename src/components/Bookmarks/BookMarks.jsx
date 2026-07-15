import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

function BookMarks({bookmarks ,readingTime}) {
  return (
    <div className='md:w-1/3'>
      <div> 
        <h3 className="text-4xl">Reading Time:{readingTime}</h3>
      </div>
      <h2 className="text-3xl">BookMarks Blogs :{bookmarks.length}</h2>
      {
        bookmarks.map((bookmark ,idx) => <Bookmark key={idx}
          bookmark={bookmark}></Bookmark>)
      }
    </div>
  );
};
BookMarks.propTypes ={
  bookmarks:PropTypes.array ,
  readingTime: PropTypes.number
}
export default BookMarks ;
/*md:w-1/3 = medium screen e width 1/3 hobe*/