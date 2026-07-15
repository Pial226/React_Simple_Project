import profile from '../../assets/images/profile.png'

function Header() {
  return (<header className='flex justify-between items-center p-4 border-b-2 border-gray-200  max-w-7xl mx-auto ' >
      <h1 className=' text-4xl font-bold '>Knowledge Cafa </h1>
      <img src={profile} alt="Profile" />
  </header>
  );
};

export default Header;
 /* flex er kaj holo pasa-pasi , justify between : 2 item (pasa-pasi) , 2 jagai ana   items-center : center e rakha
 p-4 = padding 4 , mx-4 = margin x axis 4  b-2 : border bottom 2
 */