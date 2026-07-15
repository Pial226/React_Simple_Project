import PropTypes from 'prop-types';
import { BsBookmarks} from 'react-icons/bs';

function Blog({blog ,handleAddToBookmark ,  handleMarkAsRead}) {
  
  const{title ,cover ,author ,author_img , posted_date , reading_time , hashtags}= blog ;
  return ( <div className='mb-20 space-y-4'>
     
     <img className='w-full mb-8' src={cover} alt={` Cover  Picture of the title ${title}`}/> 
<div className='flex justify-between mb-4 '>

<div className='flex' >
  <img className="w-14 rounded-full" src={author_img} alt="" />
  <div>
    <h3 className='text-2xl'>{author}</h3>
    <p>{posted_date}</p>


  </div>


</div>
<div>
 <span>{reading_time} min read</span>
 <button
  onClick={()=>handleAddToBookmark(blog)}
 className='ml-2 text-2xl text-red-600 '> <BsBookmarks /></button>
</div>

</div>
  
        <h2 className='text-4xl'>{title}</h2>
    <p>
      {
        hashtags.map((hash ,idx) => <span key={idx}><a  href="">#{hash}</a></span>)

      }
    </p>
   <button type="button" onClick={() => handleMarkAsRead(blog.id, Number(reading_time) || 0)}
   className='text-purple-800 font-bold underline'>Mark As Read</button>

  </div>

  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired ,
  handleAddToBookmark : PropTypes.func ,
  handleMarkAsRead: PropTypes.func,

}
export default Blog

/*এই ফাইলটা Blog.jsx — একটা একটা ব্লগ কার্ড (image + title) দেখানোর জন্য কম্পোনেন্ট
1.prop-types লাইব্রেরি ইমপোর্ট করা হয়েছে, যেটা দিয়ে props এর টাইপ চেক করা যায় (ডেভেলপমেন্টে ভুল props পাঠালে warning দেয়)
2.Blog কম্পোনেন্ট blog নামের একটা prop রিসিভ করছে (parent থেকে, মানে আগের Blogs.jsx থেকে blog={blog} আকারে পাঠানো হয়েছিল)।
3.সেই blog অবজেক্ট থেকে title আর cover বের করে নেওয়া হচ্ছে
4.একটা div এর ভেতরে ছবি (cover URL থেকে) আর টাইটেল (h2 হেডিং এ) দেখানো হচ্ছে।
*/