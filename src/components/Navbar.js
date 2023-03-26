import React from 'react';
import { pageLinks as data } from './data';
import { socialLinks } from './data';

const Navbar = () => {
   return (
      <nav className="navbar">
         <div className="nav-center">
            <div className="nav-header">
               <img
                  src="./images/logo.svg"
                  className="nav-logo"
                  alt="backroads"
               />
               <button type="button" className="nav-toggle" id="nav-toggle">
                  <i className="fas fa-bars"></i>
               </button>
            </div>
            {/*<!-- left this comment on purpose --> */}
            <ul className="nav-links" id="nav-links">
               {data.map((link) => {
                  return (
                     <li key={link.id}>
                        <a href={link.href} className="nav-link">
                           {link.text}
                        </a>
                     </li>
                  );
               })}
            </ul>

            <ul className="nav-icons">
               {socialLinks.map((link) => {
                  return (
                     <li key={link.id}>
                        <a
                           href={link.href}
                           target="_blank"
                           rel="noreferrer"
                           className="nav-icon"
                        >
                           <i className={link.icon} />
                        </a>
                     </li>
                  );
               })}
            </ul>
         </div>
      </nav>
   );
};

export default Navbar;
