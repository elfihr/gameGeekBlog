import React from 'react'
import home from '../assets/home.png'
import { posts } from '../helper/helper'
import { Link } from 'react-router-dom'
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';

const Home = () => {
  return (
    <section style={{ backgroundImage: `url(${home})` }}
      className='min-h-[80vh] bg-center bg-cover bg-fixed max-lg:bg-scroll'>
      <div className='py-12 flex flex-col gap-8  items-center bg-white mx-[18%] border-l-4 border-r-4 border-green-500'>

        <div className='flex items-center'>
          <VideogameAssetIcon fontSize='large' />
          <h3 className='text-h2 font-semibold'>GameBlog</h3>
          <VideogameAssetIcon fontSize='large' />
        </div>
        <p className='px-4'>
        Seja você um gamer veterano, um entusiasta das últimas novidades ou apenas alguém que adora mergulhar em mundos digitais, GameBlog é o lugar certo para você! Aqui, exploramos tudo o que o universo dos games tem a oferecer – desde análises detalhadas dos lançamentos mais quentes até dicas e truques que ajudam você a dominar seus jogos favoritos.
        </p>
        <div className='w-[89%] border-b-4 rounded-lg mt-8 border-slate-800'></div>
        <h2 className='text-h3 font-semibold'>Ultimos Posts</h2>
        {posts.map(post => {
          return (
            <div className='flex flex-col items-center ' key={post.id} >
              <div className='flex  w-[60rem]  p-4 gap-6 items-center'>
                <div className='flex-1'>
                  <img className='w-full rounded-md shadow-2xl' src={post.img} />
                </div>
                <div className='flex-col flex-2 gap-8 items-center'>
                  <Link to={`/post/${post.id}`}><h1 className='text-2xl'>{post.title}</h1></Link>

                  <p>{post.desc}</p>
                  <button className='btn w-40'>Leia Mais</button>
                </div>
              </div>
              <div className='w-[89%] border-b-4 rounded-lg mt-8 border-slate-800'></div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Home