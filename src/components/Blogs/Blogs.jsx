
import { useState, useEffect } from 'react';
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types';

function Blogs({handleAddToBookmark ,handleMarkAsRead}) {
  const [blogs, setBlogs]=useState([]);
  useEffect(()=>{
     fetch('/blogs.json')
       .then(response => response.json())
       .then(data => setBlogs(data));
  },[])
  return (
    <div  className='md:w-2/3'>
      <h1 className='text-4xl'>Blogs:{blogs.length}</h1>
      {
        blogs.map((blog) => (
        <Blog
           key={blog.id}
            blog={blog}
            handleAddToBookmark={handleAddToBookmark}
             handleMarkAsRead ={handleMarkAsRead}

           />))}      
    </div>
  );
};
Blogs.propTypes = {
 handleAddToBookmark : PropTypes.func ,
 handleMarkAsRead : PropTypes.func ,
}
export default Blogs ;

/*1.এই ফাইলটা হলো Blogs.jsx — এইটা একটা কম্পোনেন্ট যেটা ব্লগ পোস্টগুলার লিস্ট দেখায়। লাইন বাই লাইন বুঝাই
2. React থেকে দুইটা Hook আনা হয়েছে — useState (স্টেট রাখার জন্য) আর useEffect (সাইড-এফেক্ট, যেমন ডেটা fetch করার জন্য)।
3.Blog নামের আরেকটা কম্পোনেন্ট ইমপোর্ট করা হয়েছে, যেটা একটা একটা করে ব্লগ পোস্ট দেখাবে।
4.কম্পোনেন্ট প্রথমবার লোড হওয়ার সময় (dependency array [] খালি থাকায় শুধু একবার চলবে) /blogs.json ফাইল থেকে ডেটা fetch করা হচ্ছে।
Response আসলে সেটাকে JSON এ কনভার্ট করে blogs স্টেটে বসিয়ে দিচ্ছে setBlogs(data) দিয়ে।
5.একটা হেডিং যেখানে "Blogs:" এর পাশে কতগুলা ব্লগ আছে সেই সংখ্যা (blogs.length) দেখাচ্ছে।
6.blogs.map() দিয়ে blogs array এর প্রতিটা আইটেমের জন্য একটা করে <Blog /> কম্পোনেন্ট রেন্ডার করা হচ্ছে।
7.key={blog.id} — React এর জন্য দরকার, প্রতিটা লিস্ট আইটেম আলাদাভাবে চিনতে।
8.blog={blog} — পুরো ব্লগ অবজেক্টটা props হিসেবে Blog কম্পোনেন্টে পাঠানো হচ্ছে।
Summary:এই কম্পোনেন্টটা /blogs.json থেকে ব্লগের ডেটা লোড করে, স্টেটে রাখে, আর প্রতিটা ব্লগের জন্য Blog কম্পোনেন্ট রেন্ডার করে একটা লিস্ট বানায়
 md:w-2/3 = medium screen e width 2/3 hobe  */