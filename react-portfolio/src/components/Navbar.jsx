// export default function Navigation ({links}) {
//     return (
//         <nav className="navbar navbar-expand-lg bg-secondary">
//             <div className="container-fluid">
//                 <div className=" collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                         {links.map((link) => link)}
//                         </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// }

import { Link, useLocation } from "react-router-dom";

function NavBar() {
    const currentPage = useLocation().pathname;

    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link
                    to="/"
                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                >
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to='/About'
                    className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
                > 
                About
                </Link>
            </li>
            <li className="nav-item"> 
                <Link 
                to='/Contact'
                className={currentPage === '/Blog' ? 'nav-link active' : 'nav-link'}
                >
                Contact
                </Link>
            </li>
            <li className="nav-item">
                <Link 
                to='/Portfolio'
                clasName ={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                Portfolio
                </Link>
            </li>
        </ul>

    );
}

export default NavBar;