import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Link from 'next/link';
import ActiveLink from '../active-link/ActiveLink';

const navItems = [
    { path: '/about', text: 'About' },
    { path: '/pricing', text: 'Pricing' },
    { path: '/contact', text: 'Contact' }
]

const Navbar = () => {
    return ( 
        <nav className="d-flex justify-content-between p-2 rounded m-1 bg-dark text-light">

            <Link href={'/'} className='d-flex gap-2'>
                <span>Home</span>
                <i className="bi bi-house"></i>
            </Link>

            <div className='d-flex gap-3'>

                { navItems.map((navItem)=>(
                    <ActiveLink key={navItem.path} {...navItem} />
                ))
                }

            </div>

        </nav>
    );
}

export default Navbar;