import React, { useEffect, useState } from 'react'
import home from '../assets/home.png'
// import { posts } from '../helper/helper'
import { Link, useLocation } from 'react-router-dom'
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import axios from 'axios'

const Home = () => {
  //getPosts from db
  const [posts, setPosts] = useState([]);

  const location = useLocation()
  const cat = useLocation().search

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  return (
    <section style={{ backgroundImage: `url(${home})` }}
      className='min-h-[80vh] bg-center bg-cover bg-fixed max-lg:bg-scroll'>
      <div className='py-12 flex flex-col gap-8  items-center bg-white mx-[18%] border-l-4 border-r-4 border-green-500 max-lg:mx-[10%]'>

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
        <div className='flex flex-col items-center w-[95%]'>
          {posts.map(post => {
            return (
              <div key={post.id}>
                <div className='flex gap-6 items-center max-md:flex-col'>
                  <div className='flex-1'>
                    <img className='w-[20rem] h-[12rem] rounded-md shadow-2xl' src={post.img} />
                  </div>
                  <div className='flex-col flex-2 gap-6 items-center'>
                    <Link to={`/post/${post.id}`}><h1 className='text-h4 hover:text-slate-600 font-semibold'>{post.title}</h1></Link>

                    <p>{post.desc}</p>
                    <button className='btn w-40'>Leia Mais</button>
                  </div>
                </div>
                <div className='w-[89%] border-b-4 rounded-lg m-8 border-slate-800'></div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Home