import { Link } from 'react-router-dom';

const Header = () => (
  <header className='bg-blue-900 text-white p-4 shadow-md'>
    <div className='max-w-7xl mx-auto flex justify-between items-center'>
      <Link to='/' className='text-xl font-bold'>
        Transformer Co.
      </Link>
      <nav className='space-x-4'>
        <Link to='/' className='hover:underline'>
          Home
        </Link>
        <Link to='/products' className='hover:underline'>
          Products
        </Link>
        <Link to='/about' className='hover:underline'>
          About
        </Link>
        <Link to='/contact' className='hover:underline'>
          Contact
        </Link>
      </nav>
    </div>
  </header>
);

export default Header;
