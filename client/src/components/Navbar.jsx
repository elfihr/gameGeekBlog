import React from 'react'
import { menuLinks } from '../helper/helper'
import { Link } from 'react-router-dom'
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import { red } from '@mui/material/colors';

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import { Button } from '@mui/material';

const Navbar = () => {
    return (
        <nav className='py-[1.5rem] px-[5%] bg-main flex justify-between items-center'>
            <div className='flex gap-2'>
                <VideogameAssetIcon sx={{ color: red[50] }} fontSize="large" />
                <h3 className='text-h4 text-main font-bold'>Logo</h3>
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

                <p className='text-main text-p'>Logout</p>
                <Button variant='contained'>
                    <Link to="/write">Write</Link>
                </Button>
                <Stack direction="row" spacing={2}>
                    <Avatar sx={{ bgcolor: deepOrange[500] }}>F</Avatar>
                </Stack>
            </div>
        </nav>
    )
}

export default Navbar