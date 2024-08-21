import React, { useState,useRef } from 'react'
import axios from 'axios'
import loginImg from '../assets/login.jpg'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
  const inputRef = useRef(null);
  const [input, setInput] = useState({
    user: "",
    email: "",
    password: ""
  })
  
  const [err,setErr] = useState(null)
  const handleChange = e => {
    setInput(prev => ({...prev,[e.target.name]: e.target.value}))
  }
  const navigate = useNavigate()
  const handleSubmit = async e => {
    e.preventDefault()
    try{
      if (inputRef.current.value.trim() === "") {
        setErr("Campos não podem Ficar em Branco");
      } else {
        const res = await axios.post("/api/auth/register", input)
        navigate("/login")
      }
      
    }catch(err){
      setErr(err.response.data);
    }
   
  }

  return (
    <section style={{ backgroundImage: `url(${loginImg})` }}
      className='min-h-[80vh] flex justify-center items-center bg-cover bg-center' >
      <form method='POST' className='flex flex-col items-center justify-center gap-4 bg-white h-96 w-80 rounded-md'>
        <h2 className='text-h1 font-semibold'>Registrar</h2>
        <input className='bord' placeholder='username*' type='text' name='user' required onChange={handleChange} ref={inputRef}  />
        <input className='bord' placeholder='email*' type='email' name='email' onChange={handleChange} ref={inputRef} />
        <input className='bord' placeholder='password*' type='password' name='password' onChange={handleChange} ref={inputRef} />
        <button className='btn ' onClick={handleSubmit}>Registrar</button>
        <p>Já tem uma conta?<span className='underline cursor-pointer'><Link to='/login'>Login</Link></span></p>
        {err && <p className='text-red-500'>{err}</p>}
      </form>

    </section>
  )
}

export default Register