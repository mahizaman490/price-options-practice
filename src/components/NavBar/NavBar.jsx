import { useState } from "react";
import Link from "../Link/Link";
import { HiMenuAlt2 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
const NavBar = () => {
  const [open,setOpen] = useState(false)
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'Not Found' },
      ];
      
    return (
        <nav className="bg-orange-400 p-6">
         <div className="md:hidden text-3xl" onClick={()=> setOpen(!open)}> 
         {
          open === true ? <AiOutlineClose></AiOutlineClose>
          : <HiMenuAlt2 ></HiMenuAlt2> 
         
         }

         
         
      
          
          </div>
          <ul className={`md:flex absolute duration-1000 px-5 shadow-2xl bg-red-300 rounded-lg ${open ? 'top-16' : '-top-60'}`}>
          {
                routes.map(route => <Link key={route.id} route={route}></Link> )
            }
          </ul>
        </nav>
    );
};

export default NavBar;