import React from 'react'
import loginImg from '../assets/login.jpg'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <section style={{backgroundImage: `url(${loginImg})`}} 
    className='min-h-[80vh] flex justify-center items-center bg-cover bg-center' >
      <form className='flex flex-col items-center justify-center gap-4 bg-white h-96 w-80 rounded-md'>
        <h2 className='text-h1 font-semibold'>Login</h2>
        <input className='bord' placeholder='username*' type='text' required/>
        <input className='bord' placeholder='password*' type='password' required />
        <button className='btn text-2xl'>Login</button>      
        <p>Não tem uma conta?<span className='underline cursor-pointer'><Link to='/register'>Registrar</Link></span></p>
        <p  className='text-red-500'>Erro</p>
      </form>

    </section>
  )
}

export default Login