import React, { useContext } from 'react'
import { menuLinks } from '../helper/helper'
import { Link } from 'react-router-dom'
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import { red } from '@mui/material/colors';
import { Button } from '@mui/material';
import { AuthContext } from '../context/authContext';

const Navbar = () => {
    const { currentUser, logout } = useContext(AuthContext)

    return (
        <nav className='py-[1.5rem] px-[5%] bg-main flex justify-between items-center'>
            <div className='flex gap-2'>
                <VideogameAssetIcon sx={{ color: red[50] }} fontSize="large" />
                <h3 className='text-h4 text-main font-bold'>GameBlog</h3>
            </div>
            <div className='flex gap-4 items-center'>
                {menuLinks.map((link, index) => {
                    return (
                        <ul key={index}>
                            <li>
                                <Link className='text-main text-p font-semibold hover:text-hover duration-300' to={link.href}>{link.name}</Link>

                            </li>
                        </ul>
                    )
                })}

                {currentUser ? (
                    <div className='flex gap-2 items-center'>
                        <Link className='text-main cursor-pointer hover:text-hover font-semibold' onClick={logout} to="/">Logout</Link>
                        <Button variant='contained'>
                            <Link to="/write">Write</Link>
                        </Button>
                    </div>

                ) :
                    (<Button variant="contained">
                        <Link to="/login">Login</Link>
                    </Button>)}

                <span className={currentUser ? "flex items-center justify-center text-main bg-sky-500 p-[1.2rem] w-8 h-8 rounded-full font-semibold" : ""}>{(currentUser?.user.substring(0, 2))}</span>
            </div>
        </nav>
    )
}

export default Navbar