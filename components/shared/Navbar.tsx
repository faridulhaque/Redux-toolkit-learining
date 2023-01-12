import { useRouter } from 'next/router';
import React from 'react';
import navStyles from  "../../styles/Navbar.module.css"

const Navbar = () => {
    const router = useRouter()
    return (
        <>
        <nav 
        className={navStyles.nav}
        >
            <ul>
                <li onClick={()=>router.push('/getData')}>GET</li>
                <li onClick={()=>router.push('/postData')}>POST</li>
                
            </ul>
            <button onClick={()=>router.push('/')}>Home</button>
        </nav>
        </>
    );
};

export default Navbar;