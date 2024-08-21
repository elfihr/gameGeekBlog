import React from 'react'
import { posts } from '../helper/helper'
import FeedIcon from '@mui/icons-material/Feed';

const Menu = () => {
    return (
        <section className='flex-2 flex-col gap-10'>

            <div className='flex flex-col items-center mb-[-1rem] gap-2'>
                <div className='flex items-center'>
                    <FeedIcon />
                    <h1 className='text-h4 font-semibold'>Outras Postagens</h1>
                </div>

                <p>Que você pode Gostar <span className='text-red-500 text-p'>♥</span></p>
                <div className='w-[80%] bord'></div>
            </div>

            {posts.map(post => {
                return (
                    <div key={post.id}>
                        <img className='w-full h-40 object-cover' src={post.img} alt={post.title} />
                        <p className='font-semibold text-p'>{post.title}</p>
                        <button className='btn'>Leia Mais</button>
                    </div>
                )

            })}
        </section>
    )
}

export default Menu